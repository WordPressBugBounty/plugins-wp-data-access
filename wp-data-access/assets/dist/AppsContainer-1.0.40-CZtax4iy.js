import{j as t}from"./cm-1.0.40-DO7MoydR.js";import{r as m}from"./redux-1.0.40-W_04YL6Z.js";import{u as f,a as C}from"./hooks-1.0.40-DoKijNI1.js";import{l as u,A as D,a2 as _,a3 as z,a4 as L,a5 as W,S as G,v as H,G as I,a6 as U,d as q,a7 as J,a8 as K}from"./lib-1.0.40-CJM-IO_o.js";import{A as Q}from"./AppContainerSelector-1.0.40-CQwRK6WV.js";import{B as x,S as V}from"./Spinner-1.0.40-Bmn0_C4u.js";import{u as X,a as Y}from"./useChartSettings-1.0.40-CCxE4Zu8.js";import{u as v}from"./useMetadata-1.0.40-DdsiIGYX.js";import{u as Z}from"./useRemoveAppFromStore-1.0.40-DxUqDH6k.js";import{u as $,B as ee,C as te}from"./useFormDetails-1.0.40-DhJ-oNOJ.js";import{f as se,R as pe,A as oe,T as ne,M as re}from"./index-1.0.40-DmMQghWt.js";import{D as y}from"./DynamicModeEnum-1.0.40-BXuL5kgA.js";import{T as M}from"./Tooltip-1.0.40-Czv1q8N-.js";import{I as g}from"./iconBase-1.0.40-CH6TO7hF.js";import{M as ie}from"./MenuItem-1.0.40-UKMJrtYZ.js";import{M as ae}from"./Menu-1.0.40-BKp7UqHL.js";import{u as le}from"./useTableSettings-1.0.40-BK0DaQ_w.js";import{u as ce}from"./useStoreFormSettings-1.0.40-CICs2Pm_.js";import{u as me,A as ue}from"./AppTheme-1.0.40-whCBYKjb.js";import{T as de}from"./ThemeProvider-1.0.40-D9QtC9zH.js";import"./vendor-1.0.40-CN03Eozo.js";import"./loglevel-1.0.40-BZ7XahX3.js";import"./lodash-1.0.40-yZQKpWII.js";import"./moment-1.0.40-C5S46NFB.js";import"./main-1.0.40.js";import"./notistack-1.0.40-HUa4vT_u.js";import"./FallbackSpinner-1.0.40-Bwyy_LaW.js";import"./useLoadAppMetaData-1.0.40-BGYd8ze_.js";import"./ActionsApp-1.0.40-AuvirVl-.js";import"./RestApi-1.0.40-Uj1ofskP.js";import"./StoreTypeEnum-1.0.40-D0wfLstw.js";import"./MapPrepare-1.0.40-B4Ld8RF8.js";import"./Typography-1.0.40-oRKYqE3b.js";import"./lang-1.0.40-D4Y70Q_T.js";import"./useEnhancedEffect-1.0.40-DvrM_gBo.js";import"./useControlled-1.0.40-B7yPDtn1.js";import"./Popper-1.0.40-Jt4gcDMJ.js";import"./index-1.0.40-xxiPHCiq.js";import"./getThemeProps-1.0.40-CtGZuG5N.js";const xe=()=>{const e=f(s=>s.appData);return u.debug("appData",e),e},he=({appRootId:e,appId:s,appDbId:r,isVisible:a,fullScreen:o})=>{const[p,l]=m.useState(!1);return m.useEffect(()=>{a&&!p&&l(!0)},[a]),p?t.jsx(x,{className:"pp-apps-root"+(a?"":" pp-element-hide"),sx:{"& .pp-app-container .pp-component header.pp-header":{margin:0,visibility:"hidden",position:"absolute",left:-99999,top:-99999}},children:t.jsx(Q,{appId:s,appDbId:r,fullScreen:o,appRootId:e})}):null},fe=e=>{const s=f(r=>r.appApps[e]!==void 0?r.appApps[e].activeAppId??r.appApps[e].apps[0]:0);return u.debug("activeAppId",s,e),s},ge=e=>{const s=f(r=>r.appData[e]);return u.debug("appData",s),s},Ae=({appId:e})=>{const s=C(),r=$(e),a=v(e),o=ge(e);return t.jsx(M,{title:t.jsx(ee,{details:r,mode:o==null?void 0:o.mode}),className:"pp-builder-button",children:t.jsx(g,{sx:{color:"inherit",padding:0},onClick:()=>{var p,l;((l=(p=a==null?void 0:a.app)==null?void 0:p.app[0])==null?void 0:l.app_type)==D.CHART?s(_({appId:e})):(o==null?void 0:o.mode)===y.FORM?s(z({appId:e})):s(L({appId:e}))},children:t.jsx(se,{})})})},je=({appDbId:e,appTitle:s,setActiveApp:r,handleClose:a})=>t.jsx(ie,{onClick:()=>{r(e),a()},children:t.jsx("span",{children:s})}),Se=({apps:e,setActiveApp:s})=>{const[r,a]=m.useState(null),o=!!r,p=n=>{a(n.currentTarget),n.stopPropagation()},l=()=>{a(null)};return t.jsxs(x,{sx:{position:"relative"},children:[t.jsx(g,{sx:{color:"inherit",padding:0},onClick:p,children:t.jsx(pe,{})}),t.jsxs(ae,{anchorEl:r,open:o,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},sx:{marginTop:"8px","& ul":{padding:"0 !important"},"& ul li":{padding:"12px 24px 12px 18px !important"}},children:[...e.apps.map(n=>e.titles[n]===void 0?null:t.jsx(je,{appDbId:n,appTitle:e.titles[n],setActiveApp:s,handleClose:l}))]})]})},it=({appId:e})=>{var j,S,b,T;u.debug(e);const s=C(),r=Z(),a=te(),o=W.getSelectors().selectApps(G.getState().appApps,e),p=m.useMemo(()=>{const i={};return Array.isArray(o.apps)&&o.apps.length>0&&o.apps.map(h=>{i[h]=H()}),i},[]),l=X(e),n=v(e),F=m.useMemo(()=>{var i,h;return((h=(i=n==null?void 0:n.app)==null?void 0:i.app[0])==null?void 0:h.app_title)!==""?n.app.app[0].app_title:"WP Data Access"},[]),c=fe(e),E=i=>{s(K({appId:e,activeAppId:i}))};Y(p[c]);const B=le(p[c]),k=ce(p[c]),w=me(p[c]),O=ue(w,B,k),[d,be]=m.useState(((b=window.PP_APP_CONFIG[(S=(j=n==null?void 0:n.app)==null?void 0:j.app[0])==null?void 0:S.app_id])==null?void 0:b.appFullscreen)===!0);u.debug("appFullScreen",d);const A=xe();m.useEffect(()=>{u.debug("setFullScreen",p,d),Object.keys(p).map(i=>{s(I({appId:p[Number(i)],property:{fullScreen:d??!1}}))})},[A,d]);const P=((T=A[p[c]])==null?void 0:T.mode)??y.TABLE;u.debug("mode",P);let N={};const R=()=>null;return o===void 0||Object.keys(p).length===0?t.jsx(V,{}):t.jsx(de,{theme:O,children:t.jsxs(x,{className:"pp-apps-container",sx:{...d?N:{},"& .pp-element-hide":{visibility:"hidden",position:"absolute",left:-99999,top:-99999}},children:[t.jsx(oe,{className:"pp-apps-header",position:"relative",sx:{margin:"0 0 5px 0"},children:t.jsxs(ne,{sx:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(x,{sx:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center",gap:"5px","& span":{whiteSpace:"nowrap",fontSize:"18px",lineHeight:"18px",fontWeight:"bold"},"& span.pp-header-title":{minWidth:0,textOverflow:"ellipsis",overflow:"hidden",marginRight:"10px"}},children:[t.jsx("span",{children:t.jsx(Se,{apps:o,setActiveApp:E})}),t.jsxs("span",{className:"pp-header-title",children:[F," - ",o.titles[c]]})]}),t.jsxs(x,{sx:{display:"flex",gap:"10px",justifyContent:"center",alignItems:"center"},children:[U(n)&&t.jsx(Ae,{appId:p[c]}),R(),(n==null?void 0:n.isExploring)&&t.jsx(M,{title:l.close,children:t.jsx(g,{sx:{color:"inherit",padding:0},onClick:()=>{s(q({isActive:!1,appDbId:0})),a(e),r(e),s(J()),Object.keys(p).map(i=>{a(p[i]),r(p[i])})},children:t.jsx(re,{})})})]})]})}),...o.apps.map(i=>t.jsx(he,{appRootId:e,appId:p[i],appDbId:i,isVisible:i===c,fullScreen:d}))]})})};export{it as default};
