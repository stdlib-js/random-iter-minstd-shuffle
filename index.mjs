// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function h(f){var p,c,u,g,b;if(arguments.length>0){if(!r(f))throw new TypeError(j("0q52V,FD",f));if(p=n({},f),d(p,"normalized")&&!i(p.normalized))throw new TypeError(j("0q52o,GE","normalized",p.normalized));if(d(p,"iter")){if(!o(p.iter))throw new TypeError(j("0q52t,G9","iter",p.iter))}else p.iter=m;u=l(p),!1!==p.copy&&(p.state=u.state)}else u=l(),p={iter:m,state:u.state};return p.normalized&&(u=u.normalized),b=0,e(c={},"next",v),e(c,"return",x),t(c,"seed",w),t(c,"seedLength",z),s(c,"state",q,T),t(c,"stateLength",L),t(c,"byteLength",E),a&&e(c,a,y),c;function v(){return b+=1,g||b>p.iter?{done:!0}:{value:u(),done:!1}}function x(e){return g=!0,arguments.length?{value:e,done:!0}:{done:!0}}function y(){return h(p)}function w(){return u.seed}function z(){return u.seedLength}function L(){return u.stateLength}function E(){return u.byteLength}function q(){return u.state}function T(e){u.state=e}}export{h as default};
//# sourceMappingURL=index.mjs.map
