import{l as U,j,dZ as y,dY as L}from"./main-1.0.15.js";import{an as x}from"./main-1.0.15-e2ad00f6.js";import{T as P}from"./TextField-1.0.15-73384817.js";import"./iconBase-1.0.15-5866dbfd.js";import"./Close-1.0.15-8d33e66c.js";import"./Menu-1.0.15-3ae4ddd1.js";const q=({columnName:p,columnValue:h,columnInitialValue:v,columnMetaData:r,storeColumn:g,columnValidation:e,onColumnChange:f,metaData:E,storeForm:T,formMode:s,locale:_})=>{U.debug(p,h,v,r,g,e,E,T,s,_);const O={maxLength:r.character_maximum_length,className:g.classNames,readOnly:s===x.VIEW||s===x.UPDATE&&E.primary_key.includes(p)},R=e!=null&&e.error?e==null?void 0:e.text:_.enterMultiLineText+" ("+r.character_maximum_length+")";return j.jsx(P,{error:e==null?void 0:e.error,id:p,label:r.formLabel,value:h??"",required:r.is_nullable==="NO",multiline:!0,minRows:3,maxRows:10,inputProps:O,helperText:y(g,R),variant:L(),onChange:t=>{let b=t.target.value;t.target.value===""&&(s===x.INSERT||s===x.UPDATE&&T.preserveSpacesOnUpdate===!1||T.preserveSpacesOnUpdate===!0&&v!=="")&&(b=null),f(p,b)},onInvalid:t=>{t.preventDefault()}})};export{q as default};
