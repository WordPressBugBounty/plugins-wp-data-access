import{j as t}from"./cm-1.0.35--NMEhA6K.js";import{l as o,cb as c,cf as l,cd as n,cc as y}from"./lib-1.0.35-vCbYWOI3.js";import{F as I,a as S}from"./FormHelperText-1.0.35-BubqYRHL.js";import{I as A,S as H}from"./TextField-1.0.35-B1uB0pL3.js";import{M as O}from"./MenuItem-1.0.35-DJ1Zxsyh.js";import"./redux-1.0.35-xa1uZ5t4.js";import"./vendor-1.0.35-CN03Eozo.js";import"./loglevel-1.0.35-BZ7XahX3.js";import"./lodash-1.0.35-CNe2eGU5.js";import"./moment-1.0.35-C5S46NFB.js";import"./Typography-1.0.35-DmbWmVEH.js";import"./useFormControl-1.0.35-gKEqvAy-.js";import"./iconBase-1.0.35-CEh1aNes.js";import"./useEnhancedEffect-1.0.35-gtlBTowv.js";import"./Menu-1.0.35-3APgaaPr.js";import"./AdminTheme-1.0.35-BtyHaBRh.js";import"./cjs-1.0.35-B75n3jry.js";import"./notistack-1.0.35-C7EWtXAA.js";import"./FormLabel-1.0.35-DqGGwQsT.js";import"./useControlled-1.0.35-Cu7qahuZ.js";import"./createSvgIcon-1.0.35-C47rBL-a.js";const $=({columnName:x,columnValue:p,columnMetaData:e,storeColumn:s,columnValidation:r,onColumnChange:L,metaData:f,storeForm:g,formMode:j,locale:h})=>{o.debug(x,p,e,s,r,f,g,j,h);const v={readOnly:c(f,e,s,j)},F=r!=null&&r.error?r==null?void 0:r.text:h.selectFromList;return t.jsxs(I,{className:l(),children:[t.jsx(A,{variant:g.fieldVariant,children:e.formLabel}),t.jsx(H,{MenuProps:{id:"pp-select-menu"},error:r==null?void 0:r.error,label:e.formLabel,value:p===null?[]:p.split(","),multiple:!0,inputProps:v,variant:n(),onChange:b=>{const i=b.target.value.join(",");L(x,i!==""?i:null)},sx:{textAlign:s.alignment},children:e.column_type.replace("set(","").replace(")","").replaceAll("'","").split(",").map(function(m){return t.jsx(O,{value:m,children:m},m)})}),t.jsx(S,{children:y(s,F)})]})};export{$ as default};
