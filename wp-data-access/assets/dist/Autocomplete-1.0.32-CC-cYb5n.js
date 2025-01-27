import{r as m}from"./redux-1.0.32-BsgiH_bG.js";import{f as vt,g as Ct,i as E,j as f,m as se,n as yt,c as X,o as $t,p as j,l as rt}from"./Typography-1.0.32-D9d-UzA0.js";import{i as bt,a as ge,o as Lt,f as Re,A as jt}from"./TextField-1.0.32-EUJpMVir.js";import{C as Ht}from"./Close-1.0.32-BV_W41ov.js";import{f as nt,s as Wt,a as Bt,B as Rt,I as Nt,P as zt,d as mt}from"./iconBase-1.0.32-inVKjZEJ.js";import{j as $}from"./cm-1.0.32-roxymF9V.js";import{P as Et}from"./Popper-1.0.32-Dr5x4zRa.js";import{$ as Ut}from"./cjs-1.0.32-AqZgyPIn.js";import{u as ht}from"./useControlled-1.0.32-fDn_qfrW.js";import{c as Gt}from"./createSvgIcon-1.0.32-DGmABpxr.js";const Kt=e=>{const a=m.useRef({});return m.useEffect(()=>{a.current=e}),a.current};function At(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function qt(e={}){const{ignoreAccents:a=!0,ignoreCase:r=!0,limit:i,matchFrom:h="any",stringify:O,trim:C=!1}=e;return(v,{inputValue:P,getOptionLabel:L})=>{let k=C?P.trim():P;r&&(k=k.toLowerCase()),a&&(k=At(k));const A=k?v.filter(ae=>{let T=(O||L)(ae);return r&&(T=T.toLowerCase()),a&&(T=At(T)),h==="start"?T.startsWith(k):T.includes(k)}):v;return typeof i=="number"?A.slice(0,i):A}}const _t=qt(),wt=5,Jt=e=>{var a;return e.current!==null&&((a=e.current.parentElement)==null?void 0:a.contains(document.activeElement))},Qt=[];function Xt(e){const{unstable_isActiveElementInListbox:a=Jt,unstable_classNamePrefix:r="Mui",autoComplete:i=!1,autoHighlight:h=!1,autoSelect:O=!1,blurOnSelect:C=!1,clearOnBlur:v=!e.freeSolo,clearOnEscape:P=!1,componentName:L="useAutocomplete",defaultValue:k=e.multiple?Qt:null,disableClearable:A=!1,disableCloseOnSelect:ae=!1,disabled:T,disabledItemsFocusable:F=!1,disableListWrap:pe=!1,filterOptions:Ae=_t,filterSelectedOptions:be=!1,freeSolo:re=!1,getOptionDisabled:H,getOptionKey:me,getOptionLabel:we=o=>o.label??o,groupBy:Y,handleHomeEndKeys:Te=!e.freeSolo,id:De,includeInputInList:ce=!1,inputValue:he,isOptionEqualToValue:U=(o,t)=>o===t,multiple:g=!1,onChange:ue,onClose:G,onHighlightChange:xe,onInputChange:K,onOpen:de,open:Me,openOnFocus:w=!1,options:It,readOnly:ve=!1,selectOnFocus:Ne=!e.freeSolo,value:lt}=e,V=Ut(De);let D=we;D=o=>{const t=we(o);return typeof t!="string"?String(t):t};const ze=m.useRef(!1),Ee=m.useRef(!0),R=m.useRef(null),W=m.useRef(null),[Fe,Pt]=m.useState(null),[B,qe]=m.useState(-1),it=h?0:-1,N=m.useRef(it),[l,Ot]=ht({controlled:lt,default:k,name:L}),[x,Ce]=ht({controlled:he,default:"",name:L,state:"inputValue"}),[ye,Ve]=m.useState(!1),$e=m.useCallback((o,t,n)=>{if(!(g?l.length<t.length:t!==null)&&!v)return;let c;if(g)c="";else if(t==null)c="";else{const I=D(t);c=typeof I=="string"?I:""}x!==c&&(Ce(c),K&&K(o,c,n))},[D,x,g,K,Ce,v,l]),[ne,_e]=ht({controlled:Me,default:!1,name:L,state:"open"}),[Je,st]=m.useState(!0),Ie=!g&&l!=null&&x===D(l),z=ne&&!ve,y=z?Ae(It.filter(o=>!(be&&(g?l:[l]).some(t=>t!==null&&U(o,t)))),{inputValue:Ie&&Je?"":x,getOptionLabel:D}):[],J=Kt({filteredOptions:y,value:l,inputValue:x});m.useEffect(()=>{const o=l!==J.value;ye&&!o||re&&!o||$e(null,l,"reset")},[l,$e,ye,J.value,re]);const je=ne&&y.length>0&&!ve,Pe=nt(o=>{o===-1?R.current.focus():Fe.querySelector(`[data-tag-index="${o}"]`).focus()});m.useEffect(()=>{g&&B>l.length-1&&(qe(-1),Pe(-1))},[l,g,B,Pe]);function Qe(o,t){if(!W.current||o<0||o>=y.length)return-1;let n=o;for(;;){const s=W.current.querySelector(`[data-option-index="${n}"]`),c=F?!1:!s||s.disabled||s.getAttribute("aria-disabled")==="true";if(s&&s.hasAttribute("tabindex")&&!c)return n;if(t==="next"?n=(n+1)%y.length:n=(n-1+y.length)%y.length,n===o)return-1}}const Z=nt(({event:o,index:t,reason:n="auto"})=>{if(N.current=t,t===-1?R.current.removeAttribute("aria-activedescendant"):R.current.setAttribute("aria-activedescendant",`${V}-option-${t}`),xe&&xe(o,t===-1?null:y[t],n),!W.current)return;const s=W.current.querySelector(`[role="option"].${r}-focused`);s&&(s.classList.remove(`${r}-focused`),s.classList.remove(`${r}-focusVisible`));let c=W.current;if(W.current.getAttribute("role")!=="listbox"&&(c=W.current.parentElement.querySelector('[role="listbox"]')),!c)return;if(t===-1){c.scrollTop=0;return}const I=W.current.querySelector(`[data-option-index="${t}"]`);if(I&&(I.classList.add(`${r}-focused`),n==="keyboard"&&I.classList.add(`${r}-focusVisible`),c.scrollHeight>c.clientHeight&&n!=="mouse"&&n!=="touch")){const b=I,_=c.clientHeight+c.scrollTop,et=b.offsetTop+b.offsetHeight;et>_?c.scrollTop=et-c.clientHeight:b.offsetTop-b.offsetHeight*(Y?1.3:0)<c.scrollTop&&(c.scrollTop=b.offsetTop-b.offsetHeight*(Y?1.3:0))}}),q=nt(({event:o,diff:t,direction:n="next",reason:s="auto"})=>{if(!z)return;const I=Qe((()=>{const b=y.length-1;if(t==="reset")return it;if(t==="start")return 0;if(t==="end")return b;const _=N.current+t;return _<0?_===-1&&ce?-1:pe&&N.current!==-1||Math.abs(t)>1?0:b:_>b?_===b+1&&ce?-1:pe||Math.abs(t)>1?b:0:_})(),n);if(Z({index:I,reason:s,event:o}),i&&t!=="reset")if(I===-1)R.current.value=x;else{const b=D(y[I]);R.current.value=b,b.toLowerCase().indexOf(x.toLowerCase())===0&&x.length>0&&R.current.setSelectionRange(x.length,b.length)}}),pt=()=>{const o=(t,n)=>{const s=t?D(t):"",c=n?D(n):"";return s===c};if(N.current!==-1&&J.filteredOptions&&J.filteredOptions.length!==y.length&&J.inputValue===x&&(g?l.length===J.value.length&&J.value.every((t,n)=>D(l[n])===D(t)):o(J.value,l))){const t=J.filteredOptions[N.current];if(t)return y.findIndex(n=>D(n)===D(t))}return-1},He=m.useCallback(()=>{if(!z)return;const o=pt();if(o!==-1){N.current=o;return}const t=g?l[0]:l;if(y.length===0||t==null){q({diff:"reset"});return}if(W.current){if(t!=null){const n=y[N.current];if(g&&n&&l.findIndex(c=>U(n,c))!==-1)return;const s=y.findIndex(c=>U(c,t));s===-1?q({diff:"reset"}):Z({index:s});return}if(N.current>=y.length-1){Z({index:y.length-1});return}Z({index:N.current})}},[y.length,g?!1:l,be,q,Z,z,x,g]),ct=nt(o=>{Wt(W,o),o&&He()});m.useEffect(()=>{He()},[He]);const ee=o=>{ne||(_e(!0),st(!0),de&&de(o))},te=(o,t)=>{ne&&(_e(!1),G&&G(o,t))},le=(o,t,n,s)=>{if(g){if(l.length===t.length&&l.every((c,I)=>c===t[I]))return}else if(l===t)return;ue&&ue(o,t,n,s),Ot(t)},Oe=m.useRef(!1),fe=(o,t,n="selectOption",s="options")=>{let c=n,I=t;if(g){I=Array.isArray(l)?l.slice():[];const b=I.findIndex(_=>U(t,_));b===-1?I.push(t):s!=="freeSolo"&&(I.splice(b,1),c="removeOption")}$e(o,I,c),le(o,I,c,{option:t}),!ae&&(!o||!o.ctrlKey&&!o.metaKey)&&te(o,c),(C===!0||C==="touch"&&Oe.current||C==="mouse"&&!Oe.current)&&R.current.blur()};function Se(o,t){if(o===-1)return-1;let n=o;for(;;){if(t==="next"&&n===l.length||t==="previous"&&n===-1)return-1;const s=Fe.querySelector(`[data-tag-index="${n}"]`);if(!s||!s.hasAttribute("tabindex")||s.disabled||s.getAttribute("aria-disabled")==="true")n+=t==="next"?1:-1;else return n}}const We=(o,t)=>{if(!g)return;x===""&&te(o,"toggleInput");let n=B;B===-1?x===""&&t==="previous"&&(n=l.length-1):(n+=t==="next"?1:-1,n<0&&(n=0),n===l.length&&(n=-1)),n=Se(n,t),qe(n),Pe(n)},Xe=o=>{ze.current=!0,Ce(""),K&&K(o,"","clear"),le(o,g?[]:null,"clear")},ke=o=>t=>{if(o.onKeyDown&&o.onKeyDown(t),!t.defaultMuiPrevented&&(B!==-1&&!["ArrowLeft","ArrowRight"].includes(t.key)&&(qe(-1),Pe(-1)),t.which!==229))switch(t.key){case"Home":z&&Te&&(t.preventDefault(),q({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":z&&Te&&(t.preventDefault(),q({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),q({diff:-wt,direction:"previous",reason:"keyboard",event:t}),ee(t);break;case"PageDown":t.preventDefault(),q({diff:wt,direction:"next",reason:"keyboard",event:t}),ee(t);break;case"ArrowDown":t.preventDefault(),q({diff:1,direction:"next",reason:"keyboard",event:t}),ee(t);break;case"ArrowUp":t.preventDefault(),q({diff:-1,direction:"previous",reason:"keyboard",event:t}),ee(t);break;case"ArrowLeft":We(t,"previous");break;case"ArrowRight":We(t,"next");break;case"Enter":if(N.current!==-1&&z){const n=y[N.current],s=H?H(n):!1;if(t.preventDefault(),s)return;fe(t,n,"selectOption"),i&&R.current.setSelectionRange(R.current.value.length,R.current.value.length)}else re&&x!==""&&Ie===!1&&(g&&t.preventDefault(),fe(t,x,"createOption","freeSolo"));break;case"Escape":z?(t.preventDefault(),t.stopPropagation(),te(t,"escape")):P&&(x!==""||g&&l.length>0)&&(t.preventDefault(),t.stopPropagation(),Xe(t));break;case"Backspace":if(g&&!ve&&x===""&&l.length>0){const n=B===-1?l.length-1:B,s=l.slice();s.splice(n,1),le(t,s,"removeOption",{option:l[n]})}break;case"Delete":if(g&&!ve&&x===""&&l.length>0&&B!==-1){const n=B,s=l.slice();s.splice(n,1),le(t,s,"removeOption",{option:l[n]})}break}},ut=o=>{Ve(!0),w&&!ze.current&&ee(o)},Ye=o=>{if(a(W)){R.current.focus();return}Ve(!1),Ee.current=!0,ze.current=!1,O&&N.current!==-1&&z?fe(o,y[N.current],"blur"):O&&re&&x!==""?fe(o,x,"blur","freeSolo"):v&&$e(o,l,"blur"),te(o,"blur")},Le=o=>{const t=o.target.value;x!==t&&(Ce(t),st(!1),K&&K(o,t,"input")),t===""?!A&&!g&&le(o,null,"clear"):ee(o)},Be=o=>{const t=Number(o.currentTarget.getAttribute("data-option-index"));N.current!==t&&Z({event:o,index:t,reason:"mouse"})},Ue=o=>{Z({event:o,index:Number(o.currentTarget.getAttribute("data-option-index")),reason:"touch"}),Oe.current=!0},dt=o=>{const t=Number(o.currentTarget.getAttribute("data-option-index"));fe(o,y[t],"selectOption"),Oe.current=!1},ft=o=>t=>{const n=l.slice();n.splice(o,1),le(t,n,"removeOption",{option:l[o]})},Ze=o=>{ne?te(o,"toggleInput"):ee(o)},St=o=>{o.currentTarget.contains(o.target)&&o.target.getAttribute("id")!==V&&o.preventDefault()},Ge=o=>{o.currentTarget.contains(o.target)&&(R.current.focus(),Ne&&Ee.current&&R.current.selectionEnd-R.current.selectionStart===0&&R.current.select(),Ee.current=!1)},M=o=>{!T&&(x===""||!ne)&&Ze(o)};let S=re&&x.length>0;S=S||(g?l.length>0:l!==null);let oe=y;return Y&&(oe=y.reduce((o,t,n)=>{const s=Y(t);return o.length>0&&o[o.length-1].group===s?o[o.length-1].options.push(t):o.push({key:n,index:n,group:s,options:[t]}),o},[])),T&&ye&&Ye(),{getRootProps:(o={})=>({"aria-owns":je?`${V}-listbox`:null,...o,onKeyDown:ke(o),onMouseDown:St,onClick:Ge}),getInputLabelProps:()=>({id:`${V}-label`,htmlFor:V}),getInputProps:()=>({id:V,value:x,onBlur:Ye,onFocus:ut,onChange:Le,onMouseDown:M,"aria-activedescendant":z?"":null,"aria-autocomplete":i?"both":"list","aria-controls":je?`${V}-listbox`:void 0,"aria-expanded":je,autoComplete:"off",ref:R,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:T}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:Xe}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:Ze}),getTagProps:({index:o})=>({key:o,"data-tag-index":o,tabIndex:-1,...!ve&&{onDelete:ft(o)}}),getListboxProps:()=>({role:"listbox",id:`${V}-listbox`,"aria-labelledby":`${V}-label`,ref:ct,onMouseDown:o=>{o.preventDefault()}}),getOptionProps:({index:o,option:t})=>{const n=(g?l:[l]).some(c=>c!=null&&U(t,c)),s=H?H(t):!1;return{key:(me==null?void 0:me(t))??D(t),tabIndex:-1,role:"option",id:`${V}-option-${o}`,onMouseMove:Be,onClick:dt,onTouchStart:Ue,"data-option-index":o,"aria-disabled":s,"aria-selected":n}},id:V,inputValue:x,value:l,dirty:S,expanded:z&&Fe,popupOpen:z,focused:ye||B!==-1,anchorEl:Fe,setAnchorEl:Pt,focusedTag:B,groupedOptions:oe}}function Yt(e){return vt("MuiListSubheader",e)}Ct("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Zt=e=>{const{classes:a,color:r,disableGutters:i,inset:h,disableSticky:O}=e,C={root:["root",r!=="default"&&`color${f(r)}`,!i&&"gutters",h&&"inset",!O&&"sticky"]};return $t(C,Yt,a)},eo=E("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,r.color!=="default"&&a[`color${f(r.color)}`],!r.disableGutters&&a.gutters,r.inset&&a.inset,!r.disableSticky&&a.sticky]}})(se(({theme:e})=>({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14),variants:[{props:{color:"primary"},style:{color:(e.vars||e).palette.primary.main}},{props:{color:"inherit"},style:{color:"inherit"}},{props:({ownerState:a})=>!a.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:a})=>a.inset,style:{paddingLeft:72}},{props:({ownerState:a})=>!a.disableSticky,style:{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper}}]}))),xt=m.forwardRef(function(a,r){const i=yt({props:a,name:"MuiListSubheader"}),{className:h,color:O="default",component:C="li",disableGutters:v=!1,disableSticky:P=!1,inset:L=!1,...k}=i,A={...i,color:O,component:C,disableGutters:v,disableSticky:P,inset:L},ae=Zt(A);return $.jsx(eo,{as:C,className:X(ae.root,h),ref:r,ownerState:A,...k})});xt&&(xt.muiSkipListHighlight=!0);const to=Gt($.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function oo(e){return vt("MuiChip",e)}const u=Ct("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),ao=e=>{const{classes:a,disabled:r,size:i,color:h,iconColor:O,onDelete:C,clickable:v,variant:P}=e,L={root:["root",P,r&&"disabled",`size${f(i)}`,`color${f(h)}`,v&&"clickable",v&&`clickableColor${f(h)}`,C&&"deletable",C&&`deletableColor${f(h)}`,`${P}${f(h)}`],label:["label",`label${f(i)}`],avatar:["avatar",`avatar${f(i)}`,`avatarColor${f(h)}`],icon:["icon",`icon${f(i)}`,`iconColor${f(O)}`],deleteIcon:["deleteIcon",`deleteIcon${f(i)}`,`deleteIconColor${f(h)}`,`deleteIcon${f(P)}Color${f(h)}`]};return $t(L,oo,a)},ro=E("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e,{color:i,iconColor:h,clickable:O,onDelete:C,size:v,variant:P}=r;return[{[`& .${u.avatar}`]:a.avatar},{[`& .${u.avatar}`]:a[`avatar${f(v)}`]},{[`& .${u.avatar}`]:a[`avatarColor${f(i)}`]},{[`& .${u.icon}`]:a.icon},{[`& .${u.icon}`]:a[`icon${f(v)}`]},{[`& .${u.icon}`]:a[`iconColor${f(h)}`]},{[`& .${u.deleteIcon}`]:a.deleteIcon},{[`& .${u.deleteIcon}`]:a[`deleteIcon${f(v)}`]},{[`& .${u.deleteIcon}`]:a[`deleteIconColor${f(i)}`]},{[`& .${u.deleteIcon}`]:a[`deleteIcon${f(P)}Color${f(i)}`]},a.root,a[`size${f(v)}`],a[`color${f(i)}`],O&&a.clickable,O&&i!=="default"&&a[`clickableColor${f(i)})`],C&&a.deletable,C&&i!=="default"&&a[`deletableColor${f(i)}`],a[P],a[`${P}${f(i)}`]]}})(se(({theme:e})=>{const a=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return{maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${u.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${u.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:a,fontSize:e.typography.pxToRem(12)},[`& .${u.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${u.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${u.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${u.icon}`]:{marginLeft:5,marginRight:-6},[`& .${u.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:j(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:j(e.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${u.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${u.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(e.palette).filter(rt(["contrastText"])).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main,color:(e.vars||e).palette[r].contrastText,[`& .${u.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)`:j(e.palette[r].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[r].contrastText}}}})),{props:r=>r.iconColor===r.color,style:{[`& .${u.icon}`]:{color:e.vars?e.vars.palette.Chip.defaultIconColor:a}}},{props:r=>r.iconColor===r.color&&r.color!=="default",style:{[`& .${u.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}},...Object.entries(e.palette).filter(rt(["dark"])).map(([r])=>({props:{color:r,onDelete:!0},style:{[`&.${u.focusVisible}`]:{background:(e.vars||e).palette[r].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}}},...Object.entries(e.palette).filter(rt(["dark"])).map(([r])=>({props:{color:r,clickable:!0},style:{[`&:hover, &.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette[r].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${u.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${u.avatar}`]:{marginLeft:4},[`& .${u.avatarSmall}`]:{marginLeft:2},[`& .${u.icon}`]:{marginLeft:4},[`& .${u.iconSmall}`]:{marginLeft:2},[`& .${u.deleteIcon}`]:{marginRight:5},[`& .${u.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(e.palette).filter(rt()).map(([r])=>({props:{variant:"outlined",color:r},style:{color:(e.vars||e).palette[r].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.7)`:j(e.palette[r].main,.7)}`,[`&.${u.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:j(e.palette[r].main,e.palette.action.hoverOpacity)},[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})`:j(e.palette[r].main,e.palette.action.focusOpacity)},[`& .${u.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.7)`:j(e.palette[r].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[r].main}}}}))]}})),no=E("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:r}=e,{size:i}=r;return[a.label,a[`label${f(i)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function Tt(e){return e.key==="Backspace"||e.key==="Delete"}const lo=m.forwardRef(function(a,r){const i=yt({props:a,name:"MuiChip"}),{avatar:h,className:O,clickable:C,color:v="default",component:P,deleteIcon:L,disabled:k=!1,icon:A,label:ae,onClick:T,onDelete:F,onKeyDown:pe,onKeyUp:Ae,size:be="medium",variant:re="filled",tabIndex:H,skipFocusWhenDisabled:me=!1,...we}=i,Y=m.useRef(null),Te=Bt(Y,r),De=w=>{w.stopPropagation(),F&&F(w)},ce=w=>{w.currentTarget===w.target&&Tt(w)&&w.preventDefault(),pe&&pe(w)},he=w=>{w.currentTarget===w.target&&F&&Tt(w)&&F(w),Ae&&Ae(w)},U=C!==!1&&T?!0:C,g=U||F?Rt:P||"div",ue={...i,component:g,disabled:k,size:be,color:v,iconColor:m.isValidElement(A)&&A.props.color||v,onDelete:!!F,clickable:U,variant:re},G=ao(ue),xe=g===Rt?{component:P||"div",focusVisibleClassName:G.focusVisible,...F&&{disableRipple:!0}}:{};let K=null;F&&(K=L&&m.isValidElement(L)?m.cloneElement(L,{className:X(L.props.className,G.deleteIcon),onClick:De}):$.jsx(to,{className:X(G.deleteIcon),onClick:De}));let de=null;h&&m.isValidElement(h)&&(de=m.cloneElement(h,{className:X(G.avatar,h.props.className)}));let Me=null;return A&&m.isValidElement(A)&&(Me=m.cloneElement(A,{className:X(G.icon,A.props.className)})),$.jsxs(ro,{as:g,className:X(G.root,O),disabled:U&&k?!0:void 0,onClick:T,onKeyDown:ce,onKeyUp:he,ref:Te,tabIndex:me&&k?-1:H,ownerState:ue,...xe,...we,children:[de||Me,$.jsx(no,{className:X(G.label),ownerState:ue,children:ae}),K]})});function io(e){return vt("MuiAutocomplete",e)}const p=Ct("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Dt,Mt;const so=e=>{const{classes:a,disablePortal:r,expanded:i,focused:h,fullWidth:O,hasClearIcon:C,hasPopupIcon:v,inputFocused:P,popupOpen:L,size:k}=e,A={root:["root",i&&"expanded",h&&"focused",O&&"fullWidth",C&&"hasClearIcon",v&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",P&&"inputFocused"],tag:["tag",`tagSize${f(k)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",L&&"popupIndicatorOpen"],popper:["popper",r&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return $t(A,io,a)},po=E("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e,{fullWidth:i,hasClearIcon:h,hasPopupIcon:O,inputFocused:C,size:v}=r;return[{[`& .${p.tag}`]:a.tag},{[`& .${p.tag}`]:a[`tagSize${f(v)}`]},{[`& .${p.inputRoot}`]:a.inputRoot},{[`& .${p.input}`]:a.input},{[`& .${p.input}`]:C&&a.inputFocused},a.root,i&&a.fullWidth,O&&a.hasPopupIcon,h&&a.hasClearIcon]}})({[`&.${p.focused} .${p.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${p.clearIndicator}`]:{visibility:"visible"}},[`& .${p.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${p.inputRoot}`]:{[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:30},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:56},[`& .${p.input}`]:{width:0,minWidth:30}},[`& .${bt.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${bt.root}.${ge.sizeSmall}`]:{[`& .${bt.input}`]:{padding:"2px 4px 3px 0"}},[`& .${Lt.root}`]:{padding:9,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${p.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${Lt.root}.${ge.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${p.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${Re.root}`]:{paddingTop:19,paddingLeft:8,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${Re.input}`]:{padding:"7px 4px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${Re.root}.${ge.sizeSmall}`]:{paddingBottom:1,[`& .${Re.input}`]:{padding:"2.5px 4px"}},[`& .${ge.hiddenLabel}`]:{paddingTop:8},[`& .${Re.root}.${ge.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${p.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${Re.root}.${ge.hiddenLabel}.${ge.sizeSmall}`]:{[`& .${p.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${p.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${p.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${p.input}`]:{opacity:1}}},{props:{multiple:!0},style:{[`& .${p.inputRoot}`]:{flexWrap:"wrap"}}}]}),co=E("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,a)=>a.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),uo=E(Nt,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,a)=>a.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),fo=E(Nt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},a)=>({...a.popupIndicator,...e.popupOpen&&a.popupIndicatorOpen})})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),go=E(Et,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[{[`& .${p.option}`]:a.option},a.popper,r.disablePortal&&a.popperDisablePortal]}})(se(({theme:e})=>({zIndex:(e.vars||e).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]}))),bo=E(zt,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,a)=>a.paper})(se(({theme:e})=>({...e.typography.body1,overflow:"auto"}))),mo=E("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,a)=>a.loading})(se(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"}))),ho=E("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,a)=>a.noOptions})(se(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"}))),xo=E("ul",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,a)=>a.listbox})(se(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${p.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${p.focused}`]:{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${p.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:j(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${p.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${p.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}}))),vo=E(xt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,a)=>a.groupLabel})(se(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,top:-8}))),Co=E("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,a)=>a.groupUl})({padding:0,[`& .${p.option}`]:{paddingLeft:24}}),To=m.forwardRef(function(a,r){const i=yt({props:a,name:"MuiAutocomplete"}),{autoComplete:h=!1,autoHighlight:O=!1,autoSelect:C=!1,blurOnSelect:v=!1,ChipProps:P,className:L,clearIcon:k=Dt||(Dt=$.jsx(Ht,{fontSize:"small"})),clearOnBlur:A=!i.freeSolo,clearOnEscape:ae=!1,clearText:T="Clear",closeText:F="Close",componentsProps:pe,defaultValue:Ae=i.multiple?[]:null,disableClearable:be=!1,disableCloseOnSelect:re=!1,disabled:H=!1,disabledItemsFocusable:me=!1,disableListWrap:we=!1,disablePortal:Y=!1,filterOptions:Te,filterSelectedOptions:De=!1,forcePopupIcon:ce="auto",freeSolo:he=!1,fullWidth:U=!1,getLimitTagsText:g=d=>`+${d}`,getOptionDisabled:ue,getOptionKey:G,getOptionLabel:xe,isOptionEqualToValue:K,groupBy:de,handleHomeEndKeys:Me=!i.freeSolo,id:w,includeInputInList:It=!1,inputValue:ve,limitTags:Ne=-1,ListboxComponent:lt,ListboxProps:V,loading:D=!1,loadingText:ze="Loading…",multiple:Ee=!1,noOptionsText:R="No options",onChange:W,onClose:Fe,onHighlightChange:Pt,onInputChange:B,onOpen:qe,open:it,openOnFocus:N=!1,openText:l="Open",options:Ot,PaperComponent:x,PopperComponent:Ce,popupIcon:ye=Mt||(Mt=$.jsx(jt,{})),readOnly:Ve=!1,renderGroup:$e,renderInput:ne,renderOption:_e,renderTags:Je,selectOnFocus:st=!i.freeSolo,size:Ie="medium",slots:z={},slotProps:y={},value:J,...je}=i,{getRootProps:Pe,getInputProps:Qe,getInputLabelProps:Z,getPopupIndicatorProps:q,getClearProps:pt,getTagProps:He,getListboxProps:ct,getOptionProps:ee,value:te,dirty:le,expanded:Oe,id:fe,popupOpen:Se,focused:We,focusedTag:Xe,anchorEl:ke,setAnchorEl:ut,inputValue:Ye,groupedOptions:Le}=Xt({...i,componentName:"Autocomplete"}),Be=!be&&!H&&le&&!Ve,Ue=(!he||ce===!0)&&ce!==!1,{onMouseDown:dt}=Qe(),{ref:ft,...Ze}=ct(),Ge=xe||(d=>d.label??d),M={...i,disablePortal:Y,expanded:Oe,focused:We,fullWidth:U,getOptionLabel:Ge,hasClearIcon:Be,hasPopupIcon:Ue,inputFocused:Xe===-1,popupOpen:Se,size:Ie},S=so(M),oe={slots:{paper:x,popper:Ce,...z},slotProps:{chip:P,listbox:V,...pe,...y}},[o,t]=mt("listbox",{elementType:xo,externalForwardedProps:oe,ownerState:M,className:S.listbox,additionalProps:Ze,ref:ft}),[n,s]=mt("paper",{elementType:zt,externalForwardedProps:oe,ownerState:M,className:S.paper}),[c,I]=mt("popper",{elementType:Et,externalForwardedProps:oe,ownerState:M,className:S.popper,additionalProps:{disablePortal:Y,style:{width:ke?ke.clientWidth:null},role:"presentation",anchorEl:ke,open:Se}});let b;if(Ee&&te.length>0){const d=Q=>({className:S.tag,disabled:H,...He(Q)});Je?b=Je(te,d,M):b=te.map((Q,ie)=>{const{key:Ke,...Vt}=d({index:ie});return $.jsx(lo,{label:Ge(Q),size:Ie,...Vt,...oe.slotProps.chip},Ke)})}if(Ne>-1&&Array.isArray(b)){const d=b.length-Ne;!We&&d>0&&(b=b.splice(0,Ne),b.push($.jsx("span",{className:S.tag,children:g(d)},b.length)))}const et=$e||(d=>$.jsxs("li",{children:[$.jsx(vo,{className:S.groupLabel,ownerState:M,component:"div",children:d.group}),$.jsx(Co,{className:S.groupUl,ownerState:M,children:d.children})]},d.key)),Ft=_e||((d,Q)=>{const{key:ie,...Ke}=d;return $.jsx("li",{...Ke,children:Ge(Q)},ie)}),kt=(d,Q)=>{const ie=ee({option:d,index:Q});return Ft({...ie,className:S.option},d,{selected:ie["aria-selected"],index:Q,inputValue:Ye},M)},tt=oe.slotProps.clearIndicator,ot=oe.slotProps.popupIndicator,gt=d=>$.jsx(go,{as:c,...I,children:$.jsx(bo,{as:n,...s,children:d})});let at=null;return Le.length>0?at=gt($.jsx(o,{as:lt,...t,children:Le.map((d,Q)=>de?et({key:d.key,group:d.group,children:d.options.map((ie,Ke)=>kt(ie,d.index+Ke))}):kt(d,Q))})):D&&Le.length===0?at=gt($.jsx(mo,{className:S.loading,ownerState:M,children:ze})):Le.length===0&&!he&&!D&&(at=gt($.jsx(ho,{className:S.noOptions,ownerState:M,role:"presentation",onMouseDown:d=>{d.preventDefault()},children:R}))),$.jsxs(m.Fragment,{children:[$.jsx(po,{ref:r,className:X(S.root,L),ownerState:M,...Pe(je),children:ne({id:fe,disabled:H,fullWidth:!0,size:Ie==="small"?"small":void 0,InputLabelProps:Z(),InputProps:{ref:ut,className:S.inputRoot,startAdornment:b,onMouseDown:d=>{d.target===d.currentTarget&&dt(d)},...(Be||Ue)&&{endAdornment:$.jsxs(co,{className:S.endAdornment,ownerState:M,children:[Be?$.jsx(uo,{...pt(),"aria-label":T,title:T,ownerState:M,...tt,className:X(S.clearIndicator,tt==null?void 0:tt.className),children:k}):null,Ue?$.jsx(fo,{...q(),disabled:H,"aria-label":Se?F:l,title:Se?F:l,ownerState:M,...ot,className:X(S.popupIndicator,ot==null?void 0:ot.className),children:ye}):null]})}},inputProps:{className:S.input,disabled:H,readOnly:Ve,...Qe()}})}),ke?at:null]})});export{To as A,lo as C,Kt as u};
