import{_ as s,b as n}from"./Typography-1.0.23-19a0fd3e.js";import{r as h,m as v,u as j,b as k}from"./iconBase-1.0.23-43ac6f06.js";const E=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],L=["component","slots","slotProps"],N=["component"];function q(o,e){const{className:x,elementType:_,ownerState:p,externalForwardedProps:l,getSlotOwnerState:d,internalForwardedProps:a}=e,F=s(e,E),{component:c,slots:t={[o]:void 0},slotProps:O={[o]:void 0}}=l,g=s(l,L),i=t[o]||_,r=h(O[o],p),P=v(n({className:x},F,{externalForwardedProps:o==="root"?g:void 0,externalSlotProps:r})),{props:{component:u},internalRef:y}=P,f=s(P.props,N),C=j(y,r==null?void 0:r.ref,e.ref),S=d?d(f):{},b=n({},p,S),m=o==="root"?u||c:u,w=k(i,n({},o==="root"&&!c&&!t[o]&&a,o!=="root"&&!t[o]&&a,f,m&&{as:m},{ref:C}),b);return Object.keys(S).forEach(T=>{delete w[T]}),[i,w]}export{q as u};
