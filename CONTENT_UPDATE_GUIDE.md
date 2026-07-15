# CERAMIC CNC 内容更新执行指南

本指南适用于 `ceramiccnc.com` 的工程文章、应用 hub、材料/能力/RFQ 页面和相关图片。任何内容更新都必须维持“发送图纸与要求，完成工程评审后再确认”的定位；不能把网站写成能力承诺清单、普通陶瓷百科或陶瓷增材制造站。

## 1. 站点真实内容结构

主要内容位置：

- 工程文章：`src/data/post/**/*.md`、`src/data/post/**/*.mdx`
- 文章路由与 metadata：`src/pages/[...blog]/index.astro`
- 文章读取、排序和相关推荐：`src/utils/blog.ts`
- 工程指南列表：`/category/engineering-guide/`
- 文章主题接线：`src/data/article-topic-hubs.ts`
- 应用 hub：`src/data/application-hubs.ts`
- 共用商业内容与文章卡片：`src/data/ceramic.ts`
- 结构化数据：`src/utils/structured-data.ts`
- 图片：`src/assets/images/ceramic/`，文章图位于 `src/assets/images/ceramic/posts/`
- 长期选题与重复防控：`docs/industrial-ceramic-long-term-seo-roadmap.md`
- 文章图片规范：`docs/article-image-prompt-protocol.md`

当前文章 permalink 配置位于 `src/config.yaml`：`/posts/%slug%`。`src/utils/blog.ts` 目前把 collection id 的目录部分保留在 slug 中，所以：

```text
src/data/post/tolerances-gdt/example.md
→ https://ceramiccnc.com/posts/tolerances-gdt/example/
```

移动文件夹也会改变 URL，必须像改文件名一样谨慎。

## 2. 选题必须先有工程或搜索证据

新建页面前依次检查：

```powershell
rg -n -i "目标部件|材料|特征|失效模式|同义词" src/data/post src/pages src/data/ceramic.ts
rg -n "title:|excerpt:|metadata:|description:" src/data/post/<可能相关目录>
rg -n "<可能相关的 post id 或关键词>" src/data/article-topic-hubs.ts src/data/application-hubs.ts src/data/ceramic.ts
```

优先更新已有页面。只有以下条件同时成立才新建：

- 买家任务或 RFQ 决策与现有页面不同；
- 材料、部件、功能界面或验收方法造成真实的信息差异；
- 新页能提供独有的图纸输入、工艺路线、风险控制和验收证据；
- 不会与现有 URL 争夺同一批查询和内部链接。

使用 GSC 时按“查询 + 页面”检查：

1. 比较最近 28 天与前 28 天，重要主题再看 3 个月和去年同期。
2. 记录 impressions、clicks、CTR、average position 和实际落地页。
3. 查询已有展示页时，先扩写或纠正该页；不要另建“材料名 + machining”“材料名 + CNC”近义页。
4. 展示高、CTR 低时先检查标题/描述是否准确体现部件、关键约束和 RFQ 输出。
5. 排名下降时先核对索引、canonical、竞争页面、季节性和搜索意图变化。
6. GSC 尚无数据时，选题必须来自真实 RFQ 问题、工程决策缺口、应用 hub 缺口或 `docs/industrial-ceramic-long-term-seo-roadmap.md`，不能为了页数发布。

GSC 导出、客户图纸、报价、联系人和未公开业务数据不得写入公开内容。取数日期、窗口、查询、原承接 URL 与决策原因应保留在提交/工作记录中。

## 3. 搜索意图与重复页处理

每页应围绕一个工程决策展开，例如：

- 某类部件需要哪些 RFQ 输入；
- 某个功能特征如何影响材料、毛坯和加工路线；
- 哪些公差/表面/边缘是功能关键，如何测量；
- 买家应如何比较工艺路线或定义验收边界；
- 什么信息不足时必须暂停并澄清。

不要把同一答案分别写成“guide”“service”“supplier”“manufacturer”“custom”“precision”等近义落地页。发现意图重叠时：

