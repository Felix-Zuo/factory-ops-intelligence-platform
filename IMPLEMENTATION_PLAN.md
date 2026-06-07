# Implementation Plan

## Phase 1 - Project Contract

- Status: done
- Scope: repository skeleton, demo data, API domain model, self-check scripts, state ledger.
- Acceptance: main demo can calculate material risk, generate a notice, run a line simulation, and record an agent tool trace.

## Phase 2 - Reference Digest

- Status: doing
- Scope: distill manufacturing ERP/MES/WMS, IoT rule engine, planning solver, and agent-runtime references into project design.
- Acceptance: `reference_research/REFERENCE_DIGEST.md` maps references to target modules without turning this project into a full ERP/MES.

## Phase 3 - Operations API

- Status: doing
- Scope: file classification, materials, BOM explosion, inventory risk, product trace, production notice, simulation, agent tools, integration status.
- Acceptance: `/health`, `/api/inventory/risk`, `/api/production-notices/generate`, `/api/simulation/run`, `/api/agent/chat`, `/api/integrations/status` return demo data.

## Phase 4 - Engineering Console

- Status: pending
- Scope: React/Vite frontend with bilingual pages, source trace, adapter status, tool trace, production notice preview, and line simulation schematic.
- Acceptance: `npm run build` passes and screenshots are generated from the real UI.

## Phase 5 - Open-source Packaging

- Status: pending
- Scope: README, project showcase, architecture, data contract, roadmap, demo script, CI, screenshots.
- Acceptance: local tests pass, tone scan passes, screenshots render, GitHub remote is pushed.
