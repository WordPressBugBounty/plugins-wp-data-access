import{r as l}from"./redux-1.0.24-Bx8jJ3ee.js";import{q as _e,t as Pe,D as De,G as Ae,d as j,b as Ve,v as Ke,a as Oe}from"./Typography-1.0.24-DtpcakL_.js";import{j as g}from"./cm-1.0.24-lBsX3THK.js";const pe=l.createContext(null);function F(){return l.useContext(pe)}const Re=typeof Symbol=="function"&&Symbol.for,Ne=Re?Symbol.for("mui.nested"):"__THEME_NESTED__";function We(e,t){return typeof t=="function"?t(e):{...e,...t}}function Ge(e){const{children:t,theme:r}=e,i=F(),C=l.useMemo(()=>{const m=i===null?{...r}:We(i,r);return m!=null&&(m[Ne]=i!==null),m},[r,i]);return g.jsx(pe.Provider,{value:C,children:t})}const ke=l.createContext();function He({value:e,...t}){return g.jsx(ke.Provider,{value:e??!0,...t})}const tt=()=>l.useContext(ke)??!1,Se={};function ge(e,t,r,i=!1){return l.useMemo(()=>{const C=e&&t[e]||t;if(typeof r=="function"){const m=r(C),o=e?{...t,[e]:m}:m;return i?()=>o:o}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,i])}function xe(e){const{children:t,theme:r,themeId:i}=e,C=_e(Se),m=F()||Se,o=ge(i,C,r),u=ge(i,m,r,!0),w=(i?o[i]:o).direction==="rtl";return g.jsx(Ge,{theme:u,children:g.jsx(Pe.Provider,{value:o,children:g.jsx(He,{value:w,children:g.jsx(De,{value:i?o[i].components:o.components,children:t})})})})}const U="mode",Y="color-scheme",qe="data-color-scheme";function Fe(e){const{defaultMode:t="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:i="dark",modeStorageKey:C=U,colorSchemeStorageKey:m=Y,attribute:o=qe,colorSchemeNode:u="document.documentElement",nonce:w}=e||{};let f="",y=o;if(o==="class"&&(y=".%s"),o==="data"&&(y="[data-%s]"),y.startsWith(".")){const S=y.substring(1);f+=`${u}.classList.remove('${S}'.replace('%s', light), '${S}'.replace('%s', dark));
      ${u}.classList.add('${S}'.replace('%s', colorScheme));`}const k=y.match(/\[([^\]]+)\]/);if(k){const[S,T]=k[1].split("=");T||(f+=`${u}.removeAttribute('${S}'.replace('%s', light));
      ${u}.removeAttribute('${S}'.replace('%s', dark));`),f+=`
      ${u}.setAttribute('${S}'.replace('%s', colorScheme), ${T?`${T}.replace('%s', colorScheme)`:'""'});`}else f+=`${u}.setAttribute('${y}', colorScheme);`;return g.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?w:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${C}') || '${t}';
  const dark = localStorage.getItem('${m}-dark') || '${i}';
  const light = localStorage.getItem('${m}-light') || '${r}';
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
    ${f}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function ye(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Me(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function Ue(e){return Me(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function q(e,t){if(typeof window>"u")return;let r;try{r=localStorage.getItem(e)||void 0,r||localStorage.setItem(e,t)}catch{}return r||t}function Ye(e){const{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:i,supportedColorSchemes:C=[],modeStorageKey:m=U,colorSchemeStorageKey:o=Y,storageWindow:u=typeof window>"u"?void 0:window,noSsr:w=!1}=e,f=C.join(","),y=C.length>1,[k,S]=l.useState(()=>{const s=q(m,t),c=q(`${o}-light`,r),n=q(`${o}-dark`,i);return{mode:s,systemMode:ye(s),lightColorScheme:c,darkColorScheme:n}}),[T,z]=l.useState(w||!y);l.useEffect(()=>{z(!0)},[]);const L=Ue(k),I=l.useCallback(s=>{S(c=>{if(s===c.mode)return c;const n=s??t;try{localStorage.setItem(m,n)}catch{}return{...c,mode:n,systemMode:ye(n)}})},[m,t]),$=l.useCallback(s=>{s?typeof s=="string"?s&&!f.includes(s)?console.error(`\`${s}\` does not exist in \`theme.colorSchemes\`.`):S(c=>{const n={...c};return Me(c,h=>{try{localStorage.setItem(`${o}-${h}`,s)}catch{}h==="light"&&(n.lightColorScheme=s),h==="dark"&&(n.darkColorScheme=s)}),n}):S(c=>{const n={...c},h=s.light===null?r:s.light,E=s.dark===null?i:s.dark;if(h)if(!f.includes(h))console.error(`\`${h}\` does not exist in \`theme.colorSchemes\`.`);else{n.lightColorScheme=h;try{localStorage.setItem(`${o}-light`,h)}catch{}}if(E)if(!f.includes(E))console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`);else{n.darkColorScheme=E;try{localStorage.setItem(`${o}-dark`,E)}catch{}}return n}):S(c=>{try{localStorage.setItem(`${o}-light`,r),localStorage.setItem(`${o}-dark`,i)}catch{}return{...c,lightColorScheme:r,darkColorScheme:i}})},[f,o,r,i]),P=l.useCallback(s=>{k.mode==="system"&&S(c=>{const n=s!=null&&s.matches?"dark":"light";return c.systemMode===n?c:{...c,systemMode:n}})},[k.mode]),D=l.useRef(P);return D.current=P,l.useEffect(()=>{if(typeof window.matchMedia!="function"||!y)return;const s=(...n)=>D.current(...n),c=window.matchMedia("(prefers-color-scheme: dark)");return c.addListener(s),s(c),()=>{c.removeListener(s)}},[y]),l.useEffect(()=>{if(u&&y){const s=c=>{const n=c.newValue;typeof c.key=="string"&&c.key.startsWith(o)&&(!n||f.match(n))&&(c.key.endsWith("light")&&$({light:n}),c.key.endsWith("dark")&&$({dark:n})),c.key===m&&(!n||["light","dark","system"].includes(n))&&I(n||t)};return u.addEventListener("storage",s),()=>{u.removeEventListener("storage",s)}}},[$,I,m,o,f,t,u,y]),{...k,mode:T?k.mode:void 0,systemMode:T?k.systemMode:void 0,colorScheme:T?L:void 0,setMode:I,setColorScheme:$}}const ze="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Be(e){const{themeId:t,theme:r={},modeStorageKey:i=U,colorSchemeStorageKey:C=Y,disableTransitionOnChange:m=!1,defaultColorScheme:o,resolveTheme:u}=e,w={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},f=l.createContext(void 0),y=()=>l.useContext(f)||w;function k(L){var ae,de,me,he,ue;const{children:I,theme:$,modeStorageKey:P=i,colorSchemeStorageKey:D=C,disableTransitionOnChange:s=m,storageWindow:c=typeof window>"u"?void 0:window,documentNode:n=typeof document>"u"?void 0:document,colorSchemeNode:h=typeof document>"u"?void 0:document.documentElement,disableNestedContext:E=!1,disableStyleSheetGeneration:K=!1,defaultMode:Te="system",noSsr:$e}=L,O=l.useRef(!1),R=F(),N=l.useContext(f),W=!!N&&!E,B=l.useMemo(()=>$||(typeof r=="function"?r():r),[$]),Q=B[t],{colorSchemes:b={},components:we={},cssVarPrefix:J,...M}=Q||B,X=Object.keys(b).filter(a=>!!b[a]).join(","),v=l.useMemo(()=>X.split(","),[X]),Z=typeof o=="string"?o:o.light,ee=typeof o=="string"?o:o.dark,Ee=b[Z]&&b[ee]?Te:((de=(ae=b[M.defaultColorScheme])==null?void 0:ae.palette)==null?void 0:de.mode)||((me=M.palette)==null?void 0:me.mode),{mode:be,setMode:te,systemMode:oe,lightColorScheme:re,darkColorScheme:ne,colorScheme:ve,setColorScheme:se}=Ye({supportedColorSchemes:v,defaultLightColorScheme:Z,defaultDarkColorScheme:ee,modeStorageKey:P,colorSchemeStorageKey:D,defaultMode:Ee,storageWindow:c,noSsr:$e});let G=be,x=ve;W&&(G=N.mode,x=N.colorScheme);const ce=x||M.defaultColorScheme,je=((he=M.generateThemeVars)==null?void 0:he.call(M))||M.vars,p={...M,components:we,colorSchemes:b,cssVarPrefix:J,vars:je};if(typeof p.generateSpacing=="function"&&(p.spacing=p.generateSpacing()),ce){const a=b[ce];a&&typeof a=="object"&&Object.keys(a).forEach(d=>{a[d]&&typeof a[d]=="object"?p[d]={...p[d],...a[d]}:p[d]=a[d]})}const _=M.colorSchemeSelector;l.useEffect(()=>{if(x&&h&&_&&_!=="media"){const a=_;let d=_;if(a==="class"&&(d=".%s"),a==="data"&&(d="[data-%s]"),a!=null&&a.startsWith("data-")&&!a.includes("%s")&&(d=`[${a}="%s"]`),d.startsWith("."))h.classList.remove(...v.map(A=>d.substring(1).replace("%s",A))),h.classList.add(d.substring(1).replace("%s",x));else{const A=d.replace("%s",x).match(/\[([^\]]+)\]/);if(A){const[fe,H]=A[1].split("=");H||v.forEach(Ie=>{h.removeAttribute(fe.replace(x,Ie))}),h.setAttribute(fe,H?H.replace(/"|'/g,""):"")}else h.setAttribute(d,x)}}},[x,_,h,v]),l.useEffect(()=>{let a;if(s&&O.current&&n){const d=n.createElement("style");d.appendChild(n.createTextNode(ze)),n.head.appendChild(d),window.getComputedStyle(n.body),a=setTimeout(()=>{n.head.removeChild(d)},1)}return()=>{clearTimeout(a)}},[x,s,n]),l.useEffect(()=>(O.current=!0,()=>{O.current=!1}),[]);const Le=l.useMemo(()=>({allColorSchemes:v,colorScheme:x,darkColorScheme:ne,lightColorScheme:re,mode:G,setColorScheme:se,setMode:te,systemMode:oe}),[v,x,ne,re,G,se,te,oe,p.colorSchemeSelector]);let ie=!0;(K||M.cssVariables===!1||W&&(R==null?void 0:R.cssVarPrefix)===J)&&(ie=!1);const le=g.jsxs(l.Fragment,{children:[g.jsx(xe,{themeId:Q?t:void 0,theme:u?u(p):p,children:I}),ie&&g.jsx(Ae,{styles:((ue=p.generateStyleSheets)==null?void 0:ue.call(p))||[]})]});return W?le:g.jsx(f.Provider,{value:Le,children:le})}const S=typeof o=="string"?o:o.light,T=typeof o=="string"?o:o.dark;return{CssVarsProvider:k,useColorScheme:y,getInitColorSchemeScript:L=>Fe({colorSchemeStorageKey:C,defaultLightColorScheme:S,defaultDarkColorScheme:T,modeStorageKey:i,...L})}}function Ce({theme:e,...t}){const r=j in e?e[j]:void 0;return g.jsx(xe,{...t,themeId:r?j:void 0,theme:r||e})}const V={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:Qe,useColorScheme:ot,getInitColorSchemeScript:rt}=Be({themeId:j,theme:()=>Ve({cssVariables:!0}),colorSchemeStorageKey:V.colorSchemeStorageKey,modeStorageKey:V.modeStorageKey,defaultColorScheme:{light:V.defaultLightColorScheme,dark:V.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:Ke(e.palette,e.typography)};return t.unstable_sx=function(i){return Oe({sx:i,theme:this})},t}}),Je=Qe;function nt({theme:e,...t}){return typeof e=="function"?g.jsx(Ce,{theme:e,...t}):"colorSchemes"in(j in e?e[j]:e)?g.jsx(Je,{theme:e,...t}):g.jsx(Ce,{theme:e,...t})}export{nt as T,tt as u};