import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";var p=e,u=t,h=n,j=i,f=s,c=r.isPrimitive,b=o.isPrimitive,g=d,v=m,x=a.factory,y=l;var w=function e(t){var n,i,s,r,o;if(arguments.length>0){if(!f(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(n=j(t,1),g(n,"normalized")&&!c(n.normalized))throw new TypeError("invalid option. `normalized` option must be a boolean primitive. Option: `"+n.normalized+"`.");if(g(n,"iter")){if(!b(n.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+n.iter+"`.")}else n.iter=v;s=x(n),!1!==n.copy&&(n.state=s.state)}else s=x(),n={iter:v,state:s.state};return n.normalized&&(s=s.normalized),o=0,p(i={},"next",d),p(i,"return",m),u(i,"seed",l),u(i,"seedLength",w),h(i,"state",E,O),u(i,"stateLength",z),u(i,"byteLength",L),y&&p(i,y,a),i;function d(){return o+=1,r||o>n.iter?{done:!0}:{value:s(),done:!1}}function m(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function a(){return e(n)}function l(){return s.seed}function w(){return s.seedLength}function z(){return s.stateLength}function L(){return s.byteLength}function E(){return s.state}function O(e){s.state=e}},z=w;export{z as default};
