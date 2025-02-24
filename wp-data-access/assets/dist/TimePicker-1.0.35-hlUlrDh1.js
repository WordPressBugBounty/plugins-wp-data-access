import{a as I,_ as a,j as p}from"./cm-1.0.35--NMEhA6K.js";import{r as C}from"./redux-1.0.35-xa1uZ5t4.js";import{u as J}from"./index-1.0.35-CCys4hnd.js";import{u as X,a as Z,b as ee,s as oe,c as V,P as se,d as te,e as ae,f as R,g as A,h as re,i as g,j as $,k as ne,l as ie,r as U,m as B,C as le,n as ce,o as H,p as Q,q as ue,D as me}from"./useMobilePicker-1.0.35-DbPqlT_f.js";import{u as L}from"./DialogContent-1.0.35-B5TpMgZC.js";import{P as e}from"./index-1.0.35-Bmw9p4nW.js";import{g as pe,h as de,j,c as be,l as fe}from"./Typography-1.0.35-DmbWmVEH.js";import{u as Te}from"./AdminTheme-1.0.35-BtyHaBRh.js";import{v as N,P as M,a as Pe,r as he,b as ke,c as z,d as F}from"./timeViewRenderers-1.0.35-CeX9NbnQ.js";import{r as q}from"./iconBase-1.0.35-CEh1aNes.js";import{T as ve}from"./TextField-1.0.35-B1uB0pL3.js";import{O as xe}from"./cjs-1.0.35-B75n3jry.js";const ge=i=>{const t=X(i),{forwardedProps:n,internalProps:s}=Z(t,"time");return ee({forwardedProps:n,internalProps:s,valueManager:V,fieldValueManager:oe,validator:N,valueType:"time"})},Me=["slots","slotProps","InputProps","inputProps"],K=C.forwardRef(function(t,n){const s=L({props:t,name:"MuiTimeField"}),{slots:r,slotProps:o,InputProps:m,inputProps:c}=s,b=I(s,Me),l=s,d=(r==null?void 0:r.textField)??(t.enableAccessibleFieldDOMStructure?se:ve),u=xe({elementType:d,externalSlotProps:o==null?void 0:o.textField,externalForwardedProps:b,ownerState:l,additionalProps:{ref:n}});u.inputProps=a({},c,u.inputProps),u.InputProps=a({},m,u.InputProps);const h=ge(u),k=te(h),f=ae(a({},k,{slots:r,slotProps:o}));return p.jsx(d,a({},f))});function ye(i){return de("MuiTimePickerToolbar",i)}const y=pe("MuiTimePickerToolbar",["root","separator","hourMinuteLabel","hourMinuteLabelLandscape","hourMinuteLabelReverse","ampmSelection","ampmLandscape","ampmLabel"]),Ce=["ampm","ampmInClock","value","isLandscape","onChange","view","onViewChange","views","disabled","readOnly","className"],we=i=>{const{isLandscape:t,classes:n,isRtl:s}=i;return fe({root:["root"],separator:["separator"],hourMinuteLabel:["hourMinuteLabel",t&&"hourMinuteLabelLandscape",s&&"hourMinuteLabelReverse"],ampmSelection:["ampmSelection",t&&"ampmLandscape"],ampmLabel:["ampmLabel"]},ye,n)},Oe=j(ne,{name:"MuiTimePickerToolbar",slot:"Root",overridesResolver:(i,t)=>t.root})({}),De=j(Pe,{name:"MuiTimePickerToolbar",slot:"Separator",overridesResolver:(i,t)=>t.separator})({outline:0,margin:"0 4px 0 2px",cursor:"default"}),Re=j("div",{name:"MuiTimePickerToolbar",slot:"HourMinuteLabel",overridesResolver:(i,t)=>[{[`&.${y.hourMinuteLabelLandscape}`]:t.hourMinuteLabelLandscape,[`&.${y.hourMinuteLabelReverse}`]:t.hourMinuteLabelReverse},t.hourMinuteLabel]})({display:"flex",justifyContent:"flex-end",alignItems:"flex-end",variants:[{props:{isRtl:!0},style:{flexDirection:"row-reverse"}},{props:{isLandscape:!0},style:{marginTop:"auto"}}]}),Le=j("div",{name:"MuiTimePickerToolbar",slot:"AmPmSelection",overridesResolver:(i,t)=>[{[`.${y.ampmLabel}`]:t.ampmLabel},{[`&.${y.ampmLandscape}`]:t.ampmLandscape},t.ampmSelection]})({display:"flex",flexDirection:"column",marginRight:"auto",marginLeft:12,[`& .${y.ampmLabel}`]:{fontSize:17},variants:[{props:{isLandscape:!0},style:{margin:"4px 0 auto",flexDirection:"row",justifyContent:"space-around",flexBasis:"100%"}}]});function je(i){const t=L({props:i,name:"MuiTimePickerToolbar"}),{ampm:n,ampmInClock:s,value:r,isLandscape:o,onChange:m,view:c,onViewChange:b,views:l,disabled:d,readOnly:u,className:h}=t,k=I(t,Ce),f=R(),w=A(),S=Te(),O=!!(n&&!s&&l.includes("hours")),{meridiemMode:v,handleMeridiemChange:x}=re(r,n,m),D=E=>n?f.format(E,"hours12h"):f.format(E,"hours24h"),P=a({},t,{isRtl:S}),T=we(P),_=p.jsx(De,{tabIndex:-1,value:":",variant:"h3",selected:!1,className:T.separator});return p.jsxs(Oe,a({landscapeDirection:"row",toolbarTitle:w.timePickerToolbarTitle,isLandscape:o,ownerState:P,className:be(T.root,h)},k,{children:[p.jsxs(Re,{className:T.hourMinuteLabel,ownerState:P,children:[g(l,"hours")&&p.jsx(M,{tabIndex:-1,variant:"h3",onClick:()=>b("hours"),selected:c==="hours",value:r?D(r):"--"}),g(l,["hours","minutes"])&&_,g(l,"minutes")&&p.jsx(M,{tabIndex:-1,variant:"h3",onClick:()=>b("minutes"),selected:c==="minutes",value:r?f.format(r,"minutes"):"--"}),g(l,["minutes","seconds"])&&_,g(l,"seconds")&&p.jsx(M,{variant:"h3",onClick:()=>b("seconds"),selected:c==="seconds",value:r?f.format(r,"seconds"):"--"})]}),O&&p.jsxs(Le,{className:T.ampmSelection,ownerState:P,children:[p.jsx(M,{disableRipple:!0,variant:"subtitle2",selected:v==="am",typographyClassName:T.ampmLabel,value:$(f,"am"),onClick:u?void 0:()=>x("am"),disabled:d}),p.jsx(M,{disableRipple:!0,variant:"subtitle2",selected:v==="pm",typographyClassName:T.ampmLabel,value:$(f,"pm"),onClick:u?void 0:()=>x("pm"),disabled:d})]})]}))}function G(i,t){var m;const n=R(),s=L({props:i,name:t}),r=s.ampm??n.is12HourCycleInCurrentLocale(),o=C.useMemo(()=>{var c;return((c=s.localeText)==null?void 0:c.toolbarTitle)==null?s.localeText:a({},s.localeText,{timePickerToolbarTitle:s.localeText.toolbarTitle})},[s.localeText]);return a({},s,{ampm:r,localeText:o},ie({views:s.views,openTo:s.openTo,defaultViews:["hours","minutes"],defaultOpenTo:"hours"}),{disableFuture:s.disableFuture??!1,disablePast:s.disablePast??!1,slots:a({toolbar:je},s.slots),slotProps:a({},s.slotProps,{toolbar:a({ampm:r,ampmInClock:s.ampmInClock},(m=s.slotProps)==null?void 0:m.toolbar)})})}const W=C.forwardRef(function(t,n){var O,v,x,D;const s=A(),r=R(),o=G(t,"MuiDesktopTimePicker"),{shouldRenderTimeInASingleColumn:m,views:c,timeSteps:b}=he(o),l=m?ke:z,d=a({hours:l,minutes:l,seconds:l,meridiem:l},o.viewRenderers),u=o.ampmInClock??!0,h=m?[]:["accept"],f=((O=d.hours)==null?void 0:O.name)===z.name?c:c.filter(P=>P!=="meridiem"),w=a({},o,{ampmInClock:u,timeSteps:b,viewRenderers:d,format:U(r,o),views:m?["hours"]:f,slots:a({field:K,openPickerIcon:le},o.slots),slotProps:a({},o.slotProps,{field:P=>{var T;return a({},q((T=o.slotProps)==null?void 0:T.field,P),B(o),{ref:n})},toolbar:a({hidden:!0,ampmInClock:u},(v=o.slotProps)==null?void 0:v.toolbar),actionBar:a({actions:h},(x=o.slotProps)==null?void 0:x.actionBar)})}),{renderPicker:S}=ce({props:w,valueManager:V,valueType:"time",getOpenDialogAriaText:H({utils:r,formatKey:"fullTime",contextTranslation:s.openTimePickerDialogue,propsTranslation:(D=w.localeText)==null?void 0:D.openTimePickerDialogue}),validator:N});return S()});W.propTypes={ampm:e.bool,ampmInClock:e.bool,autoFocus:e.bool,className:e.string,closeOnSelect:e.bool,defaultValue:e.object,disabled:e.bool,disableFuture:e.bool,disableIgnoringDatePartForTimeValidation:e.bool,disableOpenPicker:e.bool,disablePast:e.bool,enableAccessibleFieldDOMStructure:e.any,format:e.string,formatDensity:e.oneOf(["dense","spacious"]),inputRef:Q,label:e.node,localeText:e.object,maxTime:e.object,minTime:e.object,minutesStep:e.number,name:e.string,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onOpen:e.func,onSelectedSectionsChange:e.func,onViewChange:e.func,open:e.bool,openTo:e.oneOf(["hours","meridiem","minutes","seconds"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,referenceDate:e.object,selectedSections:e.oneOfType([e.oneOf(["all","day","empty","hours","meridiem","minutes","month","seconds","weekDay","year"]),e.number]),shouldDisableTime:e.func,skipDisabled:e.bool,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),thresholdToRenderTimeInASingleColumn:e.number,timeSteps:e.shape({hours:e.number,minutes:e.number,seconds:e.number}),timezone:e.string,value:e.object,view:e.oneOf(["hours","meridiem","minutes","seconds"]),viewRenderers:e.shape({hours:e.func,meridiem:e.func,minutes:e.func,seconds:e.func}),views:e.arrayOf(e.oneOf(["hours","minutes","seconds"]).isRequired)};const Y=C.forwardRef(function(t,n){var d,u;const s=A(),r=R(),o=G(t,"MuiMobileTimePicker"),m=a({hours:F,minutes:F,seconds:F},o.viewRenderers),c=o.ampmInClock??!1,b=a({},o,{ampmInClock:c,viewRenderers:m,format:U(r,o),slots:a({field:K},o.slots),slotProps:a({},o.slotProps,{field:h=>{var k;return a({},q((k=o.slotProps)==null?void 0:k.field,h),B(o),{ref:n})},toolbar:a({hidden:!1,ampmInClock:c},(d=o.slotProps)==null?void 0:d.toolbar)})}),{renderPicker:l}=ue({props:b,valueManager:V,valueType:"time",getOpenDialogAriaText:H({utils:r,formatKey:"fullTime",contextTranslation:s.openTimePickerDialogue,propsTranslation:(u=b.localeText)==null?void 0:u.openTimePickerDialogue}),validator:N});return l()});Y.propTypes={ampm:e.bool,ampmInClock:e.bool,autoFocus:e.bool,className:e.string,closeOnSelect:e.bool,defaultValue:e.object,disabled:e.bool,disableFuture:e.bool,disableIgnoringDatePartForTimeValidation:e.bool,disableOpenPicker:e.bool,disablePast:e.bool,enableAccessibleFieldDOMStructure:e.any,format:e.string,formatDensity:e.oneOf(["dense","spacious"]),inputRef:Q,label:e.node,localeText:e.object,maxTime:e.object,minTime:e.object,minutesStep:e.number,name:e.string,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onOpen:e.func,onSelectedSectionsChange:e.func,onViewChange:e.func,open:e.bool,openTo:e.oneOf(["hours","minutes","seconds"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,referenceDate:e.object,selectedSections:e.oneOfType([e.oneOf(["all","day","empty","hours","meridiem","minutes","month","seconds","weekDay","year"]),e.number]),shouldDisableTime:e.func,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),timezone:e.string,value:e.object,view:e.oneOf(["hours","minutes","seconds"]),viewRenderers:e.shape({hours:e.func,minutes:e.func,seconds:e.func}),views:e.arrayOf(e.oneOf(["hours","minutes","seconds"]).isRequired)};const Se=["desktopModeMediaQuery"],Qe=C.forwardRef(function(t,n){const s=L({props:t,name:"MuiTimePicker"}),{desktopModeMediaQuery:r=me}=s,o=I(s,Se);return J(r,{defaultMatches:!0})?p.jsx(W,a({ref:n},o)):p.jsx(Y,a({ref:n},o))});export{Qe as T};
