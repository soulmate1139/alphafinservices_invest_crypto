(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[31138,8890,62389,82841],{97754:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var u=typeof r;if("string"===u||"number"===u)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===u)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},7193:(e,t,r)=>{"use strict";r.d(t,{default:()=>f});var n=r(20883),o=r(3060),u=r(53822),i=r(54814),a=o.default?o.default.isConcatSpreadable:void 0;const s=function(e){return(0,i.default)(e)||(0,u.default)(e)||!!(a&&e&&e[a])};const f=function e(t,r,o,u,i){var a=-1,f=t.length;for(o||(o=s),i||(i=[]);++a<f;){var c=t[a];r>0&&o(c)?r>1?e(c,r-1,o,u,i):(0,n.default)(i,c):u||(i[i.length]=c)}return i}},96425:(e,t,r)=>{"use strict";r.d(t,{default:()=>A});var n=r(96335),o=r(1141);const u=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};const i=function(e){return this.__data__.has(e)};function a(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new o.default;++t<r;)this.add(e[t])}a.prototype.add=a.prototype.push=u,a.prototype.has=i;const s=a;const f=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1};const c=function(e,t){return e.has(t)};const l=function(e,t,r,n,o,u){var i=1&r,a=e.length,l=t.length;if(a!=l&&!(i&&l>a))return!1;var p=u.get(e);if(p&&u.get(t))return p==t;var d=-1,v=!0,h=2&r?new s:void 0;for(u.set(e,t),u.set(t,e);++d<a;){var y=e[d],b=t[d];if(n)var g=i?n(b,y,d,t,e,u):n(y,b,d,e,t,u);if(void 0!==g){if(g)continue;v=!1;break}if(h){if(!f(t,(function(e,t){if(!c(h,t)&&(y===e||o(y,e,r,n,u)))return h.push(t)}))){v=!1;break}}else if(y!==b&&!o(y,b,r,n,u)){v=!1;break}}return u.delete(e),u.delete(t),v};var p=r(3060),d=r(35246),v=r(72575);const h=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};const y=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r};var b=p.default?p.default.prototype:void 0,g=b?b.valueOf:void 0;const _=function(e,t,r,n,o,u,i){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!u(new d.default(e),new d.default(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,v.default)(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=h;case"[object Set]":var s=1&n;if(a||(a=y),e.size!=t.size&&!s)return!1;var f=i.get(e);if(f)return f==t;n|=2,i.set(e,t);var c=l(a(e),a(t),n,o,u,i);return i.delete(e),c;case"[object Symbol]":if(g)return g.call(e)==g.call(t)}return!1};var m=r(85747),j=Object.prototype.hasOwnProperty;const w=function(e,t,r,n,o,u){var i=1&r,a=(0,m.default)(e),s=a.length;if(s!=(0,
m.default)(t).length&&!i)return!1;for(var f=s;f--;){var c=a[f];if(!(i?c in t:j.call(t,c)))return!1}var l=u.get(e);if(l&&u.get(t))return l==t;var p=!0;u.set(e,t),u.set(t,e);for(var d=i;++f<s;){var v=e[c=a[f]],h=t[c];if(n)var y=i?n(h,v,c,t,e,u):n(v,h,c,e,t,u);if(!(void 0===y?v===h||o(v,h,r,n,u):y)){p=!1;break}d||(d="constructor"==c)}if(p&&!d){var b=e.constructor,g=t.constructor;b==g||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g||(p=!1)}return u.delete(e),u.delete(t),p};var O=r(17873),E=r(54814),L=r(25247),k=r(54744),R="[object Object]",S=Object.prototype.hasOwnProperty;const P=function(e,t,r,o,u,i){var a=(0,E.default)(e),s=(0,E.default)(t),f=a?"[object Array]":(0,O.default)(e),c=s?"[object Array]":(0,O.default)(t),p=(f="[object Arguments]"==f?R:f)==R,d=(c="[object Arguments]"==c?R:c)==R,v=f==c;if(v&&(0,L.default)(e)){if(!(0,L.default)(t))return!1;a=!0,p=!1}if(v&&!p)return i||(i=new n.default),a||(0,k.default)(e)?l(e,t,r,o,u,i):_(e,t,f,r,o,u,i);if(!(1&r)){var h=p&&S.call(e,"__wrapped__"),y=d&&S.call(t,"__wrapped__");if(h||y){var b=h?e.value():e,g=y?t.value():t;return i||(i=new n.default),u(b,g,r,o,i)}}return!!v&&(i||(i=new n.default),w(e,t,r,o,u,i))};var C=r(83527);const A=function e(t,r,n,o,u){return t===r||(null==t||null==r||!(0,C.default)(t)&&!(0,C.default)(r)?t!=t&&r!=r:P(t,r,n,o,e,u))}},16230:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(96425);const o=function(e,t){return(0,n.default)(e,t)}},3308:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r(28177),o=r(83527);const u=function(e){return"number"==typeof e||(0,o.default)(e)&&"[object Number]"==(0,n.default)(e)}},22767:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,u){for(var i,a,s=o(e),f=1;f<arguments.length;f++){for(var c in i=Object(arguments[f]))r.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var l=0;l<a.length;l++)n.call(i,a[l])&&(s[a[l]]=i[a[l]])}}return s}},51288:(e,t,r)=>{"use strict";var n=r(22767),o=60103,u=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,s=60112;t.Suspense=60113;var f=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),u=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),a=l("react.context"),s=l("react.forward_ref"),
t.Suspense=l("react.suspense"),f=l("react.memo"),c=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||v}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||v}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var _=g.prototype=new b;_.constructor=g,n(_,y.prototype),_.isPureReactComponent=!0;var m={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,u={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(u[n]=t[n]);var s=arguments.length-2;if(1===s)u.children=r;else if(1<s){for(var f=Array(s),c=0;c<s;c++)f[c]=arguments[c+2];u.children=f}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===u[n]&&(u[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:a,props:u,_owner:m.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var L=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case u:s=!0}}if(s)return i=i(s=e),e=""===n?"."+k(s,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(L,"$&/")+"/"),R(i,t,r,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(L,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var c=n+k(a=e[f],f);s+=R(a,t,r,c,i)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),f=0;!(a=e.next()).done;)s+=R(a=a.value,t,r,c=n+k(a,f++),i);else if("object"===a)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function S(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),
e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function A(){var e=C.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:S,forEach:function(e,t,r){S(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var u=n({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=m.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(c in t)j.call(t,c)&&!w.hasOwnProperty(c)&&(u[c]=void 0===t[c]&&void 0!==f?f[c]:t[c])}var c=arguments.length-2;if(1===c)u.children=r;else if(1<c){f=Array(c);for(var l=0;l<c;l++)f[l]=arguments[l+2];u.children=f}return{$$typeof:o,type:e.type,key:i,ref:a,props:u,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return A().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,r){return A().useReducer(e,t,r)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="17.0.2"},59496:(e,t,r)=>{"use strict";e.exports=r(51288)},85459:function(e,t,r){var n;!function(t){"use strict";function o(){}var u=o.prototype,i=t.EventEmitter;function a(e,t){for(var r=e.length;r--;)if(e[r].listener===t)return r;return-1}function s(e){return function(){return this[e].apply(this,arguments)}}u.getListeners=function(e){var t,r,n=this._getEvents();if(e instanceof RegExp)for(r in t={},n)n.hasOwnProperty(r)&&e.test(r)&&(t[r]=n[r]);else t=n[e]||(n[e]=[]);return t},u.flattenListeners=function(e){var t,r=[];for(t=0;t<e.length;t+=1)r.push(e[t].listener);return r},u.getListenersAsObject=function(e){var t,r=this.getListeners(e)
;return r instanceof Array&&((t={})[e]=r),t||r},u.addListener=function(e,t){if(!function e(t){return"function"==typeof t||t instanceof RegExp||!(!t||"object"!=typeof t)&&e(t.listener)}(t))throw new TypeError("listener must be a function");var r,n=this.getListenersAsObject(e),o="object"==typeof t;for(r in n)n.hasOwnProperty(r)&&-1===a(n[r],t)&&n[r].push(o?t:{listener:t,once:!1});return this},u.on=s("addListener"),u.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},u.once=s("addOnceListener"),u.defineEvent=function(e){return this.getListeners(e),this},u.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},u.removeListener=function(e,t){var r,n,o=this.getListenersAsObject(e);for(n in o)o.hasOwnProperty(n)&&-1!==(r=a(o[n],t))&&o[n].splice(r,1);return this},u.off=s("removeListener"),u.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},u.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},u.manipulateListeners=function(e,t,r){var n,o,u=e?this.removeListener:this.addListener,i=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(n=r.length;n--;)u.call(this,t,r[n]);else for(n in t)t.hasOwnProperty(n)&&(o=t[n])&&("function"==typeof o?u.call(this,n,o):i.call(this,n,o));return this},u.removeEvent=function(e){var t,r=typeof e,n=this._getEvents();if("string"===r)delete n[e];else if(e instanceof RegExp)for(t in n)n.hasOwnProperty(t)&&e.test(t)&&delete n[t];else delete this._events;return this},u.removeAllListeners=s("removeEvent"),u.emitEvent=function(e,t){var r,n,o,u,i=this.getListenersAsObject(e);for(u in i)if(i.hasOwnProperty(u))for(r=i[u].slice(0),o=0;o<r.length;o++)!0===(n=r[o]).once&&this.removeListener(e,n.listener),n.listener.apply(this,t||[])===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},u.trigger=s("emitEvent"),u.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},u.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},u._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},u._getEvents=function(){return this._events||(this._events={})},o.noConflict=function(){return t.EventEmitter=i,o},void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}(this||{})}}]);