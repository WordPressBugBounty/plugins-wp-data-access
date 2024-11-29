import{l as b,r as n,j as e}from"./main-1.0.23.js";import{F as s}from"./ThemeContainer-1.0.23-10b65460.js";import{T as g}from"./TextField-1.0.23-1657e9d4.js";import{F as y}from"./FormHelperText-1.0.23-83597bdf.js";import{F as E}from"./FormControlLabel-1.0.23-1ad68af6.js";import{C as v}from"./Checkbox-1.0.23-e63c68aa.js";import"./RestApi-1.0.23-cc179eb9.js";import"./useTheme-1.0.23-55aea9bb.js";import"./colorManipulator-1.0.23-e382be1d.js";import"./Typography-1.0.23-19a0fd3e.js";import"./iconBase-1.0.23-43ac6f06.js";import"./index.esm-1.0.23-ba0465a2.js";import"./FallbackSpinner-1.0.23-96931408.js";import"./Spinner-1.0.23-90ab83ff.js";import"./Tooltip-1.0.23-1b58a848.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./Popper-1.0.23-4a0d0616.js";import"./useControlled-1.0.23-1e71c28b.js";import"./Grow-1.0.23-40b2ff68.js";import"./useFormControl-1.0.23-a0ae6ce7.js";import"./FormLabel-1.0.23-71a056b2.js";import"./Menu-1.0.23-e889464a.js";import"./Popover-1.0.23-6c9c65a6.js";import"./Modal-1.0.23-3fe42627.js";import"./createSvgIcon-1.0.23-f9410a01.js";import"./createStyled-1.0.23-528f26c2.js";import"./SwitchBase-1.0.23-adccc77c.js";const Y=({columnName:t,columnValue:m,columnMetaData:p,onColumnChange:x,formMode:i,metaData:a,storeColumn:o})=>{b.debug(t,m,p);const[f,c]=n.useState(!1),[r,u]=n.useState(JSON.parse(m));b.debug(r),n.useEffect(()=>{f&&x(t,JSON.stringify(r))},[r]),r!==null&&(r.label===void 0||r.url===void 0||r.target===void 0)&&u({label:"",url:"",target:"",...r});const d=l=>{c(!0),u({...r,...l})};return e.jsxs("fieldset",{className:"pp-fieldset",style:{padding:"20px"},children:[e.jsx("legend",{children:p.formLabel}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:"20px"},children:[e.jsx(g,{label:"Label",value:(r==null?void 0:r.label)??"",required:p.is_nullable==="NO",inputProps:{readOnly:i===s.VIEW||i===s.UPDATE&&(a.primary_key.includes(t)||o.updatable===!1)},onChange:l=>{d({label:l.target.value})}}),e.jsx(y,{children:e.jsx(E,{control:e.jsx(v,{id:t,checked:(r==null?void 0:r.target)==="_blank",disabled:i===s.VIEW||i===s.UPDATE&&(a.primary_key.includes(t)||o.updatable===!1),onChange:(l,j)=>{d({target:j?"_blank":""})}}),label:"Open link in a new tab"})}),e.jsx(g,{label:"Url",value:(r==null?void 0:r.url)??"",required:p.is_nullable==="NO",inputProps:{readOnly:i===s.VIEW||i===s.UPDATE&&(a.primary_key.includes(t)||o.updatable===!1)},sx:{gridColumn:"1 / span 2"},onChange:l=>{d({url:l.target.value})}})]})]})};export{Y as default};