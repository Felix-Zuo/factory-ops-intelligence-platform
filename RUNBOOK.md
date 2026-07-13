# Runbook

## Install

```powershell
git clone https://github.com/Felix-Zuo/factory-ops-intelligence-platform.git
cd factory-ops-intelligence-platform
python -m pip install -r apps/api-server/requirements.txt
npm --prefix apps/web-dashboard install
```

## Seed Demo Data

```powershell
python scripts/seed_demo_data.py
```

## Start API

```powershell
$env:PYTHONPATH="apps/api-server"
python -m uvicorn factory_ops_api.main:app --host 127.0.0.1 --port 8017
```

## Start Web Dashboard

```powershell
npm --prefix apps/web-dashboard run dev -- --host 127.0.0.1 --port 5178
```

## Validate

```powershell
npm run test:all
npm audit --prefix apps/web-dashboard --omit=dev
git diff --check
```

`npm run test:all` is the single local and CI validation entrypoint. It includes data seeding, snapshot generation, self-check, pytest, smoke coverage, public-copy scanning, showcase checks, public-surface integrity checks and the production frontend build.

## Publish GitHub Pages

The Pages artifact is the `docs/` directory. `.github/workflows/pages.yml` uploads and deploys that directory through the `github-pages` environment.

After a `main` push:

```powershell
gh run list --workflow pages.yml --limit 3
Invoke-WebRequest https://felix-zuo.github.io/factory-ops-intelligence-platform/showcase.html -UseBasicParsing
```

Repository Pages settings must use `build_type: workflow`; do not restore the legacy branch-based Pages builder.
