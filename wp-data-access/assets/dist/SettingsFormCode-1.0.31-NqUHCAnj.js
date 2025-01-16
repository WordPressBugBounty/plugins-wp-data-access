import{j as e}from"./cm-1.0.31-BzgG35ZX.js";import{P as L,b as D,a as O}from"./index-1.0.31-CARe8LQx.js";import{r as c,R as y}from"./redux-1.0.31-CuzmJMK6.js";import{T as R}from"./ConfirmDialog-1.0.31-bZDmgpd0.js";import{g as E,n as N}from"./index-1.0.31-ujFQUobk.js";import{aq as K,ar as q,I as U,H as W,ae as _,a as $,P as J,B as Q,ap as X}from"./cjs-1.0.31-B-_HdexB.js";import{c1 as Y,l as m,v as Z,c9 as k,ca as ee}from"./lib-1.0.31-BbX3jq4e.js";import{a as V}from"./RestApi-1.0.31-C4KxgDIV.js";import{G as oe,I as C}from"./iconBase-1.0.31-C37NsRUm.js";import{T as A}from"./Tooltip-1.0.31-crORCg22.js";import{B as i}from"./Spinner-1.0.31-Be7r01J6.js";import{T as u}from"./TreeItem2-1.0.31-CX9p1qxK.js";import{P as te}from"./PremiumFeature-1.0.31-B1Kns6o6.js";import{u as re,d as ie,e as se}from"./ThemeContainer-1.0.31-D01zq5BI.js";import{A as H}from"./Accordion-1.0.31-CHSmI5oX.js";import{A as P}from"./AccordionSummary-1.0.31-DgKGWjRF.js";import{P as ne}from"./Menu-1.0.31-BOTBPSPr.js";import{S as le}from"./TreeItem2Provider-1.0.31-CzoUg0V9.js";import"./vendor-1.0.31-BmpNFhoq.js";import"./index-1.0.31-545nqCBP.js";import"./Typography-1.0.31-BdhCS1KD.js";import"./AdminTheme-1.0.31-QbwKcRV7.js";import"./DialogContent-1.0.31-_6ykng6a.js";import"./notistack-1.0.31-CuGQWCbt.js";import"./loglevel-1.0.31-BZ7XahX3.js";import"./lodash-1.0.31-BtCjXqrS.js";import"./moment-1.0.31-C5S46NFB.js";import"./Popper-1.0.31-QmfursjS.js";import"./useControlled-1.0.31-27-LkxG9.js";import"./Collapse-1.0.31-CkBm-DA4.js";import"./Checkbox-1.0.31-vMcA9dS9.js";import"./SwitchBase-1.0.31-AIM_3--O.js";import"./useFormControl-1.0.31-2YJOQA8g.js";import"./createSvgIcon-1.0.31-BC4iq9Gi.js";import"./index-1.0.31-C_6FsHsh.js";import"./FormLabel-1.0.31-7Vju-x1c.js";import"./main-1.0.31.js";import"./useStoreTable-1.0.31-CksmwD3u.js";import"./ActionsDml-1.0.31-DnIQKtBi.js";import"./useTheme-1.0.31-BXg8i2QZ.js";import"./index-1.0.31-DboOrfK9.js";import"./useScreenSize-1.0.31-DKas25yF.js";import"./dompurify-1.0.31-CCJo14B2.js";import"./FallbackSpinner-1.0.31-B4qqxHwC.js";function ae(s){return oe({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2 2h12l1 1v10l-1 1H2l-1-1V3l1-1zm0 11h12V3H2v10zm11-9H3v3h10V4zm-1 2H4V5h8v1zm-3 6h4V8H9v4zm1-3h2v2h-2V9zM7 8H3v1h4V8zm-4 3h4v1H3v-1z"},child:[]}]})(s)}const B=(s,p)=>{const a=(o,d)=>e.jsx(A,{title:"Enable | Disable",children:e.jsx("span",{children:e.jsx(C,{size:"small",color:"primary",onClick:()=>{d(!o)},disabled:!0,children:o?e.jsx(K,{}):e.jsx(q,{})})})});return{iconEnabled:a,codeLabel:(o,d,f,w,z,F,g)=>e.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[e.jsx("span",{children:o}),e.jsx("span",{children:f?e.jsxs(e.Fragment,{children:[a(F,g),e.jsx(A,{title:"Show | Hide",children:e.jsx("span",{children:e.jsx(C,{size:"small",color:"primary",onClick:()=>{z(!w)},disabled:!0,children:w?e.jsx(U,{}):e.jsx(W,{})})})})]}):e.jsx(A,{title:"Implement",children:e.jsx("span",{children:e.jsx(C,{size:"small",color:"primary",onClick:()=>{p!==void 0&&p(!0),d(),s!==void 0&&s(!1)},disabled:!0,children:e.jsx(_,{})})})})})]}),codeTitle:(o,d)=>e.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"25px auto",alignItems:"center",gap:"10px"},children:[e.jsx(i,{sx:{textAlign:"center","& div":{display:"flex",justifyContent:"center"}},children:o}),e.jsx("span",{children:d})]}),appsIcon:()=>e.jsx(i,{sx:{"& svg":{fontSize:"26px"}},children:e.jsx($,{})}),tableIcon:()=>e.jsx(i,{sx:{"& svg":{fontSize:"20px"}},children:e.jsx(E,{})}),formIcon:()=>e.jsx(i,{sx:{"& svg":{fontSize:"20px"}},children:e.jsx(ae,{})}),columnIcon:()=>e.jsx(i,{sx:{"& svg":{fontSize:"26px"}},children:e.jsx(J,{})}),getColumnLabel:o=>o.computedField===void 0?o.columnLabel:o.computedField.label}},de=({appId:s,tableSettings:p,globalCode:a,setUpdateStatus:I})=>{V();const{codeLabel:h,codeTitle:T,appsIcon:b}=B();return e.jsx(e.Fragment,{children:p.state.masterDetailConditions===void 0&&e.jsx(u,{itemId:"appGroup",label:T(b(),"App"),children:Y.map(n=>{var r,j;return e.jsx(u,{itemId:"app-"+n,label:h(n,()=>{},a[n]!==void 0,((r=a[n])==null?void 0:r.visible)??!0,o=>{m.debug(o)},((j=a[n])==null?void 0:j.enabled)??!0,o=>{m.debug(o)})},"app-"+n)})},"appGroup")})},eo=({appId:s,tableSettings:p,setUpdateStatus:a})=>{m.debug(s,p),V();const[I,h]=c.useState(!0),[T,b]=c.useState(!1),n=ie(),r=se(),j=re(s),{formIcon:o,codeLabel:d,codeTitle:f,appsIcon:w,columnIcon:z,getColumnLabel:F}=B(h,b),g=c.useMemo(()=>Z(),[]);return m.debug("popupId",g),c.useState(""),c.useState(!1),c.useState(void 0),c.useState(void 0),e.jsxs(y.Fragment,{children:[e.jsx(H,{disableGutters:!0,children:e.jsx(P,{children:e.jsx(L,{variant:"popover",popupId:g,children:v=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{sx:{width:"100%",display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(Q,{variant:"contained",endIcon:e.jsx(N,{}),...D(v),onMouseDown:()=>{v.isOpen&&h(!0)},children:"List of hooks"}),e.jsx(R,{title:"Documentation",children:e.jsx(C,{onClick:()=>{window.open("https://wpdataaccess.com/docs/table-hooks/getting-started-with-hooks/","_blank")},children:e.jsx(X,{})})})]}),e.jsx(ne,{...O(v),open:v.isOpen&&I,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},sx:{maxHeight:"70vh"},children:e.jsx(i,{sx:{minWidth:"360px",display:"grid",gap:"20px",padding:"20px","& .MuiTreeItem-content:hover ":{background:"rgba(248, 248, 248, 1) !important"}},children:e.jsxs(le,{children:[e.jsx(de,{appId:s,tableSettings:p,globalCode:n,setUpdateStatus:a}),e.jsx(u,{itemId:"formGroup",label:f(o(),"Form"),children:k.map(t=>{var M,l;return e.jsx(u,{itemId:"table-"+t,label:d(t,()=>{},r!==void 0&&r[t]!==void 0,(r!==void 0&&((M=r[t])==null?void 0:M.visible))??!0,x=>{m.debug(x)},(r!==void 0&&((l=r[t])==null?void 0:l.enabled))??!0,x=>{m.debug(x)})},"table-"+t)})},"formGroup"),e.jsxs(u,{itemId:"columnGroup",label:f(z(),"Columns"),children:[...j.map((t,M)=>t.computedField!==void 0?null:e.jsx(u,{itemId:t.columnName,label:F(t),children:ee.map(l=>{var x,G;return e.jsx(u,{itemId:"column-"+t.columnName+"-"+l,label:d(l,()=>{},t.columnCode[l]!==void 0,((x=t.columnCode[l])==null?void 0:x.visible)??!0,S=>{m.debug(S)},((G=t.columnCode[l])==null?void 0:G.enabled)??!0,S=>{m.debug(S)})},"column-"+t.columnName+"-"+l)})},t.columnName))]},"columnGroup")]})})})]})})})},"CodeBuilder"),!1,e.jsx(H,{disableGutters:!0,children:e.jsx(P,{children:e.jsx(i,{sx:{"& label":{marginTop:0}},children:e.jsx(te,{})})})})]},"CodeBuilderMain")};export{eo as default};