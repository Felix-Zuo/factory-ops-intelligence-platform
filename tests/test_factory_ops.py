from __future__ import annotations

from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "apps" / "api-server"))

from factory_ops_api import domain  # noqa: E402
from factory_ops_api import main as api  # noqa: E402


def test_inventory_risk_keeps_source_trace() -> None:
    risk = domain.calculate_inventory_risk(domain.DEFAULT_PRODUCT_ID, domain.DEFAULT_ORDER_QTY)
    assert risk["overall_status"] in {"covered", "watch", "critical"}
    assert len(risk["materials"]) >= 7
    assert risk["source_refs"]
    assert all(row["source_trace"]["source_file"] for row in risk["materials"])


def test_demo_data_schema_has_demo_depth() -> None:
    data = domain.load_factory_data()
    assert len(data.materials) >= 20
    assert len(data.customer_orders) >= 8
    assert len(data.production_lines) >= 2
    assert len(data.machine_events) >= 12
    assert len(data.demand_history) >= 32
    assert len(data.policy_signals) >= 4
    assert len(data.internal_issues) >= 5
    assert len(data.scenario_profiles) >= 4


def test_bom_explosion_uses_order_quantity() -> None:
    exploded = domain.explode_bom(domain.DEFAULT_PRODUCT_ID, domain.DEFAULT_ORDER_QTY)
    sensor = next(row for row in exploded["components"] if row["material_id"] == "MAT-SENSOR-IO")
    assert sensor["required_qty"] == 2400


def test_notice_generation_contains_material_gate() -> None:
    notice = domain.generate_production_notice(domain.DEFAULT_PRODUCT_ID, domain.DEFAULT_ORDER_QTY, domain.DEFAULT_ORDER_ID)
    assert notice["notice_id"].startswith("PN-")
    assert notice["template_version"] == domain.NOTICE_TEMPLATE_VERSION
    assert "Release Notice" in notice["html_preview"]


def test_simulation_detects_bottleneck() -> None:
    report = domain.run_line_simulation(domain.DEFAULT_LINE_ID, 24)
    assert report["good_output"] > 0
    assert report["bottleneck_machine"] in {row["machine_id"] for row in report["machine_reports"]}


def test_agent_answer_records_trace() -> None:
    result = domain.answer_factory_question("Where is the line bottleneck?")
    assert "Result:" in result["answer"]
    assert result["trace"]["workflow"] == "line_simulation_to_report"
    assert "run_line_simulation" in result["trace"]["tools"]
    assert result["trace"]["tool_calls"]


def test_agent_tool_registry_has_required_tools() -> None:
    names = {tool["name"] for tool in domain.agent_tools()}
    assert {
        "search_material",
        "get_product_bom",
        "explode_bom",
        "calculate_inventory_risk",
        "check_order_material_coverage",
        "generate_production_notice",
        "run_line_simulation",
        "get_simulation_report",
        "detect_bottleneck",
        "build_control_tower_overview",
        "forecast_demand",
        "search_policy_signals",
        "generate_decision_brief",
        "generate_daily_report",
        "answer_factory_question",
    }.issubset(names)


def test_product_material_trace_links_chain() -> None:
    trace = domain.product_material_trace(domain.DEFAULT_PRODUCT_ID, domain.DEFAULT_ORDER_QTY)
    assert trace["trace_summary"][0]["stage"] == "Product"
    assert trace["material_chains"]
    assert {"bom", "stock", "inbound", "supplier", "source_refs"}.issubset(trace["material_chains"][0].keys())


def test_control_tower_forecast_policy_and_decision_brief() -> None:
    overview = domain.build_control_tower_overview()
    assert overview["operating_score"] > 0
    assert overview["kpis"]["open_order_value"] > 0
    assert overview["product_health"]
    assert any(row["status"] in {"watch", "critical", "healthy"} for row in overview["product_health"])

    forecast = domain.forecast_demand(horizon_weeks=4)
    assert forecast["summary"]["total_forecast_qty"] > 0
    assert forecast["series"][0]["timesfm_ready"]["status"] == "adapter_stub"
    assert len(forecast["series"][0]["forecast"]) == 4

    policy = domain.search_policy_signals("customs")
    assert policy["summary"]["signal_count"] >= 1
    assert all(row["source_url"].startswith("https://") for row in policy["signals"])
    assert all("affected_products" in row for row in policy["signals"])

    brief = domain.generate_decision_brief("How should we review demand and policy risk?")
    assert "Operating score" in brief["executive_answer"]
    assert brief["actions"]
    assert brief["model_boundary"]["safe_default"] == "deterministic_tools_first"

    release_gate = domain.build_release_gate(domain.DEFAULT_ORDER_ID)
    assert release_gate["decision"] in {"blocked", "release_with_controls", "release"}
    assert len(release_gate["checks"]) >= 6
    assert release_gate["summary"]["pending"] >= 1

    profiles = domain.list_scenario_profiles()
    assert any(profile["profile_id"] == "warehouse-fulfillment" for profile in profiles)


def test_api_smoke_routes_return_expected_payloads() -> None:
    assert api.health()["status"] == "ok"
    assert api.control_tower_overview()["kpis"]["open_order_value"] > 0
    assert api.demand_forecast()["summary"]["total_forecast_qty"] > 0
    assert api.external_signals()["summary"]["signal_count"] >= 1
    assert api.release_gate(domain.DEFAULT_ORDER_ID)["checks"]
    assert api.scenario_profiles()
    assert api.decision_brief(api.DecisionBriefRequest(question="Review S&OP risk"))["actions"]
    assert api.products()
    assert api.inventory_risk()["materials"]
    notice = api.generate_notice(api.NoticeRequest(product_id=domain.DEFAULT_PRODUCT_ID, quantity=domain.DEFAULT_ORDER_QTY, order_id=domain.DEFAULT_ORDER_ID))
    assert notice["template_version"] == domain.NOTICE_TEMPLATE_VERSION
    simulation = api.run_simulation(api.SimulationRequest(line_id=domain.DEFAULT_LINE_ID, hours=24))
    assert simulation["bottleneck_machine"]
    answer = api.agent_chat(api.AgentRequest(question=f"Can {domain.DEFAULT_PRODUCT_ID} be released?"))
    assert answer["trace"]["tool_calls"]
    assert api.integrations()[0]["accepted_payloads"]


def test_frontend_snapshot_contains_demo_evidence() -> None:
    snapshot_path = ROOT / "apps" / "web-dashboard" / "src" / "demoSnapshot.ts"
    text = snapshot_path.read_text(encoding="utf-8")
    assert "controlTower" in text
    assert "demandForecast" in text
    assert "policySignals" in text
    assert "decisionBrief" in text
    assert "releaseGate" in text
    assert "scenarioProfiles" in text
    assert "inventoryRisk" in text
    assert "materialTrace" in text
    assert "agentTools" in text
    assert "tool_calls" in text
