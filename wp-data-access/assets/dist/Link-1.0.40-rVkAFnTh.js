import{r as g}from"./redux-1.0.40-W_04YL6Z.js";import{g as F,h as S,F as i,o as l,i as T,j as A,c as R,k as L,l as j,T as M,m as P,p as U}from"./Typography-1.0.40-oRKYqE3b.js";import{u as z,i as k}from"./iconBase-1.0.40-CH6TO7hF.js";import{j as B}from"./cm-1.0.40-DO7MoydR.js";function N(e){return S("MuiLink",e)}const E=F("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),H=({theme:e,ownerState:r})=>{const n=r.color,t=i(e,`palette.${n}.main`,!1)||i(e,`palette.${n}`,!1)||r.color,o=i(e,`palette.${n}.mainChannel`)||i(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:l(t,.4)},v={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},W=e=>{const{classes:r,component:n,focusVisible:t,underline:o}=e,u={root:["root",`underline${L(o)}`,n==="button"&&"button",t&&"focusVisible"]};return j(u,N,r)},O=A(M,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[`underline${L(n.underline)}`],n.component==="button"&&r.button]}})(P(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:r,ownerState:n})=>r==="always"&&n.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(U()).map(([r])=>({props:{underline:"always",color:r},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.4)`:l(e.palette[r].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:l(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:l(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${E.focusVisible}`]:{outline:"auto"}}}]}))),K=g.forwardRef(function(r,n){const t=T({props:r,name:"MuiLink"}),o=z(),{className:u,color:s="primary",component:d="a",onBlur:y,onFocus:f,TypographyClasses:w,underline:b="always",variant:x="inherit",sx:c,...m}=t,[h,C]=g.useState(!1),$=a=>{k(a.target)||C(!1),y&&y(a)},D=a=>{k(a.target)&&C(!0),f&&f(a)},p={...t,color:s,component:d,focusVisible:h,underline:b,variant:x},V=W(p);return B.jsx(O,{color:s,className:R(V.root,u),classes:w,component:d,onBlur:$,onFocus:D,ref:n,ownerState:p,variant:x,...m,sx:[...v[s]===void 0?[{color:s}]:[],...Array.isArray(c)?c:[c]],style:{...m.style,...b==="always"&&s!=="inherit"&&!v[s]&&{"--Link-underlineColor":H({theme:o,ownerState:p})}}})});export{K as L};