1. 保留历史 URL、内容质量、展示和内部链接更强的页面。
2. 合并独有工程信息，删除重复营销段落。
3. 更新 `src/data/article-topic-hubs.ts`、`src/data/application-hubs.ts`、`src/data/ceramic.ts` 及正文链接。
4. 旧 URL 如被移除或迁移，在 `public/_redirects` 增加一次永久重定向。
5. 构建后确认 sitemap 只保留规范页，旧页不再生成。

## 4. URL、canonical 与发布日期

站点的 canonical 基础域和尾斜杠由 `src/config.yaml`、`src/utils/permalinks.ts` 和页面 layout 统一管理。

- 已上线文件名和父目录不能为优化标题而改变。
- 内部链接直接指向最终尾斜杠 URL。
- 不为普通文章手写不同域名或无尾斜杠的 `metadata.canonical`。
- `publishDate` 是首次发布日，更新旧文时不得重置。
- `updateDate` 只在技术结论、数据、路线、表格、RFQ 要求或重要来源被实质复核和更新时设置。
- 小修字词、排版、链接或图片压缩不应制造新的 `updateDate`。
- `src/utils/structured-data.ts` 使用 `publishDate` 生成 `datePublished`，使用 `updateDate || publishDate` 生成 `dateModified`；必须保持真实。
- 不添加无法持续维护的批量 `lastmod`，不使用未来日期。

## 5. 工程文章 frontmatter

新增文章应放入最准确的工程主题目录，而不是一律放到根目录。完整 post id 是“目录/文件名（无扩展名）”，后续 hub 接线必须使用这个完整 id。

```yaml
---
title: 'Decision-focused engineering title'
publishDate: YYYY-MM-DD
updateDate: YYYY-MM-DD # 仅旧页实质复核时使用；新页通常不需要
excerpt: '说明部件、关键约束和读者能得到的 RFQ/验收结果。'
category: Engineering Guide
tags: ['component-family', 'material', 'critical-feature', 'inspection']
author: 'CERAMIC CNC Engineering'
image: ~/assets/images/ceramic/posts/descriptive-file-name.webp
metadata:
  title: 'Concise search title'
  description: '准确说明材料/部件、工程风险、图纸输入和验收决策。'
---
```

约束：

- `title` 是页面 H1；`metadata.title` 可更短，但不能改变搜索意图。
- `excerpt` 应说明买家会得到什么，不写空泛的“complete guide”。
- `category` 保持 `Engineering Guide`，除非站点明确新增高质量可索引分类。
- tags 用少量真实工程维度，避免堆叠近义关键词；tag 归档当前在 `src/config.yaml` 中关闭。
- hero 图片 alt 当前由 `src/components/blog/SinglePost.astro` 使用文章标题生成；标题必须准确描述主题。
- 正文图片必须写具体 alt，不能使用“ceramic image”“product picture”。

## 6. 工程内容的必备结构

正文应根据主题覆盖以下多数项目，而不是照抄固定标题：

- 直接给出工程结论和适用边界；
- 所需材料牌号/纯度/状态或待确认的毛坯来源；
- 关键功能面、基准、配合、载荷、温度、介质或环境；
- 绿加工、烧结后金刚石磨削、研磨/抛光等路线选择条件；
- 薄壁、微孔、深孔、边崩、翘曲、亚表面损伤、夹持和清洗风险；
- 只对功能特征施加公差、形位、Ra、平面度等要求；
- 建议的 CMM、光学、轮廓、粗糙度、平面度或功能测试证据；
- 报价前必须提供的图纸/CAD、数量、时间、验收和包装信息；
- 不能确认或不适用的情形；
- 指向材料、能力、应用 hub、RFQ 页和补充文章的下一步链接。

表格要帮助做选择，例如“要求—为什么重要—RFQ 应提供什么—建议如何验收”。不要大量罗列无来源的“典型范围”。

## 7. 可核验性与来源

技术内容必须能追溯。优先使用：

