System.register(["./index-20d27f9f.system.js","./app-globals-497eb362.system.js"],(function(e,t){"use strict";var r,n,i,o,s,c,a,f;return{setters:[function(t){r=t.B;n=t.c;i=t.H;o=t.d;s=t.N;c=t.p;a=t.b;e("setNonce",t.s)},function(e){f=e.g}],execute:function(){var e=function(){if(r.isDev&&!r.isTesting){n("Running in development mode.")}if(r.cloneNodeFix){u(i.prototype)}if(r.profile&&!performance.mark){performance.mark=performance.measure=function(){};performance.getEntriesByName=function(){return[]}}var e=r.scriptDataOpts?Array.from(o.querySelectorAll("script")).find((function(e){return new RegExp("/".concat(s,"(\\.esm)?\\.js($|\\?|#)")).test(e.src)||e.getAttribute("data-stencil-namespace")===s})):null;var a=t.meta.url;var f=r.scriptDataOpts?(e||{})["data-opts"]||{}:{};if(a!==""){f.resourcesUrl=new URL(".",a).href}return c(f)};var u=function(e){var t=e.cloneNode;e.cloneNode=function(e){if(this.nodeName==="TEMPLATE"){return t.call(this,e)}var r=t.call(this,false);var n=this.childNodes;if(e){for(var i=0;i<n.length;i++){if(n[i].nodeType!==2){r.appendChild(n[i].cloneNode(true))}}}return r}};e().then((function(e){f();return a([["icon-trending-crypto-list-widget.system",[[1,"icon-trending-crypto-list-widget",{limit:[2],isLoading:[32],error:[32],cryptoTrending:[32]}]]]],e)}))}}}));
//# sourceMappingURL=icon-widgets.system.js.map