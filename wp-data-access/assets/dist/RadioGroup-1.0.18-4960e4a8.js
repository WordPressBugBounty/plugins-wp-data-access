import{h as F,g,i as v,b as i,m as S,_ as h,c as y,n as j}from"./Typography-1.0.18-dc3c0740.js";import{r as u,j as d}from"./main-1.0.18.js";import{a as M}from"./Radio-1.0.18-210e4079.js";import{u as P}from"./useControlled-1.0.18-12a74006.js";import{u as _}from"./iconBase-1.0.18-3c21f5e2.js";import{S as b}from"./index.esm-1.0.18-12f13c4a.js";import{u as U,f as V}from"./useFormControl-1.0.18-87a8487d.js";function N(o){return F("MuiFormGroup",o)}g("MuiFormGroup",["root","row","error"]);const $=["className","row"],k=o=>{const{classes:r,row:s,error:e}=o;return j({root:["root",s&&"row",e&&"error"]},N,r)},q=v("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:s}=o;return[r.root,s.row&&r.row]}})(({ownerState:o})=>i({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),D=u.forwardRef(function(r,s){const e=S({props:r,name:"MuiFormGroup"}),{className:l,row:m=!1}=e,p=h(e,$),a=U(),f=V({props:e,muiFormControl:a,states:["error"]}),c=i({},e,{row:m,error:f.error}),n=k(c);return d.jsx(q,i({className:y(n.root,l),ownerState:c,ref:s},p))}),E=D,I=["actions","children","defaultValue","name","onChange","value"],W=u.forwardRef(function(r,s){const{actions:e,children:l,defaultValue:m,name:p,onChange:a,value:f}=r,c=h(r,I),n=u.useRef(null),[x,R]=P({controlled:f,default:m,name:"RadioGroup"});u.useImperativeHandle(e,()=>({focus:()=>{let t=n.current.querySelector("input:not(:disabled):checked");t||(t=n.current.querySelector("input:not(:disabled)")),t&&t.focus()}}),[]);const G=_(s,n),w=b(p),C=u.useMemo(()=>({name:w,onChange(t){R(t.target.value),a&&a(t,t.target.value)},value:x}),[w,a,R,x]);return d.jsx(M.Provider,{value:C,children:d.jsx(E,i({role:"radiogroup",ref:G},c,{children:l}))})}),K=W;export{K as R};
