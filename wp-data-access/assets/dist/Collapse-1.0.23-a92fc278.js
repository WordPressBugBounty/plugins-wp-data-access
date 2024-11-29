import{h as tt,g as et,i as T,b as o,m as nt,$ as it,_ as ot,c as rt,n as st}from"./Typography-1.0.23-19a0fd3e.js";import{r as y,j as C}from"./main-1.0.23.js";import{z as at,y as lt,C as P}from"./index.esm-1.0.23-ba0465a2.js";import{c as pt,u as dt}from"./iconBase-1.0.23-43ac6f06.js";function ct(n){return tt("MuiCollapse",n)}et("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ut=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ht=n=>{const{orientation:e,classes:r}=n,d={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return st(d,ct,r)},mt=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[r.orientation],r.state==="entered"&&e.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&e.hidden]}})(({theme:n,ownerState:e})=>o({height:0,overflow:"hidden",transition:n.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},e.state==="entered"&&o({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),ft=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})(({ownerState:n})=>o({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),gt=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})(({ownerState:n})=>o({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),b=y.forwardRef(function(e,r){const d=nt({props:e,name:"MuiCollapse"}),{addEndListener:$,children:U,className:_,collapsedSize:f="0px",component:A,easing:S,in:D,onEnter:W,onEntered:j,onEntering:I,onExit:M,onExited:k,onExiting:F,orientation:H="vertical",style:z,timeout:a=it.standard,TransitionComponent:q=at}=d,B=ot(d,ut),g=o({},d,{orientation:H,collapsedSize:f}),c=ht(g),L=lt(),G=pt(),l=y.useRef(null),v=y.useRef(),x=typeof f=="number"?`${f}px`:f,u=H==="horizontal",h=u?"width":"height",E=y.useRef(null),J=dt(r,E),p=t=>i=>{if(t){const s=E.current;i===void 0?t(s):t(s,i)}},R=()=>l.current?l.current[u?"clientWidth":"clientHeight"]:0,K=p((t,i)=>{l.current&&u&&(l.current.style.position="absolute"),t.style[h]=x,W&&W(t,i)}),O=p((t,i)=>{const s=R();l.current&&u&&(l.current.style.position="");const{duration:m,easing:w}=P({style:z,timeout:a,easing:S},{mode:"enter"});if(a==="auto"){const N=L.transitions.getAutoHeightDuration(s);t.style.transitionDuration=`${N}ms`,v.current=N}else t.style.transitionDuration=typeof m=="string"?m:`${m}ms`;t.style[h]=`${s}px`,t.style.transitionTimingFunction=w,I&&I(t,i)}),Q=p((t,i)=>{t.style[h]="auto",j&&j(t,i)}),V=p(t=>{t.style[h]=`${R()}px`,M&&M(t)}),X=p(k),Y=p(t=>{const i=R(),{duration:s,easing:m}=P({style:z,timeout:a,easing:S},{mode:"exit"});if(a==="auto"){const w=L.transitions.getAutoHeightDuration(i);t.style.transitionDuration=`${w}ms`,v.current=w}else t.style.transitionDuration=typeof s=="string"?s:`${s}ms`;t.style[h]=x,t.style.transitionTimingFunction=m,F&&F(t)}),Z=t=>{a==="auto"&&G.start(v.current||0,t),$&&$(E.current,t)};return C.jsx(q,o({in:D,onEnter:K,onEntered:Q,onEntering:O,onExit:V,onExited:X,onExiting:Y,addEndListener:Z,nodeRef:E,timeout:a==="auto"?null:a},B,{children:(t,i)=>C.jsx(mt,o({as:A,className:rt(c.root,_,{entered:c.entered,exited:!D&&x==="0px"&&c.hidden}[t]),style:o({[u?"minWidth":"minHeight"]:x},z),ref:J},i,{ownerState:o({},g,{state:t}),children:C.jsx(ft,{ownerState:o({},g,{state:t}),className:c.wrapper,ref:l,children:C.jsx(gt,{ownerState:o({},g,{state:t}),className:c.wrapperInner,children:U})})}))}))});b.muiSupportAuto=!0;const Ct=b;export{Ct as C};
