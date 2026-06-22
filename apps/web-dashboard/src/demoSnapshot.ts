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
  "finishedGoods": [
    {
      "product_id": "FG-OPS-A100",
      "on_hand_qty": 310,
      "reserved_qty": 180,
      "location": "FG-A",
      "status": "available",
      "cycle_count_accuracy": 0.982,
      "last_counted_at": "2026-06-06"
    },
    {
      "product_id": "FG-OPS-B200",
      "on_hand_qty": 460,
      "reserved_qty": 210,
      "location": "FG-A",
      "status": "available",
      "cycle_count_accuracy": 0.975,
      "last_counted_at": "2026-06-05"
    },
    {
      "product_id": "FG-OPS-C300",
      "on_hand_qty": 180,
      "reserved_qty": 95,
      "location": "FG-B",
      "status": "service_buffer",
      "cycle_count_accuracy": 0.968,
      "last_counted_at": "2026-06-04"
    },
    {
      "product_id": "FG-OPS-D400",
      "on_hand_qty": 22,
      "reserved_qty": 18,
      "location": "ETO-HOLD",
      "status": "engineering_hold",
      "cycle_count_accuracy": 0.991,
      "last_counted_at": "2026-06-03"
    }
  ],
  "demandHistory": [
    {
      "week_start": "2026-04-13",
      "product_id": "FG-OPS-A100",
      "booked_qty": 720,
      "shipped_qty": 690,
      "backlog_qty": 260,
      "market_signal_index": 0.78
    },
    {
      "week_start": "2026-04-20",
      "product_id": "FG-OPS-A100",
      "booked_qty": 760,
      "shipped_qty": 700,
      "backlog_qty": 320,
      "market_signal_index": 0.81
    },
    {
      "week_start": "2026-04-27",
      "product_id": "FG-OPS-A100",
      "booked_qty": 810,
      "shipped_qty": 740,
      "backlog_qty": 390,
      "market_signal_index": 0.86
    },
    {
      "week_start": "2026-05-04",
      "product_id": "FG-OPS-A100",
      "booked_qty": 840,
      "shipped_qty": 790,
      "backlog_qty": 440,
      "market_signal_index": 0.9
    },
    {
      "week_start": "2026-05-11",
      "product_id": "FG-OPS-A100",
      "booked_qty": 920,
      "shipped_qty": 835,
      "backlog_qty": 525,
      "market_signal_index": 0.94
    },
    {
      "week_start": "2026-05-18",
      "product_id": "FG-OPS-A100",
      "booked_qty": 960,
      "shipped_qty": 870,
      "backlog_qty": 615,
      "market_signal_index": 0.96
    },
    {
      "week_start": "2026-05-25",
      "product_id": "FG-OPS-A100",
      "booked_qty": 1010,
      "shipped_qty": 900,
      "backlog_qty": 725,
      "market_signal_index": 0.98
    },
    {
      "week_start": "2026-06-01",
      "product_id": "FG-OPS-A100",
      "booked_qty": 1040,
      "shipped_qty": 930,
      "backlog_qty": 835,
      "market_signal_index": 1.0
    },
    {
      "week_start": "2026-04-13",
      "product_id": "FG-OPS-B200",
      "booked_qty": 610,
      "shipped_qty": 620,
      "backlog_qty": 180,
      "market_signal_index": 0.72
    },
    {
      "week_start": "2026-04-20",
      "product_id": "FG-OPS-B200",
      "booked_qty": 650,
      "shipped_qty": 635,
      "backlog_qty": 195,
      "market_signal_index": 0.74
    },
    {
      "week_start": "2026-04-27",
      "product_id": "FG-OPS-B200",
      "booked_qty": 640,
      "shipped_qty": 645,
      "backlog_qty": 190,
      "market_signal_index": 0.73
    },
    {
      "week_start": "2026-05-04",
      "product_id": "FG-OPS-B200",
      "booked_qty": 700,
      "shipped_qty": 660,
      "backlog_qty": 230,
      "market_signal_index": 0.78
    },
    {
      "week_start": "2026-05-11",
      "product_id": "FG-OPS-B200",
      "booked_qty": 735,
      "shipped_qty": 690,
      "backlog_qty": 275,
      "market_signal_index": 0.82
    },
    {
      "week_start": "2026-05-18",
      "product_id": "FG-OPS-B200",
      "booked_qty": 710,
      "shipped_qty": 700,
      "backlog_qty": 285,
      "market_signal_index": 0.8
    },
    {
      "week_start": "2026-05-25",
      "product_id": "FG-OPS-B200",
      "booked_qty": 760,
      "shipped_qty": 720,
      "backlog_qty": 325,
      "market_signal_index": 0.84
    },
    {
      "week_start": "2026-06-01",
      "product_id": "FG-OPS-B200",
      "booked_qty": 790,
      "shipped_qty": 735,
      "backlog_qty": 380,
      "market_signal_index": 0.87
    },
    {
      "week_start": "2026-04-13",
      "product_id": "FG-OPS-C300",
      "booked_qty": 430,
      "shipped_qty": 420,
      "backlog_qty": 150,
      "market_signal_index": 0.66
    },
    {
      "week_start": "2026-04-20",
      "product_id": "FG-OPS-C300",
      "booked_qty": 455,
      "shipped_qty": 440,
      "backlog_qty": 165,
      "market_signal_index": 0.69
    },
    {
      "week_start": "2026-04-27",
      "product_id": "FG-OPS-C300",
      "booked_qty": 470,
      "shipped_qty": 450,
      "backlog_qty": 185,
      "market_signal_index": 0.71
    },
    {
      "week_start": "2026-05-04",
      "product_id": "FG-OPS-C300",
      "booked_qty": 520,
      "shipped_qty": 470,
      "backlog_qty": 235,
      "market_signal_index": 0.79
    },
    {
      "week_start": "2026-05-11",
      "product_id": "FG-OPS-C300",
      "booked_qty": 560,
      "shipped_qty": 500,
      "backlog_qty": 295,
      "market_signal_index": 0.84
    },
    {
      "week_start": "2026-05-18",
      "product_id": "FG-OPS-C300",
      "booked_qty": 590,
      "shipped_qty": 520,
      "backlog_qty": 365,
      "market_signal_index": 0.88
    },
    {
      "week_start": "2026-05-25",
      "product_id": "FG-OPS-C300",
      "booked_qty": 610,
      "shipped_qty": 535,
      "backlog_qty": 440,
      "market_signal_index": 0.9
    },
    {
      "week_start": "2026-06-01",
      "product_id": "FG-OPS-C300",
      "booked_qty": 635,
      "shipped_qty": 550,
      "backlog_qty": 525,
      "market_signal_index": 0.93
    },
    {
      "week_start": "2026-04-13",
      "product_id": "FG-OPS-D400",
      "booked_qty": 65,
      "shipped_qty": 58,
      "backlog_qty": 34,
      "market_signal_index": 0.55
    },
    {
      "week_start": "2026-04-20",
      "product_id": "FG-OPS-D400",
      "booked_qty": 70,
      "shipped_qty": 62,
      "backlog_qty": 42,
      "market_signal_index": 0.58
    },
    {
      "week_start": "2026-04-27",
      "product_id": "FG-OPS-D400",
      "booked_qty": 72,
      "shipped_qty": 66,
      "backlog_qty": 48,
      "market_signal_index": 0.59
    },
    {
      "week_start": "2026-05-04",
      "product_id": "FG-OPS-D400",
      "booked_qty": 82,
      "shipped_qty": 70,
      "backlog_qty": 60,
      "market_signal_index": 0.64
    },
    {
      "week_start": "2026-05-11",
      "product_id": "FG-OPS-D400",
      "booked_qty": 95,
      "shipped_qty": 75,
      "backlog_qty": 80,
      "market_signal_index": 0.7
    },
    {
      "week_start": "2026-05-18",
      "product_id": "FG-OPS-D400",
      "booked_qty": 88,
      "shipped_qty": 82,
      "backlog_qty": 86,
      "market_signal_index": 0.68
    },
    {
      "week_start": "2026-05-25",
      "product_id": "FG-OPS-D400",
      "booked_qty": 105,
      "shipped_qty": 86,
      "backlog_qty": 105,
      "market_signal_index": 0.74
    },
    {
      "week_start": "2026-06-01",
      "product_id": "FG-OPS-D400",
      "booked_qty": 112,
      "shipped_qty": 90,
      "backlog_qty": 127,
      "market_signal_index": 0.77
    }
  ],
  "controlTower": {
    "generated_at": "2026-06-07T08:00:00+00:00",
    "operating_score": 28,
    "kpis": {
      "open_order_qty": 5010,
      "open_order_value": 3042000.0,
      "gross_margin_value": 1169590.0,
      "forecast_4w_qty": 10769,
      "material_watch_items": 4,
      "material_critical_items": 10,
      "external_actionable_signals": 3,
      "open_internal_issues": 4
    },
    "product_health": [
      {
        "product_id": "FG-OPS-A100",
        "product_name": "Modular Control Kit A100",
        "planning_policy": "make_to_order",
        "open_order_qty": 1850,
        "open_order_count": 2,
        "due_soon_count": 2,
        "backlog_value": 1591000.0,
        "gross_margin_value": 582750.0,
        "forecast_4w_qty": 4428,
        "finished_goods_available": 130,
        "coverage_days": 0.8,
        "target_days_of_cover": 18.0,
        "material_status": "critical",
        "capacity_line_id": "LINE-UNIVERSAL-A",
        "weekly_capacity_qty": 9975,
        "capacity_gap_qty": 0,
        "status": "critical",
        "recommended_action": "Hold release and resolve material shortage"
      },
      {
        "product_id": "FG-OPS-B200",
        "product_name": "Sensor Pack B200",
        "planning_policy": "make_to_order",
        "open_order_qty": 1640,
        "open_order_count": 2,
        "due_soon_count": 1,
        "backlog_value": 688800.0,
        "gross_margin_value": 278800.0,
        "forecast_4w_qty": 3187,
        "finished_goods_available": 250,
        "coverage_days": 2.2,
        "target_days_of_cover": 16.0,
        "material_status": "critical",
        "capacity_line_id": "LINE-UNIVERSAL-A",
        "weekly_capacity_qty": 9975,
        "capacity_gap_qty": 0,
        "status": "critical",
        "recommended_action": "Hold release and resolve material shortage"
      },
      {
        "product_id": "FG-OPS-C300",
        "product_name": "Fluid Service Kit C300",
        "planning_policy": "make_to_stock",
        "open_order_qty": 1220,
        "open_order_count": 2,
        "due_soon_count": 1,
        "backlog_value": 378200.0,
        "gross_margin_value": 161040.0,
        "forecast_4w_qty": 2696,
        "finished_goods_available": 85,
        "coverage_days": 0.9,
        "target_days_of_cover": 22.0,
        "material_status": "critical",
        "capacity_line_id": "LINE-FLEX-CELL-B",
        "weekly_capacity_qty": 7925,
        "capacity_gap_qty": 0,
        "status": "critical",
        "recommended_action": "Hold release and resolve material shortage"
      },
      {
        "product_id": "FG-OPS-D400",
        "product_name": "Inspection Fixture D400",
        "planning_policy": "engineer_to_order",
        "open_order_qty": 300,
        "open_order_count": 2,
        "due_soon_count": 1,
        "backlog_value": 384000.0,
        "gross_margin_value": 147000.0,
        "forecast_4w_qty": 458,
        "finished_goods_available": 4,
        "coverage_days": 0.2,
        "target_days_of_cover": 30.0,
        "material_status": "watch",
        "capacity_line_id": "LINE-FLEX-CELL-B",
        "weekly_capacity_qty": 7925,
        "capacity_gap_qty": 0,
        "status": "critical",
        "recommended_action": "Release through normal S&OP gate"
      }
    ],
    "operating_loop": [
      {
        "stage": "Sales",
        "status": "active",
        "evidence": "8 open demo orders",
        "action": "Confirm priority and due-date risk."
      },
      {
        "stage": "Planning",
        "status": "watch",
        "evidence": "4 forecast series",
        "action": "Reconcile demand, frozen plan and line capacity weekly."
      },
      {
        "stage": "Procurement",
        "status": "watch",
        "evidence": "4 watch components",
        "action": "Focus on supplier ETAs that change release gates."
      },
      {
        "stage": "Warehouse",
        "status": "active",
        "evidence": "20 material stock rows",
        "action": "Keep source-row trace for every coverage decision."
      },
      {
        "stage": "Production",
        "status": "watch",
        "evidence": "24h deterministic line simulations",
        "action": "Use bottleneck report before increasing release quantity."
      },
      {
        "stage": "Compliance",
        "status": "watch",
        "evidence": "4 external signals",
        "action": "Review official-source policy matches before shipment release."
      },
      {
        "stage": "Intelligence",
        "status": "active",
        "evidence": "15 registered tools",
        "action": "Route questions to deterministic tools before model summarization."
      }
    ],
    "alerts": [
      {
        "id": "OPS-RISK-001",
        "severity": "high",
        "area": "supply",
        "title": "Sensor dock-date uncertainty",
        "action": "Procurement",
        "source": "supplier_delivery_records"
      },
      {
        "id": "OPS-RISK-002",
        "severity": "medium",
        "area": "capacity",
        "title": "OP-40 buffer pressure",
        "action": "Manufacturing Engineering",
        "source": "simulation_reports"
      },
      {
        "id": "OPS-RISK-003",
        "severity": "medium",
        "area": "compliance",
        "title": "Export declaration field readiness",
        "action": "Trade Compliance",
        "source": "policy_signals"
      },
      {
        "id": "OPS-RISK-004",
        "severity": "medium",
        "area": "planning",
        "title": "Demand trend exceeds frozen plan",
        "action": "Planning",
        "source": "demand_history"
      },
      {
        "id": "OPS-RISK-005",
        "severity": "low",
        "area": "inventory",
        "title": "Packaging surplus cash lock",
        "action": "Warehouse",
        "source": "inventory_snapshots"
      }
    ],
    "forecast_summary": {
      "series_count": 4,
      "total_forecast_qty": 10769,
      "total_forecast_revenue": 6568620.0
    },
    "policy_summary": {
      "signal_count": 4,
      "actionable_count": 3,
      "jurisdictions": [
        "China",
        "United States"
      ]
    }
  },
  "demandForecast": {
    "generated_at": "2026-06-07T08:00:00+00:00",
    "horizon_weeks": 4,
    "model_registry": [
      {
        "model_id": "baseline-seasonal-trend-v1",
        "status": "active",
        "explainability": "moving average, trend and bounded interval"
      },
      {
        "model_id": "timesfm-adapter",
        "status": "planned_adapter",
        "explainability": "requires holdout evaluation and quantile calibration before production use"
      }
    ],
    "series": [
      {
        "product_id": "FG-OPS-A100",
        "product_name": "Modular Control Kit A100",
        "forecast_family": "modular_controls",
        "model": "seasonal_naive_with_trend",
        "recent_average_qty": 982.5,
        "trend_per_week": 50.0,
        "market_signal_index": 1.0,
        "history": [
          {
            "week_start": "2026-04-13",
            "product_id": "FG-OPS-A100",
            "booked_qty": 720,
            "shipped_qty": 690,
            "backlog_qty": 260,
            "market_signal_index": 0.78
          },
          {
            "week_start": "2026-04-20",
            "product_id": "FG-OPS-A100",
            "booked_qty": 760,
            "shipped_qty": 700,
            "backlog_qty": 320,
            "market_signal_index": 0.81
          },
          {
            "week_start": "2026-04-27",
            "product_id": "FG-OPS-A100",
            "booked_qty": 810,
            "shipped_qty": 740,
            "backlog_qty": 390,
            "market_signal_index": 0.86
          },
          {
            "week_start": "2026-05-04",
            "product_id": "FG-OPS-A100",
            "booked_qty": 840,
            "shipped_qty": 790,
            "backlog_qty": 440,
            "market_signal_index": 0.9
          },
          {
            "week_start": "2026-05-11",
            "product_id": "FG-OPS-A100",
            "booked_qty": 920,
            "shipped_qty": 835,
            "backlog_qty": 525,
            "market_signal_index": 0.94
          },
          {
            "week_start": "2026-05-18",
            "product_id": "FG-OPS-A100",
            "booked_qty": 960,
            "shipped_qty": 870,
            "backlog_qty": 615,
            "market_signal_index": 0.96
          },
          {
            "week_start": "2026-05-25",
            "product_id": "FG-OPS-A100",
            "booked_qty": 1010,
            "shipped_qty": 900,
            "backlog_qty": 725,
            "market_signal_index": 0.98
          },
          {
            "week_start": "2026-06-01",
            "product_id": "FG-OPS-A100",
            "booked_qty": 1040,
            "shipped_qty": 930,
            "backlog_qty": 835,
            "market_signal_index": 1.0
          }
        ],
        "forecast": [
          {
            "week_start": "2026-06-08",
            "forecast_qty": 1032,
            "p10_qty": 908,
            "p90_qty": 1187,
            "forecast_revenue": 887520.0
          },
          {
            "week_start": "2026-06-15",
            "forecast_qty": 1082,
            "p10_qty": 952,
            "p90_qty": 1244,
            "forecast_revenue": 930520.0
          },
          {
            "week_start": "2026-06-22",
            "forecast_qty": 1132,
            "p10_qty": 996,
            "p90_qty": 1302,
            "forecast_revenue": 973520.0
          },
          {
            "week_start": "2026-06-29",
            "forecast_qty": 1182,
            "p10_qty": 1040,
            "p90_qty": 1359,
            "forecast_revenue": 1016520.0
          }
        ],
        "horizon_weeks": 4,
        "timesfm_ready": {
          "interface": "univariate_or_xreg_time_series",
          "context_column": "booked_qty",
          "timestamp_column": "week_start",
          "entity_column": "product_id",
          "future_covariates": [
            "market_signal_index",
            "calendar_week",
            "policy_risk_score"
          ],
          "status": "adapter_stub",
          "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
        }
      },
      {
        "product_id": "FG-OPS-B200",
        "product_name": "Sensor Pack B200",
        "forecast_family": "sensor_packs",
        "model": "seasonal_naive_with_trend",
        "recent_average_qty": 748.75,
        "trend_per_week": 24.69,
        "market_signal_index": 0.87,
        "history": [
          {
            "week_start": "2026-04-13",
            "product_id": "FG-OPS-B200",
            "booked_qty": 610,
            "shipped_qty": 620,
            "backlog_qty": 180,
            "market_signal_index": 0.72
          },
          {
            "week_start": "2026-04-20",
            "product_id": "FG-OPS-B200",
            "booked_qty": 650,
            "shipped_qty": 635,
            "backlog_qty": 195,
            "market_signal_index": 0.74
          },
          {
            "week_start": "2026-04-27",
            "product_id": "FG-OPS-B200",
            "booked_qty": 640,
            "shipped_qty": 645,
            "backlog_qty": 190,
            "market_signal_index": 0.73
          },
          {
            "week_start": "2026-05-04",
            "product_id": "FG-OPS-B200",
            "booked_qty": 700,
            "shipped_qty": 660,
            "backlog_qty": 230,
            "market_signal_index": 0.78
          },
          {
            "week_start": "2026-05-11",
            "product_id": "FG-OPS-B200",
            "booked_qty": 735,
            "shipped_qty": 690,
            "backlog_qty": 275,
            "market_signal_index": 0.82
          },
          {
            "week_start": "2026-05-18",
            "product_id": "FG-OPS-B200",
            "booked_qty": 710,
            "shipped_qty": 700,
            "backlog_qty": 285,
            "market_signal_index": 0.8
          },
          {
            "week_start": "2026-05-25",
            "product_id": "FG-OPS-B200",
            "booked_qty": 760,
            "shipped_qty": 720,
            "backlog_qty": 325,
            "market_signal_index": 0.84
          },
          {
            "week_start": "2026-06-01",
            "product_id": "FG-OPS-B200",
            "booked_qty": 790,
            "shipped_qty": 735,
            "backlog_qty": 380,
            "market_signal_index": 0.87
          }
        ],
        "forecast": [
          {
            "week_start": "2026-06-08",
            "forecast_qty": 760,
            "p10_qty": 669,
            "p90_qty": 874,
            "forecast_revenue": 319200.0
          },
          {
            "week_start": "2026-06-15",
            "forecast_qty": 784,
            "p10_qty": 690,
            "p90_qty": 902,
            "forecast_revenue": 329280.0
          },
          {
            "week_start": "2026-06-22",
            "forecast_qty": 809,
            "p10_qty": 712,
            "p90_qty": 930,
            "forecast_revenue": 339780.0
          },
          {
            "week_start": "2026-06-29",
            "forecast_qty": 834,
            "p10_qty": 734,
            "p90_qty": 959,
            "forecast_revenue": 350280.0
          }
        ],
        "horizon_weeks": 4,
        "timesfm_ready": {
          "interface": "univariate_or_xreg_time_series",
          "context_column": "booked_qty",
          "timestamp_column": "week_start",
          "entity_column": "product_id",
          "future_covariates": [
            "market_signal_index",
            "calendar_week",
            "policy_risk_score"
          ],
          "status": "adapter_stub",
          "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
        }
      },
      {
        "product_id": "FG-OPS-C300",
        "product_name": "Fluid Service Kit C300",
        "forecast_family": "service_kits",
        "model": "seasonal_naive_with_trend",
        "recent_average_qty": 598.75,
        "trend_per_week": 32.5,
        "market_signal_index": 0.93,
        "history": [
          {
            "week_start": "2026-04-13",
            "product_id": "FG-OPS-C300",
            "booked_qty": 430,
            "shipped_qty": 420,
            "backlog_qty": 150,
            "market_signal_index": 0.66
          },
          {
            "week_start": "2026-04-20",
            "product_id": "FG-OPS-C300",
            "booked_qty": 455,
            "shipped_qty": 440,
            "backlog_qty": 165,
            "market_signal_index": 0.69
          },
          {
            "week_start": "2026-04-27",
            "product_id": "FG-OPS-C300",
            "booked_qty": 470,
            "shipped_qty": 450,
            "backlog_qty": 185,
            "market_signal_index": 0.71
          },
          {
            "week_start": "2026-05-04",
            "product_id": "FG-OPS-C300",
            "booked_qty": 520,
            "shipped_qty": 470,
            "backlog_qty": 235,
            "market_signal_index": 0.79
          },
          {
            "week_start": "2026-05-11",
            "product_id": "FG-OPS-C300",
            "booked_qty": 560,
            "shipped_qty": 500,
            "backlog_qty": 295,
            "market_signal_index": 0.84
          },
          {
            "week_start": "2026-05-18",
            "product_id": "FG-OPS-C300",
            "booked_qty": 590,
            "shipped_qty": 520,
            "backlog_qty": 365,
            "market_signal_index": 0.88
          },
          {
            "week_start": "2026-05-25",
            "product_id": "FG-OPS-C300",
            "booked_qty": 610,
            "shipped_qty": 535,
            "backlog_qty": 440,
            "market_signal_index": 0.9
          },
          {
            "week_start": "2026-06-01",
            "product_id": "FG-OPS-C300",
            "booked_qty": 635,
            "shipped_qty": 550,
            "backlog_qty": 525,
            "market_signal_index": 0.93
          }
        ],
        "forecast": [
          {
            "week_start": "2026-06-08",
            "forecast_qty": 625,
            "p10_qty": 550,
            "p90_qty": 719,
            "forecast_revenue": 193750.0
          },
          {
            "week_start": "2026-06-15",
            "forecast_qty": 658,
            "p10_qty": 579,
            "p90_qty": 757,
            "forecast_revenue": 203980.0
          },
          {
            "week_start": "2026-06-22",
            "forecast_qty": 690,
            "p10_qty": 607,
            "p90_qty": 793,
            "forecast_revenue": 213900.0
          },
          {
            "week_start": "2026-06-29",
            "forecast_qty": 723,
            "p10_qty": 636,
            "p90_qty": 831,
            "forecast_revenue": 224130.0
          }
        ],
        "horizon_weeks": 4,
        "timesfm_ready": {
          "interface": "univariate_or_xreg_time_series",
          "context_column": "booked_qty",
          "timestamp_column": "week_start",
          "entity_column": "product_id",
          "future_covariates": [
            "market_signal_index",
            "calendar_week",
            "policy_risk_score"
          ],
          "status": "adapter_stub",
          "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
        }
      },
      {
        "product_id": "FG-OPS-D400",
        "product_name": "Inspection Fixture D400",
        "forecast_family": "inspection_fixtures",
        "model": "seasonal_naive_with_trend",
        "recent_average_qty": 100.0,
        "trend_per_week": 6.94,
        "market_signal_index": 0.77,
        "history": [
          {
            "week_start": "2026-04-13",
            "product_id": "FG-OPS-D400",
            "booked_qty": 65,
            "shipped_qty": 58,
            "backlog_qty": 34,
            "market_signal_index": 0.55
          },
          {
            "week_start": "2026-04-20",
            "product_id": "FG-OPS-D400",
            "booked_qty": 70,
            "shipped_qty": 62,
            "backlog_qty": 42,
            "market_signal_index": 0.58
          },
          {
            "week_start": "2026-04-27",
            "product_id": "FG-OPS-D400",
            "booked_qty": 72,
            "shipped_qty": 66,
            "backlog_qty": 48,
            "market_signal_index": 0.59
          },
          {
            "week_start": "2026-05-04",
            "product_id": "FG-OPS-D400",
            "booked_qty": 82,
            "shipped_qty": 70,
            "backlog_qty": 60,
            "market_signal_index": 0.64
          },
          {
            "week_start": "2026-05-11",
            "product_id": "FG-OPS-D400",
            "booked_qty": 95,
            "shipped_qty": 75,
            "backlog_qty": 80,
            "market_signal_index": 0.7
          },
          {
            "week_start": "2026-05-18",
            "product_id": "FG-OPS-D400",
            "booked_qty": 88,
            "shipped_qty": 82,
            "backlog_qty": 86,
            "market_signal_index": 0.68
          },
          {
            "week_start": "2026-05-25",
            "product_id": "FG-OPS-D400",
            "booked_qty": 105,
            "shipped_qty": 86,
            "backlog_qty": 105,
            "market_signal_index": 0.74
          },
          {
            "week_start": "2026-06-01",
            "product_id": "FG-OPS-D400",
            "booked_qty": 112,
            "shipped_qty": 90,
            "backlog_qty": 127,
            "market_signal_index": 0.77
          }
        ],
        "forecast": [
          {
            "week_start": "2026-06-08",
            "forecast_qty": 104,
            "p10_qty": 92,
            "p90_qty": 120,
            "forecast_revenue": 133120.0
          },
          {
            "week_start": "2026-06-15",
            "forecast_qty": 111,
            "p10_qty": 98,
            "p90_qty": 128,
            "forecast_revenue": 142080.0
          },
          {
            "week_start": "2026-06-22",
            "forecast_qty": 118,
            "p10_qty": 104,
            "p90_qty": 136,
            "forecast_revenue": 151040.0
          },
          {
            "week_start": "2026-06-29",
            "forecast_qty": 125,
            "p10_qty": 110,
            "p90_qty": 144,
            "forecast_revenue": 160000.0
          }
        ],
        "horizon_weeks": 4,
        "timesfm_ready": {
          "interface": "univariate_or_xreg_time_series",
          "context_column": "booked_qty",
          "timestamp_column": "week_start",
          "entity_column": "product_id",
          "future_covariates": [
            "market_signal_index",
            "calendar_week",
            "policy_risk_score"
          ],
          "status": "adapter_stub",
          "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
        }
      }
    ],
    "summary": {
      "series_count": 4,
      "total_forecast_qty": 10769,
      "total_forecast_revenue": 6568620.0
    }
  },
  "policySignals": {
    "generated_at": "2026-06-07T08:00:00+00:00",
    "adapter_contract": {
      "mode": "official-source-index-demo",
      "allowed_sources": [
        "customs.gov.cn",
        "cbp.gov"
      ],
      "production_rule": "Fetch official feeds through a reviewed adapter, cache source metadata, and keep model summaries separate from source text."
    },
    "signals": [
      {
        "signal_id": "POL-GACC-2026-057",
        "source_name": "General Administration of Customs of China",
        "source_type": "customs_announcement",
        "region": "CN",
        "jurisdiction": "China",
        "title": "Random inspection of selected import and export commodities outside statutory inspection scope",
        "published_at": "2026-05-08",
        "effective_at": "2026-06-01",
        "risk_level": "medium",
        "relevance_tags": [
          "inspection",
          "import_export",
          "lead_time"
        ],
        "affected_materials": [
          "MAT-ENC-A100",
          "MAT-PACK-STD"
        ],
        "summary": "Inspection-policy changes can change dock-to-stock assumptions and should be modeled as lead-time uncertainty.",
        "recommended_action": "Increase receiving buffer for affected lanes until the external signal clears.",
        "source_url": "https://www.customs.gov.cn/customs/2026-05/08/article_2026050820254669719.html",
        "adapter_mode": "official_source_link",
        "affected_products": [
          "FG-OPS-A100",
          "FG-OPS-B200",
          "FG-OPS-C300"
        ],
        "matched_open_orders": [
          "SO-2026-OPS-001",
          "SO-2026-OPS-002",
          "SO-2026-OPS-003",
          "SO-2026-OPS-005",
          "SO-2026-OPS-006",
          "SO-2026-OPS-007"
        ]
      },
      {
        "signal_id": "POL-GACC-2026-040",
        "source_name": "General Administration of Customs of China",
        "source_type": "customs_announcement",
        "region": "CN",
        "jurisdiction": "China",
        "title": "Export declaration field adjustment",
        "published_at": "2026-04-16",
        "effective_at": "2026-05-16",
        "risk_level": "watch",
        "relevance_tags": [
          "export_declaration",
          "data_quality",
          "compliance"
        ],
        "affected_materials": [
          "MAT-FIRMWARE-CFG",
          "MAT-LABEL-SERIAL"
        ],
        "summary": "Declaration-field changes should be represented as master-data completeness checks before shipment booking.",
        "recommended_action": "Add declaration-field validation to the shipment release checklist.",
        "source_url": "https://www.customs.gov.cn/customs/2026-04/16/article_2026041610330222871.html",
        "adapter_mode": "official_source_link",
        "affected_products": [
          "FG-OPS-A100"
        ],
        "matched_open_orders": [
          "SO-2026-OPS-001",
          "SO-2026-OPS-005"
        ]
      },
      {
        "signal_id": "POL-GACC-2026-078",
        "source_name": "General Administration of Customs of China",
        "source_type": "customs_announcement",
        "region": "CN",
        "jurisdiction": "China",
        "title": "Export declaration requirements for unmanned aircraft and related items",
        "published_at": "2026-06-09",
        "effective_at": "2026-07-01",
        "risk_level": "watch",
        "relevance_tags": [
          "export_control",
          "dual_use",
          "sensor",
          "customs_declaration"
        ],
        "affected_materials": [
          "MAT-SENSOR-IO",
          "MAT-PCB-CTRL"
        ],
        "summary": "A policy-source adapter should flag export-control wording that may affect sensor, controller, or inspection-system shipments.",
        "recommended_action": "Route affected export orders to trade-compliance review before release.",
        "source_url": "https://www.customs.gov.cn/customs/2026-06/09/article_2026060916145031632.html",
        "adapter_mode": "official_source_link",
        "affected_products": [
          "FG-OPS-A100",
          "FG-OPS-B200"
        ],
        "matched_open_orders": [
          "SO-2026-OPS-001",
          "SO-2026-OPS-002",
          "SO-2026-OPS-005",
          "SO-2026-OPS-006"
        ]
      },
      {
        "signal_id": "POL-CBP-CSMS-ACE",
        "source_name": "U.S. Customs and Border Protection",
        "source_type": "cargo_system_message",
        "region": "US",
        "jurisdiction": "United States",
        "title": "Cargo Systems Messaging Service for ACE updates",
        "published_at": "2026-06-01",
        "effective_at": "2026-06-01",
        "risk_level": "info",
        "relevance_tags": [
          "ace",
          "customs_message",
          "shipment_status"
        ],
        "affected_materials": [
          "MAT-PCB-CTRL",
          "MAT-CONN-IO"
        ],
        "summary": "CSMS-style messages are a good official-source feed for shipment, entry, and automated-system changes.",
        "recommended_action": "Treat CSMS as an external signal adapter and bind messages to customs lanes, not to a single product template.",
        "source_url": "https://www.cbp.gov/trade/automated/cargo-systems-messaging-service",
        "adapter_mode": "official_source_index",
        "affected_products": [
          "FG-OPS-A100"
        ],
        "matched_open_orders": [
          "SO-2026-OPS-001",
          "SO-2026-OPS-005"
        ]
      }
    ],
    "summary": {
      "signal_count": 4,
      "actionable_count": 3,
      "jurisdictions": [
        "China",
        "United States"
      ]
    }
  },
  "decisionBrief": {
    "generated_at": "2026-06-07T08:00:00+00:00",
    "question": "What should operations review before the next release?",
    "executive_answer": "Operating score is 28/100. Review FG-OPS-A100 first, keep supplier ETA and policy checks in the release gate, and use the deterministic forecast as the baseline before any external model summary.",
    "actions": [
      {
        "priority": "P0",
        "owner": "Planning",
        "action": "Run S&OP exception review for FG-OPS-A100.",
        "evidence": "4428 forecast units, critical material status, 0.8 coverage days."
      },
      {
        "priority": "P1",
        "owner": "Procurement",
        "action": "Confirm ETA and alternate supply for watch components before release.",
        "evidence": "4 watch items and 10 critical items across the demo portfolio."
      },
      {
        "priority": "P1",
        "owner": "Trade Compliance",
        "action": "Screen affected export orders against current customs-policy signals.",
        "evidence": "3 actionable official-source signals are linked to product/material context."
      },
      {
        "priority": "P2",
        "owner": "Manufacturing Engineering",
        "action": "Review bottleneck buffer settings before approving demand upside.",
        "evidence": "Line simulation links throughput, waiting and blocking metrics to the release decision."
      }
    ],
    "analysis_lanes": [
      {
        "lane": "Demand",
        "signal": "10769 units forecast over 4 weeks",
        "risk": "trend drift"
      },
      {
        "lane": "Supply",
        "signal": "4 watch items",
        "risk": "release delay"
      },
      {
        "lane": "Capacity",
        "signal": "24h line simulation available",
        "risk": "buffer and bottleneck pressure"
      },
      {
        "lane": "Compliance",
        "signal": "4 policy signals",
        "risk": "declaration or inspection change"
      },
      {
        "lane": "Cash",
        "signal": "$3,042,000 open order value",
        "risk": "inventory and backlog tradeoff"
      }
    ],
    "source_evidence": {
      "orders": 8,
      "demand_history_rows": 32,
      "inventory_rows": 20,
      "policy_signals": 4,
      "internal_issues": 5
    },
    "model_boundary": {
      "llm_status": "optional_adapter",
      "safe_default": "deterministic_tools_first",
      "contract": "A model may summarize retrieved evidence and propose next questions, but source-linked calculations remain owned by domain functions."
    }
  },
  "releaseGate": {
    "generated_at": "2026-06-07T08:00:00+00:00",
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
    "product_id": "FG-OPS-A100",
    "quantity": 1200.0,
    "decision": "release_with_controls",
    "checks": [
      {
        "check_id": "material_coverage",
        "name": "Material coverage",
        "status": "review",
        "owner": "Planning",
        "evidence": "4 covered, 2 watch, 0 critical.",
        "action": "release with follow-up"
      },
      {
        "check_id": "capacity_fit",
        "name": "Capacity fit",
        "status": "pass",
        "owner": "Manufacturing Engineering",
        "evidence": "9,975 weekly simulated capacity vs 1,200 order units due in 11 days.",
        "action": "Release through normal capacity window"
      },
      {
        "check_id": "policy_signal",
        "name": "Policy and customs signal",
        "status": "review",
        "owner": "Trade Compliance",
        "evidence": "3 actionable official-source signals linked to the portfolio.",
        "action": "Screen affected materials before shipment release."
      },
      {
        "check_id": "quality_hold",
        "name": "Quality hold",
        "status": "review",
        "owner": "Quality",
        "evidence": "Quality bottleneck signal at OP-40.",
        "action": "Confirm first-piece and serialized label controls before export."
      },
      {
        "check_id": "source_trace",
        "name": "Source trace completeness",
        "status": "pass",
        "owner": "Data Steward",
        "evidence": "17 BOM, stock, inbound and supplier refs linked.",
        "action": "Keep source-row evidence attached to the notice package."
      },
      {
        "check_id": "human_approval",
        "name": "Human approval",
        "status": "pending",
        "owner": "Operations Manager",
        "evidence": "Public demo does not auto-approve production or shipment release.",
        "action": "Approve after material, policy and quality review notes are closed."
      }
    ],
    "summary": {
      "pass": 2,
      "review": 3,
      "pending": 1,
      "blocked": 0
    },
    "recommended_next_step": "Close review and approval checks before exporting the final notice package.",
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
  "scenarioProfiles": [
    {
      "profile_id": "manufacturing-assembly",
      "name": "Manufacturing Assembly",
      "domain": "discrete_manufacturing",
      "primary_users": [
        "Planner",
        "Production Manager",
        "Warehouse Lead",
        "Procurement"
      ],
      "decision_loop": [
        "Demand",
        "Material gate",
        "Capacity",
        "Release",
        "Trace"
      ],
      "required_sources": [
        "ERP orders",
        "BOM export",
        "WMS stock",
        "MES output",
        "Supplier ETA"
      ],
      "release_controls": [
        "material_coverage",
        "capacity_fit",
        "quality_hold",
        "policy_signal",
        "human_approval"
      ],
      "sample_products": [
        "Modular control kit",
        "Sensor pack",
        "Service kit"
      ],
      "status": "active_demo",
      "source_trace": {
        "source_file": "scenario_profiles.json",
        "source_row": 1,
        "source_column": "profile_id"
      }
    },
    {
      "profile_id": "warehouse-fulfillment",
      "name": "Warehouse Fulfillment",
      "domain": "fulfillment_operations",
      "primary_users": [
        "Fulfillment Lead",
        "Inventory Analyst",
        "Customer Service",
        "Compliance"
      ],
      "decision_loop": [
        "Order promise",
        "Pick readiness",
        "Carrier plan",
        "Exception queue",
        "Shipment release"
      ],
      "required_sources": [
        "Order queue",
        "Stock by bin",
        "Carrier plan",
        "Exception notes",
        "Policy signals"
      ],
      "release_controls": [
        "stock_available",
        "allocation_lock",
        "carrier_cutoff",
        "policy_signal",
        "human_approval"
      ],
      "sample_products": [
        "Launch kit",
        "Replacement pack",
        "Regional bundle"
      ],
      "status": "config_ready",
      "source_trace": {
        "source_file": "scenario_profiles.json",
        "source_row": 2,
        "source_column": "profile_id"
      }
    },
    {
      "profile_id": "maintenance-kit",
      "name": "Maintenance Kit Operations",
      "domain": "service_parts",
      "primary_users": [
        "Service Planner",
        "Parts Coordinator",
        "Field Supervisor",
        "Supplier Manager"
      ],
      "decision_loop": [
        "Service demand",
        "Kit completeness",
        "Vendor ETA",
        "Field date",
        "Dispatch gate"
      ],
      "required_sources": [
        "Service tickets",
        "Kit BOM",
        "Parts stock",
        "Vendor ETA",
        "Technician calendar"
      ],
      "release_controls": [
        "kit_complete",
        "substitution_review",
        "field_date_fit",
        "policy_signal",
        "human_approval"
      ],
      "sample_products": [
        "Preventive maintenance kit",
        "Emergency repair kit",
        "Inspection kit"
      ],
      "status": "config_ready",
      "source_trace": {
        "source_file": "scenario_profiles.json",
        "source_row": 3,
        "source_column": "profile_id"
      }
    },
    {
      "profile_id": "quality-lab",
      "name": "Quality Lab And Compliance Review",
      "domain": "quality_operations",
      "primary_users": [
        "Quality Engineer",
        "Lab Coordinator",
        "Compliance Owner",
        "Operations Lead"
      ],
      "decision_loop": [
        "Sample intake",
        "Test capacity",
        "Hold decision",
        "Certificate review",
        "Release evidence"
      ],
      "required_sources": [
        "Sample log",
        "Test method",
        "Lab capacity",
        "Hold list",
        "Certificate template"
      ],
      "release_controls": [
        "test_complete",
        "hold_clear",
        "certificate_ready",
        "policy_signal",
        "human_approval"
      ],
      "sample_products": [
        "Inspection fixture",
        "Calibration bundle",
        "Serialized sample"
      ],
      "status": "planned_demo",
      "source_trace": {
        "source_file": "scenario_profiles.json",
        "source_row": 4,
        "source_column": "profile_id"
      }
    }
  ],
  "internalIssues": [
    {
      "issue_id": "OPS-RISK-001",
      "area": "supply",
      "severity": "high",
      "title": "Sensor dock-date uncertainty",
      "symptom": "MAT-SENSOR-IO has only 1.03x coverage for the current high-priority order.",
      "linked_entity": "MAT-SENSOR-IO",
      "owner": "Procurement",
      "status": "open",
      "source": "supplier_delivery_records",
      "created_at": "2026-06-07"
    },
    {
      "issue_id": "OPS-RISK-002",
      "area": "capacity",
      "severity": "medium",
      "title": "OP-40 buffer pressure",
      "symptom": "The line simulation shows OP-40 as the throughput bottleneck with elevated blocking time.",
      "linked_entity": "OP-40",
      "owner": "Manufacturing Engineering",
      "status": "open",
      "source": "simulation_reports",
      "created_at": "2026-06-07"
    },
    {
      "issue_id": "OPS-RISK-003",
      "area": "compliance",
      "severity": "medium",
      "title": "Export declaration field readiness",
      "symptom": "External policy signal requires export declaration fields to be checked before shipment release.",
      "linked_entity": "POL-GACC-2026-040",
      "owner": "Trade Compliance",
      "status": "open",
      "source": "policy_signals",
      "created_at": "2026-06-07"
    },
    {
      "issue_id": "OPS-RISK-004",
      "area": "planning",
      "severity": "medium",
      "title": "Demand trend exceeds frozen plan",
      "symptom": "A100 and C300 booked demand has grown for four consecutive weeks.",
      "linked_entity": "demand_history",
      "owner": "Planning",
      "status": "open",
      "source": "demand_history",
      "created_at": "2026-06-07"
    },
    {
      "issue_id": "OPS-RISK-005",
      "area": "inventory",
      "severity": "low",
      "title": "Packaging surplus cash lock",
      "symptom": "MAT-PACK-STD has surplus coverage and should be excluded from urgent replenishment.",
      "linked_entity": "MAT-PACK-STD",
      "owner": "Warehouse",
      "status": "monitor",
      "source": "inventory_snapshots",
      "created_at": "2026-06-07"
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
      "name": "build_control_tower_overview",
      "description": "Build a cross-functional S&OP, inventory, capacity, compliance and cash view.",
      "backend": "build_control_tower_overview",
      "input_schema": {
        "type": "object",
        "properties": {}
      },
      "output_keys": [
        "operating_score",
        "kpis",
        "product_health"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "forecast_demand",
      "description": "Forecast demand with a deterministic baseline and TimesFM-ready series contract.",
      "backend": "forecast_demand",
      "input_schema": {
        "type": "object",
        "properties": {
          "product_id": {
            "type": "string"
          },
          "horizon_weeks": {
            "type": "integer"
          }
        }
      },
      "output_keys": [
        "series",
        "summary",
        "model_registry"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "search_policy_signals",
      "description": "Search official-source policy and customs signals linked to products and materials.",
      "backend": "search_policy_signals",
      "input_schema": {
        "type": "object",
        "properties": {
          "query": {
            "type": "string"
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "output_keys": [
        "signals",
        "summary"
      ],
      "mode": "deterministic_mock",
      "requires_source_refs": true
    },
    {
      "name": "generate_decision_brief",
      "description": "Generate a source-backed operations decision brief.",
      "backend": "generate_decision_brief",
      "input_schema": {
        "type": "object",
        "properties": {
          "question": {
            "type": "string"
          }
        }
      },
      "output_keys": [
        "executive_answer",
        "actions",
        "analysis_lanes"
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
    "answer": "Result: 4-week forecast is 10,769 units across 4 series. Evidence: baseline model is active and TimesFM adapter is planned_adapter. Next check: compare forecast upside with material gates and line capacity.",
    "trace": {
      "trace_id": "TRC-7FE60675",
      "user_question": "Give me a control tower decision brief for demand, supply and capacity.",
      "question": "Give me a control tower decision brief for demand, supply and capacity.",
      "selected_intent": "demand_forecast",
      "workflow": "demand_forecast_review",
      "workflow_name": "demand_forecast_review",
      "selected_tools": [
        "forecast_demand",
        "build_control_tower_overview"
      ],
      "tools": [
        "forecast_demand",
        "build_control_tower_overview"
      ],
      "tool_calls": [
        {
          "tool_name": "forecast_demand",
          "input_json": {
            "horizon_weeks": 4
          },
          "output_json": {
            "generated_at": "2026-06-07T08:00:00+00:00",
            "horizon_weeks": 4,
            "model_registry": [
              {
                "model_id": "baseline-seasonal-trend-v1",
                "status": "active",
                "explainability": "moving average, trend and bounded interval"
              },
              {
                "model_id": "timesfm-adapter",
                "status": "planned_adapter",
                "explainability": "requires holdout evaluation and quantile calibration before production use"
              }
            ],
            "series": [
              {
                "product_id": "FG-OPS-A100",
                "product_name": "Modular Control Kit A100",
                "forecast_family": "modular_controls",
                "model": "seasonal_naive_with_trend",
                "recent_average_qty": 982.5,
                "trend_per_week": 50.0,
                "market_signal_index": 1.0,
                "history": [
                  {
                    "week_start": "2026-04-13",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 720,
                    "shipped_qty": 690,
                    "backlog_qty": 260,
                    "market_signal_index": 0.78
                  },
                  {
                    "week_start": "2026-04-20",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 760,
                    "shipped_qty": 700,
                    "backlog_qty": 320,
                    "market_signal_index": 0.81
                  },
                  {
                    "week_start": "2026-04-27",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 810,
                    "shipped_qty": 740,
                    "backlog_qty": 390,
                    "market_signal_index": 0.86
                  },
                  {
                    "week_start": "2026-05-04",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 840,
                    "shipped_qty": 790,
                    "backlog_qty": 440,
                    "market_signal_index": 0.9
                  },
                  {
                    "week_start": "2026-05-11",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 920,
                    "shipped_qty": 835,
                    "backlog_qty": 525,
                    "market_signal_index": 0.94
                  },
                  {
                    "week_start": "2026-05-18",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 960,
                    "shipped_qty": 870,
                    "backlog_qty": 615,
                    "market_signal_index": 0.96
                  },
                  {
                    "week_start": "2026-05-25",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 1010,
                    "shipped_qty": 900,
                    "backlog_qty": 725,
                    "market_signal_index": 0.98
                  },
                  {
                    "week_start": "2026-06-01",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 1040,
                    "shipped_qty": 930,
                    "backlog_qty": 835,
                    "market_signal_index": 1.0
                  }
                ],
                "forecast": [
                  {
                    "week_start": "2026-06-08",
                    "forecast_qty": 1032,
                    "p10_qty": 908,
                    "p90_qty": 1187,
                    "forecast_revenue": 887520.0
                  },
                  {
                    "week_start": "2026-06-15",
                    "forecast_qty": 1082,
                    "p10_qty": 952,
                    "p90_qty": 1244,
                    "forecast_revenue": 930520.0
                  },
                  {
                    "week_start": "2026-06-22",
                    "forecast_qty": 1132,
                    "p10_qty": 996,
                    "p90_qty": 1302,
                    "forecast_revenue": 973520.0
                  },
                  {
                    "week_start": "2026-06-29",
                    "forecast_qty": 1182,
                    "p10_qty": 1040,
                    "p90_qty": 1359,
                    "forecast_revenue": 1016520.0
                  }
                ],
                "horizon_weeks": 4,
                "timesfm_ready": {
                  "interface": "univariate_or_xreg_time_series",
                  "context_column": "booked_qty",
                  "timestamp_column": "week_start",
                  "entity_column": "product_id",
                  "future_covariates": [
                    "market_signal_index",
                    "calendar_week",
                    "policy_risk_score"
                  ],
                  "status": "adapter_stub",
                  "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
                }
              },
              {
                "product_id": "FG-OPS-B200",
                "product_name": "Sensor Pack B200",
                "forecast_family": "sensor_packs",
                "model": "seasonal_naive_with_trend",
                "recent_average_qty": 748.75,
                "trend_per_week": 24.69,
                "market_signal_index": 0.87,
                "history": [
                  {
                    "week_start": "2026-04-13",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 610,
                    "shipped_qty": 620,
                    "backlog_qty": 180,
                    "market_signal_index": 0.72
                  },
                  {
                    "week_start": "2026-04-20",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 650,
                    "shipped_qty": 635,
                    "backlog_qty": 195,
                    "market_signal_index": 0.74
                  },
                  {
                    "week_start": "2026-04-27",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 640,
                    "shipped_qty": 645,
                    "backlog_qty": 190,
                    "market_signal_index": 0.73
                  },
                  {
                    "week_start": "2026-05-04",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 700,
                    "shipped_qty": 660,
                    "backlog_qty": 230,
                    "market_signal_index": 0.78
                  },
                  {
                    "week_start": "2026-05-11",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 735,
                    "shipped_qty": 690,
                    "backlog_qty": 275,
                    "market_signal_index": 0.82
                  },
                  {
                    "week_start": "2026-05-18",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 710,
                    "shipped_qty": 700,
                    "backlog_qty": 285,
                    "market_signal_index": 0.8
                  },
                  {
                    "week_start": "2026-05-25",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 760,
                    "shipped_qty": 720,
                    "backlog_qty": 325,
                    "market_signal_index": 0.84
                  },
                  {
                    "week_start": "2026-06-01",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 790,
                    "shipped_qty": 735,
                    "backlog_qty": 380,
                    "market_signal_index": 0.87
                  }
                ],
                "forecast": [
                  {
                    "week_start": "2026-06-08",
                    "forecast_qty": 760,
                    "p10_qty": 669,
                    "p90_qty": 874,
                    "forecast_revenue": 319200.0
                  },
                  {
                    "week_start": "2026-06-15",
                    "forecast_qty": 784,
                    "p10_qty": 690,
                    "p90_qty": 902,
                    "forecast_revenue": 329280.0
                  },
                  {
                    "week_start": "2026-06-22",
                    "forecast_qty": 809,
                    "p10_qty": 712,
                    "p90_qty": 930,
                    "forecast_revenue": 339780.0
                  },
                  {
                    "week_start": "2026-06-29",
                    "forecast_qty": 834,
                    "p10_qty": 734,
                    "p90_qty": 959,
                    "forecast_revenue": 350280.0
                  }
                ],
                "horizon_weeks": 4,
                "timesfm_ready": {
                  "interface": "univariate_or_xreg_time_series",
                  "context_column": "booked_qty",
                  "timestamp_column": "week_start",
                  "entity_column": "product_id",
                  "future_covariates": [
                    "market_signal_index",
                    "calendar_week",
                    "policy_risk_score"
                  ],
                  "status": "adapter_stub",
                  "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
                }
              },
              {
                "product_id": "FG-OPS-C300",
                "product_name": "Fluid Service Kit C300",
                "forecast_family": "service_kits",
                "model": "seasonal_naive_with_trend",
                "recent_average_qty": 598.75,
                "trend_per_week": 32.5,
                "market_signal_index": 0.93,
                "history": [
                  {
                    "week_start": "2026-04-13",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 430,
                    "shipped_qty": 420,
                    "backlog_qty": 150,
                    "market_signal_index": 0.66
                  },
                  {
                    "week_start": "2026-04-20",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 455,
                    "shipped_qty": 440,
                    "backlog_qty": 165,
                    "market_signal_index": 0.69
                  },
                  {
                    "week_start": "2026-04-27",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 470,
                    "shipped_qty": 450,
                    "backlog_qty": 185,
                    "market_signal_index": 0.71
                  },
                  {
                    "week_start": "2026-05-04",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 520,
                    "shipped_qty": 470,
                    "backlog_qty": 235,
                    "market_signal_index": 0.79
                  },
                  {
                    "week_start": "2026-05-11",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 560,
                    "shipped_qty": 500,
                    "backlog_qty": 295,
                    "market_signal_index": 0.84
                  },
                  {
                    "week_start": "2026-05-18",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 590,
                    "shipped_qty": 520,
                    "backlog_qty": 365,
                    "market_signal_index": 0.88
                  },
                  {
                    "week_start": "2026-05-25",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 610,
                    "shipped_qty": 535,
                    "backlog_qty": 440,
                    "market_signal_index": 0.9
                  },
                  {
                    "week_start": "2026-06-01",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 635,
                    "shipped_qty": 550,
                    "backlog_qty": 525,
                    "market_signal_index": 0.93
                  }
                ],
                "forecast": [
                  {
                    "week_start": "2026-06-08",
                    "forecast_qty": 625,
                    "p10_qty": 550,
                    "p90_qty": 719,
                    "forecast_revenue": 193750.0
                  },
                  {
                    "week_start": "2026-06-15",
                    "forecast_qty": 658,
                    "p10_qty": 579,
                    "p90_qty": 757,
                    "forecast_revenue": 203980.0
                  },
                  {
                    "week_start": "2026-06-22",
                    "forecast_qty": 690,
                    "p10_qty": 607,
                    "p90_qty": 793,
                    "forecast_revenue": 213900.0
                  },
                  {
                    "week_start": "2026-06-29",
                    "forecast_qty": 723,
                    "p10_qty": 636,
                    "p90_qty": 831,
                    "forecast_revenue": 224130.0
                  }
                ],
                "horizon_weeks": 4,
                "timesfm_ready": {
                  "interface": "univariate_or_xreg_time_series",
                  "context_column": "booked_qty",
                  "timestamp_column": "week_start",
                  "entity_column": "product_id",
                  "future_covariates": [
                    "market_signal_index",
                    "calendar_week",
                    "policy_risk_score"
                  ],
                  "status": "adapter_stub",
                  "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
                }
              },
              {
                "product_id": "FG-OPS-D400",
                "product_name": "Inspection Fixture D400",
                "forecast_family": "inspection_fixtures",
                "model": "seasonal_naive_with_trend",
                "recent_average_qty": 100.0,
                "trend_per_week": 6.94,
                "market_signal_index": 0.77,
                "history": [
                  {
                    "week_start": "2026-04-13",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 65,
                    "shipped_qty": 58,
                    "backlog_qty": 34,
                    "market_signal_index": 0.55
                  },
                  {
                    "week_start": "2026-04-20",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 70,
                    "shipped_qty": 62,
                    "backlog_qty": 42,
                    "market_signal_index": 0.58
                  },
                  {
                    "week_start": "2026-04-27",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 72,
                    "shipped_qty": 66,
                    "backlog_qty": 48,
                    "market_signal_index": 0.59
                  },
                  {
                    "week_start": "2026-05-04",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 82,
                    "shipped_qty": 70,
                    "backlog_qty": 60,
                    "market_signal_index": 0.64
                  },
                  {
                    "week_start": "2026-05-11",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 95,
                    "shipped_qty": 75,
                    "backlog_qty": 80,
                    "market_signal_index": 0.7
                  },
                  {
                    "week_start": "2026-05-18",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 88,
                    "shipped_qty": 82,
                    "backlog_qty": 86,
                    "market_signal_index": 0.68
                  },
                  {
                    "week_start": "2026-05-25",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 105,
                    "shipped_qty": 86,
                    "backlog_qty": 105,
                    "market_signal_index": 0.74
                  },
                  {
                    "week_start": "2026-06-01",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 112,
                    "shipped_qty": 90,
                    "backlog_qty": 127,
                    "market_signal_index": 0.77
                  }
                ],
                "forecast": [
                  {
                    "week_start": "2026-06-08",
                    "forecast_qty": 104,
                    "p10_qty": 92,
                    "p90_qty": 120,
                    "forecast_revenue": 133120.0
                  },
                  {
                    "week_start": "2026-06-15",
                    "forecast_qty": 111,
                    "p10_qty": 98,
                    "p90_qty": 128,
                    "forecast_revenue": 142080.0
                  },
                  {
                    "week_start": "2026-06-22",
                    "forecast_qty": 118,
                    "p10_qty": 104,
                    "p90_qty": 136,
                    "forecast_revenue": 151040.0
                  },
                  {
                    "week_start": "2026-06-29",
                    "forecast_qty": 125,
                    "p10_qty": 110,
                    "p90_qty": 144,
                    "forecast_revenue": 160000.0
                  }
                ],
                "horizon_weeks": 4,
                "timesfm_ready": {
                  "interface": "univariate_or_xreg_time_series",
                  "context_column": "booked_qty",
                  "timestamp_column": "week_start",
                  "entity_column": "product_id",
                  "future_covariates": [
                    "market_signal_index",
                    "calendar_week",
                    "policy_risk_score"
                  ],
                  "status": "adapter_stub",
                  "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
                }
              }
            ],
            "summary": {
              "series_count": 4,
              "total_forecast_qty": 10769,
              "total_forecast_revenue": 6568620.0
            }
          },
          "source_refs": [],
          "completed_at": "2026-06-07T08:00:00+00:00"
        },
        {
          "tool_name": "build_control_tower_overview",
          "input_json": {},
          "output_json": {
            "generated_at": "2026-06-07T08:00:00+00:00",
            "operating_score": 28,
            "kpis": {
              "open_order_qty": 5010,
              "open_order_value": 3042000.0,
              "gross_margin_value": 1169590.0,
              "forecast_4w_qty": 10769,
              "material_watch_items": 4,
              "material_critical_items": 10,
              "external_actionable_signals": 3,
              "open_internal_issues": 4
            },
            "product_health": [
              {
                "product_id": "FG-OPS-A100",
                "product_name": "Modular Control Kit A100",
                "planning_policy": "make_to_order",
                "open_order_qty": 1850,
                "open_order_count": 2,
                "due_soon_count": 2,
                "backlog_value": 1591000.0,
                "gross_margin_value": 582750.0,
                "forecast_4w_qty": 4428,
                "finished_goods_available": 130,
                "coverage_days": 0.8,
                "target_days_of_cover": 18.0,
                "material_status": "critical",
                "capacity_line_id": "LINE-UNIVERSAL-A",
                "weekly_capacity_qty": 9975,
                "capacity_gap_qty": 0,
                "status": "critical",
                "recommended_action": "Hold release and resolve material shortage"
              },
              {
                "product_id": "FG-OPS-B200",
                "product_name": "Sensor Pack B200",
                "planning_policy": "make_to_order",
                "open_order_qty": 1640,
                "open_order_count": 2,
                "due_soon_count": 1,
                "backlog_value": 688800.0,
                "gross_margin_value": 278800.0,
                "forecast_4w_qty": 3187,
                "finished_goods_available": 250,
                "coverage_days": 2.2,
                "target_days_of_cover": 16.0,
                "material_status": "critical",
                "capacity_line_id": "LINE-UNIVERSAL-A",
                "weekly_capacity_qty": 9975,
                "capacity_gap_qty": 0,
                "status": "critical",
                "recommended_action": "Hold release and resolve material shortage"
              },
              {
                "product_id": "FG-OPS-C300",
                "product_name": "Fluid Service Kit C300",
                "planning_policy": "make_to_stock",
                "open_order_qty": 1220,
                "open_order_count": 2,
                "due_soon_count": 1,
                "backlog_value": 378200.0,
                "gross_margin_value": 161040.0,
                "forecast_4w_qty": 2696,
                "finished_goods_available": 85,
                "coverage_days": 0.9,
                "target_days_of_cover": 22.0,
                "material_status": "critical",
                "capacity_line_id": "LINE-FLEX-CELL-B",
                "weekly_capacity_qty": 7925,
                "capacity_gap_qty": 0,
                "status": "critical",
                "recommended_action": "Hold release and resolve material shortage"
              },
              {
                "product_id": "FG-OPS-D400",
                "product_name": "Inspection Fixture D400",
                "planning_policy": "engineer_to_order",
                "open_order_qty": 300,
                "open_order_count": 2,
                "due_soon_count": 1,
                "backlog_value": 384000.0,
                "gross_margin_value": 147000.0,
                "forecast_4w_qty": 458,
                "finished_goods_available": 4,
                "coverage_days": 0.2,
                "target_days_of_cover": 30.0,
                "material_status": "watch",
                "capacity_line_id": "LINE-FLEX-CELL-B",
                "weekly_capacity_qty": 7925,
                "capacity_gap_qty": 0,
                "status": "critical",
                "recommended_action": "Release through normal S&OP gate"
              }
            ],
            "operating_loop": [
              {
                "stage": "Sales",
                "status": "active",
                "evidence": "8 open demo orders",
                "action": "Confirm priority and due-date risk."
              },
              {
                "stage": "Planning",
                "status": "watch",
                "evidence": "4 forecast series",
                "action": "Reconcile demand, frozen plan and line capacity weekly."
              },
              {
                "stage": "Procurement",
                "status": "watch",
                "evidence": "4 watch components",
                "action": "Focus on supplier ETAs that change release gates."
              },
              {
                "stage": "Warehouse",
                "status": "active",
                "evidence": "20 material stock rows",
                "action": "Keep source-row trace for every coverage decision."
              },
              {
                "stage": "Production",
                "status": "watch",
                "evidence": "24h deterministic line simulations",
                "action": "Use bottleneck report before increasing release quantity."
              },
              {
                "stage": "Compliance",
                "status": "watch",
                "evidence": "4 external signals",
                "action": "Review official-source policy matches before shipment release."
              },
              {
                "stage": "Intelligence",
                "status": "active",
                "evidence": "15 registered tools",
                "action": "Route questions to deterministic tools before model summarization."
              }
            ],
            "alerts": [
              {
                "id": "OPS-RISK-001",
                "severity": "high",
                "area": "supply",
                "title": "Sensor dock-date uncertainty",
                "action": "Procurement",
                "source": "supplier_delivery_records"
              },
              {
                "id": "OPS-RISK-002",
                "severity": "medium",
                "area": "capacity",
                "title": "OP-40 buffer pressure",
                "action": "Manufacturing Engineering",
                "source": "simulation_reports"
              },
              {
                "id": "OPS-RISK-003",
                "severity": "medium",
                "area": "compliance",
                "title": "Export declaration field readiness",
                "action": "Trade Compliance",
                "source": "policy_signals"
              },
              {
                "id": "OPS-RISK-004",
                "severity": "medium",
                "area": "planning",
                "title": "Demand trend exceeds frozen plan",
                "action": "Planning",
                "source": "demand_history"
              },
              {
                "id": "OPS-RISK-005",
                "severity": "low",
                "area": "inventory",
                "title": "Packaging surplus cash lock",
                "action": "Warehouse",
                "source": "inventory_snapshots"
              }
            ],
            "forecast_summary": {
              "series_count": 4,
              "total_forecast_qty": 10769,
              "total_forecast_revenue": 6568620.0
            },
            "policy_summary": {
              "signal_count": 4,
              "actionable_count": 3,
              "jurisdictions": [
                "China",
                "United States"
              ]
            }
          },
          "source_refs": [],
          "completed_at": "2026-06-07T08:00:00+00:00"
        }
      ],
      "source_refs": [],
      "final_answer": "Result: 4-week forecast is 10,769 units across 4 series. Evidence: baseline model is active and TimesFM adapter is planned_adapter. Next check: compare forecast upside with material gates and line capacity.",
      "status": "completed",
      "created_at": "2026-06-07T08:00:00+00:00"
    },
    "data": {
      "forecast": {
        "generated_at": "2026-06-07T08:00:00+00:00",
        "horizon_weeks": 4,
        "model_registry": [
          {
            "model_id": "baseline-seasonal-trend-v1",
            "status": "active",
            "explainability": "moving average, trend and bounded interval"
          },
          {
            "model_id": "timesfm-adapter",
            "status": "planned_adapter",
            "explainability": "requires holdout evaluation and quantile calibration before production use"
          }
        ],
        "series": [
          {
            "product_id": "FG-OPS-A100",
            "product_name": "Modular Control Kit A100",
            "forecast_family": "modular_controls",
            "model": "seasonal_naive_with_trend",
            "recent_average_qty": 982.5,
            "trend_per_week": 50.0,
            "market_signal_index": 1.0,
            "history": [
              {
                "week_start": "2026-04-13",
                "product_id": "FG-OPS-A100",
                "booked_qty": 720,
                "shipped_qty": 690,
                "backlog_qty": 260,
                "market_signal_index": 0.78
              },
              {
                "week_start": "2026-04-20",
                "product_id": "FG-OPS-A100",
                "booked_qty": 760,
                "shipped_qty": 700,
                "backlog_qty": 320,
                "market_signal_index": 0.81
              },
              {
                "week_start": "2026-04-27",
                "product_id": "FG-OPS-A100",
                "booked_qty": 810,
                "shipped_qty": 740,
                "backlog_qty": 390,
                "market_signal_index": 0.86
              },
              {
                "week_start": "2026-05-04",
                "product_id": "FG-OPS-A100",
                "booked_qty": 840,
                "shipped_qty": 790,
                "backlog_qty": 440,
                "market_signal_index": 0.9
              },
              {
                "week_start": "2026-05-11",
                "product_id": "FG-OPS-A100",
                "booked_qty": 920,
                "shipped_qty": 835,
                "backlog_qty": 525,
                "market_signal_index": 0.94
              },
              {
                "week_start": "2026-05-18",
                "product_id": "FG-OPS-A100",
                "booked_qty": 960,
                "shipped_qty": 870,
                "backlog_qty": 615,
                "market_signal_index": 0.96
              },
              {
                "week_start": "2026-05-25",
                "product_id": "FG-OPS-A100",
                "booked_qty": 1010,
                "shipped_qty": 900,
                "backlog_qty": 725,
                "market_signal_index": 0.98
              },
              {
                "week_start": "2026-06-01",
                "product_id": "FG-OPS-A100",
                "booked_qty": 1040,
                "shipped_qty": 930,
                "backlog_qty": 835,
                "market_signal_index": 1.0
              }
            ],
            "forecast": [
              {
                "week_start": "2026-06-08",
                "forecast_qty": 1032,
                "p10_qty": 908,
                "p90_qty": 1187,
                "forecast_revenue": 887520.0
              },
              {
                "week_start": "2026-06-15",
                "forecast_qty": 1082,
                "p10_qty": 952,
                "p90_qty": 1244,
                "forecast_revenue": 930520.0
              },
              {
                "week_start": "2026-06-22",
                "forecast_qty": 1132,
                "p10_qty": 996,
                "p90_qty": 1302,
                "forecast_revenue": 973520.0
              },
              {
                "week_start": "2026-06-29",
                "forecast_qty": 1182,
                "p10_qty": 1040,
                "p90_qty": 1359,
                "forecast_revenue": 1016520.0
              }
            ],
            "horizon_weeks": 4,
            "timesfm_ready": {
              "interface": "univariate_or_xreg_time_series",
              "context_column": "booked_qty",
              "timestamp_column": "week_start",
              "entity_column": "product_id",
              "future_covariates": [
                "market_signal_index",
                "calendar_week",
                "policy_risk_score"
              ],
              "status": "adapter_stub",
              "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
            }
          },
          {
            "product_id": "FG-OPS-B200",
            "product_name": "Sensor Pack B200",
            "forecast_family": "sensor_packs",
            "model": "seasonal_naive_with_trend",
            "recent_average_qty": 748.75,
            "trend_per_week": 24.69,
            "market_signal_index": 0.87,
            "history": [
              {
                "week_start": "2026-04-13",
                "product_id": "FG-OPS-B200",
                "booked_qty": 610,
                "shipped_qty": 620,
                "backlog_qty": 180,
                "market_signal_index": 0.72
              },
              {
                "week_start": "2026-04-20",
                "product_id": "FG-OPS-B200",
                "booked_qty": 650,
                "shipped_qty": 635,
                "backlog_qty": 195,
                "market_signal_index": 0.74
              },
              {
                "week_start": "2026-04-27",
                "product_id": "FG-OPS-B200",
                "booked_qty": 640,
                "shipped_qty": 645,
                "backlog_qty": 190,
                "market_signal_index": 0.73
              },
              {
                "week_start": "2026-05-04",
                "product_id": "FG-OPS-B200",
                "booked_qty": 700,
                "shipped_qty": 660,
                "backlog_qty": 230,
                "market_signal_index": 0.78
              },
              {
                "week_start": "2026-05-11",
                "product_id": "FG-OPS-B200",
                "booked_qty": 735,
                "shipped_qty": 690,
                "backlog_qty": 275,
                "market_signal_index": 0.82
              },
              {
                "week_start": "2026-05-18",
                "product_id": "FG-OPS-B200",
                "booked_qty": 710,
                "shipped_qty": 700,
                "backlog_qty": 285,
                "market_signal_index": 0.8
              },
              {
                "week_start": "2026-05-25",
                "product_id": "FG-OPS-B200",
                "booked_qty": 760,
                "shipped_qty": 720,
                "backlog_qty": 325,
                "market_signal_index": 0.84
              },
              {
                "week_start": "2026-06-01",
                "product_id": "FG-OPS-B200",
                "booked_qty": 790,
                "shipped_qty": 735,
                "backlog_qty": 380,
                "market_signal_index": 0.87
              }
            ],
            "forecast": [
              {
                "week_start": "2026-06-08",
                "forecast_qty": 760,
                "p10_qty": 669,
                "p90_qty": 874,
                "forecast_revenue": 319200.0
              },
              {
                "week_start": "2026-06-15",
                "forecast_qty": 784,
                "p10_qty": 690,
                "p90_qty": 902,
                "forecast_revenue": 329280.0
              },
              {
                "week_start": "2026-06-22",
                "forecast_qty": 809,
                "p10_qty": 712,
                "p90_qty": 930,
                "forecast_revenue": 339780.0
              },
              {
                "week_start": "2026-06-29",
                "forecast_qty": 834,
                "p10_qty": 734,
                "p90_qty": 959,
                "forecast_revenue": 350280.0
              }
            ],
            "horizon_weeks": 4,
            "timesfm_ready": {
              "interface": "univariate_or_xreg_time_series",
              "context_column": "booked_qty",
              "timestamp_column": "week_start",
              "entity_column": "product_id",
              "future_covariates": [
                "market_signal_index",
                "calendar_week",
                "policy_risk_score"
              ],
              "status": "adapter_stub",
              "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
            }
          },
          {
            "product_id": "FG-OPS-C300",
            "product_name": "Fluid Service Kit C300",
            "forecast_family": "service_kits",
            "model": "seasonal_naive_with_trend",
            "recent_average_qty": 598.75,
            "trend_per_week": 32.5,
            "market_signal_index": 0.93,
            "history": [
              {
                "week_start": "2026-04-13",
                "product_id": "FG-OPS-C300",
                "booked_qty": 430,
                "shipped_qty": 420,
                "backlog_qty": 150,
                "market_signal_index": 0.66
              },
              {
                "week_start": "2026-04-20",
                "product_id": "FG-OPS-C300",
                "booked_qty": 455,
                "shipped_qty": 440,
                "backlog_qty": 165,
                "market_signal_index": 0.69
              },
              {
                "week_start": "2026-04-27",
                "product_id": "FG-OPS-C300",
                "booked_qty": 470,
                "shipped_qty": 450,
                "backlog_qty": 185,
                "market_signal_index": 0.71
              },
              {
                "week_start": "2026-05-04",
                "product_id": "FG-OPS-C300",
                "booked_qty": 520,
                "shipped_qty": 470,
                "backlog_qty": 235,
                "market_signal_index": 0.79
              },
              {
                "week_start": "2026-05-11",
                "product_id": "FG-OPS-C300",
                "booked_qty": 560,
                "shipped_qty": 500,
                "backlog_qty": 295,
                "market_signal_index": 0.84
              },
              {
                "week_start": "2026-05-18",
                "product_id": "FG-OPS-C300",
                "booked_qty": 590,
                "shipped_qty": 520,
                "backlog_qty": 365,
                "market_signal_index": 0.88
              },
              {
                "week_start": "2026-05-25",
                "product_id": "FG-OPS-C300",
                "booked_qty": 610,
                "shipped_qty": 535,
                "backlog_qty": 440,
                "market_signal_index": 0.9
              },
              {
                "week_start": "2026-06-01",
                "product_id": "FG-OPS-C300",
                "booked_qty": 635,
                "shipped_qty": 550,
                "backlog_qty": 525,
                "market_signal_index": 0.93
              }
            ],
            "forecast": [
              {
                "week_start": "2026-06-08",
                "forecast_qty": 625,
                "p10_qty": 550,
                "p90_qty": 719,
                "forecast_revenue": 193750.0
              },
              {
                "week_start": "2026-06-15",
                "forecast_qty": 658,
                "p10_qty": 579,
                "p90_qty": 757,
                "forecast_revenue": 203980.0
              },
              {
                "week_start": "2026-06-22",
                "forecast_qty": 690,
                "p10_qty": 607,
                "p90_qty": 793,
                "forecast_revenue": 213900.0
              },
              {
                "week_start": "2026-06-29",
                "forecast_qty": 723,
                "p10_qty": 636,
                "p90_qty": 831,
                "forecast_revenue": 224130.0
              }
            ],
            "horizon_weeks": 4,
            "timesfm_ready": {
              "interface": "univariate_or_xreg_time_series",
              "context_column": "booked_qty",
              "timestamp_column": "week_start",
              "entity_column": "product_id",
              "future_covariates": [
                "market_signal_index",
                "calendar_week",
                "policy_risk_score"
              ],
              "status": "adapter_stub",
              "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
            }
          },
          {
            "product_id": "FG-OPS-D400",
            "product_name": "Inspection Fixture D400",
            "forecast_family": "inspection_fixtures",
            "model": "seasonal_naive_with_trend",
            "recent_average_qty": 100.0,
            "trend_per_week": 6.94,
            "market_signal_index": 0.77,
            "history": [
              {
                "week_start": "2026-04-13",
                "product_id": "FG-OPS-D400",
                "booked_qty": 65,
                "shipped_qty": 58,
                "backlog_qty": 34,
                "market_signal_index": 0.55
              },
              {
                "week_start": "2026-04-20",
                "product_id": "FG-OPS-D400",
                "booked_qty": 70,
                "shipped_qty": 62,
                "backlog_qty": 42,
                "market_signal_index": 0.58
              },
              {
                "week_start": "2026-04-27",
                "product_id": "FG-OPS-D400",
                "booked_qty": 72,
                "shipped_qty": 66,
                "backlog_qty": 48,
                "market_signal_index": 0.59
              },
              {
                "week_start": "2026-05-04",
                "product_id": "FG-OPS-D400",
                "booked_qty": 82,
                "shipped_qty": 70,
                "backlog_qty": 60,
                "market_signal_index": 0.64
              },
              {
                "week_start": "2026-05-11",
                "product_id": "FG-OPS-D400",
                "booked_qty": 95,
                "shipped_qty": 75,
                "backlog_qty": 80,
                "market_signal_index": 0.7
              },
              {
                "week_start": "2026-05-18",
                "product_id": "FG-OPS-D400",
                "booked_qty": 88,
                "shipped_qty": 82,
                "backlog_qty": 86,
                "market_signal_index": 0.68
              },
              {
                "week_start": "2026-05-25",
                "product_id": "FG-OPS-D400",
                "booked_qty": 105,
                "shipped_qty": 86,
                "backlog_qty": 105,
                "market_signal_index": 0.74
              },
              {
                "week_start": "2026-06-01",
                "product_id": "FG-OPS-D400",
                "booked_qty": 112,
                "shipped_qty": 90,
                "backlog_qty": 127,
                "market_signal_index": 0.77
              }
            ],
            "forecast": [
              {
                "week_start": "2026-06-08",
                "forecast_qty": 104,
                "p10_qty": 92,
                "p90_qty": 120,
                "forecast_revenue": 133120.0
              },
              {
                "week_start": "2026-06-15",
                "forecast_qty": 111,
                "p10_qty": 98,
                "p90_qty": 128,
                "forecast_revenue": 142080.0
              },
              {
                "week_start": "2026-06-22",
                "forecast_qty": 118,
                "p10_qty": 104,
                "p90_qty": 136,
                "forecast_revenue": 151040.0
              },
              {
                "week_start": "2026-06-29",
                "forecast_qty": 125,
                "p10_qty": 110,
                "p90_qty": 144,
                "forecast_revenue": 160000.0
              }
            ],
            "horizon_weeks": 4,
            "timesfm_ready": {
              "interface": "univariate_or_xreg_time_series",
              "context_column": "booked_qty",
              "timestamp_column": "week_start",
              "entity_column": "product_id",
              "future_covariates": [
                "market_signal_index",
                "calendar_week",
                "policy_risk_score"
              ],
              "status": "adapter_stub",
              "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
            }
          }
        ],
        "summary": {
          "series_count": 4,
          "total_forecast_qty": 10769,
          "total_forecast_revenue": 6568620.0
        }
      },
      "overview": {
        "generated_at": "2026-06-07T08:00:00+00:00",
        "operating_score": 28,
        "kpis": {
          "open_order_qty": 5010,
          "open_order_value": 3042000.0,
          "gross_margin_value": 1169590.0,
          "forecast_4w_qty": 10769,
          "material_watch_items": 4,
          "material_critical_items": 10,
          "external_actionable_signals": 3,
          "open_internal_issues": 4
        },
        "product_health": [
          {
            "product_id": "FG-OPS-A100",
            "product_name": "Modular Control Kit A100",
            "planning_policy": "make_to_order",
            "open_order_qty": 1850,
            "open_order_count": 2,
            "due_soon_count": 2,
            "backlog_value": 1591000.0,
            "gross_margin_value": 582750.0,
            "forecast_4w_qty": 4428,
            "finished_goods_available": 130,
            "coverage_days": 0.8,
            "target_days_of_cover": 18.0,
            "material_status": "critical",
            "capacity_line_id": "LINE-UNIVERSAL-A",
            "weekly_capacity_qty": 9975,
            "capacity_gap_qty": 0,
            "status": "critical",
            "recommended_action": "Hold release and resolve material shortage"
          },
          {
            "product_id": "FG-OPS-B200",
            "product_name": "Sensor Pack B200",
            "planning_policy": "make_to_order",
            "open_order_qty": 1640,
            "open_order_count": 2,
            "due_soon_count": 1,
            "backlog_value": 688800.0,
            "gross_margin_value": 278800.0,
            "forecast_4w_qty": 3187,
            "finished_goods_available": 250,
            "coverage_days": 2.2,
            "target_days_of_cover": 16.0,
            "material_status": "critical",
            "capacity_line_id": "LINE-UNIVERSAL-A",
            "weekly_capacity_qty": 9975,
            "capacity_gap_qty": 0,
            "status": "critical",
            "recommended_action": "Hold release and resolve material shortage"
          },
          {
            "product_id": "FG-OPS-C300",
            "product_name": "Fluid Service Kit C300",
            "planning_policy": "make_to_stock",
            "open_order_qty": 1220,
            "open_order_count": 2,
            "due_soon_count": 1,
            "backlog_value": 378200.0,
            "gross_margin_value": 161040.0,
            "forecast_4w_qty": 2696,
            "finished_goods_available": 85,
            "coverage_days": 0.9,
            "target_days_of_cover": 22.0,
            "material_status": "critical",
            "capacity_line_id": "LINE-FLEX-CELL-B",
            "weekly_capacity_qty": 7925,
            "capacity_gap_qty": 0,
            "status": "critical",
            "recommended_action": "Hold release and resolve material shortage"
          },
          {
            "product_id": "FG-OPS-D400",
            "product_name": "Inspection Fixture D400",
            "planning_policy": "engineer_to_order",
            "open_order_qty": 300,
            "open_order_count": 2,
            "due_soon_count": 1,
            "backlog_value": 384000.0,
            "gross_margin_value": 147000.0,
            "forecast_4w_qty": 458,
            "finished_goods_available": 4,
            "coverage_days": 0.2,
            "target_days_of_cover": 30.0,
            "material_status": "watch",
            "capacity_line_id": "LINE-FLEX-CELL-B",
            "weekly_capacity_qty": 7925,
            "capacity_gap_qty": 0,
            "status": "critical",
            "recommended_action": "Release through normal S&OP gate"
          }
        ],
        "operating_loop": [
          {
            "stage": "Sales",
            "status": "active",
            "evidence": "8 open demo orders",
            "action": "Confirm priority and due-date risk."
          },
          {
            "stage": "Planning",
            "status": "watch",
            "evidence": "4 forecast series",
            "action": "Reconcile demand, frozen plan and line capacity weekly."
          },
          {
            "stage": "Procurement",
            "status": "watch",
            "evidence": "4 watch components",
            "action": "Focus on supplier ETAs that change release gates."
          },
          {
            "stage": "Warehouse",
            "status": "active",
            "evidence": "20 material stock rows",
            "action": "Keep source-row trace for every coverage decision."
          },
          {
            "stage": "Production",
            "status": "watch",
            "evidence": "24h deterministic line simulations",
            "action": "Use bottleneck report before increasing release quantity."
          },
          {
            "stage": "Compliance",
            "status": "watch",
            "evidence": "4 external signals",
            "action": "Review official-source policy matches before shipment release."
          },
          {
            "stage": "Intelligence",
            "status": "active",
            "evidence": "15 registered tools",
            "action": "Route questions to deterministic tools before model summarization."
          }
        ],
        "alerts": [
          {
            "id": "OPS-RISK-001",
            "severity": "high",
            "area": "supply",
            "title": "Sensor dock-date uncertainty",
            "action": "Procurement",
            "source": "supplier_delivery_records"
          },
          {
            "id": "OPS-RISK-002",
            "severity": "medium",
            "area": "capacity",
            "title": "OP-40 buffer pressure",
            "action": "Manufacturing Engineering",
            "source": "simulation_reports"
          },
          {
            "id": "OPS-RISK-003",
            "severity": "medium",
            "area": "compliance",
            "title": "Export declaration field readiness",
            "action": "Trade Compliance",
            "source": "policy_signals"
          },
          {
            "id": "OPS-RISK-004",
            "severity": "medium",
            "area": "planning",
            "title": "Demand trend exceeds frozen plan",
            "action": "Planning",
            "source": "demand_history"
          },
          {
            "id": "OPS-RISK-005",
            "severity": "low",
            "area": "inventory",
            "title": "Packaging surplus cash lock",
            "action": "Warehouse",
            "source": "inventory_snapshots"
          }
        ],
        "forecast_summary": {
          "series_count": 4,
          "total_forecast_qty": 10769,
          "total_forecast_revenue": 6568620.0
        },
        "policy_summary": {
          "signal_count": 4,
          "actionable_count": 3,
          "jurisdictions": [
            "China",
            "United States"
          ]
        }
      }
    }
  },
  "agentTraces": [
    {
      "trace_id": "TRC-7FE60675",
      "user_question": "Give me a control tower decision brief for demand, supply and capacity.",
      "question": "Give me a control tower decision brief for demand, supply and capacity.",
      "selected_intent": "demand_forecast",
      "workflow": "demand_forecast_review",
      "workflow_name": "demand_forecast_review",
      "selected_tools": [
        "forecast_demand",
        "build_control_tower_overview"
      ],
      "tools": [
        "forecast_demand",
        "build_control_tower_overview"
      ],
      "tool_calls": [
        {
          "tool_name": "forecast_demand",
          "input_json": {
            "horizon_weeks": 4
          },
          "output_json": {
            "generated_at": "2026-06-07T08:00:00+00:00",
            "horizon_weeks": 4,
            "model_registry": [
              {
                "model_id": "baseline-seasonal-trend-v1",
                "status": "active",
                "explainability": "moving average, trend and bounded interval"
              },
              {
                "model_id": "timesfm-adapter",
                "status": "planned_adapter",
                "explainability": "requires holdout evaluation and quantile calibration before production use"
              }
            ],
            "series": [
              {
                "product_id": "FG-OPS-A100",
                "product_name": "Modular Control Kit A100",
                "forecast_family": "modular_controls",
                "model": "seasonal_naive_with_trend",
                "recent_average_qty": 982.5,
                "trend_per_week": 50.0,
                "market_signal_index": 1.0,
                "history": [
                  {
                    "week_start": "2026-04-13",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 720,
                    "shipped_qty": 690,
                    "backlog_qty": 260,
                    "market_signal_index": 0.78
                  },
                  {
                    "week_start": "2026-04-20",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 760,
                    "shipped_qty": 700,
                    "backlog_qty": 320,
                    "market_signal_index": 0.81
                  },
                  {
                    "week_start": "2026-04-27",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 810,
                    "shipped_qty": 740,
                    "backlog_qty": 390,
                    "market_signal_index": 0.86
                  },
                  {
                    "week_start": "2026-05-04",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 840,
                    "shipped_qty": 790,
                    "backlog_qty": 440,
                    "market_signal_index": 0.9
                  },
                  {
                    "week_start": "2026-05-11",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 920,
                    "shipped_qty": 835,
                    "backlog_qty": 525,
                    "market_signal_index": 0.94
                  },
                  {
                    "week_start": "2026-05-18",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 960,
                    "shipped_qty": 870,
                    "backlog_qty": 615,
                    "market_signal_index": 0.96
                  },
                  {
                    "week_start": "2026-05-25",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 1010,
                    "shipped_qty": 900,
                    "backlog_qty": 725,
                    "market_signal_index": 0.98
                  },
                  {
                    "week_start": "2026-06-01",
                    "product_id": "FG-OPS-A100",
                    "booked_qty": 1040,
                    "shipped_qty": 930,
                    "backlog_qty": 835,
                    "market_signal_index": 1.0
                  }
                ],
                "forecast": [
                  {
                    "week_start": "2026-06-08",
                    "forecast_qty": 1032,
                    "p10_qty": 908,
                    "p90_qty": 1187,
                    "forecast_revenue": 887520.0
                  },
                  {
                    "week_start": "2026-06-15",
                    "forecast_qty": 1082,
                    "p10_qty": 952,
                    "p90_qty": 1244,
                    "forecast_revenue": 930520.0
                  },
                  {
                    "week_start": "2026-06-22",
                    "forecast_qty": 1132,
                    "p10_qty": 996,
                    "p90_qty": 1302,
                    "forecast_revenue": 973520.0
                  },
                  {
                    "week_start": "2026-06-29",
                    "forecast_qty": 1182,
                    "p10_qty": 1040,
                    "p90_qty": 1359,
                    "forecast_revenue": 1016520.0
                  }
                ],
                "horizon_weeks": 4,
                "timesfm_ready": {
                  "interface": "univariate_or_xreg_time_series",
                  "context_column": "booked_qty",
                  "timestamp_column": "week_start",
                  "entity_column": "product_id",
                  "future_covariates": [
                    "market_signal_index",
                    "calendar_week",
                    "policy_risk_score"
                  ],
                  "status": "adapter_stub",
                  "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
                }
              },
              {
                "product_id": "FG-OPS-B200",
                "product_name": "Sensor Pack B200",
                "forecast_family": "sensor_packs",
                "model": "seasonal_naive_with_trend",
                "recent_average_qty": 748.75,
                "trend_per_week": 24.69,
                "market_signal_index": 0.87,
                "history": [
                  {
                    "week_start": "2026-04-13",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 610,
                    "shipped_qty": 620,
                    "backlog_qty": 180,
                    "market_signal_index": 0.72
                  },
                  {
                    "week_start": "2026-04-20",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 650,
                    "shipped_qty": 635,
                    "backlog_qty": 195,
                    "market_signal_index": 0.74
                  },
                  {
                    "week_start": "2026-04-27",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 640,
                    "shipped_qty": 645,
                    "backlog_qty": 190,
                    "market_signal_index": 0.73
                  },
                  {
                    "week_start": "2026-05-04",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 700,
                    "shipped_qty": 660,
                    "backlog_qty": 230,
                    "market_signal_index": 0.78
                  },
                  {
                    "week_start": "2026-05-11",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 735,
                    "shipped_qty": 690,
                    "backlog_qty": 275,
                    "market_signal_index": 0.82
                  },
                  {
                    "week_start": "2026-05-18",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 710,
                    "shipped_qty": 700,
                    "backlog_qty": 285,
                    "market_signal_index": 0.8
                  },
                  {
                    "week_start": "2026-05-25",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 760,
                    "shipped_qty": 720,
                    "backlog_qty": 325,
                    "market_signal_index": 0.84
                  },
                  {
                    "week_start": "2026-06-01",
                    "product_id": "FG-OPS-B200",
                    "booked_qty": 790,
                    "shipped_qty": 735,
                    "backlog_qty": 380,
                    "market_signal_index": 0.87
                  }
                ],
                "forecast": [
                  {
                    "week_start": "2026-06-08",
                    "forecast_qty": 760,
                    "p10_qty": 669,
                    "p90_qty": 874,
                    "forecast_revenue": 319200.0
                  },
                  {
                    "week_start": "2026-06-15",
                    "forecast_qty": 784,
                    "p10_qty": 690,
                    "p90_qty": 902,
                    "forecast_revenue": 329280.0
                  },
                  {
                    "week_start": "2026-06-22",
                    "forecast_qty": 809,
                    "p10_qty": 712,
                    "p90_qty": 930,
                    "forecast_revenue": 339780.0
                  },
                  {
                    "week_start": "2026-06-29",
                    "forecast_qty": 834,
                    "p10_qty": 734,
                    "p90_qty": 959,
                    "forecast_revenue": 350280.0
                  }
                ],
                "horizon_weeks": 4,
                "timesfm_ready": {
                  "interface": "univariate_or_xreg_time_series",
                  "context_column": "booked_qty",
                  "timestamp_column": "week_start",
                  "entity_column": "product_id",
                  "future_covariates": [
                    "market_signal_index",
                    "calendar_week",
                    "policy_risk_score"
                  ],
                  "status": "adapter_stub",
                  "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
                }
              },
              {
                "product_id": "FG-OPS-C300",
                "product_name": "Fluid Service Kit C300",
                "forecast_family": "service_kits",
                "model": "seasonal_naive_with_trend",
                "recent_average_qty": 598.75,
                "trend_per_week": 32.5,
                "market_signal_index": 0.93,
                "history": [
                  {
                    "week_start": "2026-04-13",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 430,
                    "shipped_qty": 420,
                    "backlog_qty": 150,
                    "market_signal_index": 0.66
                  },
                  {
                    "week_start": "2026-04-20",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 455,
                    "shipped_qty": 440,
                    "backlog_qty": 165,
                    "market_signal_index": 0.69
                  },
                  {
                    "week_start": "2026-04-27",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 470,
                    "shipped_qty": 450,
                    "backlog_qty": 185,
                    "market_signal_index": 0.71
                  },
                  {
                    "week_start": "2026-05-04",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 520,
                    "shipped_qty": 470,
                    "backlog_qty": 235,
                    "market_signal_index": 0.79
                  },
                  {
                    "week_start": "2026-05-11",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 560,
                    "shipped_qty": 500,
                    "backlog_qty": 295,
                    "market_signal_index": 0.84
                  },
                  {
                    "week_start": "2026-05-18",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 590,
                    "shipped_qty": 520,
                    "backlog_qty": 365,
                    "market_signal_index": 0.88
                  },
                  {
                    "week_start": "2026-05-25",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 610,
                    "shipped_qty": 535,
                    "backlog_qty": 440,
                    "market_signal_index": 0.9
                  },
                  {
                    "week_start": "2026-06-01",
                    "product_id": "FG-OPS-C300",
                    "booked_qty": 635,
                    "shipped_qty": 550,
                    "backlog_qty": 525,
                    "market_signal_index": 0.93
                  }
                ],
                "forecast": [
                  {
                    "week_start": "2026-06-08",
                    "forecast_qty": 625,
                    "p10_qty": 550,
                    "p90_qty": 719,
                    "forecast_revenue": 193750.0
                  },
                  {
                    "week_start": "2026-06-15",
                    "forecast_qty": 658,
                    "p10_qty": 579,
                    "p90_qty": 757,
                    "forecast_revenue": 203980.0
                  },
                  {
                    "week_start": "2026-06-22",
                    "forecast_qty": 690,
                    "p10_qty": 607,
                    "p90_qty": 793,
                    "forecast_revenue": 213900.0
                  },
                  {
                    "week_start": "2026-06-29",
                    "forecast_qty": 723,
                    "p10_qty": 636,
                    "p90_qty": 831,
                    "forecast_revenue": 224130.0
                  }
                ],
                "horizon_weeks": 4,
                "timesfm_ready": {
                  "interface": "univariate_or_xreg_time_series",
                  "context_column": "booked_qty",
                  "timestamp_column": "week_start",
                  "entity_column": "product_id",
                  "future_covariates": [
                    "market_signal_index",
                    "calendar_week",
                    "policy_risk_score"
                  ],
                  "status": "adapter_stub",
                  "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
                }
              },
              {
                "product_id": "FG-OPS-D400",
                "product_name": "Inspection Fixture D400",
                "forecast_family": "inspection_fixtures",
                "model": "seasonal_naive_with_trend",
                "recent_average_qty": 100.0,
                "trend_per_week": 6.94,
                "market_signal_index": 0.77,
                "history": [
                  {
                    "week_start": "2026-04-13",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 65,
                    "shipped_qty": 58,
                    "backlog_qty": 34,
                    "market_signal_index": 0.55
                  },
                  {
                    "week_start": "2026-04-20",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 70,
                    "shipped_qty": 62,
                    "backlog_qty": 42,
                    "market_signal_index": 0.58
                  },
                  {
                    "week_start": "2026-04-27",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 72,
                    "shipped_qty": 66,
                    "backlog_qty": 48,
                    "market_signal_index": 0.59
                  },
                  {
                    "week_start": "2026-05-04",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 82,
                    "shipped_qty": 70,
                    "backlog_qty": 60,
                    "market_signal_index": 0.64
                  },
                  {
                    "week_start": "2026-05-11",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 95,
                    "shipped_qty": 75,
                    "backlog_qty": 80,
                    "market_signal_index": 0.7
                  },
                  {
                    "week_start": "2026-05-18",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 88,
                    "shipped_qty": 82,
                    "backlog_qty": 86,
                    "market_signal_index": 0.68
                  },
                  {
                    "week_start": "2026-05-25",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 105,
                    "shipped_qty": 86,
                    "backlog_qty": 105,
                    "market_signal_index": 0.74
                  },
                  {
                    "week_start": "2026-06-01",
                    "product_id": "FG-OPS-D400",
                    "booked_qty": 112,
                    "shipped_qty": 90,
                    "backlog_qty": 127,
                    "market_signal_index": 0.77
                  }
                ],
                "forecast": [
                  {
                    "week_start": "2026-06-08",
                    "forecast_qty": 104,
                    "p10_qty": 92,
                    "p90_qty": 120,
                    "forecast_revenue": 133120.0
                  },
                  {
                    "week_start": "2026-06-15",
                    "forecast_qty": 111,
                    "p10_qty": 98,
                    "p90_qty": 128,
                    "forecast_revenue": 142080.0
                  },
                  {
                    "week_start": "2026-06-22",
                    "forecast_qty": 118,
                    "p10_qty": 104,
                    "p90_qty": 136,
                    "forecast_revenue": 151040.0
                  },
                  {
                    "week_start": "2026-06-29",
                    "forecast_qty": 125,
                    "p10_qty": 110,
                    "p90_qty": 144,
                    "forecast_revenue": 160000.0
                  }
                ],
                "horizon_weeks": 4,
                "timesfm_ready": {
                  "interface": "univariate_or_xreg_time_series",
                  "context_column": "booked_qty",
                  "timestamp_column": "week_start",
                  "entity_column": "product_id",
                  "future_covariates": [
                    "market_signal_index",
                    "calendar_week",
                    "policy_risk_score"
                  ],
                  "status": "adapter_stub",
                  "note": "The public demo keeps a deterministic model but exposes the same series shape needed by TimesFM or BigQuery AI.FORECAST."
                }
              }
            ],
            "summary": {
              "series_count": 4,
              "total_forecast_qty": 10769,
              "total_forecast_revenue": 6568620.0
            }
          },
          "source_refs": [],
          "completed_at": "2026-06-07T08:00:00+00:00"
        },
        {
          "tool_name": "build_control_tower_overview",
          "input_json": {},
          "output_json": {
            "generated_at": "2026-06-07T08:00:00+00:00",
            "operating_score": 28,
            "kpis": {
              "open_order_qty": 5010,
              "open_order_value": 3042000.0,
              "gross_margin_value": 1169590.0,
              "forecast_4w_qty": 10769,
              "material_watch_items": 4,
              "material_critical_items": 10,
              "external_actionable_signals": 3,
              "open_internal_issues": 4
            },
            "product_health": [
              {
                "product_id": "FG-OPS-A100",
                "product_name": "Modular Control Kit A100",
                "planning_policy": "make_to_order",
                "open_order_qty": 1850,
                "open_order_count": 2,
                "due_soon_count": 2,
                "backlog_value": 1591000.0,
                "gross_margin_value": 582750.0,
                "forecast_4w_qty": 4428,
                "finished_goods_available": 130,
                "coverage_days": 0.8,
                "target_days_of_cover": 18.0,
                "material_status": "critical",
                "capacity_line_id": "LINE-UNIVERSAL-A",
                "weekly_capacity_qty": 9975,
                "capacity_gap_qty": 0,
                "status": "critical",
                "recommended_action": "Hold release and resolve material shortage"
              },
              {
                "product_id": "FG-OPS-B200",
                "product_name": "Sensor Pack B200",
                "planning_policy": "make_to_order",
                "open_order_qty": 1640,
                "open_order_count": 2,
                "due_soon_count": 1,
                "backlog_value": 688800.0,
                "gross_margin_value": 278800.0,
                "forecast_4w_qty": 3187,
                "finished_goods_available": 250,
                "coverage_days": 2.2,
                "target_days_of_cover": 16.0,
                "material_status": "critical",
                "capacity_line_id": "LINE-UNIVERSAL-A",
                "weekly_capacity_qty": 9975,
                "capacity_gap_qty": 0,
                "status": "critical",
                "recommended_action": "Hold release and resolve material shortage"
              },
              {
                "product_id": "FG-OPS-C300",
                "product_name": "Fluid Service Kit C300",
                "planning_policy": "make_to_stock",
                "open_order_qty": 1220,
                "open_order_count": 2,
                "due_soon_count": 1,
                "backlog_value": 378200.0,
                "gross_margin_value": 161040.0,
                "forecast_4w_qty": 2696,
                "finished_goods_available": 85,
                "coverage_days": 0.9,
                "target_days_of_cover": 22.0,
                "material_status": "critical",
                "capacity_line_id": "LINE-FLEX-CELL-B",
                "weekly_capacity_qty": 7925,
                "capacity_gap_qty": 0,
                "status": "critical",
                "recommended_action": "Hold release and resolve material shortage"
              },
              {
                "product_id": "FG-OPS-D400",
                "product_name": "Inspection Fixture D400",
                "planning_policy": "engineer_to_order",
                "open_order_qty": 300,
                "open_order_count": 2,
                "due_soon_count": 1,
                "backlog_value": 384000.0,
                "gross_margin_value": 147000.0,
                "forecast_4w_qty": 458,
                "finished_goods_available": 4,
                "coverage_days": 0.2,
                "target_days_of_cover": 30.0,
                "material_status": "watch",
                "capacity_line_id": "LINE-FLEX-CELL-B",
                "weekly_capacity_qty": 7925,
                "capacity_gap_qty": 0,
                "status": "critical",
                "recommended_action": "Release through normal S&OP gate"
              }
            ],
            "operating_loop": [
              {
                "stage": "Sales",
                "status": "active",
                "evidence": "8 open demo orders",
                "action": "Confirm priority and due-date risk."
              },
              {
                "stage": "Planning",
                "status": "watch",
                "evidence": "4 forecast series",
                "action": "Reconcile demand, frozen plan and line capacity weekly."
              },
              {
                "stage": "Procurement",
                "status": "watch",
                "evidence": "4 watch components",
                "action": "Focus on supplier ETAs that change release gates."
              },
              {
                "stage": "Warehouse",
                "status": "active",
                "evidence": "20 material stock rows",
                "action": "Keep source-row trace for every coverage decision."
              },
              {
                "stage": "Production",
                "status": "watch",
                "evidence": "24h deterministic line simulations",
                "action": "Use bottleneck report before increasing release quantity."
              },
              {
                "stage": "Compliance",
                "status": "watch",
                "evidence": "4 external signals",
                "action": "Review official-source policy matches before shipment release."
              },
              {
                "stage": "Intelligence",
                "status": "active",
                "evidence": "15 registered tools",
                "action": "Route questions to deterministic tools before model summarization."
              }
            ],
            "alerts": [
              {
                "id": "OPS-RISK-001",
                "severity": "high",
                "area": "supply",
                "title": "Sensor dock-date uncertainty",
                "action": "Procurement",
                "source": "supplier_delivery_records"
              },
              {
                "id": "OPS-RISK-002",
                "severity": "medium",
                "area": "capacity",
                "title": "OP-40 buffer pressure",
                "action": "Manufacturing Engineering",
                "source": "simulation_reports"
              },
              {
                "id": "OPS-RISK-003",
                "severity": "medium",
                "area": "compliance",
                "title": "Export declaration field readiness",
                "action": "Trade Compliance",
                "source": "policy_signals"
              },
              {
                "id": "OPS-RISK-004",
                "severity": "medium",
                "area": "planning",
                "title": "Demand trend exceeds frozen plan",
                "action": "Planning",
                "source": "demand_history"
              },
              {
                "id": "OPS-RISK-005",
                "severity": "low",
                "area": "inventory",
                "title": "Packaging surplus cash lock",
                "action": "Warehouse",
                "source": "inventory_snapshots"
              }
            ],
            "forecast_summary": {
              "series_count": 4,
              "total_forecast_qty": 10769,
              "total_forecast_revenue": 6568620.0
            },
            "policy_summary": {
              "signal_count": 4,
              "actionable_count": 3,
              "jurisdictions": [
                "China",
                "United States"
              ]
            }
          },
          "source_refs": [],
          "completed_at": "2026-06-07T08:00:00+00:00"
        }
      ],
      "source_refs": [],
      "final_answer": "Result: 4-week forecast is 10,769 units across 4 series. Evidence: baseline model is active and TimesFM adapter is planned_adapter. Next check: compare forecast upside with material gates and line capacity.",
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
