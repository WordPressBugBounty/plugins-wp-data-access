import{l,j as o}from"./main-1.0.18.js";import{u}from"./useAutoUpdate-1.0.18-e28f7b00.js";import{S as a}from"./TextField-1.0.18-cf148b4e.js";import{M as c}from"./MenuItem-1.0.18-0088f2a2.js";import"./Typography-1.0.18-dc3c0740.js";import"./FormHelperText-1.0.18-8b4ce85f.js";import"./useFormControl-1.0.18-87a8487d.js";import"./index.esm-1.0.18-12f13c4a.js";import"./iconBase-1.0.18-3c21f5e2.js";import"./FormLabel-1.0.18-47dbe87d.js";import"./Menu-1.0.18-e8cb0649.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Popover-1.0.18-54868205.js";import"./Modal-1.0.18-870f459d.js";import"./Grow-1.0.18-4ebc2ce8.js";import"./useControlled-1.0.18-12a74006.js";import"./createSvgIcon-1.0.18-dcf0276e.js";const w=({value:t,columnMetaData:p,setValue:n,saveChanges:s})=>{l.debug(t,p);const m=u(t,s);return o.jsx("div",{onClick:e=>{e.stopPropagation()},children:o.jsx(a,{MenuProps:{id:"pp-select-menu"},className:"pp-inline-editing",sx:{width:"100%"},value:t===null?[]:t.split(","),multiple:!0,variant:"outlined",onChange:e=>{const r=e.target.value.join(",");n(r!==""?r:null)},children:(()=>p.column_type.replace("set(","").replace(")","").replaceAll("'","").split(",").map(function(i){return o.jsx(c,{value:i,onClick:()=>{m(!0)},children:i},i)}))()})})};export{w as default};