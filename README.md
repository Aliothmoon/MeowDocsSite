# MeowDocsSite

MaaMeow 常见问题与使用指南，线上地址 https://docs.maameow.com 。基于 Astro Starlight + Nova 主题。

## 本地开发

```bash
npm install
npm run dev
```

内容在 `src/content/docs/faq/`，每个 Markdown 文件是一页，`sidebar.order` 决定顺序。截图放在 `src/assets/faq/`。

## 部署

纯静态站点，`npm run build` 后把 `dist/` 上传到服务器即可。服务器信息和完整步骤见本地的 `DEPLOY.md`（不入库）。
