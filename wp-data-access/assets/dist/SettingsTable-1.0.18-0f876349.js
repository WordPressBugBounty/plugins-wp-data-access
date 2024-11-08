import{r as B,j as e,b0 as H,cP as J,b1 as te,l as h,d5 as ie,cZ as q,c_ as M,ac as Y,b8 as S,cY as F,d6 as ee,d7 as Z,H as I,C as ce}from"./main-1.0.18.js";import{a as le}from"./RestApi-1.0.18-cb72bd79.js";import{u as ue}from"./useStoreTable-1.0.18-8a593f98.js";import{v as y,k as z,f as pe}from"./index.esm-1.0.18-12f13c4a.js";import{u as de}from"./useTableUpdater-1.0.18-089ef7f9.js";import{c as he}from"./index-1.0.18-bd94b546.js";import{A as k,a as T}from"./AccordionSummary-1.0.18-f9e114cf.js";import{A}from"./AccordionDetails-1.0.18-2900e110.js";import{F as a,a as p}from"./FormHelperText-1.0.18-8b4ce85f.js";import{R as X}from"./RadioGroup-1.0.18-4960e4a8.js";import{F as t}from"./FormControlLabel-1.0.18-2840e084.js";import{R as O}from"./Radio-1.0.18-210e4079.js";import{S as x}from"./Switch-1.0.18-cbb6329b.js";import{B as v}from"./Spinner-1.0.18-de8df990.js";import{L as _}from"./Link-1.0.18-41cc6055.js";import{D as xe,U as je,S as me}from"./SettingsFormRelationships-1.0.18-d863356f.js";import{T as K,S as se}from"./TextField-1.0.18-cf148b4e.js";import{h as fe,i as ge}from"./index.esm-1.0.18-32f5cee0.js";import{M as G}from"./MenuItem-1.0.18-0088f2a2.js";import{I as be}from"./iconBase-1.0.18-3c21f5e2.js";import{M as we}from"./Menu-1.0.18-e8cb0649.js";import{u as ve}from"./useFormStore-1.0.18-a2e1b6cf.js";import{P as $}from"./PremiumFeature-1.0.18-2f6283b7.js";import{A as Ce}from"./AdminTheme-1.0.18-73e13a4f.js";import{C as Q}from"./CssUnitTextField-1.0.18-6aa39ec4.js";import{T as ae,a as N}from"./ToggleButtonGroup-1.0.18-02ae4565.js";import{L as Ee}from"./ListItem-1.0.18-e1cfc559.js";import{C as ye}from"./Autocomplete-1.0.18-a264f80a.js";import{T as re}from"./Tooltip-1.0.18-5f32f0fd.js";import{B as ne}from"./CardContent-1.0.18-3d5e5525.js";import"./Typography-1.0.18-dc3c0740.js";import"./index-1.0.18-ff546563.js";import"./useSlot-1.0.18-71f9e7ae.js";import"./useControlled-1.0.18-12a74006.js";import"./Collapse-1.0.18-8e581380.js";import"./useFormControl-1.0.18-87a8487d.js";import"./createStyled-1.0.18-b238c9ff.js";import"./SwitchBase-1.0.18-e2aa3211.js";import"./createSvgIcon-1.0.18-dcf0276e.js";import"./Modal-1.0.18-870f459d.js";import"./ComponentColumn-1.0.18-5c48b102.js";import"./ActionsExplorer-1.0.18-ae07c36b.js";import"./ActionsApp-1.0.18-0ab2bedd.js";import"./FormLabel-1.0.18-47dbe87d.js";import"./Checkbox-1.0.18-3ed60478.js";import"./useFormUpdates-1.0.18-2d7a3227.js";import"./FallbackSpinner-1.0.18-e10446f4.js";import"./Stepper-1.0.18-05ecefbc.js";import"./StepContent-1.0.18-147bdc81.js";import"./useTheme-1.0.18-c1f3f722.js";import"./colorManipulator-1.0.18-95bf61ec.js";import"./ConfirmDialog-1.0.18-eb1f3988.js";import"./DialogContent-1.0.18-5570cba4.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Popover-1.0.18-54868205.js";import"./Grow-1.0.18-4ebc2ce8.js";import"./Close-1.0.18-d90e9fa7.js";import"./Popper-1.0.18-20544c9b.js";const ke=({appId:r,tableSettings:n,metaData:s,updateTableSettings:c})=>{var l,j,L,R,W,D;const i=le(),o=de(r),d=(P,U)=>{const V=he(n);V.largeTableSupport.saved=P,V.largeTableSupport.actual=U,h.debug(V),i(ie({appId:r,tableSettings:V})),o(!0)},[m,g]=B.useState(!1),[C,b]=B.useState(!1),u=((l=s==null?void 0:s.src)==null?void 0:l.dbs)??((L=(j=s==null?void 0:s.app)==null?void 0:j.container[0])==null?void 0:L.cnt_dbs)??"DATABASE",f=((R=s==null?void 0:s.src)==null?void 0:R.tbl)??((D=(W=s==null?void 0:s.app)==null?void 0:W.container[0])==null?void 0:D.cnt_tbl)??"TABLE";return e.jsxs(k,{disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Large table support"}),e.jsxs(A,{children:[e.jsx(a,{children:e.jsxs(X,{sx:{flexDirection:"column"},children:[e.jsx(t,{control:e.jsx(O,{checked:(n==null?void 0:n.largeTableSupport.saved)===H.DISABLED,onChange:P=>{d(H.DISABLED,J.DISABLED),P.stopPropagation()}}),value:"disable",label:"Disable large table support"},"disable"),e.jsx(t,{control:e.jsx(O,{checked:(n==null?void 0:n.largeTableSupport.saved)===H.ENABLED,onChange:P=>{d(H.ENABLED,J.ENABLED),P.stopPropagation()}}),value:"enable",label:"Enable large table support"},"enable"),e.jsx(t,{control:e.jsx(O,{checked:(n==null?void 0:n.largeTableSupport.saved)===H.AUTO,onChange:P=>{const U=te(s);d(H.AUTO,U),P.stopPropagation()}}),value:"auto",label:"Let the server decide (default)"},"auto")]})}),n.largeTableSupport.saved===H.ENABLED&&e.jsxs("fieldset",{className:"pp-fieldset",style:{marginTop:"20px",marginBottom:"40px",padding:"20px"},children:[e.jsx("legend",{children:"Additional settings"}),e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{checked:n.largeTableSupport.skipCount,onChange:(P,U)=>{c("largeTableSupport.skipCount",U),P.stopPropagation()}}),label:"Skip row count on filter updates"}),e.jsx(p,{children:"Skips all SQL count statements. Can boost performance for large tables dramatically. Results in a poorer user feedback."})]})]}),e.jsxs(p,{component:"div",sx:{marginTop:"20px","& ul":{margin:0,padding:"0 0 0 20px"}},children:[e.jsx(v,{children:e.jsxs(_,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>g(!m),children:[e.jsx(z,{}),"What does large table support do?"]})}),m&&e.jsxs("ul",{style:{marginTop:"20px",marginBottom:"30px",listStyle:"disc",padding:"0 40px"},children:[e.jsx("li",{children:"Enables row count estimation"}),e.jsx("li",{children:"Requires the user to press enter on search"}),e.jsx("li",{children:"Sets pagination to compact"}),e.jsx("li",{children:"Removes the last page pagination button"}),e.jsx("li",{children:"Reduces network traffic and server load"})]})]}),e.jsxs(p,{component:"div",sx:{marginBottom:"10px","& ul":{margin:0,padding:"0 0 0 20px"}},children:[e.jsx(v,{children:e.jsxs(_,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>b(!C),children:[e.jsx(z,{}),"Experiencing a slow initial table load? Follow stese steps to improve performance..."]})}),C&&e.jsxs("ol",{style:{marginTop:"20px",marginBottom:"30px",padding:"0 40px"},children:[e.jsxs("li",{children:["Start the ",e.jsx("strong",{children:"Query Builder"})]}),e.jsxs("li",{children:["Select database ",e.jsx("strong",{children:u})]}),e.jsxs("li",{children:["Enter ",e.jsxs("strong",{children:["ANALYZE TABLE ",f]})]}),e.jsx("li",{children:"Press the Execute button"})]})]}),e.jsx(p,{children:"Please reload the table or page after adjusting large table support settings to ensure the correct row count is applied."})]})]})},Te=({tableSettings:r,updateTableSettings:n})=>{var s,c;return e.jsxs(k,{disableGutters:!0,defaultExpanded:!1,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Responsiveness"}),e.jsx(A,{children:e.jsxs(a,{children:[e.jsxs(X,{sx:{flexDirection:"row"},children:[e.jsx(t,{control:e.jsx(O,{checked:((s=r==null?void 0:r.design)==null?void 0:s.overflow)===q.RESPONSIVE,onChange:i=>{n("design.overflow",q.RESPONSIVE),i.stopPropagation()}}),value:"responsive",label:"Auto column hiding"},"responsive"),e.jsx(t,{control:e.jsx(O,{checked:((c=r==null?void 0:r.design)==null?void 0:c.overflow)!==q.RESPONSIVE,onChange:i=>{n("design.overflow",q.SCROLL),i.stopPropagation()}}),value:"scroll",label:"Horizontal scrollbar"},"scroll")]}),e.jsx(p,{children:"Behaviour when table content overflows available space."})]})})]})},Ae=({tableSettings:r,updateTableSettings:n})=>e.jsxs(k,{disableGutters:!0,defaultExpanded:!1,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Density"}),e.jsxs(A,{children:[e.jsxs(a,{children:[e.jsxs(X,{sx:{display:"grid",gridTemplateColumns:"auto auto auto",alignItems:"center"},children:[e.jsx(t,{control:e.jsx(O,{checked:(r==null?void 0:r.design.density.default)===M.COMPACT,onChange:s=>{n("design.density.default",M.COMPACT),s.stopPropagation()}}),value:"compact",label:"Compact"},"compact"),e.jsx(t,{control:e.jsx(O,{checked:(r==null?void 0:r.design.density.default)===M.COMFORTABLE,onChange:s=>{n("design.density.default",M.COMFORTABLE),s.stopPropagation()}}),value:"comfortable",label:"Comfortable"},"comfortable"),e.jsx(t,{control:e.jsx(O,{checked:(r==null?void 0:r.design.density.default)===M.SPACIOUS,onChange:s=>{n("design.density.default",M.SPACIOUS),s.stopPropagation()}}),value:"spacious",label:"Spacious"},"spacious")]}),e.jsx(p,{children:"Default spacing on page load."})]}),e.jsx(a,{fullWidth:!0,sx:{marginTop:"20px"},children:e.jsx(t,{control:e.jsx(x,{checked:r==null?void 0:r.design.density.userCanChange,onChange:(s,c)=>{n("design.density.userCanChange",c),s.stopPropagation()}}),label:"Allow user to change density"})})]})]}),Pe=({hasPrimaryKey:r,tableSettings:n,metaData:s,updateTableSettings:c})=>{var d,m,g,C,b,u,f;h.debug(r,n,s);const[i,o]=B.useState(!1);return e.jsxs(k,{disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Row actions"}),e.jsxs(A,{children:[e.jsxs(v,{sx:{display:"grid"},children:[e.jsxs(a,{children:[e.jsx(t,{control:e.jsx(x,{disabled:!((d=s==null?void 0:s.privs)!=null&&d.insert)||!r,checked:(m=n==null?void 0:n.transactions)==null?void 0:m.insert,onChange:(l,j)=>{c("transactions.insert",j),l.stopPropagation()}}),label:"Allow insert"}),e.jsx(p,{children:"Adds an insert button to the table toolbar."})]}),e.jsxs(a,{children:[e.jsx(t,{control:e.jsx(x,{checked:n==null?void 0:n.viewLink,onChange:(l,j)=>{c("viewLink",j),l.stopPropagation()}}),label:"Allow viewing"}),e.jsx(p,{children:"Adds a view icon to each row."})]}),e.jsxs(v,{sx:{display:"grid",gridTemplateColumns:"auto auto",alignItems:"center"},children:[e.jsx(a,{children:e.jsx(t,{control:e.jsx(x,{checked:n==null?void 0:n.detailLink,disabled:((g=n==null?void 0:n.design)==null?void 0:g.overflow)!==q.RESPONSIVE,onChange:(l,j)=>{c("detailLink",j),l.stopPropagation()}}),label:"Allow detail panel viewing"})}),e.jsx(a,{children:e.jsx(t,{control:e.jsx(x,{checked:!1,disabled:!0,onChange:(l,j)=>{c("detailPdf",j),l.stopPropagation()}}),label:"Add PDF export icon"})})]}),e.jsx(a,{children:e.jsxs(p,{children:["Adds an expand icon to each row, allowing users to view columns in a detail panel. This feature only functions when responsiveness is set to auto column hiding.",e.jsx(e.Fragment,{children:"The PDF export is a premium feature."})]})}),e.jsxs(a,{children:[e.jsx(t,{control:e.jsx(x,{disabled:!((C=s==null?void 0:s.privs)!=null&&C.update)||!r,checked:(b=n==null?void 0:n.transactions)==null?void 0:b.update,onChange:(l,j)=>{c("transactions.update",j),l.stopPropagation()}}),label:"Allow update"}),e.jsx(p,{children:"Adds an update icon to each table row."})]}),e.jsxs(a,{children:[e.jsx(t,{control:e.jsx(x,{disabled:!((u=s==null?void 0:s.privs)!=null&&u.delete)||!r,checked:(f=n==null?void 0:n.transactions)==null?void 0:f.delete,onChange:(l,j)=>{c("transactions.delete",j),l.stopPropagation()}}),label:"Allow delete"}),e.jsx(p,{children:"Adds a delete icon to each table row."})]})]}),e.jsxs(p,{component:"div",sx:{marginTop:"30px"},children:[e.jsxs(_,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>o(!i),children:[e.jsx(z,{}),"What are row actions?"]}),i&&e.jsxs(v,{sx:{marginTop:"20px"},children:["Row actions enable users to perform specific actions on individual rows. The ",e.jsx("strong",{children:"view"})," action is always available. To perform transactions such as ",e.jsx("strong",{children:"insert"}),", ",e.jsx("strong",{children:"update"}),", and ",e.jsx("strong",{children:"delete"}),", the server requires a valid primary key. If these actions are not selectable, ensure that your table has a primary key defined. Note that transactions are not available for views."]})]})]})]})},Be=({appId:r,tableSettings:n,metaData:s,updateTableSettings:c})=>{var d,m,g,C,b,u;const[i,o]=B.useState(!1);return e.jsxs(k,{disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Bulk actions"}),e.jsxs(A,{children:[e.jsxs(v,{sx:{display:"grid"},children:[e.jsx(a,{children:e.jsx(t,{control:e.jsx(x,{checked:!1,disabled:!0,onChange:(f,l)=>{f.stopPropagation()}}),label:"Export to PDF (premium feature)"})}),e.jsx(a,{children:e.jsx(t,{control:e.jsx(x,{checked:(d=n==null?void 0:n.bulkActions)==null?void 0:d.csv,onChange:(f,l)=>{c("bulkActions.csv",l),f.stopPropagation()}}),label:"Export to CSV"})}),e.jsx(a,{children:e.jsx(t,{control:e.jsx(x,{checked:(m=n==null?void 0:n.bulkActions)==null?void 0:m.json,onChange:(f,l)=>{c("bulkActions.json",l),f.stopPropagation()}}),label:"Export to JSON"})}),e.jsx(a,{children:e.jsx(t,{control:e.jsx(x,{checked:!1,disabled:!0,onChange:(f,l)=>{f.stopPropagation()}}),label:"Export to Excel (premium feature)"})}),e.jsx(a,{children:e.jsx(t,{control:e.jsx(x,{checked:(g=n==null?void 0:n.bulkActions)==null?void 0:g.xml,onChange:(f,l)=>{c("bulkActions.xml",l),f.stopPropagation()}}),label:"Export to XML"})}),e.jsx(a,{children:e.jsx(t,{control:e.jsx(x,{checked:!Y(r)&&!S(s)&&((C=n==null?void 0:n.bulkActions)==null?void 0:C.sql),disabled:Y(r)||S(s),onChange:(f,l)=>{Y(r)||c("bulkActions.sql",l),f.stopPropagation()}}),label:"Export to SQL"})}),e.jsx(a,{children:e.jsx(t,{control:e.jsx(x,{checked:(b=n==null?void 0:n.bulkActions)==null?void 0:b.delete,disabled:!((u=s==null?void 0:s.privs)!=null&&u.delete),onChange:(f,l)=>{c("bulkActions.delete",l),f.stopPropagation()}}),label:"Delete"})}),e.jsx(a,{children:e.jsx(p,{children:"Added to BULK ACTIONS button."})})]}),e.jsxs(p,{component:"div",sx:{marginTop:"30px"},children:[e.jsxs(_,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>o(!i),children:[e.jsx(z,{}),"What are bulk actions?"]}),i&&e.jsx(v,{sx:{marginTop:"20px"},children:"Bulk actions allow users to perform tasks on multiple rows simultaneously. Enabling this feature requires selecting at least one bulk action. Once enabled, row selection is added to the table, and a bulk actions button is included in the toolbar."})]})]})]})},Le=({tableSettings:r,updateTableSettings:n})=>e.jsxs(k,{disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Default where"}),e.jsx(A,{children:e.jsxs(a,{fullWidth:!0,children:[e.jsx(K,{value:r==null?void 0:r.defaultWhere,multiline:!0,fullWidth:!0,minRows:5,variant:"outlined",onClick:s=>{s.stopPropagation()},onChange:s=>{n("defaultWhere",s.target.value)}}),e.jsx(xe,{})]})})]}),oe=({tableColumns:r,orderByColumn:n,addActions:s,enableAddAction:c,onUpdate:i,onActions:o})=>{h.debug(r,n,s,c);const[d,m]=B.useState(null),g=!!d,C=u=>{m(u.currentTarget),u.stopPropagation()},b=()=>{m(null)};return e.jsxs(v,{sx:{display:"grid",gridTemplateColumns:s?"auto 100px 50px":"auto 100px",gridGap:"5px",marginBottom:"5px"},children:[e.jsxs(se,{MenuProps:{id:"pp-select-menu"},value:n.columnName,onChange:u=>{i({...n,columnName:u.target.value})},children:[e.jsx(G,{value:"",children:" "}),...r.map(u=>u.computedField!==void 0?null:e.jsx(G,{value:u.columnName,children:u.columnName}))]}),e.jsxs(se,{MenuProps:{id:"pp-select-menu"},value:n.order,onChange:u=>{i({...n,order:u.target.value==="desc"?"desc":"asc"})},children:[e.jsx(G,{value:"asc",children:"Asc"}),e.jsx(G,{value:"desc",children:"Desc"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsx(be,{color:"primary",onClick:C,children:e.jsx(pe,{})}),e.jsxs(we,{anchorEl:d,open:g,onClose:b,sx:{zIndex:9999999999},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[c&&e.jsxs(G,{onClick:()=>{o("add"),b()},children:[e.jsx(fe,{}),e.jsx("span",{style:{marginLeft:"10px"},children:"Add column"})]}),e.jsxs(G,{onClick:()=>{o("delete"),b()},children:[e.jsx(ge,{}),e.jsx("span",{style:{marginLeft:"10px"},children:"Delete column"})]})]})]})]})},Fe=({tableSettings:r,tableColumns:n,updateTableSettings:s})=>{const[c,i]=B.useState(r.defaultOrderBy.length===0);return e.jsxs(k,{disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Default order by"}),e.jsxs(A,{children:[Array.isArray(r.defaultOrderBy)&&e.jsxs(e.Fragment,{children:[...r.defaultOrderBy.map((o,d)=>e.jsx(oe,{tableColumns:n,orderByColumn:r.defaultOrderBy[d],addActions:!0,enableAddAction:r.defaultOrderBy.length===d+1&&!c,onUpdate:m=>{const g=[...r.defaultOrderBy];g[d]=m,s("defaultOrderBy",g)},onActions:m=>{if(m==="add")i(!0);else if(m==="delete"){const g=[...r.defaultOrderBy];g.splice(d,1),s("defaultOrderBy",g),i(g.length===0)}}},d))]}),c&&e.jsx(oe,{tableColumns:n,orderByColumn:{columnName:"",order:"asc"},addActions:r.defaultOrderBy.length>0,enableAddAction:!1,onUpdate:o=>{const d=[...r.defaultOrderBy];d.push({columnName:o.columnName,order:o.order}),s("defaultOrderBy",d),i(!1)},onActions:o=>{o==="delete"&&i(!1)}}),e.jsx(a,{fullWidth:!0,children:e.jsx(p,{children:"Defines the default ordering. The user can change the default ordering if sorting is enabled for one or more columns."})})]})]})},Oe=({tableStore:r,updateTableSettings:n})=>{var C,b,u,f,l,j,L,R,W,D,P,U,V;const s=r.table,i=r.state.masterDetailConditions!==void 0,[o,d]=B.useState(!1),[m,g]=B.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(k,{disableGutters:!0,defaultExpanded:!1,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Global filter"}),e.jsxs(A,{children:[e.jsxs(v,{children:[e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{checked:(C=s==null?void 0:s.searchSettings)==null?void 0:C.enableGlobalSearch,disabled:!0,onChange:(w,E)=>{h.debug(E),w.stopPropagation()}}),label:"Enable global filter"}),e.jsx(p,{children:"Adds a search box to the table header."})]}),e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{checked:(b=s==null?void 0:s.searchSettings)==null?void 0:b.forceSearch,disabled:!0,onChange:(w,E)=>{h.debug(E),w.stopPropagation()}}),label:"Show empty table on startup"}),e.jsx(p,{children:"Forces user to perform a search on page load."})]}),e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{checked:(u=s==null?void 0:s.searchSettings)==null?void 0:u.highlightMatches,disabled:!0,onChange:(w,E)=>{h.debug(E),w.stopPropagation()}}),label:"Highlight matches"}),e.jsx(p,{children:"Filter match highlighting."})]})]}),e.jsxs(p,{component:"div",sx:{marginTop:"30px"},children:[e.jsxs(_,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>d(!o),children:[e.jsx(z,{}),"What is a global filter?"]}),o&&e.jsx(v,{sx:{marginTop:"20px"},children:"The global filter enables users to perform wildcard searches across all searchable columns. It can be disabled entirely or selectively for specific columns. To disable the global filter for specific columns, navigate to the Table Builder's columns menu and deselect the searchable option."})]}),e.jsx($,{single:!1})]})]}),e.jsxs(k,{disableGutters:!0,defaultExpanded:!1,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Column filters"}),e.jsxs(A,{children:[e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{checked:(f=s==null?void 0:s.searchSettings)==null?void 0:f.searchForm,disabled:!0,onChange:(w,E)=>{h.debug(E),w.stopPropagation()}}),label:"Enable column filters"}),e.jsx(p,{children:"Disable to hide all column filters."})]}),((l=s==null?void 0:s.searchSettings)==null?void 0:l.searchForm)===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{checked:((j=s==null?void 0:s.searchSettings)==null?void 0:j.searchFormAlwaysOpen)||((L=s==null?void 0:s.searchSettings)==null?void 0:L.forceInline),disabled:!0,onChange:(w,E)=>{h.debug(E),w.stopPropagation()}}),label:"Show column filters on startup"}),e.jsx(p,{children:"Effective after next page load."})]}),e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{checked:(R=s==null?void 0:s.searchSettings)==null?void 0:R.searchFormAlwaysOpen,disabled:!0,onChange:(w,E)=>{h.debug(E),w.stopPropagation()}}),label:"Always show column filters"}),e.jsx(p,{children:"Disables the user's possibility to toggle column filtering."})]}),e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{checked:(W=s==null?void 0:s.searchSettings)==null?void 0:W.cascade,disabled:!0,onChange:(w,E)=>{h.debug(E),w.stopPropagation()}}),label:"Cascade drop-down lists"}),e.jsxs(p,{children:["Updates drop-down lists on search changes. ",e.jsx("span",{style:{...((D=s==null?void 0:s.searchSettings)==null?void 0:D.cascade)===!0&&{color:((U=(P=Ce)==null?void 0:P.palette)==null?void 0:U.error.main)??"red"}},children:"Enabling this feature may negatively impact performance, increase server load, and generate additional network traffic."})]})]}),e.jsx(v,{sx:{marginTop:"20px"},children:e.jsxs(a,{fullWidth:!0,children:[e.jsxs(ae,{fullWidth:!0,color:"primary",exclusive:!0,value:i?F.HEADER:(V=s==null?void 0:s.searchSettings)==null?void 0:V.searchFormPosition,onChange:(w,E)=>{w.stopPropagation()},children:[e.jsx(N,{value:F.TOP,disabled:i,children:"Above"},F.TOP),e.jsx(N,{value:F.RIGHT,disabled:i,children:"Right"},F.RIGHT),e.jsx(N,{value:F.BOTTOM,disabled:i,children:"Below"},F.BOTTOM),e.jsx(N,{value:F.LEFT,disabled:i,children:"Left"},F.LEFT),e.jsx(N,{value:F.HEADER,children:"Header"},F.HEADER)]}),e.jsx(p,{children:"Position of the column filters relative to the data table."})]})}),e.jsxs(v,{sx:{marginTop:"30px","& .MuiFormControl-root":{width:"100%"}},children:[e.jsx(Q,{label:"Column filters width",textField:{cssValue:s==null?void 0:s.searchSettings.searchFormWidth,cssUnit:s==null?void 0:s.searchSettings.searchFormWidthUnit},defaultValue:{cssValue:ee.searchFormWidth,cssUnit:ee.searchFormWidthUnit},updateSettings:w=>{h.debug(w)}}),e.jsx(a,{children:e.jsx(p,{children:"Exact filter width if column filters position is LEFT or RIGHT. Minimum filter width if column filters position is ABOVE or BELOW. Does not affect column filters width in HEADER."})})]})]}),e.jsxs(p,{component:"div",sx:{marginTop:"30px"},children:[e.jsxs(_,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>g(!m),children:[e.jsx(z,{}),"What are column filters?"]}),m&&e.jsx(v,{sx:{marginTop:"20px"},children:"Column filters empower users to search within specific columns. You can activate these filters from the Table Builder's columns menu. Click on a column, open column actions, enable column filtering, and choose your preferred filter type."})]})]})]})]})},Re=({tableSettings:r,updateTableSettings:n})=>{const[s,c]=B.useState(void 0),i=o=>()=>{const d=r.pagination.rowsPerPage.filter(m=>m!==o);n("pagination.rowsPerPage",d)};return e.jsxs(k,{disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Pagination"}),e.jsxs(A,{children:[e.jsxs(a,{fullWidth:!0,sx:{marginBottom:"30px"},children:[e.jsxs(ae,{fullWidth:!0,color:"primary",exclusive:!0,value:r.pagination.position,onChange:(o,d)=>{d!==null&&n("pagination.position",d)},children:[e.jsx(N,{value:"bottom",children:"bottom"}),e.jsx(N,{value:"top",children:"top"}),e.jsx(N,{value:"both",children:"both"})]}),e.jsx(p,{children:"Pagination position."})]}),e.jsx(K,{fullWidth:!0,type:"number",label:"Default page size",value:r.pagination.defaultPageSize,disabled:!0,onChange:o=>{h.debug(o)},sx:{marginBottom:"30px"},helperText:"Effective after next table load."}),e.jsxs("fieldset",{className:"pp-fieldset",style:{width:"100%",margin:0,padding:0,marginBottom:"30px"},children:[e.jsx(a,{sx:{marginBottom:"10px"},children:e.jsx(p,{children:"Rows per page"})}),e.jsx(v,{sx:{width:"100%",display:"grid",gridTemplateColumns:"repeat(4, 25%)",justifyContent:"center",alignItems:"center",margin:0,padding:0,"& li":{margin:"0 10px 10px 10px",padding:0},"& li .MuiChip-label":{width:"40px",textAlign:"right",overflow:"visible"}},component:"ul",children:r.pagination.rowsPerPage.map((o,d)=>e.jsx(Ee,{children:e.jsx(ye,{disabled:!0,label:o,onDelete:i(o)})},d))}),e.jsx(a,{fullWidth:!0,children:e.jsx(p,{children:"Click the delete icon to remove a value or add a new values below."})}),e.jsxs(v,{sx:{margin:"10px",display:"grid",gridTemplateColumns:"auto auto auto",gap:"5px"},children:[e.jsx(K,{type:"number",label:"New value",value:s??"",disabled:!0,onChange:o=>{h.debug(o)}}),e.jsx(re,{title:"Add new value to list",children:e.jsx("span",{children:e.jsx(ne,{color:"primary",variant:"contained",disabled:!0,onClick:()=>{},children:"Add"})})}),e.jsx(re,{title:"Reset to default values",children:e.jsx("span",{children:e.jsx(ne,{color:"primary",variant:"outlined",disabled:!0,onClick:()=>{},children:"Reset"})})})]})]}),e.jsx(a,{fullWidth:!0,children:e.jsx(t,{control:e.jsx(x,{disabled:!0,checked:r.pagination.showFirstButton,onChange:(o,d)=>{h.debug(o,d)}}),label:"Show first button"})}),e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{disabled:!0,checked:r.pagination.showLastButton&&(r.largeTableSupport.actual===J.DISABLED||r.largeTableSupport.skipCount===!1),onChange:(o,d)=>{h.debug(o,d)}}),label:"Show last button"}),e.jsx(p,{children:"By default disabled with large table support and row count skipping."})]}),e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{disabled:!0,checked:r.pagination.showCompactButtons||r.largeTableSupport.actual===J.ENABLED,onChange:(o,d)=>{h.debug(o,d)}}),label:"Show compact buttons"}),e.jsx(p,{children:"By default enabled when large table support is enabled."})]}),e.jsx($,{single:!1})]})]})},We=({tableSettings:r,updateTableSettings:n})=>e.jsxs(k,{sx:{display:"none"},disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Processing"}),e.jsx(A,{children:e.jsxs(a,{children:[e.jsxs(X,{sx:{flexDirection:"row"},children:[e.jsx(t,{control:e.jsx(O,{checked:(r==null?void 0:r.processing)===Z.SERVERSIDE,onChange:s=>{n("processing",Z.SERVERSIDE),s.stopPropagation()}}),value:"serverside",label:"Server-side"},"serverside"),e.jsx(t,{control:e.jsx(O,{checked:(r==null?void 0:r.processing)===Z.CLIENTSIDE,onChange:s=>{n("processing",Z.CLIENTSIDE),s.stopPropagation()}}),value:"clientside",label:"Client-side"},"clientside")]}),e.jsx(p,{children:"Use server-side for large tables and views, use client-side for quick analyses of small tables and views"})]})})]}),Ue=({tableSettings:r,metaData:n,updateTableSettings:s})=>{var c;return!((c=n==null?void 0:n.privs)!=null&&c.update)||n.primary_key.length===0?null:e.jsxs(k,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Inline field settings"}),e.jsxs(A,{sx:{display:"grid"},children:[e.jsxs(a,{children:[e.jsxs(v,{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"10px"},children:[e.jsx(Q,{label:"Padding top",textField:{cssValue:r.inlineEditing.spacing.fieldTop,cssUnit:r.inlineEditing.spacing.fieldTopUnit},defaultValue:{cssValue:I.table.inlineEditing.spacing.fieldTop,cssUnit:I.table.inlineEditing.spacing.fieldTopUnit},updateSettings:i=>{h.debug(i)}}),e.jsx(Q,{label:"Padding bottom",textField:{cssValue:r.inlineEditing.spacing.fieldBottom,cssUnit:r.inlineEditing.spacing.fieldBottomUnit},defaultValue:{cssValue:I.table.inlineEditing.spacing.fieldBottom,cssUnit:I.table.inlineEditing.spacing.fieldBottomUnit},updateSettings:i=>{h.debug(i)}}),e.jsx(Q,{label:"Padding left",textField:{cssValue:r.inlineEditing.spacing.fieldLeft,cssUnit:r.inlineEditing.spacing.fieldLeftUnit},defaultValue:{cssValue:I.table.inlineEditing.spacing.fieldLeft,cssUnit:I.table.inlineEditing.spacing.fieldLeftUnit},updateSettings:i=>{h.debug(i)}}),e.jsx(Q,{label:"Padding right",textField:{cssValue:r.inlineEditing.spacing.fieldRight,cssUnit:r.inlineEditing.spacing.fieldRightUnit},defaultValue:{cssValue:I.table.inlineEditing.spacing.fieldRight,cssUnit:I.table.inlineEditing.spacing.fieldRightUnit},updateSettings:i=>{h.debug(i)}})]}),e.jsx(p,{children:"Space added to inline fields."})]}),e.jsx($,{single:!1})]})]})},Ie=({tableSettings:r,updateTableSettings:n})=>e.jsxs(k,{disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Column actions"}),e.jsx(A,{children:e.jsxs(a,{children:[e.jsx(t,{control:e.jsx(x,{checked:!1,disabled:!0,onChange:(s,c)=>{n("enableColumnHiding",c),s.stopPropagation()}}),label:"Enable column hiding"}),e.jsx(p,{children:"Allow user to show | hide columns."})]})})]}),Ne=({tableSettings:r,updateTableSettings:n})=>e.jsxs(k,{disableGutters:!0,children:[e.jsx(T,{expandIcon:e.jsx(y,{}),children:"Charts"}),e.jsx(A,{children:e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{control:e.jsx(x,{checked:r.charts.enabled,onChange:s=>{n("charts.enabled",!r.charts.enabled),s.stopPropagation()}}),label:"Enable chart support"}),e.jsxs(p,{component:"div",children:["Enabling this feature allows users to create charts directly from table data, with the option to dock the charts at the top or bottom of the table. Chart settings cannot be saved yet, but this functionality will be available soon.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(v,{sx:{color:"#000"},children:e.jsx("strong",{children:"Please note, this feature is currently in beta."})})]})]})})]}),zs=({appId:r,metaData:n})=>{h.debug(r);const s=le(),c=de(r),i=ue(r),o=i==null?void 0:i.table,d=i==null?void 0:i.columns,m=ve(r),g=B.useMemo(()=>d.filter(l=>l.computedField!==void 0),[d]);h.debug("storeColumnSettings",g);const C=B.useMemo(()=>{const l=d.map(j=>j.columnName);return h.debug(l),n.primary_key.length>0&&n.primary_key.filter(j=>l.includes(j)).length===n.primary_key.length},[d,n.primary_key]);h.debug("hasPrimaryKey",C);const b=(l,j,L)=>{const[R,...W]=j.split(".");return{...l,[R]:W.length?b(l[R],W.join("."),L):L}},u=(l,j)=>{h.debug(l,j);const L=b(o,l,j);h.debug(L),s(ie({appId:r,tableSettings:L})),c(!0)},f=je(r);return B.useEffect(()=>{var l;(m.state.details===void 0||((l=m.state.details)==null?void 0:l.length)===0)&&Y(r)&&f(n,()=>{h.error("Error updating detail containers from Table Builder"),h.error(ce.contactSupport)})},[r]),e.jsxs(e.Fragment,{children:[e.jsx(me,{appId:r,updateSettings:()=>{c(!0)}}),e.jsx(ke,{appId:r,tableSettings:o,metaData:n,updateTableSettings:u}),e.jsx(Ne,{tableSettings:o,updateTableSettings:u}),e.jsx(Re,{tableSettings:o,updateTableSettings:u}),e.jsx(Oe,{tableStore:i,updateTableSettings:u}),e.jsx(We,{tableSettings:o,updateTableSettings:u}),e.jsx(Pe,{hasPrimaryKey:C,tableSettings:o,metaData:n,updateTableSettings:u}),e.jsx(Ie,{tableSettings:o,updateTableSettings:u}),e.jsx(Be,{appId:r,tableSettings:o,metaData:n,updateTableSettings:u}),Y(r)&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{tableSettings:o,updateTableSettings:u}),e.jsx(Fe,{tableSettings:o,tableColumns:d,updateTableSettings:u})]}),e.jsx(Te,{tableSettings:o,updateTableSettings:u}),e.jsx(Ae,{tableSettings:o,updateTableSettings:u}),e.jsx(Ue,{tableSettings:o,updateTableSettings:u,metaData:n})]})};export{zs as default};
