---
title: Introducing API version 5
editLink: false
date: 2019-09-01
summary: Rewrote the entire codebase to C++, support for animated WebP and GIF images, plus many more improvements.
sidebar: auto
---

# Introducing API version 5

## Introduction
We've just released API version 5, which contains many enhancements and new features. Since the
introduction of [API version 4][version-4-post], our website traffic has tripled. Nowadays we handle 6 million requests per
hour. It's an accomplishment that we're very proud of, handling such large amounts of traffic is a great
challenge. This service would not have been reliable without the CDN provided by [Cloudflare][cloudflare] and
effective software (such as [nginx][nginx] and [libvips][libvips]).

Here's a summary of the changes. To maintain backward compatibility, all parameters listed on API 4 still
work on API 5. The source code is available on the [5.x branch][5.x-branch], this will become the default branch in
the future.

## LuaJIT → C++
With API version 5 we've rewrote the entire codebase to C++ as a nginx module. The reason for this
rewrite is to tighten the control over memory allocation. We found out that the current garbage collector
(GC) in LuaJIT 2, which is essentially the same as the one in vanilla Lua 5.1, is not very fast for large
workloads. [A new GC is already proposed][luajit-new-gc] for LuaJIT 3.0, but it has not yet been implemented.

We also worried about the future of LuaJIT, given that [the author of LuaJIT is stepping down][luajit-maintenance]. It is
doubtful whether anyone will fill his shoes. The new C++ codebase ensures that we can continue our
service for many years to come.

## Revamped front-end
The old single index page had to be improved. We've completely revamped the front-end using
[VuePress][vuepress], which allows us to write the documentation as regular Markdown files.

The documentation is available in our [weserv/docs][weserv-docs] GitHub repository.

