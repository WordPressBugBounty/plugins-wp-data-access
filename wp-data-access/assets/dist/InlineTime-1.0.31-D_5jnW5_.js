import{j as p}from"./cm-1.0.31-BzgG35ZX.js";import{e as l}from"./notistack-1.0.31-CuGQWCbt.js";import{i as c}from"./useTheme-1.0.31-BXg8i2QZ.js";import{l as u,C as j}from"./lib-1.0.31-BbX3jq4e.js";import{g as x}from"./TableQuery-1.0.31-s1kaUzCT.js";import{g as r}from"./ThemeContainer-1.0.31-D01zq5BI.js";import{ac as y}from"./useMobilePicker-1.0.31-DH3b4aWb.js";import{A as Y}from"./AdapterDayjs-1.0.31-BKjFnHxt.js";import{T as g}from"./TimePicker-1.0.31-BANN2pIs.js";import"./redux-1.0.31-CuzmJMK6.js";import"./vendor-1.0.31-BmpNFhoq.js";import"./RestApi-1.0.31-C4KxgDIV.js";import"./index-1.0.31-DboOrfK9.js";import"./Typography-1.0.31-BdhCS1KD.js";import"./cjs-1.0.31-B-_HdexB.js";import"./iconBase-1.0.31-C37NsRUm.js";import"./loglevel-1.0.31-BZ7XahX3.js";import"./lodash-1.0.31-BtCjXqrS.js";import"./moment-1.0.31-C5S46NFB.js";import"./main-1.0.31.js";import"./useStoreTable-1.0.31-CksmwD3u.js";import"./index-1.0.31-C4m7fjwq.js";import"./ActionsDml-1.0.31-DnIQKtBi.js";import"./ConfirmDialog-1.0.31-bZDmgpd0.js";import"./AdminTheme-1.0.31-QbwKcRV7.js";import"./DialogContent-1.0.31-_6ykng6a.js";import"./SanitizeComponent-1.0.31-Dhv0AQbJ.js";import"./dompurify-1.0.31-CCJo14B2.js";import"./index-1.0.31-C_6FsHsh.js";import"./tanstack-1.0.31-DxTNlTkm.js";import"./index.esm-1.0.31-BlNbk2TL.js";import"./createSvgIcon-1.0.31-BC4iq9Gi.js";import"./Collapse-1.0.31-CkBm-DA4.js";import"./Tooltip-1.0.31-crORCg22.js";import"./Popper-1.0.31-QmfursjS.js";import"./useControlled-1.0.31-27-LkxG9.js";import"./Spinner-1.0.31-Be7r01J6.js";import"./FormControlLabel-1.0.31-VNfgE3Oe.js";import"./useFormControl-1.0.31-2YJOQA8g.js";import"./Checkbox-1.0.31-vMcA9dS9.js";import"./SwitchBase-1.0.31-AIM_3--O.js";import"./Menu-1.0.31-BOTBPSPr.js";import"./InputAdornment-1.0.31-DPyTBX7W.js";import"./Autocomplete-1.0.31-DLbMViDM.js";import"./TextField-1.0.31-TtMrk-_t.js";import"./FormHelperText-1.0.31-CQcG9a5q.js";import"./FormLabel-1.0.31-7Vju-x1c.js";import"./Close-1.0.31-BTPwVQpD.js";import"./DateTimePicker-1.0.31-D95kRUCa.js";import"./index-1.0.31-545nqCBP.js";import"./Tabs-1.0.31-XRJEidP6.js";import"./timeViewRenderers-1.0.31-CeUACARG.js";import"./MenuItem-1.0.31-CTowyoSp.js";import"./dateViewRenderers-1.0.31-B5XFWF81.js";import"./Divider-1.0.31-BWKAGEdz.js";import"./DatePicker-1.0.31-wKpNLdLs.js";import"./Stack-1.0.31-Bz9nXUZB.js";import"./Slider-1.0.31-BDZ4XVru.js";import"./visuallyHidden-1.0.31-Dan1xhjv.js";import"./ListItemIcon-1.0.31-BCafYY7N.js";import"./Radio-1.0.31-DbEe8Ljo.js";import"./AlertTitle-1.0.31-Zosaacrw.js";import"./Switch-1.0.31-LPOyRUXk.js";import"./index.esm-1.0.31-BcBy0Voo.js";import"./TableContainer-1.0.31-D5nXSZNu.js";import"./FallbackSpinner-1.0.31-B4qqxHwC.js";import"./ActionsSettings-1.0.31-Cf56Toxs.js";import"./TargetEnum-1.0.31-DPFnTxiX.js";import"./ScopeEnum-1.0.31-B4DDvIDj.js";import"./index-1.0.31-ujFQUobk.js";import"./TabPanel-1.0.31-CQFpWPRX.js";import"./useTableUpdater-1.0.31-BVeL37Z7.js";import"./settings-1.0.31-zyRrYuee.js";import"./useScreenSize-1.0.31-DKas25yF.js";import"./useTableColumnOrder-1.0.31-CvAinKiB.js";import"./ListItem-1.0.31-CWrAezii.js";const Bi=({value:o,setValue:s,setButtons:e,saveChanges:d,cancel:f,locale:t,language:m,columnState:n})=>{u.debug(o);const a=r();return p.jsx("div",{onClick:i=>{i.stopPropagation()},children:p.jsx(y,{dateAdapter:Y,adapterLocale:n.localize?c((m==null?void 0:m.dayjs)??j.defaultLanguage.dayjs):void 0,children:p.jsx(g,{className:"pp-inline-editing",value:o===null?null:r(a.format("YYYY-MM-DD")+"T"+o),views:["hours","minutes","seconds"],onChange:i=>{s(i===null?null:r(i).format("HH:mm:ss"))},slotProps:{textField:{variant:"outlined",onKeyDown:i=>{i.key==="Enter"?o!==null&&!r(a.format("YYYY-MM-DD")+"T"+o).isValid()?l(t==null?void 0:t.invalidTime,{variant:"error"}):d():i.key==="Escape"&&f()},onBlur:()=>{setTimeout(()=>{e(!1)},200)},onFocus:()=>{e(!0)},sx:x(n)}}})})})};export{Bi as default};
