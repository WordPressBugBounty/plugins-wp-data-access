import{j as e}from"./cm-1.0.35--NMEhA6K.js";import{u as l}from"./useAutoUpdate-1.0.35-BFrrYEOP.js";import{l as u}from"./lib-1.0.35-vCbYWOI3.js";import{S as a}from"./TextField-1.0.35-B1uB0pL3.js";import{M as c}from"./MenuItem-1.0.35-DJ1Zxsyh.js";import"./redux-1.0.35-xa1uZ5t4.js";import"./vendor-1.0.35-CN03Eozo.js";import"./loglevel-1.0.35-BZ7XahX3.js";import"./lodash-1.0.35-CNe2eGU5.js";import"./moment-1.0.35-C5S46NFB.js";import"./Typography-1.0.35-DmbWmVEH.js";import"./iconBase-1.0.35-CEh1aNes.js";import"./useEnhancedEffect-1.0.35-gtlBTowv.js";import"./useFormControl-1.0.35-gKEqvAy-.js";import"./Menu-1.0.35-3APgaaPr.js";import"./AdminTheme-1.0.35-BtyHaBRh.js";import"./cjs-1.0.35-B75n3jry.js";import"./notistack-1.0.35-C7EWtXAA.js";import"./FormHelperText-1.0.35-BubqYRHL.js";import"./FormLabel-1.0.35-DqGGwQsT.js";import"./useControlled-1.0.35-Cu7qahuZ.js";import"./createSvgIcon-1.0.35-C47rBL-a.js";const V=({value:t,columnMetaData:p,setValue:m,saveChanges:n})=>{u.debug(t,p);const s=l(t,n);return e.jsx("div",{onClick:r=>{r.stopPropagation()},children:e.jsx(a,{MenuProps:{id:"pp-select-menu"},className:"pp-inline-editing",sx:{width:"100%"},value:t===null?[]:t.split(","),multiple:!0,variant:"outlined",onChange:r=>{const o=r.target.value.join(",");m(o!==""?o:null)},children:p.column_type.replace("set(","").replace(")","").replaceAll("'","").split(",").map(function(i){return e.jsx(c,{value:i,onClick:()=>{s(!0)},children:i},i)})})})};export{V as default};
