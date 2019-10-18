!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vueCalendar=e():t.vueCalendar=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=7)}([function(t,e){t.exports=function(t,e,n,a,r,i){var o,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):a&&(c=a),c){var d=l.functional,h=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(t,e){return c.call(e),h(t,e)}):l.beforeCreate=h?[].concat(h,c):[c]}return{esModule:o,exports:s,options:l}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{translations:this.$calendar.translations}},computed:{locale:function(){return this.$calendar.locale},dayOffset:function(){return this.$calendar.firstDay},showMoreLabel:function(){return this.translations.showMore}},methods:{printDay:function(t){var e=this.$calendar.fullDayNames?"dayNameLong":"dayNameShort",n=parseInt(t+this.dayOffset)%7;return this.translations[e][n]},printMonth:function(t){var e=this.$calendar.fullMonthNames?"monthNameLong":"monthNameShort";return this.translations[e][t]}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(14),o=a(i),s=n(17),u=a(s);e.default={name:"vue-calendar",props:{events:{type:Array,default:function(){return[]}},disable:{type:Object,default:function(){return{}}},highlight:{type:Object,default:function(){return{}}},height:{type:String,default:"500px"},displayShowMoreCount:{type:Boolean,default:!1}},data:function(){return{calendarEvents:this.events,disabledDays:this.disable,highlightedDays:this.highlight,wrapperClass:this.$calendar.class}},watch:{events:function(t){this.calendarEvents=t},disable:function(t){this.disabledDays=t},highlight:function(t){this.highlightedDays=t},height:function(t){this.height=t,this.updateHeight()}},methods:{updateHeight:function(){var t=document.getElementsByClassName(this.wrapperClass),e=r(t,1),n=e[0];n&&(n.style.height=this.height)}},components:{"calendar-body":u.default,"calendar-header":o.default},mounted:function(){var t=this;this.updateHeight(),this.$calendar.eventBus.$on("show-all",function(e){return t.$emit("show-all",e)}),this.$calendar.eventBus.$on("day-clicked",function(e){return t.$emit("day-clicked",e)}),this.$calendar.eventBus.$on("event-clicked",function(e){return t.$emit("event-clicked",e)}),this.$calendar.eventBus.$on("month-changed",function(e,n){return t.$emit("month-changed",e,n)})}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=a(r),o=n(4),s=a(o);e.default={name:"calendar-header",mixins:[i.default],props:{disable:{type:Object,required:!0}},data:function(){return{monthStart:null}},computed:{year:function(){return this.monthStart.getFullYear()},month:function(){return this.printMonth(this.monthStart.getMonth())},hasDisabledPeriod:function(){return!Object.keys(this.disable).length},isPrevMonthDisabled:function(){return!(this.hasDisabledPeriod||!this.disable.hasOwnProperty("to"))&&(this.disable.to.getMonth()>=this.monthStart.getMonth()&&this.disable.to.getFullYear()>=this.monthStart.getFullYear())},isNextMonthDisabled:function(){return!(this.hasDisabledPeriod||!this.disable.hasOwnProperty("from"))&&(this.disable.from.getMonth()<=this.monthStart.getMonth()&&this.disable.from.getFullYear()<=this.monthStart.getFullYear())}},methods:{goPrev:function(){this.previousMonthDisabled||(this.monthStart=s.default.shiftMonth(this.monthStart,1))},goNext:function(){this.nextMonthDisabled||(this.monthStart=s.default.shiftMonth(this.monthStart,-1))},goToDate:function(t){this.monthStart=s.default.firstDateOfMonth(t)},goToday:function(){var t=new Date,e=new Date(t.getFullYear(),t.getMonth(),1);this.monthStart=e}},watch:{monthStart:function(t){var e=s.default.lastDateOfMonth(t);this.$calendar.eventBus.$emit("month-changed",t,e)}},created:function(){var t=this;this.monthStart=s.default.firstDateOfMonth(),this.$calendar.eventBus.$on("go-to-date",function(e){return t.goToDate(e)})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t,e){for(var n=t.length,a=0;a<n;a++)e(t[a],a)},r=function(t){return t||(t=new Date),new Date(t.getFullYear(),t.getMonth(),1)},i=function(t){return t||(t=new Date),new Date(t.getFullYear(),t.getMonth()+1,0)},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e=e<0||e>6?0:e;var n=t.getDay(),a=new Date(t),r=a.getDate()-n+((0===n?-7:0)+e);return a.setDate(r),a>t?a.setDate(a.getDate()-7):a},s=function(t,e){return new Date(t.setMonth(t.getMonth()-e))},u=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],a=(new Date).setHours(0,0,0,0),r=o(t,e),i=0;i<6;i++){for(var s=[],u=0;u<7;u++){s.push({weekDay:u,date:r,isSunday:0===u,isSaturday:6===u,isWeekend:0===u||6===u,monthDay:r.getDate(),isToday:r.getTime()===a,isCurrentMonth:r.getMonth()===t.getMonth()});var l=r.getDate()+1;r=new Date(r.getFullYear(),r.getMonth(),l,0,0,0)}n.push(s)}return n},l=function(t,e){var n=[];return a(e,function(e){var a=new Date(e.start),r=e.end?new Date(e.end):a,i=new Date(t.getTime()).setHours(0,0,0,0),o=new Date(t.getTime()).setHours(23,59,59,999);a.getTime()>=i&&r.getTime()<=o&&n.push(e)}),!!n.length&&n},c=function(t,e){return e.dates?e.dates.some(function(e){return t.toDateString()===e.toDateString()}):!!(e.to&&t<e.to)||(!!(e.from&&t>e.from)||(!(!e.days||-1===e.days.indexOf(t.getDay))||void 0))};e.default={shiftMonth:s,startOfWeek:o,dateOccursIn:c,buildCalendar:u,lastDateOfMonth:i,firstDateOfMonth:r,filterEventsForDate:l}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),i=a(r),o=n(1),s=a(o),u=n(4),l=a(u);e.default={name:"calendar-body",mixins:[s.default],props:{events:{type:Array,required:!0},disable:{type:Object,required:!0},highlight:{type:Object,required:!0},displayShowMoreCount:{type:Boolean,default:!1}},data:function(){return{monthStart:null,disabledDays:this.disable,highlightedDays:this.highlight}},computed:{firstDay:function(){return this.$calendar.firstDay},showLimit:function(){return this.$calendar.showLimit},calendar:function(){if(this.monthStart)return l.default.buildCalendar(this.monthStart,this.firstDay)}},methods:{dayClasses:function(t){var e={today:t.isToday,sunday:t.isSunday,weekend:t.isWeekend,saturday:t.isSaturday,"not-current":!t.isCurrentMonth,disabled:this.isDayDisabled(t),highlighted:this.isDayHighlighted(t)};return Object.keys(e).filter(function(t){return!0===e[t]})},dayClicked:function(t){this.$calendar.eventBus.$emit("day-clicked",t)},getEventsForDay:function(t){return l.default.filterEventsForDate(t,this.events)},isDayDisabled:function(t){return l.default.dateOccursIn(t.date,this.disabledDays)},isDayHighlighted:function(t){return l.default.dateOccursIn(t.date,this.highlightedDays)}},watch:{disable:function(t){this.disabledDays=t},highlight:function(t){this.highlightedDays=t}},components:{"events-box":i.default},mounted:function(){var t=this;this.$calendar.eventBus.$on("month-changed",function(e){return t.monthStart=e})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"events-box",mixins:[r.default],props:{events:{type:Array,required:!0},displayShowMoreCount:{type:Boolean,default:!1}},computed:{showLimit:function(){return this.$calendar.showLimit},eventList:function(){return this.events.slice(0,this.showLimit)},more:function(){return this.events.length>this.showLimit},showMoreCount:function(){return this.events.length-this.showLimit}},methods:{eventClicked:function(t){this.$calendar.eventBus.$emit("event-clicked",t)},showAll:function(){this.$calendar.eventBus.$emit("show-all",this.events)}}}},function(t,e,n){"use strict";(function(t){function a(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign(s.default,e);e.languages&&l.default.addLanguage(e.languages);var a={eventBus:new t,translations:l.default.getTranslation(n.locale)};t.prototype.$calendar=Object.assign(a,n),t.component(n.componentName,d.default)}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(9),s=a(o),u=n(10),l=a(u),c=n(12),d=a(c);e.default=r,"object"===i(t)&&t.exports&&(t.exports.install=r)}).call(e,n(8)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={firstDay:0,showLimit:3,locale:"en",fullDayNames:!1,fullMonthNames:!1,class:"vue-calendar",componentName:"vue-calendar"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={getTranslation:function(t){return this.languages.hasOwnProperty(t)?this.languages[t]:this.languages.en},addLanguage:function(t){var e=(0,r.default)(t);this.languages=Object.assign(this.languages,Object.keys(t).filter(function(t){return-1!==e.indexOf(t)}).reduce(function(e,n){return e[n]=t[n],e},{}))},languages:{en:{showMore:"Show more",dayNameShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNameLong:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNameShort:["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."],monthNameLong:["January","February","March","April","May","June","July","August","September","October","November","December"]},ru:{showMore:"Показать больше",dayNameShort:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],dayNameLong:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],monthNameShort:["Янв.","Фев.","Март.","Апр.","Май","Июнь","Июль","Авг.","Сент.","Окт.","Ноя.","Дек."],monthNameLong:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]},zh:{showMore:"展示更多",dayNameShort:["日","一","二","三","四","五","六"],dayNameLong:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],monthNameShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNameLong:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},fr:{showMore:"Afficher plus",dayNameShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],dayNameLong:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],monthNameShort:["Jan.","Fév.","Mar.","Avr.","Mai","Juin","Juil","Aou.","Sep.","Oct.","Nov.","Déc."],monthNameLong:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]},de:{showMore:"Weitere anzeigen",dayNameShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNameLong:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],monthNameShort:["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],monthNameLong:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=function(t){return"[object Object]"===Object.prototype.toString.call(t)},i=function(t,e){return Object.keys(e).map(function(n){return[n,e[n](t[n])]}).reduce(function(t,e){return!e[1]&&t.push(e[0]+" is invalid"),t},[])},o={showMore:function(t){return"string"==typeof t},dayNameLong:function(t){return a(t)&&t.length>6},dayNameShort:function(t){return a(t)&&t.length>6},monthNameLong:function(t){return a(t)&&t.length>11},monthNameShort:function(t){return a(t)&&t.length>11}};e.default=function(t){return r(t)&&Object.keys(t).length?Object.keys(t).map(function(e){return[e,i(t[e],o)]}).reduce(function(t,e){return 0===e[1].length&&t.push(e[0]),t},[]):[]}},function(t,e,n){"use strict";function a(t){n(13)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var s=n(23),u=n(0),l=a,c=u(i.a,s.a,!1,l,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";function a(t){n(15)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var s=n(16),u=n(0),l=a,c=u(i.a,s.a,!1,l,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendar-header"},[n("div",{staticClass:"header-left"},[t._t("header-left",[n("button",{staticClass:"today px-2 py-1 bg-pink-100 text-pink-500",on:{click:function(e){e.stopPropagation(),t.goToday(e)}}},[n("fa",{staticClass:"fill-current",attrs:{icon:["fas","star"]}})],1)])],2),t._v(" "),n("div",{staticClass:"header-center"},[n("span",{staticClass:"title"},[t._v(" "+t._s(t.month)+" "+t._s(t.year)+" ")])]),t._v(" "),n("div",{staticClass:"header-right"},[t._t("header-right",[t.isPrevMonthDisabled?t._e():n("button",{staticClass:"bg-blue-200 text-blue-800 prev-month",on:{click:function(e){e.stopPropagation(),t.goPrev(e)}}},[n("fa",{staticClass:"fill-current",attrs:{icon:["fal","chevron-left"]}})],1),t._v(" "),t.isNextMonthDisabled?t._e():n("button",{staticClass:"bg-blue-200 text-blue-800 next-month",attrs:{c:""},on:{click:function(e){e.stopPropagation(),t.goNext(e)}}},[n("fa",{staticClass:"fill-current",attrs:{icon:["fal","chevron-right"]}})],1)])],2)])},r=[],i={render:a,staticRenderFns:r};e.a=i},function(t,e,n){"use strict";function a(t){n(18)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var s=n(22),u=n(0),l=a,c=u(i.a,s.a,!1,l,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";function a(t){n(20)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var s=n(21),u=n(0),l=a,c=u(i.a,s.a,!1,l,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"events"},[t._l(t.eventList,function(e,a){return n("div",{key:a,staticClass:"event",class:e.classes,on:{click:function(n){n.stopPropagation(),t.eventClicked(e)}}},[n("div",{staticClass:"event-title flex"},[n("div",[n("fa",{staticClass:"event-icon mr-1",class:e.iconColor,attrs:{icon:e.icon}})],1),n("div",[t._v(" "+t._s(e.title))])])])}),t._v(" "),t.more?n("span",{staticClass:"more-link",on:{click:function(e){e.stopPropagation(),t.showAll()}}},[t.displayShowMoreCount?[t._v(t._s(t.showMoreCount))]:t._e(),t._v("\n    "+t._s(t.showMoreLabel)+"\n  ")],2):t._e()],2)},r=[],i={render:a,staticRenderFns:r};e.a=i},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendar-body"},[n("div",{staticClass:"days-header"},t._l(7,function(e){return n("div",{key:e,staticClass:"day-label"},[t._v("\n      "+t._s(t.printDay(e-1))+"\n    ")])})),t._v(" "),n("div",{staticClass:"days-body"},t._l(t.calendar,function(e,a){return n("div",{key:a,staticClass:"week-row"},t._l(e,function(e,a){return n("div",{key:a,staticClass:"week-day",class:t.dayClasses(e),on:{click:function(n){n.stopPropagation(),t.dayClicked(e)}}},[n("div",{staticClass:"day-number"},[t._v("\n          "+t._s(e.monthDay)+"\n        ")]),t._v(" "),(t.dayEvents=t.getEventsForDay(e.date))?n("events-box",{attrs:{events:t.dayEvents,"display-show-more-count":t.displayShowMoreCount}}):t._e()],1)}))}))])},r=[],i={render:a,staticRenderFns:r};e.a=i},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.wrapperClass},[n("calendar-header",{attrs:{disable:t.disabledDays}}),t._v(" "),n("calendar-body",{attrs:{events:t.calendarEvents,disable:t.disabledDays,highlight:t.highlightedDays,"display-show-more-count":t.displayShowMoreCount}})],1)},r=[],i={render:a,staticRenderFns:r};e.a=i}])});