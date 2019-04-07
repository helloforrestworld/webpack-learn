# webpack: 模块打包工具

## 什么是 webpack 模块

可划分为以下几种：

- An ES2015 import statement (https://webpack.js.org/api/module-methods#es6-recommended)
- A CommonJS require() statement(https://webpack.js.org/api/module-methods#commonjs)
- An AMD define and require statement (http://javascript.ruanyifeng.com/tool/requirejs.html#toc1)
- CMD ('https://juejin.im/post/5a422b036fb9a045211ef789')
  - 一个文件一个模块，所以经常就用文件名作为模块 id
  - AMD 推崇依赖前置，在定义模块的时候就要声明其依赖的模块
  - CMD 推崇就近依赖，只有在用到某个模块的时候再去 require
- An @import statement inside of a css/sass/less file.
- An image url in a stylesheet (url(...)) or html (`<img src=...>`) file.

webpack-cli 使得我们能在命令行使用 webpack 命令

## Loader

loader 打包的方案

use 里面 loader 的顺序从下到上 从右到左的执行顺序

### 静态资源打包

#### 图片打包

file-loader

url-loader

#### 样式的文件的打包

style-loader 挂载在 index.html `<style></style>`

css-loader 分析 css 依赖关系, 整合 css 文件

css-loader importLoaders参数说明

- 查询参数 importLoaders，用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader

  - 如果样式文件中用了@import语法引入其他样式文件， 如index.scss里面```@import './a.css'```，则会匹配css-loader进行处理，而css-loader后的loader则不会执行,为了解决这个问题,可以在css-loader指定importLoaders,说明还有多少个loader需要执行

sass-loader 做 scss 文件编译

postcss-loader

- plugins
  - autoprefixer

#### css模块化打包
