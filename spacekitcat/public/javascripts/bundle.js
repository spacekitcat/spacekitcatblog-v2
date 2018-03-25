(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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
},{"_process":3}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
var path = require('path');
var fs = require('fs');
var hackertext = require('../node_modules/hackertextjs/hackertext');

},{"../node_modules/hackertextjs/hackertext":5,"fs":1,"path":2}],5:[function(require,module,exports){
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// AUTHOR  + + + + + Lisa Rae Burton           
///////////////                 //////////// PROJECT + + + + +  hackertextjs                 
//////////////   H A C K E R   //////////// VERSION + + + + + + 0.1.5            
/////////////   T E X T J S   //////////// EMAIL + + + + + + +  0lisa.burton@gmail.com      
////////////                 //////////// LICENSE + + + + + + + MIT  
//////////////////////////////////////// WEB + + + + + + + + +  spacekitcat.com       
////////////////////////////////////////////////////////////////////////

function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var requirejs,require,define;!function(d){function p(e,t){return n.call(e,t)}function s(e,t){var n,r,i,o,a,s,u,l,c,f,h,d=t&&t.split("/"),p=k.map,y=p&&p["*"]||{};if(e){for(a=(e=e.split("/")).length-1,k.nodeIdCompat&&S.test(e[a])&&(e[a]=e[a].replace(S,"")),"."===e[0].charAt(0)&&d&&(e=d.slice(0,d.length-1).concat(e)),c=0;c<e.length;c++)if("."===(h=e[c]))e.splice(c,1),c-=1;else if(".."===h){if(0===c||1===c&&".."===e[2]||".."===e[c-1])continue;0<c&&(e.splice(c-1,2),c-=2)}e=e.join("/")}if((d||y)&&p){for(c=(n=e.split("/")).length;0<c;c-=1){if(r=n.slice(0,c).join("/"),d)for(f=d.length;0<f;f-=1)if((i=p[d.slice(0,f).join("/")])&&(i=i[r])){o=i,s=c;break}if(o)break;!u&&y&&y[r]&&(u=y[r],l=c)}!o&&u&&(o=u,s=l),o&&(n.splice(0,s,o),e=n.join("/"))}return e}function y(t,n){return function(){var e=r.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),a.apply(d,e.concat([t,n]))}}function v(t){return function(e){_[t]=e}}function g(e){if(p(C,e)){var t=C[e];delete C[e],x[e]=!0,o.apply(d,t)}if(!p(_,e)&&!p(x,e))throw new Error("No "+e);return _[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function m(e){return e?u(e):[]}var o,a,w,b,_={},C={},k={},x={},n=Object.prototype.hasOwnProperty,r=[].slice,S=/\.js$/;w=function(e,t){var n,r,i=u(e),o=i[0],a=t[1];return e=i[1],o&&(n=g(o=s(o,a))),o?e=n&&n.normalize?n.normalize(e,(r=a,function(e){return s(e,r)})):s(e,a):(o=(i=u(e=s(e,a)))[0],e=i[1],o&&(n=g(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:n}},b={require:function(e){return y(e)},exports:function(e){var t=_[e];return void 0!==t?t:_[e]={}},module:function(e){return{id:e,uri:"",exports:_[e],config:(t=e,function(){return k&&k.config&&k.config[t]||{}})};var t}},o=function(e,t,n,r){var i,o,a,s,u,l,c,f=[],h=typeof n;if(l=m(r=r||e),"undefined"===h||"function"===h){for(t=!t.length&&n.length?["require","exports","module"]:t,u=0;u<t.length;u+=1)if("require"===(o=(s=w(t[u],l)).f))f[u]=b.require(e);else if("exports"===o)f[u]=b.exports(e),c=!0;else if("module"===o)i=f[u]=b.module(e);else if(p(_,o)||p(C,o)||p(x,o))f[u]=g(o);else{if(!s.p)throw new Error(e+" missing "+o);s.p.load(s.n,y(r,!0),v(o),{}),f[u]=_[o]}a=n?n.apply(_[e],f):void 0,e&&(i&&i.exports!==d&&i.exports!==_[e]?_[e]=i.exports:a===d&&c||(_[e]=a))}else e&&(_[e]=n)},requirejs=require=a=function(e,t,n,r,i){if("string"==typeof e)return b[e]?b[e](t):g(w(e,m(t)).f);if(!e.splice){if((k=e).deps&&a(k.deps,k.callback),!t)return;t.splice?(e=t,t=n,n=null):e=d}return t=t||function(){},"function"==typeof n&&(n=r,r=i),r?o(d,e,t,n):setTimeout(function(){o(d,e,t,n)},4),a},a.config=function(e){return a(e)},requirejs._defined=_,(define=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),p(_,e)||p(C,e)||(C[e]=[e,t,n])}).amd={jQuery:!0}}(),define("almond",function(){});var _createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();define("FrameRenderer",[],function(){return function(){function t(e){_classCallCheck(this,t),this.defaultOptions={noiseratio:.5,dynamicnoiseratio:!1},this.currentFrame="",this.framesize=500,this.setOptions(e)}return _createClass(t,[{key:"isValidKey",value:function(e,t){return Object.keys(e).includes(t)}},{key:"validateCustomOptions",value:function(t,e){var n=this;return Object.keys(e).every(function(e){return n.isValidKey(t,e)})}}]),_createClass(t,[{key:"getOptions",value:function(){return this.options}},{key:"computeNextFrame",value:function(){var e=this.options.noiseratio;!0===this.options.dynamicnoiseratio&&(e=Math.random());for(var t="",n=0;n<this.getFrameSize();++n)Math.random()>e?t+=this.dataSource.getNext():t+="_";return t}},{key:"reset",value:function(){this.currentFrame=""}},{key:"getText",value:function(){return this.entryGenerator.getStringIterator().getText()}},{key:"getStringIterator",value:function(){return this.entryGenerator.getStringIterator()}},{key:"getOptionValue",value:function(e){if(null==e)throw new Error("An option key must be provided.");return this.options[e]}},{key:"setOptions",value:function(e){if(this.options=Object.assign({},this.defaultOptions),null!=e){if(!this.validateCustomOptions(this.defaultOptions,e))throw new Error("invalid options");this.options=Object.assign(this.options,e)}}},{key:"setOptionValue",value:function(e,t){if(null==e)throw new Error("An option key must be provided.");if(!this.isValidKey(this.defaultOptions,e))throw new Error('invalid option key "'+e+'"  provided.');if(null==t)throw new Error("A value must be provided.");this.options[e]=t}},{key:"setDataSource",value:function(e){this.dataSource=e}},{key:"setFrameSize",value:function(e){this.framesize=e}},{key:"getFrameSize",value:function(){return this.framesize}}]),t}()});_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();define("TextCharacterWidthCalculator",[],function(){return function(){function e(){_classCallCheck(this,e),this.SAMPLE_STR="abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ_"}return _createClass(e,[{key:"appendHiddenDomNode",value:function(e){var t="#"+e;0===$(t).length&&$("body").append('<span id="'+e+'">'+this.SAMPLE_STR+"</span>"),$(t).css("position","relative"),$(t).css("float","right"),$(t).css("visibility","hidden"),$(t).css("margin","0"),$(t).css("padding","0")}},{key:"configureSamplerNode",value:function(){var e=Date.now();return this.appendHiddenDomNode(e),$("#"+e)}},{key:"computeAverageCharWidth",value:function(e){var t=e[0].getBoundingClientRect().width/this.SAMPLE_STR.length;return Math.round(100*t)/100}},{key:"computeFontSize",value:function(e){if(null==e)throw new TypeError("CSS object must be provided and cannot be null.");var t=this.configureSamplerNode();t.css(e);var n=this.computeAverageCharWidth(t);return t.remove(),n}}]),e}()});_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();define("Widget",["FrameRenderer","TextCharacterWidthCalculator"],function(r,i){return function(){function n(e,t){if(_classCallCheck(this,n),null==e)throw new TypeError("Target jQuery element (target_node) must be provided.");if(!(e instanceof jQuery))throw new TypeError("Target element (target_node) must be of type jQuery.");if(null==t)throw new TypeError("FrameRenderer (renderer) must be provided.");if(!(t instanceof r))throw new TypeError("Renderer (renderer) must be of type FrameRenderer.");this.target_node=e,this.renderer=t,this.rowcount=42,this.textCharacterWidthCalculator=new i}return _createClass(n,[{key:"paint",value:function(){var e=this.renderer.computeNextFrame();this.target_node.html(e)}},{key:"getRenderer",value:function(){return this.renderer}},{key:"getTargetNode",value:function(){return this.target_node}},{key:"getRowCount",value:function(){return this.rowcount}},{key:"setRowCount",value:function(e){if(null==e)throw new TypeError("rowcount parameter must be provided.");if(e<=0)throw new RangeError("rowcount must be a positive integer.");this.rowcount=e}},{key:"computeFrameSize",value:function(){var e=this.textCharacterWidthCalculator.computeFontSize(this.target_node.css(["font-size","font-family","word-wrap"])),t=Math.round(this.target_node.width()/e)-1,n=this.getRowCount()*t;console.log("Widget width: "+this.target_node.width()),console.log("Char width: "+e),console.log("Row char count: "+t),console.log("Frame char count: "+n);var r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);this.target_node.get(0).style.width=r?t+" ch":t+"ch",this.renderer.setFrameSize(n)}},{key:"notify",value:function(e){console.log("Resize notification received."),this.computeFrameSize()}}]),n}()});_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();define("AnimationScheduler",["Widget"],function(n){return function(){function e(){_classCallCheck(this,e),this._painters=[],this._painters_fps=[],this.then=null}return _createClass(e,[{key:"addPainter",value:function(e,t){if(null==e)throw new TypeError("Widget instance must be provided.");if(!(e instanceof n))throw new TypeError("first argument must be an instance of Widget.");if(null==t)throw new TypeError("frameRate value must be provided.");this._painters.push(e),this._painters_fps.push({framerate:t,then:0,elapsed:0})}},{key:"getPainters",value:function(){return this._painters}},{key:"_step",value:function(e){for(var t=0;t<this._painters.length;++t){var n=this._painters_fps[t].framerate,r=this._painters_fps[t].then,i=this._painters_fps[t].elapsed;1e3/n<=(i=e-r)&&(this._painters_fps[t].then=e-i%n,this._painters[t].paint()),this._painters_fps[t].elapsed=i}window.requestAnimationFrame(this._step.bind(this))}},{key:"_init",value:function(){for(var e=0;e<this._painters.length;++e)this._painters[e].paint()}},{key:"start",value:function(){0<this._painters.length&&(this._init(),window.requestAnimationFrame(this._step.bind(this)))}}]),e}()});_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();define("StringIterator",[],function(){return function(){function t(e){_classCallCheck(this,t),this.textString=null==e?"":e,this.textStringIndex=0}return _createClass(t,[{key:"getNext",value:function(){return 0===this.textString.length?"":(this.textStringIndex>=this.textString.length&&(this.textStringIndex=0),this.textString[this.textStringIndex++])}},{key:"reset",value:function(){this.textStringIndex=0}},{key:"getText",value:function(){return this.textString}},{key:"setText",value:function(e){this.textString=e}}]),t}()});_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();define("FrameRendererBuilder",["FrameRenderer","StringIterator"],function(t,n){return function(){function e(){_classCallCheck(this,e),this.reset()}return _createClass(e,[{key:"reset",value:function(){this.instance=new t}},{key:"build",value:function(){var e=this.instance;return this.reset(),e.setOptionValue("dynamicnoiseratio",!0),e}},{key:"setText",value:function(e){return this.instance.setDataSource(new n(e)),this}},{key:"setOptions",value:function(e){return this.instance.setOptions(e),this}}]),e}()});_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();define("WidgetBuilder",["FrameRendererBuilder","Widget"],function(n,r){return function(){function t(e){_classCallCheck(this,t),this.frameRendererBuilder=new n,this.target_node=e,this.row_count=void 0}return _createClass(t,[{key:"build",value:function(){var e=new r(this.target_node,this.frameRendererBuilder.build());return void 0!==this.row_count&&(e.setRowCount(this.row_count),this.row_count=void 0),e}},{key:"setText",value:function(e){return this.frameRendererBuilder.setText(e),this}},{key:"setOptions",value:function(e){return this.frameRendererBuilder.setOptions(e),this}},{key:"setRowCount",value:function(e){return this.row_count=e,this}},{key:"setTargetNode",value:function(e){return this.target_node=e,this}}]),t}()});_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();define("DomInitialiser",[],function(){return function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"buildIdSelector",value:function(e){var t=e;return e.startsWith("#")||(t="#"+e),t}},{key:"initialiseDomNode",value:function(e){if(null==e)throw new TypeError("Widget config object cannot be null.");if(void 0===e.htmlId||null===e.htmlId)throw new TypeError("widgetConfig.htmlId must be declared.");var t=this.buildIdSelector(e.htmlId);if("#"===t)throw new TypeError("Parameter widgetConfig.htmlId id cannot be blank.");var n=$(t);if(0==n.length)throw new TypeError('DOM does not contain any elements with the query "'+t+"'.");return n.addClass("hackertext"),n}}]),e}()});_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();define("DocumentEventObservable",[],function(){return function(){function e(){_classCallCheck(this,e),this.observers=[]}return _createClass(e,[{key:"attach",value:function(e){if(null==e)throw new TypeError("Observer object cannot be null.");if(!(e.notify instanceof Function))throw new TypeError("Observer objects must define a notify function.");this.observers.push(e)}},{key:"detach",value:function(e){if(null==e)throw new TypeError("Observer object cannot be null.");var t=this.observers.indexOf(e);this.observers.splice(t,1)}},{key:"notify",value:function(){var t=this;this.observers.forEach(function(e){e.notify(t)})}},{key:"getObservers",value:function(){return this.observers}}]),e}()});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};define("Application",["Widget","AnimationScheduler","WidgetBuilder","DomInitialiser","DocumentEventObservable","TextCharacterWidthCalculator"],function(e,t,s,u,n,r,i){var l=new n;return function(){if(new r,null!=("undefined"==typeof hacker_text_config?"undefined":_typeof(hacker_text_config))){var a=new t;hacker_text_config.targets.forEach(function(e){try{var t=(n=e,r=new s,i=(new u).initialiseDomNode(n),o=r.setTargetNode(i).setText(n.text).setRowCount(n.rows).setOptions({dynamicnoiseratio:!0}).build(),l.attach(o),o);a.addPainter(t,e.framerate)}catch(e){console.log("Couldn't create widget: "+e)}var n,r,i,o}),a.start(),$(window).resize(function(){l.notify()}),$(document).keypress(function(e){l.notify()}),l.notify()}else console.log("Global variable, hacker_text_targets, must be defined in the same scope as this script."),console.log("Please see the README.md for more information.")}}),require(["Application"],function(e){$(window).ready(function(){e()})}),define("hackertext.js",function(){});
},{}]},{},[4]);
