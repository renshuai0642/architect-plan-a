import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'; 
import swc from '@rollup/plugin-swc';

export default {
  input: 'src/index.ts', // 项目入口
  output: {
    file: 'dist/bundle.js',  // 打包后输出的位置和文件名
    format: 'iife', // 使用立即执行函数
      // cjs是什么
        // CommonJS的缩写
        // 打包输出格式兼容CommonJS
          // CommonJS允许使用require和module.exports来管理依赖导入导出
    sourcemap: true, // 可选的：生成Source Maps 用于调试代码
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
      // 使用typescript插件，指定tsconfig文件的位置
      // 在tsconfig文件中配置了：仅进行类型检查和生成.d.ts文件，不使用tsc编译ts文件生成js文件
    swc('./swcrc.json'),
      //  启用swc
    terser(),
  ],
};
