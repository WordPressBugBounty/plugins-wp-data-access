import{j as o}from"./cm-1.0.31-BzgG35ZX.js";import{l as c,i as x}from"./lib-1.0.31-BbX3jq4e.js";import{u as g}from"./useAutoUpdate-1.0.31-CJxz19RJ.js";import{S as f}from"./TextField-1.0.31-TtMrk-_t.js";import{M as a}from"./MenuItem-1.0.31-CTowyoSp.js";import{E as d}from"./EnumTypeEnum-1.0.31-Ws4BsaYD.js";import{R as E}from"./RadioGroup-1.0.31-1v754ceS.js";import{F as R}from"./FormControlLabel-1.0.31-VNfgE3Oe.js";import{R as j}from"./Radio-1.0.31-DbEe8Ljo.js";import"./redux-1.0.31-CuzmJMK6.js";import"./vendor-1.0.31-BmpNFhoq.js";import"./loglevel-1.0.31-BZ7XahX3.js";import"./lodash-1.0.31-BtCjXqrS.js";import"./moment-1.0.31-C5S46NFB.js";import"./Typography-1.0.31-BdhCS1KD.js";import"./iconBase-1.0.31-C37NsRUm.js";import"./FormHelperText-1.0.31-CQcG9a5q.js";import"./useFormControl-1.0.31-2YJOQA8g.js";import"./cjs-1.0.31-B-_HdexB.js";import"./notistack-1.0.31-CuGQWCbt.js";import"./FormLabel-1.0.31-7Vju-x1c.js";import"./Menu-1.0.31-BOTBPSPr.js";import"./AdminTheme-1.0.31-QbwKcRV7.js";import"./useControlled-1.0.31-27-LkxG9.js";import"./createSvgIcon-1.0.31-BC4iq9Gi.js";import"./SwitchBase-1.0.31-AIM_3--O.js";const I=({value:n,columnMetaData:e,setValue:r,saveChanges:p,enumValues:s})=>{c.debug(n,e);const m=g(n,p),u=null;return o.jsx("div",{onClick:i=>{i.stopPropagation()},children:o.jsx(f,{MenuProps:{id:"pp-select-menu"},className:"pp-inline-editing",value:n??"",variant:"outlined",onChange:i=>{r(i.target.value===""?null:i.target.value)},sx:{width:"100%","&.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:"1px !important"}},children:(()=>{const i=s.map(function(t){return o.jsx(a,{value:t,onClick:()=>{m(!0)},children:t},t)});return e.is_nullable==="YES"?[o.jsx(a,{"data-id":"pp-empty-enum-item",value:u,onClick:()=>{m(!0)},children:" "},"pp-empty-enum-item")].concat(i):i})()})})},h=({value:n,tableState:e,columnState:r,columnMetaData:p,setValue:s,saveChanges:m,enumValues:u})=>{c.debug(n,e,r,p);const i=g(n,m);return o.jsx("div",{onClick:t=>{t.stopPropagation()},children:o.jsx(E,{className:"pp-inline-editing",sx:{flexDirection:r.inlineEditingEnum===d.RADIO_HORIZONTAL?"row":"column",justifyContent:r.alignment,...r.alignment===x.RIGHT&&{marginRight:"-16px"}},value:n,onChange:t=>{s(t.target.value)},children:u.map(function(l){return o.jsx(R,{control:o.jsx(j,{onClick:()=>{i(!0)}}),value:l,label:l},l)})})})},K=({value:n,tableState:e,columnState:r,columnMetaData:p,setValue:s,saveChanges:m,cancel:u,setButtons:i})=>{c.debug(n,e,r,p);const t=p.column_type.replace("enum(","").replace(")","").replaceAll("'","").split(",");switch(r.inlineEditingEnum){case d.RADIO_HORIZONTAL:case d.RADIO_VERTICAL:return o.jsx(h,{value:n,tableState:e,columnState:r,columnMetaData:p,setValue:s,saveChanges:m,cancel:u,setButtons:i,enumValues:t});default:return o.jsx(I,{value:n,tableState:e,columnState:r,columnMetaData:p,setValue:s,saveChanges:m,cancel:u,setButtons:i,enumValues:t})}};export{K as default};