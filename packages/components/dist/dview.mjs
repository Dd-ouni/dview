import { openBlock, createElementBlock, renderSlot, createTextVNode } from "vue";
const index$1 = "";
const _hoisted_1 = { class: "d-button" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("按钮啊222111");
const _sfc_main = {
  name: "button",
  setup(__props) {
    defineOptions({ name: "d-button" });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", _hoisted_1, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_2
        ])
      ]);
    };
  }
};
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const Button = withInstall(_sfc_main);
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button
}, Symbol.toStringTag, { value: "Module" }));
const index = {
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
export {
  Button,
  index as default
};
