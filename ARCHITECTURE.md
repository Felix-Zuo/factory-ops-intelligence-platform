# Architecture

## Position

This project is a demo-ready operations intelligence layer between fragmented manufacturing data and operator-facing decisions. ERP, WMS, MES, PLC, spreadsheet exports, production notice workflows, line simulation, and agent-readable tools are connected through a small reproducible prototype.

## Runtime Layout

```text
demo_data
  -> deterministic domain engines
  -> FastAPI operations API
  -> generated frontend snapshot
  -> React engineering console
  -> agent_workspace tools and workflows
```

## Core Modules

| Module | Responsibility |
|---|---|
| Data Import Center | Classify and parse demo factory files |
| BOM & Inventory | Explode BOM, calculate stock coverage, retain source trace |
| Product Material Trace | Connect finished product, components, inventory, inbound records, orders, and suppliers |
| Production Notice | Generate preview and export-ready content from product/order/material context |
| Line Simulation | Run deterministic 24h line output and bottleneck calculation |
| Agent Runtime | Register tools, execute workflows, store traces |
| Integration Status | Show ERP/WMS/MES/PLC/WeChat/MCP adapter mode |

## Data Surface

The demo data pack contains materials, finished products, BOM components, stock snapshots, stock locations, customer orders, inbound shipments, supplier delivery records, production lines, machine events, adapter contracts and workflow records. The SQLite seed is rebuilt from these files with `scripts/seed_demo_data.py`.

## Frontend Data Boundary

The dashboard uses `scripts/generate_frontend_snapshot.py` to write `apps/web-dashboard/src/demoSnapshot.ts` from deterministic backend functions. This keeps the public UI reproducible without requiring a running API while preserving the same calculation outputs used by smoke tests and API routes.

## Agent Boundary

The agent runtime is a caller and narrator, not the source of truth. Business values are computed by tools. The answer format is result, evidence, source, and next check.

## Adapter Boundary

Live integrations are not required for the portfolio demo. Adapters expose clear scope and mode so future ERP/WMS/MES/PLC work can connect without changing the business engines.
