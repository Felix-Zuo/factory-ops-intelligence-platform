import demoSnapshot from './demoSnapshot';

export type Lang = 'en' | 'zh';

export const snapshot = demoSnapshot;

export const copy = {
  en: {
    title: 'Factory Operations Intelligence Board',
    subtitle: 'BOM records, stock exports, customer orders, shipment records, production notices, line simulation and tool traces in one operating view.',
    product: 'Product',
    sourceTrace: 'Source trace',
    adapterStatus: 'Adapter status',
    materialCoverage: 'Material coverage',
    productionNotice: 'Production notice',
    simulation: 'Simulation',
    agentTrace: 'Agent trace',
    portfolio: 'Portfolio case',
    statusLoaded: 'Demo data loaded',
    mode: 'Mock ERP / WMS / MES / PLC',
  },
  zh: {
    title: '工厂运营情报看板',
    subtitle: 'BOM、库存导出、客户订单、在途记录、生产通知单、产线仿真和工具轨迹汇总在一个运营视图中。',
    product: '成品',
    sourceTrace: '来源追溯',
    adapterStatus: '接口状态',
    materialCoverage: '物料覆盖',
    productionNotice: '生产通知单',
    simulation: '产线仿真',
    agentTrace: '工具轨迹',
    portfolio: '项目案例',
    statusLoaded: '演示数据已加载',
    mode: 'ERP / WMS / MES / PLC 模拟接口',
  },
};

export const imports = demoSnapshot.imports.map((row) => ({
  file: row.file_name,
  type: row.type,
  rows: row.rows,
  quality: row.quality,
  source: `${row.parser} / ${row.source_system}`,
}));

export const materials = demoSnapshot.inventoryRisk.materials.map((row) => ({
  id: row.material_id,
  name: row.material_name,
  required: row.required_qty,
  coverage: row.coverage_qty,
  status: row.status,
  supplier: row.supplier,
  source: row.source_trace ? `${row.source_trace.source_file}:${row.source_trace.source_row}` : 'demo_data',
  location: row.locations.join(', '),
  eta: row.eta || 'stock only',
  note: row.supplier_note,
}));

export const machines = demoSnapshot.simulation.machine_reports.map((row) => ({
  id: row.machine_id,
  name: row.name,
  output: row.good_output,
  util: row.utilization,
  state: row.state,
  waiting: row.waiting_time_hours,
  blocking: row.blocking_time_hours,
}));

export const integrations = demoSnapshot.integrations.map((row) => ({
  adapter: row.adapter,
  mode: row.mode,
  status: row.status,
  scope: row.scope,
  source: row.source_system,
  payloads: row.accepted_payloads.join(', '),
  lastSample: row.last_sample_at || 'not configured',
  gaps: row.known_gaps.join('; '),
}));

export const traces = demoSnapshot.agentAnswer.trace.tool_calls.map((row, index) => ({
  step: row.tool_name,
  value: `${row.source_refs.length} source refs`,
  code: `TL-${String(index + 1).padStart(2, '0')}`,
  input: JSON.stringify(row.input_json),
}));

export const topSources = demoSnapshot.agentAnswer.trace.source_refs.slice(0, 6).map((row) => ({
  label: row.source_file,
  value: `${row.source_row}${row.source_column ? ` / ${row.source_column}` : ''}`,
}));
