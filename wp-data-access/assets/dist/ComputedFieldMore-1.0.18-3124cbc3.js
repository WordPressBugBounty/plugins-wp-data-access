import{l as j,r as l,j as e}from"./main-1.0.18.js";import{f as g}from"./index.esm-1.0.18-12f13c4a.js";import{C}from"./ConfirmDialog-1.0.18-eb1f3988.js";import{v as M,i as b}from"./index.esm-1.0.18-32f5cee0.js";import{I as D}from"./iconBase-1.0.18-3c21f5e2.js";import{M as E}from"./Menu-1.0.18-e8cb0649.js";import{M as a}from"./MenuItem-1.0.18-0088f2a2.js";import"./Typography-1.0.18-dc3c0740.js";import"./AdminTheme-1.0.18-73e13a4f.js";import"./DialogContent-1.0.18-5570cba4.js";import"./Modal-1.0.18-870f459d.js";import"./CardContent-1.0.18-3d5e5525.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Popover-1.0.18-54868205.js";import"./Grow-1.0.18-4ebc2ce8.js";const U=({index:r,computedField:p,prepareComputedFieldUpdate:m,deleteComputedField:c})=>{j.debug(r,p);const[i,t]=l.useState(null),n=!!i,d=o=>{t(o.currentTarget),o.stopPropagation()},u=()=>{t(null)},f=o=>{m(r),t(null),o.stopPropagation()},h=o=>{s(!0),t(null),o.stopPropagation()},[x,s]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(D,{id:"pp-computed-field-more-button","aria-controls":n?"pp-computed-field-more-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:d,children:e.jsx(g,{})}),e.jsxs(E,{id:"pp-computed-field-more-menu",anchorEl:i,open:n,onClose:u,MenuListProps:{"aria-labelledby":"pp-computed-field-more-button"},sx:{zIndex:9999999999},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsxs(a,{onClick:f,children:[e.jsx(M,{}),e.jsx("span",{style:{marginLeft:"10px"},children:"Edit"})]}),e.jsxs(a,{onClick:h,children:[e.jsx(b,{}),e.jsx("span",{style:{marginLeft:"10px"},children:"Delete"})]})]}),e.jsx(C,{title:"Delete computed field?",message:"Are you sure you want to delete this computed field? This action cannot be undone!",open:x,setOpen:s,onConfirm:()=>c(r)})]})};export{U as default};
