# Roadmap

## Current Scope

- Synthetic multi-product demo data import.
- S&OP control tower across demand, finished goods, material gate, capacity, policy risk and cash exposure.
- Deterministic 4-week demand forecast with TimesFM-ready adapter shape.
- External customs/policy signal model using official-source links and material/product matching.
- Source-backed decision brief with deterministic-tool-first model boundary.
- BOM-based material coverage and source trace.
- Release notice preview from order, product and material gate.
- 24h line simulation with bottleneck evidence.
- Agent tool registry and workflow traces.
- Mock/stub adapters for ERP, WMS, MES, PLC, scheduling and MCP boundaries.

## v0.4 Product Work

- Add persisted scenario switching for multiple industries and product families.
- Add import-profile samples for sales, stock, forecast, shipment and compliance files.
- Add forecast holdout evaluation with MAPE/MAE and interval calibration.
- Add policy-source polling adapter interface with cache, freshness and source-domain allowlist.
- Add release-gate checklist that combines material, policy, quality and capacity controls.

## Next Adapter Work

- ERP export adapter examples for sales orders and product master.
- WMS export adapter examples for inventory snapshots and inbound records.
- MES event adapter examples for work order status, scrap, downtime and shift output.
- PLC sample bridge for machine state, alarm, cycle signal and buffer state.
- Official-source policy adapter for customs and trade notices.
- Optional model adapter for TimesFM or managed time-series forecasting.
- MCP server wrapper for selected tools and resources.

## Productization Work

- Versioned notice-template registry with approval state.
- Import profiles for additional BOM, order and inventory formats.
- Visual regression checks for the dashboard and static docs.
- Optional scheduling experiment behind the existing scheduling adapter boundary.
- Daily operations report workflow with review notes and source refs.
