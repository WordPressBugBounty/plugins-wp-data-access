import{r as n}from"./redux-1.0.34-BykGtd51.js";import{g as Jo,h as Qo,i as Zo,c as ho,j as G,k as wo,l as _o,m as K,n as bo}from"./Typography-1.0.34-CPcqRq0L.js";import{u as oe}from"./AdminTheme-1.0.34-9phfEwG6.js";import{u as ee,g as I,d as te,f as go,a as re,b as k,h as pe,i as yo}from"./iconBase-1.0.34-CNhS-hAm.js";import{j as g}from"./cm-1.0.34-jkgb9fqk.js";import{u as ne}from"./useControlled-1.0.34-CU9helXh.js";import{z as se,$ as ae}from"./cjs-1.0.34-s8JVqkTy.js";import{P as xo}from"./Popper-1.0.34-DHAHquMb.js";function ie(t){return Qo("MuiTooltip",t)}const r=Jo("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function le(t){return Math.round(t*1e5)/1e5}const ce=t=>{const{classes:o,disableInteractive:p,arrow:c,touch:R,placement:y}=t,X={popper:["popper",!p&&"popperInteractive",c&&"popperArrow"],tooltip:["tooltip",c&&"tooltipArrow",R&&"touch",`tooltipPlacement${wo(y.split("-")[0])}`],arrow:["arrow"]};return _o(X,ie,o)},me=G(xo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,o)=>{const{ownerState:p}=t;return[o.popper,!p.disableInteractive&&o.popperInteractive,p.arrow&&o.popperArrow,!p.open&&o.popperClose]}})(K(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:o})=>!o.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:o})=>!o,style:{pointerEvents:"none"}},{props:({ownerState:o})=>o.arrow,style:{[`&[data-popper-placement*="bottom"] .${r.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${r.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${r.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${r.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:o})=>o.arrow&&!o.isRtl,style:{[`&[data-popper-placement*="right"] .${r.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!!o.isRtl,style:{[`&[data-popper-placement*="right"] .${r.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!o.isRtl,style:{[`&[data-popper-placement*="left"] .${r.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!!o.isRtl,style:{[`&[data-popper-placement*="left"] .${r.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),ue=G("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,o)=>{const{ownerState:p}=t;return[o.tooltip,p.touch&&o.touch,p.arrow&&o.tooltipArrow,o[`tooltipPlacement${wo(p.placement.split("-")[0])}`]]}})(K(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:bo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${r.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${r.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${r.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${r.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:o})=>o.arrow,style:{position:"relative",margin:0}},{props:({ownerState:o})=>o.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${le(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:o})=>!o.isRtl,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:o})=>!o.isRtl&&o.touch,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:o})=>!!o.isRtl,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:o})=>!!o.isRtl&&o.touch,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:o})=>o.touch,style:{[`.${r.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:o})=>o.touch,style:{[`.${r.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),de=G("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,o)=>o.arrow})(K(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:bo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let A=!1;const To=new pe;let v={x:0,y:0};function F(t,o){return(p,...c)=>{o&&o(p,...c),t(p,...c)}}const ve=n.forwardRef(function(o,p){const c=Zo({props:o,name:"MuiTooltip"}),{arrow:R=!1,children:y,classes:X,components:M={},componentsProps:O={},describeChild:vo=!1,disableFocusListener:Ro=!1,disableHoverListener:Y=!1,disableInteractive:Mo=!1,disableTouchListener:Oo=!1,enterDelay:q=100,enterNextDelay:J=0,enterTouchDelay:Po=700,followCursor:N=!1,id:So,leaveDelay:Q=0,leaveTouchDelay:$o=1500,onClose:Z,onOpen:_,open:Co,placement:oo="bottom",PopperComponent:eo,PopperProps:m={},slotProps:u={},slots:Eo={},title:h,TransitionComponent:Lo,TransitionProps:Io,...to}=c,d=n.isValidElement(y)?y:g.jsx("span",{children:y}),ro=ee(),ko=oe(),[T,po]=n.useState(),[W,Ao]=n.useState(null),P=n.useRef(!1),B=Mo||N,no=I(),j=I(),S=I(),so=I(),[Fo,ao]=ne({controlled:Co,default:!1,name:"Tooltip",state:"open"});let l=Fo;const U=te(So),w=n.useRef(),$=go(()=>{w.current!==void 0&&(document.body.style.WebkitUserSelect=w.current,w.current=void 0),so.clear()});n.useEffect(()=>$,[$]);const io=e=>{To.clear(),A=!0,ao(!0),_&&!l&&_(e)},C=go(e=>{To.start(800+Q,()=>{A=!1}),ao(!1),Z&&l&&Z(e),no.start(ro.transitions.duration.shortest,()=>{P.current=!1})}),E=e=>{P.current&&e.type!=="touchstart"||(T&&T.removeAttribute("title"),j.clear(),S.clear(),q||A&&J?j.start(A?J:q,()=>{io(e)}):io(e))},D=e=>{j.clear(),S.start(Q,()=>{C(e)})},[,lo]=n.useState(!1),co=e=>{yo(e.target)||(lo(!1),D(e))},mo=e=>{T||po(e.currentTarget),yo(e.target)&&(lo(!0),E(e))},uo=e=>{P.current=!0;const i=d.props;i.onTouchStart&&i.onTouchStart(e)},No=e=>{uo(e),S.clear(),no.clear(),$(),w.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",so.start(Po,()=>{document.body.style.WebkitUserSelect=w.current,E(e)})},Wo=e=>{d.props.onTouchEnd&&d.props.onTouchEnd(e),$(),S.start($o,()=>{C(e)})};n.useEffect(()=>{if(!l)return;function e(i){i.key==="Escape"&&C(i)}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[C,l]);const Bo=re(se(d),po,p);!h&&h!==0&&(l=!1);const z=n.useRef(),jo=e=>{const i=d.props;i.onMouseMove&&i.onMouseMove(e),v={x:e.clientX,y:e.clientY},z.current&&z.current.update()},b={},V=typeof h=="string";vo?(b.title=!l&&V&&!Y?h:null,b["aria-describedby"]=l?U:null):(b["aria-label"]=V?h:null,b["aria-labelledby"]=l&&!V?U:null);const s={...b,...to,...d.props,className:ho(to.className,d.props.className),onTouchStart:uo,ref:Bo,...N?{onMouseMove:jo}:{}},x={};Oo||(s.onTouchStart=No,s.onTouchEnd=Wo),Y||(s.onMouseOver=F(E,s.onMouseOver),s.onMouseLeave=F(D,s.onMouseLeave),B||(x.onMouseOver=E,x.onMouseLeave=D)),Ro||(s.onFocus=F(mo,s.onFocus),s.onBlur=F(co,s.onBlur),B||(x.onFocus=mo,x.onBlur=co));const f={...c,isRtl:ko,arrow:R,disableInteractive:B,placement:oo,PopperComponentProp:eo,touch:P.current},a=typeof u.popper=="function"?u.popper(f):u.popper,Uo=n.useMemo(()=>{var i,fo;let e=[{name:"arrow",enabled:!!W,options:{element:W,padding:4}}];return(i=m.popperOptions)!=null&&i.modifiers&&(e=e.concat(m.popperOptions.modifiers)),(fo=a==null?void 0:a.popperOptions)!=null&&fo.modifiers&&(e=e.concat(a.popperOptions.modifiers)),{...m.popperOptions,...a==null?void 0:a.popperOptions,modifiers:e}},[W,m.popperOptions,a==null?void 0:a.popperOptions]),H=ce(f),Do=typeof u.transition=="function"?u.transition(f):u.transition,L={slots:{popper:M.Popper,transition:M.Transition??Lo,tooltip:M.Tooltip,arrow:M.Arrow,...Eo},slotProps:{arrow:u.arrow??O.arrow,popper:{...m,...a??O.popper},tooltip:u.tooltip??O.tooltip,transition:{...Io,...Do??O.transition}}},[zo,Vo]=k("popper",{elementType:me,externalForwardedProps:L,ownerState:f,className:ho(H.popper,m==null?void 0:m.className)}),[Ho,Go]=k("transition",{elementType:ae,externalForwardedProps:L,ownerState:f}),[Ko,Xo]=k("tooltip",{elementType:ue,className:H.tooltip,externalForwardedProps:L,ownerState:f}),[Yo,qo]=k("arrow",{elementType:de,className:H.arrow,externalForwardedProps:L,ownerState:f,ref:Ao});return g.jsxs(n.Fragment,{children:[n.cloneElement(d,s),g.jsx(zo,{as:eo??xo,placement:oo,anchorEl:N?{getBoundingClientRect:()=>({top:v.y,left:v.x,right:v.x,bottom:v.y,width:0,height:0})}:T,popperRef:z,open:T?l:!1,id:U,transition:!0,...x,...Vo,popperOptions:Uo,children:({TransitionProps:e})=>g.jsx(Ho,{timeout:ro.transitions.duration.shorter,...e,...Go,children:g.jsxs(Ko,{...Xo,children:[h,R?g.jsx(Yo,{...qo}):null]})})})]})});export{ve as T};
