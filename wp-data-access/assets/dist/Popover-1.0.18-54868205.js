import{h as wo,g as Eo,i as so,m as bo,_ as C,b as P,c as Q,n as To}from"./Typography-1.0.18-dc3c0740.js";import{r as a,j as z}from"./main-1.0.18.js";import{M as Ro,o as Z,d as So}from"./Modal-1.0.18-870f459d.js";import{P as Oo,u as Co,i as zo}from"./iconBase-1.0.18-3c21f5e2.js";import{U as oo,D as eo}from"./index.esm-1.0.18-12f13c4a.js";import{G as _o}from"./Grow-1.0.18-4ebc2ce8.js";function Mo(t){return wo("MuiPopover",t)}Eo("MuiPopover",["root","paper"]);const ko=["onEntering"],Lo=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Wo=["slotProps"];function to(t,o){let s=0;return typeof o=="number"?s=o:o==="center"?s=t.height/2:o==="bottom"&&(s=t.height),s}function no(t,o){let s=0;return typeof o=="number"?s=o:o==="center"?s=t.width/2:o==="right"&&(s=t.width),s}function ro(t){return[t.horizontal,t.vertical].map(o=>typeof o=="number"?`${o}px`:o).join(" ")}function _(t){return typeof t=="function"?t():t}const jo=t=>{const{classes:o}=t;return To({root:["root"],paper:["paper"]},Mo,o)},Do=so(Ro,{name:"MuiPopover",slot:"Root",overridesResolver:(t,o)=>o.root})({}),$o=so(Oo,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,o)=>o.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Ho=a.forwardRef(function(o,s){var M,k,L;const x=bo({props:o,name:"MuiPopover"}),{action:io,anchorEl:c,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:W,anchorReference:v="anchorEl",children:lo,className:ao,container:co,elevation:j=8,marginThreshold:i=16,open:f,PaperProps:po={},slots:y,slotProps:w,transformOrigin:g={vertical:"top",horizontal:"left"},TransitionComponent:E=_o,transitionDuration:b="auto",TransitionProps:{onEntering:D}={},disableScrollLock:T=!1}=x,$=C(x.TransitionProps,ko),fo=C(x,Lo),u=(M=w==null?void 0:w.paper)!=null?M:po,R=a.useRef(),uo=Co(R,u.ref),S=P({},x,{anchorOrigin:m,anchorReference:v,elevation:j,marginThreshold:i,externalPaperSlotProps:u,transformOrigin:g,TransitionComponent:E,transitionDuration:b,TransitionProps:$}),H=jo(S),N=a.useCallback(()=>{if(v==="anchorPosition")return W;const e=_(c),r=(e&&e.nodeType===1?e:oo(R.current).body).getBoundingClientRect();return{top:r.top+to(r,m.vertical),left:r.left+no(r,m.horizontal)}},[c,m.horizontal,m.vertical,W,v]),U=a.useCallback(e=>({vertical:to(e,g.vertical),horizontal:no(e,g.horizontal)}),[g.horizontal,g.vertical]),A=a.useCallback(e=>{const n={width:e.offsetWidth,height:e.offsetHeight},r=U(n);if(v==="none")return{top:null,left:null,transformOrigin:ro(r)};const V=N();let d=V.top-r.vertical,h=V.left-r.horizontal;const X=d+n.height,Y=h+n.width,q=Z(_(c)),J=q.innerHeight-i,K=q.innerWidth-i;if(i!==null&&d<i){const l=d-i;d-=l,r.vertical+=l}else if(i!==null&&X>J){const l=X-J;d-=l,r.vertical+=l}if(i!==null&&h<i){const l=h-i;h-=l,r.horizontal+=l}else if(Y>K){const l=Y-K;h-=l,r.horizontal+=l}return{top:`${Math.round(d)}px`,left:`${Math.round(h)}px`,transformOrigin:ro(r)}},[c,v,N,U,i]),[ho,F]=a.useState(f),p=a.useCallback(()=>{const e=R.current;if(!e)return;const n=A(e);n.top!==null&&(e.style.top=n.top),n.left!==null&&(e.style.left=n.left),e.style.transformOrigin=n.transformOrigin,F(!0)},[A]);a.useEffect(()=>(T&&window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)),[c,T,p]);const Po=(e,n)=>{D&&D(e,n),p()},mo=()=>{F(!1)};a.useEffect(()=>{f&&p()}),a.useImperativeHandle(io,()=>f?{updatePosition:()=>{p()}}:null,[f,p]),a.useEffect(()=>{if(!f)return;const e=So(()=>{p()}),n=Z(c);return n.addEventListener("resize",e),()=>{e.clear(),n.removeEventListener("resize",e)}},[c,f,p]);let G=b;b==="auto"&&!E.muiSupportAuto&&(G=void 0);const vo=co||(c?oo(_(c)).body:void 0),O=(k=y==null?void 0:y.root)!=null?k:Do,I=(L=y==null?void 0:y.paper)!=null?L:$o,go=eo({elementType:I,externalSlotProps:P({},u,{style:ho?u.style:P({},u.style,{opacity:0})}),additionalProps:{elevation:j,ref:uo},ownerState:S,className:Q(H.paper,u==null?void 0:u.className)}),B=eo({elementType:O,externalSlotProps:(w==null?void 0:w.root)||{},externalForwardedProps:fo,additionalProps:{ref:s,slotProps:{backdrop:{invisible:!0}},container:vo,open:f},ownerState:S,className:Q(H.root,ao)}),{slotProps:xo}=B,yo=C(B,Wo);return z.jsx(O,P({},yo,!zo(O)&&{slotProps:xo,disableScrollLock:T},{children:z.jsx(E,P({appear:!0,in:f,onEntering:Po,onExited:mo,timeout:G},$,{children:z.jsx(I,P({},go,{children:lo}))}))}))}),Bo=Ho;export{Bo as P,$o as a};