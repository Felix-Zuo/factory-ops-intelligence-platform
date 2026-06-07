$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$apiPort = 8017
$webPort = 5178
Write-Host "API: http://127.0.0.1:$apiPort"
Write-Host "Web: http://127.0.0.1:$webPort"
python "$root\scripts\generate_frontend_snapshot.py"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$root'; `$env:PYTHONPATH='apps/api-server'; python -m uvicorn factory_ops_api.main:app --host 127.0.0.1 --port $apiPort" -WindowStyle Hidden
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$root\apps\web-dashboard'; npm run dev -- --host 127.0.0.1 --port $webPort" -WindowStyle Hidden
