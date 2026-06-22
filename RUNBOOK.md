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
python scripts/self_check.py
python -m pytest tests
python scripts/smoke_demo.py
python scripts/check_ai_tone.py
npm --prefix apps/web-dashboard run build
```
