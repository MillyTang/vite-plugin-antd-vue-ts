# vite-plugin-antd-vue-ts

> 与另一个项目的区别，这是ts版本+使用es6模块写的，兼容cjs模块

ts版本的：commonjs模块方式：转换 ant-design-vue UI 框架里的moment为dayjs

1. 下载 `dayjs`
2. 下载 `vite-plugin-antd-vue-ts`插件
3. 在 `vite.config.js`中增加配置

```bash
yarn add dayjs
yarn add git+ssh://git@github.com:MillyTang/vite-plugin-antd-vue-ts.git --dev
```

```js
// 引入插件
// 如果要用 require引用也是可以的，你自己的ts项目中的eslintrc配置好允许 require 即可
import vitePluginAntdVueTs from 'vite-plugin-antd-vue-ts'
{
  plugins: [
    vue(), // vite vue3 项目中必带的插件
    vitePluginAntdVueTs()
  ]
}
```

```js
// main.js引入
import 'moment-to-dayjs-for-antd-vue'
```
