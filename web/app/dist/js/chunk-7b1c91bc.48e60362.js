(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b1c91bc"],{"0a49":function(s,t,e){var i=e("9b43"),n=e("626a"),a=e("4bf8"),r=e("9def"),o=e("cd1c");s.exports=function(s,t){var e=1==s,c=2==s,l=3==s,u=4==s,v=6==s,d=5==s||v,p=t||o;return function(t,o,f){for(var m,_,g=a(t),h=n(g),C=i(o,f,3),b=r(h.length),S=0,P=e?p(t,b):c?p(t,0):void 0;b>S;S++)if((d||S in h)&&(m=h[S],_=C(m,S,g),s))if(e)P[S]=_;else if(_)switch(s){case 3:return!0;case 5:return m;case 6:return S;case 2:P.push(m)}else if(u)return!1;return v?-1:l||u?u:P}}},1169:function(s,t,e){var i=e("2d95");s.exports=Array.isArray||function(s){return"Array"==i(s)}},"1b9a":function(s,t,e){"use strict";var i=e("27b9"),n=e.n(i);n.a},"27b9":function(s,t,e){},"28a5":function(s,t,e){"use strict";var i=e("aae3"),n=e("cb7c"),a=e("ebd6"),r=e("0390"),o=e("9def"),c=e("5f1b"),l=e("520a"),u=Math.min,v=[].push,d="split",p="length",f="lastIndex",m=!!function(){try{return new RegExp("x","y")}catch(s){}}();e("214f")("split",2,function(s,t,e,_){var g;return g="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[p]||2!="ab"[d](/(?:ab)*/)[p]||4!="."[d](/(.?)(.?)/)[p]||"."[d](/()()/)[p]>1||""[d](/.?/)[p]?function(s,t){var n=String(this);if(void 0===s&&0===t)return[];if(!i(s))return e.call(n,s,t);var a,r,o,c=[],u=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(s.sticky?"y":""),d=0,m=void 0===t?4294967295:t>>>0,_=new RegExp(s.source,u+"g");while(a=l.call(_,n)){if(r=_[f],r>d&&(c.push(n.slice(d,a.index)),a[p]>1&&a.index<n[p]&&v.apply(c,a.slice(1)),o=a[0][p],d=r,c[p]>=m))break;_[f]===a.index&&_[f]++}return d===n[p]?!o&&_.test("")||c.push(""):c.push(n.slice(d)),c[p]>m?c.slice(0,m):c}:"0"[d](void 0,0)[p]?function(s,t){return void 0===s&&0===t?[]:e.call(this,s,t)}:e,[function(e,i){var n=s(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n,i):g.call(String(n),e,i)},function(s,t){var i=_(g,s,this,t,g!==e);if(i.done)return i.value;var l=n(s),v=String(this),d=a(l,RegExp),p=l.unicode,f=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),h=new d(m?l:"^(?:"+l.source+")",f),C=void 0===t?4294967295:t>>>0;if(0===C)return[];if(0===v.length)return null===c(h,v)?[v]:[];var b=0,S=0,P=[];while(S<v.length){h.lastIndex=m?S:0;var y,k=c(h,m?v:v.slice(S));if(null===k||(y=u(o(h.lastIndex+(m?0:S)),v.length))===b)S=r(v,S,p);else{if(P.push(v.slice(b,S)),P.length===C)return P;for(var A=1;A<=k.length-1;A++)if(P.push(k[A]),P.length===C)return P;S=b=y}}return P.push(v.slice(b)),P}]})},7514:function(s,t,e){"use strict";var i=e("5ca1"),n=e("0a49")(5),a="find",r=!0;a in[]&&Array(1)[a](function(){r=!1}),i(i.P+i.F*r,"Array",{find:function(s){return n(this,s,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(a)},ac5d:function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("h1",{staticClass:"mega-rainbow"},[s._v("Sessions")]),e("div",{staticClass:"page-all-sessions"},[e("div",{staticClass:"tabs-container"},[e("div",{staticClass:"right-wrapper"},s._l(s.sessions,function(t){return e("div",{key:t.groupId,staticClass:"tab-items",class:{active:s.getDay(t.groupName)===s.active},attrs:{label:s.getDay(t.groupName)},on:{click:function(e){s.setActive(t.groupName)}}},[e("div",{staticClass:"tab-label"},[s._v(s._s(s.getDay(t.groupName)))])])}),0)]),e("div",{staticClass:"tabs-content"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},s._l(s.sessions,function(t,i,n){return s.getDay(t.groupName)===s.active?e("div",{key:t.groupId,ref:"content",refInFor:!0,staticClass:"tabs-panel-content"},[e("div",{staticClass:"room-container"},[e("div",{staticClass:"time-bar"},[e("div",{staticClass:"time-value"},[s._v(" ")]),e("div",{staticClass:"time-value"},[s._v("\n                9:00\n                "),e("span",[s._v("AM")])]),e("div",{staticClass:"time-value"},[s._v("\n                9:30\n                "),e("span",[s._v("AM")])]),e("div",{staticClass:"time-value"},[s._v("\n                10:00\n                "),e("span",[s._v("AM")])]),e("div",{staticClass:"time-value"},[s._v("\n                10:30\n                "),e("span",[s._v("AM")])]),e("div",{staticClass:"time-value"},[s._v("\n                11:00\n                "),e("span",[s._v("AM")])]),e("div",{staticClass:"time-value"},[s._v("\n                11:30\n                "),e("span",[s._v("AM")])]),e("div",{staticClass:"time-value"},[s._v("\n                12:00\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                12:30\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                1:00\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                1:30\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                2:00\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                2:30\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                3:00\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                3:30\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                4:00\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                4:30\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                5:00\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                5:30\n                "),e("span",[s._v("PM")])]),e("div",{staticClass:"time-value"},[s._v("\n                6:00\n                "),e("span",[s._v("PM")])])]),s._l(s.rooms,function(t){return e("div",{key:"room_"+t.className,class:"session-panes room-wrapper  "+t.className},[e("div",{class:"room-wrapper "+t.className},[e("div",{staticClass:"room-title"},[s._v(s._s(t.label))]),s._l(s.getSessionsFor(i,t.label),function(i){return e("router-link",{key:t+i.id,staticClass:"session-card-wrapper",style:{gridRow:s.timeToText(i.startsAt)+" / span 2"},attrs:{to:{name:"session",params:{id:i.id}}},nativeOn:{click:function(t){s.setScrollPosition()}}},[e("session-card",{attrs:{session:i}})],1)})],2)])})],2)]):s._e()}),0)],1)])])},n=[],a=(e("28a5"),e("cebc")),r=(e("cadf"),e("551c"),e("097d"),e("2f62")),o=e("ce96"),c=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"session-card",class:s.isWorkshop?"workshop":""},[e("div",{staticClass:"session-title"},[s._v(s._s(s._f("truncate")(s.session.title,80,"...")))]),e("div",{staticClass:"session-description"},[s._v(s._s(s._f("truncate")(s.session.description,120,"...")))]),e("div",{staticClass:"session-author"},[e("div",{staticClass:"name"},[s._v(s._s(s.session.speakers[0].name))]),e("div",{staticClass:"alias"},[s._v("Cool alias")]),e("div",{staticClass:"speaker-photo-wrapper"},[e("div",{staticClass:"skewer"},[e("img",{attrs:{src:s.getSpeakerPhoto(s.session.speakers[0].id),alt:""}})])])])])},l=[],u=(e("7514"),{props:["session"],mounted:function(){},computed:Object(a["a"])({},Object(r["c"])({sessions:"getSessions",speakers:"getSpeakers"}),{isWorkshop:function(){if("Flying Dodo"==this.session.room)return!0}}),methods:{getSpeakerPhoto:function(s){var t=this.speakers.find(function(t){return t.id===s});return t.profilePicture}},filters:{truncate:function(s,t,e){return s.substring(0,t)}}}),v=u,d=(e("ec40"),e("2877")),p=Object(d["a"])(v,c,l,!1,null,"7eaa86d7",null);p.options.__file="session-card.vue";var f=p.exports,m={mounted:function(){0!==this.sessions.length&&(this.$refs["content"][0].scrollTop=this.scrollPosition),this.FETCH_SPEAKERS()},data:function(){return{rooms:[{label:"Educator 1",className:"educatorone"},{label:"Educator 2",className:"educatortwo"},{label:"Accelarator",className:"accelarator"},{label:"Flying Dodo",className:"flyingdodo"}]}},filters:{truncate:function(s,t,e){return s.substring(0,t)}},methods:Object(a["a"])({},Object(r["b"])(["FETCH_SESSIONS","FETCH_SPEAKERS"]),{time:o["c"],timeToText:o["d"],sampleTime:function(){return"900AM"},getDay:function(s){return s.split(",")[0]},setActive:function(s){this.$store.commit("SET_PAGESESSIONS_ACTIVE",s.split(",")[0])},setScrollPosition:function(){this.$store.commit("SET_PAGESESSIONS_SCROLL_POSITION",this.$refs["content"][0].scrollTop)},getSessionsFor:function(s,t){return this.sessions[s].sessions.filter(function(s){if(s.room===t)return s})}}),computed:Object(a["a"])({},Object(r["c"])({sessions:"getSessionsByRoom",active:"getPageSessionsActive",scrollPosition:"getPageSessionsScrollPosition"})),components:{SessionCard:f}},_=m,g=(e("1b9a"),Object(d["a"])(_,i,n,!1,null,"3a878d86",null));g.options.__file="PageSessions.vue";t["default"]=g.exports},cd1c:function(s,t,e){var i=e("e853");s.exports=function(s,t){return new(i(s))(t)}},e853:function(s,t,e){var i=e("d3f4"),n=e("1169"),a=e("2b4c")("species");s.exports=function(s){var t;return n(s)&&(t=s.constructor,"function"!=typeof t||t!==Array&&!n(t.prototype)||(t=void 0),i(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},ec40:function(s,t,e){"use strict";var i=e("fc3d"),n=e.n(i);n.a},fc3d:function(s,t,e){}}]);
//# sourceMappingURL=chunk-7b1c91bc.48e60362.js.map