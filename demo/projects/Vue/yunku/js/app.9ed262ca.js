(function(e){function n(n){for(var a,c,o=n[0],f=n[1],h=n[2],i=0,d=[];i<o.length;i++)c=o[i],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&d.push(u[c][0]),u[c]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(e[a]=f[a]);p&&p(n);while(d.length)d.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(a=!1)}a&&(r.splice(n--,1),e=f(f.s=t[0]))}return e}var a={},c={app:0},u={app:0},r=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-0f036837":"605367c3","chunk-1e6f9f5e":"7eb8f60c","chunk-2d11137f":"90051c90","chunk-2e86c268":"9ce45003","chunk-31c544e0":"eb4f56ea","chunk-3daeddf0":"3d2d65a9","chunk-3dd3b220":"131778ad","chunk-43f058e3":"1547990a","chunk-5b20f385":"4a53177f","chunk-731255e2":"e4441743","chunk-76fb49fc":"cd8c9787","chunk-913d310a":"72cfc726","chunk-df9ce6ca":"7be0f27c","chunk-e0a37776":"3b83bc5d","chunk-fbc5ea88":"b4e1e2fb"}[e]+".js"}function f(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-0f036837":1,"chunk-1e6f9f5e":1,"chunk-2d11137f":1,"chunk-2e86c268":1,"chunk-31c544e0":1,"chunk-3daeddf0":1,"chunk-3dd3b220":1,"chunk-43f058e3":1,"chunk-5b20f385":1,"chunk-731255e2":1,"chunk-76fb49fc":1,"chunk-913d310a":1,"chunk-df9ce6ca":1,"chunk-e0a37776":1,"chunk-fbc5ea88":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0f036837":"067e37c9","chunk-1e6f9f5e":"c6f1e482","chunk-2d11137f":"e9e992b4","chunk-2e86c268":"f2d35343","chunk-31c544e0":"911a447d","chunk-3daeddf0":"5e66e5f1","chunk-3dd3b220":"e26262fc","chunk-43f058e3":"2923f7ee","chunk-5b20f385":"ab1def60","chunk-731255e2":"e6f11217","chunk-76fb49fc":"34e7d242","chunk-913d310a":"0745d188","chunk-df9ce6ca":"b1e817fc","chunk-e0a37776":"2bda2f12","chunk-fbc5ea88":"bc754815"}[e]+".css",u=f.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var h=r[o],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===a||i===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){h=d[o],i=h.getAttribute("data-href");if(i===a||i===u)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var a=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],p.parentNode.removeChild(p),t(r)},p.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(p)})).then((function(){c[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=u[e]=[n,t]}));n.push(a[2]=r);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.src=o(e);var d=new Error;h=function(n){i.onerror=i.onload=null,clearTimeout(p);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,t[1](d)}u[e]=void 0}};var p=setTimeout((function(){h({type:"timeout",target:i})}),12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(n)},f.m=e,f.c=a,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)f.d(t,a,function(n){return e[n]}.bind(null,a));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=n,h=h.slice();for(var d=0;d<h.length;d++)n(h[d]);var p=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("4d63"),t("ac1f"),t("25f0"),t("5319"),t("66b9");var a=t("b650"),c=(t("5246"),t("6b41")),u=(t("38d5"),t("772a")),r=(t("be7f"),t("565f")),o=(t("8a58"),t("e41f")),f=(t("e7e5"),t("d399")),h=(t("537a"),t("ac28")),i=(t("a52c"),t("2ed4")),d=(t("7844"),t("5596")),p=(t("4b0a"),t("2bb1")),l=(t("5852"),t("d961")),s=(t("0209"),t("7d5e")),b=(t("da3c"),t("0b33")),k=(t("bda7"),t("5e46")),m=(t("c3a6"),t("ad06")),v=(t("91d5"),t("f0ca")),y=(t("4467"),t("c36e")),g=(t("c194"),t("7744")),w=(t("3c32"),t("417e")),j=(t("a909"),t("3acc")),x=(t("f06a"),t("20fb")),O=(t("acb7"),t("67bb")),E=(t("869a"),t("6869")),P=(t("e930"),t("8f80")),S=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),C=t("8c4f"),M=t("a7fe"),_=t.n(M),A=t("bc3a"),T=t.n(A),L=(t("499a"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),N=[],D=(t("7c55"),t("2877")),B={},F=Object(D["a"])(B,L,N,!1,null,null,null),R=F.exports,H=[{path:"/login",name:"Login",component:function(e){return t.e("chunk-731255e2").then(function(){var n=[t("a55b")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/main",name:"Main",component:function(e){return t.e("chunk-31c544e0").then(function(){var n=[t("cd56")];e.apply(null,n)}.bind(this)).catch(t.oe)},children:[{path:"home",name:"Home",component:function(e){return t.e("chunk-0f036837").then(function(){var n=[t("b288")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"menu",name:"Menu",component:function(e){return t.e("chunk-5b20f385").then(function(){var n=[t("0f38")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"cart",name:"Cart",component:function(e){return t.e("chunk-3dd3b220").then(function(){var n=[t("1969")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"My",name:"My",component:function(e){return t.e("chunk-76fb49fc").then(function(){var n=[t("3837")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]},{path:"/detail",name:"Detail",component:function(e){return t.e("chunk-2d11137f").then(function(){var n=[t("c84b")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/pay",name:"Pay",component:function(e){return t.e("chunk-df9ce6ca").then(function(){var n=[t("76a1")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/newaddress",name:"Newaddress",component:function(e){return t.e("chunk-e0a37776").then(function(){var n=[t("c18d")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/account",name:"Account",component:function(e){return t.e("chunk-1e6f9f5e").then(function(){var n=[t("77be")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/order",name:"Order",component:function(e){return t.e("chunk-3daeddf0").then(function(){var n=[t("cf2a")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/like",name:"Like",component:function(e){return t.e("chunk-2e86c268").then(function(){var n=[t("7c2a")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/address",name:"Address",component:function(e){return t.e("chunk-fbc5ea88").then(function(){var n=[t("a821")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/secure",name:"Secure",component:function(e){return t.e("chunk-43f058e3").then(function(){var n=[t("305b")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/forget",name:"Forget",component:function(e){return t.e("chunk-913d310a").then(function(){var n=[t("4f3a")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"*",redirect:{name:"Home"}}];S["a"].use(C["a"]);var $=new C["a"]({routes:H});S["a"].use(a["a"]).use(c["a"]).use(u["a"]).use(r["a"]).use(o["a"]).use(f["a"]).use(h["a"]).use(i["a"]).use(d["a"]).use(p["a"]).use(l["a"]).use(s["a"]).use(b["a"]).use(k["a"]).use(m["a"]).use(v["a"]).use(y["a"]).use(g["a"]).use(w["a"]).use(j["a"]).use(x["a"]).use(O["a"]).use(E["a"]).use(P["a"]);var U=C["a"].prototype.push;C["a"].prototype.push=function(e){return U.call(this,e).catch((function(e){return e}))},S["a"].config.productionTip=!1,S["a"].use(_.a,T.a),T.a.defaults.baseURL="http://www.kangliuyong.com:10002",T.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",S["a"].prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",S["a"].filter("formatDate",(function(e,n){var t=new Date(e),a=t.getFullYear();if(/(y+)/.test(n)){var c=RegExp.$1;n=n.replace(c,a)}var u={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var r in u){var o=new RegExp("(".concat(r,"+)"));if(o.test(n)){var f=RegExp.$1,h=u[r]>=10?u[r]:2==f.length?"0"+u[r]:u[r];n=n.replace(f,h)}}return n})),new S["a"]({router:$,render:function(e){return e(R)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var a=t("2395"),c=t.n(a);c.a}});
//# sourceMappingURL=app.9ed262ca.js.map