from __future__ import annotations

import uvicorn


def main() -> None:
    uvicorn.run("factory_ops_api.main:app", host="127.0.0.1", port=8017, reload=True)


if __name__ == "__main__":
    main()
