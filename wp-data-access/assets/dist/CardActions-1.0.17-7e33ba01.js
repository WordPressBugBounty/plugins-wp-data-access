import{j as d,i as p,s as u,_ as a,u as C,a as g,c as m,b as f}from"./iconBase-1.0.17-8d991e6c.js";import{r as x,j as A}from"./main-1.0.17.js";function S(s){return d("MuiCardActions",s)}p("MuiCardActions",["root","spacing"]);const b=["disableSpacing","className"],y=s=>{const{classes:t,disableSpacing:o}=s;return f({root:["root",!o&&"spacing"]},S,t)},j=u("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:s})=>a({display:"flex",alignItems:"center",padding:8},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),R=x.forwardRef(function(t,o){const e=C({props:t,name:"MuiCardActions"}),{disableSpacing:r=!1,className:i}=e,c=g(e,b),n=a({},e,{disableSpacing:r}),l=y(n);return A.jsx(j,a({className:m(l.root,i),ownerState:n,ref:o},c))}),U=R;export{U as C};