import{j as e}from"./cm-1.0.31-BzgG35ZX.js";import{v as h}from"./cjs-1.0.31-B-_HdexB.js";import{u as C,a as D}from"./RestApi-1.0.31-C4KxgDIV.js";import{l as A,bt as u}from"./lib-1.0.31-BbX3jq4e.js";import{r as F}from"./redux-1.0.31-CuzmJMK6.js";import{u as L}from"./ExplorerActionAdmin-1.0.31-Dc2QlnPq.js";import{A as j}from"./Accordion-1.0.31-CHSmI5oX.js";import{A as b}from"./AccordionSummary-1.0.31-DgKGWjRF.js";import{A as f}from"./AccordionDetails-1.0.31-DX5dPS4j.js";import{F as v,a as E}from"./FormHelperText-1.0.31-CQcG9a5q.js";import{B as M}from"./Spinner-1.0.31-Be7r01J6.js";import{T as _,I as P,S as T}from"./TextField-1.0.31-TtMrk-_t.js";import{M as i}from"./MenuItem-1.0.31-CTowyoSp.js";import"./vendor-1.0.31-BmpNFhoq.js";import"./Typography-1.0.31-BdhCS1KD.js";import"./iconBase-1.0.31-C37NsRUm.js";import"./notistack-1.0.31-CuGQWCbt.js";import"./loglevel-1.0.31-BZ7XahX3.js";import"./lodash-1.0.31-BtCjXqrS.js";import"./moment-1.0.31-C5S46NFB.js";import"./main-1.0.31.js";import"./TabPanel-1.0.31-CQFpWPRX.js";import"./DialogContent-1.0.31-_6ykng6a.js";import"./ConfirmDialog-1.0.31-bZDmgpd0.js";import"./AdminTheme-1.0.31-QbwKcRV7.js";import"./ActionsExplorer-1.0.31-COYUrYlM.js";import"./index-1.0.31-ujFQUobk.js";import"./settings-1.0.31-zyRrYuee.js";import"./Menu-1.0.31-BOTBPSPr.js";import"./ActionsDml-1.0.31-DnIQKtBi.js";import"./ExplorerActionEnum-1.0.31-eclZgKpy.js";import"./useUiExplorerAction-1.0.31-BCLprevc.js";import"./useControlled-1.0.31-27-LkxG9.js";import"./Collapse-1.0.31-CkBm-DA4.js";import"./useFormControl-1.0.31-2YJOQA8g.js";import"./FormLabel-1.0.31-7Vju-x1c.js";import"./createSvgIcon-1.0.31-BC4iq9Gi.js";const H=()=>{const s=C(l=>l.manager.metaData);return A.debug("managerMetaData",s),s},be=({dbs:s,tbl:l,setIsUpdated:m})=>{var g;A.debug(s,l);const p=D(),a=L(),d=H(),[c,x]=F.useState(""),y=(o,r)=>{const t={...a,list_labels:{...a.list_labels,[o]:r}};p(u({settings:t})),m(!0)},I=(o,r)=>{const t={...a,form_labels:{...a.form_labels,[o]:r}};p(u({settings:t})),m(!0)},S=(o,r)=>{const t={...a,column_media:{...a.column_media,[o]:r}};p(u({settings:t})),m(!0)};return e.jsxs(j,{disableGutters:!0,slotProps:{transition:{unmountOnExit:!0}},children:[e.jsx(b,{expandIcon:e.jsx(h,{}),children:"Column Settings"}),e.jsx(f,{children:e.jsxs(v,{fullWidth:!0,children:[e.jsx(M,{sx:{display:"grid",gridGap:"10px",marginBottom:"20px"},children:e.jsxs(M,{children:[...(g=d==null?void 0:d.columns)==null?void 0:g.map((o,r)=>{const t=o.column_name;return e.jsxs(j,{expanded:c===t,onChange:()=>{x(c===t?"":t)},sx:{"&.MuiPaper-root.MuiPaper-elevation.Mui-expanded":{margin:0}},children:[e.jsx(b,{expandIcon:e.jsx(h,{}),children:o.column_name}),e.jsxs(f,{sx:{display:"grid",gridGap:"10px"},children:[e.jsx(_,{label:"Table label",value:a.list_labels[t],variant:"outlined",onChange:n=>{y(t,n.target.value)}}),e.jsx(_,{label:"Form label",value:a.form_labels[t],variant:"outlined",onChange:n=>{I(t,n.target.value)}}),e.jsxs(v,{children:[e.jsx(P,{id:"media_type_label"+r,variant:"outlined",children:"Media type"}),e.jsxs(T,{MenuProps:{id:"pp-select-menu"},labelId:"media_type_label"+r,id:"media_type"+r,label:"Media type",value:a.column_media[t]??"",variant:"outlined",onChange:n=>{S(t,n.target.value),n.stopPropagation()},children:[e.jsx(i,{value:"",children:" "},""),e.jsx(i,{value:"Attachment",children:"Attachment"},"Attachment"),e.jsx(i,{value:"Audio",children:"Audio"},"Audio"),e.jsx(i,{value:"Hyperlink",children:"Hyperlink"},"Hyperlink"),e.jsx(i,{value:"Image",children:"Image"},"Image"),e.jsx(i,{value:"ImageURL",children:"ImageURL"},"ImageURL"),e.jsx(i,{value:"Video",children:"Video"},"Video")]})]})]})]})})]})}),e.jsx(E,{children:"Default column labels and column media types"})]})})]})};export{be as default};