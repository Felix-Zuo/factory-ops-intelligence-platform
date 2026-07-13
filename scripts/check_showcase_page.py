from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import urldefrag


ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
SHOWCASE = DOCS / "showcase.html"
README = ROOT / "README.md"


class LocalReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.references: list[tuple[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        for name, value in attrs:
            if name in {"href", "src"} and value:
                self.references.append((tag, value))


def is_external(reference: str) -> bool:
    return reference.startswith(("http://", "https://", "mailto:", "tel:", "#"))


def normalized_local_path(reference: str) -> Path | None:
    if is_external(reference):
        return None
    clean_reference = urldefrag(reference)[0]
    if not clean_reference:
        return None
    return (DOCS / clean_reference).resolve()


def css_urls(text: str) -> list[str]:
    return [match.group(1).strip("\"'") for match in re.finditer(r"url\(([^)]+)\)", text)]


def css_block(text: str, selector: str) -> str:
    match = re.search(rf"{re.escape(selector)}\s*\{{(?P<body>.*?)\}}", text, re.DOTALL)
    return match.group("body") if match else ""


def main() -> None:
    errors: list[str] = []
    for path in [
        DOCS / ".nojekyll",
        DOCS / "index.html",
        SHOWCASE,
        DOCS / "assets" / "hero-control-tower.png",
        DOCS / "assets" / "product-system-map.png",
        DOCS / "assets" / "social-preview.jpg",
        DOCS / "assets" / "social-preview.html",
        DOCS / "assets" / "screenshots" / "overview.png",
    ]:
        if not path.exists():
            errors.append(f"Missing showcase asset: {path.relative_to(ROOT)}")

    showcase_text = SHOWCASE.read_text(encoding="utf-8")
    readme_text = README.read_text(encoding="utf-8")

    parser = LocalReferenceParser()
    parser.feed(showcase_text)
    references = parser.references + [("css", reference) for reference in css_urls(showcase_text)]
    for tag, reference in references:
        local_path = normalized_local_path(reference)
        if local_path is None:
            continue
        try:
            local_path.relative_to(DOCS.resolve())
        except ValueError:
            errors.append(f"{tag} reference escapes docs/: {reference}")
            continue
        if not local_path.exists():
            errors.append(f"Missing {tag} reference target: {reference}")

    if "../" in showcase_text:
        errors.append("showcase.html must not use parent-directory links; Pages serves docs/ as root")
    if 'url("assets/hero-control-tower.png")' not in showcase_text:
        errors.append("showcase hero must use assets/hero-control-tower.png")
    if re.search(r"url\([\"']?assets/product-system-map\.png[\"']?\)", showcase_text):
        errors.append("product-system-map.png must not be used as the showcase hero background")
    if 'class="shot-grid"' in showcase_text:
        errors.append("showcase must not restore the repetitive screenshot grid")
    control_title_css = css_block(showcase_text, ".control-title")
    status_css = css_block(showcase_text, ".status")
    control_grid_css = css_block(showcase_text, ".control-grid")
    if "white-space: nowrap;" not in control_title_css:
        errors.append("release control titles must keep the nowrap guard")
    if "white-space: nowrap;" not in status_css or "flex: 0 0 auto;" not in status_css:
        errors.append("release status pills must keep the fixed-width guard")
    if "repeat(2" not in control_grid_css:
        errors.append("release controls must keep the two-column desktop layout")
    if "https://felix-zuo.github.io/factory-ops-intelligence-platform/showcase.html" not in readme_text:
        errors.append("README must link to the rendered GitHub Pages showcase")
    if "Showcase page: [docs/showcase.html](docs/showcase.html)" in readme_text:
        errors.append("README must not send reviewers to the source-code HTML path")
    for required in [
        "OPS INTELLIGENCE / v0.3.3",
        "data-mode=\"tower\"",
        "data-mode=\"materials\"",
        "role=\"tab\"",
        "tabindex=\"-1\"",
        "data-control=\"material\"",
        "data-control=\"approval\"",
        "aria-pressed=\"true\"",
        "class=\"control-title\"",
        "class=\"release-inspector\"",
        "data-evidence=\"material\"",
        "data-evidence=\"capacity\"",
        "class=\"evidence-ledger\"",
        "data-section-link",
        "class=\"scroll-progress\"",
        "const productModes",
        "const releaseControls",
        "const evidenceItems",
        "bindArrowNavigation",
        "prefers-reduced-motion",
        "assets/social-preview.jpg",
    ]:
        if required not in showcase_text:
            errors.append(f"Missing interactive showcase marker: {required}")
    if "RELEASE_NOTES_v0.3.3.md" not in showcase_text or "RELEASE_NOTES_v0.3.3.md" not in readme_text:
        errors.append("v0.3.3 release notes must be linked from showcase and README")

    if errors:
        print("Showcase page check failed:")
        for item in errors:
            print(f"- {item}")
        raise SystemExit(1)

    print("Showcase page check passed")
    print(f"Checked references: {len(references)}")


if __name__ == "__main__":
    main()
