# Introduction

Images.**weserv**.nl is an image **cache** & **resize** service. Our servers resize your image, cache it worldwide,
and display it.

- We support a good range of image formats, including JPEG, PNG, BMP, GIF, TIFF, WebP, PDF and SVG.
  - There's even support for [animated WebP and GIF images](format.md#number-of-pages).
- We support IPv6, [serving dual stack](http://ipv6-test.com/validate.php?url=images.weserv.nl), and supporting [IPv6-only origin hosts](/?url=ipv6.google.com/logos/logo.gif).
- For secure connections over TLS/SSL, you can use [https://images.weserv.nl/](/).
  - This can be very useful for embedding HTTP images on HTTPS websites. HTTPS origin hosts can be
    used by [prefixing the hostname with https://](https://github.com/weserv/images/issues/33).
- The CDN is provided by [Cloudflare](https://www.cloudflare.com/). Images are being cached and delivered straight from  
  [190+ global datacenters](https://www.cloudflare.com/network/). This ensures the fastest load times and best performance.

## How it works

You pass the image URL and a set of parameters. images.weserv.nl will then fetch the image, resize it,
cache it and display it. The next time the request comes, it will serve the cached version.

<code-group>
<code-block title="HTML" active>
```html
<!-- images.weserv.nl/lichtenstein.jpg -->
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300">
```
</code-block>

<code-block title="Markdown">
```md
<!--- images.weserv.nl/lichtenstein.jpg --->
![Lichtenstein](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300)
```
</code-block>
</code-group>
