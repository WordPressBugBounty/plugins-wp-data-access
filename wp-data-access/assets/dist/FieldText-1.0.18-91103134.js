import{l as y,j as E,el as F,ek as N}from"./main-1.0.18.js";import{F as g}from"./ThemeContainer-1.0.18-fbd92e13.js";import{T as L}from"./TextField-1.0.18-cf148b4e.js";import{I as O}from"./InputAdornment-1.0.18-958a8148.js";import"./RestApi-1.0.18-cb72bd79.js";import"./Typography-1.0.18-dc3c0740.js";import"./useTheme-1.0.18-c1f3f722.js";import"./colorManipulator-1.0.18-95bf61ec.js";import"./iconBase-1.0.18-3c21f5e2.js";import"./index.esm-1.0.18-12f13c4a.js";import"./FallbackSpinner-1.0.18-e10446f4.js";import"./Spinner-1.0.18-de8df990.js";import"./Tooltip-1.0.18-5f32f0fd.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Popper-1.0.18-20544c9b.js";import"./useControlled-1.0.18-12a74006.js";import"./Grow-1.0.18-4ebc2ce8.js";import"./FormHelperText-1.0.18-8b4ce85f.js";import"./useFormControl-1.0.18-87a8487d.js";import"./FormLabel-1.0.18-47dbe87d.js";import"./Menu-1.0.18-e8cb0649.js";import"./Popover-1.0.18-54868205.js";import"./Modal-1.0.18-870f459d.js";import"./createSvgIcon-1.0.18-dcf0276e.js";const R=(i,f,h,e,r,p)=>{let T;return T},o=({columnName:i,columnValue:f,columnInitialValue:h,columnMetaData:e,storeColumn:r,columnValidation:p,onColumnChange:T,metaData:k,storeForm:v,formMode:t,locale:A,columnCode:x})=>{var _,a,b,j;y.debug(i,f,h,e,r,p,k,v,t,A,x);const S=R(x==null?void 0:x.onClick),P={maxLength:e.character_maximum_length,className:r.classNames,readOnly:t===g.VIEW||t===g.UPDATE&&(k.primary_key.includes(i)||r.updatable===!1)},U=p!=null&&p.error?p==null?void 0:p.text:A.enterText+" ("+e.character_maximum_length+")";return E.jsx(L,{error:p==null?void 0:p.error,label:e.formLabel,value:f??"",required:e.is_nullable==="NO",inputProps:P,InputProps:{startAdornment:(r==null?void 0:r.prefix)&&E.jsx(O,{position:"start",children:(a=(_=r==null?void 0:r.prefix)==null?void 0:_.trimStart())==null?void 0:a.trimEnd()}),endAdornment:(r==null?void 0:r.suffix)&&E.jsx(O,{position:"end",children:(j=(b=r==null?void 0:r.suffix)==null?void 0:b.trimStart())==null?void 0:j.trimEnd()})},helperText:F(r,U),variant:N(),onChange:s=>{let I=s.target.value;s.target.value===""&&(t===g.INSERT||t===g.UPDATE&&v.preserveSpacesOnUpdate===!1||v.preserveSpacesOnUpdate===!0&&h!=="")&&(I=null),T(i,I)},onInvalid:s=>{s.preventDefault()},sx:{"& input":{textAlign:r.alignment}},onClick:S})};export{o as default};