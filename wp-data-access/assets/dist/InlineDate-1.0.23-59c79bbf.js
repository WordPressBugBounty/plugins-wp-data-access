import{l as u,j as p,q as f,e as l}from"./main-1.0.23.js";import{i as c}from"./useTheme-1.0.23-55aea9bb.js";import{d as e}from"./dayjs.min-1.0.23-c3dddbc3.js";import{a1 as x}from"./useMobilePicker-1.0.23-d86c6ab1.js";import{A as j}from"./AdapterDayjs-1.0.23-44d02166.js";import{D}from"./DatePicker-1.0.23-0abda5fe.js";import"./RestApi-1.0.23-cc179eb9.js";import"./colorManipulator-1.0.23-e382be1d.js";import"./Typography-1.0.23-19a0fd3e.js";import"./iconBase-1.0.23-43ac6f06.js";import"./DialogContent-1.0.23-79893b13.js";import"./index.esm-1.0.23-ba0465a2.js";import"./Modal-1.0.23-3fe42627.js";import"./useControlled-1.0.23-1e71c28b.js";import"./Popper-1.0.23-4a0d0616.js";import"./Grow-1.0.23-40b2ff68.js";import"./InputAdornment-1.0.23-4e3a41ab.js";import"./useFormControl-1.0.23-a0ae6ce7.js";import"./createSvgIcon-1.0.23-f9410a01.js";import"./CardContent-1.0.23-cd3f2c87.js";import"./Menu-1.0.23-e889464a.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./Popover-1.0.23-6c9c65a6.js";import"./ListItem-1.0.23-64a79cf3.js";import"./FormHelperText-1.0.23-83597bdf.js";import"./Autocomplete-1.0.23-a5bc1209.js";import"./TextField-1.0.23-1657e9d4.js";import"./FormLabel-1.0.23-71a056b2.js";import"./Close-1.0.23-ea28bfa6.js";import"./index-1.0.23-9af490ae.js";import"./dateViewRenderers-1.0.23-cded121c.js";const V=({value:t,setValue:m,setButtons:a,saveChanges:s,cancel:n,locale:i,language:r,columnState:d})=>(u.debug(t),p.jsx("div",{onClick:o=>{o.stopPropagation()},children:p.jsx(x,{dateAdapter:j,adapterLocale:d.localize?c((r==null?void 0:r.dayjs)??f.defaultLanguage.dayjs):void 0,children:p.jsx(D,{className:"pp-inline-editing",value:t?e(t):null,onChange:o=>{m(o===null?null:e(o).format("YYYY-MM-DD"))},slotProps:{textField:{variant:"outlined",onKeyDown:o=>{o.key==="Enter"?t!==null&&!e(t).isValid()?l(i==null?void 0:i.invalidDate,{variant:"error"}):s():o.key==="Escape"&&n()},onBlur:()=>{setTimeout(()=>{a(!1)},200)},onFocus:()=>{a(!0)},sx:{"& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:"1px"},"& .MuiInputBase-root:before":{borderBottomWidth:"1px !important"},"& .MuiInputBase-root.Mui-focused:after":{borderBottomWidth:"1px"}}}}})})}));export{V as default};
