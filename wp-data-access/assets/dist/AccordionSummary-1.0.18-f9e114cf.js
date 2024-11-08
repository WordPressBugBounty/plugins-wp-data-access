import{g as G,h as N,i as A,_ as M,b as a,c as $,n as j}from"./Typography-1.0.18-dc3c0740.js";import{r as i,j as d}from"./main-1.0.18.js";import{c as B}from"./index-1.0.18-ff546563.js";import{u as H}from"./useSlot-1.0.18-71f9e7ae.js";import{P as F,B as O}from"./iconBase-1.0.18-3c21f5e2.js";import{u as z}from"./useControlled-1.0.18-12a74006.js";import{C as D}from"./Collapse-1.0.18-8e581380.js";const J=i.createContext({}),I=J;function K(o){return N("MuiAccordion",o)}const Q=G("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=Q,X=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],Y=B(),Z=o=>{const{classes:s,square:r,expanded:e,disabled:n,disableGutters:c}=o;return j({root:["root",!r&&"rounded",e&&"expanded",n&&"disabled",!c&&"gutters"],region:["region"]},K,s)},oo=A(F,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:r}=o;return[{[`& .${v.region}`]:s.region},s.root,!r.square&&s.rounded,!r.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${v.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${v.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${v.expanded}`]:{margin:"16px 0"}}}]})),so=i.forwardRef(function(s,r){const e=Y({props:s,name:"MuiAccordion"}),{children:n,className:c,defaultExpanded:f=!1,disabled:x=!1,disableGutters:l=!1,expanded:R,onChange:p,square:g=!1,slots:y={},slotProps:C={},TransitionComponent:S,TransitionProps:u}=e,m=M(e,X),[t,w]=z({controlled:R,default:f,name:"Accordion",state:"expanded"}),T=i.useCallback(L=>{w(!t),p&&p(L,!t)},[t,p,w]),[h,...V]=i.Children.toArray(n),W=i.useMemo(()=>({expanded:t,disabled:x,disableGutters:l,toggle:T}),[t,x,l,T]),P=a({},e,{square:g,disabled:x,disableGutters:l,expanded:t}),k=Z(P),E=a({transition:S},y),U=a({transition:u},C),[q,_]=H("transition",{elementType:D,externalForwardedProps:{slots:E,slotProps:U},ownerState:P});return d.jsxs(oo,a({className:$(k.root,c),ref:r,ownerState:P,square:g},m,{children:[d.jsx(I.Provider,{value:W,children:h}),d.jsx(q,a({in:t,timeout:"auto"},_,{children:d.jsx("div",{"aria-labelledby":h.props.id,id:h.props["aria-controls"],role:"region",className:k.region,children:V})}))]}))}),Co=so;function ro(o){return N("MuiAccordionSummary",o)}const eo=G("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),b=eo,to=["children","className","expandIcon","focusVisibleClassName","onClick"],no=B(),ao=o=>{const{classes:s,expanded:r,disabled:e,disableGutters:n}=o;return j({root:["root",r&&"expanded",e&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},ro,s)},io=A(O,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],s),[`&.${b.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${b.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${b.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${b.expanded}`]:{minHeight:64}}}]}}),co=A("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{margin:"20px 0"}}}]})),lo=A("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{transform:"rotate(180deg)"}})),po=i.forwardRef(function(s,r){const e=no({props:s,name:"MuiAccordionSummary"}),{children:n,className:c,expandIcon:f,focusVisibleClassName:x,onClick:l}=e,R=M(e,to),{disabled:p=!1,disableGutters:g,expanded:y,toggle:C}=i.useContext(I),S=t=>{C&&C(t),l&&l(t)},u=a({},e,{expanded:y,disabled:p,disableGutters:g}),m=ao(u);return d.jsxs(io,a({focusRipple:!1,disableRipple:!0,disabled:p,component:"div","aria-expanded":y,className:$(m.root,c),focusVisibleClassName:$(m.focusVisible,x),onClick:S,ref:r,ownerState:u},R,{children:[d.jsx(co,{className:m.content,ownerState:u,children:n}),f&&d.jsx(lo,{className:m.expandIconWrapper,ownerState:u,children:f})]}))}),vo=po;export{Co as A,vo as a};
