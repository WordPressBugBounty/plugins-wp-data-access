import{d as ae,K as we,Y as Be,_ as v,a as U,e as le,g as ce,s as Y,u as ue,c as q,b as de,o as _e,P as je,Z as He,V as Ke}from"./iconBase-1.0.15-5866dbfd.js";import{r as l,j as B}from"./main-1.0.15.js";import{ag as K,ak as ze,aJ as Ue,aL as We,aK as Me,X as te,aS as Ve,al as Ye,aj as Ge}from"./main-1.0.15-e2ad00f6.js";function Se(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}function qe(e,t=166){let n;function o(...i){const r=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(r,t)}return o.clear=()=>{clearTimeout(n)},o}function ie(e){return K(e).defaultView||window}function De(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Xe=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Je(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ze(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Qe(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ze(e))}function et(e){const t=[],n=[];return Array.from(e.querySelectorAll(Xe)).forEach((o,i)=>{const r=Je(o);r===-1||!Qe(o)||(r===0?t.push(o):n.push({documentOrder:i,tabIndex:r,node:o}))}),n.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function tt(){return!0}function nt(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:r=et,isEnabled:a=tt,open:c}=e,u=l.useRef(!1),m=l.useRef(null),x=l.useRef(null),b=l.useRef(null),M=l.useRef(null),P=l.useRef(!1),g=l.useRef(null),D=ae(t.ref,g),E=l.useRef(null);l.useEffect(()=>{!c||!g.current||(P.current=!n)},[n,c]),l.useEffect(()=>{if(!c||!g.current)return;const s=K(g.current);return g.current.contains(s.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),P.current&&g.current.focus()),()=>{i||(b.current&&b.current.focus&&(u.current=!0,b.current.focus()),b.current=null)}},[c]),l.useEffect(()=>{if(!c||!g.current)return;const s=K(g.current),d=p=>{E.current=p,!(o||!a()||p.key!=="Tab")&&s.activeElement===g.current&&p.shiftKey&&(u.current=!0,x.current&&x.current.focus())},h=()=>{const p=g.current;if(p===null)return;if(!s.hasFocus()||!a()||u.current){u.current=!1;return}if(p.contains(s.activeElement)||o&&s.activeElement!==m.current&&s.activeElement!==x.current)return;if(s.activeElement!==M.current)M.current=null;else if(M.current!==null)return;if(!P.current)return;let C=[];if((s.activeElement===m.current||s.activeElement===x.current)&&(C=r(g.current)),C.length>0){var $,I;const j=!!(($=E.current)!=null&&$.shiftKey&&((I=E.current)==null?void 0:I.key)==="Tab"),L=C[0],O=C[C.length-1];typeof L!="string"&&typeof O!="string"&&(j?O.focus():L.focus())}else p.focus()};s.addEventListener("focusin",h),s.addEventListener("keydown",d,!0);const y=setInterval(()=>{s.activeElement&&s.activeElement.tagName==="BODY"&&h()},50);return()=>{clearInterval(y),s.removeEventListener("focusin",h),s.removeEventListener("keydown",d,!0)}},[n,o,i,a,c,r]);const f=s=>{b.current===null&&(b.current=s.relatedTarget),P.current=!0,M.current=s.target;const d=t.props.onFocus;d&&d(s)},N=s=>{b.current===null&&(b.current=s.relatedTarget),P.current=!0};return B.jsxs(l.Fragment,{children:[B.jsx("div",{tabIndex:c?0:-1,onFocus:N,ref:m,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:D,onFocus:f}),B.jsx("div",{tabIndex:c?0:-1,onFocus:N,ref:x,"data-testid":"sentinelEnd"})]})}function ot(e){const t=K(e);return t.body===e?ie(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function se(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ce(e){return parseInt(ie(e).getComputedStyle(e).paddingRight,10)||0}function rt(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function Ie(e,t,n,o,i){const r=[t,n,...o];[].forEach.call(e.children,a=>{const c=r.indexOf(a)===-1,u=!rt(a);c&&u&&se(a,i)})}function be(e,t){let n=-1;return e.some((o,i)=>t(o)?(n=i,!0):!1),n}function st(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(ot(o)){const a=De(K(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ce(o)+a}px`;const c=K(o).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${Ce(u)+a}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=K(o).body;else{const a=o.parentElement,c=ie(o);r=(a==null?void 0:a.nodeName)==="HTML"&&c.getComputedStyle(a).overflowY==="scroll"?a:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:a,property:c})=>{r?a.style.setProperty(c,r):a.style.removeProperty(c)})}}function it(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class at{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&se(t.modalRef,!1);const i=it(n);Ie(n,t.mount,t.modalRef,i,!0);const r=be(this.containers,a=>a.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),o)}mount(t,n){const o=be(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=st(i,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=be(this.containers,a=>a.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&se(t.modalRef,n),Ie(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const a=r.modals[r.modals.length-1];a.modalRef&&se(a.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function lt(e){return typeof e=="function"?e():e}function ct(e){return e?e.props.hasOwnProperty("in"):!1}const ut=new at;function dt(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=ut,closeAfterTransition:r=!1,onTransitionEnter:a,onTransitionExited:c,children:u,onClose:m,open:x,rootRef:b}=e,M=l.useRef({}),P=l.useRef(null),g=l.useRef(null),D=ae(g,b),[E,f]=l.useState(!x),N=ct(u);let s=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(s=!1);const d=()=>K(P.current),h=()=>(M.current.modalRef=g.current,M.current.mount=P.current,M.current),y=()=>{i.mount(h(),{disableScrollLock:o}),g.current&&(g.current.scrollTop=0)},p=we(()=>{const R=lt(t)||d().body;i.add(h(),R),g.current&&y()}),C=l.useCallback(()=>i.isTopModal(h()),[i]),$=we(R=>{P.current=R,R&&(x&&C()?y():g.current&&se(g.current,s))}),I=l.useCallback(()=>{i.remove(h(),s)},[s,i]);l.useEffect(()=>()=>{I()},[I]),l.useEffect(()=>{x?p():(!N||!r)&&I()},[x,I,N,r,p]);const j=R=>w=>{var S;(S=R.onKeyDown)==null||S.call(R,w),!(w.key!=="Escape"||w.which===229||!C())&&(n||(w.stopPropagation(),m&&m(w,"escapeKeyDown")))},L=R=>w=>{var S;(S=R.onClick)==null||S.call(R,w),w.target===w.currentTarget&&m&&m(w,"backdropClick")};return{getRootProps:(R={})=>{const w=Be(e);delete w.onTransitionEnter,delete w.onTransitionExited;const S=v({},w,R);return v({role:"presentation"},S,{onKeyDown:j(S),ref:D})},getBackdropProps:(R={})=>{const w=R;return v({"aria-hidden":!0},w,{onClick:L(w),open:x})},getTransitionProps:()=>{const R=()=>{f(!1),a&&a()},w=()=>{f(!0),c&&c(),r&&I()};return{onEnter:Se(R,u==null?void 0:u.props.onEnter),onExited:Se(w,u==null?void 0:u.props.onExited)}},rootRef:D,portalRef:$,isTopModal:C,exited:E,hasTransition:N}}const pt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ft={entering:{opacity:1},entered:{opacity:1}},ht=l.forwardRef(function(t,n){const o=ze(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:a=!0,children:c,easing:u,in:m,onEnter:x,onEntered:b,onEntering:M,onExit:P,onExited:g,onExiting:D,style:E,timeout:f=i,TransitionComponent:N=Ue}=t,s=U(t,pt),d=l.useRef(null),h=ae(d,c.ref,n),y=T=>A=>{if(T){const R=d.current;A===void 0?T(R):T(R,A)}},p=y(M),C=y((T,A)=>{We(T);const R=Me({style:E,timeout:f,easing:u},{mode:"enter"});T.style.webkitTransition=o.transitions.create("opacity",R),T.style.transition=o.transitions.create("opacity",R),x&&x(T,A)}),$=y(b),I=y(D),j=y(T=>{const A=Me({style:E,timeout:f,easing:u},{mode:"exit"});T.style.webkitTransition=o.transitions.create("opacity",A),T.style.transition=o.transitions.create("opacity",A),P&&P(T)}),L=y(g),O=T=>{r&&r(d.current,T)};return B.jsx(N,v({appear:a,in:m,nodeRef:d,onEnter:C,onEntered:$,onEntering:p,onExit:j,onExited:L,onExiting:I,addEndListener:O,timeout:f},s,{children:(T,A)=>l.cloneElement(c,v({style:v({opacity:0,visibility:T==="exited"&&!m?"hidden":void 0},ft[T],E,c.props.style),ref:h},A))}))}),mt=ht;function gt(e){return le("MuiBackdrop",e)}ce("MuiBackdrop",["root","invisible"]);const bt=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Pt=e=>{const{classes:t,invisible:n}=e;return de({root:["root",n&&"invisible"]},gt,t)},vt=Y("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>v({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),xt=l.forwardRef(function(t,n){var o,i,r;const a=ue({props:t,name:"MuiBackdrop"}),{children:c,className:u,component:m="div",components:x={},componentsProps:b={},invisible:M=!1,open:P,slotProps:g={},slots:D={},TransitionComponent:E=mt,transitionDuration:f}=a,N=U(a,bt),s=v({},a,{component:m,invisible:M}),d=Pt(s),h=(o=g.root)!=null?o:b.root;return B.jsx(E,v({in:P,timeout:f},N,{children:B.jsx(vt,v({"aria-hidden":!0},h,{as:(i=(r=D.root)!=null?r:x.Root)!=null?i:m,className:q(d.root,u,h==null?void 0:h.className),ownerState:v({},s,h==null?void 0:h.ownerState),classes:d,ref:n,children:c}))}))}),Et=xt;function yt(e){return le("MuiModal",e)}ce("MuiModal",["root","hidden","backdrop"]);const Rt=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Tt=e=>{const{open:t,exited:n,classes:o}=e;return de({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},yt,o)},kt=Y("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>v({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),wt=Y(Et,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Mt=l.forwardRef(function(t,n){var o,i,r,a,c,u;const m=ue({name:"MuiModal",props:t}),{BackdropComponent:x=wt,BackdropProps:b,className:M,closeAfterTransition:P=!1,children:g,container:D,component:E,components:f={},componentsProps:N={},disableAutoFocus:s=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:h=!1,disablePortal:y=!1,disableRestoreFocus:p=!1,disableScrollLock:C=!1,hideBackdrop:$=!1,keepMounted:I=!1,onBackdropClick:j,open:L,slotProps:O,slots:T}=m,A=U(m,Rt),R=v({},m,{closeAfterTransition:P,disableAutoFocus:s,disableEnforceFocus:d,disableEscapeKeyDown:h,disablePortal:y,disableRestoreFocus:p,disableScrollLock:C,hideBackdrop:$,keepMounted:I}),{getRootProps:w,getBackdropProps:S,getTransitionProps:W,portalRef:he,isTopModal:pe,exited:H,hasTransition:fe}=dt(v({},R,{rootRef:n})),G=v({},R,{exited:H}),V=Tt(G),X={};if(g.props.tabIndex===void 0&&(X.tabIndex="-1"),fe){const{onEnter:k,onExited:F}=W();X.onEnter=k,X.onExited=F}const J=(o=(i=T==null?void 0:T.root)!=null?i:f.Root)!=null?o:kt,ne=(r=(a=T==null?void 0:T.backdrop)!=null?a:f.Backdrop)!=null?r:x,oe=(c=O==null?void 0:O.root)!=null?c:N.root,Z=(u=O==null?void 0:O.backdrop)!=null?u:N.backdrop,me=te({elementType:J,externalSlotProps:oe,externalForwardedProps:A,getSlotProps:w,additionalProps:{ref:n,as:E},ownerState:G,className:q(M,oe==null?void 0:oe.className,V==null?void 0:V.root,!G.open&&G.exited&&(V==null?void 0:V.hidden))}),ge=te({elementType:ne,externalSlotProps:Z,additionalProps:b,getSlotProps:k=>S(v({},k,{onClick:F=>{j&&j(F),k!=null&&k.onClick&&k.onClick(F)}})),className:q(Z==null?void 0:Z.className,b==null?void 0:b.className,V==null?void 0:V.backdrop),ownerState:G});return!I&&!L&&(!fe||H)?null:B.jsx(Ve,{ref:he,container:D,disablePortal:y,children:B.jsxs(J,v({},me,{children:[!$&&x?B.jsx(ne,v({},ge)):null,B.jsx(nt,{disableEnforceFocus:d,disableAutoFocus:s,disableRestoreFocus:p,isEnabled:pe,open:L,children:l.cloneElement(g,X)})]}))})}),St=Mt,Ct=l.createContext({}),It=Ct;function Nt(e){return le("MuiList",e)}ce("MuiList",["root","padding","dense","subheader"]);const Ft=["children","className","component","dense","disablePadding","subheader"],Lt=e=>{const{classes:t,disablePadding:n,dense:o,subheader:i}=e;return de({root:["root",!n&&"padding",o&&"dense",i&&"subheader"]},Nt,t)},Ot=Y("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>v({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Dt=l.forwardRef(function(t,n){const o=ue({props:t,name:"MuiList"}),{children:i,className:r,component:a="ul",dense:c=!1,disablePadding:u=!1,subheader:m}=o,x=U(o,Ft),b=l.useMemo(()=>({dense:c}),[c]),M=v({},o,{component:a,dense:c,disablePadding:u}),P=Lt(M);return B.jsx(It.Provider,{value:b,children:B.jsxs(Ot,v({as:a,className:q(P.root,r),ref:n,ownerState:M},x,{children:[m,i]}))})}),$t=Dt,At=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Pe(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Ne(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function $e(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function re(e,t,n,o,i,r){let a=!1,c=i(e,t,t?n:!1);for(;c;){if(c===e.firstChild){if(a)return!1;a=!0}const u=o?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!$e(c,r)||u)c=i(e,c,n);else return c.focus(),!0}return!1}const Bt=l.forwardRef(function(t,n){const{actions:o,autoFocus:i=!1,autoFocusItem:r=!1,children:a,className:c,disabledItemsFocusable:u=!1,disableListWrap:m=!1,onKeyDown:x,variant:b="selectedMenu"}=t,M=U(t,At),P=l.useRef(null),g=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});_e(()=>{i&&P.current.focus()},[i]),l.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(s,{direction:d})=>{const h=!P.current.style.width;if(s.clientHeight<P.current.clientHeight&&h){const y=`${De(K(s))}px`;P.current.style[d==="rtl"?"paddingLeft":"paddingRight"]=y,P.current.style.width=`calc(100% + ${y})`}return P.current}}),[]);const D=s=>{const d=P.current,h=s.key,y=K(d).activeElement;if(h==="ArrowDown")s.preventDefault(),re(d,y,m,u,Pe);else if(h==="ArrowUp")s.preventDefault(),re(d,y,m,u,Ne);else if(h==="Home")s.preventDefault(),re(d,null,m,u,Pe);else if(h==="End")s.preventDefault(),re(d,null,m,u,Ne);else if(h.length===1){const p=g.current,C=h.toLowerCase(),$=performance.now();p.keys.length>0&&($-p.lastTime>500?(p.keys=[],p.repeating=!0,p.previousKeyMatched=!0):p.repeating&&C!==p.keys[0]&&(p.repeating=!1)),p.lastTime=$,p.keys.push(C);const I=y&&!p.repeating&&$e(y,p);p.previousKeyMatched&&(I||re(d,y,!1,u,Pe,p))?s.preventDefault():p.previousKeyMatched=!1}x&&x(s)},E=ae(P,n);let f=-1;l.Children.forEach(a,(s,d)=>{if(!l.isValidElement(s)){f===d&&(f+=1,f>=a.length&&(f=-1));return}s.props.disabled||(b==="selectedMenu"&&s.props.selected||f===-1)&&(f=d),f===d&&(s.props.disabled||s.props.muiSkipListHighlight||s.type.muiSkipListHighlight)&&(f+=1,f>=a.length&&(f=-1))});const N=l.Children.map(a,(s,d)=>{if(d===f){const h={};return r&&(h.autoFocus=!0),s.props.tabIndex===void 0&&b==="selectedMenu"&&(h.tabIndex=0),l.cloneElement(s,h)}return s});return B.jsx($t,v({role:"menu",ref:E,className:c,onKeyDown:D,tabIndex:i?0:-1},M,{children:N}))}),_t=Bt;function jt(e){return le("MuiPopover",e)}ce("MuiPopover",["root","paper"]);const Ht=["onEntering"],Kt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],zt=["slotProps"];function Fe(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Le(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Oe(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ve(e){return typeof e=="function"?e():e}const Ut=e=>{const{classes:t}=e;return de({root:["root"],paper:["paper"]},jt,t)},Wt=Y(St,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ae=Y(je,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Vt=l.forwardRef(function(t,n){var o,i,r;const a=ue({props:t,name:"MuiPopover"}),{action:c,anchorEl:u,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:x,anchorReference:b="anchorEl",children:M,className:P,container:g,elevation:D=8,marginThreshold:E=16,open:f,PaperProps:N={},slots:s,slotProps:d,transformOrigin:h={vertical:"top",horizontal:"left"},TransitionComponent:y=Ye,transitionDuration:p="auto",TransitionProps:{onEntering:C}={},disableScrollLock:$=!1}=a,I=U(a.TransitionProps,Ht),j=U(a,Kt),L=(o=d==null?void 0:d.paper)!=null?o:N,O=l.useRef(),T=ae(O,L.ref),A=v({},a,{anchorOrigin:m,anchorReference:b,elevation:D,marginThreshold:E,externalPaperSlotProps:L,transformOrigin:h,TransitionComponent:y,transitionDuration:p,TransitionProps:I}),R=Ut(A),w=l.useCallback(()=>{if(b==="anchorPosition")return x;const k=ve(u),_=(k&&k.nodeType===1?k:K(O.current).body).getBoundingClientRect();return{top:_.top+Fe(_,m.vertical),left:_.left+Le(_,m.horizontal)}},[u,m.horizontal,m.vertical,x,b]),S=l.useCallback(k=>({vertical:Fe(k,h.vertical),horizontal:Le(k,h.horizontal)}),[h.horizontal,h.vertical]),W=l.useCallback(k=>{const F={width:k.offsetWidth,height:k.offsetHeight},_=S(F);if(b==="none")return{top:null,left:null,transformOrigin:Oe(_)};const xe=w();let Q=xe.top-_.vertical,ee=xe.left-_.horizontal;const Ee=Q+F.height,ye=ee+F.width,Re=ie(ve(u)),Te=Re.innerHeight-E,ke=Re.innerWidth-E;if(E!==null&&Q<E){const z=Q-E;Q-=z,_.vertical+=z}else if(E!==null&&Ee>Te){const z=Ee-Te;Q-=z,_.vertical+=z}if(E!==null&&ee<E){const z=ee-E;ee-=z,_.horizontal+=z}else if(ye>ke){const z=ye-ke;ee-=z,_.horizontal+=z}return{top:`${Math.round(Q)}px`,left:`${Math.round(ee)}px`,transformOrigin:Oe(_)}},[u,b,w,S,E]),[he,pe]=l.useState(f),H=l.useCallback(()=>{const k=O.current;if(!k)return;const F=W(k);F.top!==null&&(k.style.top=F.top),F.left!==null&&(k.style.left=F.left),k.style.transformOrigin=F.transformOrigin,pe(!0)},[W]);l.useEffect(()=>($&&window.addEventListener("scroll",H),()=>window.removeEventListener("scroll",H)),[u,$,H]);const fe=(k,F)=>{C&&C(k,F),H()},G=()=>{pe(!1)};l.useEffect(()=>{f&&H()}),l.useImperativeHandle(c,()=>f?{updatePosition:()=>{H()}}:null,[f,H]),l.useEffect(()=>{if(!f)return;const k=qe(()=>{H()}),F=ie(u);return F.addEventListener("resize",k),()=>{k.clear(),F.removeEventListener("resize",k)}},[u,f,H]);let V=p;p==="auto"&&!y.muiSupportAuto&&(V=void 0);const X=g||(u?K(ve(u)).body:void 0),J=(i=s==null?void 0:s.root)!=null?i:Wt,ne=(r=s==null?void 0:s.paper)!=null?r:Ae,oe=te({elementType:ne,externalSlotProps:v({},L,{style:he?L.style:v({},L.style,{opacity:0})}),additionalProps:{elevation:D,ref:T},ownerState:A,className:q(R.paper,L==null?void 0:L.className)}),Z=te({elementType:J,externalSlotProps:(d==null?void 0:d.root)||{},externalForwardedProps:j,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:X,open:f},ownerState:A,className:q(R.root,P)}),{slotProps:me}=Z,ge=U(Z,zt);return B.jsx(J,v({},ge,!He(J)&&{slotProps:me,disableScrollLock:$},{children:B.jsx(y,v({appear:!0,in:f,onEntering:fe,onExited:G,timeout:V},I,{children:B.jsx(ne,v({},oe,{children:M}))}))}))}),Yt=Vt;function Gt(e){return le("MuiMenu",e)}ce("MuiMenu",["root","paper","list"]);const qt=["onEntering"],Xt=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Jt={vertical:"top",horizontal:"right"},Zt={vertical:"top",horizontal:"left"},Qt=e=>{const{classes:t}=e;return de({root:["root"],paper:["paper"],list:["list"]},Gt,t)},en=Y(Yt,{shouldForwardProp:e=>Ke(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),tn=Y(Ae,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),nn=Y(_t,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),on=l.forwardRef(function(t,n){var o,i;const r=ue({props:t,name:"MuiMenu"}),{autoFocus:a=!0,children:c,className:u,disableAutoFocusItem:m=!1,MenuListProps:x={},onClose:b,open:M,PaperProps:P={},PopoverClasses:g,transitionDuration:D="auto",TransitionProps:{onEntering:E}={},variant:f="selectedMenu",slots:N={},slotProps:s={}}=r,d=U(r.TransitionProps,qt),h=U(r,Xt),y=Ge(),p=v({},r,{autoFocus:a,disableAutoFocusItem:m,MenuListProps:x,onEntering:E,PaperProps:P,transitionDuration:D,TransitionProps:d,variant:f}),C=Qt(p),$=a&&!m&&M,I=l.useRef(null),j=(S,W)=>{I.current&&I.current.adjustStyleForScrollbar(S,{direction:y?"rtl":"ltr"}),E&&E(S,W)},L=S=>{S.key==="Tab"&&(S.preventDefault(),b&&b(S,"tabKeyDown"))};let O=-1;l.Children.map(c,(S,W)=>{l.isValidElement(S)&&(S.props.disabled||(f==="selectedMenu"&&S.props.selected||O===-1)&&(O=W))});const T=(o=N.paper)!=null?o:tn,A=(i=s.paper)!=null?i:P,R=te({elementType:N.root,externalSlotProps:s.root,ownerState:p,className:[C.root,u]}),w=te({elementType:T,externalSlotProps:A,ownerState:p,className:C.paper});return B.jsx(en,v({onClose:b,anchorOrigin:{vertical:"bottom",horizontal:y?"right":"left"},transformOrigin:y?Jt:Zt,slots:{paper:T,root:N.root},slotProps:{root:R,paper:w},open:M,ref:n,transitionDuration:D,TransitionProps:v({onEntering:j},d),ownerState:p},h,{classes:g,children:B.jsx(nn,v({onKeyDown:L,actions:I,autoFocus:a&&(O===-1||m),autoFocusItem:$,variant:f},x,{className:q(C.list,x.className),children:c}))}))}),ln=on;export{Et as B,mt as F,It as L,ln as M,Yt as P,St as a,_t as b,Se as c,qe as d,nt as e,$t as f,ie as o};
