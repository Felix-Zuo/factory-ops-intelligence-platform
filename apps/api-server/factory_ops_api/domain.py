from __future__ import annotations

from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any
from uuid import uuid4
import json


ROOT = Path(__file__).resolve().parents[3]
DEMO_DATA = ROOT / "demo_data"


def _load_json(name: str) -> list[dict[str, Any]]:
    path = DEMO_DATA / name
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


@dataclass(frozen=True)
class FactoryData:
    materials: list[dict[str, Any]]
    bom: list[dict[str, Any]]
    inventory: list[dict[str, Any]]
    customer_orders: list[dict[str, Any]]
    shipments: list[dict[str, Any]]
    supplier_deliveries: list[dict[str, Any]]
    production_lines: list[dict[str, Any]]
    file_imports: list[dict[str, Any]]


def load_factory_data() -> FactoryData:
    return FactoryData(
        materials=_load_json("materials.json"),
        bom=_load_json("bom.json"),
        inventory=_load_json("inventory.json"),
        customer_orders=_load_json("customer_orders.json"),
        shipments=_load_json("shipments.json"),
        supplier_deliveries=_load_json("supplier_deliveries.json"),
        production_lines=_load_json("production_lines.json"),
        file_imports=_load_json("file_imports.json"),
    )


def _index(items: list[dict[str, Any]], key: str) -> dict[str, dict[str, Any]]:
    return {str(item[key]): item for item in items}


def list_products(data: FactoryData | None = None) -> list[dict[str, Any]]:
    data = data or load_factory_data()
    products: dict[str, dict[str, Any]] = {}
    for row in data.bom:
        products[row["product_id"]] = {
            "product_id": row["product_id"],
            "product_name": row["product_name"],
            "component_count": sum(1 for item in data.bom if item["product_id"] == row["product_id"]),
        }
    return list(products.values())


