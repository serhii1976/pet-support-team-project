/*! For license information please see 70.6b64a4db.chunk.js.LICENSE.txt */
(self.webpackChunkpet_support_team_project_8=self.webpackChunkpet_support_team_project_8||[]).push([[70],{1725:function(t){"use strict";var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(t,r){for(var a,i,s=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))n.call(a,u)&&(s[u]=a[u]);if(e){i=e(a);for(var l=0;l<i.length;l++)o.call(a,i[l])&&(s[i[l]]=a[i[l]])}}return s}},888:function(t,e,n){"use strict";var o=n(9047);function r(){}function a(){}a.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,a,i){if(i!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},2007:function(t,e,n){t.exports=n(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5462:function(){},4925:function(t,e,n){"use strict";function o(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,{Z:function(){return o}})},9085:function(t,e,n){"use strict";n.d(e,{Ix:function(){return P},Am:function(){return q}});var o=n(4942),r=n(9439),a=n(1413),i=n(4925),s=n(3433),c=n(2791);function u(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=u(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var l=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=u(t))&&(o&&(o+=" "),o+=e);return o},f=["theme","type"],d=["delay","staleId"],p=function(t){return"number"==typeof t&&!isNaN(t)},m=function(t){return"string"==typeof t},v=function(t){return"function"==typeof t},y=function(t){return m(t)||v(t)?t:null},g=function(t){return(0,c.isValidElement)(t)||m(t)||v(t)||p(t)};function h(t){var e=t.enter,n=t.exit,o=t.appendPosition,r=void 0!==o&&o,a=t.collapse,i=void 0===a||a,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,a=t.position,u=t.preventExitTransition,f=t.done,d=t.nodeRef,p=t.isIn,m=r?"".concat(e,"--").concat(a):e,v=r?"".concat(n,"--").concat(a):n,y=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var t,e=d.current,n=m.split(" "),o=function t(o){var r;o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===y.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,s.Z)(n)))};(t=e.classList).add.apply(t,(0,s.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var t=d.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,f,l):f()};p||(u?e():(y.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),c.createElement(c.Fragment,null,o)}}function T(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var E={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(r)}))}},b=function(t){var e=t.theme,n=t.type,o=(0,i.Z)(t,f);return c.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},O={info:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function _(t){var e=(0,c.useReducer)((function(t){return t+1}),0),n=(0,r.Z)(e,2)[1],o=(0,c.useState)([]),u=(0,r.Z)(o,2),l=u[0],f=u[1],h=(0,c.useRef)(null),b=(0,c.useRef)(new Map).current,_=function(t){return-1!==l.indexOf(t)},C=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:_,getToast:function(t){return b.get(t)}}).current;function I(t){var e=t.containerId;!C.props.limit||e&&C.containerId!==e||(C.count-=C.queue.length,C.queue=[])}function Z(t){f((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function L(){var t=C.queue.shift();R(t.toastContent,t.toastProps,t.staleId)}function w(t,e){var o=e.delay,r=e.staleId,s=(0,i.Z)(e,d);if(g(t)&&!function(t){return!h.current||C.props.enableMultiContainer&&t.containerId!==C.props.containerId||b.has(t.toastId)&&null==t.updateId}(s)){var u=s.toastId,l=s.updateId,f=s.data,_=C.props,I=function(){return Z(u)},w=null==l;w&&C.count++;var N,k,P=(0,a.Z)((0,a.Z)((0,a.Z)({},_),{},{style:_.toastStyle,key:C.toastKey++},s),{},{toastId:u,updateId:l,data:f,closeToast:I,isIn:!1,className:y(s.className||_.toastClassName),bodyClassName:y(s.bodyClassName||_.bodyClassName),progressClassName:y(s.progressClassName||_.progressClassName),autoClose:!s.isLoading&&(N=s.autoClose,k=_.autoClose,!1===N||p(N)&&N>0?N:k),deleteToast:function(){var t=T(b.get(u),"removed");b.delete(u),E.emit(4,t);var e=C.queue.length;if(C.count=null==u?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),e>0){var o=null==u?C.props.limit:1;if(1===e||1===o)C.displayedToast++,L();else{var r=o>e?e:o;C.displayedToast=r;for(var a=0;a<r;a++)L()}}else n()}});P.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,r=t.icon,a=null,i={theme:e,type:n};return!1===r||(v(r)?a=r(i):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,i):m(r)||p(r)?a=r:o?a=O.spinner():function(t){return t in O}(n)&&(a=O[n](i))),a}(P),v(s.onOpen)&&(P.onOpen=s.onOpen),v(s.onClose)&&(P.onClose=s.onClose),P.closeButton=_.closeButton,!1===s.closeButton||g(s.closeButton)?P.closeButton=s.closeButton:!0===s.closeButton&&(P.closeButton=!g(_.closeButton)||_.closeButton);var x=t;(0,c.isValidElement)(t)&&!m(t.type)?x=(0,c.cloneElement)(t,{closeToast:I,toastProps:P,data:f}):v(t)&&(x=t({closeToast:I,toastProps:P,data:f})),_.limit&&_.limit>0&&C.count>_.limit&&w?C.queue.push({toastContent:x,toastProps:P,staleId:r}):p(o)?setTimeout((function(){R(x,P,r)}),o):R(x,P,r)}}function R(t,e,n){var o=e.toastId;n&&b.delete(n);var r={content:t,props:e};b.set(o,r),f((function(t){return[].concat((0,s.Z)(t),[o]).filter((function(t){return t!==n}))})),E.emit(4,T(r,null==r.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return C.containerId=t.containerId,E.cancelEmit(3).on(0,w).on(1,(function(t){return h.current&&Z(t)})).on(5,I).emit(2,C),function(){b.clear(),E.emit(3,C)}}),[]),(0,c.useEffect)((function(){C.props=t,C.isToastActive=_,C.displayedToast=l.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(b.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:h,isToastActive:_}}function C(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function Z(t){var e=(0,c.useState)(!1),n=(0,r.Z)(e,2),o=n[0],a=n[1],i=(0,c.useState)(!1),s=(0,r.Z)(i,2),u=s[0],l=s[1],f=(0,c.useRef)(null),d=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(t),m=t.autoClose,y=t.pauseOnHover,g=t.closeToast,h=t.onClick,T=t.closeOnClick;function E(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",L),document.addEventListener("touchmove",Z),document.addEventListener("touchend",L);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=C(e.nativeEvent),d.y=I(e.nativeEvent),"x"===t.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(e){if(d.boundingRect){var n=d.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=o&&d.y<=r?_():O()}}function O(){a(!0)}function _(){a(!1)}function Z(e){var n=f.current;d.canDrag&&n&&(d.didMove=!0,o&&_(),d.x=C(e),d.y=I(e),d.delta="x"===t.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function L(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",L);var e=f.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,c.useEffect)((function(){p.current=t})),(0,c.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),v(t.onOpen)&&t.onOpen((0,c.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;v(t.onClose)&&t.onClose((0,c.isValidElement)(t.children)&&t.children.props)}}),[]),(0,c.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",O),window.addEventListener("blur",_)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",_))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&y&&(w.onMouseEnter=_,w.onMouseLeave=O),T&&(w.onClick=function(t){h&&h(t),d.canCloseOnClick&&g()}),{playToast:O,pauseToast:_,isRunning:o,preventExitTransition:u,toastRef:f,eventHandlers:w}}function L(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(t){var e=t.delay,n=t.isRunning,r=t.closeToast,i=t.type,s=void 0===i?"default":i,u=t.hide,f=t.className,d=t.style,p=t.controlledProgress,m=t.progress,y=t.rtl,g=t.isIn,h=t.theme,T=u||p&&0===m,E=(0,a.Z)((0,a.Z)({},d),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:T?0:1});p&&(E.transform="scaleX(".concat(m,")"));var b=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":y}),O=v(f)?f({rtl:y,type:s,defaultClassName:b}):l(b,f);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:O,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){g&&r()}))}var R=function(t){var e=Z(t),n=e.isRunning,o=e.preventExitTransition,r=e.toastRef,i=e.eventHandlers,s=t.closeButton,u=t.children,f=t.autoClose,d=t.onClick,p=t.type,m=t.hideProgressBar,y=t.closeToast,g=t.transition,h=t.position,T=t.className,E=t.style,b=t.bodyClassName,O=t.bodyStyle,_=t.progressClassName,C=t.progressStyle,I=t.updateId,R=t.role,N=t.progress,k=t.rtl,P=t.toastId,x=t.deleteToast,M=t.isIn,j=t.isLoading,A=t.iconOut,B=t.closeOnClick,D=t.theme,S=l("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":B}),z=v(T)?T({rtl:k,position:h,type:p,defaultClassName:S}):l(S,T),F=!!N||!f,q={closeToast:y,type:p,theme:D},H=null;return!1===s||(H=v(s)?s(q):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,q):L(q)),c.createElement(g,{isIn:M,done:x,position:h,preventExitTransition:o,nodeRef:r},c.createElement("div",(0,a.Z)((0,a.Z)({id:P,onClick:d,className:z},i),{},{style:E,ref:r}),c.createElement("div",(0,a.Z)((0,a.Z)({},M&&{role:R}),{},{className:v(b)?b({type:p}):l("Toastify__toast-body",b),style:O}),null!=A&&c.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},A),c.createElement("div",null,u)),H,c.createElement(w,(0,a.Z)((0,a.Z)({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:k,theme:D,delay:f,isRunning:n,isIn:M,closeToast:y,hide:m,type:p,style:C,className:_,controlledProgress:F,progress:N||0}))))},N=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},k=h(N("bounce",!0)),P=(h(N("slide",!0)),h(N("zoom")),h(N("flip")),(0,c.forwardRef)((function(t,e){var n=_(t),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,s=t.className,u=t.style,f=t.rtl,d=t.containerId;function p(t){var e=l("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":f});return v(s)?s({position:t,rtl:f,defaultClassName:e}):l(e,y(s))}return(0,c.useEffect)((function(){e&&(e.current=r.current)}),[]),c.createElement("div",{ref:r,className:"Toastify",id:d},o((function(t,e){var n=e.length?(0,a.Z)({},u):(0,a.Z)((0,a.Z)({},u),{},{pointerEvents:"none"});return c.createElement("div",{className:p(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,r=t.props;return c.createElement(R,(0,a.Z)((0,a.Z)({},r),{},{isIn:i(r.toastId),style:(0,a.Z)((0,a.Z)({},r.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(r.key)}),o)})))})))})));P.displayName="ToastContainer",P.defaultProps={position:"top-right",transition:k,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var x,M=new Map,j=[],A=1;function B(){return""+A++}function D(t){return t&&(m(t.toastId)||p(t.toastId))?t.toastId:B()}function S(t,e){return M.size>0?E.emit(0,t,e):j.push({content:t,options:e}),e.toastId}function z(t,e){return(0,a.Z)((0,a.Z)({},e),{},{type:e&&e.type||t,toastId:D(e)})}function F(t){return function(e,n){return S(e,z(t,n))}}function q(t,e){return S(t,z("default",e))}q.loading=function(t,e){return S(t,z("default",(0,a.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},q.promise=function(t,e,n){var o,r=e.pending,i=e.error,s=e.success;r&&(o=m(r)?q.loading(r,n):q.loading(r.render,(0,a.Z)((0,a.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(t,e,r){if(null!=e){var i=(0,a.Z)((0,a.Z)((0,a.Z)({type:t},c),n),{},{data:r}),s=m(e)?{render:e}:e;return o?q.update(o,(0,a.Z)((0,a.Z)({},i),s)):q(s.render,(0,a.Z)((0,a.Z)({},i),s)),r}q.dismiss(o)},l=v(t)?t():t;return l.then((function(t){return u("success",s,t)})).catch((function(t){return u("error",i,t)})),l},q.success=F("success"),q.info=F("info"),q.error=F("error"),q.warning=F("warning"),q.warn=q.warning,q.dark=function(t,e){return S(t,z("default",(0,a.Z)({theme:"dark"},e)))},q.dismiss=function(t){M.size>0?E.emit(1,t):j=j.filter((function(e){return null!=t&&e.options.toastId!==t}))},q.clearWaitingQueue=function(t){return void 0===t&&(t={}),E.emit(5,t)},q.isActive=function(t){var e=!1;return M.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},q.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=M.get(n||x);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,r=n.content,i=(0,a.Z)((0,a.Z)((0,a.Z)({},o),e),{},{toastId:e.toastId||t,updateId:B()});i.toastId!==t&&(i.staleId=t);var s=i.render||r;delete i.render,S(s,i)}}),0)},q.done=function(t){q.update(t,{progress:1})},q.onChange=function(t){return E.on(4,t),function(){E.off(4,t)}},q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E.on(2,(function(t){x=t.containerId||t,M.set(x,t),j.forEach((function(t){E.emit(0,t.content,t.options)})),j=[]})).on(3,(function(t){M.delete(t.containerId||t),0===M.size&&E.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=70.6b64a4db.chunk.js.map