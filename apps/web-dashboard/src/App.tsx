import {
  Activity,
  Boxes,
  ClipboardList,
  Database,
  Factory,
  FileInput,
  GitBranch,
  Languages,
  Network,
  Play,
  Radar,
  Route,
  ScrollText,
  Search,
  ServerCog,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { copy, integrations, imports, Lang, machines, materials, traces } from './data';

type Page =
  | 'home'
  | 'import'
  | 'inventory'
  | 'trace'
  | 'notice'
  | 'simulation'
  | 'report'
  | 'qa'
  | 'agent'
  | 'integrations'
  | 'portfolio';

const pages: Array<{ id: Page; icon: typeof Factory; en: string; zh: string; code: string }> = [
  { id: 'home', icon: Factory, en: 'Operations Console', zh: '运营总控', code: 'OPS-00' },
  { id: 'import', icon: FileInput, en: 'Data Import', zh: '数据导入', code: 'IMP-01' },
  { id: 'inventory', icon: Boxes, en: 'BOM & Inventory', zh: 'BOM 与库存', code: 'BOM-02' },
  { id: 'trace', icon: Route, en: 'Material Trace', zh: '物料追溯', code: 'TRC-03' },
  { id: 'notice', icon: ClipboardList, en: 'Notice Generator', zh: '通知单生成', code: 'PN-04' },
  { id: 'simulation', icon: Activity, en: 'Line Simulation', zh: '产线仿真', code: 'SIM-05' },
  { id: 'report', icon: Radar, en: 'Simulation Report', zh: '仿真报告', code: 'REP-06' },
  { id: 'qa', icon: Search, en: 'Factory Q&A', zh: '运营问答', code: 'QA-07' },
  { id: 'agent', icon: GitBranch, en: 'Agent Trace', zh: '工具轨迹', code: 'AGT-08' },
  { id: 'integrations', icon: ServerCog, en: 'Integrations', zh: '接口状态', code: 'INT-09' },
  { id: 'portfolio', icon: ScrollText, en: 'Case Study', zh: '项目案例', code: 'CASE-10' },
];

function t(lang: Lang, en: string, zh: string) {
  return lang === 'en' ? en : zh;
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

function Home({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <div className="page-grid home-grid">
      <section className="hero-panel">
        <SectionHeader
          code="OPS-00"
          title={c.title}
          subtitle={c.subtitle}
        />
        <div className="ops-loop">
          {['ERP', 'WMS', 'Excel', 'Intelligence Layer', 'Dashboard', 'Simulation', 'Notice', 'Agent Tools'].map((item, index) => (
            <div className="loop-node" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>
      <aside className="right-rail">
        <h3>{t(lang, 'Live Demo Status', '演示状态')}</h3>
        {[
          c.statusLoaded,
          c.mode,
          'Source rows linked',
          'Tool call recorded',
          'Adapter-ready contracts',
        ].map((item) => (
          <div className="rail-row" key={item}>
            <span className="signal signal-green" />
            <span>{item}</span>
          </div>
        ))}
      </aside>
      <section className="wide-panel">
        <h3>{t(lang, 'Main operating loop', '主业务闭环')}</h3>
        <div className="flow-line">
          {['File import', 'BOM demand', 'Inventory coverage', 'Production notice', '24h simulation', 'Agent report'].map((item) => (
            <div className="flow-step" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ImportCenter({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="IMP-01" title={t(lang, 'Data Import Center', '数据导入中心')} subtitle={t(lang, 'Classified demo files with source trace.', '带来源追溯的演示文件分类。')} />
      <div className="table-panel">
        <table>
          <thead>
            <tr><th>File</th><th>Type</th><th>Rows</th><th>Quality</th><th>Source</th></tr>
          </thead>
          <tbody>
            {imports.map((row) => (
              <tr key={row.file}>
                <td>{row.file}</td><td>{row.type}</td><td>{row.rows}</td><td><StatusChip value={row.quality} /></td><td>{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Inventory({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="BOM-02" title={t(lang, 'BOM & Inventory Dashboard', 'BOM 与库存看板')} subtitle={t(lang, 'Finished product demand is exploded into component coverage.', '成品需求被拆解为组件覆盖状态。')} />
      <div className="metric-strip">
        <div><span>Order</span><strong>SO-2026-0607-01</strong></div>
        <div><span>Product</span><strong>FG-6205-2RS</strong></div>
        <div><span>Quantity</span><strong>12,000 pcs</strong></div>
        <div><span>Coverage</span><strong>5 covered / 1 watch</strong></div>
      </div>
      <div className="table-panel">
        <table>
          <thead>
            <tr><th>Material</th><th>Name</th><th>Required</th><th>Coverage</th><th>Status</th><th>Supplier</th><th>Source</th></tr>
          </thead>
          <tbody>
            {materials.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td><td>{row.name}</td><td>{row.required.toLocaleString()}</td><td>{row.coverage.toLocaleString()}</td><td><StatusChip value={row.status} /></td><td>{row.supplier}</td><td>{row.source}</td>
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
      <SectionHeader code="TRC-03" title={t(lang, 'Product Material Trace', '成品物料追溯')} subtitle={t(lang, 'Finished product to BOM, stock, inbound, order, and supplier.', '成品连接 BOM、库存、在途、订单和供应商。')} />
      <div className="trace-chain">
        {['FG-6205-2RS', 'BOM v1', '6 components', 'WMS stock', 'Inbound ETA', 'Supplier status'].map((item, index) => (
          <div className="trace-card" key={item}>
            <span>{`T${index + 1}`}</span>
            <strong>{item}</strong>
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
      <SectionHeader code="PN-04" title={t(lang, 'Production Notice Generator', '生产通知单生成器')} subtitle={t(lang, 'Preview built from product, order, BOM, and material gate.', '根据成品、订单、BOM 和物料放行状态生成预览。')} />
      <div className="notice-layout">
        <aside className="form-stack">
          <label>Product <strong>FG-6205-2RS</strong></label>
          <label>Quantity <strong>12,000 pcs</strong></label>
          <label>Order <strong>SO-2026-0607-01</strong></label>
          <label>Template <strong>bearing-production-notice/v1</strong></label>
        </aside>
        <article className="notice-sheet">
          <h1>Production Notice PN-20260607-DEMO</h1>
          <p><b>Product:</b> 6205-2RS Deep Groove Bearing</p>
          <p><b>Material gate:</b> Release with GreenChem follow-up</p>
          <table>
            <tbody>
              {materials.slice(0, 4).map((row) => (
                <tr key={row.id}><td>{row.id}</td><td>{row.required.toLocaleString()}</td><td>{row.status}</td></tr>
              ))}
            </tbody>
          </table>
        </article>
        <aside className="form-stack">
          <label>Field status <strong>validated</strong></label>
          <label>Source rows <strong>14 linked</strong></label>
          <label>Export <strong>HTML / JSON</strong></label>
        </aside>
      </div>
    </section>
  );
}

function Simulation({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="SIM-05" title={t(lang, 'Production Line Simulation', '产线节拍仿真')} subtitle={t(lang, 'Machine states, buffers, transport links, and deterministic 24h output.', '设备状态、缓存、传送连接与 24 小时确定性产出。')} />
      <div className="line-map">
        {machines.map((machine, index) => (
          <div className={`machine machine-${machine.state}`} key={machine.id}>
            <span>{machine.id}</span>
            <strong>{machine.name}</strong>
            <em>{machine.output.toLocaleString()} pcs</em>
            {index < machines.length - 1 && <i />}
          </div>
        ))}
      </div>
    </section>
  );
}

function Report({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="REP-06" title={t(lang, 'Simulation Report', '仿真报告')} subtitle={t(lang, 'Bottleneck, output, scrap, utilization, waiting, and blocking.', '瓶颈、产量、废品、利用率、等待和堵料。')} />
      <div className="report-grid">
        {[
          ['Good output', '23,512 pcs'],
          ['Scrap output', '410 pcs'],
          ['Bottleneck', 'OP-40 Cage pressing'],
          ['Quality bottleneck', 'OP-50 Seal and grease'],
          ['Avg utilization', '88.6%'],
          ['Blocking time', '5.14 h'],
        ].map(([label, value]) => (
          <div className="report-cell" key={label}><span>{label}</span><strong>{value}</strong></div>
        ))}
      </div>
    </section>
  );
}

function QA({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="QA-07" title={t(lang, 'AI Factory Q&A', '工厂运营问答')} subtitle={t(lang, 'Questions are answered through registered factory tools.', '问题通过已注册的工厂工具回答。')} />
      <div className="qa-layout">
        <div className="question-box">Can FG-6205-2RS be released for production?</div>
        <div className="answer-box">
          <b>Result:</b> material coverage status is watch.<br />
          <b>Evidence:</b> 5 covered items, 1 watch item, 0 critical items.<br />
          <b>Source:</b> BOM rows and WMS inventory rows are linked.<br />
          <b>Next check:</b> confirm GreenChem lot release before batch start.
        </div>
      </div>
    </section>
  );
}

function AgentTrace({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="AGT-08" title={t(lang, 'Agent Tool Trace', 'Agent 工具轨迹')} subtitle={t(lang, 'Question, workflow, tool calls, result, and timestamp.', '问题、工作流、工具调用、结果和时间戳。')} />
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
      <SectionHeader code="INT-09" title={t(lang, 'Integration Status', '接口状态')} subtitle={t(lang, 'Adapter mode and scope remain explicit.', '接口模式和范围保持明确。')} />
      <div className="adapter-grid">
        {integrations.map((item) => (
          <div className="adapter" key={item.adapter}>
            <Network size={18} />
            <strong>{item.adapter}</strong>
            <StatusChip value={item.mode} />
            <p>{item.scope}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio({ lang }: { lang: Lang }) {
  return (
    <section>
      <SectionHeader code="CASE-10" title={t(lang, 'Portfolio Case Study', '作品集案例')} subtitle={t(lang, 'A manufacturing operations prototype built from field workflows.', '来自现场流程的制造运营原型。')} />
      <div className="case-columns">
        <div>
          <h3>Problem</h3>
          <p>Factory teams often compare BOM, stock, orders, inbound shipments, notice templates, and line assumptions across separated files.</p>
        </div>
        <div>
          <h3>System</h3>
          <p>The prototype connects those records into a traceable operating layer with adapters, deterministic tools, and a dashboard.</p>
        </div>
        <div>
          <h3>Agent design</h3>
          <p>The agent layer calls factory tools, records workflow traces, and explains results with source-backed evidence.</p>
        </div>
      </div>
    </section>
  );
}

function PageBody({ page, lang }: { page: Page; lang: Lang }) {
  switch (page) {
    case 'import': return <ImportCenter lang={lang} />;
    case 'inventory': return <Inventory lang={lang} />;
    case 'trace': return <TracePage lang={lang} />;
    case 'notice': return <Notice lang={lang} />;
    case 'simulation': return <Simulation lang={lang} />;
    case 'report': return <Report lang={lang} />;
    case 'qa': return <QA lang={lang} />;
    case 'agent': return <AgentTrace lang={lang} />;
    case 'integrations': return <Integrations lang={lang} />;
    case 'portfolio': return <Portfolio lang={lang} />;
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
        <div className="brand-mark"><Factory size={28} /><span>Factory Ops</span></div>
        <nav>
          {pages.map((item) => {
            const Icon = item.icon;
            return (
              <button className={item.id === page ? 'active' : ''} key={item.id} onClick={() => setPage(item.id)} title={t(lang, item.en, item.zh)}>
                <Icon size={18} />
                <span>{item.code}</span>
                <strong>{t(lang, item.en, item.zh)}</strong>
              </button>
            );
          })}
        </nav>
      </aside>
      <main className="workspace">
        <header className="topbar">
          <div>
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
        <div className="trace-mini"><span>BOM</span><strong>bom_6205_demo.xlsx:2-7</strong></div>
        <div className="trace-mini"><span>WMS</span><strong>wms_inventory_demo.csv:2-7</strong></div>
        <div className="trace-mini"><span>Order</span><strong>sales_orders_demo.csv:2</strong></div>
        <h3>{c.adapterStatus}</h3>
        {integrations.slice(0, 4).map((item) => (
          <div className="adapter-mini" key={item.adapter}>
            <span>{item.adapter}</span>
            <StatusChip value={item.mode} />
          </div>
        ))}
      </aside>
    </div>
  );
}
