import{j as t}from"./cm-1.0.34-jkgb9fqk.js";import{v as c}from"./cjs-1.0.34-s8JVqkTy.js";import{a as d}from"./RestApi-1.0.34-BxEfvjo_.js";import{l as x,bv as g}from"./lib-1.0.34-CKToGW0d.js";import{u as h}from"./ExplorerActionAdmin-1.0.34-DZv6sEPE.js";import{A as f,a as u}from"./AccordionSummary-1.0.34-BSahbgsH.js";import{A as j}from"./AccordionDetails-1.0.34-_Aajd3cL.js";import{F as b,a as k}from"./FormHelperText-1.0.34-DgFI7tJ8.js";import{F as i}from"./FormLabel-1.0.34-f0a-atWV.js";import{R as S}from"./RadioGroup-1.0.34-DnN3QK5E.js";import{R as e}from"./Radio-1.0.34-CADP3cAA.js";import"./redux-1.0.34-BykGtd51.js";import"./vendor-1.0.34-CN03Eozo.js";import"./Typography-1.0.34-CPcqRq0L.js";import"./iconBase-1.0.34-CNhS-hAm.js";import"./useEnhancedEffect-1.0.34-BO4gRPLZ.js";import"./notistack-1.0.34-CSyPb4yh.js";import"./loglevel-1.0.34-BZ7XahX3.js";import"./lodash-1.0.34-Bq_dBoMp.js";import"./moment-1.0.34-C5S46NFB.js";import"./main-1.0.34.js";import"./TabPanel-1.0.34-CMifEkiN.js";import"./DialogContent-1.0.34-BpZCA1LJ.js";import"./ConfirmDialog-1.0.34-DWUfUq0S.js";import"./AdminTheme-1.0.34-9phfEwG6.js";import"./Spinner-1.0.34-Co4td_et.js";import"./ActionsExplorer-1.0.34-CLjfe2ax.js";import"./index-1.0.34-BtSBPsUk.js";import"./settings-1.0.34-CczHVXWk.js";import"./Menu-1.0.34-BOIQgOXy.js";import"./MenuItem-1.0.34-B8z32nyF.js";import"./ActionsDml-1.0.34-JQvmPQlJ.js";import"./ExplorerActionEnum-1.0.34-eclZgKpy.js";import"./useUiExplorerAction-1.0.34-DgJT0ry_.js";import"./useControlled-1.0.34-CU9helXh.js";import"./Collapse-1.0.34-BSZnzI45.js";import"./useFormControl-1.0.34-DpRVCPB9.js";import"./SwitchBase-1.0.34-ptE6Q_pF.js";import"./createSvgIcon-1.0.34-oaLYTlaR.js";const mt=({dbs:n,tbl:m,setIsUpdated:p})=>{x.debug(n,m);const a=d(),r=h(),s=o=>{const l={...r,table_settings:{...r.table_settings,hyperlink_definition:o}};a(g({settings:l})),p(!0)};return t.jsxs(f,{disableGutters:!0,children:[t.jsx(u,{expandIcon:t.jsx(c,{}),children:"Table Settings"}),t.jsx(j,{children:t.jsxs(b,{children:[t.jsx(i,{children:"Process hyperlink columns as"}),t.jsxs(S,{sx:{marginTop:"10px",marginBottom:"10px"},children:[t.jsxs(i,{className:"align-label-radio",children:[t.jsx(e,{checked:r.table_settings.hyperlink_definition==="json",onChange:o=>{s("json"),o.stopPropagation()}}),"Preformatted JSON"]}),t.jsxs(i,{children:[t.jsx(e,{checked:r.table_settings.hyperlink_definition==="text",onChange:o=>{s("text"),o.stopPropagation()}}),"Plain text"]})]}),t.jsx(k,{children:"Preformatted JSON supports individual label and target settings. Plain text converts column content to a hyperlink link."})]})})]})};export{mt as default};
