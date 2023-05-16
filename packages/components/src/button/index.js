import _Button from './button.vue';
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
export const Button = withInstall(_Button);
export default Button;
