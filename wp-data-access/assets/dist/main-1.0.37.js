const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Alert-1.0.37-DRzJfdQS.js","./cm-1.0.37-CEr77VZi.js","./redux-1.0.37-C4JSQ-MG.js","./vendor-1.0.37-CN03Eozo.js","./index-1.0.37-LxgxH_yq.js","./iconBase-1.0.37-DRohixw7.js","./Typography-1.0.37-DjtXWQnP.js","./lib-1.0.37-Czwr-8r3.js","./loglevel-1.0.37-BZ7XahX3.js","./lodash-1.0.37-Dx3wKrSf.js","./moment-1.0.37-C5S46NFB.js","./useEnhancedEffect-1.0.37-UwysO4qr.js","./AlertTitle-1.0.37-BCo6eK8b.js","./createSvgIcon-1.0.37-DXsAQOmB.js","./Close-1.0.37-Yr1E1-6A.js","./MainAppBuilder-1.0.37-D2gHQRwY.js","./AdminTheme-1.0.37-7PLndQ8H.js","./hooks-1.0.37-DW0_oiBB.js","./Tooltip-1.0.37-D_uDknxi.js","./Tooltip-1.0.37--D4jr2go.css","./TabPanel-1.0.37-CPE-1h3v.js","./index-1.0.37-B60ShF2d.js","./notistack-1.0.37-CEqipxDI.js","./Spinner-1.0.37-CwhfSVqI.js","./ConfirmDialog-1.0.37-BDQ_OfRf.js","./Menu-1.0.37-Ca8DeoO3.js","./ThemeProvider-1.0.37-Cyf1xy26.js","./MenuItem-1.0.37-JkRcsicb.js","./useThemeProps-1.0.37-CD9ZXLtG.js","./getThemeProps-1.0.37-BGc0S4YC.js","./ComponentColumn-1.0.37-dxZBqVrm.js","./ActionsExplorer-1.0.37-2IOZFLVH.js","./RestApi-1.0.37-CcjslynE.js","./FormHelperText-1.0.37-ylnS0Km6.js","./utils-1.0.37-iop7lDec.js","./useFormControl-1.0.37-BcUwa2qz.js","./Autocomplete-1.0.37-5_yZAyWV.js","./Select-1.0.37-B5ZKqjeL.js","./useControlled-1.0.37-DyimEgDk.js","./Popper-1.0.37-CSsNCozr.js","./TextField-1.0.37-CCe4G0U1.js","./FormLabel-1.0.37-BQP5Nx_Z.js","./useLoadAppMetaData-1.0.37-_NoyHHQ3.js","./StoreTypeEnum-1.0.37-Cx2hXwas.js","./FormControlLabel-1.0.37-BLp4PuCc.js","./Checkbox-1.0.37-LjGLlM3B.js","./SwitchBase-1.0.37-Bwy1aBhJ.js","./Tooltip-1.0.37-BLWvlO4a.js","./Link-1.0.37-B0loYHQn.js","./index-1.0.37-CK0QxOhD.js","./FileSaver.min-1.0.37-Mmc9tWhG.js","./index-1.0.37-Ds3X5e5v.js","./index-1.0.37-D4zhytA1.js","./DynamicModeEnum-1.0.37-BXuL5kgA.js","./RadioGroup-1.0.37-CARB8om5.js","./Radio-1.0.37-C5rUTiNk.js","./Switch-1.0.37-D8L-tSJ8.js","./lang-1.0.37-CfHlhLgz.js","./PremiumFeature-1.0.37-BKt66-Fr.js","./CardHeader-1.0.37-D5MnKXM1.js","./Divider-1.0.37-PDNfV3Nd.js","./Stepper-1.0.37-0J4mX0Mf.js","./ListItemIcon-1.0.37-CVeLs3zr.js","./ListItemText-1.0.37-BQ7ZEg4d.js","./TableRow-1.0.37-BL0M_io2.js","./AppContainerSelector-1.0.37-CLAiGRN4.js","./FallbackSpinner-1.0.37-DAc7pvnM.js","./index-1.0.37-CgPwljr5.js","./InputAdornment-1.0.37-Bm1BNe28.js","./MainAppBuilder-1.0.37-CqwaNRhI.css","./settings-1.0.37-Bx2jvYL6.css","./main-1.0.37-LBsY5zsP.css","./MainApps-1.0.37-TCKJu7vI.js","./MainChart-1.0.37-h3HCC3Tw.js","./MainMap-1.0.37-jwJ3RsMp.js","./MainApp-1.0.37-BiP-xkrw.js","./MainAdmin-1.0.37-BPF1PbYq.js","./MainDataExplorer-1.0.37-CvBSgQXT.js"])))=>i.map(i=>d[i]);
import{j as t}from"./cm-1.0.37-CEr77VZi.js";import{r as n,P as f}from"./redux-1.0.37-C4JSQ-MG.js";import{a as I,g as w}from"./vendor-1.0.37-CN03Eozo.js";import{S as _}from"./notistack-1.0.37-CEqipxDI.js";import{C as o,l as b,S as m}from"./lib-1.0.37-Czwr-8r3.js";import"./loglevel-1.0.37-BZ7XahX3.js";import"./lodash-1.0.37-Dx3wKrSf.js";import"./moment-1.0.37-C5S46NFB.js";const T="modulepreload",O=function(e,r){return new URL(e,r).href},P={},d=function(r,a,c){let g=Promise.resolve();if(a&&a.length>0){const s=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),p=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));g=Promise.allSettled(a.map(l=>{if(l=O(l,c),l in P)return;P[l]=!0;const j=l.endsWith(".css"),D=j?'[rel="stylesheet"]':"";if(!!c)for(let R=s.length-1;R>=0;R--){const v=s[R];if(v.href===l&&(!j||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${D}`))return;const u=document.createElement("link");if(u.rel=j?"stylesheet":T,j||(u.as="script"),u.crossOrigin="",u.href=l,p&&u.setAttribute("nonce",p),document.head.appendChild(u),j)return new Promise((R,v)=>{u.addEventListener("load",R),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function S(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return g.then(s=>{for(const i of s||[])i.status==="rejected"&&S(i.reason);return r().catch(S)})};var y={},L;function C(){if(L)return y;L=1;var e=I();return y.createRoot=e.createRoot,y.hydrateRoot=e.hydrateRoot,y}var V=C();const E=w(V),h=5,A=6e3,x=(e,r)=>{const a=n.lazy(()=>d(()=>import("./Alert-1.0.37-DRzJfdQS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url));e.render(t.jsx(n.Suspense,{children:t.jsx(a,{severity:"error",message:r,close:!1})}))};o.appDebug?(b.setLevel("debug"),b.debug(o.appName+" started: debug = on")):b.setLevel("info");window.document.querySelectorAll(".pp-container-app-builder").forEach(e=>{const r=E.createRoot(e);if(o.appStatus==="")if(o.appUrl){const a=n.lazy(()=>d(()=>import("./MainAppBuilder-1.0.37-D2gHQRwY.js").then(c=>c.g),__vite__mapDeps([15,1,2,3,7,8,9,10,16,6,17,18,5,11,19,20,21,22,23,24,25,26,27,28,29,4,30,31,32,33,34,35,36,37,38,13,14,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71]),import.meta.url));r.render(t.jsxs(f,{store:m,children:[t.jsx(_,{maxSnack:h,autoHideDuration:A}),t.jsx(n.Suspense,{children:t.jsx(a,{})})]}))}else x(r,"Invalid REST API configuration");else x(r,o.appStatus)});window.document.querySelectorAll(".pp-container-app").forEach(e=>{var g,S;const r=E.createRoot(e);let a;e.getAttribute("data-filter_field_name")!==null&&e.getAttribute("data-filter_field_value")!==null&&(a={[e.getAttribute("data-filter_field_name")]:e.getAttribute("data-filter_field_value")});let c;if(e.getAttribute("data-shortcode_field_name")!==null&&e.getAttribute("data-shortcode_field_value")!==null){const s=(g=e.getAttribute("data-shortcode_field_name"))==null?void 0:g.split(","),i=(S=e.getAttribute("data-shortcode_field_value"))==null?void 0:S.split(",");if(Array.isArray(s)&&Array.isArray(i)&&s.length>0&&s.length===i.length){c={};for(let p=0;p<s.length;p++)c[s[p]]=i[p]}}if(o.appStatus==="")if(o.appUrl)if(e.classList.contains("pp-container-apps")){const s=n.lazy(()=>d(()=>import("./MainApps-1.0.37-TCKJu7vI.js"),__vite__mapDeps([72,1,2,3,66,23,7,8,9,10,6,42,32,22,43,17,71]),import.meta.url));r.render(t.jsxs(f,{store:m,children:[t.jsx(_,{maxSnack:h,autoHideDuration:A}),t.jsx(n.Suspense,{children:t.jsx(s,{dataSource:e.getAttribute("data-source")})})]}))}else if(e.classList.contains("pp-container-chart")){const s=n.lazy(()=>d(()=>import("./MainChart-1.0.37-h3HCC3Tw.js"),__vite__mapDeps([73,1,2,3,66,23,7,8,9,10,6,42,32,22,43,17,71]),import.meta.url));r.render(t.jsxs(f,{store:m,children:[t.jsx(_,{maxSnack:h,autoHideDuration:A}),t.jsx(n.Suspense,{children:t.jsx(s,{dataSource:e.getAttribute("data-source")})})]}))}else if(e.classList.contains("pp-container-map")){const s=n.lazy(()=>d(()=>import("./MainMap-1.0.37-jwJ3RsMp.js"),__vite__mapDeps([74,1,2,3,42,32,7,8,9,10,22,43,17,66,23,6,71]),import.meta.url));r.render(t.jsxs(f,{store:m,children:[t.jsx(_,{maxSnack:h,autoHideDuration:A}),t.jsx(n.Suspense,{children:t.jsx(s,{dataSource:e.getAttribute("data-source")})})]}))}else{const s=n.lazy(()=>d(()=>import("./MainApp-1.0.37-BiP-xkrw.js"),__vite__mapDeps([75,1,2,3,66,23,7,8,9,10,6,42,32,22,43,17,71]),import.meta.url));r.render(t.jsxs(f,{store:m,children:[t.jsx(_,{maxSnack:h,autoHideDuration:A}),t.jsx(n.Suspense,{children:t.jsx(s,{dataSource:e.getAttribute("data-source"),staticFilter:a,shortcodeArgs:c})})]}))}else x(r,"Invalid REST API configuration");else x(r,o.appStatus)});window.document.querySelectorAll(".pp-container-explorer").forEach(e=>{const r=E.createRoot(e);if(o.appStatus==="")if(o.appUrl)if(e.classList.contains("pp-container-admin")){const a=n.lazy(()=>d(()=>import("./MainAdmin-1.0.37-BPF1PbYq.js"),__vite__mapDeps([76,1,2,3,66,23,7,8,9,10,6,22,71]),import.meta.url));r.render(t.jsxs(f,{store:m,children:[t.jsx(_,{maxSnack:h,autoHideDuration:A}),t.jsx(n.Suspense,{children:t.jsx(a,{dataSource:e.getAttribute("data-source")})})]}))}else{const a=n.lazy(()=>d(()=>import("./MainDataExplorer-1.0.37-CvBSgQXT.js"),__vite__mapDeps([77,1,2,3,16,7,8,9,10,6,23,26,11,22]),import.meta.url));r.render(t.jsxs(f,{store:m,children:[t.jsx(_,{maxSnack:h,autoHideDuration:A}),t.jsx(n.Suspense,{children:t.jsx(a,{})})]}))}else x(r,"Invalid REST API configuration");else x(r,o.appStatus)});export{d as _};
