import{j as o}from"./cm-1.0.37-CEr77VZi.js";import{r as C}from"./redux-1.0.37-C4JSQ-MG.js";import{C as P}from"./ChartTypeSelection-1.0.37-g80wo80k.js";import{a as c}from"./hooks-1.0.37-DW0_oiBB.js";import{a2 as f,q as L}from"./lib-1.0.37-Czwr-8r3.js";import{o as D,M as R,A as B}from"./index-1.0.37-B60ShF2d.js";import{F as h}from"./FormHelperText-1.0.37-ylnS0Km6.js";import{F as w}from"./FormControlLabel-1.0.37-BLp4PuCc.js";import{S as v}from"./Switch-1.0.37-D8L-tSJ8.js";import{D as A,C as E,a as F,b as M,c as N,d as O}from"./DefaultChartColors-1.0.37-BjH175G4.js";import{a as H}from"./useChartSettings-1.0.37-DyLw1xR9.js";import{u as W}from"./useStoreTable-1.0.37-Bzu2Dqnh.js";import{B as j}from"./Spinner-1.0.37-CwhfSVqI.js";import{I as k}from"./iconBase-1.0.37-DRohixw7.js";import{C as _,a as z}from"./Tooltip-1.0.37-D_uDknxi.js";import{C as V}from"./CardHeader-1.0.37-D5MnKXM1.js";import{u as q,g as G,d as K,T as U,c as T}from"./TabPanel-1.0.37-CPE-1h3v.js";import{T as J,a as y}from"./Tabs-1.0.37-CatYC_MQ.js";import"./vendor-1.0.37-CN03Eozo.js";import"./ChartTypes-1.0.37-CDO5weV_.js";import"./index-1.0.37-CK0QxOhD.js";import"./TextField-1.0.37-CCe4G0U1.js";import"./Typography-1.0.37-DjtXWQnP.js";import"./Select-1.0.37-B5ZKqjeL.js";import"./Menu-1.0.37-Ca8DeoO3.js";import"./ThemeProvider-1.0.37-Cyf1xy26.js";import"./useEnhancedEffect-1.0.37-UwysO4qr.js";import"./utils-1.0.37-iop7lDec.js";import"./useControlled-1.0.37-DyimEgDk.js";import"./useFormControl-1.0.37-BcUwa2qz.js";import"./createSvgIcon-1.0.37-DXsAQOmB.js";import"./FormLabel-1.0.37-BQP5Nx_Z.js";import"./MenuItem-1.0.37-JkRcsicb.js";import"./ListItemIcon-1.0.37-CVeLs3zr.js";import"./loglevel-1.0.37-BZ7XahX3.js";import"./lodash-1.0.37-Dx3wKrSf.js";import"./moment-1.0.37-C5S46NFB.js";import"./notistack-1.0.37-CEqipxDI.js";import"./SwitchBase-1.0.37-Bwy1aBhJ.js";import"./ToggleButtonGroup-1.0.37-BCHx2oZO.js";import"./RadioGroup-1.0.37-CARB8om5.js";import"./Radio-1.0.37-C5rUTiNk.js";import"./Slider-1.0.37-R1cUZahP.js";import"./visuallyHidden-1.0.37-Dan1xhjv.js";import"./Divider-1.0.37-PDNfV3Nd.js";import"./InputAdornment-1.0.37-Bm1BNe28.js";import"./useRemoveAppFromStore-1.0.37-HphIv4xo.js";import"./lang-1.0.37-CfHlhLgz.js";import"./ConfirmDialog-1.0.37-BDQ_OfRf.js";import"./AdminTheme-1.0.37-7PLndQ8H.js";import"./useThemeProps-1.0.37-CD9ZXLtG.js";import"./getThemeProps-1.0.37-BGc0S4YC.js";const Q=C.forwardRef(function(e,t){const{children:p,...r}=e,s=q();if(s===null)throw new TypeError("No TabContext provided");const a=C.Children.map(p,m=>C.isValidElement(m)?C.cloneElement(m,{"aria-controls":K(s,m.props.value),id:G(s,m.props.value)}):null);return o.jsx(J,{...r,ref:t,value:s.value,children:a})}),X=({appId:l,chartSettings:e})=>{var p;const t=c();return o.jsx(h,{fullWidth:!0,children:o.jsx(w,{control:o.jsx(v,{checked:((p=e==null?void 0:e.options)==null?void 0:p.isStacked)??!1,disabled:((e==null?void 0:e.chartType)??"")!==""&&((e==null?void 0:e.chartType)??"")!=="BarChart"&&((e==null?void 0:e.chartType)??"")!=="ColumnChart"&&((e==null?void 0:e.chartType)??"")!=="Histogram"&&((e==null?void 0:e.chartType)??"")!=="AreaChart",onChange:r=>{var a;const s={...e.options};s.isStacked=!(((a=e==null?void 0:e.options)==null?void 0:a.isStacked)??!1),t(f({appId:l,property:{options:s}})),r.stopPropagation()}}),label:"Stacked"})})},Y=({appId:l,chartSettings:e})=>{var p;const t=c();return o.jsx(h,{fullWidth:!0,children:o.jsx(w,{control:o.jsx(v,{checked:((p=e==null?void 0:e.options)==null?void 0:p.is3D)??!1,disabled:((e==null?void 0:e.chartType)??"")!=="PieChart",onChange:r=>{var a;const s={...e.options};s.is3D=!(((a=e==null?void 0:e.options)==null?void 0:a.is3D)??!1),t(f({appId:l,property:{options:s}})),r.stopPropagation()}}),label:"3D"})})},Z=({appId:l,chartSettings:e})=>{var p;const t=c();return o.jsx(h,{fullWidth:!0,children:o.jsx(w,{control:o.jsx(v,{checked:((p=e==null?void 0:e.options)==null?void 0:p.showRowNumber)??!1,disabled:((e==null?void 0:e.chartType)??"")!=="Table",onChange:r=>{var a;const s={...e.options};s.showRowNumber=!(((a=e==null?void 0:e.options)==null?void 0:a.showRowNumber)??!0),t(f({appId:l,property:{options:s}})),r.stopPropagation()}}),label:"Row#"})})},$=({appId:l,chartSettings:e})=>{var x;const t=c(),[p,r]=C.useState(((x=e==null?void 0:e.options)==null?void 0:x.colors)??e.minorAxisColumns.map((i,n)=>A[n]!==void 0?A[n]:"#fff")),s=W(l),a=i=>{var d;if(s===void 0)return i;const n=s.columns.filter(u=>u.columnName===i);return n.length===1?((d=n[0])==null?void 0:d.columnLabel)??i:i},m=i=>{t(f({appId:l,property:{options:i}}))};return o.jsxs("fieldset",{className:"pp-fieldset",children:[o.jsx("legend",{style:{textAlign:"left"},children:"Colors"}),o.jsxs(j,{sx:{position:"relative"},children:[o.jsxs(j,{sx:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"start",alignItems:"center",columnGap:"10px"},children:[...e.minorAxisColumns.map((i,n)=>{const d=a(i);return o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{textAlign:"right"},children:d}),o.jsx("input",{type:"color",value:p[n],onChange:u=>{const b=[...p];b[n]=u.target.value,r(b),u.stopPropagation()},style:{width:"30px",height:"35px",margin:0,padding:0,border:"none",WebkitAppearance:"none",MozAppearance:"none",appearance:"none",backgroundColor:"transparent",cursor:"pointer"}})]})})]}),o.jsx(j,{sx:{position:"absolute",top:"-5px",right:0},children:o.jsx(k,{color:"primary",onClick:i=>{const n=L(e.options);n.colors=p,m(n),i.stopPropagation()},children:o.jsx(D,{})})})]})]})},$o=({appId:l,setShowSelection:e,isTableChart:t})=>{var i;const p=c(),r=H(l),[s,a]=C.useState("1"),m=(n,d)=>{a(d)},x=n=>{const{children:d,tab:u,value:b}=n;return u===b?o.jsx(j,{sx:{padding:0,textAlign:"center",marginTop:"5px",display:"grid",gap:"1em"},children:d}):null};return o.jsxs(_,{sx:{position:"absolute",top:0,right:0,width:"400px",zIndex:9999999,boxShadow:"0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"},children:[o.jsx(V,{title:o.jsxs(j,{sx:{display:"grid",gridTemplateColumns:"50px 1fr 50px",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("span",{}),o.jsx("span",{children:"Chart Settings"}),o.jsx("span",{style:{textAlign:"right"},children:o.jsx(k,{color:"primary",onClick:()=>e(!1),children:o.jsx(R,{})})})]}),sx:{textAlign:"center"}}),o.jsx(z,{sx:{padding:0,"&:last-child":{paddingBottom:0}},children:o.jsxs(U,{value:s,children:[o.jsx(B,{position:"relative",sx:{boxShadow:"none",borderRadius:0,"& .MuiTabs-flexContainer":{justifyContent:"center"},"& button":{color:"white"},"& button.Mui-selected":{color:"white"}},children:o.jsxs(Q,{onChange:m,children:[o.jsx(y,{label:"Chart",value:"1"}),o.jsx(y,{label:"Info",value:"2"}),o.jsx(y,{label:"Axis",value:"3"}),o.jsx(y,{label:"Area",value:"4"})]})}),o.jsx(T,{value:"1",children:o.jsxs(x,{tab:s,value:"1",children:[o.jsx(P,{isTableChart:t,chartType:(r==null?void 0:r.chartType)??"BarChart",setChartType:n=>{p(f({appId:l,property:{chartType:n}}))},chartTypes:(r==null?void 0:r.chartTypes)??[]}),o.jsxs("fieldset",{className:"pp-fieldset",style:{display:"grid",gridTemplateColumns:"auto auto auto",justifyContent:"space-between",alignItems:"center",padding:"5px 15px"},children:[o.jsx(X,{appId:l,chartSettings:r}),o.jsx(Y,{appId:l,chartSettings:r}),o.jsx(Z,{appId:l,chartSettings:r})]})]})}),o.jsx(T,{value:"2",children:o.jsxs(x,{tab:s,value:"2",children:[o.jsx(E,{appId:l,chartSettings:r,titleKey:"title",titleDefaultValue:((i=r==null?void 0:r.options)==null?void 0:i.title)??"",titleLabel:"Chart Title"}),o.jsx(F,{appId:l,chartSettings:r}),o.jsx($,{appId:l,chartSettings:r})]})}),o.jsx(T,{value:"3",children:o.jsxs(x,{tab:s,value:"3",children:[o.jsx(M,{appId:l,chartSettings:r}),o.jsx(N,{appId:l,chartSettings:r})]})}),o.jsx(T,{value:"4",children:o.jsx(x,{tab:s,value:"4",children:o.jsx(O,{appId:l,chartSettings:r})})})]})})]})};export{$o as default};
