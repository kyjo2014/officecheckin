webpackJsonp([1,0],[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=i(1),o=n(s),r=i(7),a=n(r),l=i(5),u=n(l);i(3);var c=i(9),d=n(c);o.default.use(u.default),o.default.use(d.default),new o.default({el:"#app",template:"<App/>",components:{App:a.default}})},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{dialog:!1,login:!0,alert:!1,userList:[{username:"1"}],demoimg:i(6),username:this.initUsername(),draweropen:!1,docked:!1}},mounted:function(){this.getUserList(),this.autoRefresh()},methods:{autoRefresh:function(){var t=this;this.timer=setInterval(function(){t.getUserList()},5e3)},stopRefresh:function(){clearInterval(this.timer),this.timer=null},beginRefresh:function(){null==this.timer&&this.autoRefresh()},initUsername:function(){return localStorage.hasOwnProperty("username")?localStorage.username:null},getUserList:function(){var t=this;null!=this.username?this.$http.get("http://checkin.kyjocode.cn/?username="+this.username).then(function(e){t.userList=e.body.userList,console.log(t.userList),t.getAlarm(e.body.isAlarm)}):this.$http.get("http://checkin.kyjocode.cn").then(function(e){t.userList=e.body.userList,console.log(t.userList)})},alarm:function(t){var e=this;this.$http.get("http://checkin.kyjocode.cn/alarm?username="+t).then(function(t){console.log(t),"accept"==t.body.status&&(e.dialog=!0)})},open:function(){this.dialog=!0},close:function(){this.dialog=!1},closelogin:function(){this.login=!1,localStorage.username=this.username},closealert:function(){this.alert=!1},getAlarm:function(t){t&&(navigator.vibrate(1e3),this.alert=!0)},toggle:function(t){this.draweropen=!this.draweropen,this.docked=!t}}}},function(t,e){},function(t,e){},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABTCAYAAADjsjsAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMyNjM5MjZGQzA3MzExRTY4Njk4QjdEN0ZDMzJCRjFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMyNjM5MjcwQzA3MzExRTY4Njk4QjdEN0ZDMzJCRjFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzI2MzkyNkRDMDczMTFFNjg2OThCN0Q3RkMzMkJGMUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzI2MzkyNkVDMDczMTFFNjg2OThCN0Q3RkMzMkJGMUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7k+bZgAAALfklEQVR42uxd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"},function(t,e,i){var n,s;i(4),n=i(2);var o=i(8);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{attrs:{id:"app"}},[e("mu-appbar",{attrs:{title:"OfficeCheckIn"}},[e("mu-icon-button",{attrs:{icon:"menu"},on:{click:function(e){t.toggle(!0)}},slot:"left"}),t._v(" "),e("mu-circular-progress",{attrs:{size:30,strokeWidth:5,color:"white"},slot:"right"})]),t._v(" "),e("mu-list",[e("mu-sub-header",[t._v("在线人数")]),t._v(" "),t._l(t.userList,function(i,n){return e("mu-list-item",{attrs:{title:n}},[e("mu-avatar",{attrs:{src:t.demoimg},slot:"leftAvatar"}),t._v(" "),e("mu-icon",{attrs:{value:"chat_bubble"},on:{click:function(e){t.alarm(n)}},slot:"right"})])})],!0),t._v(" "),e("mu-flexbox",{staticClass:"mt8"},[e("mu-flexbox-item",{staticClass:"flex-demo",attrs:{order:"1"}},[e("mu-raised-button",{staticClass:"refresh-button",attrs:{label:"刷新",primary:""},on:{click:t.getUserList}})])]),t._v(" "),e("mu-dialog",{attrs:{open:t.dialog,title:"Dialog"},on:{close:t.close}},[t._v("\n            已发出提醒\n            "),e("mu-flat-button",{attrs:{primary:"",label:"取消"},on:{click:t.close},slot:"actions"}),t._v(" "),e("mu-flat-button",{attrs:{primary:"",label:"确定"},on:{click:t.close},slot:"actions"})]),t._v(" "),e("mu-dialog",{attrs:{open:t.login,title:"登录"}},[e("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{hintText:"你的名字",type:"text",errorText:"这是必填项"},domProps:{value:t.username},on:{input:function(e){t.username=e}}}),e("br"),t._v(" "),e("mu-flat-button",{attrs:{label:"确定",primary:""},on:{click:t.closelogin},slot:"actions"})]),t._v(" "),e("mu-dialog",{attrs:{open:t.alert,title:"提醒"}},[t._v("\n             开门！！！！！\n              "),e("mu-flat-button",{attrs:{label:"确定",primary:""},on:{click:t.closealert},slot:"actions"})]),t._v(" "),e("mu-drawer",{attrs:{open:t.draweropen,docked:t.docked},on:{close:function(e){t.toggle(!0)}}},[e("mu-list",[e("mu-list-item",{attrs:{title:"开启自动刷新"},on:{click:t.beginRefresh}}),t._v(" "),e("mu-list-item",{attrs:{title:"关闭自动刷新"},on:{click:t.stopRefresh}})])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.940d3b13e93b2712ced0.js.map