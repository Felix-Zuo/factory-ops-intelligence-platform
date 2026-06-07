export type Lang = 'en' | 'zh';

export const copy = {
  en: {
    title: 'AI Factory Operations Intelligence Platform',
    subtitle: 'A demo-ready operations intelligence layer for fragmented manufacturing data.',
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
    title: 'AI 工厂运营智能平台',
    subtitle: '面向分散制造数据的可运行运营智能层。',
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

export const imports = [
  { file: 'bom_6205_demo.xlsx', type: 'BOM', rows: 6, quality: 'pass', source: 'Sheet BOM / rows 2-7' },
  { file: 'wms_inventory_demo.csv', type: 'Inventory', rows: 6, quality: 'pass', source: 'rows 2-7' },
  { file: 'sales_orders_demo.csv', type: 'Orders', rows: 2, quality: 'pass', source: 'rows 2-3' },
  { file: 'shipment_in_transit_demo.csv', type: 'Inbound', rows: 3, quality: 'warning', source: 'ETA check required' },
];

export const materials = [
  { id: 'MAT-6205-OR', name: 'Outer ring blank 6205', required: 12000, coverage: 17200, status: 'covered', supplier: 'Northline Forging', source: 'wms_inventory_demo.csv:2' },
  { id: 'MAT-6205-IR', name: 'Inner ring blank 6205', required: 12000, coverage: 16300, status: 'covered', supplier: 'Northline Forging', source: 'wms_inventory_demo.csv:3' },
  { id: 'MAT-BALL-7.94', name: 'Steel ball 7.94 mm', required: 108000, coverage: 128400, status: 'covered', supplier: 'Hengyuan Ball', source: 'wms_inventory_demo.csv:4' },
  { id: 'MAT-CAGE-6205', name: 'Pressed steel cage 6205', required: 12000, coverage: 17000, status: 'covered', supplier: 'Jinhe Stamping', source: 'wms_inventory_demo.csv:5' },
  { id: 'MAT-SEAL-6205', name: 'Rubber seal 6205', required: 24000, coverage: 32100, status: 'covered', supplier: 'Haicheng Rubber', source: 'wms_inventory_demo.csv:6' },
  { id: 'MAT-GREASE-L2', name: 'Low-noise bearing grease L2', required: 21600, coverage: 26200, status: 'watch', supplier: 'GreenChem', source: 'wms_inventory_demo.csv:7' },
];

export const machines = [
  { id: 'OP-10', name: 'Outer ring grinding', output: 29314, util: 0.893, state: 'running' },
  { id: 'OP-20', name: 'Inner ring grinding', output: 26953, util: 0.883, state: 'running' },
  { id: 'OP-30', name: 'Ball loading', output: 33926, util: 0.912, state: 'running' },
  { id: 'OP-40', name: 'Cage pressing', output: 23512, util: 0.854, state: 'blocked' },
  { id: 'OP-50', name: 'Seal and grease', output: 25715, util: 0.874, state: 'running' },
  { id: 'OP-60', name: 'Noise inspection', output: 28631, util: 0.902, state: 'running' },
];

export const integrations = [
  { adapter: 'ERP', mode: 'mock', scope: 'sales orders, purchase requests, material master' },
  { adapter: 'WMS', mode: 'mock', scope: 'material stock, finished goods, location, batch' },
  { adapter: 'MES', mode: 'stub', scope: 'work order status, output, scrap, downtime' },
  { adapter: 'PLC', mode: 'sample', scope: 'machine state, alarm, cycle signal, buffer full' },
  { adapter: 'WeChat', mode: 'stub', scope: 'message in, operations answer out' },
  { adapter: 'MCP', mode: 'ready-schema', scope: 'tools, resources, prompts' },
];

export const traces = [
  { step: 'Question', value: 'Can FG-6205-2RS be released?', code: 'AGT-01' },
  { step: 'Workflow', value: 'order_to_material_risk', code: 'AGT-02' },
  { step: 'Tool', value: 'get_product_bom', code: 'TL-01' },
  { step: 'Tool', value: 'calculate_inventory_risk', code: 'TL-02' },
  { step: 'Result', value: 'coverage watch / source rows linked', code: 'OUT-01' },
];
