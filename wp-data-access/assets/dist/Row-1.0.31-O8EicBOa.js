const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Column-1.0.31-2dzqPQzC.js","./main-1.0.31.js","./cm-1.0.31-BzgG35ZX.js","./redux-1.0.31-CuzmJMK6.js","./vendor-1.0.31-BmpNFhoq.js","./notistack-1.0.31-CuGQWCbt.js","./lib-1.0.31-BbX3jq4e.js","./loglevel-1.0.31-BZ7XahX3.js","./lodash-1.0.31-BtCjXqrS.js","./moment-1.0.31-C5S46NFB.js","./ActionsDml-1.0.31-DnIQKtBi.js","./RestApi-1.0.31-C4KxgDIV.js","./ThemeContainer-1.0.31-D01zq5BI.js","./Spinner-1.0.31-Be7r01J6.js","./Typography-1.0.31-BdhCS1KD.js","./AdminTheme-1.0.31-QbwKcRV7.js","./useStoreTable-1.0.31-CksmwD3u.js","./useTheme-1.0.31-BXg8i2QZ.js","./index-1.0.31-DboOrfK9.js","./cjs-1.0.31-B-_HdexB.js","./iconBase-1.0.31-C37NsRUm.js","./useScreenSize-1.0.31-DKas25yF.js","./dompurify-1.0.31-CCJo14B2.js","./FallbackSpinner-1.0.31-B4qqxHwC.js","./Tooltip-1.0.31-crORCg22.js","./Popper-1.0.31-QmfursjS.js","./useControlled-1.0.31-27-LkxG9.js","./ThemeContainer-1.0.31-DR7D6eET.css","./TargetEnum-1.0.31-DPFnTxiX.js","./index-1.0.31-C4m7fjwq.js","./Autocomplete-1.0.31-DLbMViDM.js","./TextField-1.0.31-TtMrk-_t.js","./FormHelperText-1.0.31-CQcG9a5q.js","./useFormControl-1.0.31-2YJOQA8g.js","./FormLabel-1.0.31-7Vju-x1c.js","./Menu-1.0.31-BOTBPSPr.js","./createSvgIcon-1.0.31-BC4iq9Gi.js","./Close-1.0.31-BTPwVQpD.js"])))=>i.map(i=>d[i]);
import{_ as L}from"./main-1.0.31.js";import{j as c}from"./cm-1.0.31-BzgG35ZX.js";import{r as f}from"./redux-1.0.31-CuzmJMK6.js";import{l as m,bs as B,Y as P,K as x,X}from"./lib-1.0.31-BbX3jq4e.js";import{u as F,a as Y}from"./RestApi-1.0.31-C4KxgDIV.js";import{b as z,f as K}from"./useTheme-1.0.31-BXg8i2QZ.js";import{u as O,a as U}from"./ThemeContainer-1.0.31-D01zq5BI.js";import{B as k}from"./Spinner-1.0.31-Be7r01J6.js";import"./vendor-1.0.31-BmpNFhoq.js";import"./notistack-1.0.31-CuGQWCbt.js";import"./loglevel-1.0.31-BZ7XahX3.js";import"./lodash-1.0.31-BtCjXqrS.js";import"./moment-1.0.31-C5S46NFB.js";import"./index-1.0.31-DboOrfK9.js";import"./Typography-1.0.31-BdhCS1KD.js";import"./cjs-1.0.31-B-_HdexB.js";import"./iconBase-1.0.31-C37NsRUm.js";import"./AdminTheme-1.0.31-QbwKcRV7.js";import"./useStoreTable-1.0.31-CksmwD3u.js";import"./ActionsDml-1.0.31-DnIQKtBi.js";import"./useScreenSize-1.0.31-DKas25yF.js";import"./dompurify-1.0.31-CCJo14B2.js";import"./FallbackSpinner-1.0.31-B4qqxHwC.js";import"./Tooltip-1.0.31-crORCg22.js";import"./Popper-1.0.31-QmfursjS.js";import"./useControlled-1.0.31-27-LkxG9.js";const q=r=>{const s=F(n=>{var i,d;return((d=(i=n.forms[r])==null?void 0:i.state)==null?void 0:d.validation)??{}});return m.debug("rowValidation",s),s},G=r=>{const s=F(n=>{var i;return(i=n.forms[r])==null?void 0:i.context});return m.debug("context",s),s},H=f.lazy(()=>L(()=>import("./Column-1.0.31-2dzqPQzC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]),import.meta.url)),xo=({appId:r,metaData:s,data:n,initialData:i,primaryKey:d,formMode:a,formSettings:g,language:C})=>{m.debug(s,n,i,d,a,g,C);const _=Y(),u=O(r),E=z(r),T=q(r),h=U(r),v=K(r),S=G(r),j=f.useMemo(()=>u.map(o=>o.columnName),[u]),R=(o,t)=>{m.debug(o,t),_(X({appId:r,columnName:o,columnValue:t}))},V={label:"",type:B.TEXT,expression:""};m.debug(V);const w=(o,t)=>(m.debug(o,t),null),y=(o,t,l,e,b,p)=>(m.debug(o,t,l,e,p),c.jsx(f.Suspense,{children:c.jsx(k,{sx:{display:"grid",padding:"0"},children:c.jsx(H,{appId:r,columnName:l,columnValue:e,columnInitialValue:b,columnMetaData:p,storeColumn:u[t],columnValidation:T[l],onColumnChange:R,metaData:s,context:S,storeTable:v,storeForm:g,formMode:a,locale:E,language:C},o)})},o));return c.jsx(c.Fragment,{children:j.map((o,t)=>{if(u[t].computedField!==void 0)return w(u,t);const l=P(s,o);if(l===void 0)return null;const e={...s==null?void 0:s.columns[l]},b=((e==null?void 0:e.is_nullable)??"").toUpperCase()!=="YES";if(u[t].more&&!h&&!(a===x.INSERT&&b))return null;if(e.column_name&&(u[t].visible===!0||a===x.INSERT&&b&&(e.extra??"")!=="auto_increment")){let p="";n&&n[o]!==void 0&&(p=n[o]),e.formLabel=u[t].columnLabel;const A=i[o];return y(l,t,o,p,A,e)}else return null})})};export{xo as default};