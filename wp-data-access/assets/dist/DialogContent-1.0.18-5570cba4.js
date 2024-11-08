import{$ as G,r as d,j as p}from"./main-1.0.18.js";import{g as b,h as y,i as g,j as u,b as r,m as S,_ as P,c as x,n as T}from"./Typography-1.0.18-dc3c0740.js";import{R as J,S as Q}from"./index.esm-1.0.18-12f13c4a.js";import{B as Z,M as oo,F as eo}from"./Modal-1.0.18-870f459d.js";import{P as j}from"./iconBase-1.0.18-3c21f5e2.js";var N={exports:{}},to="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ao=to,ro=ao;function _(){}function A(){}A.resetWarningCache=_;var so=function(){function o(a,s,i,n,l,c){if(c!==ro){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}o.isRequired=o;function e(){return o}var t={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:e,element:o,elementType:o,instanceOf:e,node:o,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:A,resetWarningCache:_};return t.PropTypes=t,t};N.exports=so();var io=N.exports;const Ao=G(io);function no(o){return y("MuiDialog",o)}const lo=b("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=lo,co=d.createContext({}),po=co,uo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],go=g(Z,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),mo=o=>{const{classes:e,scroll:t,maxWidth:a,fullWidth:s,fullScreen:i}=o,n={root:["root"],container:["container",`scroll${u(t)}`],paper:["paper",`paperScroll${u(t)}`,`paperWidth${u(String(a))}`,s&&"paperFullWidth",i&&"paperFullScreen"]};return T(n,no,e)},xo=g(oo,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),fo=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${u(t.scroll)}`]]}})(({ownerState:o})=>r({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),ho=g(j,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${u(t.scroll)}`],e[`paperWidth${u(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),bo=d.forwardRef(function(e,t){const a=S({props:e,name:"MuiDialog"}),s=J(),i={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":l,BackdropComponent:c,BackdropProps:f,children:F,className:E,disableEscapeKeyDown:R=!1,fullScreen:U=!1,fullWidth:O=!1,maxWidth:I="sm",onBackdropClick:$,onClose:v,open:w,PaperComponent:L=j,PaperProps:M={},scroll:Y="paper",TransitionComponent:H=eo,transitionDuration:B=i,TransitionProps:K}=a,X=P(a,uo),h=r({},a,{disableEscapeKeyDown:R,fullScreen:U,fullWidth:O,maxWidth:I,scroll:Y}),D=mo(h),C=d.useRef(),z=m=>{C.current=m.target===m.currentTarget},V=m=>{C.current&&(C.current=null,$&&$(m),v&&v(m,"backdropClick"))},W=Q(l),q=d.useMemo(()=>({titleId:W}),[W]);return p.jsx(xo,r({className:x(D.root,E),closeAfterTransition:!0,components:{Backdrop:go},componentsProps:{backdrop:r({transitionDuration:B,as:c},f)},disableEscapeKeyDown:R,onClose:v,open:w,ref:t,onClick:V,ownerState:h},X,{children:p.jsx(H,r({appear:!0,in:w,timeout:B,role:"presentation"},K,{children:p.jsx(fo,{className:x(D.container),onMouseDown:z,ownerState:h,children:p.jsx(ho,r({as:L,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":W},M,{className:x(D.paper,M.className),ownerState:h,children:p.jsx(po.Provider,{value:q,children:F})}))})}))}))}),Fo=bo;function yo(o){return y("MuiDialogActions",o)}b("MuiDialogActions",["root","spacing"]);const vo=["className","disableSpacing"],Do=o=>{const{classes:e,disableSpacing:t}=o;return T({root:["root",!t&&"spacing"]},yo,e)},Co=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>r({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Wo=d.forwardRef(function(e,t){const a=S({props:e,name:"MuiDialogActions"}),{className:s,disableSpacing:i=!1}=a,n=P(a,vo),l=r({},a,{disableSpacing:i}),c=Do(l);return p.jsx(Co,r({className:x(c.root,s),ownerState:l,ref:t},n))}),Eo=Wo;function ko(o){return y("MuiDialogContent",o)}b("MuiDialogContent",["root","dividers"]);function Uo(o){return y("MuiDialogTitle",o)}const So=b("MuiDialogTitle",["root"]),Po=So,To=["className","dividers"],Ro=o=>{const{classes:e,dividers:t}=o;return T({root:["root",t&&"dividers"]},ko,e)},$o=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>r({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${Po.root} + &`]:{paddingTop:0}})),wo=d.forwardRef(function(e,t){const a=S({props:e,name:"MuiDialogContent"}),{className:s,dividers:i=!1}=a,n=P(a,To),l=r({},a,{dividers:i}),c=Ro(l);return p.jsx($o,r({className:x(c.root,s),ownerState:l,ref:t},n))}),Oo=wo;export{Fo as D,Ao as P,Oo as a,Eo as b,po as c,k as d,Uo as g,io as p};
