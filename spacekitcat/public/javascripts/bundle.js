(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var path = require('path');
var fs = require('fs');
var hackertext = require('../node_modules/hackertextjs/dist/hackertext');

},{"../node_modules/hackertextjs/dist/hackertext":3,"fs":2,"path":4}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// AUTHOR  + + + + + Lisa Rae Burton           
///////////////                 //////////// PROJECT + + + + +  hackertextjs                 
//////////////   H A C K E R   //////////// VERSION + + + + + + 0.4.0            
/////////////   T E X T J S   //////////// EMAIL + + + + + + +  0lisa.burton@gmail.com      
////////////                 //////////// LICENSE + + + + + + + MIT  
//////////////////////////////////////// WEB + + + + + + + + +  spacekitcat.com       
////////////////////////////////////////////////////////////////////////

function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var requirejs,require,define;!function(d){function p(e,t){return r.call(e,t)}function u(e,t){var r,n,i,o,a,u,s,l,c,f,h,d=t&&t.split("/"),p=C.map,v=p&&p["*"]||{};if(e){for(a=(e=e.split("/")).length-1,C.nodeIdCompat&&O.test(e[a])&&(e[a]=e[a].replace(O,"")),"."===e[0].charAt(0)&&d&&(e=d.slice(0,d.length-1).concat(e)),c=0;c<e.length;c++)if("."===(h=e[c]))e.splice(c,1),c-=1;else if(".."===h){if(0===c||1===c&&".."===e[2]||".."===e[c-1])continue;0<c&&(e.splice(c-1,2),c-=2)}e=e.join("/")}if((d||v)&&p){for(c=(r=e.split("/")).length;0<c;c-=1){if(n=r.slice(0,c).join("/"),d)for(f=d.length;0<f;f-=1)if((i=p[d.slice(0,f).join("/")])&&(i=i[n])){o=i,u=c;break}if(o)break;!s&&v&&v[n]&&(s=v[n],l=c)}!o&&s&&(o=s,u=l),o&&(r.splice(0,u,o),e=r.join("/"))}return e}function v(t,r){return function(){var e=n.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),a.apply(d,e.concat([t,r]))}}function y(t){return function(e){k[t]=e}}function m(e){if(p(S,e)){var t=S[e];delete S[e],_[e]=!0,o.apply(d,t)}if(!p(k,e)&&!p(_,e))throw new Error("No "+e);return k[e]}function s(e){var t,r=e?e.indexOf("!"):-1;return-1<r&&(t=e.substring(0,r),e=e.substring(r+1,e.length)),[t,e]}function g(e){return e?s(e):[]}var o,a,w,b,k={},S={},C={},_={},r=Object.prototype.hasOwnProperty,n=[].slice,O=/\.js$/;w=function(e,t){var r,n,i=s(e),o=i[0],a=t[1];return e=i[1],o&&(r=m(o=u(o,a))),o?e=r&&r.normalize?r.normalize(e,(n=a,function(e){return u(e,n)})):u(e,a):(o=(i=s(e=u(e,a)))[0],e=i[1],o&&(r=m(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:r}},b={require:function(e){return v(e)},exports:function(e){var t=k[e];return void 0!==t?t:k[e]={}},module:function(e){return{id:e,uri:"",exports:k[e],config:(t=e,function(){return C&&C.config&&C.config[t]||{}})};var t}},o=function(e,t,r,n){var i,o,a,u,s,l,c,f=[],h=typeof r;if(l=g(n=n||e),"undefined"===h||"function"===h){for(t=!t.length&&r.length?["require","exports","module"]:t,s=0;s<t.length;s+=1)if("require"===(o=(u=w(t[s],l)).f))f[s]=b.require(e);else if("exports"===o)f[s]=b.exports(e),c=!0;else if("module"===o)i=f[s]=b.module(e);else if(p(k,o)||p(S,o)||p(_,o))f[s]=m(o);else{if(!u.p)throw new Error(e+" missing "+o);u.p.load(u.n,v(n,!0),y(o),{}),f[s]=k[o]}a=r?r.apply(k[e],f):void 0,e&&(i&&i.exports!==d&&i.exports!==k[e]?k[e]=i.exports:a===d&&c||(k[e]=a))}else e&&(k[e]=r)},requirejs=require=a=function(e,t,r,n,i){if("string"==typeof e)return b[e]?b[e](t):m(w(e,g(t)).f);if(!e.splice){if((C=e).deps&&a(C.deps,C.callback),!t)return;t.splice?(e=t,t=r,r=null):e=d}return t=t||function(){},"function"==typeof r&&(r=n,n=i),n?o(d,e,t,r):setTimeout(function(){o(d,e,t,r)},4),a},a.config=function(e){return a(e)},requirejs._defined=k,(define=function(e,t,r){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(r=t,t=[]),p(k,e)||p(S,e)||(S[e]=[e,t,r])}).amd={jQuery:!0}}(),define("almond",function(){});var _createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("FrameRenderer",[],function(){return function(){function n(e){_classCallCheck(this,n),this.defaultOptions={noiseratio:.5,dynamicnoiseratio:!1},this.currentFrame="",this.framesize=500,this.setOptions(e)}return _createClass(n,null,[{key:"isValidKey",value:function(e,t){return Object.keys(e).includes(t)}},{key:"validateCustomOptions",value:function(t,e){var r=function(e){return n.isValidKey(t,e)};return Object.keys(e).every(r)}}]),_createClass(n,[{key:"setFrameRenderStrategy",value:function(e){if(null==e)throw new Error("setFrameRenderStrategy requires the argument frameRenderStrategyImpl");if(null===e.render||void 0===e.render)throw new Error("frameRenderStrategyImpl must provide an implementation of render(..)");this.frameRenderStrategy=e}},{key:"getFrameRenderStrategy",value:function(){return this.frameRenderStrategy}},{key:"getOptions",value:function(){return this.options}},{key:"render",value:function(e){var t=this.options.noiseratio;!0===this.options.dynamicnoiseratio&&(t=Math.random());for(var r="",n=0;n<e;n+=1)Math.random()>t?r+=this.dataSource.getNext():r+="_";return r}},{key:"computeNextFrame",value:function(){return void 0===this.frameRenderStrategy?Array(this.getFrameSize()+1).join("_"):this.frameRenderStrategy.render(this.getFrameSize())}},{key:"reset",value:function(){this.currentFrame=""}},{key:"getOptionValue",value:function(e){if(null==e)throw new Error("An option key must be provided.");return this.options[e]}},{key:"setOptions",value:function(e){if(this.options=Object.assign({},this.defaultOptions),null!=e){if(!n.validateCustomOptions(this.defaultOptions,e))throw new Error("invalid options");this.options=Object.assign(this.options,e)}}},{key:"setOptionValue",value:function(e,t){if(null==e)throw new Error("An option key must be provided.");if(!n.isValidKey(this.defaultOptions,e))throw new Error('invalid option key "'+String(e)+'"  provided.');if(null==t)throw new Error("A value must be provided.");this.options[e]=t}},{key:"setTextDataSource",value:function(e){this.dataSource=e}},{key:"getTextDataSource",value:function(){return this.dataSource}},{key:"setFrameSize",value:function(e){this.framesize=e}},{key:"getFrameSize",value:function(){return this.framesize}}]),n}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("TextCharacterWidthCalculator",[],function(){return function(){function e(){_classCallCheck(this,e),this.SAMPLE_STR="abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ_"}return _createClass(e,[{key:"appendHiddenDomNode",value:function(e){var t="#"+String(e);0===$(t).length&&$("body").append('<span id="'+String(e)+'">'+String(this.SAMPLE_STR)+"</span>"),$(t).css("position","relative"),$(t).css("float","right"),$(t).css("visibility","hidden"),$(t).css("margin","0"),$(t).css("padding","0")}},{key:"configureSamplerNode",value:function(){var e=Date.now();return this.appendHiddenDomNode(e),$("#"+String(e))}},{key:"computeAverageCharWidth",value:function(e){var t=e[0].getBoundingClientRect().width/this.SAMPLE_STR.length;return Math.round(100*t)/100}},{key:"computeFontSize",value:function(e){if(null==e)throw new TypeError("CSS object must be provided and cannot be null.");var t=this.configureSamplerNode();t.css(e);var r=this.computeAverageCharWidth(t);return t.remove(),r}}]),e}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("Widget",["FrameRenderer","TextCharacterWidthCalculator"],function(n,i){return function(){function r(e,t){if(_classCallCheck(this,r),null==e)throw new TypeError("Target jQuery element (targetNode) must be provided.");if(!(e instanceof jQuery))throw new TypeError("Target element (targetNode) must be of type jQuery.");if(null==t)throw new TypeError("FrameRenderer (renderer) must be provided.");if(!(t instanceof n))throw new TypeError("Renderer (renderer) must be of type FrameRenderer.");this.targetNode=e,this.renderer=t,this.rowcount=42,this.textCharacterWidthCalculator=new i,this.debug=!1}return _createClass(r,[{key:"paint",value:function(){var e=this.renderer.computeNextFrame();this.targetNode.html(e),this.computeFrameSize()}},{key:"getRenderer",value:function(){return this.renderer}},{key:"getTargetNode",value:function(){return this.targetNode}},{key:"getRowCount",value:function(){return this.rowcount}},{key:"setRowCount",value:function(e){if(null==e)throw new TypeError("rowcount parameter must be provided.");if(e<=0)throw new RangeError("rowcount must be a positive integer.");this.rowcount=e}},{key:"computeFrameSize",value:function(){this.targetNode.get(0).style.width="100%";var e=this.textCharacterWidthCalculator.computeFontSize(this.targetNode.css(["font-size","font-family","word-wrap"])),t=Math.round(this.targetNode.width()/e)-1,r=this.getRowCount()*t;this.debug&&(console.log("Widget width: "+String(this.targetNode.width())),console.log("Char width: "+String(e)),console.log("Row char count: "+t),console.log("Frame char count: "+r));var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);this.targetNode.get(0).style.width=n?t+" ch":t+"ch",this.renderer.setFrameSize(r)}},{key:"notify",value:function(){console.log("Resize notification received."),this.computeFrameSize()}}]),r}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("AnimationScheduler",["Widget"],function(r){return function(){function e(){_classCallCheck(this,e),this.painters=[],this.painterFps=[],this.then=null}return _createClass(e,[{key:"addPainter",value:function(e,t){if(null==e)throw new TypeError("Widget instance must be provided.");if(!(e instanceof r))throw new TypeError("first argument must be an instance of Widget.");if(null==t)throw new TypeError("frameRate value must be provided.");this.painters.push(e),this.painterFps.push({framerate:t,then:0,elapsed:0})}},{key:"getPainters",value:function(){return this.painters}},{key:"step",value:function(e){for(var t=0;t<this.painters.length;t+=1){var r=this.painterFps[t].framerate,n=this.painterFps[t].then,i=this.painterFps[t].elapsed;1e3/r<=(i=e-n)&&(this.painterFps[t].then=e-i%r,this.painters[t].paint()),this.painterFps[t].elapsed=i}window.requestAnimationFrame(this.step.bind(this))}},{key:"init",value:function(){for(var e=0;e<this.painters.length;e+=1)this.painters[e].paint()}},{key:"start",value:function(){0<this.painters.length&&(this.init(),window.requestAnimationFrame(this.step.bind(this)))}}]),e}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("DocumentEventObservable",[],function(){return function(){function e(){_classCallCheck(this,e),this.observers=[]}return _createClass(e,[{key:"attach",value:function(e){if(null==e)throw new TypeError("Observer object cannot be null.");if(!(e.notify instanceof Function))throw new TypeError("Observer objects must define a notify function.");this.observers.push(e)}},{key:"detach",value:function(e){if(null==e)throw new TypeError("Observer object cannot be null.");var t=this.observers.indexOf(e);this.observers.splice(t,1)}},{key:"notify",value:function(){var t=this;this.observers.forEach(function(e){e.notify(t)})}},{key:"getObservers",value:function(){return this.observers}}]),e}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("FrameRendererBuilder",["FrameRenderer"],function(t){return function(){function e(){_classCallCheck(this,e),this.reset()}return _createClass(e,[{key:"reset",value:function(){this.instance=new t}},{key:"build",value:function(){var e=this.instance;return this.reset(),e.setOptionValue("dynamicnoiseratio",!0),e}},{key:"setTextDataSource",value:function(e){return this.instance.setTextDataSource(e),this}},{key:"setOptions",value:function(e){return this.instance.setOptions(e),this}},{key:"setRenderStrategy",value:function(e){return this.instance.setFrameRenderStrategy(e),this}}]),e}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("WidgetBuilder",["FrameRendererBuilder","Widget"],function(r,n){return function(){function t(e){_classCallCheck(this,t),this.frameRendererBuilder=new r,this.targetNode=e,this.rowCount=void 0}return _createClass(t,[{key:"build",value:function(){var e=new n(this.targetNode,this.frameRendererBuilder.build());return void 0!==this.rowCount&&(e.setRowCount(this.rowCount),this.rowCount=void 0),e}},{key:"setTextDataSource",value:function(e){return this.frameRendererBuilder.setTextDataSource(e),this}},{key:"setFrameRenderStrategy",value:function(e){return this.frameRendererBuilder.setRenderStrategy(e),this}},{key:"setOptions",value:function(e){return this.frameRendererBuilder.setOptions(e),this}},{key:"setRowCount",value:function(e){return this.rowCount=e,this}},{key:"setTargetNode",value:function(e){return this.targetNode=e,this}}]),t}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("DomInitialiser",[],function(){return function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"buildIdSelector",value:function(e){var t=e;return e.startsWith("#")||(t="#"+String(e)),t}},{key:"initialiseDomNode",value:function(e){if(null==e)throw new TypeError("Widget config object cannot be null.");if(void 0===e.htmlId||null===e.htmlId)throw new TypeError("widgetConfig.htmlId must be declared.");var t=n.buildIdSelector(e.htmlId);if("#"===t)throw new TypeError("Parameter widgetConfig.htmlId id cannot be blank.");var r=$(t);if(0===r.length)throw new TypeError("DOM does not contain element matching "+String(t)+".");return r.addClass("hackertext"),r}}]),n}()}),define("WhiteSpaceSourceFilter",[],function(){function r(e){return e.replace(/\t/g,function(){for(var e=i,t=0;t<n-1;t+=1)e+=i;return e}())}function t(e){var t=r(e);return t.replace(/ /g,i)}var n=8,i="_";return function(e){if(void 0===e)throw new TypeError("No arguments provided. The character argument must be provided.");if(null===e)throw new TypeError("Invalid argument provided - the character cannot be null.");return t(e)}}),define("ToUpperCaseSourceFilter",[],function(){return function(e){if(void 0===e)throw new TypeError("No arguments provided. The character argument must be provided.");if(null===e)throw new TypeError("Invalid argument provided - the character cannot be null.");return e.toUpperCase()}}),define("SpecialCharacterSourceFilter",[],function(){return function(e){var t=e;if(void 0===t)throw new TypeError("No arguments provided. The character argument must be provided.");if(null===t)throw new TypeError("Invalid argument provided - the character cannot be null.");return t.match(/[-.|]/g)&&(t="_"),t}});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("TextDataSource",["WhiteSpaceSourceFilter","ToUpperCaseSourceFilter","SpecialCharacterSourceFilter"],function(t,r,n){return function(){function e(){_classCallCheck(this,e),this.core_filters=[],this.core_filters.push(t),this.core_filters.push(r),this.core_filters.push(n),this.extra_filters=[]}return _createClass(e,[{key:"getNext",value:function(){if(void 0===this.iteratorSource||null===this.iteratorSource)return"_";var t=this.iteratorSource.getNext();return""===t&&(t="_"),this.core_filters.forEach(function(e){t=e(t)}),this.extra_filters.forEach(function(e){t=e(t)}),t}},{key:"setIteratorSource",value:function(e){this.iteratorSource=e}},{key:"addFilter",value:function(e){this.extra_filters.push(e)}},{key:"getFilters",value:function(){return this.extra_filters}}]),e}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("StringIterator",[],function(){return function(){function t(e){_classCallCheck(this,t),this.textString=null==e?"":e,this.textStringIndex=0}return _createClass(t,[{key:"getNext",value:function(){if(0===this.textString.length)return"";this.textStringIndex>=this.textString.length&&(this.textStringIndex=0);var e=this.textString[this.textStringIndex];return this.textStringIndex+=1,e}},{key:"reset",value:function(){this.textStringIndex=0}},{key:"getText",value:function(){return this.textString}},{key:"setText",value:function(e){this.textString=e}}]),t}()}),define("LeetSourceFilter",[],function(){var n=new Map;return n.set("a","4"),n.set("A","4"),n.set("l","1"),n.set("L","1"),n.set("t","7"),n.set("T","7"),n.set("s","5"),n.set("S","5"),n.set("o","0"),n.set("O","0"),n.set("e","3"),n.set("E","3"),function(e){if(void 0===e)throw new TypeError("No arguments provided. The character argument must be provided.");if(null===e)throw new TypeError("Invalid argument provided - the character cannot be null.");return r=t=e,n.has(t)&&(r=n.get(t)),r;var t,r}});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("TextDataSourceFactory",["TextDataSource","StringIterator","LeetSourceFilter"],function(r,n,i){return function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"makeCoreTextDataSource",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=new r;return t.setIteratorSource(new n(e)),t}},{key:"makeLeetTextDataSource",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=new r;return t.setIteratorSource(new n(e)),t.addFilter(i),t}}]),e}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("RandomizedFrameRenderStrategy",[],function(){return function(){function n(e){_classCallCheck(this,n),this.defaultOptions={noiseratio:.5,dynamicnoiseratio:!1},this.currentFrame="",this.framesize=500,this.setOptions(e)}return _createClass(n,[{key:"isValidKey",value:function(e,t){return Object.keys(e).includes(t)}},{key:"validateCustomOptions",value:function(t,e){var r=function(e){return n.isValidKey(t,e)};return Object.keys(e).every(r)}}]),_createClass(n,[{key:"getOptions",value:function(){return this.options}},{key:"render",value:function(e){if(null===this.dataSource||void 0===this.dataSource)throw new Error("Data source object must provide an implementation of getNext.");var t=this.options.noiseratio;!0===this.options.dynamicnoiseratio&&(t=Math.random());for(var r="",n=0;n<e;n+=1)Math.random()>t?r+=this.dataSource.getNext():r+="_";return r}},{key:"computeNextFrame",value:function(){if(null===this.dataSource||void 0===this.dataSource)throw new Error("Data source object must provide an implementation of getNext.");return this.render(this.getFrameSize())}},{key:"reset",value:function(){this.currentFrame=""}},{key:"getOptionValue",value:function(e){if(null==e)throw new Error("An option key must be provided.");return this.options[e]}},{key:"setOptions",value:function(e){if(this.options=Object.assign({},this.defaultOptions),null!=e){if(!this.validateCustomOptions(this.defaultOptions,e))throw new Error("invalid options");this.options=Object.assign(this.options,e)}}},{key:"setOptionValue",value:function(e,t){if(null==e)throw new Error("An option key must be provided.");if(!this.isValidKey(this.defaultOptions,e))throw new Error("invalid option key "+String(e)+" provided.");if(null==t)throw new Error("A value must be provided.");this.options[e]=t}},{key:"setTextDataSource",value:function(e){this.dataSource=e}},{key:"getTextDataSource",value:function(){return this.dataSource}},{key:"setFrameSize",value:function(e){this.framesize=e}},{key:"getFrameSize",value:function(){return this.framesize}}]),n}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("SinePhaseFrameRenderStrategy",[],function(){return function(){function n(e){_classCallCheck(this,n),this.defaultOptions={noiseratio:.5,dynamicnoiseratio:!1},this.currentFrame="",this.framesize=500,this.setOptions(e)}return _createClass(n,[{key:"isValidKey",value:function(e,t){return Object.keys(e).includes(t)}},{key:"validateCustomOptions",value:function(t,e){var r=function(e){return n.isValidKey(t,e)};return Object.keys(e).every(r)}}]),_createClass(n,[{key:"getOptions",value:function(){return this.options}},{key:"render",value:function(e){var t="";if(null===this.dataSource||void 0===this.dataSource)throw new Error("Data source object must provide an implementation of getNext.");for(var r=Math.abs(Math.sin(3.141*(new Date).getTime()+1)),n=0;n<e;n+=1)Math.random()>r?t+=this.dataSource.getNext():t+="_";return t}},{key:"computeNextFrame",value:function(){if(null===this.dataSource||void 0===this.dataSource)throw new Error("Data source object must provide an implementation of getNext.");return this.render(this.getFrameSize())}},{key:"reset",value:function(){this.currentFrame=""}},{key:"getOptionValue",value:function(e){if(null==e)throw new Error("An option key must be provided.");return this.options[e]}},{key:"setOptions",value:function(e){if(this.options=Object.assign({},this.defaultOptions),null!=e){if(!this.validateCustomOptions(this.defaultOptions,e))throw new Error("invalid options");this.options=Object.assign(this.options,e)}}},{key:"setOptionValue",value:function(e,t){if(null==e)throw new Error("An option key must be provided.");if(!this.isValidKey(this.defaultOptions,e))throw new Error("invalid option key "+String(e)+" provided.");if(null==t)throw new Error("A value must be provided.");this.options[e]=t}},{key:"setTextDataSource",value:function(e){this.dataSource=e}},{key:"getTextDataSource",value:function(){return this.dataSource}},{key:"setFrameSize",value:function(e){this.framesize=e}},{key:"getFrameSize",value:function(){return this.framesize}}]),n}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("CoSinePhaseFrameRenderStrategy",[],function(){return function(){function n(e){_classCallCheck(this,n),this.defaultOptions={noiseratio:.5,dynamicnoiseratio:!1},this.currentFrame="",this.framesize=500,this.setOptions(e)}return _createClass(n,[{key:"isValidKey",value:function(e,t){return Object.keys(e).includes(t)}},{key:"validateCustomOptions",value:function(t,e){var r=function(e){return n.isValidKey(t,e)};return Object.keys(e).every(r)}}]),_createClass(n,[{key:"getOptions",value:function(){return this.options}},{key:"render",value:function(e){var t="";if(null===this.dataSource||void 0===this.dataSource)throw new Error("Data source object must provide an implementation of getNext.");for(var r=Math.abs(Math.cos(3.141*(new Date).getTime()+1)),n=0;n<e;n+=1)Math.random()>r?t+=this.dataSource.getNext():t+="_";return t}},{key:"computeNextFrame",value:function(){if(null===this.dataSource||void 0===this.dataSource)throw new Error("Data source object must provide an implementation of getNext.");return this.render(this.getFrameSize())}},{key:"reset",value:function(){this.currentFrame=""}},{key:"getOptionValue",value:function(e){if(null==e)throw new Error("An option key must be provided.");return this.options[e]}},{key:"setOptions",value:function(e){if(this.options=Object.assign({},this.defaultOptions),null!=e){if(!this.validateCustomOptions(this.defaultOptions,e))throw new Error("invalid options");this.options=Object.assign(this.options,e)}}},{key:"setOptionValue",value:function(e,t){if(null==e)throw new Error("An option key must be provided.");if(!this.isValidKey(this.defaultOptions,e))throw new Error("invalid option key "+String(e)+" provided.");if(null==t)throw new Error("A value must be provided.");this.options[e]=t}},{key:"setTextDataSource",value:function(e){this.dataSource=e}},{key:"getTextDataSource",value:function(){return this.dataSource}},{key:"setFrameSize",value:function(e){this.framesize=e}},{key:"getFrameSize",value:function(){return this.framesize}}]),n}()});_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();define("WidgetAssemblyDirector",["WidgetBuilder","DomInitialiser","TextDataSourceFactory","RandomizedFrameRenderStrategy","SinePhaseFrameRenderStrategy","CoSinePhaseFrameRenderStrategy","LeetSourceFilter"],function(a,u,s,l,c,f,e){return function(){function o(){_classCallCheck(this,o)}return _createClass(o,null,[{key:"instantiateSourceFilter",value:function(t){try{return e}catch(e){throw console.log(e),new Error("The filter '"+String(t)+"' could not be loaded: "+String(e))}}},{key:"instantiateRenderStrategy",value:function(t){try{return require(t)}catch(e){throw console.log(e),new Error("The render strategy '"+String(t)+"' could not be loaded.")}}},{key:"addSourceFilters",value:function(t,e){e&&e.forEach(function(e){return t.addFilter(o.instantiateSourceFilter(e))})}},{key:"assemble",value:function(e){if(null==e)throw new Error("A widget descriptor must be provided.");if(void 0===e.htmlId)throw new Error('An "htmlId" must be defined in each widgetSpecification.');var t=new a,r=u.initialiseDomNode(e),n=s.makeCoreTextDataSource("");void 0!==e.text&&null!==e.text&&(n=s.makeCoreTextDataSource(e.text)),o.addSourceFilters(n,e.text_character_filters);var i=new c;return void 0!==e.renderer&&null!==e.renderer&&(i="CoSinePhaseFrameRenderStrategy"===e.renderer.strategy?new f:"SinePhaseFrameRenderStrategy"===e.renderer.strategy?new c:new l),console.log(i),i.setTextDataSource(n),t.setFrameRenderStrategy(i),t.setTextDataSource(n),t.setTargetNode(r).setRowCount(e.rows).build()}}]),o}()}),define("Application",["AnimationScheduler","DocumentEventObservable","TextCharacterWidthCalculator","WidgetAssemblyDirector"],function(e,t,r,n){var i=new t;return function(){if("undefined"!=typeof hacker_text_config){var r=new e;hacker_text_config.targets.forEach(function(e){try{var t=n.assemble(e);i.attach(t),r.addPainter(t,e.framerate)}catch(e){console.log("Couldn't create widget: "+String(e))}}),r.start(),$(window).resize(function(){i.notify()}),$(document).keypress(function(){i.notify()}),i.notify()}else console.log("Global variable, hacker_text_targets, must be defined."),console.log("Please see the README.md for more information.")}}),require(["Application"],function(e){$(window).ready(function(){e()})}),define("hackertext.js",function(){});
},{}],4:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":5}],5:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
