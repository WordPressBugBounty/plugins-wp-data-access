import{j as a}from"./cm-1.0.37-CEr77VZi.js";import{l as m,bt as f,bu as c,bv as E}from"./lib-1.0.37-Czwr-8r3.js";import{r as d}from"./redux-1.0.37-C4JSQ-MG.js";import{u as C,A as S}from"./AppTheme-1.0.37-DOXnENpA.js";import{u as h}from"./useTableSettings-1.0.37-iiTTwobj.js";import{u as j}from"./useStoreFormSettings-1.0.37-DetNzg9c.js";import{u as w}from"./useTheme-1.0.37-D4xQQypV.js";import{T as x}from"./ThemeProvider-1.0.37-Cyf1xy26.js";const A=o=>({}),F=({appId:o,children:i})=>{m.debug(o);const g=h(o),b=j(),T=w(),n=C(o);let s;n.appRootId===void 0&&(s=S(T,g,b));const t=A(),u=`pp-global-code-${o}`;return d.useEffect(()=>{var e;m.debug("open app"),f(((e=t.onAppOpen)==null?void 0:e.code)??"",c(n),!1)},[]),d.useEffect(()=>()=>{var e;m.debug("close app"),f(((e=t.onAppClose)==null?void 0:e.code)??"",c(n),!1)},[]),d.useEffect(()=>{var e,p,l;if(t!==void 0&&E(n)){(e=window.document.getElementById(u))==null||e.remove();const r=window.document.createElement("script");r.id=u,r.innerHTML=((p=t.global)==null?void 0:p.code)??"",(l=window.document.getElementById(`pp-app-${o}`))==null||l.appendChild(r)}},[t]),s!==void 0?a.jsx(x,{theme:s,children:i}):a.jsx(a.Fragment,{children:i})},P=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{F as T,P as a,A as u};
