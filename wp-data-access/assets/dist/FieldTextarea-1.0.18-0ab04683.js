import{l as O,j as R,el as U,ek as j}from"./main-1.0.18.js";import{F as i}from"./ThemeContainer-1.0.18-fbd92e13.js";import{T as y}from"./TextField-1.0.18-cf148b4e.js";import"./RestApi-1.0.18-cb72bd79.js";import"./Typography-1.0.18-dc3c0740.js";import"./useTheme-1.0.18-c1f3f722.js";import"./colorManipulator-1.0.18-95bf61ec.js";import"./iconBase-1.0.18-3c21f5e2.js";import"./index.esm-1.0.18-12f13c4a.js";import"./FallbackSpinner-1.0.18-e10446f4.js";import"./Spinner-1.0.18-de8df990.js";import"./Tooltip-1.0.18-5f32f0fd.js";import"./ThemeProvider-1.0.18-247b72cc.js";import"./Popper-1.0.18-20544c9b.js";import"./useControlled-1.0.18-12a74006.js";import"./Grow-1.0.18-4ebc2ce8.js";import"./FormHelperText-1.0.18-8b4ce85f.js";import"./useFormControl-1.0.18-87a8487d.js";import"./FormLabel-1.0.18-47dbe87d.js";import"./Menu-1.0.18-e8cb0649.js";import"./Popover-1.0.18-54868205.js";import"./Modal-1.0.18-870f459d.js";import"./createSvgIcon-1.0.18-dcf0276e.js";const D=({columnName:t,columnValue:T,columnInitialValue:h,columnMetaData:e,storeColumn:s,columnValidation:r,onColumnChange:_,metaData:v,storeForm:g,formMode:p,locale:m})=>{O.debug(t,T,h,e,s,r,v,g,p,m);const b={maxLength:e.character_maximum_length,className:s.classNames,readOnly:p===i.VIEW||p===i.UPDATE&&(v.primary_key.includes(t)||s.updatable===!1)},f=r!=null&&r.error?r==null?void 0:r.text:m.enterMultiLineText+" ("+e.character_maximum_length+")";return R.jsx(y,{error:r==null?void 0:r.error,id:t,label:e.formLabel,value:T??"",required:e.is_nullable==="NO",multiline:!0,minRows:3,maxRows:10,inputProps:b,helperText:U(s,f),variant:j(),onChange:x=>{let E=x.target.value;x.target.value===""&&(p===i.INSERT||p===i.UPDATE&&g.preserveSpacesOnUpdate===!1||g.preserveSpacesOnUpdate===!0&&h!=="")&&(E=null),_(t,E)},onInvalid:x=>{x.preventDefault()}})};export{D as default};