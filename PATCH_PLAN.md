# Patch Plan

## Phase 1 - Running Demo Base

- Expand demo data to multiple products, richer BOM rows, more material records, stock locations, customer orders, shipments, machine events and line records.
- Extend database schema and seed script so the demo database reflects the reference digest.
- Add backend domain helpers for BOM explosion, order coverage, product material trace, notices, simulation reports, adapter status and source references.
- Update `TASK_LEDGER.md`, `CHECKPOINTS.md` and `SELF_REPAIR_LOG.md`.

## Phase 2 - Agent Runtime

- Register all required mock tools:
  - `search_material`
  - `get_product_bom`
  - `explode_bom`
  - `calculate_inventory_risk`
  - `check_order_material_coverage`
  - `generate_production_notice`
  - `run_line_simulation`
  - `get_simulation_report`
  - `detect_bottleneck`
  - `generate_daily_report`
  - `answer_factory_question`
- Make `answer_factory_question` route through deterministic tools.
- Store trace records with selected intent, workflow, tool calls, inputs, outputs, source refs and final answer.

## Phase 3 - Frontend Evidence Layer

- Generate `apps/web-dashboard/src/demoSnapshot.ts` from backend functions.
- Refactor React pages to consume the snapshot.
- Rebuild layout as manufacturing operations case file:
  - left navigation;
  - top status bar;
  - dense main work area;
  - right trace/detail rail;
  - adapter status;
  - source trace;
  - material risk matrix;
  - tool call trace.
- Keep bilingual UI but avoid prompt-like wording.

## Phase 4 - Documentation and Open-source Release

- Update README quick start and validation commands.
- Strengthen `docs/showcase.html` with concrete evidence and tested routes.
- Keep user-visible copy product-oriented and engineering-specific.
- Keep development instructions in `AGENTS.md`, `RUNBOOK.md`, `TASK_LEDGER.md`, `PATCH_PLAN.md` and code comments only.

## Phase 5 - Tests and Self-Repair

- Add tests for:
  - parser/file classification;
  - demo data schema;
  - BOM explosion;
  - inventory risk;
  - production notice;
  - simulation report;
  - agent tool registry;
  - API smoke;
  - frontend static content;
  - AI tone scan;
  - repo hygiene.
- Update scripts:
  - `scripts/self_check.py`
  - `scripts/smoke_demo.py`
  - `scripts/check_ai_tone.py`
  - `scripts/smoke_demo.ps1`
- Run validation and record failures or downgraded repairs in `SELF_REPAIR_LOG.md` or `BLOCKERS.md`.
