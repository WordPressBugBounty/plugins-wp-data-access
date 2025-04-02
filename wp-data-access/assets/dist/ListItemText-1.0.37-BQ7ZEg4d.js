import{r as h}from"./redux-1.0.37-C4JSQ-MG.js";import{i as N,T as m,j as k,c as B,l as E,t as g}from"./Typography-1.0.37-DjtXWQnP.js";import{L as M}from"./Menu-1.0.37-Ca8DeoO3.js";import{a as U,l}from"./MenuItem-1.0.37-JkRcsicb.js";import{b as L}from"./iconBase-1.0.37-DRohixw7.js";import{j as x}from"./cm-1.0.37-CEr77VZi.js";const D=r=>{const{classes:s,inset:o,primary:a,secondary:y,dense:c}=r;return E({root:["root",o&&"inset",c&&"dense",a&&y&&"multiline"],primary:["primary"],secondary:["secondary"]},U,s)},F=k("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:o}=r;return[{[`& .${l.primary}`]:s.primary},{[`& .${l.secondary}`]:s.secondary},s.root,o.inset&&s.inset,o.primary&&o.secondary&&s.multiline,o.dense&&s.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${g.root}:where(& .${l.primary})`]:{display:"block"},[`.${g.root}:where(& .${l.secondary})`]:{display:"block"},variants:[{props:({ownerState:r})=>r.primary&&r.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:r})=>r.inset,style:{paddingLeft:56}}]}),J=h.forwardRef(function(s,o){const a=N({props:s,name:"MuiListItemText"}),{children:y,className:c,disableTypography:n=!1,inset:P=!1,primary:u,primaryTypographyProps:b,secondary:v,secondaryTypographyProps:C,slots:I={},slotProps:j={},...S}=a,{dense:f}=h.useContext(M);let e=u??y,t=v;const i={...a,disableTypography:n,inset:P,primary:!!e,secondary:!!t,dense:f},d=D(i),T={slots:I,slotProps:{primary:b,secondary:C,...j}},[$,p]=L("primary",{className:d.primary,elementType:m,externalForwardedProps:T,ownerState:i}),[w,R]=L("secondary",{className:d.secondary,elementType:m,externalForwardedProps:T,ownerState:i});return e!=null&&e.type!==m&&!n&&(e=x.jsx($,{variant:f?"body2":"body1",component:p!=null&&p.variant?void 0:"span",...p,children:e})),t!=null&&t.type!==m&&!n&&(t=x.jsx(w,{variant:"body2",color:"textSecondary",...R,children:t})),x.jsxs(F,{className:B(d.root,c),ownerState:i,ref:o,...S,children:[e,t]})});export{J as L};
