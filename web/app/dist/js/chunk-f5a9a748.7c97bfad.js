(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5a9a748"],{"3e45":function(e,s,a){"use strict";var t=a("a165"),i=a.n(t);i.a},a165:function(e,s,a){},f681:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("h1",{staticClass:"mega-rainbow"},[e._v("Top Sessions")]),a("div",{staticClass:"page"},[e.sessionsReady?a("div",{staticClass:"speakers-wrapper"},[e._m(0)]):e._e(),e.sessionsReady?a("transition-group",{staticClass:"speakers-wrapper",attrs:{name:"flip-list",tag:"div"}},e._l(e.getLeaderboardSessions,(function(s,t){return a("div",{key:s.id,staticClass:"speaker-row"},[a("div",{staticClass:"rank mega-rainbow"},[e._v(e._s(t+1))]),a("div",{staticClass:"topic-content"},["undefined"!==e.allSessions[s.id]?a("router-link",{attrs:{to:{name:"session",params:{id:s.id}}}},[e._v(e._s(e.allSessions[s.id].title))]):e._e()],1),a("div",{staticClass:"score value"},[e._v(e._s(s.score))])])})),0):a("div",[a("div",{staticClass:"loading__container"},[a("div",{staticClass:"loader-spinner"}),a("h1",[e._v("Loading")])])])],1),a("h1",{staticClass:"mega-rainbow"},[e._v("Top Speakers")]),a("div",{staticClass:"page"},[e.speakerReady?a("div",{staticClass:"speakers-wrapper"},[e._m(1)]):e._e(),e.sessionsReady?a("transition-group",{staticClass:"speakers-wrapper",attrs:{name:"flip-list",tag:"div"}},e._l(e.getLeaderboardSpeakers,(function(s,t){return""!=s.id&&"undefined"!==e.allSpeakers[s.id]?a("div",{key:s.id,staticClass:"speaker-row"},[a("div",{staticClass:"rank mega-rainbow"},[e._v(e._s(t+1))]),a("div",{staticClass:"name"},[e._l(e.allSessions[s.id].speakers,(function(s){return a("div",{staticClass:"speak"},[e._v(e._s(s.name))])})),a("router-link",{attrs:{to:{name:"session",params:{id:s.id}}}},[e._v(e._s(e.allSessions[s.id].title))])],2),a("div",{staticClass:"score"},[e._v(e._s(s.score))])]):e._e()})),0):a("div",[a("div",{staticClass:"loading__container"},[a("div",{staticClass:"loader-spinner"}),a("h1",[e._v("Loading")])])])],1)])},i=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"speaker-row header"},[a("div",{staticClass:"rank"},[e._v("#")]),a("div",{staticClass:"topic-name"},[e._v("Topic")]),a("div",{staticClass:"score"},[e._v("Score")])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"speaker-row header"},[a("div",{staticClass:"rank"},[e._v("#")]),a("div",{staticClass:"speaker-name"},[e._v("Name")]),a("div",{staticClass:"score"},[e._v("Score")])])}],r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=a("2f62");function o(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?o(a,!0).forEach((function(s){Object(r["a"])(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}var d={computed:c({},Object(n["c"])({speakerReady:"getSpeakersReady",allSpeakers:"getSpeakersById",allSessions:"getSessionsById",sessionsReady:"getSessionsReady",getLeaderboardSessions:"getLeaderboardSessions",getLeaderboardSpeakers:"getLeaderboardSpeakers"})),methods:c({},Object(n["b"])({userCheck:"USER_STATUS",LEADERBOARD_FETCH:"LEADERBOARD_FETCH"})),mounted:function(){},data:function(){return{topSpeakerList:["6d92a0e5-248f-44d5-a35c-3eb5deecc559","ce733ef3-e83e-4314-86dc-56e108e514df","03699e05-2575-434d-821d-440d4f93877f"],topSessionsList:["115650","80862"]}}},l=d,p=(a("3e45"),a("2877")),v=Object(p["a"])(l,t,i,!1,null,"dacac368",null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-f5a9a748.7c97bfad.js.map