import{l as D,C as W,b as tt}from"./lib-1.0.36-RK2jtnD_.js";function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:fe}=Object,X=(e=>t=>{const n=nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>X(t)===e),G=e=>t=>typeof t===e,{isArray:k}=Array,H=G("undefined");function rt(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=C("ArrayBuffer");function st(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const ot=G("string"),x=G("function"),Fe=G("number"),Q=e=>e!==null&&typeof e=="object",it=e=>e===!0||e===!1,$=e=>{if(X(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},at=C("Date"),ct=C("File"),ut=C("Blob"),lt=C("FileList"),ft=e=>Q(e)&&x(e.pipe),dt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=X(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},pt=C("URLSearchParams"),[ht,mt,yt,bt]=["ReadableStream","Request","Response","Headers"].map(C),wt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const L=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ue=e=>!H(e)&&e!==L;function oe(){const{caseless:e}=Ue(this)&&this||{},t={},n=(r,s)=>{const i=e&&Le(t,s)||s;$(t[i])&&$(r)?t[i]=oe(t[i],r):$(r)?t[i]=oe({},r):k(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const Et=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,i)=>{n&&x(s)?e[i]=Pe(s,n):e[i]=s},{allOwnKeys:r}),e),gt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},St=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Tt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ot=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},At=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),xt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Ct=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Nt=C("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_t=C("RegExp"),Be=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},Ft=e=>{Be(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return k(e)?r(e):r(String(e).split(t)),n},Ut=()=>{},Bt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,te="abcdefghijklmnopqrstuvwxyz",ye="0123456789",De={DIGIT:ye,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+ye},Dt=(e=16,t=De.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function kt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const jt=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=k(r)?[]:{};return I(r,(o,c)=>{const f=n(o,s+1);!H(f)&&(i[c]=f)}),t[s]=void 0,i}}return r};return n(e,0)},qt=C("AsyncFunction"),Ht=e=>e&&(Q(e)||x(e))&&x(e.then)&&x(e.catch),ke=((e,t)=>e?setImmediate:t?((n,r)=>(L.addEventListener("message",({source:s,data:i})=>{s===L&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),L.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",x(L.postMessage)),It=typeof queueMicrotask<"u"?queueMicrotask.bind(L):typeof process<"u"&&process.nextTick||ke,a={isArray:k,isArrayBuffer:_e,isBuffer:rt,isFormData:dt,isArrayBufferView:st,isString:ot,isNumber:Fe,isBoolean:it,isObject:Q,isPlainObject:$,isReadableStream:ht,isRequest:mt,isResponse:yt,isHeaders:bt,isUndefined:H,isDate:at,isFile:ct,isBlob:ut,isRegExp:_t,isFunction:x,isStream:ft,isURLSearchParams:pt,isTypedArray:At,isFileList:lt,forEach:I,merge:oe,extend:Et,trim:wt,stripBOM:gt,inherits:Rt,toFlatObject:St,kindOf:X,kindOfTest:C,endsWith:Tt,toArray:Ot,forEachEntry:xt,matchAll:Ct,isHTMLForm:Nt,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:Be,freezeMethods:Ft,toObjectSet:Lt,toCamelCase:Pt,noop:Ut,toFiniteNumber:Bt,findKey:Le,global:L,isContextDefined:Ue,ALPHABET:De,generateString:Dt,isSpecCompliantForm:kt,toJSONObject:jt,isAsyncFn:qt,isThenable:Ht,setImmediate:ke,asap:It};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const je=m.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(m,qe);Object.defineProperty(je,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(je);return a.toFlatObject(e,o,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Mt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function be(e,t,n){return e?e.concat(t).map(function(s,i){return s=He(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(ie)}const $t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,y,h){let E=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&zt(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(E=a.toArray(p)))return y=He(y),E.forEach(function(S,P){!(a.isUndefined(S)||S===null)&&t.append(o===!0?be([y],P,i):o===null?y:y+"[]",u(S))}),!1}return ie(p)?!0:(t.append(be(h,y,i),u(p)),!1)}const d=[],b=Object.assign($t,{defaultVisitor:l,convertValue:u,isVisitable:ie});function g(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(E,R){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(R)?R.trim():R,y,b))===!0&&g(E,y?y.concat(R):[R])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&Z(e,this,t)}const Ie=de.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Jt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||Jt;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Ee{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:de,Wt=typeof FormData<"u"?FormData:null,Kt=typeof Blob<"u"?Blob:null,vt={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Wt,Blob:Kt},protocols:["http","https","file","blob","url","data"]},pe=typeof window<"u"&&typeof document<"u",ae=typeof navigator=="object"&&navigator||void 0,Xt=pe&&(!ae||["ReactNative","NativeScript","NS"].indexOf(ae.product)<0),Gt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Qt=pe&&window.location.href||"http://localhost",Zt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserEnv:Xt,hasStandardBrowserWebWorkerEnv:Gt,navigator:ae,origin:Qt},Symbol.toStringTag,{value:"Module"})),T={...Zt,...vt};function Yt(e,t){return Z(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function en(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tn(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function $e(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),f=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,f?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=tn(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(en(r),s,n,0)}),n}return null}function nn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const M={transitional:ze,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify($e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Yt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),nn(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{M.headers[e]={}});const rn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&rn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ge=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function on(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const an=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ne(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function cn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function un(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}let A=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,f,u){const l=q(f);if(!l)throw new Error("header name must be a non-empty string");const d=a.findKey(s,l);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||f]=J(c))}const o=(c,f)=>a.forEach(c,(u,l)=>i(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(a.isString(t)&&(t=t.trim())&&!an(t))o(sn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())i(f,c,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return on(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ne(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=q(o),o){const c=a.findKey(r,o);c&&(!n||ne(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||ne(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=J(s),delete n[i];return}const c=t?cn(i):String(i).trim();c!==i&&delete n[i],n[c]=J(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ge]=this[ge]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=q(o);r[c]||(un(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}};A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function re(e,t){const n=this||M,r=t||n,s=A.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Je(e){return!!(e&&e.__CANCEL__)}function j(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(j,m,{__CANCEL__:!0});function Ve(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function ln(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function fn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[i];o||(o=u),n[s]=f,r[s]=u;let d=i,b=0;for(;d!==s;)b+=n[d++],d=d%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const g=l&&u-l;return g?Math.round(b*1e3/g):void 0}}function dn(e,t){let n=0,r=1e3/t,s,i;const o=(u,l=Date.now())=>{n=l,s=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),d=l-n;d>=r?o(u,l):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-d)))},()=>s&&o(s)]}const K=(e,t,n=3)=>{let r=0;const s=fn(50,250);return dn(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,f=o-r,u=s(f),l=o<=c;r=o;const d={loaded:o,total:c,progress:c?o/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-o)/u:void 0,event:i,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Re=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Se=e=>(...t)=>a.asap(()=>e(...t)),pn=T.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,T.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(T.origin),T.navigator&&/(msie|trident)/i.test(T.navigator.userAgent)):()=>!0,hn=T.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function mn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function yn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function We(e,t){return e&&!mn(t)?yn(e,t):t}const Te=e=>e instanceof A?{...e}:e;function B(e,t){t=t||{};const n={};function r(u,l,d,b){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:b},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,d,b){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,d,b)}else return r(u,l,d,b)}function i(u,l){if(!a.isUndefined(l))return r(void 0,l)}function o(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,d){if(d in t)return r(u,l);if(d in e)return r(void 0,u)}const f={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,l,d)=>s(Te(u),Te(l),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const d=f[l]||s,b=d(e[l],t[l],l);a.isUndefined(b)&&d!==c||(n[l]=b)}),n}const Ke=e=>{const t=B({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=t;t.headers=o=A.from(o),t.url=Me(We(t.baseURL,t.url),e.params,e.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((f=o.getContentType())!==!1){const[u,...l]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...l].join("; "))}}if(T.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&pn(t.url))){const u=s&&i&&hn.read(i);u&&o.set(s,u)}return t},bn=typeof XMLHttpRequest<"u",wn=bn&&function(e){return new Promise(function(n,r){const s=Ke(e);let i=s.data;const o=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:u}=s,l,d,b,g,p;function y(){g&&g(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function E(){if(!h)return;const S=A.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),O={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:S,config:e,request:h};Ve(function(F){n(F),y()},function(F){r(F),y()},O),h=null}"onloadend"in h?h.onloadend=E:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(E)},h.onabort=function(){h&&(r(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const O=s.transitional||ze;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new m(P,O.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},i===void 0&&o.setContentType(null),"setRequestHeader"in h&&a.forEach(o.toJSON(),function(P,O){h.setRequestHeader(O,P)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),u&&([b,p]=K(u,!0),h.addEventListener("progress",b)),f&&h.upload&&([d,g]=K(f),h.upload.addEventListener("progress",d),h.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(l=S=>{h&&(r(!S||S.type?new j(null,e,h):S),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const R=ln(s.url);if(R&&T.protocols.indexOf(R)===-1){r(new m("Unsupported protocol "+R+":",m.ERR_BAD_REQUEST,e));return}h.send(i||null)})},En=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,c();const l=u instanceof Error?u:this.reason;r.abort(l instanceof m?l:new j(l instanceof Error?l.message:l))}};let o=t&&setTimeout(()=>{o=null,i(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},gn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Rn=async function*(e,t){for await(const n of Sn(e))yield*gn(n,t)},Sn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Oe=(e,t,n,r)=>{const s=Rn(e,t);let i=0,o,c=f=>{o||(o=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:u,value:l}=await s.next();if(u){c(),f.close();return}let d=l.byteLength;if(n){let b=i+=d;n(b)}f.enqueue(new Uint8Array(l))}catch(u){throw c(u),u}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ve=Y&&typeof ReadableStream=="function",Tn=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Xe=(e,...t)=>{try{return!!e(...t)}catch{return!1}},On=ve&&Xe(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ae=64*1024,ce=ve&&Xe(()=>a.isReadableStream(new Response("").body)),v={stream:ce&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!v[t]&&(v[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const An=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(T.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Tn(e)).byteLength},xn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??An(t)},Cn=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:d="same-origin",fetchOptions:b}=Ke(e);u=u?(u+"").toLowerCase():"text";let g=En([s,i&&i.toAbortSignal()],o),p;const y=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let h;try{if(f&&On&&n!=="get"&&n!=="head"&&(h=await xn(l,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),_;if(a.isFormData(r)&&(_=O.headers.get("content-type"))&&l.setContentType(_),O.body){const[F,z]=Re(h,K(Se(f)));r=Oe(O.body,Ae,F,z)}}a.isString(d)||(d=d?"include":"omit");const E="credentials"in Request.prototype;p=new Request(t,{...b,signal:g,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:E?d:void 0});let R=await fetch(p);const S=ce&&(u==="stream"||u==="response");if(ce&&(c||S&&y)){const O={};["status","statusText","headers"].forEach(he=>{O[he]=R[he]});const _=a.toFiniteNumber(R.headers.get("content-length")),[F,z]=c&&Re(_,K(Se(c),!0))||[];R=new Response(Oe(R.body,Ae,F,()=>{z&&z(),y&&y()}),O)}u=u||"text";let P=await v[a.findKey(v,u)||"text"](R,e);return!S&&y&&y(),await new Promise((O,_)=>{Ve(O,_,{data:P,headers:A.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:p})})}catch(E){throw y&&y(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:E.cause||E}):m.from(E,E&&E.code,e,p)}}),ue={http:Mt,xhr:wn,fetch:Cn};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const xe=e=>`- ${e}`,Nn=e=>a.isFunction(e)||e===null||e===!1,Ge={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!Nn(n)&&(r=ue[(o=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(xe).join(`
`):" "+xe(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ue};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function Ce(e){return se(e),e.headers=A.from(e.headers),e.data=re.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ge.getAdapter(e.adapter||M.adapter)(e).then(function(r){return se(e),r.data=re.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Je(r)||(se(e),r&&r.response&&(r.response.data=re.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Qe="1.7.9",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ne={};ee.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Qe+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ne[o]&&(Ne[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};ee.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Pn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],f=c===void 0||o(c,i,e);if(f!==!0)throw new m("option "+i+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const V={assertOptions:Pn,validators:ee},N=V.validators;let U=class{constructor(t){this.defaults=t,this.interceptors={request:new Ee,response:new Ee}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&V.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:V.assertOptions(s,{encode:N.function,serialize:N.function},!0)),V.assertOptions(n,{baseUrl:N.spelling("baseURL"),withXsrfToken:N.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=A.concat(o,i);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,d=0,b;if(!f){const p=[Ce.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,u),b=p.length,l=Promise.resolve(n);d<b;)l=l.then(p[d++],p[d++]);return l}b=c.length;let g=n;for(d=0;d<b;){const p=c[d++],y=c[d++];try{g=p(g)}catch(h){y.call(this,h);break}}try{l=Ce.call(this,g)}catch(p){return Promise.reject(p)}for(d=0,b=u.length;d<b;)l=l.then(u[d++],u[d++]);return l}getUri(t){t=B(this.defaults,t);const n=We(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){U.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(B(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}U.prototype[t]=n(),U.prototype[t+"Form"]=n(!0)});let _n=class Ze{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new j(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Ze(function(s){t=s}),cancel:t}}};function Fn(e){return function(n){return e.apply(null,n)}}function Ln(e){return a.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});function Ye(e){const t=new U(e),n=Pe(U.prototype.request,t);return a.extend(n,U.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ye(B(e,s))},n}const w=Ye(M);w.Axios=U;w.CanceledError=j;w.CancelToken=_n;w.isCancel=Je;w.VERSION=Qe;w.toFormData=Z;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Fn;w.isAxiosError=Ln;w.mergeConfig=B;w.AxiosHeaders=A;w.formToJSON=e=>$e(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=Ge.getAdapter;w.HttpStatusCode=le;w.default=w;const{Axios:kn,AxiosError:jn,CanceledError:qn,isCancel:Hn,CancelToken:In,VERSION:Mn,all:zn,Cancel:$n,isAxiosError:Jn,spread:Vn,toFormData:Wn,AxiosHeaders:Kn,HttpStatusCode:vn,formToJSON:Xn,getAdapter:Gn,mergeConfig:Qn}=w,et=(e=!1)=>{let t={};return(W.appPlugin||e)&&(t={headers:{"X-WP-Nonce":W.appToken}}),D.debug(t),t},Zn=(e,t,n,r,s=!1)=>{D.debug(e,t);const i=et(s);w.post(W.appUrl+e,t,i).then(o=>{D.debug(t,o),o!=null&&o.data?n(o.data):n(o)}).catch(o=>{var c,f,u,l,d,b;if(D.error("error",o),((f=(c=o==null?void 0:o.response)==null?void 0:c.data)==null?void 0:f.code)==="rest_cookie_invalid_nonce"){r("Token expired! Reload page.");return}if(((l=(u=o==null?void 0:o.response)==null?void 0:u.data)==null?void 0:l.code)==="error"&&((b=(d=o==null?void 0:o.response)==null?void 0:d.data)==null?void 0:b.message)!==""){r(o.response.data.message);return}r((o==null?void 0:o.message)??tt.contactSupport)})},Yn=async(e,t,n=!1)=>{D.debug(e,t);const r=et(n);return await w.post(W.appUrl+e,t,r).then(s=>(D.debug(s),s)).catch(s=>(console.error(s),Promise.reject(s)))};export{Zn as R,w as a,Yn as b};
