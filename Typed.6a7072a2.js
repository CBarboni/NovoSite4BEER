import {S as w, i as L, s as S, e as g, t as _, a as q, c as b, b as D, d as k, f as A, g as y, h as T, j as p, k as I, l as m, m as M, n as B, o as j, p as C} from "./chunks/index.d2aedbd4.js";
/* empty css                                                    */
function E(o) {
    let e, s, l, i, c;
    return {
        c() {
            e = g("div"),
            s = _(o[0]),
            l = q(),
            i = g("span"),
            c = _("|"),
            this.h()
        },
        l(a) {
            e = b(a, "DIV", {
                class: !0
            });
            var t = D(e);
            s = k(t, o[0]),
            l = A(t),
            i = b(t, "SPAN", {
                class: !0
            });
            var r = D(i);
            c = k(r, "|"),
            r.forEach(y),
            t.forEach(y),
            this.h()
        },
        h() {
            T(i, "class", "text-3xl svelte-11avhtr"),
            p(i, "blinking", o[1]),
            T(e, "class", "mb-4 flex justify-center text-4xl font-semibold")
        },
        m(a, t) {
            I(a, e, t),
            m(e, s),
            m(e, l),
            m(e, i),
            m(i, c)
        },
        p(a, [t]) {
            t & 1 && M(s, a[0]),
            t & 2 && p(i, "blinking", a[1])
        },
        i: B,
        o: B,
        d(a) {
            a && y(e)
        }
    }
}
function F(o, e, s) {
    let {textList: l} = e
      , {typeDelay: i=100} = e
      , {backspaceDelay: c=50} = e
      , {delayBetweenWords: a=2100} = e
      , t = 0
      , r = l?.length > 0 ? l[0] : ""
      , u = !0
      , f = !1
      , d = null;
    const W = n=>Math.round(Math.random() * n / 2) + n
      , h = ()=>{
        if (s(1, u = !1),
        f)
            r === l[t] ? (f = !1,
            s(1, u = !0)) : s(0, r += l[t].replace(r, "")[0]);
        else {
            const x = (t + 1) % l.length;
            r === "" || l[x].startsWith(r) ? (f = !0,
            t = x) : s(0, r = r.substring(0, r.length - 1))
        }
        const n = W(f ? i : c);
        d = setTimeout(()=>requestAnimationFrame(h), u ? a : n)
    }
    ;
    return j(()=>{
        d = setTimeout(()=>requestAnimationFrame(h), a)
    }
    ),
    C(()=>{
        clearTimeout(d)
    }
    ),
    o.$$set = n=>{
        "textList"in n && s(2, l = n.textList),
        "typeDelay"in n && s(3, i = n.typeDelay),
        "backspaceDelay"in n && s(4, c = n.backspaceDelay),
        "delayBetweenWords"in n && s(5, a = n.delayBetweenWords)
    }
    ,
    [r, u, l, i, c, a]
}
class N extends w {
    constructor(e) {
        super(),
        L(this, e, F, E, S, {
            textList: 2,
            typeDelay: 3,
            backspaceDelay: 4,
            delayBetweenWords: 5
        })
    }
}
export {N as default};
