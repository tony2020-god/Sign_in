"use strict";
cc._RF.push(module, '73b74QnRwRA4phQ5aA3bI9k', 'goeasy-2.0.12.min');
// 共用模塊/備份/goeasy-2.0.12.min.js

"use strict";

!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.GoEasy = t() : e.GoEasy = t();
}("undefined" != typeof self ? self : void 0, function () {
  return function (e) {
    var t = {};

    function n(o) {
      if (t[o]) return t[o].exports;
      var i = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: o
      });
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 120);
  }([function (e, t, n) {
    "use strict";

    t.__esModule = !0, t["default"] = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var o,
        i = n(128),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };

    t["default"] = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, r["default"])(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }();
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.noop = t.GoEasyDomainNumber = t.env = t.goEasyArray = t.UUID = t.calibrator = undefined;
    var o = n(83),
        i = n(150),
        r = n(154),
        s = n(92),
        a = n(93);
    t.calibrator = o.calibrator, t.UUID = i.UUID, t.goEasyArray = r.goEasyArray, t.env = s.env, t.GoEasyDomainNumber = a.GoEasyDomainNumber, t.noop = function () {};
  }, function (e, t, n) {
    e.exports = {
      "default": n(155),
      __esModule: !0
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var o,
        i = n(20),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };

    t["default"] = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : (0, r["default"])(t)) && "function" != typeof t ? e : t;
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var o = s(n(157)),
        i = s(n(21)),
        r = s(n(20));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    t["default"] = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, r["default"])(t)));
      e.prototype = (0, i["default"])(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (o["default"] ? (0, o["default"])(e, t) : e.__proto__ = t);
    };
  }, function (e, t, n) {
    e.exports = {
      "default": n(175),
      __esModule: !0
    };
  }, function (e, t) {
    var n = e.exports = {
      version: "2.6.12"
    };
    "number" == typeof __e && (__e = n);
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      WRITE: "WRITE",
      READ: "READ",
      NONE: "NONE"
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      "default": "default",
      text: "text",
      image: "image",
      video: "video",
      audio: "audio",
      emoji: "emoji",
      file: "file"
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = a(n(0)),
        i = a(n(1)),
        r = n(2),
        s = a(n(8));

    function a(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var u = function () {
      function e(t) {
        var n = this;
        (0, o["default"])(this, e), this.uuid = null, this.name = "", this.params = null, this.success = null, this.fail = null, this.permission = s["default"].NONE, this.singleTimeout = 0, this.totalTimeout = 0, this.startTime = 0, this.complete = !1, this.retried = 0, this.uuid = r.UUID.get(), this.name = t.name, this.params = t.params, this.permission = t.permission, this.totalTimeout = t.totalTimeout, this.singleTimeout = t.singleTimeout, this.success = function (e) {
          n.complete || (n.complete = !0, t.success(e));
        }, this.fail = function (e) {
          n.complete || (n.complete = !0, t.fail(e));
        };
      }

      return (0, i["default"])(e, [{
        key: "start",
        value: function value() {
          this.startTime = Date.now();
        }
      }, {
        key: "isTimeout",
        value: function value() {
          return this.startTime + this.totalTimeout < Date.now();
        }
      }]), e;
    }();

    t["default"] = u;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.EmitType = {
      authorize: "authorize",
      manualDisconnect: "manualDisconnect",
      subscribe: "subscribe",
      unsubscribe: "unsubscribe",
      publish: "publish",
      ack: "ack",
      historyMessages: "historyMessages",
      hereNow: "hereNow",
      hereNowByUserIds: "hereNowByUserIds",
      imLastConversations: "imLastConversations",
      markPrivateMessageAsRead: "markPrivateMessageAsRead",
      markGroupMessageAsRead: "markGroupMessageAsRead",
      imGroupOnlineCount: "imGroupOnlineCount",
      imHereNow: "imHereNow",
      imGroupHereNow: "imGroupHereNow",
      publishIM: "publishIM",
      imHistory: "imHistory",
      subscribeUserPresence: "subscribeUserPresence",
      unsubscribeUserPresence: "unsubscribeUserPresence",
      subscribeGroupPresence: "subscribeGroupPresence",
      unsubscribeGroupPresence: "unsubscribeGroupPresence",
      removeConversation: "removeConversation",
      topConversation: "topConversation",
      imData: "imData",
      subscribeGroups: "subscribeGroups",
      unsubscribeGroup: "unsubscribeGroup"
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var o = r(n(3)),
        i = r(n(193));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    t["default"] = function s(e, t, n) {
      null === e && (e = Function.prototype);
      var r = (0, i["default"])(e, t);

      if (r === undefined) {
        var a = (0, o["default"])(e);
        return null === a ? undefined : s(a, t, n);
      }

      if ("value" in r) return r.value;
      var u = r.get;
      return u === undefined ? undefined : u.call(n);
    };
  }, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
  }, function (e, t, n) {
    var o = n(59)("wks"),
        i = n(46),
        r = n(13).Symbol,
        s = "function" == typeof r;
    (e.exports = function (e) {
      return o[e] || (o[e] = s && r[e] || (s ? r : i)("Symbol." + e));
    }).store = o;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.SocketTimeout = {
      connect: 1500,
      reconnectionDelayMax: 3e3,
      commonQuerySingle: 2500,
      commonQueryTotal: 12e3,
      commonRequestSingle: 1700,
      commonRequestTotal: 12e3,
      commonInfiniteSingle: 1700,
      commonInfiniteTotal: 864e5
    };
  }, function (e, t, n) {
    var o = n(13),
        i = n(7),
        r = n(35),
        s = n(26),
        a = n(27),
        u = function u(e, t, n) {
      var c,
          l,
          f,
          d = e & u.F,
          p = e & u.G,
          h = e & u.S,
          y = e & u.P,
          v = e & u.B,
          m = e & u.W,
          g = p ? i : i[t] || (i[t] = {}),
          b = g.prototype,
          _ = p ? o : h ? o[t] : (o[t] || {}).prototype;

      for (c in p && (n = t), n) {
        (l = !d && _ && _[c] !== undefined) && a(g, c) || (f = l ? _[c] : n[c], g[c] = p && "function" != typeof _[c] ? n[c] : v && l ? r(f, o) : m && _[c] == f ? function (e) {
          var t = function t(_t, n, o) {
            if (this instanceof e) {
              switch (arguments.length) {
                case 0:
                  return new e();

                case 1:
                  return new e(_t);

                case 2:
                  return new e(_t, n);
              }

              return new e(_t, n, o);
            }

            return e.apply(this, arguments);
          };

          return t.prototype = e.prototype, t;
        }(f) : y && "function" == typeof f ? r(Function.call, f) : f, y && ((g.virtual || (g.virtual = {}))[c] = f, e & u.R && b && !b[c] && s(b, c, f)));
      }
    };

    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.str = t.noop = t.GoEasyDomainNumber = t.env = t.goEasyArray = t.UUID = t.calibrator = undefined;
    var o = n(196),
        i = n(2);
    t.calibrator = i.calibrator, t.UUID = i.UUID, t.goEasyArray = i.goEasyArray, t.env = i.env, t.GoEasyDomainNumber = i.GoEasyDomainNumber, t.noop = i.noop, t.str = o.str;
  }, function (e, t, n) {
    e.exports = !n(30)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (e, t, n) {
    var o = n(23);

    e.exports = function (e) {
      if (!o(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var o = s(n(133)),
        i = s(n(141)),
        r = "function" == typeof i["default"] && "symbol" == typeof o["default"] ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof i["default"] && e.constructor === i["default"] && e !== i["default"].prototype ? "symbol" : typeof e;
    };

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    t["default"] = "function" == typeof i["default"] && "symbol" === r(o["default"]) ? function (e) {
      return void 0 === e ? "undefined" : r(e);
    } : function (e) {
      return e && "function" == typeof i["default"] && e.constructor === i["default"] && e !== i["default"].prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
    };
  }, function (e, t, n) {
    e.exports = {
      "default": n(161),
      __esModule: !0
    };
  }, function (e, t, n) {
    var o = n(19),
        i = n(79),
        r = n(55),
        s = Object.defineProperty;
    t.f = n(18) ? Object.defineProperty : function (e, t, n) {
      if (o(e), t = r(t, !0), o(n), i) try {
        return s(e, t, n);
      } catch (a) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (e[t] = n.value), e;
    };
  }, function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  }, function (e, t, n) {
    var o = n(81),
        i = n(56);

    e.exports = function (e) {
      return o(i(e));
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Conversion = t.ConversationType = t.Conversations = undefined;
    var o = n(101),
        i = n(69),
        r = n(191);
    t.Conversations = r.Conversations, t.ConversationType = i.ConversationType, t.Conversion = o.Conversion;
  }, function (e, t, n) {
    var o = n(22),
        i = n(45);
    e.exports = n(18) ? function (e, t, n) {
      return o.f(e, t, i(1, n));
    } : function (e, t, n) {
      return e[t] = n, e;
    };
  }, function (e, t) {
    var n = {}.hasOwnProperty;

    e.exports = function (e, t) {
      return n.call(e, t);
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      DISCONNECTED: "disconnected",
      DISCONNECTING: "disconnecting",
      CONNECTING: "connecting",
      CONNECTED: "connected",
      RECONNECTING: "reconnecting",
      RECONNECTED: "reconnected",
      EXPIRED_RECONNECTED: "reconnected",
      CONNECT_FAILED: "connect_failed"
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ImEventType = t.eventCenter = undefined;
    var o = n(190),
        i = n(100);
    t.eventCenter = o.eventCenter, t.ImEventType = i.ImEventType;
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (t) {
        return !0;
      }
    };
  }, function (e, t, n) {
    var o = n(80),
        i = n(60);

    e.exports = Object.keys || function (e) {
      return o(e, i);
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SocketTimeout = t.IMTimeout = undefined;
    var o = n(15);
    t.IMTimeout = {};
    t.SocketTimeout = o.SocketTimeout;
  }, function (e, t, n) {
    e.exports = {
      "default": n(208),
      __esModule: !0
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(253),
        i = n(254),
        r = n(256),
        s = n(257);
    "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent);
    t.protocol = 3;
    var a = t.packets = {
      open: 0,
      close: 1,
      ping: 2,
      pong: 3,
      message: 4,
      upgrade: 5,
      noop: 6
    },
        u = o(a),
        c = {
      type: "error",
      data: "parser error"
    },
        l = n(258);
    t.encodePacket = function (e, t, n, o) {
      "function" == typeof t && (o = t, t = !1), "function" == typeof n && (o = n, n = null);
      e.data === undefined ? undefined : e.data.buffer || e.data;
      var i = a[e.type];
      return undefined !== e.data && (i += n ? s.encode(String(e.data), {
        strict: !1
      }) : String(e.data)), o("" + i);
    }, t.decodePacket = function (e, t, n) {
      if (e === undefined) return c;

      if ("string" == typeof e) {
        if (n && !1 === (e = function (e) {
          try {
            e = s.decode(e, {
              strict: !1
            });
          } catch (t) {
            return !1;
          }

          return e;
        }(e))) return c;
        var o = e.charAt(0);
        return Number(o) == o && u[o] ? e.length > 1 ? {
          type: u[o],
          data: e.substring(1)
        } : {
          type: u[o]
        } : c;
      }

      o = new Uint8Array(e)[0];
      var i = sliceBuffer(e, 1);
      return l && "blob" === t && (i = new l([i])), {
        type: u[o],
        data: i
      };
    }, t.encodePayload = function (e, n, o) {
      "function" == typeof n && (o = n, n = null);
      var s = i(e);
      if (!e.length) return o("0:");
      !function (e, t, n) {
        for (var o = new Array(e.length), i = r(e.length, n), s = function s(e, n, i) {
          t(n, function (t, n) {
            o[e] = n, i(t, o);
          });
        }, a = 0; a < e.length; a++) {
          s(a, e[a], i);
        }
      }(e, function (e, o) {
        t.encodePacket(e, !!s && n, !0, function (e) {
          o(null, function (e) {
            return e.length + ":" + e;
          }(e));
        });
      }, function (e, t) {
        return o(t.join(""));
      });
    }, t.decodePayload = function (e, n, o) {
      var i;
      if ("function" == typeof n && (o = n, n = null), "" === e) return o(c, 0, 1);

      for (var r, s, a = "", u = 0, l = e.length; u < l; u++) {
        var f = e.charAt(u);

        if (":" === f) {
          if ("" === a || a != (r = Number(a))) return o(c, 0, 1);
          if (a != (s = e.substr(u + 1, r)).length) return o(c, 0, 1);

          if (s.length) {
            if (i = t.decodePacket(s, n, !0), c.type === i.type && c.data === i.data) return o(c, 0, 1);
            if (!1 === o(i, u + r, l)) return;
          }

          u += r, a = "";
        } else a += f;
      }

      return "" !== a ? o(c, 0, 1) : void 0;
    };
  }, function (e, t, n) {
    var o = n(44);

    e.exports = function (e, t, n) {
      if (o(e), t === undefined) return e;

      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };

        case 2:
          return function (n, o) {
            return e.call(t, n, o);
          };

        case 3:
          return function (n, o, i) {
            return e.call(t, n, o, i);
          };
      }

      return function () {
        return e.apply(t, arguments);
      };
    };
  }, function (e, t) {
    var n = {}.toString;

    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  }, function (e, t) {
    e.exports = !0;
  }, function (e, t) {
    t.f = {}.propertyIsEnumerable;
  }, function (e, t) {
    e.exports = {};
  }, function (e, t, n) {
    var o = n(56);

    e.exports = function (e) {
      return Object(o(e));
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      message: "message",
      imMessage: "imMessage",
      userPresence: "userPresence",
      groupPresence: "groupPresence"
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o = C(n(6)),
        i = C(n(0)),
        r = C(n(1)),
        s = n(29),
        a = n(25),
        u = n(192),
        c = C(n(9)),
        l = C(n(207)),
        f = C(n(224)),
        d = C(n(107)),
        p = C(n(225)),
        h = C(n(226)),
        y = C(n(227)),
        v = C(n(228)),
        m = C(n(229)),
        g = C(n(230)),
        b = C(n(231)),
        _ = C(n(232)),
        k = C(n(233));

    function C(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var w = function () {
      function e() {
        (0, i["default"])(this, e), this._event = s.eventCenter, this._goEasyUploader = null, this._goEasySocket = null, this._dataCache = null, this._messageSender = null, this._history = null, this._conversations = null, this._iMReceiver = null, this._groupMessageReceive = null, this._groupPresenceSubscriber = null, this._groupOnlineCount = null, this._groupHereNow = null, this._privateMessageReceive = null, this._userPresenceSubscriber = null, this._userHereNow = null;
      }

      return (0, r["default"])(e, [{
        key: "on",
        value: function value(e, t) {
          this._event.on(e, t);
        }
      }, {
        key: "initialBeforeConnect",
        value: function value(t) {
          e.userId = t.id, e.userData = t.data, this._dataCache = new k["default"](this, t), this._messageSender = new l["default"](this), this._history = new f["default"](this), this._goEasyUploader = new d["default"](this), this._userHereNow = new g["default"](this), this._groupHereNow = new b["default"](this), this._groupOnlineCount = new y["default"](this);
        }
      }, {
        key: "initialAfterConnect",
        value: function value() {
          this._iMReceiver = new _["default"](this), this._conversations = new a.Conversations(this), this._groupPresenceSubscriber = new v["default"](this), this._groupMessageReceive = new p["default"](this), this._userPresenceSubscriber = new m["default"](this), this._privateMessageReceive = new h["default"](this);
        }
      }, {
        key: "initialGoEasySocket",
        value: function value(e) {
          this._goEasySocket = e;
        }
      }, {
        key: "createTextMessage",
        value: function value(e) {
          return u.messageCreator.create(c["default"].text, e);
        }
      }, {
        key: "createImageMessage",
        value: function value(e) {
          return u.messageCreator.create(c["default"].image, e);
        }
      }, {
        key: "createFileMessage",
        value: function value(e) {
          return u.messageCreator.create(c["default"].file, e);
        }
      }, {
        key: "createAudioMessage",
        value: function value(e) {
          return u.messageCreator.create(c["default"].audio, e);
        }
      }, {
        key: "createVideoMessage",
        value: function value(e) {
          return u.messageCreator.create(c["default"].video, e);
        }
      }, {
        key: "createCustomMessage",
        value: function value(e) {
          return u.messageCreator.create(e.type, e);
        }
      }, {
        key: "latestConversations",
        value: function value() {
          return this._conversations ? this._conversations.latestConversations() : o["default"].reject({
            code: 500,
            content: "Please connect GoEasyIM first."
          });
        }
      }, {
        key: "groupMarkAsRead",
        value: function value(e, t) {
          return this._conversations.groupMarkAsRead(e, t);
        }
      }, {
        key: "privateMarkAsRead",
        value: function value(e, t) {
          return this._conversations.privateMarkAsRead(e, t);
        }
      }, {
        key: "removePrivateConversation",
        value: function value(e) {
          return this._conversations.removeConversation(e, a.ConversationType.PRIVATE);
        }
      }, {
        key: "removeGroupConversation",
        value: function value(e) {
          return this._conversations.removeConversation(e, a.ConversationType.GROUP);
        }
      }, {
        key: "topPrivateConversation",
        value: function value(e, t) {
          return this._conversations.topConversation(e, t, a.ConversationType.PRIVATE);
        }
      }, {
        key: "topGroupConversation",
        value: function value(e, t) {
          return this._conversations.topConversation(e, t, a.ConversationType.GROUP);
        }
      }, {
        key: "history",
        value: function value(e) {
          return this._history.history(e);
        }
      }, {
        key: "upload",
        value: function value(e, t, n) {
          return this._goEasyUploader.upload(e, t, n);
        }
      }, {
        key: "sendSystemMessage",
        value: function value(e, t) {
          return this._messageSender.send(e, t, a.ConversationType.SYSTEM);
        }
      }, {
        key: "sendMessage",
        value: function value(e) {
          return this._messageSender.sendMessage(e);
        }
      }, {
        key: "sendPrivateMessage",
        value: function value(e, t) {
          return this._messageSender.send(e, t, a.ConversationType.PRIVATE);
        }
      }, {
        key: "subscribeUserPresence",
        value: function value(e) {
          return this._userPresenceSubscriber.presence(e);
        }
      }, {
        key: "unsubscribeUserPresence",
        value: function value(e) {
          return this._userPresenceSubscriber.unPresence(e);
        }
      }, {
        key: "hereNow",
        value: function value(e) {
          return this._userHereNow.hereNow(e, a.ConversationType.PRIVATE);
        }
      }, {
        key: "sendGroupMessage",
        value: function value(e, t) {
          return this._messageSender.send(e, t, a.ConversationType.GROUP);
        }
      }, {
        key: "subscribeGroup",
        value: function value(e) {
          return this._groupMessageReceive.subscribe(e);
        }
      }, {
        key: "unsubscribeGroup",
        value: function value(e) {
          return this._groupMessageReceive.unsubscribe(e);
        }
      }, {
        key: "subscribeGroupPresence",
        value: function value(e) {
          return this._groupPresenceSubscriber.presence(e);
        }
      }, {
        key: "unsubscribeGroupPresence",
        value: function value(e) {
          return this._groupPresenceSubscriber.unPresence(e);
        }
      }, {
        key: "groupHereNow",
        value: function value(e) {
          return this._groupHereNow.hereNow(e);
        }
      }, {
        key: "groupOnlineCount",
        value: function value(e) {
          return this._groupOnlineCount.get(e);
        }
      }]), e;
    }();

    w.version = null, w.userId = undefined, w.userData = null, t["default"] = w;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(21)),
        i = l(n(0)),
        r = l(n(1)),
        s = l(n(42)),
        a = n(2),
        u = (l(n(9)), l(n(49))),
        c = n(25);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var f = function () {
      function e(t) {
        (0, i["default"])(this, e), this.type = "", this.to = {
          type: null,
          id: null,
          data: null
        }, this.timestamp = Date.now(), this.senderId = null, this.payload = null, this.messageId = a.UUID.get(), this.status = u["default"]["new"], this.validate(t), this.setSenderId(), this.setType(t), this.setNotification(t), this.setPayload(t), this.setTo(t), this.setData();
      }

      return (0, r["default"])(e, [{
        key: "validate",
        value: function value(e) {
          if (!a.calibrator.isObject(e)) throw Error("it is an empty message.");
        }
      }, {
        key: "setType",
        value: function value(e) {
          throw Error("Abstract method");
        }
      }, {
        key: "setNotification",
        value: function value(e) {
          if (e.notification) {
            if (!a.calibrator.isObject(e.notification)) throw Error("notification require an object.");
            if (a.calibrator.isEmpty(e.notification.title)) throw Error("notification's title is empty.");
            if (a.calibrator.isEmpty(e.notification.body)) throw Error("notification's body is empty.");
            if (e.notification.title.length > 32) throw Error("notification's title over max length 32");
            if (e.notification.body.length > 50) throw Error("notification's body over max length 50");
            this.notification = e.notification;
          }
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          this.payload = (0, o["default"])(null);
        }
      }, {
        key: "setSenderId",
        value: function value() {
          if (!s["default"].userId) throw Error("please call connect() first.");
          this.senderId = s["default"].userId;
        }
      }, {
        key: "setTo",
        value: function value(e) {
          this.to = e.to;
        }
      }, {
        key: "setData",
        value: function value() {
          this.to && this.to.type == c.ConversationType.GROUP && (this.senderData = s["default"].userData);
        }
      }]), e;
    }();

    t["default"] = f;
  }, function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  }, function (e, t) {
    var n = 0,
        o = Math.random();

    e.exports = function (e) {
      return "Symbol(".concat(e === undefined ? "" : e, ")_", (++n + o).toString(36));
    };
  }, function (e, t, n) {
    var o = n(22).f,
        i = n(27),
        r = n(14)("toStringTag");

    e.exports = function (e, t, n) {
      e && !i(e = n ? e : e.prototype, r) && o(e, r, {
        configurable: !0,
        value: t
      });
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(21)),
        i = c(n(0)),
        r = c(n(1)),
        s = n(2),
        a = n(25),
        u = c(n(49));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = function () {
      function e() {
        (0, i["default"])(this, e);
      }

      return (0, r["default"])(e, null, [{
        key: "assemble",
        value: function value(e) {
          if (!s.calibrator.isDef(e)) return null;

          try {
            var t = (0, o["default"])(null);
            return t.type = e.mt, t.timestamp = e.ts, t.senderId = e.s, t.payload = JSON.parse(e.p), t.messageId = e.i, t.status = u["default"].success, e.t == a.ConversationType.GROUP ? (t.groupId = e.r, t.senderData = e.d ? JSON.parse(e.d) : {}) : t.receiverId = e.r, t;
          } catch (n) {
            throw Error(n);
          }
        }
      }]), e;
    }();

    t["default"] = l;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      "new": "new",
      sending: "sending",
      success: "success",
      fail: "fail"
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(3)),
        i = f(n(0)),
        r = f(n(1)),
        s = f(n(4)),
        a = f(n(12)),
        u = f(n(5)),
        c = f(n(70)),
        l = n(17);

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !l.calibrator.isDef(e.file)) throw Error("file is empty.");
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
        }
      }]), t;
    }(c["default"]);

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(3)),
        i = l(n(0)),
        r = l(n(1)),
        s = l(n(4)),
        a = l(n(12)),
        u = l(n(5)),
        c = n(17);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var f = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !c.calibrator.isDef(e.file)) throw Error("file is empty.");
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
        }
      }]), t;
    }(l(n(70))["default"]);

    t["default"] = f;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(3)),
        i = c(n(0)),
        r = c(n(1)),
        s = c(n(4)),
        a = c(n(12)),
        u = c(n(5));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !(e.file instanceof File)) throw Error("wrong file type.");
          if (0 == e.file.size) throw Error("File size is 0.");
          if (e.file.size > 31457280) throw Error("message-length limit 30mib");
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e), this.payload.contentType = e.file.type, this.payload.name = e.file.name, this.payload.size = e.file.size;
          var n = (window.URL || window.webkitURL).createObjectURL(e.file);
          this.payload.url = n;
        }
      }]), t;
    }(c(n(70))["default"]);

    t["default"] = l;
  }, function (e, t, n) {
    (function (o) {
      function i() {
        var e;

        try {
          e = t.storage.debug;
        } catch (n) {}

        return !e && void 0 !== o && "env" in o && (e = o.env.DEBUG), e;
      }

      (t = e.exports = n(241)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var o = "color: " + this.color;
        e.splice(1, 0, o, "color: inherit");
        var i = 0,
            r = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && "%c" === e && (r = ++i);
        }), e.splice(r, 0, o);
      }, t.save = function (e) {
        try {
          null == e ? t.storage.removeItem("debug") : t.storage.debug = e;
        } catch (n) {}
      }, t.load = i, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (e) {}
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      }, t.enable(i());
    }).call(t, n(73));
  }, function (e, t, n) {
    var o = n(23),
        i = n(13).document,
        r = o(i) && o(i.createElement);

    e.exports = function (e) {
      return r ? i.createElement(e) : {};
    };
  }, function (e, t, n) {
    var o = n(23);

    e.exports = function (e, t) {
      if (!o(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !o(i = n.call(e))) return i;
      if ("function" == typeof (n = e.valueOf) && !o(i = n.call(e))) return i;
      if (!t && "function" == typeof (n = e.toString) && !o(i = n.call(e))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (e, t) {
    e.exports = function (e) {
      if (e == undefined) throw TypeError("Can't call method on  " + e);
      return e;
    };
  }, function (e, t) {
    var n = Math.ceil,
        o = Math.floor;

    e.exports = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e);
    };
  }, function (e, t, n) {
    var o = n(59)("keys"),
        i = n(46);

    e.exports = function (e) {
      return o[e] || (o[e] = i(e));
    };
  }, function (e, t, n) {
    var o = n(7),
        i = n(13),
        r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
      return r[e] || (r[e] = t !== undefined ? t : {});
    })("versions", []).push({
      version: o.version,
      mode: n(37) ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (e, t, n) {
    var o = n(19),
        i = n(137),
        r = n(60),
        s = n(58)("IE_PROTO"),
        a = function a() {},
        _u = function u() {
      var e,
          t = n(54)("iframe"),
          o = r.length;

      for (t.style.display = "none", n(87).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), _u = e.F; o--;) {
        delete _u.prototype[r[o]];
      }

      return _u();
    };

    e.exports = Object.create || function (e, t) {
      var n;
      return null !== e ? (a.prototype = o(e), n = new a(), a.prototype = null, n[s] = e) : n = _u(), t === undefined ? n : i(n, t);
    };
  }, function (e, t, n) {
    t.f = n(14);
  }, function (e, t, n) {
    var o = n(13),
        i = n(7),
        r = n(37),
        s = n(62),
        a = n(22).f;

    e.exports = function (e) {
      var t = i.Symbol || (i.Symbol = r ? {} : o.Symbol || {});
      "_" == e.charAt(0) || e in t || a(t, e, {
        value: s.f(e)
      });
    };
  }, function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  }, function (e, t, n) {
    var o = n(38),
        i = n(45),
        r = n(24),
        s = n(55),
        a = n(27),
        u = n(79),
        c = Object.getOwnPropertyDescriptor;
    t.f = n(18) ? c : function (e, t) {
      if (e = r(e), t = s(t, !0), u) try {
        return c(e, t);
      } catch (n) {}
      if (a(e, t)) return i(!o.f.call(e, t), e[t]);
    };
  }, function (e, t, n) {
    var o = n(16),
        i = n(7),
        r = n(30);

    e.exports = function (e, t) {
      var n = (i.Object || {})[e] || Object[e],
          s = {};
      s[e] = t(n), o(o.S + o.F * r(function () {
        n(1);
      }), "Object", s);
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.ModuleType = {
      IM: "IM",
      PUBSUB: "PUBSUB"
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(44);

    e.exports.f = function (e) {
      return new function (e) {
        var t, n;
        this.promise = new e(function (e, o) {
          if (t !== undefined || n !== undefined) throw TypeError("Bad Promise constructor");
          t = e, n = o;
        }), this.resolve = o(t), this.reject = o(n);
      }(e);
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.ConversationType = {
      GROUP: "group",
      PRIVATE: "private"
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(3)),
        i = f(n(0)),
        r = f(n(1)),
        s = f(n(4)),
        a = f(n(12)),
        u = f(n(5)),
        c = f(n(43)),
        l = f(n(9));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function (e) {
      function t(e) {
        (0, i["default"])(this, t);
        var n = (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
        return n.file = null, n.onProgress = null, n.setFile(e.file), n.setOnProgress(e.onProgress), n;
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e);
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e), this.payload.size = "", this.payload.contentType = "", this.payload.name = "", this.payload.url = "";
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = l["default"].file;
        }
      }, {
        key: "setFile",
        value: function value(e) {
          this.file = e;
        }
      }, {
        key: "setOnProgress",
        value: function value(e) {
          this.onProgress = e;
        }
      }]), t;
    }(c["default"]);

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(n(0)),
        i = r(n(1));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var s = function () {
      function e() {
        (0, o["default"])(this, e);
      }

      return (0, i["default"])(e, [{
        key: "upload",
        value: function value(e) {
          throw Error("Not implementation yet.");
        }
      }]), e;
    }();

    t["default"] = s;
  }, function (e, t, n) {
    e.exports = {
      "default": n(234),
      __esModule: !0
    };
  }, function (e, t) {
    var n,
        o,
        i = e.exports = {};

    function r() {
      throw new Error("setTimeout has not been defined");
    }

    function s() {
      throw new Error("clearTimeout has not been defined");
    }

    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : r;
      } catch (e) {
        n = r;
      }

      try {
        o = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        o = s;
      }
    }();
    var u,
        c = [],
        l = !1,
        f = -1;

    function d() {
      l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p());
    }

    function p() {
      if (!l) {
        var e = a(d);
        l = !0;

        for (var t = c.length; t;) {
          for (u = c, c = []; ++f < t;) {
            u && u[f].run();
          }

          f = -1, t = c.length;
        }

        u = null, l = !1, function (e) {
          if (o === clearTimeout) return clearTimeout(e);
          if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);

          try {
            o(e);
          } catch (t) {
            try {
              return o.call(null, e);
            } catch (t) {
              return o.call(this, e);
            }
          }
        }(e);
      }
    }

    function h(e, t) {
      this.fun = e, this.array = t;
    }

    function y() {}

    i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
      c.push(new h(e, t)), 1 !== c.length || l || a(p);
    }, h.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off = y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener = y, i.prependOnceListener = y, i.listeners = function (e) {
      return [];
    }, i.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, i.cwd = function () {
      return "/";
    }, i.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, i.umask = function () {
      return 0;
    };
  }, function (e, t, n) {
    "use strict";

    var o,
        i = n(33),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };
    n(243)("socket.io-parser");
    var s = n(246),
        a = n(247);

    function u() {}

    t.protocol = 4, t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6, t.Encoder = u, t.Decoder = l;
    var c = t.ERROR + '"encode error"';

    function l() {
      this.reconstructor = null;
    }

    function f(e) {
      this.reconPack = e, this.buffers = [];
    }

    function d(e) {
      return {
        type: t.ERROR,
        data: "parser error: " + e
      };
    }

    u.prototype.encode = function (e, n) {
      n([function (e) {
        var n = "" + e.type;
        t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type || (n += e.attachments + "-");
        e.nsp && "/" !== e.nsp && (n += e.nsp + ",");
        null != e.id && (n += e.id);

        if (null != e.data) {
          var o = function (e) {
            try {
              return (0, r["default"])(e);
            } catch (t) {
              return !1;
            }
          }(e.data);

          if (!1 === o) return c;
          n += o;
        }

        return n;
      }(e)]);
    }, s(l.prototype), l.prototype.add = function (e) {
      var n;
      if ("string" != typeof e) throw new Error("Unknown type: " + e);
      n = function (e) {
        var n = 0,
            o = {
          type: Number(e.charAt(0))
        };
        if (null == t.types[o.type]) return d("unknown packet type " + o.type);

        if (t.BINARY_EVENT === o.type || t.BINARY_ACK === o.type) {
          for (var i = ""; "-" !== e.charAt(++n) && (i += e.charAt(n), n != e.length);) {
            ;
          }

          if (i != Number(i) || "-" !== e.charAt(n)) throw new Error("Illegal attachments");
          o.attachments = Number(i);
        }

        if ("/" === e.charAt(n + 1)) for (o.nsp = ""; ++n;) {
          var r = e.charAt(n);
          if ("," === r) break;
          if (o.nsp += r, n === e.length) break;
        } else o.nsp = "/";
        var s = e.charAt(n + 1);

        if ("" !== s && Number(s) == s) {
          for (o.id = ""; ++n;) {
            var r = e.charAt(n);

            if (null == r || Number(r) != r) {
              --n;
              break;
            }

            if (o.id += e.charAt(n), n === e.length) break;
          }

          o.id = Number(o.id);
        }

        if (e.charAt(++n)) {
          var u = function (e) {
            try {
              return JSON.parse(e);
            } catch (t) {
              return !1;
            }
          }(e.substr(n)),
              c = !1 !== u && (o.type === t.ERROR || a(u));

          if (!c) return d("invalid payload");
          o.data = u;
        }

        return o;
      }(e), this.emit("decoded", n);
    }, l.prototype.destroy = function () {
      this.reconstructor && this.reconstructor.finishedReconstruction();
    }, f.prototype.takeBinaryData = function (e) {
      if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
        var t = binary.reconstructPacket(this.reconPack, this.buffers);
        return this.finishedReconstruction(), t;
      }

      return null;
    }, f.prototype.finishedReconstruction = function () {
      this.reconPack = null, this.buffers = [];
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(34),
        i = n(113);

    function r(e) {
      this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress;
    }

    e.exports = r, i(r.prototype), r.prototype.onError = function (e, t) {
      var n = new Error(e);
      return n.type = "TransportError", n.description = t, this.emit("error", n), this;
    }, r.prototype.open = function () {
      return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
    }, r.prototype.close = function () {
      return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
    }, r.prototype.send = function (e) {
      if ("open" !== this.readyState) throw new Error("Transport not open");
      this.write(e);
    }, r.prototype.onOpen = function () {
      this.readyState = "open", this.writable = !0, this.emit("open");
    }, r.prototype.onData = function (e) {
      var t = o.decodePacket(e, this.socket.binaryType);
      this.onPacket(t);
    }, r.prototype.onPacket = function (e) {
      this.emit("packet", e);
    }, r.prototype.onClose = function () {
      this.readyState = "closed", this.emit("close");
    };
  }, function (e, t) {
    t.encode = function (e) {
      var t = "";

      for (var n in e) {
        e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
      }

      return t;
    }, t.decode = function (e) {
      for (var t = {}, n = e.split("&"), o = 0, i = n.length; o < i; o++) {
        var r = n[o].split("=");
        t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
      }

      return t;
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      var n = function n() {};

      n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
    };
  }, function (e, t, n) {
    (function (o) {
      function i() {
        var e;

        try {
          e = t.storage.debug;
        } catch (n) {}

        return !e && void 0 !== o && "env" in o && (e = o.env.DEBUG), e;
      }

      (t = e.exports = n(259)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var o = "color: " + this.color;
        e.splice(1, 0, o, "color: inherit");
        var i = 0,
            r = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && "%c" === e && (r = ++i);
        }), e.splice(r, 0, o);
      }, t.save = function (e) {
        try {
          null == e ? t.storage.removeItem("debug") : t.storage.debug = e;
        } catch (n) {}
      }, t.load = i, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (e) {}
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      }, t.enable(i());
    }).call(t, n(73));
  }, function (e, t, n) {
    e.exports = !n(18) && !n(30)(function () {
      return 7 != Object.defineProperty(n(54)("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (e, t, n) {
    var o = n(27),
        i = n(24),
        r = n(126)(!1),
        s = n(58)("IE_PROTO");

    e.exports = function (e, t) {
      var n,
          a = i(e),
          u = 0,
          c = [];

      for (n in a) {
        n != s && o(a, n) && c.push(n);
      }

      for (; t.length > u;) {
        o(a, n = t[u++]) && (~r(c, n) || c.push(n));
      }

      return c;
    };
  }, function (e, t, n) {
    var o = n(36);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return "String" == o(e) ? e.split("") : Object(e);
    };
  }, function (e, t, n) {
    var o = n(57),
        i = Math.min;

    e.exports = function (e) {
      return e > 0 ? i(o(e), 9007199254740991) : 0;
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.calibrator = undefined;
    var o = s(n(20)),
        i = s(n(0)),
        r = s(n(1));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var a = new (function () {
      function e() {
        (0, i["default"])(this, e);
      }

      return (0, r["default"])(e, [{
        key: "isUndef",
        value: function value(e) {
          return e === undefined || null === e;
        }
      }, {
        key: "isTrue",
        value: function value(e) {
          return !0 === e;
        }
      }, {
        key: "isFalse",
        value: function value(e) {
          return !1 === e;
        }
      }, {
        key: "isPrimitive",
        value: function value(e) {
          return "string" == typeof e || "number" == typeof e || "symbol" === (void 0 === e ? "undefined" : (0, o["default"])(e)) || "boolean" == typeof e;
        }
      }, {
        key: "isDef",
        value: function value(e) {
          return e !== undefined && null !== e;
        }
      }, {
        key: "isObject",
        value: function value(e) {
          return null !== e && "object" === (void 0 === e ? "undefined" : (0, o["default"])(e));
        }
      }, {
        key: "isPlainObject",
        value: function value(e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        }
      }, {
        key: "isRegExp",
        value: function value(e) {
          return "[object RegExp]" === Object.prototype.toString.call(e);
        }
      }, {
        key: "isValidArrayIndex",
        value: function value(e) {
          var t = parseFloat(String(e));
          return t >= 0 && Math.floor(t) === t && isFinite(e);
        }
      }, {
        key: "isStringOrNumber",
        value: function value(e) {
          return "string" == typeof e || "number" == typeof e;
        }
      }, {
        key: "isString",
        value: function value(e) {
          return "string" == typeof e;
        }
      }, {
        key: "isNumber",
        value: function value(e) {
          return "number" == typeof e;
        }
      }, {
        key: "isArray",
        value: function value(e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        }
      }, {
        key: "isEmpty",
        value: function value(e) {
          return this.isArray(e) ? 0 == e.length : this.isObject(e) ? !this.isDef(e) : !this.isNumber(e) && (this.isString(e) ? "" == e.trim() : !this.isDef(e));
        }
      }, {
        key: "isNative",
        value: function value(e) {
          return "function" == typeof e && /native code/.test(e.toString());
        }
      }, {
        key: "isFunction",
        value: function value(e) {
          return "function" == typeof e;
        }
      }]), e;
    }())();
    t.calibrator = a;
  }, function (e, t, n) {
    "use strict";

    var o = n(135)(!0);
    n(85)(String, "String", function (e) {
      this._t = String(e), this._i = 0;
    }, function () {
      var e,
          t = this._t,
          n = this._i;
      return n >= t.length ? {
        value: undefined,
        done: !0
      } : (e = o(t, n), this._i += e.length, {
        value: e,
        done: !1
      });
    });
  }, function (e, t, n) {
    "use strict";

    var o = n(37),
        i = n(16),
        r = n(86),
        s = n(26),
        a = n(39),
        u = n(136),
        c = n(47),
        l = n(88),
        f = n(14)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = function p() {
      return this;
    };

    e.exports = function (e, t, n, h, y, v, m) {
      u(n, t, h);

      var g,
          b,
          _,
          k = function k(e) {
        if (!d && e in S) return S[e];

        switch (e) {
          case "keys":
          case "values":
            return function () {
              return new n(this, e);
            };
        }

        return function () {
          return new n(this, e);
        };
      },
          C = t + " Iterator",
          w = "values" == y,
          E = !1,
          S = e.prototype,
          O = S[f] || S["@@iterator"] || y && S[y],
          T = O || k(y),
          F = y ? w ? k("entries") : T : undefined,
          M = "Array" == t && S.entries || O;

      if (M && (_ = l(M.call(new e()))) !== Object.prototype && _.next && (c(_, C, !0), o || "function" == typeof _[f] || s(_, f, p)), w && O && "values" !== O.name && (E = !0, T = function T() {
        return O.call(this);
      }), o && !m || !d && !E && S[f] || s(S, f, T), a[t] = T, a[C] = p, y) if (g = {
        values: w ? T : k("values"),
        keys: v ? T : k("keys"),
        entries: F
      }, m) for (b in g) {
        b in S || r(S, b, g[b]);
      } else i(i.P + i.F * (d || E), t, g);
      return g;
    };
  }, function (e, t, n) {
    e.exports = n(26);
  }, function (e, t, n) {
    var o = n(13).document;
    e.exports = o && o.documentElement;
  }, function (e, t, n) {
    var o = n(27),
        i = n(40),
        r = n(58)("IE_PROTO"),
        s = Object.prototype;

    e.exports = Object.getPrototypeOf || function (e) {
      return e = i(e), o(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
    };
  }, function (e, t, n) {
    n(138);

    for (var o = n(13), i = n(26), r = n(39), s = n(14)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < a.length; u++) {
      var c = a[u],
          l = o[c],
          f = l && l.prototype;
      f && !f[s] && i(f, s, c), r[c] = r.Array;
    }
  }, function (e, t, n) {
    var o = n(80),
        i = n(60).concat("length", "prototype");

    t.f = Object.getOwnPropertyNames || function (e) {
      return o(e, i);
    };
  }, function (e, t) {}, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.env = undefined;
    var o = s(n(20)),
        i = s(n(0)),
        r = s(n(1));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var a = new (function () {
      function e() {
        (0, i["default"])(this, e);
      }

      return (0, r["default"])(e, [{
        key: "isWx",
        value: function value() {
          return !("undefined" == typeof wx || !wx.getLocation) && ("undefined" != typeof GameGlobal || "function" != typeof WebSocket || "function" != typeof XMLHttpRequest);
        }
      }, {
        key: "isUni",
        value: function value() {
          return !("object" !== ("undefined" == typeof uni ? "undefined" : (0, o["default"])(uni)) || !uni.getSystemInfo);
        }
      }, {
        key: "isSupportHtmlPlus",
        value: function value() {
          return !!("object" === ("undefined" == typeof plus ? "undefined" : (0, o["default"])(plus)) && plus.navigator && plus.navigator.getUserAgent() && plus.navigator.getUserAgent().indexOf("Html5Plus") > -1);
        }
      }, {
        key: "isTT",
        value: function value() {
          return !("object" !== ("undefined" == typeof tt ? "undefined" : (0, o["default"])(tt)) || !tt.getSystemInfo);
        }
      }, {
        key: "isBrowserClient",
        value: function value() {
          return this.isUni() ? "function" == typeof WebSocket && "function" == typeof XMLHttpRequest && "object" == ("undefined" == typeof localStorage ? "undefined" : (0, o["default"])(localStorage)) : !(this.isReactNative() || this.isWx() || this.isTT());
        }
      }, {
        key: "isReactNative",
        value: function value() {
          return "undefined" != typeof navigator && "ReactNative" == navigator.product;
        }
      }]), e;
    }())();
    t.env = a;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.GoEasyDomainNumber = undefined;
    var o = u(n(0)),
        i = u(n(1)),
        r = n(92),
        s = n(163),
        a = u(n(164));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var c = function () {
      function e() {
        (0, o["default"])(this, e);
      }

      return (0, i["default"])(e, null, [{
        key: "refreshNumber",
        value: function value() {
          var e = Math.floor(Math.random() * (a["default"].maxNumber - 1) + 1);
          return r.env.isBrowserClient() && (e = parseInt(s.storage.getData("goEasyNode")) || e), e > 0 && e < a["default"].maxNumber ? e += 1 : e == a["default"].maxNumber && (e = 1), r.env.isBrowserClient() && s.storage.setData("goEasyNode", e), e;
        }
      }]), e;
    }();

    t.GoEasyDomainNumber = c;
  }, function (e, t, n) {
    e.exports = {
      "default": n(172),
      __esModule: !0
    };
  }, function (e, t, n) {
    var o = n(36),
        i = n(14)("toStringTag"),
        r = "Arguments" == o(function () {
      return arguments;
    }());

    e.exports = function (e) {
      var t, n, s;
      return e === undefined ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
        try {
          return e[t];
        } catch (n) {}
      }(t = Object(e), i)) ? n : r ? o(t) : "Object" == (s = o(t)) && "function" == typeof t.callee ? "Arguments" : s;
    };
  }, function (e, t, n) {
    var o = n(19),
        i = n(44),
        r = n(14)("species");

    e.exports = function (e, t) {
      var n,
          s = o(e).constructor;
      return s === undefined || (n = o(s)[r]) == undefined ? t : i(n);
    };
  }, function (e, t, n) {
    var o,
        i,
        r,
        s = n(35),
        a = n(182),
        u = n(87),
        c = n(54),
        l = n(13),
        f = l.process,
        d = l.setImmediate,
        p = l.clearImmediate,
        h = l.MessageChannel,
        y = l.Dispatch,
        v = 0,
        m = {},
        g = function g() {
      var e = +this;

      if (m.hasOwnProperty(e)) {
        var t = m[e];
        delete m[e], t();
      }
    },
        b = function b(e) {
      g.call(e.data);
    };

    d && p || (d = function d(e) {
      for (var t = [], n = 1; arguments.length > n;) {
        t.push(arguments[n++]);
      }

      return m[++v] = function () {
        a("function" == typeof e ? e : Function(e), t);
      }, o(v), v;
    }, p = function p(e) {
      delete m[e];
    }, "process" == n(36)(f) ? o = function o(e) {
      f.nextTick(s(g, e, 1));
    } : y && y.now ? o = function o(e) {
      y.now(s(g, e, 1));
    } : h ? (r = (i = new h()).port2, i.port1.onmessage = b, o = s(r.postMessage, r, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (o = function o(e) {
      l.postMessage(e + "", "*");
    }, l.addEventListener("message", b, !1)) : o = "onreadystatechange" in c("script") ? function (e) {
      u.appendChild(c("script")).onreadystatechange = function () {
        u.removeChild(this), g.call(e);
      };
    } : function (e) {
      setTimeout(s(g, e, 1), 0);
    }), e.exports = {
      set: d,
      clear: p
    };
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return {
          e: !1,
          v: e()
        };
      } catch (t) {
        return {
          e: !0,
          v: t
        };
      }
    };
  }, function (e, t, n) {
    var o = n(19),
        i = n(23),
        r = n(68);

    e.exports = function (e, t) {
      if (o(e), i(t) && t.constructor === e) return t;
      var n = r.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ImEventType = undefined;
    var o,
        i = n(21);
    var r = (0, ((o = i) && o.__esModule ? o : {
      "default": o
    })["default"])(null);
    r.PRIVATE_MESSAGE_RECEIVED = "PRIVATE_MESSAGE_RECEIVED", r.GROUP_MESSAGE_RECEIVED = "GROUP_MESSAGE_RECEIVED", r.SYSTEM_MESSAGE_RECEIVED = "SYSTEM_MESSAGE_RECEIVED", r.CONVERSATIONS_UPDATED = "CONVERSATIONS_UPDATED", r.CONNECTED = "CONNECTED", r.CONNECTING = "CONNECTING", r.DISCONNECTED = "DISCONNECTED", r.USER_PRESENCE = "USER_PRESENCE", r.GROUP_PRESENCE = "GROUP_PRESENCE", t.ImEventType = r;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Conversion = undefined;
    var o = u(n(0)),
        i = u(n(1)),
        r = n(69),
        s = u(n(42)),
        a = u(n(48));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    t.Conversion = function () {
      function e() {
        (0, o["default"])(this, e), this.type = "", this.lastMessage = null, this.unread = 0, this.top = !1, this.data = null, this.lc = 0, this.lm = 0;
      }

      return (0, i["default"])(e, null, [{
        key: "buildByInMessage",
        value: function value(t) {
          var n = new e();
          return n.data = {}, n.type = t.t, n.lastMessage = a["default"].assemble(t), n.lc = n.lastMessage.timestamp - 1, n.lm = n.lastMessage.timestamp, n.unread = 0, t.t == r.ConversationType.GROUP ? n.groupId = t.r : s["default"].userId == t.r ? n.userId = t.s : n.userId = t.r, n;
        }
      }, {
        key: "buildByOutMessage",
        value: function value(t, n, o, i) {
          var s = new e();
          return s.type = n, s.lastMessage = t, s.lm = s.lastMessage.timestamp, s.lc = s.lm, s.unread = 0, n == r.ConversationType.GROUP ? (s.groupId = o, s.lastMessage.groupId = o) : (s.userId = o, s.lastMessage.receiverId = o), s;
        }
      }, {
        key: "buildByConversation",
        value: function value(t, n) {
          var o = new e();
          o.type = n.t, n.lmsg.t = n.t, o.lastMessage = a["default"].assemble(n.lmsg), o.unread = 0, o.lc = n.lcts, o.lm = o.lastMessage.timestamp, o.top = n.top || !1;
          var i = n.d ? JSON.parse(n.d) : {};
          return o.data = i, n.t == r.ConversationType.GROUP ? (o.groupId = n.g, t.putGroupData(o.groupId, i)) : (o.userId = n.uid, t.putUserData(o.userId, i), s["default"].userId == n.lmsg.s ? o.lastMessage.senderData = s["default"].userData : o.lastMessage.senderData = i), o;
        }
      }]), e;
    }();
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = s(n(0)),
        i = s(n(1)),
        r = n(2);

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var a = function () {
      function e() {
        (0, o["default"])(this, e);
      }

      return (0, i["default"])(e, null, [{
        key: "resolve",
        value: function value() {
          return r.env.isUni() ? "uniApp" : r.env.isWx() ? "wx" : "html";
        }
      }]), e;
    }();

    t["default"] = a;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(3)),
        i = d(n(0)),
        r = d(n(1)),
        s = d(n(4)),
        a = d(n(12)),
        u = d(n(5)),
        c = d(n(43)),
        l = d(n(9)),
        f = n(2);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var p = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          if (f.calibrator.isEmpty(e.text) || "" == e.text.trim()) throw Error("text is empty");
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = l["default"].text;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e), this.payload.text = e.text;
        }
      }]), t;
    }(c["default"]);

    t["default"] = p;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(n(0)),
        i = r(n(1));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var s = function () {
      function e() {
        (0, o["default"])(this, e);
      }

      return (0, i["default"])(e, [{
        key: "build",
        value: function value() {
          throw Error("Not implementation yet.");
        }
      }]), e;
    }();

    t["default"] = s;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(6)),
        i = d(n(3)),
        r = d(n(0)),
        s = d(n(1)),
        a = d(n(4)),
        u = d(n(5)),
        c = d(n(106)),
        l = d(n(9)),
        f = d(n(107));

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var p = function (e) {
      function t(e) {
        (0, r["default"])(this, t);
        var n = (0, a["default"])(this, (t.__proto__ || (0, i["default"])(t)).call(this));
        return n.im = null, n.goEasyUploader = new f["default"](e), n;
      }

      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "build",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            var i = new c["default"]();
            t.upload(e).then(function (t) {
              var o = t.content,
                  r = o === undefined ? {} : o;
              (i = e.payload).url = r.url, i.name = r.newFileName, n(i);
            })["catch"](function (e) {
              o(e);
            });
          });
        }
      }, {
        key: "upload",
        value: function value(e) {
          var t = e.type == l["default"].video ? e.payload.video.name : e.payload.name;
          return this.goEasyUploader.upload(e.file, t, e.onProgress, e.type);
        }
      }]), t;
    }(d(n(104))["default"]);

    t["default"] = p;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o,
        i = n(0),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };

    t["default"] = function s(e) {
      (0, r["default"])(this, s);
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = u(n(6)),
        i = u(n(0)),
        r = u(n(1)),
        s = n(214),
        a = u(n(218));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var c = function () {
      function e(t) {
        (0, i["default"])(this, e), this.requestBuilder = null, this.fileUploader = s.fileUploader, this.requestBuilder = new a["default"](t);
      }

      return (0, r["default"])(e, [{
        key: "upload",
        value: function value(e, t, n, i) {
          var r = this;
          return new o["default"](function (o, s) {
            r.requestBuilder.build(e, t, i).then(function (e) {
              o(r.doUpload(e, n));
            })["catch"](function (e) {
              s(e);
            });
          });
        }
      }, {
        key: "customizeUpload",
        value: function value(e, t) {
          this.doUpload(e, t);
        }
      }, {
        key: "doUpload",
        value: function value(e, t) {
          return this.fileUploader.upload(e, t);
        }
      }]), e;
    }();

    t["default"] = c;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o,
        i = n(0),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };

    t["default"] = function s(e, t, n, o, i) {
      (0, r["default"])(this, s), this.host = "", this.headers = {}, this.parameters = {}, this.file = {}, this.payload = {}, this.host = e, this.headers = t, this.parameters = n, this.file = o, this.payload = i;
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(n(0)),
        i = r(n(1));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var s = function () {
      function e() {
        (0, o["default"])(this, e);
      }

      return (0, i["default"])(e, [{
        key: "build",
        value: function value(e, t) {}
      }, {
        key: "newFileName",
        value: function value(e) {
          return e && e.newFilename || "";
        }
      }]), e;
    }();

    t["default"] = s;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(0)),
        i = l(n(1)),
        r = l(n(28)),
        s = l(n(8)),
        a = l(n(237)),
        u = l(n(238)),
        c = n(2);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var f = function () {
      function e() {
        (0, o["default"])(this, e), this.io = u["default"], this.status = r["default"].DISCONNECTED, this.permissions = [s["default"].NONE], this.emitter = null, this.connectedObservers = [], this.disconnectedObservers = [], this.emitter = new a["default"](this);
      }

      return (0, i["default"])(e, [{
        key: "connect",
        value: function value() {
          this.status = r["default"].CONNECTING;
        }
      }, {
        key: "emit",
        value: function value(e) {
          this.emitter.emit(e);
        }
      }, {
        key: "doEmit",
        value: function value(e, t, n) {}
      }, {
        key: "on",
        value: function value(e, t) {
          this.io.on(e, t);
        }
      }, {
        key: "disconnect",
        value: function value() {
          this.io.disconnect();
        }
      }, {
        key: "getStatus",
        value: function value() {
          return this.status;
        }
      }, {
        key: "addConnectedObserver",
        value: function value(e) {
          c.calibrator.isFunction(e) && this.connectedObservers.push(e);
        }
      }, {
        key: "addDisconnectedObserver",
        value: function value(e) {
          c.calibrator.isFunction(e) && this.disconnectedObservers.push(e);
        }
      }, {
        key: "notify",
        value: function value(e, t) {
          for (var n = 0; n < e.length; n++) {
            e[n](t);
          }
        }
      }]), e;
    }();

    t["default"] = f;
  }, function (e, t, n) {
    "use strict";

    var o,
        i = n(20),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };
    var s = n(248),
        a = n(115),
        u = n(116),
        c = n(74),
        l = n(117),
        f = n(118),
        d = (n(53)("socket.io-client:manager"), n(271)),
        p = n(272),
        h = n(93).GoEasyDomainNumber,
        y = Object.prototype.hasOwnProperty;

    function v(e, t) {
      if (!(this instanceof v)) return new v(e, t);
      e && "object" === (void 0 === e ? "undefined" : (0, r["default"])(e)) && (t = e, e = undefined), (t = t || {}).path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || Infinity), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new p({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
      var n = t.parser || c;
      this.encoder = new n.Encoder(), this.decoder = new n.Decoder(), this.autoConnect = !1 !== t.autoConnect, this.autoConnect && this.open();
    }

    function m() {
      var e = !1;
      return "object" === ("undefined" == typeof uni ? "undefined" : (0, r["default"])(uni)) && uni.getSystemInfo && (e = !0), e && !0 === getApp().uniAppRunningBackend;
    }

    e.exports = v, v.prototype.emitAll = function () {
      for (var e in this.emit.apply(this, arguments), this.nsps) {
        y.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments);
      }
    }, v.prototype.updateSocketIds = function () {
      for (var e in this.nsps) {
        y.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e));
      }
    }, v.prototype.generateId = function (e) {
      return ("/" === e ? "" : e + "#") + this.engine.id;
    }, u(v.prototype), v.prototype.reconnection = function (e) {
      return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
    }, v.prototype.reconnectionAttempts = function (e) {
      return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts;
    }, v.prototype.reconnectionDelay = function (e) {
      return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay;
    }, v.prototype.randomizationFactor = function (e) {
      return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor;
    }, v.prototype.reconnectionDelayMax = function (e) {
      return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax;
    }, v.prototype.timeout = function (e) {
      return arguments.length ? (this._timeout = e, this) : this._timeout;
    }, v.prototype.maybeReconnectOnOpen = function () {
      !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }, v.prototype.open = v.prototype.connect = function (e, t) {
      if (this.readyState, ~this.readyState.indexOf("open")) return this;
      this.uri, this.engine = s(this.uri, this.opts);
      var n = this.engine,
          o = this;
      this.readyState = "opening", this.skipReconnect = !1;
      var i = l(n, "open", function () {
        o.onopen(), e && e();
      }),
          r = l(n, "error", function (t) {
        if ("undefined" != typeof window) {
          var n = parseInt(o.uri.match(/[1-9][0-9]*/g)[0]),
              i = h.refreshNumber();
          o.uri = o.uri.replace(n, i);
        }

        if (o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", t), e) {
          var r = new Error("Connection error");
          r.data = t, e(r);
        } else o.maybeReconnectOnOpen();
      });

      if (!1 !== this._timeout) {
        var a = this._timeout,
            u = setTimeout(function () {
          i.destroy(), n.close(), n.emit("error", "timeout"), o.emitAll("connect_timeout", a);
        }, a);
        this.subs.push({
          destroy: function destroy() {
            clearTimeout(u);
          }
        });
      }

      return this.subs.push(i), this.subs.push(r), this;
    }, v.prototype.onopen = function () {
      this.cleanup(), this.readyState = "open", this.emit("open");
      var e = this.engine;
      this.subs.push(l(e, "data", f(this, "ondata"))), this.subs.push(l(e, "ping", f(this, "onping"))), this.subs.push(l(e, "pong", f(this, "onpong"))), this.subs.push(l(e, "error", f(this, "onerror"))), this.subs.push(l(e, "close", f(this, "onclose"))), this.subs.push(l(this.decoder, "decoded", f(this, "ondecoded")));
    }, v.prototype.onping = function () {
      this.lastPing = new Date(), this.emitAll("ping");
    }, v.prototype.onpong = function () {
      this.emitAll("pong", new Date() - this.lastPing);
    }, v.prototype.ondata = function (e) {
      this.decoder.add(e);
    }, v.prototype.ondecoded = function (e) {
      this.emit("packet", e);
    }, v.prototype.onerror = function (e) {
      this.emitAll("error", e);
    }, v.prototype.socket = function (e, t) {
      var n = this.nsps[e];

      if (!n) {
        n = new a(this, e, t), this.nsps[e] = n;
        var o = this;
        n.on("connecting", i), n.on("connect", function () {
          n.id = o.generateId(e);
        }), this.autoConnect && i();
      }

      function i() {
        ~d(o.connecting, n) || o.connecting.push(n);
      }

      return n;
    }, v.prototype.destroy = function (e) {
      var t = d(this.connecting, e);
      ~t && this.connecting.splice(t, 1), this.connecting.length || this.close();
    }, v.prototype.packet = function (e) {
      var t = this;
      e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function (n) {
        for (var o = 0; o < n.length; o++) {
          t.engine.write(n[o], e.options);
        }

        t.encoding = !1, t.processPacketQueue();
      }));
    }, v.prototype.processPacketQueue = function () {
      if (this.packetBuffer.length > 0 && !this.encoding) {
        var e = this.packetBuffer.shift();
        this.packet(e);
      }
    }, v.prototype.cleanup = function () {
      for (var e = this.subs.length, t = 0; t < e; t++) {
        this.subs.shift().destroy();
      }

      this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
    }, v.prototype.close = v.prototype.disconnect = function () {
      this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
    }, v.prototype.onclose = function (e) {
      this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect();
    }, v.prototype.reconnect = function () {
      if (m(), this.reconnecting || this.skipReconnect) return this;
      var e = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {
        var t = this.backoff.duration();
        this.reconnecting = !0;
        var n = setTimeout(function () {
          e.skipReconnect || (e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || (m() ? (e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", "Uniapp running backend, skipped reconnect...")) : e.open(function (t) {
            t ? (e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : e.onreconnect();
          })));
        }, t);
        this.subs.push({
          destroy: function destroy() {
            clearTimeout(n);
          }
        });
      }
    }, v.prototype.onreconnect = function () {
      var e = this.backoff.attempts;
      this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e);
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(250),
        i = n(263);
    t.polling = function (e) {
      var t = !1,
          n = !1;
      e.jsonp;

      if ("undefined" != typeof location) {
        var i = "https:" === location.protocol,
            r = location.port;
        r || (r = i ? 443 : 80), t = e.hostname !== location.hostname || r !== e.port, n = e.secure !== i;
      }

      return e.xdomain = t, e.xscheme = n, new o(e);
    }, t.websocket = i;
  }, function (e, t, n) {
    function o(e) {
      if (e) return function (e) {
        for (var t in o.prototype) {
          e[t] = o.prototype[t];
        }

        return e;
      }(e);
    }

    e.exports = o, o.prototype.on = o.prototype.addEventListener = function (e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
    }, o.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments);
      }

      return n.fn = t, this.on(e, n), this;
    }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n,
          o = this._callbacks["$" + e];
      if (!o) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + e], this;

      for (var i = 0; i < o.length; i++) {
        if ((n = o[i]) === t || n.fn === t) {
          o.splice(i, 1);
          break;
        }
      }

      return this;
    }, o.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};
      var t = [].slice.call(arguments, 1),
          n = this._callbacks["$" + e];
      if (n) for (var o = 0, i = (n = n.slice(0)).length; o < i; ++o) {
        n[o].apply(this, t);
      }
      return this;
    }, o.prototype.listeners = function (e) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
    }, o.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length;
    };
  }, function (e, t, n) {
    "use strict";

    var o,
        i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        r = 64,
        s = {},
        a = 0,
        u = 0;

    function c(e) {
      var t = "";

      do {
        t = i[e % r] + t, e = Math.floor(e / r);
      } while (e > 0);

      return t;
    }

    function l() {
      var e = c(+new Date());
      return e !== o ? (a = 0, o = e) : e + "." + c(a++);
    }

    for (; u < r; u++) {
      s[i[u]] = u;
    }

    l.encode = c, l.decode = function (e) {
      var t = 0;

      for (u = 0; u < e.length; u++) {
        t = t * r + s[e.charAt(u)];
      }

      return t;
    }, e.exports = l;
  }, function (e, t, n) {
    "use strict";

    var o,
        i = n(20),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };
    var s = n(74),
        a = n(116),
        u = n(267),
        c = n(117),
        l = n(118),
        f = (n(53)("socket.io-client:socket"), n(268)),
        d = n(269);
    e.exports = y;
    var p = {
      connect: 1,
      connect_error: 1,
      connect_timeout: 1,
      connecting: 1,
      disconnect: 1,
      error: 1,
      reconnect: 1,
      reconnect_attempt: 1,
      reconnect_failed: 1,
      reconnect_error: 1,
      reconnecting: 1,
      ping: 1,
      pong: 1
    },
        h = a.prototype.emit;

    function y(e, t, n) {
      this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open();
    }

    a(y.prototype), y.prototype.subEvents = function () {
      if (!this.subs) {
        var e = this.io;
        this.subs = [c(e, "open", l(this, "onopen")), c(e, "packet", l(this, "onpacket")), c(e, "close", l(this, "onclose"))];
      }
    }, y.prototype.open = y.prototype.connect = function () {
      return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this);
    }, y.prototype.send = function () {
      var e = u(arguments);
      return e.unshift("message"), this.emit.apply(this, e), this;
    }, y.prototype.emit = function (e) {
      if (p.hasOwnProperty(e)) return h.apply(this, arguments), this;
      var t = u(arguments),
          n = {
        type: (this.flags.binary !== undefined ? this.flags.binary : d(t)) ? s.BINARY_EVENT : s.EVENT,
        data: t,
        options: {}
      };
      return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (this.ids, this.acks[this.ids] = t.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this;
    }, y.prototype.packet = function (e) {
      e.nsp = this.nsp, this.io.packet(e);
    }, y.prototype.onopen = function () {
      if ("/" !== this.nsp) if (this.query) {
        var e = "object" === (0, r["default"])(this.query) ? f.encode(this.query) : this.query;
        this.packet({
          type: s.CONNECT,
          query: e
        });
      } else this.packet({
        type: s.CONNECT
      });
    }, y.prototype.onclose = function (e) {
      this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e);
    }, y.prototype.onpacket = function (e) {
      var t = e.nsp === this.nsp,
          n = e.type === s.ERROR && "/" === e.nsp;
      if (t || n) switch (e.type) {
        case s.CONNECT:
          this.onconnect();
          break;

        case s.EVENT:
        case s.BINARY_EVENT:
          this.onevent(e);
          break;

        case s.ACK:
        case s.BINARY_ACK:
          this.onack(e);
          break;

        case s.DISCONNECT:
          this.ondisconnect();
          break;

        case s.ERROR:
          this.emit("error", e.data);
      }
    }, y.prototype.onevent = function (e) {
      var t = e.data || [];
      null != e.id && t.push(this.ack(e.id)), this.connected ? h.apply(this, t) : this.receiveBuffer.push(t);
    }, y.prototype.ack = function (e) {
      var t = this,
          n = !1;
      return function () {
        if (!n) {
          n = !0;
          var o = u(arguments);
          t.packet({
            type: d(o) ? s.BINARY_ACK : s.ACK,
            id: e,
            data: o
          });
        }
      };
    }, y.prototype.onack = function (e) {
      var t = this.acks[e.id];
      "function" == typeof t ? (e.id, e.data, t.apply(this, e.data), delete this.acks[e.id]) : e.id;
    }, y.prototype.onconnect = function () {
      this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
    }, y.prototype.emitBuffered = function () {
      var e;

      for (e = 0; e < this.receiveBuffer.length; e++) {
        h.apply(this, this.receiveBuffer[e]);
      }

      for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) {
        this.packet(this.sendBuffer[e]);
      }

      this.sendBuffer = [];
    }, y.prototype.ondisconnect = function () {
      this.nsp, this.destroy(), this.onclose("io server disconnect");
    }, y.prototype.destroy = function () {
      if (this.subs) {
        for (var e = 0; e < this.subs.length; e++) {
          this.subs[e].destroy();
        }

        this.subs = null;
      }

      this.io.destroy(this);
    }, y.prototype.close = y.prototype.disconnect = function () {
      return this.connected && (this.nsp, this.packet({
        type: s.DISCONNECT
      })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }, y.prototype.compress = function (e) {
      return this.flags.compress = e, this;
    }, y.prototype.binary = function (e) {
      return this.flags.binary = e, this;
    };
  }, function (e, t, n) {
    function o(e) {
      if (e) return function (e) {
        for (var t in o.prototype) {
          e[t] = o.prototype[t];
        }

        return e;
      }(e);
    }

    e.exports = o, o.prototype.on = o.prototype.addEventListener = function (e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
    }, o.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments);
      }

      return n.fn = t, this.on(e, n), this;
    }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n,
          o = this._callbacks["$" + e];
      if (!o) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + e], this;

      for (var i = 0; i < o.length; i++) {
        if ((n = o[i]) === t || n.fn === t) {
          o.splice(i, 1);
          break;
        }
      }

      return this;
    }, o.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};
      var t = [].slice.call(arguments, 1),
          n = this._callbacks["$" + e];
      if (n) for (var o = 0, i = (n = n.slice(0)).length; o < i; ++o) {
        n[o].apply(this, t);
      }
      return this;
    }, o.prototype.listeners = function (e) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
    }, o.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e, t, n) {
      return e.on(t, n), {
        destroy: function destroy() {
          e.removeListener(t, n);
        }
      };
    };
  }, function (e, t) {
    var n = [].slice;

    e.exports = function (e, t) {
      if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
      var o = n.call(arguments, 2);
      return function () {
        return t.apply(e, o.concat(n.call(arguments)));
      };
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.uniApp = undefined;
    var o = s(n(0)),
        i = s(n(1)),
        r = n(2);

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var a = new (function () {
      function e() {
        (0, o["default"])(this, e), this.overrided = !1;
      }

      return (0, i["default"])(e, [{
        key: "overrideUniShowHideMethods",
        value: function value() {
          if (r.env.isUni() && !this.overrided && getApp() && "undefined" != typeof getApp().$options) {
            this.overrided = !0;
            var e = getApp().$options;

            if ("undefined" != typeof e.onShow) {
              var t = e.onShow[0];

              e.onShow[0] = function () {
                getApp().uniAppRunningBackend = !1, t && t.call(e);
              };
            }

            if ("undefined" != typeof e.onHide) {
              var n = e.onHide[0];

              e.onHide[0] = function () {
                getApp().uniAppRunningBackend = !0, n && n.call(e);
              };
            }
          }
        }
      }, {
        key: "runningBackend",
        value: function value() {
          return getApp().uniAppRunningBackend;
        }
      }]), e;
    }())();
    t.uniApp = a;
  }, function (e, t, n) {
    "use strict";

    var o = r(n(121)),
        i = r(n(276));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    o["default"].version = i["default"].version, e.exports = o["default"];
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = y(n(122)),
        i = y(n(0)),
        r = y(n(1)),
        s = y(n(131)),
        a = y(n(171)),
        u = n(29),
        c = n(15),
        l = n(25),
        f = y(n(28)),
        d = y(n(236)),
        p = n(2),
        h = n(67);

    function y(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var v = function () {
      function e(t) {
        if ((0, i["default"])(this, e), this.goEasySocket = null, this.pubsub = null, this.im = null, null !== e.instance && e.instance.getConnectionStatus() !== f["default"].DISCONNECTED) return e.instance;
        this.validateOptions(t), this.setUriAndOpts(t), this.options = t, this.options.artifactVersion = e.version, this.pubsub = new s["default"](t), this.im = new a["default"](t);
      }

      return (0, r["default"])(e, [{
        key: "connect",
        value: function value(e) {
          this.getConnectionStatus() !== f["default"].DISCONNECTED && p.calibrator.isObject(e) && p.calibrator.isFunction(e.onFailed) ? e.onFailed({
            code: 408,
            content: "It is already connected, don't try again until disconnect() is called. "
          }) : (this.extendOptions(e), this.pubsub.initialBeforeConnect(), this.im.initialBeforeConnect({
            id: e.id,
            data: e.data
          }), this.goEasySocket = new d["default"](this.options), this.im.initialGoEasySocket(this.goEasySocket), this.goEasySocket.connect(), this.pubsub.initialGoEasySocket(this.goEasySocket), this.im.initialAfterConnect());
        }
      }, {
        key: "disconnect",
        value: function value(e) {
          this.goEasySocket.disconnect(e).then(function () {
            p.calibrator.isObject(e) && p.calibrator.isFunction(e.onSuccess) && e.onSuccess();
          })["catch"](function (t) {
            p.calibrator.isObject(e) && p.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "getConnectionStatus",
        value: function value() {
          return this.goEasySocket ? this.goEasySocket.getStatus() : f["default"].DISCONNECTED;
        }
      }, {
        key: "validateOptions",
        value: function value(e) {
          var t = "";
          if (!p.calibrator.isObject(e)) throw t = "options is require an object.", Error(t);
          if (!p.calibrator.isPrimitive(e.appkey) || 0 == e.appkey.length) throw t = "Invalid options:'host' is empty.", Error(t);
          if (!p.calibrator.isPrimitive(e.host) || 0 == e.host.length) throw t = "Invalid options:'host' is empty.", Error(t);
          if (!p.calibrator.isArray(e.modules)) throw t = "Invalid options: 'modules' must be nonempty array", Error(t);
          var n = (0, o["default"])(h.ModuleType),
              i = e.modules.map(function (e) {
            var o = e.toUpperCase();
            if (!n.includes(o)) throw t = "Invalid options: module '" + e + "' is not support", Error(t);
            return o;
          });
          e.modules = i;
        }
      }, {
        key: "extendOptions",
        value: function value(e) {
          if (p.calibrator.isFunction(e.onSuccess) ? this.options.onSuccess = e.onSuccess : this.options.onSuccess = p.noop, p.calibrator.isFunction(e.onFailed) ? this.options.onFailed = e.onFailed : this.options.onFailed = p.noop, p.calibrator.isFunction(e.onProgress) ? this.options.onProgress = e.onProgress : this.options.onProgress = p.noop, !this.options.modules.includes(h.ModuleType.IM) || !p.calibrator.isEmpty(e.id) && p.calibrator.isStringOrNumber(e.id)) {
            var t = "anonymous-" + Math.floor(1e5 * Math.random() + 1);
            this.options.id = e.id || t;
          } else if (p.calibrator.isObject(e) && p.calibrator.isFunction(e.onFailed)) throw {
            code: 400,
            content: "TypeError: id requires number or string."
          };

          if (p.calibrator.isDef(e.data) && !p.calibrator.isObject(e.data)) throw {
            code: 400,
            content: "TypeError: data requires an object."
          };

          if ((p.calibrator.isDef(e.data) ? String(e.data).length : 0) > 300) {
            if (p.calibrator.isObject(e) && p.calibrator.isFunction(e.onFailed)) throw {
              code: 400,
              content: "user.data-length limit 300 byte."
            };
          } else this.options.data = e.data;

          p.calibrator.isDef(e.otp) && (this.options.otp = e.otp);
        }
      }, {
        key: "setUriAndOpts",
        value: function value(e) {
          var t = "://" + p.GoEasyDomainNumber.refreshNumber() + e.host;

          if (p.env.isBrowserClient()) {
            var n = void 0;
            !0 === e.supportOldBrowser ? (n = ["polling", "websocket"], e.forceTLS = !1) : n = ["websocket"], !1 === e.forceTLS ? e.uri = "http" + t + ":80" : e.uri = "https" + t + ":443", e.opts = {
              transports: n,
              timeout: c.SocketTimeout.connect
            };
          } else e.uri = "https://wx-" + e.host + ":443", e.opts = {
            transports: ["websocket"],
            reconnectionDelayMax: c.SocketTimeout.reconnectionDelayMax
          };
        }
      }], [{
        key: "getInstance",
        value: function value(t) {
          return null === e.instance && (e.instance = new e(t)), e.instance;
        }
      }]), e;
    }();

    v.IM_EVENT = u.ImEventType, v.IM_SCENE = l.ConversationType, v.version = "2.0.0", v.instance = null, t["default"] = v;
  }, function (e, t, n) {
    e.exports = {
      "default": n(123),
      __esModule: !0
    };
  }, function (e, t, n) {
    n(124), e.exports = n(7).Object.values;
  }, function (e, t, n) {
    var o = n(16),
        i = n(125)(!1);
    o(o.S, "Object", {
      values: function values(e) {
        return i(e);
      }
    });
  }, function (e, t, n) {
    var o = n(18),
        i = n(31),
        r = n(24),
        s = n(38).f;

    e.exports = function (e) {
      return function (t) {
        for (var n, a = r(t), u = i(a), c = u.length, l = 0, f = []; c > l;) {
          n = u[l++], o && !s.call(a, n) || f.push(e ? [n, a[n]] : a[n]);
        }

        return f;
      };
    };
  }, function (e, t, n) {
    var o = n(24),
        i = n(82),
        r = n(127);

    e.exports = function (e) {
      return function (t, n, s) {
        var a,
            u = o(t),
            c = i(u.length),
            l = r(s, c);

        if (e && n != n) {
          for (; c > l;) {
            if ((a = u[l++]) != a) return !0;
          }
        } else for (; c > l; l++) {
          if ((e || l in u) && u[l] === n) return e || l || 0;
        }

        return !e && -1;
      };
    };
  }, function (e, t, n) {
    var o = n(57),
        i = Math.max,
        r = Math.min;

    e.exports = function (e, t) {
      return (e = o(e)) < 0 ? i(e + t, 0) : r(e, t);
    };
  }, function (e, t, n) {
    e.exports = {
      "default": n(129),
      __esModule: !0
    };
  }, function (e, t, n) {
    n(130);
    var o = n(7).Object;

    e.exports = function (e, t, n) {
      return o.defineProperty(e, t, n);
    };
  }, function (e, t, n) {
    var o = n(16);
    o(o.S + o.F * !n(18), "Object", {
      defineProperty: n(22).f
    });
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(0)),
        i = f(n(1)),
        r = f(n(132)),
        s = f(n(165)),
        a = f(n(166)),
        u = f(n(167)),
        c = f(n(169)),
        l = n(67);

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function () {
      function e(t) {
        (0, o["default"])(this, e), this.goEasySocket = null, this.publisher = null, this.subscriber = null, this.presence = null, this.histories = null, this.options = null, this.hereNows = null, this.neverConnect = !0, this.options = t;
      }

      return (0, i["default"])(e, [{
        key: "initialGoEasySocket",
        value: function value(e) {
          this.goEasySocket = e, this.subscriber.initialGoEasySocket(), this.presence.initialGoEasySocket();
        }
      }, {
        key: "initialBeforeConnect",
        value: function value() {
          this.neverConnect = !1, this.publisher = new a["default"](this), this.subscriber = new u["default"](this), this.histories = new r["default"](this), this.presence = new c["default"](this), this.hereNows = new s["default"](this);
        }
      }, {
        key: "validateOptions",
        value: function value() {
          var e = this.options;
          if (!e.modules || !e.modules.includes(l.ModuleType.PUBSUB)) throw Error("Invalid options: module '" + l.ModuleType.PUBSUB + "' is not enabled");
        }
      }, {
        key: "publish",
        value: function value(e) {
          this.validateOptions(), this.publisher.publish(e);
        }
      }, {
        key: "subscribe",
        value: function value(e) {
          this.validateOptions(), this.subscriber.subscribe(e);
        }
      }, {
        key: "unsubscribe",
        value: function value(e) {
          this.validateOptions(), this.subscriber.unsubscribe(e);
        }
      }, {
        key: "subscribePresence",
        value: function value(e) {
          this.validateOptions(), this.presence.subscribePresence(e);
        }
      }, {
        key: "unsubscribePresence",
        value: function value(e) {
          this.validateOptions(), this.presence.unsubscribePresence(e);
        }
      }, {
        key: "history",
        value: function value(e) {
          this.validateOptions(), this.histories.get(e);
        }
      }, {
        key: "hereNow",
        value: function value(e) {
          this.validateOptions(), this.hereNows.byChannel(e);
        }
      }, {
        key: "hereNowByUserIds",
        value: function value(e) {
          this.validateOptions(), this.hereNows.byUserId(e);
        }
      }]), e;
    }();

    d.instance = null, t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(0)),
        i = l(n(1)),
        r = n(2),
        s = n(11),
        a = l(n(10)),
        u = l(n(8)),
        c = n(15);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var f = function () {
      function e(t) {
        (0, o["default"])(this, e), this.pubSub = null, this.pubSub = t;
      }

      return (0, i["default"])(e, [{
        key: "get",
        value: function value(e, t) {
          if (r.calibrator.isFunction(e.onSuccess) || (e.onSuccess = r.noop), r.calibrator.isFunction(e.onFailed) || (e.onFailed = r.noop), r.calibrator.isDef(e.channel)) {
            r.calibrator.isNumber(e.channel) && (e.channel = e.channel.toString());
            var n = new a["default"]({
              name: s.EmitType.historyMessages,
              permission: u["default"].READ,
              params: e,
              singleTimeout: c.SocketTimeout.commonQuerySingle,
              totalTimeout: c.SocketTimeout.commonQueryTotal,
              success: function success(t) {
                e.onSuccess({
                  code: t.resultCode || t.code || 200,
                  content: t.content
                });
              },
              fail: function fail(t) {
                e.onFailed({
                  code: t.resultCode || t.code,
                  content: t.content
                });
              }
            });
            this.pubSub.goEasySocket.emit(n);
          } else e.onFailed(res);
        }
      }]), e;
    }();

    t["default"] = f;
  }, function (e, t, n) {
    e.exports = {
      "default": n(134),
      __esModule: !0
    };
  }, function (e, t, n) {
    n(84), n(89), e.exports = n(62).f("iterator");
  }, function (e, t, n) {
    var o = n(57),
        i = n(56);

    e.exports = function (e) {
      return function (t, n) {
        var r,
            s,
            a = String(i(t)),
            u = o(n),
            c = a.length;
        return u < 0 || u >= c ? e ? "" : undefined : (r = a.charCodeAt(u)) < 55296 || r > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : r : e ? a.slice(u, u + 2) : s - 56320 + (r - 55296 << 10) + 65536;
      };
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(61),
        i = n(45),
        r = n(47),
        s = {};
    n(26)(s, n(14)("iterator"), function () {
      return this;
    }), e.exports = function (e, t, n) {
      e.prototype = o(s, {
        next: i(1, n)
      }), r(e, t + " Iterator");
    };
  }, function (e, t, n) {
    var o = n(22),
        i = n(19),
        r = n(31);
    e.exports = n(18) ? Object.defineProperties : function (e, t) {
      i(e);

      for (var n, s = r(t), a = s.length, u = 0; a > u;) {
        o.f(e, n = s[u++], t[n]);
      }

      return e;
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(139),
        i = n(140),
        r = n(39),
        s = n(24);
    e.exports = n(85)(Array, "Array", function (e, t) {
      this._t = s(e), this._i = 0, this._k = t;
    }, function () {
      var e = this._t,
          t = this._k,
          n = this._i++;
      return !e || n >= e.length ? (this._t = undefined, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
    }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries");
  }, function (e, t) {
    e.exports = function () {};
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        value: t,
        done: !!e
      };
    };
  }, function (e, t, n) {
    e.exports = {
      "default": n(142),
      __esModule: !0
    };
  }, function (e, t, n) {
    n(143), n(91), n(148), n(149), e.exports = n(7).Symbol;
  }, function (e, t, n) {
    "use strict";

    var o = n(13),
        i = n(27),
        r = n(18),
        s = n(16),
        a = n(86),
        u = n(144).KEY,
        c = n(30),
        l = n(59),
        f = n(47),
        d = n(46),
        p = n(14),
        h = n(62),
        y = n(63),
        v = n(145),
        m = n(146),
        g = n(19),
        b = n(23),
        _ = n(40),
        k = n(24),
        C = n(55),
        w = n(45),
        E = n(61),
        S = n(147),
        O = n(65),
        T = n(64),
        F = n(22),
        M = n(31),
        P = O.f,
        I = F.f,
        N = S.f,
        _x = o.Symbol,
        R = o.JSON,
        A = R && R.stringify,
        j = p("_hidden"),
        D = p("toPrimitive"),
        U = {}.propertyIsEnumerable,
        B = l("symbol-registry"),
        q = l("symbols"),
        L = l("op-symbols"),
        G = Object.prototype,
        z = "function" == typeof _x && !!T.f,
        H = o.QObject,
        V = !H || !H.prototype || !H.prototype.findChild,
        W = r && c(function () {
      return 7 != E(I({}, "a", {
        get: function get() {
          return I(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (e, t, n) {
      var o = P(G, t);
      o && delete G[t], I(e, t, n), o && e !== G && I(G, t, o);
    } : I,
        J = function J(e) {
      var t = q[e] = E(_x.prototype);
      return t._k = e, t;
    },
        $ = z && "symbol" == typeof _x.iterator ? function (e) {
      return "symbol" == typeof e;
    } : function (e) {
      return e instanceof _x;
    },
        K = function K(e, t, n) {
      return e === G && K(L, t, n), g(e), t = C(t, !0), g(n), i(q, t) ? (n.enumerable ? (i(e, j) && e[j][t] && (e[j][t] = !1), n = E(n, {
        enumerable: w(0, !1)
      })) : (i(e, j) || I(e, j, w(1, {})), e[j][t] = !0), W(e, t, n)) : I(e, t, n);
    },
        Y = function Y(e, t) {
      g(e);

      for (var n, o = v(t = k(t)), i = 0, r = o.length; r > i;) {
        K(e, n = o[i++], t[n]);
      }

      return e;
    },
        Q = function Q(e) {
      var t = U.call(this, e = C(e, !0));
      return !(this === G && i(q, e) && !i(L, e)) && (!(t || !i(this, e) || !i(q, e) || i(this, j) && this[j][e]) || t);
    },
        X = function X(e, t) {
      if (e = k(e), t = C(t, !0), e !== G || !i(q, t) || i(L, t)) {
        var n = P(e, t);
        return !n || !i(q, t) || i(e, j) && e[j][t] || (n.enumerable = !0), n;
      }
    },
        Z = function Z(e) {
      for (var t, n = N(k(e)), o = [], r = 0; n.length > r;) {
        i(q, t = n[r++]) || t == j || t == u || o.push(t);
      }

      return o;
    },
        ee = function ee(e) {
      for (var t, n = e === G, o = N(n ? L : k(e)), r = [], s = 0; o.length > s;) {
        !i(q, t = o[s++]) || n && !i(G, t) || r.push(q[t]);
      }

      return r;
    };

    z || (a((_x = function x() {
      if (this instanceof _x) throw TypeError("Symbol is not a constructor!");

      var e = d(arguments.length > 0 ? arguments[0] : undefined),
          t = function t(n) {
        this === G && t.call(L, n), i(this, j) && i(this[j], e) && (this[j][e] = !1), W(this, e, w(1, n));
      };

      return r && V && W(G, e, {
        configurable: !0,
        set: t
      }), J(e);
    }).prototype, "toString", function () {
      return this._k;
    }), O.f = X, F.f = K, n(90).f = S.f = Z, n(38).f = Q, T.f = ee, r && !n(37) && a(G, "propertyIsEnumerable", Q, !0), h.f = function (e) {
      return J(p(e));
    }), s(s.G + s.W + s.F * !z, {
      Symbol: _x
    });

    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) {
      p(te[ne++]);
    }

    for (var oe = M(p.store), ie = 0; oe.length > ie;) {
      y(oe[ie++]);
    }

    s(s.S + s.F * !z, "Symbol", {
      "for": function _for(e) {
        return i(B, e += "") ? B[e] : B[e] = _x(e);
      },
      keyFor: function keyFor(e) {
        if (!$(e)) throw TypeError(e + " is not a symbol!");

        for (var t in B) {
          if (B[t] === e) return t;
        }
      },
      useSetter: function useSetter() {
        V = !0;
      },
      useSimple: function useSimple() {
        V = !1;
      }
    }), s(s.S + s.F * !z, "Object", {
      create: function create(e, t) {
        return t === undefined ? E(e) : Y(E(e), t);
      },
      defineProperty: K,
      defineProperties: Y,
      getOwnPropertyDescriptor: X,
      getOwnPropertyNames: Z,
      getOwnPropertySymbols: ee
    });
    var re = c(function () {
      T.f(1);
    });
    s(s.S + s.F * re, "Object", {
      getOwnPropertySymbols: function getOwnPropertySymbols(e) {
        return T.f(_(e));
      }
    }), R && s(s.S + s.F * (!z || c(function () {
      var e = _x();

      return "[null]" != A([e]) || "{}" != A({
        a: e
      }) || "{}" != A(Object(e));
    })), "JSON", {
      stringify: function stringify(e) {
        for (var t, n, o = [e], i = 1; arguments.length > i;) {
          o.push(arguments[i++]);
        }

        if (n = t = o[1], (b(t) || e !== undefined) && !$(e)) return m(t) || (t = function t(e, _t2) {
          if ("function" == typeof n && (_t2 = n.call(this, e, _t2)), !$(_t2)) return _t2;
        }), o[1] = t, A.apply(R, o);
      }
    }), _x.prototype[D] || n(26)(_x.prototype, D, _x.prototype.valueOf), f(_x, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0);
  }, function (e, t, n) {
    var o = n(46)("meta"),
        i = n(23),
        r = n(27),
        s = n(22).f,
        a = 0,
        u = Object.isExtensible || function () {
      return !0;
    },
        c = !n(30)(function () {
      return u(Object.preventExtensions({}));
    }),
        l = function l(e) {
      s(e, o, {
        value: {
          i: "O" + ++a,
          w: {}
        }
      });
    },
        f = e.exports = {
      KEY: o,
      NEED: !1,
      fastKey: function fastKey(e, t) {
        if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;

        if (!r(e, o)) {
          if (!u(e)) return "F";
          if (!t) return "E";
          l(e);
        }

        return e[o].i;
      },
      getWeak: function getWeak(e, t) {
        if (!r(e, o)) {
          if (!u(e)) return !0;
          if (!t) return !1;
          l(e);
        }

        return e[o].w;
      },
      onFreeze: function onFreeze(e) {
        return c && f.NEED && u(e) && !r(e, o) && l(e), e;
      }
    };
  }, function (e, t, n) {
    var o = n(31),
        i = n(64),
        r = n(38);

    e.exports = function (e) {
      var t = o(e),
          n = i.f;
      if (n) for (var s, a = n(e), u = r.f, c = 0; a.length > c;) {
        u.call(e, s = a[c++]) && t.push(s);
      }
      return t;
    };
  }, function (e, t, n) {
    var o = n(36);

    e.exports = Array.isArray || function (e) {
      return "Array" == o(e);
    };
  }, function (e, t, n) {
    var o = n(24),
        i = n(90).f,
        r = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    e.exports.f = function (e) {
      return s && "[object Window]" == r.call(e) ? function (e) {
        try {
          return i(e);
        } catch (t) {
          return s.slice();
        }
      }(e) : i(o(e));
    };
  }, function (e, t, n) {
    n(63)("asyncIterator");
  }, function (e, t, n) {
    n(63)("observable");
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.UUID = undefined;
    var o = s(n(0)),
        i = s(n(1)),
        r = s(n(151));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var a = function () {
      function e() {
        (0, o["default"])(this, e);
      }

      return (0, i["default"])(e, null, [{
        key: "get",
        value: function value() {
          return (0, r["default"])().replace(/-/g, "");
        }
      }]), e;
    }();

    t.UUID = a;
  }, function (e, t, n) {
    var o,
        i,
        r = n(152),
        s = n(153),
        a = 0,
        u = 0;

    e.exports = function (e, t, n) {
      var c = t && n || 0,
          l = t || [],
          f = (e = e || {}).node || o,
          d = e.clockseq !== undefined ? e.clockseq : i;

      if (null == f || null == d) {
        var p = r();
        null == f && (f = o = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == d && (d = i = 16383 & (p[6] << 8 | p[7]));
      }

      var h = e.msecs !== undefined ? e.msecs : new Date().getTime(),
          y = e.nsecs !== undefined ? e.nsecs : u + 1,
          v = h - a + (y - u) / 1e4;
      if (v < 0 && e.clockseq === undefined && (d = d + 1 & 16383), (v < 0 || h > a) && e.nsecs === undefined && (y = 0), y >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      a = h, u = y, i = d;
      var m = (1e4 * (268435455 & (h += 122192928e5)) + y) % 4294967296;
      l[c++] = m >>> 24 & 255, l[c++] = m >>> 16 & 255, l[c++] = m >>> 8 & 255, l[c++] = 255 & m;
      var g = h / 4294967296 * 1e4 & 268435455;
      l[c++] = g >>> 8 & 255, l[c++] = 255 & g, l[c++] = g >>> 24 & 15 | 16, l[c++] = g >>> 16 & 255, l[c++] = d >>> 8 | 128, l[c++] = 255 & d;

      for (var b = 0; b < 6; ++b) {
        l[c + b] = f[b];
      }

      return t || s(l);
    };
  }, function (e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);

    if (n) {
      var o = new Uint8Array(16);

      e.exports = function () {
        return n(o), o;
      };
    } else {
      var i = new Array(16);

      e.exports = function () {
        for (var e, t = 0; t < 16; t++) {
          0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
        }

        return i;
      };
    }
  }, function (e, t) {
    for (var n = [], o = 0; o < 256; ++o) {
      n[o] = (o + 256).toString(16).substr(1);
    }

    e.exports = function (e, t) {
      var o = t || 0,
          i = n;
      return [i[e[o++]], i[e[o++]], i[e[o++]], i[e[o++]], "-", i[e[o++]], i[e[o++]], "-", i[e[o++]], i[e[o++]], "-", i[e[o++]], i[e[o++]], "-", i[e[o++]], i[e[o++]], i[e[o++]], i[e[o++]], i[e[o++]], i[e[o++]]].join("");
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.goEasyArray = undefined;
    var o = u(n(3)),
        i = u(n(0)),
        r = u(n(1)),
        s = u(n(4)),
        a = u(n(5));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var c = new (function (e) {
      function t() {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).apply(this, arguments));
      }

      return (0, a["default"])(t, e), (0, r["default"])(t, [{
        key: "deleteByKey",
        value: function value(e, t, n) {
          var o = e.findIndex(function (e) {
            return e[t] == n;
          });
          o > -1 && e.splice(o, 1);
        }
      }, {
        key: "unshiftGuid",
        value: function value(e) {
          var t = !1,
              n = this.findIndex(function (t) {
            return t == e;
          });

          for (n > -1 && (t = !0, this.splice(n, 1)), this.unshift(e); this.length > 300;) {
            this.pop();
          }

          return t;
        }
      }]), t;
    }(Array))();
    t.goEasyArray = c;
  }, function (e, t, n) {
    n(156), e.exports = n(7).Object.getPrototypeOf;
  }, function (e, t, n) {
    var o = n(40),
        i = n(88);
    n(66)("getPrototypeOf", function () {
      return function (e) {
        return i(o(e));
      };
    });
  }, function (e, t, n) {
    e.exports = {
      "default": n(158),
      __esModule: !0
    };
  }, function (e, t, n) {
    n(159), e.exports = n(7).Object.setPrototypeOf;
  }, function (e, t, n) {
    var o = n(16);
    o(o.S, "Object", {
      setPrototypeOf: n(160).set
    });
  }, function (e, t, n) {
    var o = n(23),
        i = n(19),
        r = function r(e, t) {
      if (i(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
    };

    e.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, o) {
        try {
          (o = n(35)(Function.call, n(65).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array);
        } catch (i) {
          t = !0;
        }

        return function (e, n) {
          return r(e, n), t ? e.__proto__ = n : o(e, n), e;
        };
      }({}, !1) : undefined),
      check: r
    };
  }, function (e, t, n) {
    n(162);
    var o = n(7).Object;

    e.exports = function (e, t) {
      return o.create(e, t);
    };
  }, function (e, t, n) {
    var o = n(16);
    o(o.S, "Object", {
      create: n(61)
    });
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.storage = undefined;
    var o = r(n(0)),
        i = r(n(1));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var s = new (function () {
      function e() {
        (0, o["default"])(this, e);
      }

      return (0, i["default"])(e, [{
        key: "getCookie",
        value: function value(e) {
          var t,
              n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
          return (t = document.cookie.match(n)) ? unescape(t[2]) : null;
        }
      }, {
        key: "getData",
        value: function value(e) {
          return window.localStorage ? window.localStorage.getItem(e) : this.getCookie(e);
        }
      }, {
        key: "setCookie",
        value: function value(e, t) {
          var n = new Date();
          n.setTime(n.getTime() + 2592e6), document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString();
        }
      }, {
        key: "setData",
        value: function value(e, t) {
          window.localStorage ? window.localStorage.setItem(e, t) : this.setCookie(e, t);
        }
      }]), e;
    }())();
    t.storage = s;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = {
      maxNumber: 5
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(0)),
        i = l(n(1)),
        r = n(2),
        s = n(11),
        a = l(n(10)),
        u = l(n(8)),
        c = n(15);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var f = function () {
      function e(t) {
        (0, o["default"])(this, e), this.pubSub = null, this.pubSub = t;
      }

      return (0, i["default"])(e, [{
        key: "byChannel",
        value: function value(e) {
          var t = {
            channels: [],
            includeUsers: !1,
            distinct: !1
          };
          if (r.calibrator.isFunction(e.onSuccess) || (e.onSuccess = r.noop), r.calibrator.isFunction(e.onFailed) || (e.onFailed = r.noop), Array.isArray(e.channels)) for (var n = 0; n < e.channels.length; n++) {
            var o = e.channels[n];
            r.calibrator.isNumber(o) && (o = o.toString()), t.channels.push(o);
          }

          if (0 != t.channels.length) {
            1 == e.includeUsers && (t.includeUsers = !0), 1 == e.distinct && (t.distinct = !0);
            var i = new a["default"]({
              name: s.EmitType.hereNow,
              permission: u["default"].READ,
              params: t,
              singleTimeout: c.SocketTimeout.commonQuerySingle,
              totalTimeout: c.SocketTimeout.commonQueryTotal,
              success: function success(t) {
                var n = t.content,
                    o = n.channels;

                for (var i in o) {
                  if (o.hasOwnProperty(i)) {
                    var r = o[i];
                    r.users = r.users.map(function (e) {
                      return e.data = JSON.parse(e.data), e;
                    });
                  }
                }

                e.onSuccess({
                  code: t.resultCode || t.code || 200,
                  content: n
                });
              },
              fail: function fail(t) {
                e.onFailed({
                  code: t.resultCode || t.code || 200,
                  content: t.content
                });
              }
            });
            this.pubSub.goEasySocket.emit(i);
          } else e.onFailed({
            code: 408,
            content: "channels is required."
          });
        }
      }, {
        key: "byUserId",
        value: function value(e) {
          var t = {
            userIds: [],
            distinct: !0
          };
          if (r.calibrator.isFunction(e.onSuccess) || (e.onSuccess = r.noop), r.calibrator.isFunction(e.onFailed) || (e.onFailed = r.noop), r.calibrator.isDef(e.userIds) && (t.userIds = e.userIds), 0 == e.distinct && (t.distinct = !1), 0 === t.userIds.length) e.onFailed({
            code: 400,
            content: "userIds is required"
          });else if (t.userIds.length > 500) e.onFailed({
            code: 400,
            content: "userIds is over max length 500"
          });else {
            var n = new a["default"]({
              name: s.EmitType.hereNowByUserIds,
              permission: u["default"].READ,
              params: t,
              singleTimeout: c.SocketTimeout.commonQuerySingle,
              totalTimeout: c.SocketTimeout.commonQueryTotal,
              success: function success(t) {
                var n = t.content;
                n = n.map(function (e) {
                  var t = {};
                  return t.id = e.userId, t.data = e.userData ? JSON.parse(e.userData) : {}, t;
                }), e.onSuccess({
                  code: t.resultCode || t.code || 200,
                  content: n
                });
              },
              fail: function fail(t) {
                e.onFailed({
                  code: t.resultCode || t.code || 200,
                  content: t.content
                });
              }
            });
            this.pubSub.goEasySocket.emit(n);
          }
        }
      }]), e;
    }();

    t["default"] = f;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(0)),
        i = l(n(1)),
        r = n(2),
        s = l(n(10)),
        a = n(11),
        u = l(n(8)),
        c = n(15);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var f = function () {
      function e(t) {
        (0, o["default"])(this, e), this.pubSub = null, this.pubSub = t;
      }

      return (0, i["default"])(e, [{
        key: "publish",
        value: function value(e) {
          if (r.calibrator.isFunction(e.onFailed) || (e.onFailed = r.noop), r.calibrator.isFunction(e.onSuccess) || (e.onSuccess = r.noop), r.calibrator.isEmpty(e.channel)) throw {
            code: 400,
            content: "channel is required."
          };
          if (r.calibrator.isNumber(e.channel) && (e.channel = e.channel.toString()), r.calibrator.isEmpty(e.message)) throw {
            code: 400,
            content: "message is required."
          };
          if (r.calibrator.isNumber(e.message) && (e.message = e.message.toString()), !r.calibrator.isString(e.message)) throw {
            code: 400,
            content: "TypeError: message requires string."
          };

          if (r.calibrator.isObject(e.notification)) {
            if (r.calibrator.isEmpty(e.notification.title)) throw {
              code: 400,
              content: "notification.title is required."
            };
            if (!r.calibrator.isString(e.notification.title)) throw {
              code: 400,
              content: "TypeError: notification.title requires string."
            };
            if (e.notification.title.length > 32) throw {
              code: 400,
              content: "TypeError: notification.title over max length 32."
            };
            if (r.calibrator.isEmpty(e.notification.body)) throw {
              code: 400,
              content: "notification.body is required."
            };
            if (!r.calibrator.isString(e.notification.body)) throw {
              code: 400,
              content: "TypeError: notification.body must be string."
            };
            if (e.notification.body.length > 50) throw {
              code: 400,
              content: "notification.body over max length 50."
            };
          } else if (r.calibrator.isPrimitive(e.notification)) throw {
            code: 400,
            content: "TypeError: notification requires an object."
          };

          var t = {
            channel: e.channel,
            content: e.message,
            nt: e.notification,
            guid: r.UUID.get()
          },
              n = new s["default"]({
            name: a.EmitType.publish,
            params: t,
            singleTimeout: c.SocketTimeout.commonRequestSingle,
            totalTimeout: c.SocketTimeout.commonRequestTotal,
            permission: u["default"].WRITE,
            success: function success(t) {
              e.onSuccess({
                code: 200,
                content: "ok"
              });
            },
            fail: function fail(t) {
              e.onFailed({
                code: t.resultCode,
                content: t.content
              });
            }
          });
          this.pubSub.goEasySocket.emit(n);
        }
      }]), e;
    }();

    t["default"] = f;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = p(n(0)),
        i = p(n(1)),
        r = n(2),
        s = p(n(10)),
        a = n(11),
        u = p(n(8)),
        c = p(n(168)),
        l = p(n(41)),
        f = n(15),
        d = p(n(28));

    function p(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var h = function () {
      function e(t) {
        (0, o["default"])(this, e), this.subscriptions = [], this.pubSub = null, this.pubSub = t;
      }

      return (0, i["default"])(e, [{
        key: "initialGoEasySocket",
        value: function value() {
          var e = this.pubSub.goEasySocket;
          e.addMessageObserver(l["default"].message, this.onNewMessage.bind(this)), e.addExpiredReconnectedObserver(this.onExpiredReconnected.bind(this)), e.addConnectedObserver(this.onReconnected.bind(this));
        }
      }, {
        key: "resubscribe",
        value: function value() {
          var e = this.subscriptions.slice(0);
          this.subscriptions = [];

          for (var t = 0; t < e.length; t++) {
            0 != e[t].channels.length && this.subscribe(e[t]);
          }
        }
      }, {
        key: "onExpiredReconnected",
        value: function value() {
          this.resubscribe();
        }
      }, {
        key: "onReconnected",
        value: function value() {
          this.pubSub.neverConnect || this.pubSub.goEasySocket.status == d["default"].RECONNECTED || this.resubscribe();
        }
      }, {
        key: "onNewMessage",
        value: function value(e) {
          if (!(e.n.indexOf("_presence") > -1)) {
            e.a && this.pubSub.goEasySocket.sendAck("ack", {
              publishGuid: e.i
            });
            var t = {
              time: e.t,
              channel: e.n,
              content: e.c
            };
            this.findSubscriptionByChannel(t.channel).onMessage(t);
          }
        }
      }, {
        key: "formatOptions",
        value: function value(e) {
          var t = !r.calibrator.isEmpty(e.channel),
              n = !r.calibrator.isEmpty(e.channels);
          if (this.formatCallback(e), r.calibrator.isFunction(e.onMessage) || (e.onMessage = r.noop), !t && !n) return e.onFailed({
            code: 400,
            content: "channel is required"
          }), !1;

          if (!t || !n) {
            if (t && (r.calibrator.isNumber(e.channel) && (e.channel = e.channel.toString()), e.channels = [e.channel]), n) {
              if (!Array.isArray(e.channels) || 0 == e.channels.length) return void e.onFailed({
                code: 400,
                content: "channels must be an array"
              });
              if (e.channels.length > 500) return e.onFailed({
                code: 400,
                content: "channels over max length:500"
              }), !1;

              for (var o = 0, i = e.channels.length; o < i; o++) {
                if (r.calibrator.isNumber(e.channels[o]) && (e.channels[o] = e.channels[o].toString()), r.calibrator.isEmpty(e.channels[o])) return e.onFailed({
                  code: 400,
                  content: "Channels array contains empty channel"
                }), !1;
              }
            }

            return !0;
          }

          e.onFailed({
            code: 400,
            content: "subscribe to either channel or channels, not both"
          });
        }
      }, {
        key: "formatCallback",
        value: function value(e) {
          r.calibrator.isFunction(e.onSuccess) || (e.onSuccess = r.noop), r.calibrator.isFunction(e.onFailed) || (e.onFailed = r.noop);
        }
      }, {
        key: "subscribe",
        value: function value(e) {
          var t = this;

          if (this.formatOptions(e)) {
            var n = new s["default"]({
              name: a.EmitType.subscribe,
              permission: u["default"].READ,
              singleTimeout: f.SocketTimeout.commonInfiniteSingle,
              totalTimeout: f.SocketTimeout.commonInfiniteTotal,
              params: {
                channels: e.channels
              },
              success: function success() {
                var n = new c["default"]({
                  channels: e.channels,
                  onSuccess: e.onSuccess,
                  onFailed: e.onFailed,
                  onMessage: e.onMessage
                });
                t.subscriptions.push(n), e.onSuccess({
                  code: 200,
                  content: "ok"
                });
              },
              fail: function fail(t) {
                e.onFailed({
                  code: t.resultCode,
                  content: t.content
                });
              }
            });
            this.pubSub.goEasySocket.emit(n);
          }
        }
      }, {
        key: "unsubscribe",
        value: function value(e) {
          var t = this;
          if (this.formatCallback(e), r.calibrator.isDef(e.channel)) {
            if (r.calibrator.isNumber(e.channel) && (e.channel = e.channel.toString()), this.findSubscriptionByChannel(e.channel)) {
              var n = new s["default"]({
                name: a.EmitType.unsubscribe,
                params: {
                  channel: e.channel
                },
                permission: u["default"].READ,
                singleTimeout: f.SocketTimeout.commonRequestSingle,
                totalTimeout: f.SocketTimeout.commonRequestTotal,
                success: function success() {
                  e.onSuccess({
                    code: 200,
                    content: "ok"
                  }), t.removeChannel(e.channel);
                },
                fail: function fail(t) {
                  e.onFailed({
                    code: t.resultCode,
                    content: t.content
                  });
                }
              });
              this.pubSub.goEasySocket.emit(n);
            } else e.onFailed({
              code: 400,
              content: "channel[" + e.channel + "] is not subscribed"
            });
          } else e.onFailed({
            code: 400,
            content: "channel is required"
          });
        }
      }, {
        key: "removeChannel",
        value: function value(e) {
          for (var t = 0; t < this.subscriptions.length; t++) {
            for (var n = this.subscriptions[t].channels, o = 0; o < n.length; o++) {
              if (n[o] == e) {
                this.subscriptions[t].channels.splice(o, 1);
                break;
              }
            }
          }
        }
      }, {
        key: "findSubscriptionByChannel",
        value: function value(e) {
          for (var t = !1, n = null, o = this.subscriptions.length - 1; o >= 0; o--) {
            for (var i = this.subscriptions[o].channels, r = 0; r < i.length; r++) {
              if (i[r] == e) {
                t = !0, n = this.subscriptions[o];
                break;
              }
            }

            if (t) break;
          }

          return n;
        }
      }]), e;
    }();

    t["default"] = h;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(n(0)),
        i = r(n(1));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var s = function () {
      function e(t) {
        (0, o["default"])(this, e), this.channels = [], this.onSuccess = null, this.onFailed = null, this.onMessage = null, this.channels = t.channels, this.onSuccess = t.onSuccess, this.onFailed = t.onFailed, this.onMessage = t.onMessage;
      }

      return (0, i["default"])(e, [{
        key: "empty",
        value: function value() {}
      }]), e;
    }();

    t["default"] = s;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = p(n(0)),
        i = p(n(1)),
        r = n(2),
        s = p(n(10)),
        a = n(11),
        u = p(n(8)),
        c = n(15),
        l = p(n(41)),
        f = p(n(170)),
        d = p(n(28));

    function p(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var h = function () {
      function e(t) {
        (0, o["default"])(this, e), this.presenters = [], this.pubSub = null, this.pubSub = t;
      }

      return (0, i["default"])(e, [{
        key: "initialGoEasySocket",
        value: function value() {
          var e = this.pubSub.goEasySocket;
          e.addMessageObserver(l["default"].message, this.onNewMessage.bind(this)), e.addExpiredReconnectedObserver(this.onExpiredReconnected.bind(this)), e.addConnectedObserver(this.onReconnected.bind(this));
        }
      }, {
        key: "resubscribe",
        value: function value() {
          var e = this.presenters.slice(0);
          this.presenters = [];

          for (var t = 0; t < e.length; t++) {
            for (var n = 0; n < e[t].channels.length; n++) {
              var o = e[t].channels[n].split("_presence");
              e[t].channels[n] = o[0];
            }

            0 != e[t].channels.length && this.subscribePresence(e[t]);
          }
        }
      }, {
        key: "onExpiredReconnected",
        value: function value() {
          this.resubscribe();
        }
      }, {
        key: "onReconnected",
        value: function value() {
          this.pubSub.neverConnect || this.pubSub.goEasySocket.status == d["default"].RECONNECTED || this.resubscribe();
        }
      }, {
        key: "onNewMessage",
        value: function value(e) {
          if (-1 != e.n.indexOf("_presence")) {
            var t = this.findPresenceByChannel(e.n);

            if (t) {
              var n = JSON.parse(e.c);
              n.events = n.events.map(function (e) {
                var t = e.userData ? JSON.parse(e.userData) : {};
                return {
                  time: e.time,
                  action: e.action,
                  id: e.userId,
                  data: t
                };
              }), t.onPresence(n);
            }
          }
        }
      }, {
        key: "formatOptions",
        value: function value(e) {
          var t = !r.calibrator.isEmpty(e.channel),
              n = !r.calibrator.isEmpty(e.channels);
          if (this.formatCallback(e), r.calibrator.isFunction(e.onPresence) || (e.onPresence = r.noop), !t && !n) return e.onFailed({
            code: 400,
            content: "channel is required"
          }), !1;

          if (!t || !n) {
            if (t && (r.calibrator.isNumber(e.channel) && (e.channel = e.channel.toString()), e.channels = [e.channel]), n) {
              if (!Array.isArray(e.channels) || 0 == e.channels.length) return void e.onFailed({
                code: 400,
                content: "channels must be an array"
              });
              if (e.channels.length > 500) return e.onFailed({
                code: 400,
                content: "channels over max length:500"
              }), !1;

              for (var o = 0, i = e.channels.length; o < i; o++) {
                if (r.calibrator.isNumber(e.channels[o]) && (e.channels[o] = e.channels[o].toString()), r.calibrator.isEmpty(e.channels[o])) return e.onFailed({
                  code: 400,
                  content: "Channels array contains empty channel"
                }), !1;
              }
            }

            return !0;
          }

          e.onFailed({
            code: 400,
            content: "subscribe to either channel or channels, not both"
          });
        }
      }, {
        key: "formatCallback",
        value: function value(e) {
          r.calibrator.isFunction(e.onSuccess) || (e.onSuccess = r.noop), r.calibrator.isFunction(e.onFailed) || (e.onFailed = r.noop);
        }
      }, {
        key: "subscribePresence",
        value: function value(e) {
          var t = this;

          if (this.formatOptions(e)) {
            Array.isArray(e.channels) && (e.channels = e.channels.map(function (e) {
              return e += "_presence";
            }));
            var n = new s["default"]({
              name: a.EmitType.subscribe,
              permission: u["default"].READ,
              singleTimeout: c.SocketTimeout.commonInfiniteSingle,
              totalTimeout: c.SocketTimeout.commonInfiniteTotal,
              params: {
                channels: e.channels
              },
              success: function success() {
                var n = new f["default"]({
                  channels: e.channels,
                  onSuccess: e.onSuccess,
                  onFailed: e.onFailed,
                  onPresence: e.onPresence
                });
                t.presenters.push(n), e.onSuccess({
                  code: 200,
                  content: "ok"
                });
              },
              fail: function fail(t) {
                e.onFailed({
                  code: t.resultCode,
                  content: t.content
                });
              }
            });
            this.pubSub.goEasySocket.emit(n);
          }
        }
      }, {
        key: "unsubscribePresence",
        value: function value(e) {
          var t = this;
          if (this.formatCallback(e), r.calibrator.isDef(e.channel)) {
            if (e.channel += "_presence", this.findPresenceByChannel(e.channel)) {
              var n = new s["default"]({
                name: a.EmitType.unsubscribe,
                params: {
                  channel: e.channel
                },
                permission: u["default"].READ,
                singleTimeout: c.SocketTimeout.commonRequestSingle,
                totalTimeout: c.SocketTimeout.commonRequestTotal,
                success: function success() {
                  e.onSuccess({
                    code: 200,
                    content: "ok"
                  }), t.removeChannel(e.channel);
                },
                fail: function fail(t) {
                  e.onFailed({
                    code: t.resultCode,
                    content: t.content
                  });
                }
              });
              this.pubSub.goEasySocket.emit(n);
            } else e.onFailed({
              code: 400,
              content: "channel[" + e.channel + "] is not subscribed"
            });
          } else e.onFailed({
            code: 400,
            content: "channel is required"
          });
        }
      }, {
        key: "removeChannel",
        value: function value(e) {
          for (var t = 0; t < this.presenters.length; t++) {
            for (var n = this.presenters[t].channels, o = 0; o < n.length; o++) {
              if (n[o] == e) {
                this.presenters[t].channels.splice(o, 1);
                break;
              }
            }
          }
        }
      }, {
        key: "findPresenceByChannel",
        value: function value(e) {
          for (var t = !1, n = null, o = this.presenters.length - 1; o >= 0; o--) {
            for (var i = this.presenters[o].channels, r = 0; r < i.length; r++) {
              if (i[r] == e) {
                t = !0, n = this.presenters[o];
                break;
              }
            }

            if (t) break;
          }

          return n;
        }
      }]), e;
    }();

    t["default"] = h;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(n(0)),
        i = r(n(1));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var s = function () {
      function e(t) {
        (0, o["default"])(this, e), this.channels = [], this.onSuccess = null, this.onFailed = null, this.onPresence = null, this.channels = t.channels, this.onSuccess = t.onSuccess, this.onFailed = t.onFailed, this.onPresence = t.onPresence;
      }

      return (0, i["default"])(e, [{
        key: "empty",
        value: function value() {}
      }]), e;
    }();

    t["default"] = s;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(94)),
        i = c(n(0)),
        r = c(n(1)),
        s = c(n(42)),
        a = n(2),
        u = n(67);

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = null,
        f = function () {
      function e(t) {
        (0, i["default"])(this, e), this.options = null, this.options = t, l = new s["default"]();
      }

      return (0, r["default"])(e, [{
        key: "initialBeforeConnect",
        value: function value(e) {
          l.initialBeforeConnect(e);
        }
      }, {
        key: "initialAfterConnect",
        value: function value() {
          l.initialAfterConnect();
        }
      }, {
        key: "initialGoEasySocket",
        value: function value(e) {
          l.initialGoEasySocket(e);
        }
      }, {
        key: "validateOptions",
        value: function value() {
          var e = this.options;
          if (!e.modules || !e.modules.includes(u.ModuleType.IM)) throw Error("Invalid options: module '" + u.ModuleType.IM + "' is not enabled");
        }
      }, {
        key: "validateMessageToData",
        value: function value(e) {
          if (!a.calibrator.isObject(e.to)) throw {
            code: 400,
            content: "TypeError: to requires an object."
          };
          if (!a.calibrator.isObject(e.to.data)) throw {
            code: 400,
            content: "TypeError: to.data requires an object."
          };
        }
      }, {
        key: "on",
        value: function value(e, t) {
          this.validateOptions(), l.on(e, t);
        }
      }, {
        key: "createTextMessage",
        value: function value(e) {
          if (this.validateOptions(), this.validateMessageToData(e), !a.calibrator.isString(e.text)) throw {
            code: 400,
            content: "TypeError: text requires string."
          };
          return l.createTextMessage(e);
        }
      }, {
        key: "createImageMessage",
        value: function value(e) {
          return this.validateOptions(), this.validateMessageToData(e), l.createImageMessage(e);
        }
      }, {
        key: "createFileMessage",
        value: function value(e) {
          return this.validateOptions(), this.validateMessageToData(e), l.createFileMessage(e);
        }
      }, {
        key: "createAudioMessage",
        value: function value(e) {
          return this.validateOptions(), this.validateMessageToData(e), l.createAudioMessage(e);
        }
      }, {
        key: "createVideoMessage",
        value: function value(e) {
          return this.validateOptions(), this.validateMessageToData(e), l.createVideoMessage(e);
        }
      }, {
        key: "createCustomMessage",
        value: function value(e) {
          if (this.validateOptions(), this.validateMessageToData(e), !a.calibrator.isObject(e.payload)) throw {
            code: 400,
            content: "TypeError: payload requires an object."
          };
          return l.createCustomMessage(e);
        }
      }, {
        key: "latestConversations",
        value: function value(e) {
          this.validateOptions(), l.latestConversations().then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "removePrivateConversation",
        value: function value(e) {
          this.validateOptions(), l.removePrivateConversation(e.userId).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess();
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "removeGroupConversation",
        value: function value(e) {
          this.validateOptions(), l.removeGroupConversation(e.groupId).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess();
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "history",
        value: function value(e) {
          this.validateOptions();
          var t = (0, o["default"])(e, {
            friendId: e.userId
          });
          l.history(t).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "upload",
        value: function value(e) {
          this.validateOptions(), l.upload(e.file, e.name, e.onProgress).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "sendMessage",
        value: function value(e) {
          this.validateOptions(), l.sendMessage(e.message).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "markGroupMessageAsRead",
        value: function value(e) {
          this.validateOptions(), l.groupMarkAsRead(e.groupId, e.timestamp).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "markPrivateMessageAsRead",
        value: function value(e) {
          this.validateOptions(), l.privateMarkAsRead(e.userId, e.timestamp).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess();
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "topPrivateConversation",
        value: function value(e) {
          this.validateOptions(), l.topPrivateConversation(e.userId, e.top).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess();
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "topGroupConversation",
        value: function value(e) {
          this.validateOptions(), l.topGroupConversation(e.groupId, e.top).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess();
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "subscribeUserPresence",
        value: function value(e) {
          this.validateOptions(), l.subscribeUserPresence(e.userIds).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "unsubscribeUserPresence",
        value: function value(e) {
          this.validateOptions(), l.unsubscribeUserPresence(e.userId).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "hereNow",
        value: function value(e) {
          this.validateOptions(), l.hereNow(e).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "subscribeGroup",
        value: function value(e) {
          this.validateOptions(), l.subscribeGroup(e.groupIds).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "unsubscribeGroup",
        value: function value(e) {
          this.validateOptions(), l.unsubscribeGroup(e.groupId).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "subscribeGroupPresence",
        value: function value(e) {
          this.validateOptions(), l.subscribeGroupPresence(e.groupIds).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "unsubscribeGroupPresence",
        value: function value(e) {
          this.validateOptions(), l.unsubscribeGroupPresence(e.groupId).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "groupHereNow",
        value: function value(e) {
          this.validateOptions(), l.groupHereNow(e.groupId).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }, {
        key: "groupOnlineCount",
        value: function value(e) {
          this.validateOptions(), l.groupOnlineCount(e.groupId).then(function (t) {
            a.calibrator.isFunction(e.onSuccess) && e.onSuccess(t);
          })["catch"](function (t) {
            a.calibrator.isFunction(e.onFailed) && e.onFailed(t);
          });
        }
      }]), e;
    }();

    t["default"] = f;
  }, function (e, t, n) {
    n(173), e.exports = n(7).Object.assign;
  }, function (e, t, n) {
    var o = n(16);
    o(o.S + o.F, "Object", {
      assign: n(174)
    });
  }, function (e, t, n) {
    "use strict";

    var o = n(18),
        i = n(31),
        r = n(64),
        s = n(38),
        a = n(40),
        u = n(81),
        c = Object.assign;
    e.exports = !c || n(30)(function () {
      var e = {},
          t = {},
          n = Symbol(),
          o = "abcdefghijklmnopqrst";
      return e[n] = 7, o.split("").forEach(function (e) {
        t[e] = e;
      }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != o;
    }) ? function (e, t) {
      for (var n = a(e), c = arguments.length, l = 1, f = r.f, d = s.f; c > l;) {
        for (var p, h = u(arguments[l++]), y = f ? i(h).concat(f(h)) : i(h), v = y.length, m = 0; v > m;) {
          p = y[m++], o && !d.call(h, p) || (n[p] = h[p]);
        }
      }

      return n;
    } : c;
  }, function (e, t, n) {
    n(91), n(84), n(89), n(176), n(188), n(189), e.exports = n(7).Promise;
  }, function (e, t, n) {
    "use strict";

    var o,
        i,
        r,
        s,
        a = n(37),
        u = n(13),
        c = n(35),
        l = n(95),
        f = n(16),
        d = n(23),
        p = n(44),
        h = n(177),
        y = n(178),
        v = n(96),
        m = n(97).set,
        g = n(183)(),
        b = n(68),
        _ = n(98),
        k = n(184),
        C = n(99),
        w = u.TypeError,
        E = u.process,
        S = E && E.versions,
        O = S && S.v8 || "",
        _T = u.Promise,
        F = "process" == l(E),
        M = function M() {},
        P = i = b.f,
        I = !!function () {
      try {
        var e = _T.resolve(1),
            t = (e.constructor = {})[n(14)("species")] = function (e) {
          e(M, M);
        };

        return (F || "function" == typeof PromiseRejectionEvent) && e.then(M) instanceof t && 0 !== O.indexOf("6.6") && -1 === k.indexOf("Chrome/66");
      } catch (o) {}
    }(),
        N = function N(e) {
      var t;
      return !(!d(e) || "function" != typeof (t = e.then)) && t;
    },
        x = function x(e, t) {
      if (!e._n) {
        e._n = !0;
        var n = e._c;
        g(function () {
          for (var o = e._v, i = 1 == e._s, r = 0, s = function s(t) {
            var n,
                r,
                s,
                a = i ? t.ok : t.fail,
                u = t.resolve,
                c = t.reject,
                l = t.domain;

            try {
              a ? (i || (2 == e._h && j(e), e._h = 1), !0 === a ? n = o : (l && l.enter(), n = a(o), l && (l.exit(), s = !0)), n === t.promise ? c(w("Promise-chain cycle")) : (r = N(n)) ? r.call(n, u, c) : u(n)) : c(o);
            } catch (f) {
              l && !s && l.exit(), c(f);
            }
          }; n.length > r;) {
            s(n[r++]);
          }

          e._c = [], e._n = !1, t && !e._h && R(e);
        });
      }
    },
        R = function R(e) {
      m.call(u, function () {
        var t,
            n,
            o,
            i = e._v,
            r = A(e);
        if (r && (t = _(function () {
          F ? E.emit("unhandledRejection", i, e) : (n = u.onunhandledrejection) ? n({
            promise: e,
            reason: i
          }) : (o = u.console) && o.error && o.error("Unhandled promise rejection", i);
        }), e._h = F || A(e) ? 2 : 1), e._a = undefined, r && t.e) throw t.v;
      });
    },
        A = function A(e) {
      return 1 !== e._h && 0 === (e._a || e._c).length;
    },
        j = function j(e) {
      m.call(u, function () {
        var t;
        F ? E.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
          promise: e,
          reason: e._v
        });
      });
    },
        D = function D(e) {
      var t = this;
      t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), x(t, !0));
    },
        U = function U(e) {
      var t,
          n = this;

      if (!n._d) {
        n._d = !0, n = n._w || n;

        try {
          if (n === e) throw w("Promise can't be resolved itself");
          (t = N(e)) ? g(function () {
            var o = {
              _w: n,
              _d: !1
            };

            try {
              t.call(e, c(U, o, 1), c(D, o, 1));
            } catch (i) {
              D.call(o, i);
            }
          }) : (n._v = e, n._s = 1, x(n, !1));
        } catch (o) {
          D.call({
            _w: n,
            _d: !1
          }, o);
        }
      }
    };

    I || (_T = function T(e) {
      h(this, _T, "Promise", "_h"), p(e), o.call(this);

      try {
        e(c(U, this, 1), c(D, this, 1));
      } catch (t) {
        D.call(this, t);
      }
    }, (o = function o(e) {
      this._c = [], this._a = undefined, this._s = 0, this._d = !1, this._v = undefined, this._h = 0, this._n = !1;
    }).prototype = n(185)(_T.prototype, {
      then: function then(e, t) {
        var n = P(v(this, _T));
        return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = F ? E.domain : undefined, this._c.push(n), this._a && this._a.push(n), this._s && x(this, !1), n.promise;
      },
      "catch": function _catch(e) {
        return this.then(undefined, e);
      }
    }), r = function r() {
      var e = new o();
      this.promise = e, this.resolve = c(U, e, 1), this.reject = c(D, e, 1);
    }, b.f = P = function P(e) {
      return e === _T || e === s ? new r(e) : i(e);
    }), f(f.G + f.W + f.F * !I, {
      Promise: _T
    }), n(47)(_T, "Promise"), n(186)("Promise"), s = n(7).Promise, f(f.S + f.F * !I, "Promise", {
      reject: function reject(e) {
        var t = P(this);
        return (0, t.reject)(e), t.promise;
      }
    }), f(f.S + f.F * (a || !I), "Promise", {
      resolve: function resolve(e) {
        return C(a && this === s ? _T : this, e);
      }
    }), f(f.S + f.F * !(I && n(187)(function (e) {
      _T.all(e)["catch"](M);
    })), "Promise", {
      all: function all(e) {
        var t = this,
            n = P(t),
            o = n.resolve,
            i = n.reject,
            r = _(function () {
          var n = [],
              r = 0,
              s = 1;
          y(e, !1, function (e) {
            var a = r++,
                u = !1;
            n.push(undefined), s++, t.resolve(e).then(function (e) {
              u || (u = !0, n[a] = e, --s || o(n));
            }, i);
          }), --s || o(n);
        });

        return r.e && i(r.v), n.promise;
      },
      race: function race(e) {
        var t = this,
            n = P(t),
            o = n.reject,
            i = _(function () {
          y(e, !1, function (e) {
            t.resolve(e).then(n.resolve, o);
          });
        });

        return i.e && o(i.v), n.promise;
      }
    });
  }, function (e, t) {
    e.exports = function (e, t, n, o) {
      if (!(e instanceof t) || o !== undefined && o in e) throw TypeError(n + ": incorrect invocation!");
      return e;
    };
  }, function (e, t, n) {
    var o = n(35),
        i = n(179),
        r = n(180),
        s = n(19),
        a = n(82),
        u = n(181),
        c = {},
        l = {};
    (t = e.exports = function (e, t, n, f, d) {
      var p,
          h,
          y,
          v,
          m = d ? function () {
        return e;
      } : u(e),
          g = o(n, f, t ? 2 : 1),
          b = 0;
      if ("function" != typeof m) throw TypeError(e + " is not iterable!");

      if (r(m)) {
        for (p = a(e.length); p > b; b++) {
          if ((v = t ? g(s(h = e[b])[0], h[1]) : g(e[b])) === c || v === l) return v;
        }
      } else for (y = m.call(e); !(h = y.next()).done;) {
        if ((v = i(y, g, h.value, t)) === c || v === l) return v;
      }
    }).BREAK = c, t.RETURN = l;
  }, function (e, t, n) {
    var o = n(19);

    e.exports = function (e, t, n, i) {
      try {
        return i ? t(o(n)[0], n[1]) : t(n);
      } catch (s) {
        var r = e["return"];
        throw r !== undefined && o(r.call(e)), s;
      }
    };
  }, function (e, t, n) {
    var o = n(39),
        i = n(14)("iterator"),
        r = Array.prototype;

    e.exports = function (e) {
      return e !== undefined && (o.Array === e || r[i] === e);
    };
  }, function (e, t, n) {
    var o = n(95),
        i = n(14)("iterator"),
        r = n(39);

    e.exports = n(7).getIteratorMethod = function (e) {
      if (e != undefined) return e[i] || e["@@iterator"] || r[o(e)];
    };
  }, function (e, t) {
    e.exports = function (e, t, n) {
      var o = n === undefined;

      switch (t.length) {
        case 0:
          return o ? e() : e.call(n);

        case 1:
          return o ? e(t[0]) : e.call(n, t[0]);

        case 2:
          return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

        case 3:
          return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

        case 4:
          return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
      }

      return e.apply(n, t);
    };
  }, function (e, t, n) {
    var o = n(13),
        i = n(97).set,
        r = o.MutationObserver || o.WebKitMutationObserver,
        s = o.process,
        a = o.Promise,
        u = "process" == n(36)(s);

    e.exports = function () {
      var e,
          t,
          n,
          c = function c() {
        var o, i;

        for (u && (o = s.domain) && o.exit(); e;) {
          i = e.fn, e = e.next;

          try {
            i();
          } catch (r) {
            throw e ? n() : t = undefined, r;
          }
        }

        t = undefined, o && o.enter();
      };

      if (u) n = function n() {
        s.nextTick(c);
      };else if (!r || o.navigator && o.navigator.standalone) {
        if (a && a.resolve) {
          var l = a.resolve(undefined);

          n = function n() {
            l.then(c);
          };
        } else n = function n() {
          i.call(o, c);
        };
      } else {
        var f = !0,
            d = document.createTextNode("");
        new r(c).observe(d, {
          characterData: !0
        }), n = function n() {
          d.data = f = !f;
        };
      }
      return function (o) {
        var i = {
          fn: o,
          next: undefined
        };
        t && (t.next = i), e || (e = i, n()), t = i;
      };
    };
  }, function (e, t, n) {
    var o = n(13).navigator;
    e.exports = o && o.userAgent || "";
  }, function (e, t, n) {
    var o = n(26);

    e.exports = function (e, t, n) {
      for (var i in t) {
        n && e[i] ? e[i] = t[i] : o(e, i, t[i]);
      }

      return e;
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(13),
        i = n(7),
        r = n(22),
        s = n(18),
        a = n(14)("species");

    e.exports = function (e) {
      var t = "function" == typeof i[e] ? i[e] : o[e];
      s && t && !t[a] && r.f(t, a, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  }, function (e, t, n) {
    var o = n(14)("iterator"),
        i = !1;

    try {
      var r = [7][o]();
      r["return"] = function () {
        i = !0;
      }, Array.from(r, function () {
        throw 2;
      });
    } catch (s) {}

    e.exports = function (e, t) {
      if (!t && !i) return !1;
      var n = !1;

      try {
        var r = [7],
            a = r[o]();
        a.next = function () {
          return {
            done: n = !0
          };
        }, r[o] = function () {
          return a;
        }, e(r);
      } catch (s) {}

      return n;
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(16),
        i = n(7),
        r = n(13),
        s = n(96),
        a = n(99);
    o(o.P + o.R, "Promise", {
      "finally": function _finally(e) {
        var t = s(this, i.Promise || r.Promise),
            n = "function" == typeof e;
        return this.then(n ? function (n) {
          return a(t, e()).then(function () {
            return n;
          });
        } : e, n ? function (n) {
          return a(t, e()).then(function () {
            throw n;
          });
        } : e);
      }
    });
  }, function (e, t, n) {
    "use strict";

    var o = n(16),
        i = n(68),
        r = n(98);
    o(o.S, "Promise", {
      "try": function _try(e) {
        var t = i.f(this),
            n = r(e);
        return (n.e ? t.reject : t.resolve)(n.v), t.promise;
      }
    });
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.eventCenter = undefined;
    var o = u(n(21)),
        i = u(n(0)),
        r = u(n(1)),
        s = n(100),
        a = n(2);

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var c = new (function () {
      function e() {
        (0, i["default"])(this, e), this.subs = null, this.subs = (0, o["default"])(null);
      }

      return (0, r["default"])(e, [{
        key: "on",
        value: function value(e, t) {
          if (!a.calibrator.isString(e)) throw Error("eventType require a string.");
          if (!a.calibrator.isDef(s.ImEventType[e])) throw Error("event not found.");
          if (!a.calibrator.isFunction(t)) throw Error("event require a callback.");
          this.subs[e] = t;
        }
      }, {
        key: "notify",
        value: function value(e, t) {
          var n = this.subs[e];
          n && n(t);
        }
      }]), e;
    }())();
    t.eventCenter = c;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Conversations = undefined;
    var o = g(n(6)),
        i = g(n(94)),
        r = g(n(0)),
        s = g(n(1)),
        a = n(101),
        u = g(n(42)),
        c = n(29),
        l = n(69),
        f = g(n(10)),
        d = g(n(8)),
        p = n(32),
        h = n(11),
        y = n(2),
        v = g(n(48)),
        m = g(n(49));

    function g(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    t.Conversations = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.list = [], this["synchronized"] = !1, this.im = t, t._iMReceiver.addIMMessageObserver(this.updateByInMessage.bind(this));
      }

      return (0, s["default"])(e, [{
        key: "onUpdated",
        value: function value() {
          var e = this;
          this.latestConversations().then(function () {
            e.im._event.notify(c.ImEventType.CONVERSATIONS_UPDATED, {
              unreadTotal: e.getUnreadTotal(e.list),
              conversations: e.list.slice(0)
            });
          });
        }
      }, {
        key: "latestConversations",
        value: function value() {
          return this["synchronized"] ? this.loadLocalConversations() : this.loadServerConversations();
        }
      }, {
        key: "updateByInMessage",
        value: function value(e) {
          var t = this,
              n = null;
          n = e.t == l.ConversationType.GROUP ? e.r : u["default"].userId == e.r ? e.s : e.r;
          var o = this.list.findIndex(function (t) {
            return e.t == l.ConversationType.GROUP && n == t.groupId || e.t == l.ConversationType.PRIVATE && n == t.userId;
          }),
              i = void 0;

          function r(e) {
            e.type === l.ConversationType.PRIVATE && (u["default"].userId === e.lastMessage.senderId ? e.lastMessage.senderData = u["default"].userData : e.lastMessage.senderData = e.data);
          }

          o > -1 ? (i = this.list[o], this.list.splice(o, 1), i.lc < e.ts && (i.lastMessage = v["default"].assemble(e), i.lm = e.ts), u["default"].userId != e.senderId && (i.unread += 1), r(i), this.insertOne(i), this.onUpdated()) : (i = a.Conversion.buildByInMessage(e), u["default"].userId != e.senderId && (i.unread += 1), this.insertOne(i), this.im._dataCache.loadData(n, e.t).then(function (e) {
            i.data = e, r(i), t.onUpdated();
          })["catch"](function (t) {
            e.t;
          }));
        }
      }, {
        key: "updateByOutMessage",
        value: function value(e, t, n, o) {
          var r = {};
          (0, i["default"])(r, e), delete r.file;
          var s = this.list.findIndex(function (e) {
            return e.type == l.ConversationType.GROUP && n == e.groupId || e.type == l.ConversationType.PRIVATE && n == e.userId;
          }),
              c = void 0;
          s > -1 ? (c = this.list[s], this.list.splice(s, 1), c.unread = 0, c.lc = c.lm, c.lastMessage = r, e.status === m["default"].success && (c.lc = e.timestamp, c.lm = e.timestamp)) : c = a.Conversion.buildByOutMessage(r, t, n, o), c.data = o;
          var f = this.im._dataCache;
          t === l.ConversationType.GROUP ? f.putGroupData(c.groupId, o) : (f.putUserData(c.userId, o), c.lastMessage.senderData = u["default"].userData), this.insertOne(c), this.onUpdated();
        }
      }, {
        key: "imLastConversations",
        value: function value(e, t) {
          var n = new f["default"]({
            name: h.EmitType.imLastConversations,
            params: {},
            permission: d["default"].READ,
            singleTimeout: p.SocketTimeout.commonQuerySingle,
            totalTimeout: p.SocketTimeout.commonQueryTotal,
            fail: t,
            success: e
          });

          this.im._goEasySocket.emit(n);
        }
      }, {
        key: "loadServerConversations",
        value: function value() {
          var e = this,
              t = this.im;
          return new o["default"](function (n, o) {
            e.imLastConversations(function (i) {
              if (200 == i.code) {
                for (var r = i.content, s = function s(n, o) {
                  var i = r[n],
                      s = e.list.find(function (e) {
                    return i.t == l.ConversationType.GROUP && i.g == e.groupId || i.t == l.ConversationType.PRIVATE && i.uid == e.userId;
                  });
                  y.calibrator.isDef(s) ? s.top = i.top : (s = a.Conversion.buildByConversation(t._dataCache, i), e.insertOne(s));
                }, u = 0, c = r.length; u < c; u++) {
                  s(u);
                }

                e["synchronized"] = !0, n({
                  code: 200,
                  content: {
                    unreadTotal: e.getUnreadTotal(e.list),
                    conversations: e.list.slice(0)
                  }
                });
              } else o(i);
            }, function (e) {
              o({
                code: e.resultCode,
                content: e.content
              });
            });
          });
        }
      }, {
        key: "loadLocalConversations",
        value: function value() {
          var e = this,
              t = [];
          return this.list.map(function (n) {
            if (!n.data) {
              var o = "private" == n.t ? n.userId : n.groupId,
                  i = e.im._dataCache.loadData(o, n.t);

              i.then(function (e) {
                n.data = e;
              })["catch"](function (e) {
                n.type;
              }), t.push(i);
            }
          }), 0 != t.length ? new o["default"](function (n, i) {
            o["default"].all(t).then(function () {
              n({
                code: 200,
                content: {
                  unreadTotal: e.getUnreadTotal(e.list),
                  conversations: e.list.slice(0)
                }
              });
            })["catch"](function (e) {
              i({
                code: 408,
                content: e.message
              });
            });
          }) : o["default"].resolve({
            code: 200,
            content: {
              unreadTotal: this.getUnreadTotal(this.list),
              conversations: this.list
            }
          });
        }
      }, {
        key: "privateMarkAsRead",
        value: function value(e) {
          var t = this.list.find(function (t) {
            return t.userId == e;
          }),
              n = {
            friendId: e
          };
          return this.markAsRead(n, t);
        }
      }, {
        key: "groupMarkAsRead",
        value: function value(e) {
          var t = this.list.find(function (t) {
            return t.groupId === e;
          }),
              n = {
            groupId: e
          };
          return this.markAsRead(n, t);
        }
      }, {
        key: "markAsRead",
        value: function value(e, t) {
          var n = this;
          return !t || t.unread <= 0 ? o["default"].resolve({
            code: 200,
            content: "OK"
          }) : (e.lastTimestamp = t.lm, e.lastConsumedTimestamp = t.lc, new o["default"](function (o, i) {
            var r = t.type == l.ConversationType.PRIVATE ? h.EmitType.markPrivateMessageAsRead : h.EmitType.markGroupMessageAsRead;
            n.requestEmit(r, e, function (e) {
              200 == e.code ? (n.resetConversation(t, t.lm, e.content.amount), o({
                code: 200,
                content: "OK"
              })) : i(e);
            }, function (e) {
              i(e || {
                code: e.code || 408,
                content: e.content || "Failed to query message"
              });
            });
          }));
        }
      }, {
        key: "resetConversation",
        value: function value(e, t, n) {
          t <= e.lc || (e.unread -= n, e.lc = t, this.onUpdated());
        }
      }, {
        key: "getUnreadTotal",
        value: function value(e) {
          for (var t = 0, n = 0, o = e.length; n < o; n++) {
            t += e[n].unread;
          }

          return t;
        }
      }, {
        key: "insertOne",
        value: function value(e) {
          var t = this.getPosIndex(e);
          this.list.splice(t + 1, 0, e);
        }
      }, {
        key: "getPosIndex",
        value: function value(e) {
          if (0 == this.list.length) return -1;

          for (var t, n, o = 0, i = this.list.length; i - o > 1;) {
            t = Math.floor((o + i) / 2), n = this.list[t];
            var r = this.compares(e, n);
            if (0 == r) return t;
            r > 0 ? o = t : i = t;
          }

          return 0 == o && this.compares(this.list[0], e) > 0 ? -1 : o;
        }
      }, {
        key: "compares",
        value: function value(e, t) {
          var n = void 0;
          return (n = e.top == t.top ? t.lastMessage.timestamp - e.lastMessage.timestamp : e.top ? -1 : 1) > 0 ? 1 : 0 === n ? 0 : -1;
        }
      }, {
        key: "removeConversation",
        value: function value(e, t) {
          var n = this,
              i = t == l.ConversationType.PRIVATE ? "userId" : "groupId";
          return y.calibrator.isStringOrNumber(e) ? (y.calibrator.isNumber(e) && (e = e.toString()), -1 == this.findConversationIndex(t, e) ? o["default"].reject({
            code: 400,
            content: "Failed to remove conversation, " + i + " does not exists."
          }) : new o["default"](function (o, i) {
            var r = {
              targetId: e,
              type: t
            };
            n.requestEmit(h.EmitType.removeConversation, r, function (r) {
              var s = n.findConversationIndex(t, e);
              s > -1 && n.list.splice(s, 1), n.onUpdated(), 200 == r.code ? o({}) : i({
                code: r.code || 408,
                content: r.content || "Failed to remove conversation"
              });
            }, function (e) {
              i({
                code: e.code || 408,
                content: e.content || "Failed to remove conversation"
              });
            });
          })) : o["default"].reject({
            code: 400,
            content: "Failed to remove conversation, " + i + " must be  a string or integer."
          });
        }
      }, {
        key: "topConversation",
        value: function value(e, t, n) {
          var i = this,
              r = n == l.ConversationType.PRIVATE ? "userId" : "groupId";
          if (!y.calibrator.isStringOrNumber(e)) return o["default"].reject({
            code: 400,
            content: "Failed to top conversation, " + r + " must be a string or integer."
          });
          y.calibrator.isNumber(e) && (e = e.toString());
          var s = this.findConversationIndex(n, e);
          return -1 == s || this.list[s].top == t ? o["default"].reject({
            code: 400,
            content: "Failed to top conversation, " + r + " does not exists."
          }) : new o["default"](function (o, r) {
            var s = {
              targetId: e,
              top: t,
              type: n
            };
            i.requestEmit(h.EmitType.topConversation, s, function () {
              var r = i.findConversationIndex(n, e),
                  s = i.list[r];
              s.top = t, i.list.splice(r, 1), i.insertOne(s), i.onUpdated(), o({});
            }, function (e) {
              r({
                code: e.code || 408,
                content: e.content || "Failed to top Conversation"
              });
            });
          });
        }
      }, {
        key: "requestEmit",
        value: function value(e, t, n, o) {
          var i = new f["default"]({
            name: e,
            params: t,
            permission: d["default"].WRITE,
            singleTimeout: p.SocketTimeout.commonRequestSingle,
            totalTimeout: p.SocketTimeout.commonRequestTotal,
            success: n,
            fail: o
          });

          this.im._goEasySocket.emit(i);
        }
      }, {
        key: "findConversationIndex",
        value: function value(e, t) {
          return this.list.findIndex(function (n) {
            return e == l.ConversationType.PRIVATE ? n.type == e && n.userId == t : n.type == e && n.groupId == t;
          });
        }
      }]), e;
    }();
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.messageCreator = undefined;

    var o = _(n(0)),
        i = _(n(1)),
        r = _(n(50)),
        s = _(n(197)),
        a = _(n(198)),
        u = _(n(199)),
        c = _(n(51)),
        l = _(n(200)),
        f = _(n(201)),
        d = _(n(202)),
        p = _(n(203)),
        h = _(n(204)),
        y = _(n(205)),
        v = _(n(102)),
        m = _(n(103)),
        g = _(n(52)),
        b = _(n(206));

    function _(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var k = new (function () {
      function e() {
        (0, o["default"])(this, e), this.messageTypes = {
          wx: {
            image: s["default"],
            file: r["default"],
            audio: a["default"],
            video: u["default"],
            text: m["default"]
          },
          uniApp: {
            image: d["default"],
            file: c["default"],
            audio: l["default"],
            video: f["default"],
            text: m["default"]
          },
          html: {
            image: p["default"],
            file: g["default"],
            audio: h["default"],
            video: y["default"],
            text: m["default"]
          }
        };
      }

      return (0, i["default"])(e, [{
        key: "create",
        value: function value(e, t) {
          var n = v["default"].resolve(),
              o = this.messageTypes[n][e];
          return o ? new o(t) : new b["default"](t);
        }
      }]), e;
    }())();
    t.messageCreator = k;
  }, function (e, t, n) {
    e.exports = {
      "default": n(194),
      __esModule: !0
    };
  }, function (e, t, n) {
    n(195);
    var o = n(7).Object;

    e.exports = function (e, t) {
      return o.getOwnPropertyDescriptor(e, t);
    };
  }, function (e, t, n) {
    var o = n(24),
        i = n(65).f;
    n(66)("getOwnPropertyDescriptor", function () {
      return function (e, t) {
        return i(o(e), t);
      };
    });
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.str = undefined;
    var o = s(n(0)),
        i = s(n(1)),
        r = n(83);

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var a = new (function () {
      function e() {
        (0, o["default"])(this, e);
      }

      return (0, i["default"])(e, [{
        key: "fileExtension",
        value: function value(e, t) {
          if (r.calibrator.isString(e)) try {
            var n = e.split(t);
            return n[n.length - 1];
          } catch (o) {
            throw Error(o);
          }
        }
      }]), e;
    }())();
    t.str = a;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(3)),
        i = d(n(0)),
        r = d(n(1)),
        s = d(n(4)),
        a = d(n(12)),
        u = d(n(5)),
        c = d(n(50)),
        l = d(n(9)),
        f = n(17);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var p = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !f.calibrator.isDef(e.file.tempFiles) || 0 == e.file.tempFiles[0].length) throw Error("tempFiles is empty.");
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = l["default"].image;
        }
      }, {
        key: "setFile",
        value: function value(e) {
          var t = "chooseMedia:ok" == e.errMsg ? e.tempFiles[0].tempFilePath : e.tempFiles[0].path;
          e.tempFiles[0].path = t, this.file = e;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var n = this,
              i = e.file.tempFiles[0],
              r = "chooseMedia:ok" == e.file.errMsg ? i.tempFilePath : i.path;
          this.payload.url = r, this.payload.size = i.size, this.payload.width = "", this.payload.height = "", this.payload.contentType = "";
          var s = f.calibrator.isEmpty(i.name) || i.name == undefined ? r : i.name;
          this.payload.name = "wx-image." + f.str.fileExtension(s, "."), this.payload.contentType = "image/" + f.str.fileExtension(s, "."), wx.getImageInfo({
            src: r,
            success: function success(e) {
              n.payload.width = e.width, n.payload.height = e.height;
            }
          });
        }
      }]), t;
    }(c["default"]);

    t["default"] = p;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(3)),
        i = d(n(0)),
        r = d(n(1)),
        s = d(n(4)),
        a = d(n(12)),
        u = d(n(5)),
        c = d(n(50)),
        l = d(n(9)),
        f = n(17);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var p = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e);
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = l["default"].audio;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var n = e.file.tempFilePath;
          this.payload.url = n, this.payload.duration = e.file.duration / 1e3, this.payload.size = e.file.fileSize;
          var i = f.calibrator.isEmpty(e.file.name) || e.file.name == undefined ? n : e.file.name;
          this.payload.contentType = "audio/" + f.str.fileExtension(i, "."), this.payload.name = "wx-audio." + f.str.fileExtension(i, ".");
        }
      }]), t;
    }(c["default"]);

    t["default"] = p;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = h(n(21)),
        i = h(n(3)),
        r = h(n(0)),
        s = h(n(1)),
        a = h(n(4)),
        u = h(n(12)),
        c = h(n(5)),
        l = h(n(50)),
        f = h(n(9)),
        d = n(2),
        p = n(17);

    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var y = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, i["default"])(t)).call(this, e));
      }

      return (0, c["default"])(t, e), (0, s["default"])(t, [{
        key: "validate",
        value: function value(e) {
          (0, u["default"])(t.prototype.__proto__ || (0, i["default"])(t.prototype), "validate", this).call(this, e);
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = f["default"].video;
        }
      }, {
        key: "setFile",
        value: function value(e) {
          this.file = "chooseMedia:ok" == e.errMsg ? e.tempFiles[0] : e;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          this.payload = (0, o["default"])(null);
          var t = (0, o["default"])(null),
              n = (0, o["default"])(null),
              i = "chooseMedia:ok" == e.file.errMsg ? e.file.tempFiles[0] : e.file,
              r = i.duration,
              s = i.height,
              a = i.size,
              u = i.tempFilePath,
              c = i.thumbTempFilePath,
              l = i.width,
              f = i.name,
              h = f === undefined ? "" : f,
              y = d.calibrator.isEmpty(h) ? u : h;
          t.contentType = "video/" + p.str.fileExtension(y, "."), t.name = "wx-video." + p.str.fileExtension(y, "."), t.url = u, t.width = n.width = l, t.height = n.height = s, t.size = a, t.duration = r, n.url = c, n.contentType = "image/jpg", n.name = "wx-thumbnail.jpg", this.payload.video = t, this.payload.thumbnail = n;
        }
      }]), t;
    }(l["default"]);

    t["default"] = y;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(3)),
        i = d(n(0)),
        r = d(n(1)),
        s = d(n(4)),
        a = d(n(12)),
        u = d(n(5)),
        c = d(n(51)),
        l = d(n(9)),
        f = n(17);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var p = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e);
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = l["default"].audio;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          var n = this;
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var i = this,
              r = e.file.tempFilePath;
          this.payload.url = r;
          var s = f.calibrator.isEmpty(e.file.name) || e.file.name == undefined ? r : e.file.name;
          if (this.payload.contentType = "audio/" + f.str.fileExtension(s, "."), this.payload.name = "uni-audio." + f.str.fileExtension(s, "."), f.calibrator.isDef(e.file.duration)) this.payload.duration = e.file.duration / 1e3;else {
            this.payload.duration = 0;
            var u = uni.createInnerAudioContext();
            u.src = r, u.onCanplay(function (e) {
              i.payload.duration = u.duration, u.destroy();
            });
          }
          uni.getFileInfo({
            filePath: r,
            success: function success(e) {
              n.payload.size = e.size;
            }
          });
        }
      }]), t;
    }(c["default"]);

    t["default"] = p;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = p(n(21)),
        i = p(n(3)),
        r = p(n(0)),
        s = p(n(1)),
        a = p(n(4)),
        u = p(n(12)),
        c = p(n(5)),
        l = p(n(51)),
        f = p(n(9)),
        d = n(17);

    function p(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var h = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, i["default"])(t)).call(this, e));
      }

      return (0, c["default"])(t, e), (0, s["default"])(t, [{
        key: "validate",
        value: function value(e) {
          (0, u["default"])(t.prototype.__proto__ || (0, i["default"])(t.prototype), "validate", this).call(this, e);
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = f["default"].video;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          var t = (0, o["default"])(null),
              n = (0, o["default"])(null);
          this.payload = (0, o["default"])(null);
          var i = e.file,
              r = i.duration,
              s = i.height,
              a = i.size,
              u = i.tempFilePath,
              c = i.width,
              l = i.name,
              f = l === undefined ? "" : l,
              p = d.calibrator.isEmpty(f) ? u : f;
          t.contentType = "video/" + d.str.fileExtension(p, "."), t.name = "uni-video." + d.str.fileExtension(p, "."), t.size = a, t.duration = r, t.url = n.url = u, t.width = n.width = c, t.height = n.height = s, n.contentType = "image/jpg", n.name = "wx-thumbnail.jpg", this.payload.video = t, this.payload.thumbnail = n;
        }
      }]), t;
    }(l["default"]);

    t["default"] = h;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(3)),
        i = d(n(0)),
        r = d(n(1)),
        s = d(n(4)),
        a = d(n(12)),
        u = d(n(5)),
        c = d(n(51)),
        l = n(17),
        f = d(n(9));

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var p = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !l.calibrator.isDef(e.file.tempFiles) || 0 == e.file.tempFiles[0].length) throw Error("tempFiles is empty.");
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = f["default"].image;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var n = this,
              i = e.file.tempFiles[0];
          this.payload.url = i.path, this.payload.size = i.size, this.payload.width = "", this.payload.height = "";
          var r = l.calibrator.isEmpty(i.name) || i.name == undefined ? i.path : i.name;
          this.payload.contentType = "image/" + l.str.fileExtension(r, "."), this.payload.name = "uni-image." + l.str.fileExtension(r, "."), uni.getImageInfo({
            src: i.path,
            success: function success(e) {
              n.payload.width = e.width, n.payload.height = e.height;
            }
          });
        }
      }]), t;
    }(c["default"]);

    t["default"] = p;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(3)),
        i = f(n(0)),
        r = f(n(1)),
        s = f(n(4)),
        a = f(n(12)),
        u = f(n(5)),
        c = f(n(52)),
        l = f(n(9));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e);
          var n = ["gif", "jpg", "png", "jpeg"];
          if (!n.find(function (t) {
            return t == e.file.type.split("/")[1].toLowerCase();
          })) throw Error("Only " + n.join(",") + " is supported image.");
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = l["default"].image;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          var n = this;
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var i = window.URL || window.webkitURL,
              r = new Image();
          r.src = i.createObjectURL(e.file), r.onload = function () {
            n.payload.width = r.width, n.payload.height = r.height, i.revokeObjectURL(r.src);
          };
        }
      }]), t;
    }(c["default"]);

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(3)),
        i = f(n(0)),
        r = f(n(1)),
        s = f(n(4)),
        a = f(n(12)),
        u = f(n(5)),
        c = f(n(52)),
        l = f(n(9));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "validate",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e);
          var n = ["mp3", "ogg", "wav", "wma", "ape", "acc", "mpeg"];
          if (!n.find(function (t) {
            return t == e.file.type.split("/")[1].toLowerCase();
          })) throw Error("Only " + n.join(",") + " is supported audio.");
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = l["default"].audio;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var n = this,
              i = window.URL || window.webkitURL,
              r = document.createElement("audio");
          r.src = i.createObjectURL(e.file), r.onloadedmetadata = function () {
            n.payload.duration = r.duration, i.revokeObjectURL(r.src);
          };
        }
      }]), t;
    }(c["default"]);

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(21)),
        i = d(n(3)),
        r = d(n(0)),
        s = d(n(1)),
        a = d(n(4)),
        u = d(n(12)),
        c = d(n(5)),
        l = d(n(52)),
        f = d(n(9));

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var p = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, i["default"])(t)).call(this, e));
      }

      return (0, c["default"])(t, e), (0, s["default"])(t, [{
        key: "validate",
        value: function value(e) {
          (0, u["default"])(t.prototype.__proto__ || (0, i["default"])(t.prototype), "validate", this).call(this, e);
          var n = ["avi", "mov", "rmvb", "rm", "flv", "mp4", "3gp", "quicktime"];
          if (!n.find(function (t) {
            return t == e.file.type.split("/")[1].toLowerCase();
          })) throw Error("Only " + n.join(",") + " is supported video.");
        }
      }, {
        key: "setType",
        value: function value(e) {
          this.type = f["default"].video;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          this.payload = (0, o["default"])(null);
          var t = (0, o["default"])(null),
              n = (0, o["default"])(null);
          t.contentType = e.file.type, t.size = e.file.size, t.duration = 0, t.url = n.url = "", t.name = e.file.name, t.width = n.width = 0, t.height = n.height = 0, n.contentType = "image/jpg", this.payload.video = t, this.payload.thumbnail = n;
          var i = this,
              r = window.URL || window.webkitURL,
              s = document.createElement("video"),
              a = r.createObjectURL(e.file);
          s.src = a, s.onloadedmetadata = function () {
            i.payload.video.duration = s.duration, i.payload.video.width = i.payload.thumbnail.width = s.videoWidth, i.payload.video.height = i.payload.thumbnail.height = s.videoHeight, i.payload.video.url = a, i.payload.thumbnail.url = function (e) {
              var t = document.createElement("canvas");
              return t.width = e.videoWidth, t.height = e.videoHeight, t.getContext("2d").drawImage(e, 0, 0, t.width, t.height), t.toDataURL("image/png");
            }(s), r.revokeObjectURL(s.src);
          };
        }
      }]), t;
    }(l["default"]);

    t["default"] = p;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(3)),
        i = l(n(0)),
        r = l(n(1)),
        s = l(n(4)),
        a = l(n(5)),
        u = l(n(43)),
        c = n(2);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var f = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
      }

      return (0, a["default"])(t, e), (0, r["default"])(t, [{
        key: "setType",
        value: function value(e) {
          if (!c.calibrator.isStringOrNumber(e.type)) throw Error("type require a string or number.");
          if (c.calibrator.isEmpty(e.type)) throw Error("type is empty.");
          this.type = e.type;
        }
      }, {
        key: "setPayload",
        value: function value(e) {
          if (c.calibrator.isEmpty(e.payload)) throw Error("payload is empty.");
          if (!c.calibrator.isPlainObject(e.payload) && !c.calibrator.isStringOrNumber(e.payload)) throw Error("payload require object | string | number.");
          this.payload = e.payload;
        }
      }]), t;
    }(u["default"]);

    t["default"] = f;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = v(n(33)),
        i = v(n(6)),
        r = v(n(0)),
        s = v(n(1)),
        a = v(n(209)),
        u = v(n(10)),
        c = n(32),
        l = v(n(8)),
        f = n(11),
        d = v(n(49)),
        p = n(25),
        h = v(n(43)),
        y = n(2);

    function v(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var m = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.bulletMessageBuilder = null, this.im = t, this.bulletMessageBuilder = new a["default"](t);
      }

      return (0, s["default"])(e, [{
        key: "send",
        value: function value(e, t, n) {
          var o = this;
          return new i["default"](function (i, r) {
            t.status === d["default"]["new"] ? (t.status = d["default"].sending, o.bulletMessageBuilder.build(e, t, n).then(function (e) {
              var n = new u["default"]({
                name: f.EmitType.publishIM,
                params: e,
                permission: l["default"].WRITE,
                singleTimeout: c.SocketTimeout.commonRequestSingle,
                totalTimeout: c.SocketTimeout.commonRequestTotal,
                fail: function fail(e) {
                  t.status = d["default"].fail, r({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to send private message."
                  });
                },
                success: function success(e) {
                  t.status = d["default"].success, 200 == e.resultCode ? i({
                    code: 200,
                    content: e.content
                  }) : r(e);
                }
              });

              o.im._goEasySocket.emit(n);
            })["catch"](function (e) {
              r({
                code: e.code || 400,
                content: e.content || e
              });
            })) : r({
              code: 400,
              content: "Please create a new message, a message can only be sent once"
            });
          });
        }
      }, {
        key: "sendMessage",
        value: function value(e) {
          var t = this,
              n = this.im;
          return new i["default"](function (i, r) {
            if (e instanceof h["default"]) {
              if (e.status === d["default"]["new"]) {
                e.status = d["default"].sending;
                var s = e.to;
                if (delete e.to, s) {
                  if (!s.type || s.type != p.ConversationType.GROUP && s.type != p.ConversationType.PRIVATE) r({
                    code: 400,
                    content: "message require property to.type"
                  });else if (s.id) {
                    if (s.data && y.calibrator.isFunction(s.data)) r({
                      code: 400,
                      content: "to.data can not be function"
                    });else {
                      var a = e.notification;
                      if (a) if (y.calibrator.isObject(a)) {
                        if (y.calibrator.isEmpty(a.title)) return void r({
                          code: 400,
                          content: "notification title is required"
                        });
                        if (!y.calibrator.isString(a.title)) return void r({
                          code: 400,
                          content: "notification title must be string"
                        });
                        if (y.calibrator.isEmpty(e.notification.body)) return void r({
                          code: 400,
                          content: "notification body is required"
                        });
                        if (!y.calibrator.isString(e.notification.body)) return void r({
                          code: 400,
                          content: "notification body must be string"
                        });
                      } else if (y.calibrator.isPrimitive(e.notification)) return void r({
                        code: 400,
                        content: "notification must be an json object"
                      });
                      s.data || (s.data = {}), n._conversations.updateByOutMessage(e, s.type, s.id, s.data), t.bulletMessageBuilder.build(s.id, e, s.type).then(function (t) {
                        t.d = (0, o["default"])(s.data);
                        var a = new u["default"]({
                          name: f.EmitType.publishIM,
                          params: t,
                          permission: l["default"].WRITE,
                          singleTimeout: c.SocketTimeout.commonRequestSingle,
                          totalTimeout: c.SocketTimeout.commonRequestTotal,
                          fail: function fail(t) {
                            e.status = d["default"].fail, r({
                              code: t.resultCode || 408,
                              content: t.content || "Failed to send private message."
                            });
                          },
                          success: function success(t) {
                            e.status = d["default"].success, e.timestamp = t.content.timestamp, i(e), n._conversations.updateByOutMessage(e, s.type, s.id, s.data);
                          }
                        });

                        n._goEasySocket.emit(a);
                      })["catch"](function (e) {
                        r({
                          code: e.code || 400,
                          content: e.content || e
                        });
                      });
                    }
                  } else r({
                    code: 400,
                    content: "message require property to.id"
                  });
                } else r({
                  code: 400,
                  content: "message require property to."
                });
              } else r({
                code: 400,
                content: "Please create a new message, a message can only be sent once"
              });
            } else r({
              code: 400,
              content: "it is invalid message"
            });
          });
        }
      }]), e;
    }();

    t["default"] = m;
  }, function (e, t, n) {
    var o = n(7),
        i = o.JSON || (o.JSON = {
      stringify: JSON.stringify
    });

    e.exports = function (e) {
      return i.stringify.apply(i, arguments);
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(33)),
        i = c(n(6)),
        r = c(n(0)),
        s = c(n(1)),
        a = c(n(210)),
        u = c(n(211));
    c(n(9));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t;
      }

      return (0, s["default"])(e, [{
        key: "build",
        value: function value(e, t, n) {
          var r = this;
          return new i["default"](function (i, s) {
            var c = new a["default"]({
              to: e,
              message: t,
              conversationType: n
            }),
                l = t.type;
            new u["default"](l, r.im).build(t).then(function (e) {
              c.p = (0, o["default"])(e), i(c);
            })["catch"](function (e) {
              s(e);
            });
          });
        }
      }]), e;
    }();

    t["default"] = l;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(33)),
        i = f(n(0)),
        r = f(n(1)),
        s = n(17),
        a = f(n(43)),
        u = f(n(103)),
        c = f(n(9)),
        l = f(n(42));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function () {
      function e(t) {
        (0, i["default"])(this, e), this.mt = null, this.to = null, this.p = null, this.t = null, this.guid = null, this.nt = null, this.validate(t.to, t.message), this.mt = t.message.type, this.to = t.to, this.t = t.conversationType, this.guid = t.message.messageId, this.p = t.message.payload, this.nt = t.message.notification;
      }

      return (0, r["default"])(e, [{
        key: "validate",
        value: function value(e, t) {
          if (!(t instanceof a["default"])) throw Error("createMessage first.");
          if (s.calibrator.isEmpty(e)) throw Error("userId is empty.");
          if (!s.calibrator.isStringOrNumber(e)) throw Error("userId should be a string or number.");
          if (l["default"].userId == e) throw Error("userId can not be the same as your id.");

          if (t.type == c["default"].text) {
            if (!(t instanceof u["default"])) throw Error("it is not textMessage");
            if ((0, o["default"])(t.payload).length > 3072) throw Error("message-length limit 3kb");
          }
        }
      }]), e;
    }();

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = u(n(0)),
        i = n(212),
        r = u(n(213)),
        s = u(n(105)),
        a = u(n(9));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    t["default"] = function c(e, t) {
      return (0, o["default"])(this, c), e == a["default"].video ? new r["default"](t) : e == a["default"].audio || e == a["default"].image || e == a["default"].file ? new s["default"](t) : i.simplePayloadBuilder;
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.simplePayloadBuilder = undefined;
    var o = c(n(6)),
        i = c(n(3)),
        r = c(n(0)),
        s = c(n(1)),
        a = c(n(4)),
        u = c(n(5));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = new (function (e) {
      function t() {
        return (0, r["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, i["default"])(t)).call(this));
      }

      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "build",
        value: function value(e) {
          return new o["default"](function (t, n) {
            try {
              t(e.payload);
            } catch (o) {
              n(o);
            }
          });
        }
      }]), t;
    }(c(n(104))["default"]))();
    t.simplePayloadBuilder = l;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(6)),
        i = f(n(3)),
        r = f(n(0)),
        s = f(n(1)),
        a = f(n(4)),
        u = f(n(5)),
        c = f(n(105)),
        l = f(n(106));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, i["default"])(t)).call(this, e));
      }

      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "build",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            var i = new l["default"]();
            t.upload(e).then(function (t) {
              var o = t.content;
              undefined;
              i = e.payload;
              var r = "?x-oss-process=video/snapshot,t_0000,f_jpg,w_" + e.payload.video.width + ",m_fast,ar_auto";
              i.video.url = t.content.url, i.thumbnail.url = t.content.url + r, i.video.name = t.content.newFileName, n(i);
            })["catch"](function (e) {
              o(e);
            });
          });
        }
      }]), t;
    }(c["default"]);

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.fileUploader = undefined;
    var o = c(n(0)),
        i = c(n(1)),
        r = c(n(102)),
        s = n(215),
        a = n(216),
        u = n(217);

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = function () {
      function e() {
        (0, o["default"])(this, e), this.uploader = {
          uniApp: s.uniAppFileUploader,
          wx: a.wxFileUploader,
          html: u.htmlFileUploader
        };
      }

      return (0, i["default"])(e, [{
        key: "upload",
        value: function value(e, t) {
          var n = r["default"].resolve();
          return this.uploader[n].upload(e, t);
        }
      }]), e;
    }();

    t["default"] = l;
    var f = new l();
    t.fileUploader = f;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.uniAppFileUploader = undefined;
    var o = c(n(6)),
        i = c(n(3)),
        r = c(n(0)),
        s = c(n(1)),
        a = c(n(4)),
        u = c(n(5));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = new (function (e) {
      function t() {
        return (0, r["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, i["default"])(t)).call(this));
      }

      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "upload",
        value: function value(e, t) {
          var n = this;

          try {
            return new o["default"](function (o, i) {
              uni.uploadFile({
                url: e.host,
                filePath: n.getTempFilePath(e),
                name: "file",
                formData: e.parameters,
                success: function success(t) {
                  if (200 === t.statusCode) {
                    var n = e.payload;
                    n.message = t.errMsg, o({
                      code: 200,
                      content: n
                    });
                  } else i({
                    code: t.statusCode,
                    content: t.errMsg
                  });
                },
                fail: function fail(e) {
                  i({
                    code: 500,
                    content: e.errMsg
                  });
                }
              }).onProgressUpdate(function (e) {
                t && t(e);
              });
            });
          } catch (i) {
            return new o["default"](function (e, t) {
              t({
                code: 500,
                content: i
              });
            });
          }
        }
      }, {
        key: "getTempFilePath",
        value: function value(e) {
          var t = e.file || e.fileRes;
          return Array.isArray(t.tempFiles) ? t.tempFiles[0].path : t.tempFilePath;
        }
      }]), t;
    }(c(n(71))["default"]))();
    t.uniAppFileUploader = l;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.wxFileUploader = undefined;
    var o = c(n(6)),
        i = c(n(3)),
        r = c(n(0)),
        s = c(n(1)),
        a = c(n(4)),
        u = c(n(5));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = new (function (e) {
      function t() {
        return (0, r["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, i["default"])(t)).apply(this, arguments));
      }

      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "upload",
        value: function value(e, t) {
          var n = this;

          try {
            return new o["default"](function (o, i) {
              wx.uploadFile({
                url: e.host,
                filePath: n.getTempFilePath(e),
                name: "file",
                formData: e.parameters,
                success: function success(t) {
                  if (200 === t.statusCode) {
                    var n = e.payload;
                    n.message = t.errMsg, o({
                      code: 200,
                      content: n
                    });
                  } else i({
                    code: t.statusCode,
                    content: t.errMsg
                  });
                },
                fail: function fail(e) {
                  i({
                    code: 500,
                    content: e.errMsg
                  });
                }
              }).onProgressUpdate(function (e) {
                t && t(e);
              });
            });
          } catch (i) {
            return new o["default"](function (e, t) {
              t({
                code: 500,
                content: i
              });
            });
          }
        }
      }, {
        key: "getTempFilePath",
        value: function value(e) {
          var t = e.file || e.fileRes;
          return Array.isArray(t.tempFiles) ? t.tempFiles[0].path : t.tempFilePath;
        }
      }]), t;
    }(c(n(71))["default"]))();
    t.wxFileUploader = l;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.htmlFileUploader = undefined;
    var o = c(n(6)),
        i = c(n(3)),
        r = c(n(0)),
        s = c(n(1)),
        a = c(n(4)),
        u = c(n(5));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = new (function (e) {
      function t() {
        return (0, r["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, i["default"])(t)).call(this));
      }

      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "upload",
        value: function value(e, t) {
          try {
            return new o["default"](function (n, o) {
              var i = new XMLHttpRequest();

              for (var r in i.open("post", e.host, !0), e.headers) {
                i.setRequestHeader(r, e.headers[r]);
              }

              i.upload.onprogress = function (e) {
                t && t(e);
              }, i.upload.onloadstart = function (e) {
                t && t(e);
              }, i.upload.onloadend = function (e) {
                t && t(e);
              };
              var s = new FormData();

              for (var a in e.parameters) {
                "fileRes" == a ? s.append("file", e.parameters[a]) : s.append(a, e.parameters[a]);
              }

              i.send(s), i.onreadystatechange = function () {
                if (4 == i.readyState) if (i.status >= 200 && i.status < 300 || 304 == i.status) {
                  var t = e.payload;
                  t.message = i.responseText, n({
                    code: 200,
                    content: t
                  });
                } else o({
                  code: i.status,
                  content: i.responseText
                });
              };
            });
          } catch (n) {
            return new o["default"](function (e, t) {
              t({
                code: 500,
                content: n
              });
            });
          }
        }
      }]), t;
    }(c(n(71))["default"]))();
    t.htmlFileUploader = l;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = u(n(6)),
        i = u(n(0)),
        r = u(n(1)),
        s = u(n(219)),
        a = u(n(223));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var c = function () {
      function e(t) {
        (0, i["default"])(this, e), this.uploadTokenResolver = null, this.uploadTokenResolver = new a["default"](t);
      }

      return (0, r["default"])(e, [{
        key: "build",
        value: function value(e, t, n) {
          var i = this;
          return new o["default"](function (o, r) {
            i.uploadTokenResolver.resolve(t).then(function (t) {
              var i = t.content;
              o(new s["default"](i.vendor).build(i, e, n));
            })["catch"](function (e) {
              r(e);
            });
          });
        }
      }]), e;
    }();

    t["default"] = c;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o,
        i = n(0),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    },
        s = n(220),
        a = n(221),
        u = n(222);

    t["default"] = function c(e) {
      return (0, r["default"])(this, c), e == s.OssType.aliYun ? a.aliYunOSSRequestBuilder : u.qiNiuYunOSSRequestBuilder;
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.OssType = {
      aliYun: "ALI",
      qiNiu: "QN"
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.aliYunOSSRequestBuilder = undefined;
    var o = f(n(3)),
        i = f(n(0)),
        r = f(n(1)),
        s = f(n(4)),
        a = f(n(5)),
        u = f(n(108)),
        c = f(n(109)),
        l = f(n(9));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function (e) {
      function t() {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this));
      }

      return (0, a["default"])(t, e), (0, r["default"])(t, [{
        key: "url",
        value: function value(e) {
          return e.host + "/" + e.dir + "/" + this.newFileName(e);
        }
      }, {
        key: "build",
        value: function value(e, t, n) {
          var o = {
            key: e.dir + "/" + this.newFileName(e),
            OSSAccessKeyId: e.accessKeyId,
            policy: e.policy,
            signature: e.signature,
            success_action_status: "200",
            fileRes: t
          };
          l["default"].file === n && (o = {
            key: e.dir + "/" + this.newFileName(e),
            OSSAccessKeyId: e.accessKeyId,
            policy: e.policy,
            signature: e.signature,
            success_action_status: "200",
            "Content-Disposition": "attachment;filename=" + t.name,
            fileRes: t
          });
          var i = {
            newFileName: this.newFileName(e),
            url: this.url(e)
          };
          return new u["default"](e.host, null, o, t, i);
        }
      }]), t;
    }(c["default"]);

    t["default"] = d;
    var p = new d();
    t.aliYunOSSRequestBuilder = p;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.qiNiuYunOSSRequestBuilder = undefined;
    var o = l(n(3)),
        i = l(n(0)),
        r = l(n(1)),
        s = l(n(4)),
        a = l(n(5)),
        u = l(n(109)),
        c = l(n(108));

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var f = new (function (e) {
      function t() {
        return (0, i["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this));
      }

      return (0, a["default"])(t, e), (0, r["default"])(t, [{
        key: "url",
        value: function value(e) {
          return e.downloadUrl;
        }
      }, {
        key: "build",
        value: function value(e, t) {
          var n = {
            key: this.newFileName(e),
            token: e.token,
            file: t
          },
              o = {
            newFileName: this.newFileName(e),
            url: this.url(e)
          };
          return new c["default"](e.host, null, n, t, o);
        }
      }]), t;
    }(u["default"]))();
    t.qiNiuYunOSSRequestBuilder = f;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(6)),
        i = c(n(0)),
        r = c(n(1)),
        s = c(n(10)),
        a = c(n(8)),
        u = n(32);

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.im = t;
      }

      return (0, r["default"])(e, [{
        key: "resolve",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            var i = new s["default"]({
              name: "uploadToken",
              params: {
                filename: e
              },
              permission: a["default"].WRITE,
              singleTimeout: u.SocketTimeout.commonRequestSingle,
              totalTimeout: u.SocketTimeout.commonRequestTotal,
              fail: function fail(e) {
                o(e);
              },
              success: function success(e) {
                200 == e.code ? n(e) : o(e);
              }
            });

            t.im._goEasySocket.emit(i);
          });
        }
      }]), e;
    }();

    t["default"] = l;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(21)),
        i = d(n(6)),
        r = d(n(0)),
        s = d(n(1)),
        a = n(17),
        u = d(n(10)),
        c = d(n(8)),
        l = n(32),
        f = n(11);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var p = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t;
      }

      return (0, s["default"])(e, [{
        key: "history",
        value: function value(e) {
          var t = this;
          return new i["default"](function (n, o) {
            t.transformOptions(e);
            var i = new u["default"]({
              name: f.EmitType.imHistory,
              params: e,
              permission: c["default"].READ,
              singleTimeout: l.SocketTimeout.commonQuerySingle,
              totalTimeout: l.SocketTimeout.commonQueryTotal,
              fail: function fail(e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to query message"
                });
              },
              success: function success(i) {
                if (200 == i.code) {
                  var r = t.transformHistories(i, e);
                  n({
                    code: 200,
                    content: r
                  });
                } else o(i);
              }
            });

            t.im._goEasySocket.emit(i);
          });
        }
      }, {
        key: "transformOptions",
        value: function value(e) {
          if (!a.calibrator.isObject(e) || !a.calibrator.isDef(e.friendId) && !a.calibrator.isDef(e.groupId)) throw Error("friendId or groupId is not define.");
          if (a.calibrator.isDef(e.friendId) && a.calibrator.isDef(e.groupId)) throw Error("only contain friendId or groupId.");

          if (a.calibrator.isDef(e.limit) || (e.limit = 10), e.limit > 30 && (e.limit = 30), a.calibrator.isDef(e.friendId)) {
            if (!a.calibrator.isStringOrNumber(e.friendId)) throw Error("TypeError: friendId require string or number.");
            a.calibrator.isNumber(e.friendId) && (e.friendId = e.friendId.toString());
          } else {
            if (!a.calibrator.isStringOrNumber(e.groupId)) throw Error("TypeError: groupId require string or number.");
            a.calibrator.isNumber(e.groupId) && (e.groupId = e.groupId.toString());
          }

          return e;
        }
      }, {
        key: "transformHistories",
        value: function value(e, t) {
          var n = [];
          return e && e.content && e.content.map(function (e) {
            var i = (0, o["default"])(null);
            i.timestamp = e.ts, i.senderId = e.s, i.type = e.mt, i.payload = JSON.parse(e.p), t.groupId && e.d && (i.senderData = JSON.parse(e.d)), n.push(i);
          }), n;
        }
      }]), e;
    }();

    t["default"] = p;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = h(n(6)),
        i = h(n(0)),
        r = h(n(1)),
        s = h(n(10)),
        a = n(11),
        u = h(n(8)),
        c = n(15),
        l = n(25),
        f = h(n(48)),
        d = n(2),
        p = n(29);

    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var y = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.im = t, t._iMReceiver.addIMMessageObserver(this.newNewMessageReceived.bind(this));
      }

      return (0, r["default"])(e, [{
        key: "newNewMessageReceived",
        value: function value(e) {
          if (e.t === l.ConversationType.GROUP) {
            var t = f["default"].assemble(e);

            this.im._event.notify(p.ImEventType.GROUP_MESSAGE_RECEIVED, t);
          }
        }
      }, {
        key: "subscribe",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (Array.isArray(e) && 0 != e.length) {
              for (var i = 0; i < e.length; i++) {
                if (!d.calibrator.isStringOrNumber(e[i])) return void o({
                  code: 400,
                  content: "TypeError: groups item require string or number."
                });
                d.calibrator.isNumber(e[i]) && (e[i] = e[i].toString());
              }

              var r = new s["default"]({
                name: a.EmitType.subscribeGroups,
                params: {
                  groupIds: e
                },
                permission: u["default"].WRITE,
                singleTimeout: c.SocketTimeout.commonInfiniteSingle,
                totalTimeout: c.SocketTimeout.commonInfiniteTotal,
                success: function success() {
                  n({
                    code: 200,
                    content: "ok"
                  });
                },
                fail: function fail(e) {
                  o({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to subscribe group message"
                  });
                }
              });

              t.im._goEasySocket.emit(r);
            } else o({
              code: 400,
              content: "TypeError: groups require array."
            });
          });
        }
      }, {
        key: "unsubscribe",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (d.calibrator.isStringOrNumber(e)) {
              e = e.toString();
              var i = new s["default"]({
                name: a.EmitType.unsubscribeGroup,
                params: {
                  groupId: e
                },
                permission: u["default"].READ,
                singleTimeout: c.SocketTimeout.commonRequestSingle,
                totalTimeout: c.SocketTimeout.commonRequestTotal,
                success: function success() {
                  n({
                    code: 200,
                    content: "ok"
                  });
                },
                fail: function fail(e) {
                  o({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to unsubscribe group message"
                  });
                }
              });

              t.im._goEasySocket.emit(i);
            } else o({
              code: 400,
              content: "TypeError: channel require string or number."
            });
          });
        }
      }]), e;
    }();

    t["default"] = y;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = u(n(0)),
        i = u(n(1)),
        r = u(n(48)),
        s = n(25),
        a = n(29);

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var c = function () {
      function e(t) {
        (0, o["default"])(this, e), this.im = null, this.im = t, t._iMReceiver.addIMMessageObserver(this.onNewMessageReceived.bind(this));
      }

      return (0, i["default"])(e, [{
        key: "onNewMessageReceived",
        value: function value(e) {
          if (e.t === s.ConversationType.PRIVATE) {
            var t = r["default"].assemble(e);

            this.im._event.notify(a.ImEventType.PRIVATE_MESSAGE_RECEIVED, t);
          }
        }
      }]), e;
    }();

    t["default"] = c;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(6)),
        i = f(n(0)),
        r = f(n(1)),
        s = f(n(10)),
        a = n(11),
        u = f(n(8)),
        c = n(15),
        l = n(2);

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.im = t;
      }

      return (0, r["default"])(e, [{
        key: "get",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (l.calibrator.isStringOrNumber(e)) {
              l.calibrator.isNumber(e) && (e = e.toString());
              var i = new s["default"]({
                name: a.EmitType.imGroupOnlineCount,
                params: {
                  groupId: e
                },
                permission: u["default"].READ,
                singleTimeout: c.SocketTimeout.commonQuerySingle,
                totalTimeout: c.SocketTimeout.commonQueryTotal,
                fail: function fail(e) {
                  o(e || {
                    code: 408,
                    content: "Failed to query online group users"
                  });
                },
                success: function success(e) {
                  200 == e.code ? n(e) : o(e);
                }
              });

              t.im._goEasySocket.emit(i);
            } else o({
              code: 400,
              content: "TypeError: groupId require string or number."
            });
          });
        }
      }]), e;
    }();

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = p(n(6)),
        i = p(n(0)),
        r = p(n(1)),
        s = p(n(10)),
        a = p(n(8)),
        u = n(32),
        c = n(11),
        l = n(2),
        f = n(29),
        d = p(n(41));

    function p(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var h = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.im = t, t._goEasySocket.addMessageObserver(d["default"].groupPresence, this.newMessageReceived.bind(this));
      }

      return (0, r["default"])(e, [{
        key: "presence",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (Array.isArray(e) && 0 != e.length) {
              for (var i = 0; i < e.length; i++) {
                if (!l.calibrator.isStringOrNumber(e[i])) return void o({
                  code: 400,
                  content: "TypeError: groupIds item require string or number."
                });
                if (l.calibrator.isNumber(e[i]) && (e[i] = e[i].toString()), 0 == e[i].length) return void o({
                  code: 400,
                  content: "TypeError: groupIds has empty item."
                });
              }

              var r = {
                groupIds: e
              };
              t.emitRocket(c.EmitType.subscribeGroupPresence, r, function () {
                n({
                  code: 200,
                  content: "ok"
                });
              }, function (e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to subscribe group message"
                });
              }, u.SocketTimeout.commonInfiniteSingle, u.SocketTimeout.commonInfiniteTotal);
            } else o({
              code: 400,
              content: "TypeError: groupIds require array."
            });
          });
        }
      }, {
        key: "unPresence",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (l.calibrator.isStringOrNumber(e)) {
              l.calibrator.isNumber(e) && (e = e.toString());
              var i = {
                groupId: e
              };
              t.emitRocket(c.EmitType.unsubscribeGroupPresence, i, function () {
                n({
                  code: 200,
                  content: "ok"
                });
              }, function (e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to unsubscribe presence"
                });
              }, u.SocketTimeout.commonRequestSingle, u.SocketTimeout.commonRequestTotal);
            } else o({
              code: 400,
              content: "TypeError: groupId require string or number."
            });
          });
        }
      }, {
        key: "emitRocket",
        value: function value(e, t, n, o, i, r) {
          var u = new s["default"]({
            name: e,
            params: t,
            singleTimeout: i,
            totalTimeout: r,
            permission: a["default"].WRITE,
            success: n,
            fail: o
          });

          this.im._goEasySocket.emit(u);
        }
      }, {
        key: "newMessageReceived",
        value: function value(e) {
          var t = this,
              n = null;
          e.c && (n = JSON.parse(e.c)), n && n.events && n.events.map(function (e) {
            var o = e.userData ? JSON.parse(e.userData) : {},
                i = {
              time: e.time,
              action: e.action,
              groupOnlineCount: n.userAmount,
              groupId: n.groupId,
              id: e.userId,
              data: o
            };

            t.im._event.notify(f.ImEventType.GROUP_PRESENCE, i);
          });
        }
      }]), e;
    }();

    t["default"] = h;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = p(n(6)),
        i = p(n(0)),
        r = p(n(1)),
        s = p(n(10)),
        a = p(n(8)),
        u = n(32),
        c = n(11),
        l = n(2),
        f = n(29),
        d = p(n(41));

    function p(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var h = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.im = t, this.im._goEasySocket.addMessageObserver(d["default"].userPresence, this.newMessageReceived.bind(this));
      }

      return (0, r["default"])(e, [{
        key: "presence",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (Array.isArray(e) && 0 != e.length) {
              for (var i = 0; i < e.length; i++) {
                if (!l.calibrator.isStringOrNumber(e[i])) return void o({
                  code: 400,
                  content: "TypeError: userIds item require string or number."
                });
                if (l.calibrator.isNumber(e[i]) && (e[i] = e[i].toString()), 0 == e[i].length) return void o({
                  code: 400,
                  content: "TypeError: userIds has empty item."
                });
              }

              var r = {
                userIds: e
              };
              t.emitRocket(c.EmitType.subscribeUserPresence, r, function () {
                n({
                  code: 200,
                  content: "ok"
                });
              }, function (e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to subscribe group message"
                });
              }, u.SocketTimeout.commonInfiniteSingle, u.SocketTimeout.commonInfiniteTotal);
            } else o({
              code: 400,
              content: "TypeError: userIds require array."
            });
          });
        }
      }, {
        key: "unPresence",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (l.calibrator.isStringOrNumber(e)) {
              l.calibrator.isNumber(e) && (e = e.toString());
              var i = {
                userId: e
              };
              t.emitRocket(c.EmitType.unsubscribeUserPresence, i, function () {
                n({
                  code: 200,
                  content: "ok"
                });
              }, function (e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to unsubscribe presence"
                });
              }, u.SocketTimeout.commonRequestSingle, u.SocketTimeout.commonRequestTotal);
            } else o({
              code: 400,
              content: "TypeError: id require string or number."
            });
          });
        }
      }, {
        key: "emitRocket",
        value: function value(e, t, n, o, i, r) {
          var u = new s["default"]({
            name: e,
            params: t,
            singleTimeout: i,
            totalTimeout: r,
            permission: a["default"].WRITE,
            success: n,
            fail: o
          });

          this.im._goEasySocket.emit(u);
        }
      }, {
        key: "newMessageReceived",
        value: function value(e) {
          var t = this,
              n = [];
          e.c && (n = JSON.parse(e.c).events || []), n.map(function (e) {
            var n = e.userData ? JSON.parse(e.userData) : {},
                o = {
              time: e.time,
              action: e.action,
              id: e.userId,
              data: n
            };

            t.im._event.notify(f.ImEventType.USER_PRESENCE, o);
          });
        }
      }]), e;
    }();

    t["default"] = h;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(6)),
        i = f(n(0)),
        r = f(n(1)),
        s = n(11),
        a = f(n(10)),
        u = f(n(8)),
        c = n(15),
        l = n(2);

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.im = t;
      }

      return (0, r["default"])(e, [{
        key: "hereNow",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (e.userIds && Array.isArray(e.userIds) && 0 != e.userIds.length) {
              for (var i = 0; i < e.userIds.length; i++) {
                if (!l.calibrator.isStringOrNumber(e.userIds[i])) return void o({
                  code: 400,
                  content: "TypeError: userIds item require string or number."
                });
                if (l.calibrator.isNumber(e.userIds[i]) && (e.userIds[i] = e.userIds[i].toString()), 0 == e.userIds[i].length) return void o({
                  code: 400,
                  content: "TypeError: userIds has empty item."
                });
              }

              var r = new a["default"]({
                name: s.EmitType.imHereNow,
                params: e,
                permission: u["default"].READ,
                singleTimeout: c.SocketTimeout.commonQuerySingle,
                totalTimeout: c.SocketTimeout.commonQueryTotal,
                fail: function fail(e) {
                  o({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to query online users"
                  });
                },
                success: function success(e) {
                  if (200 == e.code) {
                    var t = e.content;
                    e.content = t.map(function (e) {
                      var t = e.userData ? JSON.parse(e.userData) : {};
                      return {
                        id: e.userId,
                        data: t
                      };
                    }), n(e);
                  } else o(e);
                }
              });

              t.im._goEasySocket.emit(r);
            } else o({
              code: 400,
              content: "TypeError: userIds require array."
            });
          });
        }
      }]), e;
    }();

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(6)),
        i = f(n(0)),
        r = f(n(1)),
        s = n(11),
        a = f(n(10)),
        u = f(n(8)),
        c = n(15),
        l = n(17);

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.im = t;
      }

      return (0, r["default"])(e, [{
        key: "hereNow",
        value: function value(e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (l.calibrator.isStringOrNumber(e)) {
              l.calibrator.isNumber(e) && (e = e.toString());
              var i = new a["default"]({
                name: s.EmitType.imGroupHereNow,
                params: {
                  groupId: e
                },
                permission: u["default"].READ,
                singleTimeout: c.SocketTimeout.commonQuerySingle,
                totalTimeout: c.SocketTimeout.commonQueryTotal,
                fail: function fail(e) {
                  o({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to query online group users"
                  });
                },
                success: function success(e) {
                  if (200 == e.code) {
                    var t = e.content;
                    e.content = t.map(function (e) {
                      var t = e.userData ? JSON.parse(e.userData) : {};
                      return {
                        id: e.userId,
                        data: t
                      };
                    }), n(e);
                  } else o(e);
                }
              });

              t.im._goEasySocket.emit(i);
            } else o({
              code: 400,
              content: "TypeError: groupId require string or number."
            });
          });
        }
      }]), e;
    }();

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = s(n(0)),
        i = s(n(1)),
        r = s(n(41));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var a = function () {
      function e(t) {
        (0, o["default"])(this, e), this.im = null, this.observers = [], this.im = t, t._goEasySocket.addMessageObserver(r["default"].imMessage, this.newNewMessageReceived.bind(this));
      }

      return (0, i["default"])(e, [{
        key: "newNewMessageReceived",
        value: function value(e) {
          this.sendAck(e), this.notify(e);
        }
      }, {
        key: "addIMMessageObserver",
        value: function value(e) {
          this.observers.push(e);
        }
      }, {
        key: "sendAck",
        value: function value(e) {
          this.im._goEasySocket.sendAck("imAck", {
            publishGuid: e.i
          });
        }
      }, {
        key: "notify",
        value: function value(e) {
          for (var t = 0; t < this.observers.length; t++) {
            this.observers[t](e);
          }
        }
      }]), e;
    }();

    t["default"] = a;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(72)),
        i = d(n(6)),
        r = d(n(0)),
        s = d(n(1)),
        a = d(n(10)),
        u = n(11),
        c = d(n(8)),
        l = n(15),
        f = n(25);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var p = function () {
      function e(t, n) {
        (0, r["default"])(this, e), this.im = null, this.userData = {}, this.groupData = {}, this.im = t, this.putUserData(n.id, n.data);
      }

      return (0, s["default"])(e, [{
        key: "putData",
        value: function value(e, t, n) {
          n || (n = {}), e == f.ConversationType.PRIVATE ? this.userData[t] = n : this.groupData[t] = n;
        }
      }, {
        key: "putUserData",
        value: function value(e, t) {
          this.userData[e] = t;
        }
      }, {
        key: "putGroupData",
        value: function value(e, t) {
          this.groupData[e] = t;
        }
      }, {
        key: "loadData",
        value: function value(e, t) {
          var n = this;
          return new i["default"](function (i, r) {
            var s = void 0;
            if ((s = f.ConversationType.PRIVATE === t ? n.userData : n.groupData)[e] && 0 != (0, o["default"])(s[e]).length) i(s[e]);else {
              var d = {
                targetId: e,
                type: t
              },
                  p = new a["default"]({
                name: u.EmitType.imData,
                params: d,
                permission: c["default"].READ,
                singleTimeout: l.SocketTimeout.commonQuerySingle,
                totalTimeout: l.SocketTimeout.commonQueryTotal,
                success: function success(t) {
                  t.content ? s[e] = JSON.parse(t.content) : s[e] = {}, i(s[e]);
                },
                fail: function fail(e) {
                  r(e);
                }
              });

              n.im._goEasySocket.emit(p);
            }
          });
        }
      }]), e;
    }();

    t["default"] = p;
  }, function (e, t, n) {
    n(235), e.exports = n(7).Object.keys;
  }, function (e, t, n) {
    var o = n(40),
        i = n(31);
    n(66)("keys", function () {
      return function (e) {
        return i(o(e));
      };
    });
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o = C(n(6)),
        i = C(n(33)),
        r = C(n(3)),
        s = C(n(0)),
        a = C(n(1)),
        u = C(n(4)),
        c = C(n(12)),
        l = C(n(5)),
        f = C(n(110)),
        d = n(11),
        p = C(n(273)),
        h = C(n(10)),
        y = C(n(8)),
        v = C(n(28)),
        m = C(n(274)),
        g = n(2),
        b = n(119),
        _ = n(15),
        k = C(n(275));

    function C(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var w = function (e) {
      function t(e) {
        (0, s["default"])(this, t);
        var n = (0, u["default"])(this, (t.__proto__ || (0, r["default"])(t)).call(this));
        return n.ioSocket = null, n.sid = null, n.appKey = null, n.userId = null, n.userData = null, n.otp = null, n.artifactVersion = "0.0.0", n.uri = null, n.ioOpts = null, n.allowNotification = !1, n.reconnectingTimes = 0, n.messageObservers = {}, n.connectFailedObservers = [], n.connectingObservers = [], n.expiredReconnectedObservers = [], n.ioSocket = new p["default"]({
          onDisconnected: n.onIoDisconnected.bind(n),
          onReconnecting: n.onIoReconnecting.bind(n)
        }), n.ioSocket.addConnectedObserver(n.onIoReconnected.bind(n)), n.appKey = e.appkey, n.userId = e.id, n.userData = e.data, n.otp = e.otp || null, n.ioOpts = e.opts, n.uri = e.uri, n.allowNotification = e.allowNotification, n.artifactVersion = e.artifactVersion, n.modules = e.modules, n.addConnectedObserver(e.onSuccess), n.addConnectingObserver(e.onProgress), n.addConnectFailedObserver(e.onFailed), n;
      }

      return (0, l["default"])(t, e), (0, a["default"])(t, [{
        key: "onIoReconnected",
        value: function value() {
          this.status === v["default"].RECONNECTING && this.authorize();
        }
      }, {
        key: "emit",
        value: function value(e) {
          (0, c["default"])(t.prototype.__proto__ || (0, r["default"])(t.prototype), "emit", this).call(this, e);
        }
      }, {
        key: "doEmit",
        value: function value(e, t, n) {
          b.uniApp.overrideUniShowHideMethods(), t.sid = this.sid, this.ioSocket.doEmit(e, t, n);
        }
      }, {
        key: "sendAck",
        value: function value(e, t) {
          this.ioSocket.io.emit(e, t);
        }
      }, {
        key: "connect",
        value: function value(e) {
          var n = this;
          ((0, c["default"])(t.prototype.__proto__ || (0, r["default"])(t.prototype), "connect", this).call(this), this.onConnecting(this.reconnectingTimes), this.ioSocket.connect({
            uri: this.uri,
            opts: this.ioOpts
          }), this.notifier = new k["default"](this), this.notifier.support()) ? this.notifier.getRegId().then(function (e) {
            n.regId = e, n.authorize();
          })["catch"](function (e) {
            console.error("注册厂商通道失败：" + (0, i["default"])(e)), n.authorize();
          }) : this.authorize();
        }
      }, {
        key: "disconnect",
        value: function value() {
          var e = this;
          return new o["default"](function (t, n) {
            var o = function o() {
              e.status = v["default"].DISCONNECTED, e.ioSocket.disconnect(), t();
            };

            if (e.allowNotification) {
              var i = new h["default"]({
                name: d.EmitType.manualDisconnect,
                params: {},
                permission: y["default"].READ,
                singleTimeout: _.SocketTimeout.commonInfiniteSingle,
                totalTimeout: _.SocketTimeout.commonInfiniteTotal,
                fail: function fail(e) {
                  n(e);
                },
                success: o
              });
              e.emit(i);
            } else o();
          });
        }
      }, {
        key: "authorize",
        value: function value() {
          var e = {
            appkey: this.appKey,
            userId: this.userId,
            userData: (0, i["default"])(this.userData),
            otp: this.otp,
            artifactVersion: this.artifactVersion,
            sid: this.sid,
            allowNT: this.allowNotification,
            regId: this.regId,
            modules: this.modules
          };
          (0, i["default"])(e);
          var t = new h["default"]({
            name: d.EmitType.authorize,
            params: e,
            permission: y["default"].NONE,
            singleTimeout: _.SocketTimeout.commonInfiniteSingle,
            totalTimeout: _.SocketTimeout.commonInfiniteTotal,
            success: this.onAuthorizeSuccess.bind(this),
            fail: this.onAuthorizeFailed.bind(this)
          });
          this.ioSocket.emit(t);
        }
      }, {
        key: "onConnecting",
        value: function value() {
          this.notify(this.connectingObservers, this.reconnectingTimes);
        }
      }, {
        key: "onIoReconnecting",
        value: function value() {
          b.uniApp.overrideUniShowHideMethods(), this.reconnectingTimes++, this.status == v["default"].CONNECTED || this.status == v["default"].EXPIRED_RECONNECTED || this.status == v["default"].RECONNECTING ? this.status = v["default"].RECONNECTING : this.status = v["default"].CONNECTING, this.onConnecting();
        }
      }, {
        key: "onIoDisconnected",
        value: function value() {
          this.status == v["default"].DISCONNECTING && (this.status = v["default"].DISCONNECTED, this.notify(this.disconnectedObservers));
        }
      }, {
        key: "onAuthorizeSuccess",
        value: function value(e) {
          this.status === v["default"].RECONNECTING ? this.sid !== e.sid ? (this.status = v["default"].EXPIRED_RECONNECTED, this.notify(this.expiredReconnectedObservers)) : this.status = v["default"].RECONNECTED : (this.status = v["default"].CONNECTED, this.sid = e.sid);
          e.enablePublish && (this.permissions.find(function (e) {
            return e == y["default"].WRITE;
          }) || this.permissions.push(y["default"].WRITE)), e.enableSubscribe && (this.permissions.find(function (e) {
            return e == y["default"].READ;
          }) || this.permissions.push(y["default"].READ)), this.reconnectingTimes = 0, this.notify(this.connectedObservers);
        }
      }, {
        key: "onAuthorizeFailed",
        value: function value(e) {
          this.ioSocket.disconnect(), this.status = v["default"].CONNECT_FAILED;
          var t = {
            code: e.resultCode || 408,
            content: e.content || "Host unreachable or timeout"
          };
          this.notify(this.connectFailedObservers, t);
        }
      }, {
        key: "addConnectingObserver",
        value: function value(e) {
          g.calibrator.isFunction(e) && this.connectingObservers.push(e);
        }
      }, {
        key: "addConnectFailedObserver",
        value: function value(e) {
          g.calibrator.isFunction(e) && this.connectFailedObservers.push(e);
        }
      }, {
        key: "addExpiredReconnectedObserver",
        value: function value(e) {
          g.calibrator.isFunction(e) && this.expiredReconnectedObservers.push(e);
        }
      }, {
        key: "addMessageObserver",
        value: function value(e, t) {
          var n = this;
          this.ioSocket.io.on(e, function (t) {
            n.notifyMessageObservers(e, t);
          }), this.messageObservers[e] || (this.messageObservers[e] = []), this.messageObservers[e].push(new m["default"](t));
        }
      }, {
        key: "notifyMessageObservers",
        value: function value(e, t) {
          for (var n = this.messageObservers[e], o = 0; o < n.length; o++) {
            n[o].onMessage(e, t);
          }
        }
      }]), t;
    }(f["default"]);

    t["default"] = w;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = s(n(0)),
        i = s(n(1)),
        r = s(n(28));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var a = function () {
      function e(t) {
        (0, o["default"])(this, e), this.socket = null, this.socket = t;
      }

      return (0, i["default"])(e, [{
        key: "emit",
        value: function value(e) {
          this.socket.status !== r["default"].CONNECT_FAILED && this.socket.status !== r["default"].DISCONNECTED ? (e.start(), this.doEmit(e)) : e.fail({
            resultCode: "409",
            content: "Please connect first"
          });
        }
      }, {
        key: "doEmit",
        value: function value(e) {
          var t = this;
          if (e.isTimeout()) e.fail({
            resultCode: 408,
            content: "Host unreachable or timeout"
          });else if (this.socket.status !== r["default"].CONNECT_FAILED) {
            if (this.authenticated()) {
              if (this.hasPermission(e)) {
                if (this.socket.status === r["default"].CONNECTED || this.socket.status === r["default"].RECONNECTED || this.socket.status === r["default"].EXPIRED_RECONNECTED) {
                  if (!e.complete) {
                    var n = setTimeout(function () {
                      t.doEmit(e);
                    }, e.singleTimeout);
                    this.socket.doEmit(e.name, e.params, function (t) {
                      clearTimeout(n), 200 === t.resultCode || 200 == t.code ? e.success(t) : e.fail(t);
                    }), e.retried++;
                  }
                } else setTimeout(function () {
                  t.doEmit(e);
                }, 500);
              } else e.fail({
                resultCode: 401,
                content: "No permission"
              });
            } else setTimeout(function () {
              t.doEmit(e);
            }, 500);
          } else e.fail({
            resultCode: 408,
            content: "Failed to connect GoEasy."
          });
        }
      }, {
        key: "hasPermission",
        value: function value(e) {
          return !!this.socket.permissions.find(function (t) {
            return t === e.permission;
          });
        }
      }, {
        key: "authenticated",
        value: function value() {
          return this.socket.status === r["default"].CONNECTED || this.socket.status === r["default"].RECONNECTING || this.socket.status === r["default"].RECONNECTED || this.socket.status === r["default"].EXPIRED_RECONNECTED;
        }
      }]), e;
    }();

    t["default"] = a;
  }, function (e, t, n) {
    "use strict";

    var o,
        i = n(20),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };
    var s = n(239),
        a = n(74),
        u = n(111);
    n(53)("socket.io-client");
    e.exports = t = l;
    var c = t.managers = {};

    function l(e, t) {
      "object" === (void 0 === e ? "undefined" : (0, r["default"])(e)) && (t = e, e = undefined), t = t || {};
      var n,
          o = s(e),
          i = o.source,
          a = o.id,
          l = o.path,
          f = c[a] && l in c[a].nsps;
      return t.forceNew || t["force new connection"] || !1 === t.multiplex || f ? n = u(i, t) : (c[a] || (c[a] = u(i, t)), n = c[a]), o.query && !t.query && (t.query = o.query), n.socket(o.path, t);
    }

    t.protocol = a.protocol, t.connect = l, t.Manager = n(111), t.Socket = n(115);
  }, function (e, t, n) {
    "use strict";

    var o = n(240);
    n(53)("socket.io-client:url");

    e.exports = function (e, t) {
      var n = e;
      t = t || "undefined" != typeof location && location, null == e && (e = t.protocol + "//" + t.host);
      "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e), /^(https?|wss?):\/\//.test(e) || (e = void 0 !== t ? t.protocol + "//" + e : "https://" + e), n = o(e));
      n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443"));
      n.path = n.path || "/";
      var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
      return n.id = n.protocol + "://" + i + ":" + n.port, n.href = n.protocol + "://" + i + (t && t.port === n.port ? "" : ":" + n.port), n;
    };
  }, function (e, t) {
    var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

    e.exports = function (e) {
      var t = e,
          i = e.indexOf("["),
          r = e.indexOf("]");
      -1 != i && -1 != r && (e = e.substring(0, i) + e.substring(i, r).replace(/:/g, ";") + e.substring(r, e.length));

      for (var s = n.exec(e || ""), a = {}, u = 14; u--;) {
        a[o[u]] = s[u] || "";
      }

      return -1 != i && -1 != r && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;
    };
  }, function (e, t, n) {
    function o(e) {
      var n;

      function o() {
        if (o.enabled) {
          var e = o,
              i = +new Date(),
              r = i - (n || i);
          e.diff = r, e.prev = n, e.curr = i, n = i;

          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) {
            s[a] = arguments[a];
          }

          s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var u = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, o) {
            if ("%%" === n) return n;
            u++;
            var i = t.formatters[o];

            if ("function" == typeof i) {
              var r = s[u];
              n = i.call(e, r), s.splice(u, 1), u--;
            }

            return n;
          }), t.formatArgs.call(e, s), (o.log || t.log || console.log.bind(console)).apply(e, s);
        }
      }

      return o.namespace = e, o.enabled = t.enabled(e), o.useColors = t.useColors(), o.color = function (e) {
        var n,
            o = 0;

        for (n in e) {
          o = (o << 5) - o + e.charCodeAt(n), o |= 0;
        }

        return t.colors[Math.abs(o) % t.colors.length];
      }(e), o.destroy = i, "function" == typeof t.init && t.init(o), t.instances.push(o), o;
    }

    function i() {
      var e = t.instances.indexOf(this);
      return -1 !== e && (t.instances.splice(e, 1), !0);
    }

    (t = e.exports = o.debug = o["default"] = o).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e;
    }, t.disable = function () {
      t.enable("");
    }, t.enable = function (e) {
      var n;
      t.save(e), t.names = [], t.skips = [];
      var o = ("string" == typeof e ? e : "").split(/[\s,]+/),
          i = o.length;

      for (n = 0; n < i; n++) {
        o[n] && ("-" === (e = o[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
      }

      for (n = 0; n < t.instances.length; n++) {
        var r = t.instances[n];
        r.enabled = t.enabled(r.namespace);
      }
    }, t.enabled = function (e) {
      if ("*" === e[e.length - 1]) return !0;
      var n, o;

      for (n = 0, o = t.skips.length; n < o; n++) {
        if (t.skips[n].test(e)) return !1;
      }

      for (n = 0, o = t.names.length; n < o; n++) {
        if (t.names[n].test(e)) return !0;
      }

      return !1;
    }, t.humanize = n(242), t.instances = [], t.names = [], t.skips = [], t.formatters = {};
  }, function (e, t) {
    var n = 1e3,
        o = 60 * n,
        i = 60 * o,
        r = 24 * i,
        s = 365.25 * r;

    function a(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
    }

    e.exports = function (e, t) {
      t = t || {};
      var u,
          c = typeof e;
      if ("string" === c && e.length > 0) return function (e) {
        if ((e = String(e)).length > 100) return;
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (!t) return;
        var a = parseFloat(t[1]);

        switch ((t[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return a * s;

          case "days":
          case "day":
          case "d":
            return a * r;

          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return a * i;

          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return a * o;

          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return a * n;

          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return a;

          default:
            return undefined;
        }
      }(e);
      if ("number" === c && !1 === isNaN(e)) return t["long"] ? a(u = e, r, "day") || a(u, i, "hour") || a(u, o, "minute") || a(u, n, "second") || u + " ms" : function (e) {
        if (e >= r) return Math.round(e / r) + "d";
        if (e >= i) return Math.round(e / i) + "h";
        if (e >= o) return Math.round(e / o) + "m";
        if (e >= n) return Math.round(e / n) + "s";
        return e + "ms";
      }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
  }, function (e, t, n) {
    (function (o) {
      function i() {
        var e;

        try {
          e = t.storage.debug;
        } catch (n) {}

        return !e && void 0 !== o && "env" in o && (e = o.env.DEBUG), e;
      }

      (t = e.exports = n(244)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var o = "color: " + this.color;
        e.splice(1, 0, o, "color: inherit");
        var i = 0,
            r = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && "%c" === e && (r = ++i);
        }), e.splice(r, 0, o);
      }, t.save = function (e) {
        try {
          null == e ? t.storage.removeItem("debug") : t.storage.debug = e;
        } catch (n) {}
      }, t.load = i, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (e) {}
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      }, t.enable(i());
    }).call(t, n(73));
  }, function (e, t, n) {
    function o(e) {
      var n;

      function o() {
        if (o.enabled) {
          var e = o,
              i = +new Date(),
              r = i - (n || i);
          e.diff = r, e.prev = n, e.curr = i, n = i;

          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) {
            s[a] = arguments[a];
          }

          s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var u = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, o) {
            if ("%%" === n) return n;
            u++;
            var i = t.formatters[o];

            if ("function" == typeof i) {
              var r = s[u];
              n = i.call(e, r), s.splice(u, 1), u--;
            }

            return n;
          }), t.formatArgs.call(e, s), (o.log || t.log || console.log.bind(console)).apply(e, s);
        }
      }

      return o.namespace = e, o.enabled = t.enabled(e), o.useColors = t.useColors(), o.color = function (e) {
        var n,
            o = 0;

        for (n in e) {
          o = (o << 5) - o + e.charCodeAt(n), o |= 0;
        }

        return t.colors[Math.abs(o) % t.colors.length];
      }(e), o.destroy = i, "function" == typeof t.init && t.init(o), t.instances.push(o), o;
    }

    function i() {
      var e = t.instances.indexOf(this);
      return -1 !== e && (t.instances.splice(e, 1), !0);
    }

    (t = e.exports = o.debug = o["default"] = o).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e;
    }, t.disable = function () {
      t.enable("");
    }, t.enable = function (e) {
      var n;
      t.save(e), t.names = [], t.skips = [];
      var o = ("string" == typeof e ? e : "").split(/[\s,]+/),
          i = o.length;

      for (n = 0; n < i; n++) {
        o[n] && ("-" === (e = o[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
      }

      for (n = 0; n < t.instances.length; n++) {
        var r = t.instances[n];
        r.enabled = t.enabled(r.namespace);
      }
    }, t.enabled = function (e) {
      if ("*" === e[e.length - 1]) return !0;
      var n, o;

      for (n = 0, o = t.skips.length; n < o; n++) {
        if (t.skips[n].test(e)) return !1;
      }

      for (n = 0, o = t.names.length; n < o; n++) {
        if (t.names[n].test(e)) return !0;
      }

      return !1;
    }, t.humanize = n(245), t.instances = [], t.names = [], t.skips = [], t.formatters = {};
  }, function (e, t) {
    var n = 1e3,
        o = 60 * n,
        i = 60 * o,
        r = 24 * i,
        s = 365.25 * r;

    function a(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
    }

    e.exports = function (e, t) {
      t = t || {};
      var u,
          c = typeof e;
      if ("string" === c && e.length > 0) return function (e) {
        if ((e = String(e)).length > 100) return;
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (!t) return;
        var a = parseFloat(t[1]);

        switch ((t[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return a * s;

          case "days":
          case "day":
          case "d":
            return a * r;

          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return a * i;

          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return a * o;

          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return a * n;

          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return a;

          default:
            return undefined;
        }
      }(e);
      if ("number" === c && !1 === isNaN(e)) return t["long"] ? a(u = e, r, "day") || a(u, i, "hour") || a(u, o, "minute") || a(u, n, "second") || u + " ms" : function (e) {
        if (e >= r) return Math.round(e / r) + "d";
        if (e >= i) return Math.round(e / i) + "h";
        if (e >= o) return Math.round(e / o) + "m";
        if (e >= n) return Math.round(e / n) + "s";
        return e + "ms";
      }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
  }, function (e, t, n) {
    function o(e) {
      if (e) return function (e) {
        for (var t in o.prototype) {
          e[t] = o.prototype[t];
        }

        return e;
      }(e);
    }

    e.exports = o, o.prototype.on = o.prototype.addEventListener = function (e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
    }, o.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments);
      }

      return n.fn = t, this.on(e, n), this;
    }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n,
          o = this._callbacks["$" + e];
      if (!o) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + e], this;

      for (var i = 0; i < o.length; i++) {
        if ((n = o[i]) === t || n.fn === t) {
          o.splice(i, 1);
          break;
        }
      }

      return this;
    }, o.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};
      var t = [].slice.call(arguments, 1),
          n = this._callbacks["$" + e];
      if (n) for (var o = 0, i = (n = n.slice(0)).length; o < i; ++o) {
        n[o].apply(this, t);
      }
      return this;
    }, o.prototype.listeners = function (e) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
    }, o.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length;
    };
  }, function (e, t) {
    var n = {}.toString;

    e.exports = Array.isArray || function (e) {
      return "[object Array]" == n.call(e);
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = n(249), e.exports.parser = n(34);
  }, function (e, t, n) {
    "use strict";

    var o = r(n(72)),
        i = r(n(20));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var s = n(112),
        a = n(113),
        u = (n(78)("engine.io-client:socket"), n(265)),
        c = n(34),
        l = n(266),
        f = n(76);

    function d(e, t) {
      if (!(this instanceof d)) return new d(e, t);
      t = t || {}, e && "object" === (void 0 === e ? "undefined" : (0, i["default"])(e)) && (t = e, e = null), e ? (e = l(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = l(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = f.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = t.rejectUnauthorized === undefined || t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t.extraHeaders && (0, o["default"])(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
    }

    e.exports = d, d.priorWebsocketSuccess = !1, a(d.prototype), d.protocol = c.protocol, d.Socket = d, d.Transport = n(75), d.transports = n(112), d.parser = n(34), d.prototype.createTransport = function (e) {
      var t = function (e) {
        var t = {};

        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }

        return t;
      }(this.query);

      t.EIO = c.protocol, t.transport = e;
      var n = this.transportOptions[e] || {};
      return this.id && (t.sid = this.id), new s[e]({
        query: t,
        socket: this,
        agent: n.agent || this.agent,
        hostname: n.hostname || this.hostname,
        port: n.port || this.port,
        secure: n.secure || this.secure,
        path: n.path || this.path,
        forceJSONP: n.forceJSONP || this.forceJSONP,
        jsonp: n.jsonp || this.jsonp,
        forceBase64: n.forceBase64 || this.forceBase64,
        enablesXDR: n.enablesXDR || this.enablesXDR,
        timestampRequests: n.timestampRequests || this.timestampRequests,
        timestampParam: n.timestampParam || this.timestampParam,
        policyPort: n.policyPort || this.policyPort,
        pfx: n.pfx || this.pfx,
        key: n.key || this.key,
        passphrase: n.passphrase || this.passphrase,
        cert: n.cert || this.cert,
        ca: n.ca || this.ca,
        ciphers: n.ciphers || this.ciphers,
        rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
        perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
        extraHeaders: n.extraHeaders || this.extraHeaders,
        forceNode: n.forceNode || this.forceNode,
        localAddress: n.localAddress || this.localAddress,
        requestTimeout: n.requestTimeout || this.requestTimeout,
        protocols: n.protocols || void 0,
        isReactNative: this.isReactNative
      });
    }, d.prototype.open = function () {
      var e;
      if (this.rememberUpgrade && d.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";else {
        if (0 === this.transports.length) {
          var t = this;
          return void setTimeout(function () {
            t.emit("error", "No transports available");
          }, 0);
        }

        e = this.transports[0];
      }
      this.readyState = "opening";

      try {
        e = this.createTransport(e);
      } catch (n) {
        return this.transports.shift(), void this.open();
      }

      e.open(), this.setTransport(e);
    }, d.prototype.setTransport = function (e) {
      e.name;
      var t = this;
      this.transport && (this.transport.name, this.transport.removeAllListeners()), this.transport = e, e.on("drain", function () {
        t.onDrain();
      }).on("packet", function (e) {
        t.onPacket(e);
      }).on("error", function (e) {
        t.onError(e);
      }).on("close", function () {
        t.onClose("transport close");
      });
    }, d.prototype.probe = function (e) {
      var t = this.createTransport(e, {
        probe: 1
      }),
          n = !1,
          o = this;

      function i() {
        if (o.onlyBinaryUpgrades) {
          var e = !this.supportsBinary && o.transport.supportsBinary;
          n = n || e;
        }

        n || (t.send([{
          type: "ping",
          data: "probe"
        }]), t.once("packet", function (e) {
          if (!n) if ("pong" === e.type && "probe" === e.data) {
            if (o.upgrading = !0, o.emit("upgrading", t), !t) return;
            d.priorWebsocketSuccess = "websocket" === t.name, o.transport.name, o.transport.pause(function () {
              n || "closed" !== o.readyState && (l(), o.setTransport(t), t.send([{
                type: "upgrade"
              }]), o.emit("upgrade", t), t = null, o.upgrading = !1, o.flush());
            });
          } else {
            var i = new Error("probe error");
            i.transport = t.name, o.emit("upgradeError", i);
          }
        }));
      }

      function r() {
        n || (n = !0, l(), t.close(), t = null);
      }

      function s(e) {
        var n = new Error("probe error: " + e);
        n.transport = t.name, r(), o.emit("upgradeError", n);
      }

      function a() {
        s("transport closed");
      }

      function u() {
        s("socket closed");
      }

      function c(e) {
        t && e.name !== t.name && (e.name, t.name, r());
      }

      function l() {
        t.removeListener("open", i), t.removeListener("error", s), t.removeListener("close", a), o.removeListener("close", u), o.removeListener("upgrading", c);
      }

      d.priorWebsocketSuccess = !1, t.once("open", i), t.once("error", s), t.once("close", a), this.once("close", u), this.once("upgrading", c), t.open();
    }, d.prototype.onOpen = function () {
      if (this.readyState = "open", d.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) for (var e = 0, t = this.upgrades.length; e < t; e++) {
        this.probe(this.upgrades[e]);
      }
    }, d.prototype.onPacket = function (e) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (e.type, e.data, this.emit("packet", e), this.emit("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;

        case "pong":
          this.setPing(), this.emit("pong");
          break;

        case "error":
          var t = new Error("server error");
          t.code = e.data, this.onError(t);
          break;

        case "message":
          this.emit("data", e.data), this.emit("message", e.data);
      } else this.readyState;
    }, d.prototype.onHandshake = function (e) {
      this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
    }, d.prototype.onHeartbeat = function (e) {
      clearTimeout(this.pingTimeoutTimer);
      var t = this;
      t.pingTimeoutTimer = setTimeout(function () {
        "closed" !== t.readyState && t.onClose("ping timeout");
      }, e || t.pingInterval + t.pingTimeout);
    }, d.prototype.setPing = function () {
      var e = this;
      clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function () {
        e.pingTimeout, e.ping(), e.onHeartbeat(e.pingTimeout);
      }, e.pingInterval);
    }, d.prototype.ping = function () {
      var e = this;
      this.sendPacket("ping", function () {
        e.emit("ping");
      });
    }, d.prototype.onDrain = function () {
      this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
    }, d.prototype.flush = function () {
      "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.writeBuffer.length, this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
    }, d.prototype.write = d.prototype.send = function (e, t, n) {
      return this.sendPacket("message", e, t, n), this;
    }, d.prototype.sendPacket = function (e, t, n, o) {
      if ("function" == typeof t && (o = t, t = undefined), "function" == typeof n && (o = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
        (n = n || {}).compress = !1 !== n.compress;
        var i = {
          type: e,
          data: t,
          options: n
        };
        this.emit("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush();
      }
    }, d.prototype.close = function () {
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        var e = this;
        this.writeBuffer.length ? this.once("drain", function () {
          this.upgrading ? o() : t();
        }) : this.upgrading ? o() : t();
      }

      function t() {
        e.onClose("forced close"), e.transport.close();
      }

      function n() {
        e.removeListener("upgrade", n), e.removeListener("upgradeError", n), t();
      }

      function o() {
        e.once("upgrade", n), e.once("upgradeError", n);
      }

      return this;
    }, d.prototype.onError = function (e) {
      d.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e);
    }, d.prototype.onClose = function (e, t) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0;
      }
    }, d.prototype.filterUpgrades = function (e) {
      for (var t = [], n = 0, o = e.length; n < o; n++) {
        ~u(this.transports, e[n]) && t.push(e[n]);
      }

      return t;
    };
  }, function (e, t, n) {
    "use strict";

    (function (t) {
      var o = n(252),
          i = n(77);
      e.exports = l;
      var r,
          s = /\n/g,
          a = /\\n/g;

      function u() {}

      function c() {
        return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {};
      }

      function l(e) {
        if (o.call(this, e), this.query = this.query || {}, !r) {
          var t = c();
          r = t.___eio = t.___eio || [];
        }

        this.index = r.length;
        var n = this;
        r.push(function (e) {
          n.onData(e);
        }), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", function () {
          n.script && (n.script.onerror = u);
        }, !1);
      }

      i(l, o), l.prototype.supportsBinary = !1, l.prototype.doClose = function () {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o.prototype.doClose.call(this);
      }, l.prototype.doPoll = function () {
        var e = this,
            t = document.createElement("script");
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function (t) {
          e.onError("jsonp poll error", t);
        };
        var n = document.getElementsByTagName("script")[0];
        n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
          var e = document.createElement("iframe");
          document.body.appendChild(e), document.body.removeChild(e);
        }, 100);
      }, l.prototype.doWrite = function (e, t) {
        var n = this;

        if (!this.form) {
          var o,
              i = document.createElement("form"),
              r = document.createElement("textarea"),
              u = this.iframeId = "eio_iframe_" + this.index;
          i.className = "socketio", i.style.position = "absolute", i.style.top = "-1000px", i.style.left = "-1000px", i.target = u, i.method = "POST", i.setAttribute("accept-charset", "utf-8"), r.name = "d", i.appendChild(r), document.body.appendChild(i), this.form = i, this.area = r;
        }

        function c() {
          l(), t();
        }

        function l() {
          if (n.iframe) try {
            n.form.removeChild(n.iframe);
          } catch (t) {
            n.onError("jsonp polling iframe removal error", t);
          }

          try {
            var e = '<iframe src="javascript:0" name="' + n.iframeId + '">';
            o = document.createElement(e);
          } catch (t) {
            (o = document.createElement("iframe")).name = n.iframeId, o.src = "javascript:0";
          }

          o.id = n.iframeId, n.form.appendChild(o), n.iframe = o;
        }

        this.form.action = this.uri(), l(), e = e.replace(a, "\\\n"), this.area.value = e.replace(s, "\\n");

        try {
          this.form.submit();
        } catch (f) {}

        this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
          "complete" === n.iframe.readyState && c();
        } : this.iframe.onload = c;
      };
    }).call(t, n(251));
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (o) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    var o = n(75),
        i = n(76),
        r = n(34),
        s = n(77),
        a = n(114);
    n(78)("engine.io-client:polling");
    e.exports = c;
    var u = null != new (n(261))({
      xdomain: !1
    }).responseType;

    function c(e) {
      var t = e && e.forceBase64;
      u && !t || (this.supportsBinary = !1), o.call(this, e);
    }

    s(c, o), c.prototype.name = "polling", c.prototype.doOpen = function () {
      this.poll();
    }, c.prototype.pause = function (e) {
      var t = this;

      function n() {
        t.readyState = "paused", e();
      }

      if (this.readyState = "pausing", this.polling || !this.writable) {
        var o = 0;
        this.polling && (o++, this.once("pollComplete", function () {
          --o || n();
        })), this.writable || (o++, this.once("drain", function () {
          --o || n();
        }));
      } else n();
    }, c.prototype.poll = function () {
      this.polling = !0, this.doPoll(), this.emit("poll");
    }, c.prototype.onData = function (e) {
      var t = this;
      r.decodePayload(e, this.socket.binaryType, function (e, n, o) {
        if ("opening" === t.readyState && t.onOpen(), "close" === e.type) return t.onClose(), !1;
        t.onPacket(e);
      }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : this.readyState);
    }, c.prototype.doClose = function () {
      var e = this;

      function t() {
        e.write([{
          type: "close"
        }]);
      }

      "open" === this.readyState ? t() : this.once("open", t);
    }, c.prototype.write = function (e) {
      var t = this;
      this.writable = !1;

      var n = function n() {
        t.writable = !0, t.emit("drain");
      };

      r.encodePayload(e, this.supportsBinary, function (e) {
        t.doWrite(e, n);
      });
    }, c.prototype.uri = function () {
      var e = this.query || {},
          t = this.secure ? "https" : "http",
          n = "";
      return !1 !== this.timestampRequests && (e[this.timestampParam] = a()), this.supportsBinary || e.sid || (e.b64 = 1), e = i.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e;
    };
  }, function (e, t, n) {
    "use strict";

    var o,
        i = n(72),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };

    e.exports = r["default"] || function (e) {
      var t = [],
          n = Object.prototype.hasOwnProperty;

      for (var o in e) {
        n.call(e, o) && t.push(o);
      }

      return t;
    };
  }, function (e, t, n) {
    var o = n(255),
        i = Object.prototype.toString,
        r = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
        s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);

    e.exports = function a(e) {
      if (!e || "object" != typeof e) return !1;

      if (o(e)) {
        for (var t = 0, n = e.length; t < n; t++) {
          if (a(e[t])) return !0;
        }

        return !1;
      }

      if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(e) || "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || r && e instanceof Blob || s && e instanceof File) return !0;
      if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return a(e.toJSON(), !0);

      for (var i in e) {
        if (Object.prototype.hasOwnProperty.call(e, i) && a(e[i])) return !0;
      }

      return !1;
    };
  }, function (e, t) {
    var n = {}.toString;

    e.exports = Array.isArray || function (e) {
      return "[object Array]" == n.call(e);
    };
  }, function (e, t) {
    function n() {}

    e.exports = function (e, t, o) {
      var i = !1;
      return o = o || n, r.count = e, 0 === e ? t() : r;

      function r(e, n) {
        if (r.count <= 0) throw new Error("after called too many times");
        --r.count, e ? (i = !0, t(e), t = o) : 0 !== r.count || i || t(null, n);
      }
    };
  }, function (e, t, n) {
    "use strict";
    /*! https://mths.be/utf8js v2.1.2 by @mathias */

    var o,
        i,
        r,
        s = String.fromCharCode;

    function a(e) {
      for (var t, n, o = [], i = 0, r = e.length; i < r;) {
        (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < r ? 56320 == (64512 & (n = e.charCodeAt(i++))) ? o.push(((1023 & t) << 10) + (1023 & n) + 65536) : (o.push(t), i--) : o.push(t);
      }

      return o;
    }

    function u(e, t) {
      if (e >= 55296 && e <= 57343) {
        if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
        return !1;
      }

      return !0;
    }

    function c(e, t) {
      return s(e >> t & 63 | 128);
    }

    function l(e, t) {
      if (0 == (4294967168 & e)) return s(e);
      var n = "";
      return 0 == (4294965248 & e) ? n = s(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (u(e, t) || (e = 65533), n = s(e >> 12 & 15 | 224), n += c(e, 6)) : 0 == (4292870144 & e) && (n = s(e >> 18 & 7 | 240), n += c(e, 12), n += c(e, 6)), n += s(63 & e | 128);
    }

    function f() {
      if (r >= i) throw Error("Invalid byte index");
      var e = 255 & o[r];
      if (r++, 128 == (192 & e)) return 63 & e;
      throw Error("Invalid continuation byte");
    }

    function d(e) {
      var t, n;
      if (r > i) throw Error("Invalid byte index");
      if (r == i) return !1;
      if (t = 255 & o[r], r++, 0 == (128 & t)) return t;

      if (192 == (224 & t)) {
        if ((n = (31 & t) << 6 | f()) >= 128) return n;
        throw Error("Invalid continuation byte");
      }

      if (224 == (240 & t)) {
        if ((n = (15 & t) << 12 | f() << 6 | f()) >= 2048) return u(n, e) ? n : 65533;
        throw Error("Invalid continuation byte");
      }

      if (240 == (248 & t) && (n = (7 & t) << 18 | f() << 12 | f() << 6 | f()) >= 65536 && n <= 1114111) return n;
      throw Error("Invalid UTF-8 detected");
    }

    e.exports = {
      version: "2.1.2",
      encode: function encode(e, t) {
        for (var n = !1 !== (t = t || {}).strict, o = a(e), i = o.length, r = -1, s = ""; ++r < i;) {
          s += l(o[r], n);
        }

        return s;
      },
      decode: function decode(e, t) {
        var n = !1 !== (t = t || {}).strict;
        o = a(e), i = o.length, r = 0;

        for (var u, c = []; !1 !== (u = d(n));) {
          c.push(u);
        }

        return function (e) {
          for (var t, n = e.length, o = -1, i = ""; ++o < n;) {
            (t = e[o]) > 65535 && (i += s((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), i += s(t);
          }

          return i;
        }(c);
      }
    };
  }, function (e, t) {
    var n = void 0 !== n ? n : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
        o = function () {
      try {
        return 2 === new Blob(["hi"]).size;
      } catch (e) {
        return !1;
      }
    }(),
        i = o && function () {
      try {
        return 2 === new Blob([new Uint8Array([1, 2])]).size;
      } catch (e) {
        return !1;
      }
    }(),
        r = n && n.prototype.append && n.prototype.getBlob;

    function s(e) {
      return e.map(function (e) {
        if (e.buffer instanceof ArrayBuffer) {
          var t = e.buffer;

          if (e.byteLength !== t.byteLength) {
            var n = new Uint8Array(e.byteLength);
            n.set(new Uint8Array(t, e.byteOffset, e.byteLength)), t = n.buffer;
          }

          return t;
        }

        return e;
      });
    }

    function a(e, t) {
      t = t || {};
      var o = new n();
      return s(e).forEach(function (e) {
        o.append(e);
      }), t.type ? o.getBlob(t.type) : o.getBlob();
    }

    function u(e, t) {
      return new Blob(s(e), t || {});
    }

    "undefined" != typeof Blob && (a.prototype = Blob.prototype, u.prototype = Blob.prototype), e.exports = o ? i ? Blob : u : r ? a : undefined;
  }, function (e, t, n) {
    function o(e) {
      var n;

      function o() {
        if (o.enabled) {
          var e = o,
              i = +new Date(),
              r = i - (n || i);
          e.diff = r, e.prev = n, e.curr = i, n = i;

          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) {
            s[a] = arguments[a];
          }

          s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var u = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, o) {
            if ("%%" === n) return n;
            u++;
            var i = t.formatters[o];

            if ("function" == typeof i) {
              var r = s[u];
              n = i.call(e, r), s.splice(u, 1), u--;
            }

            return n;
          }), t.formatArgs.call(e, s), (o.log || t.log || console.log.bind(console)).apply(e, s);
        }
      }

      return o.namespace = e, o.enabled = t.enabled(e), o.useColors = t.useColors(), o.color = function (e) {
        var n,
            o = 0;

        for (n in e) {
          o = (o << 5) - o + e.charCodeAt(n), o |= 0;
        }

        return t.colors[Math.abs(o) % t.colors.length];
      }(e), o.destroy = i, "function" == typeof t.init && t.init(o), t.instances.push(o), o;
    }

    function i() {
      var e = t.instances.indexOf(this);
      return -1 !== e && (t.instances.splice(e, 1), !0);
    }

    (t = e.exports = o.debug = o["default"] = o).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e;
    }, t.disable = function () {
      t.enable("");
    }, t.enable = function (e) {
      var n;
      t.save(e), t.names = [], t.skips = [];
      var o = ("string" == typeof e ? e : "").split(/[\s,]+/),
          i = o.length;

      for (n = 0; n < i; n++) {
        o[n] && ("-" === (e = o[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
      }

      for (n = 0; n < t.instances.length; n++) {
        var r = t.instances[n];
        r.enabled = t.enabled(r.namespace);
      }
    }, t.enabled = function (e) {
      if ("*" === e[e.length - 1]) return !0;
      var n, o;

      for (n = 0, o = t.skips.length; n < o; n++) {
        if (t.skips[n].test(e)) return !1;
      }

      for (n = 0, o = t.names.length; n < o; n++) {
        if (t.names[n].test(e)) return !0;
      }

      return !1;
    }, t.humanize = n(260), t.instances = [], t.names = [], t.skips = [], t.formatters = {};
  }, function (e, t) {
    var n = 1e3,
        o = 60 * n,
        i = 60 * o,
        r = 24 * i,
        s = 365.25 * r;

    function a(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
    }

    e.exports = function (e, t) {
      t = t || {};
      var u,
          c = typeof e;
      if ("string" === c && e.length > 0) return function (e) {
        if ((e = String(e)).length > 100) return;
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (!t) return;
        var a = parseFloat(t[1]);

        switch ((t[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return a * s;

          case "days":
          case "day":
          case "d":
            return a * r;

          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return a * i;

          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return a * o;

          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return a * n;

          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return a;

          default:
            return undefined;
        }
      }(e);
      if ("number" === c && !1 === isNaN(e)) return t["long"] ? a(u = e, r, "day") || a(u, i, "hour") || a(u, o, "minute") || a(u, n, "second") || u + " ms" : function (e) {
        if (e >= r) return Math.round(e / r) + "d";
        if (e >= i) return Math.round(e / i) + "h";
        if (e >= o) return Math.round(e / o) + "m";
        if (e >= n) return Math.round(e / n) + "s";
        return e + "ms";
      }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(262);

    e.exports = function (e) {
      var t = e.xdomain,
          n = e.xscheme,
          i = e.enablesXDR;

      try {
        if ("undefined" != typeof XMLHttpRequest && (!t || o)) return new XMLHttpRequest();
      } catch (r) {}

      try {
        if ("undefined" != typeof XDomainRequest && !n && i) return new XDomainRequest();
      } catch (r) {}

      if (!t) try {
        return new self[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (r) {}
    };
  }, function (e, t) {
    try {
      e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (n) {
      e.exports = !1;
    }
  }, function (e, t, n) {
    "use strict";

    var o,
        i = n(20),
        r = (o = i) && o.__esModule ? o : {
      "default": o
    };
    var s,
        a,
        u = n(75),
        c = n(34),
        l = n(76),
        f = n(77),
        d = n(114);
    n(78)("engine.io-client:websocket");
    if ("undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket) if ("undefined" != typeof WebSocket) s = WebSocket;else if ("undefined" != typeof self) s = self.WebSocket || self.MozWebSocket;else try {
      a = n(264);
    } catch (y) {}
    var p = s || a;

    function h(e) {
      e && e.forceBase64 && (this.supportsBinary = !1), ("undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket) && (this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = s && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (p = a)), u.call(this, e);
    }

    "undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket || (p = function p(e) {
      var t = this;

      if (t.onopen = function () {}, t.onclose = function () {}, t.onmessage = function (e) {}, t.onerror = function (e) {}, "object" === ("undefined" == typeof tt ? "undefined" : (0, r["default"])(tt)) && tt.getSystemInfo) {
        var n = tt.connectSocket({
          url: e
        });
        t.send = function (e) {
          n.send({
            data: e
          });
        }, t.close = function () {
          n.close();
        }, n.onOpen(function () {
          t.onopen();
        }), n.onError(function (e) {
          t.onerror(e);
        }), n.onMessage(function (e) {
          t.onmessage(e);
        }), n.onClose(function () {
          t.onclose();
        });
      } else "undefined" != typeof uni ? (t.send = function (e) {
        uni.sendSocketMessage({
          data: e
        });
      }, t.close = function () {
        uni.closeSocket();
      }, uni.onSocketOpen(function (e) {
        t.onopen();
      }), uni.onSocketError(function (e) {
        t.onerror(e);
      }), uni.onSocketMessage(function (e) {
        t.onmessage(e);
      }), uni.onSocketClose(function (e) {
        t.onclose();
      }), uni.connectSocket({
        url: e
      })) : (t.send = function (e) {
        wx.sendSocketMessage({
          data: e
        });
      }, t.close = function () {
        wx.closeSocket();
      }, wx.onSocketOpen(function (e) {
        t.onopen();
      }), wx.onSocketError(function (e) {
        t.onerror(e);
      }), wx.onSocketMessage(function (e) {
        t.onmessage(e);
      }), wx.onSocketClose(function (e) {
        t.onclose();
      }), wx.connectSocket({
        url: e
      }));
    }), e.exports = h, f(h, u), h.prototype.name = "websocket", h.prototype.supportsBinary = !1, h.prototype.doOpen = function () {
      if (this.check()) {
        var e,
            t,
            n = this.uri();
        ("undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket) && (e = this.protocols), (t = "undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket ? {
          agent: this.agent,
          perMessageDeflate: this.perMessageDeflate
        } : {
          agent: this.agent
        }).pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (t.headers = this.extraHeaders), this.localAddress && (t.localAddress = this.localAddress);

        try {
          "undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket ? this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new p(n, e) : new p(n) : new p(n, e, t) : this.ws = new p(n);
        } catch (o) {
          return this.emit("error", o);
        }

        this.ws.binaryType === undefined && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
      }
    }, h.prototype.addEventListeners = function () {
      var e = this;
      this.ws.onopen = function () {
        e.onOpen();
      }, this.ws.onclose = function () {
        e.onClose();
      }, this.ws.onmessage = function (t) {
        e.onData(t.data);
      }, this.ws.onerror = function (t) {
        e.onError("websocket error", t);
      };
    }, h.prototype.write = function (e) {
      var t = this;
      this.writable = !1;

      for (var n = e.length, o = 0, i = n; o < i; o++) {
        !function (e) {
          c.encodePacket(e, t.supportsBinary, function (o) {
            if ("undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket) {
              if (!t.usingBrowserWebSocket) {
                var i = {};
                if (e.options && (i.compress = e.options.compress), t.perMessageDeflate) ("string" == typeof o ? Buffer.byteLength(o) : o.length) < t.perMessageDeflate.threshold && (i.compress = !1);
              }

              try {
                t.usingBrowserWebSocket ? t.ws.send(o) : t.ws.send(o, i);
              } catch (y) {}
            } else try {
              t.ws.send(o);
            } catch (y) {}

            --n || r();
          });
        }(e[o]);
      }

      function r() {
        t.emit("flush"), setTimeout(function () {
          t.writable = !0, t.emit("drain");
        }, 0);
      }
    }, h.prototype.onClose = function () {
      u.prototype.onClose.call(this);
    }, h.prototype.doClose = function () {
      "undefined" != typeof this.ws && this.ws.close();
    }, h.prototype.uri = function () {
      var e = this.query || {},
          t = this.secure ? "wss" : "ws",
          n = "";
      return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = d()), this.supportsBinary || (e.b64 = 1), (e = l.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e;
    }, h.prototype.check = function () {
      return !(!p || "__initialize" in p && this.name === h.prototype.name);
    };
  }, function (e, t) {}, function (e, t) {
    var n = [].indexOf;

    e.exports = function (e, t) {
      if (n) return e.indexOf(t);

      for (var o = 0; o < e.length; ++o) {
        if (e[o] === t) return o;
      }

      return -1;
    };
  }, function (e, t) {
    var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

    e.exports = function (e) {
      var t = e,
          i = e.indexOf("["),
          r = e.indexOf("]");
      -1 != i && -1 != r && (e = e.substring(0, i) + e.substring(i, r).replace(/:/g, ";") + e.substring(r, e.length));

      for (var s = n.exec(e || ""), a = {}, u = 14; u--;) {
        a[o[u]] = s[u] || "";
      }

      return -1 != i && -1 != r && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var n = [], o = (t = t || 0) || 0; o < e.length; o++) {
        n[o - t] = e[o];
      }

      return n;
    };
  }, function (e, t) {
    t.encode = function (e) {
      var t = "";

      for (var n in e) {
        e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
      }

      return t;
    }, t.decode = function (e) {
      for (var t = {}, n = e.split("&"), o = 0, i = n.length; o < i; o++) {
        var r = n[o].split("=");
        t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
      }

      return t;
    };
  }, function (e, t, n) {
    var o = n(270),
        i = Object.prototype.toString,
        r = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
        s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);

    e.exports = function a(e) {
      if (!e || "object" != typeof e) return !1;

      if (o(e)) {
        for (var t = 0, n = e.length; t < n; t++) {
          if (a(e[t])) return !0;
        }

        return !1;
      }

      if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(e) || "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || r && e instanceof Blob || s && e instanceof File) return !0;
      if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return a(e.toJSON(), !0);

      for (var i in e) {
        if (Object.prototype.hasOwnProperty.call(e, i) && a(e[i])) return !0;
      }

      return !1;
    };
  }, function (e, t) {
    var n = {}.toString;

    e.exports = Array.isArray || function (e) {
      return "[object Array]" == n.call(e);
    };
  }, function (e, t) {
    var n = [].indexOf;

    e.exports = function (e, t) {
      if (n) return e.indexOf(t);

      for (var o = 0; o < e.length; ++o) {
        if (e[o] === t) return o;
      }

      return -1;
    };
  }, function (e, t) {
    function n(e) {
      e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
    }

    e.exports = n, n.prototype.duration = function () {
      var e = this.ms * Math.pow(this.factor, this.attempts++);

      if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
      }

      return 0 | Math.min(e, this.max);
    }, n.prototype.reset = function () {
      this.attempts = 0;
    }, n.prototype.setMin = function (e) {
      this.ms = e;
    }, n.prototype.setMax = function (e) {
      this.max = e;
    }, n.prototype.setJitter = function (e) {
      this.jitter = e;
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(3)),
        i = f(n(0)),
        r = f(n(1)),
        s = f(n(4)),
        a = f(n(12)),
        u = f(n(5)),
        c = f(n(110)),
        l = f(n(28));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var d = function (e) {
      function t(e) {
        (0, i["default"])(this, t);
        var n = (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this));
        return n.reconnectingObservers = [], n.addReconnectingObserver(e.onReconnecting), n.addDisconnectedObserver(e.onDisconnected), n;
      }

      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "connect",
        value: function value(e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "connect", this).call(this), this.io = this.io.connect(e.uri, e.opts), this.initListener();
        }
      }, {
        key: "doEmit",
        value: function value(e, t, n) {
          this.io.emit(e, t, n);
        }
      }, {
        key: "initListener",
        value: function value() {
          var e = this;
          this.io.on("reconnecting", function (t) {
            e.status = l["default"].CONNECTING, e.notify(e.reconnectingObservers, t);
          }), this.io.on("connect", function () {
            e.status = l["default"].CONNECTED, e.notify(e.connectedObservers);
          }), this.io.on("disconnect", function () {
            e.status = l["default"].DISCONNECTED, e.notify(e.disconnectedObservers);
          }), this.io.on("connect_error", function (e) {});
        }
      }, {
        key: "addReconnectingObserver",
        value: function value(e) {
          this.reconnectingObservers.push(e);
        }
      }]), t;
    }(c["default"]);

    t["default"] = d;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = s(n(0)),
        i = s(n(1)),
        r = n(2);

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var a = function () {
      function e(t) {
        (0, o["default"])(this, e), this.callback = r.noop, this.guidList = [], this.callback = t;
      }

      return (0, i["default"])(e, [{
        key: "onMessage",
        value: function value(e, t) {
          "string" == typeof t && (t = JSON.parse(t)), this.guidList.findIndex(function (e) {
            return e === t.i;
          }) > -1 || (this.guidList.unshift(t.i), this.guidList.length > 300 && this.guidList.pop(), this.callback(t));
        }
      }]), e;
    }();

    t["default"] = a;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(33)),
        i = c(n(6)),
        r = c(n(0)),
        s = c(n(1)),
        a = n(2),
        u = n(119);

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var l = function () {
      function e(t) {
        (0, r["default"])(this, e), this.goEasySocket = null, this.goEasySocket = t, this.support() && (this.GoEasyUniapp = uni.requireNativePlugin("GoEasy-Uniapp"), t.addMessageObserver("imMessage", this.onNewMessageReceived.bind(this)), t.addMessageObserver("message", this.onNewMessageReceived.bind(this)));
      }

      return (0, s["default"])(e, [{
        key: "onNewMessageReceived",
        value: function value(e) {
          this.createLocalNotification(e);
        }
      }, {
        key: "createLocalNotification",
        value: function value(e) {
          if (a.calibrator.isObject(e.nt) && !0 === u.uniApp.runningBackend()) {
            var t = e.nt.t,
                n = e.nt.c;
            this.GoEasyUniapp ? this.GoEasyUniapp.createLocalNotification(t, n) : plus.push.createMessage(n, null, {
              title: t
            });
          }
        }
      }, {
        key: "getRegId",
        value: function value() {
          var e = this;
          return new i["default"](function (t, n) {
            try {
              e.GoEasyUniapp ? e.GoEasyUniapp.regId(function (e) {
                t(e);
              }, function (n) {
                if (1e6 == n.data.code) var i = setInterval(function () {
                  e.GoEasyUniapp.regId(function (e) {
                    clearInterval(i), t(e);
                  }, function (e) {
                    1e6 != e.data.code && (clearInterval(i), console.error("注册厂商通道失败：" + (0, o["default"])(e)), t());
                  });
                }, 5e3);else console.error("注册厂商通道失败：" + (0, o["default"])(n)), t();
              }) : (console.error("注册厂商通道失败：GoEasy-Uniapp is not installed correctly"), t());
            } catch (i) {
              console.error("注册厂商通道失败：" + (0, o["default"])(i)), t();
            }
          });
        }
      }, {
        key: "support",
        value: function value() {
          return a.env.isUni() && !0 === this.goEasySocket.allowNotification && a.env.isSupportHtmlPlus() && !a.env.isBrowserClient();
        }
      }]), e;
    }();

    t["default"] = l;
  }, function (e, t) {
    e.exports = {
      name: "goeasy",
      version: "2.0.12",
      description: "goeasy socket",
      keywords: ["realtime", "framework", "websocket", "tcp", "events", "client"],
      files: ["dist/"],
      main: "dist/goeasy.min.js",
      scripts: {
        build: "npm run build-goeasy",
        "build-snapshot": "npm run build-goeasy && npm run build-goeasy-dev",
        "build-goeasy": "./node_modules/.bin/webpack --config build/webpack.goeasy.config.js",
        "build-goeasy-dev": "./node_modules/.bin/webpack --config build/webpack.goeasy-dev.config.js",
        "start:dev": "webpack-dev-server --open --progress --config build/webpack.serve.config.js"
      },
      license: "MIT",
      dependencies: {
        "socket.io-client-goeasy": "./dependencies/socket.io-client-goeasy"
      },
      devDependencies: {
        "babel-core": "^6.26.3",
        "babel-loader": "^7.1.4",
        "babel-plugin-add-module-exports": "^0.2.1",
        "babel-plugin-transform-class-properties": "^6.24.1",
        "babel-plugin-transform-runtime": "^6.23.0",
        "babel-preset-env": "^1.7.0",
        "babel-runtime": "^6.26.0",
        "core-js": "^3.11.3",
        "es3ify-loader": "^0.2.0",
        "html-webpack-plugin": "^3.2.0",
        "strip-loader": "^0.1.2",
        "uglifyjs-webpack-plugin": "^1.3.0",
        uuid: "^3.3.2",
        webpack: "^3.12.0",
        "webpack-dev-server": "^2.11.5"
      }
    };
  }]);
});

cc._RF.pop();