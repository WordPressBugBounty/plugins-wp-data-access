import{a as s,r as k,m as v,_ as n,d as b,k as j}from"./iconBase-1.0.17-8d991e6c.js";const E=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],L=["component","slots","slotProps"],N=["component"];function W(e,o){const{className:x,elementType:_,ownerState:l,externalForwardedProps:p,getSlotOwnerState:d,internalForwardedProps:a}=o,F=s(o,E),{component:c,slots:t={[e]:void 0},slotProps:O={[e]:void 0}}=p,g=s(p,L),P=t[e]||_,r=k(O[e],l),i=v(n({className:x},F,{externalForwardedProps:e==="root"?g:void 0,externalSlotProps:r})),{props:{component:u},internalRef:y}=i,S=s(i.props,N),C=b(y,r==null?void 0:r.ref,o.ref),f=d?d(S):{},T=n({},l,f),w=e==="root"?u||c:u,m=j(P,n({},e==="root"&&!c&&!t[e]&&a,e!=="root"&&!t[e]&&a,S,w&&{as:w},{ref:C}),T);return Object.keys(f).forEach(h=>{delete m[h]}),[P,m]}export{W as u};