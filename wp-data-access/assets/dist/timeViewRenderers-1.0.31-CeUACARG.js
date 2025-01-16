import{K as Ie,s as Me,L as ot,I as He,r as Ee,N as xe,v as nt,H as rt,g as Ne,h as Fe,k as ve,S as it,O as at,Q as Oe,R as lt,U as $e,W as _e,X as je,i as ze,Y as ye,Z as qe,_ as Ve,M as ct}from"./useMobilePicker-1.0.31-DH3b4aWb.js";import{a as ie,j as w,_ as N}from"./cm-1.0.31-BzgG35ZX.js";import{r as T}from"./redux-1.0.31-CuzmJMK6.js";import{g as fe,f as he,i as B,T as Ke,c as ae,o as le,p as Pe}from"./Typography-1.0.31-BdhCS1KD.js";import{u as ce}from"./DialogContent-1.0.31-_6ykng6a.js";import{B as ut,$ as dt,O as mt}from"./cjs-1.0.31-B-_HdexB.js";import{I as Ye,b as pt,a as Ge,f as Re}from"./iconBase-1.0.31-C37NsRUm.js";import{u as ft}from"./AdminTheme-1.0.31-QbwKcRV7.js";import{b as Xe}from"./Menu-1.0.31-BOTBPSPr.js";import{M as Ze}from"./MenuItem-1.0.31-CTowyoSp.js";const ht=({adapter:e,value:s,timezone:r,props:t})=>{if(s===null)return null;const{minTime:i,maxTime:o,minutesStep:n,shouldDisableTime:a,disableIgnoringDatePartForTimeValidation:b=!1,disablePast:m,disableFuture:g}=t,l=e.utils.date(void 0,r),C=Ie(b,e.utils);switch(!0){case!e.utils.isValid(s):return"invalidDate";case!!(i&&C(i,s)):return"minTime";case!!(o&&C(s,o)):return"maxTime";case!!(g&&e.utils.isAfter(s,l)):return"disableFuture";case!!(m&&e.utils.isBefore(s,l)):return"disablePast";case!!(a&&a(s,"hours")):return"shouldDisableTime-hours";case!!(a&&a(s,"minutes")):return"shouldDisableTime-minutes";case!!(a&&a(s,"seconds")):return"shouldDisableTime-seconds";case!!(n&&e.utils.getMinutes(s)%n!==0):return"minutesStep";default:return null}};ht.valueManager=Me;function bt(e){return he("MuiPickersToolbarText",e)}const Le=fe("MuiPickersToolbarText",["root","selected"]),gt=["className","selected","value"],Ct=e=>{const{classes:s,selected:r}=e;return le({root:["root",r&&"selected"]},bt,s)},vt=B(Ke,{name:"MuiPickersToolbarText",slot:"Root",overridesResolver:(e,s)=>[s.root,{[`&.${Le.selected}`]:s.selected}]})(({theme:e})=>({transition:e.transitions.create("color"),color:(e.vars||e).palette.text.secondary,[`&.${Le.selected}`]:{color:(e.vars||e).palette.text.primary}})),kt=T.forwardRef(function(s,r){const t=ce({props:s,name:"MuiPickersToolbarText"}),{className:i,value:o}=t,n=ie(t,gt),a=Ct(t);return w.jsx(vt,N({ref:r,className:ae(a.root,i),component:"span"},n,{children:o}))}),wt=["align","className","selected","typographyClassName","value","variant","width"],xt=e=>{const{classes:s}=e;return le({root:["root"]},ot,s)},Tt=B(ut,{name:"MuiPickersToolbarButton",slot:"Root",overridesResolver:(e,s)=>s.root})({padding:0,minWidth:16,textTransform:"none"}),$s=T.forwardRef(function(s,r){const t=ce({props:s,name:"MuiPickersToolbarButton"}),{align:i,className:o,selected:n,typographyClassName:a,value:b,variant:m,width:g}=t,l=ie(t,wt),C=xt(t);return w.jsx(Tt,N({variant:"text",ref:r,className:ae(C.root,o)},g?{sx:{width:g}}:{},l,{children:w.jsx(kt,{align:i,className:a,variant:m,value:b,selected:n})}))}),Mt=["views","format"],_s=(e,s,r)=>{let{views:t,format:i}=s,o=ie(s,Mt);if(i)return i;const n=[],a=[];if(t.forEach(g=>{xe(g)?a.push(g):nt(g)&&n.push(g)}),a.length===0)return He(e,N({views:n},o),!1);if(n.length===0)return Ee(e,N({views:a},o));const b=Ee(e,N({views:a},o));return`${He(e,N({views:n},o),!1)} ${b}`},St=(e,s,r)=>r?s.filter(t=>!rt(t)||t==="hours"):e?[...s,"meridiem"]:s,Dt=(e,s)=>24*60/((e.hours??1)*(e.minutes??5))<=s;function js({thresholdToRenderTimeInASingleColumn:e,ampm:s,timeSteps:r,views:t}){const i=e??24,o=N({hours:1,minutes:5,seconds:5},r),n=Dt(o,i);return{thresholdToRenderTimeInASingleColumn:i,timeSteps:o,shouldRenderTimeInASingleColumn:n,views:St(s,t,n)}}function yt(e){return he("MuiTimeClock",e)}fe("MuiTimeClock",["root","arrowSwitcher"]);const ke=220,re=36,Te={x:ke/2,y:ke/2},Qe={x:Te.x,y:0},Vt=Qe.x-Te.x,Pt=Qe.y-Te.y,Rt=e=>e*(180/Math.PI),Je=(e,s,r)=>{const t=s-Te.x,i=r-Te.y,o=Math.atan2(Vt,Pt)-Math.atan2(t,i);let n=Rt(o);n=Math.round(n/e)*e,n%=360;const a=Math.floor(n/e)||0,b=t**2+i**2,m=Math.sqrt(b);return{value:a,distance:m}},It=(e,s,r=1)=>{const t=r*6;let{value:i}=Je(t,e,s);return i=i*r%60,i},Nt=(e,s,r)=>{const{value:t,distance:i}=Je(30,e,s);let o=t||12;return r?o%=12:i<ke/2-re&&(o+=12,o%=24),o};function Ft(e){return he("MuiClockPointer",e)}fe("MuiClockPointer",["root","thumb"]);const Ot=["className","hasSelected","isInner","type","viewValue"],$t=e=>{const{classes:s}=e;return le({root:["root"],thumb:["thumb"]},Ft,s)},_t=B("div",{name:"MuiClockPointer",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.primary.main,position:"absolute",left:"calc(50% - 1px)",bottom:"50%",transformOrigin:"center bottom 0px",variants:[{props:{shouldAnimate:!0},style:{transition:e.transitions.create(["transform","height"])}}]})),jt=B("div",{name:"MuiClockPointer",slot:"Thumb",overridesResolver:(e,s)=>s.thumb})(({theme:e})=>({width:4,height:4,backgroundColor:(e.vars||e).palette.primary.contrastText,borderRadius:"50%",position:"absolute",top:-21,left:`calc(50% - ${re/2}px)`,border:`${(re-4)/2}px solid ${(e.vars||e).palette.primary.main}`,boxSizing:"content-box",variants:[{props:{hasSelected:!0},style:{backgroundColor:(e.vars||e).palette.primary.main}}]}));function Bt(e){const s=ce({props:e,name:"MuiClockPointer"}),{className:r,isInner:t,type:i,viewValue:o}=s,n=ie(s,Ot),a=T.useRef(i);T.useEffect(()=>{a.current=i},[i]);const b=N({},s,{shouldAnimate:a.current!==i}),m=$t(b),g=()=>{let C=360/(i==="hours"?12:60)*o;return i==="hours"&&o>12&&(C-=360),{height:Math.round((t?.26:.4)*ke),transform:`rotateZ(${C}deg)`}};return w.jsx(_t,N({style:g(),className:ae(m.root,r),ownerState:b},n,{children:w.jsx(jt,{ownerState:b,className:m.thumb})}))}function Ht(e){return he("MuiClock",e)}fe("MuiClock",["root","clock","wrapper","squareMask","pin","amButton","pmButton","meridiemText","selected"]);const Et=e=>{const{classes:s,meridiemMode:r}=e;return le({root:["root"],clock:["clock"],wrapper:["wrapper"],squareMask:["squareMask"],pin:["pin"],amButton:["amButton",r==="am"&&"selected"],pmButton:["pmButton",r==="pm"&&"selected"],meridiemText:["meridiemText"]},Ht,s)},Lt=B("div",{name:"MuiClock",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({display:"flex",justifyContent:"center",alignItems:"center",margin:e.spacing(2)})),At=B("div",{name:"MuiClock",slot:"Clock",overridesResolver:(e,s)=>s.clock})({backgroundColor:"rgba(0,0,0,.07)",borderRadius:"50%",height:220,width:220,flexShrink:0,position:"relative",pointerEvents:"none"}),Ut=B("div",{name:"MuiClock",slot:"Wrapper",overridesResolver:(e,s)=>s.wrapper})({"&:focus":{outline:"none"}}),Wt=B("div",{name:"MuiClock",slot:"SquareMask",overridesResolver:(e,s)=>s.squareMask})({width:"100%",height:"100%",position:"absolute",pointerEvents:"auto",outline:0,touchAction:"none",userSelect:"none",variants:[{props:{disabled:!1},style:{"@media (pointer: fine)":{cursor:"pointer",borderRadius:"50%"},"&:active":{cursor:"move"}}}]}),zt=B("div",{name:"MuiClock",slot:"Pin",overridesResolver:(e,s)=>s.pin})(({theme:e})=>({width:6,height:6,borderRadius:"50%",backgroundColor:(e.vars||e).palette.primary.main,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"})),et=(e,s)=>({zIndex:1,bottom:8,paddingLeft:4,paddingRight:4,width:re,variants:[{props:{meridiemMode:s},style:{backgroundColor:(e.vars||e).palette.primary.main,color:(e.vars||e).palette.primary.contrastText,"&:hover":{backgroundColor:(e.vars||e).palette.primary.light}}}]}),qt=B(Ye,{name:"MuiClock",slot:"AmButton",overridesResolver:(e,s)=>s.amButton})(({theme:e})=>N({},et(e,"am"),{position:"absolute",left:8})),Kt=B(Ye,{name:"MuiClock",slot:"PmButton",overridesResolver:(e,s)=>s.pmButton})(({theme:e})=>N({},et(e,"pm"),{position:"absolute",right:8})),Ae=B(Ke,{name:"MuiClock",slot:"meridiemText",overridesResolver:(e,s)=>s.meridiemText})({overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"});function Yt(e){const s=ce({props:e,name:"MuiClock"}),{ampm:r,ampmInClock:t,autoFocus:i,children:o,value:n,handleMeridiemChange:a,isTimeDisabled:b,meridiemMode:m,minutesStep:g=1,onChange:l,selectedId:C,type:p,viewValue:h,disabled:k=!1,readOnly:j,className:E}=s,F=s,S=Ne(),H=Fe(),$=T.useRef(!1),y=Et(F),u=b(h,p),_=!r&&p==="hours"&&(h<1||h>12),M=(x,P)=>{k||j||b(x,p)||l(x,P)},V=(x,P)=>{let{offsetX:O,offsetY:U}=x;if(O===void 0){const D=x.target.getBoundingClientRect();O=x.changedTouches[0].clientX-D.left,U=x.changedTouches[0].clientY-D.top}const Y=p==="seconds"||p==="minutes"?It(O,U,g):Nt(O,U,!!r);M(Y,P)},R=x=>{$.current=!0,V(x,"shallow")},se=x=>{$.current&&(V(x,"finish"),$.current=!1)},K=x=>{x.buttons>0&&V(x.nativeEvent,"shallow")},be=x=>{$.current&&($.current=!1),V(x.nativeEvent,"finish")},oe=T.useMemo(()=>p==="hours"?!0:h%5===0,[p,h]),ue=p==="minutes"?g:1,Q=T.useRef(null);pt(()=>{i&&Q.current.focus()},[i]);const G=x=>{if(!$.current)switch(x.key){case"Home":M(0,"partial"),x.preventDefault();break;case"End":M(p==="minutes"?59:23,"partial"),x.preventDefault();break;case"ArrowUp":M(h+ue,"partial"),x.preventDefault();break;case"ArrowDown":M(h-ue,"partial"),x.preventDefault();break;case"PageUp":M(h+5,"partial"),x.preventDefault();break;case"PageDown":M(h-5,"partial"),x.preventDefault();break;case"Enter":case" ":M(h,"finish"),x.preventDefault();break}};return w.jsxs(Lt,{className:ae(y.root,E),children:[w.jsxs(At,{className:y.clock,children:[w.jsx(Wt,{onTouchMove:R,onTouchStart:R,onTouchEnd:se,onMouseUp:be,onMouseMove:K,ownerState:{disabled:k},className:y.squareMask}),!u&&w.jsxs(T.Fragment,{children:[w.jsx(zt,{className:y.pin}),n!=null&&w.jsx(Bt,{type:p,viewValue:h,isInner:_,hasSelected:oe})]}),w.jsx(Ut,{"aria-activedescendant":C,"aria-label":H.clockLabelText(p,n,S,n==null?null:S.format(n,"fullTime")),ref:Q,role:"listbox",onKeyDown:G,tabIndex:0,className:y.wrapper,children:o})]}),r&&t&&w.jsxs(T.Fragment,{children:[w.jsx(qt,{onClick:j?void 0:()=>a("am"),disabled:k||m===null,ownerState:F,className:y.amButton,title:ve(S,"am"),children:w.jsx(Ae,{variant:"caption",className:y.meridiemText,children:ve(S,"am")})}),w.jsx(Kt,{disabled:k||m===null,onClick:j?void 0:()=>a("pm"),ownerState:F,className:y.pmButton,title:ve(S,"pm"),children:w.jsx(Ae,{variant:"caption",className:y.meridiemText,children:ve(S,"pm")})})]})]})}function Gt(e){return he("MuiClockNumber",e)}const De=fe("MuiClockNumber",["root","selected","disabled"]),Xt=["className","disabled","index","inner","label","selected"],Zt=e=>{const{classes:s,selected:r,disabled:t}=e;return le({root:["root",r&&"selected",t&&"disabled"]},Gt,s)},Qt=B("span",{name:"MuiClockNumber",slot:"Root",overridesResolver:(e,s)=>[s.root,{[`&.${De.disabled}`]:s.disabled},{[`&.${De.selected}`]:s.selected}]})(({theme:e})=>({height:re,width:re,position:"absolute",left:`calc((100% - ${re}px) / 2)`,display:"inline-flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",color:(e.vars||e).palette.text.primary,fontFamily:e.typography.fontFamily,"&:focused":{backgroundColor:(e.vars||e).palette.background.paper},[`&.${De.selected}`]:{color:(e.vars||e).palette.primary.contrastText},[`&.${De.disabled}`]:{pointerEvents:"none",color:(e.vars||e).palette.text.disabled},variants:[{props:{inner:!0},style:N({},e.typography.body2,{color:(e.vars||e).palette.text.secondary})}]}));function tt(e){const s=ce({props:e,name:"MuiClockNumber"}),{className:r,disabled:t,index:i,inner:o,label:n,selected:a}=s,b=ie(s,Xt),m=s,g=Zt(m),l=i%12/12*Math.PI*2-Math.PI/2,C=(ke-re-2)/2*(o?.65:1),p=Math.round(Math.cos(l)*C),h=Math.round(Math.sin(l)*C);return w.jsx(Qt,N({className:ae(g.root,r),"aria-disabled":t?!0:void 0,"aria-selected":a?!0:void 0,role:"option",style:{transform:`translate(${p}px, ${h+(ke-re)/2}px`},ownerState:m},b,{children:n}))}const Jt=({ampm:e,value:s,getClockNumberText:r,isDisabled:t,selectedId:i,utils:o})=>{const n=s?o.getHours(s):null,a=[],b=e?1:0,m=e?12:23,g=l=>n===null?!1:e?l===12?n===12||n===0:n===l||n-12===l:n===l;for(let l=b;l<=m;l+=1){let C=l.toString();l===0&&(C="00");const p=!e&&(l===0||l>12);C=o.formatNumber(C);const h=g(l);a.push(w.jsx(tt,{id:h?i:void 0,index:l,inner:p,selected:h,disabled:t(l),label:C,"aria-label":r(C)},l))}return a},Ue=({utils:e,value:s,isDisabled:r,getClockNumberText:t,selectedId:i})=>{const o=e.formatNumber;return[[5,o("05")],[10,o("10")],[15,o("15")],[20,o("20")],[25,o("25")],[30,o("30")],[35,o("35")],[40,o("40")],[45,o("45")],[50,o("50")],[55,o("55")],[0,o("00")]].map(([n,a],b)=>{const m=n===s;return w.jsx(tt,{label:a,id:m?i:void 0,index:b+1,inner:!1,disabled:r(n),selected:m,"aria-label":t(a)},n)})},Be=({value:e,referenceDate:s,utils:r,props:t,timezone:i})=>{const o=T.useMemo(()=>Me.getInitialReferenceValue({value:e,utils:r,props:t,referenceDate:s,granularity:it.day,timezone:i,getTodayDate:()=>at(r,i,"date")}),[]);return e??o},es=["ampm","ampmInClock","autoFocus","slots","slotProps","value","defaultValue","referenceDate","disableIgnoringDatePartForTimeValidation","maxTime","minTime","disableFuture","disablePast","minutesStep","shouldDisableTime","showViewSwitcher","onChange","view","views","openTo","onViewChange","focusedView","onFocusedViewChange","className","disabled","readOnly","timezone"],ts=e=>{const{classes:s}=e;return le({root:["root"],arrowSwitcher:["arrowSwitcher"]},yt,s)},ss=B(Oe,{name:"MuiTimeClock",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"flex",flexDirection:"column",position:"relative"}),os=B(lt,{name:"MuiTimeClock",slot:"ArrowSwitcher",overridesResolver:(e,s)=>s.arrowSwitcher})({position:"absolute",right:12,top:15}),ns=["hours","minutes"],rs=T.forwardRef(function(s,r){const t=Ne(),i=ce({props:s,name:"MuiTimeClock"}),{ampm:o=t.is12HourCycleInCurrentLocale(),ampmInClock:n=!1,autoFocus:a,slots:b,slotProps:m,value:g,defaultValue:l,referenceDate:C,disableIgnoringDatePartForTimeValidation:p=!1,maxTime:h,minTime:k,disableFuture:j,disablePast:E,minutesStep:F=1,shouldDisableTime:S,showViewSwitcher:H,onChange:$,view:y,views:u=ns,openTo:_,onViewChange:M,focusedView:V,onFocusedViewChange:R,className:se,disabled:K,readOnly:be,timezone:oe}=i,ue=ie(i,es),{value:Q,handleValueChange:G,timezone:x}=$e({name:"TimeClock",timezone:oe,value:g,defaultValue:l,onChange:$,valueManager:Me}),P=Be({value:Q,referenceDate:C,utils:t,props:i,timezone:x}),O=Fe(),U=_e(x),{view:Y,setView:D,previousView:ge,nextView:z,setValueAndGoToNextView:ee}=je({view:y,views:u,openTo:_,onViewChange:M,onChange:G,focusedView:V,onFocusedViewChange:R}),{meridiemMode:X,handleMeridiemChange:de}=ze(P,o,ee),ne=T.useCallback((L,A)=>{const c=Ie(p,t),I=A==="hours"||A==="minutes"&&u.includes("seconds"),d=({start:v,end:Z})=>!(k&&c(k,Z)||h&&c(v,h)||j&&c(v,U)||E&&c(U,I?Z:v)),f=(v,Z=1)=>{if(v%Z!==0)return!1;if(S)switch(A){case"hours":return!S(t.setHours(P,v),"hours");case"minutes":return!S(t.setMinutes(P,v),"minutes");case"seconds":return!S(t.setSeconds(P,v),"seconds");default:return!1}return!0};switch(A){case"hours":{const v=ye(L,X,o),Z=t.setHours(P,v),pe=t.setSeconds(t.setMinutes(Z,0),0),we=t.setSeconds(t.setMinutes(Z,59),59);return!d({start:pe,end:we})||!f(v)}case"minutes":{const v=t.setMinutes(P,L),Z=t.setSeconds(v,0),pe=t.setSeconds(v,59);return!d({start:Z,end:pe})||!f(L,F)}case"seconds":{const v=t.setSeconds(P,L);return!d({start:v,end:v})||!f(L)}default:throw new Error("not supported")}},[o,P,p,h,X,k,F,S,t,j,E,U,u]),q=dt(),Ce=T.useMemo(()=>{switch(Y){case"hours":{const L=(A,c)=>{const I=ye(A,X,o);ee(t.setHours(P,I),c,"hours")};return{onChange:L,viewValue:t.getHours(P),children:Jt({value:Q,utils:t,ampm:o,onChange:L,getClockNumberText:O.hoursClockNumberText,isDisabled:A=>K||ne(A,"hours"),selectedId:q})}}case"minutes":{const L=t.getMinutes(P),A=(c,I)=>{ee(t.setMinutes(P,c),I,"minutes")};return{viewValue:L,onChange:A,children:Ue({utils:t,value:L,onChange:A,getClockNumberText:O.minutesClockNumberText,isDisabled:c=>K||ne(c,"minutes"),selectedId:q})}}case"seconds":{const L=t.getSeconds(P),A=(c,I)=>{ee(t.setSeconds(P,c),I,"seconds")};return{viewValue:L,onChange:A,children:Ue({utils:t,value:L,onChange:A,getClockNumberText:O.secondsClockNumberText,isDisabled:c=>K||ne(c,"seconds"),selectedId:q})}}default:throw new Error("You must provide the type for ClockView")}},[Y,t,Q,o,O.hoursClockNumberText,O.minutesClockNumberText,O.secondsClockNumberText,X,ee,P,ne,q,K]),J=i,me=ts(J);return w.jsxs(ss,N({ref:r,className:ae(me.root,se),ownerState:J},ue,{children:[w.jsx(Yt,N({autoFocus:a??!!V,ampmInClock:n&&u.includes("hours"),value:Q,type:Y,ampm:o,minutesStep:F,isTimeDisabled:ne,meridiemMode:X,handleMeridiemChange:de,selectedId:q,disabled:K,readOnly:be},Ce)),H&&w.jsx(os,{className:me.arrowSwitcher,slots:b,slotProps:m,onGoToPrevious:()=>D(ge),isPreviousDisabled:!ge,previousLabel:O.openPreviousView,onGoToNext:()=>D(z),isNextDisabled:!z,nextLabel:O.openNextView,ownerState:J})]}))});function is(e){return he("MuiDigitalClock",e)}const Bs=fe("MuiDigitalClock",["root","list","item"]),as=["ampm","timeStep","autoFocus","slots","slotProps","value","defaultValue","referenceDate","disableIgnoringDatePartForTimeValidation","maxTime","minTime","disableFuture","disablePast","minutesStep","shouldDisableTime","onChange","view","openTo","onViewChange","focusedView","onFocusedViewChange","className","disabled","readOnly","views","skipDisabled","timezone"],ls=e=>{const{classes:s}=e;return le({root:["root"],list:["list"],item:["item"]},is,s)},cs=B(Oe,{name:"MuiDigitalClock",slot:"Root",overridesResolver:(e,s)=>s.root})({overflowY:"auto",width:"100%","@media (prefers-reduced-motion: no-preference)":{scrollBehavior:"auto"},maxHeight:qe,variants:[{props:{alreadyRendered:!0},style:{"@media (prefers-reduced-motion: no-preference)":{scrollBehavior:"smooth"}}}]}),us=B(Xe,{name:"MuiDigitalClock",slot:"List",overridesResolver:(e,s)=>s.list})({padding:0}),ds=B(Ze,{name:"MuiDigitalClock",slot:"Item",overridesResolver:(e,s)=>s.item})(({theme:e})=>({padding:"8px 16px",margin:"2px 4px","&:first-of-type":{marginTop:4},"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Pe(e.palette.primary.main,e.palette.action.hoverOpacity)},"&.Mui-selected":{backgroundColor:(e.vars||e).palette.primary.main,color:(e.vars||e).palette.primary.contrastText,"&:focus-visible, &:hover":{backgroundColor:(e.vars||e).palette.primary.dark}},"&.Mui-focusVisible":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})`:Pe(e.palette.primary.main,e.palette.action.focusOpacity)}})),ms=T.forwardRef(function(s,r){const t=Ne(),i=T.useRef(null),o=Ge(r,i),n=T.useRef(null),a=ce({props:s,name:"MuiDigitalClock"}),{ampm:b=t.is12HourCycleInCurrentLocale(),timeStep:m=30,autoFocus:g,slots:l,slotProps:C,value:p,defaultValue:h,referenceDate:k,disableIgnoringDatePartForTimeValidation:j=!1,maxTime:E,minTime:F,disableFuture:S,disablePast:H,minutesStep:$=1,shouldDisableTime:y,onChange:u,view:_,openTo:M,onViewChange:V,focusedView:R,onFocusedViewChange:se,className:K,disabled:be,readOnly:oe,views:ue=["hours"],skipDisabled:Q=!1,timezone:G}=a,x=ie(a,as),{value:P,handleValueChange:O,timezone:U}=$e({name:"DigitalClock",timezone:G,value:p,defaultValue:h,onChange:u,valueManager:Me}),Y=Fe(),D=_e(U),ge=T.useMemo(()=>N({},a,{alreadyRendered:!!i.current}),[a]),z=ls(ge),ee=(l==null?void 0:l.digitalClockItem)??ds,X=mt({elementType:ee,externalSlotProps:C==null?void 0:C.digitalClockItem,ownerState:{},className:z.item}),de=Be({value:P,referenceDate:k,utils:t,props:a,timezone:U}),ne=Re(c=>O(c,"finish","hours")),{setValueAndGoToNextView:q}=je({view:_,views:ue,openTo:M,onViewChange:V,onChange:ne,focusedView:R,onFocusedViewChange:se}),Ce=Re(c=>{q(c,"finish")});T.useEffect(()=>{if(i.current===null)return;const c=i.current.querySelector('[role="listbox"] [role="option"][tabindex="0"], [role="listbox"] [role="option"][aria-selected="true"]');if(!c)return;const I=c.offsetTop;(g||R)&&c.focus(),i.current.scrollTop=I-4});const J=T.useCallback(c=>{const I=Ie(j,t),d=()=>!(F&&I(F,c)||E&&I(c,E)||S&&I(c,D)||H&&I(D,c)),f=()=>t.getMinutes(c)%$!==0?!1:y?!y(c,"hours"):!0;return!d()||!f()},[j,t,F,E,S,D,H,$,y]),me=T.useMemo(()=>{const c=[];let d=t.startOfDay(de);for(;t.isSameDay(de,d);)c.push(d),d=t.addMinutes(d,m);return c},[de,m,t]),L=me.findIndex(c=>t.isEqual(c,de)),A=c=>{switch(c.key){case"PageUp":{const I=Ve(n.current)-5,d=n.current.children,f=Math.max(0,I),v=d[f];v&&v.focus(),c.preventDefault();break}case"PageDown":{const I=Ve(n.current)+5,d=n.current.children,f=Math.min(d.length-1,I),v=d[f];v&&v.focus(),c.preventDefault();break}}};return w.jsx(cs,N({ref:o,className:ae(z.root,K),ownerState:ge},x,{children:w.jsx(us,{ref:n,role:"listbox","aria-label":Y.timePickerToolbarTitle,className:z.list,onKeyDown:A,children:me.map((c,I)=>{if(Q&&J(c))return null;const d=t.isEqual(c,P),f=t.format(c,b?"fullTime12h":"fullTime24h"),v=L===I||L===-1&&I===0?0:-1;return w.jsx(ee,N({onClick:()=>!oe&&Ce(c),selected:d,disabled:be||J(c),disableRipple:oe,role:"option","aria-disabled":oe,"aria-selected":d,tabIndex:v},X,{children:f}),`${c.valueOf()}-${f}`)})})}))});function ps(e){return he("MuiMultiSectionDigitalClock",e)}const Hs=fe("MuiMultiSectionDigitalClock",["root"]);function fs(e){return he("MuiMultiSectionDigitalClockSection",e)}const Es=fe("MuiMultiSectionDigitalClockSection",["root","item"]),hs=["autoFocus","onChange","className","disabled","readOnly","items","active","slots","slotProps","skipDisabled"],bs=e=>{const{classes:s}=e;return le({root:["root"],item:["item"]},fs,s)},gs=B(Xe,{name:"MuiMultiSectionDigitalClockSection",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({maxHeight:qe,width:56,padding:0,overflow:"hidden","@media (prefers-reduced-motion: no-preference)":{scrollBehavior:"auto"},"@media (pointer: fine)":{"&:hover":{overflowY:"auto"}},"@media (pointer: none), (pointer: coarse)":{overflowY:"auto"},"&:not(:first-of-type)":{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},"&::after":{display:"block",content:'""',height:"calc(100% - 40px - 6px)"},variants:[{props:{alreadyRendered:!0},style:{"@media (prefers-reduced-motion: no-preference)":{scrollBehavior:"smooth"}}}]})),Cs=B(Ze,{name:"MuiMultiSectionDigitalClockSection",slot:"Item",overridesResolver:(e,s)=>s.item})(({theme:e})=>({padding:8,margin:"2px 4px",width:ct,justifyContent:"center","&:first-of-type":{marginTop:4},"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Pe(e.palette.primary.main,e.palette.action.hoverOpacity)},"&.Mui-selected":{backgroundColor:(e.vars||e).palette.primary.main,color:(e.vars||e).palette.primary.contrastText,"&:focus-visible, &:hover":{backgroundColor:(e.vars||e).palette.primary.dark}},"&.Mui-focusVisible":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})`:Pe(e.palette.primary.main,e.palette.action.focusOpacity)}})),vs=T.forwardRef(function(s,r){const t=T.useRef(null),i=Ge(r,t),o=T.useRef(null),n=ce({props:s,name:"MuiMultiSectionDigitalClockSection"}),{autoFocus:a,onChange:b,className:m,disabled:g,readOnly:l,items:C,active:p,slots:h,slotProps:k,skipDisabled:j}=n,E=ie(n,hs),F=T.useMemo(()=>N({},n,{alreadyRendered:!!t.current}),[n]),S=bs(F),H=(h==null?void 0:h.digitalClockSectionItem)??Cs;T.useEffect(()=>{if(t.current===null)return;const u=t.current.querySelector('[role="option"][tabindex="0"], [role="option"][aria-selected="true"]');if(p&&a&&u&&u.focus(),!u||o.current===u)return;o.current=u;const _=u.offsetTop;t.current.scrollTop=_-4});const $=C.findIndex(u=>u.isFocused(u.value)),y=u=>{switch(u.key){case"PageUp":{const _=Ve(t.current)-5,M=t.current.children,V=Math.max(0,_),R=M[V];R&&R.focus(),u.preventDefault();break}case"PageDown":{const _=Ve(t.current)+5,M=t.current.children,V=Math.min(M.length-1,_),R=M[V];R&&R.focus(),u.preventDefault();break}}};return w.jsx(gs,N({ref:i,className:ae(S.root,m),ownerState:F,autoFocusItem:a&&p,role:"listbox",onKeyDown:y},E,{children:C.map((u,_)=>{var K;const M=(K=u.isDisabled)==null?void 0:K.call(u,u.value),V=g||M;if(j&&V)return null;const R=u.isSelected(u.value),se=$===_||$===-1&&_===0?0:-1;return w.jsx(H,N({onClick:()=>!l&&b(u.value),selected:R,disabled:V,disableRipple:l,role:"option","aria-disabled":l||V||void 0,"aria-label":u.ariaLabel,"aria-selected":R,tabIndex:se,className:S.item},k==null?void 0:k.digitalClockSectionItem,{children:u.label}),u.label)})}))}),ks=({now:e,value:s,utils:r,ampm:t,isDisabled:i,resolveAriaLabel:o,timeStep:n,valueOrReferenceDate:a})=>{const b=s?r.getHours(s):null,m=[],g=(p,h)=>{const k=h??b;return k===null?!1:t?p===12?k===12||k===0:k===p||k-12===p:k===p},l=p=>g(p,r.getHours(a)),C=t?11:23;for(let p=0;p<=C;p+=n){let h=r.format(r.setHours(e,p),t?"hours12h":"hours24h");const k=o(parseInt(h,10).toString());h=r.formatNumber(h),m.push({value:p,label:h,isSelected:g,isDisabled:i,isFocused:l,ariaLabel:k})}return m},We=({value:e,utils:s,isDisabled:r,timeStep:t,resolveLabel:i,resolveAriaLabel:o,hasValue:n=!0})=>{const a=m=>e===null?!1:n&&e===m,b=m=>e===m;return[...Array.from({length:Math.ceil(60/t)},(m,g)=>{const l=t*g;return{value:l,label:s.formatNumber(i(l)),isDisabled:r,isSelected:a,isFocused:b,ariaLabel:o(l.toString())}})]},ws=["ampm","timeSteps","autoFocus","slots","slotProps","value","defaultValue","referenceDate","disableIgnoringDatePartForTimeValidation","maxTime","minTime","disableFuture","disablePast","minutesStep","shouldDisableTime","onChange","view","views","openTo","onViewChange","focusedView","onFocusedViewChange","className","disabled","readOnly","skipDisabled","timezone"],xs=e=>{const{classes:s}=e;return le({root:["root"]},ps,s)},Ts=B(Oe,{name:"MuiMultiSectionDigitalClock",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({display:"flex",flexDirection:"row",width:"100%",borderBottom:`1px solid ${(e.vars||e).palette.divider}`})),Ms=T.forwardRef(function(s,r){const t=Ne(),i=ft(),o=ce({props:s,name:"MuiMultiSectionDigitalClock"}),{ampm:n=t.is12HourCycleInCurrentLocale(),timeSteps:a,autoFocus:b,slots:m,slotProps:g,value:l,defaultValue:C,referenceDate:p,disableIgnoringDatePartForTimeValidation:h=!1,maxTime:k,minTime:j,disableFuture:E,disablePast:F,minutesStep:S=1,shouldDisableTime:H,onChange:$,view:y,views:u=["hours","minutes"],openTo:_,onViewChange:M,focusedView:V,onFocusedViewChange:R,className:se,disabled:K,readOnly:be,skipDisabled:oe=!1,timezone:ue}=o,Q=ie(o,ws),{value:G,handleValueChange:x,timezone:P}=$e({name:"MultiSectionDigitalClock",timezone:ue,value:l,defaultValue:C,onChange:$,valueManager:Me}),O=Fe(),U=_e(P),Y=T.useMemo(()=>N({hours:1,minutes:5,seconds:5},a),[a]),D=Be({value:G,referenceDate:p,utils:t,props:o,timezone:P}),ge=Re((d,f,v)=>x(d,f,v)),z=T.useMemo(()=>!n||!u.includes("hours")||u.includes("meridiem")?u:[...u,"meridiem"],[n,u]),{view:ee,setValueAndGoToNextView:X,focusedView:de}=je({view:y,views:z,openTo:_,onViewChange:M,onChange:ge,focusedView:V,onFocusedViewChange:R}),ne=Re(d=>{X(d,"finish","meridiem")}),{meridiemMode:q,handleMeridiemChange:Ce}=ze(D,n,ne,"finish"),J=T.useCallback((d,f)=>{const v=Ie(h,t),Z=f==="hours"||f==="minutes"&&z.includes("seconds"),pe=({start:W,end:te})=>!(j&&v(j,te)||k&&v(W,k)||E&&v(W,U)||F&&v(U,Z?te:W)),we=(W,te=1)=>{if(W%te!==0)return!1;if(H)switch(f){case"hours":return!H(t.setHours(D,W),"hours");case"minutes":return!H(t.setMinutes(D,W),"minutes");case"seconds":return!H(t.setSeconds(D,W),"seconds");default:return!1}return!0};switch(f){case"hours":{const W=ye(d,q,n),te=t.setHours(D,W),Se=t.setSeconds(t.setMinutes(te,0),0),st=t.setSeconds(t.setMinutes(te,59),59);return!pe({start:Se,end:st})||!we(W)}case"minutes":{const W=t.setMinutes(D,d),te=t.setSeconds(W,0),Se=t.setSeconds(W,59);return!pe({start:te,end:Se})||!we(d,S)}case"seconds":{const W=t.setSeconds(D,d);return!pe({start:W,end:W})||!we(d)}default:throw new Error("not supported")}},[n,D,h,k,q,j,S,H,t,E,F,U,z]),me=T.useCallback(d=>{switch(d){case"hours":return{onChange:f=>{const v=ye(f,q,n);X(t.setHours(D,v),"finish","hours")},items:ks({now:U,value:G,ampm:n,utils:t,isDisabled:f=>J(f,"hours"),timeStep:Y.hours,resolveAriaLabel:O.hoursClockNumberText,valueOrReferenceDate:D})};case"minutes":return{onChange:f=>{X(t.setMinutes(D,f),"finish","minutes")},items:We({value:t.getMinutes(D),utils:t,isDisabled:f=>J(f,"minutes"),resolveLabel:f=>t.format(t.setMinutes(U,f),"minutes"),timeStep:Y.minutes,hasValue:!!G,resolveAriaLabel:O.minutesClockNumberText})};case"seconds":return{onChange:f=>{X(t.setSeconds(D,f),"finish","seconds")},items:We({value:t.getSeconds(D),utils:t,isDisabled:f=>J(f,"seconds"),resolveLabel:f=>t.format(t.setSeconds(U,f),"seconds"),timeStep:Y.seconds,hasValue:!!G,resolveAriaLabel:O.secondsClockNumberText})};case"meridiem":{const f=ve(t,"am"),v=ve(t,"pm");return{onChange:Ce,items:[{value:"am",label:f,isSelected:()=>!!G&&q==="am",isFocused:()=>!!D&&q==="am",ariaLabel:f},{value:"pm",label:v,isSelected:()=>!!G&&q==="pm",isFocused:()=>!!D&&q==="pm",ariaLabel:v}]}}default:throw new Error(`Unknown view: ${d} found.`)}},[U,G,n,t,Y.hours,Y.minutes,Y.seconds,O.hoursClockNumberText,O.minutesClockNumberText,O.secondsClockNumberText,q,X,D,J,Ce]),L=T.useMemo(()=>{if(!i)return z;const d=z.filter(f=>f!=="meridiem");return d.reverse(),z.includes("meridiem")&&d.push("meridiem"),d},[i,z]),A=T.useMemo(()=>z.reduce((d,f)=>N({},d,{[f]:me(f)}),{}),[z,me]),c=o,I=xs(c);return w.jsx(Ts,N({ref:r,className:ae(I.root,se),ownerState:c,role:"group"},Q,{children:L.map(d=>w.jsx(vs,{items:A[d].items,onChange:A[d].onChange,active:ee===d,autoFocus:b??de===d,disabled:K,readOnly:be,slots:m,slotProps:g,skipDisabled:oe,"aria-label":O.selectViewText(d)},d))}))}),Ls=({view:e,onViewChange:s,focusedView:r,onFocusedViewChange:t,views:i,value:o,defaultValue:n,referenceDate:a,onChange:b,className:m,classes:g,disableFuture:l,disablePast:C,minTime:p,maxTime:h,shouldDisableTime:k,minutesStep:j,ampm:E,ampmInClock:F,slots:S,slotProps:H,readOnly:$,disabled:y,sx:u,autoFocus:_,showViewSwitcher:M,disableIgnoringDatePartForTimeValidation:V,timezone:R})=>w.jsx(rs,{view:e,onViewChange:s,focusedView:r&&xe(r)?r:null,onFocusedViewChange:t,views:i.filter(xe),value:o,defaultValue:n,referenceDate:a,onChange:b,className:m,classes:g,disableFuture:l,disablePast:C,minTime:p,maxTime:h,shouldDisableTime:k,minutesStep:j,ampm:E,ampmInClock:F,slots:S,slotProps:H,readOnly:$,disabled:y,sx:u,autoFocus:_,showViewSwitcher:M,disableIgnoringDatePartForTimeValidation:V,timezone:R}),As=({view:e,onViewChange:s,focusedView:r,onFocusedViewChange:t,views:i,value:o,defaultValue:n,referenceDate:a,onChange:b,className:m,classes:g,disableFuture:l,disablePast:C,minTime:p,maxTime:h,shouldDisableTime:k,minutesStep:j,ampm:E,slots:F,slotProps:S,readOnly:H,disabled:$,sx:y,autoFocus:u,disableIgnoringDatePartForTimeValidation:_,timeSteps:M,skipDisabled:V,timezone:R})=>w.jsx(ms,{view:e,onViewChange:s,focusedView:r,onFocusedViewChange:t,views:i.filter(xe),value:o,defaultValue:n,referenceDate:a,onChange:b,className:m,classes:g,disableFuture:l,disablePast:C,minTime:p,maxTime:h,shouldDisableTime:k,minutesStep:j,ampm:E,slots:F,slotProps:S,readOnly:H,disabled:$,sx:y,autoFocus:u,disableIgnoringDatePartForTimeValidation:_,timeStep:M==null?void 0:M.minutes,skipDisabled:V,timezone:R}),Us=({view:e,onViewChange:s,focusedView:r,onFocusedViewChange:t,views:i,value:o,defaultValue:n,referenceDate:a,onChange:b,className:m,classes:g,disableFuture:l,disablePast:C,minTime:p,maxTime:h,shouldDisableTime:k,minutesStep:j,ampm:E,slots:F,slotProps:S,readOnly:H,disabled:$,sx:y,autoFocus:u,disableIgnoringDatePartForTimeValidation:_,timeSteps:M,skipDisabled:V,timezone:R})=>w.jsx(Ms,{view:e,onViewChange:s,focusedView:r,onFocusedViewChange:t,views:i.filter(xe),value:o,defaultValue:n,referenceDate:a,onChange:b,className:m,classes:g,disableFuture:l,disablePast:C,minTime:p,maxTime:h,shouldDisableTime:k,minutesStep:j,ampm:E,slots:F,slotProps:S,readOnly:H,disabled:$,sx:y,autoFocus:u,disableIgnoringDatePartForTimeValidation:_,timeSteps:M,skipDisabled:V,timezone:R});export{kt as P,$s as a,Us as b,As as c,Ls as d,_s as e,Es as f,Bs as g,Hs as m,Le as p,js as r,ht as v};
