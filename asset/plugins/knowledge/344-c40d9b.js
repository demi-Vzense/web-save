"use strict";(self.webpackChunkTopWritePlugins_knowledge=self.webpackChunkTopWritePlugins_knowledge||[]).push([[344],{344:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var n=t(159);function o(e){let{props:r,Component:t}=e;const{canDrop:o}=r;return(0,n.jsx)(t,{...r,canDrop:e=>!e.getMetadata("reference")&&(!o||o(e))})}},2:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var c,f,i=o(e),s=1;s<arguments.length;s++){for(var l in c=Object(arguments[s]))t.call(c,l)&&(i[l]=c[l]);if(r){f=r(c);for(var p=0;p<f.length;p++)n.call(c,f[p])&&(i[f[p]]=c[f[p]])}}return i}},709:(e,r,t)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
t(2);var n=t(196),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,a={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)f.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:c.current}}r.jsx=s,r.jsxs=s},159:(e,r,t)=>{e.exports=t(709)}}]);
//# sourceMappingURL=344-c40d9b.js.map