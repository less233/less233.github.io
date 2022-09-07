(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6457cf08"],{"365a":function(e,t,n){},6998:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("nav-component",{attrs:{title:e.isRegister?"注册":"登录"}}),n("div",{staticClass:"account-box"},[n("van-field",{attrs:{placeholder:"请输入手机号"},on:{blur:e.phoneRegister},model:{value:e.userInfoL.phone,callback:function(t){e.$set(e.userInfoL,"phone",t)},expression:"userInfoL.phone"}}),n("van-field",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.userInfoL.password,callback:function(t){e.$set(e.userInfoL,"password",t)},expression:"userInfoL.password"}}),n("van-field",{directives:[{name:"show",rawName:"v-show",value:e.isRegister,expression:"isRegister"}],attrs:{placeholder:"请输入昵称"},model:{value:e.userInfoR.nickname,callback:function(t){e.$set(e.userInfoR,"nickname",t)},expression:"userInfoR.nickname"}}),n("van-field",{directives:[{name:"show",rawName:"v-show",value:e.isRegister,expression:"isRegister"}],attrs:{placeholder:"请输入验证码"},scopedSlots:e._u([{key:"button",fn:function(){return[n("van-button",{attrs:{disabled:e.isSent,size:"mini",type:"primary"},on:{click:e.sentCode}},[e._v(e._s(e.sentText))])]},proxy:!0}]),model:{value:e.userInfoR.captcha,callback:function(t){e.$set(e.userInfoR,"captcha",t)},expression:"userInfoR.captcha"}})],1),n("van-button",{attrs:{round:""},on:{click:e.sendInfo}},[e._v(e._s(e.isRegister?"注册":"登录"))]),n("van-button",{attrs:{round:"",plain:"",hairline:""},on:{click:e.toggleStatus}},[e._v(e._s(e.isRegister?"登录":"注册"))])],1)},a=[],s=n("5530"),o=(n("365a"),n("f874")),i=(n("99af"),n("fb6a"),n("e7e5"),n("d399"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var f=function(){function e(){c(this,e)}return l(e,[{key:"queryString",value:function(e){var t="";for(var n in e)t+="".concat(n,"=").concat(e[n],"&");return t.slice(0,-1)}},{key:"verify",value:function(e){for(var t in e)if(!e[t].reg.test(e[t].value))return Object(i["a"])({message:e[t].errMsg}),!1;return!0}}]),e}(),h=new f,d=n("2f62"),p=Object(d["a"])("primaryModule"),v=p.mapMutations,g={components:{navComponent:o["a"]},data:function(){return{userInfoL:{phone:"",password:""},userInfoR:{nickname:"",captcha:""},isRegister:!1,isSent:!0,sentText:"发送验证码"}},methods:Object(s["a"])(Object(s["a"])({},v(["changeLogin","changeUserInfo"])),{},{toggleStatus:function(){this.isRegister=!this.isRegister},phoneRegister:function(){var e=this;if(""!=this.userInfoL.phone){var t={testPhone:{value:this.userInfoL.phone,reg:/^1[3-9]\d{9}$/,errMsg:"手机号错误"}};h.verify(t)&&this.isRegister&&this.axios({method:"GET",url:"/cellphone/existence/check",params:{phone:this.userInfoL.phone}}).then((function(t){1==t.data.exist?(e.$toast("手机号已注册"),e.isSent=!1):e.isSent=!1})).catch((function(e){}))}else this.$toast("手机号不能为空")},sentCode:function(){var e=this;this.isSent=!0;var t=10;this.sentText="".concat(t,"s后重新发送"),this.axios({method:"GET",url:"/captcha/sent",params:{phone:this.userInfoL.phone}}).then((function(t){200==t.data.code&&e.$toast("发送成功")}));var n=setInterval((function(){if(0==t)return e.sentText="发送验证码",e.isSent=!1,clearInterval(n);t--,e.sentText="".concat(t,"s后重新发送")}),1e3)},sendInfo:function(){var e=this;if(this.isRegister){var t=this.userInfoR;t=Object.assign(this.userInfoL,t);var n={testPhone:{value:t.phone,reg:/^1[3-9]\d{9}$/,errMsg:"手机号错误"},testPwd:{value:t.password,reg:/^[\d\w]{6,16}$/,errMsg:"请确认密码格式为6-16位数字或字母"},nickName:{value:t.nickname,reg:/^[\w\u4e00-\u9fa5]{1,10}$/,errMsg:"请确认昵称格式为1-10位汉字或字母"}};if(!h.verify(n))return;this.axios({method:"GET",url:"/captcha/verify",params:{phone:t.phone,captcha:t.captcha}}).then((function(n){200==n.data.code&&e.axios({method:"GET",url:"/register/cellphone",params:{captcha:t.captcha,phone:t.phone,password:t.password,nickname:t.nickname}}).then((function(e){}))}))}else if(!this.isRegister){this.$toast("点击了登录按钮");var r=this.userInfoL,a={testPhone:{value:r.phone,reg:/^1[3-9]\d{9}$/,errMsg:"手机号错误"},testPwd:{value:r.password,reg:/^[\d\w]{6,16}$/,errMsg:"请确认密码格式为6-16位数字或字母"}};if(!h.verify(a))return;this.axios({method:"GET",url:"/login/cellphone",params:{phone:r.phone,password:r.password}}).then((function(t){if(200==t.data.code){localStorage.setItem("cookie",t.data.cookie),e.changeLogin(!0);var n={};n.userid=t.data.account.id,n.nickname=t.data.profile.nickname,n.backgroundUrl=t.data.profile.backgroundUrl,n.avatarUrl=t.data.profile.avatarUrl,e.changeUserInfo(n);var r=JSON.stringify(n);localStorage.setItem("profile",r),e.$router.push({name:"Discover"})}}))}}})},m=g,b=n("2877"),w=Object(b["a"])(m,r,a,!1,null,null,null);t["default"]=w.exports},"6fb6":function(e,t,n){},7267:function(e,t,n){"use strict";var r=n("6fb6"),a=n.n(r);a.a},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("d039"),s=n("e8b5"),o=n("861d"),i=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),h=n("b622"),d=n("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=d>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),b=f("concat"),w=function(e){if(!o(e))return!1;var t=e[p];return void 0!==t?!!t:s(e)},y=!m||!b;r({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,r,a,s,o=i(this),f=l(o,0),h=0;for(t=-1,r=arguments.length;t<r;t++)if(s=-1===t?o:arguments[t],w(s)){if(a=c(s.length),h+a>v)throw TypeError(g);for(n=0;n<a;n++,h++)n in s&&u(f,h,s[n])}else{if(h>=v)throw TypeError(g);u(f,h++,s)}return f.length=h,f}})},f874:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{color:e.color},attrs:{id:"myc-nav"}},[n("div",{staticClass:"myc-left",on:{click:e.goBack}},[n("van-icon",{staticClass:"myc-icon",attrs:{name:"down"}})],1),n("div",{staticClass:"myc-title"},[e._v(e._s(e.title))]),e._t("title")],2)},a=[],s={name:"navComponent",props:{title:{type:String,default:""},color:{type:String,default:"black"}},methods:{goBack:function(){this.$router.go(-1)}},created:function(){}},o=s,i=(n("7267"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,"e96c7d6c",null);t["a"]=c.exports},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("861d"),s=n("e8b5"),o=n("23cb"),i=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),f=n("1dde"),h=n("ae40"),d=f("slice"),p=h("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),g=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!d||!p},{slice:function(e,t){var n,r,l,f=c(this),h=i(f.length),d=o(e,h),p=o(void 0===t?h:t,h);if(s(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(f,d,p);for(r=new(void 0===n?Array:n)(m(p-d,0)),l=0;d<p;d++,l++)d in f&&u(r,l,f[d]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-6457cf08.45aa99a2.js.map