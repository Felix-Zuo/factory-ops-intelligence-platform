from __future__ import annotations

from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
SCAN_GLOBS = [
    "README.md",
    "PORTFOLIO_CASE_STUDY.md",
    "ARCHITECTURE.md",
    "DATA_CONTRACT.md",
    "docs/showcase.html",
    "apps/web-dashboard/src/**/*.tsx",
    "apps/web-dashboard/src/**/*.ts",
]

FORBIDDEN = [
    "根据你的要求",
    "以下是",
    "直接给你",
    "以下是最直接的答案",
    "不说废话",
    "我将为你",
    "本系统旨在赋能",
    "赋能",
    "全面提升",
    "完美解决",
    "无需人工干预",
    "按照提示词",
    "本页面根据提示词生成",
    "一键",
    "革命性",
    "颠覆式",
    "智能化赋能",
    "未来无限可能",
    "酷炫",
    "高大上",
    "AI魔法",
    "渐变毛玻璃",
    "AI Magic",
    "next-gen",
    "revolutionary",
    "game-changing",
    "cutting-edge",
    "state-of-the-art",
    "one-click",
    "fully automated",
    "no human needed",
]


def iter_files() -> list[Path]:
    files: list[Path] = []
    for pattern in SCAN_GLOBS:
        files.extend(ROOT.glob(pattern))
    return sorted({path for path in files if path.is_file()})


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
