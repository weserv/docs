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
    "revision": "88764ba15a497d364442ff1f7798d28d"
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
    "url": "assets/css/0.styles.32d3a265.css",
    "revision": "d521bb9cc21fcb0707d9a0d8977695ce"
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
    "url": "assets/js/1.cb3cf7d0.js",
    "revision": "0280e7a8fe020fe13ff06d1cc9791cc1"
  },
  {
    "url": "assets/js/10.4afc9614.js",
    "revision": "e48adb8b3b3ebee31a6c19354299bb95"
  },
  {
    "url": "assets/js/11.08b4d77c.js",
    "revision": "0696d553e0deacc1bdff74c1794a47ff"
  },
  {
    "url": "assets/js/12.7b72aad4.js",
    "revision": "343b5e4bc548f6857463e094fa33f51c"
  },
  {
    "url": "assets/js/13.c25f4f77.js",
    "revision": "6d77e69678165c98ba97f522d6c6d6b3"
  },
  {
    "url": "assets/js/14.63e4de00.js",
    "revision": "346795cb8151f49709b417c8a63c293b"
  },
  {
    "url": "assets/js/15.54bcfa95.js",
    "revision": "c4fca19557866cf480c1059e62782933"
  },
  {
    "url": "assets/js/16.68507ff8.js",
    "revision": "e9389ecc857cccdaf48d88427920e250"
  },
  {
    "url": "assets/js/17.fc73a5a1.js",
    "revision": "0fa2df61227b4080a2bab24df1830a25"
  },
  {
    "url": "assets/js/18.3f3d3626.js",
    "revision": "66e94509a481d126eae738e2d42752e5"
  },
  {
    "url": "assets/js/19.e3de0b19.js",
    "revision": "719682d0f22ee086be2129ae9f0514c0"
  },
  {
    "url": "assets/js/20.5de7cf90.js",
    "revision": "34b04266ee1ddc37083bdb4d7f8863e1"
  },
  {
    "url": "assets/js/21.c774bc4f.js",
    "revision": "97e68a941e738b3d61f9eedb89cf28e7"
  },
  {
    "url": "assets/js/22.86e7dbd2.js",
    "revision": "b5e248ea750422c2eee5757f87e59771"
  },
  {
    "url": "assets/js/23.1be6b153.js",
    "revision": "cfbbd214a83f2dac3494e41db6d2571a"
  },
  {
    "url": "assets/js/24.9114e107.js",
    "revision": "e4bb338ae8406d304c300496de45adf5"
  },
  {
    "url": "assets/js/25.59598aeb.js",
    "revision": "83bd1394a6a36e0635934fac945b8490"
  },
  {
    "url": "assets/js/4.75b92057.js",
    "revision": "722395a42e0bdf5ee7a4c7e91b529466"
  },
  {
    "url": "assets/js/5.ee62ba04.js",
    "revision": "77587f105f197df4cc90815c4d71f4dd"
  },
  {
    "url": "assets/js/6.2b897981.js",
    "revision": "2c02ad16e6db398cf5374c12d91eb006"
  },
  {
    "url": "assets/js/7.5c12828a.js",
    "revision": "03d6019ff185ae9d9e6ae2b187ad5ffd"
  },
  {
    "url": "assets/js/8.fa57d97f.js",
    "revision": "2e9463f569f16fc2b0fa910710722dba"
  },
  {
    "url": "assets/js/9.89f0eeb3.js",
    "revision": "b3d85062fe8c9e3733097d18fc96431a"
  },
  {
    "url": "assets/js/app.9a5b5468.js",
    "revision": "348e2fcfad7feac96d4617dcaaab44b5"
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
    "revision": "4fbf699def1ff51f8ef3718efe90a407"
  },
  {
    "url": "docs/crop.html",
    "revision": "1c00866819a466d99a5cf6df2f6d5e49"
  },
  {
    "url": "docs/fit.html",
    "revision": "e4a84a8ef3a65fca75a2febaf36fab98"
  },
  {
    "url": "docs/format.html",
    "revision": "aa957da84c07358261bfca7a43f33ecd"
  },
  {
    "url": "docs/index.html",
    "revision": "f138c24c95db8a7b3e3b8df15722bdbf"
  },
  {
    "url": "docs/mask.html",
    "revision": "0c8c5fcbefbc6949d61833b850fd85f8"
  },
  {
    "url": "docs/orientation.html",
    "revision": "7914425e93374aeff8f213fcc1ba5f07"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "c24c1199bff12d04a4ca662054abdbbb"
  },
  {
    "url": "docs/size.html",
    "revision": "ee2eb89faf1e38349fc714a0636dcd12"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "279be7731531cc4eadf2ae6d19130380"
  },
  {
    "url": "faq/index.html",
    "revision": "d8a303c5682e40055dd0893acc0082fc"
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
    "revision": "9024dd8c12c0df703374ba3139989602"
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
    "revision": "ab81261c566181a088907df1c32d3039"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "ff8944b711f4146acf3969d43e9d3a34"
  },
  {
    "url": "news/index.html",
    "revision": "d313b7f5b940b84bd718ca92855bb24e"
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
