import{r as d}from"./redux-1.0.37-C4JSQ-MG.js";import{g as j,h as $,i as g,j as B,c as P,k as r,l as R,r as M,m as O,o as b,v as z}from"./Typography-1.0.37-DjtXWQnP.js";import{S as w}from"./SwitchBase-1.0.37-Bwy1aBhJ.js";import{c as u}from"./createSvgIcon-1.0.37-DXsAQOmB.js";import{j as a}from"./cm-1.0.37-CEr77VZi.js";const H=u(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),V=u(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),E=u(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function U(e){return $("MuiCheckbox",e)}const m=j("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),F=e=>{const{classes:o,indeterminate:t,color:s,size:n}=e,i={root:["root",t&&"indeterminate",`color${r(s)}`,`size${r(n)}`]},l=R(i,U,o);return{...o,...l}},L=B(w,{shouldForwardProp:e=>M(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${r(t.size)}`],t.color!=="default"&&o[`color${r(t.color)}`]]}})(O(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:b(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(z()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:b(e.palette[o].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(z()).map(([o])=>({props:{color:o},style:{[`&.${m.checked}, &.${m.indeterminate}`]:{color:(e.vars||e).palette[o].main},[`&.${m.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),N=a.jsx(V,{}),D=a.jsx(H,{}),T=a.jsx(E,{}),Q=d.forwardRef(function(o,t){const s=g({props:o,name:"MuiCheckbox"}),{checkedIcon:n=N,color:i="primary",icon:l=D,indeterminate:c=!1,indeterminateIcon:v=T,inputProps:y,size:p="medium",disableRipple:h=!1,className:I,...S}=s,x=c?v:l,C=c?v:n,k={...s,disableRipple:h,color:i,indeterminate:c,size:p},f=F(k);return a.jsx(L,{type:"checkbox",inputProps:{"data-indeterminate":c,...y},icon:d.cloneElement(x,{fontSize:x.props.fontSize??p}),checkedIcon:d.cloneElement(C,{fontSize:C.props.fontSize??p}),ownerState:k,ref:t,className:P(f.root,I),disableRipple:h,...S,classes:f})});export{Q as C};
