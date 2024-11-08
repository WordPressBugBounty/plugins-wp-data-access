import{r,_ as d,l,bY as j,S as P,aZ as ae,a9 as B,a8 as N,P as re,j as e,A as O,C as m,bZ as ie,b as ne,e as p,aY as le}from"./main-1.0.18.js";import{a as ce,u as U}from"./RestApi-1.0.18-cb72bd79.js";import{R as me,B as pe,a as de,T as ue,b as xe,c as V}from"./TabPanel-1.0.18-2d718e76.js";import{T as S,C as ge}from"./ConfirmDialog-1.0.18-eb1f3988.js";import{A as fe,T as he,M as je}from"./index.esm-1.0.18-12f13c4a.js";import{A as G}from"./AdminTheme-1.0.18-73e13a4f.js";import{B as _,S as b}from"./Spinner-1.0.18-de8df990.js";import{s as Se}from"./ActionsExplorer-1.0.18-ae07c36b.js";import{g as _e}from"./ActionsDml-1.0.18-7e1a74e9.js";/* empty css                        */import{T as W}from"./Typography-1.0.18-dc3c0740.js";import{I as v}from"./iconBase-1.0.18-3c21f5e2.js";import{C as F,a as Y,B as T}from"./CardContent-1.0.18-3d5e5525.js";import{T as H}from"./Tabs-1.0.18-d7d53c1e.js";import{E as be}from"./ExplorerActionEnum-1.0.18-304129ea.js";import"./useScreenSize-1.0.18-62aeb4c4.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Modal-1.0.18-870f459d.js";import"./DialogContent-1.0.18-5570cba4.js";import"./createSvgIcon-1.0.18-dcf0276e.js";const ve=r.lazy(()=>d(()=>import("./SettingsActions-1.0.18-0abcb21a.js"),["./SettingsActions-1.0.18-0abcb21a.js","./main-1.0.18.js","./RestApi-1.0.18-cb72bd79.js","./Typography-1.0.18-dc3c0740.js","./ActionsAdmin-1.0.18-de8008ec.js","./ConfirmDialog-1.0.18-eb1f3988.js","./AdminTheme-1.0.18-73e13a4f.js","./DialogContent-1.0.18-5570cba4.js","./index.esm-1.0.18-12f13c4a.js","./iconBase-1.0.18-3c21f5e2.js","./Modal-1.0.18-870f459d.js","./CardContent-1.0.18-3d5e5525.js","./ConfirmDialog-1.0.18-9bff3a93.css","./Spinner-1.0.18-de8df990.js","./index.esm-1.0.18-32f5cee0.js","./index-1.0.18-744bc51a.js","./FormHelperText-1.0.18-8b4ce85f.js","./useFormControl-1.0.18-87a8487d.js","./TextField-1.0.18-cf148b4e.js","./FormLabel-1.0.18-47dbe87d.js","./Menu-1.0.18-e8cb0649.js","./ThemeProvider-1.0.18-247b72cc.js","./Popover-1.0.18-54868205.js","./Grow-1.0.18-4ebc2ce8.js","./useControlled-1.0.18-12a74006.js","./createSvgIcon-1.0.18-dcf0276e.js","./MenuItem-1.0.18-0088f2a2.js","./FormControlLabel-1.0.18-2840e084.js","./createStyled-1.0.18-b238c9ff.js","./Switch-1.0.18-cbb6329b.js","./SwitchBase-1.0.18-e2aa3211.js","./index-1.0.18-ff546563.js","./Tooltip-1.0.18-5f32f0fd.js","./Popper-1.0.18-20544c9b.js"],import.meta.url)),Te=r.lazy(()=>d(()=>import("./SettingsTable-1.0.18-906cef57.js"),["./SettingsTable-1.0.18-906cef57.js","./main-1.0.18.js","./index.esm-1.0.18-12f13c4a.js","./Typography-1.0.18-dc3c0740.js","./iconBase-1.0.18-3c21f5e2.js","./RestApi-1.0.18-cb72bd79.js","./AccordionSummary-1.0.18-f9e114cf.js","./index-1.0.18-ff546563.js","./useSlot-1.0.18-71f9e7ae.js","./useControlled-1.0.18-12a74006.js","./Collapse-1.0.18-8e581380.js","./AccordionDetails-1.0.18-2900e110.js","./FormHelperText-1.0.18-8b4ce85f.js","./useFormControl-1.0.18-87a8487d.js","./FormLabel-1.0.18-47dbe87d.js","./RadioGroup-1.0.18-4960e4a8.js","./Radio-1.0.18-210e4079.js","./SwitchBase-1.0.18-e2aa3211.js","./createSvgIcon-1.0.18-dcf0276e.js","./Modal-1.0.18-870f459d.js"],import.meta.url)),Ae=r.lazy(()=>d(()=>import("./SettingsColumn-1.0.18-c2d54688.js"),["./SettingsColumn-1.0.18-c2d54688.js","./main-1.0.18.js","./index.esm-1.0.18-12f13c4a.js","./Typography-1.0.18-dc3c0740.js","./iconBase-1.0.18-3c21f5e2.js","./RestApi-1.0.18-cb72bd79.js","./AccordionSummary-1.0.18-f9e114cf.js","./index-1.0.18-ff546563.js","./useSlot-1.0.18-71f9e7ae.js","./useControlled-1.0.18-12a74006.js","./Collapse-1.0.18-8e581380.js","./AccordionDetails-1.0.18-2900e110.js","./FormHelperText-1.0.18-8b4ce85f.js","./useFormControl-1.0.18-87a8487d.js","./Spinner-1.0.18-de8df990.js","./TextField-1.0.18-cf148b4e.js","./FormLabel-1.0.18-47dbe87d.js","./Menu-1.0.18-e8cb0649.js","./ThemeProvider-1.0.18-247b72cc.js","./Popover-1.0.18-54868205.js","./Modal-1.0.18-870f459d.js","./Grow-1.0.18-4ebc2ce8.js","./createSvgIcon-1.0.18-dcf0276e.js","./MenuItem-1.0.18-0088f2a2.js"],import.meta.url)),Ce=r.lazy(()=>d(()=>import("./SettingsRestApi-1.0.18-21860eea.js"),["./SettingsRestApi-1.0.18-21860eea.js","./main-1.0.18.js","./index.esm-1.0.18-12f13c4a.js","./Typography-1.0.18-dc3c0740.js","./iconBase-1.0.18-3c21f5e2.js","./RestApi-1.0.18-cb72bd79.js","./index-1.0.18-bd94b546.js","./AccordionSummary-1.0.18-f9e114cf.js","./index-1.0.18-ff546563.js","./useSlot-1.0.18-71f9e7ae.js","./useControlled-1.0.18-12a74006.js","./Collapse-1.0.18-8e581380.js","./AccordionDetails-1.0.18-2900e110.js","./Spinner-1.0.18-de8df990.js","./FormLabel-1.0.18-47dbe87d.js","./useFormControl-1.0.18-87a8487d.js","./FormControlLabel-1.0.18-2840e084.js","./createStyled-1.0.18-b238c9ff.js","./Switch-1.0.18-cbb6329b.js","./SwitchBase-1.0.18-e2aa3211.js","./FormHelperText-1.0.18-8b4ce85f.js","./RadioGroup-1.0.18-4960e4a8.js","./Radio-1.0.18-210e4079.js","./createSvgIcon-1.0.18-dcf0276e.js","./Modal-1.0.18-870f459d.js","./Autocomplete-1.0.18-a264f80a.js","./TextField-1.0.18-cf148b4e.js","./Menu-1.0.18-e8cb0649.js","./ThemeProvider-1.0.18-247b72cc.js","./Popover-1.0.18-54868205.js","./Grow-1.0.18-4ebc2ce8.js","./Close-1.0.18-d90e9fa7.js","./Popper-1.0.18-20544c9b.js","./main-1.0.18-5f42aabb.css"],import.meta.url)),Ee=r.lazy(()=>d(()=>import("./SettingsReset-1.0.18-23e9de7a.js"),["./SettingsReset-1.0.18-23e9de7a.js","./main-1.0.18.js","./index.esm-1.0.18-12f13c4a.js","./Typography-1.0.18-dc3c0740.js","./iconBase-1.0.18-3c21f5e2.js","./ActionsSettings-1.0.18-41fd8841.js","./RestApi-1.0.18-cb72bd79.js","./TargetEnum-1.0.18-b82380d5.js","./ScopeEnum-1.0.18-7caf102d.js","./ConfirmDialog-1.0.18-eb1f3988.js","./AdminTheme-1.0.18-73e13a4f.js","./DialogContent-1.0.18-5570cba4.js","./Modal-1.0.18-870f459d.js","./CardContent-1.0.18-3d5e5525.js","./ConfirmDialog-1.0.18-9bff3a93.css","./AccordionSummary-1.0.18-f9e114cf.js","./index-1.0.18-ff546563.js","./useSlot-1.0.18-71f9e7ae.js","./useControlled-1.0.18-12a74006.js","./Collapse-1.0.18-8e581380.js","./AccordionDetails-1.0.18-2900e110.js","./FormHelperText-1.0.18-8b4ce85f.js","./useFormControl-1.0.18-87a8487d.js"],import.meta.url)),De=({dbs:t,tbl:i,typ:f})=>{var z,L;l.debug(t,i,f);const c=ce(),[Z,q]=r.useState(j(P.getState()));l.debug(Z);const[u,A]=r.useState(""),[C,K]=r.useState(!1),[E,X]=r.useState({}),[D,x]=r.useState(!1),[J,k]=r.useState(!1);r.useEffect(()=>{C||Q()},[t,i]);const Q=()=>{_e(t,i,!0,a=>{var o,w;const s=a==null?void 0:a.data;if(l.debug("response data",t,i,s),(o=s==null?void 0:s.access)!=null&&o.select&&Array.isArray(s.access.select)&&s.access.select.includes("POST")){const n={...s.settings};n.list_labels={...s.table_labels},n.form_labels={...s.form_labels},n.column_media={...s.wp_media},delete n.hyperlinks,delete n.ui,delete n.wp;const I={...s};X(I),c(ie({settings:n,metaData:I})),K(!0)}else{let n=m.contactSupport;(w=a==null?void 0:a.data)!=null&&w.message&&(n=a.data.message+" - check console for more information"),l.error(n),A(n)}},a=>{l.error("error",a),A(a??m.contactSupport)})};r.useEffect(()=>{u!==""&&(c(ae({error:u})),c(B({})),c(N({})))},[u]);const M=U(a=>j(a));l.debug(M);const $=((z=G)==null?void 0:z.palette.mode)===re.LIGHT?(L=G)==null?void 0:L.palette.primary.main:"",R=a=>{c(ne({anchor:a}))},g=()=>{c(N({})),c(B({}))},h=()=>{D?k(!0):g()},y=()=>{const a={...M};let s=!1;Se(t,i,a,o=>{if(o!=null&&o.code&&(o==null?void 0:o.message)!==void 0)switch(o.code){case"ok":p(o.message,{variant:"success"});break;case"info":p(o.message,{variant:"info"});break;default:l.error(o),p(o.message??m.contactSupport,{variant:"error"}),s=!0}else l.error(o),p(m.contactSupport,{variant:"error"}),s=!0},o=>{l.error(o),p(o??m.contactSupport,{variant:"error"}),s=!0}),s||q(j(P.getState())),x(!1)},ee=()=>{D?(y(),setTimeout(()=>{g()},1e3)):g()},[te,se]=r.useState("1"),oe=(a,s)=>{se(s)};return u!==""?null:e.jsxs(e.Fragment,{children:[e.jsxs(me,{closeDrawer:h,children:[e.jsx(fe,{position:"static",elevation:4,sx:{borderRadius:0},children:e.jsxs(he,{className:"pp-setting-toolbar",sx:{borderRadius:0},children:[e.jsxs(_,{sx:{flexGrow:1},children:[e.jsx(W,{variant:"h5",noWrap:!0,component:"div",className:"unselectable",sx:{paddingLeft:"6px"},children:"Manage Table"}),e.jsxs(W,{sx:{fontSize:"10px",paddingLeft:"10px"},children:[t," - ",i]})]}),e.jsx(S,{title:"Dock to left",position:"bottom",children:e.jsx(v,{onClick:()=>{R(O.LEFT)},size:"large",color:"inherit",sx:{fontSize:"1em"},children:e.jsx(pe,{})})}),e.jsx(S,{title:"Dock to right",position:"bottom",children:e.jsx(v,{onClick:()=>{R(O.RIGHT)},size:"large",color:"inherit",sx:{fontSize:"1em"},children:e.jsx(de,{})})}),e.jsx(S,{title:"Close",position:"bottom",children:e.jsx(v,{onClick:h,size:"large",color:"inherit",sx:{fontSize:"1.4em"},children:e.jsx(je,{})})})]})}),e.jsx(F,{className:"pp-settings-container",children:e.jsx(Y,{sx:{padding:0,margin:0},children:C?e.jsxs(ue,{value:te,children:[e.jsxs(xe,{variant:"fullWidth",textColor:"primary",onChange:oe,sx:{width:"100%",height:"80px",padding:0,margin:0,backgroundColor:"rgb(242, 242, 242)"},children:[e.jsx(H,{label:"Actions",value:"1",sx:{fontWeight:"bold",fontSize:"110%",height:"80px"}}),e.jsx(H,{label:"Settings",value:"2",sx:{fontWeight:"bold",fontSize:"110%",height:"80px"}})]}),e.jsxs(_,{sx:{margin:0,padding:0,overflowX:"hidden",overflowY:"auto",height:"calc(100vh - 250px)","& > div.MuiTabPanel-root":{padding:0}},children:[e.jsx(V,{value:"1",children:e.jsx(r.Suspense,{fallback:e.jsx(b,{}),children:e.jsx(ve,{dbs:t,tbl:i,typ:f,metaData:E})})}),e.jsx(V,{value:"2",children:e.jsxs(r.Suspense,{fallback:e.jsx(b,{}),children:[e.jsx(Te,{dbs:t,tbl:i,setIsUpdated:x}),e.jsx(Ae,{dbs:t,tbl:i,setIsUpdated:x}),e.jsx(Ce,{dbs:t,tbl:i,typ:f,metaData:E,setIsUpdated:x}),e.jsx(Ee,{dbs:t,tbl:i})]})})]})]}):e.jsx(_,{sx:{padding:"30px"},children:e.jsx(b,{title:"Loading data..."})})})}),e.jsx(F,{className:"pp-setting-footer",sx:{borderRadius:0,backgroundColor:$},children:e.jsxs(Y,{className:"pp-setting-footer-buttons",sx:{borderRadius:0},children:[e.jsx(T,{variant:"outlined",className:"footer_action_button_apply",onClick:y,children:"Apply"}),e.jsx(T,{variant:"outlined",className:"footer_action_button",onClick:ee,children:"OK"}),e.jsx(T,{variant:"outlined",className:"footer_action_button",onClick:h,children:"Cancel"})]})})]}),e.jsx(ge,{title:"Close Manage Table?",message:"All uncommitted changes will be lost!",open:J,setOpen:k,onConfirm:()=>{g()}})]})},qe=()=>{const t=U(i=>le(i));return l.debug(t),e.jsx(e.Fragment,{children:t!==void 0&&t.action===be.MANAGE&&e.jsx(De,{dbs:t.dbs,tbl:t.tbl,typ:t.typ})})};export{qe as default};
