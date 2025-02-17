import{r}from"./redux-1.0.34-BykGtd51.js";import{h as M,g as b,i as w,j as c,c as D,l as L,m as U}from"./Typography-1.0.34-CPcqRq0L.js";import{c as h,d as E}from"./Stepper-1.0.34-mB2if67t.js";import{b as N}from"./iconBase-1.0.34-CNhS-hAm.js";import{j as u}from"./cm-1.0.34-jkgb9fqk.js";import{C as m}from"./Collapse-1.0.34-BSZnzI45.js";function $(t){return M("MuiStepContent",t)}b("MuiStepContent",["root","last","transition"]);const A=t=>{const{classes:o,last:s}=t;return L({root:["root",s&&"last"],transition:["transition"]},$,o)},F=c("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,s.last&&o.last]}})(U(({theme:t})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),O=c(m,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,o)=>o.transition})({}),J=r.forwardRef(function(o,s){const n=w({props:o,name:"MuiStepContent"}),{children:d,className:C,TransitionComponent:a=m,transitionDuration:i="auto",TransitionProps:S,slots:f={},slotProps:x={},...g}=n,{orientation:k}=r.useContext(h),{active:v,last:y,expanded:P}=r.useContext(E),e={...n,last:y},p=A(e);let l=i;i==="auto"&&!a.muiSupportAuto&&(l=void 0);const R={slots:f,slotProps:{transition:S,...x}},[T,j]=N("transition",{elementType:O,externalForwardedProps:R,ownerState:e,className:p.transition,additionalProps:{in:v||P,timeout:l,unmountOnExit:!0}});return u.jsx(F,{className:D(p.root,C),ref:s,ownerState:e,...g,children:u.jsx(T,{as:a,...j,children:d})})});export{J as S};
