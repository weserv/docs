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
    "revision": "83c9bb975c3a5bed288cc2d01e1b4e68"
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
    "url": "assets/css/0.styles.eb699029.css",
    "revision": "9794fcada723fad691555e2e770e3970"
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
    "url": "assets/js/1.6244205a.js",
    "revision": "ade94a09efdd0d946c573d65f4ed39ab"
  },
  {
    "url": "assets/js/10.b754bf1e.js",
    "revision": "a878f2491ecc1029e72c911419ccf5d0"
  },
  {
    "url": "assets/js/11.746ee527.js",
    "revision": "f9343d19440abbf949550433ea38c89f"
  },
  {
    "url": "assets/js/12.03fdba77.js",
    "revision": "e3468b66096e19b2408d25f597c06f43"
  },
  {
    "url": "assets/js/13.a9e497eb.js",
    "revision": "76c903a842ca4c987304e121bdbd6e93"
  },
  {
    "url": "assets/js/14.1b7cbdc9.js",
    "revision": "4cc12e8a48f157c07bb8614216115de8"
  },
  {
    "url": "assets/js/15.0cd45283.js",
    "revision": "c10b05d358588fca0e61f4091d3345bb"
  },
  {
    "url": "assets/js/16.70b31ee2.js",
    "revision": "e98d27233d5929e1cf817ab6e7e51a1e"
  },
  {
    "url": "assets/js/17.9bea0a4a.js",
    "revision": "2d417484e4a2d965cc6440b81e8e3409"
  },
  {
    "url": "assets/js/18.39d9fc80.js",
    "revision": "57f12d97d79aa88714120cbd6ebd08ec"
  },
  {
    "url": "assets/js/19.31ad0098.js",
    "revision": "be7184c5848a48df0b31b67a5c167bf6"
  },
  {
    "url": "assets/js/20.27a12ea4.js",
    "revision": "d06f0fdfb85d96ae361f55c6fbadbafa"
  },
  {
    "url": "assets/js/21.0edffc5d.js",
    "revision": "04b21824be827438f60e4b219cb2c24c"
  },
  {
    "url": "assets/js/22.6f6f7d82.js",
    "revision": "2430034299a84793f63f22b8f7555f37"
  },
  {
    "url": "assets/js/23.2dc54510.js",
    "revision": "339221063c3ecde7eae4e9350e8a423b"
  },
  {
    "url": "assets/js/24.2b387e97.js",
    "revision": "f1b72c47e568b6fe713ba4ab6e284276"
  },
  {
    "url": "assets/js/25.b7d05aba.js",
    "revision": "0b762719f742fda355f4d7bd7abad3de"
  },
  {
    "url": "assets/js/26.8ad44090.js",
    "revision": "93d092716603a336c93dddd86d49dd48"
  },
  {
    "url": "assets/js/27.11273255.js",
    "revision": "27807902a1bfae8f23224567169ded19"
  },
  {
    "url": "assets/js/4.09cbfe8b.js",
    "revision": "133ddfc6bc953cace783238cc67b8658"
  },
  {
    "url": "assets/js/5.e8b2ed0a.js",
    "revision": "114f6349a554bd8a955d8d023598891c"
  },
  {
    "url": "assets/js/6.b6a48682.js",
    "revision": "58d7f9e2165404e2f39f1b40064a8187"
  },
  {
    "url": "assets/js/7.4877ac11.js",
    "revision": "f2ed76881c0c2dcb1b3c9d700268a41e"
  },
  {
    "url": "assets/js/8.15b1266b.js",
    "revision": "00490122aeac4af61b631b424276055f"
  },
  {
    "url": "assets/js/9.0686bc6d.js",
    "revision": "384487add964b9ee371e4b353a46306d"
  },
  {
    "url": "assets/js/app.b803ba27.js",
    "revision": "b8e70c791cfb697388f609e40fc64b55"
  },
  {
    "url": "assets/js/vendors~docsearch.2bebf8bd.js",
    "revision": "2bc741df6dbd7b592d65b9f9b52b33c3"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "b2f43f703ec7ce6c20d9f07b23129b65"
  },
  {
    "url": "docs/crop.html",
    "revision": "9cd6fdebb65f3888e65463c7aab9781f"
  },
  {
    "url": "docs/fit.html",
    "revision": "ab100a30f5adc6a9de38e166527f1c0c"
  },
  {
    "url": "docs/format.html",
    "revision": "f15f745be9b485cfde4f354a0aac825e"
  },
  {
    "url": "docs/index.html",
    "revision": "8df2f639885d184f4a57233d7dd1d855"
  },
  {
    "url": "docs/mask.html",
    "revision": "07177bfde17baecdc053934a60b89774"
  },
  {
    "url": "docs/orientation.html",
    "revision": "6b4647675a29ba04abf457ac7fd775ce"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "71fd37865300866ccb9b4ef8ac69cc78"
  },
  {
    "url": "docs/size.html",
    "revision": "84102a75982d740010b71e56907d4ceb"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "12b922ad19959826a62d0b00b968afff"
  },
  {
    "url": "faq/index.html",
    "revision": "bb232c60e41b524d5eeaa5e169483f84"
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
    "revision": "cd1d4700aa3eb919e21b84ab9a76834d"
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
    "revision": "3f427277f8b2ebb104686591f9746e0f"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "5ad730fe004c2859d0c41706453d5636"
  },
  {
    "url": "news/index.html",
    "revision": "0e187c1cbb616264e2711638fab4c01e"
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
