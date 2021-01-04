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
    "revision": "b52261dca668facf5ca98ad556e00712"
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
    "url": "assets/css/0.styles.07d1dbda.css",
    "revision": "76e2f6d0987111b86e215119411c99e9"
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
    "url": "assets/js/1.7efdf83f.js",
    "revision": "9f0a7dab07a1c6639dce5ef9555ab1f5"
  },
  {
    "url": "assets/js/10.1f338073.js",
    "revision": "2dd3e8d886f3709d89932b789a79ccaa"
  },
  {
    "url": "assets/js/11.f38aa3f9.js",
    "revision": "11541a3c845e6281a2f1056fe7fc8d25"
  },
  {
    "url": "assets/js/12.264179e8.js",
    "revision": "2a84c7ce4b7f6477622dacef2a9419f5"
  },
  {
    "url": "assets/js/13.2066d4e1.js",
    "revision": "15a19c6527cf74670a095c12bc24da6c"
  },
  {
    "url": "assets/js/14.bd5bc82d.js",
    "revision": "acab692f594b890edbecf39f3861aa62"
  },
  {
    "url": "assets/js/15.55c9b55c.js",
    "revision": "b87682a0cf65f47d42e98d1f57e5039a"
  },
  {
    "url": "assets/js/16.b1669379.js",
    "revision": "cc47c1d5b4f144a6bd1c2bd8b8a29ced"
  },
  {
    "url": "assets/js/17.b85a1ce3.js",
    "revision": "7e70176c9d3aabd2b22ecd28d8386dba"
  },
  {
    "url": "assets/js/18.49a6cd6b.js",
    "revision": "62e8fe573b74c022b249d06435ade50b"
  },
  {
    "url": "assets/js/19.a878f95f.js",
    "revision": "d9a1d7dd87402392783430a2f533b6c4"
  },
  {
    "url": "assets/js/20.b8539b90.js",
    "revision": "fd4635fd56a95c263b7c8baa5e6322c6"
  },
  {
    "url": "assets/js/21.0528f9d4.js",
    "revision": "03a05cee2a93c49c9aef2cc3f9cbbf3b"
  },
  {
    "url": "assets/js/22.3160c321.js",
    "revision": "89b2d5d7152f609b8b7791434ad24eb4"
  },
  {
    "url": "assets/js/23.7df67a61.js",
    "revision": "16ea014bf321b702d166cc29625c53f3"
  },
  {
    "url": "assets/js/24.d8b97344.js",
    "revision": "1c602618aa4142e4c7692d821779306f"
  },
  {
    "url": "assets/js/25.1aff5f57.js",
    "revision": "dc36ec50335baf39d2d63dfc2ee1912b"
  },
  {
    "url": "assets/js/26.255e5351.js",
    "revision": "9b178f7f3ea2131a04ae697af2622525"
  },
  {
    "url": "assets/js/27.a3129133.js",
    "revision": "db74e107629cc3a7cbca7933a0120644"
  },
  {
    "url": "assets/js/4.ebd89262.js",
    "revision": "507e575b06a4d884d699b590dbbad274"
  },
  {
    "url": "assets/js/5.bd2e1eaf.js",
    "revision": "c6bb2205dd6f51f3b1092a59651f72a4"
  },
  {
    "url": "assets/js/6.225ed981.js",
    "revision": "5bbd2d1514f6833165c01e35ab62ea14"
  },
  {
    "url": "assets/js/7.dce60feb.js",
    "revision": "c986a8092609ace7619b92ced6dce8ff"
  },
  {
    "url": "assets/js/8.f5eb490c.js",
    "revision": "c2f70ea6c0604bcdbacaa1c17f8ee090"
  },
  {
    "url": "assets/js/9.d2b642da.js",
    "revision": "9619733c680438907f577c49854377df"
  },
  {
    "url": "assets/js/app.5bdb07cb.js",
    "revision": "36abf0d568a028484fb69ff949422c00"
  },
  {
    "url": "assets/js/vendors~docsearch.55fbae7d.js",
    "revision": "722f97089603b6aa69cbeea8b5409701"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "3f30fa39bb382ceb8288ca250390e569"
  },
  {
    "url": "docs/crop.html",
    "revision": "ed85ef6344f4902aa48d6c1cbd765217"
  },
  {
    "url": "docs/fit.html",
    "revision": "118f3797e83de20ebd19df3aed755485"
  },
  {
    "url": "docs/format.html",
    "revision": "e5212c71eea1496a2a12f312692445fb"
  },
  {
    "url": "docs/index.html",
    "revision": "38327348821d5aeff9e0a6d29bcf7164"
  },
  {
    "url": "docs/mask.html",
    "revision": "d20e98704f6ed385aa1912fec2e4cd1d"
  },
  {
    "url": "docs/orientation.html",
    "revision": "81e3bfac6bd6ffff33c645c7b68c11bc"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "23b24df2fc639411c86bc7c9d64e7557"
  },
  {
    "url": "docs/size.html",
    "revision": "50d2a4f1f50e236e456f0ade29aadfde"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "28be5a199ccd49251d2fed57d1f42b04"
  },
  {
    "url": "faq/index.html",
    "revision": "898d41f2e28d564a35fcff80388c6748"
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
    "revision": "a1c4433833fc900e786077ee1f220677"
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
    "revision": "3dc24ed8743707d9bad3c8385a2b4f54"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "49332d7dbc2866e79688f0cc1570eb3a"
  },
  {
    "url": "news/index.html",
    "revision": "67c0e5e9742970055e64f607767e7ff0"
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
