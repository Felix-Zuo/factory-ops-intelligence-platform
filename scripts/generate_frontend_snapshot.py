from __future__ import annotations

from pathlib import Path
import json
import sys


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "apps" / "api-server"))

from factory_ops_api import domain  # noqa: E402


TARGET = ROOT / "apps" / "web-dashboard" / "src" / "demoSnapshot.ts"


def main() -> None:
    snapshot = domain.demo_snapshot()
    text = json.dumps(snapshot, ensure_ascii=False, indent=2)
    TARGET.write_text(f"const demoSnapshot = {text} as const;\n\nexport default demoSnapshot;\n", encoding="utf-8")
    print(f"Generated frontend snapshot: {TARGET}")


if __name__ == "__main__":
    main()
