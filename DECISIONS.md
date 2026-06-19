# Decisions

## D-001 - Keep This as an Operations Intelligence Layer

The project does not attempt to replace ERP, WMS, or MES. It connects fragmented exports, demo telemetry, production-notice generation, line simulation, and agent-readable tools into one open-source operations layer.

## D-002 - Use Deterministic Business Logic

BOM explosion, inventory coverage, notice generation, and simulation are calculated in code. The agent runtime calls tools and explains results; it does not invent data.

## D-003 - Use Mock/Stub Adapters

ERP, WMS, MES, PLC, scheduling, messaging, and MCP adapters are represented by clear mock or ready-schema statuses. Missing live systems must not block the main demo.

## D-004 - Avoid Vendoring Existing Repositories

Earlier factory workflow projects are treated as source cases and capability references. This repository extracts patterns and contracts instead of copying large outputs, private data, node_modules, release artifacts, or original factory templates.

## D-005 - Frontend as Engineering Console

The web dashboard uses a manufacturing dossier/control-room interface: source traces, status chips, line schematics, tool traces, dense tables, and restrained colors.
