function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var r,i,o,f,u,a,c=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(h,t),l?g(e):f}function T(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=o}function h(){var e=p();if(T(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-a);return d?v(n,o-(e-c)):n}(e))}function w(e){return u=void 0,m&&r?g(e):(r=i=void 0,f)}function x(){var e=p(),n=T(e);if(r=arguments,i=this,a=e,n){if(void 0===u)return j(a);if(d)return u=setTimeout(h,t),g(a)}return void 0===u&&(u=setTimeout(h,t)),f}return t=y(t)||0,b(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(y(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=i=u=void 0},x.flush=function(){return void 0===u?f:w(p())},x}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};const g=document.querySelector(".feedback-form"),j={},T=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea");g.addEventListener("input",e(t)((e=>{j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),g.addEventListener("submit",(e=>{if(e.preventDefault(),""!==T.value&&""!==h.value)return console.log(j),localStorage.removeItem("feedback-form-state"),void e.currentTarget.reset();alert("All fields")}));
//# sourceMappingURL=03-feedback.763576d9.js.map
