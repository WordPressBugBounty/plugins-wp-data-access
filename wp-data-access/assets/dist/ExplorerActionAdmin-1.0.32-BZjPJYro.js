const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SettingsActions-1.0.32-kjdKBXCK.js","./cm-1.0.32-roxymF9V.js","./redux-1.0.32-BsgiH_bG.js","./vendor-1.0.32-BmpNFhoq.js","./RestApi-1.0.32-Bp_RRidr.js","./lib-1.0.32-CBsDffd2.js","./loglevel-1.0.32-BZ7XahX3.js","./lodash-1.0.32-B7VmFneh.js","./moment-1.0.32-C5S46NFB.js","./ActionsAdmin-1.0.32-bnP45_bR.js","./notistack-1.0.32-N2grKTUm.js","./ConfirmDialog-1.0.32-A4KvBqFE.js","./Typography-1.0.32-D9d-UzA0.js","./iconBase-1.0.32-inVKjZEJ.js","./cjs-1.0.32-AqZgyPIn.js","./AdminTheme-1.0.32-WcjuTcVF.js","./DialogContent-1.0.32-B0aW5NMk.js","./ConfirmDialog-1.0.32--D4jr2go.css","./Spinner-1.0.32-D1QL5ry3.js","./index-1.0.32-wSDMfVDG.js","./index-1.0.32-CRl7LUUP.js","./useExplorer-1.0.32-DeJynFE9.js","./FormHelperText-1.0.32-BG3xt4JA.js","./useFormControl-1.0.32-Tf9RtQ-m.js","./TextField-1.0.32-EUJpMVir.js","./FormLabel-1.0.32-agP5qBoD.js","./Menu-1.0.32-CRF2Elfu.js","./useControlled-1.0.32-fDn_qfrW.js","./createSvgIcon-1.0.32-DGmABpxr.js","./MenuItem-1.0.32-Bc1CXi88.js","./FormControlLabel-1.0.32-B7mCGY7x.js","./Switch-1.0.32-BfMlbG-m.js","./SwitchBase-1.0.32-8MhCpXB3.js","./Tooltip-1.0.32-BFRxm1kH.js","./Popper-1.0.32-Dr5x4zRa.js","./SettingsTable-1.0.32-CqHx02E8.js","./AccordionSummary-1.0.32-9Jmrvpfq.js","./Collapse-1.0.32-3dNdwtSs.js","./AccordionDetails-1.0.32-DYksa6e-.js","./RadioGroup-1.0.32-BPYStg8S.js","./Radio-1.0.32-Dg2N7INw.js","./main-1.0.32.js","./TabPanel-1.0.32-DFUvt78C.js","./ActionsExplorer-1.0.32-DZpEeZtZ.js","./index-1.0.32-D1JAhTpk.js","./settings-1.0.32-OrNy0l2i.js","./settings-1.0.32-Bx2jvYL6.css","./ActionsDml-1.0.32-CqneDSgR.js","./ExplorerActionEnum-1.0.32-eclZgKpy.js","./useUiExplorerAction-1.0.32-CZ_f5W2m.js","./SettingsColumn-1.0.32-DghUd1id.js","./SettingsRestApi-1.0.32-B5LQ-EQ6.js","./index-1.0.32-C02EIL93.js","./Autocomplete-1.0.32-CC-cYb5n.js","./Close-1.0.32-BV_W41ov.js","./main-1.0.32-Yuwogwmm.css","./SettingsReset-1.0.32-Ds81BNfY.js","./ActionsSettings-1.0.32-u1MS6Fmu.js","./TargetEnum-1.0.32-DPFnTxiX.js","./ScopeEnum-1.0.32-B4DDvIDj.js","./ResizableDrawer-1.0.32-BHU0VG8c.js","./useScreenSize-1.0.32-ZGgk_gJq.js"])))=>i.map(i=>d[i]);
import{j as e}from"./cm-1.0.32-roxymF9V.js";import{_ as m}from"./main-1.0.32.js";import{r as s}from"./redux-1.0.32-BsgiH_bG.js";import{B as se,a as oe,T as ae,b as P}from"./TabPanel-1.0.32-DFUvt78C.js";import{T as j,C as B,a as O,b as re}from"./ConfirmDialog-1.0.32-A4KvBqFE.js";import{A as ie,T as ne,M as le,B as _}from"./cjs-1.0.32-AqZgyPIn.js";import{u as ce,a as me}from"./RestApi-1.0.32-Bp_RRidr.js";import{l,bk as w,S as N,aP as pe,a6 as V,a5 as G,P as ue,a as F,b as p,bl as de,s as ge}from"./lib-1.0.32-CBsDffd2.js";import{A as U}from"./AdminTheme-1.0.32-WcjuTcVF.js";import{S as f,B as b}from"./Spinner-1.0.32-D1QL5ry3.js";import{s as xe}from"./ActionsExplorer-1.0.32-DZpEeZtZ.js";import{e as u}from"./notistack-1.0.32-N2grKTUm.js";import{f as fe,i as Se}from"./index-1.0.32-D1JAhTpk.js";import{B as he}from"./settings-1.0.32-OrNy0l2i.js";import{g as je}from"./ActionsDml-1.0.32-CqneDSgR.js";import{T as H}from"./Typography-1.0.32-D9d-UzA0.js";import{I as E}from"./iconBase-1.0.32-inVKjZEJ.js";import{E as _e}from"./ExplorerActionEnum-1.0.32-eclZgKpy.js";import{u as be}from"./useUiExplorerAction-1.0.32-CZ_f5W2m.js";const Ee=()=>{const t=ce(i=>i.manager.settings);return l.debug("managerSettings",t),t},Ae=s.lazy(()=>m(()=>import("./SettingsActions-1.0.32-kjdKBXCK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]),import.meta.url)),ve=s.lazy(()=>m(()=>import("./SettingsTable-1.0.32-CqHx02E8.js"),__vite__mapDeps([35,1,2,3,14,12,5,6,7,8,13,10,4,36,26,15,27,37,38,22,23,25,39,40,32,28,41,42,16,11,17,18,43,44,45,29,46,47,48,49]),import.meta.url)),Te=s.lazy(()=>m(()=>import("./SettingsColumn-1.0.32-DghUd1id.js"),__vite__mapDeps([50,1,2,3,14,12,5,6,7,8,13,10,4,36,26,15,27,37,38,22,23,18,24,25,28,29,41,42,16,11,17,43,44,45,46,47,48,49]),import.meta.url)),Ce=s.lazy(()=>m(()=>import("./SettingsRestApi-1.0.32-B5LQ-EQ6.js"),__vite__mapDeps([51,1,2,3,14,12,5,6,7,8,13,10,4,21,52,36,26,15,27,37,38,18,25,23,30,31,32,22,39,40,28,53,24,54,34,41,42,16,11,17,43,44,45,29,46,47,48,49,55]),import.meta.url)),De=s.lazy(()=>m(()=>import("./SettingsReset-1.0.32-Ds81BNfY.js"),__vite__mapDeps([56,1,2,3,14,12,5,6,7,8,13,10,57,4,58,59,11,15,16,17,36,26,27,37,38,22,23]),import.meta.url)),Me=s.lazy(()=>m(()=>import("./ResizableDrawer-1.0.32-BHU0VG8c.js"),__vite__mapDeps([60,1,2,3,61,5,6,7,8,4,12,15,13,14,10,26]),import.meta.url)),ke=({dbs:t,tbl:i,typ:S})=>{var R,z;l.debug(t,i,S);const c=me(),[q,K]=s.useState(w.getSelectors().selectManagerSettings(N.getState().manager));l.debug(q);const[d,A]=s.useState(""),[v,W]=s.useState(!1),[T,X]=s.useState({}),[C,g]=s.useState(!1),[Y,D]=s.useState(!1);s.useEffect(()=>{v||$()},[t,i]);const $=()=>{je(t,i,!0,r=>{var o,I;const a=r==null?void 0:r.data;if(l.debug("response data",t,i,a),(o=a==null?void 0:a.access)!=null&&o.select&&Array.isArray(a.access.select)&&a.access.select.includes("POST")){const n={...a.settings};n.list_labels={...a.table_labels},n.form_labels={...a.form_labels},n.column_media={...a.wp_media},delete n.hyperlinks,delete n.ui,delete n.wp;const L={...a};X(L),c(de({settings:n,metaData:L})),W(!0)}else{let n=p.contactSupport;(I=r==null?void 0:r.data)!=null&&I.message&&(n=r.data.message+" - check console for more information"),l.error(n),A(n)}},r=>{l.error("error",r),A(r??p.contactSupport)})};s.useEffect(()=>{d!==""&&(c(pe({error:d})),c(V({})),c(G({})))},[d]);const J=Ee(),Q=((R=U)==null?void 0:R.palette.mode)===ue.LIGHT?(z=U)==null?void 0:z.palette.primary.main:"",M=r=>{c(ge({anchor:r}))},x=()=>{c(G({})),c(V({}))},h=()=>{C?D(!0):x()},k=()=>{const r={...J};let a=!1;xe(t,i,r,o=>{if(o!=null&&o.code&&(o==null?void 0:o.message)!==void 0)switch(o.code){case"ok":u(o.message,{variant:"success"});break;case"info":u(o.message,{variant:"info"});break;default:l.error(o),u(o.message??p.contactSupport,{variant:"error"}),a=!0}else l.error(o),u(p.contactSupport,{variant:"error"}),a=!0},o=>{l.error(o),u(o??p.contactSupport,{variant:"error"}),a=!0}),a||K(w.getSelectors().selectManagerSettings(N.getState().manager)),g(!1)},Z=()=>{C?(k(),setTimeout(()=>{x()},1e3)):x()},[y,ee]=s.useState(0),te=s.useMemo(()=>[{title:"Actions",icon:e.jsx(fe,{})},{title:"Settings",icon:e.jsx(Se,{})}],[]);return d!==""?null:e.jsxs(e.Fragment,{children:[e.jsx(s.Suspense,{fallback:e.jsx(f,{}),children:e.jsxs(Me,{closeDrawer:h,children:[e.jsxs(ie,{position:"static",elevation:4,sx:{borderRadius:0},children:[e.jsxs(ne,{className:"pp-setting-toolbar",sx:{borderRadius:0},children:[e.jsxs(b,{sx:{flexGrow:1},children:[e.jsx(H,{variant:"h5",noWrap:!0,component:"div",className:"unselectable",sx:{paddingLeft:"6px"},children:"Manage Table"}),e.jsxs(H,{sx:{fontSize:"10px",paddingLeft:"10px"},children:[t," - ",i]})]}),e.jsx(j,{title:"Dock to left",position:"bottom",children:e.jsx(E,{onClick:()=>{M(F.LEFT)},size:"large",color:"inherit",sx:{fontSize:"1em"},children:e.jsx(se,{})})}),e.jsx(j,{title:"Dock to right",position:"bottom",children:e.jsx(E,{onClick:()=>{M(F.RIGHT)},size:"large",color:"inherit",sx:{fontSize:"1em"},children:e.jsx(oe,{})})}),e.jsx(j,{title:"Close",position:"bottom",children:e.jsx(E,{onClick:h,size:"large",color:"inherit",sx:{fontSize:"1.4em"},children:e.jsx(le,{})})})]}),e.jsx(he,{menuItems:te,menuIndex:y,setMenu:ee})]}),e.jsx(B,{className:"pp-settings-container",children:e.jsx(O,{sx:{padding:0,margin:0},children:v?e.jsx(ae,{value:y,children:e.jsxs(b,{sx:{margin:0,padding:0,overflowX:"hidden",overflowY:"auto",height:"calc(100vh - 232px)","& > div.MuiTabPanel-root":{padding:0}},children:[e.jsx(P,{value:0,children:e.jsx(s.Suspense,{fallback:e.jsx(f,{}),children:e.jsx(Ae,{dbs:t,tbl:i,typ:S,metaData:T})})}),e.jsx(P,{value:1,children:e.jsxs(s.Suspense,{fallback:e.jsx(f,{}),children:[e.jsx(ve,{dbs:t,tbl:i,setIsUpdated:g}),e.jsx(Te,{dbs:t,tbl:i,setIsUpdated:g}),e.jsx(Ce,{dbs:t,tbl:i,typ:S,metaData:T,setIsUpdated:g}),e.jsx(De,{dbs:t,tbl:i})]})})]})}):e.jsx(b,{sx:{padding:"30px"},children:e.jsx(f,{title:"Loading data..."})})})}),e.jsx(B,{className:"pp-setting-footer",sx:{borderRadius:0,backgroundColor:Q},children:e.jsxs(O,{className:"pp-setting-footer-buttons",sx:{borderRadius:0},children:[e.jsx(_,{variant:"outlined",className:"footer_action_button_apply",onClick:k,children:"Apply"}),e.jsx(_,{variant:"outlined",className:"footer_action_button",onClick:Z,children:"OK"}),e.jsx(_,{variant:"outlined",className:"footer_action_button",onClick:h,children:"Cancel"})]})})]})}),e.jsx(re,{title:"Close Manage Table?",message:"All uncommitted changes will be lost!",open:Y,setOpen:D,onConfirm:()=>{x()}})]})},ye=()=>{const t=be();return e.jsx(e.Fragment,{children:t!==void 0&&t.action===_e.MANAGE&&e.jsx(ke,{dbs:t.dbs,tbl:t.tbl,typ:t.typ})})},$e=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"}));export{$e as E,Ee as u};
