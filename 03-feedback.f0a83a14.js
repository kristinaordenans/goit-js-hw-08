!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return v.Date.now()};function y(e,t,n){var r,i,u,a,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(h,t),d?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=u}function h(){var e=b();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,s&&r?y(e):(r=i=void 0,a)}function T(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(v="maxWait"in n)?m(j(n.maxWait)||0,t):u,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?a:w(b())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),O="feedback-form-state",h={},w=document.querySelector(".feedback-form input"),T=document.querySelector(".feedback-form textarea");S.addEventListener("input",e(t)((function(e){e.preventDefault(),h[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(h))}),500));var x=localStorage.getItem(O),N=JSON.parse(x);N&&(w.value=N[w.name],T.value=N[T.name]),S.addEventListener("submit",(function(e){if(e.preventDefault(),""!==w.value&&""!==T.value)return console.log(h),localStorage.removeItem(O),e.target.reset(),void(h={});alert("All fields")}))}();
//# sourceMappingURL=03-feedback.f0a83a14.js.map
