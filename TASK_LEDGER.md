# Task Ledger

| Task | Status | Evidence |
|---|---|---|
| Create repository skeleton | done | `apps/`, `packages/`, `agent_workspace/`, `demo_data/`, `scripts/` created |
| Seed synthetic manufacturing data | done | `demo_data/*.json`, `database/schema.sql` |
| Implement deterministic business engines | done | `factory_ops_api/domain.py` |
| Implement API routes | done | `factory_ops_api/main.py` |
| Implement self-check scripts | done | `scripts/self_check.py`, `scripts/smoke_demo.py`, `scripts/check_ai_tone.py` |
| Write reference digest | doing | `reference_research/REFERENCE_DIGEST.md` |
| Build web dashboard | done | `apps/web-dashboard/src/App.tsx`, `npm --prefix apps/web-dashboard run build` |
| Generate screenshots | done | `docs/assets/screenshots/overview.png`, `material-risk.png`, `notice-simulation-agent.png` |
| Run full validation | done | self-check, pytest, smoke demo, tone scan, frontend build passed |
| Push to GitHub | pending | Git remote to be created |
| Current gap audit | done | `CURRENT_GAP_AUDIT.md` created from repository audit and reference digest |
| Patch plan | done | `PATCH_PLAN.md` created with phase order |
| Expand demo data | done | 20 materials, 4 products, 8 orders, 2 lines, adapters, workflows, machine events |
| Repair schema and seed | done | `database/schema.sql`, `scripts/seed_demo_data.py`; seed passed |
| Repair backend domain tools | done | Expanded deterministic tools and agent trace payloads in `factory_ops_api/domain.py` |
| Python smoke and tests after backend repair | done | `python scripts/smoke_demo.py` passed; `python -m pytest tests` passed with 8 tests |
| Generate frontend snapshot | done | `scripts/generate_frontend_snapshot.py` writes `apps/web-dashboard/src/demoSnapshot.ts` from backend tools |
| Rework frontend evidence pages | done | React pages now consume snapshot-backed data for inventory, notice, simulation, Q&A, trace and integrations |
| Repair screenshot layout issues | done | Browser checked local app at `http://127.0.0.1:5178`; fixed source trace, notice and timeline overflow |
| Regenerate screenshots | done | Updated PNGs in `docs/assets/screenshots/` from current local pages |
| Expand validation coverage | done | pytest now covers schema depth, BOM explosion, API route functions, agent registry, material trace and frontend snapshot |
