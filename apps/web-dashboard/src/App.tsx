import {
  Activity,
  AlertTriangle,
  BarChart3,
  Boxes,
  Brain,
  ClipboardList,
  Database,
  Factory,
  GitBranch,
  Globe2,
  Languages,
  Network,
  PackageCheck,
  Play,
  Radar,
  Route,
  ScrollText,
  Search,
  ServerCog,
  ShieldCheck,
  TrendingUp,
  Warehouse,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  controlTower,
  copy,
  decisionActions,
  decisionBrief,
  demandSeries,
  integrations,
  internalIssues,
  Lang,
  machines,
  materials,
  operatingLoop,
  policySignals,
  productHealth,
  snapshot,
  topSources,
  traces,
} from './data';

type Page =
  | 'home'
  | 'sop'
  | 'forecast'
  | 'inventory'
  | 'trace'
  | 'notice'
  | 'simulation'
  | 'policy'
  | 'brief'
  | 'qa'
  | 'agent'
  | 'integrations'
  | 'project';

const pages: Array<{ id: Page; icon: typeof Factory; en: string; zh: string; code: string }> = [
  { id: 'home', icon: Factory, en: 'Command Center', zh: '总控中心', code: 'OPS-00' },
  { id: 'sop', icon: PackageCheck, en: 'S&OP Tower', zh: '产销存塔台', code: 'SOP-01' },
  { id: 'forecast', icon: TrendingUp, en: 'Forecast Lab', zh: '预测实验室', code: 'FCST-02' },
  { id: 'inventory', icon: Boxes, en: 'BOM & Stock', zh: 'BOM 与库存', code: 'INV-03' },
  { id: 'trace', icon: Route, en: 'Trace Graph', zh: '追溯图谱', code: 'TRC-04' },
  { id: 'notice', icon: ClipboardList, en: 'Release Gate', zh: '放行关口', code: 'REL-05' },
  { id: 'simulation', icon: Activity, en: 'Capacity Model', zh: '产能模型', code: 'CAP-06' },
  { id: 'policy', icon: Globe2, en: 'Policy Radar', zh: '政策雷达', code: 'POL-07' },
  { id: 'brief', icon: Brain, en: 'Decision Brief', zh: '决策简报', code: 'BRF-08' },
  { id: 'qa', icon: Search, en: 'Ops Q&A', zh: '运营问答', code: 'QA-09' },
  { id: 'agent', icon: GitBranch, en: 'Tool Trace', zh: '工具轨迹', code: 'AGT-10' },
  { id: 'integrations', icon: ServerCog, en: 'Connectors', zh: '接口边界', code: 'INT-11' },
  { id: 'project', icon: ScrollText, en: 'Product Plan', zh: '产品计划', code: 'DOC-12' },
];

function t(lang: Lang, en: string, zh: string) {
  return lang === 'en' ? en : zh;
}

