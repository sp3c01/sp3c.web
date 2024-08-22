function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var Logger = /*#__PURE__*/function () {
  function Logger() {}
  Logger.error = function error() {
    for (var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++) {
      message[_key] = arguments[_key];
    }
    console.error("[ERROR] Nemu Pixel ", message);
  };
  Logger.info = function info() {
    for (var _len2 = arguments.length, message = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      message[_key2] = arguments[_key2];
    }
    console.log("[INFO] Nemu Pixel ", message);
  };
  return Logger;
}();
var utmNames = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_content'];
function api(_x, _x2, _x3) {
  return _api.apply(this, arguments);
}
function _api() {
  _api = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, method, options) {
    var data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (method === void 0) {
            method = 'GET';
          }
          _context2.next = 3;
          return fetch(url, _extends({
            method: method,
            headers: {
              'Content-Type': 'application/json'
            }
          }, options)).then(function (response) {
            return response.json();
          });
        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _api.apply(this, arguments);
}
var extractHostname = function extractHostname(full_url) {
  try {
    return new URL(full_url).hostname;
  } catch (error) {
    return null;
  }
};
var extractOrigin = function extractOrigin(full_url) {
  try {
    var _URL;
    return (_URL = new URL(full_url)) == null ? void 0 : _URL.origin;
  } catch (error) {
    return null;
  }
};
function parseUTMSrc(utm_source) {
  var organicExists = utm_source == null ? void 0 : utm_source.endsWith('_organic');
  var referrerHostname = extractHostname(document.referrer);
  var isReferrerHostnameValid = referrerHostname && referrerHostname !== window.location.hostname;
  if (utm_source) {
    return "" + utm_source + (isReferrerHostnameValid && !organicExists ? '_organic' : '');
  }
  if (isReferrerHostnameValid && !utm_source) {
    return "" + (isReferrerHostnameValid ? referrerHostname : '') + (!organicExists ? '_organic' : '');
  }
  return 'organic';
}
var getClientId = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$api, ip;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return api('https://api.ipify.org/?format=json', 'GET', {
            headers: {}
          });
        case 3:
          _yield$api = _context.sent;
          ip = _yield$api.ip;
          return _context.abrupt("return", btoa(ip));
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", null);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function getClientId() {
    return _ref.apply(this, arguments);
  };
}();
function generateUnix() {
  var dateInSaoPauloTimezone = new Date().toLocaleString('en-US', {
    timeZone: 'America/Sao_Paulo'
  });
  var unix = Math.floor(new Date(dateInSaoPauloTimezone).getTime() / 1000); // Convert milliseconds to seconds

  return String(unix);
}
function createSession(_x4, _x5) {
  return _createSession.apply(this, arguments);
}
function _createSession() {
  _createSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(baseURL, _ref2) {
    var _document, _document2;
    var trackingId, provider, productData, searchParams;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          trackingId = _ref2.trackingId, provider = _ref2.provider, productData = _ref2.productData;
          searchParams = new URLSearchParams(window.location.search);
          _context3.t0 = api;
          _context3.t1 = baseURL + "/trackings/" + trackingId + "/sessions";
          _context3.t2 = JSON;
          _context3.t3 = extractOrigin((_document = document) == null ? void 0 : _document.referrer);
          _context3.t4 = provider;
          _context3.t5 = window.location.origin;
          _context3.t6 = navigator.userAgent;
          _context3.t7 = searchParams == null ? void 0 : searchParams.get('fbclid');
          _context3.t8 = generateUnix();
          _context3.t9 = getCookieByName('_fbc');
          _context3.t10 = getCookieByName('_fbp');
          _context3.t11 = (_document2 = document) == null || (_document2 = _document2.documentElement) == null ? void 0 : _document2.getAttribute("data-session");
          _context3.next = 16;
          return getClientId();
        case 16:
          _context3.t12 = _context3.sent;
          _context3.t13 = _extends({}, productData, {
            utm_source: parseUTMSrc(productData == null ? void 0 : productData.utm_source)
          });
          _context3.t14 = {
            referrer: _context3.t3,
            provider: _context3.t4,
            origin: _context3.t5,
            userAgent: _context3.t6,
            fbclid: _context3.t7,
            fbclidUnix: _context3.t8,
            fbc: _context3.t9,
            fbp: _context3.t10,
            traySessionId: _context3.t11,
            clientId: _context3.t12,
            productData: _context3.t13
          };
          _context3.t15 = _context3.t2.stringify.call(_context3.t2, _context3.t14);
          _context3.t16 = {
            body: _context3.t15
          };
          _context3.next = 23;
          return (0, _context3.t0)(_context3.t1, 'POST', _context3.t16);
        case 23:
          return _context3.abrupt("return", _context3.sent);
        case 24:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _createSession.apply(this, arguments);
}
function getTrackingBy(_x6, _x7) {
  return _getTrackingBy.apply(this, arguments);
}
function _getTrackingBy() {
  _getTrackingBy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(baseURL, _ref3) {
    var id, productId;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = _ref3.id, productId = _ref3.productId;
          _context4.next = 3;
          return api(baseURL + "/trackings/" + (id || productId) + (productId ? '?type=product' : ''), 'GET');
        case 3:
          return _context4.abrupt("return", _context4.sent);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _getTrackingBy.apply(this, arguments);
}
function getLastSessionHistory(_x8, _x9, _x10) {
  return _getLastSessionHistory.apply(this, arguments);
}
function _getLastSessionHistory() {
  _getLastSessionHistory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(baseURL, trackingId, sessionId) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return api(baseURL + "/trackings/" + trackingId + "/sessions/" + sessionId + "/histories/last");
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _getLastSessionHistory.apply(this, arguments);
}
function createSessionHistory(_x11, _x12) {
  return _createSessionHistory.apply(this, arguments);
}
function _createSessionHistory() {
  _createSessionHistory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(baseURL, _ref4) {
    var _document3, _document4;
    var provider, sessionId, productData, trackingId, searchParams;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          provider = _ref4.provider, sessionId = _ref4.sessionId, productData = _ref4.productData, trackingId = _ref4.trackingId;
          searchParams = new URLSearchParams(window.location.search);
          _context6.t0 = api;
          _context6.t1 = baseURL + "/trackings/" + trackingId + "/sessions/" + sessionId + "/histories";
          _context6.t2 = JSON;
          _context6.t3 = extractOrigin((_document3 = document) == null ? void 0 : _document3.referrer);
          _context6.t4 = window.location.origin;
          _context6.t5 = provider;
          _context6.t6 = navigator.userAgent;
          _context6.t7 = searchParams == null ? void 0 : searchParams.get('fbclid');
          _context6.t8 = getCookieByName('_fbc');
          _context6.t9 = getCookieByName('_fbp');
          _context6.t10 = (_document4 = document) == null || (_document4 = _document4.documentElement) == null ? void 0 : _document4.getAttribute("data-session");
          _context6.t11 = generateUnix();
          _context6.next = 16;
          return getClientId();
        case 16:
          _context6.t12 = _context6.sent;
          _context6.t13 = _extends({}, productData, {
            utm_source: parseUTMSrc(productData == null ? void 0 : productData.utm_source)
          });
          _context6.t14 = {
            referrer: _context6.t3,
            origin: _context6.t4,
            provider: _context6.t5,
            userAgent: _context6.t6,
            fbclid: _context6.t7,
            fbc: _context6.t8,
            fbp: _context6.t9,
            traySessionId: _context6.t10,
            fbclidUnix: _context6.t11,
            clientId: _context6.t12,
            productData: _context6.t13
          };
          _context6.t15 = _context6.t2.stringify.call(_context6.t2, _context6.t14);
          _context6.t16 = {
            body: _context6.t15
          };
          _context6.next = 23;
          return (0, _context6.t0)(_context6.t1, 'POST', _context6.t16);
        case 23:
          return _context6.abrupt("return", _context6.sent);
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _createSessionHistory.apply(this, arguments);
}
function isJsonString(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}
function getCookieByName(name) {
  var cookieString = "; " + document.cookie;
  var parts = cookieString.split("; " + name + "=");
  if (parts.length === 2) {
    var _parts$pop;
    var result = (_parts$pop = parts.pop()) == null || (_parts$pop = _parts$pop.split(';').shift()) == null ? void 0 : _parts$pop.trim();
    try {
      var decodedResult = result && decodeURIComponent(result);
      return decodedResult ? isJsonString(decodedResult) ? JSON.parse(decodedResult) : decodedResult : null;
    } catch (error) {
      Logger.error('Error parsing cookie value:', error);
      return null;
    }
  }
  return null;
}
function setCookie(name, value) {
  document.cookie = name + "=" + JSON.stringify(value) + "; path=/";
}
function removeCookie(name) {
  var pastDate = new Date(0);
  document.cookie = name + "=; expires=" + pastDate.toUTCString();
}
function hasCookiesEnabled() {
  var isCookiesEnabled = navigator.cookieEnabled;
  if (typeof navigator.cookieEnabled === 'undefined' || !isCookiesEnabled) {
    document.cookie = 'check';
    isCookiesEnabled = document.cookie.indexOf('check') !== -1;
  }
  return isCookiesEnabled;
}
function getHotmartSourceName(full_url) {
  if (full_url === void 0) {
    full_url = window.location.search;
  }
  var searchParams = new URLSearchParams(full_url);
  var hotmartSources = ['src', 'sck'];
  var result;
  hotmartSources.find(function (source) {
    if (searchParams.has(source)) {
      result = source;
    }
  });
  return result;
}
function isHotmartUtmsParsable(sourceName, full_url) {
  var _searchParams$get$spl, _searchParams$get;
  if (full_url === void 0) {
    full_url = window.location.search;
  }
  var searchParams = new URLSearchParams(full_url);
  var _ref5 = (_searchParams$get$spl = (_searchParams$get = searchParams.get(sourceName)) == null ? void 0 : _searchParams$get.split('|')) != null ? _searchParams$get$spl : [],
    utm_source = _ref5[0],
    utm_medium = _ref5[1],
    utm_campaign = _ref5[2],
    utm_content = _ref5[3];
  var parsedUtms = formatUtms({
    utm_source: utm_source,
    utm_medium: utm_medium,
    utm_campaign: utm_campaign,
    utm_content: utm_content
  });
  if (!(parsedUtms != null && parsedUtms.utm_source) && !(parsedUtms != null && parsedUtms.utm_medium) && !(parsedUtms != null && parsedUtms.utm_campaign) && !(parsedUtms != null && parsedUtms.utm_content)) {
    return false;
  }
  return true;
}
function containsHotmartSourceInUrl(full_url) {
  if (full_url === void 0) {
    full_url = window.location.search;
  }
  var sourceName = getHotmartSourceName(full_url);
  if (sourceName && isHotmartUtmsParsable(sourceName, full_url)) {
    return true;
  }
  return false;
}
function containsUTMsInQueryParams(full_url) {
  if (full_url === void 0) {
    full_url = window.location.search;
  }
  var searchParams = new URLSearchParams(full_url);
  if (containsHotmartSourceInUrl()) {
    return true;
  }
  for (var _iterator = _createForOfIteratorHelperLoose(utmNames), _step; !(_step = _iterator()).done;) {
    var utmName = _step.value;
    if (searchParams.has(utmName)) {
      return true;
    }
  }
  return false;
}
function parseHotmartUTMs(sourceName, full_url) {
  var _searchParams$get$spl2, _searchParams$get2;
  if (full_url === void 0) {
    full_url = window.location.search;
  }
  var searchParams = new URLSearchParams(full_url);
  var _ref6 = (_searchParams$get$spl2 = searchParams == null || (_searchParams$get2 = searchParams.get(sourceName)) == null ? void 0 : _searchParams$get2.split('|')) != null ? _searchParams$get$spl2 : [],
    utm_source = _ref6[0],
    utm_adsetName = _ref6[1],
    utm_campaignName = _ref6[2],
    utm_adName = _ref6[3],
    utm_campaignId = _ref6[4],
    utm_adsetId = _ref6[5],
    utm_adId = _ref6[6],
    utm_term = _ref6[7];
  return {
    utm_source: utm_source,
    utm_medium: (utm_adsetName || '') + "|" + (utm_adsetId || ''),
    utm_campaign: (utm_campaignName || '') + "|" + (utm_campaignId || ''),
    utm_content: (utm_adName || '') + "|" + (utm_adId || ''),
    utm_campaignId: utm_campaignId,
    utm_campaignName: utm_campaignName,
    utm_adsetId: utm_adsetId,
    utm_adsetName: utm_adsetName,
    utm_adId: utm_adId,
    utm_adName: utm_adName,
    utm_term: utm_term
  };
}
function parseUtms(divisors, full_url) {
  if (divisors === void 0) {
    divisors = /[|\\]/;
  }
  if (full_url === void 0) {
    full_url = window.location.search;
  }
  var utmParams = {};
  var searchParams = new URLSearchParams(full_url);
  var _loop = function _loop() {
    var utmName = _step2.value;
    if (searchParams.has(utmName)) {
      var mappings = {
        utm_campaign: function utm_campaign() {
          var utm_campaign = searchParams == null ? void 0 : searchParams.get(utmName);
          var _ref7 = (utm_campaign == null ? void 0 : utm_campaign.split(divisors)) || [],
            name = _ref7[0],
            id = _ref7[1];
          utmParams['utm_campaignName'] = name;
          utmParams['utm_campaignId'] = id;
          utmParams[utmName] = utm_campaign;
        },
        utm_medium: function utm_medium() {
          var utm_medium = searchParams == null ? void 0 : searchParams.get(utmName);
          var _ref8 = (utm_medium == null ? void 0 : utm_medium.split(divisors)) || [],
            adsetName = _ref8[0],
            adsetId = _ref8[1];
          utmParams['utm_adsetName'] = adsetName;
          utmParams['utm_adsetId'] = adsetId;
          utmParams[utmName] = utm_medium;
        },
        utm_content: function utm_content() {
          var utm_content = searchParams == null ? void 0 : searchParams.get(utmName);
          var _ref9 = (utm_content == null ? void 0 : utm_content.split(divisors)) || [],
            adName = _ref9[0],
            adId = _ref9[1],
            term = _ref9[2];
          utmParams['utm_adName'] = adName;
          utmParams['utm_adId'] = adId;
          utmParams[utmName] = adName || adId ? (adName || '') + "\\" + (adId || '') : null;
        }
      };
      var properMapping = mappings == null ? void 0 : mappings[utmName];
      if (properMapping) {
        properMapping();
        return 1; // continue
      }
      utmParams[utmName] = searchParams.get(utmName);
    }
  };
  for (var _iterator2 = _createForOfIteratorHelperLoose(utmNames), _step2; !(_step2 = _iterator2()).done;) {
    if (_loop()) continue;
  }
  return utmParams;
}
function extractUTMsFromQueryParams(full_url) {
  if (full_url === void 0) {
    full_url = window.location.search;
  }
  if (containsHotmartSourceInUrl(full_url)) {
    return parseHotmartUTMs(getHotmartSourceName(full_url), full_url);
  }
  return parseUtms(/[|\\]/, full_url);
}
function parseUTMsToQueryParams(_ref10) {
  var tracking = _ref10.tracking,
    utms = _ref10.utms;
  var searchParams = new URLSearchParams(window.location.search);
  var hotmartSourceTypes = ['src', 'sck'];
  for (var _i = 0, _hotmartSourceTypes = hotmartSourceTypes; _i < _hotmartSourceTypes.length; _i++) {
    var hotmartSourceType = _hotmartSourceTypes[_i];
    if (searchParams != null && searchParams.has(hotmartSourceType)) {
      searchParams.delete(hotmartSourceType);
    }
  }
  for (var _iterator3 = _createForOfIteratorHelperLoose(utmNames), _step3; !(_step3 = _iterator3()).done;) {
    var utmName = _step3.value;
    if (searchParams != null && searchParams.has(utmName)) {
      searchParams.delete(utmName);
    }
  }
  searchParams.delete('utm_term');
  var platformMappings = {
    hotmart: function hotmart() {
      var querySource = ((utms == null ? void 0 : utms.utm_source) || '') + "|" + ((utms == null ? void 0 : utms.utm_adsetName) || '') + "|" + ((utms == null ? void 0 : utms.utm_campaignName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_campaignId) || '') + "|" + ((utms == null ? void 0 : utms.utm_adsetId) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + ((utms == null ? void 0 : utms.utm_term) || '');
      searchParams.set(tracking == null ? void 0 : tracking.sourceType, querySource);
    },
    vega: function vega() {
      var vegaMappings = {
        utm_campaign: function utm_campaign() {
          return ((utms == null ? void 0 : utms.utm_campaignName) || '') + "\\" + ((utms == null ? void 0 : utms.utm_campaignId) || '');
        },
        utm_medium: function utm_medium() {
          return ((utms == null ? void 0 : utms.utm_adsetName) || '') + "\\" + ((utms == null ? void 0 : utms.utm_adsetId) || '');
        },
        utm_content: function utm_content() {
          return ((utms == null ? void 0 : utms.utm_adName) || '') + "\\" + ((utms == null ? void 0 : utms.utm_adId) || '') + "\\" + (utms == null ? void 0 : utms.utm_term);
        }
      };
      for (var _iterator4 = _createForOfIteratorHelperLoose(utmNames), _step4; !(_step4 = _iterator4()).done;) {
        var utmName = _step4.value;
        if (utmName === 'utm_content') {
          var content = vegaMappings[utmName]();
          searchParams.set(utmName, content);
        } else if (utms[utmName]) {
          var mappingExists = vegaMappings[utmName];
          var utm = mappingExists ? mappingExists() : utms[utmName];
          searchParams.set(utmName, utm || '');
        }
      }
    },
    others: function others() {
      for (var _iterator5 = _createForOfIteratorHelperLoose(utmNames), _step5; !(_step5 = _iterator5()).done;) {
        var utmName = _step5.value;
        if (utmName === 'utm_content') {
          var content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
          searchParams.set(utmName, content || '');
        } else if (utms[utmName]) {
          searchParams.set(utmName, utms[utmName] || '');
        }
      }
    }
  };
  var mapping = platformMappings[tracking == null ? void 0 : tracking.platform] || platformMappings["others"];
  mapping();
  return searchParams;
}
function loadUTMsInQueryParams(queryParams) {
  var newURL = "" + window.location.origin + window.location.pathname + "?" + queryParams;
  window.history.replaceState({
    path: newURL
  }, '', newURL);
}
function formatUtms(utms) {
  var formattedUtms = {};
  Object.entries(utms).forEach(function (_ref11) {
    var key = _ref11[0],
      value = _ref11[1];
    if (value && !/null|undefined/g.test(value)) {
      formattedUtms[key] = value;
    }
  });
  return formattedUtms;
}
function redirectWithUTMs(tracking, queryParams) {
  window.location.href = (tracking == null ? void 0 : tracking.redirect_url) + "?" + (queryParams == null ? void 0 : queryParams.toString());
}
function handleByType(tracking, queryParams, trackingType) {
  var isRedirect = trackingType && trackingType === 'redirect';
  if (isRedirect) {
    redirectWithUTMs(tracking, queryParams);
  } else {
    loadUTMsInQueryParams(queryParams.toString());
  }
}
function onLoad() {
  return _onLoad.apply(this, arguments);
}
function _onLoad() {
  _onLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var trackingId, _document5, _URL2, _document6, src, _trackingId, isTray, currentScript, trackingType, productId, baseURL, isTrackingTypeValid, tracking, productData, _document7, sessionCookieExists, lastHistory, _queryParams, history, _queryParams2, session, queryParams, _error$response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          Logger.info(JSON.stringify({
            referrer: extractOrigin((_document5 = document) == null ? void 0 : _document5.referrer)
          }));

          /* javascript-obfuscator:disable */
          src = 'https://trackings.nemu.com.br/trackings/script.js';
          /* javascript-obfuscator:disable */
          _trackingId = '';
          isTray = !!_trackingId;
          currentScript = document.currentScript || document.querySelector("script[src=\"" + src + "\"]");
          if (!(!currentScript && !isTray)) {
            _context7.next = 9;
            break;
          }
          Logger.error("script element with src " + src + " could not be found");
          return _context7.abrupt("return");
        case 9:
          trackingType = currentScript == null ? void 0 : currentScript.getAttribute('data-tracking-type');
          if (!_trackingId && !isTray) {
            _trackingId = currentScript == null ? void 0 : currentScript.getAttribute('data-tracking-id');
          }
          productId = currentScript == null ? void 0 : currentScript.getAttribute('data-product-id');
          baseURL = (_URL2 = new URL(src)) == null ? void 0 : _URL2.origin;
          if (baseURL) {
            _context7.next = 16;
            break;
          }
          Logger.error('script element with src attribute not found.');
          return _context7.abrupt("return");
        case 16:
          isTrackingTypeValid = function isTrackingTypeValid() {
            var validations = {
              redirect: function redirect() {
                return {
                  isValid: !!_trackingId,
                  message: 'script element has an invalid data-tracking-id'
                };
              },
              product: function product() {
                return {
                  isValid: !!productId,
                  message: 'script element has an invalid data-product-id'
                };
              },
              tracking: function tracking() {
                return {
                  isValid: !!_trackingId,
                  message: 'script element has an invalid data-tracking-id'
                };
              }
            };
            var type = !trackingType ? 'tracking' : trackingType;
            var validationByType = validations[type];
            if (!validationByType) {
              return false;
            }
            var validated = validationByType();
            if (!(validated != null && validated.isValid)) {
              Logger.error(validated.message);
              return false;
            }
            return true;
          };
          if (isTrackingTypeValid()) {
            _context7.next = 19;
            break;
          }
          return _context7.abrupt("return");
        case 19:
          _context7.next = 21;
          return getTrackingBy(baseURL, _extends({
            id: _trackingId
          }, productId ? {
            productId: productId
          } : {}));
        case 21:
          tracking = _context7.sent;
          if (tracking) {
            _context7.next = 25;
            break;
          }
          Logger.error("script element couldn't find the pixel associated");
          return _context7.abrupt("return");
        case 25:
          _trackingId = tracking == null ? void 0 : tracking.id;
          if (hasCookiesEnabled()) {
            _context7.next = 28;
            break;
          }
          return _context7.abrupt("return");
        case 28:
          productData = {
            utm_adId: tracking == null ? void 0 : tracking.redirect_utm_adId,
            utm_adsetId: tracking == null ? void 0 : tracking.redirect_utm_adsetId,
            utm_campaign: tracking == null ? void 0 : tracking.redirect_utm_campaign,
            utm_campaignId: tracking == null ? void 0 : tracking.redirect_utm_campaign_id,
            utm_content: tracking == null ? void 0 : tracking.redirect_utm_content,
            utm_medium: tracking == null ? void 0 : tracking.redirect_utm_medium,
            utm_source: tracking == null ? void 0 : tracking.redirect_utm_source
          };
          if (extractHostname((_document6 = document) == null ? void 0 : _document6.referrer) === window.location.hostname) {
            Object.assign(productData, _extends({}, formatUtms(extractUTMsFromQueryParams((_document7 = document) == null ? void 0 : _document7.referrer))));
          }
          sessionCookieExists = getCookieByName("_nmu." + (tracking == null ? void 0 : tracking.id));
          if (!sessionCookieExists) {
            _context7.next = 49;
            break;
          }
          if (containsUTMsInQueryParams()) {
            _context7.next = 42;
            break;
          }
          _context7.next = 35;
          return getLastSessionHistory(baseURL, _trackingId, sessionCookieExists);
        case 35:
          lastHistory = _context7.sent;
          if (lastHistory) {
            _context7.next = 39;
            break;
          }
          removeCookie("_nmu." + (tracking == null ? void 0 : tracking.id));
          return _context7.abrupt("return");
        case 39:
          _queryParams = parseUTMsToQueryParams({
            tracking: tracking,
            utms: formatUtms(lastHistory)
          });
          handleByType(tracking, _queryParams, trackingType);
          return _context7.abrupt("return");
        case 42:
          Object.assign(productData, _extends({
            utm_term: "nemu_" + sessionCookieExists
          }, formatUtms(extractUTMsFromQueryParams())));
          _context7.next = 45;
          return createSessionHistory(baseURL, {
            trackingId: _trackingId,
            sessionId: sessionCookieExists,
            productData: formatUtms(productData),
            provider: tracking == null ? void 0 : tracking.platform
          });
        case 45:
          history = _context7.sent;
          _queryParams2 = parseUTMsToQueryParams({
            tracking: tracking,
            utms: formatUtms(history)
          });
          handleByType(tracking, _queryParams2, trackingType);
          return _context7.abrupt("return");
        case 49:
          if (containsUTMsInQueryParams()) {
            Object.assign(productData, _extends({}, formatUtms(extractUTMsFromQueryParams())));
          }
          _context7.next = 52;
          return createSession(baseURL, {
            provider: tracking == null ? void 0 : tracking.platform,
            trackingId: _trackingId,
            productData: productData
          });
        case 52:
          session = _context7.sent;
          if (session) {
            setCookie("_nmu." + _trackingId, session.id);
          }
          queryParams = parseUTMsToQueryParams({
            tracking: tracking,
            utms: formatUtms(session == null ? void 0 : session.lastHistory)
          });
          handleByType(tracking, queryParams, trackingType);
          _context7.next = 62;
          break;
        case 58:
          _context7.prev = 58;
          _context7.t0 = _context7["catch"](0);
          if (trackingId) {
            removeCookie("_nmu." + trackingId);
          }
          Logger.error("" + ((_context7.t0 == null || (_error$response = _context7.t0.response) == null || (_error$response = _error$response.data) == null ? void 0 : _error$response.message) || _context7.t0));
        case 62:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 58]]);
  }));
  return _onLoad.apply(this, arguments);
}
if (document.readyState !== 'loading') {
  onLoad();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    onLoad();
  });
}