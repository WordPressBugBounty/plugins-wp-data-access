import{l as A,j as E,d$ as D,cJ as j,cI as y,dZ as P,dY as v}from"./main-1.0.15.js";import{a as F,an as L}from"./main-1.0.15-e2ad00f6.js";import{d as t}from"./FormContainer-1.0.15-e5968243.js";import{a as k}from"./useMobilePicker-1.0.15-5df19a3e.js";import{A as H}from"./AdapterDayjs-1.0.15-87bf1f1f.js";import{T as M}from"./TimePicker-1.0.15-1545716b.js";import"./iconBase-1.0.15-5866dbfd.js";import"./useScreenSize-1.0.15-a1dd46fa.js";import"./ActionsDml-1.0.15-409ee4a6.js";import"./CardActions-1.0.15-e9dc43ac.js";import"./DialogContent-1.0.15-e50a43f8.js";import"./Menu-1.0.15-3ae4ddd1.js";import"./InputAdornment-1.0.15-4ec316af.js";import"./TextField-1.0.15-73384817.js";import"./Close-1.0.15-8d33e66c.js";import"./date-time-utils-1.0.15-31b6fdea.js";import"./MenuItem-1.0.15-cb0e11e9.js";const Q=({appId:i,columnName:s,columnValue:o,columnMetaData:m,storeColumn:e,columnValidation:r,onColumnChange:x,metaData:d,storeTable:b,storeForm:g,formMode:T,locale:f,language:h})=>{A.debug(i,s,o,m,e,r,d,b,g,T,f,h);const Y=F(),a=t();return E.jsx(k,{dateAdapter:H,adapterLocale:e.localize?D():void 0,children:E.jsx(M,{className:"pp-picker",value:t(a.format("YYYY-MM-DD")+"T"+o),label:m.formLabel,views:["hours","minutes","seconds"],disabled:T===L.VIEW||T===L.UPDATE&&d.primary_key.includes(s),onChange:p=>{p!==null&&!t(a.format("YYYY-MM-DD")+"T"+p).isValid()?Y(j({appId:i,columnName:s,columnError:!0,columnText:f.invalidTime,columnType:y.COLUMN})):(p===null?x(s,null):x(s,t(p).format("HH:mm:ss")),Y(j({appId:i,columnName:s,columnError:!1,columnText:"",columnType:y.COLUMN})))},slotProps:{textField:{error:r==null?void 0:r.error,helperText:r!=null&&r.error?r==null?void 0:r.text:P(e,f.enterTime),variant:v(),required:m.is_nullable==="NO",inputProps:{className:e.classNames}}}})})};export{Q as default};