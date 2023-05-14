import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [vue(), DefineOptions()],
}
export default defineConfig(config)