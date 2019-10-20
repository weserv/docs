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
    "revision": "13b29cc3e0c241570c1d2fc7d5f5beb4"
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
    "url": "assets/css/0.styles.9c03b5da.css",
    "revision": "4856e51cea814ba3eb1ebd05deed80c4"
  },
  {
    "url": "assets/fonts/line-awesome.3f85d803.eot",
    "revision": "3f85d8035b4ccd91d2a1808dd22b7684"
  },
  {
    "url": "assets/fonts/line-awesome.452a5b42.woff2",
    "revision": "452a5b42cb4819f09d35bcf6cbdb24c1"
  },
  {
    "url": "assets/fonts/line-awesome.4d42f5f0.ttf",
    "revision": "4d42f5f0c62a8f51e876c14575354a6e"
  },
  {
    "url": "assets/fonts/line-awesome.8b129059.woff",
    "revision": "8b1290595e57e1d49d95ff3fa1129ecc"
  },
  {
    "url": "assets/img/line-awesome.131b7f1e.svg",
    "revision": "131b7f1e91a652791f08f5ccfe702645"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d6e5344a.js",
    "revision": "5342f86ae7909a90e84d373b00a896c6"
  },
  {
    "url": "assets/js/10.9c77d3a9.js",
    "revision": "47ab3eb3c9eb907df9e0ae3aca22e007"
  },
  {
    "url": "assets/js/11.76b96ee8.js",
    "revision": "9b13630cefc1484db8bf7d3e21c37656"
  },
  {
    "url": "assets/js/12.6d0bd79d.js",
    "revision": "02bdd79af594ffacbf846e3360c247e2"
  },
  {
    "url": "assets/js/13.a2992f5f.js",
    "revision": "d45b7c1b3b52a6d2fbbe072723b833c5"
  },
  {
    "url": "assets/js/14.26b56643.js",
    "revision": "5bba4de3bba7d94d6a7f563e4ceb8f62"
  },
  {
    "url": "assets/js/15.c471daf4.js",
    "revision": "4a4bdd83ba43d9bb665f6a5663848e7e"
  },
  {
    "url": "assets/js/16.111b11fc.js",
    "revision": "bc59fde30d884db107e2a433e9a0b938"
  },
  {
    "url": "assets/js/17.a778d2c4.js",
    "revision": "f0074ed0f5017f04142f8a19d980b161"
  },
  {
    "url": "assets/js/18.2e5f06ee.js",
    "revision": "b0f9469257bbe3119db33af3c4972a51"
  },
  {
    "url": "assets/js/19.e2610609.js",
    "revision": "c420833e26d49e0c4a034309d982b7c6"
  },
  {
    "url": "assets/js/20.e06dc8ee.js",
    "revision": "fe04049ef650e68a4fe416febeef6ac1"
  },
  {
    "url": "assets/js/21.d065aa0b.js",
    "revision": "eca32d37cc4fded64e14f63d57a22d1d"
  },
  {
    "url": "assets/js/22.5ced8a70.js",
    "revision": "ac76807fdbab4eee32d86f4c6b14b64d"
  },
  {
    "url": "assets/js/23.56c450f6.js",
    "revision": "10f4dc8cf8f17dbe58ea80320c2b4b9a"
  },
  {
    "url": "assets/js/24.7d1ef307.js",
    "revision": "4f2b089dcc2be46e53eb8a162e196ae1"
  },
  {
    "url": "assets/js/25.59598aeb.js",
    "revision": "83bd1394a6a36e0635934fac945b8490"
  },
  {
    "url": "assets/js/4.5a68b08d.js",
    "revision": "f995892e8ad3f14c58861510d3802103"
  },
  {
    "url": "assets/js/5.027bf665.js",
    "revision": "61eede5d52c732dbe3d3fa0402e313c5"
  },
  {
    "url": "assets/js/6.ee9be4de.js",
    "revision": "2c02ad16e6db398cf5374c12d91eb006"
  },
  {
    "url": "assets/js/7.f17fc3e1.js",
    "revision": "9561ff3b05d9a30e301580ec9065c8ae"
  },
  {
    "url": "assets/js/8.ba8fce46.js",
    "revision": "2e9463f569f16fc2b0fa910710722dba"
  },
  {
    "url": "assets/js/9.ce48eb62.js",
    "revision": "e8d57f116860684468efc49580fed954"
  },
  {
    "url": "assets/js/app.7a9b075e.js",
    "revision": "9b217e5a77e0026071a64e5251e29250"
  },
  {
    "url": "assets/js/vendors~docsearch.f4178b0a.js",
    "revision": "1029af7d921899bffbf00e9bb5743413"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "880703a11a2d508ca848aaea85dd1e1e"
  },
  {
    "url": "docs/crop.html",
    "revision": "91870c19b29871d7c137df2c77f7697b"
  },
  {
    "url": "docs/fit.html",
    "revision": "1cf6b580c5906d4563c5bf2d2edb379e"
  },
  {
    "url": "docs/format.html",
    "revision": "a26d6f99557eba306849faab723af394"
  },
  {
    "url": "docs/index.html",
    "revision": "84180eb326eab917064f730b9feff9ed"
  },
  {
    "url": "docs/mask.html",
    "revision": "2ffe47416a8f2d9a085f623ba4020280"
  },
  {
    "url": "docs/orientation.html",
    "revision": "84659875ba687f398defc3939f454f97"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "c6f2dd0c4844417debb6dea7f1cbde81"
  },
  {
    "url": "docs/size.html",
    "revision": "d7c0f64ca7b8f96e5cbe74a546600ac3"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "faa60fa92426056374178385d82ceee3"
  },
  {
    "url": "faq/index.html",
    "revision": "c48aaf4d57e0d64091873e42572ea2f5"
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
    "revision": "30e9b7c1043d28337d68fca0322566f1"
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
    "revision": "a241897c383679304ecf93e5d3fdbd7d"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "842fc40beba31a81b56f6f588413bb33"
  },
  {
    "url": "news/index.html",
    "revision": "747cbed77364b835401e9ee019864456"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "b5a0f0d707e39f0ddec7b3f2a721fad6"
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
