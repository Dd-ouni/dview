import * as components from "./index";
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        DButton: typeof components.Button,
        DIcon: typeof components.Icon
    }
}
export { };