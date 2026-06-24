# Changelog

## Unreleased

- Polished the GitHub README entry with a rendered Pages link, product system map and evidence-first screenshot section.
- Updated the Pages showcase hero and repository links so the public demo opens as a product page instead of repo-relative source files.
- Replaced the busy showcase hero background with a cleaner control-tower product asset and stabilized release-card title wrapping.

## 0.3.1

- Added a release-gate domain function and API route across material, capacity, policy, quality, source-trace and approval checks.
- Added reusable scenario profiles for assembly, warehouse fulfillment, maintenance-kit operations and quality-lab review.
- Expanded the React dashboard release workbench and product-plan configuration surface.
- Rebuilt the static showcase page into a mature product overview backed by existing screenshots and quality evidence.
- Updated data contract, product requirements, roadmap, quality standard and release notes for the new product surface.
- Added tests and smoke checks for release gates, scenario profiles and generated frontend snapshot coverage.

## 0.3.0

- Added S&OP control-tower overview across demand, stock, material gates, capacity, policy signals and cash exposure.
- Added demand history, product economics, finished goods inventory, external policy signals and internal issue queue demo data.
- Added deterministic demand forecasting with a TimesFM-ready adapter contract.
- Added official-source policy/customs signal matching and decision brief domain functions.
- Added `/api/control-tower/overview`, `/api/forecast/demand`, `/api/external/signals` and `/api/decision-brief`.
- Rebuilt the React dashboard into a dense product workbench and fixed badge/top-action wrapping.
- Expanded pytest coverage for the new operating model and snapshot evidence.
- Added product requirements, technical analysis, quality standard and v0.3.0 release notes.

## 0.2.0

- Replaced single-category demo records with a generic multi-product operations data set.
- Updated backend defaults to use shared scenario constants.
- Reworked dashboard copy into readable English/Chinese labels.
- Updated visual styling from a beige presentation theme to a more operational gray/white console.
- Restricted demo CORS origins to the local dashboard ports.
- Upgraded Vite and the React plugin; frontend audit now reports zero vulnerabilities.
- Added `PROJECT_HISTORY.md` and `RELEASE_NOTES_v0.2.0.md`.

## 0.1.1

- Cleaned public repository presentation.
- Made generated demo IDs and trace timestamps stable.
- Added frontend snapshot generation to CI.
- Refreshed static docs and screenshot assets.

## 0.1.0

- Added synthetic manufacturing records, deterministic backend tools, FastAPI routes and React dashboard.
- Added seed, snapshot, self-check, smoke demo, tone scan and pytest validation.
- Added adapter contracts and agent workflow traces.
