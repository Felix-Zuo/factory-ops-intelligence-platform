from __future__ import annotations

from dataclasses import dataclass
from datetime import date, datetime, timedelta
from html import escape
from pathlib import Path
from typing import Any
import hashlib
import json


ROOT = Path(__file__).resolve().parents[3]
DEMO_DATA = ROOT / "demo_data"
DEMO_TIMESTAMP = "2026-06-07T08:00:00+00:00"
DEFAULT_PRODUCT_ID = "FG-OPS-A100"
DEFAULT_ORDER_ID = "SO-2026-OPS-001"
DEFAULT_LINE_ID = "LINE-UNIVERSAL-A"
DEFAULT_ORDER_QTY = 1200
NOTICE_TEMPLATE_VERSION = "ops-production-notice/v2"


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
    demand_history: list[dict[str, Any]]
    finished_goods_inventory: list[dict[str, Any]]
    product_economics: list[dict[str, Any]]
    policy_signals: list[dict[str, Any]]
    internal_issues: list[dict[str, Any]]
    scenario_profiles: list[dict[str, Any]]


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
        demand_history=_load_json("demand_history.json"),
        finished_goods_inventory=_load_json("finished_goods_inventory.json"),
        product_economics=_load_json("product_economics.json"),
        policy_signals=_load_json("policy_signals.json"),
        internal_issues=_load_json("internal_issues.json"),
        scenario_profiles=_load_json("scenario_profiles.json"),
    )


def _index(items: list[dict[str, Any]], key: str) -> dict[str, dict[str, Any]]:
    return {str(item[key]): item for item in items}


