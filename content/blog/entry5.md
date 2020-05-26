---
title: 盡信框架，不如不要框架，vuetifyjs 踩雷心得。

tags: Javascript, Vue

category: Engineering

excerpt: 因為公司案子使用了 vuetifyjs 這個 css framework，卻遇到了麻煩的效能問題，就做了個實驗來驗證，到底用框架會遇到啥問題。

date: 2020-05-27

image: ./images/vuetify.jpg

image_caption: vuetify

author: author1

---

# 盡信框架，不如不要框架，vuetifyjs 踩雷心得。

因為公司案子使用了 vuetifyjs 這個 css framework，卻遇到了麻煩的效能問題，就做了個實驗來驗證，到底用框架會遇到啥問題？



由於公司業務需求，有個頁面需要 200 個左右的 checkbox，本來這個數量我覺得還好，結果實作出來後，卻導致了明顯有感的效能問題(畫面卡頓)，
