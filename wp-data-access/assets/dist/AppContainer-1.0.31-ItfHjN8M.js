const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Alert-1.0.31-CW3F7gbN.js","./cm-1.0.31-BzgG35ZX.js","./redux-1.0.31-CuzmJMK6.js","./vendor-1.0.31-BmpNFhoq.js","./index-1.0.31-ujFQUobk.js","./iconBase-1.0.31-C37NsRUm.js","./Typography-1.0.31-BdhCS1KD.js","./lib-1.0.31-BbX3jq4e.js","./loglevel-1.0.31-BZ7XahX3.js","./lodash-1.0.31-BtCjXqrS.js","./moment-1.0.31-C5S46NFB.js","./AlertTitle-1.0.31-Zosaacrw.js","./createSvgIcon-1.0.31-BC4iq9Gi.js","./Close-1.0.31-BTPwVQpD.js","./AppMetaData-1.0.31-0BsdqMlY.js","./main-1.0.31.js","./notistack-1.0.31-CuGQWCbt.js","./ActionsApp-1.0.31-UHtVyR0L.js","./RestApi-1.0.31-C4KxgDIV.js","./StoreTypeEnum-1.0.31-nL46tw9S.js","./Chart-1.0.31-BJ9n7v4e.js","./useTheme-1.0.31-BXg8i2QZ.js","./index-1.0.31-DboOrfK9.js","./cjs-1.0.31-B-_HdexB.js","./Spinner-1.0.31-Be7r01J6.js","./Tooltip-1.0.31-crORCg22.js","./AdminTheme-1.0.31-QbwKcRV7.js","./Popper-1.0.31-QmfursjS.js","./useControlled-1.0.31-27-LkxG9.js","./ConfirmDialog-1.0.31-bZDmgpd0.js","./DialogContent-1.0.31-_6ykng6a.js","./ConfirmDialog-1.0.31--D4jr2go.css","./TabPanel-1.0.31-CQFpWPRX.js","./ActionsSettings-1.0.31-Cf56Toxs.js","./TargetEnum-1.0.31-DPFnTxiX.js","./Tabs-1.0.31-XRJEidP6.js","./Menu-1.0.31-BOTBPSPr.js","./FallbackSpinner-1.0.31-B4qqxHwC.js","./MenuItem-1.0.31-CTowyoSp.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./main-1.0.31.js";import{j as r}from"./cm-1.0.31-BzgG35ZX.js";import{r as o}from"./redux-1.0.31-CuzmJMK6.js";import{F as c}from"./FallbackSpinner-1.0.31-B4qqxHwC.js";import{l,v as u}from"./lib-1.0.31-BbX3jq4e.js";/* empty css                    */import"./vendor-1.0.31-BmpNFhoq.js";import"./notistack-1.0.31-CuGQWCbt.js";import"./loglevel-1.0.31-BZ7XahX3.js";import"./lodash-1.0.31-BtCjXqrS.js";import"./moment-1.0.31-C5S46NFB.js";import"./Spinner-1.0.31-Be7r01J6.js";import"./Typography-1.0.31-BdhCS1KD.js";const t=o.lazy(()=>m(()=>import("./Alert-1.0.31-CW3F7gbN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url)),d=o.lazy(()=>m(()=>import("./AppMetaData-1.0.31-0BsdqMlY.js").then(s=>s.a),__vite__mapDeps([14,15,1,2,3,16,7,8,9,10,17,18,19,20,21,22,6,23,5,24,25,26,27,28,29,30,31,32,33,34,35,36,12,37,0,4,11,13,38]),import.meta.url)),b=({dataSource:s,staticFilter:a,shortcodeArgs:i})=>{l.debug(s,a,i);let n;try{let e={};try{e=JSON.parse(s.replaceAll("'",'"'))}catch(p){return console.error("JSON parse error"),l.error(p),r.jsx(o.Suspense,{children:r.jsx(t,{severity:"error",message:"Invalid arguments - check console for more information",close:!1})})}if(e.id&&!isNaN(e.id))n=e.id;else return console.error("Invalid arguments"),r.jsx(o.Suspense,{children:r.jsx(t,{severity:"error",message:"Invalid arguments - check console for more information",close:!1})})}catch(e){return console.error("Invalid arguments",e),r.jsx(o.Suspense,{children:r.jsx(t,{severity:"error",message:"Invalid arguments - check console for more information",close:!1})})}return r.jsx(o.Suspense,{fallback:r.jsx(c,{}),children:r.jsx(d,{appId:u(),appDbId:n,staticFilter:a,shortcodeArgs:i})})};export{b as default};