import{j as r}from"./cm-1.0.40-DO7MoydR.js";import{r as p}from"./redux-1.0.40-W_04YL6Z.js";import{l as u,bc as a,cK as k}from"./lib-1.0.40-CJM-IO_o.js";import{B as f}from"./Spinner-1.0.40-Bmn0_C4u.js";import{T as g}from"./TextField-1.0.40-CejEr0KU.js";import{F as x,a as F}from"./FormHelperText-1.0.40-D6buAdoc.js";import{F as O}from"./FormControlLabel-1.0.40-BH1qH5qy.js";import{C as _}from"./Checkbox-1.0.40-DtDfmlS5.js";import"./vendor-1.0.40-CN03Eozo.js";import"./loglevel-1.0.40-BZ7XahX3.js";import"./lodash-1.0.40-yZQKpWII.js";import"./moment-1.0.40-C5S46NFB.js";import"./Typography-1.0.40-oRKYqE3b.js";import"./iconBase-1.0.40-CH6TO7hF.js";import"./useEnhancedEffect-1.0.40-DvrM_gBo.js";import"./Select-1.0.40-Db-Xnyoo.js";import"./Menu-1.0.40-BKp7UqHL.js";import"./ThemeProvider-1.0.40-D9QtC9zH.js";import"./index-1.0.40-DmMQghWt.js";import"./notistack-1.0.40-HUa4vT_u.js";import"./utils-1.0.40-iop7lDec.js";import"./useControlled-1.0.40-B7yPDtn1.js";import"./useFormControl-1.0.40-BL8koKXQ.js";import"./createSvgIcon-1.0.40-DryBVjDb.js";import"./FormLabel-1.0.40-DLOepjQ0.js";import"./SwitchBase-1.0.40-BQrnL2Sx.js";const D=({columnName:i,columnValue:m,columnMetaData:n,onColumnChange:c,formMode:l,metaData:d,storeColumn:s})=>{u.debug(i,m,n);const j=p.useMemo(()=>{try{return JSON.parse(m)}catch(t){u.error(t);return}},[]),[y,h]=p.useState(!1),[e,b]=p.useState(j);u.debug(e),p.useEffect(()=>{y&&c(i,JSON.stringify(e))},[e]),e!=null&&(e.label===void 0||e.url===void 0||e.target===void 0)&&b({label:"",url:"",target:"",...e});const o=t=>{h(!0),b({...e,...t})};return r.jsxs("fieldset",{className:"pp-fieldset",children:[r.jsx("legend",{children:n.formLabel}),e!==void 0?r.jsxs(f,{style:{display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:"20px"},children:[r.jsx(g,{label:"Label",value:(e==null?void 0:e.label)??"",required:n.is_nullable==="NO",slotProps:{input:{readOnly:l===a.VIEW||l===a.UPDATE&&(d.primary_key.includes(i)||s.updatable===!1)}},onChange:t=>{o({label:t.target.value})}}),r.jsx(x,{children:r.jsx(O,{control:r.jsx(_,{id:i,checked:(e==null?void 0:e.target)==="_blank",disabled:l===a.VIEW||l===a.UPDATE&&(d.primary_key.includes(i)||s.updatable===!1),onChange:(t,E)=>{o({target:E?"_blank":""})}}),label:"Open link in a new tab"})}),r.jsx(g,{label:"Url",value:(e==null?void 0:e.url)??"",required:n.is_nullable==="NO",slotProps:{input:{readOnly:l===a.VIEW||l===a.UPDATE&&(d.primary_key.includes(i)||s.updatable===!1)}},sx:{gridColumn:"1 / span 2"},onChange:t=>{o({url:t.target.value})}}),s.hint&&s.hint.trim()!==""&&r.jsx(x,{children:r.jsx(F,{sx:{marginLeft:0},children:k(s,"")})})]}):r.jsx(f,{color:"error.main",className:"unselectable",children:"Invalid hyperlink"})]})};export{D as default};
