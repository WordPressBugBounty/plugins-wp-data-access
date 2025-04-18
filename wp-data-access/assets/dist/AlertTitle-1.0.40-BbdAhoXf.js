import{r as R}from"./redux-1.0.40-W_04YL6Z.js";import{g as $,h as z,i as b,j as p,c as L,k as A,l as k,m as B,B as j,E as T,p as m,T as Y}from"./Typography-1.0.40-oRKYqE3b.js";import{b as i,I as _,P as tt}from"./iconBase-1.0.40-CH6TO7hF.js";import{c as f}from"./createSvgIcon-1.0.40-DryBVjDb.js";import{j as s}from"./cm-1.0.40-DO7MoydR.js";import{C as ot}from"./Close-1.0.40-DOQmTCBQ.js";function et(t){return z("MuiAlert",t)}const P=$("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),st=f(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),rt=f(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),lt=f(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),nt=f(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),at=t=>{const{variant:e,color:r,severity:o,classes:l}=t,c={root:["root",`color${A(r||o)}`,`${e}${A(r||o)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return k(c,et,l)},it=p(tt,{name:"MuiAlert",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`${r.variant}${A(r.color||r.severity)}`]]}})(B(({theme:t})=>{const e=t.palette.mode==="light"?j:T,r=t.palette.mode==="light"?T:j;return{...t.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(m(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${o}StandardBg`]:r(t.palette[o].light,.9),[`& .${P.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(m(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),border:`1px solid ${(t.vars||t).palette[o].light}`,[`& .${P.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(m(["dark"])).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:{fontWeight:t.typography.fontWeightMedium,...t.vars?{color:t.vars.palette.Alert[`${o}FilledColor`],backgroundColor:t.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[o].dark:t.palette[o].main,color:t.palette.getContrastText(t.palette[o].main)}}}))]}})),ct=p("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),pt=p("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,e)=>e.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),dt=p("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),h={success:s.jsx(st,{fontSize:"inherit"}),warning:s.jsx(rt,{fontSize:"inherit"}),error:s.jsx(lt,{fontSize:"inherit"}),info:s.jsx(nt,{fontSize:"inherit"})},St=R.forwardRef(function(e,r){const o=b({props:e,name:"MuiAlert"}),{action:l,children:c,className:d,closeText:u="Close",color:C,components:x={},componentsProps:O={},icon:y,iconMapping:w=h,onClose:S,role:E="alert",severity:g="success",slotProps:W={},slots:N={},variant:F="standard",...U}=o,n={...o,color:C,severity:g,variant:F,colorSeverity:C||g},v=at(n),a={slots:{closeButton:x.CloseButton,closeIcon:x.CloseIcon,...N},slotProps:{...O,...W}},[H,V]=i("root",{ref:r,shouldForwardComponentProp:!0,className:L(v.root,d),elementType:it,externalForwardedProps:{...a,...U},ownerState:n,additionalProps:{role:E,elevation:0}}),[Z,D]=i("icon",{className:v.icon,elementType:ct,externalForwardedProps:a,ownerState:n}),[q,G]=i("message",{className:v.message,elementType:pt,externalForwardedProps:a,ownerState:n}),[M,I]=i("action",{className:v.action,elementType:dt,externalForwardedProps:a,ownerState:n}),[J,K]=i("closeButton",{elementType:_,externalForwardedProps:a,ownerState:n}),[Q,X]=i("closeIcon",{elementType:ot,externalForwardedProps:a,ownerState:n});return s.jsxs(H,{...V,children:[y!==!1?s.jsx(Z,{...D,children:y||w[g]||h[g]}):null,s.jsx(q,{...G,children:c}),l!=null?s.jsx(M,{...I,children:l}):null,l==null&&S?s.jsx(M,{...I,children:s.jsx(J,{size:"small","aria-label":u,title:u,color:"inherit",onClick:S,...K,children:s.jsx(Q,{fontSize:"small",...X})})}):null]})});function ut(t){return z("MuiAlertTitle",t)}$("MuiAlertTitle",["root"]);const gt=t=>{const{classes:e}=t;return k({root:["root"]},ut,e)},vt=p(Y,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(t,e)=>e.root})(B(({theme:t})=>({fontWeight:t.typography.fontWeightMedium,marginTop:-2}))),Mt=R.forwardRef(function(e,r){const o=b({props:e,name:"MuiAlertTitle"}),{className:l,...c}=o,d=o,u=gt(d);return s.jsx(vt,{gutterBottom:!0,component:"div",ownerState:d,ref:r,className:L(u.root,l),...c})});export{St as A,Mt as a};
