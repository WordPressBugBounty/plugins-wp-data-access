import{j as e}from"./cm-1.0.31-BzgG35ZX.js";import{u as l}from"./useAutoUpdate-1.0.31-CJxz19RJ.js";import{l as u}from"./lib-1.0.31-BbX3jq4e.js";import{S as a}from"./TextField-1.0.31-TtMrk-_t.js";import{M as c}from"./MenuItem-1.0.31-CTowyoSp.js";import"./redux-1.0.31-CuzmJMK6.js";import"./vendor-1.0.31-BmpNFhoq.js";import"./loglevel-1.0.31-BZ7XahX3.js";import"./lodash-1.0.31-BtCjXqrS.js";import"./moment-1.0.31-C5S46NFB.js";import"./Typography-1.0.31-BdhCS1KD.js";import"./iconBase-1.0.31-C37NsRUm.js";import"./FormHelperText-1.0.31-CQcG9a5q.js";import"./useFormControl-1.0.31-2YJOQA8g.js";import"./cjs-1.0.31-B-_HdexB.js";import"./notistack-1.0.31-CuGQWCbt.js";import"./FormLabel-1.0.31-7Vju-x1c.js";import"./Menu-1.0.31-BOTBPSPr.js";import"./AdminTheme-1.0.31-QbwKcRV7.js";import"./useControlled-1.0.31-27-LkxG9.js";import"./createSvgIcon-1.0.31-BC4iq9Gi.js";const R=({value:t,columnMetaData:p,setValue:n,saveChanges:m})=>{u.debug(t,p);const s=l(t,m);return e.jsx("div",{onClick:r=>{r.stopPropagation()},children:e.jsx(a,{MenuProps:{id:"pp-select-menu"},className:"pp-inline-editing",sx:{width:"100%"},value:t===null?[]:t.split(","),multiple:!0,variant:"outlined",onChange:r=>{const o=r.target.value.join(",");n(o!==""?o:null)},children:p.column_type.replace("set(","").replace(")","").replaceAll("'","").split(",").map(function(i){return e.jsx(c,{value:i,onClick:()=>{s(!0)},children:i},i)})})})};export{R as default};
