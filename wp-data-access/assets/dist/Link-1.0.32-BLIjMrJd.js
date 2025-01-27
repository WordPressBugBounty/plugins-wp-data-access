import{r as C}from"./redux-1.0.32-BsgiH_bG.js";import{f as R,g as S,R as g,p as i,i as T,T as A,j as L,m as F,n as j,c as M,o as P,l as U}from"./Typography-1.0.32-D9d-UzA0.js";import{u as z,i as v}from"./iconBase-1.0.32-inVKjZEJ.js";import{j as B}from"./cm-1.0.32-roxymF9V.js";function N(e){return R("MuiLink",e)}const E=S("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),H=({theme:e,ownerState:r})=>{const o=r.color,t=g(e,`palette.${o}`,!1)||r.color,n=g(e,`palette.${o}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:i(t,.4)},k={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},W=e=>{const{classes:r,component:o,focusVisible:t,underline:n}=e,l={root:["root",`underline${L(n)}`,o==="button"&&"button",t&&"focusVisible"]};return P(l,N,r)},O=T(A,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[`underline${L(o.underline)}`],o.component==="button"&&r.button]}})(F(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:r,ownerState:o})=>r==="always"&&o.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(U()).map(([r])=>({props:{underline:"always",color:r},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.4)`:i(e.palette[r].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:i(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:i(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${E.focusVisible}`]:{outline:"auto"}}}]}))),K=C.forwardRef(function(r,o){const t=j({props:r,name:"MuiLink"}),n=z(),{className:l,color:s="primary",component:p="a",onBlur:d,onFocus:y,TypographyClasses:w,underline:b="always",variant:f="inherit",sx:u,...x}=t,[h,m]=C.useState(!1),D=a=>{v(a.target)||m(!1),d&&d(a)},$=a=>{v(a.target)&&m(!0),y&&y(a)},c={...t,color:s,component:p,focusVisible:h,underline:b,variant:f},V=W(c);return B.jsx(O,{color:s,className:M(V.root,l),classes:w,component:p,onBlur:D,onFocus:$,ref:o,ownerState:c,variant:f,...x,sx:[...k[s]===void 0?[{color:s}]:[],...Array.isArray(u)?u:[u]],style:{...x.style,...b==="always"&&s!=="inherit"&&!k[s]&&{"--Link-underlineColor":H({theme:n,ownerState:c})}}})});export{K as L};
