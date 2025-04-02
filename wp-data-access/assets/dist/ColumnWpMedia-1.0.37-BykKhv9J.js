import{j as s}from"./cm-1.0.37-CEr77VZi.js";import{r as _}from"./redux-1.0.37-C4JSQ-MG.js";import{l as t,co as L,C as k,ba as w,bR as T,cB as E}from"./lib-1.0.37-Czwr-8r3.js";import{a as H}from"./hooks-1.0.37-DW0_oiBB.js";import{k as z,l as C,m as U,n as $,o as q}from"./index-1.0.37-CK0QxOhD.js";import{M as D}from"./lang-1.0.37-CfHlhLgz.js";import{B as G}from"./Spinner-1.0.37-CwhfSVqI.js";import{F as M,a as K}from"./FormHelperText-1.0.37-ylnS0Km6.js";import{B as S}from"./ConfirmDialog-1.0.37-BDQ_OfRf.js";import"./vendor-1.0.37-CN03Eozo.js";import"./loglevel-1.0.37-BZ7XahX3.js";import"./lodash-1.0.37-Dx3wKrSf.js";import"./moment-1.0.37-C5S46NFB.js";import"./iconBase-1.0.37-DRohixw7.js";import"./Typography-1.0.37-DjtXWQnP.js";import"./useEnhancedEffect-1.0.37-UwysO4qr.js";import"./utils-1.0.37-iop7lDec.js";import"./useFormControl-1.0.37-BcUwa2qz.js";import"./AdminTheme-1.0.37-7PLndQ8H.js";import"./index-1.0.37-B60ShF2d.js";import"./notistack-1.0.37-CEqipxDI.js";const Q="Upload or select %s from your WordPress media library",xr=({appId:m,columnName:o,columnValue:x,columnMetaData:f,onColumnChange:h,columnMedia:u,mediaType:d,locale:I,language:X,formMode:y,storeColumn:a,storeTable:N})=>{t.debug(m,o,x,f,u,d);const A=_.useRef(null),F=H(),B=_.useMemo(()=>D,[]),v=r=>{if(t.debug(r),r!=null&&r.id&&(r!=null&&r.url)&&(r!=null&&r.mime)&&(r!=null&&r.title))return{value:r.id,media:{url:r.url,mime_type:r.mime,title:r.title}}},R=()=>{t.debug("update media");const r=T(f.data_type)!=="number";t.debug(r);let e="media",n="";switch(d){case"WP-Image":e="images(s)",n="image";break;case"WP-Audio":e="audio",n="audio";break;case"WP-Video":e="video(s)",n="video";break}t.debug(e,n);const p=window.wp.media({title:Q.replace("%s",e),button:{text:"Select"},library:{type:n},multiple:r,render:!1});t.debug("frame",p),p.on("select",function(){const l=[];if(r){const i=p.state().get("selection").toJSON();t.debug(i),i.map(W=>{t.debug(W);const P=v(W);P&&l.push(P)})}else{const i=v(p.state().get("selection").first().toJSON());i&&l.push(i)}t.debug("media",l);const c=[],g=[];for(let i=0;i<l.length;i++)c.push(l[i].value),g.push(JSON.stringify(l[i].media));t.debug(c,g),h(o,c.toString()),F(E({appId:m,columnName:o,columnValue:g}))}),p.open(),N.formModal&&window.document.body.classList.add("pp-media-modal")},V=()=>{t.debug("delete media"),h(o,null),F(E({appId:m,columnName:o,columnValue:[]}))},J=r=>{switch(d){case"WP-Image":return s.jsx("img",{src:r.url,title:r.title,alt:r.title});case"WP-Attachment":{const e=r.mime_type.split("/");return s.jsxs("a",{href:r.url,title:r.title,target:"_blank",className:"pp-hyperlink",children:[s.jsxs("div",{children:[e[0]==="image"&&s.jsx(z,{}),e[0]==="audio"&&s.jsx(C,{}),e[0]==="video"&&s.jsx(U,{}),e[0]==="application"?e[1]==="pdf"?s.jsx($,{}):s.jsx(q,{}):s.jsx(s.Fragment,{})]}),s.jsx("div",{className:"link-label",children:r.title})]})}case"WP-Audio":return s.jsx("audio",{controls:!0,children:s.jsx("source",{src:r.url,type:r.mime_type})});case"WP-Video":return s.jsx("video",{controls:!0,children:s.jsx("source",{src:r.url,type:r.mime_type})})}};return s.jsxs("fieldset",{className:`pp-fieldset media ${d}`,children:[s.jsx("legend",{children:f.formLabel}),s.jsxs(G,{children:[s.jsxs(M,{fullWidth:!0,children:[u==null?void 0:u.map(r=>{try{if(r===null||r==="")return null;const e=JSON.parse(r);return e!=null&&e.url?s.jsx("div",{ref:A,className:"content",children:J(e)},e.url):null}catch(e){return t.error("Invalid media properties",e),s.jsx("span",{children:"Error reading media"})}}),s.jsx("input",{type:"hidden",value:x??""})]}),a.hint&&a.hint.trim()!==""&&s.jsx(M,{sx:{marginTop:"20px"},children:s.jsx(K,{sx:{marginLeft:0},children:L(a,"")})})]}),s.jsxs("div",{className:"actions",children:[s.jsx(S,{variant:"outlined",onClick:R,disabled:!k.appPlugin||y===w.VIEW||a.updatable===!1,children:B.select}),s.jsx(S,{variant:"outlined",onClick:V,disabled:!k.appPlugin||y===w.VIEW||a.updatable===!1,children:I.delete})]})]})};export{xr as default};
