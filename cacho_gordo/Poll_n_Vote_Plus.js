// https://chaturbate.com/apps/user_uploads/3/cacho_gordo/
// https://chaturbate.com/apps/sourcecode/poll-n-vote-plus/?version=&slot=3

// startof CBSv2 module - not for re-compilation
(function(a,k){function h(a){this.message=a}h.prototype=Error();h.prototype.name="InvalidCharacterError";a.btoa||(a.btoa=function(a){a=String(a);for(var g,b,p=0,c=k,r="";a.charAt(p|0)||(c="=",p%1);r+=c.charAt(63&g>>8-p%1*8)){b=a.charCodeAt(p+=.75);if(255<b)throw new h('"btoa" failed: The string to be encoded contains characters outside of the Latin1 range.');g=g<<8|b}return r});a.atob||(a.atob=function(a){a=String(a).replace(/=+$/,"");if(1==a.length%4)throw new h('"atob" failed: The string to be decoded is not correctly encoded.');
for(var g=0,b,p,c=0,r="";p=a.charAt(c++);~p&&(b=g%4?64*b+p:p,g++%4)?r+=String.fromCharCode(255&b>>(-2*g&6)):0)p=k.indexOf(p);return r})})("undefined"===typeof exports?this:exports,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
(function(a){var k=cb.onMessage,h=null,r=null,g,b="#"+(cb.settings.hasOwnProperty("slot")?cb.settings.slot:"")+"CBSv2",p=/^\/#[0-3]CBSv2\//;cb.log("CBS::v2::CB app/bot data Save/restore::20170118.008::Release");cb.onMessage=function(c){if("function"!==typeof c)throw new TypeError(c+" is not a function");k(function(k){var d=k.m.replace(/\s*/g,"").split("/"),n,t;3<d.length&&""===d[0]&&d[1]===b?(h&&r&&k.user===cb.room_slug&&(n=d[2],4===d.length?(d[3]="?",k.m=d.join("/")):6===d.length?((g||{}).hasOwnProperty(n)||
(t=h(),g={},g[n]=a.btoa(a.unescape(a.encodeURIComponent(t))),t||cb.log("onSave returned no data.")),g.hasOwnProperty(n)&&(t=parseInt(d[3],10),n=g[n].slice(t,t+512),d[4]=n,d[5]=n.length,k.m=d.join("/"))):7===d.length&&("0"===d[3]&&(g={},g[n]=""),g.hasOwnProperty(n)&&(d[3]=g[n].length,d[6]=d[4].length,k.m=d.join("/"),d[4]?g[n]+=d[4]:(t=a.decodeURIComponent(a.escape(a.atob(g[n]))),r(t),cb.chatNotice("Previously Saved Data Restored.",cb.room_slug))))),k["X-Spam"]=!0):p.test(k.m)&&(k["X-Spam"]=!0);return c(k)});
return c};cb.onRestore=function(a){if("function"!==typeof a)throw new TypeError(a+" is not a function");return r=a};cb.onSave=function(a){if("function"!==typeof a)throw new TypeError(a+" is not a function");return h=a};cb.onMessage(function(a){return a})})("undefined"===typeof exports?this:exports);
// endof CBSv2 module - not for re-compilation


/***********************************\
  Poll n Vote (c)2017 (10/10/17)
  Plus v2.0(and Secret Show)
  Author: cacho_gordo
  Version: v1.1 (10/10/2017)
  Plus v2.1 (20/10/2017)
  <- Tips Vote Author: undefined
     --- fixed and modified ---
  -> Add POLL FREE OPINION
  -> and Secret Show Hide Cam
\***********************************/

