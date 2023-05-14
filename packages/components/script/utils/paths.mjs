import { resolve } from "path";
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))

//组件库根目录
export const componentPath = resolve(__dirname, "../../");

//pkg根目录
export const pkgPath = resolve(__dirname, "../../../");

