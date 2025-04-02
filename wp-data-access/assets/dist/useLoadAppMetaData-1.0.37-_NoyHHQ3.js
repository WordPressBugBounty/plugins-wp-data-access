import{r as C}from"./redux-1.0.37-C4JSQ-MG.js";import{R as l}from"./RestApi-1.0.37-CcjslynE.js";import{C as o,l as r,E as J,A as c,F as d,G as w,H as z,b as S}from"./lib-1.0.37-Czwr-8r3.js";import{e as T}from"./notistack-1.0.37-CEqipxDI.js";import{u as B,S as K,D as x}from"./StoreTypeEnum-1.0.37-Cx2hXwas.js";import{a as Q}from"./hooks-1.0.37-DW0_oiBB.js";const ep=(p,a,t=!1)=>{l(o.appUrlAppList,{},p,a,t)},ap=(p,a,t=!1)=>{l(o.appUrlAppInit,{},p,a,t)},tp=(p,a,t,s=!1)=>{l(o.appUrlAppSetSiteLanguage,{lang:p},a,t,s)},sp=(p,a,t,s,n=!1)=>{r.debug(p,a);const i=J(p);p.appType==c.APPCONTAINER?(i.app_apps=p.appApps,delete i.app_dbs,delete i.app_tbl,delete i.app_cls):i.app_table=JSON.stringify(a),r.debug(i),l(p.appType==c.APPCONTAINER?o.appUrlAppCreateApp:o.appUrlAppCreate,i,t,s,n)},rp=(p,a,t,s=!1)=>{r.debug(p),l(o.appUrlAppDetails,p,a,t,s)},op=(p,a,t,s=!1)=>{r.debug(p),l(o.appUrlAppRelationshipCreate,p,a,t,s)},np=(p,a,t,s=!1)=>{r.debug(p),l(o.appUrlAppRelationshipUpdate,p,a,t,s)},lp=(p,a,t,s=!1)=>{r.debug(p);const n=J(p,!0);p.appType==c.APPCONTAINER&&(n.app_apps=p.appApps,delete n.app_dbs,delete n.app_tbl,delete n.app_cls),r.debug(n),l(p.appType==c.APPCONTAINER?o.appUrlAppSaveApp:o.appUrlAppSave,n,a,t,s)},ip=(p,a,t,s=!1)=>{r.debug(p),l(o.appUrlAppRemove,{app_id:p},a,t,s)},cp=(p,a,t,s=!1)=>{r.debug(p),l(o.appUrlAppCopy,{app_id:p},a,t,s)},Ap=(p,a,t,s=!1)=>{r.debug(p),l(o.appUrlAppExport,{app_id:p},a,t,s)},V=(p,a,t,s=!1)=>{r.debug(p),l(o.appUrlAppMeta,{app_id:p},a,t,s)},up=(p,a,t,s,n,i=!1)=>{r.debug(p,a),l(o.appUrlTableMeta,{dbs:p,tbl:a,waa:t},s,n,i)},fp=(p,a,t,s,n=!1)=>{r.debug(p,a),l(o.appUrlRenameDatabase,{dbs_source:p,dbs_destination:a},t,s,n)},mp=(p,a,t,s,n,i,_,u)=>{const m=Q(),{prepareAppStore:k,prepareApp:H}=B(p,K.APP),[j,g]=C.useState(!1),[q,y]=C.useState(),[F,P]=C.useState(""),U=e=>{var f,N,D,R,E,M,v,O,h,L;if(r.debug(e),e.app&&e.app.app&&Array.isArray(e.app.app)&&e.app.container&&Array.isArray(e.app.container)&&e.app.apps&&Array.isArray(e.app.apps))if(e.app.app[0].app_type==c.APPCONTAINER)H(e,_),y(c.APPCONTAINER),g(!0);else if(e.app.app[0].app_type==c.CHART){const A={...e};A.src=x(a,(N=(f=e==null?void 0:e.app)==null?void 0:f.container[0])==null?void 0:N.cnt_id),_===!0&&(A.isExploring=!0),u!==void 0&&(A.appRootId=u),m(d({appId:p,metaData:A})),y(c.CHART),g(!0)}else if(e.app.app[0].app_type==c.MAP){const A={...e};A.src=x(a,(R=(D=e==null?void 0:e.app)==null?void 0:D.container[0])==null?void 0:R.cnt_id),_===!0&&(A.isExploring=!0),u!==void 0&&(A.appRootId=u);let b={};try{((M=(E=e==null?void 0:e.app)==null?void 0:E.container[0])==null?void 0:M.cnt_map)!==void 0&&((O=(v=e==null?void 0:e.app)==null?void 0:v.container[0])==null?void 0:O.cnt_map)!==null&&(b=JSON.parse((L=(h=e==null?void 0:e.app)==null?void 0:h.container[0])==null?void 0:L.cnt_map),delete b.state)}catch(G){r.error("Invalid JSON - map settings"),r.error(G),T("Invalid JSON, check console",{variant:"error"})}m(w({appId:p,mapState:b})),m(d({appId:p,metaData:A})),y(c.MAP),g(!0)}else k(a,e,t===!0,void 0,u,()=>{})&&(m(z({appId:p,property:{staticFilter:s,shortcodeArgs:n}})),y(e.app.app[0].app_type),g(!0));else T(S.contactSupport,{variant:"error"}),P(S.contactSupport)};return{loadAppMetaData:()=>{V(a,e=>{const f=e==null?void 0:e.data;r.debug("response data",f),U(f)},e=>{r.error("error",e),T(e??S.contactSupport,{variant:"error"}),P(e??S.contactSupport)})},processMetaData:U,metaDataLoaded:j,loadError:F,appType:q}};export{lp as a,V as b,cp as c,Ap as d,ip as e,sp as f,tp as g,fp as h,ep as i,ap as j,up as k,rp as l,op as m,np as n,mp as u};
