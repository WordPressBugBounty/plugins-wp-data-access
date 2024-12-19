import{j as e}from"./cm-1.0.24-lBsX3THK.js";import{u as B,S as $,a as I,I as H,b as ee,c as te,d as z,D as se,e as ie,f as ae,g as re,h as ne,T as oe,M as le,P as de}from"./useMetadataColumns-1.0.24-CC2X-0cY.js";import{r as w}from"./redux-1.0.24-Bx8jJ3ee.js";import{u as ce,a as D}from"./RestApi-1.0.24-BCmVwqnT.js";import{l as j,bT as P,br as O,b as q,bq as g,C as me,V as pe,bU as ue,bV as xe,i as b,bW as ge}from"./lib-1.0.24-up-HxGpi.js";import{r as he}from"./index-1.0.24-DqBQ5tn0.js";import{v as W,w as je,k as fe,a5 as be,a6 as ye,a7 as Se,t as ve,a8 as Te,a9 as ke,aa as Ae,ab as Ee,ac as Pe,ad as Ne}from"./index-1.0.24-CyelUMLZ.js";import{T as C,C as De}from"./ConfirmDialog-1.0.24-5s_WiKiN.js";import{u as M}from"./useTableUpdater-1.0.24-BxXiAeyi.js";import{B as c}from"./Spinner-1.0.24-DzEoy0TD.js";import{F as N}from"./FormLabel-1.0.24-DNrTGbzF.js";import{S as J}from"./Slider-1.0.24-C0QPfEHu.js";import{F as v,a as T}from"./FormHelperText-1.0.24-dIoAVumM.js";import{P as X}from"./PremiumFeature-1.0.24-DZWmlncS.js";import"./moment-1.0.24-C5S46NFB.js";import{c as Me,D as Ce}from"./useTheme-1.0.24-CdGcp-pX.js";import{u as Le}from"./useStoreTable-1.0.24-CCGHEC8d.js";import{A as Y}from"./AdminTheme-1.0.24-DxOFSSNd.js";import{c as Fe,d as we,b as Re}from"./index-1.0.24-BtVZ14ow.js";import{A as _}from"./Accordion-1.0.24-uvRe3lte.js";import{A as G}from"./AccordionSummary-1.0.24-B564M2Bj.js";import{A as V}from"./AccordionDetails-1.0.24-DwKVwnKj.js";import{F as k}from"./FormControlLabel-1.0.24-jTuSRk-Y.js";import{S as A}from"./Switch-1.0.24-BzowSg2t.js";import{R as Oe}from"./RadioGroup-1.0.24-C4yZZRVK.js";import{R as U}from"./Radio-1.0.24-DPbrWB-2.js";import{T as F}from"./TextField-1.0.24-CX3Aj71c.js";import{L as Ue}from"./Link-1.0.24-CcP-iIZr.js";import{A as y,a as S,u as Be}from"./useTableColumnOrder-1.0.24-BViF9NR7.js";import{A as We}from"./Autocomplete-1.0.24-C17x-b9y.js";import{C as _e}from"./Checkbox-1.0.24-CEJQc5ad.js";import{I as L}from"./iconBase-1.0.24-C7lJg7VQ.js";import"./vendor-1.0.24-BmpNFhoq.js";import"./notistack-1.0.24-EH6RgmCJ.js";import"./useFormStore-1.0.24-CeQknkKq.js";import"./CardContent-1.0.24-DpYcLPhl.js";import"./Typography-1.0.24-DtpcakL_.js";import"./ActionsDml-1.0.24-BgEAxcii.js";import"./MenuItem-1.0.24-cnqjqUCU.js";import"./Menu-1.0.24-Bmzze4W5.js";import"./ThemeProvider-1.0.24-koXQmW7k.js";import"./index-1.0.24-vo0tC6xY.js";import"./lodash-1.0.24-CC2RnyUh.js";import"./Stepper-1.0.24-gMaRg80L.js";import"./createSvgIcon-1.0.24-BKX7HR5-.js";import"./StepContent-1.0.24-BPpZKR0W.js";import"./Collapse-1.0.24-Xb_bb7om.js";import"./loglevel-1.0.24-BZ7XahX3.js";import"./DialogContent-1.0.24-o2zFJd9S.js";import"./useFormControl-1.0.24-BVJe4wXv.js";import"./useControlled-1.0.24-DnsqB4VW.js";import"./visuallyHidden-1.0.24-Dan1xhjv.js";import"./index-1.0.24-COcPbr-v.js";import"./SwitchBase-1.0.24-k3CO2XxE.js";import"./Close-1.0.24-16O9KsVp.js";import"./Popper-1.0.24-pV6SBss6.js";const Ge=(s,r)=>{const t=ce(o=>o.tables[s].columns[r]);return j.debug("tableColumn",t),t},Ve=({appId:s,columnIndex:r,tableColumn:t})=>{const o=D(),i=M(s);return e.jsxs(c,{sx:{margin:"0 1rem 2rem 1rem"},children:[e.jsx(N,{children:"Width"}),e.jsxs(c,{sx:{display:"grid",gridTemplateColumns:"1fr auto",gridGap:"30px",alignItems:"center"},children:[e.jsx(J,{min:60,max:420,step:1,value:t.width,marks:[{value:60,label:"60"},{value:120,label:"120"},{value:180,label:"180"},{value:240,label:"240"},{value:300,label:"320"},{value:360,label:"360"},{value:420,label:"420"}],valueLabelDisplay:"auto",onChange:(a,m)=>{o(P({appId:s,index:r,property:{width:m}})),i(!0),a.stopPropagation()}}),e.jsx("span",{children:"px"})]}),e.jsx(v,{children:e.jsxs(T,{children:["Column width is relative when responsiveness = ",e.jsx("strong",{children:"auto column hiding"}),"."]})})]})},He=({appId:s,columnIndex:r,tableColumn:t})=>{var u,x,E,d,f;j.debug(s,r,t),D();const o=Le(s),i=Me(s);B(s,i);const[a,m]=w.useState(!1);w.useState(!1),M(s);const l=!0;return e.jsxs(_,{disableGutters:!0,children:[e.jsxs(G,{expandIcon:e.jsx(W,{}),sx:{fontSize:"1rem","& .MuiAccordionSummary-content":{padding:"1rem",alignItems:"center"}},children:[e.jsx(Fe,{}),e.jsx("span",{style:{paddingLeft:"0.5rem"},children:"Column actions"})]}),e.jsxs(V,{sx:{display:"grid",paddingTop:"1rem"},children:[e.jsxs(c,{sx:{margin:"0 10px",display:"grid",gridTemplateColumns:"auto"},children:[t.computedField?e.jsx(k,{control:e.jsx(A,{checked:!1,disabled:!0}),label:"Enable inline search",labelPlacement:"end"}):e.jsx(k,{control:e.jsx(A,{checked:t.inlineSearch&&!l,disabled:l,onChange:(p,R)=>{p.stopPropagation()}}),label:"Enable column filter",labelPlacement:"end"}),t.inlineSearch&&!l&&e.jsxs(c,{children:[e.jsxs(Oe,{sx:{flexDirection:"column",alignContent:"flex-start",marginLeft:"20px",marginTop:"10px",marginBottom:"10px"},children:[e.jsxs(N,{className:"align-label-radio",children:[e.jsx(U,{checked:t.inlineSearchEnum===O.SEARCHBOX,disabled:!0,onChange:p=>{p.stopPropagation()}}),"Searchbox"]}),e.jsxs(N,{className:"align-label-radio",children:[e.jsx(U,{checked:t.inlineSearchEnum===O.DROPDOWN,disabled:!0,onChange:p=>{p.stopPropagation()}}),"Drop-down list"]}),e.jsxs(N,{className:"align-label-radio",children:[e.jsx(U,{checked:t.inlineSearchEnum===O.MULTISELECT,disabled:!0,onChange:p=>{p.stopPropagation()}}),"Multi-select drop-down list"]}),e.jsxs(N,{className:"align-label-radio",children:[e.jsx(U,{checked:t.inlineSearchEnum===O.SEARCHPANE,disabled:!0,onChange:p=>{p.stopPropagation()}}),"Search pane"]})]}),t.lookup!==void 0&&((u=t.lookup)==null?void 0:u.loadOnStartup)!==!0&&e.jsx(v,{sx:{marginBottom:"20px",marginLeft:"5px"},children:e.jsxs(T,{sx:{color:(x=Y)==null?void 0:x.palette.error.main,"& svg":{marginRight:"5px",verticalAlign:"middle"}},children:[e.jsx(je,{size:"18px"}),e.jsx("span",{children:"Drop-down lists are only supported for lookups loaded into memory on startup."})]})}),e.jsx(F,{fullWidth:!0,type:"number",label:"Order",value:t.columnFilterOrder,helperText:"Position of column filter in search panel.",disabled:!0,onChange:p=>{p.stopPropagation()},sx:{marginLeft:"15px",marginBottom:"20px"}}),e.jsx(F,{fullWidth:!0,type:"text",label:"Default search",value:t.inlineSearchDefault,helperText:"Dynamic filter for the initial query. Can be updated in the column filter. Use the DEFAULT WHERE to apply static filters.",disabled:!0,onChange:p=>{p.stopPropagation()},sx:{marginLeft:"15px",marginBottom:"20px"}})]}),((E=i==null?void 0:i.privs)==null?void 0:E.update)&&i.primary_key.length>0&&e.jsx(e.Fragment,{children:!t.computedField&&!t.columnName.startsWith(q.relationTablePrefix)&&!(((d=o==null?void 0:o.state)==null?void 0:d.masterDetailConditions)!==void 0&&((f=o==null?void 0:o.state)==null?void 0:f.masterDetailConditions[t.columnName])!==void 0)?e.jsx(k,{control:e.jsx(A,{checked:t.visible&&t.inlineEditing,disabled:!0,onChange:(p,R)=>{p.stopPropagation()}}),label:"Enable inline editing",labelPlacement:"end"}):e.jsx(k,{control:e.jsx(A,{checked:!1,disabled:!0}),label:"Enable inline editing",labelPlacement:"end"})})]}),!1,e.jsxs(T,{component:"div",sx:{marginTop:"30px"},children:[e.jsx(c,{children:e.jsxs(Ue,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>m(!a),children:[e.jsx(fe,{}),"What are column actions?"]})}),a&&e.jsxs(c,{sx:{marginTop:"20px",display:"grid",gap:"20px"},children:[e.jsx(c,{children:"Column actions are inline actions added to a table column to enhance usability and user-friendliness."}),e.jsx(c,{children:e.jsx("strong",{children:"Column filtering"})}),e.jsx(c,{children:"When column filtering is enabled, a search field is added to the table for performing column-specific searches. A search box allows wildcard searches, while drop-down lists perform exact searches. Exact searches can improve performance, especially when the searched columns are well-indexed."}),e.jsx(c,{children:"To enable the column filter feature, go to the TABLE section under Column Filters. You can also change the position of the column filters."}),e.jsx(c,{children:"The global filter performs a wildcard search. This feature can be disabled in the TABLE section under Global filter."}),e.jsx(c,{children:e.jsx("strong",{children:"Inline editing"})}),e.jsx(c,{children:"Inline editing allows users to change table columns directly, without needing to open a data entry form. This feature is not available for primary key fields. Drop-down lists are automatically generated for enum and set data types."})]})]}),e.jsx(X,{})]})]})},ze=({appId:s,columnIndex:r,tableColumn:t})=>{var l,u,x,E;const o=D(),i=M(s),a=B(s),m=(d,f)=>{j.debug(d,f)};return e.jsxs(_,{disableGutters:!0,children:[e.jsxs(G,{expandIcon:e.jsx(W,{}),sx:{fontSize:"1rem","& .MuiAccordionSummary-content":{padding:"1rem",alignItems:"center"}},children:[e.jsx(we,{}),e.jsx("span",{style:{paddingLeft:"0.5rem"},children:"Column settings"})]}),e.jsxs(V,{sx:{display:"grid",gridGap:"2rem",paddingTop:"1rem"},children:[(t.computedField||a[t.columnName]!==void 0&&t.lookup===void 0&&(g(a[t.columnName].data_type)==="float"||g(a[t.columnName].data_type)==="number"||g(a[t.columnName].data_type)==="time"||g(a[t.columnName].data_type,!0)==="date"||g(a[t.columnName].data_type,!0)==="datetime"||g(a[t.columnName].data_type,!0)==="timestamp"||g(a[t.columnName].data_type,!0)==="time"))&&e.jsx(c,{children:e.jsxs(v,{children:[e.jsx(k,{control:e.jsx(A,{checked:!1,disabled:!0,onClick:d=>{d.stopPropagation()}}),label:"Localize",labelPlacement:"end"}),e.jsx(T,{children:g((l=a[t.columnName])==null?void 0:l.data_type)==="float"||g((u=a[t.columnName])==null?void 0:u.data_type)==="number"?"Localizes decimal and thousands seperators.":"Localizes date and time fields."})]})}),(a[t.columnName]!==void 0&&t.lookup===void 0&&g(a[t.columnName].data_type,!0)==="float"||t.computedField!==void 0)&&e.jsxs(v,{children:[e.jsx(N,{children:"Decimals"}),e.jsx(J,{min:0,max:6,value:t.decimals,marks:[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"∞"}],valueLabelDisplay:"auto",disabled:!0,onChange:(d,f)=>{j.debug(f),d.stopPropagation()}}),e.jsx(T,{children:"Number of decimals displayed."})]}),a[t.columnName]!==void 0&&t.localize===!0&&(g(a[t.columnName].data_type,!0)==="date"||g(a[t.columnName].data_type,!0)==="datetime"||g(a[t.columnName].data_type,!0)==="timestamp")&&e.jsx(c,{children:e.jsx(v,{children:e.jsx(k,{control:e.jsx(A,{checked:!1,disabled:!0,onClick:d=>{d.stopPropagation()}}),label:"Add trailing zeros to days and month",labelPlacement:"end"})})}),e.jsxs(v,{children:[e.jsxs(c,{sx:{display:"grid",gridTemplateColumns:"auto auto",gridGap:"10px",alignItems:"center"},children:[e.jsx(F,{type:"text",variant:"outlined",label:"Prefix",value:t.prefix,disabled:!0,slotProps:{inputLabel:{shrink:!0}},onChange:d=>{d.stopPropagation()}}),e.jsx(F,{type:"text",variant:"outlined",label:"Suffix",value:t.suffix,disabled:!0,slotProps:{inputLabel:{shrink:!0}},onChange:d=>{d.stopPropagation()}})]}),e.jsx(T,{children:"Adds a prefix and/or suffix to the column content (also added to inline text and number fields)."})]}),e.jsxs(v,{children:[e.jsx(F,{type:"text",variant:"outlined",label:"CSS classes",fullWidth:!0,value:t.classNames,disabled:!0,slotProps:{inputLabel:{shrink:!0}},onChange:d=>{d.stopPropagation()}}),e.jsx(T,{children:"CSS classes (seperated by spaces) for custom styling."})]}),e.jsxs(v,{children:[e.jsx(k,{control:e.jsx(A,{checked:t.allowMarkup,onChange:(d,f)=>{o(P({appId:s,index:r,property:{allowMarkup:f}})),i(!0),d.stopPropagation()}}),label:"Allow inline HTML",labelPlacement:"end"}),e.jsxs(T,{children:["Allows markup in column content. ",e.jsx("span",{style:{...t.allowMarkup&&{color:((E=(x=Y)==null?void 0:x.palette)==null?void 0:E.error.main)??"red"}},children:"Enabling this feature may pose a risk of cross-site scripting (XSS) attacks."})]})]}),e.jsxs(c,{sx:{display:"grid",gridTemplateColumns:"auto"},children:[e.jsx(k,{control:e.jsx(A,{checked:!1,disabled:!0,onClick:d=>{me.appFeature===!0&&m(r,!t.visibleTablet),d.stopPropagation()}}),label:"Show column on tablet",labelPlacement:"end"}),e.jsx(k,{control:e.jsx(A,{checked:!1,disabled:!0,onClick:d=>{d.stopPropagation()}}),label:"Show column on mobile",labelPlacement:"end"})]}),e.jsx(X,{single:!1,margin:"0"})]})]})},qe=[{key:y.SUM,label:S.SUM},{key:y.MIN,label:S.MIN},{key:y.MAX,label:S.MAX},{key:y.AVG,label:S.AVG},{key:y.COUNT,label:S.COUNT},{key:y.UNIQUE,label:S.UNIQUE},{key:y.STD,label:S.STD},{key:y.VARIANCE,label:S.VARIANCE},{key:y.MEDIAN,label:S.MEDIAN}],Q=[...qe],Xe=({appId:s,columnIndex:r,tableColumn:t})=>{j.debug(s,r,t),D(),M(s);const o=B(s),i=w.useMemo(()=>{var a;return(t==null?void 0:t.aggregation)===void 0?[]:(a=t==null?void 0:t.aggregation)==null?void 0:a.map(m=>Q.filter(l=>l.key===m)[0])},[t==null?void 0:t.aggregation]);return!pe(s)||t.computedField===void 0&&g(o[t.columnName].data_type)!=="number"?null:e.jsxs(_,{disableGutters:!0,children:[e.jsxs(G,{expandIcon:e.jsx(W,{}),sx:{fontSize:"1rem","& .MuiAccordionSummary-content":{padding:"1rem",alignItems:"center"}},children:[e.jsx(Re,{}),e.jsx("span",{style:{paddingLeft:"0.5rem"},children:"Aggregations"})]}),e.jsxs(V,{sx:{marginTop:"10px"},children:[e.jsxs(v,{fullWidth:!0,children:[e.jsx(We,{multiple:!0,options:Q,disabled:!0,disableCloseOnSelect:!0,getOptionLabel:a=>a.label,value:i,onChange:(a,m)=>{a.stopPropagation()},renderOption:(a,m,{selected:l})=>w.createElement("li",{...a,key:m.label},e.jsx(_e,{icon:e.jsx(be,{}),checkedIcon:e.jsx(ye,{}),style:{marginRight:8},checked:l}),m.label),renderInput:a=>e.jsx(F,{...a,label:"Select from list"})}),e.jsx(T,{children:"Allows multiple selections. Displayed in order of entry."})]}),e.jsx(X,{})]})]})},Qe=({appId:s,columnIndex:r,tableColumn:t})=>{j.debug(s,r,t);const o=D(),i=M(s),m=B(s)[t.columnName],l=(u,x)=>{o(ue({appId:s,columnName:t.columnName})),o(xe({appId:s,columnName:t.columnName})),o(P({appId:s,index:u,property:{lookup:x}})),i(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(Ve,{appId:s,columnIndex:r,tableColumn:t}),e.jsx(ze,{appId:s,columnIndex:r,tableColumn:t}),e.jsx(He,{appId:s,columnIndex:r,tableColumn:t}),e.jsx($,{appId:s,columnIndex:r,tableColumn:t,columnMetaData:m,setLookup:l}),e.jsx(Xe,{appId:s,columnIndex:r,tableColumn:t}),e.jsx(I,{columnMetaData:m})]})},Je=({appId:s,columnIndex:r,tableType:t})=>{j.debug(s,r,t);const o=D(),i=Ge(s,r),a=M(s),[m,l]=w.useState(!1),[u,x]=w.useState(void 0),E=n=>{n!==void 0&&(o(ge({appId:s,index:n})),a(!0))},d=(n,h)=>{j.debug(n,h),o(P({appId:s,index:n,property:{visible:h}})),a(!0)},f=(n,h)=>{j.debug(n,h),o(P({appId:s,index:n,property:{queryable:h}})),a(!0)},p=(n,h)=>{j.debug(n,h),o(P({appId:s,index:n,property:{orderable:h}})),a(!0)},R=(n,h)=>{o(P({appId:s,index:n,property:{alignment:h}})),a(!0)},K=(n,h,Z)=>(j.debug(n,h,Z),e.jsxs(e.Fragment,{children:[e.jsx(c,{sx:{"& svg":{pointerEvents:"none",opacity:"0.5"}},children:e.jsx(ee,{id:n,enabled:!1},n)}),e.jsxs(c,{sx:{display:"inline-grid",gridTemplateColumns:i.computedField!==void 0?"auto auto":"auto",justifyContent:"start",alignItems:"center",gap:"10px","& svg":{opacity:"0.5"}},children:[i.computedField!==void 0&&e.jsx(he,{}),e.jsx(N,{children:h})]})]}));return e.jsxs(e.Fragment,{children:[e.jsxs(_,{disableGutters:!0,slotProps:{transition:{unmountOnExit:!0}},children:[e.jsxs(G,{className:"pp-column-settings",expandIcon:e.jsx(W,{}),sx:{justifyContent:"space-between",position:"relative"},children:[t!==""&&e.jsx(c,{sx:{position:"absolute",top:"5px",right:"5px",fontSize:"50%"},children:t}),e.jsx(c,{sx:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center","& svg":{display:"flex"}},children:K(i.columnName,i.columnLabel,r)}),e.jsxs("div",{style:{display:"inline-grid",gridTemplateColumns:"40px 40px 40px 40px"},children:[e.jsx(C,{title:"Visibility",position:"bottom",children:e.jsx(L,{onClick:n=>{d(r,!i.visible),n.stopPropagation()},children:e.jsx(H,{checked:i.visible,children:e.jsx(Se,{})})})}),i.computedField?e.jsx(C,{title:"Edit",position:"bottom",children:e.jsx("span",{children:e.jsx(L,{disabled:!0,onClick:n=>{n.stopPropagation()},children:e.jsx(Te,{})})})}):e.jsx(C,{title:"Searchable",position:"bottom",children:e.jsx(L,{onClick:n=>{f(r,!i.queryable),n.stopPropagation()},children:e.jsx(H,{checked:i.queryable,alignRight:!1,children:e.jsx(ve,{})})})}),i.computedField?e.jsx(C,{title:"Delete",position:"bottom",children:e.jsx(L,{onClick:n=>{x(r),l(!0),n.stopPropagation()},children:e.jsx(Ae,{})})}):e.jsx(C,{title:"Sortable",position:"bottom",disabled:i.visible===!1,children:e.jsx(L,{disabled:i.visible===!1,onClick:n=>{p(r,!i.orderable),n.stopPropagation()},children:e.jsx(H,{checked:i.orderable,forceOff:i.visible===!1,children:e.jsx(ke,{})})})}),e.jsx(C,{title:"Alignment",position:"bottom",disabled:i.visible===!1,children:e.jsxs(L,{disabled:i.visible===!1,onClick:n=>{i.alignment===b.LEFT?R(r,b.CENTER):i.alignment===b.CENTER?R(r,b.RIGHT):i.alignment===b.RIGHT&&R(r,b.LEFT),a(!0),n.stopPropagation()},children:[i.alignment===b.LEFT&&e.jsx(Ee,{}),i.alignment===b.CENTER&&e.jsx(Pe,{}),i.alignment===b.RIGHT&&e.jsx(Ne,{})]})})]})]}),e.jsx(V,{children:e.jsx(Qe,{appId:s,columnIndex:r,tableColumn:i})})]},r),e.jsx(De,{title:"Delete computed field?",message:"Are you sure you want to delete this computed field? This action cannot be undone!",open:m,setOpen:l,onConfirm:()=>E(u)})]})},Zt=({appId:s,metaData:r})=>{j.debug(s,r),D();const t=te(z(de),z(le),z(oe));M(s);const o=l=>{const{active:u,over:x}=l;j.debug(u,x),u==null||u.id,x==null||x.id},i=Be(s),a=()=>(i==null?void 0:i.filter(l=>l.startsWith(q.relationTablePrefix)).length)>0,m=l=>a()?l.startsWith(q.relationTablePrefix)?"Relation Table Column":"Join Table Column":"";return i===void 0||i.length===0?null:e.jsxs(e.Fragment,{children:[e.jsx(se,{autoScroll:!0,sensors:t,collisionDetection:ie,onDragEnd:o,children:e.jsx(ae,{items:i,children:i.map((l,u)=>e.jsx(re,{id:l,children:e.jsx(Je,{appId:s,columnIndex:u,tableType:m(l)})},l))})}),e.jsx(ne,{appId:s,target:Ce.TABLE})]})};export{Zt as default};