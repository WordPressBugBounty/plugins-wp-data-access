import{r}from"./redux-1.0.31-CuzmJMK6.js";import{g as y,f as R,i as c,m as M,n as T,c as j,o as D}from"./Typography-1.0.31-BdhCS1KD.js";import{c as L,d as U}from"./Stepper-1.0.31-CLZGpluU.js";import{j as u}from"./cm-1.0.31-BzgG35ZX.js";import{C as m}from"./Collapse-1.0.31-CkBm-DA4.js";function b(t){return R("MuiStepContent",t)}y("MuiStepContent",["root","last","transition"]);const w=t=>{const{classes:o,last:s}=t;return D({root:["root",s&&"last"],transition:["transition"]},b,o)},E=c("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,s.last&&o.last]}})(M(({theme:t})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),N=c(m,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,o)=>o.transition})({}),k=r.forwardRef(function(o,s){const e=T({props:o,name:"MuiStepContent"}),{children:C,className:d,TransitionComponent:a=m,transitionDuration:i="auto",TransitionProps:S,...f}=e;r.useContext(L);const{active:x,last:g,expanded:v}=r.useContext(U),n={...e,last:g},p=w(n);let l=i;return i==="auto"&&!a.muiSupportAuto&&(l=void 0),u.jsx(E,{className:j(p.root,d),ref:s,ownerState:n,...f,children:u.jsx(N,{as:a,in:x||v,className:p.transition,ownerState:n,timeout:l,unmountOnExit:!0,...S,children:C})})});export{k as S};