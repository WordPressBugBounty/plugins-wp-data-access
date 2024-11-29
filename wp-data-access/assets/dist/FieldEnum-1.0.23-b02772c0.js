import{l as I,j as e,dI as O,dJ as d,c7 as S,S as H}from"./main-1.0.23.js";import{F as v}from"./ThemeContainer-1.0.23-10b65460.js";import{F as _,a as m}from"./FormHelperText-1.0.23-83597bdf.js";import{I as P,S as k}from"./TextField-1.0.23-1657e9d4.js";import{M as T}from"./MenuItem-1.0.23-0a5da249.js";import{E as A}from"./EnumTypeEnum-1.0.23-7ffcf33a.js";import{F as w}from"./FormLabel-1.0.23-71a056b2.js";import{R as U}from"./RadioGroup-1.0.23-053476ee.js";import{F as W}from"./FormControlLabel-1.0.23-1ad68af6.js";import{R as Z}from"./Radio-1.0.23-7006053b.js";import"./RestApi-1.0.23-cc179eb9.js";import"./useTheme-1.0.23-55aea9bb.js";import"./colorManipulator-1.0.23-e382be1d.js";import"./Typography-1.0.23-19a0fd3e.js";import"./iconBase-1.0.23-43ac6f06.js";import"./index.esm-1.0.23-ba0465a2.js";import"./FallbackSpinner-1.0.23-96931408.js";import"./Spinner-1.0.23-90ab83ff.js";import"./Tooltip-1.0.23-1b58a848.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./Popper-1.0.23-4a0d0616.js";import"./useControlled-1.0.23-1e71c28b.js";import"./Grow-1.0.23-40b2ff68.js";import"./useFormControl-1.0.23-a0ae6ce7.js";import"./Menu-1.0.23-e889464a.js";import"./Popover-1.0.23-6c9c65a6.js";import"./Modal-1.0.23-3fe42627.js";import"./createSvgIcon-1.0.23-f9410a01.js";import"./createStyled-1.0.23-528f26c2.js";import"./SwitchBase-1.0.23-adccc77c.js";const $=({columnName:s,columnValue:i,columnMetaData:x,storeColumn:t,columnValidation:r,onColumnChange:g,metaData:j,storeForm:h,enumValues:f,formMode:b,locale:E})=>{I.debug(s,i,x,t,r,j,h,f,b,E);const R={className:t.classNames,readOnly:b===v.VIEW||b===v.UPDATE&&(j.primary_key.includes(s)||t.updatable===!1)},L=r!=null&&r.error?r==null?void 0:r.text:E.selectFromList,F=null;return e.jsxs(_,{children:[e.jsx(P,{variant:O(),children:x.formLabel}),e.jsx(k,{MenuProps:{id:"pp-select-menu"},error:r==null?void 0:r.error,label:x.formLabel,value:i??"",inputProps:R,variant:O(),onChange:p=>{g(s,p.target.value===""?null:p.target.value)},children:(()=>{const p=f.map(function(y){return e.jsx(T,{"data-id":s,value:y,children:y},y)});return x.is_nullable==="YES"?[e.jsx(T,{"data-id":"pp-empty-enum-item",value:F,children:" "},"pp-empty-enum-item")].concat(p):p})()}),e.jsx(m,{children:d(t,L)})]})},B=({columnName:s,columnValue:i,columnMetaData:x,storeColumn:t,columnValidation:r,onColumnChange:g,metaData:j,enumValues:h,formMode:f,orientation:b,locale:E})=>{I.debug(s,i,x,t,r,j,h,f,b,E);const R=r!=null&&r.error?r==null?void 0:r.text:E.selectFromRadio;return e.jsxs(_,{children:[e.jsx(w,{children:x.formLabel}),e.jsx(U,{className:t.classNames,value:i,sx:{flexDirection:b===A.RADIO_HORIZONTAL?"row":"column",paddingLeft:"12px"},onChange:L=>{g(s,L.target.value)},children:(()=>h.map(function(F){return e.jsx(W,{control:e.jsx(Z,{disabled:f===v.VIEW||f===v.UPDATE&&(j.primary_key.includes(s)||t.updatable===!1)}),value:F,label:F},F)}))()}),e.jsx(m,{children:d(t,R)})]})},Fr=({appId:s,columnName:i,columnValue:x,columnInitialValue:t,columnMetaData:r,storeColumn:g,columnValidation:j,onColumnChange:h,metaData:f,context:b,storeTable:E,storeForm:R,formMode:L,locale:F})=>{const p=S(H.getState(),s,i);I.debug(p,s,i,x);const y=r.column_type.replace("enum(","").replace(")","").replaceAll("'","").split(",");switch(p==null?void 0:p.updatableEnum){case A.RADIO_HORIZONTAL:case A.RADIO_VERTICAL:return e.jsx(B,{appId:s,columnName:i,columnValue:x,columnInitialValue:t,columnMetaData:r,storeColumn:g,onColumnChange:h,metaData:f,context:b,storeTable:E,storeForm:R,enumValues:y,orientation:p==null?void 0:p.updatableEnum,formMode:L,columnValidation:j,locale:F});default:return e.jsx($,{appId:s,columnName:i,columnValue:x,columnInitialValue:t,columnMetaData:r,storeColumn:g,onColumnChange:h,metaData:f,context:b,storeTable:E,storeForm:R,enumValues:y,formMode:L,columnValidation:j,locale:F})}};export{Fr as default};