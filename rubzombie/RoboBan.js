// https://chaturbate.com/apps/user_uploads/3/rubzombie/
// https://chaturbate.com/apps/sourcecode/roboban/?version=&slot=3

// https://pt.chaturbate.com/apps/user_uploads/3/rubzombie/
// https://pt.chaturbate.com/apps/sourcecode/roboban/?version=&slot=3

// startof RoboBan module - not for re-compilation
(function(b){function c(a){function h(a){return a.replace(new RegExp("\\"+function(a){return function(a){var b,e;for(e in a)a.hasOwnProperty(e)&&(!b||a[e]>a[b])&&(b=e);return b}(function(a){return a.split("").reduce(function(a,b){a[b]=a[b]?a[b]+1:1;return a},{})}(a))}(a),"g"),"")}var d=a.m,f=a.user,g=f===b.room_slug;c.hasOwnProperty("rx")||(c.rx=new RegExp("(?:"+[/^(<[<-]*)?\s*([\u0370-\u03FF\u0400-\u04FF\u2580-\u259F\u3000-\u303F\uFF00-\uFFEF]|[\uD800-\uDB7F][\uDC00-\uDFFF])+(?![\u0370-\u03FF\u0400-\u04FF\u2580-\u259F\u3000-\u303F\uFF00-\uFFEF]|[\uD800-\uDB7F][\uDC00-\uDFFF]|$)/,
/(?:\b|_)(c|cam|c4m)\s*([2\u2777\u2781\u278B\uFF12]|\uD835[\uDFD0\uDFDA\uDFE4\uDFEE\uDFF8])\s*(c|cam|c4m)(?:\b|_).*\??/i,/(\uD800\uDF02|\uD835\uDDD6|\uD835\uDCD2|\uD83C\uDD72|\uFF23).*([2\u2777\u2781\u278B\uFF12]|\uD835[\uDFD0\uDFDA\uDFE4\uDFEE\uDFF8]).*(\uD800\uDF02|\uD835\uDDD6|\uD835\uDCD2|\uD83C\uDD72|\uFF23)/,/^(<?\s*(:([\w-]{1,})\s+)?(a\s*(boy|guy|junge?|man)|bio|boys|cam|guys|page|room)\s*|(<\s*|:([\w-]{1,})\s+)+(me)\s*)$/i,/^<?\s*(:([\w-]{1,})\s+)?(check\s*(out)?|f.ck|get|i\s*want|look(ing)?|see|sex|view|visit|watch)\s*(at|for|my|out|with)?\s*$/i,
/^<?\s*(:([\w-]{1,})\s+)?((fuck|sex)\s*with\s*)?((crazy|horny|hot|naughty|sexy|stunning)?\s*(cuti?e|dame|frau|lady|me|milf|woman)\s*(\.|boys|guys|$)|meet|searching|see(king)?|watch)\s*$/i,/(?:^|\s):check\S*bio/i,/i *am *online|(check|come( *to)?|watch) *my *(room|.*channel)|(f.?ck|s?ex).*\s:[\w-]*(cash|money)|willst *du/i,/[\u2580-\u259F]/,/[\xa0-\xff\u0100-\u017f\u0250-\u02ff\u0370-\u03ff\u0400-\u04ff\u1d00-\u1dff\u275f\ua720-\ua7ff]|\ud800[\udea0-\udede\udf00-\udf2e\udf30-\udf4e]|\ud802[\udd00-\udd1e]|\ud835[\udc00-\udffe]|\ud83c[\udd00-\uddfe]/].map(function(a){return a.source}).join(")|(?:")+
")","i"));if(g||a.is_mod||a.in_fanclub||a["Z-Instaban"]||a["Z-Spam-Filtered"]){if(d=d.match(/^\/ban\s+([\s,a-z0-9_]+)$/i))if(g||k&&a.is_mod)d[1].toLowerCase().split(/[\s,]+/).filter(function(a,b,c){return c.indexOf(a)===b}).forEach(function(a){a&&a!==b.room_slug&&b.sendNotice((g?"\ud83c\udd78\ud83c\udd7d\ud83c\udd82\ud83c\udd83\ud83c\udd70 \ud83c\udd71\ud83c\udd70\ud83c\udd7d ":f+" \ud83c\udd7c\ud83c\udd7e\ud83c\udd73 \ud83c\udd7f\ud83c\udd81\ud83c\udd7e\ud83c\udd87\ud83c\udd88 \ud83c\udd71\ud83c\udd70\ud83c\udd7d ")+
a,b.room_slug)}),a["X-Spam"]=!0;return a}if(c.rx.test(d)||c.rx.test(h(d)))a["X-Spam"]=!0,(a["Z-Instaban"]=!(a.has_tokens||a.tipped_recently||a.tipped_alot_recently||a.tipped_tons_recently))&&b.sendNotice("RoboBan Rx:ban:"+f,b.room_slug);return a}var k="Yes"===b.settings.mod_ban,l=b.onMessage;b.onMessage=function(a){if("function"!==typeof a)throw new TypeError(a+" is not a function");l(function(b){return a(c(b))});return a};b.onMessage(function(a){return a})})(cb);
// endof RoboBan module - not for re-compilation

// provide start-up enable/disable option
cb["settings_choices"] = [{
  "choice1": "Yes",
  "choice2": "No",
  "defaultValue": "No",
  "label": "Allow Mod Proxy Banning? (relies on applet activation. See description.)",
  "name": "mod_ban",
  "required": false,
  "type": "choice"
}];