## Improved rate limiter
We have improved our [basic Redis rate limiter](https://redis.io/commands/incr#pattern-rate-limiter-2). Our new rate limiter is written in C and runs inside a
Redis backed nginx module. The implementation is based on the [onsigntv/redis-rate-limiter][onsigntv/redis-rate-limiter] module,
which offers a straightforward implementation of the fairly sophisticated [generic cell rate algorithm][gcra],
in 130 lines of C, without external dependencies.

An additional feature of this module is that it's easy to check show your current rate limit quota:
```bash
$ curl -i https://images.weserv.nl/quota
HTTP/1.1 200 OK
Date: Sun, 01 Sep 2019 00:00:00 GMT
X-RateLimit-Limit: 700
X-RateLimit-Remaining: 700
X-RateLimit-Reset: 0

{"X-RateLimit-Limit":700, "X-RateLimit-Remaining":700, "X-RateLimit-Reset":0}
```

::: tip
Our limit is around 700 images per 3 minutes. Accessing this endpoint does not count against
your rate limit.
:::

The source code of the rate limiter can be viewed on GitHub: [weserv/rate-limit-nginx-module][rate-limit-nginx-module].

## Support for animated images
Thanks to [libvips 8.8][libvips-8.8], we've now enabled support for [animated WebP and GIF images][n-pages].

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1">
```
[![Animated image](/static/banana.webp?h=300&output=gif&n=-1)](/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1)

## Support for loading HEIC images
We've added support for loading HEIC-images. This is the new image compression standard being used by
Apple and others. HEIC files are typically half the size of JPEG files at similar quality.

::: tip
Saving to HEIC-images isn't supported due to patent issues. Hopefully the use of royalty-free
encoding formats such as [AVIF][avif] will become more widely used in the future.
:::

## CSS-inspired fit parameters
We've deprecated the confusing fit (`&t=`) parameters (`fit`, `fitup`, `square`, `squaredown`, `absolute`
and `letterbox`) and aligned it with the CSS terminology.

Here's a handy table to help users migrating to these new CSS-inspired parameters:

| Before          | After                          |
| ----------------|--------------------------------|
| `&t=fit`        | [`&fit=inside&we`][fit-inside] |
| `&t=fitup`      | [`&fit=inside`][fit-inside]    |
| `&t=square`     | [`&fit=cover`][fit-cover]      |
| `&t=squaredown` | [`&fit=cover&we`][fit-cover]   |
| `&t=absolute`   | [`&fit=fill`][fit-fill]        |
| `&t=letterbox`  | [`&fit=contain`][fit-contain]  |

The new without enlargement parameter ([`&we`][without-enlargement]) can be used in combination with all [`&fit=`][fit]
parameters. We also introduced a new parameter named [`&fit=outside`][fit-outside], which will resize an image to
be as small as possible while ensuring its dimensions are greater than or equal to both those specified.

## Tinting images
We introduced a new parameter named [`&tint`][tint] to tint an image using the provided chroma
while preserving the image luminance.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&tint=red">
```
[![Tint](/static/lichtenstein.jpg?w=300&tint=red)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&tint=red)

## Arbitrary rotation angles
Instead of only being able to rotate multiples of 90 degrees, any angle can now be given. The remaining
space can be filled with a background color by using `&rbg=`. To reflect this change, the `&or=`
parameter has been renamed to [`&ro=`][rotation].

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&h=300&ro=45">
```
[![Rotation](/static/lichtenstein.jpg?h=300&ro=45)](/?url=images.weserv.nl/lichtenstein.jpg&h=300&ro=45)

## Adaptive filter and compression level
To minimize the size of PNG images and thus reduce their load time we've introduced some new
parameters named [`&af`][adaptive-filter] and [`&l`][compression-level].

## Metadata output
To quickly view the metadata of an image, we've added support for [`&output=json`][output].
See [here](/?url=images.weserv.nl/zebra.jpg&output=json) for an example.

## Flip / flop an image
We've added support for flipping an image [horizontally][flop] or [vertically][flip]. You can combine these parameters
to flip along both axes.

## JSON for error messages
Instead of returning our error messages as plain text, you'll now receive a JSON-formatted response with
the appropriate `application/json` MIME-type. This makes it easier to integrate our service into any
type of website or application.

## Other improvements
- Improve Docker image and deployment ([#180](https://github.com/weserv/images/issues/180)).
- A pre-resize crop behaviour ([`&precrop`][rectangle-crop] - [#176](https://github.com/weserv/images/issues/176)).
- Letterboxing without oversampling ([`&fit=contain&we`][without-enlargement] - [#173](https://github.com/weserv/images/issues/173)).
- Retrieving the largest/smallest page from a multi-resolution image ([`&page=-1`][page] /
  [`&page=-2`][page] - [#170](https://github.com/weserv/images/issues/170)).
- Defining the `max-age` of the `Cache-Control` HTTP-header ([`&maxage=31d`][cache-control] - [#186](https://github.com/weserv/images/issues/186)).
- Applying a duotone filter to an image ([`&filt=duotone`][filter]).
- Background color when using `&fit=contain` ([`&cbg=`][fit-contain]).
- `&a=crop-x%-y%` has been renamed to [`&a=focal-x%-y%`][focal-point].
- `&errorredirect=` has been renamed to [`&default=`][default-image].

[version-4-post]: /news/2018/07/29/introducing-api-4/
[cloudflare]: https://www.cloudflare.com/
[nginx]: https://nginx.org/
[libvips]: https://github.com/libvips/libvips
[vuepress]: https://vuepress.vuejs.org/
[weserv-docs]: https://github.com/weserv/docs
[5.x-branch]: https://github.com/weserv/images/tree/5.x
[luajit-new-gc]: http://wiki.luajit.org/New-Garbage-Collector
[luajit-maintenance]: https://www.freelists.org/post/luajit/Looking-for-new-LuaJIT-maintainers
[onsigntv/redis-rate-limiter]: https://github.com/onsigntv/redis-rate-limiter
[gcra]: https://en.wikipedia.org/wiki/Generic_cell_rate_algorithm
[rate-limit-nginx-module]: https://github.com/weserv/rate-limit-nginx-module
[libvips-8.8]: https://libvips.github.io/libvips/2019/04/22/What's-new-in-8.8.html
[n-pages]: ../docs/format.md#number-of-pages
[avif]: https://aomediacodec.github.io/av1-avif/
[fit]: ../docs/fit.md
[fit-inside]: ../docs/fit.md#inside
[fit-outside]: ../docs/fit.md#outside
[fit-cover]: ../docs/fit.md#cover
[fit-fill]: ../docs/fit.md#fill
[fit-contain]: ../docs/fit.md#contain
[without-enlargement]: ../docs/fit.md#without-enlargement
[tint]: ../docs/adjustment.md#tint
[rotation]: ../docs/orientation.md#rotation
[adaptive-filter]: ../docs/format.md#adaptive-filter
[compression-level]: ../docs/format.md#compression-level
[output]: ../docs/format.md#output
[flip]: ../docs/orientation.md#flip
[flop]: ../docs/orientation.md#flop
[filter]: ../docs/adjustment.md#filter
[focal-point]: ../docs/crop.md#focal-point
[default-image]: ../docs/format.md#default-image
[rectangle-crop]: ../docs/crop.md#rectangle-crop
[page]: ../docs/format.md#page
[cache-control]: ../docs/format.md#cache-control
