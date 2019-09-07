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
    "revision": "b96e64fb773415df2ce2d67fb474c571"
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
    "url": "assets/css/0.styles.916e956d.css",
    "revision": "6f7f3ae306402fb54bd4efcf1a3a5afb"
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
    "url": "assets/js/1.dc667f7d.js",
    "revision": "b7ea491209977240d9ee0e3eadc4d1fe"
  },
  {
    "url": "assets/js/10.63e6f5fb.js",
    "revision": "e60ff4325716a6afadcd836847e3b569"
  },
  {
    "url": "assets/js/11.33fe3866.js",
    "revision": "674f95ae1470c218ad1ebfc46969dab5"
  },
  {
    "url": "assets/js/12.ecdf4376.js",
    "revision": "9d903dc7f130ac267c4c80bf19155f0d"
  },
  {
    "url": "assets/js/13.9d0d3757.js",
    "revision": "91d0f860777bffd06bb0ffd8667c65a6"
  },
  {
    "url": "assets/js/14.e4d5b1d4.js",
    "revision": "c1b80f0642a634f08288a8e253451a3d"
  },
  {
    "url": "assets/js/15.8a41f19b.js",
    "revision": "ed60f1a219bb396b866a7dc6de64be28"
  },
  {
    "url": "assets/js/16.eb3707a0.js",
    "revision": "ed1def84c10def12585805d1409290ee"
  },
  {
    "url": "assets/js/17.749a1907.js",
    "revision": "cf8f7cd9abb1b42ab4bb094dc65d33ad"
  },
  {
    "url": "assets/js/18.f80ac839.js",
    "revision": "25a805b556f2b1f5542eb829f44a2e06"
  },
  {
    "url": "assets/js/19.554767fd.js",
    "revision": "07c3f09f34532adc07ad663624b06dd5"
  },
  {
    "url": "assets/js/20.84f8adcc.js",
    "revision": "e6d0d8b0c6091276636bf541839ea661"
  },
  {
    "url": "assets/js/21.913d525a.js",
    "revision": "88d2e0440e76312da79c0696d53600a0"
  },
  {
    "url": "assets/js/22.b86ef88c.js",
    "revision": "7978ecf97f8151889ed37035e981f173"
  },
  {
    "url": "assets/js/23.8450205a.js",
    "revision": "66398f3f97064b685005c359c89b2158"
  },
  {
    "url": "assets/js/24.333f9828.js",
    "revision": "58b681f1cc3d3db3909f8df364e030c2"
  },
  {
    "url": "assets/js/25.c926b6f7.js",
    "revision": "659ffb3b7ec52875408d601c1aeae5aa"
  },
  {
    "url": "assets/js/4.d84ec03d.js",
    "revision": "69770082c19c908caaf0366c9c370064"
  },
  {
    "url": "assets/js/5.604d2047.js",
    "revision": "f711c13226554d12ef4a0cfb36a9a087"
  },
  {
    "url": "assets/js/6.ca595b65.js",
    "revision": "c0b09bd7dbb241c483a0dc490fada49e"
  },
  {
    "url": "assets/js/7.ed9991b4.js",
    "revision": "e08996484b9db9153fb2b3319b87e4f0"
  },
  {
    "url": "assets/js/8.1fec6549.js",
    "revision": "a8d2546f3a85100a71bd252c4ca8eed9"
  },
  {
    "url": "assets/js/9.68208ea8.js",
    "revision": "42b0654db8d7f75267b540e6fc393f1d"
  },
  {
    "url": "assets/js/app.b068ae8c.js",
    "revision": "c863523d8ade1fceabad0de323040c76"
  },
  {
    "url": "assets/js/vendors~docsearch.5fc8b484.js",
    "revision": "aee0b591c2e6150a0bd644f107e9dc19"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "889e86a7f2c736a0c7fb035b93466a56"
  },
  {
    "url": "docs/crop.html",
    "revision": "e93d36230bad661cb60ff6e8c1f10fc7"
  },
  {
    "url": "docs/fit.html",
    "revision": "d4c711c485fc5b9223b49f855178dc8b"
  },
  {
    "url": "docs/format.html",
    "revision": "0a56baae5476579a0ff22f1d99259653"
  },
  {
    "url": "docs/index.html",
    "revision": "d16c90e0e316cbc1c92afc266bc6434f"
  },
  {
    "url": "docs/mask.html",
    "revision": "d53566b055daaaf0fca75116338a8c5a"
  },
  {
    "url": "docs/orientation.html",
    "revision": "4b39b614c1cb19c5fb82334f14bede6a"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "6a1bff50af5f84b15c70fbe7a6b7fabb"
  },
  {
    "url": "docs/size.html",
    "revision": "f60bcaaf5d163df267f9a51035d3a571"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "ed650732bf34ab2e633103575a260271"
  },
  {
    "url": "faq/index.html",
    "revision": "bc581629df6d376e80da2b89642f07d7"
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
    "revision": "45898a23f65d07dffda761022b6b216b"
  },
  {
    "url": "logo.svg",
    "revision": "c461136717f0c0dd4881c3c2cc4ac45d"
  },
  {
    "url": "made-in-sneek.svg",
    "revision": "ed5ebba2588f32e5b8106af06186015b"
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
    "revision": "7fd3e76c40920a84df220126f8239a85"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "796907b4180c161fc2fde97c6ff23ca8"
  },
  {
    "url": "news/index.html",
    "revision": "2ae0c13d3b10cc0761eeee7762df29e2"
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
