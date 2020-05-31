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
    "revision": "e802234aa37edc577c8aa2fd5efba06f"
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
    "url": "assets/css/0.styles.936d81a9.css",
    "revision": "193f30c3545facc12992263247c15699"
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
    "url": "assets/js/1.768839dd.js",
    "revision": "62e7cd4b00b306f297cd1ad27d68a0c0"
  },
  {
    "url": "assets/js/10.0026a82c.js",
    "revision": "24b4d943acaee09d2178245057700a32"
  },
  {
    "url": "assets/js/11.bc1542c4.js",
    "revision": "58d3a126b18a194c51c9a3c2944e9c95"
  },
  {
    "url": "assets/js/12.9d357731.js",
    "revision": "8dcbc2823d20c9d6e4e9a5259763e930"
  },
  {
    "url": "assets/js/13.2db422b5.js",
    "revision": "d1053ead25975d6ca287d7539193d289"
  },
  {
    "url": "assets/js/14.f5e45516.js",
    "revision": "79f24d13bcb133600fd35cbd2db6c60e"
  },
  {
    "url": "assets/js/15.d3820615.js",
    "revision": "141748139a567de9738d95353ab82f6c"
  },
  {
    "url": "assets/js/16.c459b680.js",
    "revision": "ff4b795488480ef07e8ac7bb8c5c42d8"
  },
  {
    "url": "assets/js/17.04ab0eb9.js",
    "revision": "32e7af46fa3683a4d88e5e41cc8b2fe4"
  },
  {
    "url": "assets/js/18.e97200af.js",
    "revision": "f41acf569de89f1927eaff39472fd57d"
  },
  {
    "url": "assets/js/19.2d6c12ce.js",
    "revision": "20a75077f7c7941d94a92596f1dfe192"
  },
  {
    "url": "assets/js/20.67bd5aa7.js",
    "revision": "ef540878b3b6c26c39e7715efa0c829e"
  },
  {
    "url": "assets/js/21.b06efb8c.js",
    "revision": "7f70b0ab2521b5c2f92ad247963c222b"
  },
  {
    "url": "assets/js/22.f61006a1.js",
    "revision": "c95e74396434d28b7161d62eb111ac3e"
  },
  {
    "url": "assets/js/23.f6f4e30d.js",
    "revision": "225147e4baad5bc25924f1e965b953a1"
  },
  {
    "url": "assets/js/24.26a09c30.js",
    "revision": "502e0e8a83bd07fb40ed1b7ed425dbaa"
  },
  {
    "url": "assets/js/25.a3d1c475.js",
    "revision": "76c8db22d8f74031c59e338308d623b5"
  },
  {
    "url": "assets/js/4.2d3a15f4.js",
    "revision": "046cd570be43cc032776d14c8ef7e7fe"
  },
  {
    "url": "assets/js/5.5e4f61c7.js",
    "revision": "a0198c6ae0c9b879798168a1482200f1"
  },
  {
    "url": "assets/js/6.89e6b7d2.js",
    "revision": "b9931e38353e7a0dfb61868bde79b654"
  },
  {
    "url": "assets/js/7.8ca1621e.js",
    "revision": "56bed18eac7082a5e2b76a1cb998e959"
  },
  {
    "url": "assets/js/8.04a8f45b.js",
    "revision": "a5b21633cf52b154288ad5bb885d2449"
  },
  {
    "url": "assets/js/9.45dad42d.js",
    "revision": "0ffa65675e3a503eb37a502a4683530e"
  },
  {
    "url": "assets/js/app.464da297.js",
    "revision": "b88e2de63ee712ecf8b3629b6f831b06"
  },
  {
    "url": "assets/js/vendors~docsearch.447e514f.js",
    "revision": "6fd8d3dbfba3955ec30a910e5cb721aa"
  },
  {
    "url": "cloudflare-logo-dark.svg",
    "revision": "baf7eb0ce8dbd7d2bed1e0828b7c3e80"
  },
  {
    "url": "docs/adjustment.html",
    "revision": "b6f8272af6206993ef7c9b52811ac7f7"
  },
  {
    "url": "docs/crop.html",
    "revision": "c995819d8ace7d03c5986ebe1adaa685"
  },
  {
    "url": "docs/fit.html",
    "revision": "7c9773a9e2487be7045d0b1db18627c9"
  },
  {
    "url": "docs/format.html",
    "revision": "cc2aaf3253f0ce026107bef8e2f52344"
  },
  {
    "url": "docs/index.html",
    "revision": "e0824af34f6d46e100e9b1910d819a04"
  },
  {
    "url": "docs/mask.html",
    "revision": "fef1a27e1f0c0c03cc1e6e6d3a5ef1e7"
  },
  {
    "url": "docs/orientation.html",
    "revision": "252f561d80871e254e5cd9e62e1a85db"
  },
  {
    "url": "docs/quick-reference.html",
    "revision": "53f9bf59e1342388fc4011c9bb83c26e"
  },
  {
    "url": "docs/size.html",
    "revision": "09b174a4836453f0c8eca156696e96e6"
  },
  {
    "url": "docs/supported-colors.html",
    "revision": "9ceb13bdf177652d03a9c0b14ba3acd5"
  },
  {
    "url": "faq/index.html",
    "revision": "f72f98ddc82b0bdb0e5e787908df8d01"
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
    "revision": "510987cdfb4bc744e13741012a4e9a01"
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
    "revision": "afe9edfe4ab733c3e6c0f73ed7c27713"
  },
  {
    "url": "news/2019/09/01/introducing-api-5/index.html",
    "revision": "ddee85522975608f9ce660c0c7e98788"
  },
  {
    "url": "news/index.html",
    "revision": "23f749b5e62269452ec36ccc60fc32c3"
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
