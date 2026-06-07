const demoSnapshot = {
  "health": {
    "mode": "demo",
    "products": 4,
    "materials": 20,
    "adapters": "mock/stub"
  },
  "products": [
    {
      "product_id": "FG-6205-2RS",
      "name": "6205-2RS Deep Groove Bearing",
      "revision": "R1",
      "default_bom_id": "BOM-6205-2RS-R1",
      "route_id": "ROUTE-BRG-A",
      "planning_policy": "make_to_order",
      "product_name": "6205-2RS Deep Groove Bearing",
      "component_count": 7
    },
    {
      "product_id": "FG-6206-ZZ",
      "name": "6206-ZZ Shielded Bearing",
      "revision": "R1",
      "default_bom_id": "BOM-6206-ZZ-R1",
      "route_id": "ROUTE-BRG-B",
      "planning_policy": "make_to_order",
      "product_name": "6206-ZZ Shielded Bearing",
      "component_count": 7
    },
    {
      "product_id": "FG-6304-2RS",
      "name": "6304-2RS Deep Groove Bearing",
      "revision": "R1",
      "default_bom_id": "BOM-6304-2RS-R1",
      "route_id": "ROUTE-BRG-B",
      "planning_policy": "make_to_stock",
      "product_name": "6304-2RS Deep Groove Bearing",
      "component_count": 7
    },
    {
      "product_id": "FG-6004-ZZ",
      "name": "6004-ZZ Compact Bearing",
      "revision": "R1",
      "default_bom_id": "BOM-6004-ZZ-R1",
      "route_id": "ROUTE-BRG-A",
      "planning_policy": "make_to_order",
      "product_name": "6004-ZZ Compact Bearing",
      "component_count": 7
    }
  ],
  "imports": [
    {
      "file_name": "bom_6205_demo.xlsx",
      "type": "bom",
      "status": "parsed",
      "rows": 7,
      "quality": "pass",
      "parser": "bom_parser_v1",
      "source_system": "excel_export_adapter"
    },
    {
      "file_name": "bom_6206_demo.xlsx",
      "type": "bom",
      "status": "parsed",
      "rows": 7,
      "quality": "pass",
      "parser": "bom_parser_v1",
      "source_system": "excel_export_adapter"
    },
    {
      "file_name": "bom_6304_demo.xlsx",
      "type": "bom",
      "status": "parsed",
      "rows": 7,
      "quality": "pass",
      "parser": "bom_parser_v1",
      "source_system": "excel_export_adapter"
    },
    {
      "file_name": "bom_6004_demo.xlsx",
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
      "order_id": "SO-2026-0607-01",
      "customer": "Demo Export Account",
      "product_id": "FG-6205-2RS",
      "qty": 12000,
      "due_date": "2026-06-18",
      "priority": "high",
      "source_file": "sales_orders_demo.csv",
      "source_row": 2
    },
    {
      "order_id": "SO-2026-0607-02",
      "customer": "Demo Service Parts",
      "product_id": "FG-6206-ZZ",
      "qty": 8000,
      "due_date": "2026-06-21",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 3
    },
    {
      "order_id": "SO-2026-0607-03",
      "customer": "Demo Industrial Account",
      "product_id": "FG-6304-2RS",
      "qty": 6200,
      "due_date": "2026-06-25",
      "priority": "high",
      "source_file": "sales_orders_demo.csv",
      "source_row": 4
    },
    {
      "order_id": "SO-2026-0607-04",
      "customer": "Demo Maintenance Kits",
      "product_id": "FG-6004-ZZ",
      "qty": 18000,
      "due_date": "2026-06-20",
      "priority": "expedite",
      "source_file": "sales_orders_demo.csv",
      "source_row": 5
    },
    {
      "order_id": "SO-2026-0607-05",
      "customer": "Demo Distributor North",
      "product_id": "FG-6205-2RS",
      "qty": 6000,
      "due_date": "2026-06-28",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 6
    },
    {
      "order_id": "SO-2026-0607-06",
      "customer": "Demo Distributor South",
      "product_id": "FG-6206-ZZ",
      "qty": 7200,
      "due_date": "2026-07-02",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 7
    },
    {
      "order_id": "SO-2026-0607-07",
      "customer": "Demo OEM Line",
      "product_id": "FG-6304-2RS",
      "qty": 4000,
      "due_date": "2026-06-30",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 8
    },
    {
      "order_id": "SO-2026-0607-08",
      "customer": "Demo Export Account",
      "product_id": "FG-6004-ZZ",
      "qty": 14000,
      "due_date": "2026-07-05",
      "priority": "normal",
      "source_file": "sales_orders_demo.csv",
      "source_row": 9
    }
  ],
  "inventoryRisk": {
    "product_id": "FG-6205-2RS",
    "order_qty": 12000,
    "overall_status": "watch",
    "status_counts": {
      "critical": 0,
      "watch": 2,
      "covered": 4,
      "surplus": 1
    },
    "materials": [
      {
        "material_id": "MAT-6205-OR",
        "material_name": "Outer ring blank 6205",
        "supplier": "Northline Forging",
        "manufacturer": "Northline Forging",
        "uom": "pcs",
        "operation_id": "OP-10",
        "qty_per_unit": 1,
        "required_qty": 12000.0,
        "available_qty": 17200.0,
        "inbound_qty": 0.0,
        "coverage_qty": 17200.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.433,
        "status": "covered",
        "eta": "",
        "locations": [
          "WMS-A1"
        ],
        "lot_numbers": [
          "OR6205-A"
        ],
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
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
        "supplier_note": "Stable ring blank supply"
      },
      {
        "material_id": "MAT-6205-IR",
        "material_name": "Inner ring blank 6205",
        "supplier": "Northline Forging",
        "manufacturer": "Northline Forging",
        "uom": "pcs",
        "operation_id": "OP-20",
        "qty_per_unit": 1,
        "required_qty": 12000.0,
        "available_qty": 16300.0,
        "inbound_qty": 0.0,
        "coverage_qty": 16300.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.358,
        "status": "covered",
        "eta": "",
        "locations": [
          "WMS-A1"
        ],
        "lot_numbers": [
          "IR6205-A"
        ],
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 3,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3,
            "source_column": "available_qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.94,
        "supplier_note": "Stable ring blank supply"
      },
      {
        "material_id": "MAT-BALL-7.94",
        "material_name": "Steel ball 7.94 mm",
        "supplier": "Hengyuan Ball",
        "manufacturer": "Hengyuan Ball",
        "uom": "pcs",
        "operation_id": "OP-30",
        "qty_per_unit": 9,
        "required_qty": 108000.0,
        "available_qty": 128400.0,
        "inbound_qty": 0.0,
        "coverage_qty": 128400.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.189,
        "status": "watch",
        "eta": "",
        "locations": [
          "WMS-B2"
        ],
        "lot_numbers": [
          "B794-A"
        ],
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.97,
        "supplier_note": "Rolling element supply stable"
      },
      {
        "material_id": "MAT-CAGE-6205",
        "material_name": "Pressed steel cage 6205",
        "supplier": "Jinhe Stamping",
        "manufacturer": "Jinhe Stamping",
        "uom": "pcs",
        "operation_id": "OP-40",
        "qty_per_unit": 1,
        "required_qty": 12000.0,
        "available_qty": 12000.0,
        "inbound_qty": 5000.0,
        "coverage_qty": 17000.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.417,
        "status": "covered",
        "eta": "2026-06-10",
        "locations": [
          "WMS-C1"
        ],
        "lot_numbers": [
          "CAGE6205-A"
        ],
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 5,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 4,
            "source_column": "qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.89,
        "supplier_note": "Stamping changeover can slip by one shift"
      },
      {
        "material_id": "MAT-SEAL-6205",
        "material_name": "Rubber seal 6205",
        "supplier": "Haicheng Rubber",
        "manufacturer": "Haicheng Rubber",
        "uom": "pcs",
        "operation_id": "OP-50",
        "qty_per_unit": 2,
        "required_qty": 24000.0,
        "available_qty": 23100.0,
        "inbound_qty": 9000.0,
        "coverage_qty": 32100.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.337,
        "status": "covered",
        "eta": "2026-06-12",
        "locations": [
          "WMS-C2"
        ],
        "lot_numbers": [
          "SEAL6205-A"
        ],
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 6,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6,
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
          "source_row": 6,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.86,
        "supplier_note": "Seal lot release requires incoming inspection"
      },
      {
        "material_id": "MAT-GREASE-L2",
        "material_name": "Low-noise bearing grease L2",
        "supplier": "GreenChem",
        "manufacturer": "GreenChem",
        "uom": "g",
        "operation_id": "OP-50",
        "qty_per_unit": 1.8,
        "required_qty": 21600.0,
        "available_qty": 18200.0,
        "inbound_qty": 8000.0,
        "coverage_qty": 26200.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.213,
        "status": "watch",
        "eta": "2026-06-11",
        "locations": [
          "WMS-CHEM"
        ],
        "lot_numbers": [
          "GR-L2-A"
        ],
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 7,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7,
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
          "source_row": 7,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.81,
        "supplier_note": "Grease batch QA release is the current watch item"
      },
      {
        "material_id": "MAT-PACK-STD",
        "material_name": "Standard bearing carton",
        "supplier": "Harbor Packaging",
        "manufacturer": "Harbor Packaging",
        "uom": "pcs",
        "operation_id": "OP-60",
        "qty_per_unit": 1,
        "required_qty": 12000.0,
        "available_qty": 44800.0,
        "inbound_qty": 24000.0,
        "coverage_qty": 68800.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 5.733,
        "status": "surplus",
        "eta": "2026-06-09",
        "locations": [
          "WMS-PACK"
        ],
        "lot_numbers": [
          "PKG-STD-A"
        ],
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 8,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 21,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 11,
            "source_column": "qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 21,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.96,
        "supplier_note": "Packaging buffer is sufficient"
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
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 2,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 2,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 3,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 3,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 4,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 4,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 5,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 5,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 4,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 6,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 6,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 2,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 7,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 7,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 3,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 8,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 21,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 11,
        "source_column": "qty"
      }
    ]
  },
  "materialTrace": {
    "product_id": "FG-6205-2RS",
    "product_name": "6205-2RS Deep Groove Bearing",
    "order": {
      "order_id": "SO-2026-0607-01",
      "customer": "Demo Export Account",
      "product_id": "FG-6205-2RS",
      "qty": 12000,
      "due_date": "2026-06-18",
      "priority": "high",
      "source_file": "sales_orders_demo.csv",
      "source_row": 2
    },
    "material_chains": [
      {
        "material_id": "MAT-6205-OR",
        "material_name": "Outer ring blank 6205",
        "bom": {
          "operation_id": "OP-10",
          "qty_per_unit": 1,
          "required_qty": 12000.0
        },
        "stock": [
          {
            "snapshot_id": "INV-001",
            "material_id": "MAT-6205-OR",
            "available_qty": 18400,
            "reserved_qty": 1200,
            "location": "WMS-A1",
            "lot_no": "OR6205-A",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 2
          }
        ],
        "inbound": [],
        "supplier": {
          "supplier": "Northline Forging",
          "on_time_rate": 0.94,
          "open_po_qty": 29200,
          "risk_note": "Stable ring blank supply"
        },
        "status": "covered",
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
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
        "material_id": "MAT-6205-IR",
        "material_name": "Inner ring blank 6205",
        "bom": {
          "operation_id": "OP-20",
          "qty_per_unit": 1,
          "required_qty": 12000.0
        },
        "stock": [
          {
            "snapshot_id": "INV-002",
            "material_id": "MAT-6205-IR",
            "available_qty": 17200,
            "reserved_qty": 900,
            "location": "WMS-A1",
            "lot_no": "IR6205-A",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3
          }
        ],
        "inbound": [],
        "supplier": {
          "supplier": "Northline Forging",
          "on_time_rate": 0.94,
          "open_po_qty": 29200,
          "risk_note": "Stable ring blank supply"
        },
        "status": "covered",
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 3,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3,
            "source_column": "available_qty"
          }
        ]
      },
      {
        "material_id": "MAT-BALL-7.94",
        "material_name": "Steel ball 7.94 mm",
        "bom": {
          "operation_id": "OP-30",
          "qty_per_unit": 9,
          "required_qty": 108000.0
        },
        "stock": [
          {
            "snapshot_id": "INV-003",
            "material_id": "MAT-BALL-7.94",
            "available_qty": 132000,
            "reserved_qty": 3600,
            "location": "WMS-B2",
            "lot_no": "B794-A",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4
          }
        ],
        "inbound": [],
        "supplier": {
          "supplier": "Hengyuan Ball",
          "on_time_rate": 0.97,
          "open_po_qty": 62000,
          "risk_note": "Rolling element supply stable"
        },
        "status": "watch",
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          }
        ]
      },
      {
        "material_id": "MAT-CAGE-6205",
        "material_name": "Pressed steel cage 6205",
        "bom": {
          "operation_id": "OP-40",
          "qty_per_unit": 1,
          "required_qty": 12000.0
        },
        "stock": [
          {
            "snapshot_id": "INV-004",
            "material_id": "MAT-CAGE-6205",
            "available_qty": 12600,
            "reserved_qty": 600,
            "location": "WMS-C1",
            "lot_no": "CAGE6205-A",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5
          }
        ],
        "inbound": [
          {
            "shipment_id": "INB-CAGE-6205-01",
            "material_id": "MAT-CAGE-6205",
            "qty": 5000,
            "eta": "2026-06-10",
            "carrier": "Demo Logistics",
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 4
          }
        ],
        "supplier": {
          "supplier": "Jinhe Stamping",
          "on_time_rate": 0.89,
          "open_po_qty": 18000,
          "risk_note": "Stamping changeover can slip by one shift"
        },
        "status": "covered",
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 5,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 4,
            "source_column": "qty"
          }
        ]
      },
      {
        "material_id": "MAT-SEAL-6205",
        "material_name": "Rubber seal 6205",
        "bom": {
          "operation_id": "OP-50",
          "qty_per_unit": 2,
          "required_qty": 24000.0
        },
        "stock": [
          {
            "snapshot_id": "INV-005",
            "material_id": "MAT-SEAL-6205",
            "available_qty": 24500,
            "reserved_qty": 1400,
            "location": "WMS-C2",
            "lot_no": "SEAL6205-A",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6
          }
        ],
        "inbound": [
          {
            "shipment_id": "INB-6205-SEAL-01",
            "material_id": "MAT-SEAL-6205",
            "qty": 9000,
            "eta": "2026-06-12",
            "carrier": "Demo Logistics",
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 2
          }
        ],
        "supplier": {
          "supplier": "Haicheng Rubber",
          "on_time_rate": 0.86,
          "open_po_qty": 22000,
          "risk_note": "Seal lot release requires incoming inspection"
        },
        "status": "covered",
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 6,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6,
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
        "material_id": "MAT-GREASE-L2",
        "material_name": "Low-noise bearing grease L2",
        "bom": {
          "operation_id": "OP-50",
          "qty_per_unit": 1.8,
          "required_qty": 21600.0
        },
        "stock": [
          {
            "snapshot_id": "INV-006",
            "material_id": "MAT-GREASE-L2",
            "available_qty": 19000,
            "reserved_qty": 800,
            "location": "WMS-CHEM",
            "lot_no": "GR-L2-A",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7
          }
        ],
        "inbound": [
          {
            "shipment_id": "INB-GREASE-01",
            "material_id": "MAT-GREASE-L2",
            "qty": 8000,
            "eta": "2026-06-11",
            "carrier": "Demo Logistics",
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 3
          }
        ],
        "supplier": {
          "supplier": "GreenChem",
          "on_time_rate": 0.81,
          "open_po_qty": 12000,
          "risk_note": "Grease batch QA release is the current watch item"
        },
        "status": "watch",
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 7,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7,
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
        "material_id": "MAT-PACK-STD",
        "material_name": "Standard bearing carton",
        "bom": {
          "operation_id": "OP-60",
          "qty_per_unit": 1,
          "required_qty": 12000.0
        },
        "stock": [
          {
            "snapshot_id": "INV-020",
            "material_id": "MAT-PACK-STD",
            "available_qty": 51000,
            "reserved_qty": 6200,
            "location": "WMS-PACK",
            "lot_no": "PKG-STD-A",
            "source_file": "wms_inventory_demo.csv",
            "source_row": 21
          }
        ],
        "inbound": [
          {
            "shipment_id": "INB-PACK-01",
            "material_id": "MAT-PACK-STD",
            "qty": 24000,
            "eta": "2026-06-09",
            "carrier": "Demo Local",
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 11
          }
        ],
        "supplier": {
          "supplier": "Harbor Packaging",
          "on_time_rate": 0.96,
          "open_po_qty": 24000,
          "risk_note": "Packaging buffer is sufficient"
        },
        "status": "surplus",
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 8,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 21,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 11,
            "source_column": "qty"
          }
        ]
      }
    ],
    "trace_summary": [
      {
        "stage": "Product",
        "label": "FG-6205-2RS",
        "detail": "6205-2RS Deep Groove Bearing",
        "status": "selected"
      },
      {
        "stage": "Order",
        "label": "SO-2026-0607-01",
        "detail": "12,000 pcs due 2026-06-18",
        "status": "high"
      },
      {
        "stage": "BOM",
        "label": "BOM-6205-2RS-R1",
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
        "detail": "8 suppliers",
        "status": "linked"
      }
    ],
    "source_refs": [
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 2,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 2,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 3,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 3,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 4,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 4,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 5,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 5,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 4,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 6,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 6,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 2,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 7,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 7,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 3,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 8,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 21,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 11,
        "source_column": "qty"
      }
    ]
  },
  "notice": {
    "notice_id": "PN-20260607141539-381D71",
    "product_id": "FG-6205-2RS",
    "product_name": "6205-2RS Deep Groove Bearing",
    "quantity": 12000,
    "order_id": "SO-2026-0607-01",
    "due_date": "2026-06-18",
    "material_status": "watch",
    "material_gate": "release_with_follow_up",
    "blocked_materials": [],
    "watch_materials": [
      {
        "material_id": "MAT-BALL-7.94",
        "material_name": "Steel ball 7.94 mm",
        "supplier": "Hengyuan Ball",
        "manufacturer": "Hengyuan Ball",
        "uom": "pcs",
        "operation_id": "OP-30",
        "qty_per_unit": 9,
        "required_qty": 108000.0,
        "available_qty": 128400.0,
        "inbound_qty": 0.0,
        "coverage_qty": 128400.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.189,
        "status": "watch",
        "eta": "",
        "locations": [
          "WMS-B2"
        ],
        "lot_numbers": [
          "B794-A"
        ],
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          }
        ],
        "source_trace": {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.97,
        "supplier_note": "Rolling element supply stable"
      },
      {
        "material_id": "MAT-GREASE-L2",
        "material_name": "Low-noise bearing grease L2",
        "supplier": "GreenChem",
        "manufacturer": "GreenChem",
        "uom": "g",
        "operation_id": "OP-50",
        "qty_per_unit": 1.8,
        "required_qty": 21600.0,
        "available_qty": 18200.0,
        "inbound_qty": 8000.0,
        "coverage_qty": 26200.0,
        "shortage_qty": 0.0,
        "coverage_ratio": 1.213,
        "status": "watch",
        "eta": "2026-06-11",
        "locations": [
          "WMS-CHEM"
        ],
        "lot_numbers": [
          "GR-L2-A"
        ],
        "source_refs": [
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 7,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7,
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
          "source_row": 7,
          "source_column": "available_qty"
        },
        "supplier_on_time_rate": 0.81,
        "supplier_note": "Grease batch QA release is the current watch item"
      }
    ],
    "html_preview": "<section class='notice-sheet'><h1>Production Notice PN-20260607141539-381D71</h1><p><strong>Product:</strong> 6205-2RS Deep Groove Bearing (FG-6205-2RS)</p><p><strong>Quantity:</strong> 12,000 pcs</p><p><strong>Customer order:</strong> SO-2026-0607-01 / due 2026-06-18</p><p><strong>Material gate:</strong> release_with_follow_up</p><table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody><tr><td>MAT-6205-OR</td><td>12,000.0 pcs</td><td>17,200.0</td><td>covered</td></tr><tr><td>MAT-6205-IR</td><td>12,000.0 pcs</td><td>16,300.0</td><td>covered</td></tr><tr><td>MAT-BALL-7.94</td><td>108,000.0 pcs</td><td>128,400.0</td><td>watch</td></tr><tr><td>MAT-CAGE-6205</td><td>12,000.0 pcs</td><td>17,000.0</td><td>covered</td></tr><tr><td>MAT-SEAL-6205</td><td>24,000.0 pcs</td><td>32,100.0</td><td>covered</td></tr><tr><td>MAT-GREASE-L2</td><td>21,600.0 g</td><td>26,200.0</td><td>watch</td></tr><tr><td>MAT-PACK-STD</td><td>12,000.0 pcs</td><td>68,800.0</td><td>surplus</td></tr></tbody></table></section>",
    "template_version": "bearing-production-notice/v1",
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
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 2,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 2,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 3,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 3,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 4,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 4,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 5,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 5,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 4,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 6,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 6,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 2,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 7,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 7,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 3,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 8,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 21,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 11,
        "source_column": "qty"
      }
    ]
  },
  "simulation": {
    "run_id": "SIM-20260607141539-08A3CF",
    "line_id": "LINE-BRG-6205-A",
    "line_name": "6205 Bearing Assembly Line A",
    "hours": 24,
    "total_output": 23501,
    "good_output": 23501,
    "scrap_output": 436,
    "bottleneck_machine": "OP-40",
    "quality_bottleneck": "OP-40",
    "machine_utilization": 0.886,
    "waiting_time_hours": 2.94,
    "blocking_time_hours": 4.8,
    "machine_reports": [
      {
        "machine_id": "OP-10",
        "name": "Outer ring grinding",
        "operation_id": "OP-10",
        "cycle_time_sec": 2.7,
        "good_output": 29314,
        "scrap_output": 446,
        "utilization": 0.893,
        "waiting_time_hours": 0.46,
        "blocking_time_hours": 0.96,
        "buffer_capacity": 600,
        "state": "running"
      },
      {
        "machine_id": "OP-20",
        "name": "Inner ring grinding",
        "operation_id": "OP-20",
        "cycle_time_sec": 2.9,
        "good_output": 26916,
        "scrap_output": 493,
        "utilization": 0.883,
        "waiting_time_hours": 0.5,
        "blocking_time_hours": 0.72,
        "buffer_capacity": 520,
        "state": "running"
      },
      {
        "machine_id": "OP-30",
        "name": "Ball loading",
        "operation_id": "OP-30",
        "cycle_time_sec": 2.4,
        "good_output": 33926,
        "scrap_output": 274,
        "utilization": 0.912,
        "waiting_time_hours": 0.38,
        "blocking_time_hours": 1.32,
        "buffer_capacity": 750,
        "state": "blocked"
      },
      {
        "machine_id": "OP-40",
        "name": "Cage pressing",
        "operation_id": "OP-40",
        "cycle_time_sec": 3.2,
        "good_output": 23501,
        "scrap_output": 529,
        "utilization": 0.854,
        "waiting_time_hours": 0.63,
        "blocking_time_hours": 0.36,
        "buffer_capacity": 420,
        "state": "running"
      },
      {
        "machine_id": "OP-50",
        "name": "Seal and grease",
        "operation_id": "OP-50",
        "cycle_time_sec": 3.0,
        "good_output": 25710,
        "scrap_output": 498,
        "utilization": 0.874,
        "waiting_time_hours": 0.55,
        "blocking_time_hours": 0.6,
        "buffer_capacity": 460,
        "state": "running"
      },
      {
        "machine_id": "OP-60",
        "name": "Noise inspection",
        "operation_id": "OP-60",
        "cycle_time_sec": 2.8,
        "good_output": 28629,
        "scrap_output": 377,
        "utilization": 0.902,
        "waiting_time_hours": 0.42,
        "blocking_time_hours": 0.84,
        "buffer_capacity": 500,
        "state": "running"
      }
    ],
    "transport_links": [
      {
        "link_id": "LNK-A-10-40",
        "from": "OP-10",
        "to": "OP-40",
        "mode": "conveyor",
        "capacity": 460,
        "transfer_time_sec": 24
      },
      {
        "link_id": "LNK-A-20-40",
        "from": "OP-20",
        "to": "OP-40",
        "mode": "robot",
        "capacity": 420,
        "transfer_time_sec": 31
      },
      {
        "link_id": "LNK-A-30-40",
        "from": "OP-30",
        "to": "OP-40",
        "mode": "feeder",
        "capacity": 680,
        "transfer_time_sec": 18
      },
      {
        "link_id": "LNK-A-40-50",
        "from": "OP-40",
        "to": "OP-50",
        "mode": "conveyor",
        "capacity": 420,
        "transfer_time_sec": 28
      },
      {
        "link_id": "LNK-A-50-60",
        "from": "OP-50",
        "to": "OP-60",
        "mode": "conveyor",
        "capacity": 500,
        "transfer_time_sec": 22
      }
    ],
    "source_events": [
      {
        "event_id": "EVT-001",
        "machine_id": "OP-10",
        "event_type": "cycle",
        "payload_json": {
          "cycle_count": 29314
        },
        "metadata_json": {
          "line_id": "LINE-BRG-6205-A"
        },
        "source_adapter": "plc_adapter_mock",
        "event_time": "2026-06-07T08:00:00Z"
      },
      {
        "event_id": "EVT-002",
        "machine_id": "OP-20",
        "event_type": "cycle",
        "payload_json": {
          "cycle_count": 26953
        },
        "metadata_json": {
          "line_id": "LINE-BRG-6205-A"
        },
        "source_adapter": "plc_adapter_mock",
        "event_time": "2026-06-07T08:05:00Z"
      },
      {
        "event_id": "EVT-003",
        "machine_id": "OP-30",
        "event_type": "cycle",
        "payload_json": {
          "cycle_count": 33926
        },
        "metadata_json": {
          "line_id": "LINE-BRG-6205-A"
        },
        "source_adapter": "plc_adapter_mock",
        "event_time": "2026-06-07T08:10:00Z"
      },
      {
        "event_id": "EVT-004",
        "machine_id": "OP-40",
        "event_type": "buffer_block",
        "payload_json": {
          "blocking_time_hours": 1.44
        },
        "metadata_json": {
          "line_id": "LINE-BRG-6205-A"
        },
        "source_adapter": "plc_adapter_mock",
        "event_time": "2026-06-07T08:15:00Z"
      },
      {
        "event_id": "EVT-005",
        "machine_id": "OP-50",
        "event_type": "quality_watch",
        "payload_json": {
          "scrap_output": 497
        },
        "metadata_json": {
          "line_id": "LINE-BRG-6205-A"
        },
        "source_adapter": "mes_adapter_mock",
        "event_time": "2026-06-07T08:20:00Z"
      },
      {
        "event_id": "EVT-006",
        "machine_id": "OP-60",
        "event_type": "inspection",
        "payload_json": {
          "passed": 28631
        },
        "metadata_json": {
          "line_id": "LINE-BRG-6205-A"
        },
        "source_adapter": "mes_adapter_mock",
        "event_time": "2026-06-07T08:25:00Z"
      }
    ],
    "improvement_suggestion": "Review buffer and changeover rules around OP-40 before increasing release quantity."
  },
  "dailyReport": {
    "summary": "FG-6205-2RS can proceed with material follow-up and bottleneck review.",
    "exceptions": [
      "Material gate is watch for FG-6205-2RS.",
      "Bottleneck review required at OP-40.",
      "MES adapter is stub.",
      "PLC adapter is sample.",
      "Scheduling adapter is stub.",
      "MCP adapter is ready-schema."
    ],
    "follow_up_list": [
      "Confirm GreenChem grease QA release.",
      "Review OP-40 buffer rule.",
      "Keep MES and PLC adapters in sample mode."
    ],
    "source_refs": [
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 2,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 2,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 3,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 3,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 4,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 4,
        "source_column": "available_qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 5,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 5,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 4,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 6,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 6,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 2,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 7,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 7,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 3,
        "source_column": "qty"
      },
      {
        "source_file": "bom_6205_demo.xlsx",
        "source_row": 8,
        "source_column": "qty_per_unit"
      },
      {
        "source_file": "wms_inventory_demo.csv",
        "source_row": 21,
        "source_column": "available_qty"
      },
      {
        "source_file": "shipment_in_transit_demo.csv",
        "source_row": 11,
        "source_column": "qty"
      }
    ],
    "simulation_run_id": "SIM-20260607141539-2D1404"
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
    "answer": "Result: production notice PN-20260607141539-8B08CB is ready for preview. Evidence: material gate is release_with_follow_up with 2 watch items. Source: order row 2 and BOM 7 rows are linked. Next check: confirm watch items before release.",
    "trace": {
      "trace_id": "TRC-ACCD5B65",
      "user_question": "Can FG-6205-2RS be released for production?",
      "question": "Can FG-6205-2RS be released for production?",
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
            "order_id": "SO-2026-0607-01"
          },
          "output_json": {
            "order": {
              "order_id": "SO-2026-0607-01",
              "customer": "Demo Export Account",
              "product_id": "FG-6205-2RS",
              "qty": 12000,
              "due_date": "2026-06-18",
              "priority": "high",
              "source_file": "sales_orders_demo.csv",
              "source_row": 2
            },
            "material_gate_status": "watch",
            "risk": {
              "product_id": "FG-6205-2RS",
              "order_qty": 12000.0,
              "overall_status": "watch",
              "status_counts": {
                "critical": 0,
                "watch": 2,
                "covered": 4,
                "surplus": 1
              },
              "materials": [
                {
                  "material_id": "MAT-6205-OR",
                  "material_name": "Outer ring blank 6205",
                  "supplier": "Northline Forging",
                  "manufacturer": "Northline Forging",
                  "uom": "pcs",
                  "operation_id": "OP-10",
                  "qty_per_unit": 1,
                  "required_qty": 12000.0,
                  "available_qty": 17200.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 17200.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.433,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "WMS-A1"
                  ],
                  "lot_numbers": [
                    "OR6205-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
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
                  "supplier_note": "Stable ring blank supply"
                },
                {
                  "material_id": "MAT-6205-IR",
                  "material_name": "Inner ring blank 6205",
                  "supplier": "Northline Forging",
                  "manufacturer": "Northline Forging",
                  "uom": "pcs",
                  "operation_id": "OP-20",
                  "qty_per_unit": 1,
                  "required_qty": 12000.0,
                  "available_qty": 16300.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 16300.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.358,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "WMS-A1"
                  ],
                  "lot_numbers": [
                    "IR6205-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 3,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 3,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 3,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.94,
                  "supplier_note": "Stable ring blank supply"
                },
                {
                  "material_id": "MAT-BALL-7.94",
                  "material_name": "Steel ball 7.94 mm",
                  "supplier": "Hengyuan Ball",
                  "manufacturer": "Hengyuan Ball",
                  "uom": "pcs",
                  "operation_id": "OP-30",
                  "qty_per_unit": 9,
                  "required_qty": 108000.0,
                  "available_qty": 128400.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 128400.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.189,
                  "status": "watch",
                  "eta": "",
                  "locations": [
                    "WMS-B2"
                  ],
                  "lot_numbers": [
                    "B794-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 4,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 4,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 4,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.97,
                  "supplier_note": "Rolling element supply stable"
                },
                {
                  "material_id": "MAT-CAGE-6205",
                  "material_name": "Pressed steel cage 6205",
                  "supplier": "Jinhe Stamping",
                  "manufacturer": "Jinhe Stamping",
                  "uom": "pcs",
                  "operation_id": "OP-40",
                  "qty_per_unit": 1,
                  "required_qty": 12000.0,
                  "available_qty": 12000.0,
                  "inbound_qty": 5000.0,
                  "coverage_qty": 17000.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.417,
                  "status": "covered",
                  "eta": "2026-06-10",
                  "locations": [
                    "WMS-C1"
                  ],
                  "lot_numbers": [
                    "CAGE6205-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 5,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 5,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 4,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 5,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.89,
                  "supplier_note": "Stamping changeover can slip by one shift"
                },
                {
                  "material_id": "MAT-SEAL-6205",
                  "material_name": "Rubber seal 6205",
                  "supplier": "Haicheng Rubber",
                  "manufacturer": "Haicheng Rubber",
                  "uom": "pcs",
                  "operation_id": "OP-50",
                  "qty_per_unit": 2,
                  "required_qty": 24000.0,
                  "available_qty": 23100.0,
                  "inbound_qty": 9000.0,
                  "coverage_qty": 32100.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.337,
                  "status": "covered",
                  "eta": "2026-06-12",
                  "locations": [
                    "WMS-C2"
                  ],
                  "lot_numbers": [
                    "SEAL6205-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 6,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 6,
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
                    "source_row": 6,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.86,
                  "supplier_note": "Seal lot release requires incoming inspection"
                },
                {
                  "material_id": "MAT-GREASE-L2",
                  "material_name": "Low-noise bearing grease L2",
                  "supplier": "GreenChem",
                  "manufacturer": "GreenChem",
                  "uom": "g",
                  "operation_id": "OP-50",
                  "qty_per_unit": 1.8,
                  "required_qty": 21600.0,
                  "available_qty": 18200.0,
                  "inbound_qty": 8000.0,
                  "coverage_qty": 26200.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.213,
                  "status": "watch",
                  "eta": "2026-06-11",
                  "locations": [
                    "WMS-CHEM"
                  ],
                  "lot_numbers": [
                    "GR-L2-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 7,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 7,
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
                    "source_row": 7,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.81,
                  "supplier_note": "Grease batch QA release is the current watch item"
                },
                {
                  "material_id": "MAT-PACK-STD",
                  "material_name": "Standard bearing carton",
                  "supplier": "Harbor Packaging",
                  "manufacturer": "Harbor Packaging",
                  "uom": "pcs",
                  "operation_id": "OP-60",
                  "qty_per_unit": 1,
                  "required_qty": 12000.0,
                  "available_qty": 44800.0,
                  "inbound_qty": 24000.0,
                  "coverage_qty": 68800.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 5.733,
                  "status": "surplus",
                  "eta": "2026-06-09",
                  "locations": [
                    "WMS-PACK"
                  ],
                  "lot_numbers": [
                    "PKG-STD-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 8,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 21,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 11,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 21,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.96,
                  "supplier_note": "Packaging buffer is sufficient"
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
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 2,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 2,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 3,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 3,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 4,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 5,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 5,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 4,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 6,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 6,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 2,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 7,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 7,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 3,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 8,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 21,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 11,
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
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 2,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 3,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 5,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 4,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 6,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 6,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 7,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 3,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 8,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 21,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 11,
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
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 4,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 21,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 11,
              "source_column": "qty"
            }
          ],
          "completed_at": "2026-06-07T14:15:39.238650+00:00"
        },
        {
          "tool_name": "generate_production_notice",
          "input_json": {
            "product_id": "FG-6205-2RS",
            "quantity": 12000
          },
          "output_json": {
            "notice_id": "PN-20260607141539-8B08CB",
            "product_id": "FG-6205-2RS",
            "product_name": "6205-2RS Deep Groove Bearing",
            "quantity": 12000,
            "order_id": "SO-2026-0607-01",
            "due_date": "2026-06-18",
            "material_status": "watch",
            "material_gate": "release_with_follow_up",
            "blocked_materials": [],
            "watch_materials": [
              {
                "material_id": "MAT-BALL-7.94",
                "material_name": "Steel ball 7.94 mm",
                "supplier": "Hengyuan Ball",
                "manufacturer": "Hengyuan Ball",
                "uom": "pcs",
                "operation_id": "OP-30",
                "qty_per_unit": 9,
                "required_qty": 108000.0,
                "available_qty": 128400.0,
                "inbound_qty": 0.0,
                "coverage_qty": 128400.0,
                "shortage_qty": 0.0,
                "coverage_ratio": 1.189,
                "status": "watch",
                "eta": "",
                "locations": [
                  "WMS-B2"
                ],
                "lot_numbers": [
                  "B794-A"
                ],
                "source_refs": [
                  {
                    "source_file": "bom_6205_demo.xlsx",
                    "source_row": 4,
                    "source_column": "qty_per_unit"
                  },
                  {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 4,
                    "source_column": "available_qty"
                  }
                ],
                "source_trace": {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                },
                "supplier_on_time_rate": 0.97,
                "supplier_note": "Rolling element supply stable"
              },
              {
                "material_id": "MAT-GREASE-L2",
                "material_name": "Low-noise bearing grease L2",
                "supplier": "GreenChem",
                "manufacturer": "GreenChem",
                "uom": "g",
                "operation_id": "OP-50",
                "qty_per_unit": 1.8,
                "required_qty": 21600.0,
                "available_qty": 18200.0,
                "inbound_qty": 8000.0,
                "coverage_qty": 26200.0,
                "shortage_qty": 0.0,
                "coverage_ratio": 1.213,
                "status": "watch",
                "eta": "2026-06-11",
                "locations": [
                  "WMS-CHEM"
                ],
                "lot_numbers": [
                  "GR-L2-A"
                ],
                "source_refs": [
                  {
                    "source_file": "bom_6205_demo.xlsx",
                    "source_row": 7,
                    "source_column": "qty_per_unit"
                  },
                  {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 7,
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
                  "source_row": 7,
                  "source_column": "available_qty"
                },
                "supplier_on_time_rate": 0.81,
                "supplier_note": "Grease batch QA release is the current watch item"
              }
            ],
            "html_preview": "<section class='notice-sheet'><h1>Production Notice PN-20260607141539-8B08CB</h1><p><strong>Product:</strong> 6205-2RS Deep Groove Bearing (FG-6205-2RS)</p><p><strong>Quantity:</strong> 12,000 pcs</p><p><strong>Customer order:</strong> SO-2026-0607-01 / due 2026-06-18</p><p><strong>Material gate:</strong> release_with_follow_up</p><table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody><tr><td>MAT-6205-OR</td><td>12,000.0 pcs</td><td>17,200.0</td><td>covered</td></tr><tr><td>MAT-6205-IR</td><td>12,000.0 pcs</td><td>16,300.0</td><td>covered</td></tr><tr><td>MAT-BALL-7.94</td><td>108,000.0 pcs</td><td>128,400.0</td><td>watch</td></tr><tr><td>MAT-CAGE-6205</td><td>12,000.0 pcs</td><td>17,000.0</td><td>covered</td></tr><tr><td>MAT-SEAL-6205</td><td>24,000.0 pcs</td><td>32,100.0</td><td>covered</td></tr><tr><td>MAT-GREASE-L2</td><td>21,600.0 g</td><td>26,200.0</td><td>watch</td></tr><tr><td>MAT-PACK-STD</td><td>12,000.0 pcs</td><td>68,800.0</td><td>surplus</td></tr></tbody></table></section>",
            "template_version": "bearing-production-notice/v1",
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
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 2,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 3,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 5,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 4,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 6,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 6,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 7,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 3,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 8,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 21,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 11,
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
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 4,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 21,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 11,
              "source_column": "qty"
            }
          ],
          "completed_at": "2026-06-07T14:15:39.238654+00:00"
        }
      ],
      "source_refs": [
        {
          "source_file": "sales_orders_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 2,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 3,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 4,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 5,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 4,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 6,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 6,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 7,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 7,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 3,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 8,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 21,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 11,
          "source_column": "qty"
        },
        {
          "source_file": "sales_orders_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 2,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 3,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 4,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 5,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 4,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 6,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 6,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 7,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 7,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 3,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 8,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 21,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 11,
          "source_column": "qty"
        }
      ],
      "final_answer": "Result: production notice PN-20260607141539-8B08CB is ready for preview. Evidence: material gate is release_with_follow_up with 2 watch items. Source: order row 2 and BOM 7 rows are linked. Next check: confirm watch items before release.",
      "status": "completed",
      "created_at": "2026-06-07T14:15:39.238660+00:00"
    },
    "data": {
      "coverage": {
        "order": {
          "order_id": "SO-2026-0607-01",
          "customer": "Demo Export Account",
          "product_id": "FG-6205-2RS",
          "qty": 12000,
          "due_date": "2026-06-18",
          "priority": "high",
          "source_file": "sales_orders_demo.csv",
          "source_row": 2
        },
        "material_gate_status": "watch",
        "risk": {
          "product_id": "FG-6205-2RS",
          "order_qty": 12000.0,
          "overall_status": "watch",
          "status_counts": {
            "critical": 0,
            "watch": 2,
            "covered": 4,
            "surplus": 1
          },
          "materials": [
            {
              "material_id": "MAT-6205-OR",
              "material_name": "Outer ring blank 6205",
              "supplier": "Northline Forging",
              "manufacturer": "Northline Forging",
              "uom": "pcs",
              "operation_id": "OP-10",
              "qty_per_unit": 1,
              "required_qty": 12000.0,
              "available_qty": 17200.0,
              "inbound_qty": 0.0,
              "coverage_qty": 17200.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.433,
              "status": "covered",
              "eta": "",
              "locations": [
                "WMS-A1"
              ],
              "lot_numbers": [
                "OR6205-A"
              ],
              "source_refs": [
                {
                  "source_file": "bom_6205_demo.xlsx",
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
              "supplier_note": "Stable ring blank supply"
            },
            {
              "material_id": "MAT-6205-IR",
              "material_name": "Inner ring blank 6205",
              "supplier": "Northline Forging",
              "manufacturer": "Northline Forging",
              "uom": "pcs",
              "operation_id": "OP-20",
              "qty_per_unit": 1,
              "required_qty": 12000.0,
              "available_qty": 16300.0,
              "inbound_qty": 0.0,
              "coverage_qty": 16300.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.358,
              "status": "covered",
              "eta": "",
              "locations": [
                "WMS-A1"
              ],
              "lot_numbers": [
                "IR6205-A"
              ],
              "source_refs": [
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 3,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 3,
                  "source_column": "available_qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.94,
              "supplier_note": "Stable ring blank supply"
            },
            {
              "material_id": "MAT-BALL-7.94",
              "material_name": "Steel ball 7.94 mm",
              "supplier": "Hengyuan Ball",
              "manufacturer": "Hengyuan Ball",
              "uom": "pcs",
              "operation_id": "OP-30",
              "qty_per_unit": 9,
              "required_qty": 108000.0,
              "available_qty": 128400.0,
              "inbound_qty": 0.0,
              "coverage_qty": 128400.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.189,
              "status": "watch",
              "eta": "",
              "locations": [
                "WMS-B2"
              ],
              "lot_numbers": [
                "B794-A"
              ],
              "source_refs": [
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 4,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.97,
              "supplier_note": "Rolling element supply stable"
            },
            {
              "material_id": "MAT-CAGE-6205",
              "material_name": "Pressed steel cage 6205",
              "supplier": "Jinhe Stamping",
              "manufacturer": "Jinhe Stamping",
              "uom": "pcs",
              "operation_id": "OP-40",
              "qty_per_unit": 1,
              "required_qty": 12000.0,
              "available_qty": 12000.0,
              "inbound_qty": 5000.0,
              "coverage_qty": 17000.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.417,
              "status": "covered",
              "eta": "2026-06-10",
              "locations": [
                "WMS-C1"
              ],
              "lot_numbers": [
                "CAGE6205-A"
              ],
              "source_refs": [
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 5,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 5,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 4,
                  "source_column": "qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.89,
              "supplier_note": "Stamping changeover can slip by one shift"
            },
            {
              "material_id": "MAT-SEAL-6205",
              "material_name": "Rubber seal 6205",
              "supplier": "Haicheng Rubber",
              "manufacturer": "Haicheng Rubber",
              "uom": "pcs",
              "operation_id": "OP-50",
              "qty_per_unit": 2,
              "required_qty": 24000.0,
              "available_qty": 23100.0,
              "inbound_qty": 9000.0,
              "coverage_qty": 32100.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.337,
              "status": "covered",
              "eta": "2026-06-12",
              "locations": [
                "WMS-C2"
              ],
              "lot_numbers": [
                "SEAL6205-A"
              ],
              "source_refs": [
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 6,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 6,
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
                "source_row": 6,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.86,
              "supplier_note": "Seal lot release requires incoming inspection"
            },
            {
              "material_id": "MAT-GREASE-L2",
              "material_name": "Low-noise bearing grease L2",
              "supplier": "GreenChem",
              "manufacturer": "GreenChem",
              "uom": "g",
              "operation_id": "OP-50",
              "qty_per_unit": 1.8,
              "required_qty": 21600.0,
              "available_qty": 18200.0,
              "inbound_qty": 8000.0,
              "coverage_qty": 26200.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 1.213,
              "status": "watch",
              "eta": "2026-06-11",
              "locations": [
                "WMS-CHEM"
              ],
              "lot_numbers": [
                "GR-L2-A"
              ],
              "source_refs": [
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 7,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 7,
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
                "source_row": 7,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.81,
              "supplier_note": "Grease batch QA release is the current watch item"
            },
            {
              "material_id": "MAT-PACK-STD",
              "material_name": "Standard bearing carton",
              "supplier": "Harbor Packaging",
              "manufacturer": "Harbor Packaging",
              "uom": "pcs",
              "operation_id": "OP-60",
              "qty_per_unit": 1,
              "required_qty": 12000.0,
              "available_qty": 44800.0,
              "inbound_qty": 24000.0,
              "coverage_qty": 68800.0,
              "shortage_qty": 0.0,
              "coverage_ratio": 5.733,
              "status": "surplus",
              "eta": "2026-06-09",
              "locations": [
                "WMS-PACK"
              ],
              "lot_numbers": [
                "PKG-STD-A"
              ],
              "source_refs": [
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 8,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 21,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 11,
                  "source_column": "qty"
                }
              ],
              "source_trace": {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 21,
                "source_column": "available_qty"
              },
              "supplier_on_time_rate": 0.96,
              "supplier_note": "Packaging buffer is sufficient"
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
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 4,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 21,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 11,
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
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 2,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 2,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 3,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 5,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 4,
            "source_column": "qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 6,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 2,
            "source_column": "qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 7,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 3,
            "source_column": "qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 8,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 21,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 11,
            "source_column": "qty"
          }
        ]
      },
      "notice": {
        "notice_id": "PN-20260607141539-8B08CB",
        "product_id": "FG-6205-2RS",
        "product_name": "6205-2RS Deep Groove Bearing",
        "quantity": 12000,
        "order_id": "SO-2026-0607-01",
        "due_date": "2026-06-18",
        "material_status": "watch",
        "material_gate": "release_with_follow_up",
        "blocked_materials": [],
        "watch_materials": [
          {
            "material_id": "MAT-BALL-7.94",
            "material_name": "Steel ball 7.94 mm",
            "supplier": "Hengyuan Ball",
            "manufacturer": "Hengyuan Ball",
            "uom": "pcs",
            "operation_id": "OP-30",
            "qty_per_unit": 9,
            "required_qty": 108000.0,
            "available_qty": 128400.0,
            "inbound_qty": 0.0,
            "coverage_qty": 128400.0,
            "shortage_qty": 0.0,
            "coverage_ratio": 1.189,
            "status": "watch",
            "eta": "",
            "locations": [
              "WMS-B2"
            ],
            "lot_numbers": [
              "B794-A"
            ],
            "source_refs": [
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              }
            ],
            "source_trace": {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            "supplier_on_time_rate": 0.97,
            "supplier_note": "Rolling element supply stable"
          },
          {
            "material_id": "MAT-GREASE-L2",
            "material_name": "Low-noise bearing grease L2",
            "supplier": "GreenChem",
            "manufacturer": "GreenChem",
            "uom": "g",
            "operation_id": "OP-50",
            "qty_per_unit": 1.8,
            "required_qty": 21600.0,
            "available_qty": 18200.0,
            "inbound_qty": 8000.0,
            "coverage_qty": 26200.0,
            "shortage_qty": 0.0,
            "coverage_ratio": 1.213,
            "status": "watch",
            "eta": "2026-06-11",
            "locations": [
              "WMS-CHEM"
            ],
            "lot_numbers": [
              "GR-L2-A"
            ],
            "source_refs": [
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 7,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
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
              "source_row": 7,
              "source_column": "available_qty"
            },
            "supplier_on_time_rate": 0.81,
            "supplier_note": "Grease batch QA release is the current watch item"
          }
        ],
        "html_preview": "<section class='notice-sheet'><h1>Production Notice PN-20260607141539-8B08CB</h1><p><strong>Product:</strong> 6205-2RS Deep Groove Bearing (FG-6205-2RS)</p><p><strong>Quantity:</strong> 12,000 pcs</p><p><strong>Customer order:</strong> SO-2026-0607-01 / due 2026-06-18</p><p><strong>Material gate:</strong> release_with_follow_up</p><table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody><tr><td>MAT-6205-OR</td><td>12,000.0 pcs</td><td>17,200.0</td><td>covered</td></tr><tr><td>MAT-6205-IR</td><td>12,000.0 pcs</td><td>16,300.0</td><td>covered</td></tr><tr><td>MAT-BALL-7.94</td><td>108,000.0 pcs</td><td>128,400.0</td><td>watch</td></tr><tr><td>MAT-CAGE-6205</td><td>12,000.0 pcs</td><td>17,000.0</td><td>covered</td></tr><tr><td>MAT-SEAL-6205</td><td>24,000.0 pcs</td><td>32,100.0</td><td>covered</td></tr><tr><td>MAT-GREASE-L2</td><td>21,600.0 g</td><td>26,200.0</td><td>watch</td></tr><tr><td>MAT-PACK-STD</td><td>12,000.0 pcs</td><td>68,800.0</td><td>surplus</td></tr></tbody></table></section>",
        "template_version": "bearing-production-notice/v1",
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
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 2,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 2,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 3,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 3,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 4,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 4,
            "source_column": "available_qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 5,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 5,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 4,
            "source_column": "qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 6,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 6,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 2,
            "source_column": "qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 7,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 7,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 3,
            "source_column": "qty"
          },
          {
            "source_file": "bom_6205_demo.xlsx",
            "source_row": 8,
            "source_column": "qty_per_unit"
          },
          {
            "source_file": "wms_inventory_demo.csv",
            "source_row": 21,
            "source_column": "available_qty"
          },
          {
            "source_file": "shipment_in_transit_demo.csv",
            "source_row": 11,
            "source_column": "qty"
          }
        ]
      }
    }
  },
  "agentTraces": [
    {
      "trace_id": "TRC-ACCD5B65",
      "user_question": "Can FG-6205-2RS be released for production?",
      "question": "Can FG-6205-2RS be released for production?",
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
            "order_id": "SO-2026-0607-01"
          },
          "output_json": {
            "order": {
              "order_id": "SO-2026-0607-01",
              "customer": "Demo Export Account",
              "product_id": "FG-6205-2RS",
              "qty": 12000,
              "due_date": "2026-06-18",
              "priority": "high",
              "source_file": "sales_orders_demo.csv",
              "source_row": 2
            },
            "material_gate_status": "watch",
            "risk": {
              "product_id": "FG-6205-2RS",
              "order_qty": 12000.0,
              "overall_status": "watch",
              "status_counts": {
                "critical": 0,
                "watch": 2,
                "covered": 4,
                "surplus": 1
              },
              "materials": [
                {
                  "material_id": "MAT-6205-OR",
                  "material_name": "Outer ring blank 6205",
                  "supplier": "Northline Forging",
                  "manufacturer": "Northline Forging",
                  "uom": "pcs",
                  "operation_id": "OP-10",
                  "qty_per_unit": 1,
                  "required_qty": 12000.0,
                  "available_qty": 17200.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 17200.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.433,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "WMS-A1"
                  ],
                  "lot_numbers": [
                    "OR6205-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
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
                  "supplier_note": "Stable ring blank supply"
                },
                {
                  "material_id": "MAT-6205-IR",
                  "material_name": "Inner ring blank 6205",
                  "supplier": "Northline Forging",
                  "manufacturer": "Northline Forging",
                  "uom": "pcs",
                  "operation_id": "OP-20",
                  "qty_per_unit": 1,
                  "required_qty": 12000.0,
                  "available_qty": 16300.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 16300.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.358,
                  "status": "covered",
                  "eta": "",
                  "locations": [
                    "WMS-A1"
                  ],
                  "lot_numbers": [
                    "IR6205-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 3,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 3,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 3,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.94,
                  "supplier_note": "Stable ring blank supply"
                },
                {
                  "material_id": "MAT-BALL-7.94",
                  "material_name": "Steel ball 7.94 mm",
                  "supplier": "Hengyuan Ball",
                  "manufacturer": "Hengyuan Ball",
                  "uom": "pcs",
                  "operation_id": "OP-30",
                  "qty_per_unit": 9,
                  "required_qty": 108000.0,
                  "available_qty": 128400.0,
                  "inbound_qty": 0.0,
                  "coverage_qty": 128400.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.189,
                  "status": "watch",
                  "eta": "",
                  "locations": [
                    "WMS-B2"
                  ],
                  "lot_numbers": [
                    "B794-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 4,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 4,
                      "source_column": "available_qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 4,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.97,
                  "supplier_note": "Rolling element supply stable"
                },
                {
                  "material_id": "MAT-CAGE-6205",
                  "material_name": "Pressed steel cage 6205",
                  "supplier": "Jinhe Stamping",
                  "manufacturer": "Jinhe Stamping",
                  "uom": "pcs",
                  "operation_id": "OP-40",
                  "qty_per_unit": 1,
                  "required_qty": 12000.0,
                  "available_qty": 12000.0,
                  "inbound_qty": 5000.0,
                  "coverage_qty": 17000.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.417,
                  "status": "covered",
                  "eta": "2026-06-10",
                  "locations": [
                    "WMS-C1"
                  ],
                  "lot_numbers": [
                    "CAGE6205-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 5,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 5,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 4,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 5,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.89,
                  "supplier_note": "Stamping changeover can slip by one shift"
                },
                {
                  "material_id": "MAT-SEAL-6205",
                  "material_name": "Rubber seal 6205",
                  "supplier": "Haicheng Rubber",
                  "manufacturer": "Haicheng Rubber",
                  "uom": "pcs",
                  "operation_id": "OP-50",
                  "qty_per_unit": 2,
                  "required_qty": 24000.0,
                  "available_qty": 23100.0,
                  "inbound_qty": 9000.0,
                  "coverage_qty": 32100.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.337,
                  "status": "covered",
                  "eta": "2026-06-12",
                  "locations": [
                    "WMS-C2"
                  ],
                  "lot_numbers": [
                    "SEAL6205-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 6,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 6,
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
                    "source_row": 6,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.86,
                  "supplier_note": "Seal lot release requires incoming inspection"
                },
                {
                  "material_id": "MAT-GREASE-L2",
                  "material_name": "Low-noise bearing grease L2",
                  "supplier": "GreenChem",
                  "manufacturer": "GreenChem",
                  "uom": "g",
                  "operation_id": "OP-50",
                  "qty_per_unit": 1.8,
                  "required_qty": 21600.0,
                  "available_qty": 18200.0,
                  "inbound_qty": 8000.0,
                  "coverage_qty": 26200.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 1.213,
                  "status": "watch",
                  "eta": "2026-06-11",
                  "locations": [
                    "WMS-CHEM"
                  ],
                  "lot_numbers": [
                    "GR-L2-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 7,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 7,
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
                    "source_row": 7,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.81,
                  "supplier_note": "Grease batch QA release is the current watch item"
                },
                {
                  "material_id": "MAT-PACK-STD",
                  "material_name": "Standard bearing carton",
                  "supplier": "Harbor Packaging",
                  "manufacturer": "Harbor Packaging",
                  "uom": "pcs",
                  "operation_id": "OP-60",
                  "qty_per_unit": 1,
                  "required_qty": 12000.0,
                  "available_qty": 44800.0,
                  "inbound_qty": 24000.0,
                  "coverage_qty": 68800.0,
                  "shortage_qty": 0.0,
                  "coverage_ratio": 5.733,
                  "status": "surplus",
                  "eta": "2026-06-09",
                  "locations": [
                    "WMS-PACK"
                  ],
                  "lot_numbers": [
                    "PKG-STD-A"
                  ],
                  "source_refs": [
                    {
                      "source_file": "bom_6205_demo.xlsx",
                      "source_row": 8,
                      "source_column": "qty_per_unit"
                    },
                    {
                      "source_file": "wms_inventory_demo.csv",
                      "source_row": 21,
                      "source_column": "available_qty"
                    },
                    {
                      "source_file": "shipment_in_transit_demo.csv",
                      "source_row": 11,
                      "source_column": "qty"
                    }
                  ],
                  "source_trace": {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 21,
                    "source_column": "available_qty"
                  },
                  "supplier_on_time_rate": 0.96,
                  "supplier_note": "Packaging buffer is sufficient"
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
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 2,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 2,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 3,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 3,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 4,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 5,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 5,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 4,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 6,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 6,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 2,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 7,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 7,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 3,
                  "source_column": "qty"
                },
                {
                  "source_file": "bom_6205_demo.xlsx",
                  "source_row": 8,
                  "source_column": "qty_per_unit"
                },
                {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 21,
                  "source_column": "available_qty"
                },
                {
                  "source_file": "shipment_in_transit_demo.csv",
                  "source_row": 11,
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
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 2,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 3,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 5,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 4,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 6,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 6,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 7,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 3,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 8,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 21,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 11,
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
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 4,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 21,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 11,
              "source_column": "qty"
            }
          ],
          "completed_at": "2026-06-07T14:15:39.238650+00:00"
        },
        {
          "tool_name": "generate_production_notice",
          "input_json": {
            "product_id": "FG-6205-2RS",
            "quantity": 12000
          },
          "output_json": {
            "notice_id": "PN-20260607141539-8B08CB",
            "product_id": "FG-6205-2RS",
            "product_name": "6205-2RS Deep Groove Bearing",
            "quantity": 12000,
            "order_id": "SO-2026-0607-01",
            "due_date": "2026-06-18",
            "material_status": "watch",
            "material_gate": "release_with_follow_up",
            "blocked_materials": [],
            "watch_materials": [
              {
                "material_id": "MAT-BALL-7.94",
                "material_name": "Steel ball 7.94 mm",
                "supplier": "Hengyuan Ball",
                "manufacturer": "Hengyuan Ball",
                "uom": "pcs",
                "operation_id": "OP-30",
                "qty_per_unit": 9,
                "required_qty": 108000.0,
                "available_qty": 128400.0,
                "inbound_qty": 0.0,
                "coverage_qty": 128400.0,
                "shortage_qty": 0.0,
                "coverage_ratio": 1.189,
                "status": "watch",
                "eta": "",
                "locations": [
                  "WMS-B2"
                ],
                "lot_numbers": [
                  "B794-A"
                ],
                "source_refs": [
                  {
                    "source_file": "bom_6205_demo.xlsx",
                    "source_row": 4,
                    "source_column": "qty_per_unit"
                  },
                  {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 4,
                    "source_column": "available_qty"
                  }
                ],
                "source_trace": {
                  "source_file": "wms_inventory_demo.csv",
                  "source_row": 4,
                  "source_column": "available_qty"
                },
                "supplier_on_time_rate": 0.97,
                "supplier_note": "Rolling element supply stable"
              },
              {
                "material_id": "MAT-GREASE-L2",
                "material_name": "Low-noise bearing grease L2",
                "supplier": "GreenChem",
                "manufacturer": "GreenChem",
                "uom": "g",
                "operation_id": "OP-50",
                "qty_per_unit": 1.8,
                "required_qty": 21600.0,
                "available_qty": 18200.0,
                "inbound_qty": 8000.0,
                "coverage_qty": 26200.0,
                "shortage_qty": 0.0,
                "coverage_ratio": 1.213,
                "status": "watch",
                "eta": "2026-06-11",
                "locations": [
                  "WMS-CHEM"
                ],
                "lot_numbers": [
                  "GR-L2-A"
                ],
                "source_refs": [
                  {
                    "source_file": "bom_6205_demo.xlsx",
                    "source_row": 7,
                    "source_column": "qty_per_unit"
                  },
                  {
                    "source_file": "wms_inventory_demo.csv",
                    "source_row": 7,
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
                  "source_row": 7,
                  "source_column": "available_qty"
                },
                "supplier_on_time_rate": 0.81,
                "supplier_note": "Grease batch QA release is the current watch item"
              }
            ],
            "html_preview": "<section class='notice-sheet'><h1>Production Notice PN-20260607141539-8B08CB</h1><p><strong>Product:</strong> 6205-2RS Deep Groove Bearing (FG-6205-2RS)</p><p><strong>Quantity:</strong> 12,000 pcs</p><p><strong>Customer order:</strong> SO-2026-0607-01 / due 2026-06-18</p><p><strong>Material gate:</strong> release_with_follow_up</p><table><thead><tr><th>Material</th><th>Required</th><th>Coverage</th><th>Status</th></tr></thead><tbody><tr><td>MAT-6205-OR</td><td>12,000.0 pcs</td><td>17,200.0</td><td>covered</td></tr><tr><td>MAT-6205-IR</td><td>12,000.0 pcs</td><td>16,300.0</td><td>covered</td></tr><tr><td>MAT-BALL-7.94</td><td>108,000.0 pcs</td><td>128,400.0</td><td>watch</td></tr><tr><td>MAT-CAGE-6205</td><td>12,000.0 pcs</td><td>17,000.0</td><td>covered</td></tr><tr><td>MAT-SEAL-6205</td><td>24,000.0 pcs</td><td>32,100.0</td><td>covered</td></tr><tr><td>MAT-GREASE-L2</td><td>21,600.0 g</td><td>26,200.0</td><td>watch</td></tr><tr><td>MAT-PACK-STD</td><td>12,000.0 pcs</td><td>68,800.0</td><td>surplus</td></tr></tbody></table></section>",
            "template_version": "bearing-production-notice/v1",
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
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 2,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 2,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 3,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 3,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 4,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 4,
                "source_column": "available_qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 5,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 5,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 4,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 6,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 6,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 2,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 7,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 7,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 3,
                "source_column": "qty"
              },
              {
                "source_file": "bom_6205_demo.xlsx",
                "source_row": 8,
                "source_column": "qty_per_unit"
              },
              {
                "source_file": "wms_inventory_demo.csv",
                "source_row": 21,
                "source_column": "available_qty"
              },
              {
                "source_file": "shipment_in_transit_demo.csv",
                "source_row": 11,
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
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 2,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 2,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 3,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 3,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 4,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 4,
              "source_column": "available_qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 5,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 5,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 4,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 6,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 6,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 2,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 7,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 7,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 3,
              "source_column": "qty"
            },
            {
              "source_file": "bom_6205_demo.xlsx",
              "source_row": 8,
              "source_column": "qty_per_unit"
            },
            {
              "source_file": "wms_inventory_demo.csv",
              "source_row": 21,
              "source_column": "available_qty"
            },
            {
              "source_file": "shipment_in_transit_demo.csv",
              "source_row": 11,
              "source_column": "qty"
            }
          ],
          "completed_at": "2026-06-07T14:15:39.238654+00:00"
        }
      ],
      "source_refs": [
        {
          "source_file": "sales_orders_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 2,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 3,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 4,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 5,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 4,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 6,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 6,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 7,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 7,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 3,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 8,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 21,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 11,
          "source_column": "qty"
        },
        {
          "source_file": "sales_orders_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 2,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 2,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 3,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 3,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 4,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 4,
          "source_column": "available_qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 5,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 5,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 4,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 6,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 6,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 2,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 7,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 7,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 3,
          "source_column": "qty"
        },
        {
          "source_file": "bom_6205_demo.xlsx",
          "source_row": 8,
          "source_column": "qty_per_unit"
        },
        {
          "source_file": "wms_inventory_demo.csv",
          "source_row": 21,
          "source_column": "available_qty"
        },
        {
          "source_file": "shipment_in_transit_demo.csv",
          "source_row": 11,
          "source_column": "qty"
        }
      ],
      "final_answer": "Result: production notice PN-20260607141539-8B08CB is ready for preview. Evidence: material gate is release_with_follow_up with 2 watch items. Source: order row 2 and BOM 7 rows are linked. Next check: confirm watch items before release.",
      "status": "completed",
      "created_at": "2026-06-07T14:15:39.238660+00:00"
    }
  ],
  "workflows": [
    {
      "workflow_run_id": "WF-001",
      "workflow_name": "file_to_dashboard",
      "status": "completed",
      "current_step": "dashboard_summary",
      "input_json": {
        "file_name": "bom_6205_demo.xlsx"
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
      "current_step": "material_coverage",
      "input_json": {
        "order_id": "SO-2026-0607-01"
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
        "order_id": "SO-2026-0607-01"
      },
      "result_json": {
        "template_version": "bearing-production-notice/v1"
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
        "line_id": "LINE-BRG-6205-A",
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
