# Product Requirements

## Product Goal

Operations Intelligence Platform is a reusable operations control tower for teams that need to connect sales demand, inventory, procurement, production capacity, shipment release, compliance signals and agent-readable analysis without exposing private factory systems.

The public repository is a synthetic but runnable version of the product architecture. It should be useful for manufacturing, warehouse fulfillment, field-service kits, maintenance work packages and other multi-item operations workflows.

## Core Workflows

| Workflow | User question | Product answer |
|---|---|---|
| S&OP review | Which products need attention this week? | Product health table with open orders, 4-week demand, finished goods cover, material gate, capacity and value. |
| Material gate | Can this order be released? | BOM explosion, stock coverage, inbound context, supplier notes and source-row evidence. |
| Forecast review | What demand should we plan for? | Deterministic baseline forecast plus a TimesFM-ready time-series contract. |
| Capacity review | Can the line absorb demand upside? | 24h deterministic line simulation, bottleneck, utilization, waiting and blocking evidence. |
| Policy radar | Are customs or policy changes relevant? | Official-source signal adapter contract linked to materials, products and orders. |
| Release gate | Can this order move to release? | Material, capacity, policy, quality, source trace and human approval checks with owner actions. |
| Scenario configuration | Can the same product work outside assembly? | Reusable scenario profiles for assembly, fulfillment, service kits and quality-lab review. |
| Decision brief | What should operations do next? | Source-backed actions, owners, evidence lanes and a safe model boundary. |
| Agent Q&A | Can I ask this in natural language? | Intent routing to deterministic tools with traceable tool calls. |

## Non-Negotiable Product Rules

- Calculations come from deterministic domain functions first.
- Models may summarize, rank and ask follow-up questions, but must not become the only source of business truth.
- External policy data must be retrieved through reviewed official-source adapters and cached with source metadata.
- Release decisions must expose controls, evidence, owner and next action before notice export.
- Scenario-specific behavior must come from explicit profiles, not hidden assumptions about one factory or product type.
- Public data remains synthetic and generic.
- Every release must pass seed, snapshot, self-check, pytest, smoke demo, tone scan and frontend build.

## Release Target

`0.3.1` is a mature public-product iteration:

- richer S&OP data model;
- demand forecast and TimesFM adapter boundary;
- external customs/policy signal contract;
- release-gate workbench with material, capacity, policy, quality, source-trace and approval controls;
- reusable scenario profile library for assembly, fulfillment, service parts and quality operations;
- decision brief with model safety boundary;
- dense React control-tower UI;
- product-grade static showcase page;
- expanded tests and API routes.
