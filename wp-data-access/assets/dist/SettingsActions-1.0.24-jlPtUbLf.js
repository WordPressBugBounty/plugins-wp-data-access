import{j as s}from"./cm-1.0.24-lBsX3THK.js";import{r as l}from"./redux-1.0.24-Bx8jJ3ee.js";import{a as pe,b as ce}from"./RestApi-1.0.24-BCmVwqnT.js";import{l as o,b as c,a_ as _,b0 as U,Q as $}from"./lib-1.0.24-up-HxGpi.js";import{u as ue,T as u,d as me,e as de,a as xe,b as he}from"./ActionsAdmin-1.0.24-COUjpFzW.js";import{e as i}from"./notistack-1.0.24-EH6RgmCJ.js";import{C as k}from"./ConfirmDialog-1.0.24-5s_WiKiN.js";import{B as n,S as ge}from"./Spinner-1.0.24-DzEoy0TD.js";import{b as je}from"./index-1.0.24-DqBQ5tn0.js";import{C as ve}from"./index-1.0.24-Cm6is9nS.js";import{u as fe}from"./useExplorer-1.0.24-Cts7Zoll.js";import{B as x}from"./CardContent-1.0.24-DpYcLPhl.js";import{F as E,a as be}from"./FormHelperText-1.0.24-dIoAVumM.js";import{I as z,S as R,T as L}from"./TextField-1.0.24-CX3Aj71c.js";import{M as m}from"./MenuItem-1.0.24-cnqjqUCU.js";import{F as J}from"./FormControlLabel-1.0.24-jTuSRk-Y.js";import{S as X}from"./Switch-1.0.24-BzowSg2t.js";import{T as we}from"./Tooltip-1.0.24-C0iSk1Jx.js";import"./vendor-1.0.24-BmpNFhoq.js";import"./loglevel-1.0.24-BZ7XahX3.js";import"./lodash-1.0.24-CC2RnyUh.js";import"./moment-1.0.24-C5S46NFB.js";import"./AdminTheme-1.0.24-DxOFSSNd.js";import"./Typography-1.0.24-DtpcakL_.js";import"./DialogContent-1.0.24-o2zFJd9S.js";import"./index-1.0.24-CyelUMLZ.js";import"./iconBase-1.0.24-C7lJg7VQ.js";import"./Menu-1.0.24-Bmzze4W5.js";import"./ThemeProvider-1.0.24-koXQmW7k.js";import"./useFormControl-1.0.24-BVJe4wXv.js";import"./FormLabel-1.0.24-DNrTGbzF.js";import"./useControlled-1.0.24-DnsqB4VW.js";import"./createSvgIcon-1.0.24-BKX7HR5-.js";import"./SwitchBase-1.0.24-k3CO2XxE.js";import"./Popper-1.0.24-pV6SBss6.js";const rs=({dbs:r,tbl:a,typ:p,metaData:t})=>{var W,q,V,M,G,O,Q,H;o.debug(r,a,p,t);const h=pe(),[g,K]=l.useState("sql"),[w,Y]=l.useState(!0),[f,Z]=l.useState(""),[N,D]=l.useState(r),[y,ee]=l.useState(""),[C,se]=l.useState(!0),[ne,I]=l.useState(!1),[re,P]=l.useState(!1),[ie,A]=l.useState(!1),[te,S]=l.useState(!1),oe=fe(),v=ue(),B=l.useMemo(()=>{const e=[];for(const d in v)e.push(d);return e},[v]);o.debug(B);const j=oe.selected,[b,F]=l.useState(v[r].pdsDbs===!0?((V=(q=(W=t==null?void 0:t.settings)==null?void 0:W.wp)==null?void 0:q.connect)==null?void 0:V.interval)??"":""),[T,ae]=l.useState(v[r].pdsDbs===!0?((O=(G=(M=t==null?void 0:t.settings)==null?void 0:M.wp)==null?void 0:G.connect)==null?void 0:O.unit)??"":""),le=e=>{ce.post(t.settings.wp.homea+"?action=wpda_pds_update_interval",e,{headers:{"Content-Type":"multipart/form-data"}}).then(d=>{o.error(e,d)}).catch(d=>{o.error("error",d)})};return s.jsxs(s.Fragment,{children:[s.jsxs(n,{sx:{margin:0,padding:0,"& .pp-action":{display:"grid",gridTemplateColumns:"150px 1fr",alignItems:"center",margin:0,padding:"30px",borderBottom:"1px solid #ddd"},"& .pp-action button":{width:"120px"}},children:[p===u.TABLE&&s.jsxs(n,{className:"pp-action",children:[s.jsx(n,{children:s.jsxs("form",{action:t.settings.wp.home+"?action=wpda_export",method:"post",target:"_blank",children:[s.jsx("input",{type:"hidden",name:"type",value:"table"}),s.jsx("input",{type:"hidden",name:"wpdaschema_name",value:r}),s.jsx("input",{type:"hidden",name:"table_names",value:a}),s.jsx("input",{type:"hidden",name:"format_type",value:g}),s.jsx("input",{type:"hidden",name:"include_table_settings",value:g==="sql"&&w?"on":"off"}),s.jsx("input",{type:"hidden",name:"_wpnonce",value:t.settings.wp.aonce.split("-")[0]}),s.jsx(x,{variant:"contained",type:"submit",children:"Export"})]})}),s.jsxs(n,{sx:{display:"grid"},children:[s.jsxs(E,{children:[s.jsx(z,{variant:"outlined",children:"Export to"}),s.jsxs(R,{MenuProps:{id:"pp-select-menu"},label:"Export to",value:g,onChange:e=>{K(e.target.value)},children:[s.jsx(m,{value:"sql",children:"SQL"},"sql"),s.jsx(m,{value:"csv",children:"CSV"},"csv"),s.jsx(m,{value:"json",children:"JSON"},"json"),s.jsx(m,{value:"excel",children:"Excel"},"excel"),s.jsx(m,{value:"xml",children:"XML"},"xml")]})]}),s.jsx(J,{sx:{visibility:g==="sql"?"visible":"hidden",height:g==="sql"?"auto":0,marginTop:g==="sql"?"10px":0,marginLeft:0},control:s.jsx(X,{checked:w,onClick:e=>{Y(!w),e.stopPropagation()}}),label:"With table settings",labelPlacement:"end"})]})]}),j[r]!=="system"&&(j[r]!=="wp"||!t.settings.wp.tables.includes(a))&&s.jsxs(n,{className:"pp-action",children:[s.jsx(n,{children:s.jsx(x,{variant:"contained",onClick:()=>{a!==f&&f.trim()!==""?I(!0):i("Nothing to rename",{variant:"error"})},children:"Rename"})}),s.jsx(n,{children:s.jsx(L,{label:p===u.TABLE?"New table name":"New view name",value:f,onChange:e=>{Z(e.target.value)},fullWidth:!0})})]}),p===u.TABLE&&s.jsxs(n,{className:"pp-action",children:[s.jsxs(n,{children:[s.jsx(x,{variant:"contained",onClick:()=>{y.trim()!==""?(S(!0),me(r,N,a,y,C,e=>{if(o.debug(e),e!=null&&e.code&&(e==null?void 0:e.message)!==void 0)switch(e.code){case"ok":h(_({dbs:r})),i(e.message,{variant:"success"});break;case"info":i(e.message,{variant:"info"});break;default:o.error(e),i(e.message??c.contactSupport,{variant:"error"})}else o.error(e),i(c.contactSupport,{variant:"error"});S(!1)},e=>{o.error("error",e),i(e??c.contactSupport,{variant:"error"}),S(!1)})):i("Nothing to rename",{variant:"error"})},children:"Copy"}),s.jsx(J,{control:s.jsx(X,{checked:C,onClick:e=>{se(!C),e.stopPropagation()}}),label:"Copy data",labelPlacement:"end",sx:{height:"56px"}}),s.jsx(n,{sx:{display:te?"block":"none","& > div":{marginRight:"30px"},"& span.MuiCircularProgress-root, svg":{height:"20px !important",width:"20px !important"}},children:s.jsx(ge,{title:"Copying..."})})]}),s.jsxs(n,{sx:{display:"grid",gridGap:"10px"},children:[s.jsxs(E,{fullWidth:!0,children:[s.jsx(z,{variant:"outlined",children:"To database"}),s.jsxs(R,{MenuProps:{id:"pp-select-menu"},label:"To database",value:N,onChange:e=>{D(e.target.value)},children:[...B.map(e=>s.jsx(m,{value:e,children:e},e))]})]}),s.jsx(L,{label:"To table name",value:y,onChange:e=>{ee(e.target.value)},fullWidth:!0})]})]}),p===u.TABLE&&j[r]!=="system"&&(j[r]!=="wp"||!t.settings.wp.tables.includes(a))&&s.jsxs(n,{className:"pp-action",children:[s.jsx(n,{children:s.jsx(x,{variant:"contained",onClick:()=>{P(!0)},children:"Truncate"})}),s.jsxs(n,{sx:{display:"grid",gridGap:"5px"},children:[s.jsx("span",{children:"Deletes all data permanently."}),s.jsx("strong",{children:"This action cannot be undone!"})]})]}),j[r]!=="system"&&(j[r]!=="wp"||!t.settings.wp.tables.includes(a))&&s.jsxs(n,{className:"pp-action",children:[s.jsx(n,{children:s.jsx(x,{variant:"contained",onClick:()=>{A(!0)},children:"Drop"})}),s.jsxs(n,{sx:{display:"grid",gridGap:"5px"},children:[p==u.VIEW?s.jsx("span",{children:"Deletes view permanently."}):s.jsx("span",{children:"Deletes table and all data permanently."}),s.jsx("strong",{children:"This action cannot be undone!"})]})]}),p===u.TABLE&&s.jsxs(n,{className:"pp-action",children:[s.jsx(n,{children:s.jsxs("form",{method:"POST",action:t.settings.wp.home+"?page=wpda_designer",children:[s.jsx("input",{type:"hidden",name:"action",value:"edit"}),s.jsx("input",{type:"hidden",name:"action2",value:"init"}),s.jsx("input",{type:"hidden",name:"wpda_schema_name",value:r}),s.jsx("input",{type:"hidden",name:"wpda_schema_name_re",value:r}),s.jsx("input",{type:"hidden",name:"wpda_table_name",value:a}),s.jsx("input",{type:"hidden",name:"wpda_table_name_re",value:a}),s.jsx("input",{type:"hidden",name:"_wpnonce",value:t.settings.wp.alter}),s.jsx("input",{type:"hidden",name:"page_number",value:"1"}),s.jsx("input",{type:"hidden",name:"caller",value:"dataexplorer"}),s.jsx(x,{variant:"contained",type:"submit",children:"ALTER"})]})}),s.jsx(n,{sx:{display:"grid",gridGap:"5px"},children:"Loads table into the Data Designer."})]}),v[r].pdsDbs===!0&&((H=(Q=t==null?void 0:t.settings)==null?void 0:Q.wp)==null?void 0:H.connect)!==!1&&s.jsxs(n,{className:"pp-action",children:[s.jsx(n,{children:s.jsx(x,{variant:"contained",onClick:()=>{if(b!==""&&b>0&&T!==""){const e=new FormData;e.append("wpnonce",t.settings.wp.refresh),e.append("schema_name",r),e.append("table_name",a),e.append("interval",b.toString()),e.append("unit",T),le(e)}else i("Please enter valid scheduled update values",{variant:"error"})},children:"Refresh"})}),s.jsxs(n,{sx:{display:"grid",gridGap:"5px"},children:[s.jsx(n,{children:"Next scheduled update"}),s.jsxs(n,{sx:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyContent:"start",alignItems:"center",gap:"5px"},children:[s.jsx(L,{type:"number",slotProps:{htmlInput:{min:0}},value:b,autoComplete:"off",onChange:e=>{const d=e.target.value.replaceAll("-","");F(d===""?"":Number(d))}}),s.jsxs(R,{MenuProps:{id:"pp-select-menu"},value:T,onChange:e=>{ae(e.target.value)},children:[s.jsx(m,{value:""}),s.jsx(m,{value:"hour",children:"hour"}),s.jsx(m,{value:"day",children:"day"})]})]}),s.jsx(E,{children:s.jsx(be,{children:"Enter and press REFRESH to apply"})})]})]}),t.create!==""&&s.jsxs(n,{className:"pp-action",children:[s.jsx(n,{children:s.jsx(ve,{text:t.create,onCopy:()=>{i("SQL was copied to your clipboard",{variant:"info"})},children:s.jsx(we,{title:"Copy SQL to clipboard",children:s.jsx(x,{variant:"contained",endIcon:s.jsx(je,{}),sx:{display:"flex",alignItems:"flex-start","& svg":{width:"50%"}},children:"SQL"})})})}),s.jsx(n,{sx:{display:"grid",gridGap:"5px"},children:s.jsx(n,{sx:{whiteSpace:"pre-wrap",fontSize:"70%"},children:t.create})})]})]}),s.jsx(k,{title:`Rename ${p===u.VIEW?"view":"table"}?`,message:"This can affect existing apps using this table!",open:ne,setOpen:I,onConfirm:()=>{de(r,a,f,e=>{if(o.debug(e),e!=null&&e.code&&(e==null?void 0:e.message)!==void 0)switch(e.code){case"ok":p===u.VIEW?h(U({dbs:r})):h(_({dbs:r})),h($({})),i(e.message,{variant:"success"});break;case"info":i(e.message,{variant:"info"});break;default:o.error(e),i(e.message??c.contactSupport,{variant:"error"})}else o.error(e),i(c.contactSupport,{variant:"error"})},e=>{o.error("error",e),i(e??c.contactSupport,{variant:"error"})})}}),s.jsx(k,{title:"Truncate table?",message:"This action cannot be undone!",open:re,setOpen:P,onConfirm:()=>{xe(r,a,e=>{if(o.debug(e),e!=null&&e.code&&(e==null?void 0:e.message)!==void 0)switch(e.code){case"ok":i(e.message,{variant:"success"});break;case"info":i(e.message,{variant:"info"});break;default:o.error(e),i(e.message??c.contactSupport,{variant:"error"})}else o.error(e),i(c.contactSupport,{variant:"error"})},e=>{o.error("error",e),i(e??c.contactSupport,{variant:"error"})})}}),s.jsx(k,{title:`Drop ${p===u.VIEW?"view":"table"}?`,message:"This action cannot be undone!",open:ie,setOpen:A,onConfirm:()=>{he(r,a,p,e=>{if(o.debug(e),e!=null&&e.code&&(e==null?void 0:e.message)!==void 0)switch(e.code){case"ok":p===u.VIEW?h(U({dbs:r})):h(_({dbs:r})),h($({})),i(e.message,{variant:"success"});break;case"info":i(e.message,{variant:"info"});break;default:o.error(e),i(e.message??c.contactSupport,{variant:"error"})}else o.error(e),i(c.contactSupport,{variant:"error"})},e=>{o.error("error",e),i(e??c.contactSupport,{variant:"error"})})}})]})};export{rs as default};
