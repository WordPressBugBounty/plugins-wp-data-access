import{j as o}from"./cm-1.0.36-c_d2YVSf.js";import{i as f}from"./lib-1.0.36-RK2jtnD_.js";import{s as p,a as h,u as g,e as C,c as y,g as B,b as T,C as N,d as j,f as E,T as S}from"./Typography-1.0.36-CpRCY5e-.js";import{r as I}from"./redux-1.0.36-Dw38apwx.js";function R(e={}){const{themeId:s,defaultTheme:r,defaultClassName:t="MuiBox-root",generateClassName:m}=e,l=p("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(h);return I.forwardRef(function(x,c){const n=g(r),{className:i,component:u="div",...d}=C(x);return o.jsx(l,{as:u,ref:c,className:y(i,m?m(t):t),theme:s&&n[s]||n,...d})})}const b=B("MuiBox",["root"]),M=j(),P=R({themeId:T,defaultTheme:M,defaultClassName:b.root,generateClassName:N.generate}),D=({title:e,align:s=f.CENTER})=>{const r={display:"grid",gridTemplateColumns:"auto auto",gridGap:"5px",justifyContent:s,alignItems:"center"},t={marginLeft:"10px"};return o.jsxs(P,{sx:r,children:[o.jsx(E,{}),e&&o.jsx(S,{sx:t,children:e})]})};export{P as B,D as S};
