import{i as I,b as n,m as x,_ as p,c as f,n as u}from"./Typography-1.0.18-dc3c0740.js";import{r,j as L}from"./main-1.0.18.js";import{g}from"./MenuItem-1.0.18-0088f2a2.js";import{L as d}from"./Menu-1.0.18-e8cb0649.js";const S=["className"],v=s=>{const{alignItems:t,classes:o}=s;return u({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},g,o)},C=I("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:s,ownerState:t})=>n({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),R=r.forwardRef(function(t,o){const e=x({props:t,name:"MuiListItemIcon"}),{className:i}=e,c=p(e,S),l=r.useContext(d),a=n({},e,{alignItems:l.alignItems}),m=v(a);return L.jsx(C,n({className:f(m.root,i),ownerState:a,ref:o},c))}),y=R;export{y as L};