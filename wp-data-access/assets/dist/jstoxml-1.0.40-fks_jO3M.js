import{r as S}from"./jstoxml-1.0.40-DkGlThlH.js";var h;(function(e){e.csv="text/csv",e.tsv="text/tab-separated-values",e.plain="text/plain"})(h||(h={}));var u=e=>e,a=e=>e,d=u,f=u,l=u,x=u,b=u,C={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:h.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},O=`\r
`,j="\uFEFF",m=e=>Object.assign({},C,e);class q extends Error{constructor(t){super(t),this.name="CsvGenerationError"}}class F extends Error{constructor(t){super(t),this.name="EmptyHeadersError"}}class A extends Error{constructor(t){super(t),this.name="CsvDownloadEnvironmentError"}}class T extends Error{constructor(t){super(t),this.name="UnsupportedDataFormatError"}}var H=function(e,t){return t=='"'&&e.indexOf('"')>-1?e.replace(/"/g,'""'):e},L=e=>x(typeof e=="object"?e.key:e),U=e=>b(typeof e=="object"?e.displayLabel:e),B=(e,...t)=>t.reduce((r,n)=>n(r),e),D=e=>t=>e.useBom?f(a(t)+j):t,k=e=>t=>e.showTitle?y(f(a(t)+e.title))(l("")):t,y=e=>t=>f(a(e)+a(t)+O),v=e=>(t,r)=>R(e)(l(a(t)+a(r))),R=e=>t=>u(a(t)+e.fieldSeparator),G=(e,t)=>r=>{if(!e.showColumnHeaders)return r;if(t.length<1)throw new F("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let n=l("");for(let o=0;o<t.length;o++){const i=U(t[o]);n=v(e)(n,g(e,a(i)))}return n=l(a(n).slice(0,-1)),y(r)(n)},I=(e,t,r)=>n=>{let o=n;for(var i=0;i<r.length;i++){let s=l("");for(let p=0;p<t.length;p++){const w=L(t[p]),E=r[i][a(w)];s=v(e)(s,g(e,E))}s=l(a(s).slice(0,-1)),o=y(o)(s)}return o},K=e=>+e===e&&(!isFinite(e)||!!(e%1)),M=(e,t)=>{if(K(t)){if(e.decimalSeparator==="locale")return d(t.toLocaleString());if(e.decimalSeparator)return d(t.toString().replace(".",e.decimalSeparator))}return d(t.toString())},c=(e,t)=>{let r=t;return(e.quoteStrings||e.fieldSeparator&&t.indexOf(e.fieldSeparator)>-1||e.quoteCharacter&&t.indexOf(e.quoteCharacter)>-1||t.indexOf(`
`)>-1||t.indexOf("\r")>-1)&&(r=e.quoteCharacter+H(t,e.quoteCharacter)+e.quoteCharacter),d(r)},P=(e,t)=>{const r=t?"true":"false";return d(e.boolDisplay[r])},V=(e,t)=>typeof t>"u"&&e.replaceUndefinedWith!==void 0?c(e,e.replaceUndefinedWith+""):t===null?c(e,"null"):c(e,""),g=(e,t)=>{if(typeof t=="number")return M(e,t);if(typeof t=="string")return c(e,t);if(typeof t=="boolean"&&e.boolDisplay)return P(e,t);if(t===null||typeof t>"u")return V(e,t);throw new T(`
    typeof ${typeof t} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},N=e=>t=>{const r=m(e),n=r.useKeysAsHeaders?Object.keys(t[0]):r.columnHeaders;let o=B(f(""),D(r),k(r),G(r,n),I(r,n,t));if(a(o).length<1)throw new q("Output is empty. Is your data formatted correctly?");return o},z=e=>t=>{const r=m(e),n=a(t),o=r.useTextFile?"text/plain":r.mediaType;return new Blob([n],{type:`${o};charset=utf8;`})},Q=e=>t=>{if(!window)throw new A("Downloading only supported in a browser environment.");const r=z(e)(t),n=m(e),o=n.useTextFile?"txt":n.fileExtension,i=`${n.filename}.${o}`,s=document.createElement("a");s.download=i,s.href=URL.createObjectURL(r),s.setAttribute("visibility","hidden"),document.body.appendChild(s),s.click(),document.body.removeChild(s)},X=S();export{N as B,m as G,Q as L,X as j};
