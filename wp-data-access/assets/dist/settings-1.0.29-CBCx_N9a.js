import{j as o}from"./cm-1.0.29-B-jRz_ox.js";import{r as d}from"./redux-1.0.29-C1Q38y1F.js";import{T as h,G as f}from"./index-1.0.29-Dlm2kjka.js";import{B as g}from"./Spinner-1.0.29-BS14fgdJ.js";import{B as j}from"./CardContent-1.0.29-D9omFsvB.js";import{T as l}from"./Typography-1.0.29-DKDDWYKJ.js";import{M}from"./Menu-1.0.29-DOOr2lTO.js";import{M as v}from"./MenuItem-1.0.29-hQUyAg_Q.js";const I=({menuItems:t,menuIndex:c,setMenu:p,hide:e})=>{const[s,a]=d.useState(null),m=!!s,x=r=>{a(r.currentTarget),r.stopPropagation()},i=()=>{a(null)},u=(r,n)=>o.jsxs(v,{onClick:()=>{p(n),i()},sx:{display:"flex",gap:"10px",alignItems:"center"},children:[r.icon,o.jsx(l,{variant:"h6",noWrap:!0,component:"div",className:"unselectable",sx:{fontSize:"1.1rem"},children:r.title})]},n);return o.jsx(h,{sx:{backgroundColor:"grey",borderRadius:0},children:o.jsxs(g,{sx:{position:"relative"},children:[o.jsx(j,{onClick:x,startIcon:o.jsx(f,{size:24}),sx:{color:"inherit",textTransform:"none"},children:o.jsx(l,{variant:"h6",noWrap:!0,component:"div",className:"unselectable",children:t[c].title})}),o.jsx(M,{anchorEl:s,open:m,onClose:i,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},sx:{marginTop:"8px","& ul":{padding:"0 !important"},"& ul li":{padding:"12px 24px 12px 18px !important"}},children:t.map((r,n)=>e!==void 0&&e.includes(n)?null:u(r,n))})]})})};export{I as B};