1. 材料制造商/牌号供应商的正式 datasheet，并注明具体牌号、测试方法和条件；
2. ASTM、ISO、IEC、ASME 等标准的官方页面或编号；
3. 同行评审论文、专业手册和设备/量测厂商的一手技术资料；
4. 项目已确认的真实能力、工艺和检验流程。

执行规则：

- 材料数值必须带牌号、单位、温度、方向、测试条件和来源；不同 datasheet 的数值不能混成一个“陶瓷典型值”。
- 公差、Ra、平面度、微孔、薄壁和交期不得写成全站通用保证。只能写设计/RFQ 讨论范围，或明确说明取决于材料、尺寸、几何、毛坯、夹持和测量方法。
- 引用标准时写编号、版本/年份和适用范围；不要复制受版权保护的整段标准。
- 把计算假设、示例值和已验证能力清楚分开。
- 来源不支持的精确数字应删除或改成待图纸评审项。
- 任何客户案例必须有真实可核验记录并完成保密处理；否则只能写“示例场景”，不能冒充客户结果。

## 8. 禁止虚假能力宣称

以下说法默认禁止：

- “Guaranteed ±0.01 mm”或脱离部件条件的保证公差；
- “Any ceramic / any geometry / instant quote / fastest delivery”；
- 未经确认的设备清单、认证、产能、洁净等级、检测能力或厂内工序；
- 虚构客户名、项目、良率、交期、节省比例和测试结果；
- 把材料理论性能写成成品或本公司的制造保证；
- 把渲染图写成真实生产照片或已交付零件证据。

正确表达应是条件式和评审式：说明需要什么输入、哪些变量决定可行性、如何验证，以及由 `info@szcomo.com` 正式确认报价和技术承诺。

## 9. RFQ 实用性检查

每篇商业/工程文章结束前，应让读者知道最少需要提供：

- 2D drawing 与 STEP/CAD；
- 材料牌号/纯度、烧结状态及毛坯来源要求；
- 数量、原型/量产阶段和目标时间；
- 基准、关键功能面、配合件和装配/载荷环境；
- 公差、GD&T、表面粗糙度、边缘/崩边标准；
- 检验方法、报告、材料证明、清洗和包装要求。

站内统一 RFQ 路径是 `/rfq/`，正文 CTA 由 `src/components/blog/ArticleRfqCta.astro` 提供。不要在正文中发明另一个提交渠道或承诺即时价格。

## 10. Hub 与内部链接接线

新文章完成后，不代表已接入站点。使用完整 post id，例如：

```text
thin-wall-sleeves/ceramic-thin-wall-sleeve-bore-concentricity-rfq
```

按需完成：

1. 把 post id 加入 `src/data/article-topic-hubs.ts` 中 1–2 个最相关的 `postIds`。
2. 如果文章直接支持应用页面，把 id 加入 `src/data/application-hubs.ts` 对应 hub 的 `guidePostIds`。
3. 只有需要首页、材料、能力或 RFQ 卡片时才更新 `src/data/ceramic.ts`。
4. 从新文章链接到 `/rfq/`、一个主应用 hub 和必要的材料/能力页。
5. 从 1–3 个现有相关文章加入自然的上下文链接。
6. 避免每篇文章都链接到所有 hub；`getArticleTopicHubsForPost` 会控制展示数量。

内部链接必须指向真实最终路径。不要根据 frontmatter 标题猜 URL；按 `src/config.yaml` 与 `src/utils/blog.ts` 的规则计算并在 `dist/` 中验证。

## 11. 结构化数据

文章页会自动生成：

- canonical 与 Open Graph Article metadata：`src/pages/[...blog]/index.astro`
- `BlogPosting`：`src/utils/structured-data.ts`
- breadcrumb：`src/utils/structured-data.ts`

不要在 Markdown 中再粘贴一份 Article schema。发布前检查生成 HTML 中：

- headline 与 H1 一致；
- description 与页面内容一致；
- image 真实存在；
- datePublished/dateModified 真实；
- author 不冒充具名工程师或第三方机构；
- canonical、breadcrumb 和 URL 都是尾斜杠规范地址。

