import{l as p,y as m,dk as f,dK as A,S as r,ay as u,C as l,c5 as B,ax as C}from"./main-1.0.18.js";import{R as b}from"./RestApi-1.0.18-cb72bd79.js";import{T as d}from"./TargetEnum-1.0.18-b82380d5.js";const y=(e,c,n,i,a,t,s,g,o=!1)=>{p.debug(e,c,n,i,a,t),b(m.appUrlSettings,{action:"admin_settings",dbs:n,tbl:i,settings:JSON.stringify({scope:e,target:c,data:a}),theme:JSON.stringify(t)},s,g,o)},_=(e,c,n,i,a,t,s,g=!1)=>{b(m.appUrlAppSettings,{app_id:e,cnt_id:c,target:n,settings:JSON.stringify(i),theme:JSON.stringify(a)},t,s,g)},O=(e,c,n,i,a=!1)=>{const t=f(e);p.debug(t);const{state:s,...g}=B(r.getState(),e);p.debug(s,g);const{...o}=u(r.getState(),e);p.debug(o),t.app_id?_(t.app_id,t.cnt_id,d.TABLE,g,o,n,i,a):t.dbs.trim()!==""&&t.tbl.trim()!==""?y(c,d.TABLE,t.dbs,t.tbl,g,o,n,i,a):(p.error("error","Missing data source"),i(l.contactSupport))},T=(e,c,n,i,a,t=!1)=>{const s=f(e);p.debug(s);const{state:g,...o}=A(r.getState(),e);p.debug(g,o);const{...S}=u(r.getState(),e);p.debug(S),s.app_id?_(s.app_id,s.cnt_id,n,o,S,i,a,t):s.dbs.trim()!==""&&s.tbl.trim()!==""?y(c,n,s.dbs,s.tbl,o,S,i,a,t):(p.error("error","Missing data source"),a(l.contactSupport))},h=(e,c,n,i=!1)=>{const a=f(e);p.debug(a,e);const t=a.app_id,s=a.cnt_id,g=C(r.getState(),e);p.debug(g);const{...o}=u(r.getState(),e);p.debug(o),b(m.appUrlAppSettings,{app_id:t,cnt_id:s,target:d.CHART,settings:JSON.stringify(g),theme:JSON.stringify(o)},c,n,i)};export{h as a,O as b,y as c,T as d,_ as s};
