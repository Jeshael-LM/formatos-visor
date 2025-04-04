(function() {
    var e = {
        700: function(e, t, i) {
            "use strict";
            var o = i(144)
              , s = i(3726)
              , n = i(4741)
              , r = i(7828)
              , l = i(1819)
              , a = i(7690)
              , d = i(6930)
              , c = i(9088)
              , u = i(3102)
              , h = i(9312)
              , m = i(8741)
              , p = i(2515)
              , f = i(2732)
              , v = i(3845)
              , g = i(9444)
              , x = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t(s.Z, [t(h.Z, {
                    attrs: {
                        absolute: "",
                        stateless: "",
                        width: e.drawerWidth
                    },
                    on: {
                        transitionend: function(t) {
                            !e.drawer && (e.drawerSwitch = !0)
                        }
                    },
                    model: {
                        value: e.drawer,
                        callback: function(t) {
                            e.drawer = t
                        },
                        expression: "drawer"
                    }
                }, [t(f.Z, {
                    attrs: {
                        color: "primary"
                    }
                }, [t(v.qW, [e._v("Live2D Viewer")]), t(p.Z), t(r.Z, {
                    attrs: {
                        group: "",
                        rounded: ""
                    },
                    model: {
                        value: e.tab,
                        callback: function(t) {
                            e.tab = t
                        },
                        expression: "tab"
                    }
                }, [t(n.Z, {
                    attrs: {
                        icon: ""
                    }
                }, [t(c.Z, [e._v("mdi-cog")])], 1)], 1), t(n.Z, {
                    staticClass: "ml-1",
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            return e.showUI(!1)
                        }
                    }
                }, [t(c.Z, [e._v("mdi-close")])], 1)], 1), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: void 0 === e.tab,
                        expression: "tab===undefined"
                    }],
                    staticClass: "model-page"
                }, [t("div", {
                    staticClass: "header pa-3"
                }, [t("div", {
                    staticClass: "d-flex align-center"
                }, [t("div", {
                    staticClass: "text-h4"
                }, [e._v(e._s("#" + e.selectedModelID))]), t(p.Z), t(n.Z, {
                    staticClass: "mr-n3",
                    attrs: {
                        icon: "",
                        width: "48",
                        height: "48"
                    },
                    on: {
                        click: function(t) {
                            e.creation.dialog = !0
                        }
                    }
                }, [t(c.Z, [e._v("mdi-plus")])], 1)], 1), t(g.Z, {
                    attrs: {
                        top: "",
                        disabled: !e.selectedModelID
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function({on: i, attrs: o}) {
                            return [t("div", e._g(e._b({
                                class: ["model-name mt-2 text-h5", {
                                    valid: e.selectedModelID
                                }],
                                on: {
                                    click: function(t) {
                                        e.selectedModelID && (e.modelInfoDialog = !0)
                                    }
                                }
                            }, "div", o, !1), i), [e._v(" " + e._s(e.selectedModelID ? e.modelName : "Press + to create a model") + " ")])]
                        }
                    }])
                }, [e._v(" Show info ")])], 1), t(a.Z), t("ModelEditor", {
                    attrs: {
                        id: e.selectedModelID,
                        visible: e.drawer && void 0 === e.tab
                    }
                })], 1), t("Settings", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === e.tab,
                        expression: "tab===0"
                    }]
                })], 1), t(u.Z, {
                    style: {
                        paddingLeft: `${e.drawerWidth}px !important`
                    }
                }, [t(l.Z, {
                    staticClass: "pa-0 fill-height flex-column",
                    attrs: {
                        fluid: ""
                    }
                }, [t(p.Z), t("ModelList", {
                    attrs: {
                        show: e.modelList.visible
                    },
                    model: {
                        value: e.selectedModelID,
                        callback: function(t) {
                            e.selectedModelID = t
                        },
                        expression: "selectedModelID"
                    }
                })], 1), t("ModelCreation", {
                    on: {
                        create: function(t) {
                            e.selectedModelID = t
                        }
                    },
                    model: {
                        value: e.creation.dialog,
                        callback: function(t) {
                            e.$set(e.creation, "dialog", t)
                        },
                        expression: "creation.dialog"
                    }
                }), t("ModelInfo", {
                    attrs: {
                        id: e.selectedModelID
                    },
                    model: {
                        value: e.modelInfoDialog,
                        callback: function(t) {
                            e.modelInfoDialog = t
                        },
                        expression: "modelInfoDialog"
                    }
                })], 1), t(d.b0, [t(n.Z, {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.drawerSwitch,
                        expression: "drawerSwitch"
                    }],
                    attrs: {
                        fab: "",
                        top: "",
                        left: "",
                        absolute: "",
                        dark: "",
                        color: "accent"
                    },
                    on: {
                        click: function(t) {
                            return e.showUI(!0)
                        }
                    }
                }, [t(c.Z, [e._v("mdi-plus")])], 1)], 1), t("DropZone", {
                    on: {
                        create: function(t) {
                            e.selectedModelID = t
                        },
                        error: e.error
                    }
                }), t(m.Z, {
                    attrs: {
                        timeout: e.snackbar.timeout
                    },
                    scopedSlots: e._u([{
                        key: "action",
                        fn: function({attrs: i}) {
                            return [t(n.Z, e._b({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(t) {
                                        e.snackbar.visible = !1
                                    }
                                }
                            }, "v-btn", i, !1), [t(c.Z, [e._v("mdi-close")])], 1)]
                        }
                    }]),
                    model: {
                        value: e.snackbar.visible,
                        callback: function(t) {
                            e.$set(e.snackbar, "visible", t)
                        },
                        expression: "snackbar.visible"
                    }
                }, [e._v(" " + e._s(e.snackbar.message) + " ")])], 1)
            }
              , b = []
              , w = i(3816)
              , _ = i(5255)
              , y = i(1584)
              , M = i(1689)
              , k = i(1569)
              , Z = i(7935)
              , F = i(7894)
              , I = i(5227)
              , A = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t(d.V, [e.show && e.models.length ? t(I.Z, {
                    staticClass: "model-list",
                    attrs: {
                        width: "100%"
                    }
                }, [t(k.Z, {
                    staticClass: "flex-grow-1",
                    attrs: {
                        mandatory: "",
                        value: e.selectedIndex
                    },
                    on: {
                        change: e.select
                    }
                }, [t("transition-group", {
                    staticClass: "model-group d-flex pa-1 pa-xl-2",
                    attrs: {
                        name: "move"
                    }
                }, e._l(e.models, (function(i, o) {
                    return t(M.Z, {
                        key: i.id,
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function({active: o, toggle: s}) {
                                return [t(w.Z, {
                                    staticClass: "ma-1 ma-xl-2",
                                    attrs: {
                                        color: i.error ? "#631f1f" : o ? "grey darken-2" : "grey darken-3"
                                    },
                                    on: {
                                        click: s
                                    }
                                }, [t(g.Z, {
                                    attrs: {
                                        top: "",
                                        disabled: !i.error
                                    },
                                    scopedSlots: e._u([{
                                        key: "activator",
                                        fn: function({on: s, attrs: r}) {
                                            return [t(y.Z, e._g(e._b({
                                                attrs: {
                                                    src: i.thumbnail,
                                                    width: i.error ? e.paneHeight : i.aspectRatio * e.paneHeight,
                                                    height: e.paneHeight
                                                },
                                                scopedSlots: e._u([{
                                                    key: "placeholder",
                                                    fn: function() {
                                                        return [t(F.Z, {
                                                            staticClass: "fill-height ma-0",
                                                            attrs: {
                                                                align: "center",
                                                                justify: "center"
                                                            }
                                                        }, [i.error ? t(c.Z, [e._v("mdi-alert-circle")]) : t(Z.Z, {
                                                            attrs: {
                                                                indeterminate: "",
                                                                color: "grey lighten-5"
                                                            }
                                                        })], 1)]
                                                    },
                                                    proxy: !0
                                                }], null, !0)
                                            }, "v-img", r, !1), s), [t(_.EB, {
                                                staticClass: "ml-1 pa-0 flex-nowrap text-subtitle-2 text-xl-subtitle-1"
                                            }, [t("span", {
                                                staticClass: "model-item-title text-truncate"
                                            }, [e._v(e._s("#" + i.id + " " + i.name))]), t(p.Z), o ? t(n.Z, {
                                                attrs: {
                                                    icon: ""
                                                },
                                                on: {
                                                    click: function(t) {
                                                        return t.stopPropagation(),
                                                        e.remove(i.id)
                                                    }
                                                }
                                            }, [t(c.Z, {
                                                attrs: {
                                                    size: "20"
                                                }
                                            }, [e._v("mdi-close")])], 1) : e._e()], 1)], 1)]
                                        }
                                    }], null, !0)
                                }, [e._v(" " + e._s(i.error) + " ")])], 1)]
                            }
                        }], null, !0)
                    })
                }
                )), 1)], 1)], 1) : e._e()], 1)
            }
              , C = []
              , E = i(655)
              , S = i(5156)
              , L = i(8337)
              , O = i(2647)
              , P = i(2109)
              , D = i(5150)
              , R = i(1142)
              , N = i.n(R);
            async function T(e) {
                try {
                    return (await fetch(e)).ok
                } catch (t) {
                    return !1
                }
            }
            var j = i(6865)
              , U = i(3990)
              , $ = i(9618);
            function B(e) {
                return e.endsWith("model.json")
            }
            function V(e) {
                return e.endsWith("model3.json")
            }
            function H(e) {
                return B(e) || V(e)
            }
            function G(e) {
                return e.endsWith(".moc")
            }
            function z(e) {
                return e.endsWith(".moc3")
            }
            function W(e) {
                return G(e) || z(e)
            }
            let J = 0;
            const X = "https://cdn.jsdelivr.net/gh/"
              , Y = new Map
              , Q = ["Eikanya/Live2d-model", "guansss/pixi-live2d-display"].map((e => ({
                id: J++,
                name: e,
                children: [],
                files: [],
                modelCount: 0
            })))
              , q = {};
            function K() {
                return Q
            }
            function ee(e) {
                if (!Q.includes(e))
                    return Promise.resolve();
                if (!Y.get(e)) {
                    const t = fetch(e.name.toLowerCase().replace("/", "") + ".json").then((e => e.json())).then((t => {
                        e.name = t.models.name,
                        e.children = t.models.children,
                        e.files = t.models.files,
                        ie(e, (e => e.id = J++)),
                        te(e),
                        Object.assign(q, t.settings)
                    }
                    )).catch((t => e.error = t));
                    return Y.set(e, t),
                    t
                }
                return Y.get(e)
            }
            function te(e) {
                var t;
                e.modelCount = (null === (t = e.files) || void 0 === t ? void 0 : t.length) || 0;
                for (const i of e.children || [])
                    e.modelCount += te(i);
                return e.modelCount
            }
            function ie(e, t) {
                if (t(e),
                e.children)
                    for (const i of e.children)
                        ie(i, t)
            }
            function oe(e, t) {
                const i = ne(e);
                if (i) {
                    let e = encodeURI(i + "/" + t);
                    return X + e
                }
            }
            function se(e) {
                const t = e.replace(X, "")
                  , i = t.split("/")
                  , o = i.slice(0, 2).join("/")
                  , s = i.slice(2).join("/");
                return `https://raw.githubusercontent.com/${o}/master/${s}`
            }
            function ne(e) {
                const t = i => {
                    for (const o of i) {
                        if (o === e)
                            return o.name;
                        if (o.children) {
                            const e = t(o.children);
                            if (e)
                                return o.name + "/" + e
                        }
                    }
                }
                ;
                return t(Q)
            }
            function re(e) {
                if (!H(e) && !e.endsWith(".zip")) {
                    if (W(e)) {
                        if (le(e))
                            return;
                        return "Error: Cannot display a moc file that doesn't belong to any source repository"
                    }
                    return "Warning: Unknown URL type. The model may not be loaded correctly"
                }
            }
            function le(e) {
                if (e.startsWith(X)) {
                    let t = e.replace(X, "");
                    return t = decodeURI(t),
                    q[t]
                }
            }
            Q.forEach(ee),
            S.O3.middlewares[S.O3.middlewares.indexOf(S.iU.loader)] = async (e, t) => {
                const i = e.settings ? e.settings.resolveURL(e.url) : e.url;
                try {
                    return void await S.iU.loader(e, t)
                } catch (o) {
                    if (!o || 403 !== o.status || !i.includes("jsdelivr"))
                        throw o;
                    console.warn("Received 403 response from jsDelivr, switching to the alternative URL")
                }
                return e.url = se(i),
                await S.iU.loader(e, t),
                t()
            }
            ,
            S.fz.live2DModelMiddlewares[S.fz.live2DModelMiddlewares.indexOf(S.fz.urlToJSON)] = de;
            const ae = S.A.prototype.init;
            async function de(e, t) {
                var i, o, s, n;
                if ("string" === typeof e.source) {
                    const t = e.source;
                    let r;
                    if (W(t)) {
                        if (r = le(t),
                        !r)
                            throw new Error("Cannot find settings JSON from moc");
                        if (z(t)) {
                            r.url = $.HQ.resolve(t, "dummy.model3.json");
                            const e = r;
                            e.FileReferences.Moc = t,
                            (null === (o = null === (i = e.FileReferences.Motions) || void 0 === i ? void 0 : i[""]) || void 0 === o ? void 0 : o.length) && "string" === typeof e.FileReferences.Motions[""][0] && (e.FileReferences.Motions[""] = e.FileReferences.Motions[""].map((e => ({
                                File: e
                            }))))
                        } else {
                            r.url = $.HQ.resolve(t, "dummy.model.json");
                            const e = r;
                            e.model = t,
                            (null === (n = null === (s = e.motions) || void 0 === s ? void 0 : s[""]) || void 0 === n ? void 0 : n.length) && "string" === typeof e.motions[""][0] && (e.motions[""] = e.motions[""].map((e => ({
                                file: e
                            }))))
                        }
                    } else {
                        let e = await fetch(t).then((e => e.text()));
                        e = ce(e, t),
                        r = N().parse(e),
                        r.url = t
                    }
                    await ue(r, t),
                    pe(r),
                    e.source = r,
                    console.log(r),
                    e.live2dModel.emit("settingsJSONLoaded", r)
                }
                return t()
            }
            function ce(e, t) {
                for (const i of me)
                    t.includes(encodeURI(i.search)) && i.replace && (e = i.replace(e, t));
                return e
            }
            async function ue(e, t) {
                for (const i of me)
                    t.includes(encodeURI(i.search)) && i.patch && await i.patch(e, t)
            }
            async function he(e) {
                for (const t of me)
                    e.settings.url.includes(encodeURI(t.search)) && t.patchInternalModel && await t.patchInternalModel(e)
            }
            S.A.prototype.init = async function() {
                await he(this),
                ae.call(this)
            }
            ;
            const me = [{
                search: "魂器学院",
                replace(e) {
                    return e.replace(/mtn"([^,])/gm, 'mtn",$1')
                },
                patch(e) {
                    if (e.textures && !Array.isArray(e.textures)) {
                        const t = Object.values(e.textures)[0];
                        Array.isArray(t) && (e.textures = t.map((e => e.startsWith("textures/") ? e : "textures/" + e)))
                    }
                }
            }, {
                search: "少女前线",
                async patch(e, t) {
                    var i, o, s;
                    if (fe(e, ["daiji"]),
                    e.name || (e.name = (0,
                    S.LP)(t.replace(/(normal|destroy).model.json/, ""))),
                    null === (o = null === (i = e.motions) || void 0 === i ? void 0 : i.idle) || void 0 === o ? void 0 : o.length) {
                        const i = e.motions.idle[0];
                        if (null === (s = i.file) || void 0 === s ? void 0 : s.startsWith("daiji")) {
                            const e = await T($.HQ.resolve(t, i.file));
                            e || (i.file = "motions/" + i.file)
                        }
                    }
                }
            }, {
                search: "アンノウンブライド",
                async patch(e, t) {
                    var i, o;
                    if (0 === (null === (o = null === (i = e.FileReferences) || void 0 === i ? void 0 : i.Textures) || void 0 === o ? void 0 : o.length)) {
                        const i = await T($.HQ.resolve(t, "textures/texture_00.png"));
                        e.FileReferences.Textures.push(i ? "textures/texture_00.png" : "textures/texture_00 .png")
                    }
                    ve(e, ["home", "gacha"])
                }
            }, {
                search: "凍京",
                async patch(e, t) {
                    var i, o, s, n, r;
                    const l = async e => await T($.HQ.resolve(t, e)) ? e : e.replace("/texture", "/android/texture");
                    if (S.p2.isValidJSON(e)) {
                        if (e.textures && (e.textures = await Promise.all(e.textures.map(l))),
                        e.motions) {
                            for (const t of Object.values(e.motions))
                                if (null === t || void 0 === t ? void 0 : t.length)
                                    for (const e of t)
                                        e.file = null !== (i = e.file) && void 0 !== i ? i : e.File,
                                        delete e.File;
                            !(null === (o = e.motions.idle) || void 0 === o ? void 0 : o.length) && e.motions[""] && (e.motions.idle = e.motions[""].filter((e => {
                                var t;
                                return null === (t = e.file) || void 0 === t ? void 0 : t.includes("loop")
                            }
                            )))
                        }
                    } else
                        S.r9.isValidJSON(e) && ((null === (s = e.FileReferences) || void 0 === s ? void 0 : s.Textures) && (e.FileReferences.Textures = await Promise.all(e.FileReferences.Textures.map(l))),
                        (null === (n = e.FileReferences) || void 0 === n ? void 0 : n.Motions) && !(null === (r = e.FileReferences.Motions.Idle) || void 0 === r ? void 0 : r.length) && e.FileReferences.Motions[""] && (e.FileReferences.Motions.Idle = e.FileReferences.Motions[""].filter((e => {
                            var t;
                            return null === (t = e.File) || void 0 === t ? void 0 : t.includes("loop")
                        }
                        ))))
                }
            }, {
                search: "天命之子",
                patch(e) {
                    var t, i, o, s, n;
                    (null === (i = null === (t = e.motions) || void 0 === t ? void 0 : t[""]) || void 0 === i ? void 0 : i.length) && !(null === (s = null === (o = e.motions) || void 0 === o ? void 0 : o.idle) || void 0 === s ? void 0 : s.length) && (e.motions.idle = null === (n = e.motions) || void 0 === n ? void 0 : n[""].map((e => Object.assign({}, e))))
                }
            }, {
                search: "碧蓝航线",
                patch(e) {
                    ve(e, ["idle"])
                }
            }, {
                search: "少女咖啡枪",
                patch(e) {
                    ve(e, ["stand"])
                },
                patchInternalModel(e) {
                    for (const t of Object.keys(e))
                        t.startsWith("idParam") && (e[t] = (0,
                        j.Z)(e[t]).toUpperCase())
                }
            }, {
                search: "princesses",
                patch(e) {
                    fe(e, ["default", "loop"])
                }
            }, {
                search: "崩坏",
                patch(e) {
                    ge(e),
                    "" === e.name && delete e.name
                }
            }, {
                search: "战舰少女",
                patch(e) {
                    ge(e)
                }
            }, {
                search: "机动战队",
                patch(e) {
                    ge(e)
                }
            }, {
                search: "诺亚幻想",
                patch(e) {
                    "model" === e.name && delete e.name
                }
            }];
            function pe(e) {
                var t, i, o;
                const s = null === (t = e.FileReferences) || void 0 === t ? void 0 : t.Motions;
                s && ((null === (i = s.Idle) || void 0 === i ? void 0 : i[0]) || 1 !== (null === (o = s[""]) || void 0 === o ? void 0 : o.length) || (s.Idle = s[""].map((e => Object.assign({}, e)))))
            }
            function fe(e, t) {
                if (e.motions) {
                    const i = [];
                    for (const [o,s] of Object.entries(e.motions))
                        if ("idle" !== o && Array.isArray(s))
                            for (const e of s)
                                for (const o of t)
                                    e.file && e.file.toLowerCase().includes(o) && i.push(e);
                    i.length && (e.motions.idle = (0,
                    U.Z)(e.motions.idle, i, "file"))
                }
            }
            function ve(e, t) {
                var i;
                if (null === (i = e.FileReferences) || void 0 === i ? void 0 : i.Motions) {
                    const i = [];
                    for (const [o,s] of Object.entries(e.FileReferences.Motions))
                        if ("Idle" !== o && Array.isArray(s))
                            for (const e of s)
                                for (const o of t)
                                    e.File && e.File.toLowerCase().includes(o) && i.push(e);
                    i.length && (e.FileReferences.Motions.Idle = (0,
                    U.Z)(e.FileReferences.Motions.Idle, i, "File"))
                }
            }
            function ge(e) {
                if (e.motions)
                    for (const t of Object.values(e.motions))
                        if (null === t || void 0 === t ? void 0 : t.length)
                            for (const e of t)
                                e.sound = void 0
            }
            var xe = i(6085)
              , be = i.n(xe);
            S.sK.zipReader = (e, t) => be().loadAsync(e),
            S.sK.readText = (e, t) => {
                const i = e.file(t);
                if (!i)
                    throw new Error("Cannot find file: " + t);
                return i.async("text")
            }
            ,
            S.sK.getFilePaths = e => {
                const t = [];
                return e.forEach((e => t.push(e))),
                Promise.resolve(t)
            }
            ,
            S.sK.getFiles = (e, t) => Promise.all(t.map((async t => {
                const i = t.slice(t.lastIndexOf("/") + 1)
                  , o = await e.file(t).async("blob");
                return new File([o],i)
            }
            )));
            var we, _e = i(2098), ye = i(1270), Me = i(7008), ke = i(2687), Ze = i(7002), Fe = i(9500);
            (function(e) {
                function t(t, i) {
                    t.filters = [];
                    for (const o of i)
                        t.filters.push(e.filters[o])
                }
                function i(t) {
                    e.filters.Noise.seed = Math.random(),
                    e.filters.CRT.seed = Math.random(),
                    e.filters.CRT.time += .01 * t
                }
                function o(e) {
                    e.filters = []
                }
                e.filters = {
                    Outline: new ye.r(4),
                    Pixelate: new _e.G(4),
                    CRT: new Ze.X({
                        lineWidth: 3,
                        lineContrast: .3,
                        vignetting: 0
                    }),
                    Noise: new Fe.L(.4),
                    Ascii: new Me.x,
                    Alpha: new ke.U(.7)
                },
                e.set = t,
                e.update = i,
                e.release = o
            }
            )(we || (we = {})),
            S._Y.registerTicker(D.vB);
            class Ie extends S._Y {
                constructor() {
                    super(),
                    this.backgroundVisible = !1,
                    this.currentMotionStartTime = performance.now(),
                    this.currentMotionDuration = 0,
                    this.hitAreaFrames = new L.z,
                    this.hitAreaFrames.visible = !1,
                    this.background = O.j.from(P.xE.WHITE),
                    this.background.alpha = .2,
                    this.background.visible = !1,
                    this.once("modelLoaded", this._init)
                }
                _init() {
                    this.addChild(this.hitAreaFrames),
                    this.addChild(this.background),
                    this.background.width = this.internalModel.width,
                    this.background.height = this.internalModel.height,
                    this.anchor.set(.5, .5),
                    this.on("hit", this.startHitMotion),
                    this.internalModel.motionManager.on("motionStart", ( (e, t) => {
                        var i;
                        this.currentMotionStartTime = this.elapsedTime,
                        this.currentMotionDuration = 0;
                        const o = null === (i = this.internalModel.motionManager.motionGroups[e]) || void 0 === i ? void 0 : i[t];
                        o && ("_loopDurationSeconds"in o ? this.currentMotionDuration = 1e3 * o._loopDurationSeconds : "getDurationMSec"in o && (this.currentMotionDuration = o.getDurationMSec()))
                    }
                    ));
                    const e = this.internalModel.motionManager.expressionManager;
                    if (e) {
                        const t = e._setExpression;
                        e._setExpression = i => {
                            t.call(e, i),
                            this.emit("expressionSet", e.expressions.indexOf(i))
                        }
                        ;
                        let i = e.reserveExpressionIndex;
                        Object.defineProperty(e, "reserveExpressionIndex", {
                            get: () => i,
                            set: e => {
                                i = e,
                                this.emit("expressionReserved", e)
                            }
                        })
                    }
                }
                startHitMotion(e) {
                    for (let t of e) {
                        t = t.toLowerCase();
                        const e = [t, "tap" + t, "tap_" + t, "tap"];
                        for (const t of e)
                            for (let e of Object.keys(this.internalModel.motionManager.definitions))
                                if (t === e.toLowerCase())
                                    return void this.motion(e)
                    }
                }
                updateTransform() {
                    super.updateTransform(),
                    this.backgroundVisible && this.background.updateTransform()
                }
                _render(e) {
                    this.backgroundVisible && (this.background.visible = !0,
                    this.background.render(e),
                    this.background.visible = !1),
                    super._render(e)
                }
                destroy(e) {
                    super.destroy(e),
                    we.release(this)
                }
            }
            function Ae(e) {
                const t = e;
                t.on("pointerdown", Ce),
                t.on("pointermove", Ee),
                t.on("pointerup", Se),
                t.on("pointerupoutside", Se)
            }
            function Ce(e) {
                this.dragging = !0,
                this._pointerX = e.data.global.x - this.x,
                this._pointerY = e.data.global.y - this.y
            }
            function Ee(e) {
                this.dragging && (this.position.x = e.data.global.x - this._pointerX,
                this.position.y = e.data.global.y - this._pointerY)
            }
            function Se(e) {
                this.dragging = !1
            }
            var Le, Oe = i(8542), Pe = i(1618);
            (function(e) {
                e[e["NOT_AVAILABLE"] = 0] = "NOT_AVAILABLE",
                e[e["PENDING"] = 1] = "PENDING",
                e[e["COMPLETED"] = 2] = "COMPLETED",
                e[e["FAILED"] = 3] = "FAILED"
            }
            )(Le || (Le = {})),
            S.fz.live2DModelMiddlewares.unshift(( (e, t) => (e.live2dModel.factoryContext = e,
            t())));
            class De {
                constructor() {
                    this.stages = {
                        settingsJSON: Le.PENDING,
                        settings: Le.NOT_AVAILABLE,
                        textures: Le.NOT_AVAILABLE,
                        internalModel: Le.NOT_AVAILABLE,
                        pose: Le.NOT_AVAILABLE,
                        physics: Le.NOT_AVAILABLE
                    },
                    this.text = "",
                    this.updateText()
                }
                watch(e) {
                    e.once("settingsJSONLoaded", ( () => this.complete("settingsJSON", e))).once("settingsLoaded", ( () => this.complete("settings", e))).once("textureLoaded", ( () => this.complete("textures", e))).once("modelLoaded", ( () => this.complete("internalModel", e))).once("poseLoaded", ( () => this.complete("pose", e))).once("physicsLoaded", ( () => this.complete("physics", e)))
                }
                complete(e, t) {
                    "settingsJSON" !== e && this.stages.settingsJSON !== Le.COMPLETED && (this.complete("settingsJSON", t),
                    this.complete("settings", t)),
                    this.stages[e] = Le.COMPLETED,
                    "settingsJSON" === e ? this.stages.settings = Le.PENDING : "settings" === e && (this.stages.textures = Le.PENDING,
                    this.stages.internalModel = Le.PENDING,
                    t.factoryContext.settings.pose && (this.stages.pose = Le.PENDING),
                    t.factoryContext.settings.physics && (this.stages.physics = Le.PENDING)),
                    this.updateText()
                }
                updateText() {
                    this.text = Object.entries(this.stages).map(( ([e,t]) => {
                        if (t === Le.NOT_AVAILABLE)
                            return "";
                        let i;
                        switch (t) {
                        case Le.PENDING:
                            i = "[ ]";
                            break;
                        case Le.COMPLETED:
                            i = "[x]";
                            break;
                        case Le.FAILED:
                            i = " X ";
                            break
                        }
                        return `${i} Loading ${(0,
                        Pe.Z)(e)}`
                    }
                    )).filter(Boolean).join("\n")
                }
            }
            const Re = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU22h6EgADqAHHuWdgTgAAAABJRU5ErkJggg==";
            let Ne = 1;
            class Te extends $.vp {
                constructor(e, t) {
                    super(),
                    this.id = Ne++,
                    this.url = "",
                    this.thumbnail = "",
                    this.aspectRatio = 1,
                    this.name = "New Model",
                    this.visible = !0,
                    this._scaleX = 1,
                    this._scaleY = 1,
                    this._rotation = 0,
                    this._zIndex = 0,
                    this.filters = [],
                    this.loadingState = new De,
                    this.error = "",
                    this.loadModel(e).then()
                }
                async loadModel(e) {
                    this.url = "string" === typeof e ? e : "(Local files)";
                    const t = new Ie;
                    this.loadingState.watch(t);
                    try {
                        await S.fz.setupLive2DModel(t, e),
                        this.modelLoaded(t),
                        this.emit("modelLoaded", t)
                    } catch (i) {
                        console.warn(i),
                        this.error = i instanceof Error ? i.message : i + ""
                    }
                }
                modelLoaded(e) {
                    this.pixiModel = e,
                    this.name = e.internalModel.settings.name,
                    this.thumbnail = Re,
                    this.aspectRatio = e.width / e.height,
                    this.updateFilters(),
                    Ae(e)
                }
                initThumbnail(e) {
                    const t = this.pixiModel;
                    Oe.Xd.RESOLUTION = .2;
                    const i = t.hitAreaFrames.visible
                      , o = t.backgroundVisible;
                    t.hitAreaFrames.visible = !1,
                    t.backgroundVisible = !1;
                    try {
                        const i = e.plugins.extract.canvas(t);
                        i.toBlob((e => this.thumbnail = URL.createObjectURL(e)), "image/webp", .01)
                    } catch (s) {
                        console.warn(s)
                    }
                    Oe.Xd.RESOLUTION = 1,
                    t.hitAreaFrames.visible = i,
                    t.backgroundVisible = o
                }
                fit(e, t) {
                    if (this.pixiModel) {
                        let i = Math.min(e / this.pixiModel.width, t / this.pixiModel.height);
                        i = Math.round(10 * i) / 10,
                        this.scale(i, i)
                    }
                }
                scale(e, t) {
                    this._scaleX = null !== e && void 0 !== e ? e : this._scaleX,
                    this._scaleY = null !== t && void 0 !== t ? t : this._scaleY,
                    this.pixiModel && this.pixiModel.scale.set(this._scaleX, this._scaleY)
                }
                rotate(e) {
                    this._rotation = e,
                    this.pixiModel && (this.pixiModel.rotation = e)
                }
                setZIndex(e) {
                    this._zIndex = e,
                    this.pixiModel && (this.pixiModel.zIndex = e)
                }
                setVisible(e) {
                    this.visible = e,
                    this.pixiModel && (this.pixiModel.visible = e)
                }
                updateFilters() {
                    this.pixiModel && we.set(this.pixiModel, this.filters)
                }
                destroy() {
                    this.pixiModel && (this.pixiModel.destroy({
                        children: !0
                    }),
                    this.pixiModel = void 0,
                    URL.revokeObjectURL(this.thumbnail))
                }
                get zIndex() {
                    return this._zIndex
                }
                set zIndex(e) {
                    this.setZIndex(e)
                }
                get rotation() {
                    return this._rotation
                }
                set rotation(e) {
                    this.rotate(e)
                }
                get scaleY() {
                    return this._scaleY
                }
                set scaleY(e) {
                    this.scale(void 0, e)
                }
                get scaleX() {
                    return this._scaleX
                }
                set scaleX(e) {
                    this.scale(e, e)
                }
            }
            function je(e) {
                return function(t, i, o) {
                    const s = o.set;
                    o.set = function(t) {
                        s.call(this, t),
                        Ue(e, t)
                    }
                    ;
                    const n = $e(e, o.get.call(t));
                    s.call(t, n)
                }
            }
            function Ue(e, t) {
                localStorage.setItem(e, JSON.stringify(t))
            }
            function $e(e, t) {
                const i = localStorage.getItem(e);
                return null === i ? t : JSON.parse(i)
            }
            var Be = i(3466)
              , Ve = i.n(Be)
              , He = i(7937)
              , Ge = i(6862)
              , ze = i(7099);
            P.Rw.add(D.Sb, Ge.Q, P.Bv, ze.bx);
            class We extends He.M {
                constructor(e) {
                    super({
                        view: document.getElementById("canvas"),
                        resizeTo: window,
                        antialias: !0,
                        backgroundAlpha: 0
                    }),
                    this.ticker.remove(this.render, this),
                    this.ticker.add(( () => {
                        e.begin(),
                        we.update(this.ticker.deltaMS),
                        this.render(),
                        e.end()
                    }
                    ))
                }
            }
            const Je = new (Ve());
            Je.showPanel(0),
            Je.dom.style.left = "",
            Je.dom.style.right = "0";
            class Xe {
                static addModel(e) {
                    const t = new Te(e,this.pixiApp.renderer);
                    return this.initModel(t),
                    this.models.push(t),
                    t.id
                }
                static getModel(e) {
                    return this.models.find((t => t.id === e))
                }
                static initModel(e) {
                    e.on("modelLoaded", (async t => {
                        this.pixiApp.stage.children.includes(t) || (this.pixiApp.stage.addChild(t),
                        t.backgroundVisible = this.showModelFrame,
                        t.hitAreaFrames.visible = this.showHitAreaFrames,
                        t.position.set(this.pixiApp.renderer.width / 2, this.pixiApp.renderer.height / 2),
                        e.fit(this.pixiApp.renderer.width, this.pixiApp.renderer.height),
                        e.initThumbnail(this.pixiApp.renderer))
                    }
                    ))
                }
                static removeModel(e) {
                    const t = this.models.find((t => t.id === e));
                    t && (this.models.splice(this.models.indexOf(t), 1),
                    t.pixiModel && this.pixiApp.stage.removeChild(t.pixiModel),
                    t.destroy())
                }
                static set showStats(e) {
                    var t;
                    this._showStats = e,
                    e ? document.body.appendChild(Je.dom) : null === (t = Je.dom.parentElement) || void 0 === t || t.removeChild(Je.dom)
                }
                static get showStats() {
                    return this._showStats
                }
                static set volume(e) {
                    this._volume = e,
                    S.P0.volume = e
                }
                static get volume() {
                    return this._volume
                }
                static set showModelFrame(e) {
                    this._showModelFrame = e;
                    for (const t of this.models)
                        (null === t || void 0 === t ? void 0 : t.pixiModel) && (t.pixiModel.backgroundVisible = e)
                }
                static get showModelFrame() {
                    return this._showModelFrame
                }
                static set showHitAreaFrames(e) {
                    this._showHitAreaFrames = e;
                    for (const t of this.models)
                        (null === t || void 0 === t ? void 0 : t.pixiModel) && (t.pixiModel.hitAreaFrames.visible = e)
                }
                static get showHitAreaFrames() {
                    return this._showHitAreaFrames
                }
            }
            Xe.models = [],
            Xe.pixiApp = new We(Je),
            Xe._volume = S.P0.volume,
            Xe._showHitAreaFrames = !1,
            Xe._showModelFrame = !1,
            Xe._showStats = !0,
            (0,
            E.gn)([je("stats")], Xe, "showStats", null),
            (0,
            E.gn)([je("volume")], Xe, "volume", null),
            (0,
            E.gn)([je("modelFrame")], Xe, "showModelFrame", null),
            (0,
            E.gn)([je("hitAreaFrames")], Xe, "showHitAreaFrames", null);
            var Ye = o.ZP.extend({
                name: "ModelList",
                props: {
                    value: Number,
                    show: Boolean
                },
                data: () => ({
                    models: []
                }),
                computed: {
                    paneHeight() {
                        return this.$vuetify.breakpoint.xl ? 192 : 144
                    },
                    selectedIndex() {
                        return this.models.findIndex((e => e.id === this.value))
                    }
                },
                created() {
                    this.models = Xe.models
                },
                methods: {
                    select(e) {
                        var t, i;
                        const o = null !== (i = null === (t = this.models[e]) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : 0;
                        this.$emit("input", o)
                    },
                    remove(e) {
                        1 === this.models.length && this.$emit("input", 0),
                        Xe.removeModel(e)
                    }
                }
            })
              , Qe = Ye
              , qe = i(1001)
              , Ke = (0,
            qe.Z)(Qe, A, C, !1, null, "5ec9ee77", null)
              , et = Ke.exports
              , tt = i(5946)
              , it = i(7695)
              , ot = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t(tt.Z, {
                    attrs: {
                        value: e.value,
                        width: "800"
                    },
                    on: {
                        input: function(t) {
                            return e.$emit("input", t)
                        }
                    }
                }, [t(w.Z, [t(f.Z, {
                    staticClass: "flex-grow-0",
                    attrs: {
                        color: "primary",
                        flat: "",
                        dense: ""
                    }
                }, [t(v.qW, [e._v("Create Model")]), t(p.Z), t(n.Z, {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: e.create
                    }
                }, [t(c.Z, [e._v("mdi-checkbox-marked-circle-outline")])], 1)], 1), t(_.ZB, {
                    staticClass: "pa-8"
                }, [t(it.Z, {
                    attrs: {
                        "single-line": "",
                        filled: "",
                        label: "URL",
                        messages: e.urlMessages,
                        error: e.urlError
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.create.apply(null, arguments)
                        }
                    },
                    model: {
                        value: e.url,
                        callback: function(t) {
                            e.url = t
                        },
                        expression: "url"
                    }
                }), t("div", {
                    staticClass: "d-flex align-center"
                }, [t(n.Z, {
                    attrs: {
                        icon: "",
                        small: "",
                        color: "grey"
                    },
                    on: {
                        click: function(t) {
                            e.dropHelpDialog = !0
                        }
                    }
                }, [t(c.Z, {
                    attrs: {
                        size: "20"
                    }
                }, [e._v("mdi-help-circle")])], 1), t("span", [e._v("Drag and drop supported")]), t(p.Z), t(n.Z, {
                    attrs: {
                        color: "blue-grey"
                    },
                    on: {
                        click: function(t) {
                            e.picker.dialog = !0
                        }
                    }
                }, [e._v("From source..."), t(c.Z, {
                    attrs: {
                        right: ""
                    }
                }, [e._v(" mdi-cloud-search")])], 1)], 1)], 1)], 1), t(tt.Z, {
                    attrs: {
                        width: "1000",
                        "max-width": "80vw"
                    },
                    model: {
                        value: e.dropHelpDialog,
                        callback: function(t) {
                            e.dropHelpDialog = t
                        },
                        expression: "dropHelpDialog"
                    }
                }, [t(y.Z, {
                    attrs: {
                        src: "drop.jpg"
                    },
                    on: {
                        click: function(t) {
                            e.dropHelpDialog = !1
                        }
                    }
                })], 1), t("ModelPicker", {
                    on: {
                        select: function(t) {
                            e.url = t
                        }
                    },
                    model: {
                        value: e.picker.dialog,
                        callback: function(t) {
                            e.$set(e.picker, "dialog", t)
                        },
                        expression: "picker.dialog"
                    }
                })], 1)
            }
              , st = []
              , nt = i(2393)
              , rt = i(7024)
              , lt = i(1667)
              , at = i(8826)
              , dt = i(352)
              , ct = i(3291)
              , ut = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t(tt.Z, {
                    attrs: {
                        value: e.value,
                        width: "1500",
                        "max-width": "90vw"
                    },
                    on: {
                        input: function(t) {
                            return e.$emit("input", t)
                        }
                    }
                }, [t(w.Z, {
                    staticClass: "d-flex flex-column",
                    attrs: {
                        height: "1000",
                        "max-height": "90vh"
                    }
                }, [t(f.Z, {
                    staticClass: "flex-grow-0",
                    attrs: {
                        color: "primary",
                        flat: "",
                        dense: ""
                    }
                }, [t(v.qW, [e._v("Select a Model")]), t(p.Z), t(n.Z, {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: e.submit
                    }
                }, [t(c.Z, [e._v("mdi-checkbox-marked-circle-outline")])], 1)], 1), t(F.Z, {
                    staticClass: "content-row flex-grow-1",
                    attrs: {
                        "no-gutters": ""
                    }
                }, [t(rt.Z, {
                    staticClass: "content-col"
                }, [t(ct.Z, {
                    attrs: {
                        activatable: "",
                        "return-object": "",
                        "load-children": e.fetchModels,
                        active: e.activeFolders,
                        items: e.tree,
                        "item-key": "id",
                        "open-on-click": ""
                    },
                    on: {
                        "update:active": function(t) {
                            t.length && (e.activeFolders = t)
                        },
                        "update:open": e.folderOpened
                    },
                    scopedSlots: e._u([{
                        key: "prepend",
                        fn: function({open: i}) {
                            return [t(c.Z, [e._v(" " + e._s(i ? "mdi-folder-open" : "mdi-folder") + " ")])]
                        }
                    }, {
                        key: "label",
                        fn: function({item: i}) {
                            return [t("span", {
                                class: {
                                    "text-decoration-line-through": i.error
                                }
                            }, [e._v(e._s(i.name))]), t(nt.Z, {
                                staticClass: "model-count ml-1 px-2 text--secondary",
                                attrs: {
                                    "x-small": ""
                                }
                            }, [e._v(e._s(i.modelCount))])]
                        }
                    }])
                })], 1), t(a.Z, {
                    attrs: {
                        vertical: ""
                    }
                }), t(rt.Z, {
                    staticClass: "content-col"
                }, [t(dt.Z, {
                    model: {
                        value: e.selectedFileIndex,
                        callback: function(t) {
                            e.selectedFileIndex = t
                        },
                        expression: "selectedFileIndex"
                    }
                }, e._l(e.activeFolderFiles, (function(i, o) {
                    return t(lt.Z, {
                        key: i,
                        attrs: {
                            color: "primary"
                        },
                        nativeOn: {
                            dblclick: function(t) {
                                e.selectedFileIndex = o,
                                e.submit()
                            }
                        }
                    }, [t(at.km, [t(at.V9, [e._v(e._s(i))])], 1)], 1)
                }
                )), 1)], 1)], 1), t(a.Z), t(_.h7, [t("span", {
                    staticClass: "text--secondary text-caption"
                }, [e._v("The listed models were scraped from "), t("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://github.com/Eikanya/Live2d-model"
                    }
                }, [e._v("Eikanya/Live2d-model")]), e._v(". All credit goes to their respective creators.")])])], 1)], 1)
            }
              , ht = []
              , mt = i(8205)
              , pt = o.ZP.extend({
                name: "ModelPicker",
                props: {
                    value: Boolean
                },
                data: () => ({
                    search: "",
                    tree: K(),
                    openedFolders: [],
                    activeFolders: [],
                    selectedFileIndex: -1,
                    alert: ""
                }),
                computed: {
                    activeFolderFiles() {
                        return this.activeFolders.length && this.activeFolders[0].files || []
                    }
                },
                watch: {
                    activeFolders(e, t) {
                        const i = 0 !== (0,
                        mt.Z)(e, t).length;
                        i && (this.selectedFileIndex = -1)
                    },
                    selectedFileIndex() {
                        this.alert = ""
                    }
                },
                created() {},
                methods: {
                    async fetchModels(e) {
                        await ee(e)
                    },
                    folderOpened(e) {
                        const t = (0,
                        mt.Z)(e, this.openedFolders);
                        t.length ? (this.activeFolders = t.slice(0),
                        this.openedFolders = e) : this.activeFolders = this.tree.slice(0, 1)
                    },
                    submit() {
                        if (this.activeFolders.length && this.selectedFileIndex >= 0) {
                            const e = oe(this.activeFolders[0], this.activeFolderFiles[this.selectedFileIndex]);
                            e && this.$emit("select", e)
                        }
                        this.$emit("input", !1)
                    },
                    log(...e) {
                        console.log(...e)
                    }
                }
            })
              , ft = pt
              , vt = (0,
            qe.Z)(ft, ut, ht, !1, null, "42aba127", null)
              , gt = vt.exports
              , xt = o.ZP.extend({
                components: {
                    ModelPicker: gt
                },
                name: "ModelCreation",
                props: {
                    value: Boolean
                },
                data: () => ({
                    url: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json",
                    dropHelpDialog: !1,
                    picker: {
                        dialog: !1
                    },
                    urlError: !1,
                    urlMessages: []
                }),
                watch: {
                    url(e) {
                        const t = re(e) || "";
                        this.urlError = /error/i.test(t),
                        this.urlMessages = [t].filter(Boolean)
                    }
                },
                methods: {
                    create() {
                        if (this.url = this.url.replace(/\s/, ""),
                        this.url || (this.urlError = !0,
                        this.urlMessages = ["Please enter a URL"]),
                        this.urlError)
                            return;
                        const e = Xe.addModel(this.url);
                        this.$emit("input", !1),
                        this.$emit("create", e)
                    }
                }
            })
              , bt = xt
              , wt = (0,
            qe.Z)(bt, ot, st, !1, null, "202c5692", null)
              , _t = wt.exports
              , yt = i(2603)
              , Mt = i(7970)
              , kt = i(5384)
              , Zt = i(3560)
              , Ft = i(1013)
              , It = i(2912)
              , At = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return e.model ? t("div", {
                    staticClass: "model-editor"
                }, [e.hasPixiModel ? t(Mt.Z, {
                    attrs: {
                        expand: ""
                    }
                }, [t(kt.Z, {
                    attrs: {
                        value: !0
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function() {
                            return [t(at.km, [t(at.V9, [e._v("Display")])], 1)]
                        },
                        proxy: !0
                    }], null, !1, 1435882642)
                }, [t(lt.Z, [t(at.km, [t("div", [t(Ft.Z, {
                    staticClass: "mt-2",
                    attrs: {
                        dense: "",
                        "prepend-icon": "mdi-magnify",
                        messages: String(e.model.scaleX),
                        min: "0.01",
                        max: "3",
                        step: "0.01"
                    },
                    model: {
                        value: e.model.scaleX,
                        callback: function(t) {
                            e.$set(e.model, "scaleX", t)
                        },
                        expression: "model.scaleX"
                    }
                }), t(Ft.Z, {
                    staticClass: "mt-2",
                    attrs: {
                        dense: "",
                        "prepend-icon": "mdi-rotate-right",
                        messages: e.rotationDeg,
                        min: "0",
                        max: "6.28",
                        step: "0.01"
                    },
                    model: {
                        value: e.model.rotation,
                        callback: function(t) {
                            e.$set(e.model, "rotation", t)
                        },
                        expression: "model.rotation"
                    }
                })], 1)])], 1)], 1), t(kt.Z, {
                    attrs: {
                        "data-set": e.motionCount = e.motionGroups.reduce(( (e, {motions: t}) => e + t.length), 0),
                        disabled: !e.motionCount
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function() {
                            return [t(at.km, [t(at.V9, {
                                class: {
                                    "text--secondary": !e.motionCount
                                }
                            }, [e._v("Motions (" + e._s(e.motionCount) + ") ")])], 1)]
                        },
                        proxy: !0
                    }, {
                        key: "default",
                        fn: function() {
                            return [e._l(e.motionGroups, (function(i) {
                                return [t(It.Z, {
                                    key: i.name,
                                    staticClass: "px-3"
                                }, [e._v(e._s(i.name || "(Nameless)"))]), e._l(i.motions, (function(o, s) {
                                    return t(lt.Z, {
                                        key: i.name + s,
                                        attrs: {
                                            ripple: "",
                                            "data-set": e.active = e.motionState.currentGroup === i.name && e.motionState.currentIndex === s,
                                            disabled: !!o.error
                                        },
                                        on: {
                                            click: function(t) {
                                                return e.startMotion(i, s)
                                            }
                                        }
                                    }, [e.active ? t("div", {
                                        staticClass: "motion-progress"
                                    }) : e._e(), t(at.km, {
                                        attrs: {
                                            title: o.file
                                        }
                                    }, [t(at.V9, {
                                        class: {
                                            "primary--text": e.active,
                                            "text-decoration-line-through": o.error
                                        }
                                    }, [e._v(" " + e._s(o.file.replace(".mtn", "").replace(".motion3.json", "")) + " ")])], 1), t(Zt.Z, {
                                        staticClass: "my-0 align-self-center"
                                    }, [e.active ? t(c.Z, {
                                        attrs: {
                                            size: "32",
                                            color: "primary"
                                        }
                                    }, [e._v("mdi-play")]) : e.motionState.reservedGroup === i.name && e.motionState.reservedIndex === s || e.motionState.reservedIdleGroup === i.name && e.motionState.reservedIdleIndex === s ? t(Z.Z, {
                                        attrs: {
                                            indeterminate: "",
                                            size: "20",
                                            width: "2"
                                        }
                                    }) : e._e()], 1)], 1)
                                }
                                ))]
                            }
                            ))]
                        },
                        proxy: !0
                    }], null, !1, 3970018182),
                    model: {
                        value: e.motionExpand,
                        callback: function(t) {
                            e.motionExpand = t
                        },
                        expression: "motionExpand"
                    }
                }), t(kt.Z, {
                    attrs: {
                        disabled: !e.expressions.length
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function() {
                            return [t(at.km, [t(at.V9, {
                                class: {
                                    "text--secondary": !e.expressions.length
                                }
                            }, [e._v("Expressions (" + e._s(e.expressions.length) + ") ")])], 1)]
                        },
                        proxy: !0
                    }, {
                        key: "default",
                        fn: function() {
                            return e._l(e.expressions, (function(i, o) {
                                return t(lt.Z, {
                                    key: o,
                                    attrs: {
                                        ripple: "",
                                        "data-set": e.active = e.currentExpressionIndex === o,
                                        disabled: !!i.error
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.setExpression(o)
                                        }
                                    }
                                }, [t(at.km, {
                                    attrs: {
                                        title: i.file
                                    }
                                }, [t(at.V9, {
                                    class: {
                                        "primary--text": e.active,
                                        "text-decoration-line-through": i.error
                                    }
                                }, [e._v(" " + e._s(i.file.replace(".exp.json", "").replace(".exp3.json", "")) + " ")])], 1), t(Zt.Z, {
                                    staticClass: "my-0 align-self-center"
                                }, [e.active ? t(c.Z, {
                                    attrs: {
                                        size: "28",
                                        color: "primary"
                                    }
                                }, [e._v("mdi-emoticon-outline")]) : e.pendingExpressionIndex === o ? t(Z.Z, {
                                    attrs: {
                                        indeterminate: "",
                                        size: "20",
                                        width: "2"
                                    }
                                }) : e._e()], 1)], 1)
                            }
                            ))
                        },
                        proxy: !0
                    }], null, !1, 1007064366)
                }), t(kt.Z, {
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function() {
                            return [t(at.km, [t(at.V9, [e._v("Filters")])], 1)]
                        },
                        proxy: !0
                    }], null, !1, 2196630299)
                }, [t("div", {
                    staticClass: "mt-3"
                }), e._l(e.filters, (function(i) {
                    return t(yt.Z, {
                        key: i,
                        staticClass: "v-input--reverse mx-3 mt-0",
                        attrs: {
                            label: i + (e => e ? ` [${e}]` : "")(e.model.filters.indexOf(i) + 1),
                            value: i
                        },
                        model: {
                            value: e.model.filters,
                            callback: function(t) {
                                e.$set(e.model, "filters", t)
                            },
                            expression: "model.filters"
                        }
                    })
                }
                ))], 2)], 1) : [t("pre", {
                    staticClass: "pa-3 text--secondary"
                }, [e._v(e._s(e.model.loadingState.text))]), e.model.error ? t("pre", {
                    staticClass: "error--text px-3 text-wrap"
                }, [e._v(e._s(e.model.error))]) : e._e()]], 2) : e._e()
            }
              , Ct = []
              , Et = i(4802)
              , St = o.ZP.extend({
                name: "ModelEditor",
                props: {
                    id: {
                        type: Number,
                        default: 0
                    },
                    visible: Boolean
                },
                data: () => ({
                    model: null,
                    motionExpand: !1,
                    motionGroups: [],
                    motionState: null,
                    motionProgressTimerID: -1,
                    expressions: [],
                    currentExpressionIndex: -1,
                    pendingExpressionIndex: -1,
                    filters: Object.keys(we.filters)
                }),
                computed: {
                    hasPixiModel() {
                        return !!this.motionState
                    },
                    rotationDeg() {
                        var e;
                        return Math.round(((null === (e = this.model) || void 0 === e ? void 0 : e.rotation) || 0) / Math.PI * 180) + "°"
                    }
                },
                watch: {
                    id: {
                        immediate: !0,
                        handler() {
                            this.updateModel()
                        }
                    },
                    "model.filters"() {
                        var e;
                        null === (e = this.model) || void 0 === e || e.updateFilters()
                    },
                    "motionState.currentGroup": "updateMotionProgress"
                },
                mounted() {
                    this.motionProgressTimerID = setInterval(this.updateMotionProgress, 50)
                },
                methods: {
                    updateModel() {
                        this.resetModel(),
                        this.model = Xe.getModel(this.id),
                        this.model && (this.model.pixiModel ? this.pixiModelLoaded(this.model.pixiModel) : this.model.once("modelLoaded", this.pixiModelLoaded))
                    },
                    resetModel() {
                        var e, t, i, o, s, n, r;
                        this.model && (this.model.off("modelLoaded", this.pixiModelLoaded),
                        null === (e = this.model.pixiModel) || void 0 === e || e.off("expressionSet", this.expressionSet),
                        null === (t = this.model.pixiModel) || void 0 === t || t.off("expressionReserved", this.expressionReserved),
                        null === (o = null === (i = this.model.pixiModel) || void 0 === i ? void 0 : i.internalModel.motionManager) || void 0 === o || o.off("motionLoadError", this.motionLoadError),
                        null === (r = null === (n = null === (s = this.model.pixiModel) || void 0 === s ? void 0 : s.internalModel.motionManager) || void 0 === n ? void 0 : n.expressionManager) || void 0 === r || r.off("expressionLoadError", this.expressionLoadError),
                        this.motionGroups = [],
                        this.motionState = void 0,
                        this.model = void 0)
                    },
                    pixiModelLoaded(e) {
                        var t, i;
                        const o = e.internalModel.motionManager
                          , s = []
                          , n = o.definitions;
                        for (const [l,a] of Object.entries(n))
                            s.push({
                                name: l,
                                motions: (null === a || void 0 === a ? void 0 : a.map(( (e, t) => ({
                                    file: e.file || e.File || "",
                                    error: null === o.motionGroups[l][t] ? "Failed to load" : void 0
                                })))) || []
                            });
                        this.motionGroups = s,
                        this.motionState = o.state;
                        const r = o.expressionManager;
                        this.expressions = (null === r || void 0 === r ? void 0 : r.definitions.map(( (e, t) => ({
                            file: e.file || e.File || "",
                            error: null === r.expressions[t] ? "Failed to load" : void 0
                        })))) || [],
                        this.currentExpressionIndex = null !== (t = null === r || void 0 === r ? void 0 : r.expressions.indexOf(r.currentExpression)) && void 0 !== t ? t : -1,
                        this.pendingExpressionIndex = null !== (i = null === r || void 0 === r ? void 0 : r.reserveExpressionIndex) && void 0 !== i ? i : -1,
                        e.on("expressionSet", this.expressionSet),
                        e.on("expressionReserved", this.expressionReserved),
                        o.on("motionLoadError", this.motionLoadError),
                        null === r || void 0 === r || r.on("expressionLoadError", this.expressionLoadError)
                    },
                    expressionSet(e) {
                        this.currentExpressionIndex = e
                    },
                    expressionReserved(e) {
                        this.pendingExpressionIndex = e
                    },
                    motionLoadError(e, t, i) {
                        const o = this.motionGroups.find((t => t.name === e));
                        o && (o.motions[t].error = i)
                    },
                    expressionLoadError(e, t) {
                        this.expressions[e].error = t
                    },
                    startMotion(e, t) {
                        var i, o;
                        null === (o = null === (i = this.model) || void 0 === i ? void 0 : i.pixiModel) || void 0 === o || o.motion(e.name, t, S.Uz.FORCE)
                    },
                    setExpression(e) {
                        var t, i;
                        null === (i = null === (t = this.model) || void 0 === t ? void 0 : t.pixiModel) || void 0 === i || i.expression(e)
                    },
                    updateMotionProgress() {
                        var e, t;
                        if (!((null === (e = this.model) || void 0 === e ? void 0 : e.pixiModel) && void 0 !== (null === (t = this.motionState) || void 0 === t ? void 0 : t.currentGroup) && this.motionExpand && this.visible && this.$el))
                            return;
                        const i = this.model.pixiModel.currentMotionStartTime
                          , o = this.model.pixiModel.currentMotionDuration
                          , s = (0,
                        Et.Z)((this.model.pixiModel.elapsedTime - i) / o, 0, 1);
                        this.$el.style.setProperty("--progress", 100 * s + "%")
                    }
                },
                beforeDestroy() {
                    this.resetModel(),
                    clearInterval(this.motionProgressTimerID)
                }
            })
              , Lt = St
              , Ot = (0,
            qe.Z)(Lt, At, Ct, !1, null, "461e8bf9", null)
              , Pt = Ot.exports
              , Dt = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    class: ["drop-zone", {
                        active: e.draggingOver
                    }]
                }, [e.draggingOver ? t("div", {
                    staticClass: "text-h1"
                }, [e._v("Drop Files")]) : e._e()])
            }
              , Rt = [];
            function Nt(e, t, i) {
                return void 0 !== e && null !== e
            }
            function Tt(e) {
                return e.split(/[\\/]/).pop()
            }
            function jt(e) {
                var t;
                return !!(null === (t = e.dataTransfer) || void 0 === t ? void 0 : t.types.some((e => "Files" === e)))
            }
            async function Ut(e) {
                const t = [...e].map((e => e.webkitGetAsEntry())).filter(Nt);
                return $t(t)
            }
            async function $t(e) {
                const t = [];
                return await Promise.all(e.map((async e => {
                    if (e.isFile)
                        t.push(await Vt(e));
                    else if (e.isDirectory) {
                        const i = await Bt(e);
                        t.push(...await $t(i))
                    }
                }
                ))),
                t
            }
            function Bt(e) {
                return new Promise(( (t, i) => {
                    e.createReader().readEntries(t, i)
                }
                ))
            }
            async function Vt(e) {
                const t = await new Promise(( (t, i) => e.file(t, i)));
                let i = e.fullPath;
                return i.startsWith("/") && (i = i.slice(1)),
                Object.defineProperty(t, "webkitRelativePath", {
                    value: i
                }),
                t
            }
            function Ht(e) {
                return new Promise(( (t, i) => {
                    const o = new FileReader;
                    o.onload = () => t(o.result),
                    o.onerror = i,
                    o.readAsDataURL(e)
                }
                ))
            }
            const Gt = 5;
            const zt = S.hH.createSettings;
            async function Wt(e) {
                return 1 === e.length && e[0].name.endsWith(".zip") ? [] : e.some((e => H(e.name))) ? Jt(e) : [Xt(e)]
            }
            async function Jt(e) {
                const t = []
                  , i = [];
                for (const n of e)
                    H(n.name) ? t.push(n) : i.push(n);
                let o;
                t.length > Gt && (console.warn(`Too many settings files (${t.length}/${Gt})`),
                t.length = Gt);
                const s = [];
                if (await Promise.all(t.map((async e => {
                    try {
                        const t = [e, ...i]
                          , o = await S.hH.createSettings(t);
                        o.validateFiles(t.map((e => e.webkitRelativePath))),
                        s.push(o)
                    } catch (t) {
                        o = o || t,
                        console.warn(t)
                    }
                }
                ))),
                !s.length)
                    throw o;
                return s
            }
            function Xt(e) {
                const t = e.filter((e => W(e.name)));
                if (1 !== t.length) {
                    const e = t.length ? `(${t.map((e => `"${e}"`)).join(",")})` : "";
                    throw new Error(`Expected exactly one moc file, got ${t.length} ${e}`)
                }
                const i = t[0].webkitRelativePath
                  , o = Tt(i).replace(/\.moc3?/, "")
                  , s = e.map((e => e.webkitRelativePath))
                  , n = s.filter((e => e.endsWith(".png")));
                if (!n.length)
                    throw new Error("Textures not found");
                const r = s.filter((e => e.endsWith(".mtn") || e.endsWith(".motion3.json")))
                  , l = s.find((e => e.includes("physics")))
                  , a = s.find((e => e.includes("pose")));
                let d;
                return d = G(i) ? new S.p2({
                    url: o + ".model.json",
                    textures: n,
                    pose: a,
                    physics: l,
                    model: i,
                    motions: r.length ? {
                        "": r.map((e => ({
                            file: e
                        })))
                    } : void 0
                }) : new S.r9({
                    url: o + ".model3.json",
                    Version: 3,
                    FileReferences: {
                        Moc: i,
                        Textures: n,
                        Physics: l,
                        Pose: a,
                        Motions: r.length ? {
                            "": r.map((e => ({
                                File: e
                            })))
                        } : void 0
                    }
                }),
                d.name = o,
                d._objectURL = "DontTouchMe://" + d.url,
                d
            }
            S.hH.createSettings = async e => e.find((e => H(e.name))) ? zt(e) : Xt(e);
            const Yt = "_bg";
            var Qt;
            (function(e) {
                let t, i = "";
                async function o(t) {
                    const o = URL.createObjectURL(t);
                    document.body.style.backgroundImage = `url(${o})`,
                    e.current = t.name,
                    e.emitter.emit("change", e.current),
                    i = o;
                    const s = await Ht(t);
                    i === o && localStorage.setItem(Yt, s),
                    URL.revokeObjectURL(o)
                }
                function s() {
                    e.current = "",
                    document.body.style.backgroundImage = "",
                    document.body.style.backgroundColor = "#222222",
                    localStorage.removeItem(Yt),
                    t && (document.head.removeChild(t),
                    t = void 0),
                    e.emitter.emit("change", e.current)
                }
                function n() {
                    t = document.createElement("style");
                    const i = localStorage.getItem("_bg");
                    i ? (t.innerText = `body {background-image: url(${i});}`,
                    e.current = "(local file)") : t.innerText = "body {background-color: #222222;}",
                    document.head.appendChild(t),
                    document.body.style.backgroundSize = "cover"
                }
                e.emitter = new $.vp,
                e.current = "",
                e.set = o,
                e.reset = s,
                n()
            }
            )(Qt || (Qt = {}));
            var qt = o.ZP.extend({
                name: "DropZone",
                data: () => ({
                    draggingOver: !1
                }),
                created() {
                    document.ondragenter = e => jt(e) && (this.draggingOver = !0),
                    document.ondragleave = e => jt(e) && (this.draggingOver = !!e.relatedTarget),
                    document.ondragover = e => jt(e) && e.preventDefault(),
                    document.ondrop = e => jt(e) && this.drop(e)
                },
                methods: {
                    async drop(e) {
                        var t;
                        if (e.preventDefault(),
                        this.draggingOver = !1,
                        null === (t = e.dataTransfer) || void 0 === t ? void 0 : t.items.length) {
                            const t = await Ut(e.dataTransfer.items);
                            1 === t.length && t[0].type.includes("image") ? Qt.set(t[0]).catch(console.warn) : this.uploadModel(t).then()
                        }
                    },
                    async uploadModel(e) {
                        try {
                            const t = await Wt(e);
                            let i;
                            if (t.length)
                                for (const o of t) {
                                    const t = e.slice();
                                    t.settings = o,
                                    i = Xe.addModel(t)
                                }
                            else
                                i = Xe.addModel(e);
                            this.$emit("create", i)
                        } catch (t) {
                            t.message = "Failed to load model: " + t.message,
                            this.$emit("error", t)
                        }
                    }
                }
            })
              , Kt = qt
              , ei = (0,
            qe.Z)(Kt, Dt, Rt, !1, null, "8eedab48", null)
              , ti = ei.exports
              , ii = i(4272)
              , oi = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "settings pa-3 flex-column flex-grow-1"
                }, [t("div", [t(Ft.Z, {
                    staticClass: "mt-4 mb-10",
                    attrs: {
                        dense: "",
                        "prepend-icon": "mdi-volume-high",
                        messages: ~~(100 * e.volume) + "%",
                        min: "0",
                        max: "1",
                        step: "0.02"
                    },
                    model: {
                        value: e.volume,
                        callback: function(t) {
                            e.volume = t
                        },
                        expression: "volume"
                    }
                }), t(ii.Z, {
                    staticClass: "v-input--reverse",
                    attrs: {
                        label: "Show hit area frames"
                    },
                    model: {
                        value: e.hitAreaFrames,
                        callback: function(t) {
                            e.hitAreaFrames = t
                        },
                        expression: "hitAreaFrames"
                    }
                }), t(ii.Z, {
                    staticClass: "v-input--reverse",
                    attrs: {
                        label: "Show model frames"
                    },
                    model: {
                        value: e.modelFrame,
                        callback: function(t) {
                            e.modelFrame = t
                        },
                        expression: "modelFrame"
                    }
                }), t(ii.Z, {
                    staticClass: "v-input--reverse",
                    attrs: {
                        label: "Show stats"
                    },
                    model: {
                        value: e.stats,
                        callback: function(t) {
                            e.stats = t
                        },
                        expression: "stats"
                    }
                }), e.currentBackground ? [t(a.Z), t(It.Z, {
                    staticClass: "px-0"
                }, [e._v("Background")]), t("div", {
                    staticClass: "mt-2 d-flex align-center"
                }, [t("span", [e._v(e._s(e.currentBackground))]), t(p.Z), t(n.Z, {
                    attrs: {
                        color: "secondary"
                    },
                    on: {
                        click: e.resetBackground
                    }
                }, [e._v("Reset")])], 1)] : e._e()], 2), t(p.Z), t(a.Z), t("div", {
                    staticClass: "pt-4 d-flex align-center"
                }, [t(c.Z, {
                    staticClass: "mr-2"
                }, [e._v("mdi-github")]), e._m(0)], 1), t("span", {
                    staticClass: "pt-4 body-2 text--secondary"
                }, [e._v("Last built: " + e._s(e.lastUpdated))])], 1)
            }
              , si = [function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("span", [e._v("View source or report bugs on "), t("a", {
                    staticClass: "text-decoration-none",
                    attrs: {
                        href: "https://github.com/guansss/live2d-viewer-web"
                    }
                }, [e._v("GitHub")])])
            }
            ]
              , ni = o.ZP.extend({
                name: "Settings",
                data: () => ({
                    volume: 0,
                    hitAreaFrames: !1,
                    modelFrame: !1,
                    stats: !1,
                    lastUpdated: new Date(1662447791472).toLocaleString(),
                    currentBackground: Qt.current
                }),
                watch: {
                    stats(e) {
                        Xe.showStats = e
                    },
                    volume(e) {
                        Xe.volume = e
                    },
                    hitAreaFrames(e) {
                        Xe.showHitAreaFrames = e
                    },
                    modelFrame(e) {
                        Xe.showModelFrame = e
                    }
                },
                created() {
                    this.stats = Xe.showStats,
                    this.volume = Xe.volume,
                    this.hitAreaFrames = Xe.showHitAreaFrames,
                    this.modelFrame = Xe.showModelFrame,
                    Qt.emitter.on("change", this.backgroundChanged, this)
                },
                methods: {
                    resetBackground() {
                        Qt.reset()
                    },
                    backgroundChanged(e) {
                        this.currentBackground = e
                    }
                },
                beforeDestroy() {
                    Qt.emitter.off("change", this.backgroundChanged)
                }
            })
              , ri = ni
              , li = (0,
            qe.Z)(ri, oi, si, !1, null, "a947e286", null)
              , ai = li.exports
              , di = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t(tt.Z, {
                    attrs: {
                        width: "1000",
                        "max-width": "90vw",
                        value: e.value
                    },
                    on: {
                        input: function(t) {
                            return e.$emit("input", t)
                        }
                    }
                }, [t(w.Z, {
                    staticClass: "d-flex flex-column",
                    attrs: {
                        height: "90vh"
                    }
                }, [t(f.Z, {
                    staticClass: "flex-grow-0",
                    attrs: {
                        color: "primary",
                        flat: "",
                        dense: ""
                    }
                }, [t(v.qW, [e._v("Model Info")]), t(p.Z), t(g.Z, {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function({on: i, attrs: o}) {
                            return [t(n.Z, e._g(e._b({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: e.log
                                }
                            }, "v-btn", o, !1), i), [t(c.Z, [e._v("mdi-console")])], 1)]
                        }
                    }])
                }, [t("span", [e._v("Print to console")])]), t(n.Z, {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("input", !1)
                        }
                    }
                }, [t(c.Z, [e._v("mdi-close")])], 1)], 1), t(_.ZB, {
                    staticClass: "pa-8 overflow-auto"
                }, [t("div", {
                    staticClass: "mb-6 text-no-wrap"
                }, [e._v("URL: " + e._s(e.url))]), t("pre", {
                    staticClass: "code"
                }, [e._v(e._s(e.settingsJSON))])])], 1)], 1)
            }
              , ci = []
              , ui = o.ZP.extend({
                name: "ModelInfo",
                props: {
                    value: Boolean,
                    id: Number
                },
                data: () => ({
                    url: "",
                    settingsJSON: ""
                }),
                watch: {
                    value(e) {
                        var t;
                        if (e) {
                            const e = Xe.getModel(this.id)
                              , i = null === (t = null === e || void 0 === e ? void 0 : e.pixiModel) || void 0 === t ? void 0 : t.internalModel.settings;
                            this.url = (null === e || void 0 === e ? void 0 : e.url) || "",
                            this.settingsJSON = JSON.stringify((null === i || void 0 === i ? void 0 : i.json) || {}, null, 2)
                        }
                    }
                },
                methods: {
                    log() {
                        console.log(JSON.parse(this.settingsJSON))
                    }
                }
            })
              , hi = ui
              , mi = (0,
            qe.Z)(hi, di, ci, !1, null, "5f9f4e32", null)
              , pi = mi.exports
              , fi = o.ZP.extend({
                name: "App",
                components: {
                    ModelList: et,
                    ModelCreation: _t,
                    ModelEditor: Pt,
                    DropZone: ti,
                    ModelInfo: pi,
                    Settings: ai
                },
                data: () => ({
                    drawer: !0,
                    drawerSwitch: !1,
                    loading: !1,
                    tab: -1,
                    modelList: {
                        visible: !0
                    },
                    selectedModelID: 0,
                    modelInfoDialog: !1,
                    creation: {
                        dialog: !1,
                        result: null
                    },
                    snackbar: {
                        visible: !1,
                        message: "",
                        timeout: 5e3
                    }
                }),
                computed: {
                    drawerWidth() {
                        return this.$vuetify.breakpoint.xl ? 450 : 360
                    },
                    modelName() {
                        var e;
                        return (null === (e = Xe.getModel(this.selectedModelID)) || void 0 === e ? void 0 : e.name) || ""
                    }
                },
                methods: {
                    showUI(e) {
                        this.drawer = e,
                        this.modelList.visible = e,
                        this.drawerSwitch = !1
                    },
                    snack(e, t=5e3) {
                        this.snackbar.message = e,
                        this.snackbar.timeout = t,
                        this.snackbar.visible = !0
                    },
                    error(e) {
                        const t = e && e.message || e + "";
                        t && this.snack(t, -1)
                    },
                    log(...e) {
                        console.log(...e)
                    }
                },
                created() {
                    this.tab = void 0,
                    this.creation.dialog = !0,
                    Qt.current || this.snack("Drag and drop a local image to set the background!")
                }
            })
              , vi = fi
              , gi = (0,
            qe.Z)(vi, x, b, !1, null, "46b8a8cc", null)
              , xi = gi.exports
              , bi = i(154);
            o.ZP.use(bi.Z);
            var wi = new bi.Z({
                theme: {
                    dark: !0,
                    options: {
                        customProperties: !0
                    },
                    themes: {
                        light: {
                            primary: "#ee44aa",
                            secondary: "#424242",
                            accent: "#82B1FF",
                            error: "#FF5252",
                            info: "#2196F3",
                            success: "#4CAF50",
                            warning: "#FFC107"
                        }
                    }
                }
            });
            o.ZP.config.productionTip = !1,
            o.ZP.directive("visible", (function(e, t) {
                e.style.visibility = t.value ? "visible" : "hidden"
            }
            )),
            window.vueApp = new o.ZP({
                vuetify: wi,
                render: e => e(xi)
            }).$mount("#app"),
            window.App = Xe,
            window.config = S.vc,
            S.vc.logLevel = S.vc.LOG_LEVEL_VERBOSE
        },
        9451: function() {}
    }
      , t = {};
    function i(o) {
        var s = t[o];
        if (void 0 !== s)
            return s.exports;
        var n = t[o] = {
            id: o,
            loaded: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, i),
        n.loaded = !0,
        n.exports
    }
    i.m = e,
    function() {
        var e = [];
        i.O = function(t, o, s, n) {
            if (!o) {
                var r = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    o = e[c][0],
                    s = e[c][1],
                    n = e[c][2];
                    for (var l = !0, a = 0; a < o.length; a++)
                        (!1 & n || r >= n) && Object.keys(i.O).every((function(e) {
                            return i.O[e](o[a])
                        }
                        )) ? o.splice(a--, 1) : (l = !1,
                        n < r && (r = n));
                    if (l) {
                        e.splice(c--, 1);
                        var d = s();
                        void 0 !== d && (t = d)
                    }
                }
                return t
            }
            n = n || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > n; c--)
                e[c] = e[c - 1];
            e[c] = [o, s, n]
        }
    }(),
    function() {
        i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return i.d(t, {
                a: t
            }),
            t
        }
    }(),
    function() {
        i.d = function(e, t) {
            for (var o in t)
                i.o(t, o) && !i.o(e, o) && Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: t[o]
                })
        }
    }(),
    function() {
        i.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(),
    function() {
        i.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        i.nmd = function(e) {
            return e.paths = [],
            e.children || (e.children = []),
            e
        }
    }(),
    function() {
        var e = {
            143: 0
        };
        i.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, o) {
            var s, n, r = o[0], l = o[1], a = o[2], d = 0;
            if (r.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (s in l)
                    i.o(l, s) && (i.m[s] = l[s]);
                if (a)
                    var c = a(i)
            }
            for (t && t(o); d < r.length; d++)
                n = r[d],
                i.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return i.O(c)
        }
          , o = self["webpackChunklive2d_viewer_web"] = self["webpackChunklive2d_viewer_web"] || [];
        o.forEach(t.bind(null, 0)),
        o.push = t.bind(null, o.push.bind(o))
    }();
    var o = i.O(void 0, [998], (function() {
        return i(700)
    }
    ));
    o = i.O(o)
}
)();
//# sourceMappingURL=app.751a26ef.js.map
