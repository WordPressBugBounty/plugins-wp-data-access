import{R as E,r as v}from"./redux-1.0.32-BsgiH_bG.js";import{a as Ae,g as je}from"./vendor-1.0.32-BmpNFhoq.js";var Te=Ae();const bn=je(Te);function De(t){var n,o,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=De(t[n]))&&(i&&(i+=" "),i+=o);else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function P(){for(var t,n,o=0,i="";o<arguments.length;)(t=arguments[o++])&&(n=De(t))&&(i&&(i+=" "),i+=n);return i}let qe={data:""},Ve=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||qe,$e=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ze=/\/\*[^]*?\*\/|  +/g,pe=/\n+/g,M=(t,n)=>{let o="",i="",e="";for(let r in t){let a=t[r];r[0]=="@"?r[1]=="i"?o=r+" "+a+";":i+=r[1]=="f"?M(a,r):r+"{"+M(a,r[1]=="k"?"":n)+"}":typeof a=="object"?i+=M(a,n?n.replace(/([^,])+/g,s=>r.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,s):s?s+" "+u:u)):r):a!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=M.p?M.p(r,a):r+":"+a+";")}return o+(n&&e?n+"{"+e+"}":e)+i},O={},Le=t=>{if(typeof t=="object"){let n="";for(let o in t)n+=o+Le(t[o]);return n}return t},Fe=(t,n,o,i,e)=>{let r=Le(t),a=O[r]||(O[r]=(u=>{let c=0,l=11;for(;c<u.length;)l=101*l+u.charCodeAt(c++)>>>0;return"go"+l})(r));if(!O[a]){let u=r!==t?t:(c=>{let l,d,p=[{}];for(;l=$e.exec(c.replace(ze,""));)l[4]?p.shift():l[3]?(d=l[3].replace(pe," ").trim(),p.unshift(p[0][d]=p[0][d]||{})):p[0][l[1]]=l[2].replace(pe," ").trim();return p[0]})(t);O[a]=M(e?{["@keyframes "+a]:u}:u,o?"":"."+a)}let s=o&&O.g?O.g:null;return o&&(O.g=O[a]),((u,c,l,d)=>{d?c.data=c.data.replace(d,u):c.data.indexOf(u)===-1&&(c.data=l?u+c.data:c.data+u)})(O[a],n,i,s),a},Be=(t,n,o)=>t.reduce((i,e,r)=>{let a=n[r];if(a&&a.call){let s=a(o),u=s&&s.props&&s.props.className||/^go/.test(s)&&s;a=u?"."+u:s&&typeof s=="object"?s.props?"":M(s,""):s===!1?"":s}return i+e+(a??"")},"");function ce(t){let n=this||{},o=t.call?t(n.p):t;return Fe(o.unshift?o.raw?Be(o,[].slice.call(arguments,1),n.p):o.reduce((i,e)=>Object.assign(i,e&&e.call?e(n.p):e),{}):o,Ve(n.target),n.g,n.o,n.k)}ce.bind({g:1});ce.bind({k:1});function Xe(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Oe(t,n,o){return n&&Xe(t.prototype,n),t}function m(){return m=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},m.apply(this,arguments)}function Ne(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function F(t,n){if(t==null)return{};var o={},i=Object.keys(t),e,r;for(r=0;r<i.length;r++)e=i[r],!(n.indexOf(e)>=0)&&(o[e]=t[e]);return o}function ve(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var he=function(){return""},Ke=E.createContext({enqueueSnackbar:he,closeSnackbar:he}),R={downXs:"@media (max-width:599.95px)",upSm:"@media (min-width:600px)"},me=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},fe=function(n){return""+me(n.vertical)+me(n.horizontal)},X=function(n){return!!n||n===0},K="unmounted",_="exited",H="entering",q="entered",ge="exiting",de=function(t){Ne(n,t);function n(i){var e;e=t.call(this,i)||this;var r=i.appear,a;return e.appearStatus=null,i.in?r?(a=_,e.appearStatus=H):a=q:i.unmountOnExit||i.mountOnEnter?a=K:a=_,e.state={status:a},e.nextCallback=null,e}n.getDerivedStateFromProps=function(e,r){var a=e.in;return a&&r.status===K?{status:_}:null};var o=n.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var r=null;if(e!==this.props){var a=this.state.status;this.props.in?a!==H&&a!==q&&(r=H):(a===H||a===q)&&(r=ge)}this.updateStatus(!1,r)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e=this.props.timeout,r=e,a=e;return e!=null&&typeof e!="number"&&typeof e!="string"&&(a=e.exit,r=e.enter),{exit:a,enter:r}},o.updateStatus=function(e,r){e===void 0&&(e=!1),r!==null?(this.cancelNextCallback(),r===H?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===_&&this.setState({status:K})},o.performEnter=function(e){var r=this,a=this.props.enter,s=e,u=this.getTimeouts();if(!e&&!a){this.safeSetState({status:q},function(){r.props.onEntered&&r.props.onEntered(r.node,s)});return}this.props.onEnter&&this.props.onEnter(this.node,s),this.safeSetState({status:H},function(){r.props.onEntering&&r.props.onEntering(r.node,s),r.onTransitionEnd(u.enter,function(){r.safeSetState({status:q},function(){r.props.onEntered&&r.props.onEntered(r.node,s)})})})},o.performExit=function(){var e=this,r=this.props.exit,a=this.getTimeouts();if(!r){this.safeSetState({status:_},function(){e.props.onExited&&e.props.onExited(e.node)});return}this.props.onExit&&this.props.onExit(this.node),this.safeSetState({status:ge},function(){e.props.onExiting&&e.props.onExiting(e.node),e.onTransitionEnd(a.exit,function(){e.safeSetState({status:_},function(){e.props.onExited&&e.props.onExited(e.node)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&this.nextCallback.cancel&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,r){r=this.setNextCallback(r),this.setState(e,r)},o.setNextCallback=function(e){var r=this,a=!0;return this.nextCallback=function(){a&&(a=!1,r.nextCallback=null,e())},this.nextCallback.cancel=function(){a=!1},this.nextCallback},o.onTransitionEnd=function(e,r){this.setNextCallback(r);var a=e==null&&!this.props.addEndListener;if(!this.node||a){setTimeout(this.nextCallback,0);return}this.props.addEndListener&&this.props.addEndListener(this.node,this.nextCallback),e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var e=this.state.status;if(e===K)return null;var r=this.props,a=r.children,s=F(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return a(e,s)},Oe(n,[{key:"node",get:function(){var e,r=(e=this.props.nodeRef)===null||e===void 0?void 0:e.current;if(!r)throw new Error("notistack - Custom snackbar is not refForwarding");return r}}]),n}(E.Component);function W(){}de.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:W,onEntering:W,onEntered:W,onExit:W,onExiting:W,onExited:W};function Ee(t,n){typeof t=="function"?t(n):t&&(t.current=n)}function ue(t,n){return v.useMemo(function(){return t==null&&n==null?null:function(o){Ee(t,o),Ee(n,o)}},[t,n])}function Y(t){var n=t.timeout,o=t.style,i=o===void 0?{}:o,e=t.mode;return{duration:typeof n=="object"?n[e]||0:n,easing:i.transitionTimingFunction,delay:i.transitionDelay}}var le={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Re=function(n){n.scrollTop=n.scrollTop},xe=function(n){return Math.round(n)+"ms"};function A(t,n){t===void 0&&(t=["all"]);var o=n||{},i=o.duration,e=i===void 0?300:i,r=o.easing,a=r===void 0?le.easeInOut:r,s=o.delay,u=s===void 0?0:s,c=Array.isArray(t)?t:[t];return c.map(function(l){var d=typeof e=="string"?e:xe(e),p=typeof u=="string"?u:xe(u);return l+" "+d+" "+a+" "+p}).join(",")}function Ue(t){return t&&t.ownerDocument||document}function Me(t){var n=Ue(t);return n.defaultView||window}function Ze(t,n){n===void 0&&(n=166);var o;function i(){for(var e=this,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];var u=function(){t.apply(e,a)};clearTimeout(o),o=setTimeout(u,n)}return i.clear=function(){clearTimeout(o)},i}function Ge(t,n){var o=n.getBoundingClientRect(),i=Me(n),e;if(n.fakeTransform)e=n.fakeTransform;else{var r=i.getComputedStyle(n);e=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var a=0,s=0;if(e&&e!=="none"&&typeof e=="string"){var u=e.split("(")[1].split(")")[0].split(",");a=parseInt(u[4],10),s=parseInt(u[5],10)}switch(t){case"left":return"translateX("+(i.innerWidth+a-o.left)+"px)";case"right":return"translateX(-"+(o.left+o.width-a)+"px)";case"up":return"translateY("+(i.innerHeight+s-o.top)+"px)";default:return"translateY(-"+(o.top+o.height-s)+"px)"}}function U(t,n){if(n){var o=Ge(t,n);o&&(n.style.webkitTransform=o,n.style.transform=o)}}var Ie=v.forwardRef(function(t,n){var o=t.children,i=t.direction,e=i===void 0?"down":i,r=t.in,a=t.style,s=t.timeout,u=s===void 0?0:s,c=t.onEnter,l=t.onEntered,d=t.onExit,p=t.onExited,S=F(t,["children","direction","in","style","timeout","onEnter","onEntered","onExit","onExited"]),f=v.useRef(null),h=ue(o.ref,f),x=ue(h,n),k=function(g,D){U(e,g),Re(g),c&&c(g,D)},C=function(g){var D=(a==null?void 0:a.transitionTimingFunction)||le.easeOut,L=Y({timeout:u,mode:"enter",style:m({},a,{transitionTimingFunction:D})});g.style.webkitTransition=A("-webkit-transform",L),g.style.transition=A("transform",L),g.style.webkitTransform="none",g.style.transform="none"},b=function(g){var D=(a==null?void 0:a.transitionTimingFunction)||le.sharp,L=Y({timeout:u,mode:"exit",style:m({},a,{transitionTimingFunction:D})});g.style.webkitTransition=A("-webkit-transform",L),g.style.transition=A("transform",L),U(e,g),d&&d(g)},T=function(g){g.style.webkitTransition="",g.style.transition="",p&&p(g)},y=v.useCallback(function(){f.current&&U(e,f.current)},[e]);return v.useEffect(function(){if(!(r||e==="down"||e==="right")){var w=Ze(function(){f.current&&U(e,f.current)}),g=Me(f.current);return g.addEventListener("resize",w),function(){w.clear(),g.removeEventListener("resize",w)}}},[e,r]),v.useEffect(function(){r||y()},[r,y]),v.createElement(de,Object.assign({appear:!0,nodeRef:f,onEnter:k,onEntered:l,onEntering:C,onExit:b,onExited:T,in:r,timeout:u},S),function(w,g){return v.cloneElement(o,m({ref:x,style:m({visibility:w==="exited"&&!r?"hidden":void 0},a,{},o.props.style)},g))})});Ie.displayName="Slide";var J=function(n){return E.createElement("svg",Object.assign({viewBox:"0 0 24 24",focusable:"false",style:{fontSize:20,marginInlineEnd:8,userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0}},n))},Qe=function(){return E.createElement(J,null,E.createElement("path",{d:`M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z`}))},Ye=function(){return E.createElement(J,null,E.createElement("path",{d:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"}))},Je=function(){return E.createElement(J,null,E.createElement("path",{d:`M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,
        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,
        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z`}))},en=function(){return E.createElement(J,null,E.createElement("path",{d:`M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,
        0 22,12A10,10 0 0,0 12,2Z`}))},nn={default:void 0,success:E.createElement(Qe,null),warning:E.createElement(Ye,null),error:E.createElement(Je,null),info:E.createElement(en,null)},I={maxSnack:3,persist:!1,hideIconVariant:!1,disableWindowBlurListener:!1,variant:"default",autoHideDuration:5e3,iconVariant:nn,anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:Ie,transitionDuration:{enter:225,exit:195}},tn=function(n,o){var i=function(r){return typeof r=="number"||r===null};return i(n)?n:i(o)?o:I.autoHideDuration},rn=function(n,o){var i=function(r,a){return a.some(function(s){return typeof r===s})};return i(n,["string","number"])?n:i(n,["object"])?m({},I.transitionDuration,{},i(o,["object"])&&o,{},n):i(o,["string","number"])?o:i(o,["object"])?m({},I.transitionDuration,{},o):I.transitionDuration},an=function(n,o){return function(i,e){return e===void 0&&(e=!1),e?m({},I[i],{},o[i],{},n[i]):i==="autoHideDuration"?tn(n.autoHideDuration,o.autoHideDuration):i==="transitionDuration"?rn(n.transitionDuration,o.transitionDuration):n[i]||o[i]||I[i]}};function B(t){return Object.entries(t).reduce(function(n,o){var i,e=o[0],r=o[1];return m({},n,(i={},i[e]=ce(r),i))},{})}var j={SnackbarContainer:"notistack-SnackbarContainer",Snackbar:"notistack-Snackbar",CollapseWrapper:"notistack-CollapseWrapper",MuiContent:"notistack-MuiContent",MuiContentVariant:function(n){return"notistack-MuiContent-"+n}},be=B({root:{height:0},entered:{height:"auto"}}),te="0px",re=175,Pe=v.forwardRef(function(t,n){var o=t.children,i=t.in,e=t.onExited,r=v.useRef(null),a=v.useRef(null),s=ue(n,a),u=function(){return r.current?r.current.clientHeight:0},c=function(h){h.style.height=te},l=function(h){var x=u(),k=Y({timeout:re,mode:"enter"}),C=k.duration,b=k.easing;h.style.transitionDuration=typeof C=="string"?C:C+"ms",h.style.height=x+"px",h.style.transitionTimingFunction=b||""},d=function(h){h.style.height="auto"},p=function(h){h.style.height=u()+"px"},S=function(h){Re(h);var x=Y({timeout:re,mode:"exit"}),k=x.duration,C=x.easing;h.style.transitionDuration=typeof k=="string"?k:k+"ms",h.style.height=te,h.style.transitionTimingFunction=C||""};return v.createElement(de,{in:i,unmountOnExit:!0,onEnter:c,onEntered:d,onEntering:l,onExit:p,onExited:e,onExiting:S,nodeRef:a,timeout:re},function(f,h){return v.createElement("div",Object.assign({ref:s,className:P(be.root,f==="entered"&&be.entered),style:m({pointerEvents:"all",overflow:"hidden",minHeight:te,transition:A("height")},f==="entered"&&{overflow:"visible"},{},f==="exited"&&!i&&{visibility:"hidden"})},h),v.createElement("div",{ref:r,className:j.CollapseWrapper,style:{display:"flex",width:"100%"}},o))})});Pe.displayName="Collapse";var ke={right:"left",left:"right",bottom:"up",top:"down"},on=function(n){return n.horizontal!=="center"?ke[n.horizontal]:ke[n.vertical]},sn=function(n){return"anchorOrigin"+fe(n)},un=function(n){n===void 0&&(n={});var o={containerRoot:!0,containerAnchorOriginTopCenter:!0,containerAnchorOriginBottomCenter:!0,containerAnchorOriginTopRight:!0,containerAnchorOriginBottomRight:!0,containerAnchorOriginTopLeft:!0,containerAnchorOriginBottomLeft:!0};return Object.keys(n).filter(function(i){return!o[i]}).reduce(function(i,e){var r;return m({},i,(r={},r[e]=n[e],r))},{})},ln=function(){};function z(t,n){return t.reduce(function(o,i){return i==null?o:function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];var u=[].concat(a);n&&u.indexOf(n)===-1&&u.push(n),o.apply(this,u),i.apply(this,u)}},ln)}var cn=typeof window<"u"?v.useLayoutEffect:v.useEffect;function Ce(t){var n=v.useRef(t);return cn(function(){n.current=t}),v.useCallback(function(){return n.current.apply(void 0,arguments)},[])}var _e=v.forwardRef(function(t,n){var o=t.children,i=t.className,e=t.autoHideDuration,r=t.disableWindowBlurListener,a=r===void 0?!1:r,s=t.onClose,u=t.id,c=t.open,l=t.SnackbarProps,d=l===void 0?{}:l,p=v.useRef(),S=Ce(function(){s&&s.apply(void 0,arguments)}),f=Ce(function(b){!s||b==null||(p.current&&clearTimeout(p.current),p.current=setTimeout(function(){S(null,"timeout",u)},b))});v.useEffect(function(){return c&&f(e),function(){p.current&&clearTimeout(p.current)}},[c,e,f]);var h=function(){p.current&&clearTimeout(p.current)},x=v.useCallback(function(){e!=null&&f(e*.5)},[e,f]),k=function(T){d.onMouseEnter&&d.onMouseEnter(T),h()},C=function(T){d.onMouseLeave&&d.onMouseLeave(T),x()};return v.useEffect(function(){if(!a&&c)return window.addEventListener("focus",x),window.addEventListener("blur",h),function(){window.removeEventListener("focus",x),window.removeEventListener("blur",h)}},[a,x,c]),v.createElement("div",Object.assign({ref:n},d,{className:P(j.Snackbar,i),onMouseEnter:k,onMouseLeave:C}),o)});_e.displayName="Snackbar";var ie,fn=B({root:(ie={display:"flex",flexWrap:"wrap",flexGrow:1},ie[R.upSm]={flexGrow:"initial",minWidth:"288px"},ie)}),He=v.forwardRef(function(t,n){var o=t.className,i=F(t,["className"]);return E.createElement("div",Object.assign({ref:n,className:P(fn.root,o)},i))});He.displayName="SnackbarContent";var V=B({root:{backgroundColor:"#313131",fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em",color:"#fff",alignItems:"center",padding:"6px 16px",borderRadius:"4px",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"},lessPadding:{paddingLeft:8*2.5+"px"},default:{backgroundColor:"#313131"},success:{backgroundColor:"#43a047"},error:{backgroundColor:"#d32f2f"},warning:{backgroundColor:"#ff9800"},info:{backgroundColor:"#2196f3"},message:{display:"flex",alignItems:"center",padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:"16px",marginRight:"-8px"}}),Se="notistack-snackbar",We=v.forwardRef(function(t,n){var o=t.id,i=t.message,e=t.action,r=t.iconVariant,a=t.variant,s=t.hideIconVariant,u=t.style,c=t.className,l=r[a],d=e;return typeof d=="function"&&(d=d(o)),E.createElement(He,{ref:n,role:"alert","aria-describedby":Se,style:u,className:P(j.MuiContent,j.MuiContentVariant(a),V.root,V[a],c,!s&&l&&V.lessPadding)},E.createElement("div",{id:Se,className:V.message},s?null:l,i),d&&E.createElement("div",{className:V.action},d))});We.displayName="MaterialDesignContent";var dn=v.memo(We),pn=B({wrappedRoot:{width:"100%",position:"relative",transform:"translateX(0)",top:0,right:0,bottom:0,left:0,minWidth:"288px"}}),vn=function(n){var o=v.useRef(),i=v.useState(!0),e=i[0],r=i[1],a=z([n.snack.onClose,n.onClose]),s=function(){n.snack.requestClose&&a(null,"instructed",n.snack.id)},u=v.useCallback(function(){o.current=setTimeout(function(){r(function(L){return!L})},125)},[]);v.useEffect(function(){return function(){o.current&&clearTimeout(o.current)}},[]);var c=n.snack,l=n.classes,d=n.Component,p=d===void 0?dn:d,S=v.useMemo(function(){return un(l)},[l]),f=c.open,h=c.SnackbarProps,x=c.TransitionComponent,k=c.TransitionProps,C=c.transitionDuration,b=c.disableWindowBlurListener,T=c.content,y=F(c,["open","SnackbarProps","TransitionComponent","TransitionProps","transitionDuration","disableWindowBlurListener","content","entered","requestClose","onEnter","onEntered","onExit","onExited"]),w=m({direction:on(y.anchorOrigin),timeout:C},k),g=T;typeof g=="function"&&(g=g(y.id,y.message));var D=["onEnter","onEntered","onExit","onExited"].reduce(function(L,ee){var ne;return m({},L,(ne={},ne[ee]=z([n.snack[ee],n[ee]],y.id),ne))},{});return E.createElement(Pe,{in:e,onExited:D.onExited},E.createElement(_e,{open:f,id:y.id,disableWindowBlurListener:b,autoHideDuration:y.autoHideDuration,className:P(pn.wrappedRoot,S.root,S[sn(y.anchorOrigin)]),SnackbarProps:h,onClose:a},E.createElement(x,Object.assign({},w,{appear:!0,in:f,onExit:D.onExit,onExited:u,onEnter:D.onEnter,onEntered:z([D.onEntered,s],y.id)}),g||E.createElement(p,Object.assign({},y)))))},$,ae,Z,G,oe,N={view:{default:20,dense:4},snackbar:{default:6,dense:2}},ye="."+j.CollapseWrapper,se=16,Q=B({root:($={boxSizing:"border-box",display:"flex",maxHeight:"100%",position:"fixed",zIndex:1400,height:"auto",width:"auto",transition:A(["top","right","bottom","left","max-width"],{duration:300,easing:"ease"}),pointerEvents:"none"},$[ye]={padding:N.snackbar.default+"px 0px",transition:"padding 300ms ease 0ms"},$.maxWidth="calc(100% - "+N.view.default*2+"px)",$[R.downXs]={width:"100%",maxWidth:"calc(100% - "+se*2+"px)"},$),rootDense:(ae={},ae[ye]={padding:N.snackbar.dense+"px 0px"},ae),top:{top:N.view.default-N.snackbar.default+"px",flexDirection:"column"},bottom:{bottom:N.view.default-N.snackbar.default+"px",flexDirection:"column-reverse"},left:(Z={left:N.view.default+"px"},Z[R.upSm]={alignItems:"flex-start"},Z[R.downXs]={left:se+"px"},Z),right:(G={right:N.view.default+"px"},G[R.upSm]={alignItems:"flex-end"},G[R.downXs]={right:se+"px"},G),center:(oe={left:"50%",transform:"translateX(-50%)"},oe[R.upSm]={alignItems:"center"},oe)}),hn=function(n){var o=n.classes,i=o===void 0?{}:o,e=n.anchorOrigin,r=n.dense,a=n.children,s=P(j.SnackbarContainer,Q[e.vertical],Q[e.horizontal],Q.root,i.containerRoot,i["containerAnchorOrigin"+fe(e)],r&&Q.rootDense);return E.createElement("div",{className:s},a)},mn=v.memo(hn),we=function(n){var o=typeof n=="string"||v.isValidElement(n);return!o},gn,kn=function(t){Ne(n,t);function n(i){var e;return e=t.call(this,i)||this,e.enqueueSnackbar=function(r,a){if(a===void 0&&(a={}),r==null)throw new Error("enqueueSnackbar called with invalid argument");var s=we(r)?r:a,u=we(r)?r.message:r,c=s.key,l=s.preventDuplicate,d=F(s,["key","preventDuplicate"]),p=X(c),S=p?c:new Date().getTime()+Math.random(),f=an(d,e.props),h=m({id:S},d,{message:u,open:!0,entered:!1,requestClose:!1,persist:f("persist"),action:f("action"),content:f("content"),variant:f("variant"),anchorOrigin:f("anchorOrigin"),disableWindowBlurListener:f("disableWindowBlurListener"),autoHideDuration:f("autoHideDuration"),hideIconVariant:f("hideIconVariant"),TransitionComponent:f("TransitionComponent"),transitionDuration:f("transitionDuration"),TransitionProps:f("TransitionProps",!0),iconVariant:f("iconVariant",!0),style:f("style",!0),SnackbarProps:f("SnackbarProps",!0),className:P(e.props.className,d.className)});return h.persist&&(h.autoHideDuration=void 0),e.setState(function(x){if(l===void 0&&e.props.preventDuplicate||l){var k=function(y){return p?y.id===S:y.message===u},C=x.queue.findIndex(k)>-1,b=x.snacks.findIndex(k)>-1;if(C||b)return x}return e.handleDisplaySnack(m({},x,{queue:[].concat(x.queue,[h])}))}),S},e.handleDisplaySnack=function(r){var a=r.snacks;return a.length>=e.maxSnack?e.handleDismissOldest(r):e.processQueue(r)},e.processQueue=function(r){var a=r.queue,s=r.snacks;return a.length>0?m({},r,{snacks:[].concat(s,[a[0]]),queue:a.slice(1,a.length)}):r},e.handleDismissOldest=function(r){if(r.snacks.some(function(l){return!l.open||l.requestClose}))return r;var a=!1,s=!1,u=r.snacks.reduce(function(l,d){return l+(d.open&&d.persist?1:0)},0);u===e.maxSnack&&(s=!0);var c=r.snacks.map(function(l){return!a&&(!l.persist||s)?(a=!0,l.entered?(l.onClose&&l.onClose(null,"maxsnack",l.id),e.props.onClose&&e.props.onClose(null,"maxsnack",l.id),m({},l,{open:!1})):m({},l,{requestClose:!0})):m({},l)});return m({},r,{snacks:c})},e.handleEnteredSnack=function(r,a,s){if(!X(s))throw new Error("handleEnteredSnack Cannot be called with undefined key");e.setState(function(u){var c=u.snacks;return{snacks:c.map(function(l){return l.id===s?m({},l,{entered:!0}):m({},l)})}})},e.handleCloseSnack=function(r,a,s){e.props.onClose&&e.props.onClose(r,a,s);var u=s===void 0;e.setState(function(c){var l=c.snacks,d=c.queue;return{snacks:l.map(function(p){return!u&&p.id!==s?m({},p):p.entered?m({},p,{open:!1}):m({},p,{requestClose:!0})}),queue:d.filter(function(p){return p.id!==s})}})},e.closeSnackbar=function(r){var a=e.state.snacks.find(function(s){return s.id===r});X(r)&&a&&a.onClose&&a.onClose(null,"instructed",r),e.handleCloseSnack(null,"instructed",r)},e.handleExitedSnack=function(r,a){if(!X(a))throw new Error("handleExitedSnack Cannot be called with undefined key");e.setState(function(s){var u=e.processQueue(m({},s,{snacks:s.snacks.filter(function(c){return c.id!==a})}));return u.queue.length===0?u:e.handleDismissOldest(u)})},gn=e.enqueueSnackbar,e.closeSnackbar,e.state={snacks:[],queue:[],contextValue:{enqueueSnackbar:e.enqueueSnackbar.bind(ve(e)),closeSnackbar:e.closeSnackbar.bind(ve(e))}},e}var o=n.prototype;return o.render=function(){var e=this,r=this.state.contextValue,a=this.props,s=a.domRoot,u=a.children,c=a.dense,l=c===void 0?!1:c,d=a.Components,p=d===void 0?{}:d,S=a.classes,f=this.state.snacks.reduce(function(x,k){var C,b=fe(k.anchorOrigin),T=x[b]||[];return m({},x,(C={},C[b]=[].concat(T,[k]),C))},{}),h=Object.keys(f).map(function(x){var k=f[x],C=k[0];return E.createElement(mn,{key:x,dense:l,anchorOrigin:C.anchorOrigin,classes:S},k.map(function(b){return E.createElement(vn,{key:b.id,snack:b,classes:S,Component:p[b.variant],onClose:e.handleCloseSnack,onEnter:e.props.onEnter,onExit:e.props.onExit,onExited:z([e.handleExitedSnack,e.props.onExited],b.id),onEntered:z([e.handleEnteredSnack,e.props.onEntered],b.id)})}))});return E.createElement(Ke.Provider,{value:r},u,s?Te.createPortal(h,s):h)},Oe(n,[{key:"maxSnack",get:function(){return this.props.maxSnack||I.maxSnack}}]),n}(v.Component);export{bn as R,kn as S,gn as e,Te as r};
