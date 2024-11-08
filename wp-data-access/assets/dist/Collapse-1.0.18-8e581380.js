import{h as tt,g as et,i as T,b as o,m as nt,$ as it,_ as ot,c as rt,n as st}from"./Typography-1.0.18-dc3c0740.js";import{r as y,j as C}from"./main-1.0.18.js";import{W as at,R as lt,Y as P}from"./index.esm-1.0.18-12f13c4a.js";import{c as pt,u as dt}from"./iconBase-1.0.18-3c21f5e2.js";function ct(n){return tt("MuiCollapse",n)}et("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ut=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ht=n=>{const{orientation:e,classes:r}=n,d={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return st(d,ct,r)},mt=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[r.orientation],r.state==="entered"&&e.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&e.hidden]}})(({theme:n,ownerState:e})=>o({height:0,overflow:"hidden",transition:n.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},e.state==="entered"&&o({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),ft=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})(({ownerState:n})=>o({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),gt=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})(({ownerState:n})=>o({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),b=y.forwardRef(function(e,r){const d=nt({props:e,name:"MuiCollapse"}),{addEndListener:$,children:U,className:_,collapsedSize:f="0px",component:A,easing:S,in:D,onEnter:W,onEntered:j,onEntering:I,onExit:M,onExited:Y,onExiting:F,orientation:H="vertical",style:z,timeout:a=it.standard,TransitionComponent:k=at}=d,q=ot(d,ut),g=o({},d,{orientation:H,collapsedSize:f}),c=ht(g),L=lt(),B=pt(),l=y.useRef(null),R=y.useRef(),x=typeof f=="number"?`${f}px`:f,u=H==="horizontal",h=u?"width":"height",E=y.useRef(null),G=dt(r,E),p=t=>i=>{if(t){const s=E.current;i===void 0?t(s):t(s,i)}},v=()=>l.current?l.current[u?"clientWidth":"clientHeight"]:0,J=p((t,i)=>{l.current&&u&&(l.current.style.position="absolute"),t.style[h]=x,W&&W(t,i)}),K=p((t,i)=>{const s=v();l.current&&u&&(l.current.style.position="");const{duration:m,easing:w}=P({style:z,timeout:a,easing:S},{mode:"enter"});if(a==="auto"){const N=L.transitions.getAutoHeightDuration(s);t.style.transitionDuration=`${N}ms`,R.current=N}else t.style.transitionDuration=typeof m=="string"?m:`${m}ms`;t.style[h]=`${s}px`,t.style.transitionTimingFunction=w,I&&I(t,i)}),O=p((t,i)=>{t.style[h]="auto",j&&j(t,i)}),Q=p(t=>{t.style[h]=`${v()}px`,M&&M(t)}),V=p(Y),X=p(t=>{const i=v(),{duration:s,easing:m}=P({style:z,timeout:a,easing:S},{mode:"exit"});if(a==="auto"){const w=L.transitions.getAutoHeightDuration(i);t.style.transitionDuration=`${w}ms`,R.current=w}else t.style.transitionDuration=typeof s=="string"?s:`${s}ms`;t.style[h]=x,t.style.transitionTimingFunction=m,F&&F(t)}),Z=t=>{a==="auto"&&B.start(R.current||0,t),$&&$(E.current,t)};return C.jsx(k,o({in:D,onEnter:J,onEntered:O,onEntering:K,onExit:Q,onExited:V,onExiting:X,addEndListener:Z,nodeRef:E,timeout:a==="auto"?null:a},q,{children:(t,i)=>C.jsx(mt,o({as:A,className:rt(c.root,_,{entered:c.entered,exited:!D&&x==="0px"&&c.hidden}[t]),style:o({[u?"minWidth":"minHeight"]:x},z),ref:G},i,{ownerState:o({},g,{state:t}),children:C.jsx(ft,{ownerState:o({},g,{state:t}),className:c.wrapper,ref:l,children:C.jsx(gt,{ownerState:o({},g,{state:t}),className:c.wrapperInner,children:U})})}))}))});b.muiSupportAuto=!0;const Ct=b;export{Ct as C};