import{j as e}from"./cm-1.0.37-CEr77VZi.js";import{f as F,M as z}from"./MainAppBuilder-1.0.37-D2gHQRwY.js";import{r as s}from"./redux-1.0.37-C4JSQ-MG.js";import{a as B}from"./hooks-1.0.37-DW0_oiBB.js";import{l as k,m as M,A as D}from"./lib-1.0.37-Czwr-8r3.js";import{l as f,y as E,w as p}from"./index-1.0.37-B60ShF2d.js";import{B as r}from"./Spinner-1.0.37-CwhfSVqI.js";import{F as b}from"./FormControlLabel-1.0.37-BLp4PuCc.js";import{S as g}from"./Switch-1.0.37-D8L-tSJ8.js";import{F as y,a as A}from"./FormHelperText-1.0.37-ylnS0Km6.js";import{L as T}from"./Link-1.0.37-B0loYHQn.js";import{T as G}from"./TextField-1.0.37-CCe4G0U1.js";import{e as W}from"./notistack-1.0.37-CEqipxDI.js";import{l as L}from"./index-1.0.37-Ds3X5e5v.js";import{F as R}from"./FormLabel-1.0.37-BQP5Nx_Z.js";import{T as H}from"./Tooltip-1.0.37-BLWvlO4a.js";import{I as $}from"./iconBase-1.0.37-DRohixw7.js";import{A as l,a as d}from"./AccordionSummary-1.0.37-Dp-yE6bD.js";import{A as c}from"./AccordionDetails-1.0.37-CWpLs4PS.js";import"./vendor-1.0.37-CN03Eozo.js";import"./AdminTheme-1.0.37-7PLndQ8H.js";import"./Typography-1.0.37-DjtXWQnP.js";import"./main-1.0.37.js";import"./loglevel-1.0.37-BZ7XahX3.js";import"./lodash-1.0.37-Dx3wKrSf.js";import"./moment-1.0.37-C5S46NFB.js";import"./Tooltip-1.0.37-D_uDknxi.js";import"./TabPanel-1.0.37-CPE-1h3v.js";import"./ConfirmDialog-1.0.37-BDQ_OfRf.js";import"./Menu-1.0.37-Ca8DeoO3.js";import"./ThemeProvider-1.0.37-Cyf1xy26.js";import"./useEnhancedEffect-1.0.37-UwysO4qr.js";import"./MenuItem-1.0.37-JkRcsicb.js";import"./useThemeProps-1.0.37-CD9ZXLtG.js";import"./getThemeProps-1.0.37-BGc0S4YC.js";import"./index-1.0.37-LxgxH_yq.js";import"./ComponentColumn-1.0.37-dxZBqVrm.js";import"./ActionsExplorer-1.0.37-2IOZFLVH.js";import"./RestApi-1.0.37-CcjslynE.js";import"./Autocomplete-1.0.37-5_yZAyWV.js";import"./Select-1.0.37-B5ZKqjeL.js";import"./utils-1.0.37-iop7lDec.js";import"./useControlled-1.0.37-DyimEgDk.js";import"./useFormControl-1.0.37-BcUwa2qz.js";import"./createSvgIcon-1.0.37-DXsAQOmB.js";import"./Close-1.0.37-Yr1E1-6A.js";import"./Popper-1.0.37-CSsNCozr.js";import"./useLoadAppMetaData-1.0.37-_NoyHHQ3.js";import"./StoreTypeEnum-1.0.37-Cx2hXwas.js";import"./Checkbox-1.0.37-LjGLlM3B.js";import"./SwitchBase-1.0.37-Bwy1aBhJ.js";/* empty css                        */import"./index-1.0.37-CK0QxOhD.js";import"./FileSaver.min-1.0.37-Mmc9tWhG.js";import"./index-1.0.37-D4zhytA1.js";import"./DynamicModeEnum-1.0.37-BXuL5kgA.js";import"./RadioGroup-1.0.37-CARB8om5.js";import"./Radio-1.0.37-C5rUTiNk.js";import"./lang-1.0.37-CfHlhLgz.js";import"./PremiumFeature-1.0.37-BKt66-Fr.js";import"./CardHeader-1.0.37-D5MnKXM1.js";import"./Divider-1.0.37-PDNfV3Nd.js";import"./Stepper-1.0.37-0J4mX0Mf.js";import"./ListItemIcon-1.0.37-CVeLs3zr.js";import"./ListItemText-1.0.37-BQ7ZEg4d.js";import"./TableRow-1.0.37-BL0M_io2.js";import"./AppContainerSelector-1.0.37-CLAiGRN4.js";import"./FallbackSpinner-1.0.37-DAc7pvnM.js";import"./index-1.0.37-CgPwljr5.js";/* empty css                    */import"./InputAdornment-1.0.37-Bm1BNe28.js";import"./Collapse-1.0.37-DaP8rsgI.js";const q=({app:o,setIsUpdated:t})=>{k.debug(o);const a=B(),[n,m]=s.useState(!1);return e.jsxs(r,{sx:{display:"grid",gridGap:"30px"},children:[e.jsxs(r,{children:[e.jsx(r,{children:e.jsx(b,{control:e.jsx(g,{checked:o.appAddToMenu,onChange:(i,x)=>{a(M({property:{appAddToMenu:x}})),t&&t(!0),i.stopPropagation()}}),label:"Add App to WordPress dashboard menu",labelPlacement:"end"})}),e.jsx(y,{children:e.jsxs(A,{component:"div",children:[e.jsx(r,{children:e.jsxs(T,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>m(!n),children:[e.jsx(f,{}),"What is a WordPress dashboard menu?"]})}),n&&e.jsx(r,{sx:{marginTop:"20px"},children:"The WordPress dashboard provides a navigation menu with options to navigate to built-in or custom pages. Enabling this option adds a menu item to the WordPress dashboard for all authorized users, allowing easy access to this app."})]})})]}),o.appAddToMenu&&e.jsx(G,{type:"text",label:"Title",fullWidth:!0,required:!0,helperText:"Title shown in WordPress dashboard menu.",value:o.appMenuTitle,autoComplete:"off",onChange:i=>{a(M({property:{appMenuTitle:i.target.value}})),t&&t(!0),i.stopPropagation()}})]})},I=({app:o,setIsUpdated:t})=>{k.debug(o);const a=()=>`[wpda_app app_id="${o.appDbId}"${n?' feedback="true"':""}${u?' builders="false"':""}]`,[n,m]=s.useState(!1),[i,x]=s.useState(!1),[u,P]=s.useState(!1),[C,v]=s.useState(!1),[S,w]=s.useState(a());return s.useEffect(()=>{w(a())},[n,u]),e.jsxs(r,{sx:{display:"grid",gridGap:"20px"},children:[e.jsxs(r,{children:[e.jsxs(R,{children:["App short code",e.jsx(r,{sx:{marginLeft:"5px",display:"inline-block"},children:e.jsx(L.CopyToClipboard,{text:S,onCopy:()=>{W("Shortcode was copied to your clipboard",{variant:"info"})},children:e.jsx(H,{title:"Copy shortcode to clipboard",children:e.jsx($,{children:e.jsx(E,{})})})})})]}),e.jsx(r,{sx:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center","& pre":{backgroundColor:"#ccc",padding:"4px"}},children:e.jsx("pre",{children:S})})]}),e.jsx(r,{children:e.jsxs(y,{children:[e.jsx(b,{control:e.jsx(g,{checked:n,onChange:(h,j)=>{m(j),t&&t(!0),h.stopPropagation()}}),label:"Feedback",labelPlacement:"end"}),e.jsxs(A,{component:"div",children:[e.jsxs(T,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>{x(!i)},children:[e.jsx(f,{}),"Show authorization and usage errors"]}),i&&e.jsx(r,{sx:{marginTop:"20px"},children:"Authorization and usage errors are hidden by default to prevent errors from appearing on front-end pages for unauthorized users. If you want to display authorization and usage errors, enable feedback."})]})]})}),e.jsx(r,{children:e.jsxs(y,{children:[e.jsx(b,{control:e.jsx(g,{checked:u,onChange:(h,j)=>{P(j),t&&t(!0),h.stopPropagation()}}),label:"Disable builders on front-end",labelPlacement:"end"}),e.jsxs(A,{component:"div",children:[e.jsxs(T,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>{v(!C)},children:[e.jsx(f,{}),"Disables builder access for administrators"]}),C&&e.jsx(r,{sx:{marginTop:"20px"},children:"Builder access is automatically enabled on front-end pages for administrators, allowing them to change app settings directly. Disabling builder access will remove all Table Builder and Form Builder icons from these pages. Please note that anonymous users and non-admin users cannot see these builder icons and have no access to app settings."})]})]})})]})},ar=({app:o,setIsUpdated:t})=>(k.debug(o),e.jsxs(r,{children:[e.jsxs(l,{disableGutters:!0,children:[e.jsx(d,{expandIcon:e.jsx(p,{}),children:"Authorize Roles & Users"}),e.jsx(c,{children:e.jsx(F,{setIsUpdated:t})})]}),o.appType==D.MAP&&e.jsxs(l,{disableGutters:!0,children:[e.jsx(d,{expandIcon:e.jsx(p,{}),children:"Google Maps API Key"}),e.jsx(c,{children:e.jsx(z,{app:o,setIsUpdated:t})})]}),e.jsxs(l,{disableGutters:!0,children:[e.jsx(d,{expandIcon:e.jsx(p,{}),children:"Back-end Access"}),e.jsx(c,{children:e.jsx(q,{app:o,setIsUpdated:t})})]}),e.jsxs(l,{disableGutters:!0,children:[e.jsx(d,{expandIcon:e.jsx(p,{}),children:"Front-end Access"}),e.jsx(c,{children:e.jsx(I,{app:o})})]})]}));export{ar as default};
