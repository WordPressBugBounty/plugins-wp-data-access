import{j as a}from"./cm-1.0.24-lBsX3THK.js";import{r as u}from"./redux-1.0.24-Bx8jJ3ee.js";import{l,m as d}from"./lib-1.0.24-up-HxGpi.js";import{T as x}from"./TextField-1.0.24-CX3Aj71c.js";import"./vendor-1.0.24-BmpNFhoq.js";import"./loglevel-1.0.24-BZ7XahX3.js";import"./lodash-1.0.24-CC2RnyUh.js";import"./moment-1.0.24-C5S46NFB.js";import"./Typography-1.0.24-DtpcakL_.js";import"./iconBase-1.0.24-C7lJg7VQ.js";import"./FormHelperText-1.0.24-dIoAVumM.js";import"./useFormControl-1.0.24-BVJe4wXv.js";import"./index-1.0.24-CyelUMLZ.js";import"./notistack-1.0.24-EH6RgmCJ.js";import"./FormLabel-1.0.24-DNrTGbzF.js";import"./Menu-1.0.24-Bmzze4W5.js";import"./ThemeProvider-1.0.24-koXQmW7k.js";import"./useControlled-1.0.24-DnsqB4VW.js";import"./createSvgIcon-1.0.24-BKX7HR5-.js";const C=({value:o,columnMetaData:e,setValue:m,cancel:n,setButtons:r})=>{l.debug(o,e);const s=d(o),[i,p]=u.useState(!1);return a.jsx("div",{onClick:t=>{t.stopPropagation()},children:a.jsx(x,{className:"pp-inline-editing pp-textarea",value:s,required:e.is_nullable==="NO",multiline:!0,minRows:i?5:1,maxRows:i?7:1,slotProps:{htmlInput:{maxLength:e.character_maximum_length}},variant:"outlined",onChange:t=>{m(t.target.value===""?null:t.target.value)},onKeyDown:t=>{t.key==="Escape"&&n()},onFocus:()=>{r(!0),p(!0)},onBlur:()=>{setTimeout(()=>{r(!1),p(!1)},200)},sx:{"& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:"1px"},"& .MuiInputBase-root:before":{borderBottomWidth:"1px !important"},"& .MuiInputBase-root.Mui-focused:after":{borderBottomWidth:"1px"}}})})};export{C as default};