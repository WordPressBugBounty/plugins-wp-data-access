import{r as a}from"./redux-1.0.34-BykGtd51.js";import{o as _e,p as De,D as Ve,G as Re,b as P,d as Te,q as Ke,a as We}from"./Typography-1.0.34-CPcqRq0L.js";import{j as f}from"./cm-1.0.34-jkgb9fqk.js";import{u as Fe}from"./useEnhancedEffect-1.0.34-BO4gRPLZ.js";import{l as Ne,B as Se,y as ge}from"./lib-1.0.34-CKToGW0d.js";const ke=a.createContext(null);function Y(){return a.useContext(ke)}const ze=typeof Symbol=="function"&&Symbol.for,Be=ze?Symbol.for("mui.nested"):"__THEME_NESTED__";function He(e,t){return typeof t=="function"?t(e):{...e,...t}}function Ge(e){const{children:t,theme:r}=e,c=Y(),p=a.useMemo(()=>{const l=c===null?{...r}:He(c,r);return l!=null&&(l[Be]=c!==null),l},[r,c]);return f.jsx(ke.Provider,{value:p,children:t})}const be=a.createContext();function qe({value:e,...t}){return f.jsx(be.Provider,{value:e??!0,...t})}const ct=()=>a.useContext(be)??!1,pe={};function ye(e,t,r,c=!1){return a.useMemo(()=>{const p=e&&t[e]||t;if(typeof r=="function"){const l=r(p),o=e?{...t,[e]:l}:l;return c?()=>o:o}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,c])}function we(e){const{children:t,theme:r,themeId:c}=e,p=_e(pe),l=Y()||pe,o=ye(c,p,r),d=ye(c,l,r,!0),L=(c?o[c]:o).direction==="rtl";return f.jsx(Ge,{theme:d,children:f.jsx(De.Provider,{value:o,children:f.jsx(qe,{value:L,children:f.jsx(Ve,{value:c?o[c].components:o.components,children:t})})})})}const Q="mode",J="color-scheme",Ue="data-color-scheme";function Ye(e){const{defaultMode:t="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:c="dark",modeStorageKey:p=Q,colorSchemeStorageKey:l=J,attribute:o=Ue,colorSchemeNode:d="document.documentElement",nonce:L}=e||{};let m="",S=o;if(o==="class"&&(S=".%s"),o==="data"&&(S="[data-%s]"),S.startsWith(".")){const u=S.substring(1);m+=`${d}.classList.remove('${u}'.replace('%s', light), '${u}'.replace('%s', dark));
      ${d}.classList.add('${u}'.replace('%s', colorScheme));`}const T=S.match(/\[([^\]]+)\]/);if(T){const[u,w]=T[1].split("=");w||(m+=`${d}.removeAttribute('${u}'.replace('%s', light));
      ${d}.removeAttribute('${u}'.replace('%s', dark));`),m+=`
      ${d}.setAttribute('${u}'.replace('%s', colorScheme), ${w?`${w}.replace('%s', colorScheme)`:'""'});`}else m+=`${d}.setAttribute('${S}', colorScheme);`;return f.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?L:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${p}') || '${t}';
  const dark = localStorage.getItem('${l}-dark') || '${c}';
  const light = localStorage.getItem('${l}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${m}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function Ce(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function $e(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function Qe(e){return $e(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function U(e,t){if(typeof window>"u")return;let r;try{r=localStorage.getItem(e)||void 0,r||localStorage.setItem(e,t)}catch{}return r||t}function Je(e){const{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:c,supportedColorSchemes:p=[],modeStorageKey:l=Q,colorSchemeStorageKey:o=J,storageWindow:d=typeof window>"u"?void 0:window,noSsr:L=!1}=e,m=p.join(","),S=p.length>1,[T,u]=a.useState(()=>{const n=U(l,t),s=U(`${o}-light`,r),i=U(`${o}-dark`,c);return{mode:n,systemMode:Ce(n),lightColorScheme:s,darkColorScheme:i}}),[w,W]=a.useState(L||!S);a.useEffect(()=>{W(!0)},[]);const F=Qe(T),V=a.useCallback(n=>{u(s=>{if(n===s.mode)return s;const i=n??t;try{localStorage.setItem(l,i)}catch{}return{...s,mode:i,systemMode:Ce(i)}})},[l,t]),v=a.useCallback(n=>{n?typeof n=="string"?n&&!m.includes(n)?console.error(`\`${n}\` does not exist in \`theme.colorSchemes\`.`):u(s=>{const i={...s};return $e(s,k=>{try{localStorage.setItem(`${o}-${k}`,n)}catch{}k==="light"&&(i.lightColorScheme=n),k==="dark"&&(i.darkColorScheme=n)}),i}):u(s=>{const i={...s},k=n.light===null?r:n.light,y=n.dark===null?c:n.dark;if(k)if(!m.includes(k))console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`);else{i.lightColorScheme=k;try{localStorage.setItem(`${o}-light`,k)}catch{}}if(y)if(!m.includes(y))console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`);else{i.darkColorScheme=y;try{localStorage.setItem(`${o}-dark`,y)}catch{}}return i}):u(s=>{try{localStorage.setItem(`${o}-light`,r),localStorage.setItem(`${o}-dark`,c)}catch{}return{...s,lightColorScheme:r,darkColorScheme:c}})},[m,o,r,c]),R=a.useCallback(n=>{T.mode==="system"&&u(s=>{const i=n!=null&&n.matches?"dark":"light";return s.systemMode===i?s:{...s,systemMode:i}})},[T.mode]),j=a.useRef(R);return j.current=R,a.useEffect(()=>{if(typeof window.matchMedia!="function"||!S)return;const n=(...i)=>j.current(...i),s=window.matchMedia("(prefers-color-scheme: dark)");return s.addListener(n),n(s),()=>{s.removeListener(n)}},[S]),a.useEffect(()=>{if(d&&S){const n=s=>{const i=s.newValue;typeof s.key=="string"&&s.key.startsWith(o)&&(!i||m.match(i))&&(s.key.endsWith("light")&&v({light:i}),s.key.endsWith("dark")&&v({dark:i})),s.key===l&&(!i||["light","dark","system"].includes(i))&&V(i||t)};return d.addEventListener("storage",n),()=>{d.removeEventListener("storage",n)}}},[v,V,l,o,m,t,d,S]),{...T,mode:w?T.mode:void 0,systemMode:w?T.systemMode:void 0,colorScheme:w?F:void 0,setMode:V,setColorScheme:v}}const Xe="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ze(e){const{themeId:t,theme:r={},modeStorageKey:c=Q,colorSchemeStorageKey:p=J,disableTransitionOnChange:l=!1,defaultColorScheme:o,resolveTheme:d}=e,L={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},m=a.createContext(void 0),S=()=>a.useContext(m)||L,T={},u={};function w(v){var me,ue,he,fe;const{children:R,theme:j,modeStorageKey:n=c,colorSchemeStorageKey:s=p,disableTransitionOnChange:i=l,storageWindow:k=typeof window>"u"?void 0:window,documentNode:y=typeof document>"u"?void 0:document,colorSchemeNode:$=typeof document>"u"?void 0:document.documentElement,disableNestedContext:Ee=!1,disableStyleSheetGeneration:ve=!1,defaultMode:Ie="system",noSsr:Le}=v,N=a.useRef(!1),z=Y(),B=a.useContext(m),H=!!B&&!Ee,X=a.useMemo(()=>j||(typeof r=="function"?r():r),[j]),Z=X[t],x=Z||X,{colorSchemes:I=T,components:ee=u,cssVarPrefix:G}=x,te=Object.keys(I).filter(h=>!!I[h]).join(","),O=a.useMemo(()=>te.split(","),[te]),oe=typeof o=="string"?o:o.light,re=typeof o=="string"?o:o.dark,je=I[oe]&&I[re]?Ie:((ue=(me=I[x.defaultColorScheme])==null?void 0:me.palette)==null?void 0:ue.mode)||((he=x.palette)==null?void 0:he.mode),{mode:Oe,setMode:ne,systemMode:se,lightColorScheme:ie,darkColorScheme:ce,colorScheme:Pe,setColorScheme:ae}=Je({supportedColorSchemes:O,defaultLightColorScheme:oe,defaultDarkColorScheme:re,modeStorageKey:n,colorSchemeStorageKey:s,defaultMode:je,storageWindow:k,noSsr:Le});let q=Oe,M=Pe;H&&(q=B.mode,M=B.colorScheme);const A=a.useMemo(()=>{var D;const h=M||x.defaultColorScheme,g=((D=x.generateThemeVars)==null?void 0:D.call(x))||x.vars,C={...x,components:ee,colorSchemes:I,cssVarPrefix:G,vars:g};if(typeof C.generateSpacing=="function"&&(C.spacing=C.generateSpacing()),h){const b=I[h];b&&typeof b=="object"&&Object.keys(b).forEach(E=>{b[E]&&typeof b[E]=="object"?C[E]={...C[E],...b[E]}:C[E]=b[E]})}return d?d(C):C},[x,M,ee,I,G]),_=x.colorSchemeSelector;Fe(()=>{if(M&&$&&_&&_!=="media"){const h=_;let g=_;if(h==="class"&&(g=".%s"),h==="data"&&(g="[data-%s]"),h!=null&&h.startsWith("data-")&&!h.includes("%s")&&(g=`[${h}="%s"]`),g.startsWith("."))$.classList.remove(...O.map(C=>g.substring(1).replace("%s",C))),$.classList.add(g.substring(1).replace("%s",M));else{const C=g.replace("%s",M).match(/\[([^\]]+)\]/);if(C){const[D,b]=C[1].split("=");b||O.forEach(E=>{$.removeAttribute(D.replace(M,E))}),$.setAttribute(D,b?b.replace(/"|'/g,""):"")}else $.setAttribute(g,M)}}},[M,_,$,O]),a.useEffect(()=>{let h;if(i&&N.current&&y){const g=y.createElement("style");g.appendChild(y.createTextNode(Xe)),y.head.appendChild(g),window.getComputedStyle(y.body),h=setTimeout(()=>{y.head.removeChild(g)},1)}return()=>{clearTimeout(h)}},[M,i,y]),a.useEffect(()=>(N.current=!0,()=>{N.current=!1}),[]);const Ae=a.useMemo(()=>({allColorSchemes:O,colorScheme:M,darkColorScheme:ce,lightColorScheme:ie,mode:q,setColorScheme:ae,setMode:ne,systemMode:se}),[O,M,ce,ie,q,ae,ne,se,A.colorSchemeSelector]);let le=!0;(ve||x.cssVariables===!1||H&&(z==null?void 0:z.cssVarPrefix)===G)&&(le=!1);const de=f.jsxs(a.Fragment,{children:[f.jsx(we,{themeId:Z?t:void 0,theme:A,children:R}),le&&f.jsx(Re,{styles:((fe=A.generateStyleSheets)==null?void 0:fe.call(A))||[]})]});return H?de:f.jsx(m.Provider,{value:Ae,children:de})}const W=typeof o=="string"?o:o.light,F=typeof o=="string"?o:o.dark;return{CssVarsProvider:w,useColorScheme:S,getInitColorSchemeScript:v=>Ye({colorSchemeStorageKey:p,defaultLightColorScheme:W,defaultDarkColorScheme:F,modeStorageKey:c,...v})}}function xe({theme:e,...t}){const r=P in e?e[P]:void 0;return f.jsx(we,{...t,themeId:r?P:void 0,theme:r||e})}const K={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:et}=Ze({themeId:P,theme:()=>Te({cssVariables:!0}),colorSchemeStorageKey:K.colorSchemeStorageKey,modeStorageKey:K.modeStorageKey,defaultColorScheme:{light:K.defaultLightColorScheme,dark:K.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:Ke(e.palette,e.typography)};return t.unstable_sx=function(c){return We({sx:c,theme:this})},t}}),tt=et;function at({theme:e,...t}){return typeof e=="function"?f.jsx(xe,{theme:e,...t}):"colorSchemes"in(P in e?e[P]:e)?f.jsx(tt,{theme:e,...t}):f.jsx(xe,{theme:e,...t})}let Me;const lt=()=>{const e="4px";return Ne.debug("init admin theme"),Me=Te({palette:{mode:"light",primary:{main:ge[900]},secondary:{main:ge[200]}},typography:{fontFamily:"inherit",fontSize:void 0},components:{MuiPaper:{styleOverrides:{root:{borderRadius:e}}},MuiToolbar:{styleOverrides:{root:{borderRadius:e}}},MuiInputBase:{styleOverrides:{root:{input:{color:Se[900],backgroundColor:"transparent",borderColor:"rgba(0, 0, 0, 0.23)",fontWeight:"normal",padding:"16.5px 14px",border:"none"},"input:focus, textarea:focus":{boxShadow:"none",outline:"none"}}}},MuiFormControlLabel:{styleOverrides:{label:{fontSize:"1rem"}}},MuiFormLabel:{styleOverrides:{root:{borderRadius:e,fontSize:"1rem"}}},MuiInputLabel:{defaultProps:{shrink:!0}},MuiOutlinedInput:{defaultProps:{notched:!0}},MuiFormHelperText:{styleOverrides:{root:{fontSize:"0.75rem"}}},MuiAccordionSummary:{styleOverrides:{root:{fontSize:19,marginTop:"1px","&.Mui-focusVisible":{backgroundColor:"unset !important"}},content:{fontWeight:"normal",padding:"20px 20px 20px 20px"}}},MuiAccordionDetails:{styleOverrides:{root:{margin:"0 40px 45px 40px",padding:0}}},MuiLink:{styleOverrides:{root:{color:Se[700]}}},MuiSimpleTreeView:{styleOverrides:{root:{"& li.pp-data-exporer-database-tree-item":{borderBottom:"1px solid #ddd"},"& li.pp-data-exporer-database-tree-item:nth-last-of-type(1)":{borderBottom:"none"},"& li.pp-data-exporer-database-tree-item:nth-of-type(odd)":{backgroundColor:"#f9f9f9"},"& .MuiTreeItem-groupTransition":{paddingLeft:"25px"},"& .MuiTreeItem-groupTransition .MuiTreeItem-groupTransition":{paddingLeft:"27px"},"& .MuiTreeItem-groupTransition .MuiTreeItem-groupTransition .MuiTreeItem-groupTransition":{paddingLeft:"26px"}}}},MuiTreeItem:{styleOverrides:{root:{"& .MuiTreeItem-content":{borderRadius:0},"& .MuiTreeItem-groupTransition .MuiTreeItem-content":{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"}}}}},zIndex:{drawer:9999999,modal:99999990,tooltip:99999999,snackbar:999999999}}),Me};export{Me as A,at as T,lt as a,ct as u};
