import { a as qe } from "./chunk-F2FK4L2J.mjs";
import { a as P } from "./chunk-YE3YHFUH.mjs";
import { a as xe, b as we, c as be } from "./chunk-DRBNGD4N.mjs";
import { a as ve, b as Ue, c as Fe } from "./chunk-K7VTPSHK.mjs";
import { h as W, i as D } from "./chunk-DGRYFZ2W.mjs";
import "./chunk-4WVXJLHY.mjs";
import "./chunk-42U43NKG.mjs";
import {
  Aa as de,
  Ba as fe,
  C as Y,
  E as b,
  Ea as ce,
  F as p,
  Ha as pe,
  Ka as ue,
  Na as he,
  O as ne,
  Pa as ye,
  T as A,
  Ta as ge,
  Ua as N,
  Ya as _,
  Za as R,
  _a as S,
  ba as B,
  c as w,
  ea as oe,
  h as q,
  ia as v,
  ja as ie,
  la as V,
  m as $,
  ma as y,
  n as ee,
  o as C,
  p as re,
  r as te,
  s as k,
  sa as se,
  ua as me,
  v as ae,
  va as I,
  w as e,
  wa as E,
  x as h,
  ya as le,
} from "./chunk-JOUMKV3D.mjs";
import "./chunk-HZL4YIMB.mjs";
import "./chunk-22CK3BVJ.mjs";
import "./chunk-A3IIQ6X3.mjs";
var _e = se(p.a),
  Re = ["YhMkM8luC"],
  Se = "framer-EAVeB",
  Pe = { YhMkM8luC: "framer-v-411n0u" };
