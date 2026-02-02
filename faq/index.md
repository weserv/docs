---
sidebar: false
---

# FAQ

## What is wsrv.nl?

wsrv.nl is an image service which is free for use to anyone, and we offer it as-is, it's just basic
image resizing, available to anyone, easy to use. We try to keep everyone as happy as we can.

## What is this page? Where do I find my question?

An FAQ is a list of frequently asked questions and answers. On this page we do our best to address
concerns, and explain some inner workings of our service.

You may scroll down to try to find your question. We also provide documentation you can read, and
there is always our [GitHub][weserv-github] to assist you.

## What is the history of this project?

The project started around 2007 on some spare servers. It was targeted at customers, to be used in
websites, web applications and mobile applications. By making it freely available, it saved traffic (through
compression) and offloaded the main servers, because customers didn't have to use poor self-written
scripts for image resizing. We gained experience with different user cases, and the separation from the
main servers enabled us to use the latest and greatest software stack.

## How are you funded?

Since 2011 wsrv.nl is privately funded, and used as a testbed for new techniques in resizing,
recognition and processing. Operating costs of the image service are very low. To prevent conflicts of
interest, we never accepted any (financial) compensation or donation since we started, and we don't
affiliate. Our intent is to keep the service running for many years to come.

Try it for yourself, if you experience problems or if it doesn't meet expectations, contact us.

## Are there any limitations?

There is a filter on the origin domain name. This means that we refuse to download images from certain
websites, to prevent our service from being blocked by others. This filtering is handled by [OpenDNS
domain tagging][opendns-domain-tagging].

Furthermore, there is a request limit per visitor IP for uncached requests, which is 2500 images per 10
minutes, after which the IP-address will be blocked for 1 hour.

We are not a fan of filtering or limitations, but even more so, we are not a fan of being filtered. It is
always possible to use our open source code, without filtering and limitations, on your own server.

## Is the code open source?

Yes, it is! It is distributed under the open source [BSD 3-Clause license][weserv-license], check our [GitHub][weserv-github] for more
information.

## How do I use your source code?

The easiest way is to use Docker. After you have installed Docker, follow the [Docker installation
instructions][weserv-docker] on using our source code with Docker.

## Can I sell your service?

Sure, the [BSD 3-Clause license][weserv-license] permits you to use our code in your product, but please don't use our
name in your marketing materials. Using the free service provided on wsrv.nl in your products
is also permitted, but be reminded that our support is best-effort.

If you really mean to sell our free service to other people as-is; I guess you're an amazing salesman, or
we are terrible at it, but we do enjoy some good competition!

## Do you keep any logs?

Yes, we do, for 7 days, after which they will be deleted automatically. The log is kept only on the server
that processes your request. We don't share these logs, or store them in any other place. More
information on how we collect, store and use any data, can be found in our [privacy policy][weserv-privacy-policy].

## Where are your servers located?

Our servers are located near Helsinki (Finland) and Falkenstein (Germany). We also use Cloudflare, [Cloudflare
has servers more close to your location][cloudflare-network], and they are fast.

For now, our servers are with [OVH][ovh], [Scaleway][scaleway] and [Hetzner][hetzner] this may change in the future. We've
always used servers located within the European Union, and continue to do so.

## What IP addresses does wsrv.nl use to fetch my images?

A complete list of the IPs we use for outbound traffic can be found [here][ip-list].

## How is your relationship with Cloudflare?

Wonderful, thanks for asking! Seriously, they provide awesome service, and are amazing to work with.

## What is your relationship with Cloudflare?

We've started this service in 2007, use [Cloudflare][cloudflare] since early 2012, and are on the free-tier since 2015.
Costs for the servers to support wsrv.nl are really low, and it serves as a great testbed for new
technologies. Cloudflare is based on the same [principles to provide their services][cloudflare-cdn].

## Is there any SLA or uptime guarantee for your service?

Uptime guarantees buy you nothing but expensive insurance policies. We've had 99,993% uptime on
average since 2007, all based on best-effort from all sides. Our service will not be the best fit for
everyone: if you need more guarantees, anything besides best-effort, we encourage you to use our
config and code as provided on our [GitHub][weserv-github], and build your own solution. We're always happy to help
with questions that may arise if you do so.

