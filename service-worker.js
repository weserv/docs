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
    "revision": "c9937d185f83eaadf4fdd5791d638484"
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
    "url": "assets/js/1.6c318dc1.js",
    "revision": "f821629febef0019f9e065445c572924"
  },
  {
    "url": "assets/js/10.03d9b6df.js",
    "revision": "75da763f529897ea4cc528101837c538"
  },
  {
    "url": "assets/js/11.0374447a.js",
    "revision": "a6f22c056440af701b297572a036ea08"
  },
  {
    "url": "assets/js/12.c65856d0.js",
    "revision": "17c331ec46de0b397cce91d2bb1cf120"
  },
  {
    "url": "assets/js/13.56ed8a70.js",
    "revision": "d9603fc8e7cced372dc7e3a8b8a11060"
  },
  {
    "url": "assets/js/14.b0c28837.js",
    "revision": "e3d7566860836a26286af6d817636f56"
  },
  {
    "url": "assets/js/15.22be2d71.js",
    "revision": "7723e6c5cc381a81a114a4a7c6bafe3b"
  },
  {
    "url": "assets/js/16.78e032d4.js",
    "revision": "13468e883cd30586555a6e42b48e5ff8"
  },
  {
    "url": "assets/js/17.ddba1bc7.js",
    "revision": "c1ab2c2ca99a1e97298478600b9e0f81"
  },
  {
    "url": "assets/js/18.b6270371.js",
    "revision": "3a6f206b334008d2dc54ffef9cbcc61f"
  },
  {
    "url": "assets/js/19.ed558261.js",
    "revision": "feb04635395d058b39fbde3b09de5d07"
  },
  {
    "url": "assets/js/20.397627d2.js",
    "revision": "3e723f6518c7e975348ee2f6ac9e349b"
  },
  {
    "url": "assets/js/21.a9e6b5bb.js",
    "revision": "94702d00cafa08a18c55cfe48322dfae"
  },
  {
    "url": "assets/js/22.190b77a9.js",
    "revision": "8e875dd740e0ebad43414d6799e25233"
  },
  {
    "url": "assets/js/23.6bd2e1f5.js",
    "revision": "12e5b3a155e47b48e3d77eededbc9344"
  },
  {
    "url": "assets/js/24.da309559.js",
    "revision": "b3a5d8e2afba99b4a47db9691f1801ab"
  },
  {
    "url": "assets/js/25.cbad931f.js",
    "revision": "8e2b3f2217ee65e25d2830283335c275"
  },
  {
    "url": "assets/js/26.a5148731.js",
    "revision": "bd2deb8521ad3557f99e089348d74a49"
  },
  {
    "url": "assets/js/27.fe311f2f.js",
    "revision": "703449a86423a6482064a6e00f036cde"
  },
  {
    "url": "assets/js/4.12bd82d8.js",
    "revision": "289cbd78523588c8f4d08a56eb43c444"
  },
  {
    "url": "assets/js/5.6782f4cb.js",
    "revision": "ed3e4cf1038faed6b3203bfbd80433f8"
  },
  {
    "url": "assets/js/6.6f74ad80.js",
    "revision": "a7795a245c7149c1d6e5ba681593a355"
  },
  {
    "url": "assets/js/7.e8ff8547.js",
    "revision": "bc2d6ef4ed0351d88e35e361647e483f"
  },
  {
    "url": "assets/js/8.510baa03.js",
    "revision": "44a74706683a9c53a5fe551c4f7da959"
  },
  {
    "url": "assets/js/9.7380d4f4.js",
    "revision": "5fb7924d1f9833be8cfa62600bdf9bf0"
  },
  {
    "url": "assets/js/app.8cb78e52.js",
    "revision": "19291357017ff1d15a54ddbc8c76850a"
  },
  {
    "url": "assets/js/vendors~docsearch.cd0a15ba.js",
    "revision": "c57f9db397e9a6ea2ac0bf6e7f37ad9a"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "10f3f447bc55a8cd12c66773b1a1a529"
  },
  {
    "url": "docs/crop.html",
    "revision": "ae4feab6c3cb9db8cbf6af3b878ea95e"
  },
  {
    "url": "docs/fit.html",
    "revision": "8aed3e8c9c333986cbc4870e83af278a"
  },
  {
    "url": "docs/format.html",
    "revision": "d88c720605ddbf2a75b6e3076f48b6a6"
  },
  {
    "url": "docs/index.html",
    "revision": "c100b2824e91e8085a2eab7442560936"
  },
  {
    "url": "docs/mask.html",
    "revision": "181222939b96fd2771695e4f82868dcb"
  },
  {
    "url": "docs/orientation.html",
    "revision": "11abb9e4f459016ec608df85e438599a"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "1a1ab4c0712a2e7622ebd78c5e3a9777"
  },
  {
    "url": "docs/size.html",
    "revision": "7c239d643939676cfb4ebb980c51bc17"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "243fc311837a765ee09ce4ed049f7339"
  },
  {
    "url": "faq/index.html",
    "revision": "bd7ac1040ccda7c0764b71a51bb003e5"
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
    "revision": "bcdc31162f853a41e6e6af1a1f6bbb23"
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
    "revision": "cd15b02d12336a2e245c5895ffb714f3"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "0fdcae25c3405872780f93825efecc54"
  },
  {
    "url": "news/index.html",
    "revision": "c0d429f889d7cb8c6993d408a9d82702"
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
