"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[417],{111:function(n,e,t){t.d(e,{Dx:function(){return f},LY:function(){return l},Xe:function(){return x},aV:function(){return p}});var r,a,o,u,i=t(168),c=t(87),s=t(444),p=s.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 0;\n  padding: 0 40px;\n  list-style: none;\n"]))),l=(0,s.ZP)(c.OL)(a||(a=(0,i.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  text-decoration: none;\n\n  :hover {\n    color: lightcoral;\n  }\n"]))),f=s.ZP.h2(o||(o=(0,i.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  padding: 0px 40px 10px 40px;\n  margin: 0;\n  color: black;\n"]))),x=s.ZP.h3(u||(u=(0,i.Z)(["\nfont-size: 18px;\n  font-weight: 500;\nmargin: 10px 0;\n"])))},417:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,o,u=t(861),i=t(439),c=t(757),s=t.n(c),p=t(791),l=t(87),f=t(214),x=t(168),d=t(444),h=d.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 10px;\n"]))),m=d.ZP.input(a||(a=(0,x.Z)(["\n  width: 350px;\n  padding: 5px;\n  background-color: lightyellow;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n  border-radius: 4px;\n  border: none;\n\n  :hover,\n  :focus {\n    outline: 1px solid lightgrey;\n  }\n"]))),v=d.ZP.button(o||(o=(0,x.Z)(["\n  color: grey;\n  background-color: lightyellow;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n  border-radius: 4px;\n  border: none;\n\n  :hover {\n    color: lightcoral;\n    outline: 1px solid lightgrey;\n  }\n"]))),g=t(689),y=t(111),b=t(184),Z=function(n){var e=n.movies,t=(0,g.TH)();return(0,b.jsxs)(y.aV,{children:[(0,b.jsx)(y.Xe,{children:"We found movies:"}),e.map((function(n){var e=n.id,r=n.title;return(0,b.jsx)(y.LY,{to:"/movies/".concat(e),state:{from:t},children:r},e)}))]})},w=function(){var n,e=(0,p.useState)([]),t=(0,i.Z)(e,2),r=t[0],a=t[1],o=(0,l.lr)(),c=(0,i.Z)(o,2),x=c[0],d=c[1],g=null!==(n=x.get("name"))&&void 0!==n?n:"";console.log(g),(0,p.useEffect)((function(){function n(){return(n=(0,u.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.bI)(g);case 2:e=n.sent,a(e),console.log(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}null!==g&&""!==g&&function(){n.apply(this,arguments)}()}),[g]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(h,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;d({name:e.elements.name.value}),e.reset()},children:[(0,b.jsx)(m,{type:"text",name:"name",placeholder:"Search movies"}),(0,b.jsx)(v,{type:"submit",children:"Search"})]}),r.length>0?(0,b.jsx)(Z,{movies:r}):null]})}},214:function(n,e,t){t.d(e,{bI:function(){return p},kK:function(){return d},l2:function(){return f},sv:function(){return m},wr:function(){return c}});var r=t(861),a=t(757),o=t.n(a),u=t(263),i="9b0207e3b87a8a2af201131b2a01e4c9";function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("trending/movie/day",{params:{api_key:i}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("search/movie",{params:{api_key:i,query:"".concat(e),page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/movie/".concat(e),{params:{api_key:i}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/movie/".concat(e,"/credits"),{params:{api_key:i}});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/movie/".concat(e,"/reviews"),{params:{api_key:i}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=417.3bd0ba3d.chunk.js.map