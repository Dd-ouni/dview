import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig({
  test: {
    environment: 'happy-dom'
  },
  build: {
    //打包文件目录
    outDir: 'es',
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件 element-plus 和 scss
      external: ['vue', 'element-plus', /^element-plus\/theme-chalk\/.*\.css$/, /\.scss/],
      input: ['index.js'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../dview/es'
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../dview/lib'
        }
      ]
    },
    lib: {
      entry: './index.js'
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(), // 去掉打包 setup 的 defineOptions
    {
      name: 'style', // 打包import sass 2 import css
      generateBundle(config, bundle) {
        // 获取 bundle keys
        const keys = Object.keys(bundle);
        for (const key of keys) {
          // vite plugins 是 rollup 实现
          // https://cn.rollupjs.org/plugin-development/#generatebundle
          // 获取chunkinfo replace chunkinfo文件的 scss
          const bundler = bundle[key];
          this.emitFile({
            type: 'asset',
            fileName: key,
            source: bundler.code.replace(/\.scss/g, '.css')
          });
        }
      }
    },

  ]
});
