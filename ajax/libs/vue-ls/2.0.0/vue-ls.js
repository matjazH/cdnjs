(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-ls'] = factory());
}(this, (function () { 'use strict';

var ls$1 = {};

var memoryStorage = {
  getItem: function getItem(name) {
    return name in ls$1 ? ls$1[name] : null;
  },
  setItem: function setItem(name, value) {
    ls$1[name] = value;

    return true;
  },
  removeItem: function removeItem(name) {
    var found = name in ls$1;

    if (found) {
      return delete ls$1[name];
    }

    return false;
  },
  clear: function clear() {
    ls$1 = {};

    return true;
  },
  key: function key(index) {
    var keys = Object.keys(ls$1);

    return typeof keys[index] !== 'undefined' ? keys[index] : null;
  }
};

Object.defineProperty(memoryStorage, 'length', {
  get: function get() {
    return Object.keys(ls$1).length;
  }
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var eventListeners = {};

function change(e) {
  if (!e) {
    e = window.event;
  }

  if (typeof e === 'undefined' || typeof e.key === 'undefined') {
    return;
  }

  var all = eventListeners[e.key];

  if (all) {
    all.forEach(emit);
  }

  function emit(listener) {
    var item = JSON.parse(e.newValue);
    var oldItem = JSON.parse(e.oldValue);
    var val = (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' ? item.value : item;
    var oldVal = oldItem && (typeof oldItem === 'undefined' ? 'undefined' : _typeof(oldItem)) === 'object' ? oldItem.value : oldItem;

    listener(val, oldVal, e.url || e.uri);
  }
}

var Storage = function () {
  function Storage(storage, options) {
    classCallCheck(this, Storage);

    this.storage = storage;
    this.options = _extends({
      namespace: '',
      events: ['storage']
    }, options || {});

    Object.defineProperty(this, 'length', {
      get: function get$$1() {
        return this.storage.length;
      }
    });

    if (typeof window !== 'undefined') {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.options.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var eventName = _step.value;

          if (window.addEventListener) {
            window.addEventListener(eventName, change, false);
          } else if (window.attachEvent) {
            window.attachEvent('on' + eventName, change);
          } else {
            window['on' + eventName] = change;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }

  createClass(Storage, [{
    key: 'set',
    value: function set$$1(name, value) {
      var expire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      this.storage.setItem(this.options.namespace + name, JSON.stringify({ value: value, expire: expire !== null ? new Date().getTime() + expire : null }));
    }
  }, {
    key: 'get',
    value: function get$$1(name) {
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var item = this.storage.getItem(this.options.namespace + name);

      if (item !== null) {
        var data = JSON.parse(item);

        if (data.expire === null) {
          return data.value;
        }

        if (data.expire >= new Date().getTime()) {
          return data.value;
        }

        this.remove(name);
      }

      return def;
    }
  }, {
    key: 'key',
    value: function key(index) {
      return this.storage.key(index);
    }
  }, {
    key: 'remove',
    value: function remove(name) {
      return this.storage.removeItem(this.options.namespace + name);
    }
  }, {
    key: 'clear',
    value: function clear() {
      if (this.length === 0) {
        return;
      }

      var removedKeys = [];

      for (var i = 0; i < this.length; i++) {
        var key = this.storage.key(i);
        var regexp = new RegExp('^' + this.options.namespace + '.+', 'i');

        if (regexp.test(key) === false) {
          continue;
        }

        removedKeys.push(key);
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = removedKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key = _step2.value;

          this.storage.removeItem(_key);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'on',
    value: function on(name, callback) {
      if (eventListeners[name]) {
        eventListeners[name].push(callback);
      } else {
        eventListeners[name] = [callback];
      }
    }
  }, {
    key: 'off',
    value: function off(name, callback) {
      var ns = eventListeners[name];

      if (ns.length > 1) {
        ns.splice(ns.indexOf(callback), 1);
      } else {
        eventListeners[name] = [];
      }
    }
  }]);
  return Storage;
}();

var store = typeof window !== 'undefined' && 'localStorage' in window ? window.localStorage : memoryStorage;
var storageObject = new Storage(store);

var VueLocalStorage = {
  install: function install(Vue, options) {
    storageObject.options = _extends(storageObject.options, {
      namespace: ''
    }, options || {});

    Vue.ls = storageObject;
    Object.defineProperty(Vue.prototype, '$ls', {
      get: function get$$1() {
        return storageObject;
      }
    });
  }
};

if (typeof window !== 'undefined') {
  window.VueLocalStorage = VueLocalStorage;
}

return VueLocalStorage;

})));
