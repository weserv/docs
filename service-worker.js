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
    "revision": "037cfbb9f647b8b37cfe5e29a88efc3b"
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
    "url": "assets/css/0.styles.4070cbcc.css",
    "revision": "0550cd5d6f0213d9db8a618c7fa33f9e"
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
    "url": "assets/js/1.488da34d.js",
    "revision": "07011af825e69b153e03488f3b8b1d7e"
  },
  {
    "url": "assets/js/10.bd1cbd5b.js",
    "revision": "ce573942aff1eee11a205e522267d2df"
  },
  {
    "url": "assets/js/11.b5167595.js",
    "revision": "4c77ec7b3a55e088ef4b9d0cd224f97b"
  },
  {
    "url": "assets/js/12.b1b03ca2.js",
    "revision": "d7a653ccd593b199d19df96fd075fafd"
  },
  {
    "url": "assets/js/13.d8d4a91e.js",
    "revision": "1346514158eb477cda954a2304f7f3f4"
  },
  {
    "url": "assets/js/14.bd692b22.js",
    "revision": "847cc7f8a623f5311a186ea33d9c292a"
  },
  {
    "url": "assets/js/15.870acb30.js",
    "revision": "e4689d454bf733473bc1520ae981f6a7"
  },
  {
    "url": "assets/js/16.8168d56a.js",
    "revision": "ce7919aaeabad9a40729fd9ef9ac6333"
  },
  {
    "url": "assets/js/17.9bc8b695.js",
    "revision": "75a3f1d625de4e8a847028d9634e963e"
  },
  {
    "url": "assets/js/18.a6764469.js",
    "revision": "353b2d2d030fc3a90c380bd9dae140ce"
  },
  {
    "url": "assets/js/19.5db9750d.js",
    "revision": "c7e5a62371a32b87fdb8882d6c733282"
  },
  {
    "url": "assets/js/20.f436ed17.js",
    "revision": "84539c7c593d0b19f1ef970ee8b118db"
  },
  {
    "url": "assets/js/21.070eee53.js",
    "revision": "c2c26c31b4c6e80882890ede34749d37"
  },
  {
    "url": "assets/js/22.a4238e4b.js",
    "revision": "00401f12750d7fc58f716387bc81d7c3"
  },
  {
    "url": "assets/js/23.71eef3e2.js",
    "revision": "a7f4a483e5ce899b482c574f09161fa3"
  },
  {
    "url": "assets/js/24.d7b3392d.js",
    "revision": "acac44880acb937bdf8ba00f6517c0a5"
  },
  {
    "url": "assets/js/25.7fddce9f.js",
    "revision": "8e2b3f2217ee65e25d2830283335c275"
  },
  {
    "url": "assets/js/26.e6c14967.js",
    "revision": "bd2deb8521ad3557f99e089348d74a49"
  },
  {
    "url": "assets/js/27.d42ea305.js",
    "revision": "6620504d437bf678b05d783e4d70b2ad"
  },
  {
    "url": "assets/js/4.dac08f5b.js",
    "revision": "410c28302de3185ff80c048bcb8b4307"
  },
  {
    "url": "assets/js/5.642725b9.js",
    "revision": "e8f44180baa237911f45140585c6b35c"
  },
  {
    "url": "assets/js/6.0bed286f.js",
    "revision": "7e2bd46bdfea2f391af62c346ab53a6d"
  },
  {
    "url": "assets/js/7.55051cdb.js",
    "revision": "646a68d07c8c8a1afb4b9bc2c237dc60"
  },
  {
    "url": "assets/js/8.7b2356b9.js",
    "revision": "8a91270e0b82ab90ec5e80f7d9da5800"
  },
  {
    "url": "assets/js/9.c1f24e2d.js",
    "revision": "b1091d12fad9271e650bc96393df540f"
  },
  {
    "url": "assets/js/app.62046c69.js",
    "revision": "d4edaa8eb5e6e6ac0672b04045a929cd"
  },
  {
    "url": "assets/js/vendors~docsearch.07157c60.js",
    "revision": "ecd3176199ce27a07d2a0a24fa4d12c7"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "5a72eda47f3120219ae11e17e56752e1"
  },
  {
    "url": "docs/crop.html",
    "revision": "b382b402bae3cba2b2a548175156e691"
  },
  {
    "url": "docs/fit.html",
    "revision": "2b249aff7555e6a2d1caf9e8f42a7f5c"
  },
  {
    "url": "docs/format.html",
    "revision": "3fa06cdbbb2b5ec890d0430cae371cc1"
  },
  {
    "url": "docs/index.html",
    "revision": "b11ec8a331b37c642c6bc14dd1e763a8"
  },
  {
    "url": "docs/mask.html",
    "revision": "d05fc1d03bfd471204daa895b61b0e04"
  },
  {
    "url": "docs/orientation.html",
    "revision": "865ac925209ceeb9e6523b0ecf7cd40e"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "ecb203751a6a0ff7dbde12cd2a956b51"
  },
  {
    "url": "docs/size.html",
    "revision": "ed31db6386c6a0bff4411463fd80374a"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "a159a6ae3ecd12f3c402d9fca39d3a8a"
  },
  {
    "url": "faq/index.html",
    "revision": "0aa413323ca53a0a25989f67418af766"
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
    "revision": "771e34091ea3f446734521d597982950"
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
    "revision": "80685d9146bc18d7d63b4c2db435314e"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "7674b730b0e56c5b9ebf9a6f3cec274c"
  },
  {
    "url": "news/index.html",
    "revision": "3cc938a5f04ce43e4da12fb2c1556415"
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
