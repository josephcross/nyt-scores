(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c66abca6"],{"0a92":function(t,e,a){t.exports=a.p+"img/avi-steve.2573ac67.jpg"},"2abc":function(t,e,a){t.exports=a.p+"img/avi-alex.5277e373.jpg"},"45c0":function(t,e,a){t.exports=a.p+"img/avi-dylan.d75d09e3.jpg"},"4dc3":function(t,e,a){},6346:function(t,e,a){"use strict";var i=a("4dc3"),n=a.n(i);n.a},"7d67":function(t,e,a){t.exports=a.p+"img/avi-brian.9b13d47c.jpg"},"8ecb":function(t,e,a){t.exports=a.p+"img/avi-joseph.6b00d62e.jpg"},"92ee":function(t,e,a){t.exports=a.p+"img/avi-brent.06517eac.jpg"},ac3f:function(t,e,a){t.exports=a.p+"img/avi-mark.ceb29e08.jpg"},ae3c:function(t,e,a){t.exports=a.p+"img/avi-nick.5e8dd6b4.jpg"},c66d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profile"},[i("div",{staticClass:"profile-back"},[i("router-link",{staticClass:"profile-back",attrs:{to:{name:"Home"}}},[t._v("Back")])],1),i("div",{staticClass:"profile-header"},[i("div",{staticClass:"avi"},[i("img",{attrs:{src:a("faa1")("./avi-"+t.name+".jpg")}})]),i("div",[i("h2",[t._v(t._s(t.name))]),i("small",[t._v("puzzles done: "+t._s(t.puzzlesDone))])])]),i("div",{staticClass:"profile-stats flex two-up"},[t._m(0),i("table",[i("tr",[i("th",[t._v("Average")]),i("td",[t._v(t._s(t.getAverage(t.myTimes)))])]),i("tr",[i("th",[t._v("Fastest")]),i("td",[t._v(t._s(t.fastestTime))])]),i("tr",[i("th",[t._v("Slowest")]),i("td",[t._v(t._s(t.slowestTime))])])])]),i("AvgChart",{attrs:{"chart-data":t.chartData}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("tr",[a("th",[t._v("1st places")]),a("td",[t._v("todo")])]),a("tr",[a("th",[t._v("2st places")]),a("td",[t._v("todo")])]),a("tr",[a("th",[t._v("Last places")]),a("td",[t._v("todo")])])])}],s=(a("4160"),a("b0c0"),a("159b"),a("2ef0")),r=a.n(s),o=a("5571"),c=a("4b38"),u={name:"Profile",mixins:[o["a"]],components:{AvgChart:c["a"]},data:function(){return{name:this.$route.params.boy}},computed:{myTimes:function(){return this.$store.state.times[this.name]},puzzlesDone:function(){var t=0;return r.a.forEach(this.myTimes,(function(e){e&&(t+=1)})),t},timesAll:function(){return this.$store.state.times},fastestTime:function(){var t=this,e=999999;return r.a.forEach(this.myTimes,(function(a){a&&t.toSeconds(a)<e&&(e=t.toSeconds(a))})),this.toMinutes(e)},slowestTime:function(){var t=this,e=1;return r.a.forEach(this.myTimes,(function(a){a&&t.toSeconds(a)>e&&(e=t.toSeconds(a))})),this.toMinutes(e)},nFirst:function(){return"todo"},nSecond:function(){return"todo"},nLast:function(){return"todo"},myAverages:function(){var t=this,e=[],a=r.a.clone(this.myTimes);return r.a.forEach(this.chartDays,(function(i){e.push(t.getAverage(a,!0)),delete a[i]})),e.reverse()},chartData:function(){return{labels:this.chartDays,datasets:[{label:"Average time (in seconds)",borderColor:"#7f87b2",fill:!1,data:this.myAverages}]}}}},v=u,p=(a("6346"),a("2877")),f=Object(p["a"])(v,i,n,!1,null,null,null);e["default"]=f.exports},ce1d:function(t,e,a){t.exports=a.p+"img/avi-josh.e5c64eae.jpg"},faa1:function(t,e,a){var i={"./avi-alex.jpg":"2abc","./avi-brent.jpg":"92ee","./avi-brian.jpg":"7d67","./avi-dylan.jpg":"45c0","./avi-joseph.jpg":"8ecb","./avi-josh.jpg":"ce1d","./avi-mark.jpg":"ac3f","./avi-nick.jpg":"ae3c","./avi-steve.jpg":"0a92"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="faa1"}}]);
//# sourceMappingURL=chunk-c66abca6.37377689.js.map