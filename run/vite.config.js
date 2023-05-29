import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [vue(), vueJsx(), DefineOptions()]
};
export default defineConfig(config);
