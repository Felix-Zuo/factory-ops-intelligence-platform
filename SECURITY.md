# Security

This repository is designed for public open-source demo review.

## Data Policy

- Use synthetic demo data only.
- Do not commit customer names, supplier contracts, real BOM files, production schedules, shipment records, employee data, access tokens, or internal templates.
- Keep `.env`, SQLite demo databases, virtual environments, build outputs, release packages, and dependency folders out of Git.

## Adapter Policy

ERP, WMS, MES, PLC, scheduling, messaging, and MCP integrations are mock/stub contracts in this public project. Live credentials and live system URLs do not belong in this repository.

External customs and policy signals are represented as official-source links and adapter contracts. Production adapters should use an allowlist, cache source metadata, separate source text from model summaries, and keep compliance review human-owned.

## API Policy

- Request bodies and query parameters are bounded.
- Unknown resources, unsupported payloads and non-executable adapter modes return explicit 4xx responses.
- CORS is restricted to local dashboard origins.
- Generated notice HTML escapes source text, and in-memory tool traces retain at most 25 entries.
- Public endpoints use deterministic local data and do not perform live network calls.
- Model adapters must not receive credentials, private exports, or raw personal data through this repository.

## Reporting

Open an issue or contact the maintainer if public files accidentally expose sensitive data.
