import{l as s,r as g,cB as b,S as C,j as t,b$ as N}from"./main-1.0.18.js";import{r as y}from"./TableQuery-1.0.18-2fa0f849.js";import{h as V}from"./index.esm-1.0.18-9725e44a.js";import{a as k}from"./useTableCode-1.0.18-d620ddcc.js";import"./purify.es-1.0.18-68816782.js";import{B as p}from"./Spinner-1.0.18-de8df990.js";import"./useStoreTable-1.0.18-8a593f98.js";import"./RestApi-1.0.18-cb72bd79.js";import"./Typography-1.0.18-dc3c0740.js";import"./index.esm-1.0.18-12f13c4a.js";import"./iconBase-1.0.18-3c21f5e2.js";import"./ActionsDml-1.0.18-7e1a74e9.js";import"./ConfirmDialog-1.0.18-eb1f3988.js";import"./AdminTheme-1.0.18-73e13a4f.js";import"./DialogContent-1.0.18-5570cba4.js";import"./Modal-1.0.18-870f459d.js";import"./CardContent-1.0.18-3d5e5525.js";import"./SanitizeComponent-1.0.18-6764a6d1.js";import"./index.esm-1.0.18-32f5cee0.js";import"./colorManipulator-1.0.18-95bf61ec.js";import"./TableContainer-1.0.18-20cdfb1b.js";import"./FallbackSpinner-1.0.18-e10446f4.js";import"./ActionsSettings-1.0.18-41fd8841.js";import"./TargetEnum-1.0.18-b82380d5.js";import"./TabPanel-1.0.18-2d718e76.js";import"./useScreenSize-1.0.18-62aeb4c4.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Tabs-1.0.18-d7d53c1e.js";import"./createSvgIcon-1.0.18-dcf0276e.js";import"./ScopeEnum-1.0.18-7caf102d.js";import"./useTheme-1.0.18-c1f3f722.js";/* empty css                        */import"./index.esm-1.0.18-3107c6b2.js";import"./ThemeContainer-1.0.18-fbd92e13.js";import"./Tooltip-1.0.18-5f32f0fd.js";import"./Popper-1.0.18-20544c9b.js";import"./useControlled-1.0.18-12a74006.js";import"./Grow-1.0.18-4ebc2ce8.js";import"./index-1.0.18-e1774a35.js";import"./AggregationLabelsEnum-1.0.18-30d037e3.js";import"./FormHelperText-1.0.18-8b4ce85f.js";import"./useFormControl-1.0.18-87a8487d.js";import"./FormControlLabel-1.0.18-2840e084.js";import"./createStyled-1.0.18-b238c9ff.js";import"./TextField-1.0.18-cf148b4e.js";import"./FormLabel-1.0.18-47dbe87d.js";import"./Menu-1.0.18-e8cb0649.js";import"./Popover-1.0.18-54868205.js";import"./MenuItem-1.0.18-0088f2a2.js";import"./Collapse-1.0.18-8e581380.js";import"./Radio-1.0.18-210e4079.js";import"./SwitchBase-1.0.18-e2aa3211.js";import"./Checkbox-1.0.18-3ed60478.js";import"./Autocomplete-1.0.18-a264f80a.js";import"./Close-1.0.18-d90e9fa7.js";import"./index-1.0.18-ff546563.js";import"./AlertTitle-1.0.18-0fd475c6.js";import"./useSlot-1.0.18-71f9e7ae.js";import"./InputAdornment-1.0.18-958a8148.js";import"./ListItemIcon-1.0.18-7ee6feae.js";import"./Divider-1.0.18-eca54fd7.js";import"./Switch-1.0.18-cbb6329b.js";import"./TimePicker-1.0.18-01aff462.js";import"./useMobilePicker-1.0.18-1215309b.js";import"./ListItem-1.0.18-e1cfc559.js";import"./date-time-utils-1.0.18-97c8c662.js";import"./DateTimePicker-1.0.18-b82ef175.js";import"./dateViewRenderers-1.0.18-21bd6103.js";import"./DatePicker-1.0.18-90c55de2.js";import"./Slider-1.0.18-32b00bb2.js";const Gr=({appId:n,table:f,row:l,columns:c,appSettings:w,metaData:x,tableSettings:h})=>{s.debug(n,f,l,c,x,h);const o=g.useRef(null);k(n);const u=g.useMemo(()=>{const a={};return c.map(r=>{const i=l.getAllCells().filter(e=>e.id===`${l.id}_${r.columnName}`)[0],d=t.jsx(V,{cell:i,table:f});let m=l.original[r.columnName];if(r.lookup===void 0)try{r.computedField===void 0&&(m=y(d))}catch(e){s.error("Error rendering column "+r.columnName+"/"+r.lookup),s.error("Cell value",d),s.error(e),m=void 0}else{const e=b(C.getState(),n,r.columnName,i.getValue());e!==void 0?Array.isArray(e)?m=e.join(r.lookup.delimiter):m=e:m=""}m!==void 0&&r.computedField===void 0&&(a[r.columnName]={label:r.columnLabel,originalValue:l.original[r.columnName],renderedValue:m,cell:d})}),a},[]),v=()=>{var a,r;return t.jsx(p,{onClick:i=>{i.stopPropagation()},className:"pp-table-detail-panel",sx:{margin:0,padding:(((a=o==null?void 0:o.current)==null?void 0:a.offsetWidth)??500)-30>500?"2rem":"2rem 1rem",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax("+Math.min(500,(((r=o==null?void 0:o.current)==null?void 0:r.offsetWidth)??500)-30)+"px, 1fr))",gap:"0.25rem"},children:Object.keys(u).map(i=>t.jsx(N.Fragment,{children:t.jsxs(p,{sx:{display:"grid",gridTemplateColumns:"2fr 3fr",alignItems:"start",gap:"0.5rem"},children:[t.jsx(p,{sx:{textAlign:"right",whiteSpace:"nowrap",textOverflow:"ellepsis",overflow:"hidden"},className:"label",children:u[i].label}),t.jsx(p,{sx:{fontWeight:"bold",textOverflow:"ellepsis",overflow:"hidden"},className:"content",children:u[i].cell})]})},i))})},j=()=>v();return t.jsxs(p,{sx:{position:"relative"},children:[t.jsx(p,{ref:o,sx:{border:"none",margin:0,padding:0},children:j()}),!1]})};export{Gr as default};
