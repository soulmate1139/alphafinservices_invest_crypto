(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[16603],{60170:()=>{!function(){var e,t,i,o,n=window.jQuery,a=n(window),s=n(document),r="http://www.w3.org/2000/svg",c="SVGAngle"in window&&((i=document.createElement("div")).innerHTML="<svg/>",t=(i.firstChild&&i.firstChild.namespaceURI)==r,i.innerHTML="",t),h="transition"in(o=document.createElement("div").style)||"WebkitTransition"in o||"MozTransition"in o||"msTransition"in o||"OTransition"in o,l="ontouchstart"in window,p="mousedown"+(l?" touchstart":""),u="mousemove.clockpicker"+(l?" touchmove.clockpicker":""),d="mouseup.clockpicker"+(l?" touchend.clockpicker":""),f=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null;function v(e){return document.createElementNS(r,e)}function k(e){return(e<10?"0":"")+e}var m=0;var g=h?350:1,b=['<div class="popover clockpicker-popover">','<div class="arrow"></div>','<div class="popover-title">','<span class="clockpicker-span-hours text-primary"></span>'," : ",'<span class="clockpicker-span-minutes"></span>','<span class="clockpicker-span-am-pm"></span>',"</div>",'<div class="popover-content">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<span class="clockpicker-am-pm-block">',"</span>","</div>","</div>"].join("");function _(t,i){var o,a,r=n(b),h=r.find(".clockpicker-plate"),l=r.find(".clockpicker-hours"),f=r.find(".clockpicker-minutes"),_=r.find(".clockpicker-am-pm-block"),y="INPUT"===t.prop("tagName"),C=y?t:t.find("input"),x=t.find(".input-group-addon"),T=this;if(this.id=(a=++m+"",(o="cp")?o+a:a),this.element=t,this.options=i,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=y,this.input=C,this.addon=x,this.popover=r,this.plate=h,this.hoursView=l,this.minutesView=f,this.amPmBlock=_,this.spanHours=r.find(".clockpicker-span-hours"),this.spanMinutes=r.find(".clockpicker-span-minutes"),this.spanAmPm=r.find(".clockpicker-span-am-pm"),this.amOrPm="PM",i.twelvehour){var A=['<div class="clockpicker-am-pm-block">','<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-am-button">',"AM</button>",'<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-pm-button">',"PM</button>","</div>"].join("");n(A);n('<button type="button" class="btn btn-sm btn-default clockpicker-button am-button">AM</button>').on("click",(function(){T.amOrPm="AM",n(".clockpicker-span-am-pm").empty().append("AM")})).appendTo(this.amPmBlock),n('<button type="button" class="btn btn-sm btn-default clockpicker-button pm-button">PM</button>').on("click",(function(){T.amOrPm="PM",n(".clockpicker-span-am-pm").empty().append("PM")})).appendTo(this.amPmBlock)}i.autoclose||n('<button type="button" class="btn btn-sm btn-default btn-block clockpicker-button">'+i.donetext+"</button>").click(n.proxy(this.done,this)).appendTo(r),
"top"!==i.placement&&"bottom"!==i.placement||"top"!==i.align&&"bottom"!==i.align||(i.align="left"),"left"!==i.placement&&"right"!==i.placement||"left"!==i.align&&"right"!==i.align||(i.align="top"),r.addClass(i.placement),r.addClass("clockpicker-align-"+i.align),this.spanHours.click(n.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(n.proxy(this.toggleView,this,"minutes")),C.on("focus.clockpicker click.clockpicker",n.proxy(this.show,this)),x.on("click.clockpicker",n.proxy(this.toggle,this));var S,D,M,E,I=n('<div class="clockpicker-tick"></div>');if(i.twelvehour)for(S=1;S<13;S+=1)D=I.clone(),M=S/6*Math.PI,E=80,D.css("font-size","120%"),D.css({left:100+Math.sin(M)*E-13,top:100-Math.cos(M)*E-13}),D.html(0===S?"00":S),l.append(D),D.on(p,N);else for(S=0;S<24;S+=1){D=I.clone(),M=S/6*Math.PI;var R=S>0&&S<13;E=R?54:80,D.css({left:100+Math.sin(M)*E-13,top:100-Math.cos(M)*E-13}),R&&D.css("font-size","120%"),D.html(0===S?"00":S),l.append(D),D.on(p,N)}for(S=0;S<60;S+=5)D=I.clone(),M=S/30*Math.PI,D.css({left:100+80*Math.sin(M)-13,top:100-80*Math.cos(M)-13}),D.css("font-size","120%"),D.html(k(S)),f.append(D),D.on(p,N);function N(t,o){var n=h.offset(),a=/^touch/.test(t.type),r=n.left+100,l=n.top+100,p=(a?t.originalEvent.touches[0]:t).pageX-r,f=(a?t.originalEvent.touches[0]:t).pageY-l,v=Math.sqrt(p*p+f*f),k=!1;if(!o||!(v<67||v>93)){t.preventDefault();var m=setTimeout((function(){e.addClass("clockpicker-moving")}),200);c&&h.append(T.canvas),T.setHand(p,f,!o,!0),s.off(u).on(u,(function(e){e.preventDefault();var t=/^touch/.test(e.type),i=(t?e.originalEvent.touches[0]:e).pageX-r,o=(t?e.originalEvent.touches[0]:e).pageY-l;(k||i!==p||o!==f)&&(k=!0,T.setHand(i,o,!1,!0))})),s.off(d).on(d,(function(t){s.off(d),t.preventDefault();var n=/^touch/.test(t.type),a=(n?t.originalEvent.changedTouches[0]:t).pageX-r,c=(n?t.originalEvent.changedTouches[0]:t).pageY-l;(o||k)&&a===p&&c===f&&T.setHand(a,c),"hours"===T.currentView?T.toggleView("minutes",g/2):i.autoclose&&(T.minutesView.addClass("clockpicker-dial-out"),setTimeout((function(){T.done()}),g/2)),h.prepend(P),clearTimeout(m),e.removeClass("clockpicker-moving"),s.off(u)}))}}if(h.on(p,(function(e){0===n(e.target).closest(".clockpicker-tick").length&&N(e,!0)})),c){var P=r.find(".clockpicker-canvas"),B=v("svg");B.setAttribute("class","clockpicker-svg"),B.setAttribute("width",200),B.setAttribute("height",200);var H=v("g");H.setAttribute("transform","translate(100,100)");var V=v("circle");V.setAttribute("class","clockpicker-canvas-bearing"),V.setAttribute("cx",0),V.setAttribute("cy",0),V.setAttribute("r",2);var L=v("line");L.setAttribute("x1",0),L.setAttribute("y1",0);var O=v("circle");O.setAttribute("class","clockpicker-canvas-bg"),O.setAttribute("r",13);var j=v("circle");j.setAttribute("class","clockpicker-canvas-fg"),j.setAttribute("r",3.5),H.appendChild(L),H.appendChild(O),H.appendChild(j),H.appendChild(V),B.appendChild(H),P.append(B),this.hand=L,this.bg=O,this.fg=j,this.bearing=V,this.g=H,this.canvas=P}w(this.options.init)}function w(e){e&&"function"==typeof e&&e()}_.DEFAULTS={default:"",
fromnow:0,placement:"bottom",align:"left",donetext:"完成",autoclose:!1,twelvehour:!1,vibrate:!0},_.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},_.prototype.locate=function(){var e=this.element,t=this.popover,i=e.offset(),o=e.outerWidth(),n=e.outerHeight(),a=this.options.placement,s=this.options.align,r={};switch(t.show(),a){case"bottom":r.top=i.top+n;break;case"right":r.left=i.left+o;break;case"top":r.top=i.top-t.outerHeight();break;case"left":r.left=i.left-t.outerWidth()}switch(s){case"left":r.left=i.left;break;case"right":r.left=i.left+o-t.outerWidth();break;case"top":r.top=i.top;break;case"bottom":r.top=i.top+n-t.outerHeight()}t.css(r)},_.prototype.show=function(t){if(!this.isShown){w(this.options.beforeShow);var i=this;this.isAppended||(e=n(document.body).append(this.popover),a.on("resize.clockpicker"+this.id,(function(){i.isShown&&i.locate()})),this.isAppended=!0);var o=((this.input.prop("value")||this.options.default||"")+"").split(":");if("now"===o[0]){var r=new Date(+new Date+this.options.fromnow);o=[r.getHours(),r.getMinutes()]}this.hours=+o[0]||0,this.minutes=+o[1]||0,this.spanHours.html(k(this.hours)),this.spanMinutes.html(k(this.minutes)),this.toggleView("hours"),this.locate(),this.isShown=!0,s.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,(function(e){var t=n(e.target);0===t.closest(i.popover).length&&0===t.closest(i.addon).length&&0===t.closest(i.input).length&&i.hide()})),s.on("keyup.clockpicker."+this.id,(function(e){27===e.keyCode&&i.hide()})),w(this.options.afterShow)}},_.prototype.hide=function(){w(this.options.beforeHide),this.isShown=!1,s.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),s.off("keyup.clockpicker."+this.id),this.popover.hide(),w(this.options.afterHide)},_.prototype.toggleView=function(e,t){var i=!1;"minutes"===e&&"visible"===n(this.hoursView).css("visibility")&&(w(this.options.beforeHourSelect),i=!0);var o="hours"===e,a=o?this.hoursView:this.minutesView,s=o?this.minutesView:this.hoursView;this.currentView=e,this.spanHours.toggleClass("text-primary",o),this.spanMinutes.toggleClass("text-primary",!o),s.addClass("clockpicker-dial-out"),a.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(t),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout((function(){s.css("visibility","hidden")}),g),i&&w(this.options.afterHourSelect)},_.prototype.resetClock=function(e){var t=this.currentView,i=this[t],o="hours"===t,n=i*(Math.PI/(o?6:30)),a=o&&i>0&&i<13?54:80,s=Math.sin(n)*a,r=-Math.cos(n)*a,h=this;c&&e?(h.canvas.addClass("clockpicker-canvas-out"),setTimeout((function(){h.canvas.removeClass("clockpicker-canvas-out"),h.setHand(s,r)}),e)):this.setHand(s,r)},_.prototype.setHand=function(e,t,i,o){var a,s=Math.atan2(e,-t),r="hours"===this.currentView,h=Math.PI/(r||i?6:30),l=Math.sqrt(e*e+t*t),p=this.options,u=r&&l<67,d=u?54:80;if(p.twelvehour&&(d=80),s<0&&(s=2*Math.PI+s),s=(a=Math.round(s/h))*h,p.twelvehour?r?0===a&&(a=12):(i&&(a*=5),60===a&&(a=0)):r?(12===a&&(a=0),a=u?0===a?12:a:0===a?0:a+12):(i&&(a*=5),
60===a&&(a=0)),this[this.currentView]!==a&&f&&this.options.vibrate&&(this.vibrateTimer||(navigator[f](10),this.vibrateTimer=setTimeout(n.proxy((function(){this.vibrateTimer=null}),this),100))),this[this.currentView]=a,this[r?"spanHours":"spanMinutes"].html(k(a)),c){o||!r&&a%5?(this.g.insertBefore(this.hand,this.bearing),this.g.insertBefore(this.bg,this.fg),this.bg.setAttribute("class","clockpicker-canvas-bg clockpicker-canvas-bg-trans")):(this.g.insertBefore(this.hand,this.bg),this.g.insertBefore(this.fg,this.bg),this.bg.setAttribute("class","clockpicker-canvas-bg"));var v=Math.sin(s)*d,m=-Math.cos(s)*d;this.hand.setAttribute("x2",v),this.hand.setAttribute("y2",m),this.bg.setAttribute("cx",v),this.bg.setAttribute("cy",m),this.fg.setAttribute("cx",v),this.fg.setAttribute("cy",m)}else this[r?"hoursView":"minutesView"].find(".clockpicker-tick").each((function(){var e=n(this);e.toggleClass("active",a===+e.html())}))},_.prototype.done=function(){w(this.options.beforeDone),this.hide();var e=this.input.prop("value"),t=k(this.hours)+":"+k(this.minutes);this.options.twelvehour&&(t+=this.amOrPm),this.input.prop("value",t),t!==e&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),w(this.options.afterDone)},_.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.addon.off("click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(a.off("resize.clockpicker"+this.id),this.popover.remove())},n.fn.clockpicker=function(e){var t=Array.prototype.slice.call(arguments,1);return this.each((function(){var i=n(this),o=i.data("clockpicker");if(o)"function"==typeof o[e]&&o[e].apply(o,t);else{var a=n.extend({},_.DEFAULTS,i.data(),"object"==typeof e&&e);i.data("clockpicker",new _(i,a))}}))}}()},55091:()=>{try{!function(e){"use strict";var t,i,o=e.document,n=e.Image,a=e.globalStorage,s=e.swfobject;try{var r=e.localStorage}catch(e){}try{var c=e.sessionStorage}catch(e){}var h={history:!1,java:!1,tests:10,baseurl:"",lso:!0,silverlight:!1,domain:"",authPath:!1,pngCookieName:"png",pngPath:"/ec/png",etagCookieName:"etg",etagPath:"/ec/etag",cacheCookieName:"cachec",cachePath:"/ec/cache",staticurl:"/static/images/"},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e._evercookie_flash_var=function(e){t=e;var i=o.getElementById("myswf");i&&i.parentNode&&i.parentNode.removeChild(i)},e.evercookie=e.Evercookie=function(p){p=p||{};var u={};for(var d in h){var f=p[d];u[d]=void 0!==f?f:h[d]}"function"==typeof u.domain&&(u.domain=u.domain(e));var v=u.history,k=u.java,m=u.tests,g=u.baseurl,b=u.staticurl,_=u.domain,w=this;this._ec={},this.get=function(e,t,i){w._evercookie(e,t,void 0,void 0,i)},this.set=function(e,t){w._evercookie(e,(function(){}),t)},this._evercookie=function(n,a,s,r,c){if(void 0===w._evercookie&&(w=this),void 0===r&&(r=0),0===r&&(w.evercookie_database_storage(n,s),w.evercookie_indexdb_storage(n,s),w.evercookie_png(n,s),w.evercookie_etag(n,s),w.evercookie_cache(n,s),
u.lso&&w.evercookie_lso(n,s),u.silverlight&&w.evercookie_silverlight(n,s),u.authPath&&w.evercookie_auth(n,s),k&&w.evercookie_java(n,s),w._ec.userData=w.evercookie_userdata(n,s),w._ec.cookieData=w.evercookie_cookie(n,s),w._ec.localData=w.evercookie_local_storage(n,s),w._ec.globalData=w.evercookie_global_storage(n,s),w._ec.sessionData=w.evercookie_session_storage(n,s),w._ec.windowData=w.evercookie_window(n,s),v&&(w._ec.historyData=w.evercookie_history(n,s))),void 0!==s)(void 0===t||void 0===i)&&r++<m&&setTimeout((function(){w._evercookie(n,a,s,r,c)}),300);else if((e.openDatabase&&void 0===w._ec.dbData||("indexedDB"in e||(e.indexedDB=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB))&&(void 0===w._ec.idbData||""===w._ec.idbData)||void 0===t||void 0===w._ec.etagData||void 0===w._ec.cacheData||void 0===w._ec.javaData||o.createElement("canvas").getContext&&(void 0===w._ec.pngData||""===w._ec.pngData)||void 0===i)&&r++<m)setTimeout((function(){w._evercookie(n,a,s,r,c)}),300);else{w._ec.lsoData=w.getFromStr(n,t),t=void 0,w._ec.slData=w.getFromStr(n,i),i=void 0;var h,l,p=w._ec,d=[],f=0;for(l in w._ec={},p)p[l]&&"null"!==p[l]&&"undefined"!==p[l]&&(d[p[l]]=void 0===d[p[l]]?1:d[p[l]]+1);for(l in d)d[l]>f&&(f=d[l],h=l);void 0===h||void 0!==c&&1===c||w.set(n,h),"function"==typeof a&&a(h,p)}},this.evercookie_window=function(t,i){try{if(void 0===i)return this.getFromStr(t,e.name);e.name=function(e,t,i){if(e.indexOf("&"+t+"=")>-1||0===e.indexOf(t+"=")){var o,n=e.indexOf("&"+t+"=");return-1===n&&(n=e.indexOf(t+"=")),-1!==(o=e.indexOf("&",n+1))?e.substr(0,n)+e.substr(o+(n?0:1))+"&"+t+"="+i:e.substr(0,n)+"&"+t+"="+i}return e+"&"+t+"="+i}(e.name,t,i)}catch(e){}},this.evercookie_userdata=function(e,t){try{var i=this.createElem("div","userdata_el",1);if(i.style.behavior="url(#default#userData)",void 0===t)return i.load(e),i.getAttribute(e);i.setAttribute(e,t),i.save(e)}catch(e){}},this.ajax=function(e){var t,i,o,n,a,s;for(t={"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},a=0,s=(o=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}]).length;a<s;a++){n=o[a];try{n=n();break}catch(e){console.error(e)}}for(i in n.onreadystatechange=function(){4===n.readyState&&e.success(n.responseText)},n.open("get",e.url,!0),t)n.setRequestHeader(i,t[i]);try{n.send()}catch(e){console.error(e)}},this.evercookie_cache=function(e,t){if(void 0!==t)o.cookie=u.cacheCookieName+"="+t+"; path=/; domain="+_,w.ajax({url:g+u.cachePath+"?name="+e,success:function(e){}});else{var i=this.getFromStr(u.cacheCookieName,o.cookie);w._ec.cacheData=void 0,o.cookie=u.cacheCookieName+"=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain="+_,w.ajax({url:g+u.cachePath+"?name="+e,success:function(e){o.cookie=u.cacheCookieName+"="+i+"; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain="+_,w._ec.cacheData=e}})}},this.evercookie_auth=function(e,t){var i,o
;void 0!==t?(i="//"+t+"@"+location.host+g+u.authPath+"?name="+e,(o=new n).style.visibility="hidden",o.style.position="absolute",o.src=i):w.ajax({url:g+u.authPath+"?name="+e,success:function(e){w._ec.authData=e}})},this.evercookie_etag=function(e,t){if(void 0!==t)o.cookie=u.etagCookieName+"="+t+"; path=/; domain="+_,w.ajax({url:g+u.etagPath+"?name="+e,success:function(e){}});else{var i=this.getFromStr(u.etagCookieName,o.cookie);w._ec.etagData=void 0,o.cookie=u.etagCookieName+"=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain="+_,w.ajax({url:g+u.etagPath+"?name="+e,success:function(e){o.cookie=u.etagCookieName+"="+i+"; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain="+_,w._ec.etagData=e}})}},this.evercookie_java=function(e,t){var i=o.getElementById("ecAppletContainer");function n(i){var n=o.getElementById(i);void 0!==t?n.set(e,t):w._ec.javaData=n.get(e)}"undefined"!=typeof dtjava&&(null!=i&&i.length||((i=o.createElement("div")).setAttribute("id","ecAppletContainer"),i.style.position="absolute",i.style.top="-3000px",i.style.left="-3000px",i.style.width="1px",i.style.height="1px",o.body.appendChild(i)),"undefined"==typeof ecApplet?dtjava.embed({id:"ecApplet",url:b+"evercookie.jnlp",width:"1px",height:"1px",placeholder:"ecAppletContainer"},{},{onJavascriptReady:n}):n("ecApplet"))},this.evercookie_lso=function(e,t){var i=o.getElementById("swfcontainer"),n={},a={},r={};null!=i&&i.length||((i=o.createElement("div")).setAttribute("id","swfcontainer"),o.body.appendChild(i)),void 0!==t&&(n.everdata=e+"="+t),a.swliveconnect="true",r.id="myswf",r.name="myswf",s.embedSWF(b+"evercookie.swf","swfcontainer","1","1","9.0.0",!1,n,a,r)},this.evercookie_png=function(e,t){var i,a,s,r=o.createElement("canvas");r.style.visibility="hidden",r.style.position="absolute",r.width=200,r.height=1,r&&r.getContext&&((i=new n).style.visibility="hidden",i.style.position="absolute",void 0!==t?o.cookie=u.pngCookieName+"="+t+"; path=/; domain="+_:(w._ec.pngData=void 0,a=r.getContext("2d"),s=this.getFromStr(u.pngCookieName,o.cookie),o.cookie=u.pngCookieName+"=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain="+_,i.onload=function(){o.cookie=u.pngCookieName+"="+s+"; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain="+_,w._ec.pngData="",a.drawImage(i,0,0);var e,t,n=a.getImageData(0,0,200,1).data;for(e=0,t=n.length;e<t&&0!==n[e]&&(w._ec.pngData+=String.fromCharCode(n[e]),0!==n[e+1])&&(w._ec.pngData+=String.fromCharCode(n[e+1]),0!==n[e+2]);e+=4)w._ec.pngData+=String.fromCharCode(n[e+2])}),i.src=g+u.pngPath+"?name="+e)},this.evercookie_local_storage=function(e,t){try{if(r){if(void 0===t)return r.getItem(e);r.setItem(e,t)}}catch(e){}},this.evercookie_database_storage=function(t,i){try{if(e.openDatabase){var o=e.openDatabase("sqlite_evercookie","","evercookie",1048576);void 0!==i?o.transaction((function(e){e.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))",[],(function(e,t){}),(function(e,t){})),
e.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)",[t,i],(function(e,t){}),(function(e,t){}))})):o.transaction((function(e){e.executeSql("SELECT value FROM cache WHERE name=?",[t],(function(e,t){t.rows.length>=1?w._ec.dbData=t.rows.item(0).value:w._ec.dbData=""}),(function(e,t){}))}))}}catch(e){}},this.evercookie_indexdb_storage=function(t,i){try{if("indexedDB"in e||(indexedDB=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB,IDBTransaction=e.IDBTransaction||e.webkitIDBTransaction||e.msIDBTransaction,IDBKeyRange=e.IDBKeyRange||e.webkitIDBKeyRange||e.msIDBKeyRange),indexedDB){var o=indexedDB.open("idb_evercookie",1);o.onerror=function(e){},o.onupgradeneeded=function(e){e.target.result.createObjectStore("evercookie",{keyPath:"name",unique:!1})},o.onsuccess=void 0!==i?function(e){var o=e.target.result;if(o.objectStoreNames.contains("evercookie"))o.transaction(["evercookie"],"readwrite").objectStore("evercookie").put({name:t,value:i});o.close()}:function(e){var i=e.target.result;if(i.objectStoreNames.contains("evercookie")){var o=i.transaction(["evercookie"]).objectStore("evercookie").get(t);o.onsuccess=function(e){void 0===o.result?w._ec.idbData=void 0:w._ec.idbData=o.result.value}}else w._ec.idbData=void 0;i.close()}}}catch(e){}},this.evercookie_session_storage=function(e,t){try{if(c){if(void 0===t)return c.getItem(e);c.setItem(e,t)}}catch(e){}},this.evercookie_global_storage=function(e,t){if(a){var i=this.getHost();try{if(void 0===t)return a[i][e];a[i][e]=t}catch(e){}}},this.evercookie_silverlight=function(e,t){var i,n="";void 0!==t&&(n='<param name="initParams" value="'+e+"="+t+'" />'),i='<object style="position:absolute;left:-500px;top:-500px" data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="mysilverlight" width="0" height="0">'+n+'<param name="source" value="'+(b+"evercookie.xap")+'"/><param name="onLoad" value="onSilverlightLoad"/><param name="onError" value="onSilverlightError"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="minRuntimeVersion" value="4.0.50401.0"/><param name="autoUpgrade" value="false"/><a href="http://go.microsoft.com/fwlink/?LinkID=149156&v=4.0.50401.0" style="display:none">Get Microsoft Silverlight</a></object>';try{o.body.appendChild(i)}catch(e){}},this.encode=function(e){var t,i,o,n,a,s,r,c="",h=0;for(e=this._utf8_encode(e);h<e.length;)n=(t=e.charCodeAt(h++))>>2,a=(3&t)<<4|(i=e.charCodeAt(h++))>>4,s=(15&i)<<2|(o=e.charCodeAt(h++))>>6,r=63&o,isNaN(i)?s=r=64:isNaN(o)&&(r=64),c=c+l.charAt(n)+l.charAt(a)+l.charAt(s)+l.charAt(r);return c},this.decode=function(e){var t,i,o,n,a,s,r="",c=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<e.length;)t=l.indexOf(e.charAt(c++))<<2|(n=l.indexOf(e.charAt(c++)))>>4,i=(15&n)<<4|(a=l.indexOf(e.charAt(c++)))>>2,o=(3&a)<<6|(s=l.indexOf(e.charAt(c++))),r+=String.fromCharCode(t),64!==a&&(r+=String.fromCharCode(i)),64!==s&&(r+=String.fromCharCode(o));return r=this._utf8_decode(r)},this._utf8_encode=function(e){
for(var t,i="",o=0,n=(e=e.replace(/\r\n/g,"\n")).length;o<n;o++)(t=e.charCodeAt(o))<128?i+=String.fromCharCode(t):t>127&&t<2048?(i+=String.fromCharCode(t>>6|192),i+=String.fromCharCode(63&t|128)):(i+=String.fromCharCode(t>>12|224),i+=String.fromCharCode(t>>6&63|128),i+=String.fromCharCode(63&t|128));return i},this._utf8_decode=function(e){for(var t="",i=0,o=e.length,n=0,a=0,s=0;i<o;)(n=e.charCodeAt(i))<128?(t+=String.fromCharCode(n),i+=1):n>191&&n<224?(a=e.charCodeAt(i+1),t+=String.fromCharCode((31&n)<<6|63&a),i+=2):(a=e.charCodeAt(i+1),s=e.charCodeAt(i+2),t+=String.fromCharCode((15&n)<<12|(63&a)<<6|63&s),i+=3);return t},this.evercookie_history=function(e,t){var i,o,n=(l+"-").split(""),a="http://www.google.com/evercookie/cache/"+this.getHost()+"/"+e,s="",r="",c=1;if(void 0!==t){if(this.hasVisited(a))return;for(this.createIframe(a,"if"),a+="/",o=this.encode(t).split(""),i=0;i<o.length;i++)a+=o[i],this.createIframe(a,"if"+i);a+="-",this.createIframe(a,"if_")}else if(this.hasVisited(a)){for(a+="/";"-"!==s&&1===c;)for(c=0,i=0;i<n.length;i++)if(this.hasVisited(a+n[i])){"-"!==(s=n[i])&&(r+=s),a+=s,c=1;break}return this.decode(r)}},this.createElem=function(e,t,i){var n;return(n=void 0!==t&&o.getElementById(t)?o.getElementById(t):o.createElement(e)).style.visibility="hidden",n.style.position="absolute",t&&n.setAttribute("id",t),i&&o.body.appendChild(n),n},this.createIframe=function(e,t){var i=this.createElem("iframe",t,1);return i.setAttribute("src",e),i};var y=this.waitForSwf=function(e){void 0===e?e=0:e++,e<m&&void 0===s&&setTimeout((function(){y(e)}),300)};this.evercookie_cookie=function(e,t){if(void 0===t)return this.getFromStr(e,o.cookie);o.cookie=e+"=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain="+_,o.cookie=e+"="+t+"; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain="+_},this.getFromStr=function(e,t){if("string"==typeof t){var i,o,n=e+"=",a=t.split(/[;&]/);for(i=0;i<a.length;i++){for(o=a[i];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(n))return o.substring(n.length,o.length)}}},this.getHost=function(){return e.location.host.replace(/:\d+/,"")},this.toHex=function(e){for(var t,i="",o=e.length,n=0;n<o;){for(t=e.charCodeAt(n++).toString(16);t.length<2;)t="0"+t;i+=t}return i},this.fromHex=function(e){for(var t,i="",o=e.length;o>=0;)t=o-2,i=String.fromCharCode("0x"+e.substring(t,o))+i,o=t;return i},this.hasVisited=function(e){-1===this.no_color&&(-1===this._getRGB("http://samy-was-here-this-should-never-be-visited.com",-1)&&(this.no_color=this._getRGB("http://samy-was-here-"+Math.floor(9999999*Math.random())+"rand.com")));return 0===e.indexOf("https:")||0===e.indexOf("http:")?this._testURL(e,this.no_color):this._testURL("http://"+e,this.no_color)||this._testURL("https://"+e,this.no_color)||this._testURL("http://www."+e,this.no_color)||this._testURL("https://www."+e,this.no_color)};var C,x,T=this.createElem("a","_ec_rgb_link"),A="#_ec_rgb_link:visited{display:none;color:#FF0000}";try{C=1,
(x=o.createElement("style")).styleSheet?x.styleSheet.innerHTML=A:x.innerHTML?x.innerHTML=A:x.appendChild(o.createTextNode(A))}catch(e){C=0}this._getRGB=function(e,t){return t&&0===C?-1:(T.href=e,T.innerHTML=e,o.body.appendChild(x),o.body.appendChild(T),o.defaultView?o.defaultView.getComputedStyle(T,null).getPropertyValue("color"):T.currentStyle.color)},this._testURL=function(e,t){var i=this._getRGB(e);return"rgb(255, 0, 0)"===i||"#ff0000"===i||t&&i!==t?1:0}}}(window)}catch(e){}},60947:()=>{"use strict";var e,t,i,o,n,a;window.parent!==window&&window.CanvasRenderingContext2D&&window.TextMetrics&&(t=window.CanvasRenderingContext2D.prototype)&&t.hasOwnProperty("font")&&t.hasOwnProperty("mozTextStyle")&&"function"==typeof t.__lookupSetter__&&(i=t.__lookupSetter__("font"))&&(t.__defineSetter__("font",(function(e){try{return i.call(this,e)}catch(e){if("NS_ERROR_FAILURE"!==e.name)throw e}})),o=t.measureText,e=function(){this.width=0,this.isFake=!0,this.__proto__=window.TextMetrics.prototype},t.measureText=function(t){try{return o.apply(this,arguments)}catch(t){if("NS_ERROR_FAILURE"!==t.name)throw t;return new e}},n=t.fillText,t.fillText=function(e,t,i,o){try{n.apply(this,arguments)}catch(e){if("NS_ERROR_FAILURE"!==e.name)throw e}},a=t.strokeText,t.strokeText=function(e,t,i,o){try{a.apply(this,arguments)}catch(e){if("NS_ERROR_FAILURE"!==e.name)throw e}})}}]);