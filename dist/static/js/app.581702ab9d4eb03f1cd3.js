webpackJsonp([10],{"+skl":function(t,e){},0:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("jZHc"),o=n("/ocq"),u=function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){return t(n("yTy4"))}.bind(null,n)).catch(n.oe)};a.default.use(o.a);var s=new o.a({routes:[{path:"/tools",component:u},{path:"/",component:u},{path:"/network",component:function(t){return n.e(6).then(function(){return t(n("zek5"))}.bind(null,n)).catch(n.oe)}},{path:"/zhaocha",component:function(t){return n.e(4).then(function(){return t(n("73xD"))}.bind(null,n)).catch(n.oe)}},{path:"/wjc",component:function(t){return n.e(3).then(function(){return t(n("r/gX"))}.bind(null,n)).catch(n.oe)}},{path:"/colleague",component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){return t(n("1N+X"))}.bind(null,n)).catch(n.oe)}},{path:"/customer",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){return t(n("6s6Q"))}.bind(null,n)).catch(n.oe)}},{path:"/email",component:function(t){return n.e(5).then(function(){return t(n("i2w+"))}.bind(null,n)).catch(n.oe)}},{path:"/map",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){return t(n("u4DZ"))}.bind(null,n)).catch(n.oe)}}]});s.beforeEach(function(t,e,n){console.log("路由到："+t.path),n()}),s.afterEach(function(t){});var i={router:s,data:function(){return{}},props:["userdata"]},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("Sider",{style:{background:"#fff"},attrs:{"hide-trigger":""}},[n("Menu",{attrs:{"active-name":"1-2",theme:"light",width:"auto","open-names":["1"]}},[n("Submenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n\t\t\t\t\t工具\n\t\t\t\t")],1),t._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[n("router-link",{attrs:{to:"/tools"}},[t._v("工具合集")])],1),t._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[n("router-link",{attrs:{to:"/network"}},[t._v("网址大全")])],1),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[n("router-link",{attrs:{to:"/zhaocha"}},[t._v("找茬工具")])],1),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[n("router-link",{attrs:{to:"/wjc"}},[t._v("违禁词")])],1),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[n("router-link",{attrs:{to:"/email"}},[t._v("发邮件")])],1),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[n("router-link",{attrs:{to:"/map"}},[t._v("百度地图生成器")])],1)],2),t._v(" "),n("Submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n\t\t\t\t\t素材\n\t\t\t\t")],1),t._v(" "),n("MenuItem",{attrs:{name:"2-1"}},[t._v("banner")]),t._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[t._v("滚动")])],2),t._v(" "),n("Submenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n\t\t\t\t\t常用话术\n\t\t\t\t")],1),t._v(" "),n("MenuItem",{attrs:{name:"3-1"}},[n("router-link",{attrs:{to:"/colleague"}},[t._v("与同事沟通")])],1),t._v(" "),n("MenuItem",{attrs:{name:"3-2"}},[n("router-link",{attrs:{to:"/customer"}},[t._v("与客户沟通")])],1)],2)],1)],1),t._v(" "),n("Layout",{style:{padding:"0 24px 24px"}},[n("Content",{style:{padding:"24px",minHeight:"280px",background:"#fff"}},[n("router-view",{attrs:{userdata:t.userdata}})],1)],1)],1)},staticRenderFns:[]};var l=n("VU/8")(i,c,!1,function(t){n("bLVX")},null,null).exports,m={data:function(){return{author:"app主页面"}},props:["userdata"],components:{Header:r.default,Sider:l}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"layout"},[e("Layout",[e("sider",{attrs:{userdata:this.userdata}})],1)],1)])},staticRenderFns:[]};var d=n("VU/8")(m,p,!1,function(t){n("sM2Q")},"data-v-179a7499",null).exports,v=n("BTaQ"),f=n.n(v),h=(n("+skl"),n("OolZ")),_=n("9rMa");a.default.use(_.a);var I=new _.a.Store({state:{domain:"",notice:!0},mutations:{asd:function(){}}});a.default.config.debug=!1,a.default.use(f.a),a.default.use(h.a),a.default.http.options.emulateJSON=!0;new a.default({data:{userdata:""},methods:{},components:{App:d},store:I,template:'<App :userdata="userdata"/>'}).$mount("#app")},bLVX:function(t,e){},jZHc:function(t,e,n){"use strict";var a=n("ww98"),r=n.n(a),o=n("kpRs"),u=n("VU/8")(r.a,o.a,!1,null,null,null);e.default=u.exports},kpRs:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Header",[n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[n("div",{staticClass:"layout-logo"}),t._v(" "),n("div",{staticClass:"layout-nav"},[n("MenuItem",{attrs:{name:"1"}},[n("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n                Item 1\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"2"}},[n("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n                Item 2\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"3"}},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                Item 3\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"4"}},[n("Icon",{attrs:{type:"ios-paper"}}),t._v("\n                Item 4\n            ")],1)],1)])],1)},staticRenderFns:[]};e.a=a},sM2Q:function(t,e){},ww98:function(t,e){}},["NHnr"]);