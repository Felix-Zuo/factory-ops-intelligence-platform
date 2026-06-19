# Release Notes v0.2.0

## Summary

`v0.2.0` turns the demo from a single-category sample into a generic operations intelligence project. The default scenario now uses `FG-OPS-A100`, with additional synthetic product families covering sensor packs, fluid service kits and inspection fixtures.

## Changed

- Replaced single-category product, material, BOM, stock, shipment, supplier, order, production-line and workflow records.
- Added backend scenario constants for default product, order, quantity, line and notice template.
- Updated API defaults, tests, smoke demo and frontend snapshot generation to use the generic scenario.
- Rewrote dashboard UI copy with readable bilingual labels.
- Updated dashboard styling to a neutral operations-console palette.
- Restricted CORS origins to local dashboard hosts.
- Upgraded Vite and `@vitejs/plugin-react`; dependency audit reports zero vulnerabilities.
- Added project history and changelog files for public review.

## Validation

```powershell
python scripts/seed_demo_data.py
python scripts/generate_frontend_snapshot.py
python -m pytest tests
npm --prefix apps/web-dashboard audit --audit-level=moderate --json
```

Final full validation should use:

```powershell
npm run test:all
```
