```
{
  "name": "architect-plan-a",
    // npm包的 名称: 架构师养成A计划
  "version": "1.0.0",
    // npm包的 版本号
  "main": "src/index.js",
    // npm包的，模块入口
  "scripts": {
    "type-check": "tsc --noEmit",
      // 仅进行类型检查，不输出任何ts .d.ts文件
      // 这样也避免生成.ts .d.ts文件，与swc构建工具冲突
    "prebuild": "npm run type-check",
    "build: js": "rollup -c",
      // -c 使用名为 rollup.config.js 的配置文件
      // 使用swc将ts文件编译为js文件
    "build: types": "tsc",
      // 使用tsc生成 .d.ts 声明文件
    "start": "npm run prebuild && npm run build: js && npm run build: types",
    "format": "prettier --write 'src/**/*.{ts,tsx,js,json,css,md}'"
  },
  "type": "module",
    // npm包，使用了ESModule模块语法
    // 其他项目引入该npm包，可以使用ESModule语法
  "keywords": [],
  "author": "",
  "license": "ISC",
    // 表明项目在使用ISC许可证
      // 一种宽松的开源许可证
      // 允许自由使用、修改、分发代码
  "description": "",
  "dependencies": {
    "@rollup/plugin-typescript": "^11.1.6",
    "rollup": "^4.20.0",
    "tslib": "^2.6.3",
    "typescript": "^5.5.4"
  },
    "devDependencies": {
    "@types/estree": "^1.0.5",
    "@types/node": "^22.1.0",
    "prettier": "3.3.3"
  }
}
```