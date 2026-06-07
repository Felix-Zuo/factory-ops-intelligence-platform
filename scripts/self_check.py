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
    "apps/api-server/factory_ops_api/domain.py",
    "apps/web-dashboard/src/App.tsx",
    "apps/web-dashboard/src/demoSnapshot.ts",
    "demo_data/materials.json",
    "demo_data/bom.json",
    "demo_data/inventory.json",
    "demo_data/adapters.json",
    "demo_data/machine_events.json",
    "agent_workspace/workflows/order_to_material_risk.yaml",
    "CURRENT_GAP_AUDIT.md",
    "PATCH_PLAN.md",
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
    counts = {}
    for file_name in ["materials.json", "customer_orders.json", "production_lines.json", "adapters.json"]:
        counts[file_name] = len(json.loads((ROOT / "demo_data" / file_name).read_text(encoding="utf-8")))
    count_errors = []
    if counts["materials.json"] < 20:
        count_errors.append("materials.json must contain at least 20 demo materials")
    if counts["customer_orders.json"] < 8:
        count_errors.append("customer_orders.json must contain at least 8 demo orders")
    if counts["production_lines.json"] < 2:
        count_errors.append("production_lines.json must contain at least 2 production lines")
    if counts["adapters.json"] < 6:
        count_errors.append("adapters.json must contain at least 6 adapter contracts")
    hygiene_errors = []
    for relative in ["apps/web-dashboard/dist", "apps/web-dashboard/node_modules"]:
        if (ROOT / relative).exists():
            hygiene_errors.append(f"runtime directory exists locally: {relative}")
    if missing or json_errors or count_errors:
        if missing:
            print("Missing required paths:")
            for item in missing:
                print(f"- {item}")
        if json_errors:
            print("JSON errors:")
            for item in json_errors:
                print(f"- {item}")
        if count_errors:
            print("Demo data count errors:")
            for item in count_errors:
                print(f"- {item}")
        raise SystemExit(1)
    if hygiene_errors:
        print("Repo hygiene watch items:")
        for item in hygiene_errors:
            print(f"- {item}")
    print("Self check passed")
    print(f"Required paths: {len(REQUIRED_PATHS)}")
    print(f"Demo JSON files: {len(json_files)}")
    print(f"Demo data counts: {counts}")


if __name__ == "__main__":
    main()
