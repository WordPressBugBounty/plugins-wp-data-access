import{r as g,j as i,l as $}from"./main-1.0.23.js";import{B as w}from"./Spinner-1.0.23-90ab83ff.js";import{F as R}from"./FormLabel-1.0.23-71a056b2.js";import{L as O,a as F}from"./Menu-1.0.23-e889464a.js";import{l as m,g as V,L as G}from"./ListItem-1.0.23-64a79cf3.js";import{i as P,r as S,b as C,E as b,m as E,_,c as j,n as T}from"./Typography-1.0.23-19a0fd3e.js";import{B as A,a as M,u as W}from"./iconBase-1.0.23-43ac6f06.js";import{L as D}from"./ListItemIcon-1.0.23-db4c6871.js";import{C as U}from"./Checkbox-1.0.23-e63c68aa.js";import{L as z}from"./ListItemText-1.0.23-79589f5f.js";import"./useFormControl-1.0.23-a0ae6ce7.js";import"./ThemeProvider-1.0.23-f3e5cbc1.js";import"./Popover-1.0.23-6c9c65a6.js";import"./Modal-1.0.23-3fe42627.js";import"./index.esm-1.0.23-ba0465a2.js";import"./Grow-1.0.23-40b2ff68.js";import"./FormHelperText-1.0.23-83597bdf.js";import"./MenuItem-1.0.23-0a5da249.js";import"./SwitchBase-1.0.23-adccc77c.js";import"./useControlled-1.0.23-1e71c28b.js";import"./createSvgIcon-1.0.23-f9410a01.js";const q=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],H=(t,e)=>{const{ownerState:a}=t;return[e.root,a.dense&&e.dense,a.alignItems==="flex-start"&&e.alignItemsFlexStart,a.divider&&e.divider,!a.disableGutters&&e.gutters]},J=t=>{const{alignItems:e,classes:a,dense:o,disabled:d,disableGutters:r,divider:p,selected:n}=t,s=T({root:["root",o&&"dense",!r&&"gutters",p&&"divider",d&&"disabled",e==="flex-start"&&"alignItemsFlexStart",n&&"selected"]},V,a);return C({},a,s)},K=P(A,{shouldForwardProp:t=>S(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:H})(({theme:t,ownerState:e})=>C({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${m.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${m.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${m.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${m.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),N=g.forwardRef(function(e,a){const o=E({props:e,name:"MuiListItemButton"}),{alignItems:d="center",autoFocus:r=!1,component:p="div",children:n,dense:u=!1,disableGutters:s=!1,divider:v=!1,focusVisibleClassName:l,selected:x=!1,className:c}=o,f=_(o,q),L=g.useContext(O),h=g.useMemo(()=>({dense:u||L.dense||!1,alignItems:d,disableGutters:s}),[d,L.dense,u,s]),y=g.useRef(null);M(()=>{r&&y.current&&y.current.focus()},[r]);const B=C({},o,{alignItems:d,dense:h.dense,disableGutters:s,divider:v,selected:x}),I=J(B),k=W(y,a);return i.jsx(O.Provider,{value:h,children:i.jsx(K,C({ref:k,href:f.href||f.to,component:(f.href||f.to)&&p==="div"?"button":p,focusVisibleClassName:j(I.focusVisible,l),ownerState:B,className:j(I.root,c)},f,{classes:I,children:n}))})}),Q=N,bt=({columnName:t,columnLabel:e,lov:a,columnFilters:o,setColumnFilters:d,setCurrentFilterColumnName:r,css:p})=>{$.debug(t,a,o);let n=[];o.map(s=>{s.id===t&&Array.isArray(s.value)&&(n=s.value)}),$.debug(n);const u={...p(),margin:"10px 0 0 0",padding:0,height:"180px",overflow:"auto"};return i.jsxs(w,{className:"pp-column-search-field",sx:{margin:0,padding:0},children:[i.jsx(R,{children:e}),a!==void 0&&i.jsxs(F,{sx:u,children:[...a.map(s=>i.jsx(G,{sx:{margin:0,padding:0},children:i.jsxs(Q,{selected:n.includes(s.value),sx:{padding:"0 8px 0 0"},onClick:()=>{const v=[...o].filter(c=>c.id===t),l=v.length===0?[]:v[0].value;if(!l.includes(s.value))l.push(s.value);else{const c=l.indexOf(s.value);c!==-1&&l.splice(c,1)}const x=[...o].filter(c=>c.id!==t);x.push({id:t,value:l}),l.length===0&&r(""),d(x)},onFocus:()=>{r(t)},onBlur:()=>{r("")},children:[i.jsx(D,{sx:{minWidth:0},children:i.jsx(U,{checked:n.includes(s.value)})}),i.jsx(z,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:s.value})]})}))]})]})};export{bt as default};
