# Self Repair Log

## 2026-06-07

- Started with a clean repository.
- Chose synthetic demo data and mock/stub adapters to keep the main demo reproducible.
- Corrected the research direction for Carbon toward the manufacturing ERP/MES/QMS project rather than the unrelated design system.
- Fixed frontend build by adding React type declarations.
- Converted browser screenshot bytes to true PNG files for README and showcase use.

## 2026-06-07 - Gap Audit Repair Loop

- Found that the previous demo was structurally runnable but too shallow for the reference digest.
- Expanded demo data while keeping records synthetic and public-safe.
- Seed initially failed because `materials` gained `manufacturer` and related fields while SQLite still used the old schema.
- Repaired by replacing `database/schema.sql`, making `scripts/seed_demo_data.py` rebuild the demo database, and JSON-encoding nested fields for SQLite.
- Old tests assumed exactly 6 BOM rows; repaired tests to validate source-backed behavior and deeper demo data instead.
- Backend smoke and pytest passed after repair.

## 2026-06-07 - Frontend Evidence Repair

- Found that the frontend still used hard-coded TypeScript constants after backend repair.
- Added a generated frontend snapshot so React pages consume deterministic backend outputs.
- Browser check found stale Vite service on port 5177; started current project on port 5178 without stopping the existing process.
- Browser screenshot found source trace text wrapping badly and home operation cards too narrow.
- Repaired CSS for source trace wrapping and two-column operation cards.
- Browser check found Agent Trace tool names overlapping source-ref values.
- Repaired timeline grid and verified zero overflow for the targeted notice and trace elements.
- Regenerated screenshot PNG files from current local pages.

## 2026-06-07 - Final Validation

- `npm run test:all` passed end to end.
- API startup verified on port 8017 with `/health`.
- Web dashboard verified on port 5178 after avoiding an older Vite process on port 5177.
- Remaining watch items are local ignored runtime folders: `apps/web-dashboard/dist`, `apps/web-dashboard/node_modules`, caches and generated SQLite DB.

## 2026-06-07 - Open-source Polish Repair Loop

- Found the README was too thin for GitHub review and rewrote it around screenshots, demo flow, real commands, adapter boundaries and agent tools.
- Added GitHub Pages entry files and release notes so the project can be reviewed without extra explanation.
- Browser verification found Material Trace clean after CSS repair.
- Browser verification showed Line Simulation cards were too narrow in a 6-column layout; changed the line map to a 3x2 layout and regenerated the screenshot.
- `python scripts/check_ai_tone.py` and `npm run test:all` passed after the open-source polish.
- Static docs returned HTTP 200 and all showcase images loaded in the browser.

## 2026-06-07 - Open-source Cleanup Repair Loop

- Removed non-project materials and renamed the old public case-study label to `Project Notes`.
- Strengthened `scripts/check_ai_tone.py` to fail on application-oriented and personal-brand language.
- Initial scan found legacy wording in planning files and an old case-study document; removed or rewrote those items.
- Found snapshot generation was not reproducible because notice, simulation and trace IDs used wall-clock timestamps and random UUIDs.
- Repaired demo ID generation with stable demo IDs and timestamps.
- Refreshed screenshots for the current open-source UI and stable production notice ID.
- Final validation passed with tone scan, seed, snapshot generation, full test chain and frontend build.
