import{_ as J,b as g}from"./Typography-1.0.23-19a0fd3e.js";import{r as c,j as M}from"./main-1.0.23.js";import{y as N,z as O,B as Q,C as A}from"./index.esm-1.0.23-ba0465a2.js";import{c as U,u as V}from"./iconBase-1.0.23-43ac6f06.js";const X=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function h(l){return`scale(${l}, ${l**2})`}const Y={entering:{opacity:1,transform:h(1)},entered:{opacity:1,transform:"none"}},p=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),L=c.forwardRef(function(x,_){const{addEndListener:y,appear:v=!0,children:f,easing:T,in:R,onEnter:j,onEntered:C,onEntering:D,onExit:w,onExited:G,onExiting:H,style:m,timeout:o="auto",TransitionComponent:b=O}=x,F=J(x,X),P=U(),E=c.useRef(),r=N(),d=c.useRef(null),$=V(d,f.ref,_),s=t=>e=>{if(t){const i=d.current;e===void 0?t(i):t(i,e)}},z=s(D),S=s((t,e)=>{Q(t);const{duration:i,delay:u,easing:n}=A({style:m,timeout:o,easing:T},{mode:"enter"});let a;o==="auto"?(a=r.transitions.getAutoHeightDuration(t.clientHeight),E.current=a):a=i,t.style.transition=[r.transitions.create("opacity",{duration:a,delay:u}),r.transitions.create("transform",{duration:p?a:a*.666,delay:u,easing:n})].join(","),j&&j(t,e)}),W=s(C),B=s(H),K=s(t=>{const{duration:e,delay:i,easing:u}=A({style:m,timeout:o,easing:T},{mode:"exit"});let n;o==="auto"?(n=r.transitions.getAutoHeightDuration(t.clientHeight),E.current=n):n=e,t.style.transition=[r.transitions.create("opacity",{duration:n,delay:i}),r.transitions.create("transform",{duration:p?n:n*.666,delay:p?i:i||n*.333,easing:u})].join(","),t.style.opacity=0,t.style.transform=h(.75),w&&w(t)}),k=s(G),q=t=>{o==="auto"&&P.start(E.current||0,t),y&&y(d.current,t)};return M.jsx(b,g({appear:v,in:R,nodeRef:d,onEnter:S,onEntered:W,onEntering:z,onExit:K,onExited:k,onExiting:B,addEndListener:q,timeout:o==="auto"?null:o},F,{children:(t,e)=>c.cloneElement(f,g({style:g({opacity:0,transform:h(.75),visibility:t==="exited"&&!R?"hidden":void 0},Y[t],m,f.props.style),ref:$},e))}))});L.muiSupportAuto=!0;const et=L;export{et as G};