(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-logintype"],{"06a5":function(t,e,n){var o=n("6fed");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("bd523108",o,!0,{sourceMap:!1,shadowMode:!1})},"1b36":function(t,e,n){"use strict";var o=n("ee27");n("99af"),n("c975"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=o(n("c964")),a=o(n("f3f3")),r=n("b85a"),c=o(n("a5af")),s={components:{rfProtocolPopup:c.default},data:function(){return{btnLoading:!1,isRfProtocolPopupShow:!1,appAgreementDefaultSelect:this.$mSettingConfig.appAgreementDefaultSelect,isAuthLoginShow:!1,isIosAuthLoginShow:!1,logo:this.$mSettingConfig.appLogo,appName:this.$mSettingConfig.appName,promoCodeParams:{},styleLoginType:this.$mSettingConfig.styleLoginType,wechat:this.$mAssetsPath.wechat,apple:this.$mAssetsPath.apple,closeThirdPartyLogin:this.$mSettingConfig.closeThirdPartyLogin,loginTypeList:[{text:"微信",icon:"iconweixin"}]}},onShow:function(){this.btnLoading=!1,uni.getStorageSync("accessToken")&&this.$mRouter.reLaunch({route:"/pages/index/index"})},onLoad:function(t){var e=this;this.$mStore.commit("logout"),this.$mPayment.isWechat()&&(this.isAuthLoginShow=!0),this.code=t.code&&t.code.split(",")[t.code.split(",").length-1],uni.getStorageSync("notFirstTimeLogin")?this.appAgreementDefaultSelect=!0:this.appAgreementDefaultSelect||(this.appAgreementDefaultSelect=!1);var n=uni.getStorageSync("backToPage");-1!==n.indexOf("promo_code")&&(this.promoCodeParams.promo_code=JSON.parse(n)["query"]["promo_code"]);var o=this;this.code&&(this.btnLoading=!0,this.$http.get(r.wechatH5Login,(0,a.default)({code:this.code},o.promoCodeParams)).then(function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.btnLoading=!1,n.data.login){t.next=6;break}e.user_info=n.data.user_info.original,uni.showModal({content:"您尚未绑定账号，是否跳转登录页面？",success:function(t){t.confirm?(uni.setStorageSync("wechatUserInfo",JSON.stringify(o.user_info)),o.$mRouter.push({route:"/pages/public/login"})):e.btnLoading=!1}}),t.next=10;break;case 6:return t.next=8,e.$mStore.commit("login",n.data.user_info);case 8:i=uni.getStorageSync("backToPage"),i?(-1!==i.indexOf("/pages/profile/profile")||-1!==i.indexOf("/pages/cart/cart")||-1!==i.indexOf("/pages/index/index")||-1!==i.indexOf("/pages/notify/notify")||-1!==i.indexOf("/pages/category/category")?e.$mRouter.reLaunch(JSON.parse(i)):e.$mRouter.redirectTo(JSON.parse(i)),uni.removeStorageSync("backToPage"),uni.removeStorageSync("wechatUserInfo")):e.$mRouter.reLaunch({route:"/pages/profile/profile"});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){e.btnLoading=!1})))},methods:{navTo:function(t){this.appAgreementDefaultSelect?this.$mRouter.redirectTo({route:t}):this.$mHelper.toast("请勾选并阅读协议，才能进行下一步哦",1500)},handleRfProtocolPopupShow:function(){this.isRfProtocolPopupShow=!0},popupState:function(t){t?(this.appAgreementDefaultSelect=!0,uni.setStorageSync("notFirstTimeLogin",!0),this.isRfProtocolPopupShow=!1):(this.appAgreementDefaultSelect=!1,this.isRfProtocolPopupShow=!1)},toAuthLogin:function(){if(this.btnLoading=!0,!this.appAgreementDefaultSelect)return this.$mHelper.toast("请阅读并同意协议",1500),void(this.btnLoading=!1);if(this.$mPayment.isWechat()){var t=window.location.href;window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?\n\t\t\t\t\t\t\t\t\t\t\t\t\tappid=".concat(this.$mConfig.weixinAppId,"&\n\t\t\t\t\t\t\t\t\t\t\t\t\tredirect_uri=").concat(t,"&\n\t\t\t\t\t\t\t\t\t\t\t\t\tresponse_type=code&\n\t\t\t\t\t\t\t\t\t\t\t\t\tscope=snsapi_userinfo&\n\t\t\t\t\t\t\t\t\t\t\t\t\tstate=STATE#wechat_redirect")}else this.$mHelper.toast("当前平台不支持授权登录")},thirdPartyAuthLogin:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this;n.$http.post(t,e).then(function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.btnLoading=!1,e.data.login){t.next=6;break}n.user_info=e.data.user_info,uni.showModal({content:"您尚未绑定账号，是否跳转登录页面？",success:function(t){t.confirm&&(uni.setStorageSync("wechatUserInfo",JSON.stringify(n.user_info)),n.$mRouter.push({route:"/pages/public/login"}))}}),t.next=11;break;case 6:return t.next=8,n.$mStore.commit("login",e.data.user_info);case 8:n.$mHelper.toast("已为您授权登录"),o=uni.getStorageSync("backToPage"),o?(-1!==o.indexOf("/pages/profile/profile")||-1!==o.indexOf("/pages/cart/cart")||-1!==o.indexOf("/pages/notify/notify")||-1!==o.indexOf("/pages/index/index")||-1!==o.indexOf("/pages/category/category")?n.$mRouter.reLaunch(JSON.parse(o)):n.$mRouter.redirectTo(JSON.parse(o)),uni.removeStorageSync("backToPage"),uni.removeStorageSync("wechatUserInfo")):n.$mRouter.reLaunch({route:"/pages/profile/profile"});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){n.btnLoading=!1}))},toIosAuthLogin:function(){if(this.btnLoading=!0,!this.appAgreementDefaultSelect)return this.$mHelper.toast("请阅读并同意协议",1500),void(this.btnLoading=!1);var t=this;plus.oauth.getServices((function(e){var n;if(e&&e.length){for(var o=0,c=e.length;o<c;o++)if("apple"===e[o].id){n=e[o];break}if(!n)return t.btnLoading=!1,void t.$mHelper.toast("没有苹果登录授权服务");n.login((function(e){t.$http.post(r.thirdPartyApple,(0,a.default)({},e.target.appleInfo,{},t.promoCodeParams)).then(function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.btnLoading=!1,n.data.login){e.next=6;break}t.user_info=n.data.user_info,uni.showModal({content:"您尚未绑定账号，是否跳转登录页面？",success:function(e){e.confirm&&(uni.setStorageSync("wechatUserInfo",JSON.stringify(t.user_info)),uni.setStorageSync("oauthClient","iOS"),t.$mRouter.push({route:"/pages/public/login"}))}}),e.next=11;break;case 6:return e.next=8,t.$mStore.commit("login",n.data.user_info);case 8:t.$mHelper.toast("已为您授权登录"),o=uni.getStorageSync("backToPage"),o?(-1!==o.indexOf("/pages/profile/profile")||-1!==o.indexOf("/pages/cart/cart")||-1!==o.indexOf("/pages/notify/notify")||-1!==o.indexOf("/pages/index/index")||-1!==o.indexOf("/pages/category/category")?t.$mRouter.reLaunch(JSON.parse(o)):t.$mRouter.redirectTo(JSON.parse(o)),uni.removeStorageSync("backToPage"),uni.removeStorageSync("wechatUserInfo")):t.$mRouter.reLaunch({route:"/pages/profile/profile"});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){t.btnLoading=!1}))}),(function(){t.btnLoading=!1}))}}),(function(){t.btnLoading=!1}))}}};e.default=s},"254f":function(t,e,n){"use strict";n.r(e);var o=n("4f67"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"2cd9":function(t,e,n){"use strict";n.r(e);var o=n("ec64"),i=n("a290");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("5b5e");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"3e76f37e",null,!1,o["a"],r);e["default"]=s.exports},"4f67":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"popup",props:{title:{type:String,default:"服务协议和隐私政策"},protocolPath:{type:String},policyPath:{type:String}},data:function(){return{showPopup:!0}},methods:{clear:function(){},back:function(){this.$emit("popupState",!1)},consent:function(){this.$emit("popupState",!0)}}};e.default=o},"5b5e":function(t,e,n){"use strict";var o=n("06a5"),i=n.n(o);i.a},"6fed":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-3e76f37e]{background:#fff;height:calc(100% - %?88?%)}.login-type[data-v-3e76f37e]{padding-top:%?80?%}.login-type .logo[data-v-3e76f37e]{text-align:center;margin-bottom:%?80?%}.login-type .logo uni-image[data-v-3e76f37e]{width:%?180?%;height:%?180?%;border-radius:%?28?%}.login-type .confirm-btn[data-v-3e76f37e]{width:84%;margin:0 7% %?50?%;height:%?84?%;line-height:%?84?%;font-size:%?32?%;border:%?1?% solid}.login-type .confirm-btn-bg[data-v-3e76f37e]{background:none}.login-type .footer[data-v-3e76f37e]{width:100%;text-align:center;position:fixed;bottom:%?40?%;font-size:%?26?%}.login-type .footer .protocol[data-v-3e76f37e]{color:#fa436a;margin:0 %?10?%}.login-type .footer .d-header[data-v-3e76f37e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;margin-bottom:%?20?%;font-size:%?30?%;color:#606266;position:relative}.login-type .footer .d-header uni-text[data-v-3e76f37e]{padding:0 %?30?%;background:#fff;position:relative;z-index:1}.login-type .footer .d-header[data-v-3e76f37e]:after{position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?300?%;height:0;content:"";border-bottom:1px solid #ccc}.login-type .footer .login-type-list[data-v-3e76f37e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.login-type .footer .login-type-list .login-type-btn[data-v-3e76f37e]{border:none;background:none;padding:0 %?40?% 0 0;margin:0}.login-type .footer .login-type-list .login-type-btn .image[data-v-3e76f37e]{width:%?64?%;height:%?64?%}.login-type .footer .login-type-list .login-type-btn[data-v-3e76f37e]:after{border:none}.login-type .footer .login-type-list .iconfont[data-v-3e76f37e]{font-size:%?50?%;color:#606266}body.?%PAGE?%[data-v-3e76f37e]{background:#fff}',""]),t.exports=e},a290:function(t,e,n){"use strict";n.r(e);var o=n("1b36"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},a5af:function(t,e,n){"use strict";n.r(e);var o=n("bf8e"),i=n("254f");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("ec85");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"242ed7ba",null,!1,o["a"],r);e["default"]=s.exports},bf8e:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"popup_mask",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"popup_content"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:"explain_text"},[t._v("请您务必认真阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了向您提供数据、分享等服务所要获取的权限信息。"),n("v-uni-view",{staticClass:"line"},[t._v("您可以阅读"),n("v-uni-navigator",{staticClass:"path",attrs:{url:t.protocolPath,"hover-class":"navigator-hover"}},[t._v("《注册协议》")]),t._v("和"),n("v-uni-navigator",{staticClass:"path",attrs:{url:t.policyPath,"hover-class":"navigator-hover"}},[t._v("《隐私协议》")]),t._v('了解详细信息。如您同意，请点击"同意"开始接受我们的服务。')],1)],1),n("v-uni-view",{staticClass:"button"},[n("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("暂不使用")]),n("v-uni-view",{staticClass:"consent",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.consent.apply(void 0,arguments)}}},[t._v("同意")])],1)],1)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},c20d8:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.popup_mask[data-v-242ed7ba]{position:fixed;bottom:0;top:0;left:0;right:0;background-color:rgba(0,0,0,.4);-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.3s;transition-duration:.3s;opacity:0;z-index:98}.popup_mask[data-v-242ed7ba]{opacity:1}.popup_content[data-v-242ed7ba]{overflow:hidden;box-sizing:border-box;padding:%?40?% %?20?% 0 %?20?%;position:fixed;bottom:30%;border-radius:8px;left:50%;margin-left:-40%;right:0;min-height:%?400?%;background:#fff;width:80%;z-index:99}.popup_content .title[data-v-242ed7ba]{text-align:center;font-size:%?34?%;padding:%?10?% 0 0 0}.popup_content .explain_text[data-v-242ed7ba]{font-size:%?30?%;padding:%?30?% %?30?% %?40?% %?30?%;line-height:%?38?%}.popup_content .explain_text .line[data-v-242ed7ba]{display:block}.popup_content .explain_text .line .path[data-v-242ed7ba]{color:#007aff;display:inline-block;text-align:center}.popup_content .button[data-v-242ed7ba]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?34?%;-webkit-justify-content:space-around;justify-content:space-around;border-top:%?1?% solid #f2f2f2}.popup_content .button uni-view[data-v-242ed7ba]{text-align:center}',""]),t.exports=e},ec64:function(t,e,n){"use strict";var o={rfImage:n("65fc").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"login-type"},[n("v-uni-view",{staticClass:"logo"},[n("rf-image",{attrs:{preview:!1,src:t.logo}})],1),n("v-uni-view",[n("v-uni-button",{staticClass:"confirm-btn confirm-btn-bg",class:"text-"+t.themeColor.name,attrs:{disabled:t.btnLoading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/public/login")}}},[t._v("已有账号登录")]),n("v-uni-button",{staticClass:"confirm-btn confirm-btn-bg",class:"text-"+t.themeColor.name,attrs:{disabled:t.btnLoading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("one"===t.styleLoginType?"/pages/public/register":"/pages/public/login?type=1")}}},[t._v("立即注册")])],1),t.isRfProtocolPopupShow?n("rf-protocol-popup",{ref:"mapState",attrs:{protocolPath:"/pages/set/about/detail?field=protocol_register&title=注册协议",policyPath:"/pages/set/about/detail?field=protocol_privacy&title=隐私协议"},on:{popupState:function(e){arguments[0]=e=t.$handleEvent(e),t.popupState.apply(void 0,arguments)}}}):t._e(),n("v-uni-view",{staticClass:"footer-protocol"},[n("v-uni-text",{staticClass:"cuIcon",class:t.appAgreementDefaultSelect?"text-"+t.themeColor.name+" cuIcon-radiobox":"cuIcon-round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleRfProtocolPopupShow.apply(void 0,arguments)}}}),n("v-uni-text",{staticClass:"content"},[t._v("登录表示同意")]),n("v-uni-text",{class:"text-"+t.themeColor.name,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleRfProtocolPopupShow.apply(void 0,arguments)}}},[t._v("《"+t._s(t.appName)+" 协议》")])],1)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},ec85:function(t,e,n){"use strict";var o=n("ef0a"),i=n.n(o);i.a},ef0a:function(t,e,n){var o=n("c20d8");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("1b77608c",o,!0,{sourceMap:!1,shadowMode:!1})}}]);