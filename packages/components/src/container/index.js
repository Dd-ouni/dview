import _Container from './container.vue';
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
export const Container = withInstall(_Container);
export default Container;
