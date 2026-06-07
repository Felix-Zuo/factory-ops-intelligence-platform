# Skill: extract_bom_structure

Input:

- product id
- source rows
- component rows

Output:

- product
- component list
- quantity per unit
- source file, row, and column

Guardrail:

- Missing material id blocks only that component row, not the whole import.

