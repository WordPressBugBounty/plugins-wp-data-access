import{j as e}from"./cm-1.0.32-roxymF9V.js";import{l as O,cb as y,cf as _,cc as v,cd as d}from"./lib-1.0.32-CBsDffd2.js";import{F as H,a as m}from"./FormHelperText-1.0.32-BG3xt4JA.js";import{I as S,S as w}from"./TextField-1.0.32-EUJpMVir.js";import{M as T}from"./MenuItem-1.0.32-Bc1CXi88.js";import{E as F}from"./EnumTypeEnum-1.0.32-Ws4BsaYD.js";import{F as P}from"./FormLabel-1.0.32-agP5qBoD.js";import{R as Z}from"./RadioGroup-1.0.32-BPYStg8S.js";import{F as $}from"./FormControlLabel-1.0.32-B7mCGY7x.js";import{R as G}from"./Radio-1.0.32-Dg2N7INw.js";import"./redux-1.0.32-BsgiH_bG.js";import"./vendor-1.0.32-BmpNFhoq.js";import"./loglevel-1.0.32-BZ7XahX3.js";import"./lodash-1.0.32-B7VmFneh.js";import"./moment-1.0.32-C5S46NFB.js";import"./Typography-1.0.32-D9d-UzA0.js";import"./useFormControl-1.0.32-Tf9RtQ-m.js";import"./iconBase-1.0.32-inVKjZEJ.js";import"./cjs-1.0.32-AqZgyPIn.js";import"./notistack-1.0.32-N2grKTUm.js";import"./Menu-1.0.32-CRF2Elfu.js";import"./AdminTheme-1.0.32-WcjuTcVF.js";import"./useControlled-1.0.32-fDn_qfrW.js";import"./createSvgIcon-1.0.32-DGmABpxr.js";import"./SwitchBase-1.0.32-8MhCpXB3.js";const Y=({columnName:t,columnValue:f,columnMetaData:s,storeColumn:p,columnValidation:r,onColumnChange:g,metaData:j,storeForm:h,enumValues:R,formMode:x,locale:i})=>{O.debug(t,f,s,p,r,j,h,R,x,i);const A={readOnly:y(j,s,p,x)},E=r!=null&&r.error?r==null?void 0:r.text:i.selectFromList,L=null;return e.jsxs(H,{className:_(),children:[e.jsx(S,{variant:v(),children:s.formLabel}),e.jsx(w,{MenuProps:{id:"pp-select-menu"},error:r==null?void 0:r.error,label:s.formLabel,value:f??"",inputProps:A,variant:v(),onChange:b=>{g(t,b.target.value===""?null:b.target.value)},sx:{textAlign:p.alignment},children:(()=>{const b=R.map(function(I){return e.jsx(T,{"data-id":t,value:I,children:I},I)});return s.is_nullable==="YES"?[e.jsx(T,{"data-id":"pp-empty-enum-item",value:L,children:" "},"pp-empty-enum-item")].concat(b):b})()}),e.jsx(m,{children:d(p,E)})]})},k=({columnName:t,columnValue:f,columnMetaData:s,storeColumn:p,columnValidation:r,onColumnChange:g,metaData:j,enumValues:h,formMode:R,orientation:x,locale:i})=>{O.debug(t,f,s,p,r,j,h,R,x,i);const A=r!=null&&r.error?r==null?void 0:r.text:i.selectFromRadio;return e.jsxs(H,{className:_(),children:[e.jsx(P,{children:s.formLabel}),e.jsx(Z,{value:f,sx:{flexDirection:x===F.RADIO_HORIZONTAL?"row":"column",...x!==F.RADIO_VERTICAL&&{justifyContent:p.alignment},...x===F.RADIO_VERTICAL&&{alignItems:p.alignment},paddingLeft:"12px"},onChange:E=>{g(t,E.target.value)},children:h.map(function(L){return e.jsx($,{control:e.jsx(G,{disabled:y(j,s,p,R)}),value:L,label:L},L)})}),e.jsx(m,{children:d(p,A)})]})},xr=({appId:t,columnName:f,columnValue:s,columnInitialValue:p,columnMetaData:r,storeColumn:g,columnValidation:j,onColumnChange:h,metaData:R,context:x,storeTable:i,storeForm:A,formMode:E,locale:L})=>{O.debug(t,g,f,s);const b=r.column_type.replace("enum(","").replace(")","").replaceAll("'","").split(",");switch(g.updatableEnum){case F.RADIO_HORIZONTAL:case F.RADIO_VERTICAL:return e.jsx(k,{appId:t,columnName:f,columnValue:s,columnInitialValue:p,columnMetaData:r,storeColumn:g,onColumnChange:h,metaData:R,context:x,storeTable:i,storeForm:A,enumValues:b,orientation:g.updatableEnum,formMode:E,columnValidation:j,locale:L});default:return e.jsx(Y,{appId:t,columnName:f,columnValue:s,columnInitialValue:p,columnMetaData:r,storeColumn:g,onColumnChange:h,metaData:R,context:x,storeTable:i,storeForm:A,enumValues:b,formMode:E,columnValidation:j,locale:L})}};export{xr as default};
