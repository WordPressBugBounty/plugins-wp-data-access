import{j as e}from"./cm-1.0.31-BzgG35ZX.js";import{r as m}from"./redux-1.0.31-CuzmJMK6.js";import{ad as ne,B as W,m as ie,n as se,l as X,M as re,v as ae,ae as oe,k as U}from"./cjs-1.0.31-B-_HdexB.js";import{u as le,C as ce,a as J,b as L}from"./ComponentColumn-1.0.31-CsaJiww1.js";import{a as D,u as Z}from"./RestApi-1.0.31-C4KxgDIV.js";import{l as j,N as de,S as pe,M as K,v as ue,bX as he,bY as xe,r as q,Z as T,k as me,b as k}from"./lib-1.0.31-BbX3jq4e.js";import{p as je,q as fe}from"./index-1.0.31-C_6FsHsh.js";import{u as Y}from"./useFormUpdater-1.0.31-DkQqeUhN.js";import{a as z,F as M}from"./FormHelperText-1.0.31-CQcG9a5q.js";import{L as N}from"./Link-1.0.31-ae0Alyop.js";import{B as d}from"./Spinner-1.0.31-Be7r01J6.js";import{I as H,S as V,T as $}from"./TextField-1.0.31-TtMrk-_t.js";import{M as G}from"./MenuItem-1.0.31-CTowyoSp.js";import{T as P}from"./Tooltip-1.0.31-crORCg22.js";import{I as E}from"./iconBase-1.0.31-C37NsRUm.js";import{l as ge,m as be,n as _e}from"./ActionsApp-1.0.31-UHtVyR0L.js";import{e as A}from"./notistack-1.0.31-CuGQWCbt.js";import{T as ye,a as B}from"./ToggleButtonGroup-1.0.31-CFN9Fx2p.js";import{S as Se,a as Ce,b as Te}from"./Stepper-1.0.31-CLZGpluU.js";import{S as we}from"./StepContent-1.0.31-BF2cnxnO.js";import{R as ve,d as Ae,C as Re,c as ke}from"./useTheme-1.0.31-BXg8i2QZ.js";import{b as Me}from"./ConfirmDialog-1.0.31-bZDmgpd0.js";import{P as Ne}from"./PremiumFeature-1.0.31-B1Kns6o6.js";import{T as ze}from"./Typography-1.0.31-BdhCS1KD.js";import"./index-1.0.31-DPuH5k6e.js";import{A as Oe}from"./Accordion-1.0.31-CHSmI5oX.js";import{A as Fe}from"./AccordionSummary-1.0.31-DgKGWjRF.js";import{A as We}from"./AccordionDetails-1.0.31-DX5dPS4j.js";const ee=r=>{const l=D();return m.useCallback((n,x)=>{ge({app_id:n.app.app[0].app_id,cnt_id:n.app.container[0].cnt_id},p=>{var b;const f=p==null?void 0:p.data;if(j.debug("response data",f),Array.isArray(f)){const C=((b=de.getSelectors().selectFormState(pe.getState().forms,r))==null?void 0:b.details)??[];j.debug(C);for(let y=0;y<f.length;y++){const t=K(f[y]);if(t!==null&&t.cnt_id_master===n.app.container[0].cnt_id){const i=C.filter(_=>_.container.cnt_id===f[y].cnt_id);if(i.length===0){const _={appId:ue(),container:f[y]};l(he({appId:r,detail:_}))}else{const w={appId:i[0].appId,container:f[y]};l(xe({appId:r,detail:w}))}}}}else j.error("error loading details",p),x!==void 0&&x()},p=>{j.error("error loading details",p),x!==void 0&&x()})},[r])},qe=r=>{const l=Z(n=>{var x,p;return(p=(x=n.forms[r])==null?void 0:x.form)==null?void 0:p.detailDisplayType});return j.debug("detailDisplayType",l),l},De=()=>{const[r,l]=m.useState(!1);return e.jsxs(z,{component:"div",children:["Only valid SQL. ",r?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(N,{sx:{cursor:"pointer"},underline:"none",onClick:()=>{l(!1)},children:"(hide examples)"})}),e.jsxs("ul",{style:{listStyle:"disc",padding:"0 40px"},children:[e.jsx("li",{children:"first_name like 'Sacha%'"}),e.jsx("li",{children:"product_id = httpPost['my_product_id'] and httpPost['my_product_id'] is not null"}),e.jsx("li",{children:"user_id = @wpda_wp_user_id"}),e.jsx("li",{children:"user_id in (select user_id from wp_usermeta where meta_key = 'wp_capabilities' and meta_value like '%coach%')"}),e.jsx("li",{children:"order_date between date_sub(now(), interval 1 week) and now()"}),e.jsx("li",{children:"status = 'send' and order_date > date_sub(now(), interval 1 week)"})]}),e.jsx("div",{children:e.jsx("strong",{children:"Advanced features:"})}),e.jsxs("ul",{style:{listStyle:"disc",padding:"0 40px",marginBottom:0},children:[e.jsxs("li",{children:["Session variable ",e.jsx("strong",{children:"@wpda_wp_user_id"})," is available to access the WordPress user ID.",e.jsx(N,{href:"https://wpdataaccess.com/docs/variable/wordpress-user-id-in-sql/",target:"_blank",style:{marginLeft:"5px",textDecoration:"none"},children:"(visit documentation page)"})]}),e.jsxs("li",{children:["The functions ",e.jsx("strong",{children:"httpGet"}),", ",e.jsx("strong",{children:"httpPost"})," and ",e.jsx("strong",{children:"httpRequest"})," can be used to access HTTP GET and POST parameters in a query. All functions return null when the requested parameter was not provided. The following condition returns no rows if no parameter was provided:",e.jsx("br",{}),e.jsx(d,{sx:{margin:"5px 20px"},children:e.jsxs("strong",{children:["where product_id = httpPost['my_product_id']",e.jsx("br",{}),"and httpPost['my_product_id'] is not null"]})}),"The condition below returns all rows if no parameter was provided:",e.jsx(d,{sx:{margin:"5px 20px"},children:e.jsxs("strong",{children:["where product_id = httpPost['my_product_id']",e.jsx("br",{}),"and httpPost['my_product_id'] is null"]})})]})]})]}):e.jsx("span",{children:e.jsx(N,{sx:{cursor:"pointer"},underline:"none",onClick:()=>{l(!0)},children:"(show examples)"})})]})},Q=({appId:r,app:l,relationship:n,metaData:x,isRelationTable:p})=>{j.debug(r,l,n,x);const f=D(),b=Y(r),[C,y]=m.useState(n.sql!==void 0&&n.sql!==""),[t,i]=m.useState(p?n.relationJoins.split(",").map(u=>{const c=u.split("=");return{masterColumn:c[0],detailColumn:c[1]??""}}):n.joins.split(",").map(u=>{const c=u.split("=");return{masterColumn:c[0],detailColumn:c[1]??""}}));j.debug("joins",t),m.useEffect(()=>{const u={...n};p?u.relationJoins=t.map(c=>c.masterColumn+"="+c.detailColumn).join(","):u.joins=t.map(c=>c.masterColumn+"="+c.detailColumn).join(","),f(q({property:"relationshipWizard",propertyValue:u})),b(!0)},[t]);const _=p?n.tbl:x.app.container[0].cnt_tbl,w=p?n.cls:x.app.container[0].cnt_cls===void 0||x.app.container[0].cnt_cls===null||x.app.container[0].cnt_cls===""?{}:JSON.parse(x.app.container[0].cnt_cls),O=p?l.appRelationTable:l.appTable,R=p?l.appRelationColumns:l.appColumns;return e.jsxs(d,{children:[...t.map((u,c)=>e.jsxs(d,{sx:{display:"grid",marginTop:"10px"},children:[e.jsxs(d,{sx:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 20px minmax(0, 1fr) auto",alignItems:"center"},children:[e.jsxs(M,{children:[e.jsx(H,{variant:"outlined",children:"master *"}),e.jsxs(V,{MenuProps:{id:"pp-select-menu"},label:"master *",value:u.masterColumn,onChange:h=>{const S=[...t];S[c].masterColumn=h.target.value,i(S),b(!0)},children:[...w.map(h=>h.isSelected?e.jsxs(G,{value:h.columnName,children:[_,".",h.columnName]}):null)]})]}),e.jsx(d,{sx:{textAlign:"center"},children:"="}),e.jsxs(M,{children:[e.jsx(H,{variant:"outlined",children:"detail *"}),e.jsxs(V,{MenuProps:{id:"pp-select-menu"},label:"detail *",value:u.detailColumn,onChange:h=>{const S=[...t];S[c].detailColumn=h.target.value,i(S),b(!0)},children:[...R.map(h=>h.isSelected?e.jsxs(G,{value:h.columnName,children:[O,".",h.columnName]}):null)]})]}),e.jsx(d,{children:c===0?e.jsx(P,{title:"Add condition",children:e.jsx(E,{color:"primary",onClick:()=>{const h=[...t];h.push({masterColumn:"",detailColumn:""}),i(h),b(!0)},children:e.jsx(je,{})})}):e.jsx(P,{title:"Delete condition",children:e.jsx(E,{color:"primary",onClick:()=>{const h=[...t];h.splice(c,1),i(h),b(!0)},children:e.jsx(fe,{})})})})]}),e.jsx(d,{children:e.jsx(M,{children:e.jsx(z,{children:"Updating requires a table reload."})})})]})),e.jsx(d,{sx:{marginTop:"20px"},children:C?e.jsxs(M,{fullWidth:!0,children:[e.jsx($,{fullWidth:!0,label:"Optional conditions",multiline:!0,minRows:1,maxRows:10,value:p?n.relationSql:n.sql,placeholder:"Use this field to add additional conditions to show specific details only or leave blank",onChange:u=>{const c={...n};p?c.relationSql=u.target.value:c.sql=u.target.value,f(q({property:"relationshipWizard",propertyValue:c})),b(!0)}}),e.jsx(De,{})]}):e.jsxs(N,{onClick:()=>y(!0),sx:{textDecoration:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},children:[e.jsx(ne,{}),e.jsx("span",{children:"Add SQL conditions"})]})}),n.cardinality===T.ONE_TO_ONE&&e.jsx(d,{sx:{marginTop:"20px"},children:e.jsx(M,{fullWidth:!0,children:e.jsx(z,{children:"A join for a 1:1 relationship must return exactly one record. An error is shown when a detail query returns more than 1 record."})})})]})},Ie=()=>{const r=Z(l=>l.apps.relationshipWizard);return j.debug("relationship",r),r},Be=({appId:r,metaData:l,isUpdating:n,initialRelationships:x,initialTitle:p,embedded:f,enableWizard:b})=>{const C=D(),y=ee(r),t=le(),i=Ie(),_=Y(r),[w,O]=m.useState(f);j.debug("typeSelected",w),m.useEffect(()=>{const s={...i};s.title=t.appTitle??"",s.dbs=t.appDatabase??"",s.tbl=t.appTable??"",s.cls=t.appColumns,s.relationTbl=t.appRelationTable??"",s.relationCls=t.appRelationColumns,C(q({property:"relationshipWizard",propertyValue:s}))},[t.appDatabase,t.appTable,t.appRelationTable,t.appColumns,t.appRelationColumns,t.appTitle]);const[R,u]=m.useState(""),c=m.useMemo(()=>i.cardinality===T.MANY_TO_MANY?["Relationship title","Select join table","Define join table join condition","Select relation table","Define relation table join condition"]:["Relationship title","Select data source","Define join condition"],[i.cardinality]),[h,S]=m.useState(0),F=s=>{switch(j.debug(s),s){case 0:if(t.appTitle===""||t.appTitle===null||p!==t.appTitle&&x.filter(a=>a.title===t.appTitle).length>0)return u("title"),!1;u("");break;case 1:if(t.appDatabase===""||t.appDatabase===null||t.appTable===""||t.appTable===null||t.appColumns.filter(a=>a.isSelected===!0).length===0)return!1;u("");break;case 2:if(i.joins==="=")return!1;u("");break;case 3:if(t.appRelationColumns.filter(a=>a.isSelected===!0).length===0)return!1;u("");break;case 4:if(i.relationJoins==="=")return!1;u("");break}return!0},v=s=>(j.debug(s),e.jsxs(d,{sx:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyContent:"space-between",alignItems:"center",gap:"5px"},children:[s===0?e.jsx(d,{}):e.jsx(W,{variant:"contained",startIcon:e.jsx(ie,{}),onClick:()=>{S(s-1)},children:"Previous"}),s===2&&i.cardinality!==T.MANY_TO_MANY||s===4&&i.cardinality===T.MANY_TO_MANY?e.jsx(W,{variant:"contained",startIcon:e.jsx(se,{}),onClick:()=>{F(s)&&S(s+1)},children:"Finish"}):e.jsx(W,{variant:"contained",endIcon:e.jsx(X,{}),onClick:()=>{F(s)&&S(s+1)},children:"Next"})]}));return w?e.jsxs(e.Fragment,{children:[e.jsx(Se,{activeStep:h,orientation:"vertical",sx:{marginBottom:0},children:c.map((s,a)=>e.jsxs(Ce,{children:[e.jsx(Te,{children:s}),e.jsx(we,{children:e.jsxs(d,{sx:{display:"grid",gap:"20px",marginTop:"20px"},children:[a===0&&e.jsxs(e.Fragment,{children:[e.jsx($,{type:"text",label:"Title",error:R==="title",value:t.appTitle,fullWidth:!0,required:!0,helperText:"Container title (must be unique witin this form)",autoComplete:"off",onChange:o=>{C(me({property:{appTitle:o.target.value}}));const g={...i};g.title=o.target.value,C(q({property:"relationshipWizard",propertyValue:g})),_(!0)}}),v(a)]}),a===1&&e.jsxs(e.Fragment,{children:[e.jsx(ce,{}),e.jsx(J,{isDetail:!0}),e.jsx(L,{app:t}),v(a)]}),a===2&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{appId:r,app:t,metaData:l,relationship:i}),v(a)]}),i.cardinality===T.MANY_TO_MANY&&a===3&&e.jsxs(e.Fragment,{children:[e.jsx(J,{isDetail:!0,isRelationTable:!0}),e.jsx(L,{app:t,isRelationTable:!0}),v(a)]}),i.cardinality===T.MANY_TO_MANY&&a===4&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{appId:r,app:t,metaData:l,relationship:i,isRelationTable:!0}),v(a)]})]})})]},s))}),h===c.length&&e.jsxs(d,{sx:{marginTop:"20px",display:"grid",gap:"20px"},children:[e.jsx(d,{children:"Relationship wizard successfully completed. Click button below to activate."}),e.jsx(W,{fullWidth:!0,variant:"contained",onClick:()=>{const s={app_id:l.app.container[0].app_id,app_title:i.title,app_dbs:i.dbs,app_tbl:i.tbl,app_cls:i.cls},a={cnt_id_master:l.app.container[0].cnt_id,cardinality:i.cardinality,join_condition:i.joins,sql:i.sql};i.cardinality===T.MANY_TO_MANY&&(a.relation_tbl=i.relationTbl,a.relation_cls=i.relationCls,a.relation_join_condition=i.relationJoins,a.relation_sql=i.relationSql),s.app_relation=JSON.stringify(a),n?(s.app_cnt=t.appCntId,_e(s,o=>{j.debug(o),(o==null?void 0:o.code)==="ok"&&(o==null?void 0:o.message)===""?(b(!1),A("Relationship updated",{variant:"success"}),y(l,()=>{A(k.contactSupport,{variant:"error"})}),_(!1)):A(k.contactSupport,{variant:"error"})},o=>{j.error(o),A(k.contactSupport,{variant:"error"})},!1)):be(s,o=>{j.debug(o),(o==null?void 0:o.code)==="ok"&&(o==null?void 0:o.message)===""?(b(!1),A("Relationship created",{variant:"success"}),y(l,()=>{A(k.contactSupport,{variant:"error"})}),_(!1)):A(k.contactSupport,{variant:"error"})},o=>{j.error(o),A(k.contactSupport,{variant:"error"})},!1)},children:n?"Update relationship":"Create relationship"})]})]}):e.jsx(d,{children:e.jsxs(M,{fullWidth:!0,children:[e.jsxs(ye,{fullWidth:!0,color:"primary",exclusive:!0,value:i.cardinality,onChange:(s,a)=>{if(a!==null){const o={...i};o.cardinality=a,C(q({property:"relationshipWizard",propertyValue:o}))}_(!0),O(!0)},children:[e.jsx(B,{value:T.ONE_TO_ONE,children:"1:1"}),e.jsx(B,{value:T.ONE_TO_MANY,children:"1:m"}),e.jsx(B,{value:T.MANY_TO_MANY,children:"m:m"})]}),e.jsx(z,{children:"Select cardinality."})]})})},Pe=({children:r,appId:l,embedded:n,enableWizard:x})=>{const p=Y(l),f=()=>e.jsxs(d,{children:[e.jsx(d,{sx:{paddingTop:"30px"},children:r}),e.jsx(P,{title:"Close",sx:{position:"absolute",top:0,right:"8px"},children:e.jsx(E,{onClick:()=>{x(!1),p(!1)},children:e.jsx(re,{})})})]});return n?e.jsxs(d,{sx:{marginLeft:"-10px",marginRight:"-10px",position:"relative"},children:[e.jsx(ze,{component:"div",sx:{height:"40px",display:"flex",alignItems:"center",marginBottom:"-10px"},children:"Relationship Wizard"}),f()]}):e.jsx(d,{children:e.jsxs("fieldset",{className:"pp-fieldset",style:{position:"relative"},children:[e.jsx("legend",{children:"Relationship Wizard"}),f()]})})},mt=({appId:r,updateSettings:l})=>{var S;j.debug(r),D(),ve(),qe(r);const n=Ae(r);Re(),ee(r);const[x,p]=m.useState(!1);j.debug("wizardOn",x);const[f,b]=m.useState(!1);j.debug("wizardIsUpdating",f);const[C,y]=m.useState("");j.debug("wizardTitle",C);const t=ke(r);j.debug(t);const[i,_]=m.useState([]);j.debug(i),m.useEffect(()=>{var v,s;const F=[];if(n!==void 0&&n.length>0&&((v=t==null?void 0:t.app)==null?void 0:v.container)!==void 0&&Array.isArray((s=t==null?void 0:t.app)==null?void 0:s.container)){const a=t.app.container[0].cnt_id,o=t.app.container[0].cnt_tbl;for(let g=0;g<n.length;g++){const I=K(n[g].container);if(I!==null&&I.cnt_id_master===a){const te=n[g].appId;F.push({appId:te,dbAppId:n[g].container.app_id,cntId:n[g].container.cnt_id,title:n[g].container.cnt_title,dbs:n[g].container.cnt_dbs,tbl:n[g].container.cnt_tbl,cls:n[g].container.cnt_cls===void 0||n[g].container.cnt_cls===null||n[g].container.cnt_cls===""?{}:JSON.parse(n[g].container.cnt_cls),relation:I,parentTbl:o})}}}_(F)},[r,(S=t==null?void 0:t.app)==null?void 0:S.container,n]),m.useState(""),m.useState(-1);const[w,O]=m.useState(!1);m.useState("");const[R,u]=m.useState(!1),[c,h]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(Oe,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(Fe,{expandIcon:e.jsx(ae,{}),children:"Relationships"}),e.jsxs(We,{children:[e.jsx(d,{sx:{marginBottom:"30px"},children:x?e.jsx(e.Fragment,{children:!f&&e.jsx(Pe,{appId:r,embedded:!1,enableWizard:p,children:e.jsx(Be,{appId:r,embedded:!1,metaData:t,isUpdating:f,enableWizard:p,initialRelationships:i,initialTitle:""})})}):e.jsx(W,{variant:"contained",fullWidth:!0,disabled:!0,startIcon:e.jsx(oe,{}),endIcon:e.jsx(X,{}),onClick:()=>{},children:"Start relationship wizard"})}),!1,e.jsx(e.Fragment,{children:!1}),e.jsxs(z,{component:"div",sx:{marginTop:"30px"},children:[e.jsxs(N,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>u(!R),children:[e.jsx(U,{}),"How to use the relationship wizard?"]}),R&&e.jsxs(d,{sx:{marginTop:"20px",marginBottom:"30px",display:"grid",gap:"20px"},children:[e.jsx(d,{children:"The following relationship types are supported:"}),e.jsxs("ul",{style:{listStyle:"disc",padding:"0 40px"},children:[e.jsx("li",{children:"one to one relationship (1:1)"}),e.jsx("li",{children:"one to many relationship (1:m)"}),e.jsx("li",{children:"many to many relationship (m:m)"})]}),e.jsxs(d,{children:["To add a relationship, click the ",e.jsx("strong",{children:"start relationship wizard"})," button and follow the instructions. Relationships are added to the bottom of the form. Use the display type to define how relationships are displayed (possible values are: ",e.jsx("strong",{children:"Accordion"}),", ",e.jsx("strong",{children:"Tabs"})," or ",e.jsx("strong",{children:"Titles"}),")."]})]})]}),e.jsxs(z,{component:"div",children:[e.jsxs(N,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>h(!c),children:[e.jsx(U,{}),"How to create a multi level master detail form?"]}),c&&e.jsx(d,{sx:{marginTop:"20px",display:"grid",gap:"20px"},children:e.jsxs(d,{children:["Add a ",e.jsx("strong",{children:"relationship"})," to the ",e.jsx("strong",{children:"master table"})," using the ",e.jsx("strong",{children:"relationship wizard"}),". Open the ",e.jsx("strong",{children:"detail table"}),". Open the ",e.jsx("strong",{children:"Table Builder"})," from the ",e.jsx("strong",{children:"detail table"})," or navigate to the ",e.jsx("strong",{children:"detail form"})," to open the ",e.jsx("strong",{children:"Form Builder"}),". The buttons to access the ",e.jsx("strong",{children:"Table Builders"})," and ",e.jsx("strong",{children:"Form Builders"})," are available in the footer. Open the ",e.jsx("strong",{children:"Relationships"})," section and start the ",e.jsx("strong",{children:"relationship wizard"}),"."]})})]}),e.jsx(Ne,{})]})]}),w&&e.jsx(Me,{title:"Delete Relationship?",message:"Are you sure you want to delete this relationship? This action cannot be undone!",open:w,setOpen:O,onConfirm:()=>{}})]})};export{De as D,mt as S,ee as U};
