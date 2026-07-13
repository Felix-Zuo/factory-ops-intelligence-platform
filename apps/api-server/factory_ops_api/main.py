from __future__ import annotations

from typing import Annotated, Any, Literal

from fastapi import FastAPI, HTTPException, Path, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from . import domain


class BomRequest(BaseModel):
    product_id: str = Field(min_length=1, max_length=80)
    quantity: float = Field(default=12000, gt=0, le=10_000_000)


class NoticeRequest(BaseModel):
    product_id: str = Field(default=domain.DEFAULT_PRODUCT_ID, min_length=1, max_length=80)
    quantity: float = Field(default=domain.DEFAULT_ORDER_QTY, gt=0, le=10_000_000)
    order_id: str | None = Field(default=domain.DEFAULT_ORDER_ID, max_length=120)


class SimulationRequest(BaseModel):
    line_id: str = Field(default=domain.DEFAULT_LINE_ID, min_length=1, max_length=80)
    hours: float = Field(default=24, gt=0, le=168)


class AgentRequest(BaseModel):
    question: str = Field(min_length=1, max_length=2000)


class DecisionBriefRequest(BaseModel):
    question: str = Field(default="What should operations review today?", min_length=1, max_length=2000)


class FileClassifyRequest(BaseModel):
    file_name: str = Field(min_length=1, max_length=255, pattern=r"^[^/\\\x00]+$")


class WorkflowRequest(BaseModel):
    workflow: Literal[
        "order_to_material_risk",
        "line_simulation_to_report",
        "order_to_production_notice",
        "daily_factory_review",
    ] = "order_to_material_risk"


class IntegrationImportRequest(BaseModel):
    payload_type: str | None = Field(default=None, min_length=1, max_length=80)
    records: list[dict[str, Any]] = Field(default_factory=list, max_length=1000)


app = FastAPI(
    title="Operations Intelligence API",
    version="0.3.3",
    description="Reviewable public demo API for demand, inventory, capacity, policy signals, release governance and source-linked operations decisions.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5178", "http://localhost:5178"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)


@app.get("/health")
def health() -> dict[str, Any]:
    data = domain.load_factory_data()
    return {
        "status": "ok",
        "mode": "demo",
        "version": app.version,
        "products": len(domain.list_products(data)),
        "materials": len(data.materials),
        "orders": len(data.customer_orders),
        "machine_events": len(data.machine_events),
        "adapters": "mock/stub",
    }


@app.get("/api/demo/snapshot")
def demo_snapshot() -> dict[str, Any]:
    return domain.demo_snapshot()


@app.get("/api/control-tower/overview")
def control_tower_overview() -> dict[str, Any]:
    return domain.build_control_tower_overview()


@app.get("/api/forecast/demand")
def demand_forecast(product_id: Annotated[str | None, Query(max_length=80)] = None, horizon_weeks: Annotated[int, Query(ge=1, le=26)] = 4) -> dict[str, Any]:
    try:
        return domain.forecast_demand(product_id=product_id, horizon_weeks=horizon_weeks)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.get("/api/external/signals")
def external_signals(query: Annotated[str, Query(max_length=500)] = "") -> dict[str, Any]:
    return domain.search_policy_signals(query=query)


@app.get("/api/release-gates/{order_id}")
def release_gate(order_id: Annotated[str, Path(min_length=1, max_length=120)]) -> dict[str, Any]:
    try:
        return domain.build_release_gate(order_id=order_id)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.get("/api/scenario-profiles")
def scenario_profiles() -> list[dict[str, Any]]:
    return domain.list_scenario_profiles()


@app.post("/api/decision-brief")
def decision_brief(request: DecisionBriefRequest) -> dict[str, Any]:
    return domain.generate_decision_brief(request.question)


@app.get("/api/files/imports")
def file_imports() -> list[dict[str, Any]]:
    return domain.load_factory_data().file_imports


@app.post("/api/files/classify")
def classify_file(request: FileClassifyRequest) -> dict[str, Any]:
    return domain.classify_factory_file(request.file_name)


@app.get("/api/materials/search")
def search_materials(query: Annotated[str, Query(max_length=200)] = "") -> list[dict[str, Any]]:
    return domain.search_materials(query)


@app.get("/api/products")
def products() -> list[dict[str, Any]]:
    return domain.list_products()


@app.get("/api/products/{product_id}/bom")
def product_bom(product_id: Annotated[str, Path(min_length=1, max_length=80)]) -> dict[str, Any]:
    try:
        return domain.get_product_bom(product_id)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.post("/api/bom/explode")
def explode_bom(request: BomRequest) -> dict[str, Any]:
    try:
        return domain.explode_bom(request.product_id, request.quantity)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.get("/api/inventory/risk")
def inventory_risk(
    product_id: Annotated[str, Query(min_length=1, max_length=80)] = domain.DEFAULT_PRODUCT_ID,
    quantity: Annotated[float, Query(gt=0, le=10_000_000)] = domain.DEFAULT_ORDER_QTY,
) -> dict[str, Any]:
    try:
        return domain.calculate_inventory_risk(product_id, quantity)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.get("/api/inventory/coverage")
