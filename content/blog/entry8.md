---
title: NuxtJS -- Going Full Static (中翻)

tags: Javascript, Vue, NuxtJS

category: Engineering

excerpt: NuxtJS 中，有個 nuxt generate 指令可以產出靜態頁面，但因為這功能是很早以前開發的，一直跟 NuxtJS ssr 的部分有著千絲萬縷的關聯(問題)，在 2.13.0 之後新增了 nuxt export 來產出'完全'的靜態頁面。

date: 2020-06-22

image: ./images/nuxt-static.png

image_caption: nuxt-static

author: author1

---

這是一篇 NuxtJS 部落格文章的中文翻譯，藉由將文件翻譯的過程，順便更加了解文章的內容以及 NuxtJS 的熟悉度。

## Too long to read

1. Upgrade nuxt to ```2.13.0```

2. Set `target: 'static'` in your `nuxt.config.js`

3. Run `nuxt build && nuxt export` instead of `nuxt generate`

4. That's it ✨

*Bonus: 你可以用 `nuxt serve` 來跑個本地 server 測試你生出來的靜態頁面。*

## Table of Contents

- [Too long to read](#too-long-to-read)


- [Table of Contents](#table-of-contents)


- [History](#history)


- [Current issues](#current-issues)


- [New config option: target](#new-config-optiontarget)


- [New command: nuxt export](#new-commandnuxt-export)

    - [Crazy fast static applications](#crazy-fast-static-applications)

    - [Crawler integrated](#crawler-integrated)

    - [Faster re-deploy](#faster-re-deploy)


- [New command: nuxt serve](#new-command:-nuxt-serve)


- [Preview mode](#preview-mode)


- [Commands](#commands)


- [Notes](#notes)

  - [What to do next](#what-to-do-next)

## History

Nuxt 從 [v0.3.2](https://github.com/nuxt/nuxt.js/releases/tag/v0.3.2)(November 2016)就有了靜態網站產生指令 `nuxt generate`，從那之後也做了很多改進，但一直沒有達到完全的靜態產生，今天 (Nuxt `2.13`) 終於誕生了完全靜態的 export 指令。

## Current issues

`nuxt generate` 大部分都是 pre-rendering，當你瀏覽用戶端時，`asyncData` 和 `fetch` 會被呼叫, *對你的 API 產生一個 request.* 而很多用戶都要求希望有 "full static" 模式。希望這兩個 hook 可以不要被呼叫，因為你的頁面的內容都已經 pre-rendered 了。

此外，開發經驗也沒最佳化:

- 你在 SSR 模式可以訪問 `req` 或 `res`，但是在 `nuxt generate` 時卻沒有。

- 只有在 `nuxt generate` 時 `process.static` 才是 `true`，使得開發 Nuxt 模組或是外掛的困擾。

- 在 `gererate.routes` 中你必須自己指定全部的 [dynamic routes](https://nuxtjs.org/guide/routing#dynamic-routes)，這非常的困難因為你無法造訪 nuxt module。

- 在開發模式中你無法測試 [SPA fallback](https://nuxtjs.org/guide/routing#spa-fallback)。

- `nuxt generate` 預設會跑 `nuxt build`，使得網站只有更新內容的時候也要花費過長的 gernerate 時間。

附記：你也可以用 [nuxt-payload-extractor](https://github.com/DreaMinder/nuxt-payload-extractor) 模組來達成，但有一點麻煩以及一些限制。

## New config option:`target`

為了改進如何告訴 Nuxt 想要將你的應用生成靜態網頁，我們介紹一個放在 `nuxt.config.js` 的屬性 `target`:
```
export default {
    target: 'static'
}
```
在有 static target 的時候用 `nuxt dev` 也能使開發經驗獲得改善:

- 從 context 中移除 `req` & `res`

- 從 404 中退回 ([see SPA fallback](https://nuxtjs.org/api/configuration-generate#fallback))

- `$route.query` 在 SSR 時永遠等於 `{}`

- `process.static` is `true`

我們也將 `process.target` 暴露出來給模組的的作者來做邏輯上的使用。

\*譯者註: *第4點真的蠻好用的，原本用 `process.static` 當邏輯做點 UI 的調整，要等 `nuxt generate` 出來以後才能知道結果，整個開發的很卡。*

## New command:`nuxt export`

為了避免破壞過去的 `nuxt generate`，我們使用了新的指令 `nuxt export`: 將你的 Nuxt app export 成靜態 HTML 到 `dist/` 資料夾裡。

>⚠️ 你得先跑 `nuxt build` 才能用 `nuxt export`

#### Crazy fast static applications

`nuxt export` 會 pre-render 你全部的頁面成 HTML 並且把 `asyncData` 和 `fetch` hook 裡面的資料存起來，讓之後用戶使用，意思就是 **在用戶端不再會有 API 呼叫**。並且把頁面的 payload 轉換成 js 檔案，更可以有效的減少檔案大小。

我們同時也改進了 [smart prefetching](https://nuxtjs.org/blog/introducing-smart-prefetching)，在純靜態時可以讓瀏覽切換近乎瞬間👀

#### Crawler integrated

nuxt 同時有爬蟲在裡面，偵測每個相關 route 並產生並產生頁面。如果你想要把很多 route 排除可以用 [generate.exclude](https://nuxtjs.org/api/configuration-generate#exclude)。你可以繼續使用 [generate.routes](https://nuxtjs.org/api/configuration-generate#routes) 來新增額外的 route 並且不會生出靜態頁面。

想要取消爬蟲，在 `nuxt.config.js` 設定 `generate.crawler: false`

#### Faster re-deploy

在將 `nuxt build` 以及 `nuxt export` 分開之後，我們就可以實作一個新的優化，只 pre-render 內容有改變的頁面，這代表 no Webpack build -> 快速重新部署

## New command: nuxt serve

當你把靜態頁面產出在 `dist/`後，可以在該資料夾使用 `nuxt serve`開啟一個 production 並支援 [SPA fallback](https://nuxtjs.org/guide/routing#spa-fallback) 的 server 

這指令可以讓你在將靜態內容上傳到雲端前檢查頁面。

## Preview mode

我們也支援實時預覽，只要加裝額外的 plugin:

```javascript
// plugins/preview.client.js
export default async function ({ query, enablePreview }) {
    if (query.preview) {
        enablePreview()
    }
}
```

開發時這將會自動重整頁面，(`nuxtServerInit`，`asyncData` 和 `fetch` 將會被呼叫)

## Commands

現在你可以根據 `target` 跑一些不同的指令

- `server`

    - `nuxt dev` 開啟開發 server

    - `nuxt build` 將 Nuxt app 打包

    - `nuxt start` 開始 production server

- `static`

    - `nuxt dev` 開啟開發 server (包含前面提的靜態改動)

    - `nuxt build` 將 Nuxt app 打包 (包含前面提的靜態改動)

    - `nuxt export` 將靜態頁面產生到 `dist/`

    - `nuxt serve` 從`dist/` 開始 production server

## Notes

- 我們在 `nuxt.config.js` 新增了 `export` key，那是 `generate` 的 alias，將會在 Nuxt 3 的時候取代。

- `nuxt generate` 將會不推薦使用了(但之前能用的可以繼續用)，並且會在 Nuxt 3 時移除。

- 我們新增了 export hooks 跟原本的 generate hooks 有些微不同，用於增進模組開發者的便利性。

#### What to do next

- 學習如何從 @nuxtjs/dotenv 移動到 runtime config ，請看這篇[文章](https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config)

- [訂閱](https://nuxtjs.org/blog/going-full-static#subscribe-to-newsletter)最新的新聞才不會漏掉任何最新文章與資源

本文翻譯自 [https://nuxtjs.org/blog/going-full-static](https://nuxtjs.org/blog/going-full-static)