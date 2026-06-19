# Project History

This repository is an independent public demo for operations intelligence. It does not mirror a private deployment. It distills several local manufacturing-tooling ideas into one generic, reproducible product surface.

## Capability Map

| Consolidated area | Public implementation |
|---|---|
| Spreadsheet export handling | `demo_data/file_imports.json`, parser labels, import dashboard |
| Standard operations records | materials, finished products, BOM, inventory, orders, shipments, supplier context |
| Release notice workflow | `generate_production_notice`, notice preview, template version and source refs |
| Line takt simulation | `run_line_simulation`, machine nodes, transport links and bottleneck report |
| Data-model learning notes | explicit `DATA_CONTRACT.md`, schema seed and synthetic source rows |
| Agent workflow trace | registered tools, workflow routing, tool calls, source refs and final answer |

## Release Trail

| Version | Focus |
|---|---|
| `v0.1.0` | Initial manufacturing operations demo with seed data, API, dashboard, tests and static docs |
| `v0.1.1` | Public repository cleanup, stable demo IDs, CI snapshot generation and screenshot refresh |
| `v0.2.0` | Generic multi-product data set, readable bilingual UI copy, narrowed CORS, dependency audit fix and expanded public project history |

## Design Rules

- Synthetic data only.
- Business calculations stay deterministic and testable.
- Agent responses must show tool calls and source refs.
- Adapter modes must be explicit: mock, stub, sample or schema-ready.
- Public wording should describe what runs today and avoid claims that require live private systems.

## Current Proof Points

- `npm run test:all` seeds data, regenerates the frontend snapshot, runs self-check, pytest, smoke demo, tone scan and frontend build.
- `npm --prefix apps/web-dashboard audit --audit-level=moderate --json` is expected to return zero vulnerabilities after the Vite 8 update.
- The dashboard can run from `apps/web-dashboard/src/demoSnapshot.ts` without a live API process.
