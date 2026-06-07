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
        "adapters": "mock/stub",
    }


@app.get("/api/files/imports")
def file_imports() -> list[dict[str, Any]]:
    return domain.load_factory_data().file_imports


@app.post("/api/files/classify")
def classify_file(payload: dict[str, str]) -> dict[str, str]:
    name = payload.get("file_name", "").lower()
    if "bom" in name:
        file_type = "bom"
    elif "inventory" in name or "wms" in name:
        file_type = "inventory"
    elif "order" in name or "sales" in name:
        file_type = "customer_orders"
    elif "shipment" in name or "in_transit" in name:
        file_type = "shipment_records"
    else:
        file_type = "unknown"
    return {"file_name": payload.get("file_name", ""), "file_type": file_type, "mode": "rule-based-demo"}


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
    return domain.calculate_inventory_risk(request.product_id, request.quantity)


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
    report = domain.run_line_simulation("LINE-BRG-6205-A", 24)
    return {**report, "run_id": run_id}


@app.get("/api/production-lines/{line_id}/bottlenecks")
def line_bottleneck(line_id: str) -> dict[str, Any]:
    report = domain.run_line_simulation(line_id, 24)
    return {
        "line_id": line_id,
        "bottleneck_machine": report["bottleneck_machine"],
        "quality_bottleneck": report["quality_bottleneck"],
        "improvement_suggestion": report["improvement_suggestion"],
    }


@app.get("/api/agent/tools")
def agent_tools() -> list[dict[str, str]]:
    return domain.agent_tools()


@app.post("/api/agent/chat")
def agent_chat(request: AgentRequest) -> dict[str, Any]:
    return domain.answer_factory_question(request.question)


@app.post("/api/agent/run-workflow")
def run_workflow(payload: dict[str, Any]) -> dict[str, Any]:
    workflow = payload.get("workflow", "order_to_material_risk")
    if workflow == "line_simulation_to_report":
        return domain.run_line_simulation("LINE-BRG-6205-A", 24)
    if workflow == "order_to_production_notice":
        return domain.generate_production_notice("FG-6205-2RS", 12000, "SO-2026-0607-01")
    return domain.calculate_inventory_risk("FG-6205-2RS", 12000)


@app.get("/api/agent/traces")
def agent_traces() -> list[dict[str, Any]]:
    return domain.AGENT_TRACES


@app.get("/api/integrations/status")
def integrations() -> list[dict[str, str]]:
    return domain.integration_status()


@app.post("/api/integrations/{adapter}/import")
def integration_import(adapter: str, payload: dict[str, Any]) -> dict[str, Any]:
    return {"adapter": adapter, "status": "accepted", "mode": "mock", "records": len(payload.get("records", []))}

