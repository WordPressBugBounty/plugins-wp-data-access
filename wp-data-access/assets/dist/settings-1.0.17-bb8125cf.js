import{cU as d,l as p,dp as B,S as c,bx as f,C as b,i as u,cx as A}from"./main-1.0.17.js";import{g as l}from"./usePrepareStore-1.0.17-a8be8b2f.js";import{a as m}from"./TargetEnum-1.0.17-1e1ba2c5.js";const _=(e,r,n,a,i,t,s,g,o=!1)=>{p.debug(e,r,n,a,i,t),l(u.appUrlSettings,{action:"admin_settings",dbs:n,tbl:a,settings:JSON.stringify({scope:e,target:r,data:i}),theme:JSON.stringify(t)},s,g,o)},y=(e,r,n,a,i,t,s,g=!1)=>{l(u.appUrlAppSettings,{app_id:e,cnt_id:r,target:n,settings:JSON.stringify(a),theme:JSON.stringify(i)},t,s,g)},J=(e,r,n,a,i=!1)=>{const t=d(e);p.debug(t);const{state:s,...g}=A(c.getState(),e);p.debug(s,g);const{...o}=f(c.getState(),e);p.debug(o),t.app_id?y(t.app_id,t.cnt_id,m.TABLE,g,o,n,a,i):t.dbs.trim()!==""&&t.tbl.trim()!==""?_(r,m.TABLE,t.dbs,t.tbl,g,o,n,a,i):(p.error("error","Missing data source"),a(b.contactSupport))},N=(e,r,n,a,i,t=!1)=>{const s=d(e);p.debug(s);const{state:g,...o}=B(c.getState(),e);p.debug(g,o);const{...S}=f(c.getState(),e);p.debug(S),s.app_id?y(s.app_id,s.cnt_id,n,o,S,a,i,t):s.dbs.trim()!==""&&s.tbl.trim()!==""?_(r,n,s.dbs,s.tbl,o,S,a,i,t):(p.error("error","Missing data source"),i(b.contactSupport))};export{_ as a,J as b,N as c,y as s};
