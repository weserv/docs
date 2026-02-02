# Format

Control the output properties of the image.

## Adaptive filter <Badge type="info" text="&af" />

Use adaptive row filtering for reducing the PNG file size. This is only supported for the `png` format.

## Base64 (data URL) <Badge type="info" text="&encoding=base64" />

Encode the image to be used directly in the `src=` of the `<img>`-tag.
Use [this link](/?url=wsrv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64){target="_blank"} to see the output result.

More info: [Issue #59 - Return image base64 encoded](https://github.com/weserv/images/issues/59).

```
//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64
```

## Cache-Control <Badge type="info" text="&maxage=" />

Specify how long the browser should cache the image by setting the `max-age` directive of the
`Cache-Control` HTTP-header.

We define a “far-future expiration” of 1 year by default. The duration can be specified in days, weeks,
months, and years using the following suffixes:

- `d`: days
- `w`: weeks, 7 days
- `M`: months, 30 days
- `y`: years, 365 days

The duration must be between `1d` (1 day) to `1y` (1 year), inclusive. Values outside this range will
be ignored and default to 1 year.

More info: [Issue #186 - Increase Cache-Control: max-age= to 1 year instead of 1 month](https://github.com/weserv/images/issues/186).

```
//wsrv.nl?url=wsrv.nl/lichtenstein.jpg&w=100&maxage=31d
```

## Compression level <Badge type="info" text="&l=" />

The zlib compression level. Use a value between `0` (no Deflate) and `9` (maximum Deflate). The default
value is `6`. This is only supported for the `png` format.

## Lossless compression <Badge type="info" text="&ll" />

Enable lossless compression for the output image. This is only supported for the `jxl`, `tiff` and `webp` formats.

More info: [Issue #386 - webP output is always lossy and cannot be requested as lossless](https://github.com/weserv/images/issues/386).

## Default image <Badge type="info" text="&default=" />

If an image fails to load, an error is shown by default. However, you may prefer to display a fallback
image instead of showing a broken image to the user.

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

Specify the filename returned in the `Content-Disposition` header. The filename must contain only
alphanumeric characters.

More info: [Issue #122 - Specify filename](https://github.com/weserv/images/issues/122).

## Interlace / progressive <Badge type="info" text="&il" />

Add interlacing to GIF and PNG. JPEGs become progressive.

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

Select the number of pages to render. Defaults to `1`. Set to `-1` to render all pages
until the end of the document.

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

Encode the image to a specified format. Accepts `jpg`, `jxl`, `png`, `gif`, `tiff`, `webp` or `json`. If no format
is provided, it defaults to the origin image format.

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

Load a specific page from a multi-page or multi-resolution input (GIF, WebP, TIFF, PDF, ICO). Use a
zero-based index. For multi-resolution images, use `-1` to load the largest page and `-2` to load the
smallest.

## Quality <Badge type="info" text="&q=" />

Set the quality of the image. Use values between `1` and `100`. Defaults to `80`. This is only supported
for the `jpg`, `jxl`, `tiff` and `webp` formats.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&q=20">
```

```md [Markdown]
![Quality](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&q=20)
```

:::

[![Quality](/static/lichtenstein.jpg?w=300&q=20)](/?url=wsrv.nl/lichtenstein.jpg&w=300&q=20){target="_blank"}