var je = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 },
  Ce = { damping: 40, delay: 0, mass: 1, stiffness: 250, type: "spring" },
  Le = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: Ce, x: 0, y: 0 },
  ze = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ye = (r) =>
    typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? { src: r } : void 0,
  We = ({ value: r, children: a }) => {
    let n = $(Y),
      i = r ?? n.transition,
      s = te(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(Y.Provider, { value: s, children: a });
  },
  De = p(w),
  He = ({ height: r, id: a, image: n, link: i, title: s, width: d, ...m }) => {
    var f;
    return {
      ...m,
      CQSWCSPLh:
        (f = s ?? m.CQSWCSPLh) !== null && f !== void 0
          ? f
          : "The benefits of doulas: How doulas improve employee health and workplace outcomes",
      WfeBnMUHL: i ?? m.WfeBnMUHL,
      xzJNje9Y6: n ?? m.xzJNje9Y6,
    };
  },
  Qe = (r, a) => (r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-")),
  Je = q(function (r, a) {
    let { activeLocale: n, setLocale: i } = A(),
      { style: s, className: d, layoutId: m, variant: f, WfeBnMUHL: Q, xzJNje9Y6: J, CQSWCSPLh: M, ...O } = He(r),
      {
        baseVariant: G,
        classNames: c,
        clearLoadingGesture: Ae,
        gestureHandlers: X,
        gestureVariant: T,
        isLoading: Be,
        setGestureState: K,
        setVariant: z,
        variants: o,
      } = ye({ cycleOrder: Re, defaultVariant: "YhMkM8luC", variant: f, variantClassNames: Pe }),
      t = Qe(r, o),
      g = k(null),
      l = C(),
      u = [be],
      x = me();
    return e(b, {
      id: m ?? l,
      children: e(De, {
        animate: o,
        initial: !1,
        children: e(We, {
          value: ze,
          children: e(ce, {
            href: Q,
            children: h(_e, {
              ...O,
              ...X,
              __framer__animate: { transition: Ce },
              __framer__animateOnce: !0,
              __framer__enter: je,
              __framer__exit: Le,
              __framer__styleAppearEffectEnabled: !0,
              __framer__threshold: 0,
              __perspectiveFX: !1,
              __smartComponentFX: !0,
              __targetOpacity: 1,
              className: `${v(Se, ...u, "framer-411n0u", d, c)} framer-748h3o`,
              "data-framer-name": "Variant 1",
              layoutDependency: t,
              layoutId: "YhMkM8luC",
              ref: a ?? g,
              style: { ...s },
              children: [
                e(ge, {
                  background: {
                    alt: "",
                    fit: "fill",
                    sizes: x?.width || "100vw",
                    ...Ye(J),
                    positionX: "center",
                    positionY: "top",
                  },
                  className: "framer-11bdv62",
                  layoutDependency: t,
                  layoutId: "lCv4d7V5F",
                  style: {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                }),
                e(p.div, {
                  className: "framer-nh8zcw",
                  layoutDependency: t,
                  layoutId: "lHfUzPaWT",
                  children: e(N, {
                    __fromCanvasComponent: !0,
                    children: e(w, {
                      children: e(p.h4, {
                        className: "framer-styles-preset-17ii97p",
                        "data-styles-preset": "BaJmcX3L2",
                        children: "The benefits of doulas: How doulas improve employee health and workplace outcomes",
                      }),
                    }),
                    className: "framer-mrkwek",
                    fonts: ["Inter"],
                    layoutDependency: t,
                    layoutId: "Q9KbdeBiW",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: M,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Me = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-EAVeB.framer-748h3o, .framer-EAVeB .framer-748h3o { display: block; }",
    ".framer-EAVeB.framer-411n0u { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 374px; }",
    ".framer-EAVeB .framer-11bdv62 { aspect-ratio: 1.405 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 266px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-EAVeB .framer-nh8zcw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-EAVeB .framer-mrkwek { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-EAVeB.framer-411n0u, .framer-EAVeB .framer-nh8zcw { gap: 0px; } .framer-EAVeB.framer-411n0u > *, .framer-EAVeB .framer-nh8zcw > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-EAVeB.framer-411n0u > :first-child, .framer-EAVeB .framer-nh8zcw > :first-child { margin-top: 0px; } .framer-EAVeB.framer-411n0u > :last-child, .framer-EAVeB .framer-nh8zcw > :last-child { margin-bottom: 0px; } }",
    ...we,
  ],
  U = V(Je, Me, "framer-EAVeB"),
  H = U;
U.displayName = "blog card";
U.defaultProps = { height: 360, width: 373.5 };
oe(U, {
  WfeBnMUHL: { title: "Link", type: B.Link },
  xzJNje9Y6: { title: "Image", type: B.ResponsiveImage },
  CQSWCSPLh: {
    defaultValue: "The benefits of doulas: How doulas improve employee health and workplace outcomes",
    title: "Title",
    type: B.String,
  },
});
_(
  U,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...S(xe),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Oe = R(D),
  Ge = R(H),
  Xe = R(W);
var Te = {
  hxk9HYn2s: "(min-width: 1440px)",
  W5NAcJhdE: "(max-width: 809px)",
  ygjngIVJ5: "(min-width: 1200px) and (max-width: 1439px)",
  zuiGYPa2Q: "(min-width: 810px) and (max-width: 1199px)",
};
var ke = "framer-22rqq",
  Ke = {
    hxk9HYn2s: "framer-v-1ai7kyf",
    W5NAcJhdE: "framer-v-vuou4e",
    ygjngIVJ5: "framer-v-1wypz77",
    zuiGYPa2Q: "framer-v-17u0au7",
  },
  Ze = (r) =>
    typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? { src: r } : void 0,
  $e = ({ query: r, pageSize: a, children: n }) => {
    let i = he(r);
    return n(i);
  },
  j = P(),
  er = { Desktop: "hxk9HYn2s", Laptop: "ygjngIVJ5", Phone: "W5NAcJhdE", Tablet: "zuiGYPa2Q" },
  rr = ({ height: r, id: a, width: n, ...i }) => {
    var s, d;
    return {
      ...i,
      variant:
        (d = (s = er[i.variant]) !== null && s !== void 0 ? s : i.variant) !== null && d !== void 0 ? d : "hxk9HYn2s",
    };
  },
  tr = q(function (r, a) {
    let { activeLocale: n, setLocale: i } = A(),
      {
        style: s,
        className: d,
        layoutId: m,
        variant: f,
        nbz2SEBe5ArlYgvK20: Q,
        xSSzbK8fFArlYgvK20: J,
        XJ9S5ccPKArlYgvK20: M,
        idArlYgvK20: O,
        ...G
      } = rr(r);
    (ee(() => {
      let o = P(void 0, n);
      if (o.robots) {
        let t = document.querySelector('meta[name="robots"]');
        t
          ? t.setAttribute("content", o.robots)
          : ((t = document.createElement("meta")),
            t.setAttribute("name", "robots"),
            t.setAttribute("content", o.robots),
            document.head.appendChild(t));
      }
    }, [void 0, n]),
      re(() => {
        let o = P(void 0, n);
        if (((document.title = o.title || ""), o.viewport)) {
          var t;
          (t = document.querySelector('meta[name="viewport"]')) === null ||
            t === void 0 ||
            t.setAttribute("content", o.viewport);
        }
        let g = o.bodyClassName;
        if (g) {
          let l = document.body;
          (l.classList.forEach((u) => u.startsWith("framer-body-") && l.classList.remove(u)),
            l.classList.add(`${o.bodyClassName}-framer-22rqq`));
        }
        return () => {
          g && document.body.classList.remove(`${o.bodyClassName}-framer-22rqq`);
        };
      }, [void 0, n]));
    let [c, Ae] = ue(f, Te, !1),
      X = void 0,
      T = k(null),
      Be = ne(),
      K = C(),
      z = [Fe];
    return (
      le({}),
      e(ie.Provider, {
        value: { primaryVariantId: "hxk9HYn2s", variantClassNames: Ke },
        children: h(b, {
          id: m ?? K,
          children: [
            h(p.div, {
              ...G,
              className: v(ke, ...z, "framer-1ai7kyf", d),
              ref: a ?? T,
              style: { ...s },
              children: [
                e(I, {
                  width: "100vw",
                  children: e(y, {
                    breakpoint: c,
                    overrides: { W5NAcJhdE: { layoutScroll: !0 } },
                    children: e(E, {
                      className: "framer-5wlub2-container",
                      children: e(y, {
                        breakpoint: c,
                        overrides: { W5NAcJhdE: { variant: "xc0okuwv4" }, zuiGYPa2Q: { variant: "uj__oEzuT" } },
                        children: e(D, {
                          height: "100%",
                          id: "UuRGZdjey",
                          layoutId: "UuRGZdjey",
                          style: { width: "100%" },
                          variant: "Uf_fIK4bv",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                e("section", {
                  className: "framer-1ysj058",
                  "data-framer-name": "Blog",
                  name: "Blog",
                  children: h("div", {
                    className: "framer-1j2ymn6",
                    "data-framer-name": "blog-wrapper",
                    name: "blog-wrapper",
                    children: [
                      e(N, {
                        __fromCanvasComponent: !0,
                        children: e(w, {
                          children: e("h2", {
                            className: "framer-styles-preset-16hvz9y",
                            "data-styles-preset": "RbiA4jQz_",
                            children: "Our blogs",
                          }),
                        }),
                        className: "framer-tihuct",
                        fonts: ["Inter"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e("div", {
                        className: "framer-1uw595n",
                        "data-framer-name": "blog list",
                        name: "blog list",
                        children: e(de, {
                          children: e($e, {
                            query: {
                              from: { alias: "default", data: qe, type: "Collection" },
                              limit: { type: "LiteralValue", value: 10 },
                              select: [
                                { collection: "default", name: "nbz2SEBe5", type: "Identifier" },
                                { collection: "default", name: "xSSzbK8fF", type: "Identifier" },
                                { collection: "default", name: "XJ9S5ccPK", type: "Identifier" },
                                { collection: "default", name: "id", type: "Identifier" },
                              ],
                            },
                            children: (o, t, g) =>
                              e(ae, {
                                children: o.map(({ nbz2SEBe5: l, xSSzbK8fF: u, XJ9S5ccPK: x, id: Z }, nr) =>
                                  e(
                                    b,
                                    {
                                      id: `ArlYgvK20-${Z}`,
                                      children: e(fe.Provider, {
                                        value: { nbz2SEBe5: l },
                                        children: e(pe, {
                                          links: [
                                            {
                                              href: { pathVariables: { nbz2SEBe5: l }, webPageId: "wdCCtObbO" },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { pathVariables: { nbz2SEBe5: l }, webPageId: "wdCCtObbO" },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { pathVariables: { nbz2SEBe5: l }, webPageId: "wdCCtObbO" },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { pathVariables: { nbz2SEBe5: l }, webPageId: "wdCCtObbO" },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (F) =>
                                            e(y, {
                                              breakpoint: c,
                                              overrides: {
                                                W5NAcJhdE: { width: "max(min(100vw - 32px, 1200px), 50px)" },
                                                zuiGYPa2Q: {
                                                  width: "max((min(100vw - 96px, 1200px) - 40px) / 2, 50px)",
                                                },
                                              },
                                              children: e(I, {
                                                width: "max((min(100vw - 96px, 1200px) - 80px) / 3, 50px)",
                                                children: e(E, {
                                                  className: "framer-1qu07os-container",
                                                  children: e(y, {
                                                    breakpoint: c,
                                                    overrides: {
                                                      W5NAcJhdE: { WfeBnMUHL: F[3] },
                                                      ygjngIVJ5: { WfeBnMUHL: F[1] },
                                                      zuiGYPa2Q: { WfeBnMUHL: F[2] },
                                                    },
                                                    children: e(H, {
                                                      CQSWCSPLh: x,
                                                      height: "100%",
                                                      id: "faV9pwFuN",
                                                      layoutId: "faV9pwFuN",
                                                      style: { width: "100%" },
                                                      WfeBnMUHL: F[0],
                                                      width: "100%",
                                                      xzJNje9Y6: Ze(u),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      }),
                                    },
                                    Z,
                                  ),
                                ),
                              }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                e(I, {
                  width: "100vw",
                  children: e(E, {
                    className: "framer-3pxv2b-container",
                    children: e(y, {
                      breakpoint: c,
                      overrides: { W5NAcJhdE: { variant: "NeB9R_H2P" }, zuiGYPa2Q: { variant: "iRiNBEgFf" } },
                      children: e(W, {
                        height: "100%",
                        id: "OKgLkCe15",
                        layoutId: "OKgLkCe15",
                        style: { width: "100%" },
                        variant: "sritXTx0F",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: v(ke, ...z), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  ar = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${j.bodyClassName}-framer-22rqq { background: var(--token-7816c7d3-b562-409a-8390-63b53ab08244, rgb(255, 255, 255)) /* {"name":"Bg - white"} */; }`,
    ".framer-22rqq.framer-1g9oxlz, .framer-22rqq .framer-1g9oxlz { display: block; }",
    ".framer-22rqq.framer-1ai7kyf { align-content: center; align-items: center; background-color: var(--token-7816c7d3-b562-409a-8390-63b53ab08244, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }",
    ".framer-22rqq .framer-5wlub2-container, .framer-22rqq .framer-3pxv2b-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-22rqq .framer-1ysj058 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 48px 80px 48px; position: relative; width: 100%; }",
    ".framer-22rqq .framer-1j2ymn6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-22rqq .framer-tihuct { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 700px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-22rqq .framer-1uw595n { display: grid; flex: none; gap: 40px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }",
    ".framer-22rqq .framer-1qu07os-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-22rqq.framer-1ai7kyf, .framer-22rqq .framer-1ysj058, .framer-22rqq .framer-1j2ymn6 { gap: 0px; } .framer-22rqq.framer-1ai7kyf > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-22rqq.framer-1ai7kyf > :first-child, .framer-22rqq .framer-1ysj058 > :first-child, .framer-22rqq .framer-1j2ymn6 > :first-child { margin-top: 0px; } .framer-22rqq.framer-1ai7kyf > :last-child, .framer-22rqq .framer-1ysj058 > :last-child, .framer-22rqq .framer-1j2ymn6 > :last-child { margin-bottom: 0px; } .framer-22rqq .framer-1ysj058 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-22rqq .framer-1j2ymn6 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }",
    "@media (min-width: 1440px) { .framer-22rqq .hidden-1ai7kyf { display: none !important; } }",
    `@media (min-width: 1200px) and (max-width: 1439px) { .framer-22rqq .hidden-1wypz77 { display: none !important; } .${j.bodyClassName}-framer-22rqq { background: var(--token-7816c7d3-b562-409a-8390-63b53ab08244, rgb(255, 255, 255)) /* {"name":"Bg - white"} */; } .framer-22rqq.framer-1ai7kyf { width: 1200px; }}`,
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-22rqq .hidden-17u0au7 { display: none !important; } .${j.bodyClassName}-framer-22rqq { background: var(--token-7816c7d3-b562-409a-8390-63b53ab08244, rgb(255, 255, 255)) /* {"name":"Bg - white"} */; } .framer-22rqq.framer-1ai7kyf { width: 810px; } .framer-22rqq .framer-5wlub2-container { z-index: 8; } .framer-22rqq .framer-1ysj058 { padding: 40px 48px 80px 48px; } .framer-22rqq .framer-1uw595n { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
    `@media (max-width: 809px) { .framer-22rqq .hidden-vuou4e { display: none !important; } .${j.bodyClassName}-framer-22rqq { background: var(--token-7816c7d3-b562-409a-8390-63b53ab08244, rgb(255, 255, 255)) /* {"name":"Bg - white"} */; } .framer-22rqq.framer-1ai7kyf { width: 390px; } .framer-22rqq .framer-5wlub2-container { left: 50%; position: fixed; top: 0px; transform: translateX(-50%); z-index: 8; } .framer-22rqq .framer-1ysj058 { padding: 100px 16px 40px 16px; } .framer-22rqq .framer-1uw595n { gap: 24px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-22rqq .framer-1uw595n { gap: 0px; } .framer-22rqq .framer-1uw595n > *, .framer-22rqq .framer-1uw595n > :first-child, .framer-22rqq .framer-1uw595n > :last-child { margin: 0px; } }}`,
    ...Ue,
  ],
  L = V(tr, ar, "framer-22rqq"),
  br = L;
L.displayName = "Home";
L.defaultProps = { height: 1535, width: 1440 };
_(
  L,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Oe,
    ...Ge,
    ...Xe,
    ...S(ve),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var vr = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerRct5VkKS9",
      slots: [],
      annotations: {
        framerResponsiveScreen: "",
        framerContractVersion: "1",
        framerIntrinsicHeight: "1535",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ygjngIVJ5":{"layout":["fixed","auto"]},"zuiGYPa2Q":{"layout":["fixed","auto"]},"W5NAcJhdE":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "1440",
        framerDisplayContentsDiv: "false",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { vr as __FramerMetadata__, br as default };
//# sourceMappingURL=rumlxVvbesR6aZ3_Z0lC11lKZ_8nbgMUMmpZv5waYZo.LCOYGKQL.mjs.map
