# teameddie.top

人在长沙，白天做 AI 工具出海，晚上折腾这个小站。

一开始只是想有个地方放我自己的东西——写的字、听的歌、走过的路。不想挂在别人的平台上，被推荐算法决定谁能看到。域名买了，代码敲了，慢慢就长成了现在这样。

站点地址：<https://www.teameddie.top>

## 里面有什么

顶部导航能点到的四个地方：

- **首页** `/` —— 落地页，现在在做什么、在看什么、在听什么
- **写作** `/#/writing` —— 想清楚一件事之后写下来的字
- **音乐** `/#/music` —— 一份歌单，每首歌配了一段我自己写的小故事，中英双语。封面走 iTunes 代理，iTunes 搜不到的歌（比如余佳运《不对等天体》）就在 `fm.ts` 里手动填一条直链
- **关于** `/#/about` —— 我是谁，怎么找到我

## 藏起来的入口（备注给自己）

有三个页面写好了，但没放进导航，从站里点不到，只能直接敲 URL 进：

- 简历 —— <https://www.teameddie.top/#/resume>
- 案例 —— <https://www.teameddie.top/#/cases>
- 轨迹 —— <https://www.teameddie.top/#/timeline>

路由都还在 `src/App.tsx` 里，页面也都在，只是 `Header.tsx` 的导航数组里没列它们。哪天想重新露出来，把对应项加回 `navItems` 就行。

## 技术栈

React + Vite + TypeScript + Tailwind，i18n 做了中英双语。封面代理是一个 `api/cover.js`（Vercel Serverless Function）：`type=music` 时按「歌手 + 专辑 + 歌名」去 iTunes 搜第一条；带 `url=` 时直接代理外部图片直链（手动指定封面用这个）。

本地跑：

```bash
pnpm install
pnpm dev
```

打包：

```bash
pnpm build
```

## 踩过的坑（也是给自己看的）

- **专辑名写错，封面就错**。iTunes 用「歌手 + 专辑 + 歌名」拼串搜，只取第一条。专辑名填错（比如 tolerate it 填成 folklore，其实在 evermore），第一条就命中别的歌，静默给你一张错图。填数据的时候把专辑核对准。
- **iTunes 没有的歌，别硬搜**。国内一些歌手 iTunes 根本没上架，怎么搜都是 404。这种就在 `fm.ts` 那首歌里加一行 `cover: 直链`，走 `url=` 代理绕过去。
- **`.ts` 文件别塞 JSX**。组件代码（带 `<article>` 这种标签）只能放 `.tsx`，塞进 `.ts` 数据文件里 `tsc` 直接编译报一屏语法错，Vercel 部署当场失败。
