import demoSnapshot from './demoSnapshot';

export type Lang = 'en' | 'zh';

export const snapshot = demoSnapshot;

export const copy = {
  en: {
    title: 'Operations Intelligence Control Tower',
    subtitle: 'S&OP, demand forecast, BOM coverage, finished goods, capacity, customs policy signals and decision traces in one operating view.',
    sourceTrace: 'Source trace',
    adapterStatus: 'Adapter status',
    statusLoaded: 'Demo data loaded',
    mode: 'ERP / WMS / MES / policy adapters',
  },
  zh: {
    title: '运营智能总控台',
    subtitle: '把产销存、需求预测、BOM 覆盖、成品库存、产能、海关政策信号和决策轨迹放在同一个运营视图里。',
    sourceTrace: '来源追溯',
    adapterStatus: '接口状态',
    statusLoaded: '演示数据已加载',
    mode: 'ERP / WMS / MES / 政策源模拟接口',
  },
};

export const controlTower = demoSnapshot.controlTower;
export const productHealth = demoSnapshot.controlTower.product_health;
export const operatingLoop = demoSnapshot.controlTower.operating_loop;
export const demandSeries = demoSnapshot.demandForecast.series;
export const policySignals = demoSnapshot.policySignals.signals;
export const decisionBrief = demoSnapshot.decisionBrief;
export const decisionActions = demoSnapshot.decisionBrief.actions;
export const internalIssues = demoSnapshot.internalIssues;

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

const evidenceRefs = [
  ...demoSnapshot.agentAnswer.trace.source_refs,
  ...demoSnapshot.inventoryRisk.source_refs,
].slice(0, 6);

export const topSources = evidenceRefs.map((row) => ({
  label: row.source_file,
  value: `${row.source_row}${row.source_column ? ` / ${row.source_column}` : ''}`,
}));
