import{r as o,_ as h,l as c,aZ as D,a8 as j,j as i,C as S}from"./main-1.0.18.js";import{a as T}from"./RestApi-1.0.18-cb72bd79.js";import{g as M}from"./ActionsDml-1.0.18-7e1a74e9.js";import{u as y,S as L}from"./usePrepareStore-1.0.18-44f9cb72.js";import{F as E}from"./FallbackSpinner-1.0.18-e10446f4.js";const P=o.lazy(()=>h(()=>import("./ThemeContainer-1.0.18-fbd92e13.js").then(a=>a.T),["./ThemeContainer-1.0.18-fbd92e13.js","./main-1.0.18.js","./RestApi-1.0.18-cb72bd79.js","./Typography-1.0.18-dc3c0740.js","./useTheme-1.0.18-c1f3f722.js","./colorManipulator-1.0.18-95bf61ec.js","./iconBase-1.0.18-3c21f5e2.js","./index.esm-1.0.18-12f13c4a.js","./FallbackSpinner-1.0.18-e10446f4.js","./Spinner-1.0.18-de8df990.js","./Tooltip-1.0.18-5f32f0fd.js","./ThemeProvider-1.0.18-247b72cc.js","./Popper-1.0.18-20544c9b.js","./useControlled-1.0.18-12a74006.js","./Grow-1.0.18-4ebc2ce8.js"],import.meta.url)),O=({dbs:a,tbl:r,appId:n,exploring:x})=>{c.debug(a,r,n);const u=T(),[l,m]=o.useState(""),[f,A]=o.useState(!1),{prepareAdminStore:g}=y(n,L.ADMIN);o.useEffect(()=>{f||_()},[a,r]);const _=()=>{M(a,r,!1,function(t){var d,p;const e=t==null?void 0:t.data;if(c.debug("response data",a,r,e),(d=e==null?void 0:e.access)!=null&&d.select&&Array.isArray(e.access.select)&&e.access.select.includes("POST"))g(a,r,e,x===!0)?A(!0):m(S.contactSupport);else{let s="Unauthorized";((p=t==null?void 0:t.data)==null?void 0:p.message)!==void 0&&(s=t.data.message),s+=" - check console for more information",c.error(s),m(s)}},t=>{c.error("error",t),m(t??S.contactSupport)})};return l!==""?(u(D({error:l})),u(j({})),null):f?i.jsx(o.Suspense,{fallback:i.jsx(E,{}),children:i.jsx(P,{appId:n})}):i.jsx(E,{})};export{O as A};