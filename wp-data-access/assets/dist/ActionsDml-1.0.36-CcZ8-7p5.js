import{l as r,C as u,b as g,aK as k}from"./lib-1.0.36-RK2jtnD_.js";import{R as f}from"./RestApi-1.0.36-XUqEDvWp.js";const i=e=>{r.debug(e);const s=k(e);return r.debug(s),{...s}},M=(e,s,t,o,a,p=!1)=>{r.debug(e,s),f(u.appUrlMeta,{dbs:e,tbl:s,waa:t},o,a,p)},S=(e,s,t,o,a,p=!1,l=!1)=>{r.debug(e,s,t);const c=i(e);c===!1?(r.error("error","Missing data source"),a(g.contactSupport)):(c.key=s,c.media=t,l&&(c.rel_tab=!0),f(c.app_id?u.appUrlAppGet:u.appUrlGet,c,n=>{r.debug(n),o(n)},a,p))},R=(e,s,t,o,a=!1,p=!1,l=!1)=>{r.debug(e,s);const c=i(e);c===!1?(r.error("error","Missing data source"),o(g.contactSupport)):(c.val=s,p&&(c.join_tab=!0),l&&(c.rel_tab=!0),f(c.app_id?u.appUrlAppInsert:u.appUrlInsert,c,t,o,a))},w=(e,s,t,o,a,p=!1,l=!1,c=!1)=>{r.debug(e,s,t);const n=i(e);n===!1?(r.error("error","Missing data source"),a(g.contactSupport)):(n.key=s,n.val=t,l&&(n.join_tab=!0),c&&(n.rel_tab=!0),f(n.app_id?u.appUrlAppUpdate:u.appUrlUpdate,n,o,a,p))},C=(e,s,t,o,a,p=!1)=>{r.debug(e,s,t);const l=i(e);l===!1?(r.error("error","Missing data source"),a(g.contactSupport)):(l.key=s,l.val=t,f(l.dbs!==void 0&&l.tbl!==void 0?u.appUrlUpdate:u.appUrlAppUpdateInline,l,o,a,p))},D=(e,s,t,o,a=!1)=>{r.debug(e,s);const p=i(e);p===!1?(r.error("error","Missing data source"),o(g.contactSupport)):(p.key=s,f(p.app_id?u.appUrlAppDelete:u.appUrlDelete,p,t,o,a))},I=(e,s,t,o,a,p,l,c,n,U=!1)=>{r.debug(e,s,t,o,a,p);const b=i(e);if(b===!1)r.error("error","Missing data source"),n(g.contactSupport);else{b.target=s,b.col=t,b.colk=o,b.colv=a,b.cold=p;for(const d in l)b[d]=l[d];f(u.appUrlAppLookup,b,c,n,U)}},L=(e,s,t,o=!1)=>{r.debug(e);const a=i(e);a===!1?(r.error("error","Missing data source"),t(g.contactSupport)):f(u.appUrlAppLookupDbs,a,s,t,o)},v=(e,s,t,o,a=!1)=>{r.debug(e);const p=i(e);p===!1?(r.error("error","Missing data source"),o(g.contactSupport)):(p.dbs=s,f(u.appUrlAppLookupTbl,p,t,o,a))},j=(e,s,t,o,a,p=!1)=>{r.debug(e);const l=i(e);l===!1?(r.error("error","Missing data source"),a(g.contactSupport)):(l.dbs=s,l.tbl=t,f(u.appUrlAppLookupCls,l,o,a,p))};export{v as a,j as b,L as c,D as d,C as e,M as g,R as i,I as l,S as s,w as u};
