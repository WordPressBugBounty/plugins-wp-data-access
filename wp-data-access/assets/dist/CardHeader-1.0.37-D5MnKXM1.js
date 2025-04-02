import{r as D}from"./redux-1.0.37-C4JSQ-MG.js";import{g as I,h as q,i as z,T as p,j as u,l as G,t as b}from"./Typography-1.0.37-DjtXWQnP.js";import{b as s}from"./iconBase-1.0.37-DRohixw7.js";import{j as n}from"./cm-1.0.37-CEr77VZi.js";function J(t){return q("MuiCardHeader",t)}const c=I("MuiCardHeader",["root","avatar","action","content","title","subheader"]),K=t=>{const{classes:e}=t;return G({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},J,e)},L=u("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(t,e)=>[{[`& .${c.title}`]:e.title},{[`& .${c.subheader}`]:e.subheader},e.root]})({display:"flex",alignItems:"center",padding:16}),O=u("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(t,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Q=u("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(t,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),V=u("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(t,e)=>e.content})({flex:"1 1 auto",[`.${b.root}:where(& .${c.title})`]:{display:"block"},[`.${b.root}:where(& .${c.subheader})`]:{display:"block"}}),_=D.forwardRef(function(e,h){const y=z({props:e,name:"MuiCardHeader"}),{action:v,avatar:d,component:C="div",disableTypography:m=!1,subheader:f,subheaderTypographyProps:x,title:g,titleTypographyProps:P,slots:S={},slotProps:H={},...T}=y,o={...y,component:C,disableTypography:m},a=K(o),r={slots:S,slotProps:{title:P,subheader:x,...H}};let l=g;const[R,j]=s("title",{className:a.title,elementType:p,externalForwardedProps:r,ownerState:o,additionalProps:{variant:d?"body2":"h5",component:"span"}});l!=null&&l.type!==p&&!m&&(l=n.jsx(R,{...j,children:l}));let i=f;const[M,w]=s("subheader",{className:a.subheader,elementType:p,externalForwardedProps:r,ownerState:o,additionalProps:{variant:d?"body2":"body1",color:"textSecondary",component:"span"}});i!=null&&i.type!==p&&!m&&(i=n.jsx(M,{...w,children:i}));const[A,N]=s("root",{ref:h,className:a.root,elementType:L,externalForwardedProps:{...r,...T,component:C},ownerState:o}),[$,U]=s("avatar",{className:a.avatar,elementType:O,externalForwardedProps:r,ownerState:o}),[k,E]=s("content",{className:a.content,elementType:V,externalForwardedProps:r,ownerState:o}),[F,B]=s("action",{className:a.action,elementType:Q,externalForwardedProps:r,ownerState:o});return n.jsxs(A,{...N,children:[d&&n.jsx($,{...U,children:d}),n.jsxs(k,{...E,children:[l,i]}),v&&n.jsx(F,{...B,children:v})]})});export{_ as C};
