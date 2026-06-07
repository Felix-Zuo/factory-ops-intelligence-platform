from __future__ import annotations

from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "apps" / "api-server"))

from factory_ops_api import domain  # noqa: E402
from factory_ops_api import main as api  # noqa: E402


def test_inventory_risk_keeps_source_trace() -> None:
    risk = domain.calculate_inventory_risk("FG-6205-2RS", 12000)
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


def test_bom_explosion_uses_order_quantity() -> None:
    exploded = domain.explode_bom("FG-6205-2RS", 12000)
    ball = next(row for row in exploded["components"] if row["material_id"] == "MAT-BALL-7.94")
    assert ball["required_qty"] == 108000


def test_notice_generation_contains_material_gate() -> None:
    notice = domain.generate_production_notice("FG-6205-2RS", 12000, "SO-2026-0607-01")
    assert notice["notice_id"].startswith("PN-")
    assert notice["template_version"] == "bearing-production-notice/v1"
    assert "Production Notice" in notice["html_preview"]


def test_simulation_detects_bottleneck() -> None:
    report = domain.run_line_simulation("LINE-BRG-6205-A", 24)
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
        "generate_daily_report",
        "answer_factory_question",
    }.issubset(names)


def test_product_material_trace_links_chain() -> None:
    trace = domain.product_material_trace("FG-6205-2RS", 12000)
    assert trace["trace_summary"][0]["stage"] == "Product"
    assert trace["material_chains"]
    assert {"bom", "stock", "inbound", "supplier", "source_refs"}.issubset(trace["material_chains"][0].keys())


def test_api_smoke_routes_return_expected_payloads() -> None:
    assert api.health()["status"] == "ok"
    assert api.products()
    assert api.inventory_risk()["materials"]
    notice = api.generate_notice(api.NoticeRequest(product_id="FG-6205-2RS", quantity=12000, order_id="SO-2026-0607-01"))
    assert notice["template_version"] == "bearing-production-notice/v1"
    simulation = api.run_simulation(api.SimulationRequest(line_id="LINE-BRG-6205-A", hours=24))
    assert simulation["bottleneck_machine"]
    answer = api.agent_chat(api.AgentRequest(question="Can FG-6205-2RS be released?"))
    assert answer["trace"]["tool_calls"]
    assert api.integrations()[0]["accepted_payloads"]


def test_frontend_snapshot_contains_demo_evidence() -> None:
    snapshot_path = ROOT / "apps" / "web-dashboard" / "src" / "demoSnapshot.ts"
    text = snapshot_path.read_text(encoding="utf-8")
    assert "inventoryRisk" in text
    assert "materialTrace" in text
    assert "agentTools" in text
    assert "tool_calls" in text
