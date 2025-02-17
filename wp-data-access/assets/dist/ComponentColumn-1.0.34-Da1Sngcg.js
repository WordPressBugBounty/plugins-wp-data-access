import{u as x,a as F}from"./RestApi-1.0.34-BxEfvjo_.js";import{l as r,b as j,r as T,n as k,bS as H,bT as q,A as z,k as R,bU as I}from"./lib-1.0.34-CKToGW0d.js";import{j as a}from"./cm-1.0.34-jkgb9fqk.js";import{r as b}from"./redux-1.0.34-BykGtd51.js";import{e as w}from"./notistack-1.0.34-CSyPb4yh.js";import{h as O,d as B,e as E}from"./ActionsExplorer-1.0.34-CLjfe2ax.js";import{F as v,a as S}from"./FormHelperText-1.0.34-DgFI7tJ8.js";import{A as N}from"./Autocomplete-1.0.34-B2v6NqWM.js";import{T as W}from"./TextField-1.0.34-CRuVZ2IL.js";import{w as K,K as Y,k as L}from"./cjs-1.0.34-s8JVqkTy.js";import{A as G}from"./AdminTheme-1.0.34-9phfEwG6.js";import{k as J}from"./ActionsApp-1.0.34-BRXzkmL7.js";import{B as C,S as Q}from"./Spinner-1.0.34-Co4td_et.js";import{P as X,I as Z}from"./iconBase-1.0.34-CNhS-hAm.js";import{F as $}from"./FormLabel-1.0.34-f0a-atWV.js";import{F as U}from"./FormControlLabel-1.0.34-BSZPBg3u.js";import{C as ee}from"./Checkbox-1.0.34-d5tAuq8A.js";import{T as ae}from"./Tooltip-1.0.34-DVgtOKOZ.js";import{L as _}from"./Link-1.0.34-DYvSaOHE.js";const ke=()=>{const e=x(s=>s.apps.app);return r.debug("app",e),e},P=()=>{const e=x(s=>s.apps.app.appDatabase);return r.debug("appDatabase",e),e},te=()=>{const e=x(s=>s.apps.databases);return r.debug("databases",e),e},se=()=>{const e=x(s=>s.apps.wpDatabase);return r.debug("wpDatabase",e),e},re=()=>{const e=x(s=>s.apps.defaultDatabase);return r.debug("defaultDatabase",e),e},Re=({setIsUpdated:e})=>{const s=F(),l=te(),d=se(),f=re(),p=P();b.useEffect(()=>{l.length===0?O(function(t){const i=t==null?void 0:t.data;r.debug("response data",i);const n=[];let o="",y="";i.map(c=>{var D;r.debug(c),(c==null?void 0:c.dbs)!==void 0&&(n.push(c.dbs),((D=c==null?void 0:c.dbs_type)==null?void 0:D.toLocaleLowerCase())==="wp"&&(o=c.dbs,y=c.dbs))}),n.sort((c,D)=>c.localeCompare(D,void 0,{sensitivity:"base"})),s(T({property:"databases",propertyValue:n})),s(T({property:"wpDatabase",propertyValue:o})),s(T({property:"defaultDatabase",propertyValue:y})),p===null&&s(k({appDatabase:y})),r.debug(n,o,y)},t=>{r.error("error",t),w(t??j.contactSupport,{variant:"error"})}):p===null&&s(k({appDatabase:f}))},[]);const g=b.useRef(!0);return b.useEffect(()=>{g.current?g.current=!1:p!==null&&l.includes(p)&&(B(p,function(t){const i=t==null?void 0:t.data;r.debug("response data",i),s(T({property:"tables",propertyValue:i}))},t=>{r.error("error",t),w(t??j.contactSupport,{variant:"error"})}),E(p,function(t){const i=t==null?void 0:t.data;r.debug("response data",i),s(T({property:"views",propertyValue:i}))},t=>{r.error("error",t),w(t??j.contactSupport,{variant:"error"})}))},[p]),a.jsxs(v,{sx:{width:"100%",marginTop:"8px"},children:[a.jsx(N,{options:l,value:p,onChange:(t,i)=>{s(k({appDatabase:i??null})),e&&e(!0)},getOptionLabel:t=>d===t?t+" (WordPress database)":t,renderInput:t=>a.jsx(W,{...t,label:"Database *",variant:"outlined"}),sx:{width:"100%"}}),a.jsx(S,{children:"Select a database from the list."})]})},ne=()=>{const e=x(s=>s.apps.app.appTable);return r.debug("appTable",e),e},oe=()=>{const e=x(s=>s.apps.app.appRelationTable);return r.debug("appRelationTable",e),e},le=()=>{const e=x(s=>s.apps.tables);return r.debug("tables",e),e},ie=()=>{const e=x(s=>s.apps.views);return r.debug("views",e),e},Fe=({setIsUpdated:e,isDetail:s,isRelationTable:l})=>{const d=F(),f=P(),p=le(),g=ie(),t=ne(),i=oe();return b.useEffect(()=>{f!==null&&(p.length===0||g.length===0)&&(B(f,function(n){const o=n==null?void 0:n.data;r.debug("response data",o),d(T({property:"tables",propertyValue:o}))},n=>{r.error("error",n),w(n??j.contactSupport,{variant:"error"})}),E(f,function(n){const o=n==null?void 0:n.data;r.debug("response data",o),d(T({property:"views",propertyValue:o}))},n=>{r.error("error",n),w(n??j.contactSupport,{variant:"error"})}))},[f]),a.jsxs(v,{sx:{width:"100%",marginTop:"8px"},children:[a.jsx(N,{options:f!==null?p.concat(g).sort():[],value:l?i:t,onChange:(n,o)=>{d(l?H({appRelationTable:o??null}):q({appTable:o??null})),e&&e(!0)},renderInput:n=>a.jsx(W,{...n,label:"Table *",variant:"outlined"}),sx:{width:"100%"}}),a.jsxs(S,{children:["Select a table from the list",s===void 0&&a.jsx(a.Fragment,{children:" (additional tables can be added in the Table and Form Builders)"}),"."]})]})},Me=({app:e,setIsUpdated:s,isRelationTable:l})=>{r.debug(e,l);const d=F(),[f,p]=b.useState(!1),g=b.useRef(!0);b.useEffect(()=>{g.current?g.current=!1:t()},[e.appDatabase,e.appTable,e.appRelationTable,d]);const t=()=>{e.appDatabase!==null&&(!l&&e.appTable!==null||l&&e.appRelationTable!==null)&&(p(!0),J(e.appDatabase,l?e.appRelationTable??"":e.appTable??"",!1,function(u){const h=u==null?void 0:u.data;if(r.debug("response data",e.appDatabase,l?e.appRelationTable:e.appTable,h),!h.columns)w(j.contactSupport,{variant:"error"});else{const m=[];h.columns.map(A=>{A.column_name!==void 0&&m.push({columnName:A.column_name,isSelected:!0})}),d(l?R({property:{appRelationColumns:m}}):I({appColumns:m,appMetaData:h}))}p(!1)},u=>{r.error("error",u),w(u??j.contactSupport,{variant:"error"}),p(!1)}))},[i,n]=b.useState(!1);r.debug("hasErrors",i);const o=l?e.appRelationColumns:e.appColumns;r.debug("columns",o);const[y,c]=b.useState(!1),[D,V]=b.useState(!1);return b.useEffect(()=>{Number(e.appType)!==z.DATATABLE&&e.appMetaData.primary_key!==void 0?n(e.appMetaData.primary_key.length===0||e.appMetaData.primary_key.filter(u=>o.filter(m=>m.isSelected).map(m=>m.isSelected?m.columnName:!1).includes(u)).length!==e.appMetaData.primary_key.length):n(!1)},[e,o]),a.jsxs(C,{sx:{position:"relative"},children:[a.jsxs(v,{fullWidth:!0,sx:{"& .MuiPaper-root":{border:"none",padding:"0 10px"}},children:[a.jsxs("fieldset",{className:"pp-fieldset",children:[a.jsx("legend",{children:"Select columns *"}),a.jsx(X,{variant:"outlined",children:f?a.jsxs(C,{sx:{"& div":{display:"block"}},children:[a.jsx(Q,{}),a.jsx("span",{})]}):a.jsxs(a.Fragment,{children:[o.length===0&&a.jsx(v,{fullWidth:!0,sx:{margin:"5px 0"},children:a.jsx($,{sx:{color:"inherit"},children:"No table selected"})}),...o.map((u,h)=>{var m;return a.jsx(U,{control:a.jsx(ee,{checked:u.isSelected,onChange:(A,M)=>{d(l?R({property:{appRelationColumns:[...e.appRelationColumns.slice(0,h),{columnName:u.columnName,isSelected:M},...e.appRelationColumns.slice(h+1)]}}):R({property:{appColumns:[...e.appColumns.slice(0,h),{columnName:u.columnName,isSelected:M},...e.appColumns.slice(h+1)]}})),s&&s(!0)}}),label:a.jsx(C,{sx:{color:i&&e.appMetaData.primary_key.includes(u.columnName)?(m=G)==null?void 0:m.palette.error.main:""},children:u.columnName+(i&&e.appMetaData.primary_key.includes(u.columnName)?" (primary key column)":"")}),sx:{width:"100%"}})})]})})]}),a.jsx(S,{children:"Only selected columns are available in tables and forms. Unselected columns are excluded from responses. At least one column must be selected."}),!f&&e.appDatabase!==null&&(!l&&e.appTable!==null||!l&&e.appRelationTable!==null)&&i&&a.jsxs(S,{error:!0,sx:{marginTop:"20px",width:"fit-content",display:"inline-grid",gridTemplateColumns:"40px auto",justifyContent:"space-around",alignItems:"center"},children:[a.jsx(K,{size:"24px"}),a.jsx("span",{children:e.appMetaData.primary_key.length===0?a.jsx(a.Fragment,{children:"This table contains no primary key. Transactions are not supported for tables without a primary key. Please create a primary key to continue or select app type Data Table in the app info tab."}):a.jsx(a.Fragment,{children:"Transactions require all primary key columns to be selected. With the current settings transactions will be disabled."})})]})]}),a.jsx(C,{sx:{position:"absolute",top:"15px",right:"10px"},children:a.jsx(ae,{title:"Refresh column list",children:a.jsx(Z,{onClick:()=>{t()},children:a.jsx(Y,{})})})}),a.jsx(v,{fullWidth:!0,children:a.jsxs(S,{component:"div",sx:{marginTop:"20px",marginLeft:0},children:[a.jsxs(_,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex",marginBottom:0,"& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>c(!y),children:[a.jsx(L,{}),"Which columns should be included | excluded?"]}),y&&a.jsx(C,{sx:{marginTop:"20px",marginBottom:"25px"},children:"In most cases, you can simply select all columns. You can hide specific columns later in the Table Builder and Form Builder. Only if your table contains columns with sensitive data that you absolutely do not want to share with anyone, should you deselect them here. This ensures that the contents of these columns will not be included in server responses, maintaining their privacy."})]})}),a.jsx(v,{fullWidth:!0,children:a.jsxs(S,{component:"div",sx:{marginTop:0,marginBottom:"10px",marginLeft:0},children:[a.jsxs(_,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>V(!D),children:[a.jsx(L,{}),"What to do when a table structure changes?"]}),D&&a.jsx(C,{sx:{marginTop:"20px"},children:"Click the refresh icon and save the new structure. Proceed to use the Table Builder and Form Builder sequentially to apply the updated structure."})]})})]})};export{Re as C,Fe as a,Me as b,ke as u};
