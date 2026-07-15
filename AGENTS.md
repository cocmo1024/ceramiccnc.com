# Repository instructions

## 内容改动前置要求

任何新增、改写、合并或删除公开内容的任务，必须先完整阅读根目录的 [CONTENT_UPDATE_GUIDE.md](./CONTENT_UPDATE_GUIDE.md)。长期选题同时读取 `docs/industrial-ceramic-long-term-seo-roadmap.md`；文章图片同时读取 `docs/article-image-prompt-protocol.md`。

内容范围包括：

- `src/data/post/**/*.{md,mdx}`
- `src/pages/` 中的公开营销、材料、能力、应用、RFQ 页面
- `src/data/article-topic-hubs.ts`
- `src/data/application-hubs.ts`
- `src/data/ceramic.ts`
- 与内容直接相关的图片、metadata、redirect、RSS、sitemap 和结构化数据

## 不可绕过的约束

- 站点定位是精密陶瓷 CNC/磨削/研磨的工程评审与 RFQ 支持，不是陶瓷 AM、普通陶瓷百科或承诺式报价站。
- 优先刷新已有 URL，禁止创建搜索意图重复的近义页面。
- 不随意改文章文件名或父目录；两者都会影响当前 permalink。
- 不承诺未经图纸评审的公差、价格、交期、可制造性或“所有陶瓷”能力。
- 不虚构设备、认证、产能、客户案例、测试数据、良率或交付结果。
- 工程数值必须带材料牌号、条件、单位和可核验来源；理论材料值不能写成成品保证。
- `publishDate` 不因刷新而改变；`updateDate` 只在实质技术复核后设置。
- 新文章必须接入合适的 topic/application hub，并保留尾斜杠 canonical。
- 不手改 `dist/`，不重新启用薄 tag/category 归档，不把内部 prompt、GSC 数据或客户资料发布到站点。

## 最低验证

```powershell
npm run check
npm run build
npx wrangler deploy --dry-run
git diff --check
```

部署和生产验收必须继续执行 `CONTENT_UPDATE_GUIDE.md` 中的完整清单。
