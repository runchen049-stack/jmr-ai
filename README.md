# JMR AI Academy

这是一个纯静态网站，首页和 12 篇学习文章无需注册即可访问。课程内容、部署命令、API 购买说明和练习都在 `learn.html` / `learn.js` 中，管理后台是本地演示页面。

## 最快上线：Cloudflare Pages

1. 打开 <https://dash.cloudflare.com/>，注册或登录账号。
2. 进入 **Workers & Pages → Create application → Pages → Upload assets**。
3. 项目名填写 `jmr-ai`，把本目录中的全部文件上传（包括 `index.html`、`learn.html`、`*.js`、`*.css`、图片、`robots.txt`、`sitemap.xml` 和 `_headers`）。
4. 点击 **Deploy site**。Cloudflare 会先给你一个 `*.pages.dev` 预览地址。
5. 在项目的 **Custom domains → Set up a custom domain** 中填写 `jmr-ai.com` 和 `www.jmr-ai.com`，按页面提示完成。

如果域名也在 Cloudflare：把域名的 Nameserver 改成 Cloudflare 提供的两个地址，等待生效后，Pages 会自动配置 HTTPS。若 DNS 在其他服务商，使用服务商提供的 CNAME/ALIAS 能力：`www` 指向项目的 `*.pages.dev` 地址，根域名 `jmr-ai.com` 按 Cloudflare 页面给出的验证记录操作。不要自行猜测固定 IP。

## Vercel 备选

在 <https://vercel.com/new> 导入这个文件夹，保持 **Framework Preset = Other**、**Build Command 为空**、**Output Directory = .**，点击部署；然后进入项目 **Settings → Domains** 添加 `jmr-ai.com`。仓库根目录的 `vercel.json` 已提供静态缓存和基础安全响应头。

## 上线前检查

- 用 `https://jmr-ai.com/` 打开首页，用 `https://jmr-ai.com/learn.html?course=3` 检查部署文章。
- 检查浏览器地址栏证书为 HTTPS，并确认 `robots.txt` 和 `sitemap.xml` 能打开。
- 远程图片来自 Unsplash；如果需要完全离线访问，请把图片下载到本目录并替换 HTML 中的图片地址。
- 当前后台数据使用浏览器 `localStorage`，只适合演示。要做真实用户、学习进度、订单和自动收款，需要后端数据库、登录系统和支付服务商回调。

## 运行前台本地预览

在本目录执行：

```bash
python -m http.server 8080
```

然后打开 <http://localhost:8080/>。直接双击 HTML 也能阅读文章，但部分浏览器会限制本地文件的脚本或外部资源。
