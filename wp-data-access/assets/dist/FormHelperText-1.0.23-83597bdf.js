import{h as U,g as B,i as L,b as u,j as F,m as j,_ as w,c as P,n as V}from"./Typography-1.0.23-19a0fd3e.js";import{r as l,j as x}from"./main-1.0.23.js";import{F as J,u as K,f as Q}from"./useFormControl-1.0.23-a0ae6ce7.js";function b(e,r){var t,o;return l.isValidElement(e)&&r.indexOf((t=e.type.muiName)!=null?t:(o=e.type)==null||(o=o._payload)==null||(o=o.value)==null?void 0:o.muiName)!==-1}function q(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function _(e,r=!1){return e&&(q(e.value)&&e.value!==""||r&&q(e.defaultValue)&&e.defaultValue!=="")}function X(e){return e.startAdornment}function Y(e){return U("MuiFormControl",e)}B("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const Z=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],ee=e=>{const{classes:r,margin:t,fullWidth:o}=e,n={root:["root",t!=="none"&&`margin${F(t)}`,o&&"fullWidth"]};return V(n,Y,r)},re=L("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},r)=>u({},r.root,r[`margin${F(e.margin)}`],e.fullWidth&&r.fullWidth)})(({ownerState:e})=>u({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),oe=l.forwardRef(function(r,t){const o=j({props:r,name:"MuiFormControl"}),{children:n,className:m,color:a="primary",component:c="div",disabled:i=!1,error:s=!1,focused:f,fullWidth:p=!1,hiddenLabel:v=!1,margin:D="none",required:C=!1,size:h="medium",variant:T="outlined"}=o,I=w(o,Z),z=u({},o,{color:a,component:c,disabled:i,error:s,fullWidth:p,hiddenLabel:v,margin:D,required:C,size:h,variant:T}),O=ee(z),[S,k]=l.useState(()=>{let g=!1;return n&&l.Children.forEach(n,d=>{if(!b(d,["Input","Select"]))return;const W=b(d,["Select"])?d.props.input:d;W&&X(W.props)&&(g=!0)}),g}),[N,$]=l.useState(()=>{let g=!1;return n&&l.Children.forEach(n,d=>{b(d,["Input","Select"])&&(_(d.props,!0)||_(d.props.inputProps,!0))&&(g=!0)}),g}),[H,y]=l.useState(!1);i&&H&&y(!1);const M=f!==void 0&&!i?f:H;let R;const G=l.useMemo(()=>({adornedStart:S,setAdornedStart:k,color:a,disabled:i,error:s,filled:N,focused:M,fullWidth:p,hiddenLabel:v,size:h,onBlur:()=>{y(!1)},onEmpty:()=>{$(!1)},onFilled:()=>{$(!0)},onFocus:()=>{y(!0)},registerEffect:R,required:C,variant:T}),[S,a,i,s,N,M,p,v,R,C,h,T]);return x.jsx(J.Provider,{value:G,children:x.jsx(re,u({as:c,ownerState:z,className:P(O.root,m),ref:t},I,{children:n}))})}),me=oe;function te(e){return U("MuiFormHelperText",e)}const se=B("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),A=se;var E;const ne=["children","className","component","disabled","error","filled","focused","margin","required","variant"],ie=e=>{const{classes:r,contained:t,size:o,disabled:n,error:m,filled:a,focused:c,required:i}=e,s={root:["root",n&&"disabled",m&&"error",o&&`size${F(o)}`,t&&"contained",c&&"focused",a&&"filled",i&&"required"]};return V(s,te,r)},le=L("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.size&&r[`size${F(t.size)}`],t.contained&&r.contained,t.filled&&r.filled]}})(({theme:e,ownerState:r})=>u({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${A.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${A.error}`]:{color:(e.vars||e).palette.error.main}},r.size==="small"&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),ae=l.forwardRef(function(r,t){const o=j({props:r,name:"MuiFormHelperText"}),{children:n,className:m,component:a="p"}=o,c=w(o,ne),i=K(),s=Q({props:o,muiFormControl:i,states:["variant","size","disabled","error","filled","focused","required"]}),f=u({},o,{component:a,contained:s.variant==="filled"||s.variant==="outlined",variant:s.variant,size:s.size,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required}),p=ie(f);return x.jsx(le,u({as:a,ownerState:f,className:P(p.root,m),ref:t},c,{children:n===" "?E||(E=x.jsx("span",{className:"notranslate",children:"​"})):n}))}),fe=ae;export{me as F,fe as a,_ as b,b as i};
