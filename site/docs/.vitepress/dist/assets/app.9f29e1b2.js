import{d as r,o as i,c as p,r as l,a as d,K as s,a2 as f,u as m,p as g,k as h,a3 as b,a4 as A,a5 as _,a6 as v,a7 as y,a8 as P,a9 as w,aa as C,ab as O,ac as $,ad as j,ae as E,af as R,ag as S}from"./chunks/framework.8b931417.js";import{t as T}from"./chunks/theme.51e60ce0.js";const x={class:"d-button"},D=d("按钮啊222111"),B=r({name:"d-button"}),I=Object.assign(B,{setup(e){return(t,a)=>(i(),p("button",x,[l(t.$slots,"default",{},()=>[D])]))}}),V=e=>(e.install=t=>{t.component(e.name,e)},e),k=V(I);const F={class:"d-icon"},L=r({name:"d-icon"}),M=Object.assign(L,{setup(e){return(t,a)=>(i(),p("div",F,"Icon1"))}}),N=e=>(e.install=t=>{t.component(e.name,e)},e),z=N(M),c=Object.freeze(Object.defineProperty({__proto__:null,Button:k,Icon:z},Symbol.toStringTag,{value:"Module"})),G={install:e=>{for(let t in c)e.use(c[t])}},H={...T,enhanceApp:async({app:e})=>{e.use(G)}};function u(e){if(e.extends){const t=u(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const n=u(H),K=r({name:"VitePressApp",setup(){const{site:e}=m();return g(()=>{h(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),b(),A(),_(),n.setup&&n.setup(),()=>v(n.Layout)}});async function U(){const e=J(),t=q();t.provide(y,e);const a=P(e.route);return t.provide(w,a),t.component("Content",C),t.component("ClientOnly",O),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:t,router:e,siteData:$}),{app:t,router:e,data:a}}function q(){return j(K)}function J(){let e=s,t;return E(a=>{let o=R(a);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),S(()=>import(o),[])},n.NotFound)}s&&U().then(({app:e,router:t,data:a})=>{t.go().then(()=>{f(t.route,a.site),e.mount("#app")})});export{U as createApp};