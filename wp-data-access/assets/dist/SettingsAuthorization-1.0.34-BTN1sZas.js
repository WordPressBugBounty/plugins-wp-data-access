import{j as e}from"./cm-1.0.34-jkgb9fqk.js";import{e as M}from"./AppListContainer-1.0.34-oqrcYfqd.js";import{r as s}from"./redux-1.0.34-BykGtd51.js";import{a as z}from"./RestApi-1.0.34-BxEfvjo_.js";import{l as T,k as v}from"./lib-1.0.34-CKToGW0d.js";import{k as j,x as B,v as x}from"./cjs-1.0.34-s8JVqkTy.js";import{B as o}from"./Spinner-1.0.34-Co4td_et.js";import{F as g}from"./FormControlLabel-1.0.34-BSZPBg3u.js";import{S as b}from"./Switch-1.0.34-CATLadEc.js";import{F as y,a as k}from"./FormHelperText-1.0.34-DgFI7tJ8.js";import{L as A}from"./Link-1.0.34-DYvSaOHE.js";import{T as D}from"./TextField-1.0.34-CRuVZ2IL.js";import{e as W}from"./notistack-1.0.34-CSyPb4yh.js";import{l as E}from"./index-1.0.34-BubrTeCa.js";import{F as L}from"./FormLabel-1.0.34-f0a-atWV.js";import{T as G}from"./Tooltip-1.0.34-DVgtOKOZ.js";import{I as R}from"./iconBase-1.0.34-CNhS-hAm.js";import{A as u,a as h}from"./AccordionSummary-1.0.34-BSahbgsH.js";import{A as f}from"./AccordionDetails-1.0.34-_Aajd3cL.js";import"./vendor-1.0.34-CN03Eozo.js";import"./AdminTheme-1.0.34-9phfEwG6.js";import"./Typography-1.0.34-CPcqRq0L.js";import"./useEnhancedEffect-1.0.34-BO4gRPLZ.js";import"./main-1.0.34.js";import"./loglevel-1.0.34-BZ7XahX3.js";import"./lodash-1.0.34-Bq_dBoMp.js";import"./moment-1.0.34-C5S46NFB.js";import"./ConfirmDialog-1.0.34-DWUfUq0S.js";import"./DialogContent-1.0.34-BpZCA1LJ.js";import"./TabPanel-1.0.34-CMifEkiN.js";import"./index-1.0.34-BtSBPsUk.js";import"./settings-1.0.34-CczHVXWk.js";import"./Menu-1.0.34-BOIQgOXy.js";import"./MenuItem-1.0.34-B8z32nyF.js";import"./ComponentColumn-1.0.34-Da1Sngcg.js";import"./ActionsExplorer-1.0.34-CLjfe2ax.js";import"./Autocomplete-1.0.34-B2v6NqWM.js";import"./Close-1.0.34-Bguo8ejS.js";import"./createSvgIcon-1.0.34-oaLYTlaR.js";import"./useControlled-1.0.34-CU9helXh.js";import"./Popper-1.0.34-DHAHquMb.js";import"./ActionsApp-1.0.34-BRXzkmL7.js";import"./Checkbox-1.0.34-d5tAuq8A.js";import"./SwitchBase-1.0.34-ptE6Q_pF.js";import"./useFormControl-1.0.34-DpRVCPB9.js";import"./index-1.0.34-BrUfr5b2.js";import"./FileSaver.min-1.0.34-CRfI_ZZ5.js";import"./index-1.0.34-DYDf2euy.js";import"./useTheme-1.0.34-Dw3pdMXg.js";import"./RadioGroup-1.0.34-DnN3QK5E.js";import"./Radio-1.0.34-CADP3cAA.js";import"./PremiumFeature-1.0.34-DfZQs3Ud.js";import"./CardHeader-1.0.34-DcU9ACOy.js";import"./Divider-1.0.34-bZt1Q6Xb.js";import"./index-1.0.34-lslFWrRx.js";import"./Stepper-1.0.34-mB2if67t.js";import"./ListItemIcon-1.0.34-D-soEq65.js";import"./ListItemText-1.0.34-CCj4EIGG.js";import"./AppMetaData-1.0.34-CX2Av1kT.js";import"./StoreTypeEnum-1.0.34-DroWNS-6.js";import"./Chart-1.0.34-D5cOeU0a.js";import"./ActionsSettings-1.0.34-D8Qcsc97.js";import"./TargetEnum-1.0.34-DPFnTxiX.js";import"./Tabs-1.0.34-ZeyfVB1x.js";import"./FallbackSpinner-1.0.34-CVwfde-i.js";import"./Alert-1.0.34-DYUt3HUT.js";import"./AlertTitle-1.0.34-BvvYwV0a.js";import"./index-1.0.34-Cp4wrJ-G.js";/* empty css                    */import"./InputAdornment-1.0.34-Cl61tz03.js";import"./Collapse-1.0.34-BSZnzI45.js";const H=({app:t,setIsUpdated:r})=>{T.debug(t);const a=z(),[n,p]=s.useState(!1);return e.jsxs(o,{sx:{display:"grid",gridGap:"30px"},children:[e.jsxs(o,{children:[e.jsx(o,{children:e.jsx(g,{control:e.jsx(b,{checked:t.appAddToMenu,onChange:(i,l)=>{a(v({property:{appAddToMenu:l}})),r&&r(!0),i.stopPropagation()}}),label:"Add App to WordPress dashboard menu",labelPlacement:"end"})}),e.jsx(y,{children:e.jsxs(k,{component:"div",children:[e.jsx(o,{children:e.jsxs(A,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>p(!n),children:[e.jsx(j,{}),"What is a WordPress dashboard menu?"]})}),n&&e.jsx(o,{sx:{marginTop:"20px"},children:"The WordPress dashboard provides a navigation menu with options to navigate to built-in or custom pages. Enabling this option adds a menu item to the WordPress dashboard for all authorized users, allowing easy access to this app."})]})})]}),t.appAddToMenu&&e.jsx(D,{type:"text",label:"Title",fullWidth:!0,required:!0,helperText:"Title shown in WordPress dashboard menu.",value:t.appMenuTitle,autoComplete:"off",onChange:i=>{a(v({property:{appMenuTitle:i.target.value}})),r&&r(!0),i.stopPropagation()}})]})},$=({app:t,setIsUpdated:r})=>{T.debug(t);const a=()=>`[wpda_app app_id="${t.appDbId}"${n?' feedback="true"':""}${d?' builders="false"':""}]`,[n,p]=s.useState(!1),[i,l]=s.useState(!1),[d,F]=s.useState(!1),[C,P]=s.useState(!1),[S,w]=s.useState(a());return s.useEffect(()=>{w(a())},[n,d]),e.jsxs(o,{sx:{display:"grid",gridGap:"20px"},children:[e.jsxs(o,{children:[e.jsxs(L,{children:["App short code",e.jsx(o,{sx:{marginLeft:"5px",display:"inline-block"},children:e.jsx(E.CopyToClipboard,{text:S,onCopy:()=>{W("Shortcode was copied to your clipboard",{variant:"info"})},children:e.jsx(G,{title:"Copy shortcode to clipboard",children:e.jsx(R,{children:e.jsx(B,{})})})})})]}),e.jsx(o,{sx:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center","& pre":{backgroundColor:"#ccc",padding:"4px"}},children:e.jsx("pre",{children:S})})]}),e.jsx(o,{children:e.jsxs(y,{children:[e.jsx(g,{control:e.jsx(b,{checked:n,onChange:(c,m)=>{p(m),r&&r(!0),c.stopPropagation()}}),label:"Feedback",labelPlacement:"end"}),e.jsxs(k,{component:"div",children:[e.jsxs(A,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>{l(!i)},children:[e.jsx(j,{}),"Show authorization and usage errors"]}),i&&e.jsx(o,{sx:{marginTop:"20px"},children:"Authorization and usage errors are hidden by default to prevent errors from appearing on front-end pages for unauthorized users. If you want to display authorization and usage errors, enable feedback."})]})]})}),e.jsx(o,{children:e.jsxs(y,{children:[e.jsx(g,{control:e.jsx(b,{checked:d,onChange:(c,m)=>{F(m),r&&r(!0),c.stopPropagation()}}),label:"Disable builders on front-end",labelPlacement:"end"}),e.jsxs(k,{component:"div",children:[e.jsxs(A,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>{P(!C)},children:[e.jsx(j,{}),"Disables builder access for administrators"]}),C&&e.jsx(o,{sx:{marginTop:"20px"},children:"Builder access is automatically enabled on front-end pages for administrators, allowing them to change app settings directly. Disabling builder access will remove all Table Builder and Form Builder icons from these pages. Please note that anonymous users and non-admin users cannot see these builder icons and have no access to app settings."})]})]})})]})},io=({app:t,setIsUpdated:r})=>(T.debug(t),e.jsxs(o,{children:[e.jsxs(u,{disableGutters:!0,children:[e.jsx(h,{expandIcon:e.jsx(x,{}),children:"Authorize Roles & Users"}),e.jsx(f,{children:e.jsx(M,{setIsUpdated:r})})]}),e.jsxs(u,{disableGutters:!0,children:[e.jsx(h,{expandIcon:e.jsx(x,{}),children:"Back-end Access"}),e.jsx(f,{children:e.jsx(H,{app:t,setIsUpdated:r})})]}),e.jsxs(u,{disableGutters:!0,children:[e.jsx(h,{expandIcon:e.jsx(x,{}),children:"Front-end Access"}),e.jsx(f,{children:e.jsx($,{app:t})})]})]}));export{io as default};
