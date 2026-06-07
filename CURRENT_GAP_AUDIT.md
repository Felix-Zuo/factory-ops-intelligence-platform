# Current Gap Audit

Audit date: 2026-06-07

Reference basis: `reference_research/REFERENCE_DIGEST.md`

## Summary

The repository already has a runnable skeleton: FastAPI routes, React/Vite dashboard, synthetic demo data, seed script, smoke script, agent workspace notes, screenshots and bilingual README. The current weakness is depth and proof. Several portfolio claims are present, but the implementation still relies on small static data, static frontend constants, thin database schema, incomplete tool registry, and narrow tests.

The next pass must turn the project from a documented prototype into a demo-ready engineering console:

- seed and load richer demo data;
- keep deterministic calculations as the source of truth;
- expose API-first routes with source references;
- register all required mock tools and traces;
- connect frontend pages to API-shaped data instead of isolated hard-coded cards;
- replace generic showcase layout with dense manufacturing operations views;
- run self-check, tests, smoke demo, tone scan and frontend build.

## Must Fix

| Gap | Evidence | Required repair |
|---|---|---|
| Demo data is too small for the reference digest. | `materials.json` has 6 materials, `bom.json` has 6 rows, `customer_orders.json` has 2 rows, `production_lines.json` has 1 line. | Expand demo records enough to show material, stock, order, supplier, inbound, line and machine-event relationships. |
| Database schema is thinner than target architecture. | `database/schema.sql` lacks finished products, BOM headers, routing steps, workstations, stock locations, production notices, machine events, workflow runs and source references. | Add missing MES-lite and trace tables without making the project a full ERP/MES. |
| Agent tool registry is incomplete. | `agent_tools()` misses `check_order_material_coverage`, `get_simulation_report`, `answer_factory_question` and schema/source contract fields. | Register all required tools with input/output schemas and deterministic backend names. |
| Agent traces are too shallow. | Trace contains only question, workflow, tools and timestamp. | Store selected intent, tool calls, tool inputs, tool outputs, source refs, status and final answer. |
| Frontend relies on static constants. | `apps/web-dashboard/src/data.ts` duplicates values instead of consuming a bundled API-shaped snapshot. | Generate/use a demo snapshot from backend domain functions so visible data matches calculations. |
| Production notice and simulation pages are presentational only. | Notice preview and report values are hard-coded in React. | Bind these pages to computed notice and simulation report data. |
| Product Material Trace is weak. | `product_material_trace()` returns only BOM stage rows and misses stock, inbound, order and supplier chain. | Expand trace output and UI to show product -> BOM -> stock -> inbound -> order -> supplier. |
| AI Q&A page does not demonstrate tool execution. | React page contains a static answer block. | Show question, selected intent, workflow, tool calls, tool result, source records and final answer. |
| Integration status lacks complete adapter contract. | `integration_status()` only returns adapter, mode and scope. | Add status, accepted payloads, last sample, known gaps and source system. |
| Tests are too narrow. | Only 4 domain tests exist. | Add parser/schema, BOM explosion, notice, simulation, agent registry, API smoke and frontend static content tests. |

## Should Enhance

| Gap | Evidence | Enhancement |
|---|---|---|
| README and case study are concise but do not show enough engineering proof. | Current docs explain modules but not enough run/evidence detail. | Add tested commands, capability evidence, API/tool evidence and honest adapter states. |
| `check_ai_tone.py` scans development-only agent files. | Current scan includes `agent_workspace/**/*.md`, but user-visible restriction should focus README, case study and frontend copy. | Narrow scan to public-facing surfaces, keep warnings appended to `SELF_REPAIR_LOG.md`. |
| Screenshots exist but were previously rejected for text overflow and ratio issues. | Existing screenshot files are present, but the user reported visible layout defects. | Rebuild UI with stable grid constraints and regenerate screenshots after browser/layout smoke. |
| `packages/*` are placeholders. | Each package only contains a README. | Keep as boundaries for this pass; avoid overbuilding package code until domain layer stabilizes. |
| `docs/showcase.html` may lag behind frontend. | Static showcase exists separately from React app. | Update after frontend is verified, or reduce claims to avoid mismatch. |

## Can Defer

| Item | Reason |
|---|---|
| Full MCP server | Internal tool schemas are enough for demo-ready state. |
| Real ERP/WMS/MES/PLC authentication | Public showcase should stay mock/stub and reproducible. |
| OR-Tools or Timefold runtime | Digest explicitly says keep scheduling adapter as stub and avoid complex planning now. |
| Visual flow editor | Node-RED is a reference for hooks/workflows, not something to clone. |
| Full package extraction into `packages/*` | Current app can stay small while routes/tools/tests are proven. |

## Repair Strategy

1. Preserve the current repository and avoid rebuilding from scratch.
2. Expand and normalize demo data.
3. Refactor backend domain functions to return source-backed API-shaped payloads.
4. Add tool registry and trace objects that meet the required Agent tool list.
5. Generate a frontend data snapshot from deterministic backend functions.
6. Rebuild React UI around dense panels, source trace, material risk, workflow and agent trace.
7. Update docs and ledgers after each phase.
8. Run self-check, tests, smoke demo, AI tone scan and frontend build.
