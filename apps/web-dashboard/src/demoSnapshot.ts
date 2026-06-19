const demoSnapshot = {
  "health": {
    "mode": "demo",
    "products": 4,
    "materials": 20,
    "adapters": "mock/stub"
  },
  "products": [
    {
      "product_id": "FG-OPS-A100",
      "name": "Modular Control Kit A100",
      "revision": "R2",
      "default_bom_id": "BOM-OPS-A100-R2",
      "route_id": "ROUTE-UNIVERSAL-A",
      "planning_policy": "make_to_order",
      "product_name": "Modular Control Kit A100",
      "component_count": 7
    },
    {
      "product_id": "FG-OPS-B200",
      "name": "Sensor Pack B200",
      "revision": "R1",
      "default_bom_id": "BOM-OPS-B200-R1",
      "route_id": "ROUTE-UNIVERSAL-B",
      "planning_policy": "make_to_order",
      "product_name": "Sensor Pack B200",
      "component_count": 7
    },
    {
      "product_id": "FG-OPS-C300",
      "name": "Fluid Service Kit C300",
      "revision": "R1",
      "default_bom_id": "BOM-OPS-C300-R1",
      "route_id": "ROUTE-FLEX-CELL-B",
      "planning_policy": "make_to_stock",
      "product_name": "Fluid Service Kit C300",
      "component_count": 7
    },
    {
      "product_id": "FG-OPS-D400",
      "name": "Inspection Fixture D400",
      "revision": "R1",
      "default_bom_id": "BOM-OPS-D400-R1",
      "route_id": "ROUTE-FLEX-CELL-B",
      "planning_policy": "engineer_to_order",
      "product_name": "Inspection Fixture D400",
      "component_count": 7
    }
  ],
  "imports": [
    {
      "file_name": "bom_control_kit_demo.xlsx",
      "type": "bom",
      "status": "parsed",
      "rows": 7,
      "quality": "pass",
      "parser": "bom_parser_v1",
      "source_system": "excel_export_adapter"
    },
    {
      "file_name": "bom_sensor_pack_demo.xlsx",
      "type": "bom",
      "status": "parsed",
      "rows": 7,
      "quality": "pass",
      "parser": "bom_parser_v1",
      "source_system": "excel_export_adapter"
    },
    {
      "file_name": "bom_fluid_kit_demo.xlsx",
      "type": "bom",
      "status": "parsed",
      "rows": 7,
      "quality": "pass",
      "parser": "bom_parser_v1",
      "source_system": "excel_export_adapter"
    },
    {
      "file_name": "bom_fixture_demo.xlsx",
      "type": "bom",
      "status": "parsed",
      "rows": 7,
      "quality": "pass",
      "parser": "bom_parser_v1",
      "source_system": "excel_export_adapter"
    },
    {
      "file_name": "wms_inventory_demo.csv",
      "type": "inventory",
      "status": "parsed",
      "rows": 20,
      "quality": "pass",
      "parser": "inventory_parser_v1",
      "source_system": "wms_adapter_mock"
    },
    {
      "file_name": "sales_orders_demo.csv",
      "type": "orders",
      "status": "parsed",
      "rows": 8,
      "quality": "pass",
      "parser": "order_parser_v1",
      "source_system": "erp_adapter_mock"
    },
    {
      "file_name": "shipment_in_transit_demo.csv",
      "type": "shipments",
      "status": "parsed",
      "rows": 10,
      "quality": "warning",
      "parser": "shipment_parser_v1",
      "source_system": "wms_adapter_mock"
    },
    {
      "file_name": "machine_events_demo.json",
      "type": "machine_events",
      "status": "parsed",
      "rows": 12,
      "quality": "sample",
      "parser": "telemetry_parser_v1",
      "source_system": "plc_adapter_mock"
    }
  ],
  "orders": [
    {
      "order_id": "SO-2026-OPS-001",
      "customer": "Demo Operations North",
      "product_id": "FG-OPS-A100",
      "qty": 1200,
      "due_date": "2026-06-18",
      "priority": "high",
      "source_file": "sales_orders_demo.csv",
      "source_row": 2
    },
    {
      "order_id": "SO-2026-OPS-002",
      "customer": "Demo Service Channel",
      "product_id": "FG-OPS-B200",
      "qty": 900,
      "due_date": "2026-06-21",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 3
    },
    {
      "order_id": "SO-2026-OPS-003",
      "customer": "Demo Utility Account",
      "product_id": "FG-OPS-C300",
      "qty": 700,
      "due_date": "2026-06-25",
      "priority": "high",
      "source_file": "sales_orders_demo.csv",
      "source_row": 4
    },
    {
      "order_id": "SO-2026-OPS-004",
      "customer": "Demo Quality Lab",
      "product_id": "FG-OPS-D400",
      "qty": 180,
      "due_date": "2026-06-20",
      "priority": "expedite",
      "source_file": "sales_orders_demo.csv",
      "source_row": 5
    },
    {
      "order_id": "SO-2026-OPS-005",
      "customer": "Demo Distributor East",
      "product_id": "FG-OPS-A100",
      "qty": 650,
      "due_date": "2026-06-28",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 6
    },
    {
      "order_id": "SO-2026-OPS-006",
      "customer": "Demo Distributor West",
      "product_id": "FG-OPS-B200",
      "qty": 740,
      "due_date": "2026-07-02",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 7
    },
    {
      "order_id": "SO-2026-OPS-007",
      "customer": "Demo Maintenance Team",
      "product_id": "FG-OPS-C300",
      "qty": 520,
      "due_date": "2026-06-30",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 8
    },
    {
      "order_id": "SO-2026-OPS-008",
      "customer": "Demo Engineering Cell",
      "product_id": "FG-OPS-D400",
      "qty": 120,
      "due_date": "2026-07-05",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 9
    }
  ],
  "inventoryRisk": {
    "product_id": "FG-OPS-A100",
    "order_qty": 1200,
    "overall_status": "watch",
    "status_counts": {
      "critical": 0,
      "watch": 2,
      "covered": 4,
      "surplus": 1
    },
    "materials": [
      {
        "material_id": "MAT-ENC-A100",
        "material_name": "Universal aluminum enclosure",
        "supplier": "Northline Components",
        "manufacturer": "Northline Components",
        "uom": "pcs",
        "operation_id": "OP-10",
        "qty_per_unit": 1,
        "required_qty": 1200.0,
        "available_qty": 1430.0,
        "inbound_qty": 0.0,
        "coverage_qty": 1430.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.192,
        "status": "watch",
        "eta": "",
        "locations": [
          "FAB-A"
        ],
        "lot_numbers": [
          "ENC-A100-01"
        ],
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 2,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 2,
            "source_column": "available_qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.94,
        "supplier_note": "Enclosure supply stable with one open expedite lane"
      },
      {
        "material_id": "MAT-PCB-CTRL",
        "material_name": "Controller board assembly",
        "supplier": "Metro Electronics",
        "manufacturer": "Metro Electronics",
        "uom": "pcs",
        "operation_id": "OP-20",
        "qty_per_unit": 1,
        "required_qty": 1200.0,
        "available_qty": 1300.0,
        "inbound_qty": 300.0,
        "coverage_qty": 1600.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.333,
        "status": "covered",
        "eta": "2026-06-11",
        "locations": [
          "ELEC-A"
        ],
        "lot_numbers": [
          "PCB-CTRL-04"
        ],
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 3,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 3,
            "source_column": "qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.88,
        "supplier_note": "Controller boards and connectors need dock-date confirmation"
      },
      {
        "material_id": "MAT-SENSOR-IO",
        "material_name": "Multi-signal sensor module",
        "supplier": "Helio Sensors",
        "manufacturer": "Helio Sensors",
        "uom": "pcs",
        "operation_id": "OP-30",
        "qty_per_unit": 2,
        "required_qty": 2400.0,
        "available_qty": 2020.0,
        "inbound_qty": 450.0,
        "coverage_qty": 2470.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.029,
        "status": "watch",
        "eta": "2026-06-12",
        "locations": [
          "ELEC-B"
        ],
        "lot_numbers": [
          "SEN-IO-12"
        ],
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 2,
            "source_column": "qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.86,
        "supplier_note": "Sensor module release is the current watch item"
      },
      {
        "material_id": "MAT-CABLE-SET",
        "material_name": "Harness cable set",
        "supplier": "Vector Cable",
        "manufacturer": "Vector Cable",
        "uom": "pcs",
        "operation_id": "OP-40",
        "qty_per_unit": 1,
        "required_qty": 1200.0,
        "available_qty": 1820.0,
        "inbound_qty": 0.0,
        "coverage_qty": 1820.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.517,
        "status": "covered",
        "eta": "",
        "locations": [
          "CABLE-A"
        ],
        "lot_numbers": [
          "CAB-SET-08"
        ],
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 5,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5,
            "source_column": "available_qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.93,
        "supplier_note": "Cable sets are stable after latest incoming lot"
      },
      {
        "material_id": "MAT-FASTENER-M6",
        "material_name": "M6 fastener kit",
        "supplier": "Atlas Fasteners",
        "manufacturer": "Atlas Fasteners",
        "uom": "pcs",
        "operation_id": "OP-40",
        "qty_per_unit": 4,
        "required_qty": 4800.0,
        "available_qty": 6600.0,
        "inbound_qty": 0.0,
        "coverage_qty": 6600.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.375,
        "status": "covered",
        "eta": "",
        "locations": [
          "HARD-A"
        ],
        "lot_numbers": [
          "FAST-M6-11"
        ],
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 6,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6,
            "source_column": "available_qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 6,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.98,
        "supplier_note": "Fastener stock is sufficient across open demand"
      },
      {
        "material_id": "MAT-FIRMWARE-CFG",
        "material_name": "Firmware configuration label",
        "supplier": "Pioneer Quality Systems",
        "manufacturer": "Pioneer Quality Systems",
        "uom": "pcs",
        "operation_id": "OP-50",
        "qty_per_unit": 1,
        "required_qty": 1200.0,
        "available_qty": 1700.0,
        "inbound_qty": 0.0,
        "coverage_qty": 1700.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.417,
        "status": "covered",
        "eta": "",
        "locations": [
          "CFG-A"
        ],
        "lot_numbers": [
          "CFG-REL-22"
        ],
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 7,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7,
            "source_column": "available_qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 7,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.9,
        "supplier_note": "Serialized configuration labels require release control"
      },
      {
        "material_id": "MAT-PACK-STD",
        "material_name": "Protective carton",
        "supplier": "Harbor Packaging",
        "manufacturer": "Harbor Packaging",
        "uom": "pcs",
        "operation_id": "OP-60",
        "qty_per_unit": 1,
        "required_qty": 1200.0,
        "available_qty": 5200.0,
        "inbound_qty": 2400.0,
        "coverage_qty": 7600.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 6.333,
        "status": "surplus",
        "eta": "2026-06-09",
        "locations": [
          "PACK-A"
        ],
        "lot_numbers": [
          "PKG-STD-14"
        ],
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 8,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 8,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 9,
            "source_column": "qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 8,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.96,
        "supplier_note": "Packaging and labels have enough buffer"
      }
    ],
    "summary": {
      "critical_items": 0,
      "watch_items": 2,
      "covered_items": 4,
      "surplus_items": 1
    },
    "source_refs": [
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 2,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 2,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 3,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 3,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 3,
        "source_column": "qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 4,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 4,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 2,
        "source_column": "qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 5,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 5,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 6,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 6,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 7,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 7,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 8,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 8,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 9,
        "source_column": "qty"
      }
    ]
  },
  "materialTrace": {
    "product_id": "FG-OPS-A100",
    "product_name": "Modular Control Kit A100",
    "order": {
      "order_id": "SO-2026-OPS-001",
      "customer": "Demo Operations North",
      "product_id": "FG-OPS-A100",
      "qty": 1200,
      "due_date": "2026-06-18",
      "priority": "high",
      "source_file": "sales_orders_demo.csv",
      "source_row": 2
    },
    "material_chains": [
      {
        "material_id": "MAT-ENC-A100",
        "material_name": "Universal aluminum enclosure",
        "bom": {
          "operation_id": "OP-10",
          "qty_per_unit": 1,
          "required_qty": 1200.0
        },
        "stock": [
          {
            "snapshot_id": "INV-001",
            "material_id": "MAT-ENC-A100",
            "available_qty": 1550,
            "reserved_qty": 120,
            "location": "FAB-A",
            "lot_no": "ENC-A100-01",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 2
          }
        ],
        "inbound": [],
        "supplier": {
          "supplier": "Northline Components",
          "on_time_rate": 0.94,
          "open_po_qty": 1800,
          "risk_note": "Enclosure supply stable with one open expedite lane"
        },
        "status": "watch",
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 2,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 2,
            "source_column": "available_qty"
          }
        ]
      },
      {
        "material_id": "MAT-PCB-CTRL",
        "material_name": "Controller board assembly",
        "bom": {
          "operation_id": "OP-20",
          "qty_per_unit": 1,
          "required_qty": 1200.0
        },
        "stock": [
          {
            "snapshot_id": "INV-002",
            "material_id": "MAT-PCB-CTRL",
            "available_qty": 1450,
            "reserved_qty": 150,
            "location": "ELEC-A",
            "lot_no": "PCB-CTRL-04",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3
          }
        ],
        "inbound": [
          {
            "shipment_id": "INB-PCB-01",
            "material_id": "MAT-PCB-CTRL",
            "qty": 300,
            "eta": "2026-06-11",
            "carrier": "Demo Logistics",
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 3
          }
        ],
        "supplier": {
          "supplier": "Metro Electronics",
          "on_time_rate": 0.88,
          "open_po_qty": 4100,
          "risk_note": "Controller boards and connectors need dock-date confirmation"
        },
        "status": "covered",
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 3,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 3,
            "source_column": "qty"
          }
        ]
      },
      {
        "material_id": "MAT-SENSOR-IO",
        "material_name": "Multi-signal sensor module",
        "bom": {
          "operation_id": "OP-30",
          "qty_per_unit": 2,
          "required_qty": 2400.0
        },
        "stock": [
          {
            "snapshot_id": "INV-003",
            "material_id": "MAT-SENSOR-IO",
            "available_qty": 2200,
            "reserved_qty": 180,
            "location": "ELEC-B",
            "lot_no": "SEN-IO-12",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4
          }
        ],
        "inbound": [
          {
            "shipment_id": "INB-SENSOR-01",
            "material_id": "MAT-SENSOR-IO",
            "qty": 450,
            "eta": "2026-06-12",
            "carrier": "Demo Logistics",
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 2
          }
        ],
        "supplier": {
          "supplier": "Helio Sensors",
          "on_time_rate": 0.86,
          "open_po_qty": 2600,
          "risk_note": "Sensor module release is the current watch item"
        },
        "status": "watch",
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 2,
            "source_column": "qty"
          }
        ]
      },
      {
        "material_id": "MAT-CABLE-SET",
        "material_name": "Harness cable set",
        "bom": {
          "operation_id": "OP-40",
          "qty_per_unit": 1,
          "required_qty": 1200.0
        },
        "stock": [
          {
            "snapshot_id": "INV-004",
            "material_id": "MAT-CABLE-SET",
            "available_qty": 1900,
            "reserved_qty": 80,
            "location": "CABLE-A",
            "lot_no": "CAB-SET-08",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5
          }
        ],
        "inbound": [],
        "supplier": {
          "supplier": "Vector Cable",
          "on_time_rate": 0.93,
          "open_po_qty": 1400,
          "risk_note": "Cable sets are stable after latest incoming lot"
        },
        "status": "covered",
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 5,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5,
            "source_column": "available_qty"
          }
        ]
      },
      {
        "material_id": "MAT-FASTENER-M6",
        "material_name": "M6 fastener kit",
        "bom": {
          "operation_id": "OP-40",
          "qty_per_unit": 4,
          "required_qty": 4800.0
        },
        "stock": [
          {
            "snapshot_id": "INV-005",
            "material_id": "MAT-FASTENER-M6",
            "available_qty": 7600,
            "reserved_qty": 1000,
            "location": "HARD-A",
            "lot_no": "FAST-M6-11",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6
          }
        ],
        "inbound": [],
        "supplier": {
          "supplier": "Atlas Fasteners",
          "on_time_rate": 0.98,
          "open_po_qty": 5200,
          "risk_note": "Fastener stock is sufficient across open demand"
        },
        "status": "covered",
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 6,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6,
            "source_column": "available_qty"
          }
        ]
      },
      {
        "material_id": "MAT-FIRMWARE-CFG",
        "material_name": "Firmware configuration label",
        "bom": {
          "operation_id": "OP-50",
          "qty_per_unit": 1,
          "required_qty": 1200.0
        },
        "stock": [
          {
            "snapshot_id": "INV-006",
            "material_id": "MAT-FIRMWARE-CFG",
            "available_qty": 1800,
            "reserved_qty": 100,
            "location": "CFG-A",
            "lot_no": "CFG-REL-22",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7
          }
        ],
        "inbound": [],
        "supplier": {
          "supplier": "Pioneer Quality Systems",
          "on_time_rate": 0.9,
          "open_po_qty": 900,
          "risk_note": "Serialized configuration labels require release control"
        },
        "status": "covered",
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 7,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7,
            "source_column": "available_qty"
          }
        ]
      },
      {
        "material_id": "MAT-PACK-STD",
        "material_name": "Protective carton",
        "bom": {
          "operation_id": "OP-60",
          "qty_per_unit": 1,
          "required_qty": 1200.0
        },
        "stock": [
          {
            "snapshot_id": "INV-007",
            "material_id": "MAT-PACK-STD",
            "available_qty": 5600,
            "reserved_qty": 400,
            "location": "PACK-A",
            "lot_no": "PKG-STD-14",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 8
          }
        ],
        "inbound": [
          {
            "shipment_id": "INB-PACK-01",
            "material_id": "MAT-PACK-STD",
            "qty": 2400,
            "eta": "2026-06-09",
            "carrier": "Demo Local",
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 9
          }
        ],
        "supplier": {
          "supplier": "Harbor Packaging",
          "on_time_rate": 0.96,
          "open_po_qty": 3200,
          "risk_note": "Packaging and labels have enough buffer"
        },
        "status": "surplus",
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 8,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 8,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 9,
            "source_column": "qty"
          }
        ]
      }
    ],
    "trace_summary": [
      {
        "stage": "Product",
        "label": "FG-OPS-A100",
        "detail": "Modular Control Kit A100",
        "status": "selected"
      },
      {
        "stage": "Order",
        "label": "SO-2026-OPS-001",
        "detail": "1,200 pcs due 2026-06-18",
        "status": "high"
      },
      {
        "stage": "BOM",
        "label": "BOM-OPS-A100-R2",
        "detail": "7 components",
        "status": "parsed"
      },
      {
        "stage": "Inventory",
        "label": "WMS snapshot",
        "detail": "20 stock rows",
        "status": "watch"
      },
      {
        "stage": "Inbound",
        "label": "Shipment records",
        "detail": "10 inbound rows",
        "status": "linked"
      },
      {
        "stage": "Supplier",
        "label": "Delivery context",
        "detail": "12 suppliers",
        "status": "linked"
      }
    ],
    "source_refs": [
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 2,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 2,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 3,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 3,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 3,
        "source_column": "qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 4,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 4,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 2,
        "source_column": "qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 5,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 5,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 6,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 6,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 7,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 7,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 8,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 8,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 9,
        "source_column": "qty"
      }
    ]
  },
  "notice": {
    "notice_id": "PN-DEMO-OPS-A100",
    "product_id": "FG-OPS-A100",
    "product_name": "Modular Control Kit A100",
    "quantity": 1200,
    "order_id": "SO-2026-OPS-001",
    "due_date": "2026-06-18",
    "material_status": "watch",
    "material_gate": "release_with_follow_up",
    "blocked_materials": [],
    "watch_materials": [
      {
        "material_id": "MAT-ENC-A100",
        "material_name": "Universal aluminum enclosure",
        "supplier": "Northline Components",
        "manufacturer": "Northline Components",
        "uom": "pcs",
        "operation_id": "OP-10",
        "qty_per_unit": 1,
        "required_qty": 1200.0,
        "available_qty": 1430.0,
        "inbound_qty": 0.0,
        "coverage_qty": 1430.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.192,
        "status": "watch",
        "eta": "",
        "locations": [
          "FAB-A"
        ],
        "lot_numbers": [
          "ENC-A100-01"
        ],
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 2,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 2,
            "source_column": "available_qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.94,
        "supplier_note": "Enclosure supply stable with one open expedite lane"
      },
      {
        "material_id": "MAT-SENSOR-IO",
        "material_name": "Multi-signal sensor module",
        "supplier": "Helio Sensors",
        "manufacturer": "Helio Sensors",
        "uom": "pcs",
        "operation_id": "OP-30",
        "qty_per_unit": 2,
        "required_qty": 2400.0,
        "available_qty": 2020.0,
        "inbound_qty": 450.0,
        "coverage_qty": 2470.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.029,
        "status": "watch",
        "eta": "2026-06-12",
        "locations": [
          "ELEC-B"
        ],
        "lot_numbers": [
          "SEN-IO-12"
        ],
        "source_refs": [
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 2,
            "source_column": "qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.86,
        "supplier_note": "Sensor module release is the current watch item"
      }
    ],
    "html_preview": "<section class='notice-sheet'><h1>Release Notice PN-DEMO-OPS-A100</h1><p><strong>Product:</strong> Modular Control Kit A100 (FG-OPS-A100)</p><p><strong>Quantity:</strong> 1,200 pcs</p><p><strong>Customer order:</strong> SO-2026-OPS-001 / due 2026-06-18</p><p><strong>Material gate:</strong> release_with_follow_up</p><table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody><tr><td>MAT-ENC-A100</td><td>1,200.0 pcs</td><td>1,430.0</td><td>watch</td></tr><tr><td>MAT-PCB-CTRL</td><td>1,200.0 pcs</td><td>1,600.0</td><td>covered</td></tr><tr><td>MAT-SENSOR-IO</td><td>2,400.0 pcs</td><td>2,470.0</td><td>watch</td></tr><tr><td>MAT-CABLE-SET</td><td>1,200.0 pcs</td><td>1,820.0</td><td>covered</td></tr><tr><td>MAT-FASTENER-M6</td><td>4,800.0 pcs</td><td>6,600.0</td><td>covered</td></tr><tr><td>MAT-FIRMWARE-CFG</td><td>1,200.0 pcs</td><td>1,700.0</td><td>covered</td></tr><tr><td>MAT-PACK-STD</td><td>1,200.0 pcs</td><td>7,600.0</td><td>surplus</td></tr></tbody></table></section>",
    "template_version": "ops-production-notice/v2",
    "source_trace": {
      "bom_components": 7,
      "inventory_rows": 20,
      "order_source": "sales_orders_demo.csv",
      "order_row": 2
    },
    "source_refs": [
      {
        "source_file": "sales_orders_demo.csv",
        "source_row": 2,
        "source_column": "qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 2,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 2,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 3,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 3,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 3,
        "source_column": "qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 4,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 4,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 2,
        "source_column": "qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 5,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 5,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 6,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 6,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 7,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 7,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 8,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 8,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 9,
        "source_column": "qty"
      }
    ]
  },
  "simulation": {
    "run_id": "SIM-DEMO-LINE-A",
    "line_id": "LINE-UNIVERSAL-A",
    "line_name": "Configurable Assembly Line A",
    "hours": 24,
    "total_output": 1995,
    "good_output": 1995,
    "scrap_output": 19,
    "bottleneck_machine": "OP-40",
    "quality_bottleneck": "OP-40",
    "machine_utilization": 0.886,
    "waiting_time_hours": 2.94,
    "blocking_time_hours": 2.46,
    "machine_reports": [
      {
        "machine_id": "OP-10",
        "name": "Kit staging",
        "operation_id": "OP-10",
        "cycle_time_sec": 28,
        "good_output": 2892,
        "scrap_output": 9,
        "utilization": 0.902,
        "waiting_time_hours": 0.42,
        "blocking_time_hours": 0.24,
        "buffer_capacity": 260,
        "state": "running"
      },
      {
        "machine_id": "OP-20",
        "name": "Electronics install",
        "operation_id": "OP-20",
        "cycle_time_sec": 30,
        "good_output": 2660,
        "scrap_output": 19,
        "utilization": 0.893,
        "waiting_time_hours": 0.46,
        "blocking_time_hours": 0.24,
        "buffer_capacity": 220,
        "state": "running"
      },
      {
        "machine_id": "OP-30",
        "name": "Sensor calibration",
        "operation_id": "OP-30",
        "cycle_time_sec": 34,
        "good_output": 2287,
        "scrap_output": 25,
        "utilization": 0.874,
        "waiting_time_hours": 0.55,
        "blocking_time_hours": 0.38,
        "buffer_capacity": 180,
        "state": "running"
      },
      {
        "machine_id": "OP-40",
        "name": "Final assembly",
        "operation_id": "OP-40",
        "cycle_time_sec": 38,
        "good_output": 1995,
        "scrap_output": 28,
        "utilization": 0.854,
        "waiting_time_hours": 0.63,
        "blocking_time_hours": 1.12,
        "buffer_capacity": 160,
        "state": "blocked"
      },
      {
        "machine_id": "OP-50",
        "name": "Functional test",
        "operation_id": "OP-50",
        "cycle_time_sec": 32,
        "good_output": 2464,
        "scrap_output": 20,
        "utilization": 0.883,
        "waiting_time_hours": 0.5,
        "blocking_time_hours": 0.24,
        "buffer_capacity": 200,
        "state": "running"
      },
      {
        "machine_id": "OP-60",
        "name": "Pack and release",
        "operation_id": "OP-60",
        "cycle_time_sec": 29,
        "good_output": 2819,
        "scrap_output": 11,
        "utilization": 0.912,
        "waiting_time_hours": 0.38,
        "blocking_time_hours": 0.24,
        "buffer_capacity": 240,
        "state": "running"
      }
    ],
    "transport_links": [
      {
        "link_id": "LNK-A-10-20",
        "from": "OP-10",
        "to": "OP-20",
        "mode": "conveyor",
        "capacity": 220,
        "transfer_time_sec": 44
      },
      {
        "link_id": "LNK-A-20-30",
        "from": "OP-20",
        "to": "OP-30",
        "mode": "cart",
        "capacity": 180,
        "transfer_time_sec": 58
      },
      {
        "link_id": "LNK-A-30-40",
        "from": "OP-30",
        "to": "OP-40",
        "mode": "workcell-buffer",
        "capacity": 160,
        "transfer_time_sec": 42
      },
      {
        "link_id": "LNK-A-40-50",
        "from": "OP-40",
        "to": "OP-50",
        "mode": "conveyor",
        "capacity": 180,
        "transfer_time_sec": 36
      },
      {
        "link_id": "LNK-A-50-60",
        "from": "OP-50",
        "to": "OP-60",
        "mode": "conveyor",
        "capacity": 220,
        "transfer_time_sec": 32
      }
    ],
    "source_events": [
      {
        "event_id": "EVT-001",
        "machine_id": "OP-10",
        "event_type": "cycle",
        "payload_json": {
          "cycle_count": 2960
        },
        "metadata_json": {
          "line_id": "LINE-UNIVERSAL-A"
        },
        "source_adapter": "plc_adapter_mock",
        "event_time": "2026-06-07T08:00:00Z"
      },
      {
        "event_id": "EVT-002",
        "machine_id": "OP-20",
        "event_type": "cycle",
        "payload_json": {
          "cycle_count": 2810
        },
        "metadata_json": {
          "line_id": "LINE-UNIVERSAL-A"
        },
        "source_adapter": "plc_adapter_mock",
        "event_time": "2026-06-07T08:05:00Z"
      },
      {
        "event_id": "EVT-003",
        "machine_id": "OP-30",
        "event_type": "cycle",
        "payload_json": {
          "cycle_count": 2410
        },
        "metadata_json": {
          "line_id": "LINE-UNIVERSAL-A"
        },
        "source_adapter": "plc_adapter_mock",
        "event_time": "2026-06-07T08:10:00Z"
      },
      {
        "event_id": "EVT-004",
        "machine_id": "OP-40",
        "event_type": "buffer_block",
        "payload_json": {
          "blocking_time_hours": 1.54
        },
        "metadata_json": {
          "line_id": "LINE-UNIVERSAL-A"
        },
        "source_adapter": "plc_adapter_mock",
        "event_time": "2026-06-07T08:15:00Z"
      },
      {
        "event_id": "EVT-005",
        "machine_id": "OP-50",
        "event_type": "quality_watch",
        "payload_json": {
          "scrap_output": 24
        },
        "metadata_json": {
          "line_id": "LINE-UNIVERSAL-A"
        },
        "source_adapter": "mes_adapter_mock",
        "event_time": "2026-06-07T08:20:00Z"
      },
      {
        "event_id": "EVT-006",
        "machine_id": "OP-60",
        "event_type": "inspection",
        "payload_json": {
          "passed": 2680
        },
        "metadata_json": {
          "line_id": "LINE-UNIVERSAL-A"
        },
        "source_adapter": "mes_adapter_mock",
        "event_time": "2026-06-07T08:25:00Z"
      }
    ],
    "improvement_suggestion": "Review buffer and changeover rules around OP-40 before increasing release quantity."
  },
  "dailyReport": {
    "summary": "FG-OPS-A100 can proceed with material follow-up and bottleneck review.",
    "exceptions": [
      "Material gate is watch for FG-OPS-A100.",
      "Bottleneck review required at OP-40.",
      "MES adapter is stub.",
      "PLC adapter is sample.",
      "Scheduling adapter is stub.",
      "MCP adapter is ready-schema."
    ],
    "follow_up_list": [
      "Confirm sensor module dock date.",
      "Review OP-40 buffer rule.",
      "Keep MES and PLC adapters in sample mode."
    ],
    "source_refs": [
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 2,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 2,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 3,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 3,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 3,
        "source_column": "qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 4,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 4,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 2,
        "source_column": "qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 5,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 5,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 6,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 6,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 7,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 7,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_control_kit_demo.xlsx",
        "source_row": 8,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 8,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 9,
        "source_column": "qty"
      }
    ],
    "simulation_run_id": "SIM-DEMO-LINE-A"
  },
  "integrations": [
    {
      "adapter": "ERP",
      "mode": "mock",
      "status": "ready",
      "source_system": "demo_data",
      "accepted_payloads": [
        "customer_order",
        "finished_product",
        "bom_header"
      ],
      "last_sample_at": "2026-06-07T08:00:00Z",
      "known_gaps": [
        "no authentication",
        "no accounting records"
      ],
      "scope": "sales orders, product master, BOM headers"
    },
    {
      "adapter": "WMS",
      "mode": "mock",
      "status": "ready",
      "source_system": "demo_data",
      "accepted_payloads": [
        "inventory_snapshot",
        "shipment_record"
      ],
      "last_sample_at": "2026-06-07T08:05:00Z",
      "known_gaps": [
        "no live barcode stream"
      ],
      "scope": "material stock, locations, inbound shipment records"
    },
    {
      "adapter": "MES",
      "mode": "stub",
      "status": "sample",
      "source_system": "demo_data",
      "accepted_payloads": [
        "work_order_status",
        "machine_event"
      ],
      "last_sample_at": "2026-06-07T08:25:00Z",
      "known_gaps": [
        "no live shop-floor execution"
      ],
      "scope": "work order state, output, scrap, downtime"
    },
    {
      "adapter": "PLC",
      "mode": "sample",
      "status": "sample",
      "source_system": "machine_events.json",
      "accepted_payloads": [
        "cycle",
        "alarm",
        "buffer_block"
      ],
      "last_sample_at": "2026-06-07T09:25:00Z",
      "known_gaps": [
        "no OPC UA connection"
      ],
      "scope": "machine state, cycle count, buffer events"
    },
    {
      "adapter": "Scheduling",
      "mode": "stub",
      "status": "not_configured",
      "source_system": "scheduling_adapter_stub",
      "accepted_payloads": [
        "planning_window",
        "constraint"
      ],
      "last_sample_at": "",
      "known_gaps": [
        "no OR-Tools or Timefold runtime in this phase"
      ],
      "scope": "future planning constraints"
    },
    {
      "adapter": "MCP",
      "mode": "ready-schema",
      "status": "draft",
      "source_system": "agent_tool_registry",
      "accepted_payloads": [
        "tool_schema",
        "resource_ref"
      ],
      "last_sample_at": "2026-06-07T08:00:00Z",
      "known_gaps": [
        "no standalone MCP server yet"
      ],
      "scope": "tool schemas, resources, prompts"
    }
  ],
  "agentTools": [
    {
      "name": "search_material",
      "description": "Search material master and supplier records.",
      "backend": "search_materials",
      "input_schema": {
        "type": "object",
        "properties": {
          "query": {
            "type": "string"
          }
        }
      },
      "output_keys": [
        "materials"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "get_product_bom",
      "description": "Return product BOM components.",
      "backend": "get_product_bom",
      "input_schema": {
        "type": "object",
        "required": [
          "product_id"
        ],
        "properties": {
          "product_id": {
            "type": "string"
          }
        }
      },
      "output_keys": [
        "components",
        "source_refs"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "explode_bom",
      "description": "Calculate component demand by finished-product quantity.",
      "backend": "explode_bom",
      "input_schema": {
        "type": "object",
        "required": [
          "product_id",
          "quantity"
        ],
        "properties": {
          "product_id": {
            "type": "string"
          },
          "quantity": {
            "type": "number"
          }
        }
      },
      "output_keys": [
        "components",
        "source_refs"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "calculate_inventory_risk",
      "description": "Check inventory, in-transit stock and supplier risk.",
      "backend": "calculate_inventory_risk",
      "input_schema": {
        "type": "object",
        "required": [
          "product_id",
          "quantity"
        ],
        "properties": {
          "product_id": {
            "type": "string"
          },
          "quantity": {
            "type": "number"
          }
        }
      },
      "output_keys": [
        "overall_status",
        "materials",
        "source_refs"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "check_order_material_coverage",
      "description": "Check material gate for a customer order.",
      "backend": "check_order_material_coverage",
      "input_schema": {
        "type": "object",
        "required": [
          "order_id"
        ],
        "properties": {
          "order_id": {
            "type": "string"
          }
        }
      },
      "output_keys": [
        "material_gate_status",
        "risk",
        "source_refs"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "generate_production_notice",
      "description": "Generate a production notice preview.",
      "backend": "generate_production_notice",
      "input_schema": {
        "type": "object",
        "required": [
          "product_id",
          "quantity"
        ],
        "properties": {
          "product_id": {
            "type": "string"
          },
          "quantity": {
            "type": "number"
          }
        }
      },
      "output_keys": [
        "notice_id",
        "html_preview",
        "source_refs"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "run_line_simulation",
      "description": "Run a deterministic line simulation.",
      "backend": "run_line_simulation",
      "input_schema": {
        "type": "object",
        "required": [
          "line_id",
          "hours"
        ],
        "properties": {
          "line_id": {
            "type": "string"
          },
          "hours": {
            "type": "number"
          }
        }
      },
      "output_keys": [
        "run_id",
        "machine_reports"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "get_simulation_report",
      "description": "Return the latest or named simulation report.",
      "backend": "get_simulation_report",
      "input_schema": {
        "type": "object",
        "properties": {
          "run_id": {
            "type": "string"
          }
        }
      },
      "output_keys": [
        "run_id",
        "bottleneck_machine"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "detect_bottleneck",
      "description": "Identify throughput and quality bottlenecks.",
      "backend": "detect_bottleneck",
      "input_schema": {
        "type": "object",
        "required": [
          "report"
        ],
        "properties": {
          "report": {
            "type": "object"
          }
        }
      },
      "output_keys": [
        "bottleneck_machine",
        "evidence"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "generate_daily_report",
      "description": "Compose an operations summary from tool outputs.",
      "backend": "generate_daily_report",
      "input_schema": {
        "type": "object",
        "properties": {
          "day": {
            "type": "string"
          }
        }
      },
      "output_keys": [
        "summary",
        "exceptions",
        "source_refs"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "answer_factory_question",
      "description": "Route a factory question to the correct workflow and tools.",
      "backend": "answer_factory_question",
      "input_schema": {
        "type": "object",
        "required": [
          "question"
        ],
        "properties": {
          "question": {
            "type": "string"
          }
        }
      },
      "output_keys": [
        "answer",
        "trace",
        "data"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    }
  ],
  "agentAnswer": {
    "answer": "Result: production notice PN-DEMO-OPS-A100 is ready for preview. Evidence: material gate is release_with_follow_up with 2 watch items. Source: order row 2 and BOM 7 rows are linked. Next check: confirm watch items before release.",
    "trace": {
      "trace_id": "TRC-9237B0B6",
      "user_question": "Can FG-OPS-A100 be released for production?",
      "question": "Can FG-OPS-A100 be released for production?",
      "selected_intent": "production_notice",
      "workflow": "order_to_production_notice",
      "workflow_name": "order_to_production_notice",
      "selected_tools": [
        "check_order_material_coverage",
        "generate_production_notice"
      ],
      "tools": [
        "check_order_material_coverage",
        "generate_production_notice"
      ],
      "tool_calls": [
        {
          "tool_name": "check_order_material_coverage",
          "input_json": {
            "order_id": "SO-2026-OPS-001"
          },
          "output_json": {
            "order": {
              "order_id": "SO-2026-OPS-001",
              "customer": "Demo Operations North",
              "product_id": "FG-OPS-A100",
              "qty": 1200,
              "due_date": "2026-06-18",
              "priority": "high",
              "source_file": "sales_orders_demo.csv",
              "source_row": 2
            },
            "material_gate_status": "watch",
            "risk": {
              "product_id": "FG-OPS-A100",
              "order_qty": 1200.0,
              "overall_status": "watch",
              "status_counts": {
                "critical": 0,
                "watch": 2,
                "covered": 4,
                "surplus": 1
              },
              "materials": [
                {
                  "material_id": "MAT-ENC-A100",
                  "material_name": "Universal aluminum enclosure",
                  "supplier": "Northline Components",
                  "manufacturer": "Northline Components",
                  "uom": "pcs",
                  "operation_id": "OP-10",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 1430.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 1430.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.192,
                  "status": "watch",
                  "eta": "",
                  "locations": [
                    "FAB-A"
                  ],
                  "lot_numbers": [
                    "ENC-A100-01"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 2,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 2,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 2,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.94,
                  "supplier_note": "Enclosure supply stable with one open expedite lane"
                },
                {
                  "material_id": "MAT-PCB-CTRL",
                  "material_name": "Controller board assembly",
                  "supplier": "Metro Electronics",
                  "manufacturer": "Metro Electronics",
                  "uom": "pcs",
                  "operation_id": "OP-20",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 1300.0,
                  "inbound_qty": 300.0,
                  "coverage_qty": 1600.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.333,
                  "status": "covered",
                  "eta": "2026-06-11",
                  "locations": [
                    "ELEC-A"
                  ],
                  "lot_numbers": [
                    "PCB-CTRL-04"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 3,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 3,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 3,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 3,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.88,
                  "supplier_note": "Controller boards and connectors need dock-date confirmation"
                },
                {
                  "material_id": "MAT-SENSOR-IO",
                  "material_name": "Multi-signal sensor module",
                  "supplier": "Helio Sensors",
                  "manufacturer": "Helio Sensors",
                  "uom": "pcs",
                  "operation_id": "OP-30",
                  "qty_per_unit": 2,
                  "required_qty": 2400.0,
                  "available_qty": 2020.0,
                  "inbound_qty": 450.0,
                  "coverage_qty": 2470.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.029,
                  "status": "watch",
                  "eta": "2026-06-12",
                  "locations": [
                    "ELEC-B"
                  ],
                  "lot_numbers": [
                    "SEN-IO-12"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 4,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 4,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 2,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 4,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.86,
                  "supplier_note": "Sensor module release is the current watch item"
                },
                {
                  "material_id": "MAT-CABLE-SET",
                  "material_name": "Harness cable set",
                  "supplier": "Vector Cable",
                  "manufacturer": "Vector Cable",
                  "uom": "pcs",
                  "operation_id": "OP-40",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 1820.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 1820.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.517,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "CABLE-A"
                  ],
                  "lot_numbers": [
                    "CAB-SET-08"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 5,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 5,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 5,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.93,
                  "supplier_note": "Cable sets are stable after latest incoming lot"
                },
                {
                  "material_id": "MAT-FASTENER-M6",
                  "material_name": "M6 fastener kit",
                  "supplier": "Atlas Fasteners",
                  "manufacturer": "Atlas Fasteners",
                  "uom": "pcs",
                  "operation_id": "OP-40",
                  "qty_per_unit": 4,
                  "required_qty": 4800.0,
                  "available_qty": 6600.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 6600.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.375,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "HARD-A"
                  ],
                  "lot_numbers": [
                    "FAST-M6-11"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 6,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 6,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 6,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.98,
                  "supplier_note": "Fastener stock is sufficient across open demand"
                },
                {
                  "material_id": "MAT-FIRMWARE-CFG",
                  "material_name": "Firmware configuration label",
                  "supplier": "Pioneer Quality Systems",
                  "manufacturer": "Pioneer Quality Systems",
                  "uom": "pcs",
                  "operation_id": "OP-50",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 1700.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 1700.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.417,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "CFG-A"
                  ],
                  "lot_numbers": [
                    "CFG-REL-22"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 7,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 7,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 7,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.9,
                  "supplier_note": "Serialized configuration labels require release control"
                },
                {
                  "material_id": "MAT-PACK-STD",
                  "material_name": "Protective carton",
                  "supplier": "Harbor Packaging",
                  "manufacturer": "Harbor Packaging",
                  "uom": "pcs",
                  "operation_id": "OP-60",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 5200.0,
                  "inbound_qty": 2400.0,
                  "coverage_qty": 7600.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 6.333,
                  "status": "surplus",
                  "eta": "2026-06-09",
                  "locations": [
                    "PACK-A"
                  ],
                  "lot_numbers": [
                    "PKG-STD-14"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 8,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 8,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 9,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 8,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.96,
                  "supplier_note": "Packaging and labels have enough buffer"
                }
              ],
              "summary": {
                "critical_items": 0,
                "watch_items": 2,
                "covered_items": 4,
                "surplus_items": 1
              },
              "source_refs": [
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 2,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 2,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 3,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 3,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 3,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 4,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 2,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 5,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 5,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 6,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 6,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 7,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 7,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 8,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 8,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 9,
                  "source_column": "qty"
                }
              ]
            },
            "release_recommendation": "release with follow-up",
            "source_refs": [
              {
                "source_file": "sales_orders_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 2,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 3,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 3,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 5,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 6,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 6,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 7,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 8,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 8,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 9,
                "source_column": "qty"
              }
            ]
          },
          "source_refs": [
            {
              "source_file": "sales_orders_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 8,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 9,
              "source_column": "qty"
            }
          ],
          "completed_at": "2026-06-07T08:00:00+00:00"
        },
        {
          "tool_name": "generate_production_notice",
          "input_json": {
            "product_id": "FG-OPS-A100",
            "quantity": 1200
          },
          "output_json": {
            "notice_id": "PN-DEMO-OPS-A100",
            "product_id": "FG-OPS-A100",
            "product_name": "Modular Control Kit A100",
            "quantity": 1200,
            "order_id": "SO-2026-OPS-001",
            "due_date": "2026-06-18",
            "material_status": "watch",
            "material_gate": "release_with_follow_up",
            "blocked_materials": [],
            "watch_materials": [
              {
                "material_id": "MAT-ENC-A100",
                "material_name": "Universal aluminum enclosure",
                "supplier": "Northline Components",
                "manufacturer": "Northline Components",
                "uom": "pcs",
                "operation_id": "OP-10",
                "qty_per_unit": 1,
                "required_qty": 1200.0,
                "available_qty": 1430.0,
                "inbound_qty": 0.0,
                "coverage_qty": 1430.0,
                "shortage_qty": 0.0,
                "coverage_ratio": 1.192,
                "status": "watch",
                "eta": "",
                "locations": [
                  "FAB-A"
                ],
                "lot_numbers": [
                  "ENC-A100-01"
                ],
                "source_refs": [
                  {
                    "source_file": "bom_control_kit_demo.xlsx",
                    "source_row": 2,
                    "source_column": "qty_per_unit"
                  },
                  {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 2,
                    "source_column": "available_qty"
                  }
                ],
                "source_trace": {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 2,
                  "source_column": "available_qty"
                },
                "supplier_on_time_rate": 0.94,
                "supplier_note": "Enclosure supply stable with one open expedite lane"
              },
              {
                "material_id": "MAT-SENSOR-IO",
                "material_name": "Multi-signal sensor module",
                "supplier": "Helio Sensors",
                "manufacturer": "Helio Sensors",
                "uom": "pcs",
                "operation_id": "OP-30",
                "qty_per_unit": 2,
                "required_qty": 2400.0,
                "available_qty": 2020.0,
                "inbound_qty": 450.0,
                "coverage_qty": 2470.0,
                "shortage_qty": 0.0,
                "coverage_ratio": 1.029,
                "status": "watch",
                "eta": "2026-06-12",
                "locations": [
                  "ELEC-B"
                ],
                "lot_numbers": [
                  "SEN-IO-12"
                ],
                "source_refs": [
                  {
                    "source_file": "bom_control_kit_demo.xlsx",
                    "source_row": 4,
                    "source_column": "qty_per_unit"
                  },
                  {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 4,
                    "source_column": "available_qty"
                  },
                  {
                    "source_file": "shipment_in_transit_demo.csv",
                    "source_row": 2,
                    "source_column": "qty"
                  }
                ],
                "source_trace": {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                },
                "supplier_on_time_rate": 0.86,
                "supplier_note": "Sensor module release is the current watch item"
              }
            ],
            "html_preview": "<section class='notice-sheet'><h1>Release Notice PN-DEMO-OPS-A100</h1><p><strong>Product:</strong> Modular Control Kit A100 (FG-OPS-A100)</p><p><strong>Quantity:</strong> 1,200 pcs</p><p><strong>Customer order:</strong> SO-2026-OPS-001 / due 2026-06-18</p><p><strong>Material gate:</strong> release_with_follow_up</p><table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody><tr><td>MAT-ENC-A100</td><td>1,200.0 pcs</td><td>1,430.0</td><td>watch</td></tr><tr><td>MAT-PCB-CTRL</td><td>1,200.0 pcs</td><td>1,600.0</td><td>covered</td></tr><tr><td>MAT-SENSOR-IO</td><td>2,400.0 pcs</td><td>2,470.0</td><td>watch</td></tr><tr><td>MAT-CABLE-SET</td><td>1,200.0 pcs</td><td>1,820.0</td><td>covered</td></tr><tr><td>MAT-FASTENER-M6</td><td>4,800.0 pcs</td><td>6,600.0</td><td>covered</td></tr><tr><td>MAT-FIRMWARE-CFG</td><td>1,200.0 pcs</td><td>1,700.0</td><td>covered</td></tr><tr><td>MAT-PACK-STD</td><td>1,200.0 pcs</td><td>7,600.0</td><td>surplus</td></tr></tbody></table></section>",
            "template_version": "ops-production-notice/v2",
            "source_trace": {
              "bom_components": 7,
              "inventory_rows": 20,
              "order_source": "sales_orders_demo.csv",
              "order_row": 2
            },
            "source_refs": [
              {
                "source_file": "sales_orders_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 2,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 3,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 3,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 5,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 6,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 6,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 7,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 8,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 8,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 9,
                "source_column": "qty"
              }
            ]
          },
          "source_refs": [
            {
              "source_file": "sales_orders_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 8,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 9,
              "source_column": "qty"
            }
          ],
          "completed_at": "2026-06-07T08:00:00+00:00"
        }
      ],
      "source_refs": [
        {
          "source_file": "sales_orders_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 2,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 3,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 3,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 4,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 5,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 6,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 6,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 7,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 7,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 8,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 8,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 9,
          "source_column": "qty"
        },
        {
          "source_file": "sales_orders_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 2,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 3,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 3,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 4,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 5,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 6,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 6,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 7,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 7,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 8,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 8,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 9,
          "source_column": "qty"
        }
      ],
      "final_answer": "Result: production notice PN-DEMO-OPS-A100 is ready for preview. Evidence: material gate is release_with_follow_up with 2 watch items. Source: order row 2 and BOM 7 rows are linked. Next check: confirm watch items before release.",
      "status": "completed",
      "created_at": "2026-06-07T08:00:00+00:00"
    },
    "data": {
      "coverage": {
        "order": {
          "order_id": "SO-2026-OPS-001",
          "customer": "Demo Operations North",
          "product_id": "FG-OPS-A100",
          "qty": 1200,
          "due_date": "2026-06-18",
          "priority": "high",
          "source_file": "sales_orders_demo.csv",
          "source_row": 2
        },
        "material_gate_status": "watch",
        "risk": {
          "product_id": "FG-OPS-A100",
          "order_qty": 1200.0,
          "overall_status": "watch",
          "status_counts": {
            "critical": 0,
            "watch": 2,
            "covered": 4,
            "surplus": 1
          },
          "materials": [
            {
              "material_id": "MAT-ENC-A100",
              "material_name": "Universal aluminum enclosure",
              "supplier": "Northline Components",
              "manufacturer": "Northline Components",
              "uom": "pcs",
              "operation_id": "OP-10",
              "qty_per_unit": 1,
              "required_qty": 1200.0,
              "available_qty": 1430.0,
              "inbound_qty": 0.0,
              "coverage_qty": 1430.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.192,
              "status": "watch",
              "eta": "",
              "locations": [
                "FAB-A"
              ],
              "lot_numbers": [
                "ENC-A100-01"
              ],
              "source_refs": [
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 2,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 2,
                  "source_column": "available_qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.94,
              "supplier_note": "Enclosure supply stable with one open expedite lane"
            },
            {
              "material_id": "MAT-PCB-CTRL",
              "material_name": "Controller board assembly",
              "supplier": "Metro Electronics",
              "manufacturer": "Metro Electronics",
              "uom": "pcs",
              "operation_id": "OP-20",
              "qty_per_unit": 1,
              "required_qty": 1200.0,
              "available_qty": 1300.0,
              "inbound_qty": 300.0,
              "coverage_qty": 1600.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.333,
              "status": "covered",
              "eta": "2026-06-11",
              "locations": [
                "ELEC-A"
              ],
              "lot_numbers": [
                "PCB-CTRL-04"
              ],
              "source_refs": [
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 3,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 3,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 3,
                  "source_column": "qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.88,
              "supplier_note": "Controller boards and connectors need dock-date confirmation"
            },
            {
              "material_id": "MAT-SENSOR-IO",
              "material_name": "Multi-signal sensor module",
              "supplier": "Helio Sensors",
              "manufacturer": "Helio Sensors",
              "uom": "pcs",
              "operation_id": "OP-30",
              "qty_per_unit": 2,
              "required_qty": 2400.0,
              "available_qty": 2020.0,
              "inbound_qty": 450.0,
              "coverage_qty": 2470.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.029,
              "status": "watch",
              "eta": "2026-06-12",
              "locations": [
                "ELEC-B"
              ],
              "lot_numbers": [
                "SEN-IO-12"
              ],
              "source_refs": [
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 4,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 2,
                  "source_column": "qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.86,
              "supplier_note": "Sensor module release is the current watch item"
            },
            {
              "material_id": "MAT-CABLE-SET",
              "material_name": "Harness cable set",
              "supplier": "Vector Cable",
              "manufacturer": "Vector Cable",
              "uom": "pcs",
              "operation_id": "OP-40",
              "qty_per_unit": 1,
              "required_qty": 1200.0,
              "available_qty": 1820.0,
              "inbound_qty": 0.0,
              "coverage_qty": 1820.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.517,
              "status": "covered",
              "eta": "",
              "locations": [
                "CABLE-A"
              ],
              "lot_numbers": [
                "CAB-SET-08"
              ],
              "source_refs": [
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 5,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 5,
                  "source_column": "available_qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.93,
              "supplier_note": "Cable sets are stable after latest incoming lot"
            },
            {
              "material_id": "MAT-FASTENER-M6",
              "material_name": "M6 fastener kit",
              "supplier": "Atlas Fasteners",
              "manufacturer": "Atlas Fasteners",
              "uom": "pcs",
              "operation_id": "OP-40",
              "qty_per_unit": 4,
              "required_qty": 4800.0,
              "available_qty": 6600.0,
              "inbound_qty": 0.0,
              "coverage_qty": 6600.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.375,
              "status": "covered",
              "eta": "",
              "locations": [
                "HARD-A"
              ],
              "lot_numbers": [
                "FAST-M6-11"
              ],
              "source_refs": [
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 6,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 6,
                  "source_column": "available_qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 6,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.98,
              "supplier_note": "Fastener stock is sufficient across open demand"
            },
            {
              "material_id": "MAT-FIRMWARE-CFG",
              "material_name": "Firmware configuration label",
              "supplier": "Pioneer Quality Systems",
              "manufacturer": "Pioneer Quality Systems",
              "uom": "pcs",
              "operation_id": "OP-50",
              "qty_per_unit": 1,
              "required_qty": 1200.0,
              "available_qty": 1700.0,
              "inbound_qty": 0.0,
              "coverage_qty": 1700.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.417,
              "status": "covered",
              "eta": "",
              "locations": [
                "CFG-A"
              ],
              "lot_numbers": [
                "CFG-REL-22"
              ],
              "source_refs": [
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 7,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 7,
                  "source_column": "available_qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.9,
              "supplier_note": "Serialized configuration labels require release control"
            },
            {
              "material_id": "MAT-PACK-STD",
              "material_name": "Protective carton",
              "supplier": "Harbor Packaging",
              "manufacturer": "Harbor Packaging",
              "uom": "pcs",
              "operation_id": "OP-60",
              "qty_per_unit": 1,
              "required_qty": 1200.0,
              "available_qty": 5200.0,
              "inbound_qty": 2400.0,
              "coverage_qty": 7600.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 6.333,
              "status": "surplus",
              "eta": "2026-06-09",
              "locations": [
                "PACK-A"
              ],
              "lot_numbers": [
                "PKG-STD-14"
              ],
              "source_refs": [
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 8,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 8,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 9,
                  "source_column": "qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 8,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.96,
              "supplier_note": "Packaging and labels have enough buffer"
            }
          ],
          "summary": {
            "critical_items": 0,
            "watch_items": 2,
            "covered_items": 4,
            "surplus_items": 1
          },
          "source_refs": [
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 8,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 9,
              "source_column": "qty"
            }
          ]
        },
        "release_recommendation": "release with follow-up",
        "source_refs": [
          {
            "source_file": "sales_orders_demo.csv",
            "source_row": 2,
            "source_column": "qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 2,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 2,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 3,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 3,
            "source_column": "qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 2,
            "source_column": "qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 5,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 6,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 7,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 8,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 8,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 9,
            "source_column": "qty"
          }
        ]
      },
      "notice": {
        "notice_id": "PN-DEMO-OPS-A100",
        "product_id": "FG-OPS-A100",
        "product_name": "Modular Control Kit A100",
        "quantity": 1200,
        "order_id": "SO-2026-OPS-001",
        "due_date": "2026-06-18",
        "material_status": "watch",
        "material_gate": "release_with_follow_up",
        "blocked_materials": [],
        "watch_materials": [
          {
            "material_id": "MAT-ENC-A100",
            "material_name": "Universal aluminum enclosure",
            "supplier": "Northline Components",
            "manufacturer": "Northline Components",
            "uom": "pcs",
            "operation_id": "OP-10",
            "qty_per_unit": 1,
            "required_qty": 1200.0,
            "available_qty": 1430.0,
            "inbound_qty": 0.0,
            "coverage_qty": 1430.0,
            "shortage_qty": 0.0,
            "coverage_ratio": 1.192,
            "status": "watch",
            "eta": "",
            "locations": [
              "FAB-A"
            ],
            "lot_numbers": [
              "ENC-A100-01"
            ],
            "source_refs": [
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 2,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              }
            ],
            "source_trace": {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            "supplier_on_time_rate": 0.94,
            "supplier_note": "Enclosure supply stable with one open expedite lane"
          },
          {
            "material_id": "MAT-SENSOR-IO",
            "material_name": "Multi-signal sensor module",
            "supplier": "Helio Sensors",
            "manufacturer": "Helio Sensors",
            "uom": "pcs",
            "operation_id": "OP-30",
            "qty_per_unit": 2,
            "required_qty": 2400.0,
            "available_qty": 2020.0,
            "inbound_qty": 450.0,
            "coverage_qty": 2470.0,
            "shortage_qty": 0.0,
            "coverage_ratio": 1.029,
            "status": "watch",
            "eta": "2026-06-12",
            "locations": [
              "ELEC-B"
            ],
            "lot_numbers": [
              "SEN-IO-12"
            ],
            "source_refs": [
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              }
            ],
            "source_trace": {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            "supplier_on_time_rate": 0.86,
            "supplier_note": "Sensor module release is the current watch item"
          }
        ],
        "html_preview": "<section class='notice-sheet'><h1>Release Notice PN-DEMO-OPS-A100</h1><p><strong>Product:</strong> Modular Control Kit A100 (FG-OPS-A100)</p><p><strong>Quantity:</strong> 1,200 pcs</p><p><strong>Customer order:</strong> SO-2026-OPS-001 / due 2026-06-18</p><p><strong>Material gate:</strong> release_with_follow_up</p><table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody><tr><td>MAT-ENC-A100</td><td>1,200.0 pcs</td><td>1,430.0</td><td>watch</td></tr><tr><td>MAT-PCB-CTRL</td><td>1,200.0 pcs</td><td>1,600.0</td><td>covered</td></tr><tr><td>MAT-SENSOR-IO</td><td>2,400.0 pcs</td><td>2,470.0</td><td>watch</td></tr><tr><td>MAT-CABLE-SET</td><td>1,200.0 pcs</td><td>1,820.0</td><td>covered</td></tr><tr><td>MAT-FASTENER-M6</td><td>4,800.0 pcs</td><td>6,600.0</td><td>covered</td></tr><tr><td>MAT-FIRMWARE-CFG</td><td>1,200.0 pcs</td><td>1,700.0</td><td>covered</td></tr><tr><td>MAT-PACK-STD</td><td>1,200.0 pcs</td><td>7,600.0</td><td>surplus</td></tr></tbody></table></section>",
        "template_version": "ops-production-notice/v2",
        "source_trace": {
          "bom_components": 7,
          "inventory_rows": 20,
          "order_source": "sales_orders_demo.csv",
          "order_row": 2
        },
        "source_refs": [
          {
            "source_file": "sales_orders_demo.csv",
            "source_row": 2,
            "source_column": "qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 2,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 2,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 3,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 3,
            "source_column": "qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 2,
            "source_column": "qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 5,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 6,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 7,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_control_kit_demo.xlsx",
            "source_row": 8,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 8,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 9,
            "source_column": "qty"
          }
        ]
      }
    }
  },
  "agentTraces": [
    {
      "trace_id": "TRC-9237B0B6",
      "user_question": "Can FG-OPS-A100 be released for production?",
      "question": "Can FG-OPS-A100 be released for production?",
      "selected_intent": "production_notice",
      "workflow": "order_to_production_notice",
      "workflow_name": "order_to_production_notice",
      "selected_tools": [
        "check_order_material_coverage",
        "generate_production_notice"
      ],
      "tools": [
        "check_order_material_coverage",
        "generate_production_notice"
      ],
      "tool_calls": [
        {
          "tool_name": "check_order_material_coverage",
          "input_json": {
            "order_id": "SO-2026-OPS-001"
          },
          "output_json": {
            "order": {
              "order_id": "SO-2026-OPS-001",
              "customer": "Demo Operations North",
              "product_id": "FG-OPS-A100",
              "qty": 1200,
              "due_date": "2026-06-18",
              "priority": "high",
              "source_file": "sales_orders_demo.csv",
              "source_row": 2
            },
            "material_gate_status": "watch",
            "risk": {
              "product_id": "FG-OPS-A100",
              "order_qty": 1200.0,
              "overall_status": "watch",
              "status_counts": {
                "critical": 0,
                "watch": 2,
                "covered": 4,
                "surplus": 1
              },
              "materials": [
                {
                  "material_id": "MAT-ENC-A100",
                  "material_name": "Universal aluminum enclosure",
                  "supplier": "Northline Components",
                  "manufacturer": "Northline Components",
                  "uom": "pcs",
                  "operation_id": "OP-10",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 1430.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 1430.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.192,
                  "status": "watch",
                  "eta": "",
                  "locations": [
                    "FAB-A"
                  ],
                  "lot_numbers": [
                    "ENC-A100-01"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 2,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 2,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 2,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.94,
                  "supplier_note": "Enclosure supply stable with one open expedite lane"
                },
                {
                  "material_id": "MAT-PCB-CTRL",
                  "material_name": "Controller board assembly",
                  "supplier": "Metro Electronics",
                  "manufacturer": "Metro Electronics",
                  "uom": "pcs",
                  "operation_id": "OP-20",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 1300.0,
                  "inbound_qty": 300.0,
                  "coverage_qty": 1600.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.333,
                  "status": "covered",
                  "eta": "2026-06-11",
                  "locations": [
                    "ELEC-A"
                  ],
                  "lot_numbers": [
                    "PCB-CTRL-04"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 3,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 3,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 3,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 3,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.88,
                  "supplier_note": "Controller boards and connectors need dock-date confirmation"
                },
                {
                  "material_id": "MAT-SENSOR-IO",
                  "material_name": "Multi-signal sensor module",
                  "supplier": "Helio Sensors",
                  "manufacturer": "Helio Sensors",
                  "uom": "pcs",
                  "operation_id": "OP-30",
                  "qty_per_unit": 2,
                  "required_qty": 2400.0,
                  "available_qty": 2020.0,
                  "inbound_qty": 450.0,
                  "coverage_qty": 2470.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.029,
                  "status": "watch",
                  "eta": "2026-06-12",
                  "locations": [
                    "ELEC-B"
                  ],
                  "lot_numbers": [
                    "SEN-IO-12"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 4,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 4,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 2,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 4,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.86,
                  "supplier_note": "Sensor module release is the current watch item"
                },
                {
                  "material_id": "MAT-CABLE-SET",
                  "material_name": "Harness cable set",
                  "supplier": "Vector Cable",
                  "manufacturer": "Vector Cable",
                  "uom": "pcs",
                  "operation_id": "OP-40",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 1820.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 1820.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.517,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "CABLE-A"
                  ],
                  "lot_numbers": [
                    "CAB-SET-08"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 5,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 5,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 5,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.93,
                  "supplier_note": "Cable sets are stable after latest incoming lot"
                },
                {
                  "material_id": "MAT-FASTENER-M6",
                  "material_name": "M6 fastener kit",
                  "supplier": "Atlas Fasteners",
                  "manufacturer": "Atlas Fasteners",
                  "uom": "pcs",
                  "operation_id": "OP-40",
                  "qty_per_unit": 4,
                  "required_qty": 4800.0,
                  "available_qty": 6600.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 6600.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.375,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "HARD-A"
                  ],
                  "lot_numbers": [
                    "FAST-M6-11"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 6,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 6,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 6,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.98,
                  "supplier_note": "Fastener stock is sufficient across open demand"
                },
                {
                  "material_id": "MAT-FIRMWARE-CFG",
                  "material_name": "Firmware configuration label",
                  "supplier": "Pioneer Quality Systems",
                  "manufacturer": "Pioneer Quality Systems",
                  "uom": "pcs",
                  "operation_id": "OP-50",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 1700.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 1700.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.417,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "CFG-A"
                  ],
                  "lot_numbers": [
                    "CFG-REL-22"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 7,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 7,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 7,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.9,
                  "supplier_note": "Serialized configuration labels require release control"
                },
                {
                  "material_id": "MAT-PACK-STD",
                  "material_name": "Protective carton",
                  "supplier": "Harbor Packaging",
                  "manufacturer": "Harbor Packaging",
                  "uom": "pcs",
                  "operation_id": "OP-60",
                  "qty_per_unit": 1,
                  "required_qty": 1200.0,
                  "available_qty": 5200.0,
                  "inbound_qty": 2400.0,
                  "coverage_qty": 7600.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 6.333,
                  "status": "surplus",
                  "eta": "2026-06-09",
                  "locations": [
                    "PACK-A"
                  ],
                  "lot_numbers": [
                    "PKG-STD-14"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_control_kit_demo.xlsx",
                      "source_row": 8,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 8,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 9,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 8,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.96,
                  "supplier_note": "Packaging and labels have enough buffer"
                }
              ],
              "summary": {
                "critical_items": 0,
                "watch_items": 2,
                "covered_items": 4,
                "surplus_items": 1
              },
              "source_refs": [
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 2,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 2,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 3,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 3,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 3,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 4,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 2,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 5,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 5,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 6,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 6,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 7,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 7,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_control_kit_demo.xlsx",
                  "source_row": 8,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 8,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 9,
                  "source_column": "qty"
                }
              ]
            },
            "release_recommendation": "release with follow-up",
            "source_refs": [
              {
                "source_file": "sales_orders_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 2,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 3,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 3,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 5,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 6,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 6,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 7,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 8,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 8,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 9,
                "source_column": "qty"
              }
            ]
          },
          "source_refs": [
            {
              "source_file": "sales_orders_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 8,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 9,
              "source_column": "qty"
            }
          ],
          "completed_at": "2026-06-07T08:00:00+00:00"
        },
        {
          "tool_name": "generate_production_notice",
          "input_json": {
            "product_id": "FG-OPS-A100",
            "quantity": 1200
          },
          "output_json": {
            "notice_id": "PN-DEMO-OPS-A100",
            "product_id": "FG-OPS-A100",
            "product_name": "Modular Control Kit A100",
            "quantity": 1200,
            "order_id": "SO-2026-OPS-001",
            "due_date": "2026-06-18",
            "material_status": "watch",
            "material_gate": "release_with_follow_up",
            "blocked_materials": [],
            "watch_materials": [
              {
                "material_id": "MAT-ENC-A100",
                "material_name": "Universal aluminum enclosure",
                "supplier": "Northline Components",
                "manufacturer": "Northline Components",
                "uom": "pcs",
                "operation_id": "OP-10",
                "qty_per_unit": 1,
                "required_qty": 1200.0,
                "available_qty": 1430.0,
                "inbound_qty": 0.0,
                "coverage_qty": 1430.0,
                "shortage_qty": 0.0,
                "coverage_ratio": 1.192,
                "status": "watch",
                "eta": "",
                "locations": [
                  "FAB-A"
                ],
                "lot_numbers": [
                  "ENC-A100-01"
                ],
                "source_refs": [
                  {
                    "source_file": "bom_control_kit_demo.xlsx",
                    "source_row": 2,
                    "source_column": "qty_per_unit"
                  },
                  {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 2,
                    "source_column": "available_qty"
                  }
                ],
                "source_trace": {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 2,
                  "source_column": "available_qty"
                },
                "supplier_on_time_rate": 0.94,
                "supplier_note": "Enclosure supply stable with one open expedite lane"
              },
              {
                "material_id": "MAT-SENSOR-IO",
                "material_name": "Multi-signal sensor module",
                "supplier": "Helio Sensors",
                "manufacturer": "Helio Sensors",
                "uom": "pcs",
                "operation_id": "OP-30",
                "qty_per_unit": 2,
                "required_qty": 2400.0,
                "available_qty": 2020.0,
                "inbound_qty": 450.0,
                "coverage_qty": 2470.0,
                "shortage_qty": 0.0,
                "coverage_ratio": 1.029,
                "status": "watch",
                "eta": "2026-06-12",
                "locations": [
                  "ELEC-B"
                ],
                "lot_numbers": [
                  "SEN-IO-12"
                ],
                "source_refs": [
                  {
                    "source_file": "bom_control_kit_demo.xlsx",
                    "source_row": 4,
                    "source_column": "qty_per_unit"
                  },
                  {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 4,
                    "source_column": "available_qty"
                  },
                  {
                    "source_file": "shipment_in_transit_demo.csv",
                    "source_row": 2,
                    "source_column": "qty"
                  }
                ],
                "source_trace": {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                },
                "supplier_on_time_rate": 0.86,
                "supplier_note": "Sensor module release is the current watch item"
              }
            ],
            "html_preview": "<section class='notice-sheet'><h1>Release Notice PN-DEMO-OPS-A100</h1><p><strong>Product:</strong> Modular Control Kit A100 (FG-OPS-A100)</p><p><strong>Quantity:</strong> 1,200 pcs</p><p><strong>Customer order:</strong> SO-2026-OPS-001 / due 2026-06-18</p><p><strong>Material gate:</strong> release_with_follow_up</p><table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody><tr><td>MAT-ENC-A100</td><td>1,200.0 pcs</td><td>1,430.0</td><td>watch</td></tr><tr><td>MAT-PCB-CTRL</td><td>1,200.0 pcs</td><td>1,600.0</td><td>covered</td></tr><tr><td>MAT-SENSOR-IO</td><td>2,400.0 pcs</td><td>2,470.0</td><td>watch</td></tr><tr><td>MAT-CABLE-SET</td><td>1,200.0 pcs</td><td>1,820.0</td><td>covered</td></tr><tr><td>MAT-FASTENER-M6</td><td>4,800.0 pcs</td><td>6,600.0</td><td>covered</td></tr><tr><td>MAT-FIRMWARE-CFG</td><td>1,200.0 pcs</td><td>1,700.0</td><td>covered</td></tr><tr><td>MAT-PACK-STD</td><td>1,200.0 pcs</td><td>7,600.0</td><td>surplus</td></tr></tbody></table></section>",
            "template_version": "ops-production-notice/v2",
            "source_trace": {
              "bom_components": 7,
              "inventory_rows": 20,
              "order_source": "sales_orders_demo.csv",
              "order_row": 2
            },
            "source_refs": [
              {
                "source_file": "sales_orders_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 2,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 3,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 3,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 5,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 6,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 6,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 7,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_control_kit_demo.xlsx",
                "source_row": 8,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 8,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 9,
                "source_column": "qty"
              }
            ]
          },
          "source_refs": [
            {
              "source_file": "sales_orders_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_control_kit_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 8,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 9,
              "source_column": "qty"
            }
          ],
          "completed_at": "2026-06-07T08:00:00+00:00"
        }
      ],
      "source_refs": [
        {
          "source_file": "sales_orders_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 2,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 3,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 3,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 4,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 5,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 6,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 6,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 7,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 7,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 8,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 8,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 9,
          "source_column": "qty"
        },
        {
          "source_file": "sales_orders_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 2,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 3,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 3,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 4,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 5,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 6,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 6,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 7,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 7,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_control_kit_demo.xlsx",
          "source_row": 8,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 8,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 9,
          "source_column": "qty"
        }
      ],
      "final_answer": "Result: production notice PN-DEMO-OPS-A100 is ready for preview. Evidence: material gate is release_with_follow_up with 2 watch items. Source: order row 2 and BOM 7 rows are linked. Next check: confirm watch items before release.",
      "status": "completed",
      "created_at": "2026-06-07T08:00:00+00:00"
    }
  ],
  "workflows": [
    {
      "workflow_run_id": "WF-001",
      "workflow_name": "file_to_dashboard",
      "status": "completed",
      "current_step": "dashboard_summary",
      "input_json": {
        "file_name": "bom_control_kit_demo.xlsx"
      },
      "result_json": {
        "rows": 7,
        "quality": "pass"
      },
      "checkpoint_json": {
        "source_refs": 7
      }
    },
    {
      "workflow_run_id": "WF-002",
      "workflow_name": "order_to_material_risk",
      "status": "completed",
      "current_step": "risk_summary",
      "input_json": {
        "order_id": "SO-2026-OPS-001"
      },
      "result_json": {
        "overall_status": "watch"
      },
      "checkpoint_json": {
        "tool_calls": 3
      }
    },
    {
      "workflow_run_id": "WF-003",
      "workflow_name": "order_to_production_notice",
      "status": "completed",
      "current_step": "notice_preview",
      "input_json": {
        "order_id": "SO-2026-OPS-001"
      },
      "result_json": {
        "template_version": "ops-production-notice/v2"
      },
      "checkpoint_json": {
        "tool_calls": 3
      }
    },
    {
      "workflow_run_id": "WF-004",
      "workflow_name": "line_simulation_to_report",
      "status": "completed",
      "current_step": "simulation_report",
      "input_json": {
        "line_id": "LINE-UNIVERSAL-A",
        "hours": 24
      },
      "result_json": {
        "bottleneck_machine": "OP-40"
      },
      "checkpoint_json": {
        "tool_calls": 3
      }
    },
    {
      "workflow_run_id": "WF-005",
      "workflow_name": "daily_factory_review",
      "status": "sample",
      "current_step": "follow_up_list",
      "input_json": {
        "day": "2026-06-07"
      },
      "result_json": {
        "exceptions": 2
      },
      "checkpoint_json": {
        "tool_calls": 4
      }
    }
  ]
} as const;

export default demoSnapshot;
