(self.webpackChunkTopWritePlugins_knowledge=self.webpackChunkTopWritePlugins_knowledge||[]).push([[933],{933:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n,o,l=r(669),a=r(159),i=r(99),c=r(870);function s(e){let{props:t,Component:r}=e,{children:n,part:o}=t;return o.getMetadata("reference")&&(n=(0,a.jsxs)(f,{children:[(0,a.jsx)(u,{children:n}),(0,a.jsx)(c.w,{})]})),(0,a.jsx)(r,{...t,children:n})}const u=i.styled.span(n||(n=(0,l.Z)(["\n  overflow: hidden;\n  word-break: keep-all;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),f=i.styled.div(o||(o=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n\n  svg {\n    flex-shrink: 0;\n    margin-left: 5px;\n  }\n"])))},2:e=>{"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,l){for(var a,i,c=o(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))r.call(a,u)&&(c[u]=a[u]);if(t){i=t(a);for(var f=0;f<i.length;f++)n.call(a,i[f])&&(c[i[f]]=a[i[f]])}}return c}},709:(e,t,r)=>{"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
r(2);var n=r(196),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),l("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,l={},s=null,u=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:u,props:l,_owner:a.current}}t.jsx=s,t.jsxs=s},159:(e,t,r)=>{"use strict";e.exports=r(709)},352:(e,t,r)=>{"use strict";r.d(t,{w_:()=>u});var n=r(196),o=r.n(n),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o().createContext&&o().createContext(l),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function s(e){return e&&e.map((function(e,t){return o().createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function u(e){return function(t){return o().createElement(f,i({attr:i({},e.attr)},t),s(e.child))}}function f(e){var t=function(t){var r,n=e.attr,l=e.size,a=e.title,s=c(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o().createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&o().createElement("title",null,a),e.children)};return void 0!==a?o().createElement(a.Consumer,null,(function(e){return t(e)})):t(l)}},870:(e,t,r)=>{var n=r(352).w_;e.exports.w=function(e){return n({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.5 1H6v1H2v12h12v-4h1v4.5l-.5.5h-13l-.5-.5v-13l.5-.5z"}},{tag:"path",attr:{d:"M15 1.5V8h-1V2.707L7.243 9.465l-.707-.708L13.293 2H8V1h6.5l.5.5z"}}]})(e)}},669:(e,t,r)=>{"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=933-890a45.js.map