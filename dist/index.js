!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.UserList=t():e.UserList=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t=window.webpackHotUpdateUserList;window.webpackHotUpdateUserList=function(e,n){!function(e,t){if(!w[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===m&&U()}(e,n),t&&t(e,n)};var n,r=!0,o="5d495492b9d2769b7961",i=1e4,s={},a=[],c=[];function u(e){var t=L[e];if(!t)return _;var r=function(r){return t.hot.active?(L[r]?L[r].parents.indexOf(e)<0&&L[r].parents.push(e):(a=[e],n=r),t.children.indexOf(r)<0&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),_(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return _[e]},set:function(t){_[e]=t}}};for(var i in _)Object.prototype.hasOwnProperty.call(_,i)&&"e"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===l&&f("prepare"),m++,_.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===l&&(b[e]||j(e),0===m&&0===y&&U())}},r}var d=[],l="idle";function f(e){l=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var p,h,v,y=0,m=0,b={},g={},w={};function x(e){return+e+""===e?+e:e}function O(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=_.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;g={},b={},w=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});h={};return j(0),"prepare"===l&&0===m&&0===y&&U(),t});var t}function j(e){w[e]?(g[e]=!0,y++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=_.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function U(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return E(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(x(n));e.resolve(t)}}function E(t){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var n,r,i,c,u;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((c=L[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var a=0;a<c.parents.length;a++){var u=c.parents[a],d=L[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([u]),moduleId:i,parentId:u};t.indexOf(u)>=0||(d.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),p(n[u],[i])):(delete n[u],t.push(u),r.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}t=t||{};var y={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var j;u=x(O);var U=!1,E=!1,D=!1,k="";switch((j=h[O]?d(u):{type:"disposed",moduleId:O}).chain&&(k="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(U=new Error("Aborted because of self decline: "+j.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(U=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(U=new Error("Aborted because "+u+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(j),E=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),D=!0;break;default:throw new Error("Unexception type "+j.type)}if(U)return f("abort"),Promise.reject(U);if(E)for(u in b[u]=h[u],p(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,u)&&(y[u]||(y[u]=[]),p(y[u],j.outdatedDependencies[u]));D&&(p(m,[j.moduleId]),b[u]=g)}var A,I=[];for(r=0;r<m.length;r++)u=m[r],L[u]&&L[u].hot._selfAccepted&&I.push({module:u,errorHandler:L[u].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,H,R=m.slice();R.length>0;)if(u=R.pop(),c=L[u]){var P={},C=c.hot._disposeHandlers;for(i=0;i<C.length;i++)(n=C[i])(P);for(s[u]=P,c.hot.active=!1,delete L[u],delete y[u],i=0;i<c.children.length;i++){var S=L[c.children[i]];S&&((A=S.parents.indexOf(u))>=0&&S.parents.splice(A,1))}}for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(c=L[u]))for(H=y[u],i=0;i<H.length;i++)M=H[i],(A=c.children.indexOf(M))>=0&&c.children.splice(A,1);for(u in f("apply"),o=v,b)Object.prototype.hasOwnProperty.call(b,u)&&(e[u]=b[u]);var T=null;for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(c=L[u])){H=y[u];var N=[];for(r=0;r<H.length;r++)if(M=H[r],n=c.hot._acceptedDependencies[M]){if(N.indexOf(n)>=0)continue;N.push(n)}for(r=0;r<N.length;r++){n=N[r];try{n(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:H[r],error:e}),t.ignoreErrored||T||(T=e)}}}for(r=0;r<I.length;r++){var B=I[r];u=B.module,a=[u];try{_(u)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,orginalError:e,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||T||(T=e)}}return T?(f("fail"),Promise.reject(T)):(f("idle"),new Promise(function(e){e(m)}))}var L={};function _(t){if(L[t])return L[t].exports;var r=L[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:E,status:function(e){if(!e)return l;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[e]};return n=void 0,t}(t),parents:(c=a,a=[],c),children:[]};return e[t].call(r.exports,r,r.exports,u(t)),r.l=!0,r.exports}return _.m=e,_.c=L,_.d=function(e,t,n){_.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="",_.h=function(){return o},u(1)(_.s=1)}([function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".users-list{width:400px;min-height:200px;border-radius:3px;background-color:#fff;padding:15px 30px;list-style-type:none}.users-list>li{line-height:30px}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(2);var r=n(6);t.default=r.UserList},function(e,t,n){var r=n(0);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n(4)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(0,function(){var t=n(0);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,u=0,d=[],l=n(5);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function y(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(t,e.attrs),h(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=u++;n=c||(c=y(t)),r=x.bind(null,n,s,!1),o=x.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&f(p(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserList=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(7);t.UserList=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elem=t,this.users=n,this.initialized=!1}return r(e,[{key:"init",value:function(){var e=document.createElement("ul");e.classList.add("users-list"),this.ul=this.elem.appendChild(e),this.renderList(),this.initialized=!0}},{key:"getUserFullName",value:function(e){return(0,o.concat)(e.firstname,e.lastname)}},{key:"getUsers",value:function(){var e=this;return this.users.map(function(t){return e.getUserFullName(t)})}},{key:"getUserLi",value:function(e){var t=document.createElement("li");return t.innerText=e,t}},{key:"appendLi",value:function(e){this.ul.appendChild(e)}},{key:"renderList",value:function(){var e=this,t=this.getUsers().map(function(t){return e.getUserLi(t)}),n=!0,r=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var a=i.value;this.appendLi(a)}}catch(e){r=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}}},{key:"addUser",value:function(e){var t=this.getUserFullName(e),n=this.getUserLi(t);this.appendLi(n)}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.concat=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join(" ")}}]).default});