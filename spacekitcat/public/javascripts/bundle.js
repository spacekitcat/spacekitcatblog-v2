(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var path = require('path');
var fs = require('fs');
var hackertext = require('../node_modules/hackertextjs/hackertext');

},{"../node_modules/hackertextjs/hackertext":2,"fs":3,"path":4}],2:[function(require,module,exports){
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// AUTHOR  + + + + + Lisa Rae Burton           
///////////////                 //////////// PROJECT + + + + +  hackertextjs                 
//////////////   H A C K E R   //////////// VERSION + + + + + + 0.1.2            
/////////////   T E X T J S   //////////// EMAIL + + + + + + +  0lisa.burton@gmail.com      
////////////                 //////////// LICENSE + + + + + + + MIT  
//////////////////////////////////////// WEB + + + + + + + + +  spacekitcat.com       
////////////////////////////////////////////////////////////////////////

function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var requirejs,require,define;!function(e){function t(e,t){return v.call(e,t)}function n(e,t){var n,r,i,o,a,s,u,l,c,f,h,d=t&&t.split("/"),y=p.map,v=y&&y["*"]||{};if(e){for(a=(e=e.split("/")).length-1,p.nodeIdCompat&&g.test(e[a])&&(e[a]=e[a].replace(g,"")),"."===e[0].charAt(0)&&d&&(e=d.slice(0,d.length-1).concat(e)),c=0;c<e.length;c++)if("."===(h=e[c]))e.splice(c,1),c-=1;else if(".."===h){if(0===c||1===c&&".."===e[2]||".."===e[c-1])continue;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}if((d||v)&&y){for(c=(n=e.split("/")).length;c>0;c-=1){if(r=n.slice(0,c).join("/"),d)for(f=d.length;f>0;f-=1)if((i=y[d.slice(0,f).join("/")])&&(i=i[r])){o=i,s=c;break}if(o)break;!u&&v&&v[r]&&(u=v[r],l=c)}!o&&u&&(o=u,s=l),o&&(n.splice(0,s,o),e=n.join("/"))}return e}function r(t,n){return function(){var r=m.call(arguments,0);return"string"!=typeof r[0]&&1===r.length&&r.push(null),l.apply(e,r.concat([t,n]))}}function i(e){return function(t){h[e]=t}}function o(n){if(t(d,n)){var r=d[n];delete d[n],y[n]=!0,u.apply(e,r)}if(!t(h,n)&&!t(y,n))throw new Error("No "+n);return h[n]}function a(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function s(e){return e?a(e):[]}var u,l,c,f,h={},d={},p={},y={},v=Object.prototype.hasOwnProperty,m=[].slice,g=/\.js$/;c=function(e,t){var r,i,s=a(e),u=s[0],l=t[1];return e=s[1],u&&(r=o(u=n(u,l))),u?e=r&&r.normalize?r.normalize(e,(i=l,function(e){return n(e,i)})):n(e,l):(u=(s=a(e=n(e,l)))[0],e=s[1],u&&(r=o(u))),{f:u?u+"!"+e:e,n:e,pr:u,p:r}},f={require:function(e){return r(e)},exports:function(e){var t=h[e];return void 0!==t?t:h[e]={}},module:function(e){return{id:e,uri:"",exports:h[e],config:(t=e,function(){return p&&p.config&&p.config[t]||{}})};var t}},u=function(n,a,u,l){var p,v,m,g,w,b,_,C=[],k=typeof u;if(b=s(l=l||n),"undefined"===k||"function"===k){for(a=!a.length&&u.length?["require","exports","module"]:a,w=0;w<a.length;w+=1)if("require"===(v=(g=c(a[w],b)).f))C[w]=f.require(n);else if("exports"===v)C[w]=f.exports(n),_=!0;else if("module"===v)p=C[w]=f.module(n);else if(t(h,v)||t(d,v)||t(y,v))C[w]=o(v);else{if(!g.p)throw new Error(n+" missing "+v);g.p.load(g.n,r(l,!0),i(v),{}),C[w]=h[v]}m=u?u.apply(h[n],C):void 0,n&&(p&&p.exports!==e&&p.exports!==h[n]?h[n]=p.exports:m===e&&_||(h[n]=m))}else n&&(h[n]=u)},requirejs=require=l=function(t,n,r,i,a){if("string"==typeof t)return f[t]?f[t](n):o(c(t,s(n)).f);if(!t.splice){if((p=t).deps&&l(p.deps,p.callback),!n)return;n.splice?(t=n,n=r,r=null):t=e}return n=n||function(){},"function"==typeof r&&(r=i,i=a),i?u(e,t,n,r):setTimeout(function(){u(e,t,n,r)},4),l},l.config=function(e){return l(e)},requirejs._defined=h,(define=function(e,n,r){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");n.splice||(r=n,n=[]),t(h,e)||t(d,e)||(d[e]=[e,n,r])}).amd={jQuery:!0}}(),define("almond",function(){});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("FrameRenderer",[],function(){return function(){function e(t){_classCallCheck(this,e),this.defaultOptions={noiseratio:.5,dynamicnoiseratio:!1},this.currentFrame="",this.framesize=500,this.setOptions(t)}return _createClass(e,[{key:"isValidKey",value:function(e,t){return Object.keys(e).includes(t)}},{key:"validateCustomOptions",value:function(e,t){var n=this;return Object.keys(t).every(function(t){return n.isValidKey(e,t)})}}]),_createClass(e,[{key:"getOptions",value:function(){return this.options}},{key:"computeNextFrame",value:function(){var e=this.options.noiseratio;!0===this.options.dynamicnoiseratio&&(e=Math.random());for(var t="",n=0;n<this.getFrameSize();++n)Math.random()>e?t+=this.dataSource.getNext():t+="_";return t}},{key:"reset",value:function(){this.currentFrame=""}},{key:"getText",value:function(){return this.entryGenerator.getStringIterator().getText()}},{key:"getStringIterator",value:function(){return this.entryGenerator.getStringIterator()}},{key:"getOptionValue",value:function(e){if(null==e)throw new Error("An option key must be provided.");return this.options[e]}},{key:"setOptions",value:function(e){if(this.options=Object.assign({},this.defaultOptions),null!=e){if(!this.validateCustomOptions(this.defaultOptions,e))throw new Error("invalid options");this.options=Object.assign(this.options,e)}}},{key:"setOptionValue",value:function(e,t){if(null==e)throw new Error("An option key must be provided.");if(!this.isValidKey(this.defaultOptions,e))throw new Error('invalid option key "'+e+'"  provided.');if(null==t)throw new Error("A value must be provided.");this.options[e]=t}},{key:"setDataSource",value:function(e){this.dataSource=e}},{key:"setFrameSize",value:function(e){this.framesize=e}},{key:"getFrameSize",value:function(){return this.framesize}}]),e}()});_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("TextCharacterWidthCalculator",[],function(){return function(){function e(){_classCallCheck(this,e),this.SAMPLE_STR="abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ_"}return _createClass(e,[{key:"appendHiddenDomNode",value:function(e){var t="#"+e;0===$(t).length&&$("body").append('<span id="'+e+'">'+this.SAMPLE_STR+"</span>"),$(t).css("position","relative"),$(t).css("float","right"),$(t).css("visibility","hidden"),$(t).css("margin","0"),$(t).css("padding","0")}},{key:"configureSamplerNode",value:function(){var e=Date.now();return this.appendHiddenDomNode(e),$("#"+e)}},{key:"computeAverageCharWidth",value:function(e){var t=e[0].getBoundingClientRect().width/this.SAMPLE_STR.length;return Math.round(100*t)/100}},{key:"computeFontSize",value:function(e){if(null==e)throw new TypeError("CSS object must be provided and cannot be null.");var t=this.configureSamplerNode();t.css(e);var n=this.computeAverageCharWidth(t);return t.remove(),n}}]),e}()});_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("Widget",["FrameRenderer","TextCharacterWidthCalculator"],function(e,t){return function(){function n(r,i){if(_classCallCheck(this,n),null==r)throw new TypeError("Target jQuery element (target_node) must be provided.");if(!(r instanceof jQuery))throw new TypeError("Target element (target_node) must be of type jQuery.");if(null==i)throw new TypeError("FrameRenderer (renderer) must be provided.");if(!(i instanceof e))throw new TypeError("Renderer (renderer) must be of type FrameRenderer.");this.target_node=r,this.renderer=i,this.rowcount=42,this.textCharacterWidthCalculator=new t}return _createClass(n,[{key:"paint",value:function(){var e=this.renderer.computeNextFrame();this.target_node.html(e)}},{key:"getRenderer",value:function(){return this.renderer}},{key:"getTargetNode",value:function(){return this.target_node}},{key:"getRowCount",value:function(){return this.rowcount}},{key:"setRowCount",value:function(e){if(null==e)throw new TypeError("rowcount parameter must be provided.");if(e<=0)throw new RangeError("rowcount must be a positive integer.");this.rowcount=e}},{key:"computeFrameSize",value:function(){this.target_node.css("width","100%");var e=this.textCharacterWidthCalculator.computeFontSize(this.target_node.css(["font-size","font-family","word-wrap"])),t=Math.round(this.target_node.width()/e),n=this.getRowCount()*t;this.target_node.css("width",t+"ch"),this.renderer.setFrameSize(n)}},{key:"notify",value:function(e){console.log("Resize notification received."),this.computeFrameSize()}}]),n}()});_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("AnimationScheduler",["Widget"],function(e){return function(){function t(){_classCallCheck(this,t),this._painters=[],this._painters_fps=[],this.then=null}return _createClass(t,[{key:"addPainter",value:function(t,n){if(null==t)throw new TypeError("Widget instance must be provided.");if(!(t instanceof e))throw new TypeError("first argument must be an instance of Widget.");if(null==n)throw new TypeError("frameRate value must be provided.");this._painters.push(t),this._painters_fps.push({framerate:n,then:0,elapsed:0})}},{key:"getPainters",value:function(){return this._painters}},{key:"_step",value:function(e){for(var t=0;t<this._painters.length;++t){var n=this._painters_fps[t].framerate,r=this._painters_fps[t].then,i=this._painters_fps[t].elapsed;(i=e-r)>=1e3/n&&(this._painters_fps[t].then=e-i%n,this._painters[t].paint()),this._painters_fps[t].elapsed=i}window.requestAnimationFrame(this._step.bind(this))}},{key:"_init",value:function(){for(var e=0;e<this._painters.length;++e)this._painters[e].paint()}},{key:"start",value:function(){this._painters.length>0&&(this._init(),window.requestAnimationFrame(this._step.bind(this)))}}]),t}()});_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("StringIterator",[],function(){return function(){function e(t){_classCallCheck(this,e),this.textString=null==t?"":t,this.textStringIndex=0}return _createClass(e,[{key:"getNext",value:function(){return 0===this.textString.length?"":(this.textStringIndex>=this.textString.length&&(this.textStringIndex=0),this.textString[this.textStringIndex++])}},{key:"reset",value:function(){this.textStringIndex=0}},{key:"getText",value:function(){return this.textString}},{key:"setText",value:function(e){this.textString=e}}]),e}()});_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("FrameRendererBuilder",["FrameRenderer","StringIterator"],function(e,t){return function(){function n(){_classCallCheck(this,n),this.reset()}return _createClass(n,[{key:"reset",value:function(){this.instance=new e}},{key:"build",value:function(){var e=this.instance;return this.reset(),e.setOptionValue("dynamicnoiseratio",!0),e}},{key:"setText",value:function(e){return this.instance.setDataSource(new t(e)),this}},{key:"setOptions",value:function(e){return this.instance.setOptions(e),this}}]),n}()});_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("WidgetBuilder",["FrameRendererBuilder","Widget"],function(e,t){return function(){function n(t){_classCallCheck(this,n),this.frameRendererBuilder=new e,this.target_node=t,this.row_count=void 0}return _createClass(n,[{key:"build",value:function(){var e=new t(this.target_node,this.frameRendererBuilder.build());return void 0!==this.row_count&&(e.setRowCount(this.row_count),this.row_count=void 0),e}},{key:"setText",value:function(e){return this.frameRendererBuilder.setText(e),this}},{key:"setOptions",value:function(e){return this.frameRendererBuilder.setOptions(e),this}},{key:"setRowCount",value:function(e){return this.row_count=e,this}},{key:"setTargetNode",value:function(e){return this.target_node=e,this}}]),n}()});_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("DomInitialiser",[],function(){return function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"buildIdSelector",value:function(e){var t=e;return e.startsWith("#")||(t="#"+e),t}},{key:"initialiseDomNode",value:function(e){if(null==e)throw new TypeError("Widget config object cannot be null.");if(void 0===e.htmlId||null===e.htmlId)throw new TypeError("widgetConfig.htmlId must be declared.");var t=this.buildIdSelector(e.htmlId);if("#"===t)throw new TypeError("Parameter widgetConfig.htmlId id cannot be blank.");var n=$(t);if(0==n.length)throw new TypeError('DOM does not contain any elements with the query "'+t+"'.");return n.addClass("hackertext"),n}}]),e}()});_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("DocumentEventObservable",[],function(){return function(){function e(){_classCallCheck(this,e),this.observers=[]}return _createClass(e,[{key:"attach",value:function(e){if(null==e)throw new TypeError("Observer object cannot be null.");if(!(e.notify instanceof Function))throw new TypeError("Observer objects must define a notify function.");this.observers.push(e)}},{key:"detach",value:function(e){if(null==e)throw new TypeError("Observer object cannot be null.");var t=this.observers.indexOf(e);this.observers.splice(t,1)}},{key:"notify",value:function(){var e=this;this.observers.forEach(function(t){t.notify(e)})}},{key:"getObservers",value:function(){return this.observers}}]),e}()});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};define("Application",["Widget","AnimationScheduler","WidgetBuilder","DomInitialiser","DocumentEventObservable","TextCharacterWidthCalculator"],function(e,t,n,r,i,o,a){var s=new i;return function(){if(new o,null!=("undefined"==typeof hacker_text_config?"undefined":_typeof(hacker_text_config))){var e=new t;hacker_text_config.targets.forEach(function(t){try{var i=(o=t,a=new n,u=(new r).initialiseDomNode(o),l=a.setTargetNode(u).setText(o.text).setRowCount(o.rows).setOptions({dynamicnoiseratio:!0}).build(),s.attach(l),l);e.addPainter(i,t.framerate)}catch(e){console.log("Couldn't create widget: "+e)}var o,a,u,l}),e.start(),$(window).resize(function(){s.notify()}),s.notify()}else console.log("Global variable, hacker_text_targets, must be defined in the same scope as this script."),console.log("Please see the README.md for more information.")}}),require(["Application"],function(e){$(window).ready(function(){e()})}),define("hackertext.js",function(){});
},{}],3:[function(require,module,exports){

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
