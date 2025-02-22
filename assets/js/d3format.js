// https://d3js.org/d3-format/ v1.4.5 Copyright 2020 Mike Bostock
!(function (t, n) {
    'object' == typeof exports && 'undefined' != typeof module
        ? n(exports)
        : 'function' == typeof define && define.amd
        ? define(['exports'], n)
        : n(((t = 'undefined' != typeof globalThis ? globalThis : t || self).d3 = t.d3 || {}))
})(this, function (t) {
    'use strict'
    function n(t, n) {
        if ((i = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf('e')) < 0) return null
        var i,
            r = t.slice(0, i)
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(i + 1)]
    }
    function i(t) {
        return (t = n(Math.abs(t))) ? t[1] : NaN
    }
    var r,
        e = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
    function o(t) {
        if (!(n = e.exec(t))) throw new Error('invalid format: ' + t)
        var n
        return new a({
            fill: n[1],
            align: n[2],
            sign: n[3],
            symbol: n[4],
            zero: n[5],
            width: n[6],
            comma: n[7],
            precision: n[8] && n[8].slice(1),
            trim: n[9],
            type: n[10],
        })
    }
    function a(t) {
        ;(this.fill = void 0 === t.fill ? ' ' : t.fill + ''),
            (this.align = void 0 === t.align ? '>' : t.align + ''),
            (this.sign = void 0 === t.sign ? '-' : t.sign + ''),
            (this.symbol = void 0 === t.symbol ? '' : t.symbol + ''),
            (this.zero = !!t.zero),
            (this.width = void 0 === t.width ? void 0 : +t.width),
            (this.comma = !!t.comma),
            (this.precision = void 0 === t.precision ? void 0 : +t.precision),
            (this.trim = !!t.trim),
            (this.type = void 0 === t.type ? '' : t.type + '')
    }
    function s(t, i) {
        var r = n(t, i)
        if (!r) return t + ''
        var e = r[0],
            o = r[1]
        return o < 0
            ? '0.' + new Array(-o).join('0') + e
            : e.length > o + 1
            ? e.slice(0, o + 1) + '.' + e.slice(o + 1)
            : e + new Array(o - e.length + 2).join('0')
    }
    ;(o.prototype = a.prototype),
        (a.prototype.toString = function () {
            return (
                this.fill +
                this.align +
                this.sign +
                this.symbol +
                (this.zero ? '0' : '') +
                (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
                (this.comma ? ',' : '') +
                (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) +
                (this.trim ? '~' : '') +
                this.type
            )
        })
    var u = {
        '%': function (t, n) {
            return (100 * t).toFixed(n)
        },
        b: function (t) {
            return Math.round(t).toString(2)
        },
        c: function (t) {
            return t + ''
        },
        d: function (t) {
            return Math.abs((t = Math.round(t))) >= 1e21
                ? t.toLocaleString('en').replace(/,/g, '')
                : t.toString(10)
        },
        e: function (t, n) {
            return t.toExponential(n)
        },
        f: function (t, n) {
            return t.toFixed(n)
        },
        g: function (t, n) {
            return t.toPrecision(n)
        },
        o: function (t) {
            return Math.round(t).toString(8)
        },
        p: function (t, n) {
            return s(100 * t, n)
        },
        r: s,
        s: function (t, i) {
            var e = n(t, i)
            if (!e) return t + ''
            var o = e[0],
                a = e[1],
                s = a - (r = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
                u = o.length
            return s === u
                ? o
                : s > u
                ? o + new Array(s - u + 1).join('0')
                : s > 0
                ? o.slice(0, s) + '.' + o.slice(s)
                : '0.' + new Array(1 - s).join('0') + n(t, Math.max(0, i + s - 1))[0]
        },
        X: function (t) {
            return Math.round(t).toString(16).toUpperCase()
        },
        x: function (t) {
            return Math.round(t).toString(16)
        },
    }
    function c(t) {
        return t
    }
    var f,
        l = Array.prototype.map,
        h = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
    function d(t) {
        var n,
            e,
            a =
                void 0 === t.grouping || void 0 === t.thousands
                    ? c
                    : ((n = l.call(t.grouping, Number)),
                      (e = t.thousands + ''),
                      function (t, i) {
                          for (
                              var r = t.length, o = [], a = 0, s = n[0], u = 0;
                              r > 0 &&
                              s > 0 &&
                              (u + s + 1 > i && (s = Math.max(1, i - u)),
                              o.push(t.substring((r -= s), r + s)),
                              !((u += s + 1) > i));

                          )
                              s = n[(a = (a + 1) % n.length)]
                          return o.reverse().join(e)
                      }),
            s = void 0 === t.currency ? '' : t.currency[0] + '',
            f = void 0 === t.currency ? '' : t.currency[1] + '',
            d = void 0 === t.decimal ? '.' : t.decimal + '',
            m =
                void 0 === t.numerals
                    ? c
                    : (function (t) {
                          return function (n) {
                              return n.replace(/[0-9]/g, function (n) {
                                  return t[+n]
                              })
                          }
                      })(l.call(t.numerals, String)),
            p = void 0 === t.percent ? '%' : t.percent + '',
            g = void 0 === t.minus ? '-' : t.minus + '',
            v = void 0 === t.nan ? 'NaN' : t.nan + ''
        function M(t) {
            var n = (t = o(t)).fill,
                i = t.align,
                e = t.sign,
                c = t.symbol,
                l = t.zero,
                M = t.width,
                y = t.comma,
                x = t.precision,
                b = t.trim,
                w = t.type
            'n' === w ? ((y = !0), (w = 'g')) : u[w] || (void 0 === x && (x = 12), (b = !0), (w = 'g')),
                (l || ('0' === n && '=' === i)) && ((l = !0), (n = '0'), (i = '='))
            var S = '$' === c ? s : '#' === c && /[boxX]/.test(w) ? '0' + w.toLowerCase() : '',
                j = '$' === c ? f : /[%p]/.test(w) ? p : '',
                k = u[w],
                z = /[defgprs%]/.test(w)
            function A(t) {
                var o,
                    s,
                    u,
                    c = S,
                    f = j
                if ('c' === w) (f = k(t) + f), (t = '')
                else {
                    var p = (t = +t) < 0 || 1 / t < 0
                    if (
                        ((t = isNaN(t) ? v : k(Math.abs(t), x)),
                        b &&
                            (t = (function (t) {
                                t: for (var n, i = t.length, r = 1, e = -1; r < i; ++r)
                                    switch (t[r]) {
                                        case '.':
                                            e = n = r
                                            break
                                        case '0':
                                            0 === e && (e = r), (n = r)
                                            break
                                        default:
                                            if (!+t[r]) break t
                                            e > 0 && (e = 0)
                                    }
                                return e > 0 ? t.slice(0, e) + t.slice(n + 1) : t
                            })(t)),
                        p && 0 == +t && '+' !== e && (p = !1),
                        (c = (p ? ('(' === e ? e : g) : '-' === e || '(' === e ? '' : e) + c),
                        (f = ('s' === w ? h[8 + r / 3] : '') + f + (p && '(' === e ? ')' : '')),
                        z)
                    )
                        for (o = -1, s = t.length; ++o < s; )
                            if (48 > (u = t.charCodeAt(o)) || u > 57) {
                                ;(f = (46 === u ? d + t.slice(o + 1) : t.slice(o)) + f), (t = t.slice(0, o))
                                break
                            }
                }
                y && !l && (t = a(t, 1 / 0))
                var A = c.length + t.length + f.length,
                    N = A < M ? new Array(M - A + 1).join(n) : ''
                switch ((y && l && ((t = a(N + t, N.length ? M - f.length : 1 / 0)), (N = '')), i)) {
                    case '<':
                        t = c + t + f + N
                        break
                    case '=':
                        t = c + N + t + f
                        break
                    case '^':
                        t = N.slice(0, (A = N.length >> 1)) + c + t + f + N.slice(A)
                        break
                    default:
                        t = N + c + t + f
                }
                return m(t)
            }
            return (
                (x =
                    void 0 === x
                        ? 6
                        : /[gprs]/.test(w)
                        ? Math.max(1, Math.min(21, x))
                        : Math.max(0, Math.min(20, x))),
                (A.toString = function () {
                    return t + ''
                }),
                A
            )
        }
        return {
            format: M,
            formatPrefix: function (t, n) {
                var r = M((((t = o(t)).type = 'f'), t)),
                    e = 3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))),
                    a = Math.pow(10, -e),
                    s = h[8 + e / 3]
                return function (t) {
                    return r(a * t) + s
                }
            },
        }
    }
    function m(n) {
        return (f = d(n)), (t.format = f.format), (t.formatPrefix = f.formatPrefix), f
    }
    m({ decimal: '.', thousands: ',', grouping: [3], currency: ['$', ''], minus: '-' }),
        (t.FormatSpecifier = a),
        (t.formatDefaultLocale = m),
        (t.formatLocale = d),
        (t.formatSpecifier = o),
        (t.precisionFixed = function (t) {
            return Math.max(0, -i(Math.abs(t)))
        }),
        (t.precisionPrefix = function (t, n) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))) - i(Math.abs(t)))
        }),
        (t.precisionRound = function (t, n) {
            return (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, i(n) - i(t)) + 1
        }),
        Object.defineProperty(t, '__esModule', { value: !0 })
})
