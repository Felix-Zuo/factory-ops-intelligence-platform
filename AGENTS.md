# AGENTS.md

This repository is a factory operations intelligence showcase. Agents working here must keep the project runnable, traceable, and safe for public GitHub display.

## Build and Test

- API path: `apps/api-server`
- Web path: `apps/web-dashboard`
- Demo data path: `demo_data`
- Full validation: `python scripts/self_check.py`, `python -m pytest tests`, `python scripts/smoke_demo.py`, `python scripts/check_ai_tone.py`, `npm --prefix apps/web-dashboard run build`

## Boundaries

- Do not add real customer, supplier, production, shipment, BOM, or employee data.
- Do not copy release folders, original templates, `node_modules`, `.venv`, or generated bulky outputs.
- Business calculations must be implemented in code and traceable to demo data.
- Agent-facing responses should include result, evidence, source, and next check.
- Keep public copy direct and engineering-focused.

## Module Contract

- BOM/inventory: deterministic material coverage and source trace.
- Production notice: generated from BOM, order, material gate, and template version.
- Simulation: deterministic 24h line report with bottleneck and quality bottleneck.
- Agent runtime: tool registry, workflow name, trace record, mock provider by default.
- Integrations: mock/stub status until live systems are explicitly connected.

