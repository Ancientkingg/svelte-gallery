!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).ImageMasonryExample=e()}(this,function(){"use strict";function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function t(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&a(r,n.prototype),r}).apply(null,arguments)}function s(t){var n="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return c(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a(e,t)})(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?u(t):e}function f(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){}function p(t,e){for(var n in e)t[n]=e[n];return t}function h(t){return t()}function v(){return Object.create(null)}function y(t){t.forEach(h)}function w(t){return"function"==typeof t}function _(t,e){return t!=t?e==e:t!==e||t&&"object"===g(t)||"function"==typeof t}function b(t,e,n){return t[1]?p({},p(e.$$scope.ctx,t[1](n?n(e):{}))):e.$$scope.ctx}function $(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function E(t){return document.createElement(t)}function k(){return function(t){return document.createTextNode(t)}(" ")}function z(t,e,n,i){return t.addEventListener(e,n,i),function(){return t.removeEventListener(e,n,i)}}function O(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function L(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}var S;function C(t){S=t}function R(t){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(t)}function P(){var r=S;return function(t,e){var n=r.$$.callbacks[t];if(n){var i=function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(t,e);n.slice().forEach(function(t){t.call(r,i)})}}}var A=[],I=[],T=[],F=[],n=Promise.resolve(),M=!1;function H(t){T.push(t)}function q(){var t=new Set;do{for(;A.length;){var e=A.shift();C(e),D(e.$$)}for(;I.length;)I.pop()();for(var n=0;n<T.length;n+=1){var i=T[n];t.has(i)||(i(),t.add(i))}T.length=0}while(A.length);for(;F.length;)F.pop()();M=!1}function D(t){t.fragment&&(t.update(t.dirty),y(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(H))}var N,B=new Set;function V(){N={r:0,c:[],p:N}}function W(){N.r||y(N.c),N=N.p}function U(t,e){t&&t.i&&(B.delete(t),t.i(e))}function G(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),N.c.push(function(){B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function J(t,e){G(t,1,1,function(){e.delete(t.key)})}function K(e,t,n){var i=e.$$,r=i.fragment,o=i.on_mount,a=i.on_destroy,c=i.after_update;r.m(t,n),H(function(){var t=o.map(h).filter(w);a?a.push.apply(a,f(t)):y(t),e.$$.on_mount=[]}),c.forEach(H)}function Q(t,e){t.$$.fragment&&(y(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function X(t,e){t.$$.dirty||(A.push(t),M||(M=!0,n.then(q)),t.$$.dirty=v()),t.$$.dirty[e]=!0}function Y(i,t,e,n,r,o){var a=S;C(i);var c=t.props||{},s=i.$$={fragment:null,ctx:null,props:o,update:d,not_equal:r,bound:v(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:v(),dirty:null},u=!1;s.ctx=e?e(i,c,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:e;return s.ctx&&r(s.ctx[t],s.ctx[t]=n)&&(s.bound[t]&&s.bound[t](n),u&&X(i,t)),e}):c,s.update(),u=!0,y(s.before_update),s.fragment=n(s.ctx),t.target&&(t.hydrate?s.fragment.l(function(t){return Array.from(t.childNodes)}(t.target)):s.fragment.c(),t.intro&&U(i.$$.fragment),K(i,t.target,t.anchor),q()),C(a)}var Z=function(){function t(){i(this,t)}return e(t,[{key:"$destroy",value:function(){Q(this,1),this.$destroy=d}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}]),t}(),tt={single_source_shortest_paths:function(t,e,n){var i={},r={};r[e]=0;var o,a,c,s,u,l,f=new et(function(t){return t.cost});for(f.push({value:e,cost:0});f.size();)for(var d in a=(o=f.pop()).value,c=o.cost,s=t(a)||{})u=c+s[d],l=r[d],(void 0===r[d]||u<l)&&(r[d]=u,f.push({value:d,cost:u}),i[d]=a);if(void 0!==r[n])return i;var h=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(h)},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],i=e;i;)n.push(i),t[i],i=t[i];return n.reverse(),n},find_path:function(t,e,n){var i=tt.single_source_shortest_paths(t,e,n);return tt.extract_shortest_path_from_predecessor_list(i,n)}};function et(t){this.content=[],this.scoreFunction=t}function nt(t){return Math.round(100*t+Number.EPSILON)/100}function it(t,e,n){return function(t,e){return nt(t/e)}(e-(t.length-1)*n,t.reduce(function(t,e){return t+e.ratio},0))}function rt(t){for(var e=0<arguments.length&&void 0!==t?t:{},n=e.images,u=e.containerWidth,l=e.targetHeight,i=e.padding,f=void 0===i?2:i,r=e.seekLimit,d=void 0===r?8:r,o=e.byRow,a=void 0===o||o,h=n.map(function(t,e){return function(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(o,!0).forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):m(o).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))})}return r}({},t,{index:e,ratio:function(t,e){return nt(t/e)}(t.width,t.height)})}),c=tt.find_path(function(t){var e,n,i,r,o,a,c={};c[t=+t]=0;for(var s=t+1;s<h.length+1&&!(d<s-t);++s)c[""+s]=(e=t,n=s,i=u,r=l,o=f,void 0,a=it(h.slice(e,n),i,o),Math.pow(Math.abs(a-r),2));return c},"0",h.length),s=[],g=[],p=0;p<c.length;p++)c[p+1]&&function(){var t=h.slice(+c[p],+c[p+1]),i=it(t,u,f);t.forEach(function(t){var e,n;t.scaledWidth=(e=i,n=t.ratio,nt(e*n)),t.scaledHeight=i,t.scaledWidthPc=nt(t.scaledWidth/u*100),g.push(t)}),s.push(t)}();return a?s:g}function ot(n){var i=n.target||n.srcElement;i.__resizeRAF__&&cancelAnimationFrame(i.__resizeRAF__),i.__resizeRAF__=requestAnimationFrame(function(){var e=i.__resizeTrigger__,t=e&&e.__resizeListeners__;t&&t.forEach(function(t){t.call(e,n)})})}et.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return 0<this.content.length&&(this.content[0]=e,this.sinkDown(0)),t},remove:function(t){for(var e=this.content.length,n=0;n<e;n++)if(this.content[n]===t){var i=this.content.pop();return void(n!==e-1&&(this.content[n]=i,this.scoreFunction(i)<this.scoreFunction(t)?this.bubbleUp(n):this.sinkDown(n)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(t){for(var e=this.content[t];0<t;){var n=Math.floor((t+1)/2)-1,i=this.content[n];if(!(this.scoreFunction(e)<this.scoreFunction(i)))break;this.content[n]=e,this.content[t]=i,t=n}},sinkDown:function(t){for(var e=this.content.length,n=this.content[t],i=this.scoreFunction(n);;){var r=2*(t+1),o=r-1,a=null;if(o<e){var c=this.content[o],s=this.scoreFunction(c);s<i&&(a=o)}if(r<e){var u=this.content[r];this.scoreFunction(u)<(null===a?i:s)&&(a=r)}if(null==a)break;this.content[t]=this.content[a],this.content[a]=n,t=a}}},void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));function at(t,e){var n,i=this.document,r=i.attachEvent;if("undefined"!=typeof navigator&&(n=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!t.__resizeListeners__)if(t.__resizeListeners__=[],r)(t.__resizeTrigger__=t).attachEvent("onresize",ot);else{"static"===getComputedStyle(t).position&&(t.style.position="relative");var o=t.__resizeTrigger__=i.createElement("object");o.setAttribute("style","position: absolute; top: 0; left: 0; height: 100%; width: 100%; pointer-events: none; z-index: -1; opacity: 0;"),o.setAttribute("class","resize-sensor"),o.setAttribute("tabindex","-1"),o.__resizeElement__=t,o.onload=function(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",ot)},o.type="text/html",n&&t.appendChild(o),o.data="about:blank",n||t.appendChild(o)}t.__resizeListeners__.push(e)}var ct="undefined"==typeof window?at:at.bind(window),st=function(t,e){var n=document.attachEvent,i=t.__resizeListeners__||[];if(e){var r=i.indexOf(e);-1!==r&&i.splice(r,1)}else i=t.__resizeListeners__=[];if(!i.length){if(n)t.detachEvent("onresize",ot);else if(t.__resizeTrigger__){var o=t.__resizeTrigger__.contentDocument,a=o&&o.defaultView;a&&(a.removeEventListener("resize",ot),delete a.__resizeTrigger__),t.__resizeTrigger__=!t.removeChild(t.__resizeTrigger__)}delete t.__resizeListeners__}};ct.unbind=st;var ut={};function lt(t){var n,i,e;return{c:function(){O(n=E("img"),"class",i="lazy-image "+(t.isLoaded?"is-loaded":"")+" svelte-d3kf80"),O(n,"src",t.src),O(n,"srcset",t.srcset),O(n,"alt",t.alt),e=z(n,"load",t.onLoad)},m:function(t,e){j(t,n,e)},p:function(t,e){t.isLoaded&&i!==(i="lazy-image "+(e.isLoaded?"is-loaded":"")+" svelte-d3kf80")&&O(n,"class",i),t.src&&O(n,"src",e.src),t.srcset&&O(n,"srcset",e.srcset),t.alt&&O(n,"alt",e.alt)},d:function(t){t&&x(n),e()}}}function ft(n){var i,r,o=n.isVisible&&lt(n);return{c:function(){i=E("div"),o&&o.c(),O(i,"data-masonry-image",""),O(i,"class",r="lazy-image-container "+(n.isLoaded?"is-loaded":"")+" svelte-d3kf80")},m:function(t,e){j(t,i,e),o&&o.m(i,null),n.div_binding(i)},p:function(t,e){e.isVisible?o?o.p(t,e):((o=lt(e)).c(),o.m(i,null)):o&&(o.d(1),o=null),t.isLoaded&&r!==(r="lazy-image-container "+(e.isLoaded?"is-loaded":"")+" svelte-d3kf80")&&O(i,"class",r)},i:d,o:d,d:function(t){t&&x(i),o&&o.d(),n.div_binding(null)}}}function dt(t,e,n){var i,r=e.src,o=void 0===r?"":r,a=e.srcset,c=void 0===a?"":a,s=e.alt,u=void 0===s?"":s,l=e.emitter,f=void 0===l?null:l,d=!1,h=!1;return ut[o]&&(n("isLoaded",d=!0),n("isVisible",h=!0)),R(function(){if(!d){var t=function t(){!function(t){var e=t.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,r=e.top<=n&&0<=e.top+e.height,o=e.left<=i&&0<=e.left+e.width;return r&&o}(i)||(f.off("viewportChange",t),n("isVisible",h=!0))};return f.on("viewportChange",t),t(),function(){f.off("viewportChange",t)}}}),t.$set=function(t){"src"in t&&n("src",o=t.src),"srcset"in t&&n("srcset",c=t.srcset),"alt"in t&&n("alt",u=t.alt),"emitter"in t&&n("emitter",f=t.emitter)},{onLoad:function(){ut[o]=!0,n("isLoaded",d=!0)},src:o,srcset:c,alt:u,emitter:f,element:i,isLoaded:d,isVisible:h,div_binding:function(t){I[t?"unshift":"push"](function(){n("element",i=t)})}}}var ht=function(){function n(t){var e;return i(this,n),e=l(this,o(n).call(this)),document.getElementById("svelte-d3kf80-style")||function(){var t=E("style");t.id="svelte-d3kf80-style",t.textContent=".lazy-image-container.svelte-d3kf80{width:100%;height:100%;position:relative;background:rgba(255, 255, 255, 0.1);display:block}.lazy-image.svelte-d3kf80{display:block;width:100%;height:100%;opacity:0;transition:opacity 200ms ease-in-out}.lazy-image.is-loaded.svelte-d3kf80{opacity:1}",$(document.head,t)}(),Y(u(e),t,dt,ft,_,["src","srcset","alt","emitter"]),e}return t(n,Z),n}();function gt(){}gt.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function r(){i.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,r=n.length;i<r;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],r=[];if(i&&e)for(var o=0,a=i.length;o<a;o++)i[o].fn!==e&&i[o].fn._!==e&&r.push(i[o]);return r.length?n[t]=r:delete n[t],this}};var pt=gt,mt=gt;function vt(){var t=new pt,e=function(n,i){var r=null;return function(){clearTimeout(r);var t=arguments,e=this;r=setTimeout(function(){n.apply(e,t)},i)}}(function(){t.emit("viewportChange"),t.e.viewportChange||t._unbind()},50);return t._bind=function(){window.addEventListener("scroll",e),window.addEventListener("resize",e)},t._unbind=function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",e)},t._bind(),t}pt.TinyEmitter=mt;var yt=function(t){t.image;return{image:t.scaledImages}},wt=function(t){var e=t.image;t.scaledImages;return{image:e}};function _t(t,e,n){var i=Object.create(t);return i.image=e[n],i}function bt(t,e,n){var i=Object.create(t);return i.row=e[n],i}function $t(t,i){for(var r,n,o,a,e,c=[i.image,{emitter:i.emitter}],s={},u=0;u<c.length;u+=1)s=p(s,c[u]);var l=new ht({props:s}),f=i.$$slots.default,d=function(t,e,n){if(t){var i=b(t,e,n);return t[0](i)}}(f,i,wt);function h(){return i.click_handler(i)}return{key:t,first:null,c:function(){r=E("div"),l.$$.fragment.c(),n=k(),d&&d.c(),O(r,"class","masonry-item svelte-8wp3hq"),O(r,"style",o=i.makeStyle(i.image)),e=z(r,"click",h),this.first=r},l:function(t){d&&d.l(div_nodes)},m:function(t,e){j(t,r,e),K(l,r,null),$(r,n),d&&d.m(r,null),a=!0},p:function(t,e){i=e;var n=t.scaledImages||t.emitter?function(t,e){for(var n={},i={},r={$$scope:1},o=t.length;o--;){var a=t[o],c=e[o];if(c){for(var s in a)s in c||(i[s]=1);for(var u in c)r[u]||(n[u]=c[u],r[u]=1);t[o]=c}else for(var l in a)r[l]=1}for(var f in i)f in n||(n[f]=void 0);return n}(c,[t.scaledImages&&function(t){return"object"===g(t)&&null!==t?t:{}}(i.image),t.emitter&&{emitter:i.emitter}]):{};l.$set(n),d&&d.p&&(t.$$scope||t.scaledImages)&&d.p(function(t,e,n,i){return t[1]?p({},p(e.$$scope.changed||{},t[1](i?i(n):{}))):e.$$scope.changed||{}}(f,i,t,yt),b(f,i,wt)),a&&!t.scaledImages||o===(o=i.makeStyle(i.image))||O(r,"style",o)},i:function(t){a||(U(l.$$.fragment,t),U(d,t),a=!0)},o:function(t){G(l.$$.fragment,t),G(d,t),a=!1},d:function(t){t&&x(r),Q(l),d&&d.d(t),e()}}}function jt(e){for(var i,r,o,a=[],c=new Map,n=e.row,s=function(t){return t.image.src},t=0;t<n.length;t+=1){var u=_t(e,n,t),l=s(u);c.set(l,a[t]=$t(l,u))}return{c:function(){i=E("div");for(var t=0;t<a.length;t+=1)a[t].c();r=k(),O(i,"class","masonry-row svelte-8wp3hq"),L(i,"margin-bottom",e.padding+"px")},m:function(t,e){j(t,i,e);for(var n=0;n<a.length;n+=1)a[n].m(i,null);$(i,r),o=!0},p:function(t,e){var n=e.row;V(),a=function(t,e,n,i,r,o,a,c,s,u,l,f){for(var d=t.length,h=o.length,g=d,p={};g--;)p[t[g].key]=g;var m=[],v=new Map,y=new Map;for(g=h;g--;){var w=f(r,o,g),_=n(w),b=a.get(_);b?i&&b.p(e,w):(b=u(_,w)).c(),v.set(_,m[g]=b),_ in p&&y.set(_,Math.abs(g-p[_]))}var $=new Set,j=new Set;function x(t){U(t,1),t.m(c,l),a.set(t.key,t),l=t.first,h--}for(;d&&h;){var E=m[h-1],k=t[d-1],z=E.key,O=k.key;E===k?(l=E.first,d--,h--):v.has(O)?!a.has(z)||$.has(z)?x(E):j.has(O)?d--:y.get(z)>y.get(O)?(j.add(z),x(E)):($.add(O),d--):(s(k,a),d--)}for(;d--;){var L=t[d];v.has(L.key)||s(L,a)}for(;h;)x(m[h-1]);return m}(a,t,s,1,e,n,c,i,J,$t,r,_t),W(),o&&!t.padding||L(i,"margin-bottom",e.padding+"px")},i:function(t){if(!o){for(var e=0;e<n.length;e+=1)U(a[e]);o=!0}},o:function(t){for(var e=0;e<a.length;e+=1)G(a[e]);o=!1},d:function(t){t&&x(i);for(var e=0;e<a.length;e+=1)a[e].d()}}}function xt(i){for(var r,o,a=i.scaledImages,c=[],t=0;t<a.length;t+=1)c[t]=jt(bt(i,a,t));function s(t){return G(c[t],1,1,function(){c[t]=null})}return{c:function(){r=E("div");for(var t=0;t<c.length;t+=1)c[t].c();O(r,"class","image-masonry")},m:function(t,e){j(t,r,e);for(var n=0;n<c.length;n+=1)c[n].m(r,null);i.div_binding(r),o=!0},p:function(t,e){if(t.padding||t.scaledImages||t.makeStyle||t.$$scope||t.emitter){var n;for(a=e.scaledImages,n=0;n<a.length;n+=1){var i=bt(e,a,n);c[n]?(c[n].p(t,i),U(c[n],1)):(c[n]=jt(i),c[n].c(),U(c[n],1),c[n].m(r,null))}for(V(),n=a.length;n<c.length;n+=1)s(n);W()}},i:function(t){if(!o){for(var e=0;e<a.length;e+=1)U(c[e]);o=!0}},o:function(t){c=c.filter(Boolean);for(var e=0;e<c.length;e+=1)G(c[e]);o=!1},d:function(t){t&&x(r),function(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(c,t),i.div_binding(null)}}}function Et(t,e,n){function i(t){a("image-click",{image:s[t],index:t})}var r,o,a=P(),c=e.images,s=void 0===c?[]:c,u=e.targetRowHeight,l=void 0===u?220:u,f=e.padding,d=void 0===f?4:f,h=[],g=vt();R(function(){return n("width",o=r.getBoundingClientRect().width),ct(r,function(){Math.round(o)!==Math.round(r.getBoundingClientRect().width)&&n("width",o=r.getBoundingClientRect().width)}),function(){return st(r)}});var p=e.$$slots,m=void 0===p?{}:p,v=e.$$scope;return t.$set=function(t){"images"in t&&n("images",s=t.images),"targetRowHeight"in t&&n("targetRowHeight",l=t.targetRowHeight),"padding"in t&&n("padding",d=t.padding),"$$scope"in t&&n("$$scope",v=t.$$scope)},t.$$.update=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{width:1,images:1,targetRowHeight:1,padding:1};(t.width||t.images||t.targetRowHeight||t.padding)&&o&&n("scaledImages",h=rt({images:s,containerWidth:o,targetHeight:l,padding:d}))},{makeStyle:function(t){var e=t.scaledWidth,n=t.scaledHeight;return"width:".concat(e,"px; height:").concat(n,"px; margin-right:").concat(d,"px")},onClick:i,images:s,targetRowHeight:l,padding:d,element:r,scaledImages:h,emitter:g,click_handler:function(t){return i(t.image.index)},div_binding:function(t){I[t?"unshift":"push"](function(){n("element",r=t)})},$$slots:m,$$scope:v}}var kt=function(){function n(t){var e;return i(this,n),e=l(this,o(n).call(this)),document.getElementById("svelte-8wp3hq-style")||function(){var t=E("style");t.id="svelte-8wp3hq-style",t.textContent=".masonry-row.svelte-8wp3hq{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;justify-content:center;width:100%}.masonry-row.svelte-8wp3hq:last-child{margin-right:0 !important}.masonry-item.svelte-8wp3hq{position:relative}.masonry-item.svelte-8wp3hq:last-child{margin-right:0 !important;flex:1}",$(document.head,t)}(),Y(u(e),t,Et,xt,_,["images","targetRowHeight","padding"]),e}return t(n,Z),n}(),zt=[{src:"images/a-small.jpg",width:400,height:300},{src:"images/b-small.jpg",width:400,height:300},{src:"images/c-small.jpg",width:300,height:400},{src:"images/d-small.jpg",width:300,height:400},{src:"images/e-small.jpg",width:300,height:400},{src:"images/f-small.jpg",width:400,height:300},{src:"images/g-small.jpg",width:400,height:300},{src:"images/h-small.jpg",width:300,height:400},{src:"images/i-small.jpg",width:300,height:400},{src:"images/j-small.jpg",width:833,height:250},{src:"images/k-small.jpg",width:400,height:300},{src:"images/l-small.jpg",width:300,height:400},{src:"images/m-small.jpg",width:400,height:300},{src:"images/n-small.jpg",width:400,height:300},{src:"images/o-small.jpg",width:400,height:300},{src:"images/p-small.jpg",width:300,height:400},{src:"images/q-small.jpg",width:400,height:300},{src:"images/r-small.jpg",width:400,height:300},{src:"images/s-small.jpg",width:400,height:200},{src:"images/t-small.jpg",width:400,height:300},{src:"images/u-small.jpg",width:400,height:300},{src:"images/v-small.jpg",width:400,height:300},{src:"images/w-small.jpg",width:300,height:400},{src:"images/x-small.jpg",width:833,height:250},{src:"images/y-small.jpg",width:400,height:300},{src:"images/z-small.jpg",width:300,height:400},{src:"images/zz-small.jpg",width:400,height:300}];function Ot(t){var n,i=new kt({props:{images:zt}});return{c:function(){i.$$.fragment.c()},m:function(t,e){K(i,t,e),n=!0},p:d,i:function(t){n||(U(i.$$.fragment,t),n=!0)},o:function(t){G(i.$$.fragment,t),n=!1},d:function(t){Q(i,t)}}}return new(function(){function n(t){var e;return i(this,n),Y(u(e=l(this,o(n).call(this))),t,null,Ot,_,[]),e}return t(n,Z),n}())({target:document.querySelector("#app")})});
//# sourceMappingURL=image-masonry-svelte.js.map
