import{j as a}from"./cm-1.0.32-roxymF9V.js";import{l as f,m as O,cb as U,cf as w,cd as E,cc as j,K as T}from"./lib-1.0.32-CBsDffd2.js";import{T as S}from"./TextField-1.0.32-EUJpMVir.js";import"./redux-1.0.32-BsgiH_bG.js";import"./vendor-1.0.32-BmpNFhoq.js";import"./loglevel-1.0.32-BZ7XahX3.js";import"./lodash-1.0.32-B7VmFneh.js";import"./moment-1.0.32-C5S46NFB.js";import"./Typography-1.0.32-D9d-UzA0.js";import"./iconBase-1.0.32-inVKjZEJ.js";import"./FormHelperText-1.0.32-BG3xt4JA.js";import"./useFormControl-1.0.32-Tf9RtQ-m.js";import"./cjs-1.0.32-AqZgyPIn.js";import"./notistack-1.0.32-N2grKTUm.js";import"./FormLabel-1.0.32-agP5qBoD.js";import"./Menu-1.0.32-CRF2Elfu.js";import"./AdminTheme-1.0.32-WcjuTcVF.js";import"./useControlled-1.0.32-fDn_qfrW.js";import"./createSvgIcon-1.0.32-DGmABpxr.js";const d=({columnName:x,columnValue:h,columnInitialValue:m,columnMetaData:p,storeColumn:e,columnValidation:r,onColumnChange:L,metaData:i,storeForm:g,formMode:t,locale:b})=>{f.debug(x,h,m,p,e,r,i,g,t,b);const R=O(h),v=Number(e.maxLength)<1||Number(e.maxLength)>p.character_maximum_length||isNaN(Number(e.maxLength))?p.character_maximum_length:Number(e.maxLength),_=r!=null&&r.error?r==null?void 0:r.text:b.enterMultiLineText+" ("+v+")";return a.jsx(S,{error:r==null?void 0:r.error,id:x,label:p.formLabel,value:R,required:p.is_nullable==="NO",multiline:!0,minRows:e.minRows,maxRows:e.maxRows,slotProps:{htmlInput:{maxLength:v,readOnly:U(i,p,e,t)}},className:w(),helperText:E(e,_),variant:j(),onChange:s=>{let N=s.target.value;s.target.value===""&&(t===T.INSERT||t===T.UPDATE&&g.preserveSpacesOnUpdate===!1||g.preserveSpacesOnUpdate===!0&&m!=="")&&(N=null),L(x,N)},onInvalid:s=>{s.preventDefault()},sx:{"& textarea":{textAlign:e.alignment}}})};export{d as default};
