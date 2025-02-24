import{_ as c,j as s,a as ue}from"./cm-1.0.35--NMEhA6K.js";import{c3 as ge,l as ie}from"./lib-1.0.35-vCbYWOI3.js";import{a as fe}from"./RestApi-1.0.35-Bt-tzntO.js";import{O as w,ap as xe,P as me,a as Ie,I as ye,H as Ce,ad as Te,aq as Pe,ar as ve}from"./cjs-1.0.35-B75n3jry.js";import{g as he}from"./index-1.0.35-BtMPEpn4.js";import{a as le,e as j,r as ce,G as Se,I as Z}from"./iconBase-1.0.35-CEh1aNes.js";import{B as R}from"./Spinner-1.0.35-Dd1TcgqP.js";import{T as H}from"./Tooltip-1.0.35-DvHLxZ2q.js";import{r as E}from"./redux-1.0.35-xa1uZ5t4.js";import{j as O,c as je,l as we,t as oe,n as _}from"./Typography-1.0.35-DmbWmVEH.js";import{u as ne,h as ee,a as te,c as Re,i as ke,k as de,e as De,f as Le,d as Ee,T as Oe,b as Ae,g as Me,j as Ve}from"./TreeItem2Provider-1.0.35-DbJFXFP5.js";import{C as ze}from"./Checkbox-1.0.35-DB1d6Tfc.js";import{C as Be}from"./Collapse-1.0.35-EVtTATBO.js";const be=e=>Array.isArray(e)?e.length>0&&e.some(be):!!e,Fe=({itemId:e,children:a})=>{const{instance:n,selection:{multiSelect:m},publicAPI:y}=ne(),b={expandable:be(a),expanded:n.isItemExpanded(e),focused:n.isItemFocused(e),selected:n.isItemSelected(e),disabled:n.isItemDisabled(e),editing:n!=null&&n.isItemBeingEdited?n==null?void 0:n.isItemBeingEdited(e):!1,editable:n.isItemEditable?n.isItemEditable(e):!1},h=r=>{if(b.disabled)return;b.focused||n.focusItem(r,e);const v=m&&(r.shiftKey||r.ctrlKey||r.metaKey);b.expandable&&!(v&&n.isItemExpanded(e))&&n.toggleItemExpansion(r,e)},g=r=>{if(b.disabled)return;b.focused||n.focusItem(r,e),m&&(r.shiftKey||r.ctrlKey||r.metaKey)?r.shiftKey?n.expandSelectionRange(r,e):n.selectItem({event:r,itemId:e,keepExistingSelection:!0}):n.selectItem({event:r,itemId:e,shouldBeSelected:!0})},P=r=>{const v=r.nativeEvent.shiftKey;m&&v?n.expandSelectionRange(r,e):n.selectItem({event:r,itemId:e,keepExistingSelection:m,shouldBeSelected:r.target.checked})},l=()=>{ee(n,te)&&n.isItemEditable(e)&&(n.isItemBeingEdited(e)?n.setEditedItemId(null):n.setEditedItemId(e))};return{interactions:{handleExpansion:h,handleSelection:g,handleCheckboxSelection:P,toggleItemEditing:l,handleSaveItemLabel:(r,v)=>{ee(n,te)&&n.isItemBeingEditedRef(e)&&(n.updateItemLabel(e,v),l(),n.focusItem(r,e))},handleCancelItemLabelEditing:r=>{ee(n,te)&&n.isItemBeingEditedRef(e)&&(l(),n.focusItem(r,e))}},status:b,publicAPI:y}},Ke=e=>{const{runItemPlugins:a,items:{onItemClick:n,disabledItemsFocusable:m,indentationAtItemLevel:y},selection:{disableSelection:b,checkboxSelection:h},expansion:{expansionTrigger:g},treeId:P,instance:l,publicAPI:u}=ne(),p=E.useContext(Re),{id:C,itemId:r,label:v,children:k,rootRef:A}=e,{rootRef:M,contentRef:W,propsEnhancers:T}=a(e),{interactions:I,status:f}=Fe({itemId:r,children:k}),x=E.useRef(null),D=E.useRef(null),z=le(A,M,x),B=le(W,D),F=E.useRef(null),K=ke({itemId:r,treeId:P,id:C}),q=l.canItemBeTabbed(r)?0:-1,L={rootRefObject:x,contentRefObject:D,interactions:I},J=o=>t=>{var d;if((d=o.onFocus)==null||d.call(o,t),t.defaultMuiPrevented)return;const i=!f.disabled||m;!f.focused&&i&&t.currentTarget===t.target&&l.focusItem(t,r)},$=o=>t=>{var d,S,V,ae,re;if((d=o.onBlur)==null||d.call(o,t),t.defaultMuiPrevented)return;const i=l.getItemDOMElement(r);f.editing||t.relatedTarget&&de(t.relatedTarget,i)&&(t.target&&((V=(S=t.target)==null?void 0:S.dataset)==null?void 0:V.element)==="labelInput"&&de(t.target,i)||((re=(ae=t.relatedTarget)==null?void 0:ae.dataset)==null?void 0:re.element)==="labelInput")||l.removeFocusedItem()},Q=o=>t=>{var i,d,S;(i=o.onKeyDown)==null||i.call(o,t),!(t.defaultMuiPrevented||((S=(d=t.target)==null?void 0:d.dataset)==null?void 0:S.element)==="labelInput")&&l.handleItemKeyDown(t,r)},G=o=>t=>{var i;(i=o.onDoubleClick)==null||i.call(o,t),!t.defaultMuiPrevented&&I.toggleItemEditing()},X=o=>t=>{var i,d;(i=o.onClick)==null||i.call(o,t),n==null||n(t,r),!(t.defaultMuiPrevented||(d=F.current)!=null&&d.contains(t.target))&&(g==="content"&&I.handleExpansion(t),h||I.handleSelection(t))},N=o=>t=>{var i;(i=o.onMouseDown)==null||i.call(o,t),!t.defaultMuiPrevented&&(t.shiftKey||t.ctrlKey||t.metaKey||f.disabled)&&t.preventDefault()},Y=o=>t=>{var i;(i=o.onChange)==null||i.call(o,t),!t.defaultMuiPrevented&&(b||f.disabled||I.handleCheckboxSelection(t))},U=o=>t=>{var i;(i=o.onClick)==null||i.call(o,t),!t.defaultMuiPrevented&&g==="iconContainer"&&I.handleExpansion(t)};return{getRootProps:(o={})=>{var V;const t=c({},j(e),j(o));let i;f.selected?i=!0:b||f.disabled?i=void 0:i=!1;const d=c({},t,{ref:z,role:"treeitem",tabIndex:q,id:K,"aria-expanded":f.expandable?f.expanded:void 0,"aria-selected":i,"aria-disabled":f.disabled||void 0},o,{onFocus:J(t),onBlur:$(t),onKeyDown:Q(t)});y&&(d.style={"--TreeView-itemDepth":typeof p=="function"?p(r):p});const S=((V=T.root)==null?void 0:V.call(T,c({},L,{externalEventHandlers:t})))??{};return c({},d,S)},getContentProps:(o={})=>{var S;const t=j(o),i=c({},t,o,{ref:B,onClick:X(t),onMouseDown:N(t),status:f});y&&(i.indentationAtItemLevel=!0);const d=((S=T.content)==null?void 0:S.call(T,c({},L,{externalEventHandlers:t})))??{};return c({},i,d)},getGroupTransitionProps:(o={})=>{const t=j(o),i=c({},t,{unmountOnExit:!0,component:"ul",role:"group",in:f.expanded,children:k},o);return y&&(i.indentationAtItemLevel=!0),i},getIconContainerProps:(o={})=>{const t=j(o);return c({},t,o,{onClick:U(t)})},getCheckboxProps:(o={})=>{const t=j(o);return c({},t,{visible:h,ref:F,checked:f.selected,disabled:b||f.disabled,tabIndex:-1},o,{onChange:Y(t)})},getLabelProps:(o={})=>{const t=c({},j(o)),i=c({},t,{children:v},o,{onDoubleClick:G(t)});return l.isTreeViewEditable&&(i.editable=f.editable),i},getLabelInputProps:(o={})=>{var d;const t=j(o),i=((d=T.labelInput)==null?void 0:d.call(T,{rootRefObject:x,contentRefObject:D,externalEventHandlers:t,interactions:I}))??{};return c({},o,i)},getDragAndDropOverlayProps:(o={})=>{var d;const t=j(o),i=((d=T.dragAndDropOverlay)==null?void 0:d.call(T,c({},L,{externalEventHandlers:t})))??{};return c({},o,i)},rootRef:z,status:f,publicAPI:u}},$e=Ke;function Ge(e){const{slots:a,slotProps:n,status:m}=e,y=ne(),b=c({},y.icons.slots,{expandIcon:y.icons.slots.expandIcon??Le,collapseIcon:y.icons.slots.collapseIcon??De}),h=y.icons.slotProps;let g;a!=null&&a.icon?g="icon":m.expandable?m.expanded?g="collapseIcon":g="expandIcon":g="endIcon";const P=(a==null?void 0:a[g])??b[g],l=w({elementType:P,externalSlotProps:u=>c({},ce(h[g],u),ce(n==null?void 0:n[g],u)),ownerState:{}});return P?s.jsx(P,c({},l)):null}const Ne=["visible"],Ue=["id","itemId","label","disabled","children","slots","slotProps"],_e=Ee(),We=O("li",{name:"MuiTreeItem2",slot:"Root",overridesResolver:(e,a)=>a.root})({listStyle:"none",margin:0,padding:0,outline:0}),qe=O("div",{name:"MuiTreeItem2",slot:"Content",overridesResolver:(e,a)=>a.content,shouldForwardProp:e=>oe(e)&&e!=="status"&&e!=="indentationAtItemLevel"})(({theme:e})=>({padding:e.spacing(.5,1),borderRadius:e.shape.borderRadius,width:"100%",boxSizing:"border-box",position:"relative",display:"flex",alignItems:"center",gap:e.spacing(1),cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{indentationAtItemLevel:!0},style:{paddingLeft:`calc(${e.spacing(1)} + var(--TreeView-itemChildrenIndentation) * var(--TreeView-itemDepth))`}},{props:({status:a})=>a.disabled,style:{opacity:(e.vars||e).palette.action.disabledOpacity,backgroundColor:"transparent"}},{props:({status:a})=>a.focused,style:{backgroundColor:(e.vars||e).palette.action.focus}},{props:({status:a})=>a.selected,style:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:_(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:_(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:_(e.palette.primary.main,e.palette.action.selectedOpacity)}}}},{props:({status:a})=>a.selected&&a.focused,style:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:_(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}]})),Je=O("div",{name:"MuiTreeItem2",slot:"Label",overridesResolver:(e,a)=>a.label,shouldForwardProp:e=>oe(e)&&e!=="editable"})(({theme:e})=>c({width:"100%",boxSizing:"border-box",minWidth:0,position:"relative",overflow:"hidden"},e.typography.body1,{variants:[{props:({editable:a})=>a,style:{paddingLeft:"2px"}}]})),Qe=O("div",{name:"MuiTreeItem2",slot:"IconContainer",overridesResolver:(e,a)=>a.iconContainer})({width:16,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}}),Xe=O(Be,{name:"MuiTreeItem2",slot:"GroupTransition",overridesResolver:(e,a)=>a.groupTransition,shouldForwardProp:e=>oe(e)&&e!=="indentationAtItemLevel"})({margin:0,padding:0,paddingLeft:"var(--TreeView-itemChildrenIndentation)",variants:[{props:{indentationAtItemLevel:!0},style:{paddingLeft:0}}]}),Ye=O(E.forwardRef((e,a)=>{const{visible:n}=e,m=ue(e,Ne);return n?s.jsx(ze,c({},m,{ref:a})):null}),{name:"MuiTreeItem2",slot:"Checkbox",overridesResolver:(e,a)=>a.checkbox})({padding:0}),Ze=e=>{const{classes:a}=e;return we({root:["root"],content:["content"],expanded:["expanded"],editing:["editing"],editable:["editable"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],checkbox:["checkbox"],label:["label"],groupTransition:["groupTransition"],labelInput:["labelInput"],dragAndDropOverlay:["dragAndDropOverlay"]},Ve,a)},pe=E.forwardRef(function(a,n){const m=_e({props:a,name:"MuiTreeItem2"}),{id:y,itemId:b,label:h,disabled:g,children:P,slots:l={},slotProps:u={}}=m,p=ue(m,Ue),{getRootProps:C,getContentProps:r,getIconContainerProps:v,getCheckboxProps:k,getLabelProps:A,getGroupTransitionProps:M,getLabelInputProps:W,getDragAndDropOverlayProps:T,status:I}=$e({id:y,itemId:b,children:P,label:h,disabled:g}),f=c({},m,I),x=Ze(f),D=l.root??We,z=w({elementType:D,getSlotProps:C,externalForwardedProps:p,externalSlotProps:u.root,additionalProps:{ref:n},ownerState:{},className:x.root}),B=l.content??qe,F=w({elementType:B,getSlotProps:r,externalSlotProps:u.content,ownerState:{},className:je(x.content,I.expanded&&x.expanded,I.selected&&x.selected,I.focused&&x.focused,I.disabled&&x.disabled,I.editing&&x.editing,I.editable&&x.editable)}),K=l.iconContainer??Qe,q=w({elementType:K,getSlotProps:v,externalSlotProps:u.iconContainer,ownerState:{},className:x.iconContainer}),L=l.label??Je,J=w({elementType:L,getSlotProps:A,externalSlotProps:u.label,ownerState:{},className:x.label}),$=l.checkbox??Ye,Q=w({elementType:$,getSlotProps:k,externalSlotProps:u.checkbox,ownerState:{},className:x.checkbox}),G=l.groupTransition??void 0,X=w({elementType:G,getSlotProps:M,externalSlotProps:u.groupTransition,ownerState:{},className:x.groupTransition}),N=l.labelInput??Oe,Y=w({elementType:N,getSlotProps:W,externalSlotProps:u.labelInput,ownerState:{},className:x.labelInput}),U=l.dragAndDropOverlay??Ae,se=w({elementType:U,getSlotProps:T,externalSlotProps:u.dragAndDropOverlay,ownerState:{},className:x.dragAndDropOverlay});return s.jsx(Me,{itemId:b,children:s.jsxs(D,c({},z,{children:[s.jsxs(B,c({},F,{children:[s.jsx(K,c({},q,{children:s.jsx(Ge,{status:I,slots:l,slotProps:u})})),s.jsx($,c({},Q)),I.editing?s.jsx(N,c({},Y)):s.jsx(L,c({},J)),s.jsx(U,c({},se))]})),P&&s.jsx(Xe,c({as:G},X))]}))})});function He(e){return Se({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2 2h12l1 1v10l-1 1H2l-1-1V3l1-1zm0 11h12V3H2v10zm11-9H3v3h10V4zm-1 2H4V5h8v1zm-3 6h4V8H9v4zm1-3h2v2h-2V9zM7 8H3v1h4V8zm-4 3h4v1H3v-1z"},child:[]}]})(e)}const et=(e,a)=>{const n=(p,C)=>s.jsx(H,{title:"Enable | Disable",children:s.jsx("span",{children:s.jsx(Z,{size:"small",color:"primary",onClick:()=>{C(!p)},disabled:!0,children:p?s.jsx(Pe,{}):s.jsx(ve,{})})})});return{iconEnabled:n,codeLabel:(p,C,r,v,k,A,M)=>s.jsxs(R,{sx:{marginLeft:"10px",display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[s.jsx("span",{children:p}),s.jsx("span",{children:r?s.jsxs(s.Fragment,{children:[n(A,M),s.jsx(H,{title:"Show | Hide",children:s.jsx("span",{children:s.jsx(Z,{size:"small",color:"primary",onClick:()=>{k(!v)},disabled:!0,children:v?s.jsx(ye,{}):s.jsx(Ce,{})})})})]}):s.jsx(H,{title:"Implement",children:s.jsx("span",{children:s.jsx(Z,{size:"small",color:"primary",onClick:()=>{a(!0),C(),e(!1)},disabled:!0,children:s.jsx(Te,{})})})})})]}),codeTitle:(p,C,r)=>s.jsxs(R,{sx:{display:"grid",gridTemplateColumns:r?"25px auto auto":"25px auto",alignItems:"center",gap:"0"},children:[s.jsx(R,{sx:{textAlign:"center","& div":{display:"flex",justifyContent:"center"}},children:p}),s.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",paddingLeft:"10px"},children:C}),r&&s.jsxs("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[" - ",r]})]}),appsIcon:()=>s.jsx(R,{sx:{"& svg":{fontSize:"22px"}},children:s.jsx(Ie,{})}),tableIcon:()=>s.jsx(R,{sx:{"& svg":{fontSize:"20px"}},children:s.jsx(he,{})}),formIcon:()=>s.jsx(R,{sx:{"& svg":{fontSize:"20px"}},children:s.jsx(He,{})}),columnIcon:()=>s.jsx(R,{sx:{"& svg":{fontSize:"26px"}},children:s.jsx(me,{})}),dataTypeIcon:()=>s.jsx(R,{sx:{"& svg":{fontSize:"20px"}},children:s.jsx(xe,{})}),getColumnLabel:p=>p.computedField===void 0?p.columnLabel:p.computedField.label}},Tt=({appId:e,tableSettings:a,globalCode:n,setUpdateStatus:m,setOpen:y,setAutoExpand:b})=>{fe();const{codeLabel:h,codeTitle:g,appsIcon:P}=et(y,b);return s.jsx(s.Fragment,{children:a.state.masterDetailConditions===void 0&&s.jsx(pe,{itemId:"appGroup",label:g(P(),"App"),children:ge.map(l=>{var u,p;return s.jsx(pe,{itemId:"app-"+l,label:h(l,()=>{},n[l]!==void 0,((u=n[l])==null?void 0:u.visible)??!0,C=>{ie.debug(C)},((p=n[l])==null?void 0:p.enabled)??!0,C=>{ie.debug(C)})},"app-"+l)})},"appGroup")})};export{Tt as S,pe as T,et as u};
