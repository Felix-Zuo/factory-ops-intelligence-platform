# Reference Digest

## Summary

`factory-ops-intelligence-platform` should remain a demo-ready operations intelligence layer for fragmented manufacturing data. It should not become a full ERP, WMS, MES, QMS, IoT platform, scheduling solver, or general-purpose agent framework.

The useful pattern across the references is not "copy the whole system." The useful pattern is the boundary design:

- ERP/MES/WMS systems own master records and transactions.
- This project reads exports, adapter payloads, and synthetic records.
- Deterministic engines calculate BOM demand, material coverage, notice context, and line-simulation reports.
- Agent tools expose those calculations with schemas, traces, and source evidence.
- The frontend presents operational decisions with source trace, adapter mode, and workflow status.

The output of this digest should guide repository structure, database schema, API routes, `agent_workspace`, and the next frontend redesign.

## Reference Matrix

| Reference | Category | What it does | What to borrow | What not to overbuild | Application in this project |
|---|---|---|---|---|---|
| [Carbon Manufacturing Systems](https://docs.carbon.ms/) / [GitHub](https://github.com/crbnos/carbon) | Manufacturing ERP/MES/QMS | Open-source manufacturing platform covering ERP, MES, QMS, API-first access, full-stack type safety, and integrated MCP client/server direction. | Clear system-of-record boundary, manufacturing master-data naming, API-first module contracts, MCP-ready tool/resource shape, permissioned agent entry points. | Do not implement a full system of record, ABAC/RLS stack, accounting, billing, full QMS, or multi-app platform. | Treat Carbon as the north-star boundary: this repo is the operations intelligence layer around ERP/WMS/MES exports and adapter contracts, not the source system itself. |
| [ERPNext / Frappe Manufacturing](https://docs.frappe.io/erpnext/work-order) | Manufacturing ERP | Work Order signals shop-floor production, derives material requirements from BOM, creates Job Cards, moves materials through WIP and finished-goods stock, and supports workstation-based capacity planning. | `BOM -> material requirement -> work order readiness -> operation/job card -> stock movement` chain; operation/workstation vocabulary; work order and notice relationship. | Do not copy full ERPNext document model, accounting, HR, subcontracting, full stock-ledger workflow, or all manufacturing settings. | Use ERPNext patterns to define `products`, `bom_components`, `work_orders`, `production_notices`, `routing_steps`, `workstations`, and `material_reservations`. |
| [Odoo Manufacturing / Inventory](https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp.html) | Modular ERP / WMS / MRP | Organizes supply-chain apps around Inventory, Manufacturing, Purchase, Sales, replenishment, warehouse routes, work centers, barcode operations, and shop-floor workflows. | App/module separation, Inventory vs Manufacturing boundaries, route/operation concepts, product configuration, manufacturing lead-time and vendor lead-time fields, frontend module navigation. | Do not reproduce Odoo's marketplace, permissions, valuation, accounting, complete purchasing flow, or deep warehouse route engine. | Use Odoo as the UI/module map: Data Import, BOM & Inventory, Product Trace, Production Notice, Simulation, Agent Trace, Integration Status. |
| [InvenTree](https://docs.inventree.org/) | Parts and stock control | Lightweight inventory system focused on parts, stock locations, suppliers, supplier parts, current stock, BOM management, build context, reports, API, and extension points. | `part/material`, `supplier`, `manufacturer`, `stock item`, `stock location`, serialized/batch trace, supplier item linkage, plugin-style adapters. | Do not implement complete part lifecycle management, label/barcode printing, procurement workflows, or full plugin marketplace. | Use InvenTree naming and traceability patterns for material master, supplier records, inventory snapshots, source trace tags, and material detail pages. |
| [qcadoo MES](https://github.com/qcadoo/mes) / MES-lite references | MES for SMEs | Production-management application aimed at small and medium manufacturers, with production planning, warehouse material flow, Gantt planning, maintenance planning, REST API and integration modules. | MES-lite scope, production-order page organization, planning/reporting orientation, small-manufacturer master-data assumptions. | Do not build a full MES deployment, Gantt scheduler, maintenance module, SCADA integration, or live shop-floor execution system. | Use MES-lite patterns for production workflow cards, simulation-to-report flow, line status, WIP-like state, and dashboard-to-production linkage. |
| [Node-RED](https://nodered.org/docs/) | Flow automation | Low-code programming for event-driven applications, with flow development, node extension, runtime APIs, and reusable flow patterns. | Flow/node vocabulary, event-triggered workflows, hook names, data transformation steps, reusable workflow templates. | Do not build a visual flow editor or general automation runtime. | Implement `agent_workspace/workflows/*.yaml` and hooks such as `on_file_uploaded`, `on_inventory_refreshed`, `on_notice_generated`, and `on_simulation_completed`. |
| [ThingsBoard Rule Engine](https://thingsboard.io/docs/user-guide/rule-engine/) | IoT telemetry and rules | Processes telemetry, attribute updates, lifecycle events and RPC calls through Rule Chains and Rule Nodes; supports monitoring, debug traces, queues, and REST access into rule processing. | Machine event schema, telemetry message metadata, rule-chain trace concept, debug/monitoring panels, device/asset originator pattern. | Do not build full IoT device management, multi-tenant dashboards, MQTT broker, rule-chain editor, alarm engine, or protocol gateway. | Define `plc_adapter_mock`, `mes_adapter_mock`, `machine_events`, `device_telemetry`, and an Integration Status page with adapter mode and last-sample evidence. |
| [OR-Tools Job Shop](https://developers.google.com/optimization/scheduling/job_shop) | Constraint optimization | Models jobs as ordered tasks on machines with precedence and machine-exclusivity constraints; solves for start times that minimize makespan. | Job/task/machine/resource vocabulary, precedence constraints, no-overlap constraints, makespan, feasibility vs optimization distinction. | Do not implement a general optimizer or complex scheduling in the current prototype. | Keep `scheduling_adapter_stub` and future `optimization_engine` interface; current simulation should expose bottlenecks and constraints without promising optimized schedules. |
| [Timefold Solver](https://docs.timefold.ai/timefold-solver/latest/introduction) | Planning solver | Embeddable constraint satisfaction engine for limited-resource planning problems such as vehicle routing, employee scheduling, rostering, bin packing, and equipment scheduling. | Hard/soft constraint vocabulary, planning score, equipment scheduling use case, explanation of constrained resources. | Do not add Java solver runtime, enterprise models, or REST optimization API in this phase. | Document future fields: `constraint_type`, `hard_or_soft`, `score_impact`, `resource_id`, `planning_window`, `candidate_plan_id`. |
| [OpenAI Agents SDK - Tools](https://openai.github.io/openai-agents-python/tools/) / [Handoffs](https://openai.github.io/openai-agents-python/handoffs/) / [Tracing](https://openai.github.io/openai-agents-python/tracing/) | Agent runtime | Defines agents with instructions, tools, guardrails, handoffs, sessions and tracing; tools can wrap functions, handoffs are exposed as tools, and traces capture model generations, tool calls, handoffs and guardrails. | Function-tool boundary, agent-as-tool option, explicit handoff metadata, trace records, local runtime tools, guardrail mindset. | Do not require OpenAI credentials for the public demo; do not create a large multi-agent hierarchy before deterministic tools are stable. | Implement `tool_registry`, `workflow_runner`, `agent_trace_logger`, `mock_model_provider`, and later provider adapters. Agent answers must cite tool result and source rows. |
| [Model Context Protocol](https://modelcontextprotocol.io/docs/learn/server-concepts) / [Tools spec](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) | Agent tool protocol | Separates tools, resources and prompts; tools expose typed inputs/outputs, resources expose context by URI, prompts expose user-invoked templates, and clients should make tool exposure/invocation visible. | Tool schema, output schema, resource links, prompt templates, capability discovery, approval/logging UI, URI-based resource access. | Do not build a full MCP server until internal tool contracts are stable. | Create MCP-ready contracts for `search_material`, `get_product_bom`, `calculate_inventory_risk`, `generate_production_notice`, `run_line_simulation`, `get_simulation_report`, and `get_agent_trace`. |
| [CrewAI](https://docs.crewai.com/en/introduction) | Agent orchestration | Separates Flows as process/state/control definitions from Crews as role-based teams delegated by a Flow; supports stateful event-driven workflows and tools. | Flow-first design, limited specialist crews, event/state separation, tool scoping by task. | Do not create many persona agents or chatty multi-agent collaboration for a simple deterministic workflow. | Use CrewAI as a design reference only: `daily_factory_review` and `order_to_material_risk` should be explicit workflows first, with agent roles as optional execution helpers. |
| [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview) / [Durable execution](https://docs.langchain.com/oss/python/langgraph/durable-execution) | Stateful workflow runtime | Low-level orchestration runtime for long-running, stateful agents with durable execution, persistence, streaming, human-in-the-loop and debugging. | State machine mindset, checkpoint/replay discipline, idempotent side effects, human-review checkpoints, graph-level trace. | Do not introduce LangGraph runtime unless a workflow actually needs durable resume and human review. | Use the concept to design `TASK_LEDGER.md`, `CHECKPOINTS.md`, workflow status, and future persisted agent-run states. |
| [AGENTS.md for Codex](https://github.com/openai/codex/blob/main/docs/agents_md.md) / [agents.md](https://agents.md/) | Agent-readable repo instructions | Repository instructions guide coding agents with project conventions, build/test commands and scoped rules. | Short root instructions, module boundaries, validation commands, public-data safety rules, nearby instructions for deeper modules if needed. | Do not turn `AGENTS.md` into a large prompt pack or duplicate all documentation. | Keep root `AGENTS.md` concise; point to `RUNBOOK.md`, `DATA_CONTRACT.md`, and `agent_workspace` for detailed execution context. |

## Borrowed Architecture Patterns

1. **System-of-record separation**
   - ERP/WMS/MES own master and transactional truth.
   - This project owns demo imports, normalized snapshots, derived calculations, and explainable views.
   - Database tables should store `adapter_mode`, `source_file`, `source_row`, and `source_column` where data originates from files.

2. **API-first operations layer**
   - Carbon and Odoo support the idea that manufacturing systems should be extensible through stable APIs.
   - This project should expose small routes by business capability, not by frontend page:
     - `/api/files/*`
     - `/api/materials/*`
     - `/api/products/*`
     - `/api/bom/*`
     - `/api/inventory/*`
     - `/api/production-notices/*`
     - `/api/simulation/*`
     - `/api/agent/*`
     - `/api/integrations/*`

3. **Flow-first workflow design**
   - Node-RED, CrewAI Flows and LangGraph all point to the same rule: model the process before adding agents.
   - Workflows should be explicit YAML or code definitions:
     - `file_to_dashboard`
     - `order_to_material_risk`
     - `order_to_production_notice`
     - `line_simulation_to_report`
     - `daily_factory_review`

4. **Adapter-ready, not integration-heavy**
   - ERP/WMS/MES/PLC/WeChat should be mock/stub contracts first.
   - Each adapter should declare:
     - `adapter_name`
     - `mode`
     - `accepted_payloads`
     - `last_sample_at`
     - `supported_operations`
     - `known_gaps`

5. **Trace before automation**
   - Agent, workflow and telemetry references all emphasize observability.
   - Every answer or report should expose:
     - input record
     - selected workflow
     - called tools
     - data source rows
     - calculation result
     - next check

## Data Model Patterns

### Master and Planning Data

| Entity | Borrowed from | Key fields |
|---|---|---|
| `materials` | InvenTree, Carbon, Odoo | `material_id`, `name`, `category`, `uom`, `supplier_id`, `manufacturer`, `lead_time_days`, `is_serialized`, `default_location_id` |
| `finished_products` | ERPNext, Odoo | `product_id`, `name`, `revision`, `default_bom_id`, `route_id`, `planning_policy` |
| `bom_headers` | ERPNext, Odoo, InvenTree | `bom_id`, `product_id`, `revision`, `status`, `effective_from`, `source_file`, `source_row` |
| `bom_components` | ERPNext, InvenTree | `bom_id`, `component_material_id`, `qty_per_unit`, `scrap_factor`, `operation_id`, `source_row`, `source_column` |
| `routing_steps` | ERPNext, Odoo | `route_id`, `operation_id`, `sequence`, `workstation_id`, `standard_cycle_time_sec`, `setup_time_sec` |
| `workstations` | ERPNext, Odoo | `workstation_id`, `name`, `capacity`, `calendar_id`, `availability_rate`, `line_id` |

### Inventory and Supply Data

| Entity | Borrowed from | Key fields |
|---|---|---|
| `inventory_snapshots` | Odoo, InvenTree | `snapshot_id`, `material_id`, `location_id`, `available_qty`, `reserved_qty`, `lot_no`, `source_file`, `source_row` |
| `stock_locations` | InvenTree, Odoo | `location_id`, `name`, `parent_location_id`, `location_type`, `is_external` |
| `customer_orders` | ERPNext, Odoo | `order_id`, `customer_label`, `product_id`, `qty`, `due_date`, `priority`, `source_file`, `source_row` |
| `shipment_records` | Odoo, WMS pattern | `shipment_id`, `material_id`, `qty`, `eta`, `carrier`, `status`, `source_file`, `source_row` |
| `supplier_delivery_records` | InvenTree, ERPNext | `supplier_id`, `material_id`, `open_po_qty`, `on_time_rate`, `last_delivery_date`, `risk_note` |

### Production, Simulation and Agent Data

| Entity | Borrowed from | Key fields |
|---|---|---|
| `production_notices` | ERPNext Work Order pattern | `notice_id`, `order_id`, `product_id`, `qty`, `material_gate_status`, `template_version`, `created_at` |
| `production_lines` | MES-lite, simulation tools | `line_id`, `name`, `product_family`, `status`, `adapter_mode` |
| `machines` | ERPNext workstation, ThingsBoard asset | `machine_id`, `line_id`, `operation_id`, `cycle_time_sec`, `availability_rate`, `yield_rate`, `buffer_capacity` |
| `transport_links` | takt simulation, Node-RED flow edge | `link_id`, `from_machine_id`, `to_machine_id`, `mode`, `capacity`, `transfer_time_sec` |
| `machine_events` | ThingsBoard message model | `event_id`, `machine_id`, `event_type`, `payload_json`, `metadata_json`, `source_adapter`, `event_time` |
| `simulation_runs` | OR-Tools/Timefold planning run idea | `run_id`, `line_id`, `hours`, `input_hash`, `status`, `created_at` |
| `simulation_reports` | MES report pattern | `run_id`, `total_output`, `good_output`, `scrap_output`, `bottleneck_machine_id`, `quality_bottleneck_machine_id`, `recommendation` |
| `agent_tool_calls` | OpenAI Agents SDK, MCP | `tool_call_id`, `trace_id`, `tool_name`, `input_json`, `output_json`, `source_refs_json`, `started_at`, `completed_at` |
| `workflow_runs` | Node-RED, CrewAI, LangGraph | `workflow_run_id`, `workflow_name`, `status`, `current_step`, `input_json`, `result_json`, `checkpoint_json` |

## API and Adapter Patterns

### API Route Groups

| Route group | Responsibility | Reference basis |
|---|---|---|
| `/api/files` | classify, parse, validate and log imported demo files | Node-RED flow input, spreadsheet import pattern |
| `/api/materials` | search material master and supplier context | InvenTree parts and supplier model |
| `/api/products` | expose finished product and BOM relation | ERPNext/Odoo manufacturing product model |
| `/api/bom` | explode BOM and calculate component demand | ERPNext BOM to material requirements |
| `/api/inventory` | coverage, shortage, surplus, reservation and inbound records | Odoo Inventory, InvenTree stock |
| `/api/orders` | import and inspect customer-order readiness | ERPNext/Odoo order-to-manufacturing relationship |
| `/api/production-notices` | generate preview/export and template version records | ERPNext Work Order signal adapted to notice workflow |
| `/api/simulation` | run deterministic takt simulation and report bottlenecks | MES-lite + OR-Tools constraint vocabulary |
| `/api/agent` | tool registry, workflow run, chat answer, trace list | OpenAI Agents SDK, MCP, LangGraph trace patterns |
| `/api/integrations` | show adapter status and accept mock/stub payloads | Carbon API-first boundary, ThingsBoard REST/rule concept |

### Adapter Contracts

Adapters should not hide uncertainty. Each adapter needs an explicit contract:

```json
{
  "adapter": "wms",
  "mode": "mock",
  "status": "ready",
  "accepted_payloads": ["inventory_snapshot", "shipment_record"],
  "source_system": "demo_data",
  "last_sample_at": "2026-06-07T00:00:00Z",
  "known_gaps": ["no live authentication", "no incremental sync"]
}
```

### MCP-Ready Tool Contract

Internal tools should already look like MCP tools even before a server exists:

```json
{
  "name": "calculate_inventory_risk",
  "description": "Calculate material coverage for a product and order quantity.",
  "inputSchema": {
    "type": "object",
    "required": ["product_id", "quantity"],
    "properties": {
      "product_id": {"type": "string"},
      "quantity": {"type": "number"}
    }
  },
  "outputSchema": {
    "type": "object",
    "required": ["overall_status", "materials", "source_refs"],
    "properties": {
      "overall_status": {"type": "string"},
      "materials": {"type": "array"},
      "source_refs": {"type": "array"}
    }
  }
}
```

## Agent Runtime Patterns

### Tool Registry

The registry should start with a small, reliable set:

| Tool | Deterministic backend | Required evidence |
|---|---|---|
| `search_material` | material master query | material row and supplier record |
| `get_product_bom` | BOM lookup | BOM header, component rows |
| `explode_bom` | BOM demand calculation | product, quantity, component math |
| `calculate_inventory_risk` | inventory + inbound coverage | stock rows, inbound rows, shortage math |
| `check_order_material_coverage` | order + BOM + inventory | order row, due date, risk rows |
| `generate_production_notice` | notice generator | template version, order, material gate |
| `run_line_simulation` | simulation engine | line config, machine parameters |
| `detect_bottleneck` | report analyzer | machine utilization, output, waiting/blocking |
| `generate_daily_report` | summary writer over tool outputs | referenced tool-call IDs |
| `answer_factory_question` | workflow router | selected workflow and tool trace |

### Workflow Runner

Workflows should be explicit and replayable:

```text
workflow_name
input_schema
steps
tool_call_ids
source_refs
status
checkpoint
result_summary
```

Borrowed guidance:

- From OpenAI Agents SDK: trace tool calls and handoffs.
- From MCP: use typed input/output schemas and visible tool execution.
- From CrewAI: start with Flow definitions, add specialist agents only where useful.
- From LangGraph: checkpoint state for long-running or human-reviewed workflows.

### Agent Answer Contract

Agent responses should use the same operational frame:

```text
Result:
Evidence:
Source:
Next check:
```

The answer must never be the only source of truth. It should summarize tool outputs.

## Frontend and Portfolio Patterns

The frontend should be redesigned against the reference patterns, not decorated around the current rough pages.

### Page-Level Patterns

| Page | Borrowed pattern | Required UI evidence |
|---|---|---|
| Home / Project Overview | Carbon API-first boundary, Odoo module map | system boundary diagram, adapter mode, demo data status |
| Data Import Center | Node-RED flow + file parser trace | file type, parser, row count, validation status, source trace |
| BOM & Inventory Dashboard | ERPNext BOM/work order + InvenTree stock | BOM tree, demand math, inventory, inbound, supplier context |
| Product Material Trace | InvenTree stock location + Odoo route | product -> BOM -> stock -> inbound -> order -> supplier chain |
| Production Notice Generator | ERPNext Work Order signal | order fields, material gate, template version, preview, source rows |
| Production Line Simulation | MES-lite + OR-Tools constraints | line graph, machine states, cycle time, output, bottleneck |
| Simulation Report | MES report | output, scrap, utilization, waiting, blocking, bottleneck evidence |
| AI Factory Q&A | OpenAI Agents SDK + MCP | question, workflow, tool calls, tool outputs, source refs |
| Integration Status | Carbon API-first + ThingsBoard telemetry | adapter mode, accepted payloads, last sample, known gaps |
| Agent Trace Page | OpenAI tracing + LangGraph state | trace ID, workflow, step status, tool input/output, checkpoint |
| Portfolio Case Study | engineering case format | problem, architecture, data contract, module loop, validation evidence |

### Visual Requirements Derived From References

- Use dense tables where operational comparison matters.
- Use trace chains where source lineage matters.
- Use node/edge diagrams only for real flows: data flow, production line, workflow trace.
- Use status chips for `mock`, `stub`, `ready`, `warning`, `blocked`, `covered`, `critical`.
- Avoid screenshots where text overflows or cards crop content. UI components must have fixed min widths, wrapping rules, and responsive breakpoints before screenshots are regenerated.

## Test and CI Patterns

The references imply that this project must prove it is not just a shell. The minimum test surface should cover data, calculations, API contracts, workflows, and frontend rendering.

### Required Tests

| Test group | Purpose |
|---|---|
| `test_demo_data_schema` | All demo JSON records match required fields and contain no private factory identifiers. |
| `test_bom_explosion` | BOM demand equals `qty_per_unit * order_qty` with explicit units. |
| `test_inventory_risk` | Coverage status changes correctly across covered, watch and critical cases. |
| `test_notice_generation` | Notice includes product, order, quantity, material gate, template version and source refs. |
| `test_simulation_report` | 24h run returns output, scrap, utilization, waiting, blocking and bottleneck. |
| `test_agent_tool_registry` | Each agent tool has schema, deterministic backend and trace output. |
| `test_api_smoke` | Main API routes return valid JSON with expected keys. |
| `test_frontend_static_content` | Key pages render required labels without clipped text in screenshot checks. |
| `test_ai_tone` | README, case study, frontend copy and agent templates avoid banned wording. |
| `test_repo_hygiene` | No `.venv`, `node_modules`, `dist`, database files, release packages or private templates are tracked. |

### CI Sequence

```text
install Python dependencies
install web dependencies
seed demo data
validate demo data schema
run unit tests
run API smoke test
run agent tool registry test
run AI-tone scan
build frontend
run screenshot/layout smoke if browser is available
```

## How This Project Is Different

This project is deliberately smaller than its references.

- It is not Carbon: it does not own ERP/MES/QMS records.
- It is not ERPNext or Odoo: it does not manage the full transaction lifecycle.
- It is not InvenTree: it does not manage full inventory operations.
- It is not qcadoo MES: it does not execute shop-floor production.
- It is not Node-RED: it does not provide a visual workflow editor.
- It is not ThingsBoard: it does not ingest live device telemetry at scale.
- It is not OR-Tools or Timefold: it does not optimize schedules in the current phase.
- It is not an agent framework: it exposes a small factory tool surface and records traces.

The project should demonstrate the engineering layer between those systems:

```text
fragmented data exports
  -> normalized demo records
  -> deterministic calculations
  -> adapter-ready APIs
  -> agent-readable tools
  -> traceable operations dashboard
```

## Target Implementation Mapping

### Repository Structure

```text
apps/
  api-server/
    factory_ops_api/
      main.py
      domain.py
      schemas.py
      adapters/
      tools/
  web-dashboard/
    src/
      pages/
      components/
      data/
packages/
  core-domain/
  parsers/
  engines/
  integrations/
  agent-runtime/
  ui-system/
agent_workspace/
  agents/
  skills/
  workflows/
  hooks/
  prompts/
database/
  schema.sql
demo_data/
reference_research/
tests/
scripts/
docs/
```

### Database Schema Work

Add or refine these groups:

- `materials`, `suppliers`, `stock_locations`
- `finished_products`, `bom_headers`, `bom_components`
- `routing_steps`, `workstations`, `production_lines`, `machines`, `transport_links`
- `customer_orders`, `shipment_records`, `supplier_delivery_records`
- `production_notices`, `notice_template_versions`
- `machine_events`, `device_telemetry`
- `simulation_runs`, `simulation_reports`
- `agent_traces`, `agent_tool_calls`, `workflow_runs`
- `file_import_logs`, `source_references`

### API Work

Implement routes in this order:

1. `GET /health`
2. `GET /api/agent/tools`
3. `GET /api/files/imports`
4. `POST /api/files/classify`
5. `GET /api/products`
6. `GET /api/products/{product_id}/bom`
7. `POST /api/bom/explode`
8. `GET /api/inventory/risk`
9. `GET /api/products/{product_id}/material-trace`
10. `POST /api/production-notices/generate`
11. `POST /api/simulation/run`
12. `GET /api/agent/traces`
13. `POST /api/agent/chat`
14. `GET /api/integrations/status`

### Agent Workspace Work

Keep the workspace small and executable:

- Root orchestrator: routes questions to workflows.
- BOM/inventory specialist: owns `get_product_bom`, `explode_bom`, `calculate_inventory_risk`.
- Notice specialist: owns `generate_production_notice`.
- Simulation specialist: owns `run_line_simulation`, `detect_bottleneck`.
- Report specialist: writes summaries only from tool outputs.

Do not add more agents until tool traces prove the current ones are useful.

### Frontend Redesign Work

The next frontend pass should be rebuilt around this digest:

- Replace oversized cards with dense panels, tables, traces and line schematics.
- Add source-reference side panels that never crop text.
- Add adapter status panels with exact mode and gap fields.
- Add API/tool trace panels with input/output snippets.
- Add responsive layout constraints before taking screenshots.
- Regenerate screenshots only after checking text fit at desktop and mobile widths.

### Portfolio Documentation Work

README and case study should answer these questions with evidence:

- What fragmented factory data does the prototype connect?
- What calculations are deterministic?
- Which APIs and tools exist?
- Which modules are mock/stub and why?
- What can a reviewer run locally?
- What screenshots come from actual local pages?
- What is explicitly out of scope?
