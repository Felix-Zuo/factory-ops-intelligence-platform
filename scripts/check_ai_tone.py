from __future__ import annotations

from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
SCAN_GLOBS = [
    "*.md",
    "docs/**/*.md",
    "docs/showcase.html",
    ".github/ISSUE_TEMPLATE/*.md",
    "agent_workspace/**/*.md",
    "agent_workspace/**/*.yaml",
    "apps/web-dashboard/src/**/*.tsx",
    "apps/web-dashboard/src/**/*.ts",
]

FORBIDDEN = [
    "根据你的要求",
    "以下是",
    "不说废话",
    "直接给你",
    "我将为你",
    "本系统旨在赋能",
    "赋能",
    "革命性",
    "颠覆",
    "酷炫",
    "高大上",
    "一键智能",
    "AI魔法",
    "AI 魔法",
    "未来工厂",
    "未来无限可能",
    "全面提升",
    "完美解决",
    "无需人工干预",
    "next-gen",
    "revolutionary",
    "game-changing",
    "cutting-edge",
    "state-of-the-art",
    "one-click",
    "fully automated",
    "no human needed",
    "career showcase",
    "job application",
    "personal branding",
    "resume snippets",
    "resume-ready",
]

EXCLUDED_DIRS = {
    ".git",
    ".pytest_cache",
    "node_modules",
    "dist",
    "__pycache__",
}


def iter_files() -> list[Path]:
    files: list[Path] = []
    for pattern in SCAN_GLOBS:
        files.extend(ROOT.glob(pattern))
    unique_files = sorted({path for path in files if path.is_file()})
    return [
        path
        for path in unique_files
        if not any(part in EXCLUDED_DIRS for part in path.relative_to(ROOT).parts)
    ]


def main() -> None:
    warnings: list[str] = []
    for path in iter_files():
        text = path.read_text(encoding="utf-8", errors="ignore")
        for phrase in FORBIDDEN:
            for match in re.finditer(re.escape(phrase), text, re.IGNORECASE):
                line = text[: match.start()].count("\n") + 1
                warnings.append(f"{path.relative_to(ROOT)}:{line}: {phrase}")
    log_path = ROOT / "SELF_REPAIR_LOG.md"
    if warnings:
        with log_path.open("a", encoding="utf-8") as handle:
            handle.write("\n## AI-tone scan warnings\n\n")
            for item in warnings:
                handle.write(f"- {item}\n")
        print("AI-tone warnings found:")
        for item in warnings:
            print(f"- {item}")
        raise SystemExit(1)
    print("AI-tone scan passed")


if __name__ == "__main__":
    main()
