import{l,j as o}from"./main-1.0.23.js";import{u}from"./useAutoUpdate-1.0.23-9a4891a1.js";import{S as a}from"./TextField-1.0.23-1657e9d4.js";import{M as c}from"./MenuItem-1.0.23-0a5da249.js";import"./Typography-1.0.23-19a0fd3e.js";import"./FormHelperText-1.0.23-83597bdf.js";import"./useFormControl-1.0.23-a0ae6ce7.js";import"./index.esm-1.0.23-ba0465a2.js";import"./iconBase-1.0.23-43ac6f06.js";import"./FormLabel-1.0.23-71a056b2.js";import"./Menu-1.0.23-e889464a.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./Popover-1.0.23-6c9c65a6.js";import"./Modal-1.0.23-3fe42627.js";import"./Grow-1.0.23-40b2ff68.js";import"./useControlled-1.0.23-1e71c28b.js";import"./createSvgIcon-1.0.23-f9410a01.js";const w=({value:t,columnMetaData:p,setValue:n,saveChanges:s})=>{l.debug(t,p);const m=u(t,s);return o.jsx("div",{onClick:e=>{e.stopPropagation()},children:o.jsx(a,{MenuProps:{id:"pp-select-menu"},className:"pp-inline-editing",sx:{width:"100%"},value:t===null?[]:t.split(","),multiple:!0,variant:"outlined",onChange:e=>{const r=e.target.value.join(",");n(r!==""?r:null)},children:(()=>p.column_type.replace("set(","").replace(")","").replaceAll("'","").split(",").map(function(i){return o.jsx(c,{value:i,onClick:()=>{m(!0)},children:i},i)}))()})})};export{w as default};