# Technical Analysis

## Reference Inputs

This version consolidates patterns from the adjacent public showcase projects:

- spreadsheet classification and configurable metrics from `factory-excel-ops-dashboard`;
- generic work-package generation from `factory-production-notice-agent`;
- takt and bottleneck simulation from `factory-takt-simulator`;
- reusable data-model learning structure from `factory-data-pocket-lab`;
- product maturity gates from `HulunGuard`.

The original projects were used as read-only references. This repository keeps its own generic model and synthetic data.

## Domain Model

The product now has five connected layers:

1. Master data: products, materials, BOM, economics and locations.
2. Transaction data: orders, finished goods, inventory, inbound shipments and demand history.
3. Operating models: material coverage, forecast, capacity simulation and policy signal matching.
4. Intelligence layer: decision brief, issue queue and agent tool trace.
5. Delivery surfaces: FastAPI routes, generated frontend snapshot, React dashboard and SQLite seed.

## Forecasting Approach

The active forecast is deliberately deterministic: recent average, trend and bounded forecast intervals. This keeps the public demo explainable and testable.

The data contract is TimesFM-ready:

- `entity_column`: `product_id`
- `timestamp_column`: `week_start`
- `context_column`: `booked_qty`
- future covariates: market signal, calendar week and policy risk score

TimesFM should be added behind an adapter only after holdout evaluation, interval calibration and documented fallback behavior.

## External Signal Approach

The public demo includes official-source links for customs and policy examples. Production adapters should:

- fetch only reviewed source domains;
- store published/effective dates and URL provenance;
- bind signals to tags, materials, products and order lanes;
- separate source facts from model summaries;
- keep compliance review as a human-owned release gate.

## Risk Controls

- FastAPI request payloads have size and numeric bounds.
- CORS is limited to local dashboard origins.
- SQLite is generated from checked-in synthetic JSON, not from private exports.
- Agent answers record selected workflow and tool calls.
- Frontend is generated from deterministic snapshot data and builds with TypeScript.

