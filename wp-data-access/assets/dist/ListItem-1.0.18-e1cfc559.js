import{g as N,h as G,i as M,b as o,m as E,_ as R,c as x,n as D,D as I}from"./Typography-1.0.18-dc3c0740.js";import{r as d,j as l}from"./main-1.0.18.js";import{L}from"./Menu-1.0.18-e8cb0649.js";import{a as Z,u as tt,i as w,B as et}from"./iconBase-1.0.18-3c21f5e2.js";import{i as st}from"./FormHelperText-1.0.18-8b4ce85f.js";function ot(t){return G("MuiListItem",t)}const at=N("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),b=at;function $t(t){return G("MuiListItemButton",t)}const nt=N("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),it=nt;function rt(t){return G("MuiListItemSecondaryAction",t)}N("MuiListItemSecondaryAction",["root","disableGutters"]);const ct=["className"],lt=t=>{const{disableGutters:e,classes:s}=t;return D({root:["root",e&&"disableGutters"]},rt,s)},dt=M("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),T=d.forwardRef(function(e,s){const a=E({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=R(a,ct),p=d.useContext(L),u=o({},a,{disableGutters:p.disableGutters}),g=lt(u);return l.jsx(dt,o({className:x(g.root,n),ownerState:u,ref:s},i))});T.muiName="ListItemSecondaryAction";const pt=T,ut=["className"],mt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],bt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},gt=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:p,disablePadding:u,divider:g,hasSecondaryAction:f,selected:A}=t;return D({root:["root",n&&"dense",!p&&"gutters",!u&&"padding",g&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",A&&"selected"],container:["container"]},ot,a)},ft=M("div",{name:"MuiListItem",slot:"Root",overridesResolver:bt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${it.root}`]:{paddingRight:48}},{[`&.${b.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${b.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:I(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:I(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),vt=M("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ct=d.forwardRef(function(e,s){const a=E({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:p=!1,children:u,className:g,component:f,components:A={},componentsProps:O={},ContainerComponent:h="li",ContainerProps:{className:z}={},dense:j=!1,disabled:B=!1,disableGutters:$=!1,disablePadding:H=!1,divider:W=!1,focusVisibleClassName:Y,secondaryAction:k,selected:q=!1,slotProps:J={},slots:K={}}=a,Q=R(a.ContainerProps,ut),X=R(a,mt),V=d.useContext(L),S=d.useMemo(()=>({dense:j||V.dense||!1,alignItems:n,disableGutters:$}),[n,V.dense,j,$]),P=d.useRef(null);Z(()=>{i&&P.current&&P.current.focus()},[i]);const m=d.Children.toArray(u),F=m.length&&st(m[m.length-1],["ListItemSecondaryAction"]),C=o({},a,{alignItems:n,autoFocus:i,button:p,dense:S.dense,disabled:B,disableGutters:$,disablePadding:H,divider:W,hasSecondaryAction:F,selected:q}),U=gt(C),_=tt(P,s),y=K.root||A.Root||ft,v=J.root||O.root||{},r=o({className:x(U.root,v.className,g),disabled:B},X);let c=f||"li";return p&&(r.component=f||"div",r.focusVisibleClassName=x(b.focusVisible,Y),c=et),F?(c=!r.component&&!f?"div":c,h==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),l.jsx(L.Provider,{value:S,children:l.jsxs(vt,o({as:h,className:x(U.container,z),ref:_,ownerState:C},Q,{children:[l.jsx(y,o({},v,!w(y)&&{as:c,ownerState:o({},C,v.ownerState)},r,{children:m})),m.pop()]}))})):l.jsx(L.Provider,{value:S,children:l.jsxs(y,o({},v,{as:c,ref:_},!w(y)&&{ownerState:o({},C,v.ownerState)},r,{children:[m,k&&l.jsx(pt,{children:k})]}))})}),St=Ct;export{St as L,$t as g,it as l};
