import{j as t}from"./cm-1.0.29-B-jRz_ox.js";import{r as a}from"./redux-1.0.29-C1Q38y1F.js";import{e as x}from"./index-1.0.29-DNyiXtkx.js";import{l as u}from"./lib-1.0.29-C3pCU2AT.js";import{A as d,a as f}from"./AlertTitle-1.0.29-DGwwjnOl.js";import{I as h}from"./iconBase-1.0.29-DWX4ew0u.js";import"./vendor-1.0.29-BmpNFhoq.js";import"./loglevel-1.0.29-BZ7XahX3.js";import"./lodash-1.0.29-CLFJOMhY.js";import"./moment-1.0.29-C5S46NFB.js";import"./Typography-1.0.29-DKDDWYKJ.js";import"./createSvgIcon-1.0.29-DRHeS-Ok.js";import"./Close-1.0.29-DMVND8Dd.js";const w=({severity:e,message:i,now:p,close:m,setClose:o})=>{u.debug(e,i);const[r,s]=a.useState(null);a.useEffect(()=>{s({severity:e,message:i})},[e,i,p]);const n=()=>{s(null),o!==void 0&&o()},c=l=>l.charAt(0).toUpperCase()+l.slice(1);return t.jsx(t.Fragment,{children:r!==null&&t.jsxs(d,{className:"pp-alert",severity:r.severity,sx:{borderRadius:"4px"},action:m!==!1&&t.jsx(h,{onClick:n,sx:{width:"30px",height:"30px"},children:t.jsx(x,{})}),children:[t.jsx(f,{children:c(r.severity.toString())}),r.message]})})};export{w as default};
