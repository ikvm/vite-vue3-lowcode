export function __vite_legacy_guard(){import("data:text/javascript,")}import{d as e,r as a,aR as t,aQ as r,w as o,k as s,l,m as p,b as n,aT as i,q as u,ar as c,as as f,at as _,S as d,Z as v}from"./preload-helper.09768911.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";var m=g(e({name:"App",setup(){const e=a(),s=t(),l=JSON.parse(localStorage.getItem(r.PAGE_DATA_KEY)),p=Object.keys(l.pages).filter((e=>!l.pages[e].config.keepAlive));return o((()=>s.path),(a=>{var t,r;if(p.includes(a)){(null==(r=null==(t=e.value)?void 0:t.$)?void 0:r.__v_cache).delete(a)}})),{keepAliveRef:e}}}),[["render",function(e,a,t,r,o,c){const f=s("router-view");return n(),l(f,null,{default:p((({Component:e,route:a})=>[(n(),l(i,{ref:"keepAliveRef"},[(n(),l(u(e),{key:a.path}))],1536))])),_:1})}]]);const h=[{path:"/:pathMatch(.*)*",component:()=>_((()=>import("./preview.4cf8f978.js")),["assets/preview.4cf8f978.js","assets/index.38904951.js","assets/index.59ee6ec9.css","assets/preload-helper.09768911.js","assets/preload-helper.63ff9c9a.css","assets/useAnimate.aa72e511.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],A=c({history:f(),routes:h}),E=JSON.parse(localStorage.getItem(r.PAGE_DATA_KEY));A.beforeEach((e=>{var a,t,r;return document.title=null!=(r=null==(t=null==(a=null==E?void 0:E.pages)?void 0:a[e.path])?void 0:t.title)?r:document.title,!0}));const $=d(m);v($),$.config.globalProperties.$$refs={},window.$$refs=$.config.globalProperties.$$refs,$.use(A).mount("#app");export{A as r};
