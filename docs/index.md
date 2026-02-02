# Introduction

**wsrv**.nl is an image **cache** & **resize** service. Our servers resize your image, cache it worldwide,
and display it.

- We support a good range of image formats, including JPEG, PNG, BMP, GIF, TIFF, WebP, PDF and SVG.
  - There's even support for [animated WebP and GIF images](format.md#number-of-pages).
- We support IPv6, [serving dual stack](https://ipv6-test.com/validate.php?url=wsrv.nl), and supporting [IPv6-only origin hosts](/?url=ipv6.google.com/images/ipv6_logo.gif&n=-1){target="_blank"}.
- For secure connections over TLS/SSL, you can use [https://wsrv.nl/](/).
  - This can be very useful for embedding HTTP images on HTTPS websites. HTTPS origin hosts can be
    used by [prefixing the hostname with https://](https://github.com/weserv/images/issues/33).
- The CDN is provided by [Cloudflare](https://www.cloudflare.com/). Images are being cached and delivered straight from
  [300+ global datacenters](https://www.cloudflare.com/network/). This ensures the fastest load times and best performance.

## How it works

You pass the image URL and a set of parameters. wsrv.nl will then fetch the image, resize it,
cache it and display it. The next time the request comes, it will serve the cached version.

::: tip
If the URL includes a querystring, you'll need to ensure that it's properly URL-encoded, replacing
`?` with `%3F` and `&` with `%26`, respectively.
:::

::: code-group

```html [HTML]
<!-- wsrv.nl/lichtenstein.jpg -->
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300">
```

```md [Markdown]
<!--- wsrv.nl/lichtenstein.jpg --->
![Lichtenstein](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300)
```

:::
