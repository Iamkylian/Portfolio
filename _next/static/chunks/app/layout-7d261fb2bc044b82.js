(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{251:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(469),o=r.n(n),a=r(1524),i=r.n(a)()(o());i.push([e.id,`/* target file for webpack loader */
`,""]);let s=i},1904:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(469),o=r.n(n),a=r(1524),i=r.n(a)()(o());i.push([e.id,`/* target file for webpack loader */
`,""]);let s=i},1364:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(469),o=r.n(n),a=r(1524),i=r.n(a)()(o());i.push([e.id,`/* target file for webpack loader */
`,""]);let s=i},7424:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(469),o=r.n(n),a=r(1524),i=r.n(a)()(o());i.push([e.id,`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: novaMono;
  user-select: none;
}

html {
  scroll-behavior: smooth;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* SCROLLBAR */

/* For WebKit (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}

::-webkit-scrollbar-button {
  width: 10px;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background: #bebcbc;
  border: none;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}

::-webkit-scrollbar-thumb:active {
  background: #cfcfcf;
}

::-webkit-scrollbar-track {
  background: #666363;
}

/* For Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #bebcbc #f1f1f1;
}



/* NAVBAR - Header.tsx */

.nav-link {
  position: relative;
  text-decoration: none;
  color: #000; 
  font-size: 18px; 
  padding: 5px 0;
  font-weight: 600;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background-color: black; /* La couleur du trait */
  transform: scaleX(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: top;
}


/* INTRO - Intro.tsx */

.bg-section {
  background-color: #212529;
}


/* CONTACT - Contact.tsx */


.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #333;
  transition: all 0.3s ease;
  position: relative;
}

.icon-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.icon-link:hover {
  color: #0077b5; /* Couleur au survol, vous pouvez la changer */
}

.icon-link:hover::before {
  border-color: #0077b5; /* M\xeame couleur que celle du survol */
  transform: scale(1.1);
}`,""]);let s=i},8950:(e,t,r)=>{Promise.resolve().then(r.bind(r,3805))},1524:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},469:e=>{"use strict";e.exports=function(e){return e[1]}},3805:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var n=r(5155),o=r(2115),a=r(7739),i=r(16),s=r(951),l=r(3370),c=r.n(l),u=r(8633),d=r.n(u),f=r(4141),p=r.n(f),b=r(1234),v=r.n(b),m=r(8182),h=r.n(m),g=r(7205),y=r.n(g),w=r(7424),x={};x.styleTagTransform=y(),x.setAttributes=v(),x.insert=p().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=h(),c()(w.A,x),w.A&&w.A.locals&&w.A.locals;var k=r(1536);function O(e){let{children:t}=e,[r,l]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=()=>{l(window.scrollY>100)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,n.jsx)("html",{lang:"en",children:(0,n.jsxs)("body",{className:"".concat(a.default," ").concat(i.default," ").concat(s.default," antialiased"),children:[t,r&&(0,n.jsx)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"fixed bottom-5 right-5 bg-gray-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out",title:"Haut de page",children:(0,n.jsx)(k.GiA,{className:"text-xl"})})]})})}},16:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(3370),o=r.n(n),a=r(8633),i=r.n(a),s=r(4141),l=r.n(s),c=r(1234),u=r.n(c),d=r(8182),f=r.n(d),p=r(7205),b=r.n(p),v=r(251),m={};m.styleTagTransform=b(),m.setAttributes=u(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=f(),o()(v.A,m);let h=v.A&&v.A.locals?v.A.locals:void 0},7739:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(3370),o=r.n(n),a=r(8633),i=r.n(a),s=r(4141),l=r.n(s),c=r(1234),u=r.n(c),d=r(8182),f=r.n(d),p=r(7205),b=r.n(p),v=r(1904),m={};m.styleTagTransform=b(),m.setAttributes=u(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=f(),o()(v.A,m);let h=v.A&&v.A.locals?v.A.locals:void 0},951:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(3370),o=r.n(n),a=r(8633),i=r.n(a),s=r(4141),l=r.n(s),c=r(1234),u=r.n(c),d=r(8182),f=r.n(d),p=r(7205),b=r.n(p),v=r(1364),m={};m.styleTagTransform=b(),m.setAttributes=u(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=f(),o()(v.A,m);let h=v.A&&v.A.locals?v.A.locals:void 0},3370:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},a=[],i=0;i<e.length;i++){var s=e[i],l=n.base?s[0]+n.base:s[0],c=o[l]||0,u="".concat(l," ").concat(c);o[l]=c+1;var d=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var p=function(e,t){var r=t.domAPI(t);return r.update(e),function(t){t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&r.update(e=t):r.remove()}}(f,n);n.byIndex=i,t.splice(i,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var l=n(e,o),c=0;c<a.length;c++){var u=r(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},4141:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},8182:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},1234:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},8633:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){var n,o,a;n="",r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {")),(o=void 0!==r.layer)&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}"),(a=r.sourceMap)&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)},remove:function(){var e;null!==(e=t).parentNode&&e.parentNode.removeChild(e)}}}},7205:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:a,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(o)}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,441,517,358],()=>t(8950)),_N_E=e.O()}]);