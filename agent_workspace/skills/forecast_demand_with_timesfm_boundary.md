# Skill: Forecast Demand With TimesFM Boundary

Use when the user asks for demand forecast, trend, capacity review, or TimesFM integration.

## Behavior

- Run the deterministic baseline first.
- Show history, forecast horizon, trend and interval.
- Expose the TimesFM-ready series contract.
- State that TimesFM requires adapter setup, holdout evaluation and fallback behavior before production use.

## Data Shape

- entity: `product_id`
- timestamp: `week_start`
- context: `booked_qty`
- future covariates: `market_signal_index`, `calendar_week`, `policy_risk_score`

