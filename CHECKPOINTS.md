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
