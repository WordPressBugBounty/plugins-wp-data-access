import{u}from"./hooks-1.0.36-DVpFeylj.js";import{l as p,C as n}from"./lib-1.0.36-RK2jtnD_.js";import{R as c}from"./RestApi-1.0.36-XUqEDvWp.js";var d=(a=>(a[a.TABLE=0]="TABLE",a[a.VIEW=1]="VIEW",a))(d||{});const g=()=>{const a=u(o=>o.explorer.database);return p.debug(a),a},_=(a,o,t,e,s,r=!1)=>{p.debug(a,o,t),c(n.appUrlActionRename,{dbs:a,from_tbl:o,to_tbl:t},e,s,r)},C=(a,o,t,e,s,r,i,l=!1)=>{p.debug(a,o,t,e,s),c(n.appUrlActionCopy,{from_dbs:a,to_dbs:o,from_tbl:t,to_tbl:e,copy_data:s},r,i,l)},U=(a,o,t,e,s=!1)=>{p.debug(a,o),c(n.appUrlActionTruncate,{dbs:a,tbl:o},t,e,s)},I=(a,o,t,e,s,r=!1)=>{p.debug(a,o,t),c(n.appUrlActionDrop,{dbs:a,tbl:o,typ:t},e,s,r)},R=(a,o,t,e,s=!1)=>{p.debug(a);const r=new FormData;r.append("dbs",a),Object.keys(o).map(i=>{r.append("file"+i,o[i])}),c(n.appUrlActionImport,r,t,e,s)};export{d as T,I as a,U as b,R as c,C as d,_ as e,g as u};
