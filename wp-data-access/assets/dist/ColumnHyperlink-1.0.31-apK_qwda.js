import{j as e}from"./cm-1.0.31-BzgG35ZX.js";import{r as o}from"./redux-1.0.31-CuzmJMK6.js";import{l as m,K as a,cd as E}from"./lib-1.0.31-BbX3jq4e.js";import{B as g}from"./Spinner-1.0.31-Be7r01J6.js";import{T as x}from"./TextField-1.0.31-TtMrk-_t.js";import{F as c,a as k}from"./FormHelperText-1.0.31-CQcG9a5q.js";import{F}from"./FormControlLabel-1.0.31-VNfgE3Oe.js";import{C as O}from"./Checkbox-1.0.31-vMcA9dS9.js";import"./vendor-1.0.31-BmpNFhoq.js";import"./loglevel-1.0.31-BZ7XahX3.js";import"./lodash-1.0.31-BtCjXqrS.js";import"./moment-1.0.31-C5S46NFB.js";import"./Typography-1.0.31-BdhCS1KD.js";import"./iconBase-1.0.31-C37NsRUm.js";import"./cjs-1.0.31-B-_HdexB.js";import"./notistack-1.0.31-CuGQWCbt.js";import"./useFormControl-1.0.31-2YJOQA8g.js";import"./FormLabel-1.0.31-7Vju-x1c.js";import"./Menu-1.0.31-BOTBPSPr.js";import"./AdminTheme-1.0.31-QbwKcRV7.js";import"./useControlled-1.0.31-27-LkxG9.js";import"./createSvgIcon-1.0.31-BC4iq9Gi.js";import"./SwitchBase-1.0.31-AIM_3--O.js";const Y=({columnName:i,columnValue:u,columnMetaData:p,onColumnChange:f,formMode:l,metaData:n,storeColumn:s})=>{m.debug(i,u,p);const j=o.useMemo(()=>{try{return JSON.parse(u)}catch(t){m.error(t);return}},[]),[v,y]=o.useState(!1),[r,b]=o.useState(j);m.debug(r),o.useEffect(()=>{v&&f(i,JSON.stringify(r))},[r]),r!=null&&(r.label===void 0||r.url===void 0||r.target===void 0)&&b({label:"",url:"",target:"",...r});const d=t=>{y(!0),b({...r,...t})};return e.jsxs("fieldset",{className:"pp-fieldset",children:[e.jsx("legend",{children:p.formLabel}),r!==void 0?e.jsxs(g,{style:{display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:"20px"},children:[e.jsx(x,{label:"Label",value:(r==null?void 0:r.label)??"",required:p.is_nullable==="NO",slotProps:{input:{readOnly:l===a.VIEW||l===a.UPDATE&&(n.primary_key.includes(i)||s.updatable===!1)}},onChange:t=>{d({label:t.target.value})}}),e.jsx(c,{children:e.jsx(F,{control:e.jsx(O,{id:i,checked:(r==null?void 0:r.target)==="_blank",disabled:l===a.VIEW||l===a.UPDATE&&(n.primary_key.includes(i)||s.updatable===!1),onChange:(t,h)=>{d({target:h?"_blank":""})}}),label:"Open link in a new tab"})}),e.jsx(x,{label:"Url",value:(r==null?void 0:r.url)??"",required:p.is_nullable==="NO",slotProps:{input:{readOnly:l===a.VIEW||l===a.UPDATE&&(n.primary_key.includes(i)||s.updatable===!1)}},sx:{gridColumn:"1 / span 2"},onChange:t=>{d({url:t.target.value})}}),s.hint&&s.hint.trim()!==""&&e.jsx(c,{children:e.jsx(k,{sx:{marginLeft:0},children:E(s,"")})})]}):e.jsx(g,{color:"error.main",className:"unselectable",children:"Invalid hyperlink"})]})};export{Y as default};
