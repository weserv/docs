# Format

Controls the output properties of the image.

## Adaptive filter <Badge type="info" text="&af" />

Use adaptive row filtering for reducing the PNG file size. This only works when the output image is `png`.

## Base64 (data URL) <Badge type="info" text="&encoding=base64" />

Encodes the image to be used directly in the src= of the `<img>`-tag.
Use [this link](/?url=wsrv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64){target="_blank"} to see the output result.

More info: [Issue #59 - Return image base64 encoded](https://github.com/weserv/images/issues/59).

```
//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64
```

## Cache-Control <Badge type="info" text="&maxage=" />

Defines for how long an image should be cached by the browser. This will change the `max-age` of the
`Cache-Control` HTTP-header.

We define a "far-future expiration" of 1 year by default. The duration can be specified in days, weeks,
months, and years using the following suffixes:

- `d`: days
- `w`: weeks, 7 days
- `M`: months, 30 days
- `y`: years, 365 days

A duration must be in the range of `1d` (1 day) to `1y` (1 year), inclusive. Any other value will be ignored
and fallback to the default value of 1 year.

More info: [Issue #186 - Increase Cache-Control: max-age= to 1 year instead of 1 month](https://github.com/weserv/images/issues/186).

```
//wsrv.nl?url=wsrv.nl/lichtenstein.jpg&w=100&maxage=31d
```

## Compression level <Badge type="info" text="&l=" />

The zlib compression level. Use a value between `0` (no Deflate) and `9` (maximum Deflate). The default
value is `6`. This only works when the output image is `png`.

## Lossless compression <Badge type="info" text="&ll" />

Whether the resulting image should be lossless compressed. This only works when the output image is `webp`.

More info: [Issue #386 - webP output is always lossy and cannot be requested as lossless](https://github.com/weserv/images/issues/386).

## Default image <Badge type="info" text="&default=" />

If there is a problem loading an image, then an error is shown. However, there might be a need where
instead of giving a broken image to the user, you want a default image to be delivered.

More info: [Issue #37 - Return default image if the image's URL not found](https://github.com/weserv/images/issues/37).

The URL must not include a `default` querystring (if it does, it will be ignored).

Use `&default=1` to redirect to the original URL specified in `?url=`.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=example.org/noimage.jpg&default=wsrv.nl/placeholder.svg">
```

```md [Markdown]
![Default image](https://wsrv.nl/?url=example.org/noimage.jpg&default=wsrv.nl/placeholder.svg)
```

:::

[![Default image](/placeholder.svg)](/?url=example.org/noimage.jpg&default=wsrv.nl/placeholder.svg){target="_blank"}

## Filename <Badge type="info" text="&filename=" />

To specify the filename returned in the `Content-Disposition` header. The filename must only contain
alphanumeric characters.

More info: [Issue #122 - Specify filename](https://github.com/weserv/images/issues/122).

## Interlace / progressive <Badge type="info" text="&il" />

Adds interlacing to GIF and PNG. JPEGs become progressive.

More info: [Issue #50 - Add parameter to use progressive JPEGs](https://github.com/weserv/images/issues/50).

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&il">
```

```md [Markdown]
![Interlace / progressive](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&il)
```

:::

[![Interlace / progressive](/static/lichtenstein.jpg?w=300&il)](/?url=wsrv.nl/lichtenstein.jpg&w=300&il){target="_blank"}

## Number of pages <Badge type="info" text="&n=" />

To select the number of pages to render. The default value is `1`. Set to `-1` to mean "until the end of
the document".

::: tip
`-1` will be useful if you need to resize an animated WebP or GIF image.
:::

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/banana.webp&h=300&output=gif&n=-1">
```

```md [Markdown]
![Number of pages](https://wsrv.nl/?url=wsrv.nl/banana.webp&h=300&output=gif&n=-1)
```

:::

[![Number of pages](/static/banana.webp?h=300&output=gif&n=-1)](/?url=wsrv.nl/banana.webp&h=300&output=gif&n=-1){target="_blank"}

## Output <Badge type="info" text="&output=" />

Encodes the image to a specific format. Accepts `jpg`, `png`, `gif`, `tiff`, `webp` or `json`. If none is
given, it will honor the origin image format.

More info: [Issue #62 - Format conversion](https://github.com/weserv/images/issues/62).

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&output=webp">
```

```md [Markdown]
![Output](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&output=webp)
```

:::

[![Output](/static/lichtenstein.jpg?w=300&output=webp)](/?url=wsrv.nl/lichtenstein.jpg&w=300&output=webp){target="_blank"}

## Page <Badge type="info" text="&page=" />

To load a given page (for an PDF, TIFF and multi-size ICO file). The value is numbered from zero. For a
multi-resolution image, you can use `-1` to get the largest page and `-2` to get the smallest page.

## Quality <Badge type="info" text="&q=" />

Defines the quality of the image. Use values between `1` and `100`. Defaults to `80`. This only works
when the output image is `jpg`, `tiff` or `webp`.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&q=20">
```

```md [Markdown]
![Quality](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&q=20)
```

:::

[![Quality](/static/lichtenstein.jpg?w=300&q=20)](/?url=wsrv.nl/lichtenstein.jpg&w=300&q=20){target="_blank"}
