import{j as e}from"./cm-1.0.29-B-jRz_ox.js";import{r as l,R as O}from"./redux-1.0.29-C1Q38y1F.js";import{P as D,b as E,a as y}from"./index-1.0.29-DewteZsJ.js";import{u as K,a as L}from"./RestApi-1.0.29-D1Nj1ewF.js";import{l as n,v as N,b_ as H,b$ as R,c0 as V}from"./lib-1.0.29-C3pCU2AT.js";import{b as W}from"./ThemeContainer-1.0.29-CLFqgikx.js";import{u as _}from"./useTableUpdater-1.0.29-CrKOH01n.js";import"./ConfirmDialog-1.0.29-CS4WrjWL.js";import{P as U}from"./PremiumFeature-1.0.29-D7ok1IXl.js";import{af as $,K as q,W as J,a4 as Q,ag as X,ah as Y,a as Z,I as k}from"./index-1.0.29-Dlm2kjka.js";import{m as ee,g as te}from"./index-1.0.29-DNyiXtkx.js";import{A as w}from"./Accordion-1.0.29-DSoQZht0.js";import{A}from"./AccordionSummary-1.0.29-Chfx7bsr.js";import{B as i}from"./Spinner-1.0.29-BS14fgdJ.js";import{B as oe}from"./CardContent-1.0.29-D9omFsvB.js";import{T as b}from"./Tooltip-1.0.29-D8cmS8RQ.js";import{I as j}from"./iconBase-1.0.29-DWX4ew0u.js";import{P as se}from"./Menu-1.0.29-DOOr2lTO.js";import{T as d}from"./TreeItem2-1.0.29-Dq6aHcMz.js";import{S as re}from"./TreeItem2Provider-1.0.29-rBK9p3Tt.js";import"./vendor-1.0.29-BmpNFhoq.js";import"./index-1.0.29-CZwhy2eo.js";import"./DialogContent-1.0.29-DSOFFK1-.js";import"./Typography-1.0.29-DKDDWYKJ.js";import"./loglevel-1.0.29-BZ7XahX3.js";import"./lodash-1.0.29-CLFJOMhY.js";import"./moment-1.0.29-C5S46NFB.js";import"./main-1.0.29.js";import"./notistack-1.0.29-DTteiN_s.js";import"./useTheme-1.0.29-BG2eLrmM.js";import"./index-1.0.29-D3hJYFO0.js";import"./FallbackSpinner-1.0.29-Bxoz_pLD.js";import"./ThemeProvider-1.0.29-6fkyOh-r.js";import"./AdminTheme-1.0.29-j2gnN0Eb.js";import"./index-1.0.29-BOWxC8Fi.js";import"./FormLabel-1.0.29-V40o0R6-.js";import"./useFormControl-1.0.29-DBjraibe.js";import"./useControlled-1.0.29-gPCMf8hr.js";import"./Collapse-1.0.29-BdBN3O_f.js";import"./Popper-1.0.29-DA77uIz-.js";import"./Checkbox-1.0.29-DTq3kp48.js";import"./SwitchBase-1.0.29-aa8fP0Df.js";import"./createSvgIcon-1.0.29-DRHeS-Ok.js";const ie=p=>{const c=K(u=>u.tables[p].columns);return n.debug("tableColumns",c),c},ae=p=>({}),Xe=({appId:p,tableSettings:c})=>{L(),_(p);const u=l.useMemo(()=>N(),[]);n.debug("popupId",u);const h=W(),f=ae(),S=ie(p),[v,I]=l.useState(!1);l.useEffect(()=>{v&&I(!1)},[v]);const[M,T]=l.useState(!0),B=(o,t)=>e.jsx(b,{title:"Enable | Disable",children:e.jsx("span",{children:e.jsx(j,{size:"small",color:"primary",onClick:()=>{t(!o)},disabled:!0,children:o?e.jsx(X,{}):e.jsx(Y,{})})})}),g=(o,t,a,s,r,x,m)=>e.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[e.jsx("span",{children:o}),e.jsx("span",{children:a?e.jsxs(e.Fragment,{children:[B(x,m),e.jsx(b,{title:"Show | Hide",children:e.jsx("span",{children:e.jsx(j,{size:"small",color:"primary",onClick:()=>{r(!s)},disabled:!0,children:s?e.jsx(q,{}):e.jsx(J,{})})})})]}):e.jsx(b,{title:"Implement",children:e.jsx("span",{children:e.jsx(j,{size:"small",color:"primary",onClick:()=>{I(!0),t(),T(!1)},disabled:!0,children:e.jsx(Q,{})})})})})]}),G=o=>o.computedField===void 0?o.columnLabel:o.computedField.label,C=(o,t)=>e.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"25px auto",alignItems:"center",gap:"10px"},children:[e.jsx(i,{sx:{textAlign:"center","& div":{display:"flex",justifyContent:"center"}},children:o}),e.jsx("span",{children:t})]}),P=()=>e.jsx(i,{sx:{"& svg":{fontSize:"26px"}},children:e.jsx(Z,{})}),z=()=>e.jsx(i,{sx:{"& svg":{fontSize:"20px"}},children:e.jsx(te,{})}),F=()=>e.jsx(i,{sx:{"& svg":{fontSize:"26px"}},children:e.jsx(k,{})});return l.useState(!1),l.useState(""),l.useState(void 0),l.useState(void 0),e.jsxs(O.Fragment,{children:[e.jsx(w,{disableGutters:!0,children:e.jsx(A,{children:e.jsx(D,{variant:"popover",popupId:u,children:o=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{sx:{width:"100%",display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(oe,{variant:"contained",endIcon:e.jsx(ee,{}),...E(o),onMouseDown:()=>{o.isOpen&&T(!0)},children:"List of hooks"}),e.jsx(b,{title:"Documentation",children:e.jsx(j,{onClick:()=>{window.open("https://wpdataaccess.com/docs/table-hooks/getting-started-with-hooks/","_blank")},children:e.jsx($,{})})})]}),e.jsx(se,{...y(o),open:o.isOpen&&M,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},sx:{maxHeight:"70vh"},children:e.jsx(i,{sx:{minWidth:"360px",display:"grid",gap:"20px",padding:"20px 20px 20px 10px","& .MuiTreeItem-content:hover ":{background:"rgba(248, 248, 248, 1) !important"}},children:e.jsxs(re,{children:[c.state.masterDetailConditions===void 0&&e.jsx(d,{itemId:"appGroup",label:C(P(),"App"),children:H.map(t=>{var a,s;return e.jsx(d,{itemId:"app-"+t,label:g(t,()=>{},h[t]!==void 0,((a=h[t])==null?void 0:a.visible)??!0,r=>{n.debug(r)},((s=h[t])==null?void 0:s.enabled)??!0,r=>{n.debug(r)})},"app-"+t)})},"appGroup"),e.jsx(d,{itemId:"tableGroup",label:C(z(),"Table"),children:R.map(t=>{var a,s;return e.jsx(d,{itemId:"table-"+t,label:g(t,()=>{},f[t]!==void 0,((a=f[t])==null?void 0:a.visible)??!0,r=>{n.debug(r)},((s=f[t])==null?void 0:s.enabled)??!0,r=>{n.debug(r)})},"table-"+t)})},"tableGroup"),e.jsxs(d,{itemId:"columnGroup",label:C(F(),"Columns"),children:[...S.map((t,a)=>t.computedField!==void 0?null:e.jsx(d,{itemId:t.columnName,label:G(t),children:V.map(s=>{var r,x;return e.jsx(d,{itemId:"column-"+t.columnName+"-"+s,label:g(s,()=>{},t.columnCode[s]!==void 0,((r=t.columnCode[s])==null?void 0:r.visible)??!0,m=>{n.debug(m)},((x=t.columnCode[s])==null?void 0:x.enabled)??!0,m=>{n.debug(m)})},"column-"+t.columnName+"-"+s)})},t.columnName))]},"columnGroup")]})})})]})})})},"CodeBuilder"),!1,e.jsx(w,{disableGutters:!0,children:e.jsx(A,{children:e.jsx(i,{sx:{"& label":{marginTop:0}},children:e.jsx(U,{})})})})]},"CodeBuilderMain")};export{Xe as default};
