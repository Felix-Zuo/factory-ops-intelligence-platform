from __future__ import annotations

from pathlib import Path
import json
import sys


ROOT = Path(__file__).resolve().parents[1]
REQUIRED_PATHS = [
    "README.md",
    "ARCHITECTURE.md",
    "DATA_CONTRACT.md",
    "AGENTS.md",
    "RUNBOOK.md",
    "apps/api-server/factory_ops_api/main.py",
    "apps/web-dashboard/src/App.tsx",
    "demo_data/materials.json",
    "demo_data/bom.json",
    "demo_data/inventory.json",
    "agent_workspace/workflows/order_to_material_risk.yaml",
]


def check_json(path: Path) -> bool:
    with path.open("r", encoding="utf-8") as handle:
        json.load(handle)
    return True


def main() -> None:
    missing = [item for item in REQUIRED_PATHS if not (ROOT / item).exists()]
    json_files = list((ROOT / "demo_data").glob("*.json"))
    json_errors = []
    for path in json_files:
        try:
            check_json(path)
        except Exception as exc:  # pragma: no cover - diagnostic path
            json_errors.append(f"{path.name}: {exc}")
    if missing or json_errors:
        if missing:
            print("Missing required paths:")
            for item in missing:
                print(f"- {item}")
        if json_errors:
            print("JSON errors:")
            for item in json_errors:
                print(f"- {item}")
        raise SystemExit(1)
    print("Self check passed")
    print(f"Required paths: {len(REQUIRED_PATHS)}")
    print(f"Demo JSON files: {len(json_files)}")


if __name__ == "__main__":
    main()

