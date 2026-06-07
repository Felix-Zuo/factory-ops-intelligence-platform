# Skill: classify_factory_file

Input:

- `file_name`
- optional `sheet_names`
- optional `headers`

Output:

- `file_type`
- `confidence`
- `parser`
- `source_trace_required`

Rules:

- BOM files route to BOM parser.
- WMS or inventory files route to inventory parser.
- Sales/order files route to customer order parser.
- Shipment or inbound files route to shipment parser.

