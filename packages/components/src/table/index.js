import _Table from './table.vue';
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
export const Table = withInstall(_Table);
export default Table;
