import{R as l}from"./RestApi-1.0.24-BCmVwqnT.js";import{C as t,l as o,bL as i,A}from"./lib-1.0.24-up-HxGpi.js";const f=(p,a,e=!1)=>{l(t.appUrlAppList,{},p,a,e)},g=(p,a,e=!1)=>{l(t.appUrlAppInit,{},p,a,e)},c=(p,a,e,s=!1)=>{l(t.appUrlAppSetSiteLanguage,{lang:p},a,e,s)},u=(p,a,e,s,n=!1)=>{o.debug(p,a);const r=i(p);p.appType==A.APPCONTAINER?(r.app_apps=p.appApps,delete r.app_dbs,delete r.app_tbl,delete r.app_cls):r.app_table=JSON.stringify(a),o.debug(r),l(p.appType==A.APPCONTAINER?t.appUrlAppCreateApp:t.appUrlAppCreate,r,e,s,n)},U=(p,a,e,s=!1)=>{o.debug(p),l(t.appUrlAppDetails,p,a,e,s)},_=(p,a,e,s=!1)=>{o.debug(p),l(t.appUrlAppRelationshipCreate,p,a,e,s)},C=(p,a,e,s=!1)=>{o.debug(p),l(t.appUrlAppRelationshipUpdate,p,a,e,s)},R=(p,a,e,s=!1)=>{o.debug(p);const n=i(p,!0);p.appType==A.APPCONTAINER&&(n.app_apps=p.appApps,delete n.app_dbs,delete n.app_tbl,delete n.app_cls),o.debug(n),l(p.appType==A.APPCONTAINER?t.appUrlAppSaveApp:t.appUrlAppSave,n,a,e,s)},T=(p,a,e,s=!1)=>{o.debug(p),l(t.appUrlAppRemove,{app_id:p},a,e,s)},m=(p,a,e,s=!1)=>{o.debug(p),l(t.appUrlAppCopy,{app_id:p},a,e,s)},N=(p,a,e,s=!1)=>{o.debug(p),l(t.appUrlAppExport,{app_id:p},a,e,s)},y=(p,a,e,s=!1)=>{o.debug(p),l(t.appUrlAppMeta,{app_id:p},a,e,s)},P=(p,a,e,s,n,r=!1)=>{o.debug(p,a),l(t.appUrlTableMeta,{dbs:p,tbl:a,waa:e},s,n,r)},E=(p,a,e,s,n=!1)=>{o.debug(p,a),l(t.appUrlRenameDatabase,{dbs_source:p,dbs_destination:a},e,s,n)};export{R as a,y as b,m as c,N as d,T as e,u as f,c as g,E as h,f as i,g as j,P as k,U as l,_ as m,C as n};
