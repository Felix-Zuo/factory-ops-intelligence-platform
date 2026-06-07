$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root
python scripts/seed_demo_data.py
python scripts/self_check.py
python -m pytest tests
python scripts/smoke_demo.py
python scripts/check_ai_tone.py
npm --prefix apps/web-dashboard run build

