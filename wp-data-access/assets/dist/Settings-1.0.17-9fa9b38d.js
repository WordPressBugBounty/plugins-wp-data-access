import{l as o,j as e,da as J,r as v,cj as b,db as we,dc as Ue,_ as Pe,dd as ke,cg as Le,K as U,de as Q,df as Re,dg as Ve,dh as _e,di as Ee,dj as Ge,dk as Ne,dl as c,dm as Ae,dn as Be,dp as oe,S as H,bx as Oe,P as ze,dq as He,z as ae,dr as We,D as qe,ds as Ke,dt as Xe,du as Ye,dv as Ze,e as W,C as $,dw as Je}from"./main-1.0.17.js";import{a as T,c as k,B as g,u as q,ak as Qe,a7 as de,al as $e,aa as De,ab as Me,ac as Ie,ad as es,e as ss,A as is,g as ts,h as ns}from"./main-1.0.17-54ffa424.js";import{A as ce,C as ue,a as pe,B as D}from"./useScreenSize-1.0.17-44173319.js";import{S as rs,u as ls,a as M,T as os,M as as,P as ds,D as cs,c as us,b as ps,d as xs}from"./SortableDragHandle-1.0.17-a2162a27.js";import{u as ge,S as gs,a as ms,I as Y,b as hs}from"./useMetadataColumns-1.0.17-3a349218.js";import{S as Z,T as G,C as me,R as fs,B as js,a as bs,b as ys,c as Ss,d as I}from"./TabPanel-1.0.17-3c2dbf14.js";import{p as Ts}from"./index.esm-1.0.17-78a91bbf.js";import{u as F,S as Cs}from"./SettingsFormRelationships-1.0.17-c208d94f.js";import{u as he}from"./useStoreTable-1.0.17-fdcf1717.js";import{d as vs,e as Fs,c as ws}from"./index.esm-1.0.17-11edad0c.js";import{P as B}from"./PremiumFeature-1.0.17-12e324e9.js";import{E as ee}from"./EnumTypeEnum-1.0.17-7ffcf33a.js";import{p as ne,d as fe,D as je}from"./usePrepareStore-1.0.17-a8be8b2f.js";import{A as L,a as R}from"./AccordionSummary-1.0.17-276b7b2a.js";import{A as V}from"./AccordionDetails-1.0.17-7b8437b0.js";import{F as S,b as y,a as h}from"./Select-1.0.17-745624d0.js";import{S as Us}from"./Slider-1.0.17-27606716.js";import{R as ie}from"./RadioGroup-1.0.17-46153993.js";import{R as C}from"./Radio-1.0.17-2bbb6717.js";import{T as P,a as xe}from"./TargetEnum-1.0.17-1e1ba2c5.js";import{F as N}from"./FormControlLabel-1.0.17-cc31d0c1.js";import{L as te}from"./Link-1.0.17-88d48a3e.js";import{I as A,T as Ps}from"./iconBase-1.0.17-8d991e6c.js";import{c as ks}from"./settings-1.0.17-bb8125cf.js";import{S as Ls}from"./ScopeEnum-1.0.17-7caf102d.js";import{u as Rs}from"./useFormStore-1.0.17-baf3b989.js";import{C as j}from"./CssUnitTextField-1.0.17-84b114af.js";import Vs from"./ThemeSettings-1.0.17-559387ce.js";import{T as se}from"./Tabs-1.0.17-a2a1c721.js";import"./ActionsDml-1.0.17-9041b8e8.js";import"./MenuItem-1.0.17-ed8ab45a.js";import"./Menu-1.0.17-09126381.js";import"./index-1.0.17-e83aeb27.js";import"./useTableUpdater-1.0.17-299f713b.js";import"./Stepper-1.0.17-9e6367ba.js";import"./createSvgIcon-1.0.17-f0c1dc0a.js";import"./Checkbox-1.0.17-3dddd4e7.js";import"./DialogContent-1.0.17-9628df83.js";import"./useApp-1.0.17-9f008cb2.js";import"./ActionsApp-1.0.17-78ec1ee3.js";import"./ActionsExplorer-1.0.17-9d96105d.js";import"./ToggleButtonGroup-1.0.17-d85b41b5.js";import"./useSlot-1.0.17-ca7553c5.js";import"./Collapse-1.0.17-faa698ed.js";import"./Close-1.0.17-6c546366.js";import"./index-1.0.17-9ae5630d.js";const _s=({appId:s,columnIndex:n,tableColumn:i})=>{o.debug(s,n,i),T();const t=ne(s),r=fe(s);F(s);const a=l=>[];return e.jsxs(L,{disableGutters:!0,children:[e.jsxs(R,{expandIcon:e.jsx(k,{}),sx:{fontSize:"1rem","& .MuiAccordionSummary-content":{padding:"1rem",alignItems:"center"}},children:[e.jsx(vs,{}),e.jsx("span",{style:{paddingLeft:"0.5rem"},children:"Grid positioning"})]}),e.jsxs(V,{sx:{paddingTop:"0.5rem"},children:[e.jsxs(g,{children:[e.jsxs(S,{sx:{display:"grid"},children:[e.jsx(y,{children:"Grid cells"}),e.jsx(Us,{value:i.cells,min:1,max:r.cellsPerRow,step:1,marks:a(r.cellsPerRow),valueLabelDisplay:"auto",disabled:!0,onChange:(l,f)=>{o.debug(l,f)},sx:{width:"calc(100% - 40px)",margin:"20px"}})]}),e.jsx(h,{children:"Number of grid cells used (can be changed in FORM > Grid)."}),e.jsxs(S,{sx:{width:"100%"},children:[e.jsx(y,{sx:{margin:"15px 0 5px 0"},children:"Grid positioning"}),e.jsx(ie,{sx:{flexDirection:"column",alignContent:"flex-start",marginLeft:"10px",marginBottom:"5px"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",justifyContent:"center",alignItems:"center"},children:[e.jsxs(y,{className:"align-label-radio",children:[e.jsx(C,{checked:i.cellClass===J.AUTO,disabled:!0,onChange:l=>{l.stopPropagation()}}),"Auto"]}),e.jsxs(y,{className:"align-label-radio",children:[e.jsx(C,{checked:i.cellClass===J.START,disabled:!0,onChange:l=>{l.stopPropagation()}}),"Start"]}),e.jsxs(y,{className:"align-label-radio",children:[e.jsx(C,{checked:i.cellClass===J.END,disabled:!0,onChange:l=>{l.stopPropagation()}}),"End"]}),e.jsxs(y,{children:[e.jsx(C,{checked:typeof i.cellClass=="number",disabled:!0,onChange:l=>{l.stopPropagation()}}),"Add"]}),e.jsxs("div",{style:{marginLeft:"10px",gridColumn:"span 2",display:"grid",gridTemplateColumns:"auto auto",alignItems:"center"},children:[e.jsx(P,{id:"pp-cells-before",sx:{width:"60px"},className:"pp-cells-before",type:"number",defaultValue:1,InputProps:{inputProps:{min:1,max:r.cellsPerRow-1}},disabled:!0,InputLabelProps:{shrink:!0},onChange:l=>{l.stopPropagation()}}),e.jsx(y,{sx:{marginLeft:"10px"},children:"cell(s) before"})]})]})})]}),e.jsx(h,{children:"Grid positioning relative to surrounding cells."}),i.computedField&&n!==void 0&&(t==null?void 0:t.columns[n])!==void 0&&t.columns[n].data_type==="enum"&&e.jsxs(g,{sx:{marginTop:"20px"},children:[e.jsx(y,{children:"Show values in"}),e.jsxs(ie,{sx:{flexDirection:"column",alignContent:"flex-start",margin:"10px 0 5px 10px"},children:[e.jsxs(y,{className:"align-label-radio",children:[e.jsx(C,{checked:i.updatableEnum===void 0||i.updatableEnum===ee.LIST,disabled:!0,onChange:l=>{l.stopPropagation()}}),"Drop-down List"]}),e.jsxs(y,{className:"align-label-radio",children:[e.jsx(C,{checked:i.updatableEnum===ee.RADIO_HORIZONTAL,disabled:!0,onChange:l=>{l.stopPropagation()}}),"Horizontal radio group"]}),e.jsxs(y,{className:"align-label-radio",children:[e.jsx(C,{checked:i.updatableEnum===ee.RADIO_VERTICAL,disabled:!0,onChange:l=>{l.stopPropagation()}}),"Vertical radio group"]})]})]})]}),e.jsx(B,{single:!1})]})]})},Es=({appId:s,columnIndex:n,tableColumn:i,columnMetaData:t})=>{o.debug(s,n,i),T(),F(s);const[r,a]=v.useState(!1);return i.computedField!==void 0||n===void 0||t===void 0||(t==null?void 0:t.data_type)!==void 0&&b(t.data_type)!=="number"?null:e.jsxs(L,{disableGutters:!0,children:[e.jsxs(R,{expandIcon:e.jsx(k,{}),sx:{fontSize:"1rem","& .MuiAccordionSummary-content":{padding:"1rem",alignItems:"center"}},children:[e.jsx(Fs,{}),e.jsx("span",{style:{paddingLeft:"0.5rem"},children:"Validation"})]}),e.jsxs(V,{sx:{paddingTop:"1rem"},children:[e.jsxs(S,{sx:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[e.jsx(P,{error:r,type:"number",label:"Minimum value allowed",disabled:!0,value:i.numericMin??"",required:!1,InputLabelProps:{shrink:!0},onChange:l=>{o.debug(l)}}),e.jsx(P,{error:r,type:"number",label:"Maximum value allowed",disabled:!0,value:i.numericMax??"",required:!1,InputLabelProps:{shrink:!0},onChange:l=>{o.debug(l)}})]}),e.jsx(B,{})]})]})},Gs=({appId:s,columnIndex:n,tableColumn:i,columnMetaData:t})=>{o.debug(s,n,i,t);const r=T(),a=F(s),[l,f]=v.useState(!1),u=ge(s),w={marginTop:"20px",marginLeft:"10px"};return e.jsxs(L,{disableGutters:!0,children:[e.jsxs(R,{expandIcon:e.jsx(k,{}),sx:{fontSize:"1rem","& .MuiAccordionSummary-content":{padding:"1rem",alignItems:"center"}},children:[e.jsx(ws,{}),e.jsx("span",{style:{paddingLeft:"0.5rem"},children:"Column settings"})]}),e.jsxs(V,{sx:{display:"grid",gridGap:"2rem",paddingTop:"1rem"},children:[(i.computedField||u[i.columnName]!==void 0&&(b(u[i.columnName].data_type)==="float"||b(u[i.columnName].data_type)==="number"||b(u[i.columnName].data_type)==="time"||b(u[i.columnName].data_type,!0)==="date"||b(u[i.columnName].data_type,!0)==="datetime"||b(u[i.columnName].data_type,!0)==="timestamp"||b(u[i.columnName].data_type,!0)==="time"))&&e.jsx(g,{children:e.jsxs(S,{children:[e.jsx(N,{control:e.jsx(Z,{checked:!1,disabled:!0,onClick:p=>{p.stopPropagation()}}),label:"Localize",labelPlacement:"end"}),e.jsx(h,{children:i.computedField||u[i.columnName]!==void 0&&(b(u[i.columnName].data_type)==="float"||b(u[i.columnName].data_type)==="number")?"Localizes decimal and thousands seperators.":"Localizes date and time fields."})]})}),e.jsxs(S,{children:[e.jsx(P,{type:"text",variant:"outlined",label:"Default value",value:i.defaultValue??"",placeholder:(t==null?void 0:t.column_default)??"",InputLabelProps:{shrink:!0},onChange:p=>{r(we({appId:s,index:n,defaultValue:p.target.value})),a(!0),p.stopPropagation()}}),e.jsxs(h,{component:"div",children:[e.jsx(e.Fragment,{children:(t==null?void 0:t.column_default)!==void 0&&(t==null?void 0:t.column_default)!==null&&(t==null?void 0:t.column_default)!==""&&e.jsx(g,{sx:{fontWeight:"bold"},children:"Leave empty to use column default constraint."})}),e.jsxs("div",{children:["Only applied on insert ",l?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(te,{sx:{cursor:"pointer"},underline:"none",onClick:()=>{f(!1)},children:"(hide examples)"})}),e.jsxs("ul",{style:{listStyle:"disc",padding:"0 40px"},children:[e.jsx("li",{children:"Hello World"}),e.jsx("li",{children:"@wpda_wp_user_id"}),e.jsx("li",{children:"@now"})]}),e.jsx("div",{style:w,children:"Notes"}),e.jsxs("ul",{style:{listStyle:"disc",padding:"0 40px"},children:[e.jsx("li",{children:"@wpda_wp_user_id returns the WordPress user ID or 0 for anonymous requests"}),e.jsx("li",{children:"@now returns the current date/time and works with date/time fields only"}),e.jsxs("li",{children:["Column default constraints defined in the database are automatically applied",(t==null?void 0:t.column_default)!==void 0&&(t==null?void 0:t.column_default)!==null&&(t==null?void 0:t.column_default)!==""&&e.jsxs(e.Fragment,{children:[" (current value is ",e.jsx("strong",{children:t==null?void 0:t.column_default}),")"]})]})]})]}):e.jsx("span",{children:e.jsx(te,{sx:{cursor:"pointer"},underline:"none",onClick:()=>{f(!0)},children:"(show examples)"})})]})]})]}),((t==null?void 0:t.data_type)!==void 0&&t.data_type.toLowerCase()!=="text"&&t.data_type.toLowerCase()!=="enum"&&t.data_type.toLowerCase()!=="set"&&t.column_type.toLowerCase()!=="tinyint(1)"&&(b(t.data_type)==="string"||b(t.data_type)==="number")||i.computedField)&&e.jsxs(S,{children:[e.jsx(g,{sx:{display:"grid",gridTemplateColumns:"auto auto",gridGap:"10px",alignItems:"center"},children:e.jsxs(e.Fragment,{children:[e.jsx(P,{type:"text",variant:"outlined",label:"Prefix",value:i.prefix,disabled:!0,InputLabelProps:{shrink:!0},onChange:p=>{p.stopPropagation()}}),e.jsx(P,{type:"text",variant:"outlined",label:"Suffix",value:i.suffix,disabled:!0,InputLabelProps:{shrink:!0},onChange:p=>{p.stopPropagation()}})]})}),e.jsx(h,{children:"Adds a prefix and/or suffix to the column content."})]}),e.jsxs(S,{children:[e.jsx(P,{type:"text",variant:"outlined",label:"CSS classes",fullWidth:!0,value:i.classNames,disabled:!0,InputLabelProps:{shrink:!0},onChange:p=>{p.stopPropagation()}}),e.jsx(h,{children:"CSS classes (seperated by spaces) for custom styling."})]}),e.jsxs(S,{children:[e.jsx(P,{type:"text",variant:"outlined",label:"Hint",fullWidth:!0,value:i.hint,disabled:!0,InputLabelProps:{shrink:!0},onChange:p=>{p.stopPropagation()}}),e.jsx(h,{children:"Help text displayed below data entry field."})]}),e.jsx(B,{single:!1,margin:"0"})]})]})},Ns=({appId:s,columnIndex:n,tableColumn:i})=>{var p,E;o.debug(s,n,i);const t=T(),r=F(s),a=he(s),l=ne(s),u=ge(s)[i.columnName],w=(z,O)=>{t(Ue({appId:s,index:z,lookup:O})),r(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(_s,{appId:s,columnIndex:n,tableColumn:i}),e.jsx(Gs,{appId:s,columnIndex:n,tableColumn:i,columnMetaData:u}),(((p=l==null?void 0:l.privs)==null?void 0:p.insert)||((E=l==null?void 0:l.privs)==null?void 0:E.update))&&(a.table.transactions.insert||a.table.transactions.update)&&e.jsx(Es,{appId:s,columnIndex:n,tableColumn:i,columnMetaData:u}),e.jsx(gs,{appId:s,columnIndex:n,tableColumn:i,columnMetaData:u,setLookup:w}),e.jsx(ms,{columnMetaData:u})]})};v.lazy(()=>Pe(()=>import("./ComputedFieldMore-1.0.17-da750f70.js"),["./ComputedFieldMore-1.0.17-da750f70.js","./main-1.0.17.js","./main-1.0.17-54ffa424.js","./iconBase-1.0.17-8d991e6c.js","./main-1.0.17-f52cb0d7.css","./TabPanel-1.0.17-3c2dbf14.js","./FormControlLabel-1.0.17-cc31d0c1.js","./Select-1.0.17-745624d0.js","./Menu-1.0.17-09126381.js","./createSvgIcon-1.0.17-f0c1dc0a.js","./useScreenSize-1.0.17-44173319.js","./DialogContent-1.0.17-9628df83.js","./Tabs-1.0.17-a2a1c721.js","./TabPanel-1.0.17-9bff3a93.css","./index.esm-1.0.17-78a91bbf.js","./MenuItem-1.0.17-ed8ab45a.js"],import.meta.url));const As=({appId:s,columnIndex:n})=>{o.debug(s,n);const i=T(),t=he(s),r=q(d=>ke(d,s,n));o.debug("tableColumn",r);const a=F(s),l=(d,m)=>{o.debug(d,m),i(Re({appId:s,index:d,visible:m})),a(!0)},f=(d,m)=>{o.debug(d,m),i(Ve({appId:s,index:d,more:m})),a(!0)},u=(d,m)=>{o.debug(d,m),i(_e({appId:s,index:d,updatable:m})),a(!0)};Le.TEXT;const[w,p]=v.useState(!1),[E,z]=v.useState(void 0),O=d=>{d!==void 0&&(i(Ee({appId:s,index:d})),a(!0))},K=(d,m,X)=>(o.debug(d,m,X),e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(rs,{id:d,enabled:!1})}),e.jsxs(g,{sx:{display:"inline-grid",gridTemplateColumns:r.computedField!==void 0?"auto auto":"auto",justifyContent:"start",alignItems:"center",gap:"10px","& svg":{opacity:"0.5"}},children:[r.computedField!==void 0&&e.jsx(Ts,{}),e.jsx(y,{children:m})]})]}));return e.jsxs(e.Fragment,{children:[e.jsxs(L,{disableGutters:!0,slotProps:{transition:{unmountOnExit:!0}},children:[e.jsxs(R,{className:"pp-column-settings",expandIcon:e.jsx(k,{}),sx:{justifyContent:"space-between"},children:[e.jsx(g,{sx:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center","& svg":{display:"flex"}},children:K(r.columnName,r.columnLabel,n)}),e.jsxs(g,{style:{display:"grid",gridTemplateColumns:"40px 40px 40px"},children:[e.jsx(G,{title:"Visibility",position:"bottom",children:e.jsx(A,{onClick:d=>{r.visible?r.more?(l(n,!1),f(n,!1)):f(n,!0):r.more?f(n,!1):l(n,!0),d.stopPropagation()},children:r.visible?e.jsx(e.Fragment,{children:r.more?e.jsx(Y,{checked:!0,children:e.jsx(Qe,{})}):e.jsx(Y,{checked:!0,children:e.jsx(de,{})})}):e.jsx(Y,{checked:!1,children:e.jsx(de,{})})})}),r.computedField?e.jsx(e.Fragment,{children:e.jsx(G,{title:"Delete",position:"bottom",children:e.jsx(A,{onClick:d=>{p(!0),z(n),d.stopPropagation()},children:e.jsx(De,{})})})}):e.jsx(G,{title:"Updatable",position:"bottom",disabled:!t.table.transactions.insert&&!t.table.transactions.update,children:e.jsx(A,{disabled:!t.table.transactions.insert&&!t.table.transactions.update,onClick:d=>{u(n,!r.updatable),d.stopPropagation()},children:e.jsx(Y,{checked:r.updatable&&(t.table.transactions.insert||t.table.transactions.update),disabled:!t.table.transactions.insert&&!t.table.transactions.update,children:e.jsx($e,{})})})}),e.jsx(G,{title:"Alignment",position:"bottom",children:e.jsxs(A,{onClick:d=>{r.alignment===U.LEFT?i(Q({appId:s,index:n,alignment:U.CENTER})):r.alignment===U.CENTER?i(Q({appId:s,index:n,alignment:U.RIGHT})):r.alignment===U.RIGHT&&i(Q({appId:s,index:n,alignment:U.LEFT})),a(!0),d.stopPropagation()},children:[r.alignment===U.LEFT&&e.jsx(Me,{}),r.alignment===U.CENTER&&e.jsx(Ie,{}),r.alignment===U.RIGHT&&e.jsx(es,{})]})})]})]}),e.jsx(V,{children:e.jsx(Ns,{appId:s,columnIndex:n,tableColumn:r})})]},n),e.jsx(me,{title:"Delete computed field?",message:"Are you sure you want to delete this computed field? This action cannot be undone!",open:w,setOpen:p,onConfirm:()=>O(E)})]})},Bs=({appId:s})=>{o.debug(s),T();const n=ls(M(ds),M(as),M(os));F(s);const i=r=>{const{active:a,over:l}=r;(a==null?void 0:a.id)!==(l==null?void 0:l.id)&&o.debug(a,l)},t=q(r=>Ge(r,s));return t===void 0||t.length===0?null:e.jsxs(e.Fragment,{children:[e.jsx(cs,{autoScroll:!0,sensors:n,collisionDetection:us,onDragEnd:i,children:e.jsx(ps,{items:t,children:t.map((r,a)=>e.jsx(xs,{id:r,children:e.jsx(As,{appId:s,columnIndex:a})},r))})}),e.jsx(hs,{appId:s,target:je.FORM})]})},Os=()=>{const s=q(n=>Ne(n));return o.debug("hideThemeSetting",s),s},zs=({appId:s,formSettings:n})=>(T(),F(s),e.jsxs(L,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(R,{expandIcon:e.jsx(k,{}),children:"Field layout"}),e.jsxs(V,{sx:{display:"grid",gap:"20px"},children:[e.jsxs(S,{children:[e.jsxs(ie,{value:n.fieldVariant,sx:{flexDirection:"row"},onChange:i=>{o.debug(i)},children:[e.jsx(N,{control:e.jsx(C,{disabled:!0}),value:"outlined",label:"Outlined"},"outlined"),e.jsx(N,{control:e.jsx(C,{disabled:!0}),value:"filled",label:"Filled"},"filled"),e.jsx(N,{control:e.jsx(C,{disabled:!0}),value:"standard",label:"Standard"},"standard")]}),e.jsx(h,{children:"Applies to data entry forms only."})]}),e.jsx(N,{control:e.jsx(Z,{checked:n.hideHintsInViewMode,disabled:!0,onChange:(i,t)=>{i.stopPropagation()}}),label:"Hide hints in view mode",labelPlacement:"end"}),e.jsx(B,{})]})]})),Hs=({appId:s,formSettings:n,updateSettings:i})=>{T(),F(s);const[t,r]=v.useState(!1);return e.jsxs(L,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(R,{expandIcon:e.jsx(k,{}),children:"Grid"}),e.jsxs(V,{sx:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:"20px",marginTop:"5px"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[e.jsx(P,{type:"number",label:"Cells per row",value:n.cellsPerRow,disabled:!0,InputLabelProps:{shrink:!0},onChange:a=>{o.debug(a)}}),e.jsx(j,{label:"Space between cells",textField:{cssValue:n.spacing.betweenCells,cssUnit:n.spacing.betweenCellsUnit},defaultValue:{cssValue:c.betweenCells,cssUnit:c.betweenCellsUnit},updateSettings:a=>{o.debug(a)}})]}),e.jsx(N,{control:e.jsx(Z,{disabled:!0,checked:n.showGrid,onChange:(a,l)=>{o.debug(a,l)}}),label:"Show grid"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginTop:"10px"},children:[e.jsx(j,{label:"Padding top",textField:{cssValue:n.spacing.aroundGridTop,cssUnit:n.spacing.aroundGridTopUnit},defaultValue:{cssValue:c.aroundGridTop,cssUnit:c.aroundGridTopUnit},updateSettings:a=>{o.debug(a)}}),e.jsx(j,{label:"Padding bottom",textField:{cssValue:n.spacing.aroundGridBottom,cssUnit:n.spacing.aroundGridBottomUnit},defaultValue:{cssValue:c.aroundGridBottom,cssUnit:c.aroundGridBottomUnit},updateSettings:a=>{o.debug(a)}}),e.jsx(j,{label:"Padding left",textField:{cssValue:n.spacing.aroundGridLeft,cssUnit:n.spacing.aroundGridLeftUnit},defaultValue:{cssValue:c.aroundGridLeft,cssUnit:c.aroundGridLeftUnit},updateSettings:a=>{o.debug(a)}}),e.jsx(j,{label:"Padding right",textField:{cssValue:n.spacing.aroundGridRight,cssUnit:n.spacing.aroundGridRightUnit},defaultValue:{cssValue:c.aroundGridRight,cssUnit:c.aroundGridRightUnit},updateSettings:a=>{o.debug(a)}})]}),e.jsxs(h,{component:"div",sx:{marginTop:"10px"},children:[e.jsxs(te,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>r(!t),children:[e.jsx(ss,{}),"How to use the grid?"]}),t&&e.jsxs(g,{sx:{marginTop:"20px",display:"grid",gap:"20px"},children:[e.jsxs(g,{children:["All form fields are organized into a form grid, which consists of ",e.jsx("strong",{children:"rows"})," and ",e.jsx("strong",{children:"cells"}),'. Each row contains a fixed number of cells, determined by the "Cells per row" setting. The grid ensures consistent layout and alignment for all form fields.']}),e.jsxs(g,{children:["Each form field can occupy from 1 to n cells, where n is the number of cells per row. This value can be adjusted on a per-column basis in ",e.jsx("strong",{children:"Grid positioning"}),". To access the grid position for a specific column, open the ",e.jsx("strong",{children:"COLUMNS"})," section, navigate to the column, and select the ",e.jsx("strong",{children:"Grid positioning"})," option. Grid positioning allows you to adjust the display of empty cells before a field or position a field at the beginning or end of a row."]}),e.jsxs(g,{children:["The grid can be displayed during form design to visualize column positioning and spacing. This feature is available only in the ",e.jsx("strong",{children:"Form Builder"})," and is not visible during runtime."]})]})]}),e.jsx(B,{single:!1})]})]})},Ws=({formSettings:s,updateSettings:n})=>e.jsxs(L,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(R,{expandIcon:e.jsx(k,{}),children:"Cells"}),e.jsxs(V,{style:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)"},children:[e.jsxs(S,{children:[e.jsxs(g,{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginTop:"5px"},children:[e.jsx(j,{label:"Padding top",textField:{cssValue:s.spacing.cellTop,cssUnit:s.spacing.cellTopUnit},defaultValue:{cssValue:c.cellTop,cssUnit:c.cellTopUnit},updateSettings:i=>{o.debug(i)}}),e.jsx(j,{label:"Padding bottom",textField:{cssValue:s.spacing.cellBottom,cssUnit:s.spacing.cellBottomUnit},defaultValue:{cssValue:c.cellBottom,cssUnit:c.cellBottomUnit},updateSettings:i=>{o.debug(i)}}),e.jsx(j,{label:"Padding left",textField:{cssValue:s.spacing.cellLeft,cssUnit:s.spacing.cellLeftUnit},defaultValue:{cssValue:c.cellLeft,cssUnit:c.cellLeftUnit},updateSettings:i=>{o.debug(i)}}),e.jsx(j,{label:"Padding right",textField:{cssValue:s.spacing.cellRight,cssUnit:s.spacing.cellRightUnit},defaultValue:{cssValue:c.cellRight,cssUnit:c.cellRightUnit},updateSettings:i=>{o.debug(i)}})]}),e.jsx(h,{sx:{marginTop:"20px"},children:"Spacing around cells."})]}),e.jsx(B,{single:!1})]})]}),qs=({formSettings:s,updateSettings:n})=>e.jsxs(L,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(R,{expandIcon:e.jsx(k,{}),children:"Field spacing"}),e.jsxs(V,{sx:{display:"grid"},children:[e.jsxs(S,{children:[e.jsxs(g,{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginTop:"5px"},children:[e.jsx(j,{label:"Padding top",textField:{cssValue:s.spacing.fieldTop,cssUnit:s.spacing.fieldTopUnit},defaultValue:{cssValue:c.fieldTop,cssUnit:c.fieldTopUnit},updateSettings:i=>{o.debug(i)}}),e.jsx(j,{label:"Padding bottom",textField:{cssValue:s.spacing.fieldBottom,cssUnit:s.spacing.fieldBottomUnit},defaultValue:{cssValue:c.fieldBottom,cssUnit:c.fieldBottomUnit},updateSettings:i=>{o.debug(i)}}),e.jsx(j,{label:"Padding left",textField:{cssValue:s.spacing.fieldLeft,cssUnit:s.spacing.fieldLeftUnit},defaultValue:{cssValue:c.fieldLeft,cssUnit:c.fieldLeftUnit},updateSettings:i=>{o.debug(i)}}),e.jsx(j,{label:"Padding right",textField:{cssValue:s.spacing.fieldRight,cssUnit:s.spacing.fieldRightUnit},defaultValue:{cssValue:c.fieldRight,cssUnit:c.fieldRightUnit},updateSettings:i=>{o.debug(i)}})]}),e.jsx(h,{sx:{marginTop:"20px"},children:"Spacing within data entry fields."})]}),e.jsx(B,{single:!1})]})]}),Ks=({appId:s,formSettings:n})=>{var a;const i=T(),t=F(s),r=ne(s);return!((a=r==null?void 0:r.privs)!=null&&a.update)||r.primary_key.length===0?null:e.jsxs(L,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(R,{expandIcon:e.jsx(k,{}),children:"Null value handling"}),e.jsxs(V,{sx:{display:"grid"},children:[e.jsx(N,{control:e.jsx(Z,{checked:n.preserveSpacesOnUpdate,onChange:(l,f)=>{i(Ae({appId:s,preserveSpaces:f})),t(!0),l.stopPropagation()}}),label:"Preserve empty strings on update",labelPlacement:"end"}),e.jsx(h,{children:"Enable to preserve empty strings for mandatory columns. Works only if the actual column value contains an empty spaces. Does not allow strings to be emptied."}),e.jsx(h,{children:"This feature is enabled by default on WordPress tables."}),e.jsx(h,{sx:{fontWeight:"bold"},children:"Do NOT change the default unless you really need to!"})]})]})},Xs=()=>{const s=q(n=>Be(n));return o.debug("isRelationForm",s),s},Ys=({appId:s})=>{o.debug(s),T(),F(s);const n=Xs(),i=fe(s),t=r=>{o.debug(r)};return e.jsxs(e.Fragment,{children:[n!==!0&&e.jsx(Cs,{appId:s,updateSettings:t}),e.jsx(zs,{appId:s,formSettings:i}),e.jsx(Hs,{appId:s,formSettings:i,updateSettings:t}),e.jsx(Ws,{formSettings:i,updateSettings:t}),e.jsx(qs,{formSettings:i,updateSettings:t}),e.jsx(Ks,{appId:s,formSettings:i})]})},Oi=({appId:s})=>{var re,le;o.debug(s);const n=T(),i=Os(),[t,r]=v.useState(oe(H.getState(),s));o.debug(t);const a=Rs(s),[l,f]=v.useState(Oe(H.getState(),s));o.debug(l);const u=()=>Ze(H.getState(),s),w=_=>{n(We({appId:s,isUpdated:_}))},[p,E]=v.useState(!1),z=((re=ce)==null?void 0:re.palette.mode)===ze.LIGHT?(le=ce)==null?void 0:le.palette.primary.main:"",O=_=>{n(qe({anchor:_}))},K=()=>{t!==void 0&&n(Ke({appId:s,formState:t}))},d=()=>{n(Xe({})),w(!1)},m=()=>{u()?E(!0):(K(),d())},X=()=>{{const _=Ye(H.getState());ks(s,Ls.GLOBAL,_.isRelationTable===!0?xe.RFORM:xe.FORM,x=>{if(o.debug(x),x!=null&&x.code&&(x==null?void 0:x.message)!==void 0)switch(x.code){case"ok":r(oe(H.getState(),s)),W(x.message,{variant:"success"}),a.columns.map((ve,Fe)=>{ve.lookup!==void 0&&n(Je({appId:s,index:Fe}))});break;case"info":W(x.message,{variant:"info"});break;default:o.error(x),W(x.message??$.contactSupport,{variant:"error"})}else o.error(x),W($.contactSupport,{variant:"error"})},x=>{o.error("error",x),W(x??$.contactSupport,{variant:"error"})}),w(!1)}},be=()=>{u()?(X(),setTimeout(()=>{d()},1e3)):d()},[ye,Se]=v.useState("1"),Te=(_,x)=>{Se(x)},Ce=q(_=>He(_,s));return e.jsx(e.Fragment,{children:Ce&&e.jsxs(e.Fragment,{children:[e.jsxs(fs,{closeDrawer:m,children:[e.jsx(is,{position:"static",elevation:4,sx:{borderRadius:0},children:e.jsxs(ts,{className:"pp-setting-toolbar",sx:{borderRadius:0},children:[e.jsx(Ps,{variant:"h5",noWrap:!0,component:"div",className:"unselectable",sx:{flexGrow:1,paddingLeft:"6px"},children:"Form Builder"}),e.jsx(G,{title:"Dock to left",position:"bottom",children:e.jsx(A,{onClick:()=>{O(ae.LEFT)},size:"large",color:"inherit",sx:{fontSize:"1em"},children:e.jsx(js,{})})}),e.jsx(G,{title:"Dock to right",position:"bottom",children:e.jsx(A,{onClick:()=>{O(ae.RIGHT)},size:"large",color:"inherit",sx:{fontSize:"1em"},children:e.jsx(bs,{})})}),e.jsx(G,{title:"Close",position:"bottom",children:e.jsx(A,{onClick:m,size:"large",color:"inherit",sx:{fontSize:"1.4em"},children:e.jsx(ns,{})})})]})}),e.jsx(ue,{className:"pp-settings-container",children:e.jsx(pe,{sx:{padding:0,margin:0},children:e.jsxs(ys,{value:ye,children:[e.jsxs(Ss,{variant:"fullWidth",textColor:"primary",onChange:Te,sx:{width:"100%",height:"80px",padding:0,margin:0,backgroundColor:"rgb(242, 242, 242)"},children:[e.jsx(se,{label:"Form",value:"1",sx:{fontWeight:"bold",fontSize:"110%",height:"80px"}}),e.jsx(se,{label:"Columns",value:"2",sx:{fontWeight:"bold",fontSize:"110%",height:"80px"}}),i!==!0&&e.jsx(se,{label:"Theme",value:"3",sx:{fontWeight:"bold",fontSize:"110%",height:"80px"}})]}),e.jsxs(g,{sx:{margin:0,padding:0,overflowY:"auto",height:"calc(100vh - 250px)","& > div.MuiTabPanel-root":{padding:0}},children:[e.jsx(I,{value:"1",children:e.jsx(Ys,{appId:s})}),e.jsx(I,{value:"2",className:"pp-column-settings-container",children:e.jsx(Bs,{appId:s})}),i!==!0&&e.jsx(I,{value:"3",children:e.jsx(Vs,{appId:s,source:je.FORM,setIsUpdated:w})})]})]})})}),e.jsx(ue,{className:"pp-setting-footer",sx:{borderRadius:0,backgroundColor:z},children:e.jsxs(pe,{className:"pp-setting-footer-buttons",sx:{borderRadius:0},children:[e.jsx(D,{variant:"outlined",className:"footer_action_button_apply",onClick:X,children:"Apply"}),e.jsx(D,{variant:"outlined",className:"footer_action_button",onClick:be,children:"OK"}),e.jsx(D,{variant:"outlined",className:"footer_action_button",onClick:m,children:"Cancel"})]})})]}),e.jsx(me,{title:"Close Form Builder?",message:"All uncommitted changes will be lost!",open:p,setOpen:E,onConfirm:()=>{K(),d()},onKeep:()=>{d()}})]})})};export{Oi as default};
