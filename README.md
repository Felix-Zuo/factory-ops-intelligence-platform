# Operations Intelligence Platform

[![CI](https://github.com/Felix-Zuo/factory-ops-intelligence-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/Felix-Zuo/factory-ops-intelligence-platform/actions/workflows/ci.yml)
![Demo ready](https://img.shields.io/badge/demo-ready-4f6f46)
![Frontend build](https://img.shields.io/badge/frontend-buildable-26352d)
![Adapters](https://img.shields.io/badge/adapters-mock%20%2F%20stub-c7a24a)
![License](https://img.shields.io/badge/license-MIT-2f3a34)

A reproducible operations intelligence layer for fragmented manufacturing data.

The project connects BOM records, inventory exports, customer orders, inbound shipment data, release notices, line simulation results and agent tool calls into one local demo. The public version uses only synthetic data and generic product families, so it can be inspected without private factory systems.

中文摘要：这是一个面向制造运营的通用演示项目。它把多产品 BOM、库存、订单、在途、供应商状态、放行通知、产线仿真和 Agent 工具轨迹放进同一套可复现的数据链路里，所有公开数据均为合成样例。

Showcase page: [docs/showcase.html](docs/showcase.html)

![Operations console](docs/assets/screenshots/overview.png)

## What It Demonstrates

| Capability | Evidence in this repo |
|---|---|
| Spreadsheet and export intake | `demo_data/file_imports.json`, parser labels, import dashboard |
| BOM and material readiness | BOM explosion, inventory coverage, source-row trace |
| Release notice generation | HTML/JSON notice preview from order, product and material gate |
| Line takt and bottleneck analysis | Deterministic 24h simulation over configurable machine nodes |
| Agent-readable operations tools | Tool registry, workflow routing, tool calls and source refs |
| Adapter-ready boundaries | ERP/WMS/MES/PLC/scheduling/MCP mock or stub contracts |

## Default Scenario

The main scenario follows `FG-OPS-A100`, a synthetic modular control kit. The wider data pack also includes a sensor pack, fluid service kit and inspection fixture so the model is not tied to one product category.

```text
demo_data
  -> parser and seed scripts
  -> SQLite demo database
  -> deterministic domain engines
  -> FastAPI operations API
  -> generated frontend snapshot
  -> React operations console
  -> agent tool registry and workflow trace
```

## Quick Start

Requirements:

- Python 3.11+
- Node.js 20.19+ or 22+

```powershell
git clone https://github.com/Felix-Zuo/factory-ops-intelligence-platform.git
cd factory-ops-intelligence-platform
python -m pip install -r apps/api-server/requirements.txt
npm --prefix apps/web-dashboard install
python scripts/seed_demo_data.py
python scripts/generate_frontend_snapshot.py
```

Start the API:

```powershell
$env:PYTHONPATH="apps/api-server"
python -m uvicorn factory_ops_api.main:app --host 127.0.0.1 --port 8017
```

Start the dashboard:

```powershell
npm --prefix apps/web-dashboard run dev -- --host 127.0.0.1 --port 5178
```

Or start both services:

```powershell
.\scripts\run_dev.ps1
```

Run the full validation suite:

```powershell
npm run test:all
```

The full check seeds demo data, regenerates the frontend snapshot, runs self-checks, runs pytest, runs the smoke demo, scans user-facing copy and builds the web dashboard.

## Screenshots

| BOM and inventory | Release notice |
|---|---|
| ![BOM and inventory](docs/assets/screenshots/material-risk.png) | ![Release notice](docs/assets/screenshots/notice-page.png) |

| Material trace | Line simulation |
|---|---|
| ![Material trace](docs/assets/screenshots/product-material-trace.png) | ![Line simulation](docs/assets/screenshots/simulation-page.png) |

| Operations Q&A | Integration status |
|---|---|
| ![Operations Q&A](docs/assets/screenshots/ai-factory-qa.png) | ![Integration status](docs/assets/screenshots/integration-status.png) |

## Runtime Modules

| Module | Current behavior |
|---|---|
| Data Import Center | Classifies demo files, parser status, source rows and quality flags |
| BOM & Inventory | Explodes BOM demand into material coverage, inbound records, supplier notes and shortage watch |
| Product Material Trace | Links product, BOM, stock, inbound, order, supplier and source refs |
| Release Notice Generator | Builds a notice preview from product, order, BOM, material gate and template version |
| Line Simulation | Runs deterministic 24h output, utilization, waiting, blocking, scrap and bottleneck checks |
| Simulation Report | Summarizes line output, bottleneck, quality risk and machine-level metrics |
| Operations Q&A | Selects intent and workflow, calls registered tools and returns source-backed output |
| Integration Status | Shows ERP/WMS/MES/PLC/scheduling/MCP mode and current gaps |
| Agent Trace | Shows tool calls, inputs, source refs and execution order |

## Architecture

```text
apps/api-server         FastAPI operations API
apps/web-dashboard      React operations console
packages/core-domain    Shared domain boundary
packages/parsers        Import parser boundary
packages/engines        Deterministic calculation boundary
packages/integrations   Adapter contracts
packages/agent-runtime  Tool registry and trace boundary
demo_data               Synthetic manufacturing records
database                SQLite schema and seed target
tests                   Domain, API, trace and snapshot checks
scripts                 Seed, smoke, tone scan, snapshot and validation
```

The dashboard can run from a generated snapshot, so reviewers can inspect the UI without keeping the API process alive. Backend functions still produce the same values used by the smoke demo and tests.

## Project History

This repository is an independent public demo that consolidates several operation-tooling directions:

- spreadsheet export intake and standardized records;
- release notice generation from a structured order payload;
- line takt simulation and bottleneck reporting;
- manufacturing data-model examples for BOM, stock, supplier and traceability;
- source-backed agent workflows with tool-call evidence.

See [PROJECT_HISTORY.md](PROJECT_HISTORY.md) for the detailed capability map and release trail.

## Public Data Boundary

Keep production exports, customer lists, supplier lists, real BOMs, shipment plans, screenshots with company identifiers and logs out of the repository unless they have been intentionally sanitized.

Live integrations are represented by mock/stub/sample adapters. Credentials and live system URLs do not belong in this repo.

## Documentation

- [Project history](PROJECT_HISTORY.md)
- [Architecture](ARCHITECTURE.md)
- [Data contract](DATA_CONTRACT.md)
- [Demo script](DEMO_SCRIPT.md)
- [Roadmap](ROADMAP.md)
- [Changelog](CHANGELOG.md)
- [Contributing](CONTRIBUTING.md)
- [Security](SECURITY.md)

## License

MIT. See [LICENSE](LICENSE).
