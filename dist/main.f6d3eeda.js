// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"2IwU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.bingBody{\n    border:8px solid black;\n    border-radius: 50%/40%;\n    \n}\n.ear{\n    width:60px;\n    height:80px;\n    background-color: black;\n    border-radius: 50%/50%;\n    position: absolute;\n}\n.ear-left{\n    left: -10px;\n    top: -15px;\n}\n.ear-right{\n    right: -10px;\n    top: -15px;\n}\n.face{\n    width:200px;\n    height:160px;\n    margin-top:30px;\n    border-radius:80% 80% 60% 60%/90% 90% 60% 60%;\n    margin-left:auto;\n    margin-right:auto;\n    border:6px solid #006BB0;\n    box-shadow: 0 0 0 5px yellow, 0 0 0 10px black, 0 0 0 15px green, 0 0 0 20px red;\n    position: relative;\n}\n.eye{\n    width:62px;\n    height:70px;\n    background-color: black;\n    border-radius: 50%/50%;\n    position: absolute;\n}\n.eye-left{\n    left: 15px;\n    top: 26px;\n    transform: skewX(-8deg);\n}\n.eye-right{\n    right: 15px;\n    top: 26px;\n    transform: skewX(8deg);\n}\n.eyeball{\n    width: 25px;\n    height: 25px;\n    background-color: black;\n    position: absolute;\n    border-radius: 50%;\n    border:4px solid white;\n}\n.eyeball-left{\n    left:24%;\n    top:34%;\n}\n.eyeball-left::after{\n    content: '';\n    display: block;\n    width: 6px;\n    height: 6px;\n    background-color: white;\n    border-radius: 50%;\n    position: absolute;\n    left:5px;\n    top:5px;\n}\n.eyeball-right{\n    right:24%;\n    top:34%;\n}\n.eyeball-right::after{\n    content: '';\n    display: block;\n    width: 6px;\n    height: 6px;\n    background-color: white;\n    border-radius: 50%;\n    position: absolute;\n    left:5px;\n    top:5px;\n}\n.nose{\n    width: 20px;\n    height: 12px;\n    background-color: black;\n    position: absolute;\n    left:50%;\n    transform: translateX(-50%);\n    top:45%;\n    border-radius: 10% 10% 50% 50%/40%;\n}\n.mouth{\n    width:34px;\n    height:10px;\n    background-color: red;\n    position: absolute;\n    left:50%;\n    transform: translateX(-50%);\n    top:58%;\n    border-radius: 5% 5% 80% 80%/80%;\n    border:3px solid black\n}\n.hand{\n    width: 60px;\n    height:60px;\n    background-color: black;\n    position: absolute;\n    top:60%;\n    border-radius: 50%;\n}\n.hand-left{\n    left:-62px;\n}\n.hand-left::after{\n    content: '';\n    display: block;\n    border:31px solid black;\n    position: absolute;\n    left:0;\n    bottom:62%;\n    border-color: transparent black black transparent;\n\n}\n.hand-right{\n    width: 50px;\n    height: 100px;\n    right: -36px;\n    background-color: black;\n    position: absolute;\n    top:39%;\n    border-radius: 40px 40px 0 80px;\n    transform: rotate(40deg);\n}\n.hand-right::after{\n    content: \"\";\n    display: block;\n    width: 14px;\n    height:20px;\n    background-color: red;\n    position: absolute;\n    top:20px;\n    left:22px;\n    border-radius: 50% 50% 0 0;\n    transform: rotate(10deg);\n}\n.hand-right::before{\n    content: \"\";\n    display: block;\n    width: 14px;\n    height:20px;\n    background-color: red;\n    position: absolute;\n    top:23px;\n    right:20px;\n    transform: rotate(90deg);\n    border-radius:0 0  50% 50%;\n}\n.foot{\n    width:60px;height:80px;      \n    background-color: black;\n    position: absolute;\n}\n.foot-left{\n    left:60px;\n    bottom:-58px;\n    border-radius: 20% 40% 20% 40%;\n}\n.foot-right{\n    right:60px;\n    bottom:-58px;\n    border-radius: 40% 20% 40% 20%;\n}";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  timer: 100,
  id: undefined,
  ui: {
    showStyle: document.querySelector('.showStyle'),
    style: document.querySelector('style')
  },
  eventsList: {
    ".pause": "pause",
    ".play": "play",
    ".slow": "slow",
    ".normal": "normal",
    ".fast": "fast"
  },
  init: function init() {
    for (var event in player.eventsList) {
      if (player.eventsList.hasOwnProperty(event)) {
        var value = player.eventsList[event];
        document.querySelector(event).onclick = player[value];
      }
    }

    player.play();
  },
  run: function run() {
    if (player.n === _style.default.length) {
      clearInterval(player.id);
    }

    player.ui.showStyle.innerText = _style.default.substring(0, player.n);
    player.ui.showStyle.scrollTop = 9999;
    player.ui.style.innerHTML = _style.default.substring(0, player.n);
    player.n++;
  },
  pause: function pause() {
    clearInterval(player.id);
  },
  play: function play() {
    player.id = setInterval(player.run, player.timer);
  },
  slow: function slow() {
    player.pause();
    player.timer = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.timer = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.timer = 0;
    player.play();
  }
};
player.init();
},{"./style":"2IwU"}]},{},["epB2"], null)
//# sourceMappingURL=main.f6d3eeda.js.map