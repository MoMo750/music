function e(e, t, r, a) {
  Object.defineProperty(e, t, {
    get: r,
    set: a,
    enumerable: !0,
    configurable: !0,
  });
}
function t(e) {
  return e && e.__esModule ? e.default : e;
}
var r =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  a = {},
  o = {},
  l = r.parcelRequire2edb;
null == l &&
  (((l = function (e) {
    if (e in a) return a[e].exports;
    if (e in o) {
      var t = o[e];
      delete o[e];
      var r = { id: e, exports: {} };
      return (a[e] = r), t.call(r.exports, r, r.exports), r.exports;
    }
    var l = new Error("Cannot find module '" + e + "'");
    throw ((l.code = "MODULE_NOT_FOUND"), l);
  }).register = function (e, t) {
    o[e] = t;
  }),
  (r.parcelRequire2edb = l)),
  l.register("27Lyk", function (t, r) {
    var a, o;
    e(
      t.exports,
      "register",
      () => a,
      (e) => (a = e)
    ),
      e(
        t.exports,
        "resolve",
        () => o,
        (e) => (o = e)
      );
    var l = {};
    (a = function (e) {
      for (var t = Object.keys(e), r = 0; r < t.length; r++) l[t[r]] = e[t[r]];
    }),
      (o = function (e) {
        var t = l[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t;
      });
  }),
  l("27Lyk").register(
    JSON.parse(
      '{"8e5YU":"index.ab5faff8.js","1ktkS":"ya-nabi-salam-slayka.0255779e.mp3","3EeKh":"ya-nabi-salam-slayka.4557ef89.jpg","5ylTV":"ya-dalaoo.mp3","5Mexj":"ya-dalaoo-24.jpg","dplRe":"fakerny-yahob.mp3","8N1Qa":"fakerny-yahob-img.jpg","jaYp0":"bahaa-soltan.mp3","9xus3":"bahaa-soltan-img.gif","1WmXw":"tamer-ashour.mp3","030K4":"tamer-ashour-img.gif"}'
    )
  );
var n;
n = new URL(l("27Lyk").resolve("1ktkS"), import.meta.url).toString();
var i;
i = new URL(l("27Lyk").resolve("3EeKh"), import.meta.url).toString();
var s;
s = new URL(l("27Lyk").resolve("5ylTV"), import.meta.url).toString();
var c;
c = new URL(l("27Lyk").resolve("5Mexj"), import.meta.url).toString();
var u;
u = new URL(l("27Lyk").resolve("dplRe"), import.meta.url).toString();
var d;
d = new URL(l("27Lyk").resolve("8N1Qa"), import.meta.url).toString();
var m;
m = new URL(l("27Lyk").resolve("jaYp0"), import.meta.url).toString();
var p;
p = new URL(l("27Lyk").resolve("9xus3"), import.meta.url).toString();
var _;
_ = new URL(l("27Lyk").resolve("1WmXw"), import.meta.url).toString();
var y;
y = new URL(l("27Lyk").resolve("030K4"), import.meta.url).toString();
var w = [
  {
    author: "Maher Zain",
    title: "01 Ya Nabi Salam Alayka",
    songUrl: t(n),
    imgUrl: t(i),
  },
  {
    author: "Amr Diab",
    title: "02 Ya Daloa",
    songUrl: t(s),
    imgUrl: t(c),
  },
  {
    author: "Amr Diab",
    title: "03 Fakerny Ya Hob",
    songUrl: t(u),
    imgUrl: t(d),
  },
  {
    author: "Bahaa Soltan",
    title: "04 Wana 5altan",
    songUrl: t(m),
    imgUrl: t(p),
  },
  {
    author: "Tamer Ashour",
    title: "05 Tege Ntrahen",
    songUrl: t(_),
    imgUrl: t(y),
  },
];
const f = window.document.querySelector(".audio"),
  g = window.document.querySelector(".music-palyer__song-title"),
  v = window.document.querySelector(".music-palyer__artist-name"),
  b = window.document.querySelector(".music-palyer__image"),
  S = window.document.querySelector(".music-palyer__music-bars"),
  L = window.document.querySelector(".music-palyer__progress__time__current"),
  h = window.document.querySelector(".music-palyer__progress__time__duration"),
  E = window.document.querySelector(".music-palyer__progress__bar"),
  k = window.document.querySelector(".music-palyer__controls__replay"),
  R = window.document.querySelector(".music-palyer__controls__prev"),
  U = window.document.querySelector(".music-palyer__controls__play"),
  H = window.document.querySelector(".music-palyer__controls__next"),
  A = window.document.querySelector(".music-palyer__controls__mute");
let x = !1,
  q = !1,
  F = 0;
const j = () => {
    f.play(),
      (x = !0),
      U.classList.replace("fa-play-circle", "fa-pause-circle"),
      U.setAttribute("title", "Pause"),
      S.classList.remove("pause");
  },
  M = () => {
    f.pause(),
      (x = !1),
      U.classList.replace("fa-pause-circle", "fa-play-circle"),
      U.setAttribute("title", "Play"),
      S.classList.add("pause");
  },
  C = (e) => {
    const { author: t, title: r, songUrl: a, imgUrl: o } = e;
    (f.src = a), (b.src = o), (g.textContent = r), (v.textContent = t);
  },
  T = (e) => {
    let t = Math.floor(e / 60);
    t = t < 10 ? `0${t}` : t;
    let r = Math.floor(e % 60);
    return (r = r < 10 ? `0${r}` : r), `${t}:${r}`;
  };
U.addEventListener("click", () => {
  x ? M() : j();
}),
  A.addEventListener("click", () => {
    q
      ? ((f.volume = 1),
        (q = !1),
        A.classList.replace("fa-volume-mute", "fa-volume-up"))
      : ((f.volume = 0),
        (q = !0),
        A.classList.replace("fa-volume-up", "fa-volume-mute"));
  }),
  R.addEventListener("click", () => {
    (F -= 1), F < 0 && (F = w.length - 1), C(w[F]), j();
  }),
  H.addEventListener("click", () => {
    (F += 1), F >= w.length && (F = 0), C(w[F]), j();
  });
const N = () => {
  (f.currentTime = 0),
    // window.console.log("finish"),
    E.setAttribute("value", "0"),
    (L.textContent = "00:00"),
    S.classList.add("pause"),
    U.classList.replace("fa-pause-circle", "fa-play-circle"),
    (x = !1);
};
f.addEventListener("timeupdate", () => {
  if (x) {
    const { currentTime: e } = f,
      t = f.duration || 0;
    (L.textContent = T(e)),
      (h.textContent = T(t)),
      E.setAttribute("value", "" + (e / t) * 100);
  }
}),
  E.addEventListener("click", (e) => {
    // window.console.log(e);
    const t = f.duration,
      r = e.target.clientWidth,
      a = e.offsetX;
    // window.console.log(r, " ", a), window.console.log(r / a);
    const o = (a / r) * t;
    f.currentTime = o;
  }),
  k.addEventListener("click", () => {
    M(), N(), j(), window.console.log("replay");
  }),
  f.addEventListener("ended", N);


const O = window.document.querySelectorAll(".current-year"),
  Y = new Date().getFullYear();
C(w[F]),
  O.forEach((e) => {
    e.textContent = Y;
  });
//# sourceMappingURL=index.ab5faff8.js.map
