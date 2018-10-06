// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"FormItem/baseItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseItem =
/*#__PURE__*/
function () {
  function BaseItem(config) {
    _classCallCheck(this, BaseItem);

    this.config = config;
    this.checkQueue = [];
    this.state = 'correct';
    this.container = null;
    this.buildDOM();
  }

  _createClass(BaseItem, [{
    key: "buildDOM",
    value: function buildDOM() {
      throw new Error('Override base class methods buildDOM');
    }
  }, {
    key: "invokeCheck",
    value: function invokeCheck() {
      throw new Error('Override base class methods invokeCheck');
    }
  }, {
    key: "_updateState",
    value: function _updateState(state, _ref) {
      var errorTips = _ref.errorTips;
      this.state = state;

      if (state === 'correct') {
        this.container.querySelector('.tips').innerHTML = '';
      } else {
        this.container.querySelector('.tips').innerHTML = errorTips;
      }
    }
  }]);

  return BaseItem;
}();

exports.default = BaseItem;
},{}],"FormChecker/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var FormChecker = {
  input: {
    default: {
      RANGE: {
        tips: '字符个数在两者之间',
        params: {
          min: {
            placeholder: '最小值'
          },
          max: {
            placeholder: '最大值'
          }
        },
        rule: function rule(_ref, input) {
          var min = _ref.min,
              max = _ref.max;
          return input.length >= min && input.length <= max;
        },
        fail: function fail(_ref2) {
          var min = _ref2.min,
              max = _ref2.max;
          return "\u8BF7\u8F93".concat(min, "-").concat(max, "\u4E2A\u5B57\u3002");
        }
      },
      MAX: {
        tips: '字符个数不超过',
        params: {
          max: {
            placeholder: '最大值'
          }
        },
        rule: function rule(_ref3, input) {
          var max = _ref3.max;
          return nput.length <= max;
        },
        fail: function fail(_ref4) {
          var max = _ref4.max;
          return "\u8BF7\u8F93\u4E0D\u8D85\u8FC7".concat(max, "\u4E2A\u5B57\u3002");
        }
      }
    },
    number: {
      DEFAULT: {
        rule: function rule(params, input) {
          return /^[0-9]*$/.test(input);
        },
        fail: function fail() {
          return '请输入数字。';
        }
      },
      RANGE: {
        tips: '数字值在两者之间',
        params: {
          min: {
            placeholder: '最小值'
          },
          max: {
            placeholder: '最大值'
          }
        },
        rule: function rule(_ref5, input) {
          var min = _ref5.min,
              max = _ref5.max;
          return Number(input) >= min && Number(input) <= max;
        },
        fail: function fail(_ref6) {
          var min = _ref6.min,
              max = _ref6.max;
          return "\u8BF7\u8F93".concat(min, "-").concat(max, "\u533A\u95F4\u7684\u6570\u5B57\u3002");
        }
      }
    }
  }
};
var _default = FormChecker;
exports.default = _default;
},{}],"FormItem/InputItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseItem = _interopRequireDefault(require("./baseItem"));