function number(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

function money(value: number) {
  return `$${Math.round(value).toLocaleString()}`;
}

function StatusChip({ value }: { value: string }) {
  return <span className={`status status-${value}`}>{value}</span>;
}

function SectionHeader({ code, title, subtitle }: { code: string; title: string; subtitle: string }) {
  return (
    <header className="section-header">
      <span>{code}</span>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

function MetricCard({ label, value, note, tone = 'neutral' }: { label: string; value: string; note: string; tone?: string }) {
  return (
    <div className={`metric-card tone-${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <em>{note}</em>
    </div>
  );
}

function Home({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const kpis = controlTower.kpis;
  return (
    <div className="page-grid command-grid">
      <section className="overview-panel">
        <SectionHeader code="OPS-00" title={c.title} subtitle={c.subtitle} />
        <div className="metric-grid">
          <MetricCard label={t(lang, 'Operating score', '运营评分')} value={`${controlTower.operating_score}/100`} note={t(lang, 'calculated from demand, supply, policy and issue signals', '由需求、供应、政策和问题信号计算')} tone="score" />
          <MetricCard label={t(lang, 'Open order value', '未结订单金额')} value={money(kpis.open_order_value)} note={`${number(kpis.open_order_qty)} units`} />
          <MetricCard label={t(lang, '4-week forecast', '四周预测需求')} value={number(kpis.forecast_4w_qty)} note={t(lang, 'baseline plus TimesFM-ready adapter shape', '可解释 baseline，预留 TimesFM 适配形状')} />
          <MetricCard label={t(lang, 'Material risk', '物料风险')} value={`${kpis.material_watch_items} watch`} note={`${kpis.material_critical_items} critical`} tone="warn" />
          <MetricCard label={t(lang, 'Policy signals', '政策信号')} value={String(kpis.external_actionable_signals)} note={t(lang, 'official-source customs and compliance links', '官方来源海关与合规链接')} />
          <MetricCard label={t(lang, 'Open issues', '内部问题')} value={String(kpis.open_internal_issues)} note={t(lang, 'owned actions with source evidence', '带责任人与来源证据的动作')} />
        </div>
      </section>

      <section className="decision-panel">
        <SectionHeader code="BRF-08" title={t(lang, 'Today Decision Queue', '今日决策队列')} subtitle={decisionBrief.executive_answer} />
        <div className="action-list">
          {decisionActions.map((action) => (
            <div className="action-row" key={`${action.priority}-${action.owner}`}>
              <span>{action.priority}</span>
              <strong>{action.owner}</strong>
              <p>{action.action}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wide-panel">
        <SectionHeader code="SOP-01" title={t(lang, 'Portfolio Health', '产品组合健康度')} subtitle={t(lang, 'Sales orders, finished goods, material gate, capacity and margin are evaluated together.', '订单、成品、物料门禁、产能和毛利一起评估。')} />
        <ProductHealthTable />
      </section>

      <section className="wide-panel">
        <SectionHeader code="LOOP" title={t(lang, 'Operating Loop', '运营闭环')} subtitle={t(lang, 'The product is organized around repeatable cross-functional decisions, not isolated screens.', '产品围绕可重复的跨职能决策组织，而不是孤立页面。')} />
        <div className="loop-grid">
          {operatingLoop.map((item) => (
            <div className="loop-card" key={item.stage}>
              <span>{item.stage}</span>
              <StatusChip value={item.status} />
              <strong>{item.evidence}</strong>
              <p>{item.action}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProductHealthTable() {
  return (
    <div className="table-panel">
      <table>
        <thead>
          <tr>
            <th>Product</th><th>Status</th><th>Open qty</th><th>4w forecast</th><th>FG cover</th><th>Material</th><th>Line</th><th>Backlog value</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productHealth.map((row) => (
            <tr key={row.product_id}>
              <td><strong>{row.product_id}</strong><br /><small>{row.product_name}</small></td>
              <td><StatusChip value={row.status} /></td>
              <td>{number(row.open_order_qty)}</td>
              <td>{number(row.forecast_4w_qty)}</td>
              <td>{row.coverage_days}d / target {row.target_days_of_cover}d</td>
              <td><StatusChip value={row.material_status} /></td>
              <td>{row.capacity_line_id}<br /><small>{number(row.weekly_capacity_qty)} / week</small></td>
              <td>{money(row.backlog_value)}</td>
              <td>{row.recommended_action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SopTower({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="SOP-01" title={t(lang, 'S&OP Control Tower', '产销存控制塔')} subtitle={t(lang, 'A generic operating model for sales demand, stock, procurement, production and shipment release.', '面向销售需求、库存、采购、生产和出货放行的通用运营模型。')} />
      <div className="split-layout">
        <ProductHealthTable />
        <div className="issue-stack">
          {internalIssues.map((issue) => (
            <div className="issue-card" key={issue.issue_id}>
              <span>{issue.issue_id}</span>
              <StatusChip value={issue.severity} />
              <strong>{issue.title}</strong>
              <p>{issue.symptom}</p>
              <small>{issue.owner} / {issue.source}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForecastLab({ lang }: { lang: Lang }) {
  const maxForecast = Math.max(...demandSeries.flatMap((row) => row.forecast.map((point) => point.forecast_qty)));
  return (
    <section>
      <SectionHeader code="FCST-02" title={t(lang, 'Demand Forecast Lab', '需求预测实验室')} subtitle={t(lang, 'Deterministic baseline is active; TimesFM or BigQuery AI.FORECAST can consume the same series contract later.', '当前启用可解释 baseline；后续 TimesFM 或 BigQuery AI.FORECAST 可复用同一序列契约。')} />
      <div className="forecast-grid">
        {demandSeries.map((series) => (
          <div className="forecast-card" key={series.product_id}>
            <header>
              <strong>{series.product_id}</strong>
              <StatusChip value={series.timesfm_ready.status} />
            </header>
            <p>{series.product_name}</p>
            <div className="bar-strip">
              {series.forecast.map((point) => (
                <div className="bar-column" key={point.week_start}>
                  <i style={{ height: `${Math.max(16, (point.forecast_qty / maxForecast) * 118)}px` }} />
                  <span>{point.week_start.slice(5)}</span>
                  <strong>{number(point.forecast_qty)}</strong>
                </div>
              ))}
            </div>
            <small>trend {series.trend_per_week} / avg {number(series.recent_average_qty)} / family {series.forecast_family}</small>
          </div>
        ))}
      </div>
      <div className="model-row">
        {snapshot.demandForecast.model_registry.map((model) => (
          <div key={model.model_id}>
            <strong>{model.model_id}</strong>
            <StatusChip value={model.status} />
            <p>{model.explainability}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Inventory({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="INV-03" title={t(lang, 'BOM, Inventory and Cash Gate', 'BOM、库存与现金门禁')} subtitle={t(lang, 'Finished-product demand is exploded into component coverage, supplier context and source-row evidence.', '成品需求拆解为组件覆盖、供应商上下文和来源行证据。')} />
      <div className="metric-strip">
        <div><span>Order</span><strong>{snapshot.orders[0].order_id}</strong></div>
        <div><span>Product</span><strong>{snapshot.inventoryRisk.product_id}</strong></div>
        <div><span>Quantity</span><strong>{number(snapshot.inventoryRisk.order_qty)} pcs</strong></div>
        <div><span>Coverage</span><strong>{snapshot.inventoryRisk.summary.covered_items} covered / {snapshot.inventoryRisk.summary.watch_items} watch</strong></div>
      </div>
      <div className="table-panel">
        <table>
          <thead>
            <tr><th>Material</th><th>Name</th><th>Required</th><th>Coverage</th><th>Status</th><th>Supplier</th><th>Location</th><th>Source</th></tr>
          </thead>
          <tbody>
            {materials.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td><td>{row.name}</td><td>{number(row.required)}</td><td>{number(row.coverage)}</td><td><StatusChip value={row.status} /></td><td>{row.supplier}</td><td>{row.location}</td><td>{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TracePage({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="TRC-04" title={t(lang, 'Product Material Trace Graph', '成品物料追溯图谱')} subtitle={t(lang, 'Product, order, BOM, stock, inbound and supplier context are linked as evidence.', '产品、订单、BOM、库存、在途和供应商上下文作为证据链连接。')} />
      <div className="trace-chain">
        {snapshot.materialTrace.trace_summary.map((item, index) => (
          <div className="trace-card" key={`${item.stage}-${item.label}`}>
            <span>{`T${index + 1}`}</span>
            <strong>{item.label}</strong>
            <em>{item.detail}</em>
          </div>
        ))}
      </div>
      <div className="source-list">
        {materials.map((row) => (
          <div key={row.id}>
            <strong>{row.id}</strong>
            <span>{row.name}</span>
            <em>{row.source}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

function Notice({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="REL-05" title={t(lang, 'Release Gate', '放行关口')} subtitle={t(lang, 'A work package is generated only after material, policy and capacity gates are visible.', '只有物料、政策和产能门禁可见后，才生成工作包。')} />
      <div className="notice-layout">
        <aside className="form-stack">
          <label>Product <strong>{snapshot.notice.product_id}</strong></label>
          <label>Quantity <strong>{number(snapshot.notice.quantity)} pcs</strong></label>
          <label>Order <strong>{snapshot.notice.order_id}</strong></label>
          <label>Template <strong>{snapshot.notice.template_version}</strong></label>
        </aside>
        <article className="notice-sheet">
          <h1>Release Notice {snapshot.notice.notice_id}</h1>
          <p><b>Product:</b> {snapshot.notice.product_name}</p>
          <p><b>Material gate:</b> {snapshot.notice.material_gate}</p>
          <p><b>Policy gate:</b> {controlTower.policy_summary.actionable_count} actionable external signals linked.</p>
          <table>
            <tbody>
              {materials.slice(0, 5).map((row) => (
                <tr key={row.id}><td>{row.id}</td><td>{number(row.required)}</td><td>{row.status}</td></tr>
              ))}
            </tbody>
          </table>
        </article>
        <aside className="form-stack">
          <label>Field status <strong>{snapshot.notice.material_status}</strong></label>
          <label>Source rows <strong>{snapshot.notice.source_refs.length} linked</strong></label>
          <label>Export <strong>HTML / JSON / agent context</strong></label>
        </aside>
      </div>
    </section>
  );
}

function Simulation({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="CAP-06" title={t(lang, 'Capacity and Bottleneck Model', '产能与瓶颈模型')} subtitle={t(lang, 'Machine states, buffers, transport links and deterministic 24h output are treated as a planning input.', '设备状态、缓冲、转运连接和 24 小时产出作为计划输入。')} />
      <div className="line-map">
        {machines.map((machine, index) => (
          <div className={`machine machine-${machine.state}`} key={machine.id}>
            <span>{machine.id}</span>
            <strong>{machine.name}</strong>
            <em>{number(machine.output)} pcs</em>
            <small>{Math.round(machine.util * 100)}% util / {machine.blocking}h block</small>
            {index < machines.length - 1 && <i />}
          </div>
        ))}
      </div>
    </section>
  );
}

function PolicyRadar({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="POL-07" title={t(lang, 'Policy and Customs Radar', '政策与海关雷达')} subtitle={t(lang, 'Official-source signals are linked to materials, products and orders through a replaceable adapter contract.', '官方来源信号通过可替换适配器连接到物料、产品和订单。')} />
      <div className="policy-grid">
        {policySignals.map((signal) => (
          <article className="policy-card" key={signal.signal_id}>
            <header>
              <strong>{signal.signal_id}</strong>
              <StatusChip value={signal.risk_level} />
            </header>
            <h3>{signal.title}</h3>
            <p>{signal.summary}</p>
            <div className="policy-meta">
              <span>{signal.jurisdiction}</span>
              <span>effective {signal.effective_at}</span>
              <span>{signal.affected_products.join(', ') || 'no product match'}</span>
            </div>
            <a href={signal.source_url} target="_blank" rel="noreferrer">official source</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Brief({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="BRF-08" title={t(lang, 'Model-Ready Decision Brief', '可接模型的决策简报')} subtitle={decisionBrief.executive_answer} />
      <div className="brief-layout">
        <div className="action-list">
          {decisionActions.map((action) => (
            <div className="action-row" key={`${action.priority}-${action.owner}`}>
              <span>{action.priority}</span>
              <strong>{action.owner}</strong>
              <p>{action.action}</p>
              <small>{action.evidence}</small>
            </div>
          ))}
        </div>
        <div className="lane-list">
          {decisionBrief.analysis_lanes.map((lane) => (
            <div key={lane.lane}>
              <span>{lane.lane}</span>
              <strong>{lane.signal}</strong>
              <em>{lane.risk}</em>
            </div>
          ))}
        </div>
      </div>
      <div className="contract-panel">
        <ShieldCheck size={18} />
        <p>{decisionBrief.model_boundary.contract}</p>
      </div>
    </section>
  );
}

function QA({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="QA-09" title={t(lang, 'Operations Q&A', '运营问答')} subtitle={t(lang, 'Questions are routed through registered tools before any model summary.', '问题先通过已注册工具路由，再进入模型总结。')} />
      <div className="qa-layout">
        <div className="question-box">{snapshot.agentAnswer.trace.user_question}</div>
        <div className="answer-box">
          <b>Intent:</b> {snapshot.agentAnswer.trace.selected_intent}<br />
          <b>Workflow:</b> {snapshot.agentAnswer.trace.workflow}<br />
          <b>Tools:</b> {snapshot.agentAnswer.trace.selected_tools.join(' -> ')}<br />
          <b>Answer:</b> {snapshot.agentAnswer.answer}
        </div>
      </div>
    </section>
  );
}

function AgentTrace({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="AGT-10" title={t(lang, 'Agent Tool Trace', 'Agent 工具轨迹')} subtitle={t(lang, 'Every answer keeps question, workflow, tool calls, result and timestamp visible.', '每次回答保留问题、工作流、工具调用、结果和时间戳。')} />
      <div className="timeline">
        {traces.map((row) => (
          <div className="timeline-row" key={row.code}>
            <span>{row.code}</span>
            <strong>{row.step}</strong>
            <em>{row.value}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

function Integrations({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="INT-11" title={t(lang, 'Connector Boundary', '接口边界')} subtitle={t(lang, 'Adapters stay explicit: mock, sample, ready-schema or planned official-source feed.', '适配器状态保持显式：mock、sample、ready-schema 或计划中的官方来源 feed。')} />
      <div className="adapter-grid">
        {integrations.map((item) => (
          <div className="adapter" key={item.adapter}>
            <Network size={18} />
            <strong>{item.adapter}</strong>
            <StatusChip value={item.mode} />
            <p>{item.scope}</p>
            <small>{item.status} / {item.lastSample}</small>
            <small>{item.gaps}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectNotes({ lang }: { lang: Lang }) {
  const modules = [
    ['Control Tower', 'portfolio KPI, S&OP status, issue queue'],
    ['Forecast Lab', 'baseline model, TimesFM-ready contract, quantile shape'],
    ['Policy Radar', 'official-source customs and compliance signals'],
    ['Decision Brief', 'deterministic evidence first, optional model summary'],
    ['Release Gate', 'notice generation with material, capacity and policy gates'],
    ['Agent Runtime', 'tool schemas, workflow routing and source trace'],
  ];
  return (
    <section>
      <SectionHeader code="DOC-12" title={t(lang, 'Product Plan and Engineering Standard', '产品计划与工程标准')} subtitle={t(lang, 'The public repo is shaped as a reusable product shell with synthetic data, clear boundaries and verification gates.', '公开仓库按可复用产品骨架建设：合成数据、清晰边界、验证门禁。')} />
      <div className="case-columns">
        {modules.map(([title, body]) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PageBody({ page, lang }: { page: Page; lang: Lang }) {
  switch (page) {
    case 'sop': return <SopTower lang={lang} />;
    case 'forecast': return <ForecastLab lang={lang} />;
    case 'inventory': return <Inventory lang={lang} />;
    case 'trace': return <TracePage lang={lang} />;
    case 'notice': return <Notice lang={lang} />;
    case 'simulation': return <Simulation lang={lang} />;
    case 'policy': return <PolicyRadar lang={lang} />;
    case 'brief': return <Brief lang={lang} />;
    case 'qa': return <QA lang={lang} />;
    case 'agent': return <AgentTrace lang={lang} />;
    case 'integrations': return <Integrations lang={lang} />;
    case 'project': return <ProjectNotes lang={lang} />;
    default: return <Home lang={lang} />;
  }
}

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [lang, setLang] = useState<Lang>('en');
  const active = useMemo(() => pages.find((item) => item.id === page) ?? pages[0], [page]);
  const c = copy[lang];
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark"><Factory size={26} /><span>Ops Intelligence</span></div>
        <nav>
          {pages.map((item) => {
            const Icon = item.icon;
            return (
              <button className={item.id === page ? 'active' : ''} key={item.id} onClick={() => setPage(item.id)} title={t(lang, item.en, item.zh)}>
                <Icon size={17} />
                <span>{item.code}</span>
                <strong>{t(lang, item.en, item.zh)}</strong>
              </button>
            );
          })}
        </nav>
      </aside>
      <main className="workspace">
        <header className="topbar">
          <div className="title-block">
            <span className="kicker">{active.code}</span>
            <h1>{t(lang, active.en, active.zh)}</h1>
          </div>
          <div className="top-actions">
            <div className="mode-pill"><Database size={16} />{c.statusLoaded}</div>
            <div className="mode-pill"><Play size={16} />24h simulation ready</div>
            <button className="language-button" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} title="Switch language">
              <Languages size={17} />{lang === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </header>
        <PageBody page={page} lang={lang} />
      </main>
      <aside className="trace-rail">
        <h3>{c.sourceTrace}</h3>
        {topSources.map((item) => (
          <div className="trace-mini" key={`${item.label}-${item.value}`}><span>{item.label}</span><strong>{item.value}</strong></div>
        ))}
        <h3>{c.adapterStatus}</h3>
        {integrations.slice(0, 4).map((item) => (
          <div className="adapter-mini" key={item.adapter}>
            <span>{item.adapter}</span>
            <StatusChip value={item.mode} />
          </div>
        ))}
        <h3>Risk</h3>
        <div className="rail-risk"><AlertTriangle size={15} />{controlTower.kpis.material_watch_items} material watch</div>
        <div className="rail-risk"><Warehouse size={15} />{controlTower.kpis.open_internal_issues} open issues</div>
        <div className="rail-risk"><BarChart3 size={15} />{controlTower.kpis.forecast_4w_qty.toLocaleString()} 4w demand</div>
      </aside>
    </div>
  );
}
