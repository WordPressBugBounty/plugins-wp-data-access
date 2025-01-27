import{r as i}from"./redux-1.0.32-BsgiH_bG.js";import"./Menu-1.0.32-CRF2Elfu.js";import{g as w,f as N,i as x,m as b,n as B,c as k,o as I}from"./Typography-1.0.32-D9d-UzA0.js";import{P as z,d as j,B as J}from"./iconBase-1.0.32-inVKjZEJ.js";import{j as n}from"./cm-1.0.32-roxymF9V.js";import{u as K}from"./useControlled-1.0.32-fDn_qfrW.js";import{C as Q}from"./Collapse-1.0.32-3dNdwtSs.js";const V=i.createContext({});function X(o){return N("MuiAccordion",o)}const R=w("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),Y=o=>{const{classes:s,square:r,expanded:t,disabled:a,disableGutters:d}=o;return I({root:["root",!r&&"rounded",t&&"expanded",a&&"disabled",!d&&"gutters"],heading:["heading"],region:["region"]},X,s)},Z=x(z,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:r}=o;return[{[`& .${R.region}`]:s.region},s.root,!r.square&&s.rounded,!r.disableGutters&&s.gutters]}})(b(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${R.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}}),b(({theme:o})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${R.expanded}`]:{margin:"16px 0"}}}]}))),_=x("h3",{name:"MuiAccordion",slot:"Heading",overridesResolver:(o,s)=>s.heading})({all:"unset"}),mo=i.forwardRef(function(s,r){const t=B({props:s,name:"MuiAccordion"}),{children:a,className:d,defaultExpanded:f=!1,disabled:g=!1,disableGutters:c=!1,expanded:h,onChange:l,square:y=!1,slots:C={},slotProps:v={},TransitionComponent:S,TransitionProps:p,...u}=t,[e,G]=K({controlled:h,default:f,name:"Accordion",state:"expanded"}),T=i.useCallback(O=>{G(!e),l&&l(O,!e)},[e,l,G]),[P,...W]=i.Children.toArray(a),E=i.useMemo(()=>({expanded:e,disabled:g,disableGutters:c,toggle:T}),[e,g,c,T]),A={...t,square:y,disabled:g,disableGutters:c,expanded:e},M=Y(A),U={transition:S,...C},H={transition:p,...v},$={slots:U,slotProps:H},[q,L]=j("heading",{elementType:_,externalForwardedProps:$,className:M.heading,ownerState:A}),[D,F]=j("transition",{elementType:Q,externalForwardedProps:$,ownerState:A});return n.jsxs(Z,{className:k(M.root,d),ref:r,ownerState:A,square:y,...u,children:[n.jsx(q,{...L,children:n.jsx(V.Provider,{value:E,children:P})}),n.jsx(D,{in:e,timeout:"auto",...F,children:n.jsx("div",{"aria-labelledby":P.props.id,id:P.props["aria-controls"],role:"region",className:M.region,children:W})})]})});function oo(o){return N("MuiAccordionSummary",o)}const m=w("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),so=o=>{const{classes:s,expanded:r,disabled:t,disableGutters:a}=o;return I({root:["root",r&&"expanded",t&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},oo,s)},ro=x(J,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(b(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],s),[`&.${m.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${m.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${m.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${m.expanded}`]:{minHeight:64}}}]}})),eo=x("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(b(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{margin:"20px 0"}}}]}))),to=x("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(b(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{transform:"rotate(180deg)"}}))),fo=i.forwardRef(function(s,r){const t=B({props:s,name:"MuiAccordionSummary"}),{children:a,className:d,expandIcon:f,focusVisibleClassName:g,onClick:c,...h}=t,{disabled:l=!1,disableGutters:y,expanded:C,toggle:v}=i.useContext(V),S=e=>{v&&v(e),c&&c(e)},p={...t,expanded:C,disabled:l,disableGutters:y},u=so(p);return n.jsxs(ro,{focusRipple:!1,disableRipple:!0,disabled:l,component:"div","aria-expanded":C,className:k(u.root,d),focusVisibleClassName:k(u.focusVisible,g),onClick:S,ref:r,ownerState:p,...h,children:[n.jsx(eo,{className:u.content,ownerState:p,children:a}),f&&n.jsx(to,{className:u.expandIconWrapper,ownerState:p,children:f})]})});export{mo as A,fo as a};
