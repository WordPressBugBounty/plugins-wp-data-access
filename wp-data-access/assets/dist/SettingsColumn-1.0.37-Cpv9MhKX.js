import{j as e}from"./cm-1.0.37-CEr77VZi.js";import{w as h}from"./index-1.0.37-B60ShF2d.js";import{u as C,a as L}from"./hooks-1.0.37-DW0_oiBB.js";import{l as A,bL as u}from"./lib-1.0.37-Czwr-8r3.js";import{r as D}from"./redux-1.0.37-C4JSQ-MG.js";import{u as F}from"./ExplorerActionAdmin-1.0.37-DPMl27ks.js";import{A as j,a as b}from"./AccordionSummary-1.0.37-Dp-yE6bD.js";import{A as f}from"./AccordionDetails-1.0.37-CWpLs4PS.js";import{F as v,a as E}from"./FormHelperText-1.0.37-ylnS0Km6.js";import{B as M}from"./Spinner-1.0.37-CwhfSVqI.js";import{T as _,I as P}from"./TextField-1.0.37-CCe4G0U1.js";import{S as T}from"./Select-1.0.37-B5ZKqjeL.js";import{M as i}from"./MenuItem-1.0.37-JkRcsicb.js";import"./vendor-1.0.37-CN03Eozo.js";import"./iconBase-1.0.37-DRohixw7.js";import"./Typography-1.0.37-DjtXWQnP.js";import"./useEnhancedEffect-1.0.37-UwysO4qr.js";import"./notistack-1.0.37-CEqipxDI.js";import"./loglevel-1.0.37-BZ7XahX3.js";import"./lodash-1.0.37-Dx3wKrSf.js";import"./moment-1.0.37-C5S46NFB.js";import"./main-1.0.37.js";import"./TabPanel-1.0.37-CPE-1h3v.js";import"./ConfirmDialog-1.0.37-BDQ_OfRf.js";import"./AdminTheme-1.0.37-7PLndQ8H.js";import"./Menu-1.0.37-Ca8DeoO3.js";import"./ThemeProvider-1.0.37-Cyf1xy26.js";import"./useThemeProps-1.0.37-CD9ZXLtG.js";import"./getThemeProps-1.0.37-BGc0S4YC.js";import"./Tooltip-1.0.37-D_uDknxi.js";import"./ActionsExplorer-1.0.37-2IOZFLVH.js";import"./RestApi-1.0.37-CcjslynE.js";import"./index-1.0.37-LxgxH_yq.js";import"./ActionsDml-1.0.37-kzr7tHjI.js";/* empty css                        */import"./ExplorerActionEnum-1.0.37-eclZgKpy.js";import"./useUiExplorerAction-1.0.37-TKJKMhkF.js";import"./useControlled-1.0.37-DyimEgDk.js";import"./Collapse-1.0.37-DaP8rsgI.js";import"./utils-1.0.37-iop7lDec.js";import"./useFormControl-1.0.37-BcUwa2qz.js";import"./FormLabel-1.0.37-BQP5Nx_Z.js";import"./createSvgIcon-1.0.37-DXsAQOmB.js";const H=()=>{const s=C(l=>l.manager.metaData);return A.debug("managerMetaData",s),s},ye=({dbs:s,tbl:l,setIsUpdated:m})=>{var g;A.debug(s,l);const p=L(),a=F(),d=H(),[c,x]=D.useState(""),y=(o,r)=>{const t={...a,list_labels:{...a.list_labels,[o]:r}};p(u({settings:t})),m(!0)},I=(o,r)=>{const t={...a,form_labels:{...a.form_labels,[o]:r}};p(u({settings:t})),m(!0)},S=(o,r)=>{const t={...a,column_media:{...a.column_media,[o]:r}};p(u({settings:t})),m(!0)};return e.jsxs(j,{disableGutters:!0,slotProps:{transition:{unmountOnExit:!0}},children:[e.jsx(b,{expandIcon:e.jsx(h,{}),children:"Column Settings"}),e.jsx(f,{children:e.jsxs(v,{fullWidth:!0,children:[e.jsx(M,{sx:{display:"grid",gridGap:"10px",marginBottom:"20px"},children:e.jsxs(M,{children:[...(g=d==null?void 0:d.columns)==null?void 0:g.map((o,r)=>{const t=o.column_name;return e.jsxs(j,{expanded:c===t,onChange:()=>{x(c===t?"":t)},sx:{"&.MuiPaper-root.MuiPaper-elevation.Mui-expanded":{margin:0}},children:[e.jsx(b,{expandIcon:e.jsx(h,{}),children:o.column_name}),e.jsxs(f,{sx:{display:"grid",gridGap:"10px"},children:[e.jsx(_,{label:"Table label",value:a.list_labels[t],variant:"outlined",onChange:n=>{y(t,n.target.value)}}),e.jsx(_,{label:"Form label",value:a.form_labels[t],variant:"outlined",onChange:n=>{I(t,n.target.value)}}),e.jsxs(v,{children:[e.jsx(P,{id:"media_type_label"+r,variant:"outlined",children:"Media type"}),e.jsxs(T,{MenuProps:{id:"pp-select-menu"},labelId:"media_type_label"+r,id:"media_type"+r,label:"Media type",value:a.column_media[t]??"",variant:"outlined",onChange:n=>{S(t,n.target.value),n.stopPropagation()},children:[e.jsx(i,{value:"",children:" "},""),e.jsx(i,{value:"Attachment",children:"Attachment"},"Attachment"),e.jsx(i,{value:"Audio",children:"Audio"},"Audio"),e.jsx(i,{value:"Hyperlink",children:"Hyperlink"},"Hyperlink"),e.jsx(i,{value:"Image",children:"Image"},"Image"),e.jsx(i,{value:"ImageURL",children:"ImageURL"},"ImageURL"),e.jsx(i,{value:"Video",children:"Video"},"Video")]})]})]})]})})]})}),e.jsx(E,{children:"Default column labels and column media types"})]})})]})};export{ye as default};
