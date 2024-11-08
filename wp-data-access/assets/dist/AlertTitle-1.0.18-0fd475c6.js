import{g as T,h as P,i as p,j as v,K as S,J as M,b as n,_ as R,c as z,n as b,T as Z}from"./Typography-1.0.18-dc3c0740.js";import{j as s,r as w}from"./main-1.0.18.js";import{c as L}from"./index-1.0.18-ff546563.js";import{u as I}from"./useSlot-1.0.18-71f9e7ae.js";import{c as f}from"./createSvgIcon-1.0.18-dcf0276e.js";import{C as J}from"./Close-1.0.18-d90e9fa7.js";import{P as K,I as q}from"./iconBase-1.0.18-3c21f5e2.js";function D(t){return P("MuiAlert",t)}const G=T("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),j=G,Q=f(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),X=f(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Y=f(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),tt=f(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ot=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],et=L(),st=t=>{const{variant:e,color:r,severity:o,classes:a}=t,i={root:["root",`color${v(r||o)}`,`${e}${v(r||o)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return b(i,D,a)},rt=p(K,{name:"MuiAlert",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`${r.variant}${v(r.color||r.severity)}`]]}})(({theme:t})=>{const e=t.palette.mode==="light"?S:M,r=t.palette.mode==="light"?M:S;return n({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${o}StandardBg`]:r(t.palette[o].light,.9),[`& .${j.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),border:`1px solid ${(t.vars||t).palette[o].light}`,[`& .${j.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(([,o])=>o.main&&o.dark).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:n({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert[`${o}FilledColor`],backgroundColor:t.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[o].dark:t.palette[o].main,color:t.palette.getContrastText(t.palette[o].main)})}))]})}),nt=p("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),lt=p("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,e)=>e.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),h=p("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),$={success:s.jsx(Q,{fontSize:"inherit"}),warning:s.jsx(X,{fontSize:"inherit"}),error:s.jsx(Y,{fontSize:"inherit"}),info:s.jsx(tt,{fontSize:"inherit"})},at=w.forwardRef(function(e,r){const o=et({props:e,name:"MuiAlert"}),{action:a,children:i,className:d,closeText:u="Close",color:m,components:A={},componentsProps:O={},icon:x,iconMapping:k=$,onClose:C,role:B="alert",severity:g="success",slotProps:N={},slots:W={},variant:E="standard"}=o,U=R(o,ot),l=n({},o,{color:m,severity:g,variant:E,colorSeverity:m||g}),c=st(l),y={slots:n({closeButton:A.CloseButton,closeIcon:A.CloseIcon},W),slotProps:n({},O,N)},[_,H]=I("closeButton",{elementType:q,externalForwardedProps:y,ownerState:l}),[F,V]=I("closeIcon",{elementType:J,externalForwardedProps:y,ownerState:l});return s.jsxs(rt,n({role:B,elevation:0,ownerState:l,className:z(c.root,d),ref:r},U,{children:[x!==!1?s.jsx(nt,{ownerState:l,className:c.icon,children:x||k[g]||$[g]}):null,s.jsx(lt,{ownerState:l,className:c.message,children:i}),a!=null?s.jsx(h,{ownerState:l,className:c.action,children:a}):null,a==null&&C?s.jsx(h,{ownerState:l,className:c.action,children:s.jsx(_,n({size:"small","aria-label":u,title:u,color:"inherit",onClick:C},H,{children:s.jsx(F,n({fontSize:"small"},V))}))}):null]}))}),St=at;function it(t){return P("MuiAlertTitle",t)}T("MuiAlertTitle",["root"]);const ct=["className"],pt=L(),dt=t=>{const{classes:e}=t;return b({root:["root"]},it,e)},ut=p(Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(t,e)=>e.root})(({theme:t})=>({fontWeight:t.typography.fontWeightMedium,marginTop:-2})),gt=w.forwardRef(function(e,r){const o=pt({props:e,name:"MuiAlertTitle"}),{className:a}=o,i=R(o,ct),d=o,u=dt(d);return s.jsx(ut,n({gutterBottom:!0,component:"div",ownerState:d,ref:r,className:z(u.root,a)},i))}),Mt=gt;export{St as A,Mt as a};
