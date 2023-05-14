import fs from "node:fs"
import { resolve } from "node:path"
import { pkgPath } from "./paths.mjs"

// 要保留的文件
const stayFiles = ["package.json", "README.md"];

/**
 * 删除路劲文件
 * @param {string} path
 * @returns {any}
 */
const delPath = async (path) => {
    /**
     * @type { string[] }
     */
    let files = [];

    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);

        files.forEach(async (file) => {
            let curPath = resolve(path, file);
            console.log(`当前路劲 ${curPath}`)
            if (fs.statSync(curPath).isDirectory()) {
                // 目录 递归删除
                if (file != "node_modules") await delPath(curPath);
            } else {
                // 文件
                if (!stayFiles.includes(file)) {
                    fs.unlinkSync(curPath);
                }
            }
        })

        if (path != `${pkgPath}/dview`) fs.rmdirSync(path)
    }
}

export default delPath;