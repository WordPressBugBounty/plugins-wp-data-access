import{l as e,r as _,j as s,y as k,cD as R,en as E}from"./main-1.0.18.js";import{a as C}from"./RestApi-1.0.18-cb72bd79.js";import{c as B,d as D,e as T,f as z,g as L}from"./index.esm-1.0.18-32f5cee0.js";import{M as U}from"./index.esm-1.0.18-3107c6b2.js";import{F as M}from"./ThemeContainer-1.0.18-fbd92e13.js";import{F as $}from"./FormHelperText-1.0.18-8b4ce85f.js";import{B as S}from"./CardContent-1.0.18-3d5e5525.js";import"./Typography-1.0.18-dc3c0740.js";import"./iconBase-1.0.18-3c21f5e2.js";import"./useTheme-1.0.18-c1f3f722.js";import"./colorManipulator-1.0.18-95bf61ec.js";import"./index.esm-1.0.18-12f13c4a.js";import"./FallbackSpinner-1.0.18-e10446f4.js";import"./Spinner-1.0.18-de8df990.js";import"./Tooltip-1.0.18-5f32f0fd.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Popper-1.0.18-20544c9b.js";import"./useControlled-1.0.18-12a74006.js";import"./Grow-1.0.18-4ebc2ce8.js";import"./useFormControl-1.0.18-87a8487d.js";const q="Upload or select %s from your WordPress media library",dr=({appId:d,columnName:o,columnValue:m,columnMetaData:f,onColumnChange:x,columnMedia:p,mediaType:u,locale:w,language:G,formMode:h,storeColumn:y})=>{e.debug(d,o,m,f,p,u);const I=_.useRef(null),v=C(),N=_.useMemo(()=>U,[]),F=r=>{if(e.debug(r),r!=null&&r.id&&(r!=null&&r.url)&&(r!=null&&r.mime)&&(r!=null&&r.title))return{value:r.id,media:{url:r.url,mime_type:r.mime,title:r.title}}},A=()=>{e.debug("update media");const r=R(f.data_type)!=="number";e.debug(r);let t="media",n="";switch(u){case"WP-Image":t="images(s)",n="image";break;case"WP-Audio":t="audio",n="audio";break;case"WP-Video":t="video(s)",n="video";break}e.debug(t,n);const a=window.wp.media({title:q.replace("%s",t),button:{text:"Select"},library:{type:n},multiple:r,render:!1});e.debug(a),a.on("select",function(){const l=[];if(r){const i=a.state().get("selection").toJSON();e.debug(i),i.map(P=>{e.debug(P);const W=F(P);W&&l.push(W)})}else{const i=F(a.state().get("selection").first().toJSON());i&&l.push(i)}e.debug(l);const c=[],g=[];for(let i=0;i<l.length;i++)c.push(l[i].value),g.push(JSON.stringify(l[i].media));e.debug(c,g),x(o,c.toString()),v(E({appId:d,columnName:o,columnValue:g}))}),a.open()},V=()=>{e.debug("delete media"),x(o,null),v(E({appId:d,columnName:o,columnValue:[]}))},J=r=>{switch(u){case"WP-Image":return s.jsx("img",{src:r.url,title:r.title,alt:r.title});case"WP-Attachment":{const t=r.mime_type.split("/");return s.jsxs("a",{href:r.url,title:r.title,target:"_blank",className:"pp-hyperlink",children:[s.jsxs("div",{children:[t[0]==="image"&&s.jsx(B,{}),t[0]==="audio"&&s.jsx(D,{}),t[0]==="video"&&s.jsx(T,{}),t[0]==="application"?t[1]==="pdf"?s.jsx(z,{}):s.jsx(L,{}):s.jsx(s.Fragment,{})]}),s.jsx("div",{className:"link-label",children:r.title})]})}case"WP-Audio":return s.jsx("audio",{controls:!0,children:s.jsx("source",{src:r.url,type:r.mime_type})});case"WP-Video":return s.jsx("video",{controls:!0,children:s.jsx("source",{src:r.url,type:r.mime_type})})}};return s.jsxs("div",{className:`media ${u}`,children:[s.jsxs($,{children:[p==null?void 0:p.map(r=>{try{if(r===null||r==="")return null;const t=JSON.parse(r);return t!=null&&t.url?s.jsx("div",{ref:I,className:"content",children:J(t)},t.url):null}catch(t){return e.error("Invalid media properties",t),s.jsx("span",{children:"Error reading media"})}}),s.jsx("input",{type:"hidden",value:m??""})]}),s.jsxs("div",{className:"actions",children:[s.jsx(S,{variant:"outlined",onClick:A,disabled:!k.appPlugin||h===M.VIEW||y.updatable===!1,children:N.select}),s.jsx(S,{variant:"outlined",onClick:V,disabled:!k.appPlugin||h===M.VIEW||y.updatable===!1,children:w.delete})]})]})};export{dr as default};
