# Skill: calculate_inventory_risk

Input:

- product id
- order quantity

Output:

- required quantity
- available quantity
- inbound quantity
- shortage quantity
- status
- source trace

Status rules:

- `critical`: required quantity is greater than available plus inbound.
- `watch`: coverage is close to requirement.
- `covered`: coverage supports the order.
- `surplus`: coverage is materially higher than requirement.

