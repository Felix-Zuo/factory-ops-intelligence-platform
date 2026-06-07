# Checkpoints

## 2026-06-07 - Project Start

- Repository initialized at `D:\0A OpenClaw\projects\展示项目\factory-ops-intelligence-platform`.
- Demo data uses synthetic bearing-manufacturing records only.
- Main business loop is defined: order quantity -> BOM demand -> inventory and inbound coverage -> production notice -> line simulation -> agent trace.

## 2026-06-07 - Main Demo Verified

- `python scripts/self_check.py` passed.
- `python -m pytest tests` passed with 4 tests.
- `python scripts/smoke_demo.py` passed.
- `python scripts/check_ai_tone.py` passed.
- `npm --prefix apps/web-dashboard run build` passed.
- Browser screenshots were generated from the local dashboard and converted to true PNG files.

## 2026-06-07 - Gap Audit and Backend Repair

- Created `CURRENT_GAP_AUDIT.md` and `PATCH_PLAN.md`.
- Expanded demo data beyond the original single-product sample:
  - 20 material records.
  - 4 finished products.
  - 8 customer orders.
  - 2 production lines.
  - adapter contracts, workflow runs, stock locations and machine events.
- Rebuilt SQLite seed flow so `database/factory_ops_demo.sqlite` is recreated from current schema and JSON records.
- Reworked backend domain layer around deterministic tools, source refs, adapter status and agent trace payloads.
- Validation passed:
  - `python scripts/seed_demo_data.py`
  - `python scripts/smoke_demo.py`
  - `python -m pytest tests`

## 2026-06-07 - Frontend and Agent Evidence Repair

- Added `scripts/generate_frontend_snapshot.py`.
- Generated `apps/web-dashboard/src/demoSnapshot.ts` from backend domain functions.
- Reworked frontend data mapping so visible pages use backend-derived inventory risk, production notice, simulation, agent tool trace and adapter contracts.
- Browser verified the local dashboard on `http://127.0.0.1:5178`.
- Fixed text/layout overflow in:
  - source trace rail;
  - home operation-loop cards;
  - production notice preview;
  - agent trace timeline.
- Regenerated screenshot assets from the current local app.
- Validation passed:
  - `python scripts/self_check.py`
  - `python scripts/check_ai_tone.py`
  - `python -m pytest tests`
  - `python scripts/smoke_demo.py`
  - `npm --prefix apps/web-dashboard run build`

## 2026-06-07 - Final Local Demo Validation

- `npm run test:all` passed.
- API startup verified at `http://127.0.0.1:8017/health`.
- API health returned 4 products, 20 materials, 8 orders and 12 machine events.
- Web dashboard verified at `http://127.0.0.1:5178`.
