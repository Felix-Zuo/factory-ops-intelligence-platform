from __future__ import annotations

from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "apps" / "api-server"))

from factory_ops_api import domain  # noqa: E402


def main() -> None:
    data = domain.load_factory_data()
    risk = domain.calculate_inventory_risk("FG-6205-2RS", 12000, data)
    notice = domain.generate_production_notice("FG-6205-2RS", 12000, "SO-2026-0607-01", data)
    simulation = domain.run_line_simulation("LINE-BRG-6205-A", 24, data)
    answer = domain.answer_factory_question("Can FG-6205-2RS be released for production?", data)
    checks = {
        "materials": len(data.materials) >= 20,
        "orders": len(data.customer_orders) >= 8,
        "risk_material_rows": len(risk["materials"]) >= 7,
        "notice_html": "<table>" in notice["html_preview"],
        "simulation_bottleneck": bool(simulation["bottleneck_machine"]),
        "agent_trace": bool(answer["trace"]["tool_calls"]),
        "agent_source_refs": bool(answer["trace"]["source_refs"]),
    }
    failed = [name for name, passed in checks.items() if not passed]
    if failed:
        raise SystemExit(f"Smoke demo failed: {failed}")
    print("Smoke demo passed")
    print(f"Inventory status: {risk['overall_status']}")
    print(f"Notice: {notice['notice_id']}")
    print(f"Bottleneck: {simulation['bottleneck_machine']}")
    print(f"Agent tools: {', '.join(answer['trace']['tools'])}")


if __name__ == "__main__":
    main()
