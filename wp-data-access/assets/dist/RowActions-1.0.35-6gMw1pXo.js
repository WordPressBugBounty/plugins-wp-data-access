import{j as r}from"./cm-1.0.35--NMEhA6K.js";import{I as O,au as T,j as b}from"./cjs-1.0.35-B75n3jry.js";import{a as w}from"./RestApi-1.0.35-Bt-tzntO.js";import{l,aY as R,O as V,bI as d,Q as z}from"./lib-1.0.35-vCbYWOI3.js";import{R as k}from"./ThemeContainer-1.0.35-BrWpdfpd.js";import{b as B}from"./ConfirmDialog-1.0.35-5-r3Xts8.js";import{r as U}from"./redux-1.0.35-xa1uZ5t4.js";import{d as S}from"./ActionsDml-1.0.35-BvngWXxi.js";import{e as c}from"./notistack-1.0.35-C7EWtXAA.js";import{A as q}from"./useTheme-1.0.35-DvysJ9Pk.js";import{B as K}from"./Spinner-1.0.35-Dd1TcgqP.js";import{T as p}from"./Tooltip-1.0.35-DvHLxZ2q.js";import{I as f}from"./iconBase-1.0.35-CEh1aNes.js";import"./vendor-1.0.35-CN03Eozo.js";import"./Typography-1.0.35-DmbWmVEH.js";import"./useEnhancedEffect-1.0.35-gtlBTowv.js";import"./loglevel-1.0.35-BZ7XahX3.js";import"./lodash-1.0.35-CNe2eGU5.js";import"./moment-1.0.35-C5S46NFB.js";import"./main-1.0.35.js";import"./AdminTheme-1.0.35-BtyHaBRh.js";import"./useStoreTable-1.0.35-BoSxKhPI.js";import"./useScreenSize-1.0.35-D9QB3bUJ.js";import"./dompurify-1.0.35-DhD2mIk-.js";import"./FallbackSpinner-1.0.35-CzYFJIrC.js";import"./DialogContent-1.0.35-B5TpMgZC.js";import"./index-1.0.35-CCys4hnd.js";import"./useControlled-1.0.35-Cu7qahuZ.js";import"./Popper-1.0.35-BZjTWtMm.js";const xi=({metaData:t,appId:s,rowId:e,rowData:x,storeTableSettings:n,appLanguage:o,tableDensity:m,showForm:j,refetch:A})=>{var a,v;l.debug(t,s,e,x,m);const u=w(),[P,h]=U.useState(!1),C=Object.keys(e).length>0,y=n.viewLink,E=!R(t)&&((a=t==null?void 0:t.privs)==null?void 0:a.update)&&n.transactions.update&&C,M=!R(t)&&((v=t==null?void 0:t.privs)==null?void 0:v.delete)&&n.transactions.delete&&C;return r.jsxs(K,{sx:{display:"flex",alignItems:"center",gap:0},children:[y&&r.jsx(p,{title:o.view,children:r.jsx(f,{color:"primary",size:m===d.COMPACT?"small":"medium",onClick:i=>{Object.keys(e).length===0&&u(V({appId:s,data:x,context:null})),j(e,k.VIEW),i.stopPropagation()},children:r.jsx(O,{})})}),E&&r.jsx(p,{title:o.edit,children:r.jsx(f,{color:"primary",size:m===d.COMPACT?"small":"medium",onClick:i=>{j(e,k.UPDATE),i.stopPropagation()},children:r.jsx(T,{})})}),M&&r.jsxs(r.Fragment,{children:[r.jsx(p,{title:o.delete,children:r.jsx(f,{color:"error",size:m===d.COMPACT?"small":"medium",onClick:i=>{h(!0),i.stopPropagation()},children:r.jsx(b,{})})}),r.jsx(B,{title:o.deleteRowTitle,message:o.deleteRowMessage,open:P,setOpen:h,onConfirm:()=>{u(z({appId:s,property:{isRowCountUpdated:!0}})),S(s,e,i=>{if(i!=null&&i.code&&(i!=null&&i.message))switch(i.code){case"ok":c(o.deletedSuccessful,{variant:"success"}),A();break;default:l.error(i),c(i.message??o.invalidResponse,{variant:"error"})}else l.error(i),c(o.invalidResponse,{variant:"error"})},i=>{l.error("error",i),c(i??o.invalidResponse,{variant:"error"})})},locale:o,theme:q})]})]})};export{xi as default};
