import * as components from "./index";
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        DButton: typeof components.Button,
        DIcon: typeof components.Icon,
        DContainer: typeof components.Container,
        DDialog: typeof components.Dialog,
        DTable: typeof components.Table
    }
}
export { };