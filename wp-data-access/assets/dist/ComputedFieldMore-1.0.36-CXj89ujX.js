import{j as e}from"./cm-1.0.36-c_d2YVSf.js";import{r as l}from"./redux-1.0.36-Dw38apwx.js";import{f as j}from"./index-1.0.36-Cdz_jNzK.js";import{l as g}from"./lib-1.0.36-RK2jtnD_.js";import{C}from"./ConfirmDialog-1.0.36-_-4q7QfI.js";import{w as M,q as b}from"./index-1.0.36-Dv-fkoQB.js";import{I as D}from"./iconBase-1.0.36-Cg_-P7_6.js";import{M as E}from"./Menu-1.0.36-BJc4ujw0.js";import{M as p}from"./MenuItem-1.0.36-BUF9VZzL.js";import"./vendor-1.0.36-CN03Eozo.js";import"./Typography-1.0.36-CpRCY5e-.js";import"./notistack-1.0.36-BWLrSPn1.js";import"./useEnhancedEffect-1.0.36-CTzd5Szc.js";import"./loglevel-1.0.36-BZ7XahX3.js";import"./lodash-1.0.36-DFhYoGis.js";import"./moment-1.0.36-C5S46NFB.js";import"./AdminTheme-1.0.36-Bhvs-n11.js";import"./ThemeProvider-1.0.36-BePdakPr.js";import"./isHostComponent-1.0.36-DVu5iVWx.js";import"./debounce-1.0.36-Be36O1Ab.js";import"./dividerClasses-1.0.36-cwzIcK9n.js";const K=({index:r,computedField:a,prepareComputedFieldUpdate:m,deleteComputedField:d})=>{g.debug(r,a);const[i,t]=l.useState(null),n=!!i,c=o=>{t(o.currentTarget),o.stopPropagation()},u=()=>{t(null)},f=o=>{m(r),t(null),o.stopPropagation()},h=o=>{s(!0),t(null),o.stopPropagation()},[x,s]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(D,{id:"pp-computed-field-more-button","aria-controls":n?"pp-computed-field-more-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:c,children:e.jsx(j,{})}),e.jsxs(E,{id:"pp-computed-field-more-menu",anchorEl:i,open:n,onClose:u,MenuListProps:{"aria-labelledby":"pp-computed-field-more-button"},sx:{zIndex:9999999999},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsxs(p,{onClick:f,children:[e.jsx(M,{}),e.jsx("span",{style:{marginLeft:"10px"},children:"Edit"})]}),e.jsxs(p,{onClick:h,children:[e.jsx(b,{}),e.jsx("span",{style:{marginLeft:"10px"},children:"Delete"})]})]}),e.jsx(C,{title:"Delete computed field?",message:"Are you sure you want to delete this computed field? This action cannot be undone!",open:x,setOpen:s,onConfirm:()=>d(r)})]})};export{K as default};
