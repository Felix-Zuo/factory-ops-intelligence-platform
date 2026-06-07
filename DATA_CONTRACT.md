# Data Contract

## Materials

| Field | Meaning |
|---|---|
| `material_id` | Stable material code |
| `name` | Public demo material name |
| `category` | Material class |
| `uom` | Unit of measure |
| `supplier` | Demo supplier name |
| `manufacturer` | Demo manufacturer name |
| `lead_time_days` | Planning lead time |
| `default_location_id` | Default WMS stock location |

## BOM Components

| Field | Meaning |
|---|---|
| `product_id` | Finished product code |
| `product_name` | Finished product name |
| `material_id` | Component material code |
| `qty_per_unit` | Required component quantity per finished unit |
| `operation_id` | Routing operation linked to this component |
| `source_file` / `source_row` | Source trace for the component row |

## Inventory Snapshot

| Field | Meaning |
|---|---|
| `available_qty` | Current stock quantity |
| `reserved_qty` | Quantity already reserved |
| `location` | Demo WMS location |
| `lot_no` | Demo lot number |
| `source_file` | Source export name |
| `source_row` | Source row for traceability |

## Adapter Contract

| Field | Meaning |
|---|---|
| `adapter` | ERP, WMS, MES, PLC, Scheduling, or MCP boundary |
| `mode` | `mock`, `stub`, `sample`, or `ready-schema` |
| `status` | Current demo status |
| `accepted_payloads` | Payload types accepted by the adapter contract |
| `last_sample_at` | Last demo sample timestamp |
| `known_gaps` | Explicit limitations for the public demo |

## Agent Trace

| Field | Meaning |
|---|---|
| `trace_id` | Stable trace identifier |
| `selected_intent` | Routed intent for the question |
| `workflow` | Selected workflow |
| `tool_calls` | Tool names, inputs, outputs and source refs |
| `final_answer` | Source-backed answer summary |

## Agent Tool Response

Each tool response must include:

- `result` or domain payload
- source trace where available
- workflow or tool name
- deterministic calculation output
- no hidden dependency on live factory systems
