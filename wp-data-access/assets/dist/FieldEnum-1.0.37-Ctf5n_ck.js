import{j as i}from"./cm-1.0.37-CEr77VZi.js";import{l as K,cn as w,cA as d,cp as T,co as B}from"./lib-1.0.37-Czwr-8r3.js";import{F as H,a as U}from"./FormHelperText-1.0.37-ylnS0Km6.js";import{I as D}from"./TextField-1.0.37-CCe4G0U1.js";import{S}from"./Select-1.0.37-B5ZKqjeL.js";import{M as _}from"./MenuItem-1.0.37-JkRcsicb.js";import{E as O}from"./EnumTypeEnum-1.0.37-Ws4BsaYD.js";import{F as P}from"./FormLabel-1.0.37-BQP5Nx_Z.js";import{R as Z}from"./RadioGroup-1.0.37-CARB8om5.js";import{F as $}from"./FormControlLabel-1.0.37-BLp4PuCc.js";import{R as G}from"./Radio-1.0.37-C5rUTiNk.js";import"./redux-1.0.37-C4JSQ-MG.js";import"./vendor-1.0.37-CN03Eozo.js";import"./loglevel-1.0.37-BZ7XahX3.js";import"./lodash-1.0.37-Dx3wKrSf.js";import"./moment-1.0.37-C5S46NFB.js";import"./Typography-1.0.37-DjtXWQnP.js";import"./utils-1.0.37-iop7lDec.js";import"./useFormControl-1.0.37-BcUwa2qz.js";import"./iconBase-1.0.37-DRohixw7.js";import"./useEnhancedEffect-1.0.37-UwysO4qr.js";import"./Menu-1.0.37-Ca8DeoO3.js";import"./ThemeProvider-1.0.37-Cyf1xy26.js";import"./index-1.0.37-B60ShF2d.js";import"./notistack-1.0.37-CEqipxDI.js";import"./useControlled-1.0.37-DyimEgDk.js";import"./createSvgIcon-1.0.37-DXsAQOmB.js";import"./SwitchBase-1.0.37-Bwy1aBhJ.js";const Y=({columnName:C,columnValue:f,columnMetaData:x,storeColumn:e,columnValidation:p,onColumnChange:b,metaData:h,storeForm:y,enumValues:j,formMode:g,locale:R,columnEvents:r})=>{K.debug(C,f,x,e,p,h,y,j,g,R);const I={readOnly:w(h,x,e,g)},A=p!=null&&p.error?p==null?void 0:p.text:R.selectFromList,F=null;return i.jsxs(H,{className:d(),children:[i.jsx(D,{variant:T(),children:x.formLabel}),i.jsx(S,{MenuProps:{id:"pp-select-menu"},error:p==null?void 0:p.error,label:x.formLabel,value:f??"",inputProps:I,variant:T(),onChange:L=>{b(C,L.target.value===""?null:L.target.value),r!=null&&r.onChange&&r.onChange()},sx:{textAlign:e.alignment},onBlurCapture:r==null?void 0:r.onBlur,onClickCapture:r==null?void 0:r.onClick,onDoubleClickCapture:r==null?void 0:r.onDoubleClick,onFocusCapture:r==null?void 0:r.onFocus,onKeyDownCapture:r==null?void 0:r.onKeyDown,onKeyUpCapture:r==null?void 0:r.onKeyUp,children:(()=>{const L=j.map(function(k){return i.jsx(_,{"data-id":C,value:k,children:k},k)});return x.is_nullable==="YES"?[i.jsx(_,{"data-id":"pp-empty-enum-item",value:F,children:" "},"pp-empty-enum-item")].concat(L):L})()}),i.jsx(U,{children:B(e,A)})]})},q=({columnName:C,columnValue:f,columnMetaData:x,storeColumn:e,columnValidation:p,onColumnChange:b,metaData:h,enumValues:y,formMode:j,orientation:g,locale:R,columnEvents:r})=>{K.debug(C,f,x,e,p,h,y,j,g,R);const I=p!=null&&p.error?p==null?void 0:p.text:R.selectFromRadio;return i.jsxs(H,{className:d(),children:[i.jsx(P,{children:x.formLabel}),i.jsx(Z,{value:f,sx:{flexDirection:g===O.RADIO_HORIZONTAL?"row":"column",...g!==O.RADIO_VERTICAL&&{justifyContent:e.alignment},...g===O.RADIO_VERTICAL&&{alignItems:e.alignment},paddingLeft:"12px"},onChange:A=>{b(C,A.target.value)},onBlurCapture:r==null?void 0:r.onBlur,onChangeCapture:r==null?void 0:r.onChange,onClickCapture:r==null?void 0:r.onClick,onDoubleClickCapture:r==null?void 0:r.onDoubleClick,onFocusCapture:r==null?void 0:r.onFocus,onKeyDownCapture:r==null?void 0:r.onKeyDown,onKeyUpCapture:r==null?void 0:r.onKeyUp,children:y.map(function(F){return i.jsx($,{control:i.jsx(G,{disabled:w(h,x,e,j)}),value:F,label:F},F)})}),i.jsx(U,{children:B(e,I)})]})},hr=({appId:C,columnName:f,columnValue:x,columnInitialValue:e,columnMetaData:p,storeColumn:b,columnValidation:h,onColumnChange:y,metaData:j,context:g,storeTable:R,storeForm:r,formMode:I,locale:A,columnEvents:F})=>{K.debug(C,b,f,x);const L=p.column_type.replace("enum(","").replace(")","").replaceAll("'","").split(",");switch(b.updatableEnum){case O.RADIO_HORIZONTAL:case O.RADIO_VERTICAL:return i.jsx(q,{appId:C,columnName:f,columnValue:x,columnInitialValue:e,columnMetaData:p,storeColumn:b,onColumnChange:y,metaData:j,context:g,storeTable:R,storeForm:r,enumValues:L,orientation:b.updatableEnum,formMode:I,columnValidation:h,locale:A,columnEvents:F});default:return i.jsx(Y,{appId:C,columnName:f,columnValue:x,columnInitialValue:e,columnMetaData:p,storeColumn:b,onColumnChange:y,metaData:j,context:g,storeTable:R,storeForm:r,enumValues:L,formMode:I,columnValidation:h,locale:A,columnEvents:F})}};export{hr as default};
