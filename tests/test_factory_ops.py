from __future__ import annotations

from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "apps" / "api-server"))

from factory_ops_api import domain  # noqa: E402


def test_inventory_risk_keeps_source_trace() -> None:
    risk = domain.calculate_inventory_risk("FG-6205-2RS", 12000)
    assert risk["overall_status"] in {"covered", "watch", "critical"}
    assert len(risk["materials"]) == 6
    assert all(row["source_trace"]["source_file"] for row in risk["materials"])


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
