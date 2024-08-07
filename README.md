architect-plan/
├── src/
│   ├── test/
│   │   └── index.ts
│   └── index.ts
├── dist/
│   └── bundle.js
│   └── bundle.js.map
└── index.html
└── package.json
└── rollup.config.js
└── tsconfig.json

🚫禁止使用Webpack  
🪜渐进式学习工程化  

0. 安装包管理工具 pnpm
```
brew install pnpm
```
```
pnpm config get registry
```
查看pnpm的配置：源
默认https://registry.npmjs.org/
```
pnpm config set registry https://registry.npmmirror.com
```
切换为淘宝镜像源
1. 初始化项目
```
npm init -y
```
2. 生成[package.json](./package.json)  

📦使用Rollup打包  
```
yarn add rollup
```
* 配置[rollup.config.js](./rollup.config.js)  
* 更新[package.json](./package.json)  

👮使用TypeScript，加入类型系统  
```
yarn add @rollup/plugin-typescript typescript tslib
```
* 配置[tsconfig.json](./tsconfig.json)
* 更新[rollup.config.js](./rollup.config.js)  

🌲启用摇钱树，减少代码输出  
```
 yarn add rollup-plugin-terser  
```
* 使用摇钱树的前提：使用 ESModule 模块语法  
* 更新[rollup.config.js](./rollup.config.js)  

👗启用Prettier  
代码格式化，更美丽
1. install  
```
yarn add --dev --exact prettier
```
2. create empty prettierrc
```
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```
* 配置[.prettierrc](./.prettierrc)  

3. create empty prettierignore
```
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```
* 配置[.prettierignore](./.prettierignore)  

🚫🚫🚫 Never use ESLint it is a bullshit  

📦切换为包管理工具pnpm  
删除/node_modules、yarn.lock 和 dist后，重新安装依赖库pnpm install  

~~出现一个问题:~~
~~tsconfig.json文件抛红~~

~~找不到“estree”的类型定义文件。~~
  ~~程序包含该文件是因为:~~
    ~~隐式类型库 "estree" 的入口点ts~~
~~找不到“node”的类型定义文件。~~
  ~~程序包含该文件是因为:~~
    ~~隐式类型库 "node" 的入口点ts~~

~~解决办法~~
~~pnpm add -D @types/estree @types/node~~

~~原因：~~  
~~tsconfig文件没有正确配置。使用某些包管理器时，这个问题浮出了水面~~  
~~* 更新[tsconfig.json](./tsconfig.json)~~

我从devDependence中删除了@types/estree和@types/node  
他们是无辜的，不需要被引入

🎍启用实验性质的特性：装饰器
* 更新[tsconfig.json](./tsconfig.json)

🚀切换为SWC编译器  
不使用tsc编译器，使用swc编译器  

1. install
```
pnpm add @rollup/plugin-swc @swc/core
```

2. 关闭ts，启用swc
更新[tsconfig.json](./tsconfig.json)  
更新[rollup.config.js](./rollup.config.js)   

3. 使用swc编译，使用ts检查类型
更新[package.json](./package.json) 

🚏🚉🚉里程碑  
在途中解决了一个又一个问题  
我们终于可以稍作休息🍵  
1. 将本地项目初始化为git仓库
```
git init
```
2. touch and configure .gitignore
```
node_modules/
dist/
*.log
*.env
```
