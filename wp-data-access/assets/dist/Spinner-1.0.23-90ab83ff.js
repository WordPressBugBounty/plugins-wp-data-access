import{r as B,j as n,k as E}from"./main-1.0.23.js";import{s as I,a as F,u as U,e as z,_ as M,b as m,c as R,g as D,d as G,f as K,C as L,h as W,k as T,i as y,j as f,l as w,m as A,n as H,T as V}from"./Typography-1.0.23-19a0fd3e.js";const Z=["className","component"];function q(e={}){const{themeId:r,defaultTheme:s,defaultClassName:t="MuiBox-root",generateClassName:c}=e,u=I("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(F);return B.forwardRef(function(g,l){const i=U(s),x=z(g),{className:C,component:d="div"}=x,h=M(x,Z);return n.jsx(u,m({as:d,ref:l,className:R(C,c?c(t):t),theme:r&&i[r]||i},h))})}const J=D("MuiBox",["root"]),O=J,Q=G(),X=q({themeId:K,defaultTheme:Q,defaultClassName:O.root,generateClassName:L.generate}),Y=X;function ee(e){return W("MuiCircularProgress",e)}D("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const re=["className","color","disableShrink","size","style","thickness","value","variant"];let p=e=>e,$,N,j,_;const o=44,se=T($||($=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),te=T(N||(N=p`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),ae=e=>{const{classes:r,variant:s,color:t,disableShrink:c}=e,u={root:["root",s,`color${f(t)}`],svg:["svg"],circle:["circle",`circle${f(s)}`,c&&"circleDisableShrink"]};return H(u,ee,r)},oe=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${f(s.color)}`]]}})(({ownerState:e,theme:r})=>m({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&w(j||(j=p`
      animation: ${0} 1.4s linear infinite;
    `),se)),ie=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),ne=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${f(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>m({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&w(_||(_=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),te)),ce=B.forwardRef(function(r,s){const t=A({props:r,name:"MuiCircularProgress"}),{className:c,color:u="primary",disableShrink:k=!1,size:a=40,style:g,thickness:l=3.6,value:i=0,variant:x="indeterminate"}=t,C=M(t,re),d=m({},t,{color:u,disableShrink:k,size:a,thickness:l,value:i,variant:x}),h=ae(d),v={},S={},P={};if(x==="determinate"){const b=2*Math.PI*((o-l)/2);v.strokeDasharray=b.toFixed(3),P["aria-valuenow"]=Math.round(i),v.strokeDashoffset=`${((100-i)/100*b).toFixed(3)}px`,S.transform="rotate(-90deg)"}return n.jsx(oe,m({className:R(h.root,c),style:m({width:a,height:a},S,g),ownerState:d,ref:s,role:"progressbar"},P,C,{children:n.jsx(ie,{className:h.svg,ownerState:d,viewBox:`${o/2} ${o/2} ${o} ${o}`,children:n.jsx(ne,{className:h.circle,style:v,ownerState:d,cx:o,cy:o,r:(o-l)/2,fill:"none",strokeWidth:l})})}))}),le=ce,ue=({title:e,align:r=E.CENTER})=>{const s={display:"grid",gridTemplateColumns:"auto auto",gridGap:"5px",justifyContent:r,alignItems:"center"},t={marginLeft:"10px"};return n.jsxs(Y,{sx:s,children:[n.jsx(le,{}),e&&n.jsx(V,{sx:t,children:e})]})};export{Y as B,le as C,ue as S};
