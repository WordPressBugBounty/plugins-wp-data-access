import{j as o}from"./cm-1.0.24-lBsX3THK.js";import{l as c}from"./lib-1.0.24-up-HxGpi.js";import{u as x}from"./useAutoUpdate-1.0.24-B_MUvJsY.js";import{S as f}from"./TextField-1.0.24-CX3Aj71c.js";import{M as a}from"./MenuItem-1.0.24-cnqjqUCU.js";import{E as d}from"./EnumTypeEnum-1.0.24-Ws4BsaYD.js";import{R as g}from"./RadioGroup-1.0.24-C4yZZRVK.js";import{F as E}from"./FormControlLabel-1.0.24-jTuSRk-Y.js";import{R as j}from"./Radio-1.0.24-DPbrWB-2.js";import"./redux-1.0.24-Bx8jJ3ee.js";import"./vendor-1.0.24-BmpNFhoq.js";import"./loglevel-1.0.24-BZ7XahX3.js";import"./lodash-1.0.24-CC2RnyUh.js";import"./moment-1.0.24-C5S46NFB.js";import"./Typography-1.0.24-DtpcakL_.js";import"./iconBase-1.0.24-C7lJg7VQ.js";import"./FormHelperText-1.0.24-dIoAVumM.js";import"./useFormControl-1.0.24-BVJe4wXv.js";import"./index-1.0.24-CyelUMLZ.js";import"./notistack-1.0.24-EH6RgmCJ.js";import"./FormLabel-1.0.24-DNrTGbzF.js";import"./Menu-1.0.24-Bmzze4W5.js";import"./ThemeProvider-1.0.24-koXQmW7k.js";import"./useControlled-1.0.24-DnsqB4VW.js";import"./createSvgIcon-1.0.24-BKX7HR5-.js";import"./SwitchBase-1.0.24-k3CO2XxE.js";const I=({value:r,columnMetaData:e,setValue:n,saveChanges:p,enumValues:s})=>{c.debug(r,e);const m=x(r,p),u=null;return o.jsx("div",{onClick:i=>{i.stopPropagation()},children:o.jsx(f,{MenuProps:{id:"pp-select-menu"},className:"pp-inline-editing",value:r??"",variant:"outlined",onChange:i=>{n(i.target.value===""?null:i.target.value)},sx:{width:"100%","&.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:"1px !important"}},children:(()=>{const i=s.map(function(t){return o.jsx(a,{value:t,onClick:()=>{m(!0)},children:t},t)});return e.is_nullable==="YES"?[o.jsx(a,{"data-id":"pp-empty-enum-item",value:u,onClick:()=>{m(!0)},children:" "},"pp-empty-enum-item")].concat(i):i})()})})},R=({value:r,tableState:e,columnState:n,columnMetaData:p,setValue:s,saveChanges:m,enumValues:u})=>{c.debug(r,e,n,p);const i=x(r,m);return o.jsx("div",{onClick:t=>{t.stopPropagation()},children:o.jsx(g,{className:"pp-inline-editing",sx:{flexDirection:n.inlineEditingEnum===d.RADIO_HORIZONTAL?"row":"column"},value:r,onChange:t=>{s(t.target.value)},children:u.map(function(l){return o.jsx(E,{control:o.jsx(j,{onClick:()=>{i(!0)}}),value:l,label:l},l)})})})},J=({value:r,tableState:e,columnState:n,columnMetaData:p,setValue:s,saveChanges:m,cancel:u,setButtons:i})=>{c.debug(r,e,n,p);const t=p.column_type.replace("enum(","").replace(")","").replaceAll("'","").split(",");switch(n.inlineEditingEnum){case d.RADIO_HORIZONTAL:case d.RADIO_VERTICAL:return o.jsx(R,{value:r,tableState:e,columnState:n,columnMetaData:p,setValue:s,saveChanges:m,cancel:u,setButtons:i,enumValues:t});default:return o.jsx(I,{value:r,tableState:e,columnState:n,columnMetaData:p,setValue:s,saveChanges:m,cancel:u,setButtons:i,enumValues:t})}};export{J as default};