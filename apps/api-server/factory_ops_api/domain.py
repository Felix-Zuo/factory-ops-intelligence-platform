from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any
import hashlib
import json


ROOT = Path(__file__).resolve().parents[3]
DEMO_DATA = ROOT / "demo_data"
DEMO_TIMESTAMP = "2026-06-07T08:00:00+00:00"


def _load_json(name: str) -> list[dict[str, Any]]:
    path = DEMO_DATA / name
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


@dataclass(frozen=True)
class FactoryData:
    materials: list[dict[str, Any]]
    finished_products: list[dict[str, Any]]
    bom: list[dict[str, Any]]
    inventory: list[dict[str, Any]]
    customer_orders: list[dict[str, Any]]
    shipments: list[dict[str, Any]]
    supplier_deliveries: list[dict[str, Any]]
    production_lines: list[dict[str, Any]]
    stock_locations: list[dict[str, Any]]
    machine_events: list[dict[str, Any]]
    adapters: list[dict[str, Any]]
    workflow_runs: list[dict[str, Any]]
    file_imports: list[dict[str, Any]]


def load_factory_data() -> FactoryData:
    return FactoryData(
        materials=_load_json("materials.json"),
        finished_products=_load_json("finished_products.json"),
        bom=_load_json("bom.json"),
        inventory=_load_json("inventory.json"),
        customer_orders=_load_json("customer_orders.json"),
        shipments=_load_json("shipments.json"),
        supplier_deliveries=_load_json("supplier_deliveries.json"),
        production_lines=_load_json("production_lines.json"),
        stock_locations=_load_json("stock_locations.json"),
        machine_events=_load_json("machine_events.json"),
        adapters=_load_json("adapters.json"),
        workflow_runs=_load_json("workflow_runs.json"),
        file_imports=_load_json("file_imports.json"),
    )


def _index(items: list[dict[str, Any]], key: str) -> dict[str, dict[str, Any]]:
    return {str(item[key]): item for item in items}


def _now_id(prefix: str) -> str:
    stable_ids = {
        "PN": "PN-DEMO-6205-2RS",
        "SIM": "SIM-DEMO-LINE-A",
    }
    return stable_ids.get(prefix, f"{prefix}-DEMO")


def _stable_trace_id(workflow: str) -> str:
    digest = hashlib.sha1(workflow.encode("utf-8")).hexdigest()[:8].upper()
    return f"TRC-{digest}"


def source_ref(source_file: str, source_row: int | str, source_column: str = "") -> dict[str, Any]:
    return {"source_file": source_file, "source_row": source_row, "source_column": source_column}


def list_products(data: FactoryData | None = None) -> list[dict[str, Any]]:
    data = data or load_factory_data()
    component_counts: dict[str, int] = {}
    for row in data.bom:
        component_counts[row["product_id"]] = component_counts.get(row["product_id"], 0) + 1
    if data.finished_products:
        return [
            {
                **product,
                "product_name": product["name"],
                "component_count": component_counts.get(product["product_id"], 0),
            }
            for product in data.finished_products
        ]
    products: dict[str, dict[str, Any]] = {}
    for row in data.bom:
        products[row["product_id"]] = {
            "product_id": row["product_id"],
            "product_name": row["product_name"],
            "component_count": component_counts[row["product_id"]],
        }
    return list(products.values())


def search_materials(query: str = "", data: FactoryData | None = None) -> list[dict[str, Any]]:
    data = data or load_factory_data()
    q = query.lower().strip()
    if not q:
        return data.materials
    fields = ("material_id", "name", "category", "supplier", "manufacturer", "default_location_id")
    return [
        material
        for material in data.materials
        if any(q in str(material.get(field, "")).lower() for field in fields)
    ]


