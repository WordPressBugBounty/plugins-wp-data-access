import{u,R as p}from"./RestApi-1.0.35-Bt-tzntO.js";import{l as n,C as c}from"./lib-1.0.35-vCbYWOI3.js";var d=(a=>(a[a.TABLE=0]="TABLE",a[a.VIEW=1]="VIEW",a))(d||{});const g=()=>{const a=u(t=>t.explorer.database);return n.debug(a),a},m=(a,t,o,e,s,r=!1)=>{n.debug(a,t,o),p(c.appUrlActionRename,{dbs:a,from_tbl:t,to_tbl:o},e,s,r)},_=(a,t,o,e,s,r,i,l=!1)=>{n.debug(a,t,o,e,s),p(c.appUrlActionCopy,{from_dbs:a,to_dbs:t,from_tbl:o,to_tbl:e,copy_data:s},r,i,l)},C=(a,t,o,e,s=!1)=>{n.debug(a,t),p(c.appUrlActionTruncate,{dbs:a,tbl:t},o,e,s)},U=(a,t,o,e,s,r=!1)=>{n.debug(a,t,o),p(c.appUrlActionDrop,{dbs:a,tbl:t,typ:o},e,s,r)},I=(a,t,o,e,s=!1)=>{n.debug(a);const r=new FormData;r.append("dbs",a),Object.keys(t).map(i=>{r.append("file"+i,t[i])}),p(c.appUrlActionImport,r,o,e,s)};export{d as T,U as a,C as b,I as c,_ as d,m as e,g as u};
