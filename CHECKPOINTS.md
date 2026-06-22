# Checkpoints

## 2026-06-07 - Project Start

- Repository initialized as the public `factory-ops-intelligence-platform` showcase repo.
- Initial demo data used a single synthetic product category.
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

## 2026-06-07 - Open-source Showcase Polish

- Rewrote `README.md` as a GitHub open-source project entry with screenshots, demo flow, module list, architecture overview, agent tools, adapter scope, quick start commands and roadmap.
- Reworked `docs/showcase.html` into a static manufacturing operations case file suitable for GitHub Pages.
- Added `docs/index.html` and `docs/.nojekyll` for direct Pages publishing from the `docs/` folder.
- Added `RELEASE_NOTES_v0.1.0.md`.
- Regenerated layout-sensitive screenshots for `product-material-trace.png` and `simulation-page.png` after browser verification.
- Validation passed:
  - `python scripts/check_ai_tone.py`
  - `npm run test:all`
  - local static docs returned HTTP 200 for `/` and `/showcase.html`

## 2026-06-07 - Open-source Repository Cleanup

- Removed non-project snippets and the old case-study document.
- Replaced the old user-facing case-study label with `Project Notes` and `Project Showcase / Demo Walkthrough`.
- Added `.github/ISSUE_TEMPLATE/bug_report.md` and `.github/ISSUE_TEMPLATE/feature_request.md`.
- Added `docs/assets/social-preview.png` and `docs/assets/social-preview-spec.md`.
- Made generated demo IDs and trace timestamps stable so snapshot regeneration is reproducible.
- Added frontend snapshot generation to `.github/workflows/ci.yml`.
- Validation passed:
  - `python scripts/check_ai_tone.py`
  - `python scripts/seed_demo_data.py`
  - `python scripts/generate_frontend_snapshot.py`
  - `npm run test:all`
  - `npm --prefix apps/web-dashboard run build`

## 2026-06-19 - Generic Productization Pass

- Replaced the single-category demo with a generic multi-product data pack:
  - modular control kit;
  - sensor pack;
  - fluid service kit;
  - inspection fixture.
- Updated backend defaults, API routes, tests, smoke demo and frontend snapshot generation to use shared scenario constants.
- Reworked the dashboard with readable bilingual copy and a neutral operations-console palette.
- Restricted demo CORS origins to local dashboard hosts.
- Upgraded Vite and the React plugin; dependency audit now reports zero vulnerabilities.
- Added `PROJECT_HISTORY.md`, `CHANGELOG.md` and `RELEASE_NOTES_v0.2.0.md`.
- Regenerated dashboard and static showcase screenshots.
- Validation passed:
  - `npm run test:all`
  - `npm --prefix apps/web-dashboard audit --audit-level=moderate --json`
  - local dashboard returned HTTP 200 at `http://127.0.0.1:5178/`
  - local static docs returned HTTP 200 at `http://127.0.0.1:8098/showcase.html`
  - browser check found no Vite overlay, no console errors and no old scenario terms
