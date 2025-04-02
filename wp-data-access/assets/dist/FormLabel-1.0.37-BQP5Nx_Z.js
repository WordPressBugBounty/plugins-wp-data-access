import{r as v}from"./redux-1.0.37-C4JSQ-MG.js";import{g as C,h as L,i as x,j as f,c as k,k as q,l as g,m as b,v as j}from"./Typography-1.0.37-DjtXWQnP.js";import{u as R,f as S}from"./useFormControl-1.0.37-BcUwa2qz.js";import{j as m}from"./cm-1.0.37-CEr77VZi.js";function M(r){return L("MuiFormLabel",r)}const i=C("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),$=r=>{const{classes:e,color:s,focused:a,disabled:d,error:l,filled:n,required:t}=r,p={root:["root",`color${q(s)}`,d&&"disabled",l&&"error",n&&"filled",a&&"focused",t&&"required"],asterisk:["asterisk",l&&"error"]};return g(p,M,e)},U=f("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,s.color==="secondary"&&e.colorSecondary,s.filled&&e.filled]}})(b(({theme:r})=>({color:(r.vars||r).palette.text.secondary,...r.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",variants:[...Object.entries(r.palette).filter(j()).map(([e])=>({props:{color:e},style:{[`&.${i.focused}`]:{color:(r.vars||r).palette[e].main}}})),{props:{},style:{[`&.${i.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${i.error}`]:{color:(r.vars||r).palette.error.main}}}]}))),w=f("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,e)=>e.asterisk})(b(({theme:r})=>({[`&.${i.error}`]:{color:(r.vars||r).palette.error.main}}))),T=v.forwardRef(function(e,s){const a=x({props:e,name:"MuiFormLabel"}),{children:d,className:l,color:n,component:t="label",disabled:p,error:N,filled:A,focused:E,required:P,...y}=a,F=R(),o=S({props:a,muiFormControl:F,states:["color","required","focused","disabled","error","filled"]}),c={...a,color:o.color||"primary",component:t,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required},u=$(c);return m.jsxs(U,{as:t,ownerState:c,className:k(u.root,l),ref:s,...y,children:[d,o.required&&m.jsxs(w,{ownerState:c,"aria-hidden":!0,className:u.asterisk,children:[" ","*"]})]})});export{T as F,i as f};
