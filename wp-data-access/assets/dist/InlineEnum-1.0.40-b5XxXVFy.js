import{j as o}from"./cm-1.0.40-DO7MoydR.js";import{l as c,j as x}from"./lib-1.0.40-CJM-IO_o.js";import{u as g}from"./useAutoUpdate-1.0.40-BJEgdA-p.js";import{S as f}from"./Select-1.0.40-Db-Xnyoo.js";import{M as a}from"./MenuItem-1.0.40-UKMJrtYZ.js";import{E as d}from"./EnumTypeEnum-1.0.40-Ws4BsaYD.js";import{R as j}from"./RadioGroup-1.0.40-D9A3e6h3.js";import{F as E}from"./FormControlLabel-1.0.40-BH1qH5qy.js";import{R}from"./Radio-1.0.40-BfbkSgOE.js";import"./redux-1.0.40-W_04YL6Z.js";import"./vendor-1.0.40-CN03Eozo.js";import"./loglevel-1.0.40-BZ7XahX3.js";import"./lodash-1.0.40-yZQKpWII.js";import"./moment-1.0.40-C5S46NFB.js";import"./Typography-1.0.40-oRKYqE3b.js";import"./Menu-1.0.40-BKp7UqHL.js";import"./ThemeProvider-1.0.40-D9QtC9zH.js";import"./useEnhancedEffect-1.0.40-DvrM_gBo.js";import"./index-1.0.40-DmMQghWt.js";import"./iconBase-1.0.40-CH6TO7hF.js";import"./notistack-1.0.40-HUa4vT_u.js";import"./utils-1.0.40-iop7lDec.js";import"./useControlled-1.0.40-B7yPDtn1.js";import"./useFormControl-1.0.40-BL8koKXQ.js";import"./createSvgIcon-1.0.40-DryBVjDb.js";import"./SwitchBase-1.0.40-BQrnL2Sx.js";const I=({value:n,columnMetaData:e,setValue:r,saveChanges:p,enumValues:s})=>{c.debug(n,e);const m=g(n,p),u=null;return o.jsx("div",{onClick:i=>{i.stopPropagation()},children:o.jsx(f,{MenuProps:{id:"pp-select-menu"},className:"pp-inline-editing",value:n??"",variant:"outlined",onChange:i=>{r(i.target.value===""?null:i.target.value)},sx:{width:"100%","&.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:"1px !important"}},children:(()=>{const i=s.map(function(t){return o.jsx(a,{value:t,onClick:()=>{m(!0)},children:t},t)});return e.is_nullable==="YES"?[o.jsx(a,{"data-id":"pp-empty-enum-item",value:u,onClick:()=>{m(!0)},children:" "},"pp-empty-enum-item")].concat(i):i})()})})},h=({value:n,tableState:e,columnState:r,columnMetaData:p,setValue:s,saveChanges:m,enumValues:u})=>{c.debug(n,e,r,p);const i=g(n,m);return o.jsx("div",{onClick:t=>{t.stopPropagation()},children:o.jsx(j,{className:"pp-inline-editing",sx:{flexDirection:r.inlineEditingEnum===d.RADIO_HORIZONTAL?"row":"column",justifyContent:r.alignment,...r.alignment===x.RIGHT&&{marginRight:"-16px"}},value:n,onChange:t=>{s(t.target.value)},children:u.map(function(l){return o.jsx(E,{control:o.jsx(R,{onClick:()=>{i(!0)}}),value:l,label:l},l)})})})},K=({value:n,tableState:e,columnState:r,columnMetaData:p,setValue:s,saveChanges:m,cancel:u,setButtons:i})=>{c.debug(n,e,r,p);const t=p.column_type.replace("enum(","").replace(")","").replaceAll("'","").split(",");switch(r.inlineEditingEnum){case d.RADIO_HORIZONTAL:case d.RADIO_VERTICAL:return o.jsx(h,{value:n,tableState:e,columnState:r,columnMetaData:p,setValue:s,saveChanges:m,cancel:u,setButtons:i,enumValues:t});default:return o.jsx(I,{value:n,tableState:e,columnState:r,columnMetaData:p,setValue:s,saveChanges:m,cancel:u,setButtons:i,enumValues:t})}};export{K as default};