def _now_id(prefix: str) -> str:
    stable_ids = {
        "PN": "PN-DEMO-OPS-A100",
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


def _parse_day(value: str) -> date:
    return datetime.fromisoformat(value).date()


def _average(values: list[float]) -> float:
    return sum(values) / len(values) if values else 0.0


def _clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def forecast_demand(product_id: str | None = None, horizon_weeks: int = 4, data: FactoryData | None = None) -> dict[str, Any]:
    """Deterministic demand forecast with a TimesFM-ready interface boundary."""
    data = data or load_factory_data()
    horizon = int(_clamp(float(horizon_weeks), 1, 26))
    products = _index(list_products(data), "product_id")
    economics = _index(data.product_economics, "product_id") if data.product_economics else {}
    selected_ids = [product_id] if product_id else sorted(products)
    unknown = [item for item in selected_ids if item not in products]
    if unknown:
        raise ValueError(f"Unknown product_id: {unknown[0]}")

    rows: list[dict[str, Any]] = []
    total_forecast_qty = 0.0
    total_forecast_revenue = 0.0
    for item_id in selected_ids:
        history = sorted(
            [row for row in data.demand_history if row["product_id"] == item_id],
            key=lambda row: row["week_start"],
        )
        if not history:
            continue
        booked = [float(row["booked_qty"]) for row in history]
        last_window = booked[-4:] if len(booked) >= 4 else booked
        previous_window = booked[-8:-4] if len(booked) >= 8 else booked[: max(len(booked) - len(last_window), 0)]
        recent_average = _average(last_window)
        previous_average = _average(previous_window) if previous_window else recent_average
        trend_per_week = (recent_average - previous_average) / max(len(last_window), 1)
        signal_index = float(history[-1].get("market_signal_index", 1))
        base = recent_average * (0.86 + 0.14 * signal_index)
        unit_price = float(economics.get(item_id, {}).get("unit_price", 0))
        start = _parse_day(history[-1]["week_start"]) + timedelta(days=7)
        points: list[dict[str, Any]] = []
        for offset in range(horizon):
            forecast_qty = max(0, round(base + trend_per_week * (offset + 1)))
            lower = max(0, round(forecast_qty * 0.88))
            upper = round(forecast_qty * 1.15)
            total_forecast_qty += forecast_qty
            total_forecast_revenue += forecast_qty * unit_price
            points.append(
                {
                    "week_start": (start + timedelta(days=7 * offset)).isoformat(),
                    "forecast_qty": forecast_qty,
                    "p10_qty": lower,
                    "p90_qty": upper,
                    "forecast_revenue": round(forecast_qty * unit_price, 2),
                }
            )
        rows.append(
            {
                "product_id": item_id,
                "product_name": products[item_id]["product_name"],
                "forecast_family": economics.get(item_id, {}).get("forecast_family", "generic"),
                "model": "seasonal_naive_with_trend",
                "recent_average_qty": round(recent_average, 2),
                "trend_per_week": round(trend_per_week, 2),
                "market_signal_index": signal_index,
                "history": history[-8:],
                "forecast": points,
                "horizon_weeks": horizon,
                "timesfm_ready": {
                    "interface": "univariate_or_xreg_time_series",
                    "context_column": "booked_qty",
                    "timestamp_column": "week_start",
                    "entity_column": "product_id",
                    "future_covariates": ["market_signal_index", "calendar_week", "policy_risk_score"],
                    "status": "adapter_stub",
                    "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST.",
                },
            }
        )
    return {
        "generated_at": DEMO_TIMESTAMP,
        "horizon_weeks": horizon,
        "model_registry": [
            {
                "model_id": "baseline-seasonal-trend-v1",
                "status": "active",
                "explainability": "moving average, trend and bounded interval",
            },
            {
                "model_id": "timesfm-adapter",
                "status": "planned_adapter",
                "explainability": "requires holdout evaluation and quantile calibration before production use",
            },
        ],
        "series": rows,
        "summary": {
            "series_count": len(rows),
            "total_forecast_qty": round(total_forecast_qty),
            "total_forecast_revenue": round(total_forecast_revenue, 2),
        },
    }


def search_policy_signals(query: str = "", tags: list[str] | None = None, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    q = query.lower().strip()
    tag_set = {tag.lower() for tag in tags or []}
    products_by_material: dict[str, set[str]] = {}
    for row in data.bom:
        products_by_material.setdefault(row["material_id"], set()).add(row["product_id"])
    signals = []
    for signal in data.policy_signals:
        signal_tags = {str(tag).lower() for tag in signal.get("relevance_tags", [])}
        searchable = " ".join(
            [
                signal.get("title", ""),
                signal.get("summary", ""),
                signal.get("jurisdiction", ""),
                " ".join(signal.get("affected_materials", [])),
                " ".join(signal.get("relevance_tags", [])),
            ]
        ).lower()
        if q and q not in searchable:
            continue
        if tag_set and not tag_set.intersection(signal_tags):
            continue
        affected_products = sorted(
            {
                product_id
                for material_id in signal.get("affected_materials", [])
                for product_id in products_by_material.get(material_id, set())
            }
        )
        signals.append(
            {
                **signal,
                "affected_products": affected_products,
                "matched_open_orders": [
                    order["order_id"]
                    for order in data.customer_orders
                    if order["product_id"] in affected_products
                ],
            }
        )
    severity_order = {"critical": 0, "high": 1, "medium": 2, "watch": 3, "info": 4, "low": 5}
    signals.sort(key=lambda row: (severity_order.get(row.get("risk_level", "info"), 9), row.get("effective_at", "")))
    return {
        "generated_at": DEMO_TIMESTAMP,
        "adapter_contract": {
            "mode": "official-source-index-demo",
            "allowed_sources": ["customs.gov.cn", "cbp.gov"],
            "production_rule": "Fetch official feeds through a reviewed adapter, cache source metadata, and keep model summaries separate from source text.",
        },
        "signals": signals,
        "summary": {
            "signal_count": len(signals),
            "actionable_count": sum(1 for signal in signals if signal.get("risk_level") != "info"),
            "jurisdictions": sorted({signal["jurisdiction"] for signal in signals}),
        },
    }


def build_control_tower_overview(data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    products = _index(list_products(data), "product_id")
    economics = _index(data.product_economics, "product_id") if data.product_economics else {}
    finished_goods = _index(data.finished_goods_inventory, "product_id") if data.finished_goods_inventory else {}
    forecast = forecast_demand(horizon_weeks=4, data=data)
    forecast_by_product = {
        row["product_id"]: sum(point["forecast_qty"] for point in row["forecast"])
        for row in forecast["series"]
    }
    today = _parse_day(DEMO_TIMESTAMP[:10])
    orders_by_product: dict[str, list[dict[str, Any]]] = {}
    for order in data.customer_orders:
        orders_by_product.setdefault(order["product_id"], []).append(order)

    product_rows = []
    total_backlog_value = 0.0
    total_margin_value = 0.0
    material_watch = 0
    material_critical = 0
    for product_id, product in products.items():
        product_orders = orders_by_product.get(product_id, [])
        open_qty = sum(float(order["qty"]) for order in product_orders)
        unit_price = float(economics.get(product_id, {}).get("unit_price", 0))
        unit_cost = float(economics.get(product_id, {}).get("unit_cost", 0))
        backlog_value = open_qty * unit_price
        margin_value = open_qty * max(unit_price - unit_cost, 0)
        total_backlog_value += backlog_value
        total_margin_value += margin_value
        fg = finished_goods.get(product_id, {})
        available_fg = float(fg.get("on_hand_qty", 0)) - float(fg.get("reserved_qty", 0))
        forecast_qty = forecast_by_product.get(product_id, 0)
        daily_demand = forecast_qty / 28 if forecast_qty else 0
        coverage_days = available_fg / daily_demand if daily_demand else 999
        target_cover = float(economics.get(product_id, {}).get("target_days_of_cover", 14))
        risk = calculate_inventory_risk(product_id, max(open_qty, 1), data)
        material_watch += risk["summary"]["watch_items"]
        material_critical += risk["summary"]["critical_items"]
        line_id = economics.get(product_id, {}).get("preferred_line_id", DEFAULT_LINE_ID)
        simulation = run_line_simulation(line_id, 24, data)
        weekly_capacity = simulation["good_output"] * 5
        capacity_gap_qty = max(open_qty + forecast_qty - weekly_capacity, 0)
        due_soon = [
            order for order in product_orders
            if (_parse_day(order["due_date"]) - today).days <= 21
        ]
        if risk["overall_status"] == "critical" or coverage_days < target_cover * 0.45 or capacity_gap_qty > 0:
            status = "critical"
        elif risk["overall_status"] == "watch" or coverage_days < target_cover:
            status = "watch"
        else:
            status = "healthy"
        product_rows.append(
            {
                "product_id": product_id,
                "product_name": product["product_name"],
                "planning_policy": product.get("planning_policy", ""),
                "open_order_qty": round(open_qty),
                "open_order_count": len(product_orders),
                "due_soon_count": len(due_soon),
                "backlog_value": round(backlog_value, 2),
                "gross_margin_value": round(margin_value, 2),
                "forecast_4w_qty": round(forecast_qty),
                "finished_goods_available": round(available_fg),
                "coverage_days": round(coverage_days, 1) if coverage_days < 999 else 999,
                "target_days_of_cover": target_cover,
                "material_status": risk["overall_status"],
                "capacity_line_id": line_id,
                "weekly_capacity_qty": round(weekly_capacity),
                "capacity_gap_qty": round(capacity_gap_qty),
                "status": status,
                "recommended_action": (
                    "Hold release and resolve material shortage" if risk["overall_status"] == "critical"
                    else "Review supply and frozen schedule" if status == "watch"
                    else "Release through normal S&OP gate"
                ),
            }
        )

    policy = search_policy_signals(data=data)
    issue_counts: dict[str, int] = {}
    for issue in data.internal_issues:
        issue_counts[issue["severity"]] = issue_counts.get(issue["severity"], 0) + 1
    score = 100
    score -= min(material_critical * 10, 35)
    score -= min(material_watch * 2, 28)
    score -= min(policy["summary"]["actionable_count"] * 4, 18)
    score -= min(issue_counts.get("high", 0) * 8, 16)
    score -= min(issue_counts.get("medium", 0) * 3, 18)
    score = int(_clamp(score, 0, 100))
    risk_products = [row for row in product_rows if row["status"] != "healthy"]
    return {
        "generated_at": DEMO_TIMESTAMP,
        "operating_score": score,
        "kpis": {
            "open_order_qty": round(sum(row["open_order_qty"] for row in product_rows)),
            "open_order_value": round(total_backlog_value, 2),
            "gross_margin_value": round(total_margin_value, 2),
            "forecast_4w_qty": forecast["summary"]["total_forecast_qty"],
            "material_watch_items": material_watch,
            "material_critical_items": material_critical,
            "external_actionable_signals": policy["summary"]["actionable_count"],
            "open_internal_issues": len([issue for issue in data.internal_issues if issue["status"] == "open"]),
        },
        "product_health": product_rows,
        "operating_loop": [
            {"stage": "Sales", "status": "active", "evidence": f"{len(data.customer_orders)} open demo orders", "action": "Confirm priority and due-date risk."},
            {"stage": "Planning", "status": "watch" if risk_products else "healthy", "evidence": f"{forecast['summary']['series_count']} forecast series", "action": "Reconcile demand, frozen plan and line capacity weekly."},
            {"stage": "Procurement", "status": "watch" if material_watch else "healthy", "evidence": f"{material_watch} watch components", "action": "Focus on supplier ETAs that change release gates."},
            {"stage": "Warehouse", "status": "active", "evidence": f"{len(data.inventory)} material stock rows", "action": "Keep source-row trace for every coverage decision."},
            {"stage": "Production", "status": "watch", "evidence": "24h deterministic line simulations", "action": "Use bottleneck report before increasing release quantity."},
            {"stage": "Compliance", "status": "watch" if policy["summary"]["actionable_count"] else "healthy", "evidence": f"{policy['summary']['signal_count']} external signals", "action": "Review official-source policy matches before shipment release."},
            {"stage": "Intelligence", "status": "active", "evidence": f"{len(agent_tools())} registered tools", "action": "Route questions to deterministic tools before model summarization."},
        ],
        "alerts": [
            {
                "id": issue["issue_id"],
                "severity": issue["severity"],
                "area": issue["area"],
                "title": issue["title"],
                "action": issue["owner"],
                "source": issue["source"],
            }
            for issue in data.internal_issues
        ][:8],
        "forecast_summary": forecast["summary"],
        "policy_summary": policy["summary"],
    }


def list_scenario_profiles(data: FactoryData | None = None) -> list[dict[str, Any]]:
    data = data or load_factory_data()
    return [
        {
            **profile,
            "source_trace": source_ref("scenario_profiles.json", index + 1, "profile_id"),
        }
        for index, profile in enumerate(data.scenario_profiles)
    ]


def build_release_gate(order_id: str = DEFAULT_ORDER_ID, data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    order = next((item for item in data.customer_orders if item["order_id"] == order_id), None)
    if not order:
        raise ValueError(f"Unknown order_id: {order_id}")

    product_id = order["product_id"]
    quantity = float(order["qty"])
    coverage = check_order_material_coverage(order_id, data)
    simulation = run_line_simulation(DEFAULT_LINE_ID, 24, data)
    policy = search_policy_signals(query=product_id, data=data)
    if not policy["signals"]:
        policy = search_policy_signals(data=data)
    trace = product_material_trace(product_id, quantity, data)

    weekly_capacity = simulation["good_output"] * 5
    due_in_days = (_parse_day(order["due_date"]) - _parse_day(DEMO_TIMESTAMP[:10])).days
    capacity_required = quantity
    capacity_status = "pass" if weekly_capacity >= capacity_required else "review"
    material_status = coverage["material_gate_status"]
    policy_status = "review" if policy["summary"]["actionable_count"] else "pass"
    quality_status = "review" if simulation["quality_bottleneck"] else "pass"
    trace_status = "pass" if trace["source_refs"] else "blocked"
    approval_status = "pending"

    checks = [
        {
            "check_id": "material_coverage",
            "name": "Material coverage",
            "status": "blocked" if material_status == "critical" else "review" if material_status == "watch" else "pass",
            "owner": "Planning",
            "evidence": f"{coverage['risk']['summary']['covered_items']} covered, {coverage['risk']['summary']['watch_items']} watch, {coverage['risk']['summary']['critical_items']} critical.",
            "action": coverage["release_recommendation"],
        },
        {
            "check_id": "capacity_fit",
            "name": "Capacity fit",
            "status": capacity_status,
            "owner": "Manufacturing Engineering",
            "evidence": f"{weekly_capacity:,.0f} weekly simulated capacity vs {capacity_required:,.0f} order units due in {due_in_days} days.",
            "action": "Release through normal capacity window" if capacity_status == "pass" else "Review line loading and bottleneck buffer before release.",
        },
        {
            "check_id": "policy_signal",
            "name": "Policy and customs signal",
            "status": policy_status,
            "owner": "Trade Compliance",
            "evidence": f"{policy['summary']['actionable_count']} actionable official-source signals linked to the portfolio.",
            "action": "Screen affected materials before shipment release." if policy_status == "review" else "No policy exception in demo signal set.",
        },
        {
            "check_id": "quality_hold",
            "name": "Quality hold",
            "status": quality_status,
            "owner": "Quality",
            "evidence": f"Quality bottleneck signal at {simulation['quality_bottleneck']}.",
            "action": "Confirm first-piece and serialized label controls before export." if quality_status == "review" else "No quality hold detected.",
        },
        {
            "check_id": "source_trace",
            "name": "Source trace completeness",
            "status": trace_status,
            "owner": "Data Steward",
            "evidence": f"{len(trace['source_refs'])} BOM, stock, inbound and supplier refs linked.",
            "action": "Keep source-row evidence attached to the notice package.",
        },
        {
            "check_id": "human_approval",
            "name": "Human approval",
            "status": approval_status,
            "owner": "Operations Manager",
            "evidence": "Public demo does not auto-approve production or shipment release.",
            "action": "Approve after material, policy and quality review notes are closed.",
        },
    ]
    if any(check["status"] == "blocked" for check in checks):
        decision = "blocked"
    elif any(check["status"] in {"review", "pending"} for check in checks):
        decision = "release_with_controls"
    else:
        decision = "release"
    return {
        "generated_at": DEMO_TIMESTAMP,
        "order": order,
        "product_id": product_id,
        "quantity": quantity,
        "decision": decision,
        "checks": checks,
        "summary": {
            "pass": sum(1 for check in checks if check["status"] == "pass"),
            "review": sum(1 for check in checks if check["status"] == "review"),
            "pending": sum(1 for check in checks if check["status"] == "pending"),
            "blocked": sum(1 for check in checks if check["status"] == "blocked"),
        },
        "recommended_next_step": "Close review and approval checks before exporting the final notice package.",
        "source_refs": coverage["source_refs"] + trace["source_refs"],
    }


def generate_decision_brief(question: str = "What should operations review today?", data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    overview = build_control_tower_overview(data)
    forecast = forecast_demand(horizon_weeks=4, data=data)
    policy = search_policy_signals(data=data)
    risk_products = [row for row in overview["product_health"] if row["status"] != "healthy"]
    top_product = risk_products[0] if risk_products else overview["product_health"][0]
    actions = [
        {
            "priority": "P0" if top_product["status"] == "critical" else "P1",
            "owner": "Planning",
            "action": f"Run S&OP exception review for {top_product['product_id']}.",
            "evidence": f"{top_product['forecast_4w_qty']} forecast units, {top_product['material_status']} material status, {top_product['coverage_days']} coverage days.",
        },
        {
            "priority": "P1",
            "owner": "Procurement",
            "action": "Confirm ETA and alternate supply for watch components before release.",
            "evidence": f"{overview['kpis']['material_watch_items']} watch items and {overview['kpis']['material_critical_items']} critical items across the demo portfolio.",
        },
        {
            "priority": "P1",
            "owner": "Trade Compliance",
            "action": "Screen affected export orders against current customs-policy signals.",
            "evidence": f"{policy['summary']['actionable_count']} actionable official-source signals are linked to product/material context.",
        },
        {
            "priority": "P2",
            "owner": "Manufacturing Engineering",
            "action": "Review bottleneck buffer settings before approving demand upside.",
            "evidence": "Line simulation links throughput, waiting and blocking metrics to the release decision.",
        },
    ]
    return {
        "generated_at": DEMO_TIMESTAMP,
        "question": question[:500],
        "executive_answer": (
            f"Operating score is {overview['operating_score']}/100. "
            f"Review {top_product['product_id']} first, keep supplier ETA and policy checks in the release gate, "
            "and use the deterministic forecast as the baseline before any external model summary."
        ),
        "actions": actions,
        "analysis_lanes": [
            {"lane": "Demand", "signal": f"{forecast['summary']['total_forecast_qty']} units forecast over 4 weeks", "risk": "trend drift" if risk_products else "normal"},
            {"lane": "Supply", "signal": f"{overview['kpis']['material_watch_items']} watch items", "risk": "release delay"},
            {"lane": "Capacity", "signal": "24h line simulation available", "risk": "buffer and bottleneck pressure"},
            {"lane": "Compliance", "signal": f"{policy['summary']['signal_count']} policy signals", "risk": "declaration or inspection change"},
            {"lane": "Cash", "signal": f"${overview['kpis']['open_order_value']:,.0f} open order value", "risk": "inventory and backlog tradeoff"},
        ],
        "source_evidence": {
            "orders": len(data.customer_orders),
            "demand_history_rows": len(data.demand_history),
            "inventory_rows": len(data.inventory),
            "policy_signals": len(data.policy_signals),
            "internal_issues": len(data.internal_issues),
        },
        "model_boundary": {
            "llm_status": "optional_adapter",
            "safe_default": "deterministic_tools_first",
            "contract": "A model may summarize retrieved evidence and propose next questions, but source-linked calculations remain owned by domain functions.",
        },
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
    safe_notice_id = escape(str(notice_id))
    safe_product_name = escape(str(bom["product_name"]))
    safe_product_id = escape(str(product_id))
    safe_order_id = escape(str(order["order_id"]))
    safe_due_date = escape(str(order["due_date"]))
    safe_material_gate = escape(material_gate)
    html = (
        "<section class='notice-sheet'>"
        f"<h1>Release Notice {safe_notice_id}</h1>"
        f"<p><strong>Product:</strong> {safe_product_name} ({safe_product_id})</p>"
        f"<p><strong>Quantity:</strong> {quantity:,.0f} pcs</p>"
        f"<p><strong>Customer order:</strong> {safe_order_id} / due {safe_due_date}</p>"
        f"<p><strong>Material gate:</strong> {safe_material_gate}</p>"
        "<table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody>"
        + "".join(
            f"<tr><td>{escape(str(row['material_id']))}</td><td>{row['required_qty']:,.1f} {escape(str(row['uom']))}</td><td>{row['coverage_qty']:,.1f}</td><td>{escape(str(row['status']))}</td></tr>"
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
        "template_version": NOTICE_TEMPLATE_VERSION,
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
    cycle_times = [float(machine["cycle_time_sec"]) for machine in line["machines"]]
    median_cycle = sorted(cycle_times)[len(cycle_times) // 2]
    for machine in line["machines"]:
        cycle_time = float(machine["cycle_time_sec"])
        theoretical = seconds / cycle_time
        available_output = theoretical * float(machine["availability"])
        good_output = available_output * float(machine["yield_rate"])
        scrap_output = max(available_output - good_output, 0)
        utilization = min(float(machine["availability"]) * 0.96, 0.99)
        waiting_time = round(seconds * max(0.02, 1 - utilization) * 0.18 / 3600, 2)
        cycle_pressure = max(0.0, cycle_time - median_cycle)
        blocking_time = round(seconds * max(0.01, cycle_pressure / max(median_cycle * 4, 1)) / 3600, 2)
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
    report = run_line_simulation(DEFAULT_LINE_ID, 24, data)
    if run_id not in {"latest", report["run_id"]}:
        raise ValueError(f"Unknown run_id: {run_id}")
    return report


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
        tool_schema("build_control_tower_overview", "Build a cross-functional S&OP, inventory, capacity, compliance and cash view.", {"type": "object", "properties": {}}, ["operating_score", "kpis", "product_health"], "build_control_tower_overview"),
        tool_schema("forecast_demand", "Forecast demand with a deterministic baseline and TimesFM-ready series contract.", {"type": "object", "properties": {"product_id": {"type": "string"}, "horizon_weeks": {"type": "integer"}}}, ["series", "summary", "model_registry"], "forecast_demand"),
        tool_schema("search_policy_signals", "Search official-source policy and customs signals linked to products and materials.", {"type": "object", "properties": {"query": {"type": "string"}, "tags": {"type": "array", "items": {"type": "string"}}}}, ["signals", "summary"], "search_policy_signals"),
        tool_schema("generate_decision_brief", "Generate a source-backed operations decision brief.", {"type": "object", "properties": {"question": {"type": "string"}}}, ["executive_answer", "actions", "analysis_lanes"], "generate_decision_brief"),
        tool_schema("generate_daily_report", "Compose an operations summary from tool outputs.", {"type": "object", "properties": {"day": {"type": "string"}}}, ["summary", "exceptions", "source_refs"], "generate_daily_report"),
        tool_schema("answer_factory_question", "Route a factory question to the correct workflow and tools.", {"type": "object", "required": ["question"], "properties": {"question": {"type": "string"}}}, ["answer", "trace", "data"], "answer_factory_question"),
    ]


def generate_daily_report(data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    risk = calculate_inventory_risk(DEFAULT_PRODUCT_ID, DEFAULT_ORDER_QTY, data)
    simulation = run_line_simulation(DEFAULT_LINE_ID, 24, data)
    bottleneck = detect_bottleneck(simulation)
    adapters = integration_status(data)
    exceptions = []
    if risk["overall_status"] != "covered":
        exceptions.append(f"Material gate is {risk['overall_status']} for {DEFAULT_PRODUCT_ID}.")
    exceptions.append(f"Bottleneck review required at {bottleneck['bottleneck_machine']}.")
    exceptions.extend([f"{item['adapter']} adapter is {item['mode']}." for item in adapters if item["mode"] in {"stub", "sample", "ready-schema"}])
    return {
        "summary": f"{DEFAULT_PRODUCT_ID} can proceed with material follow-up and bottleneck review.",
        "exceptions": exceptions,
        "follow_up_list": ["Confirm sensor module dock date.", "Review OP-40 buffer rule.", "Keep MES and PLC adapters in sample mode."],
        "source_refs": risk["source_refs"],
        "simulation_run_id": simulation["run_id"],
    }


AGENT_TRACE_LIMIT = 25
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
    if "policy" in q or "customs" in q or "tariff" in q or "海关" in question or "政策" in question:
        workflow = "external_policy_review"
        intent = "policy_signal_review"
        policy = search_policy_signals(question, data=data)
        brief = generate_decision_brief(question, data)
        tool_calls.append(_trace_call("search_policy_signals", {"query": question}, policy))
        tool_calls.append(_trace_call("generate_decision_brief", {"question": question}, brief))
        final_answer = (
            f"Result: {policy['summary']['actionable_count']} actionable policy signals are linked to operations context. "
            f"Evidence: {policy['summary']['signal_count']} official-source signals cover {', '.join(policy['summary']['jurisdictions'])}. "
            "Next check: screen affected export orders before shipment release."
        )
        payload = {"policy": policy, "brief": brief}
    elif "forecast" in q or "demand" in q or "timesfm" in q or "预测" in question or "需求" in question:
        workflow = "demand_forecast_review"
        intent = "demand_forecast"
        forecast = forecast_demand(horizon_weeks=4, data=data)
        overview = build_control_tower_overview(data)
        tool_calls.append(_trace_call("forecast_demand", {"horizon_weeks": 4}, forecast))
        tool_calls.append(_trace_call("build_control_tower_overview", {}, overview))
        final_answer = (
            f"Result: 4-week forecast is {forecast['summary']['total_forecast_qty']:,} units across {forecast['summary']['series_count']} series. "
            f"Evidence: baseline model is active and TimesFM adapter is {forecast['model_registry'][1]['status']}. "
            "Next check: compare forecast upside with material gates and line capacity."
        )
        payload = {"forecast": forecast, "overview": overview}
    elif "s&op" in q or "control tower" in q or "control" in q or "decision" in q or "产销存" in question or "决策" in question or "总控" in question:
        workflow = "control_tower_review"
        intent = "operations_control_tower"
        overview = build_control_tower_overview(data)
        brief = generate_decision_brief(question, data)
        tool_calls.append(_trace_call("build_control_tower_overview", {}, overview))
        tool_calls.append(_trace_call("generate_decision_brief", {"question": question}, brief))
        final_answer = (
            f"Result: operating score is {overview['operating_score']}/100. "
            f"Evidence: ${overview['kpis']['open_order_value']:,.0f} open order value, {overview['kpis']['material_watch_items']} material watch items and {overview['kpis']['external_actionable_signals']} policy signals. "
            "Next check: execute the decision brief actions in priority order."
        )
        payload = {"overview": overview, "brief": brief}
    elif "bottleneck" in q or "瓶颈" in question or "line" in q or "simulation" in q or "产线" in question:
        workflow = "line_simulation_to_report"
        intent = "simulation_bottleneck"
        simulation = run_line_simulation(DEFAULT_LINE_ID, 24, data)
        bottleneck = detect_bottleneck(simulation)
        tool_calls.append(_trace_call("run_line_simulation", {"line_id": DEFAULT_LINE_ID, "hours": 24}, simulation))
        tool_calls.append(_trace_call("detect_bottleneck", {"run_id": simulation["run_id"]}, bottleneck))
        final_answer = (
            f"Result: bottleneck detected at {bottleneck['bottleneck_machine']}. "
            f"Evidence: 24h good output {simulation['good_output']:,} pcs and average utilization {simulation['machine_utilization']:.1%}. "
            f"Source: {len(simulation['source_events'])} machine events are linked. "
            f"Next check: {bottleneck['next_check']}"
        )
        payload = {"simulation": simulation, "bottleneck": bottleneck}
    elif "notice" in q or "通知单" in question or "release" in q or "放行" in question:
        workflow = "order_to_production_notice"
        intent = "production_notice"
        coverage = check_order_material_coverage(DEFAULT_ORDER_ID, data)
        notice = generate_production_notice(DEFAULT_PRODUCT_ID, DEFAULT_ORDER_QTY, DEFAULT_ORDER_ID, data)
        tool_calls.append(_trace_call("check_order_material_coverage", {"order_id": DEFAULT_ORDER_ID}, coverage))
        tool_calls.append(_trace_call("generate_production_notice", {"product_id": DEFAULT_PRODUCT_ID, "quantity": DEFAULT_ORDER_QTY}, notice))
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
        bom = get_product_bom(DEFAULT_PRODUCT_ID, data)
        exploded = explode_bom(DEFAULT_PRODUCT_ID, DEFAULT_ORDER_QTY, data)
        risk = calculate_inventory_risk(DEFAULT_PRODUCT_ID, DEFAULT_ORDER_QTY, data)
        tool_calls.append(_trace_call("get_product_bom", {"product_id": DEFAULT_PRODUCT_ID}, bom))
        tool_calls.append(_trace_call("explode_bom", {"product_id": DEFAULT_PRODUCT_ID, "quantity": DEFAULT_ORDER_QTY}, exploded))
        tool_calls.append(_trace_call("calculate_inventory_risk", {"product_id": DEFAULT_PRODUCT_ID, "quantity": DEFAULT_ORDER_QTY}, risk))
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
    del AGENT_TRACES[AGENT_TRACE_LIMIT:]
    return {"answer": final_answer, "trace": trace, "data": payload}


def demo_snapshot(data: FactoryData | None = None) -> dict[str, Any]:
    data = data or load_factory_data()
    risk = calculate_inventory_risk(DEFAULT_PRODUCT_ID, DEFAULT_ORDER_QTY, data)
    trace = product_material_trace(DEFAULT_PRODUCT_ID, DEFAULT_ORDER_QTY, data)
    notice = generate_production_notice(DEFAULT_PRODUCT_ID, DEFAULT_ORDER_QTY, DEFAULT_ORDER_ID, data)
    simulation = run_line_simulation(DEFAULT_LINE_ID, 24, data)
    overview = build_control_tower_overview(data)
    demand = forecast_demand(horizon_weeks=4, data=data)
    policy = search_policy_signals(data=data)
    decision = generate_decision_brief("What should operations review before the next release?", data)
    release_gate = build_release_gate(DEFAULT_ORDER_ID, data)
    agent_answer = answer_factory_question("Give me a control tower decision brief for demand, supply and capacity.", data)
    return {
        "health": {"mode": "demo", "products": len(list_products(data)), "materials": len(data.materials), "adapters": "mock/stub"},
        "products": list_products(data),
        "imports": data.file_imports,
        "orders": data.customer_orders,
        "finishedGoods": data.finished_goods_inventory,
        "demandHistory": data.demand_history,
        "controlTower": overview,
        "demandForecast": demand,
        "policySignals": policy,
        "decisionBrief": decision,
        "releaseGate": release_gate,
        "scenarioProfiles": list_scenario_profiles(data),
        "internalIssues": data.internal_issues,
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