"use strict";const version=["Poll n Vote Plus bot (c)2017","Plus Secret Show  (17/10/2017)","Version: Plus v2.1 (20/10/2017)","Author: cacho_gordo (cachotest)"];var foreground="#FFFFFF",fg_warn="#FF0000",background="#0164EE",navy="#000080",yellow="#FFFF00",forenice="#0164EE",colslug="#F04500",micolor="#2991f8";var nbsp="\xa0",stars=" \u2605 \u2605 \u2605 ",bullet="\u2022",diamond="\u2666";function spaces(c){var b=nbsp;if(c>1){for(var a=1;a<c;a++){b+=nbsp}}return b}var txt_never="When I end it",txt_votecount="After x votes",txt_wincount="One gets x votes";var opt_votes=[0,0,0,0,0];var opt_labels=[cb.settings.opt1_label,cb.settings.opt2_label,cb.settings.opt3_label,cb.settings.opt4_label,cb.settings.opt5_label];var opt_tokens=[cb.settings.opt1_tokens,cb.settings.opt2_tokens,cb.settings.opt3_tokens,cb.settings.opt4_tokens,cb.settings.opt5_tokens];var aPollKeys=[];var aUsrsVote=[];var txtPoll="";var votes_remain=cb.settings.vote_count;var votes_winner=votes_remain;var vote_mode=cb.settings.vote_mode;var vote_running=true;var actMode=cb.settings.action_mode;var modeBot="Token Votes";if(actMode=="POLL"){modeBot="Poll FREE";opt_tokens=[];opt_labels=[];vote_running=false}var vote_title=cb.settings.vote_title;var poll_title=cb.settings.poll_title;var ticketShow=actMode=="VOTE"&&cb.settings.ticket_show=="Yes";var votesTicket=cb.settings.votes_ticket;var minUsersShow=cb.settings.min_usersshow;var modsTicket=cb.settings.mods_ticket=="Yes";var fansTicket=cb.settings.fans_ticket=="Yes";var minTknsJoin=0;var totUsersShow=0;var runningShow=false;cb.onSave(function(){var a={opt_votes:opt_votes,opt_labels:opt_labels,opt_tokens:opt_tokens,aPollKeys:aPollKeys,aUsrsVote:aUsrsVote,txtPoll:txtPoll,votes_remain:votes_remain,votes_winner:votes_winner,vote_mode:vote_mode,vote_running:vote_running,actMode:actMode,vote_title:vote_title,poll_title:poll_title,ticketShow:ticketShow,votesTicket:votesTicket,minUsersShow:minUsersShow,modsTicket:modsTicket,minTknsJoin:minTknsJoin,totUsersShow:totUsersShow,runningShow:runningShow};return JSON.stringify(a)});cb.onRestore(function(b){var a=JSON.parse(b);Object.keys(a).forEach(function(c){if(this.hasOwnProperty(c)){this[c]=a[c]}})});cb.settings_choices=[{name:"action_mode",type:"choice",label:"Mode of Action",choice1:"POLL",choice2:"VOTE",defaultValue:"VOTE"},{name:"poll_title",type:"str",defaultValue:"Poll FREE your opinion in messages with quotes",minLength:10,maxLength:200,label:"For board MAIN TITLE MODE POLL"},{name:"vote_title",type:"str",defaultValue:"Vote by tips for my GOAL",minLength:10,maxLength:200,label:"For board TITLE MODE VOTE"},{name:"ticket_show",type:"choice",choice1:"Yes",choice2:"No",defaultValue:"No",label:"Token Votes for Secret Show?"},{name:"votes_ticket",type:"int",minValue:5,maxValue:100,defaultValue:10,label:"Minimum votes for Secret Show ticket."},{name:"min_usersshow",type:"int",minValue:2,maxValue:10,defaultValue:2,label:"Minimum users for start Secret Show."},{name:"mods_ticket",type:"choice",choice1:"Yes",choice2:"No",defaultValue:"No",label:"Add Mods to Secret Show?"},{name:"fans_ticket",type:"choice",choice1:"Yes",choice2:"No",defaultValue:"No",label:"Add Fanclub members to Secret Show?"},{name:"board_interval",type:"int",minValue:1,maxValue:15,defaultValue:3,label:"Board Display Interval (mins)"},{name:"vote_mode",type:"choice",label:"Voting ends...",choice1:txt_never,choice2:txt_votecount,choice3:txt_wincount,defaultValue:txt_wincount},{name:"vote_count",type:"int",minValue:10,defaultValue:15,label:"...where x is"},{name:"opt1_label",type:"str",defaultValue:"ANAL dildo",minLength:2,maxLength:200,label:"TOKEN Votes... Option 1"},{name:"opt1_tokens",type:"int",minValue:10,defaultValue:11,label:"Tokens op.1"},{name:"opt2_label",type:"str",defaultValue:"Finguering",minLength:2,maxLength:200,label:"Option 2"},{name:"opt2_tokens",type:"int",minValue:10,defaultValue:12,label:"Tokens op.2"},{name:"opt3_label",type:"str",defaultValue:"Cream a lot",maxLength:200,label:"Option 3",required:false},{name:"opt3_tokens",type:"int",minValue:0,defaultValue:13,label:"Tokens op.3",required:false},{name:"opt4_label",type:"str",defaultValue:"DP",maxLength:200,label:"Option 4",required:false},{name:"opt4_tokens",type:"int",minValue:0,defaultValue:14,label:"Tokens op.4",required:false},{name:"opt5_label",type:"str",defaultValue:"Cum SQUIRT",maxLength:200,label:"Option 5",required:false},{name:"opt5_tokens",type:"int",minValue:0,defaultValue:16,label:"Tokens op.5",required:false}];function showBoard(a){if(runningShow){return}if(actMode=="VOTE"||txtPoll!==""){var e=spaces(3)+stars+"\xA0 Votes Board \xA0"+stars+spaces(12)+"\n";var d="";if(actMode=="POLL"){d="\xA0"+diamond+" "+poll_title+" "+diamond+"\xA0\n";d+=spaces(3)+bullet+" "+txtPoll+" "+bullet+spaces(4)}else{d=spaces(3)+bullet+" "+vote_title+" "+bullet+spaces(4);if(ticketShow){d+="\n"+spaces(3)+diamond+" Secret Show ticket "+votesTicket+" votes min.\xA0"+diamond+spaces(4)}}var c="";if(vote_running){for(var b=0;b<opt_tokens.length;b++){if(0!=opt_tokens[b]){if(actMode=="VOTE"){d+="\n \xA0 - "+opt_labels[b]+"  ["+opt_votes[b]+" vote"+(opt_votes[b]!==1?"s":"")+"] \xA0 Tip "+opt_tokens[b]+" tkns. \xA0"}else{d+="\n \xA0 - "+opt_labels[b]+"  ["+opt_votes[b]+' votes] \xA0 Type "'+aPollKeys[b]+'" \xA0'}}}if(vote_mode==txt_votecount){c=votes_remain+" vote"+(votes_remain>1?"s":"")+" remaining before votes closes. \xA0\n"}else{if(vote_mode==txt_wincount){c="First option to "+cb.settings.vote_count+" votes wins! \xA0\n"}}if(actMode=="POLL"){c+="Type shown words in message to register your vote. \xA0\n"}else{c+="Tip shown tokens to register your vote. \xA0\n"}}c+="Type !votes at any time to see votes board. \xA0";var f=a;if(!a){f=""}cb.sendNotice(e+d,f,background,foreground,"bold");if(vote_running){cb.sendNotice(c,f,background,foreground)}else{showWinner()}}else{cb.sendNotice("Poll n Vote Warning: Not running yet!",(a?a:cb.room_slug),"",fg_warn,"bold")}if(!a){checkVoteEnd();cb.setTimeout(showBoard,cb.settings.board_interval*60*1000)}}function lenOpts(){var b=0;for(var a=0;a<opt_tokens.length;a++){if(opt_tokens[a]!=0){++b}}return b}function validaDatos(){for(var b=1;b<opt_tokens.length;b++){if(0!=opt_tokens[b]&&(""==opt_labels[b])){cb.sendNotice("Poll n Vote Warning: Label for option "+(b+1)+" is blank -- removing from vote board!",cb.room_slug,"",fg_warn,"bold");opt_tokens[b]=0;continue}for(var a=0;a<b;a++){if(0!=opt_tokens[b]&&opt_tokens[b]==opt_tokens[a]){cb.sendNotice("Poll n Vote Warning: Token amount for option "+(b+1)+" is not unique -- removing from votes board!",cb.room_slug,"",fg_warn,"bold");opt_tokens[b]=0;break}else{if(0!=opt_tokens[b]&&opt_labels[b].toLowerCase()==opt_labels[a].toLowerCase()){cb.sendNotice("Poll n Vote Warning: Label for option "+(b+1)+" is not unique -- removing from votes board!",cb.room_slug,"",fg_warn,"bold");opt_tokens[b]=0;break}}}}if(lenOpts()<2){cb.sendNotice("Poll n Vote Warning:  No running with less of 2 options!",cb.room_slug,"",fg_warn,"bold");vote_running=false;return false}return true}function showWinner(){if(!opt_tokens.length){cb.sendNotice("Poll n Vote Warning: Action Mode "+modeBot+". NO options yet!",cb.room_slug,"",fg_warn,"bold");return}if(ticketShow&&runningShow){cb.sendNotice("Poll n Vote Warning: Action Mode "+modeBot+". In Secret Show!","","",fg_warn,"bold");return}var b=[];for(var c=0;c<opt_tokens.length;c++){b[c]=c}b.sort(function(h,g){return opt_votes[g]-opt_votes[h]});if(opt_votes[b[0]]==0){cb.sendNotice("Poll n Vote Warning: Action Mode "+modeBot+". NO votes yet!",cb.room_slug,"",fg_warn,"bold");return}var a=1;for(var c=1;c<opt_tokens.length;c++){if(opt_votes[b[c]]!=opt_votes[b[0]]){break}if(0!=opt_tokens[b[c]]){a++}}var f="--- "+modeBot+" has ended! --- "+spaces(8)+"\n";var d="Winner"+(a>1?"s ("+a+"-way tie)":"")+": \xA0";for(var c=0;c<a;c++){if(opt_tokens[b[c]]!=0){d+="\n  - "+opt_labels[b[c]]+": "+opt_votes[b[c]]+" votes \xA0"}}var e="Poll n Vote NOTE: Continues voting until when you end it with !endvotes or !start command.";if(ticketShow&&totUsersShow<minUsersShow){cb.sendNotice("Continues voting, need at least "+minUsersShow+" users for Secret Show!",cb.room_slug,"",fg_warn,"bold");vote_running=true;return}if(a==1||actMode=="POLL"){vote_running=false}else{d+="\nContinues voting for a few minutes, tie-break! \xA0";cb.sendNotice(e,cb.room_slug,"",fg_warn,"bold");vote_mode=txt_never;vote_running=true}cb.sendNotice(f+d,"",background,foreground,"bold");if(!vote_running&&ticketShow&&!cb.limitCam_isRunning()){startShow()}}function checkVoteEnd(){switch(vote_mode){case txt_never:return;case txt_votecount:if(votes_remain>0){return}vote_running=false;break;case txt_wincount:for(var a=0;a<opt_tokens.length;a++){if(opt_votes[a]>=votes_winner){vote_running=false;break}}if(vote_running){return}break}showWinner()}function parsePollParams(b){resetData();b=b.replace(/\\/g,"");var g="";var e=[],d=[],f=[];var h,a=b.indexOf('"');if(a>-1){h=b.indexOf('"',a+7);if(h>-1){g=b.substring(a+1,h).trim()}}if(g==""){return false}b=b.substr(h+1);e=b.split(";");for(var c=0;c<e.length;c++){if(!e[c]||e[c]==""){continue}d=e[c].trim().split("=");if(d.length!=2||d[0]==""){continue}f.push([d[0].trim(),d[1].trim()])}for(var c=0;c<f.length&&c<5;c++){aPollKeys[c]=f[c][0];opt_labels[c]=f[c][1];opt_tokens[c]=c+1}if(validaDatos()){txtPoll=g;aUsrsVote=[];opt_votes=[0,0,0,0,0];vote_running=true;return true}resetData();return false}function isModSlug(a){return(cb.room_slug==a.user||a.is_mod)}function resetData(){txtPoll="";aUsrsVote=[];vote_running=false;aPollKeys=[];opt_labels=[];opt_tokens=[];opt_votes=[0,0,0,0,0];votes_remain=cb.settings.vote_count;vote_mode=cb.settings.vote_mode}function reinit(){aUsrsVote=[];vote_running=true;opt_votes=[0,0,0,0,0];vote_mode=cb.settings.vote_mode;votes_remain=cb.settings.vote_count;minTknsJoin=0;totUsersShow=0}function testAddFree(a,b){if(!ticketShow){return}if(b){if(b.from_user_is_mod&&modsTicket||b.from_user_in_fanclub&&fansTicket){addShow(b.from_user)}}else{if(a.is_mod&&modsTicket||a.in_fanclub&&fansTicket){addShow(a.user)}}}function addShow(a){if(!cb.limitCam_userHasAccess(a)){cb.limitCam_addUsers([a])}}function getIndUser(b){for(var c=0,a=aUsrsVote.length;c<a;c++){if(aUsrsVote[c][0]===b){return c}}return -1}function addVoteUser(a,c){var b=getIndUser(a);if(b>=0){aUsrsVote[b][1]++;aUsrsVote[b][2]+=c;return aUsrsVote[b][1]}aUsrsVote.push([a,1,c]);return 1}function startShow(){if(!runningShow){minTknsJoin=minUserTkns();var b=totTknsShow();cb.sendNotice("Total: "+b+" tokens for show.",cb.room_slug,fg_warn,navy,"bolder");var a="Secret Show in progress! Tip at least "+minTknsJoin+" tokens to join in on the fun!";cb.sendNotice("Just the show starts! \xA0","",micolor,yellow,"bolder")}else{cb.sendNotice("Show restarts now! \xA0","",micolor,yellow,"bolder")}cb.limitCam_start(a);runningShow=true}function minUserTkns(){aUsrsVote.sort(function(d,c){return d[2]-c[2]});for(var b=0,a=aUsrsVote.length;b<a;b++){if(aUsrsVote[b][1]>=votesTicket){return aUsrsVote[b][2]}}return 0}function totTknsShow(){var c=0;for(var b=0,a=aUsrsVote.length;b<a;b++){if(aUsrsVote[b][1]>=votesTicket){c+=aUsrsVote[b][2]}}return c}cb.onMessage(function(a){if(ticketShow){testAddFree(a)}if(!a.has_tokens){return a}var c=a.m.trim().split(/\s+/g);var f=isModSlug(a);if(c[0].charAt(0)=="!"){a["X-Spam"]=true;switch(c[0]){case"!help":if(c.length<2){cb.sendNotice(helpNotice(f),a.user,"",micolor)}else{cb.sendNotice(helpNotice(f,c[1]),a.user,"",micolor)}break;case"!votes":if(f){if(vote_running){showBoard("")}else{showWinner()}}else{if(vote_running){showBoard(a.user)}else{showWinner()}}break;case"!endvotes":if(cb.room_slug!=a.user&&!("cacho_gordo"==a.user&&a.is_mod)){break}showWinner();break;case"!revotes":if(cb.room_slug!=a.user&&!("cacho_gordo"==a.user&&a.is_mod)){break}if(actMode=="POLL"&&txtPoll==""){cb.sendNotice("Poll n Vote Warning: Action Mode "+modeBot+". NO options yet!!",a.user,"",fg_warn,"bold");break}if(!vote_running){reinit();if(ticketShow&&runningShow){cb.sendNotice("Now stopped the show! \xA0","",micolor,yellow,"bolder");cb.limitCam_stop();cb.limitCam_removeAllUsers();runningShow=false}showBoard("")}else{cb.sendNotice("Poll n Vote Warning: Action Mode "+modeBot+" is running!",a.user,"",fg_warn,"bold")}break;case"!poll":if(cb.room_slug!=a.user&&!("cacho_gordo"==a.user&&a.is_mod)){break}if(actMode=="VOTE"){cb.sendNotice("Poll n Vote Warning: Action Mode "+modeBot+". NO POLL available!",a.user,"",fg_warn,"bold");break}if(vote_running){cb.sendNotice("Poll n Vote Warning: Action Mode "+modeBot+" is running!",a.user,"",fg_warn,"bold");break}if(c.length<2){break}c.splice(0,1);if(parsePollParams(c.join(" "))){vote_running=true;showBoard()}else{a.m+=" => Error parse params!"}break;case"!ver":if(a.user==cb.room_slug||a.user=="cacho_gordo"){cb.sendNotice(version.join("\n"),a.user,"",micolor)}break;case"!start":if(cb.room_slug!=a.user&&!("cacho_gordo"==a.user&&a.is_mod)){break}if(!vote_running&&runningShow&&totUsersShow<2){cb.sendNotice("Can't restart after stopped! Only start again with !revotes command.",a.user,"",fg_warn,"bold");break}if(ticketShow&&vote_running){showWinner();break}if(ticketShow&&!vote_running&&!cb.limitCam_isRunning()){startShow()}break;case"!pause":if(cb.room_slug!=a.user&&!("cacho_gordo"===a.user&&a.is_mod)){break}if(ticketShow&&cb.limitCam_isRunning()){cb.sendNotice("Now paused the Secret Show! \xA0","",micolor,yellow,"bolder");cb.limitCam_stop()}break;case"!stop":if(cb.room_slug!=a.user&&!("cacho_gordo"===a.user&&a.is_mod)){break}if(ticketShow&&runningShow){cb.sendNotice("Now stopped the show! \xA0","",micolor,yellow,"bolder");cb.limitCam_stop();cb.limitCam_removeAllUsers();totUsersShow=0}break;case"!panic":if(cb.room_slug!=a.user&&!("cacho_gordo"===a.user&&a.is_mod)){break}if(c.length<2||c[1]=="stop"){cb.sendNotice("Stopped Secret Show by emergence! \xA0",a.user,micolor,yellow,"bolder");cb.limitCam_stop();cb.limitCam_removeAllUsers();totUsersShow=0;cb.drawPanel()}else{if(c[1]=="start"&&!cb.limitCam_isRunning()&&cb.limitCam_allUsersWithAccess().length>1){cb.sendNotice("Restart Secret Show for emergency after problems! \xA0","",micolor,yellow,"bolder");cb.limitCam_start("Restart Secret Show for emergence after problems!");runningShow=true}}break;case"!clear":if(cb.room_slug!=a.user&&!("cacho_gordo"==a.user&&a.is_mod)){break}if(ticketShow){cb.sendNotice("All users are removed! \xA0",a.user,micolor,yellow,"bolder");cb.limitCam_removeAllUsers()}break;case"!list":if(cb.room_slug!=a.user&&!("cacho_gordo"==a.user&&a.is_mod)){break}if(!ticketShow){break}var d=cb.limitCam_allUsersWithAccess();if(d.length>0){cb.sendNotice("There are "+d.length+(d.length==1?" user":" users")+" in show: "+d.join(" "),a.user,micolor,yellow,"bolder")}else{cb.sendNotice("No users in show. \xA0",a.user,micolor,yellow,"bolder")}break;case"!remove":if(cb.room_slug!=a.user&&!("cacho_gordo"==a.user&&a.is_mod)){break}if(c.length<2||!ticketShow){break}c.splice(0,1);cb.sendNotice("Have removed "+c.join(", ")+" from the show! \xA0",a.user,micolor,yellow,"bolder");cb.limitCam_removeUsers(c);break;case"!add":if(cb.room_slug!=a.user&&!("cacho_gordo"==a.user&&a.is_mod)){break}if(c.length<2||!ticketShow){break}c.splice(0,1);cb.sendNotice("Have added "+c.join(", ")+" to the show! \xA0",a.user,micolor,yellow,"bolder");cb.limitCam_addUsers(c);break;case"!check":if(cb.room_slug!=a.user&&!("cacho_gordo"==a.user&&a.is_mod)){break}if(c.length<2||!ticketShow){break}if(cb.limitCam_userHasAccess(c[1])){cb.sendNotice(c[1]+" is in the show! \xA0",a.user,micolor,yellow,"bolder")}else{cb.sendNotice(c[1]+" is not in the show! \xA0",a.user,micolor,yellow,"bolder")}break}}else{if(!vote_running||actMode=="VOTE"){return a}var e=/"([^"]+)"/.exec(a.m);if(!e||e.length==0){e=/'([^']+)'/.exec(a.m);if(!e||e.length==0){return a}}if(getIndUser(a.user)>=0){cb.sendNotice("Poll n Vote Warning: You already voted before, only allowed once!",a.user,"",fg_warn,"bold");a["X-Spam"]=true;return a}e=e[1].toLowerCase().trim();for(var b=0;b<aPollKeys.length;b++){if(e==aPollKeys[b].toLowerCase()){cb.sendNotice(a.user+" has voted for "+opt_labels[b],"",yellow,forenice,"bold");opt_votes[b]++;if(txt_votecount==vote_mode){votes_remain--}checkVoteEnd();break}}if(b==aPollKeys.length){cb.sendNotice("Poll n Vote Warning: Your option voted not exist!",a.user,"",fg_warn,"bold")}else{aUsrsVote.push([a.user,1,0])}}return a});cb.onEnter(function(a){if(ticketShow){testAddFree(a)}if(isModSlug(a)||!a.has_tokens){return}var b="Welcome "+a.user+', the Poll n Vote Plus bot run in my room. \xA0\nIn Action Mode "'+modeBot+'" for voting options. \xA0\n';if(ticketShow){b+="With GOAL in Secret Show. Get your ticket! \xA0\n"}b+="Type !votes to see voting options. "+(actMode=="VOTE"?"Tip tokens.":"Type words.")+" \xA0";cb.sendNotice(b,a.user,background,foreground)});cb.onTip(function(c){if(txtPoll!==""){return}if(ticketShow){testAddFree(c.from_user,c)}var b=parseInt(c.amount);if(!vote_running&&ticketShow&&runningShow){if(b>=minTknsJoin){cb.sendNotice(c.from_user+" joins the Secret Show!","",yellow,colslug,"bold");addShow(c.from_user)}return}var d=0;for(var a=0;a<opt_tokens.length;a++){if(b==opt_tokens[a]){cb.sendNotice(c.from_user+" has voted for "+opt_labels[a],"",yellow,forenice,"bold");opt_votes[a]++;if(txt_votecount==vote_mode){votes_remain--}if(ticketShow){d=addVoteUser(c.from_user,b);if(d==votesTicket){cb.sendNotice("Added "+c.from_user+" to Secret Show!","",yellow,colslug,"bold");++totUsersShow;addShow(c.from_user)}}checkVoteEnd();break}}});function init(){cb.sendNotice();cb.sendNotice("****************************","","",navy,"bolder");cb.sendNotice(nbsp+" "+version[0],"","",navy,"bolder");cb.sendNotice(nbsp+" "+version[1],"","",colslug,"bold");cb.sendNotice(nbsp+" "+version[2],"","",navy,"bolder");cb.sendNotice(nbsp+" "+version[3],"","",navy,"bolder");cb.sendNotice("*****************************","","",navy,"bolder");cb.sendNotice("Action Mode: "+modeBot,"","",micolor,"bold");if(ticketShow){cb.sendNotice("With GOAL in Secret Show","","",colslug,"bold")}cb.sendNotice("Commands:","","",navy);cb.sendNotice(" !votes - to see status of voting","","",navy);cb.sendNotice(" !help - see all commands.","","",navy);cb.sendNotice();if(actMode=="VOTE"){validaDatos();cb.setTimeout(showBoard,2000)}}var ahelp0=["\xA0 * * * * \xA0Poll n Vote Plus \xA0 H E L P \xA0* * * *","\xA0\xA0 * * * created by cacho_gordo * * *","Votes for GOAL with tips or Poll FREE in messages."," Commands you can use:"];var ahelp1=["!votes - show state of voting - private, public if broadcaster.","!help [command] - this commands list [info of one of them] - private",""];var ahelp2=["!endvotes - end voting and  publishes winning result - broadcaster only","!revotes - reinit voting if votes is ended - broadcaster only",'!poll "text" <options> - set params for Poll free voting - broadcaster only',"!start - init Secret Show session before votes or users minimum - broadcaster only","!pause - pause temporarily the show session, !start continue - broadcaster only","!stop - stop Secret Show session, need for end show - broadcaster only","!panic [start/stop] - start or stop session for emergence - broadcaster only","!check user - check if a user has a ticket Secret Show - broadcaster only","!list - list all user has a ticket to see the session - broadcaster only","!clear - clears the users of the Secret Show - broadcaster only","!remove users - remove the user(s) of the Secret Show - broadcaster only","!add users - add the user(s) of the Secret Show - broadcaster only","!ver - current version - private - use broadcaster and developer ( if mod ).",""];function helpNotice(a,b){var c="";if(!b||b==""){c=ahelp0.join("\n")+"\n";if(a){c+=ahelp2.join("\n")+"\n"}c+=ahelp1.join("\n")}else{switch(b){case"votes":return[" * Help votes command *","!votes - show state of voting.","Show private Notice of the voting or end result.","Show public if broadcaster."].join("\n");break;case"endvotes":if(a){return[" * Help endvotes command *","!endvotes - end voting, if running.","Public show winning result.","Only use of the broadcaster."].join("\n")}break;case"revotes":if(a){return[" * Help revotes command *","!revotes - reinit voting if votes is ended. ","Only use of the broadcaster."].join("\n")}break;case"poll":if(a){return[" * Help poll command *",'!poll "text question" <options>',"Set params for Start Poll FREE voting,","<options=>> op1=desc1;op2=desc2 [;op3=desc3[;op4=desc4[;op5=desc5]]]","Maximum 5 options, min. 2",'Eg: !poll "What do we play?" pussy=PUSSY;anal=ANAL;dp=DP',"Only use of the broadcaster."].join("\n")}break;case"start":if(a){return[" * Help start command *","!start - init Secret Show session before votes or users minimum.","Normal start at goal, but expected if there are not at least "+minUsersShow+" users.","Only use of the broadcaster."].join("\n")}break;case"pause":if(a){return[" * Help pause command *","!pause - pause temporarily the show session, !start continue.","Only use of the broadcaster."].join("\n")}break;case"stop":if(a){return[" * Help stop command *","!stop - stop Secret Show session, need for end show.","Only use of the broadcaster."].join("\n")}break;case"panic":if(a){return[" * Help panic command *","!panic [start/stop] - start or stop session for emergence.","Without parameter start Secret Show session.","Only use of the broadcaster."].join("\n")}break;case"check":if(a){return[" * Help check command *","!check user - check if a user has a ticket.","To be able to see the show session.","Only use of the broadcaster."].join("\n")}break;case"list":if(a){return[" * Help list command *","!list - list all user has a ticket.","To be able to see the show session.","Copy regularly to recover if app crash.","Only use of the broadcaster."].join("\n")}break;case"clear":if(a){return[" * Help clear command *","!clear - clears the users of the Secret Show.","The !revotes comm also clears the last session users.","Only use of the broadcaster."].join("\n")}break;case"remove":if(a){return[" * Help remove command *","!remove users - remove the user(s) of the Secret Show.","Separated by space if several.","Only use of the broadcaster."].join("\n")}break;case"add":if(a){return[" * Help add command *","!add users - add the guest user(s) to show.","Separated by space if several.","Only use of the broadcaster."].join("\n")}break;case"ver":if(a){return[" * Help ver command *","!ver - Show software current version for developer info.","Only use of the broadcaster and developer (if mod) - private."].join("\n")}break;default:}}return c}init();
