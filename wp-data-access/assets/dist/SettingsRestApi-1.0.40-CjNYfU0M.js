import{j as s}from"./cm-1.0.40-DO7MoydR.js";import{r as C}from"./redux-1.0.40-W_04YL6Z.js";import{I as G,J as H}from"./index-1.0.40-DmMQghWt.js";import{a as W}from"./hooks-1.0.40-DoKijNI1.js";import{l as g,R as b,q as Y,bP as Z,bQ as q,bR as _}from"./lib-1.0.40-CJM-IO_o.js";import{u as B}from"./ExplorerActionAdmin-1.0.40-CEToOA85.js";import{u as J}from"./useExplorer-1.0.40-Bc0jqvLm.js";/* empty css                    */import{A as U,a as F}from"./AccordionSummary-1.0.40-BaFEiNF8.js";import{A as M}from"./AccordionDetails-1.0.40-AFOWsBZA.js";import{B as S}from"./Spinner-1.0.40-Bmn0_C4u.js";import{F as A}from"./FormLabel-1.0.40-DLOepjQ0.js";import{F as y}from"./FormControlLabel-1.0.40-BH1qH5qy.js";import{S as v}from"./Switch-1.0.40-CJ3Ir4CS.js";import{F as Q,a as w}from"./FormHelperText-1.0.40-D6buAdoc.js";import{R as K}from"./RadioGroup-1.0.40-D9A3e6h3.js";import{R as k}from"./Radio-1.0.40-BfbkSgOE.js";import{A as L,C as I}from"./Autocomplete-1.0.40-CcfYAr1c.js";import{T as N}from"./TextField-1.0.40-CejEr0KU.js";import"./vendor-1.0.40-CN03Eozo.js";import"./iconBase-1.0.40-CH6TO7hF.js";import"./Typography-1.0.40-oRKYqE3b.js";import"./useEnhancedEffect-1.0.40-DvrM_gBo.js";import"./notistack-1.0.40-HUa4vT_u.js";import"./loglevel-1.0.40-BZ7XahX3.js";import"./lodash-1.0.40-yZQKpWII.js";import"./moment-1.0.40-C5S46NFB.js";import"./main-1.0.40.js";import"./BuilderMenu-1.0.40-wmot84K1.js";import"./ConfirmDialog-1.0.40-DRjx8-xC.js";import"./AdminTheme-1.0.40-B669Ow89.js";import"./Menu-1.0.40-BKp7UqHL.js";import"./ThemeProvider-1.0.40-D9QtC9zH.js";import"./MenuItem-1.0.40-UKMJrtYZ.js";import"./Tooltip-1.0.40-C5SL6QF3.js";import"./ActionsExplorer-1.0.40-BO8XAUDR.js";import"./RestApi-1.0.40-Uj1ofskP.js";import"./index-1.0.40-D3XFZfpM.js";import"./ActionsDml-1.0.40-BspTHnPS.js";/* empty css                        */import"./TabPanel-1.0.40-svpV7m9Q.js";import"./useThemeProps-1.0.40-CnqSFvnT.js";import"./getThemeProps-1.0.40-CtGZuG5N.js";import"./ExplorerActionEnum-1.0.40-eclZgKpy.js";import"./useUiExplorerAction-1.0.40-CnSsHEsn.js";import"./useControlled-1.0.40-B7yPDtn1.js";import"./Collapse-1.0.40-C90ayxyF.js";import"./useFormControl-1.0.40-BL8koKXQ.js";import"./SwitchBase-1.0.40-BQrnL2Sx.js";import"./utils-1.0.40-iop7lDec.js";import"./createSvgIcon-1.0.40-DryBVjDb.js";import"./Select-1.0.40-Db-Xnyoo.js";import"./Close-1.0.40-DOQmTCBQ.js";import"./Popper-1.0.40-Jt4gcDMJ.js";var p=(r=>(r.SELECT="select",r.INSERT="insert",r.UPDATE="update",r.DELETE="delete",r))(p||{}),P=(r=>(r.GET="GET",r.POST="POST",r))(P||{});const O=({restApi:r,action:l,roles:T,users:i,setRestApi:d,expanded:c,setExpanded:n})=>{g.debug(r,l,T,i,c);const z=(e,o)=>{const a=Y(r);if(o)a.methods.push(e);else{const m=a.methods.indexOf(e);m>-1&&a.methods.splice(m,1)}g.debug(e,o,a),d(a)},R=e=>{g.debug(e),d({...r,authorization:e})},j=e=>{g.debug(e),d({...r,authorized_roles:e.map(o=>o.key)})},E=e=>{g.debug(e),d({...r,authorized_users:e.map(o=>o.key)})},x=C.useMemo(()=>T.filter(e=>r.authorized_roles.includes(e.key)),[r.authorized_roles,T]),h=C.useMemo(()=>i.filter(e=>r.authorized_users.includes(e.key)),[r.authorized_users,i]);return s.jsxs(U,{disableGutters:!0,expanded:c===l.toString(),onChange:()=>{c===l.toString()?n(""):n(l)},children:[s.jsx(F,{expandIcon:s.jsx(G,{}),sx:{textTransform:"capitalize"},children:l}),s.jsx(M,{children:s.jsxs(S,{sx:{display:"grid",gridGap:"20px"},children:[s.jsx(A,{children:"Supported HTTP methods"}),s.jsxs(S,{children:[s.jsx(y,{control:s.jsx(v,{checked:r.methods.includes(P.GET),onChange:(e,o)=>{z(P.GET,o),e.stopPropagation()}}),label:"GET",labelPlacement:"end"}),s.jsx(y,{control:s.jsx(v,{checked:r.methods.includes(P.POST),onChange:(e,o)=>{z(P.POST,o),e.stopPropagation()}}),label:"POST",labelPlacement:"end"})]}),s.jsx(A,{children:"Authorization"}),s.jsxs(Q,{sx:{marginLeft:"-10px"},children:[s.jsxs(K,{children:[s.jsxs(A,{className:"align-label-radio",sx:{cursor:"pointer"},children:[s.jsx(k,{checked:r.authorization===b.AUTHORIZED,onChange:e=>{R(b.AUTHORIZED),e.stopPropagation()}}),"Authorized access only"]}),s.jsxs(S,{sx:{display:"grid",gridGap:"10px",margin:"20px 10px 20px 42px"},children:[s.jsx(L,{multiple:!0,disableCloseOnSelect:!0,options:T,getOptionLabel:e=>e.value,value:x,onChange:(e,o)=>{j(o)},renderInput:e=>s.jsx(N,{...e,label:"Roles"}),renderTags:(e,o)=>e.map((a,m)=>{const{key:f,...t}=o({index:m});return s.jsx(I,{variant:"outlined",label:a.value,...t},f)})}),s.jsx(L,{multiple:!0,disableCloseOnSelect:!0,options:i,getOptionLabel:e=>e.value,value:h,onChange:(e,o)=>{E(o)},renderInput:e=>s.jsx(N,{...e,label:"Users"}),renderTags:(e,o)=>e.map((a,m)=>{const{key:f,...t}=o({index:m});return s.jsx(I,{variant:"outlined",label:a.value,...t},f)})})]}),s.jsxs(A,{className:"align-label-radio",sx:{cursor:"pointer"},children:[s.jsx(k,{checked:r.authorization===b.ANONYMOUS,onChange:e=>{R(b.ANONYMOUS),e.stopPropagation()}}),"Anonymous access"]})]}),r.authorization===b.ANONYMOUS&&r.methods.length>0&&s.jsxs(S,{sx:{marginTop:"10px",marginLeft:"10px"},children:[(l===p.INSERT||l===p.UPDATE||l===p.DELETE)&&s.jsx(w,{children:"This setting allows non-authorized users to modify this table"}),l===p.SELECT&&s.jsx(w,{children:"This setting allows non-authorized users to query this table"})]})]})]})})]})},Ve=({dbs:r,tbl:l,typ:T,metaData:i,setIsUpdated:d})=>{var o,a,m,f;g.debug(r,l,T,i);const c=W(),n=B(),R=J().selected,[j,E]=C.useState(""),x=[];if(((a=(o=i==null?void 0:i.settings)==null?void 0:o.wp)==null?void 0:a.roles)!==void 0)for(const t in i.settings.wp.roles)x.push({key:t,value:i.settings.wp.roles[t]});g.debug(x);const h=[];if(((f=(m=i==null?void 0:i.settings)==null?void 0:m.wp)==null?void 0:f.users)!==void 0)for(const t in i.settings.wp.users)h.push({key:t,value:i.settings.wp.users[t]});g.debug(h);const e={authorization:b.AUTHORIZED,methods:[],authorized_roles:[],authorized_users:[]};return s.jsxs(U,{disableGutters:!0,slotProps:{transition:{unmountOnExit:!0}},children:[s.jsx(F,{expandIcon:s.jsx(G,{}),children:"REST API"}),s.jsx(M,{children:s.jsxs(S,{children:[s.jsx(y,{control:s.jsx(v,{checked:n.rest_api!==null,onClick:t=>{n.rest_api!==null?c(Z()):c(q()),d(!0),t.stopPropagation()}}),label:"Enable REST API",labelPlacement:"end"}),n.rest_api!==null&&s.jsxs(S,{sx:{marginTop:"20px"},children:[s.jsx(O,{restApi:n.rest_api.select??e,action:p.SELECT,roles:x,users:h,setRestApi:t=>{const u={...n.rest_api};u[p.SELECT]=t,c(_({rest_api:u})),d(!0)},expanded:j,setExpanded:E}),s.jsx(O,{restApi:n.rest_api.insert??e,action:p.INSERT,roles:x,users:h,setRestApi:t=>{const u={...n.rest_api};u[p.INSERT]=t,c(_({rest_api:u})),d(!0)},expanded:j,setExpanded:E}),s.jsx(O,{restApi:n.rest_api.update??e,action:p.UPDATE,roles:x,users:h,setRestApi:t=>{const u={...n.rest_api};u[p.UPDATE]=t,c(_({rest_api:u})),d(!0)},expanded:j,setExpanded:E}),s.jsx(O,{restApi:n.rest_api.delete??e,action:p.DELETE,roles:x,users:h,setRestApi:t=>{const u={...n.rest_api};u[p.DELETE]=t,c(_({rest_api:u})),d(!0)},expanded:j,setExpanded:E})]}),R[r]==="system"||R[r]==="wp"&&i.settings.wp.tables.includes(l)&&s.jsxs(w,{sx:{display:"inline-grid",gridTemplateColumns:"20px auto",gridGap:"5px",marginTop:"20px",alignItems:"center","& svg":{fontSize:"20px"}},children:[s.jsx(H,{}),"We discourage enabling REST API services for WordPress and system tables"]})]})})]})};export{Ve as default};
