---
layout: home
title: wsrv.nl
titleTemplate: wsrv.nl
head:
  - - meta
    - name: twitter:title
      content: Image cache & resize service
  - - meta
    - name: twitter:description
      content: Manipulate images on-the-fly with a worldwide cache
  - - meta
    - property: og:title
      content: Image cache & resize service
  - - meta
    - property: og:description
      content: Manipulate images on-the-fly with a worldwide cache
hero:
  image:
    light: /logo.svg
    dark: /logo-dark.svg
  name: wsrv.nl
  text: An image cache & resize service
  tagline: Manipulate images on-the-fly with a worldwide cache.
  actions:
    - theme: brand
      text: Read the documentation →
      link: /docs/introduction.html
    - theme: alt
      text: View on GitHub
      link: https://github.com/weserv/images
features:
  - title: Crazy Fast
    icon: <i class="las la-fw la-fighter-jet"></i>
    details: Performance is not just an afterthought, we baked it in from the start!
  - title: Awesome Technology
    icon: <i class="las la-fw la-cubes"></i>
    details: wsrv.nl employs best-in-class technologies such as nginx and libvips.
  - title: Free / Open Source
    icon: <i class="las la-fw la-money-bill-wave-alt"></i>
    details: wsrv.nl is an open source project, so you can spend your money on other stuff.
---

### Your images unchained

<a href="https://www.cloudflare.com/" title="CDN provided by Cloudflare" target="_blank">
  <Image
    class="cloudflare-logo"
    width="280"
    height="80"
    alt="Cloudflare logo" 
    align="right"
    :image="{ light: '/cloudflare-logo.svg', dark: '/cloudflare-logo-dark.svg' }" 
   />
</a>

The CDN is provided by [Cloudflare](https://www.cloudflare.com/). Images are being cached and delivered straight from
[300+ global datacenters](https://www.cloudflare.com/network/). This ensures the fastest load times and best performance.

### Widely used

On average, we resize 6 million (6&times;10<sup>6</sup>) images per hour, which generates around 400TB of outbound traffic per month.

### Features

<div class="features">
  <section class="feature">
    <a href="https://www.cloudflare.com/" target="_blank">
      <i class="las la-fw la-rocket"></i>
      <h3 class="title small">CDN Caching</h3>
    </a>
  </section>
  <section class="feature">
    <a href="https://github.com/weserv/images/tree/5.x/docker" target="_blank">
      <i class="lab la-fw la-docker"></i>
      <h3 class="title small">Simple Install</h3>
    </a>
  </section>
  <section class="feature">
    <a href="https://github.com/libvips/libvips" target="_blank">
      <i class="las la-fw la-image"></i>
      <h3 class="title small">Fast Image Processing</h3>
    </a>
  </section>
  <section class="feature">
    <a href="https://github.com/weserv/images" target="_blank">
      <i class="lab la-fw la-github"></i>
      <h3 class="title small">On GitHub</h3>
    </a>
  </section>
</div>
