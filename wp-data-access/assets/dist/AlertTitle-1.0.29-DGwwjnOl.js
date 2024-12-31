import{r as R}from"./redux-1.0.29-C1Q38y1F.js";import{g as T,f as z,i as c,j as f,m as b,E as M,B as S,l as v,n as L,c as P,o as B,T as D}from"./Typography-1.0.29-DKDDWYKJ.js";import{P as q,g as I,I as G}from"./iconBase-1.0.29-DWX4ew0u.js";import{c as g}from"./createSvgIcon-1.0.29-DRHeS-Ok.js";import{j as s}from"./cm-1.0.29-B-jRz_ox.js";import{C as J}from"./Close-1.0.29-DMVND8Dd.js";function K(t){return z("MuiAlert",t)}const j=T("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Q=g(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),X=g(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Y=g(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),_=g(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),tt=t=>{const{variant:e,color:r,severity:o,classes:a}=t,n={root:["root",`color${f(r||o)}`,`${e}${f(r||o)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return B(n,K,a)},ot=c(q,{name:"MuiAlert",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`${r.variant}${f(r.color||r.severity)}`]]}})(b(({theme:t})=>{const e=t.palette.mode==="light"?M:S,r=t.palette.mode==="light"?S:M;return{...t.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(v(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${o}StandardBg`]:r(t.palette[o].light,.9),[`& .${j.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(v(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),border:`1px solid ${(t.vars||t).palette[o].light}`,[`& .${j.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(v(["dark"])).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:{fontWeight:t.typography.fontWeightMedium,...t.vars?{color:t.vars.palette.Alert[`${o}FilledColor`],backgroundColor:t.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[o].dark:t.palette[o].main,color:t.palette.getContrastText(t.palette[o].main)}}}))]}})),et=c("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),st=c("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,e)=>e.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),$=c("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),h={success:s.jsx(Q,{fontSize:"inherit"}),warning:s.jsx(X,{fontSize:"inherit"}),error:s.jsx(Y,{fontSize:"inherit"}),info:s.jsx(_,{fontSize:"inherit"})},gt=R.forwardRef(function(e,r){const o=L({props:e,name:"MuiAlert"}),{action:a,children:n,className:p,closeText:d="Close",color:A,components:m={},componentsProps:O={},icon:C,iconMapping:k=h,onClose:x,role:E="alert",severity:u="success",slotProps:W={},slots:w={},variant:N="standard",...U}=o,l={...o,color:A,severity:u,variant:N,colorSeverity:A||u},i=tt(l),y={slots:{closeButton:m.CloseButton,closeIcon:m.CloseIcon,...w},slotProps:{...O,...W}},[H,F]=I("closeButton",{elementType:G,externalForwardedProps:y,ownerState:l}),[V,Z]=I("closeIcon",{elementType:J,externalForwardedProps:y,ownerState:l});return s.jsxs(ot,{role:E,elevation:0,ownerState:l,className:P(i.root,p),ref:r,...U,children:[C!==!1?s.jsx(et,{ownerState:l,className:i.icon,children:C||k[u]||h[u]}):null,s.jsx(st,{ownerState:l,className:i.message,children:n}),a!=null?s.jsx($,{ownerState:l,className:i.action,children:a}):null,a==null&&x?s.jsx($,{ownerState:l,className:i.action,children:s.jsx(H,{size:"small","aria-label":d,title:d,color:"inherit",onClick:x,...F,children:s.jsx(V,{fontSize:"small",...Z})})}):null]})});function rt(t){return z("MuiAlertTitle",t)}T("MuiAlertTitle",["root"]);const lt=t=>{const{classes:e}=t;return B({root:["root"]},rt,e)},at=c(D,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(t,e)=>e.root})(b(({theme:t})=>({fontWeight:t.typography.fontWeightMedium,marginTop:-2}))),vt=R.forwardRef(function(e,r){const o=L({props:e,name:"MuiAlertTitle"}),{className:a,...n}=o,p=o,d=lt(p);return s.jsx(at,{gutterBottom:!0,component:"div",ownerState:p,ref:r,className:P(d.root,a),...n})});export{gt as A,vt as a};
