import{l as I,j as e,dI as y,dJ as E}from"./main-1.0.23.js";import{F as g}from"./ThemeContainer-1.0.23-10b65460.js";import{F as P,a as S}from"./FormHelperText-1.0.23-83597bdf.js";import{I as T,S as l}from"./TextField-1.0.23-1657e9d4.js";import{M as A}from"./MenuItem-1.0.23-0a5da249.js";import"./RestApi-1.0.23-cc179eb9.js";import"./useTheme-1.0.23-55aea9bb.js";import"./colorManipulator-1.0.23-e382be1d.js";import"./Typography-1.0.23-19a0fd3e.js";import"./iconBase-1.0.23-43ac6f06.js";import"./index.esm-1.0.23-ba0465a2.js";import"./FallbackSpinner-1.0.23-96931408.js";import"./Spinner-1.0.23-90ab83ff.js";import"./Tooltip-1.0.23-1b58a848.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./Popper-1.0.23-4a0d0616.js";import"./useControlled-1.0.23-1e71c28b.js";import"./Grow-1.0.23-40b2ff68.js";import"./useFormControl-1.0.23-a0ae6ce7.js";import"./FormLabel-1.0.23-71a056b2.js";import"./Menu-1.0.23-e889464a.js";import"./Popover-1.0.23-6c9c65a6.js";import"./Modal-1.0.23-3fe42627.js";import"./createSvgIcon-1.0.23-f9410a01.js";const C=({columnName:s,columnValue:i,columnMetaData:p,storeColumn:t,columnValidation:r,onColumnChange:o,metaData:j,storeForm:h,formMode:m,locale:F})=>{I.debug(s,i,p,t,r,j,h,m,F);const L={className:t.classNames,readOnly:m===g.VIEW||m===g.UPDATE&&(j.primary_key.includes(s)||t.updatable===!1)},v=r!=null&&r.error?r==null?void 0:r.text:F.selectFromList;return e.jsxs(P,{children:[e.jsx(T,{variant:h.fieldVariant,children:p.formLabel}),e.jsx(l,{MenuProps:{id:"pp-select-menu"},error:r==null?void 0:r.error,label:p.formLabel,value:i===null?[]:i.split(","),multiple:!0,inputProps:L,variant:y(),onChange:b=>{const x=b.target.value.join(",");o(s,x!==""?x:null)},children:(()=>p.column_type.replace("set(","").replace(")","").replaceAll("'","").split(",").map(function(f){return e.jsx(A,{value:f,children:f},f)}))()}),e.jsx(S,{children:E(t,v)})]})};export{C as default};
