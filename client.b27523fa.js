const e = ()=>{}
  , u = t=>(o,n,c,{client: l})=>{
    if (!t.hasAttribute("ssr"))
        return;
    delete n.class;
    const r = {};
    for (const [s,a] of Object.entries(c))
        r[s] = i(s, a);
    try {
        new o({
            target: t,
            props: {
                ...n,
                $$slots: r,
                $$scope: {
                    ctx: []
                }
            },
            hydrate: l !== "only",
            $$inline: !0
        })
    } catch {}
}
;
function i(t, o) {
    return [()=>({
        m(n) {
            n.insertAdjacentHTML("beforeend", `<astro-slot ${t === "default" ? "" : ` name="${t}"`}>${o}</astro-slot>`)
        },
        c: e,
        l: e,
        d: e
    }), e, e]
}
export {u as default};
