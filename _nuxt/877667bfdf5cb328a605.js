(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(t,n,e){"use strict";var r={props:{content:{type:[Object,Array],default:{}}},head:function(){return{title:this.content.title,meta:[{hid:"description",name:"description",content:this.content.description?this.content.description:""}]}}},c=e(19),component=Object(c.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("article",[0!=this.content.h1?n("h1",[this._v(this._s(this.content.title))]):this._e(),this._v(" "),n("nuxt-content",{attrs:{document:this.content}})],1)}),[],!1,null,null,null);n.a=component.exports},174:function(t,n,e){"use strict";e.r(n);e(20);var r=e(3),c={components:{Content:e(156).a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.params,r=t.$content,n.next=3,r("livres",e.slug).fetch();case 3:return n.t0=n.sent,n.abrupt("return",{content:n.t0});case 5:case"end":return n.stop()}}),n)})))()}},o=e(19),component=Object(o.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("Content",{attrs:{content:this.content}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);