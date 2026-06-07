from __future__ import annotations

from pathlib import Path
import json
import sqlite3


ROOT = Path(__file__).resolve().parents[1]
DB_PATH = ROOT / "database" / "factory_ops_demo.sqlite"
SCHEMA_PATH = ROOT / "database" / "schema.sql"
DEMO_PATH = ROOT / "demo_data"


TABLE_FILES = {
    "materials": "materials.json",
    "finished_products": "finished_products.json",
    "bom_components": "bom.json",
    "stock_locations": "stock_locations.json",
    "inventory_snapshots": "inventory.json",
    "customer_orders": "customer_orders.json",
    "shipment_records": "shipments.json",
    "supplier_delivery_records": "supplier_deliveries.json",
    "production_lines": "production_lines.json",
    "machine_events": "machine_events.json",
    "adapter_contracts": "adapters.json",
    "workflow_runs": "workflow_runs.json",
    "file_import_logs": "file_imports.json",
}


def load_rows(file_name: str) -> list[dict]:
    with (DEMO_PATH / file_name).open("r", encoding="utf-8") as handle:
        return json.load(handle)


def insert_rows(conn: sqlite3.Connection, table: str, rows: list[dict]) -> None:
    if not rows:
        return
    conn.execute(f"DELETE FROM {table}")
    columns = list(rows[0].keys())
    placeholders = ", ".join("?" for _ in columns)
    col_sql = ", ".join(columns)
    conn.executemany(
        f"INSERT INTO {table} ({col_sql}) VALUES ({placeholders})",
        [[normalize_value(row.get(column)) for column in columns] for row in rows],
    )


def normalize_value(value):
    if isinstance(value, (dict, list)):
        return json.dumps(value, ensure_ascii=False, sort_keys=True)
    if isinstance(value, bool):
        return int(value)
    return value


def main() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    if DB_PATH.exists():
        DB_PATH.unlink()
    conn = sqlite3.connect(DB_PATH)
    try:
        conn.executescript(SCHEMA_PATH.read_text(encoding="utf-8"))
        for table, file_name in TABLE_FILES.items():
            insert_rows(conn, table, load_rows(file_name))
        conn.commit()
    finally:
        conn.close()
    print(f"Seeded demo database: {DB_PATH}")


if __name__ == "__main__":
    main()
