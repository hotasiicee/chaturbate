// https://pt.chaturbate.com/apps/user_uploads/1/rubzombie/
// https://pt.chaturbate.com/apps/sourcecode/a-a-q-s/?version=&slot=1

// startof CBSv2 module - not for re-compilation
(function(a,k){function g(a){this.message=a}g.prototype=Error();g.prototype.name="InvalidCharacterError";a.btoa||(a.btoa=function(a){a=String(a);for(var f,b,n=0,c=k,q="";a.charAt(n|0)||(c="=",n%1);q+=c.charAt(63&f>>8-n%1*8)){b=a.charCodeAt(n+=.75);if(255<b)throw new g('"btoa" failed: The string to be encoded contains characters outside of the Latin1 range.');f=f<<8|b}return q});a.atob||(a.atob=function(a){a=String(a).replace(/=+$/,"");if(1==a.length%4)throw new g('"atob" failed: The string to be decoded is not correctly encoded.');
for(var f=0,b,n,c=0,q="";n=a.charAt(c++);~n&&(b=f%4?64*b+n:n,f++%4)?q+=String.fromCharCode(255&b>>(-2*f&6)):0)n=k.indexOf(n);return q})})("undefined"===typeof exports?this:exports,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
(function(a){var k=cb.onMessage,g=null,u=null,f,b="#"+(cb.settings.hasOwnProperty("slot")?cb.settings.slot:"")+"CBSv2",n=/^\/#[0-3]CBSv2\//;cb.log("CBS::v2::CB app/bot data Save/restore::20170923.009::Release");cb.onMessage=function(c){if("function"!==typeof c)throw new TypeError(c+" is not a function");k(function(k){var d=k.m.replace(/\s*/g,"").split("/");if(3<d.length&&""===d[0]&&d[1]===b){if(g&&u&&k.user===cb.room_slug){var p=d[2];if(4===d.length)d[3]="?",k.m=d.join("/");else if(6===d.length){if(!(f||
{}).hasOwnProperty(p)){var q=g();f={};f[p]=a.btoa(a.unescape(a.encodeURIComponent(q)));q||cb.log("onSave returned no data.")}f.hasOwnProperty(p)&&(q=parseInt(d[3],10),p=f[p].slice(q,q+512),d[4]=p,d[5]=p.length,k.m=d.join("/"))}else 7===d.length&&("0"===d[3]&&(f={},f[p]=""),f.hasOwnProperty(p)&&(d[3]=f[p].length,d[6]=d[4].length,k.m=d.join("/"),d[4]?f[p]+=d[4]:(q=a.decodeURIComponent(a.escape(a.atob(f[p]))),u(q),cb.chatNotice("Previously Saved Data Restored.",cb.room_slug))))}k["X-Spam"]=!0}else n.test(k.m)&&
(k["X-Spam"]=!0);return c(k)});return c};cb.onRestore=function(a){if("function"!==typeof a)throw new TypeError(a+" is not a function");return u=a};cb.onSave=function(a){if("function"!==typeof a)throw new TypeError(a+" is not a function");return g=a};cb.onMessage(function(a){return a})})("undefined"===typeof exports?this:exports);
// endof CBSv2 module - not for re-compilation
function p(b,m,k,h){var e,d=arguments.length-4;if(1<d&&-1<Array.prototype.slice.call(arguments).indexOf(h,4))for(e=0;e<d;e++)this["choice"+(e+1)]=arguments[e+4];else for(d++,e=0;e<d;e++)this["choice"+(e+1)]=arguments[e+3];this.defaultValue=h;this.label=b;this.name=m;null===k||k||(this.required=!!k);this.type="choice"}
var r=function(b){var m=this,k=b.settings,h="",e=!1,d={f:!1,slot:k.hasOwnProperty("slot")?"#"+k.slot:null,b:function(){return"#0"===d.slot?"app":"bot"},a:function a(c){if(c&&"string"===typeof c){a.hasOwnProperty("log")||(a.log=[]);var g=/(..)(:..)(:..)/.exec(new Date),f=g[1]%12||12;a.log.push((10>f?"0"+f:f)+g[2]+g[3]+" "+(12>g[1]?"A":"P")+"M : "+c);25<a.log.length&&a.log.shift();c=("aaqs: "+c).replace(/\+/g,"\uff0b").replace(/&/g,encodeURIComponent("&"))}a.hasOwnProperty("log")||b.log(c.replace(/(\r\n|\n|\r|\\n)/gm,
" ").trim())},chatNotice:function(a){var c=Array.prototype.slice.call(arguments),g,f=0,d;if(Array.isArray&&Array.isArray(a)||a instanceof Array)a=a.join("\n"+h);a&&"string"===typeof a&&("Enable"===k.multi_line_safe&&(g=a.split(/ *\n */),f=g.length,a=g[0]),c[0]=(h+a.replace(/\+/g,"\uff0b")).replace(/&/g,encodeURIComponent("&")));b.chatNotice.apply(b,c);for(d=1;d<f;d++)c[0]=g[d].replace(/\+/g,"\uff0b").replace(/&/g,encodeURIComponent("&")),b.chatNotice.apply(b,c)},c:function(a,c){var b=Array.prototype.slice.call(arguments);
if(Array.isArray&&Array.isArray(a)||a instanceof Array)a=a.join("\n"+h+"");c&&"string"===typeof c&&c.length&&(b[0]=""+a,void 0!==b[2]&&void 0===b[3]&&(b[3]=b[2],b[2]="#a2a9ad"),d.chatNotice.apply(m,b))},h:function(a,c){b.setTimeout(a,1E3>c?1E3:c)},i:function(a){var c=k[a]||"",g=/[\u0081-\u00ff]{1,}\u0080[\u0081-\u00ff]{1,}/g;null!==c.match(g)&&(d.c(["Message from the author:\n"+(d.f?"":"\u00a0\u00a0Thanks for using my "+d.b()+" :)\n")+"\u00a0\u00a0It "+(e?"also ":"")+'looks like you used a special character in your "'+
a.replace(/_/g," ")+'" setting\n\u00a0\u00a0that the '+d.b()+" system may have corrupted :(\n\u00a0\u00a0Please see the "+d.b()+" Description for more details and help.","End of Message"],b.room_slug,"#fdf2f9"),c=c.replace(g,""),e=d.f=!0);return c},g:function(a){h=(a||h).replace(/\s*:\s*$/,"");h.length&&(h+=": ")}},q=b.onMessage;b.onMessage=function(a){if("function"!==typeof a)throw new TypeError(a+" is not a function");q(function(c){var g=c.m,f=c.user,e="rubzombie"===f,h=f===b.room_slug,k=RegExp("\\/(aaqs|#[0-3])?((?:log))(?:\\s+([^\\/]+))?",
"ig"),m,n;if(!c["X-Spam"]&&/^\s*\//.test(g))for(;null!==(m=k.exec(g));)if(n=(m[1]||"aaqs").toLowerCase(),"aaqs"===n||n===d.slot)if(c["X-Cmd"]=!0,c.hasOwnProperty("X-Cmd-NA")&&delete c["X-Cmd-NA"],n=m[2].toLowerCase(),h||e)switch(n){case "log":(h||e)&&d.a.hasOwnProperty("log")&&d.c("Log:\n\u00a0\u00a0"+d.a.log.join("\n\u00a0\u00a0"),f,"#ff99ff")}else c["X-Cmd-NA"]="Sorry, /"+(m[1]||"")+m[2]+" is a broadcaster-only command.";return a(c)});return a};b.onMessage(function(a){return a});d.g(k.aaqs_notice_label);
return d}(cb);
(function(b){function m(b,a,c){return c.indexOf(b)===a}function k(l){var a="Yes"===e["public"]?"":l.user;l["X-Spam"]||l.is_mod||!(l.user!==b.room_slug||e.hasOwnProperty("slot")&&0===e.slot)||d.forEach(function(c,d){c.test(l.m)&&b.sendNotice(l.m.replace(c,function(){var a,c=h[d];for(a=arguments.length-3;0<a;a--)c=c.replace(new RegExp("\\$"+a,"g"),(arguments[a]||"").toLowerCase());return c}).trim(),a,"#dc5500","#ffffff","bold")});return l}var h=[],e=b.settings,d=[];r.a("aaqs: version: 2016.10.30_005 Tired of typing the same answers over and over? Setup a selection of keyword triggered automatic notices, and let this bot take the strain. Keywords can be a word, a phrase, or a regular expression. Response notices can include emoticons, new-lines and unicode escape sequences.");Object.keys(e).sort().forEach(function(b){var a,
c,g,f;if(f=0===b.indexOf("aaqs"))b=e[b]||"",a=/[\u0081-\u00ff]{1,}\u0080[\u0081-\u00ff]{1,}/g,null!==b.match(a)&&(b=b.replace(a,"")),f=""!==(a=b);if(f&&0<(c=a.indexOf("/"))){b=a.slice(0,c);try{g=new RegExp(b,"i")}catch(t){r.a("ignoring malformed key: "+b+" error: "+t.message)}c=a.slice(c+1);f=/\\u([0-9a-f]{4})/gi;var l;a=[];for(c=c||"";null!==(l=f.exec(c));)a.push(l[1]);if(a.length)for(a=a.filter(m),f=0,l=a.length;f<l;f++)c=c.replace(new RegExp("\\\\u"+a[f],"gi"),String.fromCharCode(parseInt(a[f],
16)));a=c.trim();b.length&&g&&a.length&&(-1!==d.indexOf(b)?r.a("discarding duplicate key: "+b+" repsonse: "+a):(r.a("key: "+b+" repsonse: "+a),h[d.push(g)-1]=a))}});"[object Array]"!=={}.toString.call(b.settings_choices)&&(b.settings_choices=[]);"(^|\\s)(anal|scat|(golden\\s*showers))(\\s.*)?\\?/Do I do $2? No, I do not do $2.{(^|\\s)requests(\\s.*)?\\?/Do I do requests? I do do requests for tips.{(^|\\s)toys(\\s.*)?\\?/Do I have toys? I have toys for private and group shows.{(^|\\s)sky\\s*pe(\\s.*)?\\?/Do I do Skype? I only do Skype with very special friends.{(^|\\s)twitter(\\s.*)?\\?/Do I have a twitter account? Stalkers welcome @my_twitter{(^|\\s)wish\\s*list(\\s.*)?\\?/Do I have a wish list? Gift me via amzn.com/w/my_amazon_pid{(^|\\s)(c2c|watch|cam(s|2cam)*)(\\s.*)?\\?/Will I watch your cam? I watch cams for 1,000,000 tkns.{(^|\\s)meet(\\s.*)?\\?/Will I meet you in person? I will meet you in person when hell freezes over ;)".split("{").forEach(function(d,
a){b.settings_choices.push({"default":d,label:"Keyword/Auto-response",minLength:3,name:"aaqs"+a,required:!1,type:"str"})});b.settings_choices.push(new p("Respond in public chat?","public",!1,"No","Yes"));var q=b.onMessage;b.onMessage=function(b){if("function"!==typeof b)throw new TypeError(b+" is not a function");q(function(a){return b(k(a))});return b};b.onMessage(function(b){return b})})(cb);
cb.onMessage(function(b){b.hasOwnProperty("X-Cmd")&&(b["X-Spam"]=b["X-Spam"]||!0===b["X-Cmd"],delete b["X-Cmd"],b.hasOwnProperty("X-Cmd-NA")&&(r.c(b["X-Cmd-NA"],b.user,"#fdf2f9"),delete b["X-Cmd-NA"]));return b});
