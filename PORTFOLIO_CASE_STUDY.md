# Portfolio Case Study

## English

Factory operations often depend on separated exports: BOM tables, WMS stock, customer orders, inbound shipments, supplier delivery notes, production notice templates, and line simulation assumptions. The project connects those fragments into one operations intelligence prototype.

The demo follows one product, `FG-6205-2RS`, through material coverage, production release, and 24h line simulation. The data pack includes 20 materials, 4 finished products, 8 customer orders, stock locations, inbound shipments, supplier delivery records, 2 production lines, adapter contracts, workflow records, and machine events. Every key number is calculated from synthetic demo data and can be traced back to source rows.

The agent layer exposes factory tools instead of free-form answers. It can search materials, retrieve BOM records, explode demand, calculate inventory risk, check order coverage, generate a production notice, run a line simulation, fetch the report, detect the bottleneck, generate a daily report, and record the question-to-tool trace.

## 中文

很多工厂运营问题不是缺少系统，而是数据被分散在 BOM 表、WMS 库存、客户订单、在途记录、供应商交付、生产通知单模板和现场节拍假设里。这个项目把这些碎片连接成一个可运行的运营智能原型。

演示围绕 `FG-6205-2RS` 展开：从物料覆盖、生产放行，到 24 小时产线仿真。数据包包含 20 个物料、4 个成品、8 个客户订单、库位、在途记录、供应商交付、2 条产线、接口合约、工作流记录和设备事件。关键数字来自合成 demo 数据，并保留来源行记录。

Agent 层不直接生成业务判断，而是调用工具：搜索物料、读取 BOM、拆解需求、计算库存风险、检查订单覆盖、生成生产通知单、运行产线仿真、读取报告、识别瓶颈、生成日报，并记录工具调用轨迹。

## Capability Evidence

| Area | Evidence |
|---|---|
| Data modeling | BOM, inventory, orders, shipments, supplier delivery, production line configuration |
| Business calculation | Material coverage, shortage, surplus, bottleneck, quality bottleneck |
| Agent design | Tool registry, workflow names, trace records, mock provider by default |
| Integration design | ERP/WMS/MES/PLC/WeChat/MCP adapter modes |
| Portfolio packaging | Bilingual documentation, screenshots, demo script, validation scripts |

## Demo Evidence

| Demo area | Evidence |
|---|---|
| Data import | `file_imports.json` records parser, quality, source system and row count. |
| BOM & inventory | `calculate_inventory_risk` returns component demand, stock, inbound, supplier status and source refs. |
| Material trace | `product_material_trace` links product, order, BOM, WMS stock, inbound shipment and supplier delivery context. |
| Production notice | `generate_production_notice` returns notice ID, HTML preview, material gate, template version and source refs. |
| Simulation | `run_line_simulation` returns 24h output, scrap, utilization, waiting, blocking, bottleneck and machine events. |
| Agent Q&A | `answer_factory_question` records selected intent, workflow, tool calls, tool inputs, outputs and source refs. |
| Integrations | `adapters.json` lists mock/stub/sample mode, accepted payloads, last sample and known gaps. |
