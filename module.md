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
file-loader