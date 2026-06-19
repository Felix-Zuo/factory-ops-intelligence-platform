# Release Notes v0.3.0

## Summary

`v0.3.0` turns the public demo from a narrow factory dashboard into a reusable operations intelligence control tower.

## Added

- S&OP control-tower overview across open orders, forecast, finished goods, material gates, capacity and policy risk.
- Demand history, product economics, finished goods inventory, policy signals and internal issue queue demo data.
- Deterministic demand forecast with a TimesFM-ready adapter contract.
- Official-source policy/customs signal model linked to materials, products and orders.
- Source-backed decision brief with clear model boundary.
- New API routes:
  - `GET /api/control-tower/overview`
  - `GET /api/forecast/demand`
  - `GET /api/external/signals`
  - `POST /api/decision-brief`
- Dense React control-tower UI with S&OP, forecast, policy radar and decision brief modules.
- Regression tests for forecast, policy, decision brief, API routes and snapshot evidence.

## Fixed

- Prevented short page badges such as `OPS-00` from wrapping.
- Reworked top actions so desktop and mobile layouts stay stable.
- Added bounded API request models for quantities, hours and natural-language questions.

## Validation

```text
npm run test:all
```

The full suite passes locally for this release candidate.

