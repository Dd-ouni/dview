import run from "../utils/run.mjs";
import { pkgPath } from "../utils/paths.mjs";
import pkg from "gulp";
const { series } = pkg;
export const publishComponent = async () => {
    run("release-it", `${pkgPath}/dview`);
};
export default series(async () => publishComponent());