def inventory_coverage(
    product_id: Annotated[str, Query(min_length=1, max_length=80)] = domain.DEFAULT_PRODUCT_ID,
    quantity: Annotated[float, Query(gt=0, le=10_000_000)] = domain.DEFAULT_ORDER_QTY,
) -> dict[str, Any]:
    return inventory_risk(product_id, quantity)


@app.get("/api/products/{product_id}/material-trace")
def material_trace(
    product_id: Annotated[str, Path(min_length=1, max_length=80)],
    quantity: Annotated[float, Query(gt=0, le=10_000_000)] = domain.DEFAULT_ORDER_QTY,
) -> dict[str, Any]:
    try:
        return domain.product_material_trace(product_id, quantity)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.post("/api/production-notices/generate")
def generate_notice(request: NoticeRequest) -> dict[str, Any]:
    try:
        return domain.generate_production_notice(request.product_id, request.quantity, request.order_id)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.post("/api/production-notices/export")
def export_notice(request: NoticeRequest) -> dict[str, Any]:
    notice = generate_notice(request)
    return {"notice_id": notice["notice_id"], "format": "html", "content": notice["html_preview"]}


@app.get("/api/production-notices/templates")
def notice_templates() -> list[dict[str, str]]:
    return [{"template_id": domain.NOTICE_TEMPLATE_VERSION, "status": "active", "scope": "generic assembly release notice"}]


@app.post("/api/simulation/run")
def run_simulation(request: SimulationRequest) -> dict[str, Any]:
    try:
        return domain.run_line_simulation(request.line_id, request.hours)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.get("/api/simulation/{run_id}/report")
def simulation_report(run_id: Annotated[str, Path(min_length=1, max_length=120)]) -> dict[str, Any]:
    try:
        return domain.get_simulation_report(run_id)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@app.get("/api/production-lines/{line_id}/bottlenecks")
def line_bottleneck(line_id: Annotated[str, Path(min_length=1, max_length=80)]) -> dict[str, Any]:
    try:
        report = domain.run_line_simulation(line_id, 24)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc
    return {"line_id": line_id, **domain.detect_bottleneck(report)}


@app.get("/api/agent/tools")
def agent_tools() -> list[dict[str, Any]]:
    return domain.agent_tools()


@app.post("/api/agent/chat")
def agent_chat(request: AgentRequest) -> dict[str, Any]:
    return domain.answer_factory_question(request.question)


@app.post("/api/agent/run-workflow")
def run_workflow(request: WorkflowRequest) -> dict[str, Any]:
    workflow = request.workflow
    if workflow == "line_simulation_to_report":
        report = domain.run_line_simulation(domain.DEFAULT_LINE_ID, 24)
        return {"workflow": workflow, "result": report, "bottleneck": domain.detect_bottleneck(report)}
    if workflow == "order_to_production_notice":
        return {"workflow": workflow, "result": domain.generate_production_notice(domain.DEFAULT_PRODUCT_ID, domain.DEFAULT_ORDER_QTY, domain.DEFAULT_ORDER_ID)}
    if workflow == "daily_factory_review":
        return {"workflow": workflow, "result": domain.generate_daily_report()}
    return {"workflow": workflow, "result": domain.check_order_material_coverage(domain.DEFAULT_ORDER_ID)}


@app.get("/api/agent/traces")
def agent_traces(limit: Annotated[int, Query(ge=1, le=25)] = 10) -> list[dict[str, Any]]:
    if not domain.AGENT_TRACES:
        domain.answer_factory_question(f"Can {domain.DEFAULT_PRODUCT_ID} be released for production?")
    return domain.AGENT_TRACES[:limit]


@app.get("/api/integrations/status")
def integrations() -> list[dict[str, Any]]:
    return domain.integration_status()


@app.post("/api/integrations/{adapter}/import")
def integration_import(
    adapter: Annotated[str, Path(min_length=1, max_length=40, pattern=r"^[A-Za-z0-9_-]+$")],
    request: IntegrationImportRequest,
) -> dict[str, Any]:
    contract = next((item for item in domain.integration_status() if item["adapter"].lower() == adapter.lower()), None)
    if contract is None:
        raise HTTPException(status_code=404, detail=f"Unknown adapter: {adapter}")
    if contract["mode"] not in {"mock", "sample"}:
        raise HTTPException(status_code=409, detail=f"Adapter {contract['adapter']} is not executable in {contract['mode']} mode")
    if request.payload_type and request.payload_type not in contract["accepted_payloads"]:
        raise HTTPException(status_code=422, detail=f"Unsupported payload_type for {contract['adapter']}: {request.payload_type}")
    return {
        "adapter": contract["adapter"],
        "status": "accepted",
        "mode": contract["mode"],
        "payload_type": request.payload_type,
        "records": len(request.records),
    }
