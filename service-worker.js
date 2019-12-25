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
    "revision": "6d91d122af21fd219a54620aac686bc8"
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
    "url": "assets/css/0.styles.7bf6a481.css",
    "revision": "a0153da85d53039dd1ac35eb4a7fcb60"
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
    "url": "assets/js/1.f767f052.js",
    "revision": "0280e7a8fe020fe13ff06d1cc9791cc1"
  },
  {
    "url": "assets/js/10.656dbf01.js",
    "revision": "e48adb8b3b3ebee31a6c19354299bb95"
  },
  {
    "url": "assets/js/11.605915fc.js",
    "revision": "b91518020b4dd1dd7648260e1e6835d7"
  },
  {
    "url": "assets/js/12.be5f07b6.js",
    "revision": "59be5b75db9b87d4bcaefb6ec46c9283"
  },
  {
    "url": "assets/js/13.9b62a78e.js",
    "revision": "0faaad3fa409bab4b71dfb3af7c3ae13"
  },
  {
    "url": "assets/js/14.5b295503.js",
    "revision": "8b8b683092fadbde6d838693d1674d15"
  },
  {
    "url": "assets/js/15.d05720e4.js",
    "revision": "351063824de0622026403f4ca4605147"
  },
  {
    "url": "assets/js/16.e72f659e.js",
    "revision": "9704c7ec39c3e055ca255a8dc2a1eb73"
  },
  {
    "url": "assets/js/17.81f21798.js",
    "revision": "9e4a4b5afd1f6551988542b854898677"
  },
  {
    "url": "assets/js/18.53bd8557.js",
    "revision": "b4d02e2fd2d0e153449d9201df56c3e3"
  },
  {
    "url": "assets/js/19.1fdc87a3.js",
    "revision": "675e3a691812378f3f14f024484f0f5c"
  },
  {
    "url": "assets/js/20.44efbbda.js",
    "revision": "a3cadf88ee4fddf85ff488e20d24ce8f"
  },
  {
    "url": "assets/js/21.ad05eaf7.js",
    "revision": "28ebdef5d77d3186064526bb966d0a28"
  },
  {
    "url": "assets/js/22.8ec87d0b.js",
    "revision": "fd5e5d26385d41817d75b0201dac0d5d"
  },
  {
    "url": "assets/js/23.635884ae.js",
    "revision": "c6f89aa1aec6db906a4e2b9d0bdfee27"
  },
  {
    "url": "assets/js/24.0f664ea4.js",
    "revision": "c0c712b779f0c8f030cfae0392bce94d"
  },
  {
    "url": "assets/js/25.ca0989cc.js",
    "revision": "83bd1394a6a36e0635934fac945b8490"
  },
  {
    "url": "assets/js/4.49de6a75.js",
    "revision": "a10711157e32332baadd262852351af4"
  },
  {
    "url": "assets/js/5.f5d364ce.js",
    "revision": "a5791e316d2c4a49c28db68f3a503ba8"
  },
  {
    "url": "assets/js/6.6d8ab909.js",
    "revision": "2c02ad16e6db398cf5374c12d91eb006"
  },
  {
    "url": "assets/js/7.113797b2.js",
    "revision": "03d6019ff185ae9d9e6ae2b187ad5ffd"
  },
  {
    "url": "assets/js/8.63c8f996.js",
    "revision": "2e9463f569f16fc2b0fa910710722dba"
  },
  {
    "url": "assets/js/9.486e0ced.js",
    "revision": "b3d85062fe8c9e3733097d18fc96431a"
  },
  {
    "url": "assets/js/app.be82babf.js",
    "revision": "5dabb6c9d3343fa1058e3cc67ae122b5"
  },
  {
    "url": "assets/js/vendors~docsearch.109e1e1a.js",
    "revision": "1029af7d921899bffbf00e9bb5743413"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "fbcd3bab4d4229b6b8c1f016ef400b25"
  },
  {
    "url": "docs/crop.html",
    "revision": "0f2e496afc2cc6b5ddfbea6f662c569e"
  },
  {
    "url": "docs/fit.html",
    "revision": "f9cad80ebac421c76df2cc191a7618d2"
  },
  {
    "url": "docs/format.html",
    "revision": "2322795cc00922e4eac2868147b411df"
  },
  {
    "url": "docs/index.html",
    "revision": "5682719b5b17b9eac64b612bbc5bebc0"
  },
  {
    "url": "docs/mask.html",
    "revision": "578b3168b1dfe9d9af155f08c16d529d"
  },
  {
    "url": "docs/orientation.html",
    "revision": "6ea9deb91a0a930c8766ccfdc3b40231"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "54cc29de4d6509f5741fd991da41ca3c"
  },
  {
    "url": "docs/size.html",
    "revision": "bf9094176a401e7959bfdac245694ec7"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "c8526c67b3a82c84f402637f72d707fb"
  },
  {
    "url": "faq/index.html",
    "revision": "6569c49d85b9146e94c917a149836236"
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
    "revision": "a658e705b548a140bc8cf77a28493c90"
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
    "revision": "be698c91708e611acd05dea1d39e925e"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "2bb3cc308bc67240be67dcdb64b8aa83"
  },
  {
    "url": "news/index.html",
    "revision": "6ff0bbb8a39a1df23aa5e3485e536ab0"
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
