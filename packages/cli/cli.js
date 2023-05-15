import commonLineArgs from "command-line-args"
import { readFile } from "fs/promises"

const pkg = JSON.parse(
    await readFile(new URL("./package.json", import.meta.url))
);

// 配置命令参数
const optionDefinitions = [{ name: "version", alias: "v", type: Boolean }]
const options = commonLineArgs(optionDefinitions)
if (options.version) {
    console.log(`v${pkg.version}`)
}