var _FormChecker = _interopRequireDefault(require("../FormChecker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputItem =
/*#__PURE__*/
function (_BaseItem) {
  _inherits(InputItem, _BaseItem);

  function InputItem(config) {
    _classCallCheck(this, InputItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputItem).call(this, config));
  }

  _createClass(InputItem, [{
    key: "buildDOM",
    value: function buildDOM() {
      var container = document.createElement('div');
      var innerHTML = "\n            <p class=\"title\">".concat(this.config.title, "<p>\n            <p class=\"subtitle\">").concat(this.config.subtitle, "<p>\n            <div class=\"container\">\n                <input  placeholder=\"").concat(this.config.placeholder, "\"/>\n                <p class=\"tips\"></p>\n            </div>\n        ");
      container.innerHTML = innerHTML;
      container.setAttribute('class', 'form-item');
      this.container = container;

      this._addCheck();

      this._bindEventListener();
    }
  }, {
    key: "_addCheck",
    value: function _addCheck() {
      var _this = this;

      var defaultCheck = _FormChecker.default.input[this.config.checkType].DEFAULT;

      if (defaultCheck) {
        this.checkQueue.push({
          params: {},
          rule: defaultCheck.rule,
          fail: defaultCheck.fail
        });
      }

      (this.config.validates || []).forEach(function (validate) {
        var checker = _FormChecker.default.input[_this.config.checkType][validate.rule];

        _this.checkQueue.push({
          params: validate.params,
          rule: checker.rule,
          fail: checker.fail
        });
      });
    }
  }, {
    key: "invokeCheck",
    value: function invokeCheck() {
      var value = this.container.querySelector('input').value;
      var errorTips;
      this.checkQueue.every(function (check) {
        var isPassCheck = check.rule(check.params, value);
        if (!isPassCheck) errorTips = check.fail(check.params);
        return isPassCheck;
      });

      if (errorTips) {
        this._updateState('incorrect', {
          errorTips: errorTips
        });

        return 'incorrect';
      } else {
        this._updateState('correct', {
          errorTips: ''
        });

        return 'correct';
      }
    }
  }, {
    key: "_bindEventListener",
    value: function _bindEventListener() {
      var _this2 = this;

      var $input = this.container.querySelector('input');
      $input.addEventListener('input', function (e) {
        _this2.invokeCheck();
      });
    }
  }]);

  return InputItem;
}(_baseItem.default);

exports.default = InputItem;
},{"./baseItem":"FormItem/baseItem.js","../FormChecker":"FormChecker/index.js"}],"FormItem/TextareaItem.js":[function(require,module,exports) {

},{}],"FormItem/RadioItem.js":[function(require,module,exports) {

},{}],"FormItem/CheckboxItem.js":[function(require,module,exports) {

},{}],"FormItem/SelectItem.js":[function(require,module,exports) {

},{}],"FormItem/DateItem.js":[function(require,module,exports) {

},{}],"FormItem/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InputItem = _interopRequireDefault(require("./InputItem"));

var _TextareaItem = _interopRequireDefault(require("./TextareaItem"));

var _RadioItem = _interopRequireDefault(require("./RadioItem"));

var _CheckboxItem = _interopRequireDefault(require("./CheckboxItem"));

var _SelectItem = _interopRequireDefault(require("./SelectItem"));

var _DateItem = _interopRequireDefault(require("./DateItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormItem = function FormItem(item) {
  _classCallCheck(this, FormItem);

  switch (item.element) {
    case 'input':
      return new _InputItem.default(item);

    case 'textarea':
      return new _TextareaItem.default(item);

    case 'radio':
      return new _RadioItem.default(item);

    case 'checkbox':
      return new _CheckboxItem.default(item);

    case 'select':
      return new _SelectItem.default(item);

    case 'date':
      return new _DateItem.default(item);
  }
};

exports.default = FormItem;
},{"./InputItem":"FormItem/InputItem.js","./TextareaItem":"FormItem/TextareaItem.js","./RadioItem":"FormItem/RadioItem.js","./CheckboxItem":"FormItem/CheckboxItem.js","./SelectItem":"FormItem/SelectItem.js","./DateItem":"FormItem/DateItem.js"}],"FormBuilder/index.js":[function(require,module,exports) {
"use strict";

var _FormItem = _interopRequireDefault(require("../FormItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormBuilder =
/*#__PURE__*/
function () {
  function FormBuilder(_ref) {
    var config = _ref.config,
        el = _ref.el;

    _classCallCheck(this, FormBuilder);

    this._el = el;
    this._title = config.title;
    this._subtitle = config.subtitle;
    this._items = config.items;
    this._formItems = [];

    this._buildAll();
  }

  _createClass(FormBuilder, [{
    key: "_buildAll",
    value: function _buildAll() {
      var _this = this;

      this._items.forEach(function (item) {
        _this._formItems.push(new _FormItem.default(item));
      });

      this._showAll();
    }
  }, {
    key: "_showAll",
    value: function _showAll() {
      var _this2 = this;

      this._formItems.forEach(function (item) {
        console.log(item);

        _this2._el.append(item.container);
      });
    }
  }]);

  return FormBuilder;
}();

window.FormBuilder = FormBuilder;
},{"../FormItem":"FormItem/index.js"}],"../../../node/node_modules_g/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58014" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../node/node_modules_g/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","FormBuilder/index.js"], null)
//# sourceMappingURL=/FormBuilder.3ab5f663.map