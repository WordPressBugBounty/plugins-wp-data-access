import{j as r}from"./cm-1.0.24-lBsX3THK.js";import{r as l}from"./redux-1.0.24-Bx8jJ3ee.js";import{C as o}from"./ChartTypes-1.0.24-ot0OlSYz.js";import{F as u}from"./FormHelperText-1.0.24-dIoAVumM.js";import{I as c,S as h}from"./TextField-1.0.24-CX3Aj71c.js";import{M as x}from"./MenuItem-1.0.24-cnqjqUCU.js";import{L as d}from"./ListItemIcon-1.0.24-B7svPcXW.js";import{T as f}from"./Typography-1.0.24-DtpcakL_.js";const y=({chartType:s,setChartType:m,chartTypes:n,isTableChart:a})=>{const e=l.useMemo(()=>n.length>0?n:Object.keys(o).filter(t=>{if(a===!0&&t==="Table")return null;if(o[t]!==void 0)return t}),[n,a]),p=(t,i)=>r.jsxs(x,{value:t,sx:{"& .MuiListItemIcon-root":{minWidth:"0%",marginRight:"5px"}},children:[r.jsx(d,{children:i}),r.jsx(f,{component:"span",children:t.replace("Chart"," Chart")})]},t);return r.jsxs(u,{fullWidth:!0,children:[r.jsx(c,{variant:"outlined",children:"Chart Type"}),r.jsxs(h,{MenuProps:{id:"pp-select-chart"},value:e!=null&&e.includes(s)?s:"",label:"Chart Type",variant:"outlined",onChange:t=>{m(t.target.value)},className:"pp-chart-type",sx:{margin:0,backgroundColor:"white",textAlign:"left","& .MuiListItemIcon-root":{minWidth:"0%",marginLeft:"2px",marginRight:"5px"},"&.pp-chart-type .MuiSelect-select, &.pp-chart-type input":{padding:"16.5px 14px"}},children:[...e.map(t=>{const i=o[t];return p(t,r.jsx(i,{fontSize:"small"}))})]})]})};export{y as C};
