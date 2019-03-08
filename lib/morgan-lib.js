module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=20)}([function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("buffer")},function(e,r){e.exports=require("events")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("util")},,,,function(e,r,t){var n;function o(e){function t(){if(t.enabled){var e=t,o=+new Date,a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=r.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(t,n){if("%%"===t)return t;c++;var o=r.formatters[n];if("function"==typeof o){var a=i[c];t=o.call(e,a),i.splice(c,1),c--}return t}),r.formatArgs.call(e,i),(t.log||r.log||console.log.bind(console)).apply(e,i)}}return t.namespace=e,t.enabled=r.enabled(e),t.useColors=r.useColors(),t.color=function(e){var t,n=0;for(t in e)n=(n<<5)-n+e.charCodeAt(t),n|=0;return r.colors[Math.abs(n)%r.colors.length]}(e),"function"==typeof r.init&&r.init(t),t}(r=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){r.enable("")},r.enable=function(e){r.save(e),r.names=[],r.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),n=t.length,o=0;o<n;o++)t[o]&&("-"===(e=t[o].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))},r.enabled=function(e){var t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=t(14),r.names=[],r.skips=[],r.formatters={}},function(e,r,t){"use strict";
/*!
 * depd
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */var n=t(2).EventEmitter;function o(e,r,t){Object.defineProperty(e,r,{configurable:!0,enumerable:!0,get:function(){var n=t();return Object.defineProperty(e,r,{configurable:!0,enumerable:!0,value:n}),n}})}function a(e){return e.toString()}o(e.exports,"callSiteToString",function(){var e=Error.stackTraceLimit,r={},n=Error.prepareStackTrace;Error.prepareStackTrace=function(e,r){return r},Error.stackTraceLimit=2,Error.captureStackTrace(r);var o=r.stack.slice();return Error.prepareStackTrace=n,Error.stackTraceLimit=e,o[0].toString?a:t(26)}),o(e.exports,"eventListenerCount",function(){return n.listenerCount||t(27)})},,,,function(e,r,t){"undefined"!=typeof process&&"renderer"===process.type?e.exports=t(23):e.exports=t(24)},function(e,r){var t=1e3,n=60*t,o=60*n,a=24*o,i=365.25*a;function s(e,r,t){if(!(e<r))return e<1.5*r?Math.floor(e/r)+" "+t:Math.ceil(e/r)+" "+t+"s"}e.exports=function(e,r){r=r||{};var c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var r=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!r)return;var s=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*o;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return r.long?function(e){return s(e,a,"day")||s(e,o,"hour")||s(e,n,"minute")||s(e,t,"second")||e+" ms"}(e):function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,r){e.exports=require("net")},function(module,exports,__webpack_require__){
/*!
 * depd
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
var callSiteToString=__webpack_require__(9).callSiteToString,eventListenerCount=__webpack_require__(9).eventListenerCount,relative=__webpack_require__(3).relative;module.exports=depd;var basePath=process.cwd();function containsNamespace(e,r){for(var t=e.split(/[ ,]+/),n=String(r).toLowerCase(),o=0;o<t.length;o++){var a=t[o];if(a&&("*"===a||a.toLowerCase()===n))return!0}return!1}function convertDataDescriptorToAccessor(e,r,t){var n=Object.getOwnPropertyDescriptor(e,r),o=n.value;return n.get=function(){return o},n.writable&&(n.set=function(e){return o=e}),delete n.value,delete n.writable,Object.defineProperty(e,r,n),n}function createArgumentsString(e){for(var r="",t=0;t<e;t++)r+=", arg"+t;return r.substr(2)}function createStackString(e){var r=this.name+": "+this.namespace;this.message&&(r+=" deprecated "+this.message);for(var t=0;t<e.length;t++)r+="\n    at "+callSiteToString(e[t]);return r}function depd(e){if(!e)throw new TypeError("argument namespace is required");var r=callSiteLocation(getStack()[1])[0];function t(e){log.call(t,e)}return t._file=r,t._ignored=isignored(e),t._namespace=e,t._traced=istraced(e),t._warned=Object.create(null),t.function=wrapfunction,t.property=wrapproperty,t}function isignored(e){return!!process.noDeprecation||containsNamespace(process.env.NO_DEPRECATION||"",e)}function istraced(e){return!!process.traceDeprecation||containsNamespace(process.env.TRACE_DEPRECATION||"",e)}function log(e,r){var t=0!==eventListenerCount(process,"deprecation");if(t||!this._ignored){var n,o,a,i,s=0,c=!1,u=getStack(),f=this._file;for(r?(i=r,(a=callSiteLocation(u[1])).name=i.name,f=a[0]):a=i=callSiteLocation(u[s=2]);s<u.length;s++)if((o=(n=callSiteLocation(u[s]))[0])===f)c=!0;else if(o===this._file)f=this._file;else if(c)break;var l=n?i.join(":")+"__"+n.join(":"):void 0;if(!(void 0!==l&&l in this._warned)){this._warned[l]=!0;var p=e;if(p||(p=a!==i&&a.name?defaultMessage(a):defaultMessage(i)),t){var d=DeprecationError(this._namespace,p,u.slice(s));process.emit("deprecation",d)}else{var m=(process.stderr.isTTY?formatColor:formatPlain).call(this,p,n,u.slice(s));process.stderr.write(m+"\n","utf8")}}}}function callSiteLocation(e){var r=e.getFileName()||"<anonymous>",t=e.getLineNumber(),n=e.getColumnNumber();e.isEval()&&(r=e.getEvalOrigin()+", "+r);var o=[r,t,n];return o.callSite=e,o.name=e.getFunctionName(),o}function defaultMessage(e){var r=e.callSite,t=e.name;t||(t="<anonymous@"+formatLocation(e)+">");var n=r.getThis(),o=n&&r.getTypeName();return"Object"===o&&(o=void 0),"Function"===o&&(o=n.name||o),o&&r.getMethodName()?o+"."+t:t}function formatPlain(e,r,t){var n=(new Date).toUTCString()+" "+this._namespace+" deprecated "+e;if(this._traced){for(var o=0;o<t.length;o++)n+="\n    at "+callSiteToString(t[o]);return n}return r&&(n+=" at "+formatLocation(r)),n}function formatColor(e,r,t){var n="[36;1m"+this._namespace+"[22;39m [33;1mdeprecated[22;39m [0m"+e+"[39m";if(this._traced){for(var o=0;o<t.length;o++)n+="\n    [36mat "+callSiteToString(t[o])+"[39m";return n}return r&&(n+=" [36m"+formatLocation(r)+"[39m"),n}function formatLocation(e){return relative(basePath,e[0])+":"+e[1]+":"+e[2]}function getStack(){var e=Error.stackTraceLimit,r={},t=Error.prepareStackTrace;Error.prepareStackTrace=prepareObjectStackTrace,Error.stackTraceLimit=Math.max(10,e),Error.captureStackTrace(r);var n=r.stack.slice(1);return Error.prepareStackTrace=t,Error.stackTraceLimit=e,n}function prepareObjectStackTrace(e,r){return r}function wrapfunction(fn,message){if("function"!=typeof fn)throw new TypeError("argument fn must be a function");var args=createArgumentsString(fn.length),deprecate=this,stack=getStack(),site=callSiteLocation(stack[1]);site.name=fn.name;var deprecatedfn=eval("(function ("+args+') {\n"use strict"\nlog.call(deprecate, message, site)\nreturn fn.apply(this, arguments)\n})');return deprecatedfn}function wrapproperty(e,r,t){if(!e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("argument obj must be object");var n=Object.getOwnPropertyDescriptor(e,r);if(!n)throw new TypeError("must call property on owner object");if(!n.configurable)throw new TypeError("property must be configurable");var o=this,a=callSiteLocation(getStack()[1]);a.name=r,"value"in n&&(n=convertDataDescriptorToAccessor(e,r,t));var i=n.get,s=n.set;"function"==typeof i&&(n.get=function(){return log.call(o,t,a),i.apply(this,arguments)}),"function"==typeof s&&(n.set=function(){return log.call(o,t,a),s.apply(this,arguments)}),Object.defineProperty(e,r,n)}function DeprecationError(e,r,t){var n,o=new Error;return Object.defineProperty(o,"constructor",{value:DeprecationError}),Object.defineProperty(o,"message",{configurable:!0,enumerable:!1,value:r,writable:!0}),Object.defineProperty(o,"name",{enumerable:!1,configurable:!0,value:"DeprecationError",writable:!0}),Object.defineProperty(o,"namespace",{configurable:!0,enumerable:!1,value:e,writable:!0}),Object.defineProperty(o,"stack",{configurable:!0,enumerable:!1,get:function(){return void 0!==n?n:n=createStackString.call(this,t)},set:function(e){n=e}}),o}},function(e,r,t){"use strict";
/*!
 * on-finished
 * Copyright(c) 2013 Jonathan Ong
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */e.exports=function(e,r){if(!1!==a(e))return o(r,null,e),e;return function(e,r){var t=e.__onFinished;t&&t.queue||(t=e.__onFinished=function(e){function r(t){if(e.__onFinished===r&&(e.__onFinished=null),r.queue){var n=r.queue;r.queue=null;for(var o=0;o<n.length;o++)n[o](t,e)}}return r.queue=[],r}(e),function(e,r){var t,o,a=!1;function i(e){t.cancel(),o.cancel(),a=!0,r(e)}function s(r){e.removeListener("socket",s),a||t===o&&(o=n([[r,"error","close"]],i))}t=o=n([[e,"end","finish"]],i),e.socket?s(e.socket):(e.on("socket",s),void 0===e.socket&&function(e,r){var t=e.assignSocket;"function"==typeof t&&(e.assignSocket=function(e){t.call(this,e),r(e)})}(e,s))}(e,t)),t.queue.push(r)}(e,r),e},e.exports.isFinished=a;var n=t(28),o="function"==typeof setImmediate?setImmediate:function(e){process.nextTick(e.bind.apply(e,arguments))};function a(e){var r=e.socket;return"boolean"==typeof e.finished?Boolean(e.finished||r&&!r.writable):"boolean"==typeof e.complete?Boolean(e.upgrade||!r||!r.readable||e.complete&&!e.readable):void 0}},,,function(e,r,t){"use strict";
/*!
 * morgan
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */e.exports=f,e.exports.compile=l,e.exports.format=function(e,r){return f[e]=r,this},e.exports.token=function(e,r){return f[e]=r,this};var n=t(21),o=t(13)("morgan"),a=t(16)("morgan"),i=t(17),s=t(29),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=1e3;function f(e,r){var t=e,n=r||{};e&&"object"==typeof e&&(t=(n=e).format||"default",a("morgan(options): use morgan("+("string"==typeof t?JSON.stringify(t):"format")+", options) instead")),void 0===t&&a("undefined format: specify a format");var c=n.immediate,d=n.skip||!1,m="function"!=typeof t?function(e){var r=f[e]||e||f.default;return"function"!=typeof r?l(r):r}(t):t,h=n.buffer,v=n.stream||process.stdout;h&&(a("buffer option"),v=function(e,r){var t=[],n=null;function o(){n=null,e.write(t.join("")),t.length=0}return{write:function(e){null===n&&(n=setTimeout(o,r));t.push(e)}}}(v,"number"!=typeof h?u:h));return function(e,r,t){function n(){if(!1!==d&&d(e,r))o("skip request");else{var t=m(f,e,r);null!=t?(o("log request"),v.write(t+"\n")):o("skip line")}}e._startAt=void 0,e._startTime=void 0,e._remoteAddress=p(e),r._startAt=void 0,r._startTime=void 0,g.call(e),c?n():(s(r,g),i(r,n)),t()}}function l(e){if("string"!=typeof e)throw new TypeError("argument format must be a string");var r='  "use strict"\n  return "'+e.replace(/"/g,'\\"').replace(/:([-\w]{2,})(?:\[([^\]]+)\])?/g,function(e,r,t){var n="req, res",o="tokens["+String(JSON.stringify(r))+"]";return void 0!==t&&(n+=", "+String(JSON.stringify(t))),'" +\n    ('+o+"("+n+') || "-") + "'})+'"';return new Function("tokens, req, res",r)}function p(e){return e.ip||e._remoteAddress||e.connection&&e.connection.remoteAddress||void 0}function d(e){return"boolean"!=typeof e.headersSent?Boolean(e._header):e.headersSent}function m(e){var r=String(e);return(1===r.length?"0":"")+r}function g(){this._startAt=process.hrtime(),this._startTime=new Date}f.format("combined",':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'),f.format("common",':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'),f.format("default",':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'),a.property(f,"default","default format: use combined format"),f.format("short",":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms"),f.format("tiny",":method :url :status :res[content-length] - :response-time ms"),f.format("dev",function e(r,t,n){var o=d(n)?n.statusCode:void 0,a=o>=500?31:o>=400?33:o>=300?36:o>=200?32:0,i=e[a];return i||(i=e[a]=l("[0m:method :url ["+a+"m:status [0m:response-time ms - :res[content-length][0m")),i(r,t,n)}),f.token("url",function(e){return e.originalUrl||e.url}),f.token("method",function(e){return e.method}),f.token("response-time",function(e,r,t){if(e._startAt&&r._startAt)return(1e3*(r._startAt[0]-e._startAt[0])+1e-6*(r._startAt[1]-e._startAt[1])).toFixed(void 0===t?3:t)}),f.token("date",function(e,r,t){var n=new Date;switch(t||"web"){case"clf":return function(e){var r=e.getUTCDate(),t=e.getUTCHours(),n=e.getUTCMinutes(),o=e.getUTCSeconds(),a=e.getUTCFullYear(),i=c[e.getUTCMonth()];return m(r)+"/"+i+"/"+a+":"+m(t)+":"+m(n)+":"+m(o)+" +0000"}(n);case"iso":return n.toISOString();case"web":return n.toUTCString()}}),f.token("status",function(e,r){return d(r)?String(r.statusCode):void 0}),f.token("referrer",function(e){return e.headers.referer||e.headers.referrer}),f.token("remote-addr",p),f.token("remote-user",function(e){var r=n(e);return r?r.name:void 0}),f.token("http-version",function(e){return e.httpVersionMajor+"."+e.httpVersionMinor}),f.token("user-agent",function(e){return e.headers["user-agent"]}),f.token("req",function(e,r,t){var n=e.headers[t.toLowerCase()];return Array.isArray(n)?n.join(", "):n}),f.token("res",function(e,r,t){if(d(r)){var n=r.getHeader(t);return Array.isArray(n)?n.join(", "):n}})},function(e,r,t){"use strict";
/*!
 * basic-auth
 * Copyright(c) 2013 TJ Holowaychuk
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */var n=t(22).Buffer;e.exports=function(e){if(!e)throw new TypeError("argument req is required");if("object"!=typeof e)throw new TypeError("argument req is required to be an object");return i(function(e){if(!e.headers||"object"!=typeof e.headers)throw new TypeError("argument req is required to have headers property");return e.headers.authorization}(e))},e.exports.parse=i;var o=/^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/,a=/^([^:]*):(.*)$/;function i(e){if("string"==typeof e){var r=o.exec(e);if(r){var t=a.exec(function(e){return n.from(e,"base64").toString()}(r[1]));if(t)return new function(e,r){this.name=e,this.pass=r}(t[1],t[2])}}}},function(e,r,t){var n=t(1),o=n.Buffer;function a(e,r){for(var t in e)r[t]=e[t]}function i(e,r,t){return o(e,r,t)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?e.exports=n:(a(n,r),r.Buffer=i),a(o,i),i.from=function(e,r,t){if("number"==typeof e)throw new TypeError("Argument must not be a number");return o(e,r,t)},i.alloc=function(e,r,t){if("number"!=typeof e)throw new TypeError("Argument must be a number");var n=o(e);return void 0!==r?"string"==typeof t?n.fill(r,t):n.fill(r):n.fill(0),n},i.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return o(e)},i.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n.SlowBuffer(e)}},function(e,r,t){function n(){var e;try{e=r.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(r=e.exports=t(8)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},r.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+r.humanize(this.diff),!t)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&"%c"===e&&(a=++o)}),e.splice(a,0,n)},r.save=function(e){try{null==e?r.storage.removeItem("debug"):r.storage.debug=e}catch(e){}},r.load=n,r.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},r.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],r.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},r.enable(n())},function(e,r,t){var n=t(25),o=t(4);(r=e.exports=t(8)).init=function(e){e.inspectOpts={};for(var t=Object.keys(r.inspectOpts),n=0;n<t.length;n++)e.inspectOpts[t[n]]=r.inspectOpts[t[n]]},r.log=function(){return i.write(o.format.apply(o,arguments)+"\n")},r.formatArgs=function(e){var t=this.namespace;if(this.useColors){var n=this.color,o="  [3"+n+";1m"+t+" [0m";e[0]=o+e[0].split("\n").join("\n"+o),e.push("[3"+n+"m+"+r.humanize(this.diff)+"[0m")}else e[0]=(new Date).toUTCString()+" "+t+" "+e[0]},r.save=function(e){null==e?delete process.env.DEBUG:process.env.DEBUG=e},r.load=s,r.useColors=function(){return"colors"in r.inspectOpts?Boolean(r.inspectOpts.colors):n.isatty(a)},r.colors=[6,2,3,4,5,1],r.inspectOpts=Object.keys(process.env).filter(function(e){return/^debug_/i.test(e)}).reduce(function(e,r){var t=r.substring(6).toLowerCase().replace(/_([a-z])/g,function(e,r){return r.toUpperCase()}),n=process.env[r];return n=!!/^(yes|on|true|enabled)$/i.test(n)||!/^(no|off|false|disabled)$/i.test(n)&&("null"===n?null:Number(n)),e[t]=n,e},{});var a=parseInt(process.env.DEBUG_FD,10)||2;1!==a&&2!==a&&o.deprecate(function(){},"except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();var i=1===a?process.stdout:2===a?process.stderr:function(e){var r;switch(process.binding("tty_wrap").guessHandleType(e)){case"TTY":(r=new n.WriteStream(e))._type="tty",r._handle&&r._handle.unref&&r._handle.unref();break;case"FILE":var o=t(0);(r=new o.SyncWriteStream(e,{autoClose:!1}))._type="fs";break;case"PIPE":case"TCP":var a=t(15);(r=new a.Socket({fd:e,readable:!1,writable:!0})).readable=!1,r.read=null,r._type="pipe",r._handle&&r._handle.unref&&r._handle.unref();break;default:throw new Error("Implement me. Unknown stream file type!")}return r.fd=e,r._isStdio=!0,r}(a);function s(){return process.env.DEBUG}r.formatters.o=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts).split("\n").map(function(e){return e.trim()}).join(" ")},r.formatters.O=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts)},r.enable(s())},function(e,r){e.exports=require("tty")},function(e,r,t){"use strict";
/*!
 * depd
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */e.exports=function(e){var r=!0,t=function(e){var r,t="";e.isNative()?t="native":e.isEval()?(r=e.getScriptNameOrSourceURL())||(t=e.getEvalOrigin()):r=e.getFileName();if(r){t+=r;var n=e.getLineNumber();if(null!=n){t+=":"+n;var o=e.getColumnNumber();o&&(t+=":"+o)}}return t||"unknown source"}(e),n=e.getFunctionName(),o=e.isConstructor(),a="";if(e.isToplevel()||o)o?a+="new "+(n||"<anonymous>"):n?a+=n:(r=!1,a+=t);else{var i=e.getMethodName(),s=function(e){var r=e.receiver;return r.constructor&&r.constructor.name||null}(e);n?(s&&0!==n.indexOf(s)&&(a+=s+"."),a+=n,i&&n.lastIndexOf("."+i)!==n.length-i.length-1&&(a+=" [as "+i+"]")):a+=s+"."+(i||"<anonymous>")}r&&(a+=" ("+t+")");return a}},function(e,r,t){"use strict";
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */e.exports=function(e,r){return e.listeners(r).length}},function(e,r,t){"use strict";
/*!
 * ee-first
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */function n(e,r){return function(t){for(var n=new Array(arguments.length),o="error"===e?t:null,a=0;a<n.length;a++)n[a]=arguments[a];r(o,this,e,n)}}e.exports=function(e,r){if(!Array.isArray(e))throw new TypeError("arg must be an array of [ee, events...] arrays");for(var t=[],o=0;o<e.length;o++){var a=e[o];if(!Array.isArray(a)||a.length<2)throw new TypeError("each array member must be [ee, events...]");for(var i=a[0],s=1;s<a.length;s++){var c=a[s],u=n(c,f);i.on(c,u),t.push({ee:i,event:c,fn:u})}}function f(){l(),r.apply(null,arguments)}function l(){for(var e,r=0;r<t.length;r++)(e=t[r]).ee.removeListener(e.event,e.fn)}function p(e){r=e}return p.cancel=l,p}},function(e,r,t){"use strict";
/*!
 * on-headers
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */Array.prototype.slice;e.exports=function(e,r){if(!e)throw new TypeError("argument res is required");if("function"!=typeof r)throw new TypeError("argument listener must be a function");e.writeHead=function(e,r){var t=!1;return function(n){var o=function(e){var r=arguments.length,t=r>1&&"string"==typeof arguments[1]?2:1,n=r>=t+1?arguments[t]:void 0;if(this.statusCode=e,Array.isArray(n))for(var o=0,a=n.length;o<a;++o)this.setHeader(n[o][0],n[o][1]);else if(n)for(var i=Object.keys(n),o=0;o<i.length;o++){var s=i[o];s&&this.setHeader(s,n[s])}for(var c=new Array(Math.min(r,t)),o=0;o<c.length;o++)c[o]=arguments[o];return c}.apply(this,arguments);t||(t=!0,r.call(this),"number"==typeof o[0]&&this.statusCode!==o[0]&&(o[0]=this.statusCode,o.length=1)),e.apply(this,o)}}(e.writeHead,r)}}]);