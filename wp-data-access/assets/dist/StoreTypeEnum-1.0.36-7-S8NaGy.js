import{l as t,a9 as Pe,D as Se,A,a3 as f,p as L,aa as V,ab as he,ac as Ne,ad as Ae,b as Te,a2 as j,ae as G,a4 as de,a5 as Ce,af as _e,ag as De,S as Ie,ah as Je,ai as xe,aj as Re,ak as we,al as Ee,a6 as Fe}from"./lib-1.0.36-RK2jtnD_.js";import{a as Ue}from"./hooks-1.0.36-DVpFeylj.js";const Me=(c,R)=>({app_id:c,cnt_id:R}),Be=(c,R)=>({dbs:c,tbl:R}),Ge=(c,R)=>{t.debug(c,R);const v=Ue(),Oe=(i,u,e,T)=>{var m,_,J,a,N,O,y,w,E,F,U,M,s,n,S,k,q,W,z,H,K,Q,X,Z,$,ee,le,se,te,re,ne,ue,oe,me,ce,ie,pe,be,ge,fe,ae;t.debug(e);const h=(m=e.access.insert)==null?void 0:m.some(r=>r.toUpperCase()==="POST"),P=(_=e.access.update)==null?void 0:_.some(r=>r.toUpperCase()==="POST"),b=(J=e.access.delete)==null?void 0:J.some(r=>r.toUpperCase()==="POST");e.src=Be(i,u),e.privs={select:!0,insert:h,update:P,delete:b};let l={};((O=(N=(a=e==null?void 0:e.settings)==null?void 0:a.ui)==null?void 0:N.global)==null?void 0:O.table)!==!1?(l=f({},L,(E=(w=(y=e==null?void 0:e.settings)==null?void 0:y.ui)==null?void 0:w.global)==null?void 0:E.table),(S=(n=(s=(M=(U=(F=e==null?void 0:e.settings)==null?void 0:F.ui)==null?void 0:U.global)==null?void 0:M.table)==null?void 0:s.table)==null?void 0:n.pagination)!=null&&S.rowsPerPage&&(l.table.pagination.rowsPerPage=[...e.settings.ui.global.table.table.pagination.rowsPerPage]),(H=(z=(W=(q=(k=e==null?void 0:e.settings)==null?void 0:k.ui)==null?void 0:q.global)==null?void 0:W.table)==null?void 0:z.table)!=null&&H.defaultOrderBy&&(l.table.defaultOrderBy=[...e.settings.ui.global.table.table.defaultOrderBy])):l=f({},L,{table:{transactions:{insert:h,update:P,delete:b},bulkActions:{pdf:!1,csv:!0,json:!0,excel:!1,xml:!0,sql:!0,delete:(K=e==null?void 0:e.privs)==null?void 0:K.delete}}});const x=[];for(let r=0;r<e.columns.length;r++)x[r]=V(e.columns[r].column_name,e.table_labels[e.columns[r].column_name]??e.columns[r].column_name);const g=[];if(Array.isArray(l.columns)&&l.columns.length>0){for(let r=0;r<l.columns.length;r++){const B=_e(e,l.columns[r].columnName);B!==void 0?g.push(f({},x[B],l.columns[r])):g.push(f({},V(e.columns[r].column_name),l.columns[r]))}l.columns=g}else l.columns=x;l.table.largeTableSupport.saved===Ne.AUTO?l.table.largeTableSupport.actual=Ae(e):l.table.largeTableSupport.actual=l.table.largeTableSupport.saved,t.debug(l);let o={...j};((Z=(X=(Q=e==null?void 0:e.settings)==null?void 0:Q.ui)==null?void 0:X.global)==null?void 0:Z.form)!==!1&&(o=f({},j,(le=(ee=($=e==null?void 0:e.settings)==null?void 0:$.ui)==null?void 0:ee.global)==null?void 0:le.form));const d=[];for(let r=0;r<e.columns.length;r++)d[r]=G(e.columns[r].column_name,e.form_labels[e.columns[r].column_name]??e.columns[r].column_name);const C=[];if(Array.isArray(o.columns)&&o.columns.length>0){for(let r=0;r<o.columns.length;r++){const B=_e(e,o.columns[r].columnName);B!==void 0?C.push(f({},d[B],o.columns[r])):C.push(f({},G(o.columns[r].column_name),o.columns[r]))}o.columns=C}else o.columns=d;const D=De.getSelectors().selectSelected(Ie.getState().explorer);t.debug("selected",D),D&&D[i]==="wp"&&((te=(se=e==null?void 0:e.settings)==null?void 0:se.wp)==null?void 0:te.tables)!==void 0&&Array.isArray(e.settings.wp.tables)&&e.settings.wp.tables.includes(u)&&(o.form={...Je},o.form.preserveSpacesOnUpdate=!0);let I={};if(((ue=(ne=(re=e==null?void 0:e.settings)==null?void 0:re.ui)==null?void 0:ne.global)==null?void 0:ue.theme)!==void 0&&((ce=(me=(oe=e==null?void 0:e.settings)==null?void 0:oe.ui)==null?void 0:me.global)==null?void 0:ce.theme)!==null&&((be=(pe=(ie=e==null?void 0:e.settings)==null?void 0:ie.ui)==null?void 0:pe.global)==null?void 0:be.theme)!=="")try{I=JSON.parse((ae=(fe=(ge=e==null?void 0:e.settings)==null?void 0:ge.ui)==null?void 0:fe.global)==null?void 0:ae.theme)}catch(r){t.error("Invalid JSON - theme settings"),t.error(r)}I===!1&&(I={});const p=f({},xe,I);return Y(e,l,o,p,T===!0)},ye=(i,u,e,T,h,P)=>{var E,F,U,M;t.debug(i,u,e,T,h);const b=u.app.app[0];t.debug(b);const l=u.app.container[0];t.debug(l);let x={};try{x=JSON.parse(b.app_settings)}catch(s){t.error("Invalid JSON - app settings"),t.error(s)}t.debug(x);let g={};try{g=JSON.parse(l.cnt_cls)}catch(s){t.error("Invalid JSON - app columns"),t.error(s)}t.debug(g);const o=b.app_type,d=Number(o)===A.DATAENTRY||Number(o)===A.MASTERDETAIL||Number(o)===A.REGISTRATION,C=Number(o)===A.DATAENTRY||Number(o)===A.MASTERDETAIL||Number(o)===A.REGISTRATION||Number(o)===A.UPDATEFORM,D=Number(o)===A.DATAENTRY||Number(o)===A.MASTERDETAIL||Number(o)===A.REGISTRATION;t.debug(d,C,D),u.src=Me(i,l.cnt_id),u.privs={select:!0,insert:d,update:C,delete:D};const I=f({},L,{table:{transactions:{insert:d,update:C,delete:D},bulkActions:{pdf:!1,csv:!0,json:!0,excel:!1,xml:!0,sql:!0,delete:(E=u==null?void 0:u.privs)==null?void 0:E.delete}}});t.debug(I);let p={};if(l.cnt_table!==void 0&&l.cnt_table!==null&&l.cnt_table!=="")try{p=JSON.parse(l.cnt_table)}catch(s){t.error("Invalid JSON - table settings"),t.error(s)}t.debug(p);const m=f({},I,p);(U=(F=p==null?void 0:p.table)==null?void 0:F.pagination)!=null&&U.rowsPerPage&&(m.table.pagination.rowsPerPage=[...p.table.pagination.rowsPerPage]),(M=p==null?void 0:p.table)!=null&&M.defaultOrderBy&&(m.table.defaultOrderBy=[...p.table.defaultOrderBy]),t.debug(m);const _=[];for(let s=0;s<g.length;s++)g[s].isSelected===!0&&_.push(V(g[s].columnName,u.table_labels[g[s].columnName]??g[s].columnName,!0));if(t.debug(_),Array.isArray(m.columns)&&m.columns.length>0){const s=[];for(let n=0;n<m.columns.length;n++)if(m.columns[n].computedField!==void 0)s.push(f({},V(m.columns[n].columnName),m.columns[n]));else{const S=he(_,m.columns[n].columnName);S!==void 0&&s.push(f({},_[S],m.columns[n]))}_.map(n=>{s.filter(S=>S.columnName===n.columnName).length===0&&s.push(n)}),t.debug(s),m.columns=s}else m.columns=_;if(m.table.largeTableSupport.saved===Ne.AUTO?m.table.largeTableSupport.actual=Ae(u):m.table.largeTableSupport.actual=m.table.largeTableSupport.saved,(u==null?void 0:u.isRelationSelectionTable)===!0&&(p==null?void 0:p.columns)!==void 0&&Array.isArray(p.columns)){const s=[];p.columns.map(n=>{if(n.columnName.startsWith(Te.relationTablePrefix)){const S={...n};S.columnName=n.columnName.substring(Te.relationTablePrefix.length),s.push(S)}}),m.columns=[...s]}t.debug(m);let J={};if((l==null?void 0:l.cnt_form)!==void 0&&(l==null?void 0:l.cnt_form)!==null&&(l==null?void 0:l.cnt_form)!==""||u.useRform===!0&&(l==null?void 0:l.cnt_rform)!==void 0&&(l==null?void 0:l.cnt_rform)!==null&&(l==null?void 0:l.cnt_rform)!=="")try{u.useRform===!0?J=JSON.parse(l.cnt_rform):J=JSON.parse(l.cnt_form)}catch(s){t.error("Invalid JSON - form settings"),t.error(s)}t.debug(J);const a=f({},j,J);t.debug(a);const N=[];for(let s=0;s<g.length;s++)g[s].isSelected===!0&&N.push(G(g[s].columnName,u.form_labels[g[s].columnName]??g[s].columnName,!0));if(t.debug(N),Array.isArray(a.columns)&&a.columns.length>0){const s=[];for(let n=0;n<a.columns.length;n++)if(a.columns[n].computedField!==void 0)s.push(f({},N[n],a.columns[n]));else{const S=he(N,a.columns[n].columnName);S!==void 0&&s.push(f({},N[S],a.columns[n]))}N.map(n=>{s.filter(S=>S.columnName===n.columnName).length===0&&s.push(n)}),a.columns=s}else a.columns=N;t.debug(a);let O={};if((b==null?void 0:b.app_theme)!==void 0&&(b==null?void 0:b.app_theme)!==null&&(b==null?void 0:b.app_theme)!=="")try{O=JSON.parse(b.app_theme)}catch(s){t.error("Invalid JSON - theme settings"),t.error(s)}O===!1&&(O={}),t.debug(O),h!==void 0&&(u.appRootId=h);let y={};if((l==null?void 0:l.cnt_chart)!==void 0&&(l==null?void 0:l.cnt_chart)!==null&&(l==null?void 0:l.cnt_chart)!=="")try{y=JSON.parse(l.cnt_chart)}catch(s){t.error("Invalid JSON - chart settings"),t.error(s)}y===!1&&(y={}),t.debug(y);const w=f({},de,y);return t.debug(w),v(Ce({appId:c,chartState:w})),Y(u,m,a,O,e===!0,P)},ve=(i,u)=>{t.debug(i);const e=i.app.app[0];t.debug(e);let T={};try{T=JSON.parse(e.app_settings)}catch(h){t.error("Invalid JSON - app settings"),t.error(h)}return t.debug(T),v(Pe({appId:c,apps:i.app.apps,titles:i.app.titles,appSettings:T})),v(Se({appId:c,metaData:{...i,isExploring:u??!1}})),!0},Y=(i,u,e,T,h,P)=>(t.debug(i),v(Se({appId:c,metaData:{...i}})),v(Re({appId:c,tableState:u,tableAccess:{insert:i.privs.insert,update:i.privs.update,delete:i.privs.delete},isView:we(i),exploring:h})),v(Ee({appId:c,formState:e})),v(Fe({appId:c,themeState:T})),P!==void 0&&P(),!0);return{prepareAdminStore:Oe,prepareAppStore:ye,prepareApp:ve}};var Ve=(c=>(c[c.ADMIN=0]="ADMIN",c[c.APP=1]="APP",c))(Ve||{});export{Me as D,Ve as S,Ge as u};
