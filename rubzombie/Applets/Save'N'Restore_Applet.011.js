javascript:/*** CB app/bot data Save'n'restore bookmarklet v2.010 ***/window.__nativeST__=window.__nativeST__||window.setTimeout;window.__nativeSI__=window.__nativeSI__||window.setInterval;window.setTimeout=function(a,k){var g=this,u=Array.prototype.slice.call(arguments,2);return window.__nativeST__(a instanceof Function?function(){a.apply(g,u)}:a,k)};window.setInterval=function(a,k){var g=this,u=Array.prototype.slice.call(arguments,2);return window.__nativeSI__(a instanceof Function?function(){a.apply(g,u)}:a,k)}; (function(a,k,g,u){function f(b,c){c=c||0;b[c++](function(b,c){return function(){c<b.length&&a.setTimeout(function(){f(b,c)},1)}}(b,c))}a.CBS={version:"CBS::v2::CB app/bot data Save/restore::20171104.011::Release"};g=g||"1";u=u||function(a,b,c,d,g){setTimeout(g,1E4,a,b,c,d)};var b=k.getElementById("CBSv2Overlay"),n=[],c,q=!1,d,p=!1,E,w;/(github|camgasm|chaturbate)\.(io|com)$/i.test(k.location.hostname)?b||f([function(a){var c="<style>.CBSv2-no-overflow {overflow:hidden!important;outline:0;}${visibility:visible;position:fixed;top:0;right:0;left:0;bottom:0;overflow-y:auto;padding:0;z-index:10;background-color:rgba(0,0,0,0.05);}$ div {visibility:visible;width:300px;margin:100px auto;background-color:#fff;border:1px solid #000;padding:15px;text-align:center;}</style>".replace(/\$/g, "#CBSv2Overlay");b=k.createElement("div");b.setAttribute("id","CBSv2Overlay");b.style.display="block";b.innerHTML=c+"<div>Starting...</div>";k.body.appendChild(b);k.body.classList.add("CBSv2-no-overflow");n.push(b);setTimeout(function(){a()},1E3)},function(d){(c=a.jQuery)&&g<=c.fn.jquery?d():(b=k.createElement("script"),b.type="text/javascript",b.src="//ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js",b.onload=b.onreadystatechange=function(){w=this.readyState;q||w&&"loaded"!==w&&"complete"!== w||((c=a.jQuery).noConflict(q=!0),b.onload=b.onreadystatechange=null,d())},k.documentElement.childNodes[0].appendChild(b))},function(a){[["//cdn.jsdelivr.net/alertifyjs/1.4.1/css/alertify.min.css","alertify-notifier ajs-left","left","10px"],["//cdn.jsdelivr.net/alertifyjs/1.4.1/css/themes/default.min.css"],["//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css","fa","font-family","FontAwesome"]].forEach(function(a){(function(a,b,d,g){b=c("<div>").hide().css({height:0,width:0}).addClass(b|| "").appendTo("body");d=b.css(d||"")===g;b.remove();return c('link[rel="stylesheet"][href$="'+a.match(/(?:\/)[^\/]+$/)+'"]').length&&d}).apply(null,a)||(b=k.createElement("link"),b.setAttribute("rel","stylesheet"),b.setAttribute("href",a[0]),k.head.appendChild(b))});a()},function(c){(d=a.alertify)&&d.dialog?c():(b=k.createElement("script"),b.src="//cdn.jsdelivr.net/alertifyjs/1.4.1/alertify.min.js",b.onload=b.onreadystatechange=function(){w=this.readyState;p||w&&"loaded"!==w&&"complete"!==w||(E=a.alertify, a.alertify=d,d=E,p=!0,b.onload=b.onreadystatechange=null,c())},k.documentElement.childNodes[0].appendChild(b))},function(a){setTimeout(function(){var a=k.querySelector("#CBSv2Overlay div");a&&(a.style.visibility="hidden")},3E3);a()},function(a){u(c,q,d,p,a)},function(a){p&&setTimeout(function(){Array.prototype.slice.call(k.querySelectorAll('div[class*="alertify-"],div[class*="ajs-"]')).forEach(function(a){a.parentElement.removeChild(a)})},2E3);a()},function(a){n.forEach(function(a){a.parentNode.removeChild(a)}); k.body.classList.remove("CBSv2-no-overflow");a()}]):a.alert("*chaturbate.com, *.camgasm.com and github.io only bookmarklet")})(window,document,"1.6.4",function(a,k,g,u,f){function b(){return window.ws_handler&&window.ws_handler.connected||window.websocket_handler&&window.websocket_handler.connected||window.flash_handler&&window.flash_handler.connected||window.html_handler&&window.html_handler.connected}function n(e){v.empty().append(P,a("<p>"+e+"</p>"));z&&z.isOpen()&&z.setContent(v[0]).set("closable", !0)}function c(){z&&z.isOpen()&&z.close().set("closable",!0)}function q(a){g.success(a).callback=c}function d(a){g.error(a).callback=c}function p(e){var b=L[window.CBSv2_ping.split("/").length],l;window.$message_sender.confirmed_send=!0;void 0!==(l=window.flash_handler)&&l.connected?(l.consolelog("User is sending message: "+e),e=a.toJSON({m:e,c:"",f:""}),l.consolelog(e),window.GetFlashObject("movie").SendRoomMsg(e)):void 0!==(l=window.html_handler)&&l.connected?(l.consolelog("User is sending message: "+ e),e=a.toJSON({m:e,c:"",f:""}),l.consolelog(e),a.ajax({url:l.post_address,dataType:"json",data:{room:l.room_owner_nick,message:e,username:l.user},type:"POST",success:function(a){if(""!==a&&a["X-Spam"])l.message_inbound.on_room_message(l.user,e)}})):void 0!==(l=window.websocket_handler)&&l.connected?l.connection.send(JSON.stringify({action:"msg",msg:e})):void 0!==(l=window.ws_handler)&&l.connected?(l.consolelog("User is sending message: "+e),e=a.toJSON({m:e,c:"",f:""}),l.consolelog(e),l.SendRoomMsg(e)): window.CBSv2_autosave_interval?m.enm():n(b+" Failed. Chat may be disconnected.")}function E(){var e=a('.stop_link[name="/app/stop/'+this.idx+'/"]');this[this.idx]=e.length?e[0].parentNode.previousElementSibling.innerHTML.trim():"";this[this.idx].length&&b()?(window.CBSv2_ping=["","#"+this.idx+"CBSv2",G,""].join("/"),p(window.CBSv2_ping),A=setTimeout.call(this,function(){this[this.idx]="";this.enm()},5E3)):this.enm()}function w(){var a=L[window.CBSv2_ping.split("/").length];A=null;window.CBSv2_autosave_interval? m.enm():n(a+" Failed. Chat may be unresponsive.")}function J(a,b){b=b||0;var e=y.slice(b,b+512);window.CBSv2_ping=["","#"+a+"CBSv2",G,b,e,e.length,""].join("/");p(window.CBSv2_ping);A=setTimeout(w,5E3)}function K(a,b){window.CBSv2_ping=["","#"+a+"CBSv2",G,b||0,""].join("/");p([window.CBSv2_ping,""].join("/"));A=setTimeout(w,5E3)}function U(){this[this.idx].length&&b()&&window.CBSv2_autosave_interval?K(this.idx):this.enm()}function x(e){function b(){x.a?--x.b?setTimeout(b,1E3):e.call(this):e.call(this)} window.CBSv2_autosave_interval?x.a?e&&(x.b=5,setTimeout(b,1E3)):(x.a=!0,a("#CBSv2Overlay").length||m.enm(E,function(){G=(new Date).valueOf();m.enm(U,function(){x.a=!1;e&&e.call(this)})})):e&&e.call(this)}function O(){var a,b;r=[];for(b=0;b<t.length;b++){for(a=t.key(b).split("/");4<a.length;)a[1]=[a[1]].concat(a.splice(2,1)).join("/");4===a.length&&"CBSv2"===a[0]&&r.push(a.concat(t.key(b),[a[1],(new Date(parseInt(a[3],10))).toLocaleString(),B[parseInt(a[2],10)]].join(" ")))}}function V(a,b,l,d,h,M, C){a=parseInt(b[1],10);h?J(a,parseInt(d,10)+parseInt(C,10)):c()}function W(a){document.body.removeChild(a.target)}function X(a){var b=document.createElement("input");b.type="file";b.onchange=function(b){var e=b.target.files[0],h=new window.FileReader;h.onload=function(b){b=JSON.parse(b.target.result);for(var h=(b.key||"").split("/");4<h.length;)h[1]=[h[1]].concat(h.splice(2,1)).join("/");4===h.length&&"CBSv2"===h[0]&&h[1]===m[a]?(y=b.value,J(a)):alert('"'+e.name+'" does not contain "'+m[a]+'" save data.')}; h.readAsText(e,"UTF-8");b.target.parentNode&&b.target.parentNode.removeChild(b.target)};null===window.webkitURL&&(b.style.display="none",document.body.appendChild(b));b.click()}function Y(a,b,l,g,h){function e(){var a=["CBSv2",m[D],D,l].join("/");if("false"!==t.CBSv2_use_local_storage)t[a]=y,window.CBSv2_autosave_interval?m.enm():q("Saved.");else{var b=new window.Blob([JSON.stringify({key:a,value:y})],{type:"application/json"}),e=document.createElement("a");e.download=a.split("/").slice(0,-1).join("_")+ ".json";e.innerHTML="Download File";null!==window.webkitURL?e.href=window.webkitURL.createObjectURL(b):(e.href=window.URL.createObjectURL(b),e.onclick=W,e.style.display="none",document.body.appendChild(e));e.click();c()}}function C(){t.removeItem(r[f][4]);e()}var D=parseInt(b[1],10),f=-1;y="0"===g?h:y+h;if(h)K(D,y.length);else if(y.length)if("false"!==t.CBSv2_use_local_storage){window.CBSv2_autosave_interval&&O();for(a=0;a<r.length;a++)if(b[1]===r[a][2]&&m[D]===r[a][1]){f=a;break}-1<f?window.CBSv2_autosave_interval? C():F("Confirm Overwrite...",'Overwrite existing "'+r[f][5]+'" saved data?',C,function(){d("Overwrite cancelled.")}):e()}else e();else window.CBSv2_autosave_interval?m.enm():n('No Data. "'+m[D]+'" did not respond with data to save.')}function H(a){A&&(clearTimeout(A),A=null);var b=L[window.CBSv2_ping.split("/").length];a=a.split("/");var e=parseInt(a[1][1],10);""===a[a.length-1]?4===a.length?(m[e]="",m.enm()):n(b+' Failed. "'+m[e]+'" did not respond to "'+b+'" command.'):4===a.length?m.enm():6=== a.length?Y.apply(this,a):7===a.length?V.apply(this,a):window.CBSv2_autosave_interval?m.enm():n(b+' Aborted. "'+m[e]+'" gave an unknown response to "'+b+'" command.')}function Z(a){function b(){d("Delete ALL cancelled.")}var e;z.set("closable",!1);a.html("Processing...");switch(a.attr("class")){case "da":F("Confirm Delete ALL...","Delete ALL saved data?",function(){F("Confirm Confirm Delete ALL...","Are you really sure you want to Delete ALL saved data?",function(){for(e=0;e<r.length;e++)t.removeItem(r[e][4]); q("ALL Deleted.")},b)},b);break;case "ld":y=t[r[a.data("i")][4]];J(B.indexOf(a.data("s")));break;case "lf":X(B.indexOf(a.data("s")));c();break;case "rm":F("Confirm Delete...",'Delete "'+r[a.data("i")][5]+'" saved data?',function(){t.removeItem(a.data("k"));q("Deleted.")},function(){d("Delete cancelled.")});break;case "sv":K(B.indexOf(a.data("s")))}}function I(a,b){function e(a,b){var e=b.split("."),h,c=e.length;for(h=0;h<c;h++){if(void 0===a||!a.hasOwnProperty(e[h]))return null;a=a[e[h]]}return a} var c=a.split("."),h=c[c.length-1],d=e(window,c[0]);c=e(window,c.slice(0,-1).join("."));if(d&&c&&c.hasOwnProperty(h)&&"function"===typeof c[h]){var g=c[h].CBS_orig;"function"!==typeof g&&(g=c[h]);c[h]=b;c[h].CBS_orig=g;c[h].CBS_root=d}}function N(){a(".stop_link").unbind("click").click(function(){var b=this;x(function(){a.ajax({url:a(b).attr("name"),dataType:"text",data:"",type:"POST",success:function(){a.mydefchatconn("app_tab_refresh")}})})})}function R(a){return'<i class="'+a+'" style="vertical-align:middle; margin-right:20px;"></i>'} var z,v=a("<div class=CBSv2_buttons></div>"),P=a("<style>.$_buttons{margin:0 auto;padding:10px 20px;}.$_buttons button{display:block;width:100%;margin:5px 0;}.$_buttons input[type=checkbox][disabled] + label{color: #ccc;}</style>".replace(/\$/g,"CBSv2")),B=["Active App","Bot #1","Bot #2","Bot #3"],m=["","","",""],L={4:"Query",6:"Save",7:"Restore"},t=window.localStorage,r,y,A=null,S=/^\/#[0-3]CBSv2\//;window.CBSv2_autosave_interval=window.CBSv2_autosave_interval||null;window.CBSv2_autosave_interval&& window.clearInterval(window.CBSv2_autosave_interval);window.CBSv2_ping=window.CBSv2_ping||null;Array.prototype.enm=Array.prototype.enm||function(a,b){this.idx=++this.idx||0;arguments.length&&(this.fn=a||null,this.cb=b||null);this.idx<this.length?this.fn&&this.fn.call(this):(delete this.idx,this.cb&&this.cb.call(this))};g.set("notifier","delay",3);I("flash_handler.message_inbound.on_room_message",function Q(b,c){var h=Q.CBS_root,d=unescape(c);try{var g=a.parseJSON(d)}catch(D){g={m:d}}d=h.striphtml(g.m).replace(/\s*/g, "");return 0===d.indexOf(window.CBSv2_ping)?(h.sanitize(b)===h.room&&H(d),!0):Q.CBS_orig.call(this,b,c)});I("html_handler.message_inbound.on_room_message",function M(a,b,h){var c=M.CBS_root,d=c.striphtml(b.m).replace(/\s*/g,"");return 0===d.indexOf(window.CBSv2_ping)?((c.sanitize(a)||c.sanitize(b.user))===c.room&&H(d),!0):S.test(d)?!0:M.CBS_orig.call(this,a,b,h)});I("websocket_handler.message_inbound.on_room_message",function h(a){if(void 0===a.m)return!0;var b=h.CBS_root,c=b.striphtml(a.m).replace(/\s*/g, "");return 0===c.indexOf(window.CBSv2_ping)?(b.sanitize(a.user)===b.room&&H(c),!0):S.test(c)?!0:h.CBS_orig.call(this,a)});I("ws_handler.message_inbound.on_room_message",function C(b,c){var h=C.CBS_root,d=c;try{var g=a.parseJSON(d)}catch(aa){g={m:d}}d=h.striphtml(g.m).replace(/\s*/g,"");return 0===d.indexOf(window.CBSv2_ping)?(h.sanitize(b)===h.room&&H(d),!0):C.CBS_orig.call(this,b,c)});b()&&(a('.info-user a[data-tab="apps_and_bots"]').unbind("click").click(function(){var b=a(".info-user div.apps_and_bots"), c=a(".info-user .buttons a[data-tab='apps_and_bots']").attr("href");b.show();b.html(window.gettext("loading . . ."));N?b.load(c,N):b.load(c)}),N());if(!F){g.dialog("CBSv2Confirm",function(){return{build:function(){this.setting("defaultFocus","cancel")},prepare:function(){this.setHeader("<span style=\"color:#dc5500; font-family: 'UbuntuBold', Arial, Helvetica, sans-serif;\">"+R("fa fa-exclamation-triangle fa-2x")+"CBSv2: "+this.get("title")+"</span>")}}},!0,"confirm");var F=g.CBSv2Confirm}if(!T){g.dialog("CBSv2Alert", function(){return{build:function(){this.setHeader("<span style=\"color:#dc5500; font-family: 'UbuntuBold', Arial, Helvetica, sans-serif;\">"+R("fa fa-cog fa-2x")+"CBSv2: CB app/bot data Save'n'restore bookmarklet v2</span>")},setup:function(){return{buttons:[{text:"Close",key:27}],focus:{element:0},options:{maximizable:!1,resizable:!1,padding:!1}}},prepare:function(){var b=a(".CBSv2_buttons button");"false"!==t.CBSv2_use_local_storage?b.filter(".lf").hide():(a("#CBSv2_as").prop("disabled",!0),b.filter(".ld, .rm, .da").hide()); a('.chat-box ul.buttons li a[data-tab="autosave"]').length&&b.filter(".sv, .ld, .lf").prop("disabled",!0);b.click(function(c){c.preventDefault();b.prop("disabled",!0);Z(a(this))});a("#CBSv2_ls").change(function(){var c=a('.chat-box ul.buttons li a[data-tab="autosave"]').length;t.CBSv2_use_local_storage=a(this).is(":checked");"false"!==t.CBSv2_use_local_storage?(a("#CBSv2_as").prop("disabled",!1),b.filter(".ld").prop("disabled",c),b.filter(".ld, .rm, .da").show(),b.filter(".lf").hide()):(a("#CBSv2_as").prop("disabled", !0),b.filter(".ld, .rm, .da").hide(),b.filter(".lf").prop("disabled",c),b.filter(".lf").show(),a("#CBSv2_as").removeProp("checked").change())});a("#CBSv2_as").change(function(){a(this).is(":checked")?(a('.chat-box ul.buttons li a[data-tab="settings"]').parent().before(a("<li></li>").html('<a href="#" data-tab="autosave" class="nooverlay">AutoSave</a>')),b.filter(".sv, .ld, .lf").prop("disabled",!0)):(a('.chat-box ul.buttons li a[data-tab="autosave"]').parent().remove(),b.filter(".sv, .ld, .lf").prop("disabled", !1))})},hooks:{onclose:function(){a('.chat-box ul.buttons li a[data-tab="autosave"]').length?(window.CBSv2_autosave_interval=setInterval(x,18E4),setTimeout(x,6E3)):window.CBSv2_autosave_interval=null;a(".CBSv2_buttons").remove();f()}}}},null,"alert");var T=g.CBSv2Alert}var G=(new Date).valueOf();m.enm(E,function(){var c;var d=m.some(function(a){return a});var g=b();v.append(P);O();if(r.length||d&&g){for(c=0;c<m.length;c++)if(m[c]&&g){var f=a('<button data-s="^" data-a="$" class="sv">Save ^ "$" data</button>'.replace(/\^/g, B[c]).replace(/\$/g,m[c]));v.append(f);f=a('<button data-s="^" data-a="$" class="lf">Restore ^ "$" saved data from file</button>'.replace(/\^/g,B[c]).replace(/\$/g,m[c]));v.append(f);for(d=0;d<r.length;d++)if(m[c]===r[d][1]){var k=r[d][4];f=a(('<button data-s="^" data-i="'+d+'" data-k="'+k+'" class="ld">Restore "'+r[d][5]+'" saved data into ^</button>').replace(/\^/g,B[c]));v.append(f)}}for(d=0;d<r.length;d++)f=a('<button data-i="'+d+'" data-k="'+k+'" class="rm">Delete "'+r[d][5]+'" saved data</button>'), v.append(f);1<r.length&&(f=a('<button class="da">Delete ALL saved data</button>'),v.append(f));f=a('<input type="checkbox" id="CBSv2_ls"><label for="CBSv2_ls">Use browser Local Storage</label>');"false"!==t.CBSv2_use_local_storage&&f.prop("checked",!0);v.append(f);g&&(f=a('<input type="checkbox" id="CBSv2_as"><label for="CBSv2_as">AutoSave</label>'),a('.chat-box ul.buttons li a[data-tab="autosave"]').length&&f.prop("checked",!0),v.append(f))}else v.append(a("<p>Nothing to do!</p>"));z=T(v[0])})});
