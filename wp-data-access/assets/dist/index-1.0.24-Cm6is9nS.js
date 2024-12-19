import{r as W,g as $}from"./vendor-1.0.24-BmpNFhoq.js";var O={},E,U;function H(){return U||(U=1,E=function(){var u=document.getSelection();if(!u.rangeCount)return function(){};for(var c=document.activeElement,v=[],d=0;d<u.rangeCount;d++)v.push(u.getRangeAt(d));switch(c.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":c.blur();break;default:c=null;break}return u.removeAllRanges(),function(){u.type==="Caret"&&u.removeAllRanges(),u.rangeCount||v.forEach(function(m){u.addRange(m)}),c&&c.focus()}}),E}var j,N;function X(){if(N)return j;N=1;var u=H(),c={"text/plain":"Text","text/html":"Url",default:"Text"},v="Copy to clipboard: #{key}, Enter";function d(p){var i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return p.replace(/#{\s*key\s*}/g,i)}function m(p,i){var s,w,_,g,y,a,b=!1;i||(i={}),s=i.debug||!1;try{_=u(),g=document.createRange(),y=document.getSelection(),a=document.createElement("span"),a.textContent=p,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(f){if(f.stopPropagation(),i.format)if(f.preventDefault(),typeof f.clipboardData>"u"){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var h=c[i.format]||c.default;window.clipboardData.setData(h,p)}else f.clipboardData.clearData(),f.clipboardData.setData(i.format,p);i.onCopy&&(f.preventDefault(),i.onCopy(f.clipboardData))}),document.body.appendChild(a),g.selectNodeContents(a),y.addRange(g);var T=document.execCommand("copy");if(!T)throw new Error("copy command was unsuccessful");b=!0}catch(f){s&&console.error("unable to copy using execCommand: ",f),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(i.format||"text",p),i.onCopy&&i.onCopy(window.clipboardData),b=!0}catch(h){s&&console.error("unable to copy using clipboardData: ",h),s&&console.error("falling back to prompt"),w=d("message"in i?i.message:v),window.prompt(w,p)}}finally{y&&(typeof y.removeRange=="function"?y.removeRange(g):y.removeAllRanges()),a&&document.body.removeChild(a),_()}return b}return j=m,j}var L;function G(){if(L)return O;L=1;function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(e)}Object.defineProperty(O,"__esModule",{value:!0}),O.CopyToClipboard=void 0;var c=m(W()),v=m(X()),d=["text","onCopy","options","children"];function m(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(r){S(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s(e,t){if(e==null)return{};var n=w(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function w(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&g(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}function b(e,t){return b=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},b(e,t)}function T(e){var t=z();return function(){var r=P(e),o;if(t){var l=P(this).constructor;o=Reflect.construct(r,arguments,l)}else o=r.apply(this,arguments);return f(this,o)}}function f(e,t){if(t&&(u(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},P(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){a(n,e);var t=T(n);function n(){var r;_(this,n);for(var o=arguments.length,l=new Array(o),C=0;C<o;C++)l[C]=arguments[C];return r=t.call.apply(t,[this].concat(l)),S(h(r),"onClick",function(x){var R=r.props,A=R.text,I=R.onCopy,B=R.children,F=R.options,D=c.default.Children.only(B),K=(0,v.default)(A,F);I&&I(A,K),D&&D.props&&typeof D.props.onClick=="function"&&D.props.onClick(x)}),r}return y(n,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var l=o.children,C=s(o,d),x=c.default.Children.only(l);return c.default.cloneElement(x,i(i({},C),{},{onClick:this.onClick}))}}]),n}(c.default.PureComponent);return O.CopyToClipboard=q,S(q,"defaultProps",{onCopy:void 0,options:void 0}),O}var k,M;function J(){if(M)return k;M=1;var u=G(),c=u.CopyToClipboard;return c.CopyToClipboard=c,k=c,k}var Q=J();const Y=$(Q);export{Y as C,Q as l};