def get_product_bom(product_id: str, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    materials = _index(data.materials, "material_id")
    rows = [row for row in data.bom if row["product_id"] == product_id]
    if not rows:
        raise ValueError(f"Unknown product_id: {product_id}")
    components = []
    for row in rows:
        material = materials[row["material_id"]]
        components.append(
            {
                **row,
                "material_name": material["name"],
                "supplier": material["supplier"],
                "manufacturer": material.get("manufacturer", material["supplier"]),
                "uom": material["uom"],
                "default_location_id": material.get("default_location_id", ""),
                "source_ref": source_ref(row.get("source_file", "bom_demo.xlsx"), row.get("source_row", ""), "qty_per_unit"),
            }
        )
    return {
        "product_id": product_id,
        "product_name": rows[0]["product_name"],
        "bom_id": rows[0].get("bom_id", f"BOM-{product_id}"),
        "revision": rows[0].get("revision", "R1"),
        "component_count": len(components),
        "components": components,
        "source_refs": [component["source_ref"] for component in components],
    }


def explode_bom(product_id: str, quantity: float, data: FactoryData | None = None) -> dict[str, Any]:
    bom = get_product_bom(product_id, data)
    return {
        "product_id": product_id,
        "quantity": quantity,
        "bom_id": bom["bom_id"],
        "components": [
            {
                "material_id": row["material_id"],
                "material_name": row["material_name"],
                "qty_per_unit": row["qty_per_unit"],
                "required_qty": round(float(row["qty_per_unit"]) * float(quantity), 2),
                "uom": row["uom"],
                "operation_id": row.get("operation_id", ""),
                "source_ref": row["source_ref"],
            }
            for row in bom["components"]
        ],
        "source_refs": bom["source_refs"],
    }


def calculate_inventory_risk(product_id: str, order_qty: float, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    exploded = explode_bom(product_id, order_qty, data)
    inventory_rows: dict[str, list[dict[str, Any]]] = {}
    for row in data.inventory:
        inventory_rows.setdefault(row["material_id"], []).append(row)
    materials = _index(data.materials, "material_id")
    supplier_rows = _index(data.supplier_deliveries, "supplier")
    inbound_by_material: dict[str, float] = {}
    eta_by_material: dict[str, str] = {}
    shipment_refs: dict[str, list[dict[str, Any]]] = {}
    for shipment in data.shipments:
        material_id = shipment["material_id"]
        inbound_by_material[material_id] = inbound_by_material.get(material_id, 0.0) + float(shipment["qty"])
        eta_by_material[material_id] = shipment["eta"]
        shipment_refs.setdefault(material_id, []).append(source_ref(shipment["source_file"], shipment["source_row"], "qty"))

    rows = []
    counts = {"critical": 0, "watch": 0, "covered": 0, "surplus": 0}
    source_refs: list[dict[str, Any]] = []
    for component in exploded["components"]:
        material_id = component["material_id"]
        material = materials[material_id]
        stock_rows = inventory_rows.get(material_id, [])
        available = sum(float(row["available_qty"]) - float(row["reserved_qty"]) for row in stock_rows)
        inbound = inbound_by_material.get(material_id, 0.0)
        required = component["required_qty"]
        coverage = available + inbound
        shortage = max(required - coverage, 0.0)
        ratio = coverage / required if required else 999.0
        if shortage > 0:
            status = "critical"
        elif ratio < 1.25:
            status = "watch"
        elif ratio > 2.0:
            status = "surplus"
        else:
            status = "covered"
        counts[status] += 1
        supplier = supplier_rows.get(material["supplier"], {})
        stock_refs = [source_ref(row["source_file"], row["source_row"], "available_qty") for row in stock_rows]
        row_refs = [component["source_ref"], *stock_refs, *shipment_refs.get(material_id, [])]
        source_refs.extend(row_refs)
        rows.append(
            {
                "material_id": material_id,
                "material_name": material["name"],
                "supplier": material["supplier"],
                "manufacturer": material.get("manufacturer", material["supplier"]),
                "uom": material["uom"],
                "operation_id": component.get("operation_id", ""),
                "qty_per_unit": component["qty_per_unit"],
                "required_qty": required,
                "available_qty": round(available, 2),
                "inbound_qty": inbound,
                "coverage_qty": round(coverage, 2),
                "shortage_qty": round(shortage, 2),
                "coverage_ratio": round(ratio, 3),
                "status": status,
                "eta": eta_by_material.get(material_id, ""),
                "locations": sorted({row["location"] for row in stock_rows}),
                "lot_numbers": sorted({row.get("lot_no", "") for row in stock_rows if row.get("lot_no")}),
                "source_refs": row_refs,
                "source_trace": row_refs[1] if len(row_refs) > 1 else component["source_ref"],
                "supplier_on_time_rate": supplier.get("on_time_rate"),
                "supplier_note": supplier.get("risk_note", ""),
            }
        )

    overall_status = "critical" if counts["critical"] else "watch" if counts["watch"] else "covered"
    return {
        "product_id": product_id,
        "order_qty": order_qty,
        "overall_status": overall_status,
        "status_counts": counts,
        "materials": rows,
        "summary": {
            "critical_items": counts["critical"],
            "watch_items": counts["watch"],
            "covered_items": counts["covered"],
            "surplus_items": counts["surplus"],
        },
        "source_refs": source_refs,
    }


def check_order_material_coverage(order_id: str, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    order = next((item for item in data.customer_orders if item["order_id"] == order_id), None)
    if not order:
        raise ValueError(f"Unknown order_id: {order_id}")
    risk = calculate_inventory_risk(order["product_id"], float(order["qty"]), data)
    return {
        "order": order,
        "material_gate_status": risk["overall_status"],
        "risk": risk,
        "release_recommendation": "hold for shortage review" if risk["overall_status"] == "critical" else "release with follow-up" if risk["overall_status"] == "watch" else "release",
        "source_refs": [source_ref(order["source_file"], order["source_row"], "qty"), *risk["source_refs"]],
    }


def product_material_trace(product_id: str, order_qty: float, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    risk = calculate_inventory_risk(product_id, order_qty, data)
    order = next((item for item in data.customer_orders if item["product_id"] == product_id), data.customer_orders[0])
    shipments_by_material: dict[str, list[dict[str, Any]]] = {}
    for shipment in data.shipments:
        shipments_by_material.setdefault(shipment["material_id"], []).append(shipment)
    supplier_rows = _index(data.supplier_deliveries, "supplier")
    inventory_rows: dict[str, list[dict[str, Any]]] = {}
    for row in data.inventory:
        inventory_rows.setdefault(row["material_id"], []).append(row)

    material_chains = []
    for row in risk["materials"]:
        material_chains.append(
            {
                "material_id": row["material_id"],
                "material_name": row["material_name"],
                "bom": {"operation_id": row["operation_id"], "qty_per_unit": row["qty_per_unit"], "required_qty": row["required_qty"]},
                "stock": inventory_rows.get(row["material_id"], []),
                "inbound": shipments_by_material.get(row["material_id"], []),
                "supplier": supplier_rows.get(row["supplier"], {}),
                "status": row["status"],
                "source_refs": row["source_refs"],
            }
        )
    return {
        "product_id": product_id,
        "product_name": get_product_bom(product_id, data)["product_name"],
        "order": order,
        "material_chains": material_chains,
        "trace_summary": [
            {"stage": "Product", "label": product_id, "detail": get_product_bom(product_id, data)["product_name"], "status": "selected"},
            {"stage": "Order", "label": order["order_id"], "detail": f"{order['qty']:,.0f} pcs due {order['due_date']}", "status": order["priority"]},
            {"stage": "BOM", "label": get_product_bom(product_id, data)["bom_id"], "detail": f"{len(risk['materials'])} components", "status": "parsed"},
            {"stage": "Inventory", "label": "WMS snapshot", "detail": f"{len(data.inventory)} stock rows", "status": risk["overall_status"]},
            {"stage": "Inbound", "label": "Shipment records", "detail": f"{len(data.shipments)} inbound rows", "status": "linked"},
            {"stage": "Supplier", "label": "Delivery context", "detail": f"{len(data.supplier_deliveries)} suppliers", "status": "linked"},
        ],
        "source_refs": risk["source_refs"],
    }


def generate_production_notice(product_id: str, quantity: float, order_id: str | None = None, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    bom = get_product_bom(product_id, data)
    risk = calculate_inventory_risk(product_id, quantity, data)
    order = next((item for item in data.customer_orders if item["order_id"] == order_id), None) if order_id else None
    order = order or next((item for item in data.customer_orders if item["product_id"] == product_id), data.customer_orders[0])
    notice_id = _now_id("PN")
    blocked = [row for row in risk["materials"] if row["status"] == "critical"]
    watch = [row for row in risk["materials"] if row["status"] == "watch"]
    material_gate = "blocked" if blocked else "release_with_follow_up" if watch else "release"
    html = (
        "<section class='notice-sheet'>"
        f"<h1>Production Notice {notice_id}</h1>"
        f"<p><strong>Product:</strong> {bom['product_name']} ({product_id})</p>"
        f"<p><strong>Quantity:</strong> {quantity:,.0f} pcs</p>"
        f"<p><strong>Customer order:</strong> {order['order_id']} / due {order['due_date']}</p>"
        f"<p><strong>Material gate:</strong> {material_gate}</p>"
        "<table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody>"
        + "".join(
            f"<tr><td>{row['material_id']}</td><td>{row['required_qty']:,.1f} {row['uom']}</td><td>{row['coverage_qty']:,.1f}</td><td>{row['status']}</td></tr>"
            for row in risk["materials"]
        )
        + "</tbody></table></section>"
    )
    return {
        "notice_id": notice_id,
        "product_id": product_id,
        "product_name": bom["product_name"],
        "quantity": quantity,
        "order_id": order["order_id"],
        "due_date": order["due_date"],
        "material_status": risk["overall_status"],
        "material_gate": material_gate,
        "blocked_materials": blocked,
        "watch_materials": watch,
        "html_preview": html,
        "template_version": "bearing-production-notice/v1",
        "source_trace": {
            "bom_components": len(bom["components"]),
            "inventory_rows": len(data.inventory),
            "order_source": order["source_file"],
            "order_row": order["source_row"],
        },
        "source_refs": [source_ref(order["source_file"], order["source_row"], "qty"), *risk["source_refs"]],
    }


def run_line_simulation(line_id: str, hours: float = 24, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    line = next((item for item in data.production_lines if item["line_id"] == line_id), None)
    if not line:
        raise ValueError(f"Unknown line_id: {line_id}")
    seconds = float(hours) * 3600
    machine_reports = []
    for machine in line["machines"]:
        theoretical = seconds / float(machine["cycle_time_sec"])
        available_output = theoretical * float(machine["availability"])
        good_output = available_output * float(machine["yield_rate"])
        scrap_output = max(available_output - good_output, 0)
        utilization = min(float(machine["availability"]) * 0.96, 0.99)
        waiting_time = round(seconds * max(0.02, 1 - utilization) * 0.18 / 3600, 2)
        blocking_time = round(seconds * max(0.01, (3.5 - float(machine["cycle_time_sec"])) / 20) / 3600, 2)
        machine_reports.append(
            {
                "machine_id": machine["machine_id"],
                "name": machine["name"],
                "operation_id": machine.get("operation_id", machine["machine_id"]),
                "cycle_time_sec": machine["cycle_time_sec"],
                "good_output": round(good_output),
                "scrap_output": round(scrap_output),
                "utilization": round(utilization, 3),
                "waiting_time_hours": waiting_time,
                "blocking_time_hours": blocking_time,
                "buffer_capacity": machine.get("buffer_capacity", 0),
                "state": "blocked" if blocking_time > 1 else "running",
            }
        )
    bottleneck = min(machine_reports, key=lambda row: row["good_output"])
    quality = max(machine_reports, key=lambda row: row["scrap_output"])
    total_output = bottleneck["good_output"]
    scrap_output = round(sum(row["scrap_output"] for row in machine_reports) / len(machine_reports))
    report = {
        "run_id": _now_id("SIM"),
        "line_id": line_id,
        "line_name": line["name"],
        "hours": hours,
        "total_output": total_output,
        "good_output": total_output,
        "scrap_output": scrap_output,
        "bottleneck_machine": bottleneck["machine_id"],
        "quality_bottleneck": quality["machine_id"],
        "machine_utilization": round(sum(row["utilization"] for row in machine_reports) / len(machine_reports), 3),
        "waiting_time_hours": round(sum(row["waiting_time_hours"] for row in machine_reports), 2),
        "blocking_time_hours": round(sum(row["blocking_time_hours"] for row in machine_reports), 2),
        "machine_reports": machine_reports,
        "transport_links": line["transport_links"],
        "source_events": [event for event in data.machine_events if event.get("metadata_json", {}).get("line_id") == line_id],
        "improvement_suggestion": f"Review buffer and changeover rules around {bottleneck['machine_id']} before increasing release quantity.",
    }
    return report


def detect_bottleneck(report: dict[str, Any]) -> dict[str, Any]:
    machine_reports = report["machine_reports"]
    bottleneck = min(machine_reports, key=lambda row: row["good_output"])
    quality = max(machine_reports, key=lambda row: row["scrap_output"])
    return {
        "bottleneck_machine": bottleneck["machine_id"],
        "quality_bottleneck": quality["machine_id"],
        "evidence": {
            "lowest_good_output": bottleneck["good_output"],
            "highest_scrap_output": quality["scrap_output"],
            "waiting_time_hours": report["waiting_time_hours"],
            "blocking_time_hours": report["blocking_time_hours"],
        },
        "next_check": report["improvement_suggestion"],
    }


def get_simulation_report(run_id: str = "latest", data: FactoryData | None = None) -> dict[str, Any]:
    report = run_line_simulation("LINE-BRG-6205-A", 24, data)
    return {**report, "run_id": report["run_id"] if run_id == "latest" else run_id}


def integration_status(data: FactoryData | None = None) -> list[dict[str, Any]]:
    data = data or load_factory_data()
    return data.adapters


def classify_factory_file(file_name: str) -> dict[str, Any]:
    name = file_name.lower()
    if "bom" in name:
        file_type, parser = "bom", "bom_parser_v1"
    elif "inventory" in name or "wms" in name:
        file_type, parser = "inventory", "inventory_parser_v1"
    elif "order" in name or "sales" in name:
        file_type, parser = "customer_orders", "order_parser_v1"
    elif "shipment" in name or "in_transit" in name:
        file_type, parser = "shipment_records", "shipment_parser_v1"
    elif "event" in name or "plc" in name:
        file_type, parser = "machine_events", "telemetry_parser_v1"
    else:
        file_type, parser = "unknown", "manual_review"
    return {"file_name": file_name, "file_type": file_type, "parser": parser, "confidence": 0.93 if file_type != "unknown" else 0.25, "source_trace_required": True, "mode": "rule-based-demo"}


def tool_schema(name: str, description: str, input_schema: dict[str, Any], output_keys: list[str], backend: str) -> dict[str, Any]:
    return {
        "name": name,
        "description": description,
        "backend": backend,
        "input_schema": input_schema,
        "output_keys": output_keys,
        "mode": "deterministic_mock",
        "requires_source_refs": True,
    }


def agent_tools() -> list[dict[str, Any]]:
    product_qty = {
        "type": "object",
        "required": ["product_id", "quantity"],
        "properties": {"product_id": {"type": "string"}, "quantity": {"type": "number"}},
    }
    return [
        tool_schema("search_material", "Search material master and supplier records.", {"type": "object", "properties": {"query": {"type": "string"}}}, ["materials"], "search_materials"),
        tool_schema("get_product_bom", "Return product BOM components.", {"type": "object", "required": ["product_id"], "properties": {"product_id": {"type": "string"}}}, ["components", "source_refs"], "get_product_bom"),
        tool_schema("explode_bom", "Calculate component demand by finished-product quantity.", product_qty, ["components", "source_refs"], "explode_bom"),
        tool_schema("calculate_inventory_risk", "Check inventory, in-transit stock and supplier risk.", product_qty, ["overall_status", "materials", "source_refs"], "calculate_inventory_risk"),
        tool_schema("check_order_material_coverage", "Check material gate for a customer order.", {"type": "object", "required": ["order_id"], "properties": {"order_id": {"type": "string"}}}, ["material_gate_status", "risk", "source_refs"], "check_order_material_coverage"),
        tool_schema("generate_production_notice", "Generate a production notice preview.", product_qty, ["notice_id", "html_preview", "source_refs"], "generate_production_notice"),
        tool_schema("run_line_simulation", "Run a deterministic line simulation.", {"type": "object", "required": ["line_id", "hours"], "properties": {"line_id": {"type": "string"}, "hours": {"type": "number"}}}, ["run_id", "machine_reports"], "run_line_simulation"),
        tool_schema("get_simulation_report", "Return the latest or named simulation report.", {"type": "object", "properties": {"run_id": {"type": "string"}}}, ["run_id", "bottleneck_machine"], "get_simulation_report"),
        tool_schema("detect_bottleneck", "Identify throughput and quality bottlenecks.", {"type": "object", "required": ["report"], "properties": {"report": {"type": "object"}}}, ["bottleneck_machine", "evidence"], "detect_bottleneck"),
        tool_schema("generate_daily_report", "Compose an operations summary from tool outputs.", {"type": "object", "properties": {"day": {"type": "string"}}}, ["summary", "exceptions", "source_refs"], "generate_daily_report"),
        tool_schema("answer_factory_question", "Route a factory question to the correct workflow and tools.", {"type": "object", "required": ["question"], "properties": {"question": {"type": "string"}}}, ["answer", "trace", "data"], "answer_factory_question"),
    ]


def generate_daily_report(data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    risk = calculate_inventory_risk("FG-6205-2RS", 12000, data)
    simulation = run_line_simulation("LINE-BRG-6205-A", 24, data)
    bottleneck = detect_bottleneck(simulation)
    adapters = integration_status(data)
    exceptions = []
    if risk["overall_status"] != "covered":
        exceptions.append(f"Material gate is {risk['overall_status']} for FG-6205-2RS.")
    exceptions.append(f"Bottleneck review required at {bottleneck['bottleneck_machine']}.")
    exceptions.extend([f"{item['adapter']} adapter is {item['mode']}." for item in adapters if item["mode"] in {"stub", "sample", "ready-schema"}])
    return {
        "summary": "FG-6205-2RS can proceed with material follow-up and bottleneck review.",
        "exceptions": exceptions,
        "follow_up_list": ["Confirm GreenChem grease QA release.", "Review OP-40 buffer rule.", "Keep MES and PLC adapters in sample mode."],
        "source_refs": risk["source_refs"],
        "simulation_run_id": simulation["run_id"],
    }


AGENT_TRACES: list[dict[str, Any]] = []


def _trace_call(tool_name: str, inputs: dict[str, Any], output: dict[str, Any]) -> dict[str, Any]:
    return {
        "tool_name": tool_name,
        "input_json": inputs,
        "output_json": output,
        "source_refs": output.get("source_refs", []),
        "completed_at": DEMO_TIMESTAMP,
    }


def answer_factory_question(question: str, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    q = question.lower()
    tool_calls: list[dict[str, Any]] = []
    if "bottleneck" in q or "瓶颈" in question or "line" in q or "simulation" in q:
        workflow = "line_simulation_to_report"
        intent = "simulation_bottleneck"
        simulation = run_line_simulation("LINE-BRG-6205-A", 24, data)
        bottleneck = detect_bottleneck(simulation)
        tool_calls.append(_trace_call("run_line_simulation", {"line_id": "LINE-BRG-6205-A", "hours": 24}, simulation))
        tool_calls.append(_trace_call("detect_bottleneck", {"run_id": simulation["run_id"]}, bottleneck))
        final_answer = (
            f"Result: bottleneck detected at {bottleneck['bottleneck_machine']}. "
            f"Evidence: 24h good output {simulation['good_output']:,} pcs and average utilization {simulation['machine_utilization']:.1%}. "
            f"Source: {len(simulation['source_events'])} machine events are linked. "
            f"Next check: {bottleneck['next_check']}"
        )
        payload = {"simulation": simulation, "bottleneck": bottleneck}
    elif "notice" in q or "通知单" in question or "release" in q:
        workflow = "order_to_production_notice"
        intent = "production_notice"
        coverage = check_order_material_coverage("SO-2026-0607-01", data)
        notice = generate_production_notice("FG-6205-2RS", 12000, "SO-2026-0607-01", data)
        tool_calls.append(_trace_call("check_order_material_coverage", {"order_id": "SO-2026-0607-01"}, coverage))
        tool_calls.append(_trace_call("generate_production_notice", {"product_id": "FG-6205-2RS", "quantity": 12000}, notice))
        final_answer = (
            f"Result: production notice {notice['notice_id']} is ready for preview. "
            f"Evidence: material gate is {notice['material_gate']} with {len(notice['watch_materials'])} watch items. "
            f"Source: order row {coverage['order']['source_row']} and BOM {notice['source_trace']['bom_components']} rows are linked. "
            "Next check: confirm watch items before release."
        )
        payload = {"coverage": coverage, "notice": notice}
    else:
        workflow = "order_to_material_risk"
        intent = "material_readiness"
        bom = get_product_bom("FG-6205-2RS", data)
        exploded = explode_bom("FG-6205-2RS", 12000, data)
        risk = calculate_inventory_risk("FG-6205-2RS", 12000, data)
        tool_calls.append(_trace_call("get_product_bom", {"product_id": "FG-6205-2RS"}, bom))
        tool_calls.append(_trace_call("explode_bom", {"product_id": "FG-6205-2RS", "quantity": 12000}, exploded))
        tool_calls.append(_trace_call("calculate_inventory_risk", {"product_id": "FG-6205-2RS", "quantity": 12000}, risk))
        watch = [row["material_id"] for row in risk["materials"] if row["status"] == "watch"]
        final_answer = (
            f"Result: material coverage status is {risk['overall_status']}. "
            f"Evidence: {risk['summary']['covered_items']} covered items, {risk['summary']['watch_items']} watch items and {risk['summary']['critical_items']} critical items. "
            f"Source: {len(risk['source_refs'])} BOM, inventory and inbound references are linked. "
            f"Next check: {'confirm ' + ', '.join(watch) if watch else 'release after first-piece approval'}."
        )
        payload = {"bom": bom, "exploded_bom": exploded, "risk": risk}
    trace = {
        "trace_id": _stable_trace_id(workflow),
        "user_question": question,
        "question": question,
        "selected_intent": intent,
        "workflow": workflow,
        "workflow_name": workflow,
        "selected_tools": [call["tool_name"] for call in tool_calls],
        "tools": [call["tool_name"] for call in tool_calls],
        "tool_calls": tool_calls,
        "source_refs": [ref for call in tool_calls for ref in call.get("source_refs", [])],
        "final_answer": final_answer,
        "status": "completed",
        "created_at": DEMO_TIMESTAMP,
    }
    AGENT_TRACES.insert(0, trace)
    return {"answer": final_answer, "trace": trace, "data": payload}


def demo_snapshot(data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    risk = calculate_inventory_risk("FG-6205-2RS", 12000, data)
    trace = product_material_trace("FG-6205-2RS", 12000, data)
    notice = generate_production_notice("FG-6205-2RS", 12000, "SO-2026-0607-01", data)
    simulation = run_line_simulation("LINE-BRG-6205-A", 24, data)
    agent_answer = answer_factory_question("Can FG-6205-2RS be released for production?", data)
    return {
        "health": {"mode": "demo", "products": len(list_products(data)), "materials": len(data.materials), "adapters": "mock/stub"},
        "products": list_products(data),
        "imports": data.file_imports,
        "orders": data.customer_orders,
        "inventoryRisk": risk,
        "materialTrace": trace,
        "notice": notice,
        "simulation": simulation,
        "dailyReport": generate_daily_report(data),
        "integrations": integration_status(data),
        "agentTools": agent_tools(),
        "agentAnswer": agent_answer,
        "agentTraces": AGENT_TRACES,
        "workflows": data.workflow_runs,
    }
