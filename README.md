# 叶可禾 / Kehe Ye

个人学术主页。静态站点，Astro + Tailwind，中英双语。

- 英文：`/`
- 中文：`/zh/`

## 本地预览

依赖从 npmmirror 安装（见 `.npmrc`）。

```bash
pnpm install
pnpm dev
```

浏览器打开 `http://127.0.0.1:4321/`。生产构建：

```bash
pnpm build
pnpm preview
```

## 改内容

文案在 [`src/data/profile.ts`](src/data/profile.ts)，界面文字在 [`src/i18n/ui.ts`](src/i18n/ui.ts)。两边的中英字段是成对的，漏一处会在构建时被类型检查拦住。

## 部署

推到 `main` 或 `master` 后，GitHub Actions 把 `dist/` 发布到 GitHub Pages。仓库需要在 Settings → Pages 里选择 GitHub Actions 作为来源。

站点地址和子路径由工作流从 Pages 配置读取（`SITE_URL`、`BASE_PATH`），仓库改名或绑定自定义域名后不用改代码。

旧的 Jekyll 站点只留在本地的 `_legacy-jekyll/`，里面有不公开的联系方式，已被 `.gitignore` 排除。
