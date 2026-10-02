# MeowDocsSite

MaaMeow 常见问题与使用指南，线上地址 https://docs.maameow.com 。基于 Astro Starlight + Nova 主题。

## 本地开发

```bash
npm install
npm run dev
```

内容在 `src/content/docs/faq/`，每个 Markdown 文件是一页，`sidebar.order` 决定顺序。截图放在 `src/assets/faq/`。

## 多语言

中文是默认语言，路径不带前缀。英文版在 `src/content/docs/en/`，文件名和目录结构与中文一一对应，访问路径是 `/en/...`。没有对应英文文件的页面会回退显示中文。

改中文内容后记得同步英文文件，注意三点：

- 图片路径比中文多一层：`../../../../assets/faq/`。
- 站内链接写成 `/en/faq/...`，锚点用英文标题生成的 slug。
- 英文页面只写英文译名，不夹带中文。例外是读者必须照着比对或输入的字面内容，比如文件名前缀 `一图流`、B 站搜索关键词，以及还没有官方英文名的「黑流树海」。

站点标题、导航和侧边栏的译名在 `astro.config.mjs` 里。

## 部署

纯静态站点，`npm run build` 后把 `dist/` 上传到服务器即可。服务器信息和完整步骤见本地的 `DEPLOY.md`（不入库）。
