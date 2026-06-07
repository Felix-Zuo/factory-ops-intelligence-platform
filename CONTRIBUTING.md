# Contributing

Keep contributions focused on the public demo loop:

- deterministic calculations
- synthetic data
- adapter contracts
- source trace
- frontend clarity
- validation scripts

Run these checks before opening a pull request:

```powershell
python scripts/self_check.py
python -m pytest tests
python scripts/smoke_demo.py
python scripts/check_ai_tone.py
npm --prefix apps/web-dashboard run build
```

