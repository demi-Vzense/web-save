"use strict";(self.webpackChunk_topwrite_reader=self.webpackChunk_topwrite_reader||[]).push([[277],{5277:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var n=o(264),r=o(7192),l=o(7363);const a="undefined"==typeof window?null:window,i=()=>void 0!==a.scrollY?a.scrollY:void 0===a.pageYOffset?0:a.pageYOffset,c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;const[t,o]=(0,l.useState)((()=>i())),n=(0,r.fB)((()=>{o(i())}),e);return(0,r.zX)(a,"scroll",n),t};var s;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p.apply(this,arguments)}var d=function(e){return l.createElement("svg",p({className:"gotop_svg__icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200},e),s||(s=l.createElement("path",{d:"M484.539 297.401 78.509 703.407c-11.785 11.813-11.785 30.912 0 42.724 11.816 11.815 30.94 11.815 42.757 0L507.477 359.95l379.83 379.806c11.455 11.483 30.04 11.483 41.493 0 11.51-11.454 11.51-30.039 0-41.516L534.373 303.777c-1.544-1.54-3.418-2.297-5.2-3.413-.693-.935-1.056-2.086-1.934-2.963-11.784-11.784-30.912-11.784-42.695 0h-.005zm0 0"})))};var u=o(8363),x=o(486);const f=function(e){let{tooltip:t,children:o,onClick:r}=e;const l=(0,n.jsx)("a",{onClick:r,children:o});if(t){const e={placement:"left",getTooltipContainer:e=>e.parentElement||document.body};let o;return o="object"==typeof t&&t.hasOwnProperty("overlay")?t:{overlay:t},(0,n.jsx)(u.Z,{...e,...o,children:l})}return l};function h(e){let{className:t}=e;return"mobile"===(0,x.Z)()?null:(0,n.jsxs)(g,{className:t,children:[(0,n.jsx)(m,{}),(0,n.jsx)(r.IA,{role:"page:menu:item",component:f})]})}const g=r.zo.div`

  position: fixed;
  right: 24px;
  bottom: 48px;
  z-index: 400;
  display: flex;
  flex-direction: column-reverse;

  a {
    width: 42px;
    height: 42px;
    background: #FFFFFF;
    box-shadow: 0 1px 4px -2px rgb(0 0 0 / 13%), 0 2px 8px rgb(0 0 0 / 8%), 0 8px 16px 4px rgb(0 0 0 / 4%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    margin-top: 16px;
    color: #585a5a;

    svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    html[data-theme=dark] & {
      background-color: #1a1a1a;
      color: #e8e8e8;
      border: 1px solid rgba(235, 235, 235, 0.15);
      box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.24);
    }
  }

`,m=function(){const e=(0,r.cw)(),t=(0,l.useCallback)((()=>{const e=document.documentElement;let o=e.scrollTop-(e.clientTop||0);o>0&&(window.scrollTo(0,o-30),setTimeout(t,2))}),[]);return c()>500?(0,n.jsx)(f,{tooltip:e.formatMessage({id:"fTNnxP",defaultMessage:[{type:0,value:"回到顶部"}]}),onClick:t,children:(0,n.jsx)(d,{})}):null}}}]);
//# sourceMappingURL=277-07a022.js.map