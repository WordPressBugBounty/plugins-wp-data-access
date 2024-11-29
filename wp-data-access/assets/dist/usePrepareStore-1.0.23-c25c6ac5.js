import{l as r,am as S,y as L,aJ as B,aK as Se,aL as he,aM as Ne,al as V,aN as q,aO as Pe,S as Ce,aP as De,a9 as Ie,a as T,aQ as Te,C as Ae,aR as we,aq as ve,aS as Je,aT as Re,aU as xe,ap as Ee}from"./main-1.0.23.js";import{a as Fe}from"./RestApi-1.0.23-cc179eb9.js";var Ue=(p=>(p[p.ADMIN=0]="ADMIN",p[p.APP=1]="APP",p))(Ue||{});const Me=(p,R)=>({app_id:p,cnt_id:R}),Be=(p,R)=>({dbs:p,tbl:R}),qe=(p,R)=>{r.debug(p,R);const w=Fe(),_e=(i,o,e,A)=>{var m,v,I,f,N,_,x,E,F,U,s,n,a,Y,j,k,K,Q,W,d,z,H,X,Z,$,ee,le,se,re,te,ne,oe,ue,me,ie,ce,pe,be,ge,fe,ae;r.debug(e);const h=(m=e.access.insert)==null?void 0:m.some(t=>t.toUpperCase()==="POST"),O=(v=e.access.update)==null?void 0:v.some(t=>t.toUpperCase()==="POST"),b=(I=e.access.delete)==null?void 0:I.some(t=>t.toUpperCase()==="POST");e.src=Be(i,o),e.privs={select:!0,insert:h,update:O,delete:b};let l={};((_=(N=(f=e==null?void 0:e.settings)==null?void 0:f.ui)==null?void 0:N.global)==null?void 0:_.table)!==!1?(l=S({},L,(F=(E=(x=e==null?void 0:e.settings)==null?void 0:x.ui)==null?void 0:E.global)==null?void 0:F.table),(j=(Y=(a=(n=(s=(U=e==null?void 0:e.settings)==null?void 0:U.ui)==null?void 0:s.global)==null?void 0:n.table)==null?void 0:a.table)==null?void 0:Y.pagination)!=null&&j.rowsPerPage&&(l.table.pagination.rowsPerPage=[...e.settings.ui.global.table.table.pagination.rowsPerPage]),(d=(W=(Q=(K=(k=e==null?void 0:e.settings)==null?void 0:k.ui)==null?void 0:K.global)==null?void 0:Q.table)==null?void 0:W.table)!=null&&d.defaultOrderBy&&(l.table.defaultOrderBy=[...e.settings.ui.global.table.table.defaultOrderBy])):l=S({},L,{table:{transactions:{insert:h,update:O,delete:b},bulkActions:{pdf:!1,csv:!0,json:!0,excel:!1,xml:!0,sql:!0,delete:(z=e==null?void 0:e.privs)==null?void 0:z.delete}}});const J=[];for(let t=0;t<e.columns.length;t++)J[t]=B(e.columns[t].column_name,e.table_labels[e.columns[t].column_name]??e.columns[t].column_name);const g=[];if(Array.isArray(l.columns)&&l.columns.length>0){for(let t=0;t<l.columns.length;t++){const M=Se(e,l.columns[t].columnName);M!==void 0?g.push(S({},J[M],l.columns[t])):g.push(S({},B(e.columns[t].column_name),l.columns[t]))}l.columns=g}else l.columns=J;l.table.largeTableSupport.saved===he.AUTO?l.table.largeTableSupport.actual=Ne(e):l.table.largeTableSupport.actual=l.table.largeTableSupport.saved,r.debug(l);let u={...V};((Z=(X=(H=e==null?void 0:e.settings)==null?void 0:H.ui)==null?void 0:X.global)==null?void 0:Z.form)!==!1&&(u=S({},V,(le=(ee=($=e==null?void 0:e.settings)==null?void 0:$.ui)==null?void 0:ee.global)==null?void 0:le.form));const y=[];for(let t=0;t<e.columns.length;t++)y[t]=q(e.columns[t].column_name,e.form_labels[e.columns[t].column_name]??e.columns[t].column_name);const P=[];if(Array.isArray(u.columns)&&u.columns.length>0){for(let t=0;t<u.columns.length;t++){const M=Se(e,u.columns[t].columnName);M!==void 0?P.push(S({},y[M],u.columns[t])):P.push(S({},q(u.columns[t].column_name),u.columns[t]))}u.columns=P}else u.columns=y;const C=Pe(Ce.getState());r.debug("selected",C),C&&C[i]==="wp"&&((re=(se=e==null?void 0:e.settings)==null?void 0:se.wp)==null?void 0:re.tables)!==void 0&&Array.isArray(e.settings.wp.tables)&&e.settings.wp.tables.includes(o)&&(u.form={...De},u.form.preserveSpacesOnUpdate=!0);let D={};if(((oe=(ne=(te=e==null?void 0:e.settings)==null?void 0:te.ui)==null?void 0:ne.global)==null?void 0:oe.theme)!==void 0&&((ie=(me=(ue=e==null?void 0:e.settings)==null?void 0:ue.ui)==null?void 0:me.global)==null?void 0:ie.theme)!==null&&((be=(pe=(ce=e==null?void 0:e.settings)==null?void 0:ce.ui)==null?void 0:pe.global)==null?void 0:be.theme)!=="")try{D=JSON.parse((ae=(fe=(ge=e==null?void 0:e.settings)==null?void 0:ge.ui)==null?void 0:fe.global)==null?void 0:ae.theme)}catch(t){r.error("Invalid JSON - theme settings"),r.error(t)}D===!1&&(D={});const c=S({},Ie,D);return G(e,l,u,c,A===!0)},Oe=(i,o,e,A,h,O)=>{var x,E,F,U;r.debug(i,o,e,A,h);const b=o.app.app[0];r.debug(b);const l=o.app.container[0];r.debug(l);let J={};try{J=JSON.parse(b.app_settings)}catch(s){r.error("Invalid JSON - app settings"),r.error(s)}r.debug(J);let g={};try{g=JSON.parse(l.cnt_cls)}catch(s){r.error("Invalid JSON - app columns"),r.error(s)}r.debug(g);const u=b.app_type,y=Number(u)===T.DATAENTRY||Number(u)===T.MASTERDETAIL||Number(u)===T.REGISTRATION,P=Number(u)===T.DATAENTRY||Number(u)===T.MASTERDETAIL||Number(u)===T.REGISTRATION||Number(u)===T.UPDATEFORM,C=Number(u)===T.DATAENTRY||Number(u)===T.MASTERDETAIL||Number(u)===T.REGISTRATION;r.debug(y,P,C),o.src=Me(i,l.cnt_id),o.privs={select:!0,insert:y,update:P,delete:C};const D=S({},L,{table:{transactions:{insert:y,update:P,delete:C},bulkActions:{pdf:!1,csv:!0,json:!0,excel:!1,xml:!0,sql:!0,delete:(x=o==null?void 0:o.privs)==null?void 0:x.delete}}});r.debug(D);let c={};if(l.cnt_table!==void 0&&l.cnt_table!==null&&l.cnt_table!=="")try{c=JSON.parse(l.cnt_table)}catch(s){r.error("Invalid JSON - table settings"),r.error(s)}r.debug(c);const m=S({},D,c);(F=(E=c==null?void 0:c.table)==null?void 0:E.pagination)!=null&&F.rowsPerPage&&(m.table.pagination.rowsPerPage=[...c.table.pagination.rowsPerPage]),(U=c==null?void 0:c.table)!=null&&U.defaultOrderBy&&(m.table.defaultOrderBy=[...c.table.defaultOrderBy]),r.debug(m);const v=[];for(let s=0;s<g.length;s++)if(g[s].isSelected===!0){let n=!0;v.push(B(g[s].columnName,o.table_labels[g[s].columnName]??g[s].columnName,n))}if(r.debug(v),Array.isArray(m.columns)&&m.columns.length>0){const s=[];for(let n=0;n<m.columns.length;n++)if(m.columns[n].computedField!==void 0)s.push(S({},B(m.columns[n].columnName),m.columns[n]));else{const a=Te(v,m.columns[n].columnName);a!==void 0&&s.push(S({},v[a],m.columns[n]))}v.map(n=>{s.filter(a=>a.columnName===n.columnName).length===0&&s.push(n)}),r.debug(s),m.columns=s}else m.columns=v;if(m.table.largeTableSupport.saved===he.AUTO?m.table.largeTableSupport.actual=Ne(o):m.table.largeTableSupport.actual=m.table.largeTableSupport.saved,(o==null?void 0:o.isRelationSelectionTable)===!0&&(c==null?void 0:c.columns)!==void 0&&Array.isArray(c.columns)){const s=[];c.columns.map(n=>{if(n.columnName.startsWith(Ae.relationTablePrefix)){const a={...n};a.columnName=n.columnName.substring(Ae.relationTablePrefix.length),s.push(a)}}),m.columns=[...s]}r.debug(m);let I={};if((l==null?void 0:l.cnt_form)!==void 0&&(l==null?void 0:l.cnt_form)!==null&&(l==null?void 0:l.cnt_form)!==""||o.useRform===!0&&(l==null?void 0:l.cnt_rform)!==void 0&&(l==null?void 0:l.cnt_rform)!==null&&(l==null?void 0:l.cnt_rform)!=="")try{o.useRform===!0?I=JSON.parse(l.cnt_rform):I=JSON.parse(l.cnt_form)}catch(s){r.error("Invalid JSON - form settings"),r.error(s)}r.debug(I);const f=S({},V,I);r.debug(f);const N=[];for(let s=0;s<g.length;s++)if(g[s].isSelected===!0){let n=!0;N.push(q(g[s].columnName,o.form_labels[g[s].columnName]??g[s].columnName,n))}if(r.debug(N),Array.isArray(f.columns)&&f.columns.length>0){const s=[];for(let n=0;n<f.columns.length;n++)if(f.columns[n].computedField!==void 0)s.push(S({},N[n],f.columns[n]));else{const a=Te(N,f.columns[n].columnName);a!==void 0&&s.push(S({},N[a],f.columns[n]))}N.map(n=>{s.filter(a=>a.columnName===n.columnName).length===0&&s.push(n)}),f.columns=s}else f.columns=N;r.debug(f);let _={};if((b==null?void 0:b.app_theme)!==void 0&&(b==null?void 0:b.app_theme)!==null&&(b==null?void 0:b.app_theme)!=="")try{_=JSON.parse(b.app_theme)}catch(s){r.error("Invalid JSON - theme settings"),r.error(s)}return _===!1&&(_={}),r.debug(_),h!==void 0&&(o.appRootId=h),G(o,m,f,_,e===!0,O)},ye=(i,o)=>{r.debug(i);const e=i.app.app[0];r.debug(e);let A={};try{A=JSON.parse(e.app_settings)}catch(h){r.error("Invalid JSON - app settings"),r.error(h)}return r.debug(A),w(we({appId:p,apps:i.app.apps,titles:i.app.titles,appSettings:A})),w(ve({appId:p,metaData:{...i,isExploring:o??!1}})),!0},G=(i,o,e,A,h,O)=>(r.debug(i),w(ve({appId:p,metaData:{...i}})),w(Je({appId:p,tableState:o,tableAccess:{insert:i.privs.insert,update:i.privs.update,delete:i.privs.delete},isView:Re(i),exploring:h})),w(xe({appId:p,formState:e})),w(Ee({appId:p,themeState:A})),O!==void 0&&O(),!0);return{prepareAdminStore:_e,prepareAppStore:Oe,prepareApp:ye}};export{Me as D,Ue as S,qe as u};