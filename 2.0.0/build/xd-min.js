/*!build time : 2013-12-05 5:19:57 PM*/
KISSY.add("kg/storage/2.0.0/conf",function(){var a=location.href.indexOf("if-debug=1")>-1,b=location.href.indexOf("if-debug-log=1")>-1,c="http://gm.mmstat.com",d="http://log.mmstat.com/ued.2.0.0.2?type=9&_gm:id=storage&v=2.0.0",e={DEBUG:a,DEBUG_LOG:b,SAM_PV:.001,TIMEOUT_STORAGE:3e3,PROXY:"http://www.tmall.com/go/act/stp-tm.php",PROXY_TMALL:"http://www.tmall.com/go/act/stp-tm.php",PROXY_TAOBAO:"http://www.taobao.com/go/act/stp-tb.php",XD_TOKEN:"__ga_xd_token",UID_FROM:"__ga_xd_from11",UID_TO:"__ga_xd_to11",M:{G:d+"&t=g",P:d+"&t=p"},ARR:{ST_SET:c+"/tmallbrand.999.5",ST_GET:c+"/tmallbrand.999.6",ST_RM:c+"/tmallbrand.999.7",ST_CL:c+"/tmallbrand.999.8"},K:{ONLOAD:"onload",PROXY:"proxy",PREFIX:"prefix",XD_TIMEOUT:"xdTimeout",IFRAME_TIMEOUT:"iframeTimeout",IFRAME:"iframe",TOKEN:"token",XD:"xd",CALLBACK_LIST:"callbackList",CACHED_ACTION_LIST:"cachedActionList",PROXY_READY:"proxyReady"}};return e}),KISSY.add("kg/storage/2.0.0/util",function(a,b){var c={log:function(){b.DEBUG_LOG&&window.console&&window.console.log&&window.console.log.apply&&window.console.log.apply(window.console,arguments)},fm:function(){if(0==arguments.length)return"";if(1==arguments.length)return arguments[0];var a,b=arguments[0];for(a=1;a<arguments.length;++a){var c=new RegExp("\\{"+(a-1)+"\\}","g");b=b.replace(c,arguments[a])}return b}},d=c;d.sendLog=function(a){d.send(d.fm(b.M.G,encodeURIComponent(location.href))),d.send(a)},d.send=function(a){if(a){var b="__st_"+ +new Date+Math.random(),c=new Image;window[b]=c,c.src=d.fm("{0}{1}r{2}=1",a,a.indexOf("?")>-1?"&":"?",+new Date),c.onload=function(){window[b]=null}}};var e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return d.getRndStr=function(a){for(var b,c=[],d=e.length,f=0;a>f;++f)b=e.charAt(Math.floor(Math.random()*d)),c.push(b);return c.join("")},d},{requires:["./conf"]}),KISSY.add("kg/storage/2.0.0/xd",function(a,b,c,d){function e(){r?q.addEventListener?addEventListener("message",f,!1):q.attachEvent&&attachEvent("onmessage",f):u.onMessage(f)}function f(b){var e={};try{e=c.parse(b.data)}catch(f){return}var g=e[d.XD_TOKEN];a.each(t,function(a){if(g===a.get(j)&&d.UID_FROM in e&&d.UID_TO in e){var b=e[d.UID_TO];if(b){var c=s[b];if(clearTimeout(c),s[b]=0,!c)return}a.get(i)(e)}})}function g(a){var b=this;b._opt=a,t.push(b)}var h=0,i="receive",j="token",k="target",l="timeout",m="iframeTimeout",n=10,o=10,p=3e3,q=window,r=q.postMessage,s={},t=[],u={uid:0,hid:-1,q:[],tm:0,postMessage:function(a,b){var c=++u.uid,d=u.q,e={name:+new Date+""+c+"^"+document.domain+"&"+b,uid:c,target:a};d.push(e),u.tm||(u.tm=setInterval(function(){var a=u.q;if(!(0===a.length||a[0].uid<=u.hid)){var b=a[0];u.hid=b.uid,b.target.name=b.name}},o))},onMessage:function(a){function b(){var b=q.name;if(b!==c){u.q.shift(),c=b;var e=d.exec(b);if(!e)return;var f={origin:e[2],data:e[3]};a&&a(f)}}var c="",d=/^(\d+?)\^(.+?)&(.*?)$/;setInterval(b,n)}};return e(),a.augment(g,{send:function(b,e,g){function i(){var a={};a.origin="*";var e={};e.c=b.c||"",e[d.XD_TOKEN]=b[d.XD_TOKEN]||"",e[d.UID_FROM]=0,e[d.UID_TO]=0,a.data=c.stringify(e),f(a)}if(a.isObject(b)){var n=this,o=n.get(k),q=n.get(l)||p,t=++h;e=e||"*",b[d.XD_TOKEN]=n.get(j),b[d.UID_TO]=b[d.UID_FROM]||0,b[d.UID_FROM]=t;var v=c.stringify(b);g||(s[t]=setTimeout(function(){s[t]=0,i()},q)),n.get(m)?i():r?o.postMessage(v,e):u.postMessage(o,v,e)}},get:function(a){return this._opt[a]},set:function(a,b){this._opt[a]=b}}),g},{requires:["event","json","./conf","./util"]});