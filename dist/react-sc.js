!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
        ? define(['react'], t)
        : 'object' == typeof exports
            ? (exports.styled = t(require('react')))
            : (e.styled = t(e.React))
})(this, function(e) {
  return (function(e) {
    function t(n) {
      if (r[n]) return r[n].exports
      var l = (r[n] = { i: n, l: !1, exports: {} })
      return e[n].call(l.exports, l, l.exports, t), (l.l = !0), l.exports
    }
    var r = {}
    return (t.m = e), (t.c = r), (t.i = function(e) {
      return e
    }), (t.d = function(e, r, n) {
      t.o(e, r) ||
        Object.defineProperty(e, r, {
          configurable: !1,
          enumerable: !0,
          get: n,
        })
    }), (t.n = function(e) {
      var r = e && e.__esModule
        ? function() {
            return e.default
          }
        : function() {
            return e
          }
      return t.d(r, 'a', r), r
    }), (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }), (t.p = ''), t((t.s = 3))
  })([
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4),
        l = (function(e) {
          return e && e.__esModule ? e : { default: e }
        })(n),
        i = function(e, t) {
          return e[0].reduce(function(r, n, l) {
            return 'function' == typeof e[l + 1]
              ? r + n + (e[l + 1](t) || '')
              : r + n + (e[l + 1] || '')
          }, '')
        },
        a = function(e) {
          return e.match(/[a-zA-Z0-9]/g).join('').slice(-3)
        },
        o = function(e) {
          return a(btoa(e.length)) + a(btoa(e))
        },
        c = [],
        s = document,
        u = s.createElement('style')
      s.body.appendChild(u)
      var f = function(e, t) {
        ;-1 === c.indexOf(t) && (c.push(t), u.appendChild(s.createTextNode(e)))
      }
      t.default = function(e, t) {
        var r = i(e, t), n = o(r), a = (0, l.default)('.' + n, r)
        return f(a, n), n
      }
    },
    function(t, r) {
      t.exports = e
    },
    function(e, t, r) {
      'use strict'
      function n(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var l =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        },
        i = r(1),
        a = n(i),
        o = r(0),
        c = n(o)
      t.default = function(e, t) {
        var r = a.default.createElement(e, null),
          n = void 0,
          i = function(e) {
            n = (0, c.default)(t, e)
            var i = l({}, e, {
              className: e.className ? e.className + ' ' + n : n,
            })
            return i.innerRef && (i.ref = e.innerRef), 'string' ==
              typeof r.type && delete i.innerRef, a.default.createElement(
              r.type,
              i,
            )
          }
        return (i.displayName = (e.name || e) + '-' + n), i
      }
    },
    function(e, t, r) {
      'use strict'
      function n(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var l = r(1),
        i = r(2),
        a = n(i),
        o = r(0),
        c = (n(o), function(e) {
          return function() {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n]
            return (0, a.default)(e, r)
          }
        })
      Object.keys(l.DOM).forEach(function(e) {
        c[e] = c(e)
      }), (t.default = c)
    },
    function(e, t, r) {
      ;(function(t) {
        !(function(r) {
          e.exports = r(t)
        })(function(e) {
          'use strict'
          function t(e, v, A, C, y) {
            e += ''
            var O, k, j, w = y, _ = '', M = '', N = e.charCodeAt(0)
            switch ((N < 33 && (N = (e = e.trim()).charCodeAt(0)), N)) {
              case 35:
              case 46:
                M = (_ = e).substring(1)
                break
              case 91:
                (k = e
                  .substring(1, e.length - 1)
                  .split(
                    '=',
                  )), (O = (M = k[1]).charCodeAt(0)), (34 !== O && 39 !== O) || (M = M.substring(1, M.length - 1)), (_ = '[' + k[0] + '="' + M + '"]')
                break
              default:
                M = _ = e
            }
            ;(N = 0), !0 === A || void 0 === A || null === A ? ((A = !0), (j = M.replace(p, '-'))) : ((j = ''), (A = !1))
            var P, E = void 0 !== w && null !== w, R = l.length
            !0 === E &&
              ((P = (typeof w).charCodeAt(0)), 111 === P
                ? r(w)
                : 102 === P
                    ? (l[R++] = w)
                    : (E = !1)), 0 !== R && ((w = 1 === R ? l[0] : n), (E = !0))
            var $,
              z,
              q,
              F,
              D,
              T,
              Z,
              B,
              G,
              H,
              I,
              J,
              K,
              L,
              Q,
              S,
              U,
              V,
              W = '',
              X = '',
              Y = '',
              ee = 0,
              te = 0,
              re = 0,
              ne = 0,
              le = 0,
              ie = 0,
              ae = 0,
              oe = 0,
              ce = 0,
              se = 0,
              ue = 0,
              fe = 0,
              de = 0,
              he = 0
            !0 === E &&
              ((T = w(0, v, me, be, _, 0)), null != T && (v = T), (Q = ''))
            for (
              var ge = 0, pe = 0, be = 0, me = 1, xe = v.length, ve = '';
              ge < xe;

            ) {
              if (
                ((ee = v.charCodeAt(ge)), (1 === te && ge === xe - 1) ||
                  (0 === oe &&
                    0 === ae &&
                    0 === fe &&
                    (123 === ee ||
                      125 === ee ||
                      59 === ee ||
                      (ge === xe - 1 && 0 !== W.length))))
              ) {
                if (
                  ((W += v.charAt(ge)), !0 === E &&
                    125 !== ee &&
                    null !=
                      (T = 123 === ee
                        ? w(
                            1,
                            W.substring(0, W.length - 1).trim(),
                            me,
                            be,
                            _,
                            ve.length,
                          )
                        : w(2, W, me, be, _, ve.length)) &&
                    (W = 123 === ee ? T + ' {' : T), (G = W.charCodeAt(
                    0,
                  )), 32 === G &&
                    (G = (W = W.trim()).charCodeAt(0)), (H = W.charCodeAt(
                    1,
                  )), (I = W.charCodeAt(2)), 64 === G)
                ) {
                  if (
                    (1 === ue &&
                      0 !== Y.length &&
                      ((ue = 0), (Y = _ + ' {' + Y + '}'), !0 === E &&
                        null != (T = w(4, Y, me, be, _, ve.length)) &&
                        (Y = T), (ve += Y), (Y = '')), 59 !== ee)
                  )
                    if (107 === H)
                      (K = W.substring(1, 11) + j + W.substring(11)), (W =
                        '@' + x + K), (N = 1)
                    else {
                      if (
                        (109 === H && 101 === I) ||
                        (115 === H && 117 === I) ||
                        103 === H
                      ) {
                        for (
                          ge++, be++, void 0 === U && (U = ''), (q =
                            ''), (le = 1);
                          ge < xe;

                        ) {
                          if (
                            ((O = v.charCodeAt(ge)), 123 === O
                              ? le++
                              : 125 === O && le--, 0 === le)
                          ) {
                            ge++
                            break
                          }
                          ;(q += v.charAt(ge++)), (be = 13 === O || 10 === O
                            ? (me++, 0)
                            : be + 1)
                        }
                        ;(e = 0 === pe
                          ? _
                          : Z.substring(0, Z.length - 1)
                              .replace(d, '')
                              .trim()), (U +=
                          W + t(e, q.trim(), A, C, null).trim() + '}'), !0 ===
                          E &&
                          null != (T = w(3, U, me, be, _, ve.length)) &&
                          (U = T), (W = ''), (te = 1), ge === xe && xe++
                        continue
                      }
                      N = 6
                    }
                  59 !== ee &&
                    105 !== H &&
                    (107 !== H &&
                      109 !== H &&
                      115 !== H &&
                      103 !== H &&
                      (N = 5), (ne = -1), re++)
                } else {
                  if (123 === ee)
                    if (
                      (pe++, 1 === ue &&
                        0 !== Y.length &&
                        ((ue = 0), (Y = _ + ' {' + Y + '}'), !0 === E &&
                          null != (T = w(4, Y, me, be, _, ve.length)) &&
                          (Y = T), (ve += Y), (Y = '')), 2 === pe)
                    ) {
                      ge++, be++, (q = '')
                      var Ae = W.substring(0, W.length - 1).split(o),
                        Ce = Z.substring(0, Z.length - 1).split(o)
                      for (
                        le = 1;
                        ge < xe &&
                        ((O = v.charCodeAt(ge)), 123 === O
                          ? le++
                          : 125 === O && le--, 0 !== le);

                      )
                        (q += v.charAt(ge++)), (be = 13 === O || 10 === O
                          ? (me++, 0)
                          : be + 1)
                      R = Ce.length
                      for (var ye = 0; ye < R; ye++) {
                        ;(T = Ce[ye]), (B = T.indexOf(_)), (Ce[ye] = '')
                        for (var Oe = 0, ke = Ae.length; Oe < ke; Oe++)
                          (e = B > 0
                            ? ':global(%)' + T.trim()
                            : T.replace(_, '&').trim()), (J = Ae[
                            Oe
                          ].trim()), (e = J.indexOf(' &') > 0
                            ? J.replace('&', '').trim() + ' ' + e
                            : null !== c.exec(J) ? J : e + ' ' + J), (Ce[ye] +=
                            e.replace(a, '').trim() +
                            (Oe === ke - 1 ? '' : ','))
                      }
                      void 0 === L && (L = ''), (L +=
                        '\n' +
                        Ce.join(',').replace(s, ' $1') +
                        ' {' +
                        q +
                        '}'), (ie = 1), (W = ''), pe--
                    } else if (0 === re || 2 === N) {
                      0 === se &&
                        -1 !== W.indexOf('::place') &&
                        (se = 1), (F = W.split(o)), (D = ''), (Z = ''), (R =
                        F.length)
                      for (var ye = 0; ye < R; ye++)
                        (O = (e = F[ye]).charCodeAt(0)), 32 === O &&
                          (O = (e = e.trim()).charCodeAt(0)), 38 === O
                          ? (e = _ + e.substring(1).replace(i, _))
                          : (B = e.indexOf(' &')) > 0
                              ? (e = e.replace(i, _).trim())
                              : 58 === O
                                  ? ((V = e.charCodeAt(1)), !0 === C &&
                                      104 === V &&
                                      116 === e.charCodeAt(4)
                                      ? ((V = e.charCodeAt(5)), (e = 40 === V
                                          ? _ + e.replace(u, '$1').replace(i, _)
                                          : 45 === V
                                              ? e
                                                  .replace(f, '$1 ' + _)
                                                  .replace(i, _)
                                              : _ + e.substring(5)))
                                      : 103 !== V ||
                                          (!0 !== C &&
                                            37 !== (V = e.charCodeAt(8)))
                                          ? (e = _ + e)
                                          : ((ce = 1), (e = e
                                              .replace(c, '$1')
                                              .replace(i, _)
                                              .trim())))
                                  : 0 === ce && (e = _ + ' ' + e), !0 === E &&
                          null !=
                            (T = w(
                              1.5,
                              ye === R - 1
                                ? e.substring(0, e.length - 1).trim()
                                : e,
                              me,
                              be,
                              _,
                              ve.length,
                            )) &&
                          (e = ye === R - 1 ? T + ' {' : T), (Z +=
                          (0 !== ye ? ',\n' : '') +
                          (1 !== ce ? e : ':global(%)' + e)), (D += 0 !== ye
                          ? ',' + e
                          : e), (ce = 0)
                      W = D
                    } else Z = W
                  else if (!1 == (125 === ee && 1 === W.length)) {
                    if (
                      (59 !== ee &&
                        (W =
                          (125 === ee
                            ? W.substring(0, W.length - 1)
                            : W.trim()) + ';'), 97 === G &&
                        110 === H &&
                        105 === I)
                    ) {
                      if (
                        ((W = W.substring(0, W.length - 1)), (z =
                          W.indexOf(':') + 1), (D = W.substring(0, z)), !0 ===
                          A && 45 !== W.charCodeAt(9))
                      ) {
                        var je = W.substring(z).trim().split(',')
                        R = je.length
                        for (var ye = 0; ye < R; ye++) {
                          for (
                            var we = je[ye],
                              _e = we.split(' '),
                              Oe = 0,
                              ke = _e.length;
                            Oe < ke;
                            Oe++
                          ) {
                            var Me = _e[Oe].trim(),
                              Ne = Me.charCodeAt(0),
                              Pe = Me.charCodeAt(2),
                              Ee = Me.length,
                              Re = Me.charCodeAt(Ee - 1)
                            !((Ne > 64 && Ne < 90) ||
                              (Ne > 96 && Ne < 122) ||
                              45 === Ne ||
                              (95 === Ne && 95 !== Me.charCodeAt(1))) ||
                              41 === Re ||
                              0 === Ee ||
                              (105 === Ne &&
                                ((102 === Pe && 101 === Re && 8 === Ee) ||
                                  (105 === Pe && 108 === Re && 7 === Ee) ||
                                  (104 === Pe && 116 === Re && 7 === Ee))) ||
                              (117 === Ne &&
                                115 === Pe &&
                                116 === Re &&
                                5 === Ee) ||
                              (108 === Ne &&
                                110 === Pe &&
                                114 === Re &&
                                6 === Ee) ||
                              (97 === Ne &&
                                116 === Pe &&
                                101 === Re &&
                                (9 === Ee || 17 === Ee)) ||
                              (110 === Ne &&
                                114 === Pe &&
                                108 === Re &&
                                6 === Ee) ||
                              (98 === Ne &&
                                99 === Pe &&
                                115 === Re &&
                                9 === Ee) ||
                              (102 === Ne &&
                                114 === Pe &&
                                115 === Re &&
                                8 === Ee) ||
                              (98 === Ne &&
                                116 === Pe &&
                                104 === Re &&
                                4 === Ee) ||
                              (110 === Ne &&
                                110 === Pe &&
                                101 === Re &&
                                4 === Ee) ||
                              (114 === Ne &&
                                110 === Pe &&
                                103 === Re &&
                                7 === Ee) ||
                              (112 === Ne &&
                                117 === Pe &&
                                100 === Re &&
                                6 === Ee) ||
                              (114 === Ne &&
                                118 === Pe &&
                                100 === Re &&
                                8 === Ee) ||
                              (115 === Ne &&
                                101 === Pe &&
                                ((116 === Re && 10 === Ee) ||
                                  (100 === Re && 8 === Ee))) ||
                              (101 === Ne &&
                                115 === Pe &&
                                ((101 === Re && 4 === Ee) ||
                                  ((11 === Ee || 7 === Ee || 8 === Ee) &&
                                    45 === Me.charCodeAt(4)))) ||
                              !isNaN(parseFloat(Me)) ||
                              -1 !== Me.indexOf('(') ||
                              (_e[Oe] = j + Me)
                          }
                          D += (0 === ye ? '' : ',') + _e.join(' ').trim()
                        }
                      } else
                        D +=
                          (110 !== W.charCodeAt(10) ? '' : j) +
                          W.substring(z).trim().trim()
                      W = x + D + ';' + D + (125 === ee ? ';}' : ';')
                    } else if (97 === G && 112 === H && 112 === I)
                      W = x + W + b + W + W
                    else if (100 === G && 105 === H && 115 === I)
                      -1 !== (B = W.indexOf('flex')) &&
                        ((T = 101 === W.charCodeAt(B - 2)
                          ? 'inline-'
                          : ''), (W = -1 !== W.indexOf(' !important')
                          ? ' !important'
                          : ''), (W =
                          'display: ' +
                          x +
                          T +
                          'box' +
                          W +
                          ';display: ' +
                          x +
                          T +
                          'flex' +
                          W +
                          ';display: ' +
                          m +
                          'flexbox' +
                          W +
                          ';display: ' +
                          T +
                          'flex' +
                          W +
                          ';'))
                    else if (
                      116 === G &&
                      ((114 === H && 97 === I) || (101 === H && 120 === I))
                    )
                      W = x + W + (102 === W.charCodeAt(5) ? m + W : '') + W
                    else if (
                      (104 === G && 121 === H && 112 === I) ||
                      (117 === G && 115 === H && 101 === I)
                    )
                      W = x + W + b + W + m + W + W
                    else if (102 === G && 108 === H && 101 === I)
                      W = x + W + m + W + W
                    else if (111 === G && 114 === H && 100 === I)
                      W = x + W + m + 'flex-' + W + W
                    else if (
                      97 === G &&
                      108 === H &&
                      105 === I &&
                      45 === W.charCodeAt(5)
                    )
                      switch (W.charCodeAt(6)) {
                        case 105:
                          (T = W.replace('-items', '')), (W =
                            x + W + x + 'box-' + T + m + 'flex-' + T + W)
                          break
                        case 115:
                          W = m + 'flex-item-' + W.replace('-self', '') + W
                          break
                        default:
                          W =
                            m +
                            'flex-line-pack' +
                            W.replace('align-content', '') +
                            W
                      }
                    else
                      106 === G && 117 === H && 115 === I
                        ? ((z = W.indexOf(':')), (T = W.substring(z).replace(
                            'flex-',
                            '',
                          )), (W =
                            x +
                            'box-pack' +
                            T +
                            x +
                            W +
                            m +
                            'flex-pack' +
                            T +
                            W))
                        : 99 === G &&
                            117 === H &&
                            114 === I &&
                            null !== /zoo|gra/.exec(W)
                            ? (W =
                                W.replace(g, ': ' + x) +
                                W.replace(g, ': ' + b) +
                                W)
                            : 119 === G &&
                                105 === H &&
                                100 === I &&
                                -1 !== (B = W.indexOf('-content')) &&
                                ((T = W.substring(B - 3)), (W =
                                  'width: ' +
                                  x +
                                  T +
                                  'width: ' +
                                  b +
                                  T +
                                  'width: ' +
                                  T))
                    59 !== ee &&
                      ((W = W.substring(0, W.length - 1)), 125 === ee &&
                        (W += '}'))
                  }
                  125 === ee &&
                    (0 !== pe && pe--, 0 === pe &&
                      1 === ie &&
                      ((v =
                        v.substring(0, ge + 1) +
                        L +
                        v.substring(ge + 1)), (xe += L.length), (L =
                        ''), (ie = 0), ne++), 125 !== G &&
                      32 === W.charCodeAt(W.length - 2) &&
                      (W = W.substring(0, W.length - 1).trim() + '}')), 0 !== re
                    ? (125 === ee ? ne++ : 123 === ee && 0 !== ne && ne--, 0 ===
                        ne
                        ? (1 === N &&
                            ((W = '}@' + K + '}'), (K =
                              '')), (N = 0), ne--, re--)
                        : 1 === N && (K += W))
                    : 0 === pe &&
                        125 !== ee &&
                        ((ue = 1), (Y = void 0 === Y ? W : Y + W), (W = ''))
                }
                ;(X += W), ((125 === ee && 0 === N) || 1 === te) &&
                  ((O = X.charCodeAt(X.length - 2)), 1 === te &&
                    (123 === O
                      ? ((X = U), (O = 0))
                      : 123 === ee ? (X = U + X) : (X += U), (te = 0), (U =
                      '')), 123 !== O &&
                    (!0 === E &&
                      null != (T = w(3, X, me, be, _, ve.length)) &&
                      (X = T), 1 === se &&
                      (void 0 === S && (S = h), (se = 0), (T =
                        'input-place'), (X =
                        X.replace(S, '::' + x + T) +
                        X.replace(S, '::' + b + 'place') +
                        X.replace(S, ':' + m + T) +
                        X)), (ve += X)), (X = '')), (W = '')
              } else if (13 === ee || 10 === ee)
                1 === he
                  ? ((fe = he = 0), (W = W.substring(
                      0,
                      W.indexOf('//'),
                    ).trim()))
                  : !0 === E &&
                      0 === fe &&
                      0 !== (R = (Q = Q.trim()).length) &&
                      47 !== Q.charCodeAt(0) &&
                      (0 !== W.length &&
                        null != (T = w(7, Q, me, be, _, ve.length)) &&
                        (W = W.replace(new RegExp(Q + '$'), T).trim()), (Q =
                        '')), (be = 0), me++
              else {
                if (9 !== ee)
                  switch ((($ = v.charAt(ge)), !0 === E &&
                    0 === fe &&
                    (Q += $), (W += $), ee)) {
                    case 44:
                      0 === oe && 0 === fe && 0 === ae && (W += '\n')
                      break
                    case 34:
                      0 === fe && (oe = 34 === oe ? 0 : 39 === oe ? 39 : 34)
                      break
                    case 39:
                      0 === fe && (oe = 39 === oe ? 0 : 34 === oe ? 34 : 39)
                      break
                    case 40:
                      0 === oe && 0 === fe && (ae = 1)
                      break
                    case 41:
                      0 === oe && 0 === fe && (ae = 0)
                      break
                    case 47:
                      0 === oe &&
                        0 === ae &&
                        ((O = v.charCodeAt(ge - 1)), 0 === de && 47 === O
                          ? (fe = he = 1)
                          : 42 === O &&
                              ((fe = de = 0), (W = W.substring(
                                0,
                                W.indexOf('/*'),
                              ).trim())))
                      break
                    case 42:
                      0 === oe &&
                        0 === ae &&
                        0 === he &&
                        0 === de &&
                        47 === v.charCodeAt(ge - 1) &&
                        (fe = de = 1)
                  }
                be++
              }
              ge++
            }
            return void 0 !== Y &&
              0 !== Y.length &&
              ((Y = _ + ' {' + Y + '}'), !0 === E &&
                null != (T = w(4, Y, me, be, _, ve.length)) &&
                (Y = T), (ve += Y)), !0 === E && null != (T = w(6, ve, me, be, _, ve.length)) && (ve = T), ve
          }
          function r(e) {
            var r = l.length
            if (null != e)
              if (e.constructor === Array)
                for (var n = 0, i = e.length; n < i; n++)
                  l[r++] = e[n]
              else l[r] = e
            return t
          }
          function n(e, t, r, n, i, a) {
            for (
              var o = t, c = 0, s = l.length;
              c < s;
              c++
            ) o = l[c](e, o, r, n, i, a) || o
            if (o !== t) return o
          }
          var l = [],
            i = /&/g,
            a = / +&/,
            o = /,\n/g,
            c = /:global\(%?((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
            s = /(?:&| ):global\(%?((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
            u = /:host\((.*)\)/g,
            f = /:host-context\((.*)\)/g,
            d = /\n/g,
            h = /::place/g,
            g = /: +/g,
            p = /[ .#~+><\d]+/g,
            b = '-moz-',
            m = '-ms-',
            x = '-webkit-'
          return (t.use = r), (t.p = l), (t.r = { a: i, s: o, g: c, n: s }), t
        })
      }.call(t, r(5)))
    },
    function(e, t) {
      var r
      r = (function() {
        return this
      })()
      try {
        r = r || Function('return this')() || (0, eval)('this')
      } catch (e) {
        'object' == typeof window && (r = window)
      }
      e.exports = r
    },
  ])
})
