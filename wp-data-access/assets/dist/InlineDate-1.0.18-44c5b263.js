import{l as u,j as p,y as f,e as l}from"./main-1.0.18.js";import{i as c}from"./useTheme-1.0.18-c1f3f722.js";import{d as e}from"./dayjs.min-1.0.18-7ea54188.js";import{a1 as x}from"./useMobilePicker-1.0.18-1215309b.js";import{A as j}from"./AdapterDayjs-1.0.18-388eaec6.js";import{D as y}from"./DatePicker-1.0.18-90c55de2.js";import"./RestApi-1.0.18-cb72bd79.js";import"./Typography-1.0.18-dc3c0740.js";import"./colorManipulator-1.0.18-95bf61ec.js";import"./iconBase-1.0.18-3c21f5e2.js";import"./DialogContent-1.0.18-5570cba4.js";import"./index.esm-1.0.18-12f13c4a.js";import"./Modal-1.0.18-870f459d.js";import"./useControlled-1.0.18-12a74006.js";import"./Popper-1.0.18-20544c9b.js";import"./Grow-1.0.18-4ebc2ce8.js";import"./InputAdornment-1.0.18-958a8148.js";import"./useFormControl-1.0.18-87a8487d.js";import"./createSvgIcon-1.0.18-dcf0276e.js";import"./CardContent-1.0.18-3d5e5525.js";import"./Menu-1.0.18-e8cb0649.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Popover-1.0.18-54868205.js";import"./ListItem-1.0.18-e1cfc559.js";import"./FormHelperText-1.0.18-8b4ce85f.js";import"./Autocomplete-1.0.18-a264f80a.js";import"./TextField-1.0.18-cf148b4e.js";import"./FormLabel-1.0.18-47dbe87d.js";import"./Close-1.0.18-d90e9fa7.js";import"./index-1.0.18-ff546563.js";import"./dateViewRenderers-1.0.18-21bd6103.js";const V=({value:t,setValue:m,setButtons:a,saveChanges:s,cancel:n,locale:i,language:r,columnState:d})=>(u.debug(t),p.jsx("div",{onClick:o=>{o.stopPropagation()},children:p.jsx(x,{dateAdapter:j,adapterLocale:d.localize?c((r==null?void 0:r.dayjs)??f.defaultLanguage.dayjs):void 0,children:p.jsx(y,{className:"pp-inline-editing",value:t?e(t):null,onChange:o=>{m(o===null?null:e(o).format("YYYY-MM-DD"))},slotProps:{textField:{variant:"outlined",onKeyDown:o=>{o.key==="Enter"?t!==null&&!e(t).isValid()?l(i==null?void 0:i.invalidDate,{variant:"error"}):s():o.key==="Escape"&&n()},onBlur:()=>{setTimeout(()=>{a(!1)},200)},onFocus:()=>{a(!0)},sx:{"& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:"1px"},"& .MuiInputBase-root:before":{borderBottomWidth:"1px !important"},"& .MuiInputBase-root.Mui-focused:after":{borderBottomWidth:"1px"}}}}})})}));export{V as default};
