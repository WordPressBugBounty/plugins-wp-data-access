import{h as W,g as A,i as F,b as c,E as D,_ as G,c as H,j as J,n as K}from"./Typography-1.0.18-dc3c0740.js";import{r as M,j as x}from"./main-1.0.18.js";import{u as Q}from"./useFormControl-1.0.18-87a8487d.js";import{B as T}from"./iconBase-1.0.18-3c21f5e2.js";import{u as V}from"./useControlled-1.0.18-12a74006.js";function X(e){return W("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:o,checked:i,disabled:r,edge:a}=e,l={root:["root",i&&"checked",r&&"disabled",a&&`edge${J(a)}`],input:["input"]};return K(l,X,o)},ee=F(T)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:D})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=M.forwardRef(function(o,i){const{autoFocus:r,checked:a,checkedIcon:l,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:S=!1,icon:R,id:P,inputProps:I,inputRef:j,name:E,onBlur:f,onChange:m,onFocus:g,readOnly:z,required:N=!1,tabIndex:U,type:d,value:b}=o,_=G(o,Y),[k,q]=V({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),t=Q(),v=s=>{g&&g(s),t&&t.onFocus&&t.onFocus(s)},L=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;q(C),m&&m(s,C)};let n=y;t&&typeof n>"u"&&(n=t.disabled);const $=d==="checkbox"||d==="radio",u=c({},o,{checked:k,disabled:n,disableFocusRipple:p,edge:S}),B=Z(u);return x.jsxs(ee,c({component:"span",className:H(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:v,onBlur:L,ownerState:u,ref:i},_,{children:[x.jsx(se,c({autoFocus:r,checked:a,defaultChecked:h,className:B.input,disabled:n,id:$?P:void 0,name:E,onChange:O,readOnly:z,ref:j,required:N,ownerState:u,tabIndex:U,type:d},d==="checkbox"&&b===void 0?{}:{value:b},I)),k?l:R]}))}),ie=te;export{ie as S};