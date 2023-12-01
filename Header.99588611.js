import {S as K, i as N, s as P, q as ve, r as Y, u as ce, v as J, b as p, g as f, h as c, k as z, l as h, w as pe, x as we, y as be, z as I, A as q, t as ee, d as te, m as $e, B as C, C as O, D as R, E as U, F as he, G as me, H as Q, I as G, n as le, e as S, a as x, c as k, f as T, j as d, J as ye, K as Ee, L as Se, M as ke, o as Ae, p as Be, N as Le} from "./chunks/index.d2aedbd4.js";
/* empty css                                                    */
function fe(r) {
    let e, t;
    return {
        c() {
            e = Y("title"),
            t = ee(r[0])
        },
        l(l) {
            e = J(l, "title", {});
            var s = p(e);
            t = te(s, r[0]),
            s.forEach(f)
        },
        m(l, s) {
            z(l, e, s),
            h(e, t)
        },
        p(l, s) {
            s & 1 && $e(t, l[0])
        },
        d(l) {
            l && f(e)
        }
    }
}
function De(r) {
    let e, t, l, s = r[0] && fe(r);
    const n = r[3].default
      , o = ve(n, r, r[2], null);
    return {
        c() {
            e = Y("svg"),
            s && s.c(),
            t = ce(),
            o && o.c(),
            this.h()
        },
        l(a) {
            e = J(a, "svg", {
                xmlns: !0,
                viewBox: !0,
                class: !0
            });
            var _ = p(e);
            s && s.l(_),
            t = ce(),
            o && o.l(_),
            _.forEach(f),
            this.h()
        },
        h() {
            c(e, "xmlns", "http://www.w3.org/2000/svg"),
            c(e, "viewBox", r[1]),
            c(e, "class", "svelte-n8v3p5")
        },
        m(a, _) {
            z(a, e, _),
            s && s.m(e, null),
            h(e, t),
            o && o.m(e, null),
            l = !0
        },
        p(a, [_]) {
            a[0] ? s ? s.p(a, _) : (s = fe(a),
            s.c(),
            s.m(e, t)) : s && (s.d(1),
            s = null),
            o && o.p && (!l || _ & 4) && pe(o, n, a, a[2], l ? be(n, a[2], _, null) : we(a[2]), null),
            (!l || _ & 2) && c(e, "viewBox", a[1])
        },
        i(a) {
            l || (I(o, a),
            l = !0)
        },
        o(a) {
            q(o, a),
            l = !1
        },
        d(a) {
            a && f(e),
            s && s.d(),
            o && o.d(a)
        }
    }
}
function Ie(r, e, t) {
    let {$$slots: l={}, $$scope: s} = e
      , {title: n=null} = e
      , {viewBox: o} = e;
    return r.$$set = a=>{
        "title"in a && t(0, n = a.title),
        "viewBox"in a && t(1, o = a.viewBox),
        "$$scope"in a && t(2, s = a.$$scope)
    }
    ,
    [n, o, s, l]
}
class _e extends K {
    constructor(e) {
        super(),
        N(this, e, Ie, De, P, {
            title: 0,
            viewBox: 1
        })
    }
}
function qe(r) {
    let e;
    return {
        c() {
            e = Y("path"),
            this.h()
        },
        l(t) {
            e = J(t, "path", {
                d: !0
            }),
            p(e).forEach(f),
            this.h()
        },
        h() {
            c(e, "d", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z")
        },
        m(t, l) {
            z(t, e, l)
        },
        p: le,
        d(t) {
            t && f(e)
        }
    }
}
function He(r) {
    let e, t;
    const l = [{
        viewBox: "0 0 448 512"
    }, r[0]];
    let s = {
        $$slots: {
            default: [qe]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let n = 0; n < l.length; n += 1)
        s = C(s, l[n]);
    return e = new _e({
        props: s
    }),
    {
        c() {
            O(e.$$.fragment)
        },
        l(n) {
            R(e.$$.fragment, n)
        },
        m(n, o) {
            U(e, n, o),
            t = !0
        },
        p(n, [o]) {
            const a = o & 1 ? he(l, [l[0], me(n[0])]) : {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: n
            }),
            e.$set(a)
        },
        i(n) {
            t || (I(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            q(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function Me(r, e, t) {
    return r.$$set = l=>{
        t(0, e = C(C({}, e), G(l)))
    }
    ,
    e = G(e),
    [e]
}
class Ve extends K {
    constructor(e) {
        super(),
        N(this, e, Me, He, P, {})
    }
}
function Ce(r) {
    let e;
    return {
        c() {
            e = Y("path"),
            this.h()
        },
        l(t) {
            e = J(t, "path", {
                d: !0
            }),
            p(e).forEach(f),
            this.h()
        },
        h() {
            c(e, "d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z")
        },
        m(t, l) {
            z(t, e, l)
        },
        p: le,
        d(t) {
            t && f(e)
        }
    }
}
function ze(r) {
    let e, t;
    const l = [{
        viewBox: "0 0 352 512"
    }, r[0]];
    let s = {
        $$slots: {
            default: [Ce]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let n = 0; n < l.length; n += 1)
        s = C(s, l[n]);
    return e = new _e({
        props: s
    }),
    {
        c() {
            O(e.$$.fragment)
        },
        l(n) {
            R(e.$$.fragment, n)
        },
        m(n, o) {
            U(e, n, o),
            t = !0
        },
        p(n, [o]) {
            const a = o & 1 ? he(l, [l[0], me(n[0])]) : {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: n
            }),
            e.$set(a)
        },
        i(n) {
            t || (I(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            q(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function Fe(r, e, t) {
    return r.$$set = l=>{
        t(0, e = C(C({}, e), G(l)))
    }
    ,
    e = G(e),
    [e]
}
class je extends K {
    constructor(e) {
        super(),
        N(this, e, Fe, ze, P, {})
    }
}
const ge = r=>{
    let e = 0
      , t = !1;
    return ()=>{
        e = window.scrollY,
        !t && (window.requestAnimationFrame(()=>{
            r(e),
            t = !1
        }
        ),
        t = !0)
    }
}
  , xe = {
    menuSelector: "nav",
    activeClass: "active",
    offset: 0
}
  , Te = r=>{
    const e = {
        ...xe,
        ...r
    };
    let t = null
      , l = null
      , s = [];
    const o = ge(A=>{
        const w = s.find(v=>{
            const L = document.querySelector(`#${v}`);
            if (L == null)
                return !1;
            const y = L.offsetTop
              , H = y + L.offsetHeight;
            let B = A + e.offset;
            return B > y && B < H
        }
        );
        if (w == null)
            return;
        const b = document.querySelector(`[data-spy=${w}]`);
        b != null && (l?.forEach(v=>v.classList.remove(e.activeClass)),
        b.classList.add(e.activeClass))
    }
    );
    return {
        mount: ()=>{
            t = e.targetSelector != null ? document.querySelector(e.targetSelector) : window,
            l = document.querySelectorAll(e.menuSelector),
            s = Array.from(l).flatMap(A=>{
                const w = A.getAttribute("data-spy");
                return w ?? []
            }
            ),
            t?.addEventListener("scroll", o)
        }
        ,
        destroy: ()=>{
            t?.removeEventListener("scroll", o)
        }
    }
}
;
function ue(r, e, t) {
    const l = r.slice();
    return l[6] = e[t],
    l
}
function Ge(r) {
    let e, t;
    return e = new Ve({}),
    {
        c() {
            O(e.$$.fragment)
        },
        l(l) {
            R(e.$$.fragment, l)
        },
        m(l, s) {
            U(e, l, s),
            t = !0
        },
        i(l) {
            t || (I(e.$$.fragment, l),
            t = !0)
        },
        o(l) {
            q(e.$$.fragment, l),
            t = !1
        },
        d(l) {
            Q(e, l)
        }
    }
}
function Ke(r) {
    let e, t;
    return e = new je({}),
    {
        c() {
            O(e.$$.fragment)
        },
        l(l) {
            R(e.$$.fragment, l)
        },
        m(l, s) {
            U(e, l, s),
            t = !0
        },
        i(l) {
            t || (I(e.$$.fragment, l),
            t = !0)
        },
        o(l) {
            q(e.$$.fragment, l),
            t = !1
        },
        d(l) {
            Q(e, l)
        }
    }
}
function de(r) {
    let e, t, l = r[6].label + "", s;
    return {
        c() {
            e = S("a"),
            t = S("div"),
            s = ee(l),
            this.h()
        },
        l(n) {
            e = k(n, "A", {
                href: !0,
                "data-spy": !0
            });
            var o = p(e);
            t = k(o, "DIV", {
                class: !0
            });
            var a = p(t);
            s = te(a, l),
            a.forEach(f),
            o.forEach(f),
            this.h()
        },
        h() {
            c(t, "class", "px-4 py-2 text-sm font-semibold uppercase hover:text-primary-500"),
            c(e, "href", r[6].url),
            c(e, "data-spy", r[6].spy)
        },
        m(n, o) {
            z(n, e, o),
            h(e, t),
            h(t, s)
        },
        p: le,
        d(n) {
            n && f(e)
        }
    }
}
function Ne(r) {
    let e, t, l, s, n, o, a, _, A, w, b, v, L, y, H, B, M, W, $, X, se;
    const ne = [Ke, Ge]
      , D = [];
    function re(i, u) {
        return i[1] ? 0 : 1
    }
    b = re(r),
    v = D[b] = ne[b](r);
    let V = r[2]
      , g = [];
    for (let i = 0; i < V.length; i += 1)
        g[i] = de(ue(r, V, i));
    return {
        c() {
            e = S("header"),
            t = S("div"),
            l = x(),
            s = S("nav"),
            n = S("div"),
            o = S("a"),
            a = S("img"),
            A = x(),
            w = S("div"),
            v.c(),
            L = x(),
            y = S("div");
            for (let i = 0; i < g.length; i += 1)
                g[i].c();
            H = x(),
            B = S("a"),
            M = S("div"),
            W = ee("Download"),
            this.h()
        },
        l(i) {
            e = k(i, "HEADER", {
                class: !0
            });
            var u = p(e);
            t = k(u, "DIV", {
                class: !0
            }),
            p(t).forEach(f),
            l = T(u),
            s = k(u, "NAV", {
                class: !0
            });
            var E = p(s);
            n = k(E, "DIV", {
                class: !0
            });
            var m = p(n);
            o = k(m, "A", {
                href: !0
            });
            var F = p(o);
            a = k(F, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }),
            F.forEach(f),
            A = T(m),
            w = k(m, "DIV", {
                class: !0
            });
            var ae = p(w);
            v.l(ae),
            ae.forEach(f),
            m.forEach(f),
            L = T(E),
            y = k(E, "DIV", {
                class: !0
            });
            var j = p(y);
            for (let Z = 0; Z < g.length; Z += 1)
                g[Z].l(j);
            H = T(j),
            B = k(j, "A", {
                href: !0
            });
            var oe = p(B);
            M = k(oe, "DIV", {
                class: !0
            });
            var ie = p(M);
            W = te(ie, "Download"),
            ie.forEach(f),
            oe.forEach(f),
            j.forEach(f),
            E.forEach(f),
            u.forEach(f),
            this.h()
        },
        h() {
            c(t, "class", "absolute top-0 left-0 right-0 bg-gray-800 transition-all duration-300"),
            d(t, "lg:h-16", r[0]),
            d(t, "lg:h-0", !r[0]),
            d(t, "h-16", !r[1]),
            d(t, "h-64", r[1]),
            ye(a.src, _ = "/images/logo.svg") || c(a, "src", _),
            c(a, "alt", "2U yellow logo"),
            c(a, "class", "my-3 w-20"),
            c(o, "href", "/"),
            c(w, "class", "h-8 w-8 cursor-pointer lg:hidden"),
            c(n, "class", "flex w-full items-center justify-between"),
            c(M, "class", "rounded-full border-2 border-solid border-primary-500 px-6 py-2 text-sm font-semibold uppercase text-primary-500 transition-all hover:bg-primary-500 hover:text-gray-800"),
            c(B, "href", "/#download"),
            c(y, "class", "flex flex-col items-center gap-1 lg:flex-row"),
            c(s, "class", "container relative flex flex-col items-center justify-between overflow-hidden px-8 transition-all duration-300 lg:mx-auto lg:flex-row"),
            d(s, "lg:h-16", r[0]),
            d(s, "lg:h-32", !r[0]),
            d(s, "h-16", !r[1]),
            d(s, "h-60", r[1]),
            c(e, "class", "fixed top-0 left-0 right-0 z-50"),
            d(e, "shadow-md", r[0])
        },
        m(i, u) {
            z(i, e, u),
            h(e, t),
            h(e, l),
            h(e, s),
            h(s, n),
            h(n, o),
            h(o, a),
            h(n, A),
            h(n, w),
            D[b].m(w, null),
            h(s, L),
            h(s, y);
            for (let E = 0; E < g.length; E += 1)
                g[E].m(y, null);
            h(y, H),
            h(y, B),
            h(B, M),
            h(M, W),
            $ = !0,
            X || (se = Ee(w, "click", r[3]),
            X = !0)
        },
        p(i, [u]) {
            (!$ || u & 1) && d(t, "lg:h-16", i[0]),
            (!$ || u & 1) && d(t, "lg:h-0", !i[0]),
            (!$ || u & 2) && d(t, "h-16", !i[1]),
            (!$ || u & 2) && d(t, "h-64", i[1]);
            let E = b;
            if (b = re(i),
            b !== E && (Le(),
            q(D[E], 1, 1, ()=>{
                D[E] = null
            }
            ),
            Se(),
            v = D[b],
            v || (v = D[b] = ne[b](i),
            v.c()),
            I(v, 1),
            v.m(w, null)),
            u & 4) {
                V = i[2];
                let m;
                for (m = 0; m < V.length; m += 1) {
                    const F = ue(i, V, m);
                    g[m] ? g[m].p(F, u) : (g[m] = de(F),
                    g[m].c(),
                    g[m].m(y, H))
                }
                for (; m < g.length; m += 1)
                    g[m].d(1);
                g.length = V.length
            }
            (!$ || u & 1) && d(s, "lg:h-16", i[0]),
            (!$ || u & 1) && d(s, "lg:h-32", !i[0]),
            (!$ || u & 2) && d(s, "h-16", !i[1]),
            (!$ || u & 2) && d(s, "h-60", i[1]),
            (!$ || u & 1) && d(e, "shadow-md", i[0])
        },
        i(i) {
            $ || (I(v),
            $ = !0)
        },
        o(i) {
            q(v),
            $ = !1
        },
        d(i) {
            i && f(e),
            D[b].d(),
            ke(g, i),
            X = !1,
            se()
        }
    }
}
function Pe(r, e, t) {
    const l = [{
        label: "Sobre",
        url: "/#sobre",
        spy: "sobre"
    }, {
        label: "Solu\xE7\xF5es",
        url: "/#solucoes",
        spy: "solucoes"
    }, {
        label: "Funcionalidades",
        url: "/#funcionalidades",
        spy: "funcionalidades"
    }];
    let s = !1
      , n = !1;
    const o = ge(A=>t(0, s = A > 0))
      , a = Te({
        activeClass: "text-primary-500",
        menuSelector: "header nav > div > a",
        offset: 70
    })
      , _ = ()=>{
        t(1, n = !n)
    }
    ;
    return Ae(()=>{
        typeof window < "u" && (window.addEventListener("scroll", o),
        t(0, s = window.scrollY > 0),
        a.mount())
    }
    ),
    Be(()=>{
        typeof window < "u" && (window.removeEventListener("scroll", o),
        a.destroy())
    }
    ),
    [s, n, l, _]
}
class Oe extends K {
    constructor(e) {
        super(),
        N(this, e, Pe, Ne, P, {})
    }
}
export {Oe as default};
