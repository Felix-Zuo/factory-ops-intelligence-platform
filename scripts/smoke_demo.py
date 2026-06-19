from __future__ import annotations

from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "apps" / "api-server"))

from factory_ops_api import domain  # noqa: E402


def main() -> None:
    data = domain.load_factory_data()
    risk = domain.calculate_inventory_risk(domain.DEFAULT_PRODUCT_ID, domain.DEFAULT_ORDER_QTY, data)
    notice = domain.generate_production_notice(domain.DEFAULT_PRODUCT_ID, domain.DEFAULT_ORDER_QTY, domain.DEFAULT_ORDER_ID, data)
    simulation = domain.run_line_simulation(domain.DEFAULT_LINE_ID, 24, data)
    overview = domain.build_control_tower_overview(data)
    forecast = domain.forecast_demand(horizon_weeks=4, data=data)
    policy = domain.search_policy_signals(data=data)
    brief = domain.generate_decision_brief("Review S&OP risk", data)
    answer = domain.answer_factory_question(f"Can {domain.DEFAULT_PRODUCT_ID} be released for production?", data)
    checks = {
        "materials": len(data.materials) >= 20,
        "orders": len(data.customer_orders) >= 8,
        "demand_history": len(data.demand_history) >= 32,
        "risk_material_rows": len(risk["materials"]) >= 7,
        "control_tower": overview["kpis"]["open_order_value"] > 0,
        "forecast": forecast["summary"]["total_forecast_qty"] > 0,
        "policy_signals": policy["summary"]["signal_count"] >= 1,
        "decision_brief": bool(brief["actions"]),
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
    print(f"Operating score: {overview['operating_score']}/100")
    print(f"4w forecast: {forecast['summary']['total_forecast_qty']} units")
    print(f"Policy signals: {policy['summary']['signal_count']}")
    print(f"Notice: {notice['notice_id']}")
    print(f"Bottleneck: {simulation['bottleneck_machine']}")
    print(f"Agent tools: {', '.join(answer['trace']['tools'])}")


if __name__ == "__main__":
    main()
