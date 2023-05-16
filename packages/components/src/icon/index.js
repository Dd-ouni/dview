import _Icon from './icon.vue';
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
export const Icon = withInstall(_Icon);
export default Icon;
