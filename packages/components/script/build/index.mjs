import delPath from "../utils/delpath.mjs";
import pkg from "gulp";
const { series, parallel, src, dest } = pkg;
import { pkgPath, componentPath } from "../utils/paths.mjs";
import _sass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run.mjs"


const sass = gulpSass(_sass);

// 删除目录
export const rmDist = () => {
    return delPath(`${pkgPath}/dview`)
}

// 打包样式
export const buildStyle = () => {
    return src(`${componentPath}/src/**/style/**.scss`)
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(dest(`${pkgPath}/dview/lib/src`))
        .pipe(dest(`${pkgPath}/dview/es/src`));
}

// 打包组件
export const buildComponent = async () => {
    run("pnpm run build", componentPath)
}

/**
 * 串行
 *  先清除目录
 *  并行
 *      打包样式
 *      打包组件
 */
export default series(
    async () => rmDist(),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    )
)