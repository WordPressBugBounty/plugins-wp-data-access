import{r as A}from"./redux-1.0.34-BykGtd51.js";import{h as D,g as G,j as C,c as H,k as J,l as K,r as M}from"./Typography-1.0.34-CPcqRq0L.js";import{u as Q}from"./useFormControl-1.0.34-DpRVCPB9.js";import{j as w}from"./cm-1.0.34-jkgb9fqk.js";import{u as T}from"./useControlled-1.0.34-CU9helXh.js";import{B as V}from"./iconBase-1.0.34-CNhS-hAm.js";function W(s){return D("PrivateSwitchBase",s)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=s=>{const{classes:t,checked:r,disabled:c,edge:a}=s,d={root:["root",r&&"checked",c&&"disabled",a&&`edge${J(a)}`],input:["input"]};return K(d,W,t)},Y=C(V)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:s,ownerState:t})=>s==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:s,ownerState:t})=>s==="end"&&t.size!=="small",style:{marginRight:-12}}]}),Z=C("input",{shouldForwardProp:M})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ne=A.forwardRef(function(t,r){const{autoFocus:c,checked:a,checkedIcon:d,className:y,defaultChecked:u,disabled:S,disableFocusRipple:p=!1,edge:x=!1,icon:F,id:R,inputProps:P,inputRef:z,name:I,onBlur:h,onChange:f,onFocus:m,readOnly:j,required:E=!1,tabIndex:U,type:i,value:g,...v}=t,[B,L]=T({controlled:a,default:!!u,name:"SwitchBase",state:"checked"}),o=Q(),N=e=>{m&&m(e),o&&o.onFocus&&o.onFocus(e)},q=e=>{h&&h(e),o&&o.onBlur&&o.onBlur(e)},O=e=>{if(e.nativeEvent.defaultPrevented)return;const b=e.target.checked;L(b),f&&f(e,b)};let n=S;o&&typeof n>"u"&&(n=o.disabled);const $=i==="checkbox"||i==="radio",l={...t,checked:B,disabled:n,disableFocusRipple:p,edge:x},k=X(l);return w.jsxs(Y,{component:"span",className:H(k.root,y),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:N,onBlur:q,ownerState:l,ref:r,...v,children:[w.jsx(Z,{autoFocus:c,checked:a,defaultChecked:u,className:k.input,disabled:n,id:$?R:void 0,name:I,onChange:O,readOnly:j,ref:z,required:E,ownerState:l,tabIndex:U,type:i,...i==="checkbox"&&g===void 0?{}:{value:g},...P}),B?d:F]})});export{ne as S};
