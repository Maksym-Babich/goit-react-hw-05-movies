"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{1687:function(t,n,e){e.d(n,{HI:function(){return l},Hg:function(){return s},M1:function(){return v},tx:function(){return m},z1:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243),u="4c46ffde27c0a95d0cf12a8147e7b935",o="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n,e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(o,"/trending/movie/week?api_key=").concat(u),t.next=3,i.Z.get(n);case 3:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(n),t.next=3,i.Z.get(e);case 3:return r=t.sent,a=r.data.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"/movie/").concat(n,"?api_key=").concat(u),t.next=3,i.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(u),t.next=3,i.Z.get(e);case 3:return r=t.sent,a=r.data.cast,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(u),t.next=3,i.Z.get(e);case 3:return r=t.sent,a=r.data.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9736:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var r,a,c,i,u,o,s=e(9439),p=e(168),f=e(7402),h=f.Z.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),l=f.Z.li(a||(a=(0,p.Z)(["\n  flex-basis: calc((100% - 90px) / 6);\n  color: #fff;\n"]))),d=f.Z.img(c||(c=(0,p.Z)(["\n  width: 100%;\n  height: calc(100% - 100px);\n"]))),v=f.Z.div(i||(i=(0,p.Z)(["\n  height: 100px;\n"]))),x=f.Z.p(u||(u=(0,p.Z)([""]))),m=f.Z.p(o||(o=(0,p.Z)([""]))),Z=e(1687),w=e(2791),g=e(7689),y=e(184);function k(){var t=(0,w.useState)([]),n=(0,s.Z)(t,2),e=n[0],r=n[1],a=(0,g.UO)().movieId;return(0,w.useEffect)((function(){(0,Z.M1)(a).then((function(t){r(t)}))}),[a]),(0,y.jsx)(h,{children:null===e||void 0===e?void 0:e.map((function(t){return(0,y.jsxs)(l,{children:[(0,y.jsx)(d,{alt:t.name,src:t.profile_path?"https://image.tmdb.org/t/p/original".concat(t.profile_path):"https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"}),(0,y.jsxs)(v,{children:[(0,y.jsx)(x,{children:t.name}),(0,y.jsx)(m,{children:"Character: ".concat(t.character)})]})]},t.id)}))})}}}]);
//# sourceMappingURL=736.25b69f89.chunk.js.map