Besides, our service is free, so there is nothing to pay you back. If you want to help us, please do so by
reporting any bugs, problems, and/or reviewing our code!

## What companies are using this service?

Due to privacy concerns we're unable to share names, even if we were able to do so technically.

Our service is mainly used by ISP's, dealerships, real estate agencies, shops, social networks and mobile
app developers. Our reach is global, and we fetch images from 300.000 different unique domains.

## Are you passing any information to the origin server?

We don't send any details to the server where the original image is kept. All requests for the original
image are done anonymously from our servers. The only two things the request from our server has in
common with your request is: 1. the address of the original image, and 2. the time you make the request.

## Will you see my images? Can others see my images?

We are not interested in the images you ask us to process.

The only exception is if there is a technical oddity in an image which causes strange behavior on our
server(s). If you ask us to process such an image, we may try to copy the technical bits that causes the
strange behavior. But we will never show others any (real) part of your image.

Your images are private, and will not be shared, unless you tell us so. Other people can always use the
same link (web address / URL) as you use, but we will not share any web addresses or logs.

But please, always be careful of what you put on the internet, and who you trust online. If you don't trust
our servers, or Cloudflare, you can use [our open source code][weserv-github] on your server(s).

## Are you saving images on your server(s)?

We only save images to process them, only the processed images are kept for a short time (in cache).

## If images are modified, do you refresh them after a certain period of time?

We do, but there is some caching.

## What is caching?

A cache is a place where data (such as images) is temporarily stored, to improve performance when the data
is requested again. If the data is requested again, it may be served from the cache. For this service,
the most important bits are our server cache, and your browser cache.

## How are images cached by your servers?

We cache images in different ways, depending on the rate of requests, no more than 31 days, and most
often at least 7 days.

We utilize the [proxy cache in nginx][nginx-cache] to accomplish this, on top of that, [Cloudflare][cloudflare] caches the most
frequently accessed images globally.

Our servers only initiate a refresh when all caches have expired, and only when the image is still being
requested by end users.

The rules we use for server-side caching are different from the ones you see in the headers we provide
for browsers.

## How are images cached by my browser?

We ask the browser to cache images for 31536000 seconds, or 1 year. But it is up to the browser to do
so.

You can always clear your browser cache. Unfortunately, it is not possible for us (or our servers) to clear
your browser cache.

## Can I remove an image from your server(s) cache?

