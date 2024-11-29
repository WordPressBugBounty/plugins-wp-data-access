import{l as e,r as _,j as s,q as k,ck as R,dL as E}from"./main-1.0.23.js";import{a as C}from"./RestApi-1.0.23-cc179eb9.js";import{c as B,d as L,e as T,f as q,g as z}from"./index.esm-1.0.23-da98f1a9.js";import{M as D}from"./index.esm-1.0.23-3107c6b2.js";import{F as M}from"./ThemeContainer-1.0.23-10b65460.js";import{F as U}from"./FormHelperText-1.0.23-83597bdf.js";import{B as S}from"./CardContent-1.0.23-cd3f2c87.js";import"./iconBase-1.0.23-43ac6f06.js";import"./Typography-1.0.23-19a0fd3e.js";import"./useTheme-1.0.23-55aea9bb.js";import"./colorManipulator-1.0.23-e382be1d.js";import"./index.esm-1.0.23-ba0465a2.js";import"./FallbackSpinner-1.0.23-96931408.js";import"./Spinner-1.0.23-90ab83ff.js";import"./Tooltip-1.0.23-1b58a848.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./Popper-1.0.23-4a0d0616.js";import"./useControlled-1.0.23-1e71c28b.js";import"./Grow-1.0.23-40b2ff68.js";import"./useFormControl-1.0.23-a0ae6ce7.js";const $="Upload or select %s from your WordPress media library",dr=({appId:d,columnName:o,columnValue:m,columnMetaData:f,onColumnChange:x,columnMedia:p,mediaType:u,locale:w,language:G,formMode:h,storeColumn:y})=>{e.debug(d,o,m,f,p,u);const I=_.useRef(null),v=C(),N=_.useMemo(()=>D,[]),F=r=>{if(e.debug(r),r!=null&&r.id&&(r!=null&&r.url)&&(r!=null&&r.mime)&&(r!=null&&r.title))return{value:r.id,media:{url:r.url,mime_type:r.mime,title:r.title}}},A=()=>{e.debug("update media");const r=R(f.data_type)!=="number";e.debug(r);let t="media",a="";switch(u){case"WP-Image":t="images(s)",a="image";break;case"WP-Audio":t="audio",a="audio";break;case"WP-Video":t="video(s)",a="video";break}e.debug(t,a);const n=window.wp.media({title:$.replace("%s",t),button:{text:"Select"},library:{type:a},multiple:r,render:!1});e.debug(n),n.on("select",function(){const l=[];if(r){const i=n.state().get("selection").toJSON();e.debug(i),i.map(P=>{e.debug(P);const W=F(P);W&&l.push(W)})}else{const i=F(n.state().get("selection").first().toJSON());i&&l.push(i)}e.debug(l);const c=[],g=[];for(let i=0;i<l.length;i++)c.push(l[i].value),g.push(JSON.stringify(l[i].media));e.debug(c,g),x(o,c.toString()),v(E({appId:d,columnName:o,columnValue:g}))}),n.open()},V=()=>{e.debug("delete media"),x(o,null),v(E({appId:d,columnName:o,columnValue:[]}))},J=r=>{switch(u){case"WP-Image":return s.jsx("img",{src:r.url,title:r.title,alt:r.title});case"WP-Attachment":{const t=r.mime_type.split("/");return s.jsxs("a",{href:r.url,title:r.title,target:"_blank",className:"pp-hyperlink",children:[s.jsxs("div",{children:[t[0]==="image"&&s.jsx(B,{}),t[0]==="audio"&&s.jsx(L,{}),t[0]==="video"&&s.jsx(T,{}),t[0]==="application"?t[1]==="pdf"?s.jsx(q,{}):s.jsx(z,{}):s.jsx(s.Fragment,{})]}),s.jsx("div",{className:"link-label",children:r.title})]})}case"WP-Audio":return s.jsx("audio",{controls:!0,children:s.jsx("source",{src:r.url,type:r.mime_type})});case"WP-Video":return s.jsx("video",{controls:!0,children:s.jsx("source",{src:r.url,type:r.mime_type})})}};return s.jsxs("div",{className:`media ${u}`,children:[s.jsxs(U,{children:[p==null?void 0:p.map(r=>{try{if(r===null||r==="")return null;const t=JSON.parse(r);return t!=null&&t.url?s.jsx("div",{ref:I,className:"content",children:J(t)},t.url):null}catch(t){return e.error("Invalid media properties",t),s.jsx("span",{children:"Error reading media"})}}),s.jsx("input",{type:"hidden",value:m??""})]}),s.jsxs("div",{className:"actions",children:[s.jsx(S,{variant:"outlined",onClick:A,disabled:!k.appPlugin||h===M.VIEW||y.updatable===!1,children:N.select}),s.jsx(S,{variant:"outlined",onClick:V,disabled:!k.appPlugin||h===M.VIEW||y.updatable===!1,children:w.delete})]})]})};export{dr as default};