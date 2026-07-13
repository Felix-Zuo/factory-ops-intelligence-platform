from __future__ import annotations

from pathlib import Path
import json
import re


ROOT = Path(__file__).resolve().parents[1]
README = ROOT / "README.md"
SHOWCASE = ROOT / "docs" / "showcase.html"
VERSION = "0.3.3"
PATH_PREFIXES = (
    "agent_workspace/",
    "apps/",
    "database/",
    "demo_data/",
    "docs/",
    "packages/",
    "scripts/",
    "tests/",
)


def jpeg_size(path: Path) -> tuple[int, int]:
    data = path.read_bytes()
    if data[:2] != b"\xff\xd8":
        raise ValueError(f"Not a JPEG: {path.relative_to(ROOT)}")
    offset = 2
    start_of_frame = {0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF}
    while offset + 8 < len(data):
        if data[offset] != 0xFF:
            offset += 1
            continue
        marker = data[offset + 1]
        if marker in start_of_frame:
            height = int.from_bytes(data[offset + 5 : offset + 7], "big")
            width = int.from_bytes(data[offset + 7 : offset + 9], "big")
            return width, height
        if marker in {0xD8, 0xD9}:
            offset += 2
            continue
        segment_length = int.from_bytes(data[offset + 2 : offset + 4], "big")
        if segment_length < 2:
            break
        offset += 2 + segment_length
    raise ValueError(f"JPEG dimensions not found: {path.relative_to(ROOT)}")


def local_markdown_targets(text: str) -> list[str]:
    return [match.group(1).split(" ", 1)[0].strip("<>") for match in re.finditer(r"\[[^\]]*\]\(([^)]+)\)", text)]


def documented_paths(text: str) -> list[str]:
    paths: list[str] = []
    for token in re.findall(r"`([^`\n]+)`", text):
        candidate = token.strip().rstrip(".,;:")
        if candidate.startswith(PATH_PREFIXES) and " / " not in candidate:
            paths.append(candidate)
    return sorted(set(paths))


def main() -> None:
    errors: list[str] = []
    readme_text = README.read_text(encoding="utf-8")
    showcase_text = SHOWCASE.read_text(encoding="utf-8")

    for target in local_markdown_targets(readme_text):
        if target.startswith(("http://", "https://", "#", "mailto:")):
            continue
        clean = target.split("#", 1)[0]
        if clean and not (ROOT / clean).exists():
            errors.append(f"README link target does not exist: {target}")

    for documented in documented_paths(readme_text):
        if "*" in documented:
            if not list(ROOT.glob(documented)):
                errors.append(f"README documented path does not match files: {documented}")
        elif not (ROOT / documented).exists():
            errors.append(f"README documented path does not exist: {documented}")

    for stale in [
        "packages/engines/release_gate.py",
        "packages/engines/material_trace.py",
        "packages/engines/line_simulation.py",
        "tests/test_line_simulation.py",
        "tests/test_agent_tools.py",
    ]:
        if stale in readme_text:
            errors.append(f"README must not cite missing implementation: {stale}")

    package = json.loads((ROOT / "package.json").read_text(encoding="utf-8"))
    web_package = json.loads((ROOT / "apps" / "web-dashboard" / "package.json").read_text(encoding="utf-8"))
    if package.get("version") != VERSION or web_package.get("version") != VERSION:
        errors.append(f"Package versions must be {VERSION}")
    if f'version="{VERSION}"' not in (ROOT / "apps" / "api-server" / "factory_ops_api" / "main.py").read_text(encoding="utf-8").replace(" ", ""):
        errors.append(f"FastAPI version must be {VERSION}")
    if f"v{VERSION}" not in readme_text or f"v{VERSION}" not in showcase_text:
        errors.append(f"README and showcase must display v{VERSION}")
    if not (ROOT / f"RELEASE_NOTES_v{VERSION}.md").exists():
        errors.append(f"Missing release notes for v{VERSION}")

    pages_workflow = (ROOT / ".github" / "workflows" / "pages.yml").read_text(encoding="utf-8")
    for action in [
        "actions/checkout@v7",
        "actions/configure-pages@v6",
        "actions/upload-pages-artifact@v5",
        "actions/deploy-pages@v5",
    ]:
        if action not in pages_workflow:
            errors.append(f"Pages workflow must use current action: {action}")

    social_preview = ROOT / "docs" / "assets" / "social-preview.jpg"
    try:
        if jpeg_size(social_preview) != (1280, 640):
            errors.append("Social preview must be exactly 1280x640")
    except (OSError, ValueError) as exc:
        errors.append(str(exc))

    for marker in [
        "docs/assets/hero-control-tower.png",
        "apps/api-server/factory_ops_api/domain.py",
        "tests/test_factory_ops.py",
        "og:image",
        "assets/social-preview.jpg",
    ]:
        if marker not in readme_text and marker not in showcase_text:
            errors.append(f"Missing public-surface marker: {marker}")

    if errors:
        print("Public surface check failed:")
        for error in errors:
            print(f"- {error}")
        raise SystemExit(1)

    print("Public surface check passed")
    print(f"Checked README paths: {len(documented_paths(readme_text))}")


if __name__ == "__main__":
    main()
