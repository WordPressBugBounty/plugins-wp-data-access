import{g as fe,h as he,i as q,b as r,j as Wo,D as jo,m as ge,_ as be,c as F,n as Te}from"./Typography-1.0.18-dc3c0740.js";import{r as p,j as g}from"./main-1.0.18.js";import{u as Pe}from"./ThemeProvider-1.0.18-247b72cc.js";import{R as ve,S as we}from"./index.esm-1.0.18-12f13c4a.js";import{M as Uo}from"./Popper-1.0.18-20544c9b.js";import{c as N,d as Do,e as ye,u as xe,b as k,f as Re}from"./iconBase-1.0.18-3c21f5e2.js";import{u as Ce}from"./useControlled-1.0.18-12a74006.js";import{G as So}from"./Grow-1.0.18-4ebc2ce8.js";function Me(t){return he("MuiTooltip",t)}const Oe=fe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),u=Oe,_e=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function $e(t){return Math.round(t*1e5)/1e5}const Le=t=>{const{classes:e,disableInteractive:n,arrow:a,touch:x,placement:R}=t,C={popper:["popper",!n&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",x&&"touch",`tooltipPlacement${Wo(R.split("-")[0])}`],arrow:["arrow"]};return Te(C,Me,e)},Ee=q(Uo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:t,ownerState:e,open:n})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${u.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${u.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${u.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${u.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ie=q("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${Wo(n.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:jo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${$e(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${u.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${u.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${u.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${u.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Fe=q("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:jo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1;const Bo=new Re;let y={x:0,y:0};function D(t,e){return(n,...a)=>{e&&e(n,...a),t(n,...a)}}const Ne=p.forwardRef(function(e,n){var a,x,R,C,J,Q,Z,oo,eo,to,ro,no,so,po,io,lo,ao,co,uo;const S=ge({props:e,name:"MuiTooltip"}),{arrow:mo=!1,children:B,components:M={},componentsProps:d={},describeChild:Vo=!1,disableFocusListener:zo=!1,disableHoverListener:fo=!1,disableInteractive:Ho=!1,disableTouchListener:Go=!1,enterDelay:ho=100,enterNextDelay:go=0,enterTouchDelay:Ko=700,followCursor:W=!1,id:Xo,leaveDelay:bo=0,leaveTouchDelay:Yo=1500,onClose:To,onOpen:Po,open:qo,placement:vo="bottom",PopperComponent:j,PopperProps:m={},slotProps:f={},slots:O={},title:h,TransitionComponent:Jo=So,TransitionProps:Qo}=S,wo=be(S,_e),c=p.isValidElement(B)?B:g.jsx("span",{children:B}),yo=ve(),Zo=Pe(),[b,xo]=p.useState(),[U,oe]=p.useState(null),_=p.useRef(!1),V=Ho||W,Ro=N(),z=N(),$=N(),Co=N(),[ee,Mo]=Ce({controlled:qo,default:!1,name:"Tooltip",state:"open"});let l=ee;const H=we(Xo),T=p.useRef(),L=Do(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),Co.clear()});p.useEffect(()=>L,[L]);const Oo=o=>{Bo.clear(),A=!0,Mo(!0),Po&&!l&&Po(o)},E=Do(o=>{Bo.start(800+bo,()=>{A=!1}),Mo(!1),To&&l&&To(o),Ro.start(yo.transitions.duration.shortest,()=>{_.current=!1})}),I=o=>{_.current&&o.type!=="touchstart"||(b&&b.removeAttribute("title"),z.clear(),$.clear(),ho||A&&go?z.start(A?go:ho,()=>{Oo(o)}):Oo(o))},G=o=>{z.clear(),$.start(bo,()=>{E(o)})},{isFocusVisibleRef:_o,onBlur:te,onFocus:re,ref:ne}=ye(),[,$o]=p.useState(!1),Lo=o=>{te(o),_o.current===!1&&($o(!1),G(o))},Eo=o=>{b||xo(o.currentTarget),re(o),_o.current===!0&&($o(!0),I(o))},Io=o=>{_.current=!0;const s=c.props;s.onTouchStart&&s.onTouchStart(o)},se=o=>{Io(o),$.clear(),Ro.clear(),L(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Co.start(Ko,()=>{document.body.style.WebkitUserSelect=T.current,I(o)})},pe=o=>{c.props.onTouchEnd&&c.props.onTouchEnd(o),L(),$.start(Yo,()=>{E(o)})};p.useEffect(()=>{if(!l)return;function o(s){(s.key==="Escape"||s.key==="Esc")&&E(s)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[E,l]);const ie=xe(c.ref,ne,xo,n);!h&&h!==0&&(l=!1);const K=p.useRef(),le=o=>{const s=c.props;s.onMouseMove&&s.onMouseMove(o),y={x:o.clientX,y:o.clientY},K.current&&K.current.update()},P={},X=typeof h=="string";Vo?(P.title=!l&&X&&!fo?h:null,P["aria-describedby"]=l?H:null):(P["aria-label"]=X?h:null,P["aria-labelledby"]=l&&!X?H:null);const i=r({},P,wo,c.props,{className:F(wo.className,c.props.className),onTouchStart:Io,ref:ie},W?{onMouseMove:le}:{}),v={};Go||(i.onTouchStart=se,i.onTouchEnd=pe),fo||(i.onMouseOver=D(I,i.onMouseOver),i.onMouseLeave=D(G,i.onMouseLeave),V||(v.onMouseOver=I,v.onMouseLeave=G)),zo||(i.onFocus=D(Eo,i.onFocus),i.onBlur=D(Lo,i.onBlur),V||(v.onFocus=Eo,v.onBlur=Lo));const ae=p.useMemo(()=>{var o;let s=[{name:"arrow",enabled:!!U,options:{element:U,padding:4}}];return(o=m.popperOptions)!=null&&o.modifiers&&(s=s.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:s})},[U,m]),w=r({},S,{isRtl:Zo,arrow:mo,disableInteractive:V,placement:vo,PopperComponentProp:j,touch:_.current}),Y=Le(w),Fo=(a=(x=O.popper)!=null?x:M.Popper)!=null?a:Ee,No=(R=(C=(J=O.transition)!=null?J:M.Transition)!=null?C:Jo)!=null?R:So,ko=(Q=(Z=O.tooltip)!=null?Z:M.Tooltip)!=null?Q:Ie,Ao=(oo=(eo=O.arrow)!=null?eo:M.Arrow)!=null?oo:Fe,ce=k(Fo,r({},m,(to=f.popper)!=null?to:d.popper,{className:F(Y.popper,m==null?void 0:m.className,(ro=(no=f.popper)!=null?no:d.popper)==null?void 0:ro.className)}),w),ue=k(No,r({},Qo,(so=f.transition)!=null?so:d.transition),w),de=k(ko,r({},(po=f.tooltip)!=null?po:d.tooltip,{className:F(Y.tooltip,(io=(lo=f.tooltip)!=null?lo:d.tooltip)==null?void 0:io.className)}),w),me=k(Ao,r({},(ao=f.arrow)!=null?ao:d.arrow,{className:F(Y.arrow,(co=(uo=f.arrow)!=null?uo:d.arrow)==null?void 0:co.className)}),w);return g.jsxs(p.Fragment,{children:[p.cloneElement(c,i),g.jsx(Fo,r({as:j??Uo,placement:vo,anchorEl:W?{getBoundingClientRect:()=>({top:y.y,left:y.x,right:y.x,bottom:y.y,width:0,height:0})}:b,popperRef:K,open:b?l:!1,id:H,transition:!0},v,ce,{popperOptions:ae,children:({TransitionProps:o})=>g.jsx(No,r({timeout:yo.transitions.duration.shorter},o,ue,{children:g.jsxs(ko,r({},de,{children:[h,mo?g.jsx(Ao,r({},me,{ref:oe})):null]}))}))}))]})}),Ve=Ne;export{Ve as T};