import{l as t,r as u,dt as U,C as E,j as v,cI as X}from"./main-1.0.23.js";import{l as P}from"./ActionsDml-1.0.23-e3901c9d.js";import{a as Y,u as Z}from"./RestApi-1.0.23-cc179eb9.js";import{i as $}from"./index-1.0.23-8345d9bc.js";import{g as D}from"./useTheme-1.0.23-55aea9bb.js";import{F as M}from"./FormHelperText-1.0.23-83597bdf.js";import{A as R}from"./Autocomplete-1.0.23-a5bc1209.js";import{T as w}from"./TextField-1.0.23-1657e9d4.js";import"./colorManipulator-1.0.23-e382be1d.js";import"./Typography-1.0.23-19a0fd3e.js";import"./iconBase-1.0.23-43ac6f06.js";import"./useFormControl-1.0.23-a0ae6ce7.js";import"./Close-1.0.23-ea28bfa6.js";import"./createSvgIcon-1.0.23-f9410a01.js";import"./index-1.0.23-9af490ae.js";import"./Popper-1.0.23-4a0d0616.js";import"./index.esm-1.0.23-ba0465a2.js";import"./useControlled-1.0.23-1e71c28b.js";import"./FormLabel-1.0.23-71a056b2.js";import"./Menu-1.0.23-e889464a.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./Popover-1.0.23-6c9c65a6.js";import"./Modal-1.0.23-3fe42627.js";import"./Grow-1.0.23-40b2ff68.js";const xo=({value:a,columnState:e,columnMetaData:g,setValue:h,saveChanges:O,appId:m,currentRow:c,storeRow:y,row:T})=>{var L,j;t.debug(a,e,g,m,c,y,T);const F=Y(),N=D(m),[q,W]=u.useState(!1),[x,_]=u.useState(a);u.useEffect(()=>{t.debug("useEffect",e.columnName,x,a,c[e.columnName]),y!==void 0&&y[e.columnName]!==void 0&&x!==a&&(O(),_(a))},[a]);const p=Z(o=>U(o,m,e.columnName));t.debug("lovCache",p);const[f,k]=u.useState([]);t.debug("lov",f);const[d,H]=u.useState(Array.isArray((L=e.lookup)==null?void 0:L.dynamicConditions)?(j=e.lookup)==null?void 0:j.dynamicConditions.map(o=>({columnName:o.lookupColumnName,columnValue:c[o.tableColumnName]??""})):[]);t.debug("conditions",d),u.useEffect(()=>{if(p!==void 0)if(Object.keys(p).length>0){const o=[];for(const s in p)o.push({key:s,value:p[s]});k(o)}else d.length===0&&z();else k([])},[p]);const z=()=>{if(!q&&f.length===0){W(!0);const o=e.lookup;if(o!==void 0){const s=N.isRelationSelectionTable===!0?E.relationTablePrefix+e.columnName:e.columnName;P(m,"table",s,o.key,o.value,{},{},l=>{t.debug(l.data);const n={};for(let i=0;i<l.data.length;i++)if(!o.value.includes(","))n[l.data[i].key]=l.data[i].value;else{const r=o.value.split(",");n[l.data[i].key]=r.map(b=>l.data[i][b])}t.debug(n),F(X({appId:m,columnName:e.columnName,lookup:n}))},l=>{t.error(l)})}}else t.error("Error loading lookup - please check server response")};u.useEffect(()=>{var o,s;if(Object.keys(d).length>0&&d.length>0){const l=Array.isArray((o=e.lookup)==null?void 0:o.dynamicConditions)?(s=e.lookup)==null?void 0:s.dynamicConditions.map(i=>({columnName:i.lookupColumnName,columnValue:c[i.tableColumnName]??""})):[];t.debug("reload lookup?",d,l);const n={};if(l.length>0&&l.map(i=>{n[i.columnName]=i.columnValue}),$(d,l))t.debug("reloading dynamic lookup",e.columnName,l,n),A(n);else{const i={};l.length>0&&l.map(r=>{i[r.columnName]=r.columnValue}),H(l),l.filter(r=>r.columnValue===""||r.columnValue===null).length===0?A(i):k([])}}},[c]);const A=(o={})=>{const s=e.lookup;if(s!==void 0){const l=N.isRelationSelectionTable===!0?E.relationTablePrefix+e.columnName:e.columnName;P(m,"table",l,s.key,s.value,o,{},n=>{var i,r,b;if(t.debug(n.data),!((i=e.lookup)!=null&&i.value.includes(",")))k(n.data);else{const J=(r=e.lookup)==null?void 0:r.value.split(","),V=[];for(let C=0;C<n.data.length;C++){const K=J.map(Q=>n.data[C][Q]).join(((b=e.lookup)==null?void 0:b.delimiter)??"");V.push({key:n.data[C].key,value:K})}k(V)}},n=>{t.error(n)})}},B=o=>{var s;return Array.isArray(o.value)?o.value.join(((s=e.lookup)==null?void 0:s.delimiter)??""):o.value},G=u.useMemo(()=>f.filter(o=>o.key===a)[0]??null,[f,a]);return v.jsx("div",{onClick:o=>{o.stopPropagation()},children:v.jsx(M,{fullWidth:!0,onClick:o=>{o.stopPropagation()},children:v.jsx(R,{className:"pp-inline-editing",multiple:!1,fullWidth:!0,autoHighlight:!0,disableClearable:g.is_nullable==="NO",options:f,getOptionLabel:o=>B(o),value:G,onChange:(o,s)=>{h(s!==null?s.key:null),o.stopPropagation()},renderInput:o=>v.jsx(w,{label:g.formLabel,required:g.is_nullable==="NO",...o,inputProps:{...o.inputProps,autoComplete:"new-password"}})})})})};export{xo as default};
