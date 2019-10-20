(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{268:function(e,t,r){"use strict";r.r(t);var a=r(4),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"introducing-api-version-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introducing-api-version-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Introducing API version 5")]),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),r("p",[e._v("We've just released API version 5, which contains many enhancements and new features. Since the\nintroduction of "),r("router-link",{attrs:{to:"/news/2018/07/29/introducing-api-4/"}},[e._v("API version 4")]),e._v(", our website traffic has tripled. Nowadays we handle 6 million requests per\nhour. It's an accomplishment that we're very proud of, handling such large amounts of traffic is a great\nchallenge. This service would not have been reliable without the CDN provided by "),r("a",{attrs:{href:"https://www.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudflare"),r("OutboundLink")],1),e._v(" and\neffective software (such as "),r("a",{attrs:{href:"https://nginx.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/libvips/libvips",target:"_blank",rel:"noopener noreferrer"}},[e._v("libvips"),r("OutboundLink")],1),e._v(").")],1),r("p",[e._v("Here's a summary of the changes. To maintain backward compatibility, all parameters listed on API 4 still\nwork on API 5. The source code is available on the "),r("a",{attrs:{href:"https://github.com/weserv/images/tree/5.x",target:"_blank",rel:"noopener noreferrer"}},[e._v("5.x branch"),r("OutboundLink")],1),e._v(", this will become the default branch in\nthe future.")]),r("h2",{attrs:{id:"luajit-→-c"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#luajit-→-c","aria-hidden":"true"}},[e._v("#")]),e._v(" LuaJIT → C++")]),r("p",[e._v("With API version 5 we've rewrote the entire codebase to C++ as a nginx module. The reason for this\nrewrite is to tighten the control over memory allocation. We found out that the current garbage collector\n(GC) in LuaJIT 2, which is essentially the same as the one in vanilla Lua 5.1, is not very fast for large\nworkloads. "),r("a",{attrs:{href:"http://wiki.luajit.org/New-Garbage-Collector",target:"_blank",rel:"noopener noreferrer"}},[e._v("A new GC is already proposed"),r("OutboundLink")],1),e._v(" for LuaJIT 3.0, but it has not yet been implemented.")]),r("p",[e._v("We also worried about the future of LuaJIT, given that "),r("a",{attrs:{href:"https://www.freelists.org/post/luajit/Looking-for-new-LuaJIT-maintainers",target:"_blank",rel:"noopener noreferrer"}},[e._v("the author of LuaJIT is stepping down"),r("OutboundLink")],1),e._v(". It is\ndoubtful whether anyone will fill his shoes. The new C++ codebase ensures that we can continue our\nservice for many years to come.")]),r("h2",{attrs:{id:"revamped-front-end"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#revamped-front-end","aria-hidden":"true"}},[e._v("#")]),e._v(" Revamped front-end")]),r("p",[e._v("The old single index page had to be improved. We've completely revamped the front-end using\n"),r("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(", which allows us to write the documentation as regular Markdown files.")]),r("p",[e._v("The documentation is available in our "),r("a",{attrs:{href:"https://github.com/weserv/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("weserv/docs"),r("OutboundLink")],1),e._v(" GitHub repository.")]),r("h2",{attrs:{id:"improved-rate-limiter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#improved-rate-limiter","aria-hidden":"true"}},[e._v("#")]),e._v(" Improved rate limiter")]),r("p",[e._v("We have improved our "),r("a",{attrs:{href:"https://redis.io/commands/incr#pattern-rate-limiter-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("basic Redis rate limiter"),r("OutboundLink")],1),e._v(". Our new rate limiter is written in C and runs inside a\nRedis backed nginx module. The implementation is based on the "),r("a",{attrs:{href:"https://github.com/onsigntv/redis-rate-limiter",target:"_blank",rel:"noopener noreferrer"}},[e._v("onsigntv/redis-rate-limiter"),r("OutboundLink")],1),e._v(" module,\nwhich offers a straightforward implementation of the fairly sophisticated "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Generic_cell_rate_algorithm",target:"_blank",rel:"noopener noreferrer"}},[e._v("generic cell rate algorithm"),r("OutboundLink")],1),e._v(",\nin 130 lines of C, without external dependencies.")]),r("p",[e._v("An additional feature of this module is that it's easy to check show your current rate limit quota:")]),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -i https://images.weserv.nl/quota\nHTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("200")]),e._v(" OK\nDate: Sun, 01 Sep "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v(" 00:00:00 GMT\nX-RateLimit-Limit: "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("700")]),e._v("\nX-RateLimit-Remaining: "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("700")]),e._v("\nX-RateLimit-Reset: "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"X-RateLimit-Limit"')]),e._v(":700, "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"X-RateLimit-Remaining"')]),e._v(":700, "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"X-RateLimit-Reset"')]),e._v(":0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),r("p",[e._v("Our limit is around 700 images per 3 minutes. Accessing this endpoint does not count against\nyour rate limit.")])]),r("p",[e._v("The source code of the rate limiter can be viewed on GitHub: "),r("a",{attrs:{href:"https://github.com/weserv/rate-limit-nginx-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("weserv/rate-limit-nginx-module"),r("OutboundLink")],1),e._v(".")]),r("h2",{attrs:{id:"support-for-animated-images"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#support-for-animated-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Support for animated images")]),r("p",[e._v("Thanks to "),r("a",{attrs:{href:"https://libvips.github.io/libvips/2019/04/22/What's-new-in-8.8.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("libvips 8.8"),r("OutboundLink")],1),e._v(", we've now enabled support for "),r("router-link",{attrs:{to:"/docs/format.html#number-of-pages"}},[e._v("animated WebP and GIF images")]),e._v(".")],1),r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("src")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("//images.weserv.nl/?url=ory.weserv.nl/banana.webp&h=300&output=gif&n=-1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),r("p",[r("img",{attrs:{src:"/?url=ory.weserv.nl/banana.webp&h=300&output=gif&n=-1",alt:"Animated image"}})]),r("h2",{attrs:{id:"support-for-loading-heic-images"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#support-for-loading-heic-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Support for loading HEIC images")]),r("p",[e._v("We've added support for loading HEIC-images. This is the new image compression standard being used by\nApple and others. HEIC files are typically half the size of JPEG files at similar quality.")]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),r("p",[e._v("Saving to HEIC-images isn't supported due to patent issues. Hopefully the use of royalty-free\nencoding formats such as "),r("a",{attrs:{href:"https://aomediacodec.github.io/av1-avif/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AVIF"),r("OutboundLink")],1),e._v(" will become more widely used in the future.")])]),r("h2",{attrs:{id:"css-inspired-fit-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-inspired-fit-parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" CSS-inspired fit parameters")]),r("p",[e._v("We've deprecated the confusing fit ("),r("code",[e._v("&t=")]),e._v(") parameters ("),r("code",[e._v("fit")]),e._v(", "),r("code",[e._v("fitup")]),e._v(", "),r("code",[e._v("square")]),e._v(", "),r("code",[e._v("squaredown")]),e._v(", "),r("code",[e._v("absolute")]),e._v("\nand "),r("code",[e._v("letterbox")]),e._v(") and aligned it with the CSS terminology.")]),r("p",[e._v("Here's a handy table to help users migrating to these new CSS-inspired parameters:")]),r("table",[r("thead",[r("tr",[r("th",[e._v("Before")]),r("th",[e._v("After")])])]),r("tbody",[r("tr",[r("td",[r("code",[e._v("&t=fit")])]),r("td",[r("router-link",{attrs:{to:"/docs/fit.html#inside"}},[r("code",[e._v("&fit=inside&we")])])],1)]),r("tr",[r("td",[r("code",[e._v("&t=fitup")])]),r("td",[r("router-link",{attrs:{to:"/docs/fit.html#inside"}},[r("code",[e._v("&fit=inside")])])],1)]),r("tr",[r("td",[r("code",[e._v("&t=square")])]),r("td",[r("router-link",{attrs:{to:"/docs/fit.html#cover"}},[r("code",[e._v("&fit=cover")])])],1)]),r("tr",[r("td",[r("code",[e._v("&t=squaredown")])]),r("td",[r("router-link",{attrs:{to:"/docs/fit.html#cover"}},[r("code",[e._v("&fit=cover&we")])])],1)]),r("tr",[r("td",[r("code",[e._v("&t=absolute")])]),r("td",[r("router-link",{attrs:{to:"/docs/fit.html#fill"}},[r("code",[e._v("&fit=fill")])])],1)]),r("tr",[r("td",[r("code",[e._v("&t=letterbox")])]),r("td",[r("router-link",{attrs:{to:"/docs/fit.html#contain"}},[r("code",[e._v("&fit=contain")])])],1)])])]),r("p",[e._v("The new without enlargement parameter ("),r("router-link",{attrs:{to:"/docs/fit.html#without-enlargement"}},[r("code",[e._v("&we")])]),e._v(") can be used in combination with all "),r("router-link",{attrs:{to:"/docs/fit.html"}},[r("code",[e._v("&fit=")])]),e._v("\nparameters. We also introduced a new parameter named "),r("router-link",{attrs:{to:"/docs/fit.html#outside"}},[r("code",[e._v("&fit=outside")])]),e._v(", which will resize an image to\nbe as small as possible while ensuring its dimensions are greater than or equal to both those specified.")],1),r("h2",{attrs:{id:"tinting-images"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tinting-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Tinting images")]),r("p",[e._v("We introduced a new parameter named "),r("router-link",{attrs:{to:"/docs/adjustment.html#tint"}},[r("code",[e._v("&tint")])]),e._v(" to tint an image using the provided chroma\nwhile preserving the image luminance.")],1),r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("src")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("//images.weserv.nl/?url=ory.weserv.nl/lichtenstein.jpg&w=300&tint=red"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),r("p",[r("img",{attrs:{src:"/?url=ory.weserv.nl/lichtenstein.jpg&w=300&tint=red",alt:"Tint"}})]),r("h2",{attrs:{id:"arbitrary-rotation-angles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arbitrary-rotation-angles","aria-hidden":"true"}},[e._v("#")]),e._v(" Arbitrary rotation angles")]),r("p",[e._v("Instead of only being able to rotate multiples of 90 degrees, any angle can now be given. The remaining\nspace can be filled with a background color by using "),r("code",[e._v("&rbg=")]),e._v(". To reflect this change, the "),r("code",[e._v("&or=")]),e._v("\nparameter has been renamed to "),r("router-link",{attrs:{to:"/docs/orientation.html#rotation"}},[r("code",[e._v("&ro=")])]),e._v(".")],1),r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("src")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("//images.weserv.nl/?url=ory.weserv.nl/lichtenstein.jpg&h=300&ro=45"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),r("p",[r("img",{attrs:{src:"/?url=ory.weserv.nl/lichtenstein.jpg&h=300&ro=45",alt:"Rotation"}})]),r("h2",{attrs:{id:"adaptive-filter-and-compression-level"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adaptive-filter-and-compression-level","aria-hidden":"true"}},[e._v("#")]),e._v(" Adaptive filter and compression level")]),r("p",[e._v("To minimize the size of PNG images and thus reduce their load time we've introduced some new\nparameters named "),r("router-link",{attrs:{to:"/docs/format.html#adaptive-filter"}},[r("code",[e._v("&af")])]),e._v(" and "),r("router-link",{attrs:{to:"/docs/format.html#compression-level"}},[r("code",[e._v("&l")])]),e._v(".")],1),r("h2",{attrs:{id:"metadata-output"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#metadata-output","aria-hidden":"true"}},[e._v("#")]),e._v(" Metadata output")]),r("p",[e._v("To quickly view the metadata of an image, we've added support for "),r("router-link",{attrs:{to:"/docs/format.html#output"}},[r("code",[e._v("&output=json")])]),e._v(".\nSee "),r("a",{attrs:{href:"/?url=ory.weserv.nl/zebra.jpg&output=json"}},[e._v("here")]),e._v(" for an example.")],1),r("h2",{attrs:{id:"flip-flop-an-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flip-flop-an-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Flip / flop an image")]),r("p",[e._v("We've added support for flipping an image "),r("router-link",{attrs:{to:"/docs/orientation.html#flop"}},[e._v("horizontally")]),e._v(" or "),r("router-link",{attrs:{to:"/docs/orientation.html#flip"}},[e._v("vertically")]),e._v(". You can combine these parameters\nto flip along both axes.")],1),r("h2",{attrs:{id:"json-for-error-messages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#json-for-error-messages","aria-hidden":"true"}},[e._v("#")]),e._v(" JSON for error messages")]),r("p",[e._v("Instead of returning our error messages as plain text, you'll now receive a JSON-formatted response with\nthe appropriate "),r("code",[e._v("application/json")]),e._v(" MIME-type. This makes it easier to integrate our service into any\ntype of website or application.")]),r("h2",{attrs:{id:"other-improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-improvements","aria-hidden":"true"}},[e._v("#")]),e._v(" Other improvements")]),r("ul",[r("li",[e._v("Improve Docker image and deployment ("),r("a",{attrs:{href:"https://github.com/weserv/images/issues/180",target:"_blank",rel:"noopener noreferrer"}},[e._v("#180"),r("OutboundLink")],1),e._v(").")]),r("li",[e._v("A pre-resize crop behaviour ("),r("router-link",{attrs:{to:"/docs/crop.html#rectangle-crop"}},[r("code",[e._v("&precrop")])]),e._v(" - "),r("a",{attrs:{href:"https://github.com/weserv/images/issues/176",target:"_blank",rel:"noopener noreferrer"}},[e._v("#176"),r("OutboundLink")],1),e._v(").")],1),r("li",[e._v("Letterboxing without oversampling ("),r("router-link",{attrs:{to:"/docs/fit.html#without-enlargement"}},[r("code",[e._v("&fit=contain&we")])]),e._v(" - "),r("a",{attrs:{href:"https://github.com/weserv/images/issues/173",target:"_blank",rel:"noopener noreferrer"}},[e._v("#173"),r("OutboundLink")],1),e._v(").")],1),r("li",[e._v("Retrieving the largest/smallest page from a multi-resolution image ("),r("router-link",{attrs:{to:"/docs/format.html#page"}},[r("code",[e._v("&page=-1")])]),e._v(" /\n"),r("router-link",{attrs:{to:"/docs/format.html#page"}},[r("code",[e._v("&page=-2")])]),e._v(" - "),r("a",{attrs:{href:"https://github.com/weserv/images/issues/170",target:"_blank",rel:"noopener noreferrer"}},[e._v("#170"),r("OutboundLink")],1),e._v(").")],1),r("li",[e._v("Defining the "),r("code",[e._v("max-age")]),e._v(" of the "),r("code",[e._v("Cache-Control")]),e._v(" HTTP-header ("),r("router-link",{attrs:{to:"/docs/format.html#cache-control"}},[r("code",[e._v("&maxage=31d")])]),e._v(" - "),r("a",{attrs:{href:"https://github.com/weserv/images/issues/186",target:"_blank",rel:"noopener noreferrer"}},[e._v("#186"),r("OutboundLink")],1),e._v(").")],1),r("li",[e._v("Applying a duotone filter to an image ("),r("router-link",{attrs:{to:"/docs/adjustment.html#filter"}},[r("code",[e._v("&filt=duotone")])]),e._v(").")],1),r("li",[e._v("Background color when using "),r("code",[e._v("&fit=contain")]),e._v(" ("),r("router-link",{attrs:{to:"/docs/fit.html#contain"}},[r("code",[e._v("&cbg=")])]),e._v(").")],1),r("li",[r("code",[e._v("&a=crop-x%-y%")]),e._v(" has been renamed to "),r("router-link",{attrs:{to:"/docs/crop.html#focal-point"}},[r("code",[e._v("&a=focal-x%-y%")])]),e._v(".")],1),r("li",[r("code",[e._v("&errorredirect=")]),e._v(" has been renamed to "),r("router-link",{attrs:{to:"/docs/format.html#default-image"}},[r("code",[e._v("&default=")])]),e._v(".")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);