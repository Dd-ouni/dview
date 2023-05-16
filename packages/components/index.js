import * as components from './src/index';
export * from './src/index';

// import { App } from "vue"

export default {
  /**
   * Description
   * @param {App} app
   * @returns {any}
   */
  install: (app) => {
    for (let c in components) {
      app.use(components[c]);
    }
  }
};
