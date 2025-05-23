import{r as a}from"./redux-1.0.36-Dw38apwx.js";import{h as C,g as h,i as w,j as L,c as v,l as B,m as Y}from"./Typography-1.0.36-CpRCY5e-.js";import{i as N}from"./isHostComponent-1.0.36-DVu5iVWx.js";import{L as I}from"./Menu-1.0.36-BJc4ujw0.js";import{j as r}from"./cm-1.0.36-c_d2YVSf.js";import{b as q}from"./FormHelperText-1.0.36-CywRqLJL.js";import{a as J}from"./iconBase-1.0.36-Cg_-P7_6.js";function K(e){return C("MuiListItem",e)}h("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function lt(e){return C("MuiListItemButton",e)}const O=h("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function Q(e){return C("MuiListItemSecondaryAction",e)}h("MuiListItemSecondaryAction",["root","disableGutters"]);const W=e=>{const{disableGutters:t,classes:s}=e;return B({root:["root",t&&"disableGutters"]},Q,s)},X=L("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),U=a.forwardRef(function(t,s){const o=w({props:t,name:"MuiListItemSecondaryAction"}),{className:n,...c}=o,p=a.useContext(I),i={...o,disableGutters:p.disableGutters},g=W(i);return r.jsx(X,{className:v(g.root,n),ownerState:i,ref:s,...c})});U.muiName="ListItemSecondaryAction";const Z=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.hasSecondaryAction&&t.secondaryAction]},_=e=>{const{alignItems:t,classes:s,dense:o,disableGutters:n,disablePadding:c,divider:p,hasSecondaryAction:i}=e;return B({root:["root",o&&"dense",!n&&"gutters",!c&&"padding",p&&"divider",t==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction"],container:["container"]},K,s)},tt=L("div",{name:"MuiListItem",slot:"Root",overridesResolver:Z})(Y(({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>!t.disablePadding&&t.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:t})=>!t.disablePadding&&!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>!t.disablePadding&&!!t.secondaryAction,style:{paddingRight:48}},{props:({ownerState:t})=>!!t.secondaryAction,style:{[`& > .${O.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>t.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:t})=>t.hasSecondaryAction,style:{paddingRight:48}}]}))),et=L("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),ct=a.forwardRef(function(t,s){const o=w({props:t,name:"MuiListItem"}),{alignItems:n="center",children:c,className:p,component:i,components:g={},componentsProps:k={},ContainerComponent:S="li",ContainerProps:{className:F,...D}={},dense:A=!1,disableGutters:y=!1,disablePadding:E=!1,divider:T=!1,secondaryAction:R,slotProps:$={},slots:z={},...H}=o,P=a.useContext(I),b=a.useMemo(()=>({dense:A||P.dense||!1,alignItems:n,disableGutters:y}),[n,P.dense,A,y]),V=a.useRef(null),d=a.Children.toArray(c),M=d.length&&q(d[d.length-1],["ListItemSecondaryAction"]),f={...o,alignItems:n,dense:b.dense,disableGutters:y,disablePadding:E,divider:T,hasSecondaryAction:M},G=_(f),j=J(V,s),x=z.root||g.Root||tt,m=$.root||k.root||{},u={className:v(G.root,m.className,p),...H};let l=i||"li";return M?(l=!u.component&&!i?"div":l,S==="li"&&(l==="li"?l="div":u.component==="li"&&(u.component="div")),r.jsx(I.Provider,{value:b,children:r.jsxs(et,{as:S,className:v(G.container,F),ref:j,ownerState:f,...D,children:[r.jsx(x,{...m,...!N(x)&&{as:l,ownerState:{...f,...m.ownerState}},...u,children:d}),d.pop()]})})):r.jsx(I.Provider,{value:b,children:r.jsxs(x,{...m,as:l,ref:j,...!N(x)&&{ownerState:{...f,...m.ownerState}},...u,children:[d,R&&r.jsx(U,{children:R})]})})});export{ct as L,lt as g,O as l};
