# Portfolio Case Study

## English

Factory operations often depend on separated exports: BOM tables, WMS stock, customer orders, inbound shipments, supplier delivery notes, production notice templates, and line simulation assumptions. The project connects those fragments into one operations intelligence prototype.

The demo follows one product, `FG-6205-2RS`, through material coverage, production release, and 24h line simulation. Every key number is calculated from synthetic demo data and can be traced back to source rows.

The agent layer exposes factory tools instead of free-form answers. It can check material coverage, generate a production notice, run a line simulation, detect the bottleneck, and record the tool trace.

## 中文

很多工厂运营问题不是缺少系统，而是数据被分散在 BOM 表、WMS 库存、客户订单、在途记录、供应商交付、生产通知单模板和现场节拍假设里。这个项目把这些碎片连接成一个可运行的运营智能原型。

演示围绕 `FG-6205-2RS` 展开：从物料覆盖、生产放行，到 24 小时产线仿真。关键数字来自合成 demo 数据，并保留来源行记录。

Agent 层不直接生成业务判断，而是调用工具：检查物料覆盖、生成生产通知单、运行产线仿真、识别瓶颈，并记录工具调用轨迹。

## Capability Evidence

| Area | Evidence |
|---|---|
| Data modeling | BOM, inventory, orders, shipments, supplier delivery, production line configuration |
| Business calculation | Material coverage, shortage, surplus, bottleneck, quality bottleneck |
| Agent design | Tool registry, workflow names, trace records, mock provider by default |
| Integration design | ERP/WMS/MES/PLC/WeChat/MCP adapter modes |
| Portfolio packaging | Bilingual documentation, screenshots, demo script, validation scripts |

