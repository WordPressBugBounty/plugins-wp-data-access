import{l as y,j as e,ek as E,el as I}from"./main-1.0.18.js";import{F as g}from"./ThemeContainer-1.0.18-fbd92e13.js";import{F as l,a as P}from"./FormHelperText-1.0.18-8b4ce85f.js";import{I as S,S as T}from"./TextField-1.0.18-cf148b4e.js";import{M as k}from"./MenuItem-1.0.18-0088f2a2.js";import"./RestApi-1.0.18-cb72bd79.js";import"./Typography-1.0.18-dc3c0740.js";import"./useTheme-1.0.18-c1f3f722.js";import"./colorManipulator-1.0.18-95bf61ec.js";import"./iconBase-1.0.18-3c21f5e2.js";import"./index.esm-1.0.18-12f13c4a.js";import"./FallbackSpinner-1.0.18-e10446f4.js";import"./Spinner-1.0.18-de8df990.js";import"./Tooltip-1.0.18-5f32f0fd.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Popper-1.0.18-20544c9b.js";import"./useControlled-1.0.18-12a74006.js";import"./Grow-1.0.18-4ebc2ce8.js";import"./useFormControl-1.0.18-87a8487d.js";import"./FormLabel-1.0.18-47dbe87d.js";import"./Menu-1.0.18-e8cb0649.js";import"./Popover-1.0.18-54868205.js";import"./Modal-1.0.18-870f459d.js";import"./createSvgIcon-1.0.18-dcf0276e.js";const M=({columnName:s,columnValue:i,columnMetaData:p,storeColumn:t,columnValidation:r,onColumnChange:o,metaData:j,storeForm:h,formMode:m,locale:F})=>{y.debug(s,i,p,t,r,j,h,m,F);const L={className:t.classNames,readOnly:m===g.VIEW||m===g.UPDATE&&(j.primary_key.includes(s)||t.updatable===!1)},v=r!=null&&r.error?r==null?void 0:r.text:F.selectFromList;return e.jsxs(l,{children:[e.jsx(S,{variant:h.fieldVariant,children:p.formLabel}),e.jsx(T,{MenuProps:{id:"pp-select-menu"},error:r==null?void 0:r.error,label:p.formLabel,value:i===null?[]:i.split(","),multiple:!0,inputProps:L,variant:E(),onChange:b=>{const x=b.target.value.join(",");o(s,x!==""?x:null)},children:(()=>p.column_type.replace("set(","").replace(")","").replaceAll("'","").split(",").map(function(f){return e.jsx(k,{value:f,children:f},f)}))()}),e.jsx(P,{children:I(t,v)})]})};export{M as default};
