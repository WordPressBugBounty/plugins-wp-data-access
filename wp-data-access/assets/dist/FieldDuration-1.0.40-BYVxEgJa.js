import{j as R}from"./cm-1.0.40-DO7MoydR.js";import{P}from"./react-number-format.es-1.0.40-BdajC67w.js";import{l as j,cJ as s,cL as w,cK as A,bk as g,bi as y}from"./lib-1.0.40-CJM-IO_o.js";import{a as B}from"./hooks-1.0.40-DoKijNI1.js";import{T as D}from"./TextField-1.0.40-CejEr0KU.js";import"./redux-1.0.40-W_04YL6Z.js";import"./vendor-1.0.40-CN03Eozo.js";import"./loglevel-1.0.40-BZ7XahX3.js";import"./lodash-1.0.40-yZQKpWII.js";import"./moment-1.0.40-C5S46NFB.js";import"./Typography-1.0.40-oRKYqE3b.js";import"./iconBase-1.0.40-CH6TO7hF.js";import"./useEnhancedEffect-1.0.40-DvrM_gBo.js";import"./Select-1.0.40-Db-Xnyoo.js";import"./Menu-1.0.40-BKp7UqHL.js";import"./ThemeProvider-1.0.40-D9QtC9zH.js";import"./index-1.0.40-DmMQghWt.js";import"./notistack-1.0.40-HUa4vT_u.js";import"./utils-1.0.40-iop7lDec.js";import"./useControlled-1.0.40-B7yPDtn1.js";import"./useFormControl-1.0.40-BL8koKXQ.js";import"./createSvgIcon-1.0.40-DryBVjDb.js";import"./FormLabel-1.0.40-DLOepjQ0.js";import"./FormHelperText-1.0.40-D6buAdoc.js";const v=({appId:a,columnName:p,columnValue:F,columnMetaData:e,storeColumn:i,columnValidation:b,onColumnChange:T,metaData:d,storeForm:o,formMode:h,locale:f,language:O,columnEvents:r})=>{j.debug(a,p,F,e,i,b,d,o,h,f,O);const x=B(),k={readOnly:s(d,e,i,h)};return R.jsx(P,{customInput:D,error:b==null?void 0:b.error,label:e.formLabel,value:F??"",required:e.is_nullable==="NO",slotProps:{htmlInput:k},className:i.classNames,helperText:A(i,f.enterTime),variant:w(),onValueChange:({value:t})=>{if(t===""&&e.is_nullable!=="NO")T(p,null),x(g({appId:a,columnName:p,columnError:!1,columnText:"",columnType:y.FORM}));else{T(p,(t+"000000").substring(0,6));let C=t.substring(2,3),K=t.substring(4,5);Number(C)>5||Number(K)>5?x(g({appId:a,columnName:p,columnError:!0,columnText:f.mandatoryField,columnType:y.FORM})):x(g({appId:a,columnName:p,columnError:!1,columnText:"",columnType:y.FORM}))}},onInvalid:t=>{t.preventDefault()},prefix:(i==null?void 0:i.prefix)??"",sx:{"& input":{textAlign:i.alignment}},format:"##:##:##",placeholder:"00:00:00",onBlurCapture:r==null?void 0:r.onBlur,onChangeCapture:r==null?void 0:r.onChange,onClickCapture:r==null?void 0:r.onClick,onDoubleClickCapture:r==null?void 0:r.onDoubleClick,onFocusCapture:r==null?void 0:r.onFocus,onKeyDownCapture:r==null?void 0:r.onKeyDown,onKeyUpCapture:r==null?void 0:r.onKeyUp})};export{v as default};
