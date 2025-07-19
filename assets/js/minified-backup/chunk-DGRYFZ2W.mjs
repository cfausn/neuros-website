import { a as ge, b as Ue, c as Ce, d as Fe } from "./chunk-4WVXJLHY.mjs";
import {
  $ as he,
  C as I,
  E as O,
  Ea as u,
  F as r,
  Ja as be,
  Pa as $,
  Qa as ee,
  T as Q,
  Ta as se,
  Ua as m,
  Xa as b,
  Ya as re,
  Za as M,
  _a as H,
  ba as f,
  c as i,
  ea as Y,
  fa as we,
  h as B,
  ia as P,
  la as G,
  m as Z,
  n as xe,
  o as J,
  r as S,
  s as V,
  t as ve,
  u as q,
  ua as X,
  va as D,
  w as e,
  x as p,
  xa as j,
} from "./chunk-JOUMKV3D.mjs";
var He = { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" };
var Ke = {
    ...He,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column",
  },
  ke = B((t, a) => e("div", { style: Ke, ref: a }));
var ye,
  Ie = (t) => {
    if (!ye) {
      let a = t.forwardRef(({ color: l = "currentColor", size: n = 24, ...d }, h) =>
        t.createElement(
          "svg",
          {
            ref: h,
            xmlns: "http://www.w3.org/2000/svg",
            width: n,
            height: n,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: l,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...d,
          },
          t.createElement("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
          t.createElement("polyline", { points: "9 22 9 12 15 12 15 22" }),
        ),
      );
      ((a.displayName = "Home"), (ye = a));
    }
    return ye;
  };
var De = {
    onClick: { type: f.EventHandler },
    onMouseDown: { type: f.EventHandler },
    onMouseUp: { type: f.EventHandler },
    onMouseEnter: { type: f.EventHandler },
    onMouseLeave: { type: f.EventHandler },
  },
  We = (t, a) => t.find((l) => l.toLowerCase().includes(a));
function Re(t, a, l = "", n, d) {
  let h = S(() => {
    if (l == null || l?.length === 0) return null;
    let s = l.toLowerCase().replace(/-|\s/g, "");
    var g;
    return (g = d[s]) !== null && g !== void 0 ? g : We(t, s);
  }, [n, l]);
  return a ? n : h;
}
var le = [
    "activity",
    "airplay",
    "alert-circle",
    "alert-octagon",
    "alert-triangle",
    "align-center",
    "align-justify",
    "align-left",
    "align-right",
    "anchor",
    "aperture",
    "archive",
    "arrow-down",
    "arrow-down-circle",
    "arrow-down-left",
    "arrow-down-right",
    "arrow-left",
    "arrow-left-circle",
    "arrow-right",
    "arrow-right-circle",
    "arrow-up",
    "arrow-up-circle",
    "arrow-up-left",
    "arrow-up-right",
    "at-sign",
    "award",
    "bar-chart",
    "bar-chart-2",
    "battery",
    "battery-charging",
    "bell",
    "bell-off",
    "bluetooth",
    "bold",
    "book",
    "book-open",
    "bookmark",
    "box",
    "briefcase",
    "calendar",
    "camera",
    "camera-off",
    "cast",
    "check",
    "check-circle",
    "check-square",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "chevrons-down",
    "chevrons-left",
    "chevrons-right",
    "chevrons-up",
    "chrome",
    "circle",
    "clipboard",
    "clock",
    "cloud",
    "cloud-drizzle",
    "cloud-lightning",
    "cloud-off",
    "cloud-rain",
    "cloud-snow",
    "code",
    "codepen",
    "codesandbox",
    "coffee",
    "columns",
    "command",
    "compass",
    "copy",
    "corner-down-left",
    "corner-down-right",
    "corner-left-down",
    "corner-left-up",
    "corner-right-down",
    "corner-right-up",
    "corner-up-left",
    "corner-up-right",
    "cpu",
    "credit-card",
    "crop",
    "crosshair",
    "database",
    "delete",
    "disc",
    "divide",
    "divide-circle",
    "divide-square",
    "dollar-sign",
    "download",
    "download-cloud",
    "dribbble",
    "droplet",
    "edit",
    "edit-2",
    "edit-3",
    "external-link",
    "eye",
    "eye-off",
    "facebook",
    "fast-forward",
    "feather",
    "figma",
    "file",
    "file-minus",
    "file-plus",
    "file-text",
    "film",
    "filter",
    "flag",
    "folder",
    "folder-minus",
    "folder-plus",
    "framer",
    "frown",
    "gift",
    "git-branch",
    "git-commit",
    "git-merge",
    "git-pull-request",
    "github",
    "gitlab",
    "globe",
    "grid",
    "hard-drive",
    "hash",
    "headphones",
    "heart",
    "help-circle",
    "hexagon",
    "home",
    "image",
    "inbox",
    "info",
    "instagram",
    "italic",
    "key",
    "layers",
    "layout",
    "life-buoy",
    "link",
    "link-2",
    "linkedin",
    "list",
    "loader",
    "lock",
    "log-in",
    "log-out",
    "mail",
    "map",
    "map-pin",
    "maximize",
    "maximize-2",
    "meh",
    "menu",
    "message-circle",
    "message-square",
    "mic",
    "mic-off",
    "minimize",
    "minimize-2",
    "minus",
    "minus-circle",
    "minus-square",
    "monitor",
    "moon",
    "more-horizontal",
    "more-vertical",
    "mouse-pointer",
    "move",
    "music",
    "navigation",
    "navigation-2",
    "octagon",
    "package",
    "paperclip",
    "pause",
    "pause-circle",
    "pen-tool",
    "percent",
    "phone",
    "phone-call",
    "phone-forwarded",
    "phone-incoming",
    "phone-missed",
    "phone-off",
    "phone-outgoing",
    "pie-chart",
    "play",
    "play-circle",
    "plus",
    "plus-circle",
    "plus-square",
    "pocket",
    "power",
    "printer",
    "radio",
    "refresh-ccw",
    "refresh-cw",
    "repeat",
    "rewind",
    "rotate-ccw",
    "rotate-cw",
    "rss",
    "save",
    "scissors",
    "search",
    "send",
    "server",
    "settings",
    "share",
    "share-2",
    "shield",
    "shield-off",
    "shopping-bag",
    "shopping-cart",
    "shuffle",
    "sidebar",
    "skip-back",
    "skip-forward",
    "slack",
    "slash",
    "sliders",
    "smartphone",
    "smile",
    "speaker",
    "square",
    "star",
    "stop-circle",
    "sun",
    "sunrise",
    "sunset",
    "tablet",
    "tag",
    "target",
    "terminal",
    "thermometer",
    "thumbs-down",
    "thumbs-up",
    "toggle-left",
    "toggle-right",
    "tool",
    "trash",
    "trash-2",
    "trello",
    "trending-down",
    "trending-up",
    "triangle",
    "truck",
    "tv",
    "twitch",
    "twitter",
    "type",
    "umbrella",
    "underline",
    "unlock",
    "upload",
    "upload-cloud",
    "user",
    "user-check",
    "user-minus",
    "user-plus",
    "user-x",
    "users",
    "video",
    "video-off",
    "voicemail",
    "volume",
    "volume-1",
    "volume-2",
    "volume-x",
    "watch",
    "wifi",
    "wifi-off",
    "wind",
    "x",
    "x-circle",
    "x-octagon",
    "x-square",
    "youtube",
    "zap",
    "zap-off",
    "zoom-in",
    "zoom-out",
  ],
  Ze = "https://framer.com/m/feather-icons/",
  Je = le.map((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Oe = le.reduce((t, a) => ((t[a.toLowerCase()] = a), t), {});
function x(t) {
  let {
      color: a,
      selectByList: l,
      iconSearch: n,
      iconSelection: d,
      onClick: h,
      onMouseDown: v,
      onMouseUp: s,
      onMouseEnter: g,
      onMouseLeave: w,
      mirrored: U,
    } = t,
    T = V(!1),
    k = Re(le, l, n, d, Oe),
    [c, E] = ve(k === "Home" ? Ie(q) : null);
  async function K() {
    let W = !0;
    try {
      let C = await import(`${Ze}${k}.js@0.0.29`);
      W && E(C.default(q));
    } catch (_) {
      (console.log(_), W && E(null));
    }
    return () => {
      W = !1;
    };
  }
  xe(() => {
    K();
  }, [k]);
  let y = he.current() === he.canvas ? e(ke, {}) : null;
  return e("div", {
    style: { display: "contents" },
    onClick: h,
    onMouseEnter: g,
    onMouseLeave: w,
    onMouseDown: v,
    onMouseUp: s,
    children: c
      ? e(c, { style: { width: "100%", height: "100%", transform: U ? "scale(-1, 1)" : void 0 }, color: a })
      : y,
  });
}
x.displayName = "Feather";
x.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: !0,
  mirrored: !1,
};
Y(x, {
  selectByList: {
    type: f.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: x.defaultProps.selectByList,
  },
  iconSelection: {
    type: f.Enum,
    options: le,
    optionTitles: Je,
    defaultValue: x.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: t }) => !t,
    description: "Find every icon name on the [Feather site](https://feathericons.com/)",
  },
  iconSearch: {
    type: f.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: t }) => t,
  },
  mirrored: { type: f.Boolean, enabledTitle: "Yes", disabledTitle: "No", defaultValue: x.defaultProps.mirrored },
  color: { type: f.Color, title: "Color", defaultValue: x.defaultProps.color },
  ...De,
});
ee.loadFonts([
  "FR;InterDisplay-Medium",
  "FR;InterDisplay-Bold",
  "FR;InterDisplay-BoldItalic",
  "FR;InterDisplay-MediumItalic",
]);
var Ae = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2",
          weight: "500",
        },
      ],
    },
  ],
  Ne = [
    '.framer-DMEF8 .framer-styles-preset-1ctbtm0:not(.rich-text-wrapper), .framer-DMEF8 .framer-styles-preset-1ctbtm0.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1439px) and (min-width: 1200px) { .framer-DMEF8 .framer-styles-preset-1ctbtm0:not(.rich-text-wrapper), .framer-DMEF8 .framer-styles-preset-1ctbtm0.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-DMEF8 .framer-styles-preset-1ctbtm0:not(.rich-text-wrapper), .framer-DMEF8 .framer-styles-preset-1ctbtm0.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-DMEF8 .framer-styles-preset-1ctbtm0:not(.rich-text-wrapper), .framer-DMEF8 .framer-styles-preset-1ctbtm0.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  Ee = "framer-DMEF8";
ee.loadFonts(["FR;InterDisplay", "FR;InterDisplay-Bold", "FR;InterDisplay-BoldItalic", "FR;InterDisplay-Italic"]);
var ce = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/2uIBiALfCHVpWbHqRMZutfT7giU.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/nCpxWS6DaPlPe0lHzStXAPCo3lw.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/vebZUMjGyKkYsfcY73iwWTzLNag.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/THWAFHoAcmqLMy81E8hCSdziVKA.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/sQxGYWDlRkDr0eOKqiNRl6g5rs.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/NNTAT1XAm8ZRkr824inYPkjNeL4.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/P2qr9PAWBt905929rHfxmneMUG0.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/2BmSa4TZZvFKAZg2DydxTbvKlTU.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/djqIk3Er2JcAcz7Rup88BdINEw.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/KMFW46iYsEZaUBwXbwPc9nQm71o.woff2",
          weight: "400",
        },
      ],
    },
  ],
  fe = [
    '.framer-sefdu .framer-styles-preset-7w5cfp:not(.rich-text-wrapper), .framer-sefdu .framer-styles-preset-7w5cfp.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 180%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-fa75f01e-545d-45f6-bb11-78dede79f243, #6c6c6c); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-sefdu .framer-styles-preset-7w5cfp:not(.rich-text-wrapper), .framer-sefdu .framer-styles-preset-7w5cfp.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 180%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-fa75f01e-545d-45f6-bb11-78dede79f243, #6c6c6c); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-sefdu .framer-styles-preset-7w5cfp:not(.rich-text-wrapper), .framer-sefdu .framer-styles-preset-7w5cfp.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 180%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-fa75f01e-545d-45f6-bb11-78dede79f243, #6c6c6c); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  me = "framer-sefdu";
ee.loadFonts([]);
var Se = [{ explicitInter: !0, fonts: [] }],
  Ve = [
    '.framer-1ruDC .framer-styles-preset-135z882:not(.rich-text-wrapper), .framer-1ruDC .framer-styles-preset-135z882.rich-text-wrapper a { --framer-link-current-text-color: var(--token-33851d71-e9ac-4b29-b2ea-a2dec6814586, #01b796) /* {"name":"Secondary-lemon-100"} */; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-33851d71-e9ac-4b29-b2ea-a2dec6814586, #01b796) /* {"name":"Secondary-lemon-100"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, #ffffff); --framer-link-text-decoration: none; }',
  ],
  Ye = "framer-1ruDC";
var Xe = M(x),
  de = we(x),
  $e = { kBvAIZi0_: { pressed: !0 }, VpU3NJmco: { hover: !0 } },
  er = ["VpU3NJmco", "kBvAIZi0_"],
  rr = "framer-agkRe",
  tr = { kBvAIZi0_: "framer-v-opztjd", VpU3NJmco: "framer-v-1mi62uz" };
function Pe(t, ...a) {
  let l = {};
  return (a?.forEach((n) => n && Object.assign(l, t[n])), l);
}
var ar = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  or = ({ value: t, children: a }) => {
    let l = Z(I),
      n = t ?? l.transition,
      d = S(() => ({ ...l, transition: n }), [JSON.stringify(n)]);
    return e(I.Provider, { value: d, children: a });
  },
  nr = r(i),
  ir = {
    "Alert-circle": "alert-circle",
    "Alert-octagon": "alert-octagon",
    "Alert-triangle": "alert-triangle",
    "Align-center": "align-center",
    "Align-justify": "align-justify",
    "Align-left": "align-left",
    "Align-right": "align-right",
    "Arrow-down-circle": "arrow-down-circle",
    "Arrow-down-left": "arrow-down-left",
    "Arrow-down-right": "arrow-down-right",
    "Arrow-down": "arrow-down",
    "Arrow-left-circle": "arrow-left-circle",
    "Arrow-left": "arrow-left",
    "Arrow-right-circle": "arrow-right-circle",
    "Arrow-right": "arrow-right",
    "Arrow-up-circle": "arrow-up-circle",
    "Arrow-up-left": "arrow-up-left",
    "Arrow-up-right": "arrow-up-right",
    "Arrow-up": "arrow-up",
    "At-sign": "at-sign",
    "Bar-chart-2": "bar-chart-2",
    "Bar-chart": "bar-chart",
    "Battery-charging": "battery-charging",
    "Bell-off": "bell-off",
    "Book-open": "book-open",
    "Camera-off": "camera-off",
    "Check-circle": "check-circle",
    "Check-square": "check-square",
    "Chevron-down": "chevron-down",
    "Chevron-left": "chevron-left",
    "Chevron-right": "chevron-right",
    "Chevron-up": "chevron-up",
    "Chevrons-down": "chevrons-down",
    "Chevrons-left": "chevrons-left",
    "Chevrons-right": "chevrons-right",
    "Chevrons-up": "chevrons-up",
    "Cloud-drizzle": "cloud-drizzle",
    "Cloud-lightning": "cloud-lightning",
    "Cloud-off": "cloud-off",
    "Cloud-rain": "cloud-rain",
    "Cloud-snow": "cloud-snow",
    "Corner-down-left": "corner-down-left",
    "Corner-down-right": "corner-down-right",
    "Corner-left-down": "corner-left-down",
    "Corner-left-up": "corner-left-up",
    "Corner-right-down": "corner-right-down",
    "Corner-right-up": "corner-right-up",
    "Corner-up-left": "corner-up-left",
    "Corner-up-right": "corner-up-right",
    "Credit-card": "credit-card",
    "Divide-circle": "divide-circle",
    "Divide-square": "divide-square",
    "Dollar-sign": "dollar-sign",
    "Download-cloud": "download-cloud",
    "Edit-2": "edit-2",
    "Edit-3": "edit-3",
    "External-link": "external-link",
    "Eye-off": "eye-off",
    "Fast-forward": "fast-forward",
    "File-minus": "file-minus",
    "File-plus": "file-plus",
    "File-text": "file-text",
    "Folder-minus": "folder-minus",
    "Folder-plus": "folder-plus",
    "Git-branch": "git-branch",
    "Git-commit": "git-commit",
    "Git-merge": "git-merge",
    "Git-pull-request": "git-pull-request",
    "Hard-drive": "hard-drive",
    "Help-circle": "help-circle",
    "Life-buoy": "life-buoy",
    "Link-2": "link-2",
    "Log-in": "log-in",
    "Log-out": "log-out",
    "Map-pin": "map-pin",
    "Maximize-2": "maximize-2",
    "Message-circle": "message-circle",
    "Message-square": "message-square",
    "Mic-off": "mic-off",
    "Minimize-2": "minimize-2",
    "Minus-circle": "minus-circle",
    "Minus-square": "minus-square",
    "More-horizontal": "more-horizontal",
    "More-vertical": "more-vertical",
    "Mouse-pointer": "mouse-pointer",
    "Navigation-2": "navigation-2",
    "Pause-circle": "pause-circle",
    "Pen-tool": "pen-tool",
    "Phone-call": "phone-call",
    "Phone-forwarded": "phone-forwarded",
    "Phone-incoming": "phone-incoming",
    "Phone-missed": "phone-missed",
    "Phone-off": "phone-off",
    "Phone-outgoing": "phone-outgoing",
    "Pie-chart": "pie-chart",
    "Play-circle": "play-circle",
    "Plus-circle": "plus-circle",
    "Plus-square": "plus-square",
    "Refresh-ccw": "refresh-ccw",
    "Refresh-cw": "refresh-cw",
    "Rotate-ccw": "rotate-ccw",
    "Rotate-cw": "rotate-cw",
    "Share-2": "share-2",
    "Shield-off": "shield-off",
    "Shopping-bag": "shopping-bag",
    "Shopping-cart": "shopping-cart",
    "Skip-back": "skip-back",
    "Skip-forward": "skip-forward",
    "Stop-circle": "stop-circle",
    "Thumbs-down": "thumbs-down",
    "Thumbs-up": "thumbs-up",
    "Toggle-left": "toggle-left",
    "Toggle-right": "toggle-right",
    "Trash-2": "trash-2",
    "Trending-down": "trending-down",
    "Trending-up": "trending-up",
    "Upload-cloud": "upload-cloud",
    "User-check": "user-check",
    "User-minus": "user-minus",
    "User-plus": "user-plus",
    "User-x": "user-x",
    "Video-off": "video-off",
    "Volume-1": "volume-1",
    "Volume-2": "volume-2",
    "Volume-x": "volume-x",
    "Wifi-off": "wifi-off",
    "X-circle": "x-circle",
    "X-octagon": "x-octagon",
    "X-square": "x-square",
    "Zap-off": "zap-off",
    "Zoom-in": "zoom-in",
    "Zoom-out": "zoom-out",
    Activity: "activity",
    Airplay: "airplay",
    Anchor: "anchor",
    Aperture: "aperture",
    Archive: "archive",
    Award: "award",
    Battery: "battery",
    Bell: "bell",
    Bluetooth: "bluetooth",
    Bold: "bold",
    Book: "book",
    Bookmark: "bookmark",
    Box: "box",
    Briefcase: "briefcase",
    Calendar: "calendar",
    Camera: "camera",
    Cast: "cast",
    Check: "check",
    Chrome: "chrome",
    Circle: "circle",
    Clipboard: "clipboard",
    Clock: "clock",
    Cloud: "cloud",
    Code: "code",
    Codepen: "codepen",
    Codesandbox: "codesandbox",
    Coffee: "coffee",
    Columns: "columns",
    Command: "command",
    Compass: "compass",
    Copy: "copy",
    Cpu: "cpu",
    Crop: "crop",
    Crosshair: "crosshair",
    Database: "database",
    Delete: "delete",
    Disc: "disc",
    Divide: "divide",
    Download: "download",
    Dribbble: "dribbble",
    Droplet: "droplet",
    Edit: "edit",
    Eye: "eye",
    Facebook: "facebook",
    Feather: "feather",
    Figma: "figma",
    File: "file",
    Film: "film",
    Filter: "filter",
    Flag: "flag",
    Folder: "folder",
    Framer: "framer",
    Frown: "frown",
    Gift: "gift",
    Github: "github",
    Gitlab: "gitlab",
    Globe: "globe",
    Grid: "grid",
    Hash: "hash",
    Headphones: "headphones",
    Heart: "heart",
    Hexagon: "hexagon",
    Home: "home",
    Image: "image",
    Inbox: "inbox",
    Info: "info",
    Instagram: "instagram",
    Italic: "italic",
    Key: "key",
    Layers: "layers",
    Layout: "layout",
    Link: "link",
    Linkedin: "linkedin",
    List: "list",
    Loader: "loader",
    Lock: "lock",
    Mail: "mail",
    Map: "map",
    Maximize: "maximize",
    Meh: "meh",
    Menu: "menu",
    Mic: "mic",
    Minimize: "minimize",
    Minus: "minus",
    Monitor: "monitor",
    Moon: "moon",
    Move: "move",
    Music: "music",
    Navigation: "navigation",
    Octagon: "octagon",
    Package: "package",
    Paperclip: "paperclip",
    Pause: "pause",
    Percent: "percent",
    Phone: "phone",
    Play: "play",
    Plus: "plus",
    Pocket: "pocket",
    Power: "power",
    Printer: "printer",
    Radio: "radio",
    Repeat: "repeat",
    Rewind: "rewind",
    Rss: "rss",
    Save: "save",
    Scissors: "scissors",
    Search: "search",
    Send: "send",
    Server: "server",
    Settings: "settings",
    Share: "share",
    Shield: "shield",
    Shuffle: "shuffle",
    Sidebar: "sidebar",
    Slack: "slack",
    Slash: "slash",
    Sliders: "sliders",
    Smartphone: "smartphone",
    Smile: "smile",
    Speaker: "speaker",
    Square: "square",
    Star: "star",
    Sun: "sun",
    Sunrise: "sunrise",
    Sunset: "sunset",
    Tablet: "tablet",
    Tag: "tag",
    Target: "target",
    Terminal: "terminal",
    Thermometer: "thermometer",
    Tool: "tool",
    Trash: "trash",
    Trello: "trello",
    Triangle: "triangle",
    Truck: "truck",
    Tv: "tv",
    Twitch: "twitch",
    Twitter: "twitter",
    Type: "type",
    Umbrella: "umbrella",
    Underline: "underline",
    Unlock: "unlock",
    Upload: "upload",
    User: "user",
    Users: "users",
    Video: "video",
    Voicemail: "voicemail",
    Volume: "volume",
    Watch: "watch",
    Wifi: "wifi",
    Wind: "wind",
    X: "x",
    Youtube: "youtube",
    Zap: "zap",
  },
  sr = { Desktop: "VpU3NJmco", Phone: "kBvAIZi0_" },
  lr = ({ height: t, icon: a, id: l, link: n, width: d, ...h }) => {
    var v, s, g, w, U;
    return {
      ...h,
      jyWcCEeVw: n ?? h.jyWcCEeVw,
      Sigh20RCu:
        (g = (s = (v = ir[a]) !== null && v !== void 0 ? v : a) !== null && s !== void 0 ? s : h.Sigh20RCu) !== null &&
        g !== void 0
          ? g
          : "facebook",
      variant:
        (U = (w = sr[h.variant]) !== null && w !== void 0 ? w : h.variant) !== null && U !== void 0 ? U : "VpU3NJmco",
    };
  },
  cr = (t, a) => (t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-")),
  fr = B(function (t, a) {
    let { activeLocale: l, setLocale: n } = Q(),
      { style: d, className: h, layoutId: v, variant: s, Sigh20RCu: g, jyWcCEeVw: w, ...U } = lr(t),
      {
        baseVariant: T,
        classNames: k,
        clearLoadingGesture: c,
        gestureHandlers: E,
        gestureVariant: K,
        isLoading: te,
        setGestureState: y,
        setVariant: W,
        variants: _,
      } = $({ cycleOrder: er, defaultVariant: "VpU3NJmco", enabledGestures: $e, variant: s, variantClassNames: tr }),
      C = cr(t, _),
      z = V(null),
      o = J(),
      L = [],
      pe = X();
    return e(O, {
      id: v ?? o,
      children: e(nr, {
        animate: _,
        initial: !1,
        children: e(or, {
          value: ar,
          children: e(u, {
            href: w,
            children: e(r.a, {
              ...U,
              ...E,
              "aria-label": "social button",
              className: `${P(rr, ...L, "framer-1mi62uz", h, k)} framer-apuzf3`,
              "data-framer-name": "Desktop",
              layoutDependency: C,
              layoutId: "VpU3NJmco",
              ref: a ?? z,
              style: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                ...d,
              },
              variants: {
                "kBvAIZi0_-pressed": {
                  backgroundColor: "var(--token-33851d71-e9ac-4b29-b2ea-a2dec6814586, rgb(1, 183, 150))",
                },
                "VpU3NJmco-hover": {
                  backgroundColor: "var(--token-33851d71-e9ac-4b29-b2ea-a2dec6814586, rgb(1, 183, 150))",
                },
              },
              ...Pe(
                {
                  "kBvAIZi0_-pressed": { "data-framer-name": void 0 },
                  "VpU3NJmco-hover": { "data-framer-name": void 0 },
                  kBvAIZi0_: { "data-framer-name": "Phone" },
                },
                T,
                K,
              ),
              children: e(D, {
                children: e(r.div, {
                  className: "framer-1bonbv8-container",
                  layoutDependency: C,
                  layoutId: "VWNbghOMy-container",
                  children: e(x, {
                    color: "rgb(255, 255, 255)",
                    height: "100%",
                    iconSearch: "Home",
                    iconSelection: g,
                    id: "VWNbghOMy",
                    layoutId: "VWNbghOMy",
                    mirrored: !1,
                    selectByList: !0,
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                    ...Pe(
                      { "kBvAIZi0_-pressed": { color: "rgb(0, 0, 0)" }, "VpU3NJmco-hover": { color: "rgb(0, 0, 0)" } },
                      T,
                      K,
                    ),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  mr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-agkRe.framer-apuzf3, .framer-agkRe .framer-apuzf3 { display: block; }",
    ".framer-agkRe.framer-1mi62uz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 40px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-agkRe .framer-1bonbv8-container { flex: none; height: 16px; position: relative; width: 16px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-agkRe.framer-1mi62uz { gap: 0px; } .framer-agkRe.framer-1mi62uz > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-agkRe.framer-1mi62uz > :first-child { margin-top: 0px; } .framer-agkRe.framer-1mi62uz > :last-child { margin-bottom: 0px; } }",
    ".framer-agkRe.framer-v-opztjd.framer-1mi62uz, .framer-agkRe.framer-v-1mi62uz.hover.framer-1mi62uz { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); }",
    ".framer-agkRe.framer-v-opztjd .framer-1bonbv8-container { height: 13px; width: 13px; }",
  ],
  ae = G(fr, mr, "framer-agkRe"),
  oe = ae;
ae.displayName = "Social-Links";
ae.defaultProps = { height: 40, width: 40 };
Y(ae, {
  variant: { options: ["VpU3NJmco", "kBvAIZi0_"], optionTitles: ["Desktop", "Phone"], title: "Variant", type: f.Enum },
  Sigh20RCu: de?.iconSelection && {
    ...de.iconSelection,
    defaultValue: "facebook",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  jyWcCEeVw: { title: "Link", type: f.Link },
});
re(ae, [{ explicitInter: !0, fonts: [] }, ...Xe], { supportsExplicitInterCodegen: !0 });
var dr = M(oe),
  pr = ["sritXTx0F", "iRiNBEgFf", "NeB9R_H2P"],
  ur = "framer-sloVR",
  hr = { iRiNBEgFf: "framer-v-1po3lv5", NeB9R_H2P: "framer-v-m7l6zg", sritXTx0F: "framer-v-nduiuc" };
function gr(t, ...a) {
  let l = {};
  return (a?.forEach((n) => n && Object.assign(l, t[n])), l);
}
var yr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  xr = ({ value: t, children: a }) => {
    let l = Z(I),
      n = t ?? l.transition,
      d = S(() => ({ ...l, transition: n }), [JSON.stringify(n)]);
    return e(I.Provider, { value: d, children: a });
  },
  vr = r.create(i),
  wr = { Desktop: "sritXTx0F", Phone: "NeB9R_H2P", Tablet: "iRiNBEgFf" },
  br = ({ height: t, id: a, width: l, ...n }) => ({ ...n, variant: wr[n.variant] ?? n.variant ?? "sritXTx0F" }),
  Ur = (t, a) => (t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-")),
  Cr = B(function (t, a) {
    let l = V(null),
      n = a ?? l,
      d = J(),
      { activeLocale: h, setLocale: v } = Q(),
      s = X(),
      { style: g, className: w, layoutId: U, variant: T, ...k } = br(t),
      {
        baseVariant: c,
        classNames: E,
        clearLoadingGesture: K,
        gestureHandlers: te,
        gestureVariant: y,
        isLoading: W,
        setGestureState: _,
        setVariant: C,
        variants: z,
      } = $({ cycleOrder: pr, defaultVariant: "sritXTx0F", ref: n, variant: T, variantClassNames: hr }),
      o = Ur(t, z),
      pe = P(ur, ...[Fe, me, Ye]);
    return e(O, {
      id: U ?? d,
      children: e(vr, {
        animate: z,
        initial: !1,
        children: e(xr, {
          value: yr,
          children: p(r.footer, {
            ...k,
            ...te,
            className: P(pe, "framer-nduiuc", w, E),
            "data-border": !0,
            "data-framer-name": "Desktop",
            layoutDependency: o,
            layoutId: "sritXTx0F",
            ref: n,
            style: {
              "--border-bottom-width": "0px",
              "--border-color": "rgba(0, 0, 0, 0.05)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "var(--token-15636448-77df-48cc-8a9e-3a0e24c84c68, rgb(0, 35, 52))",
              ...g,
            },
            ...gr({ iRiNBEgFf: { "data-framer-name": "Tablet" }, NeB9R_H2P: { "data-framer-name": "Phone" } }, c, y),
            children: [
              p(r.div, {
                className: "framer-18lbsfe",
                "data-framer-name": "Horizontal",
                layoutDependency: o,
                layoutId: "wDladyaLn",
                children: [
                  p(r.div, {
                    className: "framer-scnaa5",
                    "data-framer-name": "Vertical",
                    layoutDependency: o,
                    layoutId: "lA6QJCJ8O",
                    children: [
                      e(u, {
                        href: { webPageId: "augiA20Il" },
                        motionChild: !0,
                        nodeId: "mPHVqI7HG",
                        scopeId: "QIUen8xal",
                        children: e(se, {
                          as: "a",
                          background: {
                            alt: "Logo",
                            fit: "fill",
                            loading: b((s?.y || 0) + 64 + 0 + 0 + 0 + 0 + 0),
                            pixelHeight: 1024,
                            pixelWidth: 1024,
                            positionX: "center",
                            positionY: "center",
                            sizes: "205px",
                            src: "https://framerusercontent.com/images/73GV9pYQnwoVZVtPVX6DgT5e5k.png",
                            srcSet:
                              "https://framerusercontent.com/images/73GV9pYQnwoVZVtPVX6DgT5e5k.png?scale-down-to=512 512w,https://framerusercontent.com/images/73GV9pYQnwoVZVtPVX6DgT5e5k.png 1024w",
                          },
                          className: "framer-t22dfs framer-ioikrb",
                          "data-framer-name": "logo",
                          layoutDependency: o,
                          layoutId: "mPHVqI7HG",
                        }),
                      }),
                      p(r.div, {
                        className: "framer-dcdfe6",
                        "data-framer-name": "Icons",
                        layoutDependency: o,
                        layoutId: "LmUA1YBgB",
                        children: [
                          e(D, {
                            height: 40,
                            width: "40px",
                            y: (s?.y || 0) + 64 + 0 + 0 + 0 + 0 + 76 + 0,
                            children: e(j, {
                              className: "framer-1tbbl5o-container",
                              "data-framer-name": "Twitter",
                              layoutDependency: o,
                              layoutId: "qgftMbVZM-container",
                              name: "Twitter",
                              nodeId: "qgftMbVZM",
                              rendersWithMotion: !0,
                              scopeId: "QIUen8xal",
                              children: e(oe, {
                                height: "100%",
                                id: "qgftMbVZM",
                                jyWcCEeVw: "https://twitter.com",
                                layoutId: "qgftMbVZM",
                                name: "Twitter",
                                Sigh20RCu: "twitter",
                                style: { height: "100%", width: "100%" },
                                variant: "VpU3NJmco",
                                width: "100%",
                              }),
                            }),
                          }),
                          e(D, {
                            height: 40,
                            width: "40px",
                            y: (s?.y || 0) + 64 + 0 + 0 + 0 + 0 + 76 + 0,
                            children: e(j, {
                              className: "framer-1kjogj5-container",
                              "data-framer-name": "Facebook",
                              layoutDependency: o,
                              layoutId: "HPKNnZBgT-container",
                              name: "Facebook",
                              nodeId: "HPKNnZBgT",
                              rendersWithMotion: !0,
                              scopeId: "QIUen8xal",
                              children: e(oe, {
                                height: "100%",
                                id: "HPKNnZBgT",
                                jyWcCEeVw: "https://facebook.com",
                                layoutId: "HPKNnZBgT",
                                name: "Facebook",
                                Sigh20RCu: "facebook",
                                style: { height: "100%", width: "100%" },
                                variant: "VpU3NJmco",
                                width: "100%",
                              }),
                            }),
                          }),
                          e(D, {
                            height: 40,
                            width: "40px",
                            y: (s?.y || 0) + 64 + 0 + 0 + 0 + 0 + 76 + 0,
                            children: e(j, {
                              className: "framer-gpqc4y-container",
                              "data-framer-name": "Instagram",
                              layoutDependency: o,
                              layoutId: "JcbPkQdJx-container",
                              name: "Instagram",
                              nodeId: "JcbPkQdJx",
                              rendersWithMotion: !0,
                              scopeId: "QIUen8xal",
                              children: e(oe, {
                                height: "100%",
                                id: "JcbPkQdJx",
                                jyWcCEeVw: "https://Linkedin.com/company/neuros-platforms",
                                layoutId: "JcbPkQdJx",
                                name: "Instagram",
                                Sigh20RCu: "linkedin",
                                style: { height: "100%", width: "100%" },
                                variant: "VpU3NJmco",
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  p(r.div, {
                    className: "framer-1eymh3a",
                    "data-framer-name": "Vertical",
                    layoutDependency: o,
                    layoutId: "i8ZyFjbHM",
                    children: [
                      e(m, {
                        __fromCanvasComponent: !0,
                        children: e(i, {
                          children: e(r.h4, {
                            className: "framer-styles-preset-17ii97p",
                            "data-styles-preset": "BaJmcX3L2",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-1eung3n, var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7)))",
                            },
                            children: "Company",
                          }),
                        }),
                        className: "framer-1osv9gh",
                        fonts: ["Inter"],
                        layoutDependency: o,
                        layoutId: "xGLmnD5wb",
                        style: {
                          "--extracted-1eung3n":
                            "var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7))",
                          "--framer-link-hover-text-color": "rgba(153, 153, 153, 0.6)",
                          "--framer-link-text-decoration": "none",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      p(r.div, {
                        className: "framer-15ixpo4",
                        layoutDependency: o,
                        layoutId: "u6eP6u8JU",
                        children: [
                          e(m, {
                            __fromCanvasComponent: !0,
                            children: e(i, {
                              children: e(r.p, {
                                className: "framer-styles-preset-7w5cfp",
                                "data-styles-preset": "f3yeTtevI",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255)))",
                                },
                                children: e(u, {
                                  href: { webPageId: "KRjpUiPO1" },
                                  motionChild: !0,
                                  nodeId: "O5irHFKQc",
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: "QIUen8xal",
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-135z882",
                                    "data-styles-preset": "znK7C24zg",
                                    children: "About",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1pwvh1d",
                            fonts: ["Inter"],
                            layoutDependency: o,
                            layoutId: "O5irHFKQc",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(m, {
                            __fromCanvasComponent: !0,
                            children: e(i, {
                              children: e(r.p, {
                                className: "framer-styles-preset-7w5cfp",
                                "data-styles-preset": "f3yeTtevI",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255)))",
                                },
                                children: e(u, {
                                  href: { webPageId: "mJO4GpLVk" },
                                  motionChild: !0,
                                  nodeId: "l_zzdiq5T",
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: "QIUen8xal",
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-135z882",
                                    "data-styles-preset": "znK7C24zg",
                                    children: "Services",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-requ01",
                            fonts: ["Inter"],
                            layoutDependency: o,
                            layoutId: "l_zzdiq5T",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(m, {
                            __fromCanvasComponent: !0,
                            children: e(i, {
                              children: e(r.p, {
                                className: "framer-styles-preset-7w5cfp",
                                "data-styles-preset": "f3yeTtevI",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255)))",
                                },
                                children: e(u, {
                                  href: { webPageId: "d5dlfS0fF" },
                                  motionChild: !0,
                                  nodeId: "a_9k4FKFX",
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: "QIUen8xal",
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-135z882",
                                    "data-styles-preset": "znK7C24zg",
                                    children: "Contact",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-mqwya3",
                            fonts: ["Inter"],
                            layoutDependency: o,
                            layoutId: "a_9k4FKFX",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  p(r.div, {
                    className: "framer-1d6rb33",
                    "data-framer-name": "Vertical",
                    layoutDependency: o,
                    layoutId: "w_j_Y7oSB",
                    children: [
                      e(m, {
                        __fromCanvasComponent: !0,
                        children: e(i, {
                          children: e(r.h4, {
                            className: "framer-styles-preset-17ii97p",
                            "data-styles-preset": "BaJmcX3L2",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-1eung3n, var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7)))",
                            },
                            children: "Resources",
                          }),
                        }),
                        className: "framer-1uf3g1d",
                        fonts: ["Inter"],
                        layoutDependency: o,
                        layoutId: "fY4s2PFd2",
                        style: {
                          "--extracted-1eung3n":
                            "var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7))",
                          "--framer-link-hover-text-color": "rgba(153, 153, 153, 0.6)",
                          "--framer-link-text-decoration": "none",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      p(r.div, {
                        className: "framer-z5mt86",
                        layoutDependency: o,
                        layoutId: "bUsmXBsA8",
                        children: [
                          e(m, {
                            __fromCanvasComponent: !0,
                            children: e(i, {
                              children: e(r.p, {
                                className: "framer-styles-preset-7w5cfp",
                                "data-styles-preset": "f3yeTtevI",
                                children: e(u, {
                                  href: { webPageId: "Rct5VkKS9" },
                                  motionChild: !0,
                                  nodeId: "sM5NGCQQO",
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: "QIUen8xal",
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-135z882",
                                    "data-styles-preset": "znK7C24zg",
                                    children: "Blog",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-5mrgh9",
                            fonts: ["Inter"],
                            layoutDependency: o,
                            layoutId: "sM5NGCQQO",
                            style: { "--framer-paragraph-spacing": "0px" },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(m, {
                            __fromCanvasComponent: !0,
                            children: e(i, {
                              children: e(r.p, {
                                className: "framer-styles-preset-7w5cfp",
                                "data-styles-preset": "f3yeTtevI",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255)))",
                                },
                                children: e(u, {
                                  href: { webPageId: "DWxRu21K0" },
                                  motionChild: !0,
                                  nodeId: "iWSs3A5gQ",
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: "QIUen8xal",
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-135z882",
                                    "data-styles-preset": "znK7C24zg",
                                    children: "Privacy",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-4hjxce",
                            fonts: ["Inter"],
                            layoutDependency: o,
                            layoutId: "iWSs3A5gQ",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  p(r.div, {
                    className: "framer-n4csf8",
                    "data-framer-name": "Vertical",
                    layoutDependency: o,
                    layoutId: "AyERc3_vj",
                    children: [
                      e(m, {
                        __fromCanvasComponent: !0,
                        children: e(i, {
                          children: e(r.h4, {
                            className: "framer-styles-preset-17ii97p",
                            "data-styles-preset": "BaJmcX3L2",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-1eung3n, var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7)))",
                            },
                            children: "Office hours",
                          }),
                        }),
                        className: "framer-1mz2i68",
                        fonts: ["Inter"],
                        layoutDependency: o,
                        layoutId: "hKZ7a2Zb1",
                        style: {
                          "--extracted-1eung3n":
                            "var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7))",
                          "--framer-link-hover-text-color": "rgba(153, 153, 153, 0.6)",
                          "--framer-link-text-decoration": "none",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      p(r.div, {
                        className: "framer-1duxt75",
                        layoutDependency: o,
                        layoutId: "blNJ3Ls9v",
                        children: [
                          e(m, {
                            __fromCanvasComponent: !0,
                            children: e(i, {
                              children: e(r.p, {
                                className: "framer-styles-preset-7w5cfp",
                                "data-styles-preset": "f3yeTtevI",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255)))",
                                },
                                children: "Mon\u2013Wed: 8am\u20136pm",
                              }),
                            }),
                            className: "framer-7ycvqb",
                            fonts: ["Inter"],
                            layoutDependency: o,
                            layoutId: "ymZF3Zu_P",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255))",
                              "--framer-link-hover-text-color": "rgba(153, 153, 153, 0.6)",
                              "--framer-link-text-decoration": "none",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(m, {
                            __fromCanvasComponent: !0,
                            children: e(i, {
                              children: e(r.p, {
                                className: "framer-styles-preset-7w5cfp",
                                "data-styles-preset": "f3yeTtevI",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255)))",
                                },
                                children: "Thu: 8am\u20135:30pm",
                              }),
                            }),
                            className: "framer-15mwfam",
                            fonts: ["Inter"],
                            layoutDependency: o,
                            layoutId: "w8LrEyEPK",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255))",
                              "--framer-link-hover-text-color": "rgba(153, 153, 153, 0.6)",
                              "--framer-link-text-decoration": "none",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(m, {
                            __fromCanvasComponent: !0,
                            children: e(i, {
                              children: e(r.p, {
                                className: "framer-styles-preset-7w5cfp",
                                "data-styles-preset": "f3yeTtevI",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255)))",
                                },
                                children: "Sat\u2013Sun: Closed",
                              }),
                            }),
                            className: "framer-17mqvdl",
                            fonts: ["Inter"],
                            layoutDependency: o,
                            layoutId: "wUBFyCJyg",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255))",
                              "--framer-link-hover-text-color": "rgba(153, 153, 153, 0.6)",
                              "--framer-link-text-decoration": "none",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e(r.div, {
                className: "framer-dmwaus",
                "data-border": !0,
                "data-framer-name": "Copyright",
                layoutDependency: o,
                layoutId: "HQSkPK7G8",
                style: {
                  "--border-bottom-width": "0px",
                  "--border-color": "rgba(255, 255, 255, 0.2)",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "1px",
                },
                children: e(m, {
                  __fromCanvasComponent: !0,
                  children: e(i, {
                    children: e(r.p, {
                      className: "framer-styles-preset-7w5cfp",
                      "data-styles-preset": "f3yeTtevI",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255)))",
                      },
                      children: "\xA9 NeurOS Platforms Inc. 2025",
                    }),
                  }),
                  className: "framer-118e4fw",
                  fonts: ["Inter"],
                  layoutDependency: o,
                  layoutId: "XvOaCGxMJ",
                  style: {
                    "--extracted-r6o4lv": "var(--token-b63eb8e7-9efb-4f42-bf10-252fe62b8283, rgb(255, 255, 255))",
                    "--framer-link-hover-text-color": "rgba(153, 153, 153, 0.6)",
                    "--framer-link-text-decoration": "none",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Fr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-sloVR.framer-ioikrb, .framer-sloVR .framer-ioikrb { display: block; }",
    ".framer-sloVR.framer-nduiuc { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 64px 50px 40px 50px; position: relative; width: 1440px; }",
    ".framer-sloVR .framer-18lbsfe { display: grid; flex: none; gap: 40px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(200px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-sloVR .framer-scnaa5 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-sloVR .framer-t22dfs { flex: none; height: 66px; overflow: hidden; position: relative; text-decoration: none; width: 205px; }",
    ".framer-sloVR .framer-dcdfe6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-sloVR .framer-1tbbl5o-container, .framer-sloVR .framer-1kjogj5-container, .framer-sloVR .framer-gpqc4y-container { flex: none; height: 40px; position: relative; width: 40px; }",
    ".framer-sloVR .framer-1eymh3a, .framer-sloVR .framer-1d6rb33, .framer-sloVR .framer-n4csf8 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: auto; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-sloVR .framer-1osv9gh, .framer-sloVR .framer-1pwvh1d, .framer-sloVR .framer-requ01, .framer-sloVR .framer-mqwya3, .framer-sloVR .framer-1uf3g1d, .framer-sloVR .framer-5mrgh9, .framer-sloVR .framer-4hjxce, .framer-sloVR .framer-1mz2i68, .framer-sloVR .framer-7ycvqb, .framer-sloVR .framer-15mwfam, .framer-sloVR .framer-17mqvdl { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-sloVR .framer-15ixpo4, .framer-sloVR .framer-z5mt86 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-sloVR .framer-1duxt75 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 100%; }",
    ".framer-sloVR .framer-dmwaus { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-sloVR .framer-118e4fw { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",
    ".framer-sloVR.framer-v-1po3lv5.framer-nduiuc { width: 810px; }",
    ".framer-sloVR.framer-v-1po3lv5 .framer-18lbsfe { gap: 64px; grid-template-columns: repeat(1, minmax(200px, 1fr)); }",
    ".framer-sloVR.framer-v-m7l6zg.framer-nduiuc { padding: 64px 16px 40px 16px; width: 390px; }",
    ".framer-sloVR.framer-v-m7l6zg .framer-18lbsfe { grid-template-columns: repeat(1, minmax(200px, 1fr)); }",
    ".framer-sloVR.framer-v-m7l6zg .framer-dmwaus { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; }",
    ...Ce,
    ...fe,
    ...Ve,
    '.framer-sloVR[data-border="true"]::after, .framer-sloVR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  ne = G(Cr, Fr, "framer-sloVR"),
  wt = ne;
ne.displayName = "Footer";
ne.defaultProps = { height: 411, width: 1440 };
Y(ne, {
  variant: {
    options: ["sritXTx0F", "iRiNBEgFf", "NeB9R_H2P"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: f.Enum,
  },
});
re(
  ne,
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
    ...dr,
    ...H(Ue),
    ...H(ce),
    ...H(Se),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var kr = M(x),
  Ir = M(ge),
  Dr = [
    "BT8gYt9aU",
    "Pc2jvZSKa",
    "NeJwJFBap",
    "ji6KL8cmn",
    "UfoN6xwt5",
    "YOZsTkgYi",
    "Uf_fIK4bv",
    "uj__oEzuT",
    "xc0okuwv4",
    "aRA9rvELu",
  ],
  Rr = "framer-rCYCt",
  Ar = {
    aRA9rvELu: "framer-v-1257g7p",
    BT8gYt9aU: "framer-v-1lmvrib",
    ji6KL8cmn: "framer-v-q6fzoh",
    NeJwJFBap: "framer-v-cpnqb3",
    Pc2jvZSKa: "framer-v-vk15um",
    Uf_fIK4bv: "framer-v-3jyb1m",
    UfoN6xwt5: "framer-v-aaa8a3",
    uj__oEzuT: "framer-v-m0rmjk",
    xc0okuwv4: "framer-v-5bcyts",
    YOZsTkgYi: "framer-v-aiztha",
  };
function F(t, ...a) {
  let l = {};
  return (a?.forEach((n) => n && Object.assign(l, t[n])), l);
}
var Nr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Er = ({ value: t, children: a }) => {
    let l = Z(I),
      n = t ?? l.transition,
      d = S(() => ({ ...l, transition: n }), [JSON.stringify(n)]);
    return e(I.Provider, { value: d, children: a });
  },
  Br = r.create(i),
  Sr = {
    "Desktop-light": "YOZsTkgYi",
    "Laptop-light": "Uf_fIK4bv",
    "Phone open -light": "aRA9rvELu",
    "Phone open": "UfoN6xwt5",
    "Phone-light": "xc0okuwv4",
    "Tablet-light": "uj__oEzuT",
    Desktop: "BT8gYt9aU",
    Laptop: "Pc2jvZSKa",
    Phone: "ji6KL8cmn",
    Tablet: "NeJwJFBap",
  },
  Vr = ({ height: t, id: a, width: l, ...n }) => ({ ...n, variant: Sr[n.variant] ?? n.variant ?? "BT8gYt9aU" }),
  Yr = (t, a) => (t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-")),
  Pr = B(function (t, a) {
    let l = V(null),
      n = a ?? l,
      d = J(),
      { activeLocale: h, setLocale: v } = Q(),
      s = X(),
      { style: g, className: w, layoutId: U, variant: T, ...k } = Vr(t),
      {
        baseVariant: c,
        classNames: E,
        clearLoadingGesture: K,
        gestureHandlers: te,
        gestureVariant: y,
        isLoading: W,
        setGestureState: _,
        setVariant: C,
        variants: z,
      } = $({ cycleOrder: Dr, defaultVariant: "BT8gYt9aU", ref: n, variant: T, variantClassNames: Ar }),
      o = Yr(t, z),
      { activeVariantCallback: L, delay: pe } = be(c),
      Te = L(async (...ue) => {
        C("UfoN6xwt5");
      }),
      _e = L(async (...ue) => {
        C("ji6KL8cmn");
      }),
      ze = L(async (...ue) => {
        C("aRA9rvELu");
      }),
      Le = L(async (...ue) => {
        C("xc0okuwv4");
      }),
      qe = P(Rr, ...[me, Ee]),
      je = () => !!["NeJwJFBap", "ji6KL8cmn", "UfoN6xwt5", "uj__oEzuT", "xc0okuwv4", "aRA9rvELu"].includes(c),
      Me = () => !["NeJwJFBap", "ji6KL8cmn", "uj__oEzuT", "xc0okuwv4"].includes(c);
    return e(O, {
      id: U ?? d,
      children: e(Br, {
        animate: z,
        initial: !1,
        children: e(Er, {
          value: Nr,
          children: e(r.nav, {
            ...k,
            ...te,
            className: P(qe, "framer-1lmvrib", w, E),
            "data-framer-name": "Desktop",
            layoutDependency: o,
            layoutId: "BT8gYt9aU",
            ref: n,
            style: { backgroundColor: "var(--token-15636448-77df-48cc-8a9e-3a0e24c84c68, rgb(0, 35, 52))", ...g },
            variants: {
              aRA9rvELu: { backgroundColor: "rgb(255, 255, 255)" },
              Uf_fIK4bv: { backgroundColor: "rgb(255, 255, 255)" },
              UfoN6xwt5: { backgroundColor: "rgb(255, 255, 255)" },
              uj__oEzuT: { backgroundColor: "rgb(255, 255, 255)" },
              xc0okuwv4: { backgroundColor: "rgb(255, 255, 255)" },
              YOZsTkgYi: { backgroundColor: "rgb(255, 255, 255)" },
            },
            ...F(
              {
                aRA9rvELu: { "data-framer-name": "Phone open -light" },
                ji6KL8cmn: { "data-framer-name": "Phone" },
                NeJwJFBap: { "data-framer-name": "Tablet" },
                Pc2jvZSKa: { "data-framer-name": "Laptop" },
                Uf_fIK4bv: { "data-framer-name": "Laptop-light" },
                UfoN6xwt5: { "data-framer-name": "Phone open" },
                uj__oEzuT: { "data-framer-name": "Tablet-light" },
                xc0okuwv4: { "data-framer-name": "Phone-light" },
                YOZsTkgYi: { "data-framer-name": "Desktop-light" },
              },
              c,
              y,
            ),
            children: p(r.div, {
              className: "framer-6st5e4",
              "data-framer-name": "nav-wrapper",
              layoutDependency: o,
              layoutId: "pnwRWOv9t",
              children: [
                p(r.div, {
                  className: "framer-1km79q6",
                  "data-framer-name": "Logo-icon",
                  layoutDependency: o,
                  layoutId: "oTt0ztHZM",
                  children: [
                    e(u, {
                      href: { webPageId: "augiA20Il" },
                      motionChild: !0,
                      nodeId: "U3m9UZIax",
                      scopeId: "xeM91myow",
                      children: e(se, {
                        as: "a",
                        background: {
                          alt: "Logo",
                          loading: b((s?.y || 0) + (16 + ((s?.height || 95) - 32 - 63) / 2) + 0 + 0),
                          pixelHeight: 1024,
                          pixelWidth: 1024,
                          positionX: "center",
                          positionY: "center",
                          sizes: "205px",
                          src: "https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png",
                          srcSet:
                            "https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png?scale-down-to=512 512w,https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png 1024w",
                        },
                        className: "framer-lmtlbb framer-1mtqgq5",
                        "data-framer-name": "logo",
                        layoutDependency: o,
                        layoutId: "U3m9UZIax",
                        ...F(
                          {
                            aRA9rvELu: {
                              background: {
                                alt: "Logo",
                                loading: b((s?.y || 0) + 10 + 0 + 0 + 0),
                                pixelHeight: 115,
                                pixelWidth: 726,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/WYHWoknHloH6UW5BVHCTpqrGxXA.png",
                              },
                            },
                            ji6KL8cmn: {
                              background: {
                                alt: "Logo",
                                loading: b((s?.y || 0) + (10 + ((s?.height || 200) - 20 - 54) / 2) + 0 + 0 + 0),
                                pixelHeight: 1024,
                                pixelWidth: 1024,
                                positionX: "center",
                                positionY: "center",
                                sizes: "175px",
                                src: "https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png",
                                srcSet:
                                  "https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png?scale-down-to=512 512w,https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png 1024w",
                              },
                            },
                            NeJwJFBap: {
                              background: {
                                alt: "Logo",
                                loading: b((s?.y || 0) + (16 + ((s?.height || 200) - 32 - 54) / 2) + 0 + 0 + 0),
                                pixelHeight: 1024,
                                pixelWidth: 1024,
                                positionX: "center",
                                positionY: "center",
                                sizes: "176px",
                                src: "https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png",
                                srcSet:
                                  "https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png?scale-down-to=512 512w,https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png 1024w",
                              },
                            },
                            Uf_fIK4bv: {
                              background: {
                                alt: "Logo",
                                loading: b((s?.y || 0) + (16 + ((s?.height || 200) - 32 - 63) / 2) + 0 + 0),
                                pixelHeight: 115,
                                pixelWidth: 726,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/WYHWoknHloH6UW5BVHCTpqrGxXA.png",
                              },
                            },
                            UfoN6xwt5: {
                              background: {
                                alt: "Logo",
                                loading: b((s?.y || 0) + 10 + 0 + 0 + 0),
                                pixelHeight: 115,
                                pixelWidth: 726,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/WYHWoknHloH6UW5BVHCTpqrGxXA.png",
                              },
                            },
                            uj__oEzuT: {
                              background: {
                                alt: "Logo",
                                loading: b((s?.y || 0) + (16 + ((s?.height || 200) - 32 - 63) / 2) + 0 + 0 + 0),
                                pixelHeight: 115,
                                pixelWidth: 726,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/WYHWoknHloH6UW5BVHCTpqrGxXA.png",
                              },
                            },
                            xc0okuwv4: {
                              background: {
                                alt: "Logo",
                                loading: b((s?.y || 0) + (10 + ((s?.height || 200) - 20 - 54) / 2) + 0 + 0 + 0),
                                pixelHeight: 115,
                                pixelWidth: 726,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/WYHWoknHloH6UW5BVHCTpqrGxXA.png",
                              },
                            },
                            YOZsTkgYi: {
                              background: {
                                alt: "Logo",
                                loading: b((s?.y || 0) + (16 + ((s?.height || 200) - 32 - 63) / 2) + 0 + 0),
                                pixelHeight: 115,
                                pixelWidth: 726,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/WYHWoknHloH6UW5BVHCTpqrGxXA.png",
                              },
                            },
                          },
                          c,
                          y,
                        ),
                      }),
                    }),
                    je() &&
                      e(r.div, {
                        className: "framer-5wfdvq",
                        "data-framer-name": "menu-icon",
                        layoutDependency: o,
                        layoutId: "Ny23SzmaB",
                        style: {
                          backgroundColor: "rgb(255, 255, 255)",
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                        },
                        ...F(
                          {
                            aRA9rvELu: { "data-highlight": !0, onTap: Le },
                            ji6KL8cmn: { "data-highlight": !0, onTap: Te },
                            UfoN6xwt5: { "data-highlight": !0, onTap: _e },
                            xc0okuwv4: { "data-highlight": !0, onTap: ze },
                          },
                          c,
                          y,
                        ),
                        children: e(D, {
                          children: e(j, {
                            className: "framer-1a8fl4l-container",
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: o,
                            layoutId: "Hb9N1kfCw-container",
                            nodeId: "Hb9N1kfCw",
                            rendersWithMotion: !0,
                            scopeId: "xeM91myow",
                            children: e(x, {
                              color: "rgb(0, 0, 0)",
                              height: "100%",
                              iconSearch: "Home",
                              iconSelection: "menu",
                              id: "Hb9N1kfCw",
                              layoutId: "Hb9N1kfCw",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                              ...F({ aRA9rvELu: { iconSelection: "x" }, UfoN6xwt5: { iconSelection: "x" } }, c, y),
                            }),
                          }),
                        }),
                      }),
                  ],
                }),
                Me() &&
                  p(r.div, {
                    className: "framer-106dn0a",
                    layoutDependency: o,
                    layoutId: "B652MSIGv",
                    children: [
                      p(r.div, {
                        className: "framer-1kwnghx",
                        "data-framer-name": "menu-links",
                        layoutDependency: o,
                        layoutId: "gZ2Tc5pR_",
                        children: [
                          e(u, {
                            href: { webPageId: "KRjpUiPO1" },
                            motionChild: !0,
                            nodeId: "H423vJL0v",
                            scopeId: "xeM91myow",
                            children: e(r.a, {
                              className: "framer-1uxluou framer-1mtqgq5",
                              "data-framer-name": "link",
                              layoutDependency: o,
                              layoutId: "H423vJL0v",
                              children: e(m, {
                                __fromCanvasComponent: !0,
                                children: e(i, {
                                  children: e(r.p, {
                                    className: "framer-styles-preset-7w5cfp",
                                    "data-styles-preset": "f3yeTtevI",
                                    style: {
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7)))",
                                    },
                                    children: "About",
                                  }),
                                }),
                                className: "framer-1bnzreb",
                                fonts: ["Inter"],
                                layoutDependency: o,
                                layoutId: "qjQBUmYv0",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7))",
                                  "--framer-link-text-color": "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                variants: {
                                  aRA9rvELu: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  Uf_fIK4bv: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  UfoN6xwt5: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  YOZsTkgYi: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...F(
                                  {
                                    aRA9rvELu: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "About",
                                        }),
                                      }),
                                    },
                                    Uf_fIK4bv: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "About",
                                        }),
                                      }),
                                    },
                                    UfoN6xwt5: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "About",
                                        }),
                                      }),
                                    },
                                    YOZsTkgYi: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "About",
                                        }),
                                      }),
                                    },
                                  },
                                  c,
                                  y,
                                ),
                              }),
                            }),
                          }),
                          e(u, {
                            href: { webPageId: "w3OkBr4KW" },
                            motionChild: !0,
                            nodeId: "CsVGRiQY2",
                            openInNewTab: !1,
                            scopeId: "xeM91myow",
                            children: e(r.a, {
                              className: "framer-7ddsau framer-1mtqgq5",
                              "data-framer-name": "link",
                              layoutDependency: o,
                              layoutId: "CsVGRiQY2",
                              children: e(m, {
                                __fromCanvasComponent: !0,
                                children: e(i, {
                                  children: e(r.p, {
                                    className: "framer-styles-preset-7w5cfp",
                                    "data-styles-preset": "f3yeTtevI",
                                    style: {
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7)))",
                                    },
                                    children: "Patients",
                                  }),
                                }),
                                className: "framer-zwpqgk",
                                fonts: ["Inter"],
                                layoutDependency: o,
                                layoutId: "FlE4acVdU",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7))",
                                  "--framer-link-text-color": "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                variants: {
                                  aRA9rvELu: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  Uf_fIK4bv: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  UfoN6xwt5: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  YOZsTkgYi: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...F(
                                  {
                                    aRA9rvELu: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Patients",
                                        }),
                                      }),
                                    },
                                    Uf_fIK4bv: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Patients",
                                        }),
                                      }),
                                    },
                                    UfoN6xwt5: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Patients",
                                        }),
                                      }),
                                    },
                                    YOZsTkgYi: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Patients",
                                        }),
                                      }),
                                    },
                                  },
                                  c,
                                  y,
                                ),
                              }),
                            }),
                          }),
                          e(u, {
                            href: { webPageId: "mJO4GpLVk" },
                            motionChild: !0,
                            nodeId: "AHFkE2_LP",
                            openInNewTab: !1,
                            scopeId: "xeM91myow",
                            children: e(r.a, {
                              className: "framer-86if7z framer-1mtqgq5",
                              "data-framer-name": "link",
                              layoutDependency: o,
                              layoutId: "AHFkE2_LP",
                              children: e(m, {
                                __fromCanvasComponent: !0,
                                children: e(i, {
                                  children: e(r.p, {
                                    className: "framer-styles-preset-7w5cfp",
                                    "data-styles-preset": "f3yeTtevI",
                                    style: {
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7)))",
                                    },
                                    children: "Services",
                                  }),
                                }),
                                className: "framer-9uv6rx",
                                fonts: ["Inter"],
                                layoutDependency: o,
                                layoutId: "VkxeU2mqc",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7))",
                                  "--framer-link-text-color": "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                variants: {
                                  aRA9rvELu: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  Uf_fIK4bv: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  UfoN6xwt5: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  YOZsTkgYi: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...F(
                                  {
                                    aRA9rvELu: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Services",
                                        }),
                                      }),
                                    },
                                    Uf_fIK4bv: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Services",
                                        }),
                                      }),
                                    },
                                    UfoN6xwt5: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Services",
                                        }),
                                      }),
                                    },
                                    YOZsTkgYi: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Services",
                                        }),
                                      }),
                                    },
                                  },
                                  c,
                                  y,
                                ),
                              }),
                            }),
                          }),
                          e(u, {
                            href: { webPageId: "Rct5VkKS9" },
                            motionChild: !0,
                            nodeId: "RqKmbmX3C",
                            openInNewTab: !1,
                            scopeId: "xeM91myow",
                            children: e(r.a, {
                              className: "framer-69tlqz framer-1mtqgq5",
                              "data-framer-name": "link",
                              layoutDependency: o,
                              layoutId: "RqKmbmX3C",
                              children: e(m, {
                                __fromCanvasComponent: !0,
                                children: e(i, {
                                  children: e(r.p, {
                                    className: "framer-styles-preset-7w5cfp",
                                    "data-styles-preset": "f3yeTtevI",
                                    style: {
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7)))",
                                    },
                                    children: "Blog",
                                  }),
                                }),
                                className: "framer-13m8v6l",
                                fonts: ["Inter"],
                                layoutDependency: o,
                                layoutId: "mD1P8K2fw",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7))",
                                  "--framer-link-text-color": "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                variants: {
                                  aRA9rvELu: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  Uf_fIK4bv: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  UfoN6xwt5: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  YOZsTkgYi: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...F(
                                  {
                                    aRA9rvELu: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Blog",
                                        }),
                                      }),
                                    },
                                    Uf_fIK4bv: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Blog",
                                        }),
                                      }),
                                    },
                                    UfoN6xwt5: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Blog",
                                        }),
                                      }),
                                    },
                                    YOZsTkgYi: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Blog",
                                        }),
                                      }),
                                    },
                                  },
                                  c,
                                  y,
                                ),
                              }),
                            }),
                          }),
                          e(u, {
                            href: { webPageId: "d5dlfS0fF" },
                            motionChild: !0,
                            nodeId: "hAhnKyz1T",
                            openInNewTab: !1,
                            scopeId: "xeM91myow",
                            children: e(r.a, {
                              className: "framer-102rgc1 framer-1mtqgq5",
                              "data-framer-name": "link",
                              layoutDependency: o,
                              layoutId: "hAhnKyz1T",
                              children: e(m, {
                                __fromCanvasComponent: !0,
                                children: e(i, {
                                  children: e(r.p, {
                                    className: "framer-styles-preset-7w5cfp",
                                    "data-styles-preset": "f3yeTtevI",
                                    style: {
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7)))",
                                    },
                                    children: "Contact",
                                  }),
                                }),
                                className: "framer-vbsrnk",
                                fonts: ["Inter"],
                                layoutDependency: o,
                                layoutId: "RGeyz_dPa",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7))",
                                  "--framer-link-text-color": "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                variants: {
                                  aRA9rvELu: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  Uf_fIK4bv: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  UfoN6xwt5: {
                                    "--extracted-a0htzi":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                  YOZsTkgYi: {
                                    "--extracted-r6o4lv":
                                      "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                                  },
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...F(
                                  {
                                    aRA9rvELu: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Contact",
                                        }),
                                      }),
                                    },
                                    Uf_fIK4bv: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Contact",
                                        }),
                                      }),
                                    },
                                    UfoN6xwt5: {
                                      children: e(i, {
                                        children: e(r.h3, {
                                          className: "framer-styles-preset-1ctbtm0",
                                          "data-styles-preset": "ASqnYrg7l",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-a0htzi, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Contact",
                                        }),
                                      }),
                                    },
                                    YOZsTkgYi: {
                                      children: e(i, {
                                        children: e(r.p, {
                                          className: "framer-styles-preset-7w5cfp",
                                          "data-styles-preset": "f3yeTtevI",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))",
                                          },
                                          children: "Contact",
                                        }),
                                      }),
                                    },
                                  },
                                  c,
                                  y,
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                      e(D, {
                        height: 51,
                        y: (s?.y || 0) + (16 + ((s?.height || 95) - 32 - 63) / 2) + 6 + 0,
                        ...F(
                          {
                            aRA9rvELu: { y: (s?.y || 0) + 10 + 0 + 78 + 0 + 262 },
                            Uf_fIK4bv: { y: (s?.y || 0) + (16 + ((s?.height || 200) - 32 - 63) / 2) + 6 + 0 },
                            UfoN6xwt5: { y: (s?.y || 0) + 10 + 0 + 78 + 0 + 262 },
                            YOZsTkgYi: { y: (s?.y || 0) + (16 + ((s?.height || 200) - 32 - 63) / 2) + 6 + 0 },
                          },
                          c,
                          y,
                        ),
                        children: e(j, {
                          className: "framer-dyvpkc-container",
                          layoutDependency: o,
                          layoutId: "zJpb_EpCG-container",
                          nodeId: "zJpb_EpCG",
                          rendersWithMotion: !0,
                          scopeId: "xeM91myow",
                          children: e(ge, {
                            height: "100%",
                            HRMB99Vla: "calendly.com",
                            id: "zJpb_EpCG",
                            layoutId: "zJpb_EpCG",
                            rF4tO9fIv: "Schedule Demo",
                            variant: "qx54L_DcE",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Tr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-rCYCt.framer-1mtqgq5, .framer-rCYCt .framer-1mtqgq5 { display: block; }",
    ".framer-rCYCt.framer-1lmvrib { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 48px 16px 48px; position: relative; width: 1440px; }",
    ".framer-rCYCt .framer-6st5e4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-rCYCt .framer-1km79q6, .framer-rCYCt .framer-1kwnghx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-rCYCt .framer-lmtlbb { aspect-ratio: 3.253968253968254 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 63px); overflow: hidden; position: relative; text-decoration: none; width: 205px; }",
    ".framer-rCYCt .framer-5wfdvq { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 48px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 48px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-rCYCt .framer-1a8fl4l-container { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-rCYCt .framer-106dn0a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-rCYCt .framer-1uxluou, .framer-rCYCt .framer-7ddsau, .framer-rCYCt .framer-86if7z, .framer-rCYCt .framer-69tlqz, .framer-rCYCt .framer-102rgc1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 4px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-rCYCt .framer-1bnzreb, .framer-rCYCt .framer-zwpqgk, .framer-rCYCt .framer-9uv6rx, .framer-rCYCt .framer-13m8v6l, .framer-rCYCt .framer-vbsrnk { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-rCYCt .framer-dyvpkc-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-rCYCt.framer-v-vk15um.framer-1lmvrib, .framer-rCYCt.framer-v-3jyb1m.framer-1lmvrib { width: 1200px; }",
    ".framer-rCYCt.framer-v-vk15um .framer-1km79q6 { gap: 0px; }",
    ".framer-rCYCt.framer-v-cpnqb3.framer-1lmvrib, .framer-rCYCt.framer-v-m0rmjk.framer-1lmvrib { width: 810px; }",
    ".framer-rCYCt.framer-v-cpnqb3 .framer-6st5e4, .framer-rCYCt.framer-v-q6fzoh .framer-6st5e4 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; }",
    ".framer-rCYCt.framer-v-cpnqb3 .framer-1km79q6, .framer-rCYCt.framer-v-q6fzoh .framer-1km79q6, .framer-rCYCt.framer-v-aaa8a3 .framer-1km79q6, .framer-rCYCt.framer-v-m0rmjk .framer-1km79q6, .framer-rCYCt.framer-v-5bcyts .framer-1km79q6, .framer-rCYCt.framer-v-1257g7p .framer-1km79q6 { gap: unset; justify-content: space-between; width: 100%; }",
    ".framer-rCYCt.framer-v-cpnqb3 .framer-lmtlbb { height: var(--framer-aspect-ratio-supported, 54px); width: 176px; }",
    ".framer-rCYCt.framer-v-q6fzoh.framer-1lmvrib, .framer-rCYCt.framer-v-5bcyts.framer-1lmvrib { padding: 10px 16px 10px 16px; width: 390px; }",
    ".framer-rCYCt.framer-v-q6fzoh .framer-lmtlbb, .framer-rCYCt.framer-v-aaa8a3 .framer-lmtlbb, .framer-rCYCt.framer-v-5bcyts .framer-lmtlbb, .framer-rCYCt.framer-v-1257g7p .framer-lmtlbb { aspect-ratio: unset; height: 54px; width: 175px; }",
    ".framer-rCYCt.framer-v-q6fzoh .framer-5wfdvq, .framer-rCYCt.framer-v-aaa8a3 .framer-5wfdvq, .framer-rCYCt.framer-v-5bcyts .framer-5wfdvq, .framer-rCYCt.framer-v-1257g7p .framer-5wfdvq { cursor: pointer; }",
    ".framer-rCYCt.framer-v-aaa8a3.framer-1lmvrib, .framer-rCYCt.framer-v-1257g7p.framer-1lmvrib { align-content: flex-start; align-items: flex-start; height: 800px; justify-content: flex-start; min-height: calc(var(--framer-viewport-height, 100vh) * 1); padding: 10px 16px 10px 16px; width: 390px; }",
    ".framer-rCYCt.framer-v-aaa8a3 .framer-6st5e4, .framer-rCYCt.framer-v-5bcyts .framer-6st5e4, .framer-rCYCt.framer-v-1257g7p .framer-6st5e4 { flex-direction: column; gap: 24px; }",
    ".framer-rCYCt.framer-v-aaa8a3 .framer-106dn0a, .framer-rCYCt.framer-v-1257g7p .framer-106dn0a { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 24px; justify-content: flex-start; width: 100%; }",
    ".framer-rCYCt.framer-v-aaa8a3 .framer-1kwnghx, .framer-rCYCt.framer-v-1257g7p .framer-1kwnghx { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 4px; width: 100%; }",
    ".framer-rCYCt.framer-v-aaa8a3 .framer-1uxluou, .framer-rCYCt.framer-v-aaa8a3 .framer-7ddsau, .framer-rCYCt.framer-v-aaa8a3 .framer-86if7z, .framer-rCYCt.framer-v-aaa8a3 .framer-69tlqz, .framer-rCYCt.framer-v-aaa8a3 .framer-102rgc1, .framer-rCYCt.framer-v-1257g7p .framer-1uxluou, .framer-rCYCt.framer-v-1257g7p .framer-7ddsau, .framer-rCYCt.framer-v-1257g7p .framer-86if7z, .framer-rCYCt.framer-v-1257g7p .framer-69tlqz, .framer-rCYCt.framer-v-1257g7p .framer-102rgc1 { padding: 4px 0px 4px 0px; width: 100%; }",
    ".framer-rCYCt.framer-v-aaa8a3 .framer-1bnzreb, .framer-rCYCt.framer-v-aaa8a3 .framer-zwpqgk, .framer-rCYCt.framer-v-aaa8a3 .framer-9uv6rx, .framer-rCYCt.framer-v-aaa8a3 .framer-13m8v6l, .framer-rCYCt.framer-v-aaa8a3 .framer-vbsrnk, .framer-rCYCt.framer-v-1257g7p .framer-1bnzreb, .framer-rCYCt.framer-v-1257g7p .framer-zwpqgk, .framer-rCYCt.framer-v-1257g7p .framer-9uv6rx, .framer-rCYCt.framer-v-1257g7p .framer-13m8v6l, .framer-rCYCt.framer-v-1257g7p .framer-vbsrnk { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-rCYCt.framer-v-m0rmjk .framer-6st5e4 { flex-direction: column; gap: 48px; }",
    ...fe,
    ...Ne,
  ],
  ie = G(Pr, Tr, "framer-rCYCt"),
  At = ie;
ie.displayName = "Nav";
ie.defaultProps = { height: 95, width: 1440 };
Y(ie, {
  variant: {
    options: [
      "BT8gYt9aU",
      "Pc2jvZSKa",
      "NeJwJFBap",
      "ji6KL8cmn",
      "UfoN6xwt5",
      "YOZsTkgYi",
      "Uf_fIK4bv",
      "uj__oEzuT",
      "xc0okuwv4",
      "aRA9rvELu",
    ],
    optionTitles: [
      "Desktop",
      "Laptop",
      "Tablet",
      "Phone",
      "Phone open",
      "Desktop-light",
      "Laptop-light",
      "Tablet-light",
      "Phone-light",
      "Phone open -light",
    ],
    title: "Variant",
    type: f.Enum,
  },
});
re(
  ie,
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
    ...kr,
    ...Ir,
    ...H(ce),
    ...H(Ae),
  ],
  { supportsExplicitInterCodegen: !0 },
);
export { x as a, Ae as b, Ne as c, Ee as d, ce as e, fe as f, me as g, wt as h, At as i };
//# sourceMappingURL=chunk-DGRYFZ2W.mjs.map
