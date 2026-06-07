from __future__ import annotations

from typing import Any

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from . import domain


class BomRequest(BaseModel):
    product_id: str
    quantity: float = 12000


class NoticeRequest(BaseModel):
    product_id: str = "FG-6205-2RS"
    quantity: float = 12000
    order_id: str | None = "SO-2026-0607-01"


class SimulationRequest(BaseModel):
    line_id: str = "LINE-BRG-6205-A"
    hours: float = 24


class AgentRequest(BaseModel):
    question: str


app = FastAPI(
    title="Factory Ops Intelligence API",
    version="0.1.0",
    description="Demo-ready operations intelligence API for fragmented manufacturing data.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, Any]:
    data = domain.load_factory_data()
    return {
        "status": "ok",
        "mode": "demo",
        "products": len(domain.list_products(data)),
        "materials": len(data.materials),
        "orders": len(data.customer_orders),
        "machine_events": len(data.machine_events),
        "adapters": "mock/stub",
    }


@app.get("/api/demo/snapshot")
def demo_snapshot() -> dict[str, Any]:
    return domain.demo_snapshot()


@app.get("/api/files/imports")
def file_imports() -> list[dict[str, Any]]:
    return domain.load_factory_data().file_imports


@app.post("/api/files/classify")
def classify_file(payload: dict[str, str]) -> dict[str, Any]:
    return domain.classify_factory_file(payload.get("file_name", ""))


@app.get("/api/materials/search")
def search_materials(query: str = Query(default="")) -> list[dict[str, Any]]:
    return domain.search_materials(query)


@app.get("/api/products")
def products() -> list[dict[str, Any]]:
    return domain.list_products()


@app.get("/api/products/{product_id}/bom")
def product_bom(product_id: str) -> dict[str, Any]:
    try:
        return domain.get_product_bom(product_id)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.post("/api/bom/explode")
def explode_bom(request: BomRequest) -> dict[str, Any]:
    return domain.explode_bom(request.product_id, request.quantity)


@app.get("/api/inventory/risk")
def inventory_risk(product_id: str = "FG-6205-2RS", quantity: float = 12000) -> dict[str, Any]:
    return domain.calculate_inventory_risk(product_id, quantity)


@app.get("/api/inventory/coverage")
def inventory_coverage(product_id: str = "FG-6205-2RS", quantity: float = 12000) -> dict[str, Any]:
    return domain.calculate_inventory_risk(product_id, quantity)


@app.get("/api/products/{product_id}/material-trace")
def material_trace(product_id: str, quantity: float = 12000) -> dict[str, Any]:
    return domain.product_material_trace(product_id, quantity)


@app.post("/api/production-notices/generate")
def generate_notice(request: NoticeRequest) -> dict[str, Any]:
    return domain.generate_production_notice(request.product_id, request.quantity, request.order_id)


@app.post("/api/production-notices/export")
def export_notice(request: NoticeRequest) -> dict[str, Any]:
    notice = domain.generate_production_notice(request.product_id, request.quantity, request.order_id)
    return {"notice_id": notice["notice_id"], "format": "html", "content": notice["html_preview"]}


@app.get("/api/production-notices/templates")
def notice_templates() -> list[dict[str, str]]:
    return [{"template_id": "bearing-production-notice/v1", "status": "active", "scope": "bearing assembly work order"}]


@app.post("/api/simulation/run")
def run_simulation(request: SimulationRequest) -> dict[str, Any]:
    return domain.run_line_simulation(request.line_id, request.hours)


@app.get("/api/simulation/{run_id}/report")
def simulation_report(run_id: str) -> dict[str, Any]:
    return domain.get_simulation_report(run_id)


@app.get("/api/production-lines/{line_id}/bottlenecks")
def line_bottleneck(line_id: str) -> dict[str, Any]:
    report = domain.run_line_simulation(line_id, 24)
    return {"line_id": line_id, **domain.detect_bottleneck(report)}


@app.get("/api/agent/tools")
def agent_tools() -> list[dict[str, Any]]:
    return domain.agent_tools()


@app.post("/api/agent/chat")
def agent_chat(request: AgentRequest) -> dict[str, Any]:
    return domain.answer_factory_question(request.question)


@app.post("/api/agent/run-workflow")
def run_workflow(payload: dict[str, Any]) -> dict[str, Any]:
    workflow = payload.get("workflow", "order_to_material_risk")
    if workflow == "line_simulation_to_report":
        report = domain.run_line_simulation("LINE-BRG-6205-A", 24)
        return {"workflow": workflow, "result": report, "bottleneck": domain.detect_bottleneck(report)}
    if workflow == "order_to_production_notice":
        return {"workflow": workflow, "result": domain.generate_production_notice("FG-6205-2RS", 12000, "SO-2026-0607-01")}
    if workflow == "daily_factory_review":
        return {"workflow": workflow, "result": domain.generate_daily_report()}
    return {"workflow": workflow, "result": domain.check_order_material_coverage("SO-2026-0607-01")}


@app.get("/api/agent/traces")
def agent_traces() -> list[dict[str, Any]]:
    if not domain.AGENT_TRACES:
        domain.answer_factory_question("Can FG-6205-2RS be released for production?")
    return domain.AGENT_TRACES


@app.get("/api/integrations/status")
def integrations() -> list[dict[str, Any]]:
    return domain.integration_status()


@app.post("/api/integrations/{adapter}/import")
def integration_import(adapter: str, payload: dict[str, Any]) -> dict[str, Any]:
    return {"adapter": adapter, "status": "accepted", "mode": "mock", "records": len(payload.get("records", []))}
