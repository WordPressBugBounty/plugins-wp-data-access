import{r as S}from"./redux-1.0.40-W_04YL6Z.js";import{g as $,h as m,i as f,j as d,c as y,k as e,l as x,m as l,o as b,p as C,E as z,B}from"./Typography-1.0.40-oRKYqE3b.js";import{S as R}from"./SwitchBase-1.0.40-BQrnL2Sx.js";import{j as n}from"./cm-1.0.40-DO7MoydR.js";function j(t){return m("MuiSwitch",t)}const s=$("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),M=t=>{const{classes:a,edge:o,size:c,color:p,checked:u,disabled:h}=t,g={root:["root",o&&`edge${e(o)}`,`size${e(c)}`],switchBase:["switchBase",`color${e(p)}`,u&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=x(g,j,a);return{...a,...v}},T=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.edge&&a[`edge${e(o.edge)}`],a[`size${e(o.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${s.thumb}`]:{width:16,height:16},[`& .${s.switchBase}`]:{padding:4,[`&.${s.checked}`]:{transform:"translateX(16px)"}}}}]}),O=d(R,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.switchBase,{[`& .${s.input}`]:a.input},o.color!=="default"&&a[`color${e(o.color)}`]]}})(l(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${s.checked}`]:{transform:"translateX(20px)"},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${s.checked} + .${s.track}`]:{opacity:.5},[`&.${s.disabled} + .${s.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${s.input}`]:{left:"-100%",width:"300%"}})),l(({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:b(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(C(["light"])).map(([a])=>({props:{color:a},style:{[`&.${s.checked}`]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:b(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a}DisabledColor`]:`${t.palette.mode==="light"?z(t.palette[a].main,.62):B(t.palette[a].main,.55)}`}},[`&.${s.checked} + .${s.track}`]:{backgroundColor:(t.vars||t).palette[a].main}}}))]}))),D=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(l(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`}))),E=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(l(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),A=S.forwardRef(function(a,o){const c=f({props:a,name:"MuiSwitch"}),{className:p,color:u="primary",edge:h=!1,size:g="medium",sx:v,...k}=c,r={...c,color:u,edge:h,size:g},i=M(r),w=n.jsx(E,{className:i.thumb,ownerState:r});return n.jsxs(T,{className:y(i.root,p),sx:v,ownerState:r,children:[n.jsx(O,{type:"checkbox",icon:w,checkedIcon:w,ref:o,ownerState:r,...k,classes:{...i,root:i.switchBase}}),n.jsx(D,{className:i.track,ownerState:r})]})});export{A as S};
