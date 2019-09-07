---
title: Introducing API version 4
editLink: false
date: 2018-07-29
summary: Switched to OpenResty and LuaJIT, introduced a friendlier URI parser, plus some new parameters were added.
sidebar: auto
---

# Introducing API version 4

## Preface
As the amount of traffic increases, we come up with solutions to handle the traffic. Nowadays we handle
2 million requests per hour (4 million on peak), which is great, but it requires proper server capacity and
effective software that scales with the amount of traffic that make this service reliable.

## OpenResty, LuaJIT and lua-vips
With API version 4 we decided to rewrite to complete code base to Lua and switch to [OpenResty][openresty],
which turns [nginx][nginx] and [LuaJIT][luajit] into a full-fledged scriptable web platform. For image handling and
manipulation we still use the [libvips][libvips] image processing library under the hood. We have only moved
from the [PHP-binding][php-vips] to the [Lua binding][lua-vips].

You may wonder why we did this; it's because OpenResty is robust, fast and scales with the amount of
traffic we are processing nowadays. One of the core benefits of OpenResty is that it is fully asynchronous
and that our code can be written directly inside Nginx without using PHP-FPM and FastCGI. The amazing
just-in-time (JIT) compilation and the integrated foreign function interface (FFI) in LuaJIT have also been
motives to move away from PHP.

Perhaps you've already noticed, [https://images.weserv.nl/](/) already states that API version 4 is
running. This is not a mistake, our A/B testing went so well that we decided (on time of writing) to
forward all traffic to API version 4.

## What has changed for the end user?
Absolutely nothing, all parameters listed on API 3 still work on API 4. The only thing you might notice is
when you process an image, that it will load faster. If you found something odd, don't hesitate to contact
us.

We track support tickets, issues and feature requests using the [GitHub issue tracker][issue-tracker].

## What has been added?
We introduced some new parameters and a more flexible URI parser.

### Masking
Controls the visible and non-visible area of the image. Previously the [`&mask`][mask] and [`&mtrim`][mask-trim] parameter
were named as `&shape` and `&strim`, it was renamed to make room for new mask features.

- Mask type [`&mask`][mask]. Sets the mask type from a predefined list of shapes:
    - `circle`
    - `ellipse`
    - `triangle`
    - `triangle-180`: Triangle tilted upside down
    - `pentagon`
    - `pentagon-180`: Pentagon tilted upside down
    - `hexagon`
    - `square`: Square tilted 45 degrees
    - `star`: 5-point star
    - `heart`
- Mask trim [`&mtrim`][mask-trim]. Removes the remaining whitespace from the mask.
- Mask background [`&mbg`][mask-bg]. Sets the background color of the mask.

### Flexible URI parser
With API 4 we are supporting URI's starting with `http://` and `https://`. Previously this would result in
an error to prevent BBCode parsers to fail on the double `http(s)://`-part. Because Markdown is
increasingly becoming the standard for user input, we decided to make the URI parser more flexible.
Note that we will still support `?url=ssl:…` and `?url=//…`-requests for backwards compatibility.

## Where can I view the code?
The code is available on the [4.x branch][4.x-branch], this will become the default branch in the future.

[openresty]: https://openresty.org/en/
[nginx]: https://nginx.org/
[luajit]: https://luajit.org/luajit.html
[libvips]: https://github.com/libvips/libvips
[php-vips]: https://github.com/libvips/php-vips
[lua-vips]: https://github.com/libvips/lua-vips
[issue-tracker]: https://github.com/weserv/images/issues
[mask]: ../docs/mask.md#mask-type
[mask-trim]: ../docs/mask.md#mask-trim
[mask-bg]: ../docs/mask.md#mask-background
[4.x-branch]: https://github.com/weserv/images/tree/4.x
