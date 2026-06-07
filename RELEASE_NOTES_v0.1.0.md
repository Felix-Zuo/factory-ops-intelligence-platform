# Release Notes - v0.1.0-demo-ready

Release type: open-source demo release

## Highlights

- Published a reproducible manufacturing operations demo with synthetic data.
- Added a static GitHub Pages showcase at `docs/showcase.html`.
- Added screenshot coverage for the operations console, BOM and inventory dashboard, material trace, production notice, line simulation, simulation report, factory Q&A, integration status, and agent trace.
- Documented quick start commands, architecture, data contract, adapter scope, agent tools, and current limitations.
- Added validation scripts for seed, snapshot generation, smoke demo, copy scan, tests, and frontend build.

## Demo Coverage

- Demo data seed into `database/factory_ops_demo.sqlite`
- Frontend snapshot generation into `apps/web-dashboard/src/demoSnapshot.ts`
- BOM explosion and inventory risk
- Product material trace
- Production notice generation and preview
- 24 hour line simulation
- Simulation report and bottleneck detection
- Tool-backed factory Q&A
- Integration status board
- Agent trace page

## Adapter Scope

The demo uses synthetic records. ERP, WMS, MES, PLC, scheduling, WeChat, and MCP integrations are represented through mock, stub, or sample adapters with explicit status labels.

## Validation Commands

```powershell
npm run test:all
npm --prefix apps/web-dashboard run build
python scripts/check_ai_tone.py
```

## Current Limitations

- Not a production ERP, WMS, MES, IoT, or scheduling platform.
- Scheduling is adapter-shaped only; no optimization solver is shipped in this release.
- External system integrations are public-demo contracts, not live factory connections.

