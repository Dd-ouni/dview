import _Dialog from './dialog.vue';
// import { App } from "vue"
const withInstall = (comp) => {
  /**
   * install vue component
   * @param {App} app
   * @returns {any}
   */
  comp.install = (app) => {
    app.component(comp.name, comp);
  };

  return comp;
};
export const Dialog = withInstall(_Dialog);
export default Dialog;
