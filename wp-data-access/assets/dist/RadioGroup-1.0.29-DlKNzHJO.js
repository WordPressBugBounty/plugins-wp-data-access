import{r as u}from"./redux-1.0.29-C1Q38y1F.js";import{g as x,f as C,i as M,n as S,c as F,o as g}from"./Typography-1.0.29-DKDDWYKJ.js";import{a as U}from"./Radio-1.0.29-DtS8PS_A.js";import{j as d}from"./cm-1.0.29-B-jRz_ox.js";import{u as j}from"./useControlled-1.0.29-gPCMf8hr.js";import{a as N}from"./iconBase-1.0.29-DWX4ew0u.js";import{X as P}from"./index-1.0.29-Dlm2kjka.js";import{u as D,f as V}from"./useFormControl-1.0.29-DBjraibe.js";function b(o){return C("MuiFormGroup",o)}x("MuiFormGroup",["root","row","error"]);const k=o=>{const{classes:r,row:e,error:t}=o;return g({root:["root",e&&"row",t&&"error"]},b,r)},q=M("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:e}=o;return[r.root,e.row&&r.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),E=u.forwardRef(function(r,e){const t=S({props:r,name:"MuiFormGroup"}),{className:a,row:i=!1,...c}=t,m=D(),n=V({props:t,muiFormControl:m,states:["error"]}),l={...t,row:i,error:n.error},p=k(l);return d.jsx(q,{className:F(p.root,a),ownerState:l,ref:e,...c})});function I(o){return C("MuiRadioGroup",o)}x("MuiRadioGroup",["root","row","error"]);const H=o=>{const{classes:r,row:e,error:t}=o;return g({root:["root",e&&"row",t&&"error"]},I,r)},L=u.forwardRef(function(r,e){const{actions:t,children:a,className:i,defaultValue:c,name:m,onChange:n,value:l,...p}=r,f=u.useRef(null),v=H(r),[R,w]=j({controlled:l,default:c,name:"RadioGroup"});u.useImperativeHandle(t,()=>({focus:()=>{let s=f.current.querySelector("input:not(:disabled):checked");s||(s=f.current.querySelector("input:not(:disabled)")),s&&s.focus()}}),[]);const y=N(e,f),G=P(m),h=u.useMemo(()=>({name:G,onChange(s){w(s.target.value),n&&n(s,s.target.value)},value:R}),[G,n,w,R]);return d.jsx(U.Provider,{value:h,children:d.jsx(E,{role:"radiogroup",ref:y,className:F(v.root,i),...p,children:a})})});export{L as R};
