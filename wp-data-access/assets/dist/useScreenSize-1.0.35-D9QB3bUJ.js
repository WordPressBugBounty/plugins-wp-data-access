import{r as i}from"./redux-1.0.35-xa1uZ5t4.js";const s=()=>{const[n,t]=i.useState({width:window.innerWidth,height:window.innerHeight});return i.useEffect(()=>{const e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),n};export{s as u};
