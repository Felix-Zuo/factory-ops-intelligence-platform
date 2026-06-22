CREATE TABLE IF NOT EXISTS materials (
  material_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  uom TEXT NOT NULL,
  supplier TEXT NOT NULL,
  manufacturer TEXT NOT NULL,
  lead_time_days INTEGER NOT NULL,
  is_serialized INTEGER NOT NULL,
  default_location_id TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS finished_products (
  product_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  revision TEXT NOT NULL,
  default_bom_id TEXT NOT NULL,
  route_id TEXT NOT NULL,
  planning_policy TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS product_economics (
  product_id TEXT PRIMARY KEY,
  forecast_family TEXT NOT NULL,
  unit_price REAL NOT NULL,
  unit_cost REAL NOT NULL,
  target_days_of_cover REAL NOT NULL,
  criticality TEXT NOT NULL,
  preferred_line_id TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS finished_goods_inventory (
  product_id TEXT PRIMARY KEY,
  on_hand_qty REAL NOT NULL,
  reserved_qty REAL NOT NULL,
  location TEXT NOT NULL,
  status TEXT NOT NULL,
  cycle_count_accuracy REAL NOT NULL,
  last_counted_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS demand_history (
  week_start TEXT NOT NULL,
  product_id TEXT NOT NULL,
  booked_qty REAL NOT NULL,
  shipped_qty REAL NOT NULL,
  backlog_qty REAL NOT NULL,
  market_signal_index REAL NOT NULL,
  PRIMARY KEY (week_start, product_id)
);

CREATE TABLE IF NOT EXISTS bom_components (
  bom_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  revision TEXT NOT NULL,
  operation_id TEXT NOT NULL,
  material_id TEXT NOT NULL,
  qty_per_unit REAL NOT NULL,
  source_file TEXT NOT NULL,
  source_row INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS stock_locations (
  location_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  parent_location_id TEXT NOT NULL,
  location_type TEXT NOT NULL,
  is_external INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS inventory_snapshots (
  snapshot_id TEXT PRIMARY KEY,
  material_id TEXT NOT NULL,
  available_qty REAL NOT NULL,
  reserved_qty REAL NOT NULL,
  location TEXT NOT NULL,
  lot_no TEXT NOT NULL,
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

CREATE TABLE IF NOT EXISTS production_lines (
  line_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  product_id TEXT NOT NULL,
  shift_hours REAL NOT NULL,
  status TEXT NOT NULL,
  adapter_mode TEXT NOT NULL,
  machines TEXT NOT NULL,
  transport_links TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS machine_events (
  event_id TEXT PRIMARY KEY,
  machine_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  metadata_json TEXT NOT NULL,
  source_adapter TEXT NOT NULL,
  event_time TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS adapter_contracts (
  adapter TEXT PRIMARY KEY,
  mode TEXT NOT NULL,
  status TEXT NOT NULL,
  source_system TEXT NOT NULL,
  accepted_payloads TEXT NOT NULL,
  last_sample_at TEXT NOT NULL,
  known_gaps TEXT NOT NULL,
  scope TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS production_notices (
  notice_id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  qty REAL NOT NULL,
  material_gate_status TEXT NOT NULL,
  template_version TEXT NOT NULL,
  created_at TEXT NOT NULL,
  source_refs_json TEXT NOT NULL
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
  selected_intent TEXT NOT NULL,
  workflow TEXT NOT NULL,
  tool_calls_json TEXT NOT NULL,
  source_refs_json TEXT NOT NULL,
  final_answer TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS workflow_runs (
  workflow_run_id TEXT PRIMARY KEY,
  workflow_name TEXT NOT NULL,
  status TEXT NOT NULL,
  current_step TEXT NOT NULL,
  input_json TEXT NOT NULL,
  result_json TEXT NOT NULL,
  checkpoint_json TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS file_import_logs (
  file_name TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  status TEXT NOT NULL,
  rows INTEGER NOT NULL,
  quality TEXT NOT NULL,
  parser TEXT NOT NULL,
  source_system TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS policy_signals (
  signal_id TEXT PRIMARY KEY,
  source_name TEXT NOT NULL,
  source_type TEXT NOT NULL,
  region TEXT NOT NULL,
  jurisdiction TEXT NOT NULL,
  title TEXT NOT NULL,
  published_at TEXT NOT NULL,
  effective_at TEXT NOT NULL,
  risk_level TEXT NOT NULL,
  relevance_tags TEXT NOT NULL,
  affected_materials TEXT NOT NULL,
  summary TEXT NOT NULL,
  recommended_action TEXT NOT NULL,
  source_url TEXT NOT NULL,
  adapter_mode TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS internal_issues (
  issue_id TEXT PRIMARY KEY,
  area TEXT NOT NULL,
  severity TEXT NOT NULL,
  title TEXT NOT NULL,
  symptom TEXT NOT NULL,
  linked_entity TEXT NOT NULL,
  owner TEXT NOT NULL,
  status TEXT NOT NULL,
  source TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS scenario_profiles (
  profile_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  domain TEXT NOT NULL,
  primary_users TEXT NOT NULL,
  decision_loop TEXT NOT NULL,
  required_sources TEXT NOT NULL,
  release_controls TEXT NOT NULL,
  sample_products TEXT NOT NULL,
  status TEXT NOT NULL
);
