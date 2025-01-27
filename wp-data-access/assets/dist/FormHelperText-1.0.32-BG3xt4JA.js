import{r as n}from"./redux-1.0.32-BsgiH_bG.js";import{f as B,g as V,i as j,j as h,n as D,c as L,o as P,m as k}from"./Typography-1.0.32-D9d-UzA0.js";import{F as G,u as J,f as K}from"./useFormControl-1.0.32-Tf9RtQ-m.js";import{j as y}from"./cm-1.0.32-roxymF9V.js";function z(e,r){var t,s,o;return n.isValidElement(e)&&r.indexOf(e.type.muiName??((o=(s=(t=e.type)==null?void 0:t._payload)==null?void 0:s.value)==null?void 0:o.muiName))!==-1}function W(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function $(e,r=!1){return e&&(W(e.value)&&e.value!==""||r&&W(e.defaultValue)&&e.defaultValue!=="")}function Q(e){return e.startAdornment}function X(e){return B("MuiFormControl",e)}V("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const Y=e=>{const{classes:r,margin:t,fullWidth:s}=e,o={root:["root",t!=="none"&&`margin${h(t)}`,s&&"fullWidth"]};return P(o,X,r)},Z=j("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},r)=>({...r.root,...r[`margin${h(e.margin)}`],...e.fullWidth&&r.fullWidth})})({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",variants:[{props:{margin:"normal"},style:{marginTop:16,marginBottom:8}},{props:{margin:"dense"},style:{marginTop:8,marginBottom:4}},{props:{fullWidth:!0},style:{width:"100%"}}]}),ae=n.forwardRef(function(r,t){const s=D({props:r,name:"MuiFormControl"}),{children:o,className:c,color:a="primary",component:m="div",disabled:l=!1,error:u=!1,focused:S,fullWidth:v=!1,hiddenLabel:x=!1,margin:R="none",required:f=!1,size:p="medium",variant:i="outlined",...g}=s,C={...s,color:a,component:m,disabled:l,error:u,fullWidth:v,hiddenLabel:x,margin:R,required:f,size:p,variant:i},I=Y(C),[M,_]=n.useState(()=>{let F=!1;return o&&n.Children.forEach(o,d=>{if(!z(d,["Input","Select"]))return;const E=z(d,["Select"])?d.props.input:d;E&&Q(E.props)&&(F=!0)}),F}),[b,H]=n.useState(()=>{let F=!1;return o&&n.Children.forEach(o,d=>{z(d,["Input","Select"])&&($(d.props,!0)||$(d.props.inputProps,!0))&&(F=!0)}),F}),[N,T]=n.useState(!1);l&&N&&T(!1);const q=S!==void 0&&!l?S:N;let A;n.useRef(!1);const O=n.useMemo(()=>({adornedStart:M,setAdornedStart:_,color:a,disabled:l,error:u,filled:b,focused:q,fullWidth:v,hiddenLabel:x,size:p,onBlur:()=>{T(!1)},onEmpty:()=>{H(!1)},onFilled:()=>{H(!0)},onFocus:()=>{T(!0)},registerEffect:A,required:f,variant:i}),[M,a,l,u,b,q,v,x,A,f,p,i]);return y.jsx(G.Provider,{value:O,children:y.jsx(Z,{as:m,ownerState:C,className:L(I.root,c),ref:t,...g,children:o})})});function ee(e){return B("MuiFormHelperText",e)}const w=V("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var U;const re=e=>{const{classes:r,contained:t,size:s,disabled:o,error:c,filled:a,focused:m,required:l}=e,u={root:["root",o&&"disabled",c&&"error",s&&`size${h(s)}`,t&&"contained",m&&"focused",a&&"filled",l&&"required"]};return P(u,ee,r)},te=j("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.size&&r[`size${h(t.size)}`],t.contained&&r.contained,t.filled&&r.filled]}})(k(({theme:e})=>({color:(e.vars||e).palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${w.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${w.error}`]:{color:(e.vars||e).palette.error.main},variants:[{props:{size:"small"},style:{marginTop:4}},{props:({ownerState:r})=>r.contained,style:{marginLeft:14,marginRight:14}}]}))),le=n.forwardRef(function(r,t){const s=D({props:r,name:"MuiFormHelperText"}),{children:o,className:c,component:a="p",disabled:m,error:l,filled:u,focused:S,margin:v,required:x,variant:R,...f}=s,p=J(),i=K({props:s,muiFormControl:p,states:["variant","size","disabled","error","filled","focused","required"]}),g={...s,component:a,contained:i.variant==="filled"||i.variant==="outlined",variant:i.variant,size:i.size,disabled:i.disabled,error:i.error,filled:i.filled,focused:i.focused,required:i.required};delete g.ownerState;const C=re(g);return y.jsx(te,{as:a,className:L(C.root,c),ref:t,...f,ownerState:g,children:o===" "?U||(U=y.jsx("span",{className:"notranslate",children:"​"})):o})});export{ae as F,le as a,z as b,$ as i};