Not yet, a method to remove anything from our server side cache is still worked on. Please subscribe to
[issue #14][cache-removal-tool] for possible updates.

## Why am I redirected to https:// even when I request http://?

For added security we use [HSTS][hsts] to let modern browsers know that they can and should use HTTPS, we
don't send any redirect headers ourselves, this is being done by your browser. It prevents any
opportunistic MITM attacks.

## Are images compressed in any way?

GZip compression is disabled, because it increases file sizes for JPEG-images, and it increases CPU-load
on the client and server.

JPEG-compression is honored, and is by default used when requesting BMP-images (they are converted
to JPEG). If you want to modify compression for JPEG-images, you can do so by setting the [`&q=`][quality]
parameter.

## Which file-extensions do you support?

We "officially" support JPEG, PNG, GIF, TIFF, WebP, PDF and SVG as image input. "Unofficially" we're
supporting all [libMagick image file types][magick-formats].

## Do you support animated images? E.g. animated .gif?

We support animated WebP and GIF images through the use of [`&n=-1`][n-pages]. By default, the first frame of
each image is processed. Please subscribe to [issue #255][apng-support] for possible updates regarding APNG support.

## Can I use my own (sub)domain? E.g. by using a CNAME to wsrv.nl?

We offer this service only on the wsrv.nl domain, and we offer it as-is. However, if you want to
use it under your own (sub)domain, please see our [GitHub][weserv-github] to use it on your own server(s).

## Why don't you support CNAME-ing?

The goal of this service is reaching out to starting websites that don't have the skills nor resources to
script and host something themselves. But we don't want to serve the whole internet, aside from the
amount of traffic (we already handle millions of requests per hour, which is great), our opinion is that
when sites grow, they probably want to host their own solution. This solution will probably integrate
better with their site(s), and will offer many advantages we just can't.

## Why am I not seeing any HTTP 304 header when I request a cached image?

This is because we don't use Last-Modified headers.

## Why don't you use ETag or Last-Modified headers?

We disable 2 (default) settings regarding cache-control. These are the ETag header, and the Last-
Modified header.

We do set the Cache-Control header, which can be controlled via the [`&max-age=`][cache-control] parameter. Allow me
to explain this decision, using nginx and Apache configuration.

Consider the following nginx and Apache settings, these are identical to the settings we use:

::: code-group

```nginx
http {
    etag off; # Disable ETag header
    expires 1y; # Far-future expiration
}
```

```apache [Apache]
Header unset ETag
FileETag None
Header set Cache-Control "max-age=31536000"
```

:::

These directives completely disables ETags, so the browser is somewhat forced to listen to the Cache-
Control header. It also tells the browser to cache the file 31536000 seconds, or 1 year.

Optional, we use multiple servers to serve static content, and we are not sure about the last-modified
times those servers report, because each has his own version of the cache, so we also use:

::: code-group

```nginx
http {
    add_header Last-Modified "" always; # Always remove the Last-Modified header
}
```

```apache [Apache]
Header unset Last-Modified
```

:::

Which tells the webservers to not serve any Last-Modified headers, so browsers can only listen to the
Cache-Control max-age header.

These settings are used by us on lots of high-traffic websites, and disabling the ETag and Last-Modified
headers have certainly helped to reduce traffic to a fifth of what it used to be. Especially Internet Explorer
is very sensitive to those settings.

The Yahoo Developer Network recommends turning off ETags because of this misbehavior:  
[Best practices for speeding up your web site - Disable ETags][disable-etags].

Disabling Last-Modified will stop browsers from asking 304 Content Not Modified requests. In my
experience this is positive, because the webserver has fewer requests to process, and browsers rely more
on the Cache-Control settings you serve. But it may or may not suit you. Some browsers will try to
validate assets every few minutes if you serve them a "Last-Modified" header, and that's why I would
advise to disable the use of it completely.

If you want more information about the headers we serve, consider using [REDbot.org][redbot] this will explain
every header we serve, and why this is used. We also serve Cache-Control: public, this allows browsers to
cache things even when accessing wsrv.nl over https://.

Let us know if you need more info. We are open for comments about the caching policies we use. We do
run complete tests on server load, bandwidth, and CPU-cycles, for each header we place. Enabling 304
will generate 5 times more requests from browsers in our case, this could be different for your site, but I
expect it to be the same.

## What if I still have a question?

That means you're unique, and one of a kind! Did you also read our documentation?

If your question is not within these frequently asked questions, or if there is still something not clear;
[Please open an issue on our GitHub][weserv-issues]. We do our best to answer all questions, and we may even honor
your question by featuring it on this page!

[opendns-domain-tagging]: https://community.opendns.com/domaintagging/about/
[weserv-github]: https://github.com/weserv/images/
[weserv-issues]: https://github.com/weserv/images/issues
[weserv-license]: https://github.com/weserv/images/blob/5.x/LICENSE
[weserv-docker]: https://github.com/weserv/images/tree/5.x/docker#readme
[weserv-privacy-policy]: https://github.com/weserv/images/blob/5.x/Privacy-Policy.md
[cloudflare-network]: https://www.cloudflare.com/network/
[ovh]: https://www.ovh.com/
[scaleway]: https://www.scaleway.com/
[hetzner]: https://www.hetzner.com/
[ip-list]: /ips.txt
[cloudflare]: https://www.cloudflare.com/
[cloudflare-cdn]: https://www.cloudflare.com/cdn/
[nginx-cache]: https://blog.nginx.org/blog/nginx-caching-guide
[cache-removal-tool]: https://github.com/weserv/images/issues/14
[hsts]: https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
[magick-formats]: https://imagemagick.org/script/formats.php#supported
[n-pages]: /docs/format.md#number-of-pages
[apng-support]: https://github.com/weserv/images/issues/255
[quality]: /docs/format.md#quality
[nginx]: https://nginx.org/
[cache-control]: /docs/format.md#cache-control
[disable-etags]: https://developer.yahoo.com/performance/rules.html#etags
[redbot]: https://redbot.org/
