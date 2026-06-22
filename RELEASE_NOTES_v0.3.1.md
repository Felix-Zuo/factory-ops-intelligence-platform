# Release Notes v0.3.1

`v0.3.1` turns the public demo into a more mature reusable operations product surface. The release focuses on release governance, scenario portability, public showcase quality and validation coverage.

## Product Changes

- Added a release-gate workbench that evaluates material coverage, capacity fit, policy/customs signals, quality hold, source-trace completeness and human approval before notice export.
- Added reusable scenario profiles for manufacturing assembly, warehouse fulfillment, maintenance-kit operations and quality-lab review.
- Expanded the Product Plan page into a configuration surface with domain, source-system, control and role metadata.
- Rebuilt the static showcase page into a product-style overview with real screenshots, release-gate evidence, scenario profiles, architecture and quality gates.

## API and Data

- Added `GET /api/release-gates/{order_id}`.
- Added `GET /api/scenario-profiles`.
- Added `demo_data/scenario_profiles.json`.
- Added `scenario_profiles` to the SQLite schema and seed map.
- Added release gate and scenario profile data to the generated frontend snapshot.

## Quality

- Added domain/API tests for release gates and scenario profiles.
- Added smoke checks for release-gate decision and scenario-profile count.
- Updated `DATA_CONTRACT.md`, `PRODUCT_REQUIREMENTS.md`, `ROADMAP.md` and `QUALITY_STANDARD.md`.
- Verified the full local gate: seed, snapshot, self-check, pytest, smoke demo, tone scan, frontend build, dependency audit and diff whitespace check.

## Security and Boundary Notes

- Release decisions are deterministic and do not auto-approve production or shipment release.
- External policy content remains represented by official-source adapter contracts and synthetic cached signals.
- Public data remains synthetic and generic; no live factory credentials, private exports or customer data are required.
