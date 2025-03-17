import{r as P}from"./redux-1.0.36-Dw38apwx.js";import{g as E,h as U,i as A,T as x,c as y,j as v,k as L,l as z,m as F}from"./Typography-1.0.36-CpRCY5e-.js";import{u as B,f as H}from"./useFormControl-1.0.36-DwbRv5ZH.js";import{b as I}from"./iconBase-1.0.36-Cg_-P7_6.js";import{j as m}from"./cm-1.0.36-c_d2YVSf.js";function W(e){return U("MuiFormControlLabel",e)}const l=E("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),G=e=>{const{classes:r,disabled:s,labelPlacement:o,error:d,required:b}=e,u={root:["root",s&&"disabled",`labelPlacement${L(o)}`,d&&"error",b&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",d&&"error"]};return z(u,W,r)},J=v("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[{[`& .${l.label}`]:r.label},r.root,r[`labelPlacement${L(s.labelPlacement)}`]]}})(F(({theme:e})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${l.disabled}`]:{cursor:"default"},[`& .${l.label}`]:{[`&.${l.disabled}`]:{color:(e.vars||e).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:r})=>r==="start"||r==="top"||r==="bottom",style:{marginLeft:16}}]}))),K=v("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(F(({theme:e})=>({[`&.${l.error}`]:{color:(e.vars||e).palette.error.main}}))),oe=P.forwardRef(function(r,s){const o=A({props:r,name:"MuiFormControlLabel"}),{checked:d,className:b,componentsProps:u={},control:a,disabled:R,disableTypography:k,inputRef:O,label:T,labelPlacement:j="end",name:Q,onChange:V,required:q,slots:$={},slotProps:w={},value:X,...M}=o,n=B(),g=R??a.props.disabled??(n==null?void 0:n.disabled),f=q??a.props.required,h={disabled:g,required:f};["checked","name","onChange","value","inputRef"].forEach(p=>{typeof a.props[p]>"u"&&typeof o[p]<"u"&&(h[p]=o[p])});const N=H({props:o,muiFormControl:n,states:["error"]}),i={...o,disabled:g,labelPlacement:j,required:f,error:N.error},C=G(i),S={slots:$,slotProps:{...u,...w}},[D,c]=I("typography",{elementType:x,externalForwardedProps:S,ownerState:i});let t=T;return t!=null&&t.type!==x&&!k&&(t=m.jsx(D,{component:"span",...c,className:y(C.label,c==null?void 0:c.className),children:t})),m.jsxs(J,{className:y(C.root,b),ownerState:i,ref:s,...M,children:[P.cloneElement(a,h),f?m.jsxs("div",{children:[t,m.jsxs(K,{ownerState:i,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):t]})});export{oe as F};
