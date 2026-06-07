# Data Contract

## Materials

| Field | Meaning |
|---|---|
| `material_id` | Stable material code |
| `name` | Public demo material name |
| `category` | Material class |
| `uom` | Unit of measure |
| `supplier` | Demo supplier name |
| `lead_time_days` | Planning lead time |

## BOM Components

| Field | Meaning |
|---|---|
| `product_id` | Finished product code |
| `product_name` | Finished product name |
| `material_id` | Component material code |
| `qty_per_unit` | Required component quantity per finished unit |

## Inventory Snapshot

| Field | Meaning |
|---|---|
| `available_qty` | Current stock quantity |
| `reserved_qty` | Quantity already reserved |
| `location` | Demo WMS location |
| `source_file` | Source export name |
| `source_row` | Source row for traceability |

## Agent Tool Response

Each tool response must include:

- `result` or domain payload
- source trace where available
- workflow or tool name
- deterministic calculation output
- no hidden dependency on live factory systems

