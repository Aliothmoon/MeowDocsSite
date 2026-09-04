# MeowDocsSite

MaaMeow 常见问题与使用指南，线上地址 https://docs.maameow.com 。基于 Astro Starlight + Nova 主题。

## 本地开发

```bash
npm install
npm run dev
```

内容在 `src/content/docs/faq/`，每个 Markdown 文件是一页，`sidebar.order` 决定顺序。截图放在 `src/assets/faq/`。

## 手动部署

服务器 MyAkkoCloud（38.59.245.33），nginx 站点根目录 `/var/www/maameow-docs`，配置在 `/etc/nginx/conf.d/docs.maameow.com.conf`，证书由 acme.sh 自动续期。

```bash
npm run build
tar -C dist -czf dist.tar.gz .
scp dist.tar.gz root@38.59.245.33:/tmp/maameow-docs.tar.gz
ssh root@38.59.245.33 'rm -rf /var/www/maameow-docs.new && mkdir -p /var/www/maameow-docs.new \
  && tar -xzf /tmp/maameow-docs.tar.gz -C /var/www/maameow-docs.new \
  && rm -rf /var/www/maameow-docs.old && mv /var/www/maameow-docs /var/www/maameow-docs.old \
  && mv /var/www/maameow-docs.new /var/www/maameow-docs \
  && rm -rf /var/www/maameow-docs.old /tmp/maameow-docs.tar.gz'
```
