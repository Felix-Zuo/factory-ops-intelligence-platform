# Contributing

Thanks for improving this manufacturing operations demo. Keep changes focused, reproducible, and synthetic-data only.

## Set Up

```powershell
python -m pip install -r apps/api-server/requirements.txt
npm --prefix apps/web-dashboard install
python scripts/seed_demo_data.py
python scripts/generate_frontend_snapshot.py
```

## Run Checks

```powershell
npm run test:all
```

For a smaller local loop:

```powershell
python scripts/self_check.py
python -m pytest tests
python scripts/smoke_demo.py
python scripts/check_ai_tone.py
npm --prefix apps/web-dashboard run build
```

## Add A Parser

- Add parser code under `packages/parsers/`.
- Add synthetic input data under `demo_data/`.
- Update `scripts/seed_demo_data.py` if the parser feeds a new table or field.
- Add or update tests for row counts, source refs, and failure handling.

## Add An Adapter

- Add adapter contracts under `packages/integrations/`.
- Mark the adapter mode as `mock`, `stub`, or `sample`.
- Keep live credentials, real URLs, and private payloads out of the repository.
- Show the adapter state in the integration status page when useful.

## Add An Agent Tool

- Add the tool schema to `agent_workspace/tool_registry.json`.
- Keep business values computed by deterministic functions, not by free-form text.
- Add the tool to a workflow when it belongs in a repeatable flow.
- Cover the tool in tests and, when relevant, in `scripts/smoke_demo.py`.

## Coding Expectations

- Prefer deterministic behavior for demo reproducibility.
- Keep data synthetic and source-traceable.
- Keep UI copy concise and operational.
- Avoid adding dependencies unless they reduce real complexity.
- Regenerate `apps/web-dashboard/src/demoSnapshot.ts` after backend demo output changes.

## Issues

Use the bug report template for broken setup, tests, screenshots, or demo behavior. Use the feature request template for parsers, adapters, tools, docs, or dashboard improvements.

