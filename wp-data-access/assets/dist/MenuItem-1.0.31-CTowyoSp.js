import{r as l}from"./redux-1.0.31-CuzmJMK6.js";import{g as d,f as p,i as S,r as U,m as D,n as j,c as x,o as F,p as c}from"./Typography-1.0.31-BdhCS1KD.js";import{L as I}from"./Menu-1.0.31-BOTBPSPr.js";import{j as $}from"./cm-1.0.31-BzgG35ZX.js";import{B as P,b as E,a as G}from"./iconBase-1.0.31-C37NsRUm.js";function X(t){return p("MuiDivider",t)}const M=d("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);function Y(t){return p("MuiListItemIcon",t)}const O=d("MuiListItemIcon",["root","alignItemsFlexStart"]);function Z(t){return p("MuiListItemText",t)}const L=d("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function N(t){return p("MuiMenuItem",t)}const r=d("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),H=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.divider&&e.divider,!s.disableGutters&&e.gutters]},z=t=>{const{disabled:e,dense:s,divider:a,disableGutters:n,selected:u,classes:o}=t,i=F({root:["root",s&&"dense",e&&"disabled",!n&&"gutters",a&&"divider",u&&"selected"]},N,o);return{...o,...i}},A=S(P,{shouldForwardProp:t=>U(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:H})(D(({theme:t})=>({...t.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:c(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${r.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:c(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${r.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:c(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:c(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${r.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${r.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${L.root}`]:{marginTop:0,marginBottom:0},[`& .${L.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36},variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>!e.dense,style:{[t.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:e})=>e.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...t.typography.body2,[`& .${O.root} svg`]:{fontSize:"1.25rem"}}}]}))),_=l.forwardRef(function(e,s){const a=j({props:e,name:"MuiMenuItem"}),{autoFocus:n=!1,component:u="li",dense:o=!1,divider:f=!1,disableGutters:i=!1,focusVisibleClassName:w,role:R="menuitem",tabIndex:v,className:k,...T}=a,b=l.useContext(I),y=l.useMemo(()=>({dense:o||b.dense||!1,disableGutters:i}),[b.dense,o,i]),g=l.useRef(null);E(()=>{n&&g.current&&g.current.focus()},[n]);const B={...a,dense:y.dense,divider:f,disableGutters:i},m=z(a),V=G(g,s);let C;return a.disabled||(C=v!==void 0?v:-1),$.jsx(I.Provider,{value:y,children:$.jsx(A,{ref:V,role:R,tabIndex:C,component:u,focusVisibleClassName:x(m.focusVisible,w),className:x(m.root,k),...T,ownerState:B,classes:m})})});export{_ as M,Z as a,X as b,Y as g,L as l};
