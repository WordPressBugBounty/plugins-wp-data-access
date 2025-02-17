import{j as e}from"./cm-1.0.34-jkgb9fqk.js";import{A as F,a as k,b as P,c as E}from"./AppListContainer-1.0.34-oqrcYfqd.js";import{r as v}from"./redux-1.0.34-BykGtd51.js";import{v as b,B as f,w as B}from"./cjs-1.0.34-s8JVqkTy.js";import{T as j}from"./TargetEnum-1.0.34-DPFnTxiX.js";import{b as D}from"./ConfirmDialog-1.0.34-DWUfUq0S.js";import{s as G}from"./ActionsSettings-1.0.34-D8Qcsc97.js";import{e as h}from"./notistack-1.0.34-CSyPb4yh.js";import{l as p,b as T,k as C,I as c,A as U}from"./lib-1.0.34-CKToGW0d.js";import{A as m,a as u}from"./AccordionSummary-1.0.34-BSahbgsH.js";import{A as w}from"./AccordionDetails-1.0.34-_Aajd3cL.js";import{F as d,a as A}from"./FormHelperText-1.0.34-DgFI7tJ8.js";import{u as M,a as R}from"./RestApi-1.0.34-BxEfvjo_.js";import{P as W}from"./PremiumFeature-1.0.34-DfZQs3Ud.js";import{F as g}from"./FormControlLabel-1.0.34-BSZPBg3u.js";import{S as x}from"./Switch-1.0.34-CATLadEc.js";import{T as S,S as L}from"./TextField-1.0.34-CRuVZ2IL.js";import{B as y}from"./Spinner-1.0.34-Co4td_et.js";import{M as n}from"./MenuItem-1.0.34-B8z32nyF.js";import"./vendor-1.0.34-CN03Eozo.js";import"./AdminTheme-1.0.34-9phfEwG6.js";import"./Typography-1.0.34-CPcqRq0L.js";import"./useEnhancedEffect-1.0.34-BO4gRPLZ.js";import"./main-1.0.34.js";import"./loglevel-1.0.34-BZ7XahX3.js";import"./lodash-1.0.34-Bq_dBoMp.js";import"./moment-1.0.34-C5S46NFB.js";import"./TabPanel-1.0.34-CMifEkiN.js";import"./iconBase-1.0.34-CNhS-hAm.js";import"./DialogContent-1.0.34-BpZCA1LJ.js";import"./index-1.0.34-BtSBPsUk.js";import"./settings-1.0.34-CczHVXWk.js";import"./Menu-1.0.34-BOIQgOXy.js";import"./ComponentColumn-1.0.34-Da1Sngcg.js";import"./ActionsExplorer-1.0.34-CLjfe2ax.js";import"./Autocomplete-1.0.34-B2v6NqWM.js";import"./Close-1.0.34-Bguo8ejS.js";import"./createSvgIcon-1.0.34-oaLYTlaR.js";import"./useControlled-1.0.34-CU9helXh.js";import"./Popper-1.0.34-DHAHquMb.js";import"./ActionsApp-1.0.34-BRXzkmL7.js";import"./FormLabel-1.0.34-f0a-atWV.js";import"./useFormControl-1.0.34-DpRVCPB9.js";import"./Checkbox-1.0.34-d5tAuq8A.js";import"./SwitchBase-1.0.34-ptE6Q_pF.js";import"./Tooltip-1.0.34-DVgtOKOZ.js";import"./Link-1.0.34-DYvSaOHE.js";import"./index-1.0.34-BrUfr5b2.js";import"./FileSaver.min-1.0.34-CRfI_ZZ5.js";import"./index-1.0.34-BubrTeCa.js";import"./index-1.0.34-DYDf2euy.js";import"./useTheme-1.0.34-Dw3pdMXg.js";import"./RadioGroup-1.0.34-DnN3QK5E.js";import"./Radio-1.0.34-CADP3cAA.js";import"./CardHeader-1.0.34-DcU9ACOy.js";import"./Divider-1.0.34-bZt1Q6Xb.js";import"./index-1.0.34-lslFWrRx.js";import"./Stepper-1.0.34-mB2if67t.js";import"./ListItemIcon-1.0.34-D-soEq65.js";import"./ListItemText-1.0.34-CCj4EIGG.js";import"./AppMetaData-1.0.34-CX2Av1kT.js";import"./StoreTypeEnum-1.0.34-DroWNS-6.js";import"./Chart-1.0.34-D5cOeU0a.js";import"./Tabs-1.0.34-ZeyfVB1x.js";import"./FallbackSpinner-1.0.34-CVwfde-i.js";import"./Alert-1.0.34-DYUt3HUT.js";import"./AlertTitle-1.0.34-BvvYwV0a.js";import"./index-1.0.34-Cp4wrJ-G.js";/* empty css                    */import"./InputAdornment-1.0.34-Cl61tz03.js";import"./Collapse-1.0.34-BSZnzI45.js";const H=({app:o})=>{p.debug(o);const[s,i]=v.useState(!1),[r,t]=v.useState(void 0),a=()=>{switch(r){case"form":return"Reset Form Builder?";case"theme":return"Reset Theme?";default:return"Reset Table Builder?"}};return e.jsxs(e.Fragment,{children:[e.jsxs(m,{disableGutters:!0,children:[e.jsx(u,{expandIcon:e.jsx(b,{}),children:"Reset"}),e.jsx(w,{children:e.jsxs(d,{sx:{display:"grid",gridGap:"20px"},children:[e.jsx(f,{variant:"contained",color:"primary",onClick:()=>{t(j.TABLE),i(!0)},children:"Reset Table Builder"}),e.jsx(f,{variant:"contained",color:"primary",onClick:()=>{t(j.FORM),i(!0)},children:"Reset Form Builder"}),e.jsx(f,{variant:"contained",color:"primary",onClick:()=>{t(j.CHART),i(!0)},children:"Reset Chart"}),e.jsx(f,{variant:"contained",color:"primary",onClick:()=>{t(j.THEME),i(!0)},children:"Reset Theme"}),e.jsxs(A,{sx:{display:"inline-grid",gridTemplateColumns:"20px auto",gridGap:"5px",alignItems:"center","& svg":{fontSize:"20px"}},error:!0,children:[e.jsx(B,{}),"A reset cannot be undone!"]})]})})]}),e.jsx(D,{title:a(),message:"Are you sure? This action cannot be undone!",open:s,setOpen:i,onConfirm:()=>{r!==void 0&&G(o.appDbId,o.appCntId,r,null,null,null,l=>{if(l!=null&&l.code&&(l==null?void 0:l.message)!==void 0)switch(l.code){case"ok":h(l.message,{variant:"success"});break;case"info":h(l.message,{variant:"info"});break;default:h(l.message??T.contactSupport,{variant:"error"})}else p.error(l),h(T.contactSupport,{variant:"error"})},l=>{p.error("error",l),h(l??T.contactSupport,{variant:"error"})})}})]})},N=()=>{const o=M(s=>{var i,r;return(r=(i=s==null?void 0:s.apps)==null?void 0:i.app)==null?void 0:r.fullScreen});return p.debug("appFullscreen",o),o},O=()=>{const o=M(s=>{var i,r;return(r=(i=s==null?void 0:s.apps)==null?void 0:i.app)==null?void 0:r.safeMode});return p.debug("appSafeMode",o),o},q=({app:o,setIsUpdated:s})=>{p.debug(o);const i=R();N();const r=O();return e.jsxs(e.Fragment,{children:[e.jsx(g,{control:e.jsx(x,{checked:!1,disabled:!0,onChange:(t,a)=>{i(C({property:{fullScreen:a}})),s&&s(!0),t.stopPropagation()}}),label:"Enable full screen support",labelPlacement:"end"}),e.jsx(d,{fullWidth:!0,children:e.jsx(A,{children:"Adds an icon to the app toolbar, allowing the user to switch to full-screen mode."})}),e.jsx(g,{control:e.jsx(x,{checked:r,disabled:!0,onChange:(t,a)=>{i(C({property:{safeMode:a}})),s&&s(!0),t.stopPropagation()}}),label:"Enable safe mode",labelPlacement:"end"}),e.jsx(d,{fullWidth:!0,children:e.jsx(A,{children:"Disables all custom code, including hooks and computed code fields."})}),e.jsx(W,{})]})},z=()=>{const o=M(s=>s.apps.app.registration);return p.debug("appRegistration",o),o},J=({app:o,setIsUpdated:s})=>{p.debug(o);const i=R(),r=z();return e.jsxs(e.Fragment,{children:[e.jsx(d,{fullWidth:!0,children:e.jsx(g,{control:e.jsx(x,{checked:r.showMessage,onChange:(t,a)=>{i(c({message:r.message,showMessage:a,url:r.url,showUrl:r.showUrl,urlTime:r.urlTime,allowUpdates:r.allowUpdates})),s&&s(!0),t.stopPropagation()}}),label:"Show message after submit",labelPlacement:"end"})}),r.showMessage&&e.jsx(S,{type:"text",label:"Message",fullWidth:!0,helperText:"Displayed message after the registration form is successfully submitted.",value:r.message??"",autoComplete:"off",onChange:t=>{i(c({message:t.target.value,showMessage:r.showMessage,url:r.url,showUrl:r.showUrl,urlTime:r.urlTime,allowUpdates:r.allowUpdates})),s&&s(!0),t.stopPropagation()},sx:{marginTop:"20px",marginBottom:"10px"}}),e.jsxs(y,{sx:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(d,{children:e.jsx(g,{control:e.jsx(x,{checked:r.showUrl,disabled:r.allowUpdates,onChange:(t,a)=>{i(c({message:r.message,showMessage:r.showMessage,url:r.url,showUrl:a,urlTime:r.urlTime,allowUpdates:r.allowUpdates})),s&&s(!0),t.stopPropagation()}}),label:"Redirect after submit",labelPlacement:"end"})}),e.jsxs(L,{fullWidth:!0,value:r.urlTime,onChange:t=>{i(c({message:r.message,showMessage:r.showMessage,url:r.url,showUrl:r.showUrl,urlTime:Number(t.target.value),allowUpdates:r.allowUpdates})),s&&s(!0)},onClick:t=>{t.preventDefault(),t.stopPropagation()},children:[e.jsx(n,{value:"0",children:"0 seconds"}),e.jsx(n,{value:"1",children:"1 seconds"}),e.jsx(n,{value:"2",children:"2 seconds"}),e.jsx(n,{value:"3",children:"3 seconds"}),e.jsx(n,{value:"4",children:"4 seconds"}),e.jsx(n,{value:"5",children:"5 seconds"}),e.jsx(n,{value:"6",children:"6 seconds"}),e.jsx(n,{value:"7",children:"7 seconds"}),e.jsx(n,{value:"8",children:"8 seconds"}),e.jsx(n,{value:"9",children:"9 seconds"}),e.jsx(n,{value:"10",children:"10 seconds"})]})]}),r.showUrl&&e.jsx(S,{type:"text",label:"URL",fullWidth:!0,disabled:r.allowUpdates,helperText:"The URL users are redirected to after form submission.",value:r.url??"",autoComplete:"off",onChange:t=>{i(c({message:r.message,showMessage:r.showMessage,url:t.target.value,showUrl:r.showUrl,urlTime:r.urlTime,allowUpdates:r.allowUpdates})),s&&s(!0),t.stopPropagation()},sx:{marginTop:"20px",marginBottom:"10px"}}),e.jsx(d,{fullWidth:!0,children:e.jsx(g,{control:e.jsx(x,{checked:r.allowUpdates,onChange:(t,a)=>{i(c({message:r.message,showMessage:r.showMessage,url:r.url,showUrl:r.showUrl,urlTime:r.urlTime,allowUpdates:a})),s&&s(!0),t.stopPropagation()}}),label:"Allow updates after submit",labelPlacement:"end"})})]})},nr=({app:o,setIsUpdated:s})=>(p.debug(o),e.jsxs(y,{children:[e.jsx(m,{disableGutters:!0,children:e.jsx(u,{children:e.jsx(F,{app:o,hasErrors:!1,setIsUpdated:s})})}),e.jsx(m,{disableGutters:!0,children:e.jsx(u,{children:e.jsx(k,{app:o,hasErrors:!1,setIsUpdated:s})})}),e.jsx(m,{disableGutters:!0,children:e.jsx(u,{children:e.jsx(P,{app:o,setIsUpdated:s})})}),e.jsxs(m,{disableGutters:!0,children:[e.jsx(u,{expandIcon:e.jsx(b,{}),children:"Language"}),e.jsx(w,{children:e.jsx(E,{app:o,setIsUpdated:s})})]}),e.jsxs(m,{disableGutters:!0,children:[e.jsx(u,{expandIcon:e.jsx(b,{}),children:"Settings"}),e.jsx(w,{children:e.jsx(q,{app:o,setIsUpdated:s})})]}),o.appType==U.REGISTRATION&&e.jsxs(m,{disableGutters:!0,children:[e.jsx(u,{expandIcon:e.jsx(b,{}),children:"Registration Form Settings"}),e.jsx(w,{children:e.jsx(J,{app:o,setIsUpdated:s})})]}),e.jsx(H,{app:o})]}));export{nr as default};
