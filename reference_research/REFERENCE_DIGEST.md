# Reference Digest

## Summary

This project borrows patterns from manufacturing ERP/MES/WMS, IoT rule engines, planning solvers, and agent orchestration frameworks. It does not copy any full platform. The target is a demo-ready operations intelligence layer for fragmented manufacturing data.

## Reference Matrix

| Reference | Category | What it does | What to borrow | What not to overbuild | Application in this project |
|---|---|---|---|---|---|
| [Carbon Manufacturing Systems](https://carbon.ms/) / [GitHub](https://github.com/crbnos/carbon) | Manufacturing ERP/MES/QMS | API-first manufacturing system of record with ERP, MES, QMS, and MCP direction | System-of-record boundary, manufacturing master data naming, API-first modules, agent-ready surface | Full ERP/MES/QMS implementation | Keep this repo as an intelligence layer around exports, adapters, and tool contracts |
| [ERPNext Manufacturing](https://docs.frappe.io/erpnext/manufacturing) | Manufacturing ERP | BOM, Work Order, Job Card, Workstation, Production Plan, capacity planning | BOM -> demand -> work order readiness chain | Accounting, HR, full procurement, full production accounting | Map customer order and BOM to material readiness and production notice |
| [Odoo Manufacturing](https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/manufacturing.html) / [Inventory](https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/inventory.html) | MRP/WMS | Manufacturing orders, shop floor feedback, replenishment, routes, warehouse operations | MRP and WMS boundary, stock availability affecting release decisions | Module marketplace, accounting valuation, complex permissions | Integration Status and data contract for inventory, order, and shop-floor signals |
| [InvenTree](https://docs.inventree.org/) | Parts and stock | Parts, suppliers, stock locations, BOM, builds, API, plugin system | Lightweight part master, stock trace, supplier linkage, plugin-style extension | Full ERP functions | Material master, inventory trace, supplier on-time context |
| [Node-RED](https://nodered.org/docs/) | Event workflow | Flow-based programming for event-driven applications | Node/edge workflow thinking, event hooks, transform steps | Visual flow editor | YAML workflow files and hooks for file upload, validation, refresh, simulation, notice generation |
| [ThingsBoard Rule Engine](https://thingsboard.io/docs/user-guide/rule-engine/) / [Dashboards](https://thingsboard.io/docs/user-guide/dashboards/) | IoT and telemetry | Device telemetry, rule chains, dashboards, alarms, debug traces | Telemetry event schema, rule-chain trace, dashboard widgets | Full IoT platform, protocol stack, multi-tenant operations | PLC and MES mock adapter schema, Integration Status, machine-state events |
| [OR-Tools](https://developers.google.com/optimization) / [Job Shop](https://developers.google.com/optimization/scheduling/job_shop) | Optimization | Routing, scheduling, assignment, constraint programming | Job-shop concepts, machine constraints, makespan, resource contention | General optimization platform | Future scheduling adapter and current bottleneck explanation |
| [Timefold Solver](https://docs.timefold.ai/timefold-solver/latest/introduction) | Planning solver | Constraint satisfaction for routing, scheduling, task assignment, equipment scheduling | Hard/soft constraints and score explanation | Java solver implementation in current scope | Roadmap for capacity and scheduling adapter |
| [OpenAI Agents SDK](https://platform.openai.com/docs/guides/agents-sdk/) / [Python docs](https://openai.github.io/openai-agents-python/agents/) | Agent runtime | Tools, handoffs, sessions, guardrails, and tracing | Tool registry, trace logging, workflow names, local tool execution | Multi-agent sprawl or API-key dependency | Mock provider with tool execution and traces |
| [Model Context Protocol](https://modelcontextprotocol.io/docs/learn) | Agent tool protocol | Tools, resources, prompts, JSON-RPC lifecycle, capability negotiation | Tool/resource/prompt separation and minimal context exposure | Protocol extension work | MCP-ready adapter schema and `agent_interface` direction |
| [CrewAI](https://docs.crewai.com/en/introduction) | Agent orchestration | Agent roles, tasks, Flows, Crews, observability | Flow-first orchestration and role boundaries | Large agent team | Small workflow registry with factory-oriented skills |
| [LangGraph](https://docs.langchain.com/oss/python/langgraph/workflows-agents) | Stateful workflows | Graph workflows, state, persistence, human review | Explicit workflow state and resumable traces | Graphing every business path | Workflow files and Agent Trace page |
| [AGENTS.md](https://developers.openai.com/codex/guides/agents-md) / [agents.md](https://agents.md/) | Agent instruction standard | Repository-level instructions for coding agents | Build/test commands, boundaries, data-safety rules | Huge process manual | Root `AGENTS.md` and module contracts |

## Borrowed Architecture Patterns

- Keep system-of-record data separate from the operations intelligence layer.
- Use API-first contracts so adapters can replace demo exports later.
- Keep business calculations deterministic and tool-driven.
- Store source traces for records that come from spreadsheets or exports.

## Data Model Patterns

- Product, BOM component, material, stock location, customer order, inbound shipment, supplier delivery, machine, line, simulation report, agent trace.
- Every public demo record is synthetic and safe to publish.
- Source fields remain explicit: file name, row, column, adapter mode.

## API and Adapter Patterns

- Adapter routes accept external records but run in mock/stub mode by default.
- API endpoints are organized around files, materials, products, BOM, inventory, notices, simulation, agent, and integrations.
- MCP-like contracts are represented as tools, resources, and prompts before a full server is added.

## Agent Runtime Patterns

- The agent runtime calls tools and records the selected workflow.
- Responses use result, evidence, source, and next check.
- Missing model credentials do not block the demo because the mock provider is the default.

## Frontend and Portfolio Patterns

- Dense but readable engineering console.
- Source trace tags, adapter status badges, tool trace timeline, BOM tree, material trace chain, line schematic, notice preview.
- Screenshots come from the local dashboard after validation.

## Test and CI Patterns

- Seed demo data.
- Run deterministic domain tests.
- Run smoke demo.
- Run copy-tone scan.
- Build frontend.

## How This Project Is Different

This project is not a full ERP, WMS, MES, IoT platform, solver, or agent framework. It is a portfolio-grade operations intelligence prototype that shows how those systems can be connected through contracts, adapters, workflows, and traceable calculations.
