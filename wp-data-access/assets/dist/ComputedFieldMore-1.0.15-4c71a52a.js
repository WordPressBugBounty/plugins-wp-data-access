import{l as j,r as l,j as e}from"./main-1.0.15.js";import{l as g}from"./main-1.0.15-e2ad00f6.js";import{C}from"./settings-1.0.15-3913c57c.js";import{l as M,h as b}from"./index.esm-1.0.15-3dc3cbe3.js";import{I as D}from"./iconBase-1.0.15-5866dbfd.js";import{M as E}from"./Menu-1.0.15-3ae4ddd1.js";import{M as a}from"./MenuItem-1.0.15-cb0e11e9.js";import"./FormControlLabel-1.0.15-2f48df6c.js";import"./TextField-1.0.15-73384817.js";import"./Close-1.0.15-8d33e66c.js";import"./useScreenSize-1.0.15-a1dd46fa.js";import"./DialogContent-1.0.15-e50a43f8.js";import"./Tabs-1.0.15-c2b715a3.js";const w=({index:r,computedField:p,prepareComputedFieldUpdate:m,deleteComputedField:c})=>{j.debug(r,p);const[i,t]=l.useState(null),n=!!i,d=o=>{t(o.currentTarget),o.stopPropagation()},u=()=>{t(null)},f=o=>{m(r),t(null),o.stopPropagation()},h=o=>{s(!0),t(null),o.stopPropagation()},[x,s]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(D,{id:"pp-computed-field-more-button","aria-controls":n?"pp-computed-field-more-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:d,children:e.jsx(g,{})}),e.jsxs(E,{id:"pp-computed-field-more-menu",anchorEl:i,open:n,onClose:u,MenuListProps:{"aria-labelledby":"pp-computed-field-more-button"},sx:{zIndex:9999999999},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsxs(a,{onClick:f,children:[e.jsx(M,{}),e.jsx("span",{style:{marginLeft:"10px"},children:"Edit"})]}),e.jsxs(a,{onClick:h,children:[e.jsx(b,{}),e.jsx("span",{style:{marginLeft:"10px"},children:"Delete"})]})]}),e.jsx(C,{title:"Delete computed field?",message:"Are you sure you want to delete this computed field? This action cannot be undone!",open:x,setOpen:s,onConfirm:()=>c(r)})]})};export{w as default};
