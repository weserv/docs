/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b13f411265e0148b3c8f0d3e5d63ee98"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "03ce70bf2a4d4faa4bcd2ab481b5dee0"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "468a2a2645df6121d45908a894711561"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "3a43692fe9773331570ec3a496ede686"
  },
  {
    "url": "assets/css/0.styles.69005a48.css",
    "revision": "0a8d329699447c07e18b2a8bf45e42aa"
  },
  {
    "url": "assets/fonts/la-brands-400.54b0b4e7.woff2",
    "revision": "54b0b4e7de85711c3796882b2b19eb00"
  },
  {
    "url": "assets/fonts/la-brands-400.a38ca9f0.eot",
    "revision": "a38ca9f0501109549cb659c1fe9ade65"
  },
  {
    "url": "assets/fonts/la-brands-400.bbf83f8b.ttf",
    "revision": "bbf83f8bb1039cd860051299d64ebcfd"
  },
  {
    "url": "assets/fonts/la-brands-400.fb598c9c.woff",
    "revision": "fb598c9ccecd5fa1c6c769d0be60973b"
  },
  {
    "url": "assets/fonts/la-regular-400.2746742c.eot",
    "revision": "2746742c09b070f74bd7d555e6b959fa"
  },
  {
    "url": "assets/fonts/la-regular-400.338f6f87.woff",
    "revision": "338f6f873b90c8045204f8ac52408166"
  },
  {
    "url": "assets/fonts/la-regular-400.87dab6ff.ttf",
    "revision": "87dab6ff12ea107dafe1d52ec19c2ed8"
  },
  {
    "url": "assets/fonts/la-regular-400.88d9d941.woff2",
    "revision": "88d9d9416c58bde56378dc4439e3a144"
  },
  {
    "url": "assets/fonts/la-solid-900.36fc2979.woff2",
    "revision": "36fc297902c9a2e857858baa6ac25f2c"
  },
  {
    "url": "assets/fonts/la-solid-900.87292218.woff",
    "revision": "87292218024ee1cab93406e228a0b7dd"
  },
  {
    "url": "assets/fonts/la-solid-900.8c65fd3e.eot",
    "revision": "8c65fd3e9b53a609735fd6335fd05841"
  },
  {
    "url": "assets/fonts/la-solid-900.bb49393b.ttf",
    "revision": "bb49393b04bbf312a6cd055a051121d3"
  },
  {
    "url": "assets/img/la-brands-400.9769d0a6.svg",
    "revision": "9769d0a6a42cf73df12bc63a7a994131"
  },
  {
    "url": "assets/img/la-regular-400.55c57a74.svg",
    "revision": "55c57a74937e6de260b67c62522f7ea1"
  },
  {
    "url": "assets/img/la-solid-900.79be4e9f.svg",
    "revision": "79be4e9fcffc796ec3b2cb9a1f46d39e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.439f20f5.js",
    "revision": "e7719b730b8bd57b25e26fbebeba120d"
  },
  {
    "url": "assets/js/10.178b86fc.js",
    "revision": "ad3807dde6b3d87eaa574f751814d3b9"
  },
  {
    "url": "assets/js/11.df7e7a8a.js",
    "revision": "85b3dddf3f3ef84e015a54e73deff091"
  },
  {
    "url": "assets/js/12.a5216428.js",
    "revision": "d06f32e9406ee45732395d323a1790cc"
  },
  {
    "url": "assets/js/13.f177ac49.js",
    "revision": "48242ce5e385fdba9c8fae1cfed89493"
  },
  {
    "url": "assets/js/14.a282048d.js",
    "revision": "e574554d3250d91c4e0770fb03165c1d"
  },
  {
    "url": "assets/js/15.bf0e76b0.js",
    "revision": "007114772b28344e33235aea67eee126"
  },
  {
    "url": "assets/js/16.e454ad79.js",
    "revision": "86bb35cd3fe9f9b306238e9518f1ed26"
  },
  {
    "url": "assets/js/17.dab4d9b0.js",
    "revision": "5424d22c6f97199cc98a5880e1d7778c"
  },
  {
    "url": "assets/js/18.b037ff9a.js",
    "revision": "80529baead46a4dc5f8461f929f0b6b3"
  },
  {
    "url": "assets/js/19.b8c480ce.js",
    "revision": "f4d5ded793349c8240ace6bf4e8f8d61"
  },
  {
    "url": "assets/js/20.4e018b4f.js",
    "revision": "6ca92a695a4c2d8a6e0d877ce94742a0"
  },
  {
    "url": "assets/js/21.bc89c6d7.js",
    "revision": "336d94661143cda6cfec45d68d6cc2e5"
  },
  {
    "url": "assets/js/22.e88a2af0.js",
    "revision": "8785ae6ac298fb8386eca6476ae26e80"
  },
  {
    "url": "assets/js/23.cf703fdf.js",
    "revision": "bdd68a231e1ee3d7bb3bcf76b9f2195f"
  },
  {
    "url": "assets/js/24.cc835774.js",
    "revision": "9c1cfb19595966fe027cef290350ba01"
  },
  {
    "url": "assets/js/25.ac84155b.js",
    "revision": "25c6d3175327b7402b248d7f9cddb955"
  },
  {
    "url": "assets/js/4.81a94c11.js",
    "revision": "b0f4dc8dc888b07cd8c04dc97ef8e74c"
  },
  {
    "url": "assets/js/5.808b43b6.js",
    "revision": "bf9bd49410330d826a33b3811553cbc0"
  },
  {
    "url": "assets/js/6.3fa32d31.js",
    "revision": "fb176c5ffb8a728bcb4d1d7814562347"
  },
  {
    "url": "assets/js/7.5465e3dd.js",
    "revision": "9349e597a0ce15f5f2f9693cd343358a"
  },
  {
    "url": "assets/js/8.e9d06eba.js",
    "revision": "93759214d1f5f856eb0d6a20542fe330"
  },
  {
    "url": "assets/js/9.2d73b35f.js",
    "revision": "bb7156c5a963a6a55572e5ab45e722e9"
  },
  {
    "url": "assets/js/app.46175f23.js",
    "revision": "e6133445828fa25206abf7466dc9437c"
  },
  {
    "url": "assets/js/vendors~docsearch.c5e9d014.js",
    "revision": "6cb56f563d07957fd0b81f9de3871984"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "16a308e93d7494576a1cbda1a073a209"
  },
  {
    "url": "docs/crop.html",
    "revision": "799bad3c8bbcc36d358b566d13d4874a"
  },
  {
    "url": "docs/fit.html",
    "revision": "e37d1dec70d4513a3cbc8ed7f46603db"
  },
  {
    "url": "docs/format.html",
    "revision": "58ac3053d2c7f646d9afc33bd9fd323a"
  },
  {
    "url": "docs/index.html",
    "revision": "f060866b882a9803fa29b4fc5d19afa7"
  },
  {
    "url": "docs/mask.html",
    "revision": "ac76d9149185700554e2b808b9a09b0e"
  },
  {
    "url": "docs/orientation.html",
    "revision": "ae9928c4dc1a65899635921b57908a74"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "9a2a8bb144eaa9588d5e9669d87529f0"
  },
  {
    "url": "docs/size.html",
    "revision": "d95b39e3a3788753e0816ba045c0abf0"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "603c75d24ad493bde3eb6e0a53f19883"
  },
  {
    "url": "faq/index.html",
    "revision": "4d2a7950f11473a2e82e4f035e4b31be"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "9e85ea005a560f4b9e29cecf89ec2e59"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "14440919795d13a2f7fa786617c3d719"
  },
  {
    "url": "favicon-48x48.png",
    "revision": "6ae6f8889e127adb3a238c770ac573ee"
  },
  {
    "url": "index.html",
    "revision": "20f72da866587cad7cdfa018d5413786"
  },
  {
    "url": "lichtenstein.jpg",
    "revision": "6e425d9707e238c0d59df1ec7e8f0ab3"
  },
  {
    "url": "logo.svg",
    "revision": "c461136717f0c0dd4881c3c2cc4ac45d"
  },
  {
    "url": "made-in-sneek.svg",
    "revision": "445d6f604a4940a2329f1ac49ed6897e"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "f027e3738308bdfaf8baa46c62c34af1"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "59bac5540ba51159383c596cbb76dfaa"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "1919bbba0be6b6728935bb94bdf3573d"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "c82e8cca62e14d5421bfebd63f351d1c"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "f01d3ad7ce5dcb758f1bdd2dd82f666e"
  },
  {
    "url": "news/2018/07/29/introducing-api-4/index.html",
    "revision": "feceecf96844a5fd178b578017a29197"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "5b9462afd801b83166006c1c15fdba67"
  },
  {
    "url": "news/index.html",
    "revision": "abd074a38234a6394aadd6da5c5c5410"
  },
  {
    "url": "puppy.jpg",
    "revision": "4e343e5f5cbf759c3748da6b712a1fba"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "b5a0f0d707e39f0ddec7b3f2a721fad6"
  },
  {
    "url": "transparency_demo.png",
    "revision": "05bdc136a470c489881c030dc5227d22"
  },
  {
    "url": "zebra.jpg",
    "revision": "321f1968377a0ec472f49dc678432475"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
