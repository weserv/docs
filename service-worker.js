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
    "revision": "bd61a3296ed2c5ed2f4c8541080af842"
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
    "url": "assets/css/0.styles.e4867856.css",
    "revision": "d7525c1075f3a6a0c12e374f8f16821e"
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
    "url": "assets/js/1.90dab677.js",
    "revision": "7b57681515452bb9529d50315b7d8b3a"
  },
  {
    "url": "assets/js/10.8b193cad.js",
    "revision": "bf363b9e08dbfaba3b5527fc49939901"
  },
  {
    "url": "assets/js/11.29021ca0.js",
    "revision": "fca0c41989a2887e85561853e387f919"
  },
  {
    "url": "assets/js/12.52e3c968.js",
    "revision": "b9036938ac8d22690ad777d68db8b7d7"
  },
  {
    "url": "assets/js/13.3f502d75.js",
    "revision": "dd9fcbef52091c87c9a9717b827e3e99"
  },
  {
    "url": "assets/js/14.b3ba59d5.js",
    "revision": "ee9e6950f5af43b4b88e14b2c5110ffd"
  },
  {
    "url": "assets/js/15.b1064daa.js",
    "revision": "204a8c276dcaebd31bcbafc0a3f0ffe6"
  },
  {
    "url": "assets/js/16.fccf88a0.js",
    "revision": "25d4e306dd9703f5b412719dc8fade35"
  },
  {
    "url": "assets/js/17.6e2627cb.js",
    "revision": "0be055d9f49bbf9af697291cf7fbf4d3"
  },
  {
    "url": "assets/js/18.02e2e1fc.js",
    "revision": "ed0cc566940574e12d55264c20ce667e"
  },
  {
    "url": "assets/js/19.3ed34f45.js",
    "revision": "b6e5c0cc49658c58c3ab737a0a25acae"
  },
  {
    "url": "assets/js/20.e0ec4b00.js",
    "revision": "5a5a00b2454a307e05a21f279eaa74fb"
  },
  {
    "url": "assets/js/21.fca0fa32.js",
    "revision": "33b26fa334dae4e586a2196d41af40bd"
  },
  {
    "url": "assets/js/22.f42075a6.js",
    "revision": "d08f306b13a27abef5241b40a3769e32"
  },
  {
    "url": "assets/js/23.e0143b28.js",
    "revision": "aef3e11991d6ea905a2268b51229203e"
  },
  {
    "url": "assets/js/24.af9865d6.js",
    "revision": "9976212b0630f467a7b208eaa4f901ce"
  },
  {
    "url": "assets/js/25.1d562413.js",
    "revision": "1b259d9dff392de46381f90f73cc2ba1"
  },
  {
    "url": "assets/js/26.de201dda.js",
    "revision": "75d9631cad38a7f4cf4773a3a6701dfc"
  },
  {
    "url": "assets/js/4.a4337053.js",
    "revision": "d1e69ab18c9593aea95ef92dd4d4bdc6"
  },
  {
    "url": "assets/js/5.935c0be8.js",
    "revision": "640f95161830bdd640a3d2ef01f08848"
  },
  {
    "url": "assets/js/6.d94010d3.js",
    "revision": "9bb05665a9f191f00275a6049dd0183e"
  },
  {
    "url": "assets/js/7.d0d85765.js",
    "revision": "21530a1ab9068035e7295daee6364ce0"
  },
  {
    "url": "assets/js/8.8e120457.js",
    "revision": "19c7860e24e4cf1fd20f378c48320d31"
  },
  {
    "url": "assets/js/9.8b1134c0.js",
    "revision": "0e7832c0b8f713a88650da9473d5a668"
  },
  {
    "url": "assets/js/app.4df7a232.js",
    "revision": "0bf5dda3b94587d01b0ff47a827d8695"
  },
  {
    "url": "assets/js/vendors~docsearch.c80460c9.js",
    "revision": "72661ccdd9c06d10e2e967a2d6a41948"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "a4c6599842c1c86d25b60ee652ac852d"
  },
  {
    "url": "docs/crop.html",
    "revision": "53f54b77b866a912774ef6ab2dc9b4fb"
  },
  {
    "url": "docs/fit.html",
    "revision": "04779e4db8ed20a28084c160cf64f0d9"
  },
  {
    "url": "docs/format.html",
    "revision": "268c30c25d25cbcfedbce1e9a351c2ff"
  },
  {
    "url": "docs/index.html",
    "revision": "5e747cd8e090abdd27690d79513834f1"
  },
  {
    "url": "docs/mask.html",
    "revision": "2e6997d8afd0ef453a7ea837f5ee6487"
  },
  {
    "url": "docs/orientation.html",
    "revision": "3d0e4c572e86ec1e1aa5ee6cf8a868d2"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "e92e44e71894f7971591e92ee28d344d"
  },
  {
    "url": "docs/size.html",
    "revision": "09bcd35fac7ad94813408ec39ee47df4"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "a6de9721f51e1a56b7eef064d7f74cf7"
  },
  {
    "url": "faq/index.html",
    "revision": "3c663dd5ba397a627ac78311a542f5ce"
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
    "revision": "021e306c7be29ddb89c34b5681c81a0f"
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
    "revision": "6410b625c0125d7a9461b47e48d0874e"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "d8e8d1060ce0e62e853800d5dd02e23a"
  },
  {
    "url": "news/index.html",
    "revision": "aa2e9bd4943289df16778ad58d0da725"
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
