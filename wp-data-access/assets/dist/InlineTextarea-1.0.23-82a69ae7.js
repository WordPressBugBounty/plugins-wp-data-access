import{l,v as d,r as x,j as n}from"./main-1.0.23.js";import{T as c}from"./TextField-1.0.23-1657e9d4.js";import"./Typography-1.0.23-19a0fd3e.js";import"./FormHelperText-1.0.23-83597bdf.js";import"./useFormControl-1.0.23-a0ae6ce7.js";import"./index.esm-1.0.23-ba0465a2.js";import"./iconBase-1.0.23-43ac6f06.js";import"./FormLabel-1.0.23-71a056b2.js";import"./Menu-1.0.23-e889464a.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./Popover-1.0.23-6c9c65a6.js";import"./Modal-1.0.23-3fe42627.js";import"./Grow-1.0.23-40b2ff68.js";import"./useControlled-1.0.23-1e71c28b.js";import"./createSvgIcon-1.0.23-f9410a01.js";const _=({value:e,columnMetaData:o,setValue:p,cancel:s,setButtons:r})=>{l.debug(e,o);const u=e===null?"":d(e),[i,a]=x.useState(!1),m={maxLength:o.character_maximum_length};return n.jsx("div",{onClick:t=>{t.stopPropagation()},children:n.jsx(c,{className:"pp-inline-editing pp-textarea",value:u,required:o.is_nullable==="NO",multiline:!0,minRows:i?5:1,maxRows:i?7:1,inputProps:m,variant:"outlined",onChange:t=>{p(t.target.value===""?null:t.target.value)},onKeyDown:t=>{t.key==="Escape"&&s()},onFocus:()=>{r(!0),a(!0)},onBlur:()=>{setTimeout(()=>{r(!1),a(!1)},200)},sx:{"& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:"1px"},"& .MuiInputBase-root:before":{borderBottomWidth:"1px !important"},"& .MuiInputBase-root.Mui-focused:after":{borderBottomWidth:"1px"}}})})};export{_ as default};
