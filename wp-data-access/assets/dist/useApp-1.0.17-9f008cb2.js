import{l as n,r as h,A as z,j as e,dD as I,dE as O,e as T,C,dF as q,dG as V,dH as L,dI as G,dJ as J,dK as K,dL as Q,dM as W,dN as B,dO as X,dP as Y,dQ as Z,dR as $,dS as U,dT as ee,dU as ae,dV as te,dW as A,dX as se}from"./main-1.0.17.js";import{a as k,B as j,S as ne,d as re,T as le,ai as oe,e as R,u as x}from"./main-1.0.17-54ffa424.js";import{A as ie}from"./useScreenSize-1.0.17-44173319.js";import{m as ce}from"./ActionsApp-1.0.17-78ec1ee3.js";import{F as v,b as de,a as S}from"./Select-1.0.17-745624d0.js";import{P as ue,I as pe}from"./iconBase-1.0.17-8d991e6c.js";import{F as me}from"./FormControlLabel-1.0.17-cc31d0c1.js";import{C as be}from"./Checkbox-1.0.17-3dddd4e7.js";import{L as F}from"./Link-1.0.17-88d48a3e.js";import{d as E,e as _,h as he}from"./ActionsExplorer-1.0.17-9d96105d.js";import{A as N,T as H}from"./TargetEnum-1.0.17-1e1ba2c5.js";const Ae=({app:t,setIsUpdated:c,isRelationTable:r})=>{n.debug(t,r);const p=k(),[m,i]=h.useState(!1),g=h.useRef(!0);h.useEffect(()=>{g.current?g.current=!1:a()},[t.appDatabase,t.appTable,t.appRelationTable,p]);const a=()=>{t.appDatabase!==null&&(!r&&t.appTable!==null||r&&t.appRelationTable!==null)&&(i(!0),ce(t.appDatabase,r?t.appRelationTable??"":t.appTable??"",!1,function(d){const f=d==null?void 0:d.data;if(n.debug("response data",t.appDatabase,r?t.appRelationTable:t.appTable,f),!f.columns)T(C.contactSupport,{variant:"error"});else{const b=[];f.columns.map(w=>{w.column_name!==void 0&&b.push({columnName:w.column_name,isSelected:!0})}),p(r?q({appRelationColumns:b}):V({appColumns:b,appMetaData:f}))}i(!1)},d=>{n.error("error",d),T(d??C.contactSupport,{variant:"error"}),i(!1)}))},[l,s]=h.useState(!1);n.debug("hasErrors",l);const o=r?t.appRelationColumns:t.appColumns;n.debug("columns",o);const[D,u]=h.useState(!1),[y,P]=h.useState(!1);return h.useEffect(()=>{Number(t.appType)!==z.DATATABLE&&t.appMetaData.primary_key!==void 0?s(t.appMetaData.primary_key.length===0||t.appMetaData.primary_key.filter(d=>o.filter(b=>b.isSelected).map(b=>b.isSelected?b.columnName:!1).includes(d)).length!==t.appMetaData.primary_key.length):s(!1)},[t,o]),e.jsxs(j,{sx:{position:"relative"},children:[e.jsxs(v,{fullWidth:!0,children:[e.jsxs(j,{component:"fieldset",sx:{borderWidth:1,borderRadius:"4px","& .MuiPaper-root":{border:"none",padding:"15px 20px"},"& .MuiFormHelperText-root":{marginLeft:"20px",marginBottom:"20px"}},children:[e.jsx("legend",{style:{fontSize:"0.75rem",fontWeight:400,color:"rgba(0, 0, 0, 0.6)"},children:"Select columns *"}),e.jsx(ue,{variant:"outlined",sx:{padding:"15px 30px"},children:m?e.jsxs(j,{sx:{"& div":{display:"block"}},children:[e.jsx(ne,{}),e.jsx("span",{})]}):e.jsxs(e.Fragment,{children:[o.length===0&&e.jsx(v,{fullWidth:!0,sx:{margin:"5px 0"},children:e.jsx(de,{sx:{color:"inherit"},children:"No table selected"})}),...o.map((d,f)=>{var b;return e.jsx(me,{control:e.jsx(be,{checked:d.isSelected,onChange:(w,M)=>{p(r?I({appRelationColumns:[...t.appRelationColumns.slice(0,f),{columnName:d.columnName,isSelected:M},...t.appRelationColumns.slice(f+1)]}):O({appColumns:[...t.appColumns.slice(0,f),{columnName:d.columnName,isSelected:M},...t.appColumns.slice(f+1)]})),c&&c(!0)}}),label:e.jsx(j,{sx:{color:l&&t.appMetaData.primary_key.includes(d.columnName)?(b=ie)==null?void 0:b.palette.error.main:""},children:d.columnName+(l&&t.appMetaData.primary_key.includes(d.columnName)?" (primary key column)":"")}),sx:{width:"100%"}})})]})})]}),e.jsx(S,{children:"Only selected columns are available in tables and forms. Unselected columns are excluded from responses. At least one column must be selected."}),!m&&t.appDatabase!==null&&(!r&&t.appTable!==null||!r&&t.appRelationTable!==null)&&l&&e.jsxs(S,{error:!0,sx:{marginTop:"20px",width:"fit-content",display:"inline-grid",gridTemplateColumns:"40px auto",justifyContent:"space-around",alignItems:"center"},children:[e.jsx(re,{size:"24px"}),e.jsx("span",{children:t.appMetaData.primary_key.length===0?e.jsx(e.Fragment,{children:"This table contains no primary key. Transactions are not supported for tables without a primary key. Please create a primary key to continue or select app type Data Table in the app info tab."}):e.jsx(e.Fragment,{children:"Transactions require all primary key columns to be selected. With the current settings transactions will be disabled."})})]})]}),e.jsx(j,{sx:{position:"absolute",top:"15px",right:"10px"},children:e.jsx(le,{title:"Refresh column list",children:e.jsx(pe,{onClick:()=>{a()},children:e.jsx(oe,{})})})}),e.jsx(v,{fullWidth:!0,children:e.jsxs(S,{component:"div",sx:{marginTop:"20px",marginLeft:0},children:[e.jsxs(F,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex",marginBottom:0,"& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>u(!D),children:[e.jsx(R,{}),"Which columns should be included | excluded?"]}),D&&e.jsx(j,{sx:{marginTop:"20px",marginBottom:"25px"},children:"In most cases, you can simply select all columns. You can hide specific columns later in the Table Builder and Form Builder. Only if your table contains columns with sensitive data that you absolutely do not want to share with anyone, should you deselect them here. This ensures that the contents of these columns will not be included in server responses, maintaining their privacy."})]})}),e.jsx(v,{fullWidth:!0,children:e.jsxs(S,{component:"div",sx:{marginTop:0,marginBottom:"10px",marginLeft:0},children:[e.jsxs(F,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>P(!y),children:[e.jsx(R,{}),"What to do when a table structure changes?"]}),y&&e.jsx(j,{sx:{marginTop:"20px"},children:"Click the refresh icon and save the new structure. Proceed to use the Table Builder and Form Builder sequentially to apply the updated structure."})]})})]})},ke=({setIsUpdated:t,isDetail:c,isRelationTable:r})=>{const p=k(),m=x(s=>L(s));n.debug("appDatabase",m);const i=x(s=>G(s));n.debug("tables",i);const g=x(s=>J(s));n.debug("views",g);const a=x(s=>K(s));n.debug("appTable",a);const l=x(s=>Q(s));return n.debug("appRelationTable",l),h.useEffect(()=>{m!==null&&(i.length===0||g.length===0)&&(E(m,function(s){const o=s==null?void 0:s.data;n.debug("response data",o),p(W({tables:o}))},s=>{n.error("error",s),T(s??C.contactSupport,{variant:"error"})}),_(m,function(s){const o=s==null?void 0:s.data;n.debug("response data",o),p(B({views:o}))},s=>{n.error("error",s),T(s??C.contactSupport,{variant:"error"})}))},[m]),e.jsxs(v,{sx:{width:"100%",marginTop:"8px"},children:[e.jsx(N,{options:m!==null?i.concat(g).sort():[],value:r?l:a,onChange:(s,o)=>{p(r?X({appRelationTable:o??null}):Y({appTable:o??null})),t&&t(!0)},renderInput:s=>e.jsx(H,{...s,label:"Table *",variant:"outlined"}),sx:{width:"100%"}}),e.jsxs(S,{children:["Select a table from the list",c===void 0&&e.jsx(e.Fragment,{children:" (additional tables can be added in the Table and Form Builders)"}),"."]})]})},Me=({setIsUpdated:t})=>{const c=k(),r=x(a=>Z(a));n.debug("databases",r);const p=x(a=>$(a));n.debug("wpDatabase",p);const m=x(a=>U(a));n.debug("defaultDatabase",m);const i=x(a=>L(a));n.debug("appDatabase",i),h.useEffect(()=>{r.length===0?he(function(a){const l=a==null?void 0:a.data;n.debug("response data",l);const s=[];let o="",D="";l.map(u=>{var y;n.debug(u),(u==null?void 0:u.dbs)!==void 0&&(s.push(u.dbs),((y=u==null?void 0:u.dbs_type)==null?void 0:y.toLocaleLowerCase())==="wp"&&(o=u.dbs,D=u.dbs))}),s.sort((u,y)=>u.localeCompare(y,void 0,{sensitivity:"base"})),c(ee({databases:s})),c(ae({wpDatabase:o})),c(te({defaultDatabase:D})),i===null&&c(A({appDatabase:D})),n.debug(s,o,D)},a=>{n.error("error",a),T(a??C.contactSupport,{variant:"error"})}):i===null&&c(A({appDatabase:m}))},[]);const g=h.useRef(!0);return h.useEffect(()=>{g.current?g.current=!1:i!==null&&r.includes(i)&&(E(i,function(a){const l=a==null?void 0:a.data;n.debug("response data",l),c(W({tables:l}))},a=>{n.error("error",a),T(a??C.contactSupport,{variant:"error"})}),_(i,function(a){const l=a==null?void 0:a.data;n.debug("response data",l),c(B({views:l}))},a=>{n.error("error",a),T(a??C.contactSupport,{variant:"error"})}))},[i]),e.jsxs(v,{sx:{width:"100%",marginTop:"8px"},children:[e.jsx(N,{options:r,value:i,onChange:(a,l)=>{c(A({appDatabase:l??null})),t&&t(!0)},getOptionLabel:a=>p===a?a+" (WordPress database)":a,renderInput:a=>e.jsx(H,{...a,label:"Database *",variant:"outlined"}),sx:{width:"100%"}}),e.jsx(S,{children:"Select a database from the list."})]})},Re=()=>{const t=x(c=>se(c));return n.debug("app",t),t};export{Me as C,ke as a,Ae as b,Re as u};
