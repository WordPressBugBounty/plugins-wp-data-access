import{j as e,l as n,r as w,eg as t,eh as G,ei as S}from"./main-1.0.18.js";import{a as h,u as C}from"./RestApi-1.0.18-cb72bd79.js";import{u as j}from"./useFormUpdates-1.0.18-2d7a3227.js";import{P as b}from"./PremiumFeature-1.0.18-2f6283b7.js";import{v as g,k as R}from"./index.esm-1.0.18-12f13c4a.js";import{A as m,a as x}from"./AccordionSummary-1.0.18-f9e114cf.js";import{A as f}from"./AccordionDetails-1.0.18-2900e110.js";import{F as y,a as p}from"./FormHelperText-1.0.18-8b4ce85f.js";import{R as v}from"./RadioGroup-1.0.18-4960e4a8.js";import{F as c}from"./FormControlLabel-1.0.18-2840e084.js";import{R as F}from"./Radio-1.0.18-210e4079.js";import{S as V}from"./Switch-1.0.18-cbb6329b.js";import{C as r}from"./CssUnitTextField-1.0.18-6aa39ec4.js";import{T as P}from"./TextField-1.0.18-cf148b4e.js";import{L}from"./Link-1.0.18-41cc6055.js";import{B as u}from"./Spinner-1.0.18-de8df990.js";import{g as B,e as E}from"./useTheme-1.0.18-c1f3f722.js";import{S as k}from"./SettingsFormRelationships-1.0.18-d863356f.js";import"./Typography-1.0.18-dc3c0740.js";import"./index.esm-1.0.18-32f5cee0.js";import"./iconBase-1.0.18-3c21f5e2.js";import"./AdminTheme-1.0.18-73e13a4f.js";import"./FormLabel-1.0.18-47dbe87d.js";import"./useFormControl-1.0.18-87a8487d.js";import"./index-1.0.18-ff546563.js";import"./useSlot-1.0.18-71f9e7ae.js";import"./useControlled-1.0.18-12a74006.js";import"./Collapse-1.0.18-8e581380.js";import"./createStyled-1.0.18-b238c9ff.js";import"./SwitchBase-1.0.18-e2aa3211.js";import"./createSvgIcon-1.0.18-dcf0276e.js";import"./Modal-1.0.18-870f459d.js";import"./CardContent-1.0.18-3d5e5525.js";import"./Menu-1.0.18-e8cb0649.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Popover-1.0.18-54868205.js";import"./Grow-1.0.18-4ebc2ce8.js";import"./colorManipulator-1.0.18-95bf61ec.js";import"./ComponentColumn-1.0.18-5c48b102.js";import"./ActionsExplorer-1.0.18-ae07c36b.js";import"./Autocomplete-1.0.18-a264f80a.js";import"./Close-1.0.18-d90e9fa7.js";import"./Popper-1.0.18-20544c9b.js";import"./ActionsApp-1.0.18-0ab2bedd.js";import"./Checkbox-1.0.18-3ed60478.js";import"./Tooltip-1.0.18-5f32f0fd.js";import"./MenuItem-1.0.18-0088f2a2.js";import"./FallbackSpinner-1.0.18-e10446f4.js";import"./ToggleButtonGroup-1.0.18-02ae4565.js";import"./Stepper-1.0.18-05ecefbc.js";import"./StepContent-1.0.18-147bdc81.js";import"./ConfirmDialog-1.0.18-eb1f3988.js";import"./DialogContent-1.0.18-5570cba4.js";import"./index-1.0.18-bd94b546.js";const A=({appId:s,formSettings:l})=>(h(),j(s),e.jsxs(m,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(x,{expandIcon:e.jsx(g,{}),children:"Field layout"}),e.jsxs(f,{sx:{display:"grid",gap:"20px"},children:[e.jsxs(y,{children:[e.jsxs(v,{value:l.fieldVariant,sx:{flexDirection:"row"},onChange:i=>{n.debug(i)},children:[e.jsx(c,{control:e.jsx(F,{disabled:!0}),value:"outlined",label:"Outlined"},"outlined"),e.jsx(c,{control:e.jsx(F,{disabled:!0}),value:"filled",label:"Filled"},"filled"),e.jsx(c,{control:e.jsx(F,{disabled:!0}),value:"standard",label:"Standard"},"standard")]}),e.jsx(p,{children:"Applies to data entry forms only."})]}),e.jsx(c,{control:e.jsx(V,{checked:l.hideHintsInViewMode,disabled:!0,onChange:(i,d)=>{i.stopPropagation()}}),label:"Hide hints in view mode",labelPlacement:"end"}),e.jsx(b,{})]})]})),H=({appId:s,formSettings:l,updateSettings:i})=>{h(),j(s);const[d,o]=w.useState(!1);return e.jsxs(m,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(x,{expandIcon:e.jsx(g,{}),children:"Grid"}),e.jsxs(f,{sx:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:"20px",marginTop:"5px"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[e.jsx(P,{type:"number",label:"Cells per row",value:l.cellsPerRow,disabled:!0,InputLabelProps:{shrink:!0},onChange:a=>{n.debug(a)}}),e.jsx(r,{label:"Space between cells",textField:{cssValue:l.spacing.betweenCells,cssUnit:l.spacing.betweenCellsUnit},defaultValue:{cssValue:t.betweenCells,cssUnit:t.betweenCellsUnit},updateSettings:a=>{n.debug(a)}})]}),e.jsx(c,{control:e.jsx(V,{disabled:!0,checked:l.showGrid,onChange:(a,U)=>{n.debug(a,U)}}),label:"Show grid"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginTop:"10px"},children:[e.jsx(r,{label:"Padding top",textField:{cssValue:l.spacing.aroundGridTop,cssUnit:l.spacing.aroundGridTopUnit},defaultValue:{cssValue:t.aroundGridTop,cssUnit:t.aroundGridTopUnit},updateSettings:a=>{n.debug(a)}}),e.jsx(r,{label:"Padding bottom",textField:{cssValue:l.spacing.aroundGridBottom,cssUnit:l.spacing.aroundGridBottomUnit},defaultValue:{cssValue:t.aroundGridBottom,cssUnit:t.aroundGridBottomUnit},updateSettings:a=>{n.debug(a)}}),e.jsx(r,{label:"Padding left",textField:{cssValue:l.spacing.aroundGridLeft,cssUnit:l.spacing.aroundGridLeftUnit},defaultValue:{cssValue:t.aroundGridLeft,cssUnit:t.aroundGridLeftUnit},updateSettings:a=>{n.debug(a)}}),e.jsx(r,{label:"Padding right",textField:{cssValue:l.spacing.aroundGridRight,cssUnit:l.spacing.aroundGridRightUnit},defaultValue:{cssValue:t.aroundGridRight,cssUnit:t.aroundGridRightUnit},updateSettings:a=>{n.debug(a)}})]}),e.jsxs(p,{component:"div",sx:{marginTop:"10px"},children:[e.jsxs(L,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>o(!d),children:[e.jsx(R,{}),"How to use the grid?"]}),d&&e.jsxs(u,{sx:{marginTop:"20px",display:"grid",gap:"20px"},children:[e.jsxs(u,{children:["All form fields are organized into a form grid, which consists of ",e.jsx("strong",{children:"rows"})," and ",e.jsx("strong",{children:"cells"}),'. Each row contains a fixed number of cells, determined by the "Cells per row" setting. The grid ensures consistent layout and alignment for all form fields.']}),e.jsxs(u,{children:["Each form field can occupy from 1 to n cells, where n is the number of cells per row. This value can be adjusted on a per-column basis in ",e.jsx("strong",{children:"Grid positioning"}),". To access the grid position for a specific column, open the ",e.jsx("strong",{children:"COLUMNS"})," section, navigate to the column, and select the ",e.jsx("strong",{children:"Grid positioning"})," option. Grid positioning allows you to adjust the display of empty cells before a field or position a field at the beginning or end of a row."]}),e.jsxs(u,{children:["The grid can be displayed during form design to visualize column positioning and spacing. This feature is available only in the ",e.jsx("strong",{children:"Form Builder"})," and is not visible during runtime."]})]})]}),e.jsx(b,{single:!1})]})]})},M=({formSettings:s,updateSettings:l})=>e.jsxs(m,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(x,{expandIcon:e.jsx(g,{}),children:"Cells"}),e.jsxs(f,{style:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)"},children:[e.jsxs(y,{children:[e.jsxs(u,{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginTop:"5px"},children:[e.jsx(r,{label:"Padding top",textField:{cssValue:s.spacing.cellTop,cssUnit:s.spacing.cellTopUnit},defaultValue:{cssValue:t.cellTop,cssUnit:t.cellTopUnit},updateSettings:i=>{n.debug(i)}}),e.jsx(r,{label:"Padding bottom",textField:{cssValue:s.spacing.cellBottom,cssUnit:s.spacing.cellBottomUnit},defaultValue:{cssValue:t.cellBottom,cssUnit:t.cellBottomUnit},updateSettings:i=>{n.debug(i)}}),e.jsx(r,{label:"Padding left",textField:{cssValue:s.spacing.cellLeft,cssUnit:s.spacing.cellLeftUnit},defaultValue:{cssValue:t.cellLeft,cssUnit:t.cellLeftUnit},updateSettings:i=>{n.debug(i)}}),e.jsx(r,{label:"Padding right",textField:{cssValue:s.spacing.cellRight,cssUnit:s.spacing.cellRightUnit},defaultValue:{cssValue:t.cellRight,cssUnit:t.cellRightUnit},updateSettings:i=>{n.debug(i)}})]}),e.jsx(p,{sx:{marginTop:"20px"},children:"Spacing around cells."})]}),e.jsx(b,{single:!1})]})]}),D=({formSettings:s,updateSettings:l})=>e.jsxs(m,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(x,{expandIcon:e.jsx(g,{}),children:"Field spacing"}),e.jsxs(f,{sx:{display:"grid"},children:[e.jsxs(y,{children:[e.jsxs(u,{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginTop:"5px"},children:[e.jsx(r,{label:"Padding top",textField:{cssValue:s.spacing.fieldTop,cssUnit:s.spacing.fieldTopUnit},defaultValue:{cssValue:t.fieldTop,cssUnit:t.fieldTopUnit},updateSettings:i=>{n.debug(i)}}),e.jsx(r,{label:"Padding bottom",textField:{cssValue:s.spacing.fieldBottom,cssUnit:s.spacing.fieldBottomUnit},defaultValue:{cssValue:t.fieldBottom,cssUnit:t.fieldBottomUnit},updateSettings:i=>{n.debug(i)}}),e.jsx(r,{label:"Padding left",textField:{cssValue:s.spacing.fieldLeft,cssUnit:s.spacing.fieldLeftUnit},defaultValue:{cssValue:t.fieldLeft,cssUnit:t.fieldLeftUnit},updateSettings:i=>{n.debug(i)}}),e.jsx(r,{label:"Padding right",textField:{cssValue:s.spacing.fieldRight,cssUnit:s.spacing.fieldRightUnit},defaultValue:{cssValue:t.fieldRight,cssUnit:t.fieldRightUnit},updateSettings:i=>{n.debug(i)}})]}),e.jsx(p,{sx:{marginTop:"20px"},children:"Spacing within data entry fields."})]}),e.jsx(b,{single:!1})]})]}),O=({appId:s,formSettings:l})=>{var a;const i=h(),d=j(s),o=B(s);return!((a=o==null?void 0:o.privs)!=null&&a.update)||o.primary_key.length===0?null:e.jsxs(m,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(x,{expandIcon:e.jsx(g,{}),children:"Null value handling"}),e.jsxs(f,{sx:{display:"grid"},children:[e.jsx(c,{control:e.jsx(V,{checked:l.preserveSpacesOnUpdate,onChange:(U,T)=>{i(G({appId:s,preserveSpaces:T})),d(!0),U.stopPropagation()}}),label:"Preserve empty strings on update",labelPlacement:"end"}),e.jsx(p,{children:"Enable to preserve empty strings for mandatory columns. Works only if the actual column value contains an empty spaces. Does not allow strings to be emptied."}),e.jsx(p,{children:"This feature is enabled by default on WordPress tables."}),e.jsx(p,{sx:{fontWeight:"bold"},children:"Do NOT change the default unless you really need to!"})]})]})},N=()=>{const s=C(l=>S(l));return n.debug("isRelationForm",s),s},ze=({appId:s})=>{n.debug(s),h(),j(s);const l=N(),i=E(s),d=o=>{n.debug(o)};return e.jsxs(e.Fragment,{children:[l!==!0&&e.jsx(k,{appId:s,updateSettings:d}),e.jsx(A,{appId:s,formSettings:i}),e.jsx(H,{appId:s,formSettings:i,updateSettings:d}),e.jsx(M,{formSettings:i,updateSettings:d}),e.jsx(D,{formSettings:i,updateSettings:d}),e.jsx(O,{appId:s,formSettings:i})]})};export{ze as default};