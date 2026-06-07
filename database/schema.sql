CREATE TABLE IF NOT EXISTS materials (
  material_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  uom TEXT NOT NULL,
  supplier TEXT NOT NULL,
  lead_time_days INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS bom_components (
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  material_id TEXT NOT NULL,
  qty_per_unit REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS inventory_snapshots (
  material_id TEXT NOT NULL,
  available_qty REAL NOT NULL,
  reserved_qty REAL NOT NULL,
  location TEXT NOT NULL,
  source_file TEXT NOT NULL,
  source_row INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS customer_orders (
  order_id TEXT PRIMARY KEY,
  customer TEXT NOT NULL,
  product_id TEXT NOT NULL,
  qty REAL NOT NULL,
  due_date TEXT NOT NULL,
  priority TEXT NOT NULL,
  source_file TEXT NOT NULL,
  source_row INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS shipment_records (
  shipment_id TEXT PRIMARY KEY,
  material_id TEXT NOT NULL,
  qty REAL NOT NULL,
  eta TEXT NOT NULL,
  carrier TEXT NOT NULL,
  source_file TEXT NOT NULL,
  source_row INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS supplier_delivery_records (
  supplier TEXT PRIMARY KEY,
  on_time_rate REAL NOT NULL,
  open_po_qty REAL NOT NULL,
  risk_note TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS simulation_reports (
  run_id TEXT PRIMARY KEY,
  line_id TEXT NOT NULL,
  report_json TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS agent_traces (
  trace_id TEXT PRIMARY KEY,
  question TEXT NOT NULL,
  workflow TEXT NOT NULL,
  tools_json TEXT NOT NULL,
  created_at TEXT NOT NULL
);
