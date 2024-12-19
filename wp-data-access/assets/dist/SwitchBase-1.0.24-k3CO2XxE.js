import{r as A}from"./redux-1.0.24-Bx8jJ3ee.js";import{f as D,g as G,i as C,r as H,c as J,j as K,o as M}from"./Typography-1.0.24-DtpcakL_.js";import{u as Q}from"./useFormControl-1.0.24-BVJe4wXv.js";import{j as w}from"./cm-1.0.24-lBsX3THK.js";import{B as T}from"./iconBase-1.0.24-C7lJg7VQ.js";import{u as V}from"./useControlled-1.0.24-DnsqB4VW.js";function W(s){return D("PrivateSwitchBase",s)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=s=>{const{classes:t,checked:r,disabled:c,edge:a}=s,d={root:["root",r&&"checked",c&&"disabled",a&&`edge${K(a)}`],input:["input"]};return M(d,W,t)},Y=C(T)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:s,ownerState:t})=>s==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:s,ownerState:t})=>s==="end"&&t.size!=="small",style:{marginRight:-12}}]}),Z=C("input",{shouldForwardProp:H})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ie=A.forwardRef(function(t,r){const{autoFocus:c,checked:a,checkedIcon:d,className:y,defaultChecked:u,disabled:S,disableFocusRipple:p=!1,edge:x=!1,icon:F,id:R,inputProps:P,inputRef:v,name:z,onBlur:h,onChange:f,onFocus:m,readOnly:I,required:j=!1,tabIndex:E,type:n,value:g,...U}=t,[B,L]=V({controlled:a,default:!!u,name:"SwitchBase",state:"checked"}),o=Q(),N=e=>{m&&m(e),o&&o.onFocus&&o.onFocus(e)},q=e=>{h&&h(e),o&&o.onBlur&&o.onBlur(e)},O=e=>{if(e.nativeEvent.defaultPrevented)return;const k=e.target.checked;L(k),f&&f(e,k)};let i=S;o&&typeof i>"u"&&(i=o.disabled);const $=n==="checkbox"||n==="radio",l={...t,checked:B,disabled:i,disableFocusRipple:p,edge:x},b=X(l);return w.jsxs(Y,{component:"span",className:J(b.root,y),centerRipple:!0,focusRipple:!p,disabled:i,tabIndex:null,role:void 0,onFocus:N,onBlur:q,ownerState:l,ref:r,...U,children:[w.jsx(Z,{autoFocus:c,checked:a,defaultChecked:u,className:b.input,disabled:i,id:$?R:void 0,name:z,onChange:O,readOnly:I,ref:v,required:j,ownerState:l,tabIndex:E,type:n,...n==="checkbox"&&g===void 0?{}:{value:g},...P}),B?d:F]})});export{ie as S};