def search_materials(query: str = "", data: FactoryData | None = None) -> list[dict[str, Any]]:
    data = data or load_factory_data()
    q = query.lower().strip()
    if not q:
        return data.materials
    return [
        material
        for material in data.materials
        if q in material["material_id"].lower()
        or q in material["name"].lower()
        or q in material["category"].lower()
        or q in material["supplier"].lower()
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
        components.append({**row, "material_name": material["name"], "supplier": material["supplier"], "uom": material["uom"]})
    return {
        "product_id": product_id,
        "product_name": rows[0]["product_name"],
        "components": components,
    }


def calculate_inventory_risk(product_id: str, order_qty: float, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    bom = get_product_bom(product_id, data)["components"]
    inventory = _index(data.inventory, "material_id")
    materials = _index(data.materials, "material_id")
    supplier_rows = _index(data.supplier_deliveries, "supplier")
    inbound_by_material: dict[str, float] = {}
    eta_by_material: dict[str, str] = {}
    for shipment in data.shipments:
        material_id = shipment["material_id"]
        inbound_by_material[material_id] = inbound_by_material.get(material_id, 0.0) + float(shipment["qty"])
        eta_by_material[material_id] = shipment["eta"]

    rows = []
    counts = {"critical": 0, "watch": 0, "covered": 0, "surplus": 0}
    for component in bom:
        material_id = component["material_id"]
        material = materials[material_id]
        stock = inventory[material_id]
        required = round(float(component["qty_per_unit"]) * float(order_qty), 2)
        available = float(stock["available_qty"]) - float(stock["reserved_qty"])
        inbound = inbound_by_material.get(material_id, 0.0)
        coverage = available + inbound
        shortage = max(required - coverage, 0.0)
        ratio = coverage / required if required else 999
        if shortage > 0:
            status = "critical"
        elif ratio < 1.1:
            status = "watch"
        elif ratio > 1.8:
            status = "surplus"
        else:
            status = "covered"
        counts[status] += 1
        supplier = supplier_rows.get(material["supplier"], {})
        rows.append(
            {
                "material_id": material_id,
                "material_name": material["name"],
                "supplier": material["supplier"],
                "uom": material["uom"],
                "qty_per_unit": component["qty_per_unit"],
                "required_qty": required,
                "available_qty": available,
                "inbound_qty": inbound,
                "coverage_qty": coverage,
                "shortage_qty": round(shortage, 2),
                "coverage_ratio": round(ratio, 3),
                "status": status,
                "eta": eta_by_material.get(material_id, ""),
                "source_trace": {
                    "source_file": stock["source_file"],
                    "source_row": stock["source_row"],
                    "source_column": "available_qty",
                },
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
    }


def product_material_trace(product_id: str, order_qty: float, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    risk = calculate_inventory_risk(product_id, order_qty, data)
    order = next((item for item in data.customer_orders if item["product_id"] == product_id), data.customer_orders[0])
    return {
        "product": get_product_bom(product_id, data)["product_name"],
        "order": order,
        "trace": [
            {
                "stage": "BOM",
                "label": row["material_id"],
                "detail": row["material_name"],
                "status": row["status"],
                "source": row["source_trace"],
            }
            for row in risk["materials"]
        ],
    }


def generate_production_notice(product_id: str, quantity: float, order_id: str | None = None, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    bom = get_product_bom(product_id, data)
    risk = calculate_inventory_risk(product_id, quantity, data)
    order = next((item for item in data.customer_orders if item["order_id"] == order_id), None) if order_id else None
    order = order or next((item for item in data.customer_orders if item["product_id"] == product_id), data.customer_orders[0])
    notice_id = f"PN-{datetime.now(UTC).strftime('%Y%m%d')}-{str(uuid4())[:6].upper()}"
    blocked = [row for row in risk["materials"] if row["status"] == "critical"]
    html = (
        "<section class='notice-sheet'>"
        f"<h1>Production Notice {notice_id}</h1>"
        f"<p><strong>Product:</strong> {bom['product_name']} ({product_id})</p>"
        f"<p><strong>Quantity:</strong> {quantity:,.0f} pcs</p>"
        f"<p><strong>Customer order:</strong> {order['order_id']} / due {order['due_date']}</p>"
        f"<p><strong>Material gate:</strong> {'Release with material follow-up' if blocked else 'Release after first-piece approval'}</p>"
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
        "blocked_materials": blocked,
        "html_preview": html,
        "template_version": "bearing-production-notice/v1",
        "source_trace": {
            "bom_components": len(bom["components"]),
            "inventory_rows": len(data.inventory),
            "order_source": order["source_file"],
            "order_row": order["source_row"],
        },
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
        blocking_time = round(seconds * max(0.01, (3.4 - float(machine["cycle_time_sec"])) / 20) / 3600, 2)
        machine_reports.append(
            {
                "machine_id": machine["machine_id"],
                "name": machine["name"],
                "cycle_time_sec": machine["cycle_time_sec"],
                "good_output": round(good_output),
                "scrap_output": round(scrap_output),
                "utilization": round(utilization, 3),
                "waiting_time_hours": waiting_time,
                "blocking_time_hours": blocking_time,
                "state": "blocked" if blocking_time > 1 else "running",
            }
        )
    bottleneck = min(machine_reports, key=lambda row: row["good_output"])
    total_output = bottleneck["good_output"]
    scrap_output = round(sum(row["scrap_output"] for row in machine_reports) / len(machine_reports))
    report = {
        "run_id": f"SIM-{datetime.now(UTC).strftime('%Y%m%d%H%M%S')}",
        "line_id": line_id,
        "line_name": line["name"],
        "hours": hours,
        "total_output": total_output,
        "good_output": total_output,
        "scrap_output": scrap_output,
        "bottleneck_machine": bottleneck["machine_id"],
        "quality_bottleneck": max(machine_reports, key=lambda row: row["scrap_output"])["machine_id"],
        "machine_utilization": round(sum(row["utilization"] for row in machine_reports) / len(machine_reports), 3),
        "waiting_time_hours": round(sum(row["waiting_time_hours"] for row in machine_reports), 2),
        "blocking_time_hours": round(sum(row["blocking_time_hours"] for row in machine_reports), 2),
        "machine_reports": machine_reports,
        "transport_links": line["transport_links"],
        "improvement_suggestion": f"Review buffer and changeover rules around {bottleneck['machine_id']} before increasing release quantity.",
    }
    return report


def integration_status() -> list[dict[str, str]]:
    return [
        {"adapter": "ERP", "mode": "mock", "scope": "sales orders, purchase requests, material master"},
        {"adapter": "WMS", "mode": "mock", "scope": "material stock, finished goods, location, batch"},
        {"adapter": "MES", "mode": "stub", "scope": "work order status, output, scrap, downtime"},
        {"adapter": "PLC", "mode": "sample", "scope": "machine state, alarms, cycle signal, buffer full"},
        {"adapter": "WeChat", "mode": "stub", "scope": "message in, operations answer out"},
        {"adapter": "MCP", "mode": "ready-schema", "scope": "tools, resources, prompts"},
    ]


AGENT_TRACES: list[dict[str, Any]] = []


def agent_tools() -> list[dict[str, str]]:
    return [
        {"name": "search_material", "module": "bom_inventory", "description": "Search material master and supplier records."},
        {"name": "get_product_bom", "module": "bom_inventory", "description": "Return product BOM components."},
        {"name": "explode_bom", "module": "bom_inventory", "description": "Calculate component demand by quantity."},
        {"name": "calculate_inventory_risk", "module": "bom_inventory", "description": "Check inventory, in-transit stock, and supplier risk."},
        {"name": "generate_production_notice", "module": "notice", "description": "Generate a production notice preview."},
        {"name": "run_line_simulation", "module": "simulation", "description": "Run a deterministic 24h line simulation."},
        {"name": "detect_bottleneck", "module": "simulation", "description": "Identify throughput and quality bottlenecks."},
        {"name": "generate_daily_report", "module": "reporting", "description": "Compose an operations summary from tool results."},
    ]


def answer_factory_question(question: str, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    q = question.lower()
    tools: list[str] = []
    if "bottleneck" in q or "瓶颈" in question or "line" in q:
        report = run_line_simulation("LINE-BRG-6205-A", 24, data)
        tools = ["run_line_simulation", "detect_bottleneck"]
        answer = (
            f"Result: bottleneck detected at {report['bottleneck_machine']}. "
            f"Evidence: 24h good output {report['good_output']:,} pcs, average utilization {report['machine_utilization']:.1%}. "
            f"Next check: {report['improvement_suggestion']}"
        )
        payload = report
        workflow = "line_simulation_to_report"
    elif "notice" in q or "通知单" in question:
        notice = generate_production_notice("FG-6205-2RS", 12000, "SO-2026-0607-01", data)
        tools = ["get_product_bom", "calculate_inventory_risk", "generate_production_notice"]
        answer = (
            f"Result: production notice {notice['notice_id']} generated for {notice['quantity']:,.0f} pcs. "
            f"Evidence: material gate is {notice['material_status']}; BOM rows {notice['source_trace']['bom_components']}. "
            "Next check: confirm release timing with planning."
        )
        payload = notice
        workflow = "order_to_production_notice"
    else:
        risk = calculate_inventory_risk("FG-6205-2RS", 12000, data)
        tools = ["get_product_bom", "explode_bom", "calculate_inventory_risk"]
        critical = [row["material_id"] for row in risk["materials"] if row["status"] == "critical"]
        answer = (
            f"Result: material coverage status is {risk['overall_status']}. "
            f"Evidence: {risk['summary']['covered_items']} covered items, {risk['summary']['watch_items']} watch items, "
            f"{risk['summary']['critical_items']} critical items. "
            f"Next check: {'confirm ' + ', '.join(critical) if critical else 'release after first-piece approval'}."
        )
        payload = risk
        workflow = "order_to_material_risk"
    trace = {
        "trace_id": f"TRC-{str(uuid4())[:8].upper()}",
        "question": question,
        "workflow": workflow,
        "tools": tools,
        "created_at": datetime.now(UTC).isoformat(),
    }
    AGENT_TRACES.insert(0, trace)
    return {"answer": answer, "trace": trace, "data": payload}
