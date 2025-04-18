import{ay as O,l as f,bH as d,P as e}from"./lib-1.0.40-CJM-IO_o.js";import{r as A}from"./redux-1.0.40-W_04YL6Z.js";import{u as D}from"./index-1.0.40-xxiPHCiq.js";import{d as z,o as W}from"./Typography-1.0.40-oRKYqE3b.js";const K=i=>O;let U;const b="16.5px 14px",V=(i,n,t)=>{f.debug("init app theme"),f.debug(i,t,n);const k=D("(max-width: 600px)");return U=A.useMemo(()=>{f.debug("refresh app theme");const s=(t.spacing.fieldTop??16.5)+(t.fieldVariant===d.FILLED?20:0),m=t.spacing.fieldTopUnit??"px",x=t.spacing.fieldRight??14,M=t.spacing.fieldRightUnit??"px",C=t.spacing.fieldBottom??16.5,R=t.spacing.fieldBottomUnit??"px",h=t.spacing.fieldLeft??14,F=t.spacing.fieldLeftUnit??"px",a=n.inlineEditing.spacing.fieldTop??8,p=n.inlineEditing.spacing.fieldTopUnit??"px",B=n.inlineEditing.spacing.fieldRight??8,L=n.inlineEditing.spacing.fieldRightUnit??"px",l=n.inlineEditing.spacing.fieldBottom??8,r=n.inlineEditing.spacing.fieldBottomUnit??"px",u=n.inlineEditing.spacing.fieldLeft??8,g=n.inlineEditing.spacing.fieldLeftUnit??"px",{palette:v}=z(),o=v.augmentColor({color:{main:i.color[i.shade]}});i.useCustomColor&&(o.main=i.customTextColor,o.contrastText=i.customContrastColor);const y=i.inputFontSize+i.inputFontSizeUnit,c=i.labelFontSize+i.labelFontSizeUnit,E=i.hintFontSize+i.hintFontSizeUnit,I=i.inheritFontFamily?"inherit":i.customFontFamily!==""?i.customFontFamily:'"'+i.fontFamily.join('","')+'"';return f.debug(I),z({palette:{mode:i.mode,primary:{main:o.main,contrastText:o.contrastText}},typography:{fontFamily:I,fontSize:i.fontSize},components:{MuiPaper:{styleOverrides:{root:{borderRadius:i.borderRadius,"& .pp-top-toolbar .MuiPaper-root":{backgroundColor:W(o.main,i.mode===e.DARK?.2:.1)}}}},MuiToolbar:{styleOverrides:{root:{borderRadius:i.borderRadius}}},MuiInputBase:{styleOverrides:{root:{input:{color:o.main,backgroundColor:"transparent",borderColor:"rgba(0, 0, 0, 0.23)",fontWeight:"normal",padding:b,paddingTop:s+m,paddingBottom:C+R,paddingRight:x+M,paddingLeft:h+F,border:"none",fontSize:y},textarea:{color:o.main,backgroundColor:"transparent",borderColor:"rgba(0, 0, 0, 0.23)",fontWeight:"normal",border:"none"},"& .MuiSelect-select":{paddingTop:s+m,paddingBottom:C+R,paddingRight:x+M,paddingLeft:h+F},"&.pp-inline-editing .MuiSelect-select, &.pp-inline-editing .MuiSelect-multiple":{paddingTop:a+p,paddingBottom:l+r,paddingLeft:u+g},"input:focus, textarea:focus":{boxShadow:"none",outline:"none"},"& fieldset legend":{fontSize:c}}}},MuiTextField:{styleOverrides:{root:{width:"100%",minWidth:"150px","&.pp-inline-editing":{input:{paddingTop:a+p,paddingRight:B+L,paddingBottom:l+r,paddingLeft:u+g},"&.pp-date-time":{minWidth:"230px"},"&.pp-textarea .MuiInputBase-root":{paddingTop:a+p,paddingRight:B+L,paddingBottom:l+r,paddingLeft:u+g},"& .MuiInputBase-root":{...n.inlineEditing.addColumnButton===!0&&{borderTopRightRadius:0,borderBottomRightRadius:0}}},"& .MuiInputBase-root":{...t.fieldVariant===d.FILLED&&{backgroundColor:i.mode===e.DARK?"rgba(255, 255, 255, 0.07)":"rgba(0, 0, 0, 0.06)"}},"& .MuiInputBase-root.Mui-disabled":{...t.fieldVariant===d.FILLED&&{backgroundColor:i.mode===e.DARK?"rgba(255, 255, 255, 0.07)":"rgba(0, 0, 0, 0.06)"}}}}},MuiAutocomplete:{styleOverrides:{root:{"&.Mui-disabled":{WebkitTextFillColor:"unset"},"& input.Mui-disabled":{WebkitTextFillColor:"unset"},"& .MuiInputBase-root.Mui-disabled::before":{borderBottomStyle:"solid"},...t.fieldVariant===d.STANDARD&&{"& .MuiInput-root input.MuiInput-input":{padding:b}},...t.fieldVariant===d.FILLED&&{"& .MuiFilledInput-root input.MuiFilledInput-input":{padding:b}},"&.pp-inline-editing .MuiFormControl-root .MuiInputBase-root":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,input:{"&[type=text].MuiInputBase-input":{paddingTop:a+p,paddingRight:"55px",paddingBottom:l+r,paddingLeft:u+g}}}}}},MuiOutlinedInput:{defaultProps:{notched:!0},styleOverrides:{root:{fontSize:y}}},MuiInputLabel:{defaultProps:{shrink:!0},styleOverrides:{root:{fontSize:c}}},MuiFormControl:{styleOverrides:{root:{"&.pp-picker":{WebkitTextFillColor:"unset"},"&.pp-picker input.Mui-disabled":{WebkitTextFillColor:"unset"},"&.pp-picker::before":{borderBottomStyle:"solid"},"&.pp-picker .Mui-disabled::before":{borderBottomStyle:"solid"},"&.pp-picker .MuiInputBase-root .MuiInputAdornment-root button.MuiButtonBase-root":{marginRight:0}}}},MuiFormControlLabel:{styleOverrides:{label:{fontSize:c}}},MuiFormLabel:{styleOverrides:{root:{borderRadius:i.borderRadius,fontSize:c,color:i.mode===e.DARK?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.6)","&.Mui-disabled":{color:i.mode===e.DARK?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.6)"}}}},MuiFormHelperText:{styleOverrides:{root:{fontSize:E}}},MuiAccordionSummary:{styleOverrides:{root:{fontSize:19,marginTop:"1px"},content:{fontWeight:"normal",padding:"20px 20px 20px 20px"}}},MuiAccordionDetails:{styleOverrides:{root:{margin:k?"0 10px 15px 10px":"0 40px 45px 40px",padding:0}}},MuiTableHead:{styleOverrides:{root:{"& th.pp-column-orderable .Mui-TableHeadCell-Content-Wrapper:hover":{backgroundColor:i.mode===e.DARK?"#262626":"rgb(242, 242, 242)",borderRadius:"10px",padding:"0 10px",marginLeft:0,marginRight:0},"& th.pp-column-orderable.pp-align-right .Mui-TableHeadCell-Content-Wrapper:hover":{marginRight:"10px"},"& th.pp-align-left .Mui-TableHeadCell-Content-Wrapper":{marginLeft:"10px",marginRight:"10px"},"& th.pp-align-right .Mui-TableHeadCell-Content-Wrapper":{marginLeft:"10px",marginRight:"20px"},"& th.pp-align-left .Mui-TableHeadCell-Content":{marginLeft:"-10px",width:"100%"},"& th.pp-align-right .Mui-TableHeadCell-Content":{width:"calc(100% + 10px)","& .Mui-TableHeadCell-Content-Labels":{marginRight:"-10px"}},"& th .Mui-TableHeadCell-Content-Labels .MuiButtonBase-root":{marginRight:"5px"}}}},MuiTableCell:{styleOverrides:{root:{color:o.main}}}},zIndex:{drawer:9999999,modal:99999990,tooltip:99999999,snackbar:999999999}})},[i,n,t]),U};export{V as A,U as a,K as u};
