import{l as u,r as o,j as r}from"./main-1.0.17.js";import{F as n}from"./usePrepareStore-1.0.17-a8be8b2f.js";import{T as g}from"./TargetEnum-1.0.17-1e1ba2c5.js";import{F as c}from"./Select-1.0.17-745624d0.js";import{F as j}from"./FormControlLabel-1.0.17-cc31d0c1.js";import{C}from"./Checkbox-1.0.17-3dddd4e7.js";import"./main-1.0.17-54ffa424.js";import"./iconBase-1.0.17-8d991e6c.js";import"./Close-1.0.17-6c546366.js";import"./createSvgIcon-1.0.17-f0c1dc0a.js";import"./Menu-1.0.17-09126381.js";const L=({columnName:s,columnValue:d,columnMetaData:l,onColumnChange:b,formMode:a})=>{u.debug(s,d,l);const[m,x]=o.useState(!1),[e,p]=o.useState(JSON.parse(d));u.debug(e),o.useEffect(()=>{m&&b(s,JSON.stringify(e))},[e]),e!==null&&(e.label===void 0||e.url===void 0||e.target===void 0)&&p({label:"",url:"",target:"",...e});const i=t=>{x(!0),p({...e,...t})};return r.jsxs("fieldset",{className:"pp-fieldset",style:{padding:"20px"},children:[r.jsx("legend",{children:l.formLabel}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:"20px"},children:[r.jsx(g,{label:"Label",value:(e==null?void 0:e.label)??"",required:l.is_nullable==="NO",inputProps:{readOnly:a===n.VIEW},onChange:t=>{i({label:t.target.value})}}),r.jsx(c,{children:r.jsx(j,{control:r.jsx(C,{id:s,checked:(e==null?void 0:e.target)==="_blank",disabled:a===n.VIEW,onChange:(t,f)=>{i({target:f?"_blank":""})}}),label:"Open link in a new tab"})}),r.jsx(g,{label:"Url",value:(e==null?void 0:e.url)??"",required:l.is_nullable==="NO",inputProps:{readOnly:a===n.VIEW},sx:{gridColumn:"1 / span 2"},onChange:t=>{i({url:t.target.value})}})]})]})};export{L as default};