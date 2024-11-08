import{dn as P,l as n,dp as q,dq as I,dr as O,ds as B,r as h,F as A,j as e,e as T,C,dt as V,du as G,dv as Y,dw as L,dx as E,dy as J,dz as K,dA as Q,dB as X,dC as Z,dD as $,a as U,dE as ee,dF as ae,dG as te,dH as se}from"./main-1.0.18.js";import{u as x,a as k}from"./RestApi-1.0.18-cb72bd79.js";import{h as ne,d as W,e as _}from"./ActionsExplorer-1.0.18-ae07c36b.js";import{F as v,a as w}from"./FormHelperText-1.0.18-8b4ce85f.js";import{A as N}from"./Autocomplete-1.0.18-a264f80a.js";import{T as H}from"./TextField-1.0.18-cf148b4e.js";import{w as re,z as oe,k as M}from"./index.esm-1.0.18-12f13c4a.js";import{A as le}from"./AdminTheme-1.0.18-73e13a4f.js";import{k as ie}from"./ActionsApp-1.0.18-0ab2bedd.js";import{B as j,S as ce}from"./Spinner-1.0.18-de8df990.js";import{P as de,I as ue}from"./iconBase-1.0.18-3c21f5e2.js";import{F as pe}from"./FormLabel-1.0.18-47dbe87d.js";import{F as me}from"./FormControlLabel-1.0.18-2840e084.js";import{C as be}from"./Checkbox-1.0.18-3ed60478.js";import{T as he}from"./Tooltip-1.0.18-5f32f0fd.js";import{L as R}from"./Link-1.0.18-41cc6055.js";const Be=()=>{const t=x(c=>P(c));return n.debug("app",t),t},Le=({setIsUpdated:t})=>{const c=k(),r=x(a=>q(a));n.debug("databases",r);const p=x(a=>I(a));n.debug("wpDatabase",p);const m=x(a=>O(a));n.debug("defaultDatabase",m);const i=x(a=>B(a));n.debug("appDatabase",i),h.useEffect(()=>{r.length===0?ne(function(a){const o=a==null?void 0:a.data;n.debug("response data",o);const s=[];let l="",D="";o.map(u=>{var y;n.debug(u),(u==null?void 0:u.dbs)!==void 0&&(s.push(u.dbs),((y=u==null?void 0:u.dbs_type)==null?void 0:y.toLocaleLowerCase())==="wp"&&(l=u.dbs,D=u.dbs))}),s.sort((u,y)=>u.localeCompare(y,void 0,{sensitivity:"base"})),c(V({databases:s})),c(G({wpDatabase:l})),c(Y({defaultDatabase:D})),i===null&&c(A({appDatabase:D})),n.debug(s,l,D)},a=>{n.error("error",a),T(a??C.contactSupport,{variant:"error"})}):i===null&&c(A({appDatabase:m}))},[]);const g=h.useRef(!0);return h.useEffect(()=>{g.current?g.current=!1:i!==null&&r.includes(i)&&(W(i,function(a){const o=a==null?void 0:a.data;n.debug("response data",o),c(L({tables:o}))},a=>{n.error("error",a),T(a??C.contactSupport,{variant:"error"})}),_(i,function(a){const o=a==null?void 0:a.data;n.debug("response data",o),c(E({views:o}))},a=>{n.error("error",a),T(a??C.contactSupport,{variant:"error"})}))},[i]),e.jsxs(v,{sx:{width:"100%",marginTop:"8px"},children:[e.jsx(N,{options:r,value:i,onChange:(a,o)=>{c(A({appDatabase:o??null})),t&&t(!0)},getOptionLabel:a=>p===a?a+" (WordPress database)":a,renderInput:a=>e.jsx(H,{...a,label:"Database *",variant:"outlined"}),sx:{width:"100%"}}),e.jsx(w,{children:"Select a database from the list."})]})},Ee=({setIsUpdated:t,isDetail:c,isRelationTable:r})=>{const p=k(),m=x(s=>B(s));n.debug("appDatabase",m);const i=x(s=>J(s));n.debug("tables",i);const g=x(s=>K(s));n.debug("views",g);const a=x(s=>Q(s));n.debug("appTable",a);const o=x(s=>X(s));return n.debug("appRelationTable",o),h.useEffect(()=>{m!==null&&(i.length===0||g.length===0)&&(W(m,function(s){const l=s==null?void 0:s.data;n.debug("response data",l),p(L({tables:l}))},s=>{n.error("error",s),T(s??C.contactSupport,{variant:"error"})}),_(m,function(s){const l=s==null?void 0:s.data;n.debug("response data",l),p(E({views:l}))},s=>{n.error("error",s),T(s??C.contactSupport,{variant:"error"})}))},[m]),e.jsxs(v,{sx:{width:"100%",marginTop:"8px"},children:[e.jsx(N,{options:m!==null?i.concat(g).sort():[],value:r?o:a,onChange:(s,l)=>{p(r?Z({appRelationTable:l??null}):$({appTable:l??null})),t&&t(!0)},renderInput:s=>e.jsx(H,{...s,label:"Table *",variant:"outlined"}),sx:{width:"100%"}}),e.jsxs(w,{children:["Select a table from the list",c===void 0&&e.jsx(e.Fragment,{children:" (additional tables can be added in the Table and Form Builders)"}),"."]})]})},We=({app:t,setIsUpdated:c,isRelationTable:r})=>{n.debug(t,r);const p=k(),[m,i]=h.useState(!1),g=h.useRef(!0);h.useEffect(()=>{g.current?g.current=!1:a()},[t.appDatabase,t.appTable,t.appRelationTable,p]);const a=()=>{t.appDatabase!==null&&(!r&&t.appTable!==null||r&&t.appRelationTable!==null)&&(i(!0),ie(t.appDatabase,r?t.appRelationTable??"":t.appTable??"",!1,function(d){const f=d==null?void 0:d.data;if(n.debug("response data",t.appDatabase,r?t.appRelationTable:t.appTable,f),!f.columns)T(C.contactSupport,{variant:"error"});else{const b=[];f.columns.map(S=>{S.column_name!==void 0&&b.push({columnName:S.column_name,isSelected:!0})}),p(r?te({appRelationColumns:b}):se({appColumns:b,appMetaData:f}))}i(!1)},d=>{n.error("error",d),T(d??C.contactSupport,{variant:"error"}),i(!1)}))},[o,s]=h.useState(!1);n.debug("hasErrors",o);const l=r?t.appRelationColumns:t.appColumns;n.debug("columns",l);const[D,u]=h.useState(!1),[y,z]=h.useState(!1);return h.useEffect(()=>{Number(t.appType)!==U.DATATABLE&&t.appMetaData.primary_key!==void 0?s(t.appMetaData.primary_key.length===0||t.appMetaData.primary_key.filter(d=>l.filter(b=>b.isSelected).map(b=>b.isSelected?b.columnName:!1).includes(d)).length!==t.appMetaData.primary_key.length):s(!1)},[t,l]),e.jsxs(j,{sx:{position:"relative"},children:[e.jsxs(v,{fullWidth:!0,children:[e.jsxs(j,{component:"fieldset",sx:{borderWidth:1,borderRadius:"4px","& .MuiPaper-root":{border:"none",padding:"15px 20px"},"& .MuiFormHelperText-root":{marginLeft:"20px",marginBottom:"20px"}},children:[e.jsx("legend",{style:{fontSize:"0.75rem",fontWeight:400,color:"rgba(0, 0, 0, 0.6)"},children:"Select columns *"}),e.jsx(de,{variant:"outlined",sx:{padding:"15px 30px"},children:m?e.jsxs(j,{sx:{"& div":{display:"block"}},children:[e.jsx(ce,{}),e.jsx("span",{})]}):e.jsxs(e.Fragment,{children:[l.length===0&&e.jsx(v,{fullWidth:!0,sx:{margin:"5px 0"},children:e.jsx(pe,{sx:{color:"inherit"},children:"No table selected"})}),...l.map((d,f)=>{var b;return e.jsx(me,{control:e.jsx(be,{checked:d.isSelected,onChange:(S,F)=>{p(r?ee({appRelationColumns:[...t.appRelationColumns.slice(0,f),{columnName:d.columnName,isSelected:F},...t.appRelationColumns.slice(f+1)]}):ae({appColumns:[...t.appColumns.slice(0,f),{columnName:d.columnName,isSelected:F},...t.appColumns.slice(f+1)]})),c&&c(!0)}}),label:e.jsx(j,{sx:{color:o&&t.appMetaData.primary_key.includes(d.columnName)?(b=le)==null?void 0:b.palette.error.main:""},children:d.columnName+(o&&t.appMetaData.primary_key.includes(d.columnName)?" (primary key column)":"")}),sx:{width:"100%"}})})]})})]}),e.jsx(w,{children:"Only selected columns are available in tables and forms. Unselected columns are excluded from responses. At least one column must be selected."}),!m&&t.appDatabase!==null&&(!r&&t.appTable!==null||!r&&t.appRelationTable!==null)&&o&&e.jsxs(w,{error:!0,sx:{marginTop:"20px",width:"fit-content",display:"inline-grid",gridTemplateColumns:"40px auto",justifyContent:"space-around",alignItems:"center"},children:[e.jsx(re,{size:"24px"}),e.jsx("span",{children:t.appMetaData.primary_key.length===0?e.jsx(e.Fragment,{children:"This table contains no primary key. Transactions are not supported for tables without a primary key. Please create a primary key to continue or select app type Data Table in the app info tab."}):e.jsx(e.Fragment,{children:"Transactions require all primary key columns to be selected. With the current settings transactions will be disabled."})})]})]}),e.jsx(j,{sx:{position:"absolute",top:"15px",right:"10px"},children:e.jsx(he,{title:"Refresh column list",children:e.jsx(ue,{onClick:()=>{a()},children:e.jsx(oe,{})})})}),e.jsx(v,{fullWidth:!0,children:e.jsxs(w,{component:"div",sx:{marginTop:"20px",marginLeft:0},children:[e.jsxs(R,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex",marginBottom:0,"& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>u(!D),children:[e.jsx(M,{}),"Which columns should be included | excluded?"]}),D&&e.jsx(j,{sx:{marginTop:"20px",marginBottom:"25px"},children:"In most cases, you can simply select all columns. You can hide specific columns later in the Table Builder and Form Builder. Only if your table contains columns with sensitive data that you absolutely do not want to share with anyone, should you deselect them here. This ensures that the contents of these columns will not be included in server responses, maintaining their privacy."})]})}),e.jsx(v,{fullWidth:!0,children:e.jsxs(w,{component:"div",sx:{marginTop:0,marginBottom:"10px",marginLeft:0},children:[e.jsxs(R,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>z(!y),children:[e.jsx(M,{}),"What to do when a table structure changes?"]}),y&&e.jsx(j,{sx:{marginTop:"20px"},children:"Click the refresh icon and save the new structure. Proceed to use the Table Builder and Form Builder sequentially to apply the updated structure."})]})})]})};export{Le as C,Ee as a,We as b,Be as u};
