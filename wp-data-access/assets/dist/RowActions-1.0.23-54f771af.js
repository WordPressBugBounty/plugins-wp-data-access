import{l,r as y,aT as R,j as r,cE as d,c0 as O,e as c}from"./main-1.0.23.js";import{K as V,ag as w,j as z}from"./index.esm-1.0.23-ba0465a2.js";import{a as B}from"./RestApi-1.0.23-cc179eb9.js";import{R as a}from"./ThemeContainer-1.0.23-10b65460.js";import{C as K}from"./ConfirmDialog-1.0.23-f318040f.js";import{d as U}from"./ActionsDml-1.0.23-e3901c9d.js";import{h as b}from"./useTheme-1.0.23-55aea9bb.js";import{B as q}from"./Spinner-1.0.23-90ab83ff.js";import{T as f}from"./Tooltip-1.0.23-1b58a848.js";import{I as x}from"./iconBase-1.0.23-43ac6f06.js";import"./Typography-1.0.23-19a0fd3e.js";import"./FallbackSpinner-1.0.23-96931408.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./AdminTheme-1.0.23-7044caf5.js";import"./DialogContent-1.0.23-79893b13.js";import"./Modal-1.0.23-3fe42627.js";import"./CardContent-1.0.23-cd3f2c87.js";import"./colorManipulator-1.0.23-e382be1d.js";import"./Popper-1.0.23-4a0d0616.js";import"./useControlled-1.0.23-1e71c28b.js";import"./Grow-1.0.23-40b2ff68.js";const ti=({metaData:e,appId:m,rowId:t,rowData:j,storeTableSettings:n,appLanguage:o,tableDensity:s,showForm:h,refetch:k})=>{var C,v;l.debug(e,m,t,j,s);const A=B(),[E,p]=y.useState(!1),u=Object.keys(t).length>0,P=n.viewLink,M=!R(e)&&((C=e==null?void 0:e.privs)==null?void 0:C.update)&&n.transactions.update&&u,T=!R(e)&&((v=e==null?void 0:e.privs)==null?void 0:v.delete)&&n.transactions.delete&&u;return r.jsxs(q,{sx:{display:"flex",alignItems:"center",gap:0},children:[P&&r.jsx(f,{title:o.view,children:r.jsx(x,{color:"primary",size:s===d.COMPACT?"small":"medium",onClick:i=>{Object.keys(t).length===0&&A(O({appId:m,data:j,context:null})),h(t,a.VIEW),i.stopPropagation()},children:r.jsx(V,{})})}),M&&r.jsx(f,{title:o.edit,children:r.jsx(x,{color:"primary",size:s===d.COMPACT?"small":"medium",onClick:i=>{h(t,a.UPDATE),i.stopPropagation()},children:r.jsx(w,{})})}),T&&r.jsxs(r.Fragment,{children:[r.jsx(f,{title:o.delete,children:r.jsx(x,{color:"error",size:s===d.COMPACT?"small":"medium",onClick:i=>{p(!0),i.stopPropagation()},children:r.jsx(z,{})})}),r.jsx(K,{title:o.deleteRowTitle,message:o.deleteRowMessage,open:E,setOpen:p,onConfirm:()=>{U(m,t,i=>{if(i!=null&&i.code&&(i!=null&&i.message))switch(i.code){case"ok":c(o.deletedSuccessful,{variant:"success"}),k();break;default:l.error(i),c(i.message??o.invalidResponse,{variant:"error"})}else l.error(i),c(o.invalidResponse,{variant:"error"})},i=>{l.error("error",i),c(i??o.invalidResponse,{variant:"error"})})},locale:o,theme:b})]})]})};export{ti as default};