FAQ schema 只有页面真的展示对应问答且内容独有时才可添加；不要为了富摘要复制通用 FAQ。

## 12. 图片执行规则

先完整阅读 `docs/article-image-prompt-protocol.md`。文章 hero 默认要求：

- 16:9、无文字、无数字、无 logo、无 watermark；
- 展示与文章一致的材料、部件、加工特征、检验或包装情境；
- 不出现不可能的孔、悬空几何、金属占主导、普通陶瓷器皿或科幻发光；
- 保存为描述性 WebP 到 `src/assets/images/ceramic/posts/`；
- frontmatter `image` 使用 `~/assets/images/ceramic/posts/...webp`；
- 正文图片使用准确的相对路径和功能性 alt。

渲染图必须作为说明性视觉使用，不能暗示为真实车间、设备、客户零件或本公司的检测证据。优先用 HTML 表格表达数据和决策，不把小字写进图片。

## 13. 本地验证

先看改动范围：

```powershell
git diff --check
git status --short
```

固定验证：

```powershell
npm run check
npm run build
npx wrangler@4.111.0 deploy --dry-run
```

然后检查本次路由、canonical、日期、schema、sitemap 和 RSS：

```powershell
rg -n "<loc>" dist/sitemap-0.xml dist/sitemap-index.xml
rg -n "本次文章 slug|本次文章标题" dist/sitemap-0.xml dist/rss.xml dist --glob "*.html"
rg -n "canonical|datePublished|dateModified|BlogPosting" dist/posts/<topic-family>/<slug>/index.html
rg -n "noindex" dist --glob "*.html"
```

还要人工预览桌面和移动端：

- 表格可以横向查看且不截断正文；
- 数学、单位、上下标和特殊符号正确；
- hero 和正文图片不变形，alt 合理；
- RFQ CTA、hub、相关文章和邮件链接可用；
- 无公开的内部 prompt、选题策略、GSC 数据或客户资料。

不要用 `npm run fix` 对整个仓库做无关格式化。确需格式化时只处理本次文件，并重新检查 diff。

## 14. 提交、部署与生产验收

部署配置是根目录 `wrangler.jsonc`，目标为 Cloudflare Workers Static Assets，静态目录为 `dist`。完成审核后：

```powershell
git add <本次明确修改的文件>
git commit -m "Update <ceramic topic> content"
git push origin main
npx wrangler@4.111.0 deploy
```

`4.111.0` 是本指南当前验证过的 Wrangler 版本；升级部署工具应作为单独改动完成 dry-run 和生产验收，并同步更新本文件。

如果之后启用 Git 集成自动部署，发布前确认唯一部署链路，避免自动和手动部署使用不同版本。

生产检查：

```powershell
curl.exe -I https://ceramiccnc.com/posts/<topic-family>/<slug>/
curl.exe -I https://ceramiccnc.com/category/engineering-guide/
curl.exe -I https://ceramiccnc.com/sitemap-index.xml
curl.exe -I https://ceramiccnc.com/rss.xml
```

验收标准：

- 本次页和 hub 返回 `200`；如有迁移，旧 URL 只经过一次永久重定向。
- 页面 canonical、OG、breadcrumb 和 sitemap 使用同一个尾斜杠 URL。
- title、description、H1、图片和正文意图一致。
- `BlogPosting` 的发布日期、修改日期、作者和图片真实。
- sitemap 与 RSS 有新页且没有重复 URL；薄 tag/category 归档没有被意外重新启用。
- 站内链接、RFQ CTA 和 `info@szcomo.com` 联系路径有效。
- `/api`、临时文件、客户数据、图片 prompt 和内部 SEO 说明没有进入生产输出。

上线后记录提交号和 Cloudflare 部署版本。7–14 天后观察 GSC 是否由预期查询承接；重大刷新以 28 天窗口复盘。不要因为几天内没有增长就再次改 slug、发布日期或创建近义页。
