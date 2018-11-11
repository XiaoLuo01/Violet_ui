# 轱辘 - 一个 Vue UI 组件

作者: Carol

[![Build Status](https://www.travis-ci.org/XiaoLuo01/Violet_ui.svg?branch=master)](https://www.travis-ci.org/XiaoLuo01/Violet_ui)

<!-- [![NPM](https://nodei.co/npm/violet_ui.png)](https://npmjs.org/violet_ui/violet_ui) -->

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架, 希望对你有帮助.

## 开始使用

1. 添加 CSS 样式

使用本框架前, 请在 CSS 中开启 border-box

```css
*,
* ::before,
* ::after {
  box-sizing: border-box;
}
```

IE 8 及以上浏览器都支持此样式

你还需要设置默认颜色等变量(后续会改为 scss 变量)

```css
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
IE 15 及以上浏览器都支持此样式

2. 安装 violet_ui

```
npm i -S violet_ui
```

3. 引入 violet_ui
```js
import {Button} from 'violet_ui'
import 'violet_ui/dist/index.css'

export default {
  name: 'app',
  components: {
    Button
  }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
