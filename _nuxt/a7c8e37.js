(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(t,n,e){"use strict";var r={props:{content:{type:[Object,Array],default:{}}},head:function(){return{title:this.content.title,meta:[{hid:"description",name:"description",content:this.content.description?this.content.description:""}]}}},c=e(32),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("article",[0!=t.content.h1?n("h1",[t._v(t._s(t.content.title))]):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.content}})],1)}),[],!1,null,null,null);n.a=component.exports},207:function(t,n,e){"use strict";e.r(n);var r=e(2),c=(e(33),{components:{Content:e(192).a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.params,r=t.$content,n.next=3,r("livres",e.slug).fetch();case 3:return n.t0=n.sent,n.abrupt("return",{content:n.t0});case 5:case"end":return n.stop()}}),n)})))()}}),o=e(32),component=Object(o.a)(c,(function(){var t=this._self._c;return t("div",[t("Content",{attrs:{content:this.content}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);