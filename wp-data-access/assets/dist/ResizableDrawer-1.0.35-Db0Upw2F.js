import{j as v}from"./cm-1.0.35--NMEhA6K.js";import{u as Q}from"./useScreenSize-1.0.35-D9QB3bUJ.js";import{l as Z,a as V}from"./lib-1.0.35-vCbYWOI3.js";import{u as _}from"./RestApi-1.0.35-Bt-tzntO.js";import{r as m}from"./redux-1.0.35-xa1uZ5t4.js";import{h as tt,g as rt,i as et,j as W,c as B,k as T,l as ot,m as H,r as nt}from"./Typography-1.0.35-DmbWmVEH.js";import{u as it}from"./AdminTheme-1.0.35-BtyHaBRh.js";import{u as U,a as at,P as st}from"./iconBase-1.0.35-CEh1aNes.js";import{y as pt,z as ct,C as X,D as Y,E as lt,F as dt}from"./cjs-1.0.35-B75n3jry.js";import{d as ft}from"./Menu-1.0.35-3APgaaPr.js";import"./vendor-1.0.35-CN03Eozo.js";import"./loglevel-1.0.35-BZ7XahX3.js";import"./lodash-1.0.35-CNe2eGU5.js";import"./moment-1.0.35-C5S46NFB.js";import"./useEnhancedEffect-1.0.35-gtlBTowv.js";import"./notistack-1.0.35-C7EWtXAA.js";function ut(r,t,n){const e=t.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),g=X(t);let l;if(t.fakeTransform)l=t.fakeTransform;else{const a=g.getComputedStyle(t);l=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}let f=0,d=0;if(l&&l!=="none"&&typeof l=="string"){const a=l.split("(")[1].split(")")[0].split(",");f=parseInt(a[4],10),d=parseInt(a[5],10)}return r==="left"?i?`translateX(${i.right+f-e.left}px)`:`translateX(${g.innerWidth+f-e.left}px)`:r==="right"?i?`translateX(-${e.right-i.left-f}px)`:`translateX(-${e.left+e.width-f}px)`:r==="up"?i?`translateY(${i.bottom+d-e.top}px)`:`translateY(${g.innerHeight+d-e.top}px)`:i?`translateY(-${e.top-i.top+e.height-d}px)`:`translateY(-${e.top+e.height-d}px)`}function mt(r){return typeof r=="function"?r():r}function L(r,t,n){const e=mt(n),i=ut(r,t,e);i&&(t.style.webkitTransform=i,t.style.transform=i)}const ht=m.forwardRef(function(t,n){const e=U(),i={enter:e.transitions.easing.easeOut,exit:e.transitions.easing.sharp},g={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:l,appear:f=!0,children:d,container:a,direction:c="down",easing:b=i,in:h,onEnter:z,onEntered:M,onEntering:$,onExit:y,onExited:D,onExiting:j,style:P,timeout:k=g,TransitionComponent:E=pt,...R}=t,s=m.useRef(null),I=at(ct(d),s,n),x=o=>p=>{o&&(p===void 0?o(s.current):o(s.current,p))},w=x((o,p)=>{L(c,o,a),lt(o),z&&z(o,p)}),u=x((o,p)=>{const S=Y({timeout:k,style:P,easing:b},{mode:"enter"});o.style.webkitTransition=e.transitions.create("-webkit-transform",{...S}),o.style.transition=e.transitions.create("transform",{...S}),o.style.webkitTransform="none",o.style.transform="none",$&&$(o,p)}),A=x(M),C=x(j),G=x(o=>{const p=Y({timeout:k,style:P,easing:b},{mode:"exit"});o.style.webkitTransition=e.transitions.create("-webkit-transform",p),o.style.transition=e.transitions.create("transform",p),L(c,o,a),y&&y(o)}),J=x(o=>{o.style.webkitTransition="",o.style.transition="",D&&D(o)}),K=o=>{l&&l(s.current,o)},N=m.useCallback(()=>{s.current&&L(c,s.current,a)},[c,a]);return m.useEffect(()=>{if(h||c==="down"||c==="right")return;const o=ft(()=>{s.current&&L(c,s.current,a)}),p=X(s.current);return p.addEventListener("resize",o),()=>{o.clear(),p.removeEventListener("resize",o)}},[c,h,a]),m.useEffect(()=>{h||N()},[h,N]),v.jsx(E,{nodeRef:s,onEnter:w,onEntered:A,onEntering:u,onExit:G,onExited:J,onExiting:C,addEndListener:K,appear:f,in:h,timeout:k,...R,children:(o,{ownerState:p,...S})=>m.cloneElement(d,{ref:I,style:{visibility:o==="exited"&&!h?"hidden":void 0,...P,...d.props.style},...S})})});function gt(r){return tt("MuiDrawer",r)}rt("MuiDrawer",["root","docked","paper","anchorLeft","anchorRight","anchorTop","anchorBottom","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const O=(r,t)=>{const{ownerState:n}=r;return[t.root,(n.variant==="permanent"||n.variant==="persistent")&&t.docked,t.modal]},xt=r=>{const{classes:t,anchor:n,variant:e}=r,i={root:["root",`anchor${T(n)}`],docked:[(e==="permanent"||e==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${T(n)}`,e!=="temporary"&&`paperAnchorDocked${T(n)}`]};return ot(i,gt,t)},wt=W(dt,{name:"MuiDrawer",slot:"Root",overridesResolver:O})(H(({theme:r})=>({zIndex:(r.vars||r).zIndex.drawer}))),F=W("div",{shouldForwardProp:nt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:O})({flex:"0 0 auto"}),vt=W(st,{name:"MuiDrawer",slot:"Paper",overridesResolver:(r,t)=>{const{ownerState:n}=r;return[t.paper,t[`paperAnchor${T(n.anchor)}`],n.variant!=="temporary"&&t[`paperAnchorDocked${T(n.anchor)}`]]}})(H(({theme:r})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(r.vars||r).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:t})=>t.anchor==="left"&&t.variant!=="temporary",style:{borderRight:`1px solid ${(r.vars||r).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="top"&&t.variant!=="temporary",style:{borderBottom:`1px solid ${(r.vars||r).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="right"&&t.variant!=="temporary",style:{borderLeft:`1px solid ${(r.vars||r).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="bottom"&&t.variant!=="temporary",style:{borderTop:`1px solid ${(r.vars||r).palette.divider}`}}]}))),q={left:"right",right:"left",top:"down",bottom:"up"};function yt(r){return["left","right"].includes(r)}function kt({direction:r},t){return r==="rtl"&&yt(t)?q[t]:t}const Et=m.forwardRef(function(t,n){const e=et({props:t,name:"MuiDrawer"}),i=U(),g=it(),l={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:f="left",BackdropProps:d,children:a,className:c,elevation:b=16,hideBackdrop:h=!1,ModalProps:{BackdropProps:z,...M}={},onClose:$,open:y=!1,PaperProps:D={},SlideProps:j,TransitionComponent:P=ht,transitionDuration:k=l,variant:E="temporary",...R}=e,s=m.useRef(!1);m.useEffect(()=>{s.current=!0},[]);const I=kt({direction:g?"rtl":"ltr"},f),w={...e,anchor:f,elevation:b,open:y,variant:E,...R},u=xt(w),A=v.jsx(vt,{elevation:E==="temporary"?b:0,square:!0,...D,className:B(u.paper,D.className),ownerState:w,children:a});if(E==="permanent")return v.jsx(F,{className:B(u.root,u.docked,c),ownerState:w,ref:n,...R,children:A});const C=v.jsx(P,{in:y,direction:q[I],timeout:k,appear:s.current,...j,children:A});return E==="persistent"?v.jsx(F,{className:B(u.root,u.docked,c),ownerState:w,ref:n,...R,children:C}):v.jsx(wt,{BackdropProps:{...d,...z,transitionDuration:k},className:B(u.root,u.modal,c),open:y,ownerState:w,onClose:$,hideBackdrop:h,ref:n,...R,...M,children:C})}),Rt=()=>{const r=_(t=>t.ui.drawer.anchor);return Z.debug(r),r},Vt=({closeDrawer:r,children:t})=>{const n=Rt(),e=Q();return v.jsx(Et,{id:"pp-setting-drawer-root",anchor:n,open:!0,ModalProps:{onClose:()=>{r()}},PaperProps:{sx:{minWidth:"min(600px, 100vw)",maxWidth:"95vw",width:"min(600px, 100vw)",borderTop:"4px solid #f4f7f9",borderBottom:"4px solid #f4f7f9",boxSizing:"border-box",...e.width>600&&n===V.LEFT&&{resize:"horizontal",overflow:"auto",borderRight:"4px solid #f4f7f9"},...e.width>600&&n===V.RIGHT&&{resize:"horizontal",overflow:"auto",borderLeft:"4px solid #f4f7f9",direction:"rtl","& *":{direction:"initial"}}},id:"pp-setting-drawer"},hideBackdrop:!1,sx:{"& .MuiBackdrop-root":{opacity:"0.2 !important"}},children:t})};export{Vt as default};
