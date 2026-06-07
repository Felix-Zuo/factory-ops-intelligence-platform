$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Write-Host "API: http://127.0.0.1:8017"
Write-Host "Web: http://127.0.0.1:5177"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$root'; `$env:PYTHONPATH='apps/api-server'; python -m uvicorn factory_ops_api.main:app --host 127.0.0.1 --port 8017" -WindowStyle Hidden
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$root\apps\web-dashboard'; npm run dev -- --host 127.0.0.1 --port 5177" -WindowStyle Hidden

