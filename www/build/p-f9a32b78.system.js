System.register([],(function(e){"use strict";return{execute:function(){e({_:Fe,a:Me,b:_e,d:Pr,g:Ur,h:Rr});var r=function e(r,t){return function e(){var n=new Array(arguments.length);for(var a=0;a<n.length;a++){n[a]=arguments[a]}return r.apply(t,n)}};var t=Object.prototype.toString;function n(e){return t.call(e)==="[object Array]"}function a(e){return typeof e==="undefined"}function o(e){return e!==null&&!a(e)&&e.constructor!==null&&!a(e.constructor)&&typeof e.constructor.isBuffer==="function"&&e.constructor.isBuffer(e)}function i(e){return t.call(e)==="[object ArrayBuffer]"}function u(e){return typeof FormData!=="undefined"&&e instanceof FormData}function s(e){var r;if(typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView){r=ArrayBuffer.isView(e)}else{r=e&&e.buffer&&e.buffer instanceof ArrayBuffer}return r}function c(e){return typeof e==="string"}function f(e){return typeof e==="number"}function l(e){return e!==null&&typeof e==="object"}function p(e){if(t.call(e)!=="[object Object]"){return false}var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function d(e){return t.call(e)==="[object Date]"}function h(e){return t.call(e)==="[object File]"}function v(e){return t.call(e)==="[object Blob]"}function y(e){return t.call(e)==="[object Function]"}function m(e){return l(e)&&y(e.pipe)}function g(e){return typeof URLSearchParams!=="undefined"&&e instanceof URLSearchParams}function b(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function w(){if(typeof navigator!=="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")){return false}return typeof window!=="undefined"&&typeof document!=="undefined"}function j(e,r){if(e===null||typeof e==="undefined"){return}if(typeof e!=="object"){e=[e]}if(n(e)){for(var t=0,a=e.length;t<a;t++){r.call(null,e[t],t,e)}}else{for(var o in e){if(Object.prototype.hasOwnProperty.call(e,o)){r.call(null,e[o],o,e)}}}}function O(){var e={};function r(r,t){if(p(e[t])&&p(r)){e[t]=O(e[t],r)}else if(p(r)){e[t]=O({},r)}else if(n(r)){e[t]=r.slice()}else{e[t]=r}}for(var t=0,a=arguments.length;t<a;t++){j(arguments[t],r)}return e}function x(e,t,n){j(t,(function t(a,o){if(n&&typeof a==="function"){e[o]=r(a,n)}else{e[o]=a}}));return e}function S(e){if(e.charCodeAt(0)===65279){e=e.slice(1)}return e}var E={isArray:n,isArrayBuffer:i,isBuffer:o,isFormData:u,isArrayBufferView:s,isString:c,isNumber:f,isObject:l,isPlainObject:p,isUndefined:a,isDate:d,isFile:h,isBlob:v,isFunction:y,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:w,forEach:j,merge:O,extend:x,trim:b,stripBOM:S};function A(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var k=function e(r,t,n){if(!t){return r}var a;if(n){a=n(t)}else if(E.isURLSearchParams(t)){a=t.toString()}else{var o=[];E.forEach(t,(function e(r,t){if(r===null||typeof r==="undefined"){return}if(E.isArray(r)){t=t+"[]"}else{r=[r]}E.forEach(r,(function e(r){if(E.isDate(r)){r=r.toISOString()}else if(E.isObject(r)){r=JSON.stringify(r)}o.push(A(t)+"="+A(r))}))}));a=o.join("&")}if(a){var i=r.indexOf("#");if(i!==-1){r=r.slice(0,i)}r+=(r.indexOf("?")===-1?"?":"&")+a}return r};function C(){this.handlers=[]}C.prototype.use=function e(r,t,n){this.handlers.push({fulfilled:r,rejected:t,synchronous:n?n.synchronous:false,runWhen:n?n.runWhen:null});return this.handlers.length-1};C.prototype.eject=function e(r){if(this.handlers[r]){this.handlers[r]=null}};C.prototype.forEach=function e(r){E.forEach(this.handlers,(function e(t){if(t!==null){r(t)}}))};var N=C;var T=function e(r,t){E.forEach(r,(function e(n,a){if(a!==t&&a.toUpperCase()===t.toUpperCase()){r[t]=n;delete r[a]}}))};var U=function e(r,t,n,a,o){r.config=t;if(n){r.code=n}r.request=a;r.response=o;r.isAxiosError=true;r.toJSON=function e(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}};return r};var P=function e(r,t,n,a,o){var i=new Error(r);return U(i,t,n,a,o)};var R=function e(r,t,n){var a=n.config.validateStatus;if(!n.status||!a||a(n.status)){r(n)}else{t(P("Request failed with status code "+n.status,n.config,null,n.request,n))}};var q=E.isStandardBrowserEnv()?function e(){return{write:function e(r,t,n,a,o,i){var u=[];u.push(r+"="+encodeURIComponent(t));if(E.isNumber(n)){u.push("expires="+new Date(n).toGMTString())}if(E.isString(a)){u.push("path="+a)}if(E.isString(o)){u.push("domain="+o)}if(i===true){u.push("secure")}document.cookie=u.join("; ")},read:function e(r){var t=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function e(r){this.write(r,"",Date.now()-864e5)}}}():function e(){return{write:function e(){},read:function e(){return null},remove:function e(){}}}();var B=function e(r){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(r)};var D=function e(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r};var L=function e(r,t){if(r&&!B(t)){return D(r,t)}return t};var F=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];var _=function e(r){var t={};var n;var a;var o;if(!r){return t}E.forEach(r.split("\n"),(function e(r){o=r.indexOf(":");n=E.trim(r.substr(0,o)).toLowerCase();a=E.trim(r.substr(o+1));if(n){if(t[n]&&F.indexOf(n)>=0){return}if(n==="set-cookie"){t[n]=(t[n]?t[n]:[]).concat([a])}else{t[n]=t[n]?t[n]+", "+a:a}}}));return t};var M=E.isStandardBrowserEnv()?function e(){var r=/(msie|trident)/i.test(navigator.userAgent);var t=document.createElement("a");var n;function a(e){var n=e;if(r){t.setAttribute("href",n);n=t.href}t.setAttribute("href",n);return{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}n=a(window.location.href);return function e(r){var t=E.isString(r)?a(r):r;return t.protocol===n.protocol&&t.host===n.host}}():function e(){return function e(){return true}}();var I=function e(r){return new Promise((function e(t,n){var a=r.data;var o=r.headers;var i=r.responseType;if(E.isFormData(a)){delete o["Content-Type"]}var u=new XMLHttpRequest;if(r.auth){var s=r.auth.username||"";var c=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+c)}var f=L(r.baseURL,r.url);u.open(r.method.toUpperCase(),k(f,r.params,r.paramsSerializer),true);u.timeout=r.timeout;function l(){if(!u){return}var e="getAllResponseHeaders"in u?_(u.getAllResponseHeaders()):null;var a=!i||i==="text"||i==="json"?u.responseText:u.response;var o={data:a,status:u.status,statusText:u.statusText,headers:e,config:r,request:u};R(t,n,o);u=null}if("onloadend"in u){u.onloadend=l}else{u.onreadystatechange=function e(){if(!u||u.readyState!==4){return}if(u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)){return}setTimeout(l)}}u.onabort=function e(){if(!u){return}n(P("Request aborted",r,"ECONNABORTED",u));u=null};u.onerror=function e(){n(P("Network Error",r,null,u));u=null};u.ontimeout=function e(){var t="timeout of "+r.timeout+"ms exceeded";if(r.timeoutErrorMessage){t=r.timeoutErrorMessage}n(P(t,r,r.transitional&&r.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u));u=null};if(E.isStandardBrowserEnv()){var p=(r.withCredentials||M(f))&&r.xsrfCookieName?q.read(r.xsrfCookieName):undefined;if(p){o[r.xsrfHeaderName]=p}}if("setRequestHeader"in u){E.forEach(o,(function e(r,t){if(typeof a==="undefined"&&t.toLowerCase()==="content-type"){delete o[t]}else{u.setRequestHeader(t,r)}}))}if(!E.isUndefined(r.withCredentials)){u.withCredentials=!!r.withCredentials}if(i&&i!=="json"){u.responseType=r.responseType}if(typeof r.onDownloadProgress==="function"){u.addEventListener("progress",r.onDownloadProgress)}if(typeof r.onUploadProgress==="function"&&u.upload){u.upload.addEventListener("progress",r.onUploadProgress)}if(r.cancelToken){r.cancelToken.promise.then((function e(r){if(!u){return}u.abort();n(r);u=null}))}if(!a){a=null}u.send(a)}))};var z={"Content-Type":"application/x-www-form-urlencoded"};function H(e,r){if(!E.isUndefined(e)&&E.isUndefined(e["Content-Type"])){e["Content-Type"]=r}}function J(){var e;if(typeof XMLHttpRequest!=="undefined"){e=I}else if(typeof process!=="undefined"&&Object.prototype.toString.call(process)==="[object process]"){e=I}return e}function V(e,r,t){if(E.isString(e)){try{(r||JSON.parse)(e);return E.trim(e)}catch(e){if(e.name!=="SyntaxError"){throw e}}}return(t||JSON.stringify)(e)}var G={transitional:{silentJSONParsing:true,forcedJSONParsing:true,clarifyTimeoutError:false},adapter:J(),transformRequest:[function e(r,t){T(t,"Accept");T(t,"Content-Type");if(E.isFormData(r)||E.isArrayBuffer(r)||E.isBuffer(r)||E.isStream(r)||E.isFile(r)||E.isBlob(r)){return r}if(E.isArrayBufferView(r)){return r.buffer}if(E.isURLSearchParams(r)){H(t,"application/x-www-form-urlencoded;charset=utf-8");return r.toString()}if(E.isObject(r)||t&&t["Content-Type"]==="application/json"){H(t,"application/json");return V(r)}return r}],transformResponse:[function e(r){var t=this.transitional;var n=t&&t.silentJSONParsing;var a=t&&t.forcedJSONParsing;var o=!n&&this.responseType==="json";if(o||a&&E.isString(r)&&r.length){try{return JSON.parse(r)}catch(e){if(o){if(e.name==="SyntaxError"){throw U(e,this,"E_JSON_PARSE")}throw e}}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function e(r){return r>=200&&r<300}};G.headers={common:{Accept:"application/json, text/plain, */*"}};E.forEach(["delete","get","head"],(function e(r){G.headers[r]={}}));E.forEach(["post","put","patch"],(function e(r){G.headers[r]=E.merge(z)}));var X=G;var $=function e(r,t,n){var a=this||X;E.forEach(n,(function e(n){r=n.call(a,r,t)}));return r};var W=function e(r){return!!(r&&r.__CANCEL__)};function K(e){if(e.cancelToken){e.cancelToken.throwIfRequested()}}var Z=function e(r){K(r);r.headers=r.headers||{};r.data=$.call(r,r.data,r.headers,r.transformRequest);r.headers=E.merge(r.headers.common||{},r.headers[r.method]||{},r.headers);E.forEach(["delete","get","head","post","put","patch","common"],(function e(t){delete r.headers[t]}));var t=r.adapter||X.adapter;return t(r).then((function e(t){K(r);t.data=$.call(r,t.data,t.headers,r.transformResponse);return t}),(function e(t){if(!W(t)){K(r);if(t&&t.response){t.response.data=$.call(r,t.response.data,t.response.headers,r.transformResponse)}}return Promise.reject(t)}))};var Y=function e(r,t){t=t||{};var n={};var a=["url","method","data"];var o=["headers","auth","proxy","params"];var i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"];var u=["validateStatus"];function s(e,r){if(E.isPlainObject(e)&&E.isPlainObject(r)){return E.merge(e,r)}else if(E.isPlainObject(r)){return E.merge({},r)}else if(E.isArray(r)){return r.slice()}return r}function c(e){if(!E.isUndefined(t[e])){n[e]=s(r[e],t[e])}else if(!E.isUndefined(r[e])){n[e]=s(undefined,r[e])}}E.forEach(a,(function e(r){if(!E.isUndefined(t[r])){n[r]=s(undefined,t[r])}}));E.forEach(o,c);E.forEach(i,(function e(a){if(!E.isUndefined(t[a])){n[a]=s(undefined,t[a])}else if(!E.isUndefined(r[a])){n[a]=s(undefined,r[a])}}));E.forEach(u,(function e(a){if(a in t){n[a]=s(r[a],t[a])}else if(a in r){n[a]=s(undefined,r[a])}}));var f=a.concat(o).concat(i).concat(u);var l=Object.keys(r).concat(Object.keys(t)).filter((function e(r){return f.indexOf(r)===-1}));E.forEach(l,c);return n};var Q="axios";var ee="0.21.4";var re="Promise based HTTP client for the browser and node.js";var te="index.js";var ne={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"};var ae={type:"git",url:"https://github.com/axios/axios.git"};var oe=["xhr","http","ajax","promise","node"];var ie="Matt Zabriskie";var ue="MIT";var se={url:"https://github.com/axios/axios/issues"};var ce="https://axios-http.com";var fe={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"};var le={"./lib/adapters/http.js":"./lib/adapters/xhr.js"};var pe="dist/axios.min.js";var de="dist/axios.min.js";var he="./index.d.ts";var ve={"follow-redirects":"^1.14.0"};var ye=[{path:"./dist/axios.min.js",threshold:"5kB"}];var me={name:Q,version:ee,description:re,main:te,scripts:ne,repository:ae,keywords:oe,author:ie,license:ue,bugs:se,homepage:ce,devDependencies:fe,browser:le,jsdelivr:pe,unpkg:de,typings:he,dependencies:ve,bundlesize:ye};var ge={};["object","boolean","number","function","string","symbol"].forEach((function(e,r){ge[e]=function t(n){return typeof n===e||"a"+(r<1?"n ":" ")+e}}));var be={};var we=me.version.split(".");function je(e,r){var t=r?r.split("."):we;var n=e.split(".");for(var a=0;a<3;a++){if(t[a]>n[a]){return true}else if(t[a]<n[a]){return false}}return false}ge.transitional=function e(r,t,n){var a=t&&je(t);function o(e,r){return"[Axios v"+me.version+"] Transitional option '"+e+"'"+r+(n?". "+n:"")}return function(e,n,i){if(r===false){throw new Error(o(n," has been removed in "+t))}if(a&&!be[n]){be[n]=true;console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))}return r?r(e,n,i):true}};function Oe(e,r,t){if(typeof e!=="object"){throw new TypeError("options must be an object")}var n=Object.keys(e);var a=n.length;while(a-- >0){var o=n[a];var i=r[o];if(i){var u=e[o];var s=u===undefined||i(u,o,e);if(s!==true){throw new TypeError("option "+o+" must be "+s)}continue}if(t!==true){throw Error("Unknown option "+o)}}}var xe={isOlderVersion:je,assertOptions:Oe,validators:ge};var Se=xe.validators;function Ee(e){this.defaults=e;this.interceptors={request:new N,response:new N}}Ee.prototype.request=function e(r){if(typeof r==="string"){r=arguments[1]||{};r.url=arguments[0]}else{r=r||{}}r=Y(this.defaults,r);if(r.method){r.method=r.method.toLowerCase()}else if(this.defaults.method){r.method=this.defaults.method.toLowerCase()}else{r.method="get"}var t=r.transitional;if(t!==undefined){xe.assertOptions(t,{silentJSONParsing:Se.transitional(Se.boolean,"1.0.0"),forcedJSONParsing:Se.transitional(Se.boolean,"1.0.0"),clarifyTimeoutError:Se.transitional(Se.boolean,"1.0.0")},false)}var n=[];var a=true;this.interceptors.request.forEach((function e(t){if(typeof t.runWhen==="function"&&t.runWhen(r)===false){return}a=a&&t.synchronous;n.unshift(t.fulfilled,t.rejected)}));var o=[];this.interceptors.response.forEach((function e(r){o.push(r.fulfilled,r.rejected)}));var i;if(!a){var u=[Z,undefined];Array.prototype.unshift.apply(u,n);u=u.concat(o);i=Promise.resolve(r);while(u.length){i=i.then(u.shift(),u.shift())}return i}var s=r;while(n.length){var c=n.shift();var f=n.shift();try{s=c(s)}catch(e){f(e);break}}try{i=Z(s)}catch(e){return Promise.reject(e)}while(o.length){i=i.then(o.shift(),o.shift())}return i};Ee.prototype.getUri=function e(r){r=Y(this.defaults,r);return k(r.url,r.params,r.paramsSerializer).replace(/^\?/,"")};E.forEach(["delete","get","head","options"],(function e(r){Ee.prototype[r]=function(e,t){return this.request(Y(t||{},{method:r,url:e,data:(t||{}).data}))}}));E.forEach(["post","put","patch"],(function e(r){Ee.prototype[r]=function(e,t,n){return this.request(Y(n||{},{method:r,url:e,data:t}))}}));var Ae=Ee;function ke(e){this.message=e}ke.prototype.toString=function e(){return"Cancel"+(this.message?": "+this.message:"")};ke.prototype.__CANCEL__=true;var Ce=ke;function Ne(e){if(typeof e!=="function"){throw new TypeError("executor must be a function.")}var r;this.promise=new Promise((function e(t){r=t}));var t=this;e((function e(n){if(t.reason){return}t.reason=new Ce(n);r(t.reason)}))}Ne.prototype.throwIfRequested=function e(){if(this.reason){throw this.reason}};Ne.source=function e(){var r;var t=new Ne((function e(t){r=t}));return{token:t,cancel:r}};var Te=Ne;var Ue=function e(r){return function e(t){return r.apply(null,t)}};var Pe=function e(r){return typeof r==="object"&&r.isAxiosError===true};function Re(e){var t=new Ae(e);var n=r(Ae.prototype.request,t);E.extend(n,Ae.prototype,t);E.extend(n,t);return n}var qe=Re(X);qe.Axios=Ae;qe.create=function e(r){return Re(Y(qe.defaults,r))};qe.Cancel=Ce;qe.CancelToken=Te;qe.isCancel=W;qe.all=function e(r){return Promise.all(r)};qe.spread=Ue;qe.isAxiosError=Pe;var Be=qe;var De=qe;Be.default=De;var Le=e("c",Be);function Fe(e){return e!=null&&typeof e==="object"&&e["@@functional/placeholder"]===true}function _e(e){return function r(t){if(arguments.length===0||Fe(t)){return r}else{return e.apply(this,arguments)}}}function Me(e){return function r(t,n){switch(arguments.length){case 0:return r;case 1:return Fe(t)?r:_e((function(r){return e(t,r)}));default:return Fe(t)&&Fe(n)?r:Fe(t)?_e((function(r){return e(r,n)})):Fe(n)?_e((function(r){return e(t,r)})):e(t,n)}}}function Ie(e,r){switch(e){case 0:return function(){return r.apply(this,arguments)};case 1:return function(e){return r.apply(this,arguments)};case 2:return function(e,t){return r.apply(this,arguments)};case 3:return function(e,t,n){return r.apply(this,arguments)};case 4:return function(e,t,n,a){return r.apply(this,arguments)};case 5:return function(e,t,n,a,o){return r.apply(this,arguments)};case 6:return function(e,t,n,a,o,i){return r.apply(this,arguments)};case 7:return function(e,t,n,a,o,i,u){return r.apply(this,arguments)};case 8:return function(e,t,n,a,o,i,u,s){return r.apply(this,arguments)};case 9:return function(e,t,n,a,o,i,u,s,c){return r.apply(this,arguments)};case 10:return function(e,t,n,a,o,i,u,s,c,f){return r.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function ze(e,r,t){return function(){var n=[];var a=0;var o=e;var i=0;while(i<r.length||a<arguments.length){var u;if(i<r.length&&(!Fe(r[i])||a>=arguments.length)){u=r[i]}else{u=arguments[a];a+=1}n[i]=u;if(!Fe(u)){o-=1}i+=1}return o<=0?t.apply(this,n):Ie(o,ze(e,n,t))}}var He=Me((function e(r,t){if(r===1){return _e(t)}return Ie(r,ze(r,[],t))}));var Je=Array.isArray||function e(r){return r!=null&&r.length>=0&&Object.prototype.toString.call(r)==="[object Array]"};function Ve(e){return e!=null&&typeof e["@@transducer/step"]==="function"}function Ge(e,r,t){return function(){if(arguments.length===0){return t()}var n=arguments[arguments.length-1];if(!Je(n)){var a=0;while(a<e.length){if(typeof n[e[a]]==="function"){return n[e[a]].apply(n,Array.prototype.slice.call(arguments,0,-1))}a+=1}if(Ve(n)){var o=r.apply(null,Array.prototype.slice.call(arguments,0,-1));return o(n)}}return t.apply(this,arguments)}}var Xe={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}};function $e(e){var r=[];var t;while(!(t=e.next()).done){r.push(t.value)}return r}function We(e,r,t){var n=0;var a=t.length;while(n<a){if(e(r,t[n])){return true}n+=1}return false}function Ke(e){var r=String(e).match(/^function (\w*)/);return r==null?"":r[1]}function Ze(e,r){return Object.prototype.hasOwnProperty.call(r,e)}function Ye(e,r){if(e===r){return e!==0||1/e===1/r}else{return e!==e&&r!==r}}var Qe=typeof Object.is==="function"?Object.is:Ye;var er=Object.prototype.toString;var rr=function(){return er.call(arguments)==="[object Arguments]"?function e(r){return er.call(r)==="[object Arguments]"}:function e(r){return Ze("callee",r)}}();var tr=!{toString:null}.propertyIsEnumerable("toString");var nr=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];var ar=function(){return arguments.propertyIsEnumerable("length")}();var or=function e(r,t){var n=0;while(n<r.length){if(r[n]===t){return true}n+=1}return false};var ir=typeof Object.keys==="function"&&!ar?_e((function e(r){return Object(r)!==r?[]:Object.keys(r)})):_e((function e(r){if(Object(r)!==r){return[]}var t,n;var a=[];var o=ar&&rr(r);for(t in r){if(Ze(t,r)&&(!o||t!=="length")){a[a.length]=t}}if(tr){n=nr.length-1;while(n>=0){t=nr[n];if(Ze(t,r)&&!or(a,t)){a[a.length]=t}n-=1}}return a}));var ur=e("f",_e((function e(r){return r===null?"Null":r===undefined?"Undefined":Object.prototype.toString.call(r).slice(8,-1)})));function sr(e,r,t,n){var a=$e(e);var o=$e(r);function i(e,r){return cr(e,r,t.slice(),n.slice())}return!We((function(e,r){return!We(i,r,e)}),o,a)}function cr(e,r,t,n){if(Qe(e,r)){return true}var a=ur(e);if(a!==ur(r)){return false}if(typeof e["fantasy-land/equals"]==="function"||typeof r["fantasy-land/equals"]==="function"){return typeof e["fantasy-land/equals"]==="function"&&e["fantasy-land/equals"](r)&&typeof r["fantasy-land/equals"]==="function"&&r["fantasy-land/equals"](e)}if(typeof e.equals==="function"||typeof r.equals==="function"){return typeof e.equals==="function"&&e.equals(r)&&typeof r.equals==="function"&&r.equals(e)}switch(a){case"Arguments":case"Array":case"Object":if(typeof e.constructor==="function"&&Ke(e.constructor)==="Promise"){return e===r}break;case"Boolean":case"Number":case"String":if(!(typeof e===typeof r&&Qe(e.valueOf(),r.valueOf()))){return false}break;case"Date":if(!Qe(e.valueOf(),r.valueOf())){return false}break;case"Error":return e.name===r.name&&e.message===r.message;case"RegExp":if(!(e.source===r.source&&e.global===r.global&&e.ignoreCase===r.ignoreCase&&e.multiline===r.multiline&&e.sticky===r.sticky&&e.unicode===r.unicode)){return false}break}var o=t.length-1;while(o>=0){if(t[o]===e){return n[o]===r}o-=1}switch(a){case"Map":if(e.size!==r.size){return false}return sr(e.entries(),r.entries(),t.concat([e]),n.concat([r]));case"Set":if(e.size!==r.size){return false}return sr(e.values(),r.values(),t.concat([e]),n.concat([r]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return false}var i=ir(e);if(i.length!==ir(r).length){return false}var u=t.concat([e]);var s=n.concat([r]);o=i.length-1;while(o>=0){var c=i[o];if(!(Ze(c,r)&&cr(r[c],e[c],u,s))){return false}o-=1}return true}var fr=e("j",Me((function e(r,t){return cr(r,t,[],[])})));function lr(e,r,t){var n,a;if(typeof e.indexOf==="function"){switch(typeof r){case"number":if(r===0){n=1/r;while(t<e.length){a=e[t];if(a===0&&1/a===n){return t}t+=1}return-1}else if(r!==r){while(t<e.length){a=e[t];if(typeof a==="number"&&a!==a){return t}t+=1}return-1}return e.indexOf(r,t);case"string":case"boolean":case"function":case"undefined":return e.indexOf(r,t);case"object":if(r===null){return e.indexOf(r,t)}}}while(t<e.length){if(fr(e[t],r)){return t}t+=1}return-1}function pr(e,r){return lr(r,e,0)>=0}function dr(e,r){var t=0;var n=r.length;var a=Array(n);while(t<n){a[t]=e(r[t]);t+=1}return a}function hr(e){var r=e.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return'"'+r.replace(/"/g,'\\"')+'"'}var vr=function e(r){return(r<10?"0":"")+r};var yr=typeof Date.prototype.toISOString==="function"?function e(r){return r.toISOString()}:function e(r){return r.getUTCFullYear()+"-"+vr(r.getUTCMonth()+1)+"-"+vr(r.getUTCDate())+"T"+vr(r.getUTCHours())+":"+vr(r.getUTCMinutes())+":"+vr(r.getUTCSeconds())+"."+(r.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};function mr(e){return function(){return!e.apply(this,arguments)}}function gr(e,r,t){var n=0;var a=t.length;while(n<a){r=e(r,t[n]);n+=1}return r}function br(e,r){var t=0;var n=r.length;var a=[];while(t<n){if(e(r[t])){a[a.length]=r[t]}t+=1}return a}function wr(e){return Object.prototype.toString.call(e)==="[object Object]"}var jr=function(){function e(e,r){this.xf=r;this.f=e}e.prototype["@@transducer/init"]=Xe.init;e.prototype["@@transducer/result"]=Xe.result;e.prototype["@@transducer/step"]=function(e,r){return this.f(r)?this.xf["@@transducer/step"](e,r):e};return e}();function Or(e){return function(r){return new jr(e,r)}}var xr=Me(Ge(["fantasy-land/filter","filter"],Or,(function(e,r){return wr(r)?gr((function(t,n){if(e(r[n])){t[n]=r[n]}return t}),{},ir(r)):br(e,r)})));var Sr=Me((function e(r,t){return xr(mr(r),t)}));function Er(e,r){var t=function t(n){var a=r.concat([e]);return pr(n,a)?"<Circular>":Er(n,a)};var n=function(e,r){return dr((function(r){return hr(r)+": "+t(e[r])}),r.slice().sort())};switch(Object.prototype.toString.call(e)){case"[object Arguments]":return"(function() { return arguments; }("+dr(t,e).join(", ")+"))";case"[object Array]":return"["+dr(t,e).concat(n(e,Sr((function(e){return/^\d+$/.test(e)}),ir(e)))).join(", ")+"]";case"[object Boolean]":return typeof e==="object"?"new Boolean("+t(e.valueOf())+")":e.toString();case"[object Date]":return"new Date("+(isNaN(e.valueOf())?t(NaN):hr(yr(e)))+")";case"[object Map]":return"new Map("+t(Array.from(e))+")";case"[object Null]":return"null";case"[object Number]":return typeof e==="object"?"new Number("+t(e.valueOf())+")":1/e===-Infinity?"-0":e.toString(10);case"[object Set]":return"new Set("+t(Array.from(e).sort())+")";case"[object String]":return typeof e==="object"?"new String("+t(e.valueOf())+")":hr(e);case"[object Undefined]":return"undefined";default:if(typeof e.toString==="function"){var a=e.toString();if(a!=="[object Object]"){return a}}return"{"+n(e,ir(e)).join(", ")+"}"}}var Ar=_e((function e(r){return Er(r,[])}));function kr(e){var r=Object.prototype.toString.call(e);return r==="[object Function]"||r==="[object AsyncFunction]"||r==="[object GeneratorFunction]"||r==="[object AsyncGeneratorFunction]"}var Cr=e("i",Me((function e(r,t){return He(r+1,(function(){var e=arguments[r];if(e!=null&&kr(e[t])){return e[t].apply(e,Array.prototype.slice.call(arguments,0,r))}throw new TypeError(Ar(e)+' does not have a method named "'+t+'"')}))})));var Nr=e("t",Cr(0,"toLowerCase"));var Tr=e("e",typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{});function Ur(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function Pr(e,r,t){return t={path:r,exports:{},require:function(e,r){return qr()}},e(t,t.exports),t.exports}function Rr(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:true});Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:true,get:function(){return e[t]}})}));return r}function qr(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}}}}));
//# sourceMappingURL=p-f9a32b78.system.js.map