import{j as m}from"./cm-1.0.32-roxymF9V.js";import{l as a,m as u}from"./lib-1.0.32-CBsDffd2.js";import{g}from"./TableQuery-1.0.32-DLn0yGji.js";import{T as d}from"./TextField-1.0.32-EUJpMVir.js";import"./redux-1.0.32-BsgiH_bG.js";import"./vendor-1.0.32-BmpNFhoq.js";import"./loglevel-1.0.32-BZ7XahX3.js";import"./lodash-1.0.32-B7VmFneh.js";import"./moment-1.0.32-C5S46NFB.js";import"./main-1.0.32.js";import"./notistack-1.0.32-N2grKTUm.js";import"./useStoreTable-1.0.32-DHfF4DKP.js";import"./RestApi-1.0.32-Bp_RRidr.js";import"./index-1.0.32-DEU9wnLT.js";import"./cjs-1.0.32-AqZgyPIn.js";import"./Typography-1.0.32-D9d-UzA0.js";import"./iconBase-1.0.32-inVKjZEJ.js";import"./ActionsDml-1.0.32-CqneDSgR.js";import"./ConfirmDialog-1.0.32-A4KvBqFE.js";import"./AdminTheme-1.0.32-WcjuTcVF.js";import"./DialogContent-1.0.32-B0aW5NMk.js";import"./SanitizeComponent-1.0.32-pSotkHem.js";import"./dompurify-1.0.32-CCJo14B2.js";import"./index-1.0.32-wSDMfVDG.js";import"./tanstack-1.0.32-hjLg6WMC.js";import"./index.esm-1.0.32-DHLqzAfk.js";import"./createSvgIcon-1.0.32-DGmABpxr.js";import"./index-1.0.32-D6IhVoXv.js";import"./Collapse-1.0.32-3dNdwtSs.js";import"./Tooltip-1.0.32-BFRxm1kH.js";import"./Popper-1.0.32-Dr5x4zRa.js";import"./useControlled-1.0.32-fDn_qfrW.js";import"./Spinner-1.0.32-D1QL5ry3.js";import"./FormControlLabel-1.0.32-B7mCGY7x.js";import"./useFormControl-1.0.32-Tf9RtQ-m.js";import"./Checkbox-1.0.32-CFJQbOdr.js";import"./SwitchBase-1.0.32-8MhCpXB3.js";import"./Menu-1.0.32-CRF2Elfu.js";import"./InputAdornment-1.0.32-B4eTRvU4.js";import"./Autocomplete-1.0.32-CC-cYb5n.js";import"./Close-1.0.32-BV_W41ov.js";import"./TimePicker-1.0.32-JvxXQNTX.js";import"./useMobilePicker-1.0.32-aq7eJnRp.js";import"./index-1.0.32-6Cfvmv3-.js";import"./FormHelperText-1.0.32-BG3xt4JA.js";import"./visuallyHidden-1.0.32-Dan1xhjv.js";import"./ListItem-1.0.32-BDCZ88q2.js";import"./timeViewRenderers-1.0.32-oFPNP3d_.js";import"./MenuItem-1.0.32-Bc1CXi88.js";import"./DateTimePicker-1.0.32-BCOHYqEk.js";import"./Tabs-1.0.32-B237JaNe.js";import"./dateViewRenderers-1.0.32-BBL1OGiN.js";import"./Divider-1.0.32-kK3jX0R7.js";import"./DatePicker-1.0.32-D40Vxj8d.js";import"./Stack-1.0.32-BKAIHkUk.js";import"./Slider-1.0.32-C4ittimZ.js";import"./ListItemIcon-1.0.32-CPQjWjIH.js";import"./Radio-1.0.32-Dg2N7INw.js";import"./AlertTitle-1.0.32-CcGnHgem.js";import"./Switch-1.0.32-BfMlbG-m.js";import"./index.esm-1.0.32-BcBy0Voo.js";import"./useTheme-1.0.32-Boox29T5.js";import"./TableContainer-1.0.32-CcQeMHoT.js";import"./FallbackSpinner-1.0.32-kTXSQeKF.js";import"./ActionsSettings-1.0.32-u1MS6Fmu.js";import"./TargetEnum-1.0.32-DPFnTxiX.js";import"./ScopeEnum-1.0.32-B4DDvIDj.js";import"./index-1.0.32-D1JAhTpk.js";import"./TabPanel-1.0.32-DFUvt78C.js";import"./useTableUpdater-1.0.32-BssjPM3j.js";import"./settings-1.0.32-OrNy0l2i.js";import"./useScreenSize-1.0.32-ZGgk_gJq.js";import"./ThemeContainer-1.0.32-DQB7LmiJ.js";import"./AggregationLabelsEnum-1.0.32-BC8SFHGp.js";import"./useTableColumnOrder-1.0.32-Q496z8_E.js";import"./FormLabel-1.0.32-agP5qBoD.js";const Oi=({value:t,columnState:o,columnMetaData:r,setValue:e,saveChanges:s,cancel:n,setButtons:p})=>{a.debug(t,o,r);const l=u(t);return m.jsx("div",{onClick:i=>{i.stopPropagation()},children:m.jsx(d,{className:"pp-inline-editing",value:l,required:r.is_nullable==="NO",slotProps:{input:{},htmlInput:{maxLength:r.character_maximum_length}},variant:"outlined",onChange:i=>{e(i.target.value===""?null:i.target.value)},onKeyDown:i=>{i.key==="Enter"?s():i.key==="Escape"&&n()},onFocus:()=>{p(!0)},onBlur:()=>{setTimeout(()=>{p(!1)},200)},sx:g(o)})})};export{Oi as default};
