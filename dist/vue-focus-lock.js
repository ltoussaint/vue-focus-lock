import { defineComponent as ge, toRefs as Oe, ref as H, computed as S, watch as ye, onMounted as Fe, getCurrentInstance as q, onUnmounted as Ie, openBlock as w, createElementBlock as N, unref as V, createCommentVNode as j, createElementVNode as Ae, mergeProps as xe, renderSlot as Ee } from "vue";
var U = "data-focus-lock", Q = "data-focus-lock-disabled", X = "data-no-focus-lock", Z = "data-autofocus-inside", ee = "data-no-autofocus";
const Te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FOCUS_ALLOW: X,
  FOCUS_AUTO: Z,
  FOCUS_DISABLED: Q,
  FOCUS_GROUP: U,
  FOCUS_NO_AUTOFOCUS: ee
}, Symbol.toStringTag, { value: "Module" }));
var b = function(e) {
  for (var n = Array(e.length), t = 0; t < e.length; ++t)
    n[t] = e[t];
  return n;
}, x = function(e) {
  return Array.isArray(e) ? e : [e];
}, ne = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, _e = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var n = window.getComputedStyle(e, null);
  return !n || !n.getPropertyValue ? !1 : n.getPropertyValue("display") === "none" || n.getPropertyValue("visibility") === "hidden";
}, te = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, re = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Se = function(e) {
  return e.hasAttribute("inert");
}, we = function(e, n) {
  return !e || re(e) || !_e(e) && !Se(e) && n(te(e));
}, ue = function(e, n) {
  var t = e.get(n);
  if (t !== void 0)
    return t;
  var r = we(n, ue.bind(void 0, e));
  return e.set(n, r), r;
}, Ne = function(e, n) {
  return e && !re(e) ? Pe(e) ? n(te(e)) : !1 : !0;
}, ae = function(e, n) {
  var t = e.get(n);
  if (t !== void 0)
    return t;
  var r = Ne(n, ae.bind(void 0, e));
  return e.set(n, r), r;
}, oe = function(e) {
  return e.dataset;
}, Ce = function(e) {
  return e.tagName === "BUTTON";
}, ie = function(e) {
  return e.tagName === "INPUT";
}, ce = function(e) {
  return ie(e) && e.type === "radio";
}, Me = function(e) {
  return !((ie(e) || Ce(e)) && (e.type === "hidden" || e.disabled));
}, Pe = function(e) {
  var n = e.getAttribute(ee);
  return ![!0, "true", ""].includes(n);
}, fe = function(e) {
  var n;
  return !!(e && (!((n = oe(e)) === null || n === void 0) && n.focusGuard));
}, z = function(e) {
  return !fe(e);
}, Ue = function(e) {
  return !!e;
}, ke = function(e, n) {
  var t = Math.max(0, e.tabIndex), r = Math.max(0, n.tabIndex), u = t - r, a = e.index - n.index;
  if (u) {
    if (!t)
      return 1;
    if (!r)
      return -1;
  }
  return u || a;
}, Be = function(e) {
  return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Le = function(e, n, t) {
  return b(e).map(function(r, u) {
    var a = Be(r);
    return {
      node: r,
      index: u,
      tabIndex: t && a === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : a
    };
  }).filter(function(r) {
    return !n || r.tabIndex >= 0;
  }).sort(ke);
}, De = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], L = De.join(","), We = "".concat(L, ", [data-focus-guard]"), de = function(e, n) {
  return b((e.shadowRoot || e).children).reduce(function(t, r) {
    return t.concat(r.matches(n ? We : L) ? [r] : [], de(r));
  }, []);
}, Ge = function(e, n) {
  var t;
  return e instanceof HTMLIFrameElement && (!((t = e.contentDocument) === null || t === void 0) && t.body) ? D([e.contentDocument.body], n) : [e];
}, D = function(e, n) {
  return e.reduce(function(t, r) {
    var u, a = de(r, n), o = (u = []).concat.apply(u, a.map(function(s) {
      return Ge(s, n);
    }));
    return t.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      o,
      // add if node is tabbable itself
      r.parentNode ? b(r.parentNode.querySelectorAll(L)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, Re = function(e) {
  var n = e.querySelectorAll("[".concat(Z, "]"));
  return b(n).map(function(t) {
    return D([t]);
  }).reduce(function(t, r) {
    return t.concat(r);
  }, []);
}, se = function(e, n) {
  return b(e).filter(function(t) {
    return ue(n, t);
  }).filter(function(t) {
    return Me(t);
  });
}, K = function(e, n) {
  return n === void 0 && (n = /* @__PURE__ */ new Map()), b(e).filter(function(t) {
    return ae(n, t);
  });
}, Y = function(e, n) {
  return Le(se(D(e), n), !1);
}, He = function(e, n) {
  return se(Re(e), n);
}, O = function(e, n) {
  return e.shadowRoot ? O(e.shadowRoot, n) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, n) ? !0 : b(e.children).some(function(t) {
    var r;
    if (t instanceof HTMLIFrameElement) {
      var u = (r = t.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return u ? O(u, n) : !1;
    }
    return O(t, n);
  });
}, qe = function(e) {
  for (var n = /* @__PURE__ */ new Set(), t = e.length, r = 0; r < t; r += 1)
    for (var u = r + 1; u < t; u += 1) {
      var a = e[r].compareDocumentPosition(e[u]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && n.add(u), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && n.add(r);
    }
  return e.filter(function(o, s) {
    return !n.has(s);
  });
}, le = function(e) {
  return e.parentNode ? le(e.parentNode) : e;
}, ve = function(e) {
  var n = x(e);
  return n.filter(Boolean).reduce(function(t, r) {
    var u = r.getAttribute(U);
    return t.push.apply(t, u ? qe(b(le(r).querySelectorAll("[".concat(U, '="').concat(u, '"]:not([').concat(Q, '="disabled"])')))) : [r]), t;
  }, []);
}, Ve = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, I = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var n = e.activeElement;
    return n.shadowRoot ? I(n.shadowRoot) : n instanceof HTMLIFrameElement && Ve(function() {
      return n.contentWindow.document;
    }) ? I(n.contentWindow.document) : n;
  }
}, je = function(e, n) {
  return e === n;
}, ze = function(e, n) {
  return !!b(e.querySelectorAll("iframe")).some(function(t) {
    return je(t, n);
  });
}, Ke = function(e, n) {
  return n === void 0 && (n = I(ne(e).ownerDocument)), !n || n.dataset && n.dataset.focusGuard ? !1 : ve(e).some(function(t) {
    return O(t, n) || ze(t, n);
  });
}, Ye = function(e) {
  e === void 0 && (e = document);
  var n = I(e);
  return n ? b(e.querySelectorAll("[".concat(X, "]"))).some(function(t) {
    return O(t, n);
  }) : !1;
}, $e = function(e, n) {
  return n.filter(ce).filter(function(t) {
    return t.name === e.name;
  }).filter(function(t) {
    return t.checked;
  })[0] || e;
}, W = function(e, n) {
  return ce(e) && e.name ? $e(e, n) : e;
}, Je = function(e) {
  var n = /* @__PURE__ */ new Set();
  return e.forEach(function(t) {
    return n.add(W(t, e));
  }), e.filter(function(t) {
    return n.has(t);
  });
}, $ = function(e) {
  return e[0] && e.length > 1 ? W(e[0], e) : e[0];
}, J = function(e, n) {
  return e.indexOf(W(n, e));
}, k = "NEW_FOCUS", Qe = function(e, n, t, r, u) {
  var a = e.length, o = e[0], s = e[a - 1], m = fe(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var i = r !== void 0 ? t.indexOf(r) : -1, y = u ? t.indexOf(u) : i, l = u ? e.indexOf(u) : -1;
    if (i === -1)
      return l !== -1 ? l : k;
    if (l === -1)
      return k;
    var v = i - y, h = t.indexOf(o), f = t.indexOf(s), d = Je(t), F = r !== void 0 ? d.indexOf(r) : -1, E = F - (u ? d.indexOf(u) : i);
    if (!v && l >= 0 || n.length === 0)
      return l;
    var A = J(e, n[0]), p = J(e, n[n.length - 1]);
    if (i <= h && m && Math.abs(v) > 1)
      return p;
    if (i >= f && m && Math.abs(v) > 1)
      return A;
    if (v && Math.abs(E) > 1)
      return l;
    if (i <= h)
      return p;
    if (i > f)
      return A;
    if (v)
      return Math.abs(v) > 1 ? l : (a + l + v) % a;
  }
}, Xe = function(e) {
  return function(n) {
    var t, r = (t = oe(n)) === null || t === void 0 ? void 0 : t.autofocus;
    return (
      // @ts-expect-error
      n.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(n) >= 0
    );
  };
}, Ze = function(e, n, t) {
  var r = e.map(function(a) {
    var o = a.node;
    return o;
  }), u = K(r.filter(Xe(t)));
  return u && u.length ? $(u) : $(K(n));
}, B = function(e, n) {
  return n === void 0 && (n = []), n.push(e), e.parentNode && B(e.parentNode.host || e.parentNode, n), n;
}, C = function(e, n) {
  for (var t = B(e), r = B(n), u = 0; u < t.length; u += 1) {
    var a = t[u];
    if (r.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, en = function(e, n, t) {
  var r = x(e), u = x(n), a = r[0], o = !1;
  return u.filter(Boolean).forEach(function(s) {
    o = C(o || s, s) || o, t.filter(Boolean).forEach(function(m) {
      var i = C(a, m);
      i && (!o || O(i, o) ? o = i : o = C(i, o));
    });
  }), o;
}, nn = function(e, n) {
  return e.reduce(function(t, r) {
    return t.concat(He(r, n));
  }, []);
}, tn = function(e, n) {
  var t = /* @__PURE__ */ new Map();
  return n.forEach(function(r) {
    return t.set(r.node, r);
  }), e.map(function(r) {
    return t.get(r);
  }).filter(Ue);
}, rn = function(e, n) {
  var t = I(x(e).length > 0 ? document : ne(e).ownerDocument), r = ve(e).filter(z), u = en(t || e, e, r), a = /* @__PURE__ */ new Map(), o = Y(r, a), s = o.filter(function(f) {
    var d = f.node;
    return z(d);
  });
  if (s[0]) {
    var m = Y([u], a).map(function(f) {
      var d = f.node;
      return d;
    }), i = tn(m, s), y = i.map(function(f) {
      var d = f.node;
      return d;
    }), l = i.filter(function(f) {
      var d = f.tabIndex;
      return d >= 0;
    }).map(function(f) {
      var d = f.node;
      return d;
    }), v = Qe(y, l, m, t, n);
    if (v === k) {
      var h = Ze(o, l, nn(r, a));
      if (h)
        return { node: h };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return v === void 0 ? v : i[v];
  }
}, un = function(e, n) {
  e && ("focus" in e && e.focus(n), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, M = 0, P = !1, an = function(e, n, t) {
  t === void 0 && (t = {});
  var r = rn(e, n);
  if (!P && r) {
    if (M > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), P = !0, setTimeout(function() {
        P = !1;
      }, 1);
      return;
    }
    M++, un(r.node, t.focusOptions), M--;
  }
}, on = Te;
const cn = ["tabIndex"], fn = ["tabIndex"], sn = /* @__PURE__ */ ge({
  __name: "FocusLock",
  props: {
    returnFocus: { type: Boolean },
    disabled: { type: Boolean },
    noFocusGuards: { type: [Boolean, String] },
    group: {}
  },
  setup(e) {
    let n = [], t;
    const r = e, { returnFocus: u, disabled: a, noFocusGuards: o, group: s } = Oe(r), m = H(null), i = H({ disabled: !0, onActivation: () => {
    } }), y = S(() => ({ [on.FOCUS_GROUP]: s.value })), l = S(() => o.value !== !0), v = S(() => l.value && o.value !== "tail");
    ye(a, () => {
      i.value.disabled = a.value, T();
    }), Fe(() => {
      const c = q();
      c && (i.value = {
        instance: c.proxy,
        observed: m.value.querySelector("[data-lock]"),
        disabled: a.value,
        onActivation: () => {
          t = t || document && document.activeElement;
        }
      }, n.length || he(), n.push(i.value), T());
    }), Ie(() => {
      const c = q();
      c && (n = n.filter(({ instance: g }) => g !== c.proxy), n.length || pe(), u.value && t && t.focus && t.focus(), T());
    });
    function h(c) {
      setTimeout(c, 0);
    }
    let f = null, d = null, F = !1;
    const E = () => document && document.activeElement === document.body, A = () => E() || Ye(), p = () => {
      if (f) {
        const { observed: c, onActivation: g } = f;
        (F || !A() || !d) && (c && !Ke(c) && (g(), an(c, d)), F = !1, d = document && document.activeElement);
      }
    }, me = (c) => c.filter(({ disabled: g }) => !g).slice(-1)[0], be = (c) => {
      f !== c && (f = null), f = c, c && (p(), h(p));
    }, T = () => {
      be(me(n));
    }, G = () => {
      p();
    }, _ = () => {
      h(p);
    }, R = () => {
      F = !0, d = null;
    }, he = () => {
      document.addEventListener("focusin", G, !0), document.addEventListener("focusout", _), window.addEventListener("blur", R);
    }, pe = () => {
      document.removeEventListener("focusin", G, !0), document.removeEventListener("focusout", _), window.removeEventListener("blur", R);
    };
    return (c, g) => (w(), N("div", {
      ref_key: "rootEl",
      ref: m
    }, [
      l.value ? (w(), N("div", {
        key: 0,
        tabIndex: V(a) ? -1 : 0,
        "aria-hidden": "true"
      }, null, 8, cn)) : j("", !0),
      Ae("div", xe({ onFocusout: _ }, y.value, { "data-lock": "" }), [
        Ee(c.$slots, "default")
      ], 16),
      v.value ? (w(), N("div", {
        key: 1,
        tabIndex: V(a) ? -1 : 0,
        "aria-hidden": "true"
      }, null, 8, fn)) : j("", !0)
    ], 512));
  }
});
export {
  sn as default
};
