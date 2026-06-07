# Architecture

## Position

This project is a demo-ready operations intelligence layer between fragmented manufacturing data and operator-facing decisions. ERP, WMS, MES, PLC, spreadsheet exports, production notice workflows, line simulation, and agent-readable tools are connected through a small reproducible prototype.

## Runtime Layout

```text
demo_data
  -> deterministic domain engines
  -> FastAPI operations API
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

## Agent Boundary

The agent runtime is a caller and narrator, not the source of truth. Business values are computed by tools. The answer format is result, evidence, source, and next check.

## Adapter Boundary

Live integrations are not required for the portfolio demo. Adapters expose clear scope and mode so future ERP/WMS/MES/PLC work can connect without changing the business engines.

