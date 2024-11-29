import{l as n,r as u,j as r,e as o,C as a}from"./main-1.0.23.js";import{v as x,w as f}from"./index.esm-1.0.23-ba0465a2.js";import{c as h}from"./ActionsSettings-1.0.23-a601e9bf.js";import{S as j}from"./ScopeEnum-1.0.23-7caf102d.js";import{T as m}from"./TargetEnum-1.0.23-b82380d5.js";import{C as v}from"./ConfirmDialog-1.0.23-f318040f.js";import{A as S,a as T}from"./AccordionSummary-1.0.23-078f8091.js";import{A as C}from"./AccordionDetails-1.0.23-ad785ba6.js";import{F as R,a as A}from"./FormHelperText-1.0.23-83597bdf.js";import{B as c}from"./CardContent-1.0.23-cd3f2c87.js";import"./Typography-1.0.23-19a0fd3e.js";import"./iconBase-1.0.23-43ac6f06.js";import"./RestApi-1.0.23-cc179eb9.js";import"./AdminTheme-1.0.23-7044caf5.js";import"./DialogContent-1.0.23-79893b13.js";import"./Modal-1.0.23-3fe42627.js";import"./index-1.0.23-9af490ae.js";import"./useSlot-1.0.23-b9d48820.js";import"./useControlled-1.0.23-1e71c28b.js";import"./Collapse-1.0.23-a92fc278.js";import"./useFormControl-1.0.23-a0ae6ce7.js";const Q=({dbs:p,tbl:l})=>{n.debug(p,l);const[d,t]=u.useState(!1),[s,i]=u.useState(void 0),g=()=>{switch(s){case"form":return"Reset Form Builder?";case"theme":return"Reset Theme?";default:return"Reset Table Builder?"}};return r.jsxs(r.Fragment,{children:[r.jsxs(S,{disableGutters:!0,children:[r.jsx(T,{expandIcon:r.jsx(x,{}),children:"Reset"}),r.jsx(C,{children:r.jsxs(R,{sx:{display:"grid",gridGap:"20px"},children:[r.jsx(c,{variant:"contained",color:"primary",onClick:()=>{i(m.TABLE),t(!0)},children:"Reset Table Builder"}),r.jsx(c,{variant:"contained",color:"primary",onClick:()=>{i(m.FORM),t(!0)},children:"Reset Form Builder"}),r.jsx(c,{variant:"contained",color:"primary",onClick:()=>{i(m.THEME),t(!0)},children:"Reset Theme"}),r.jsxs(A,{sx:{display:"inline-grid",gridTemplateColumns:"20px auto",gridGap:"5px",alignItems:"center","& svg":{fontSize:"20px"}},error:!0,children:[r.jsx(f,{}),"A reset cannot be undone!"]})]})})]}),r.jsx(v,{title:g(),message:"Are you sure? This action cannot be undone!",open:d,setOpen:t,onConfirm:()=>{s!==void 0&&h(j.GLOBAL,s,p,l,null,null,e=>{if(e!=null&&e.code&&(e==null?void 0:e.message)!==void 0)switch(e.code){case"ok":o(e.message,{variant:"success"});break;case"info":o(e.message,{variant:"info"});break;default:o(e.message??a.contactSupport,{variant:"error"})}else n.error(e),o(a.contactSupport,{variant:"error"})},e=>{n.error("error",e),o(e??a.contactSupport,{variant:"error"})})}})]})};export{Q as default};
