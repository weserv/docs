# Format

Controls the output properties of the image.

## Adaptive filter <QueryString field="af" bool="true" />

Use adaptive row filtering for reducing the PNG file size. This only works when the output image is `png`.

## Base64 (data URL) <QueryString field="encoding" value="base64" />

Encodes the image to be used directly in the src= of the `<img>`-tag.
Use [this link](/?url=wsrv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64) to see the output result.

More info: [Issue #59 - Return image base64 encoded](https://github.com/weserv/images/issues/59).

```
//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64
```

## Cache-Control <QueryString field="maxage" />

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

## Compression level <QueryString field="l" />

The zlib compression level. Use a value between `0` (no Deflate) and `9` (maximum Deflate). The default
value is `6`. This only works when the output image is `png`.

## Default image <QueryString field="default" />

If there is a problem loading an image, then an error is shown. However, there might be a need where
instead of giving a broken image to the user, you want a default image to be delivered.

More info: [Issue #37 - Return default image if the image's URL not found](https://github.com/weserv/images/issues/37).

The URL must not include a `default` querystring (if it does, it will be ignored).

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=example.org/noimage.jpg&default=ssl:wsrv.nl%2F%3Furl%3Dwsrv.nl/lichtenstein.jpg%26w%3D300">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Default image](https://wsrv.nl/?url=example.org/noimage.jpg&default=ssl:wsrv.nl%2F%3Furl%3Dwsrv.nl/lichtenstein.jpg%26w%3D300)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=example.org/noimage.jpg&default=ssl:wsrv.nl%2F%3Furl%3Dwsrv.nl/lichtenstein.jpg%26w%3D300" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300')" alt="Default image">
</a>

## Filename <QueryString field="filename" />

To specify the filename returned in the `Content-Disposition` header. The filename must only contain
alphanumeric characters.

More info: [Issue #122 - Specify filename](https://github.com/weserv/images/issues/122).

## Interlace / progressive <QueryString field="il" bool="true" />

Adds interlacing to GIF and PNG. JPEGs become progressive.

More info: [Issue #50 - Add parameter to use progressive JPEGs](https://github.com/weserv/images/issues/50).

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&il">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Interlace / progressive](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&il)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&il" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&il')" alt="Interlace / progressive">
</a>

## Number of pages <QueryString field="n" />

To select the number of pages to render. The default value is `1`. Set to `-1` to mean "until the end of
the document".

::: tip
`-1` will be useful if you need to resize an animated WebP or GIF image.
:::

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/banana.webp&h=300&output=gif&n=-1">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Number of pages](https://wsrv.nl/?url=wsrv.nl/banana.webp&h=300&output=gif&n=-1)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/banana.webp&h=300&output=gif&n=-1" target="_blank">
  <img :src="$withBase('/static/banana.webp?h=300&output=gif&n=-1')" alt="Number of pages">
</a>

## Output <QueryString field="output" />

Encodes the image to a specific format. Accepts `jpg`, `png`, `gif`, `tiff`, `webp` or `json`. If none is
given, it will honor the origin image format.

More info: [Issue #62 - Format conversion](https://github.com/weserv/images/issues/62).

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&output=webp">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Output](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&output=webp)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&output=webp" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&output=webp')" alt="Output">
</a>

## Page <QueryString field="page" />

To load a given page (for an PDF, TIFF and multi-size ICO file). The value is numbered from zero. For a
multi-resolution image, you can use `-1` to get the largest page and `-2` to get the smallest page.

## Quality <QueryString field="q" />

Defines the quality of the image. Use values between `1` and `100`. Defaults to `80`. This only works
when the output image is `jpg`, `tiff` or `webp`.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&q=20">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Quality](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&q=20)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&q=20" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&q=20')" alt="Quality">
</a>
