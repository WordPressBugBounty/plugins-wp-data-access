import{r as a}from"./redux-1.0.35-xa1uZ5t4.js";import{h as j,g as k,i as D,j as L,c as P,k as y,l as I,m as J}from"./Typography-1.0.35-DmbWmVEH.js";import{F as K,u as Q,f as X}from"./useFormControl-1.0.35-gKEqvAy-.js";import{j as h}from"./cm-1.0.35--NMEhA6K.js";function z(e,r){var t,s,o;return a.isValidElement(e)&&r.indexOf(e.type.muiName??((o=(s=(t=e.type)==null?void 0:t._payload)==null?void 0:s.value)==null?void 0:o.muiName))!==-1}function $(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function U(e,r=!1){return e&&($(e.value)&&e.value!==""||r&&$(e.defaultValue)&&e.defaultValue!=="")}function Y(e){return e.startAdornment}function Z(e){return j("MuiFormControl",e)}k("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const ee=e=>{const{classes:r,margin:t,fullWidth:s}=e,o={root:["root",t!=="none"&&`margin${y(t)}`,s&&"fullWidth"]};return I(o,Z,r)},re=L("div",{name:"MuiFormControl",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`margin${y(t.margin)}`],t.fullWidth&&r.fullWidth]}})({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",variants:[{props:{margin:"normal"},style:{marginTop:16,marginBottom:8}},{props:{margin:"dense"},style:{marginTop:8,marginBottom:4}},{props:{fullWidth:!0},style:{width:"100%"}}]}),de=a.forwardRef(function(r,t){const s=D({props:r,name:"MuiFormControl"}),{children:o,className:c,color:i="primary",component:m="div",disabled:l=!1,error:u=!1,focused:S,fullWidth:x=!1,hiddenLabel:C=!1,margin:b="none",required:f=!1,size:p="medium",variant:n="outlined",...g}=s,v={...s,color:i,component:m,disabled:l,error:u,fullWidth:x,hiddenLabel:C,margin:b,required:f,size:p,variant:n},_=ee(v),[R,O]=a.useState(()=>{let F=!1;return o&&a.Children.forEach(o,d=>{if(!z(d,["Input","Select"]))return;const W=z(d,["Select"])?d.props.input:d;W&&Y(W.props)&&(F=!0)}),F}),[M,H]=a.useState(()=>{let F=!1;return o&&a.Children.forEach(o,d=>{z(d,["Input","Select"])&&(U(d.props,!0)||U(d.props.inputProps,!0))&&(F=!0)}),F}),[N,T]=a.useState(!1);l&&N&&T(!1);const q=S!==void 0&&!l?S:N;let w;a.useRef(!1);const A=a.useCallback(()=>{H(!0)},[]),E=a.useCallback(()=>{H(!1)},[]),G=a.useMemo(()=>({adornedStart:R,setAdornedStart:O,color:i,disabled:l,error:u,filled:M,focused:q,fullWidth:x,hiddenLabel:C,size:p,onBlur:()=>{T(!1)},onFocus:()=>{T(!0)},onEmpty:E,onFilled:A,registerEffect:w,required:f,variant:n}),[R,i,l,u,M,q,x,C,w,E,A,f,p,n]);return h.jsx(K.Provider,{value:G,children:h.jsx(re,{as:m,ownerState:v,className:P(_.root,c),ref:t,...g,children:o})})});function te(e){return j("MuiFormHelperText",e)}const B=k("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var V;const oe=e=>{const{classes:r,contained:t,size:s,disabled:o,error:c,filled:i,focused:m,required:l}=e,u={root:["root",o&&"disabled",c&&"error",s&&`size${y(s)}`,t&&"contained",m&&"focused",i&&"filled",l&&"required"]};return I(u,te,r)},se=L("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.size&&r[`size${y(t.size)}`],t.contained&&r.contained,t.filled&&r.filled]}})(J(({theme:e})=>({color:(e.vars||e).palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${B.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${B.error}`]:{color:(e.vars||e).palette.error.main},variants:[{props:{size:"small"},style:{marginTop:4}},{props:({ownerState:r})=>r.contained,style:{marginLeft:14,marginRight:14}}]}))),ue=a.forwardRef(function(r,t){const s=D({props:r,name:"MuiFormHelperText"}),{children:o,className:c,component:i="p",disabled:m,error:l,filled:u,focused:S,margin:x,required:C,variant:b,...f}=s,p=Q(),n=X({props:s,muiFormControl:p,states:["variant","size","disabled","error","filled","focused","required"]}),g={...s,component:i,contained:n.variant==="filled"||n.variant==="outlined",variant:n.variant,size:n.size,disabled:n.disabled,error:n.error,filled:n.filled,focused:n.focused,required:n.required};delete g.ownerState;const v=oe(g);return h.jsx(se,{as:i,className:P(v.root,c),ref:t,...f,ownerState:g,children:o===" "?V||(V=h.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):o})});export{de as F,ue as a,z as b,U as i};
