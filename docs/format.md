# Format

Controls the output properties of the image.

## Adaptive filter <Parameter text="&af"/><Badge text="New!" type="warn" vertical="middle"/>

Use adaptive row filtering for reducing the PNG file size. This only works when the output image is `png`.

## Base64 (data URL) <Parameter text="&encoding=base64" vertical="middle"/>

Encodes the image to be used directly in the src= of the `<img>`-tag.
Use [this link](/?url=images.weserv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64) to see the output result.

More info: [Issue #59 - Return image base64 encoded](https://github.com/weserv/images/issues/59).

```
//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64
```

## Cache-Control <Parameter text="&maxage=" vertical="middle"/><Badge text="New!" type="warn" vertical="middle"/>

Defines for how long an image should be cached by the browser. This will change the `max-age` of the
`Cache-Control` HTTP-header.

We define a "far-future expiration" of 1 year by default. Valid durations that can be specified are:
- `31d` for 1 month
- `62d` for 2 months
- `93d` for 3 months
- `186d` for 6 months
- 1 year (365 days) - default

Any other value will be ignored and the `max-age` will default to 1 year.

More info: [Issue #186 - Increase Cache-Control: max-age= to 1 year instead of 1 month](https://github.com/weserv/images/issues/186).

```
//images.weserv.nl?url=images.weserv.nl/lichtenstein.jpg&w=100&maxage=31d
```

## Compression level <Parameter text="&l="/><Badge text="New!" type="warn" vertical="middle"/>

The zlib compression level. Use a value between `0` (no Deflate) and `9` (maximum Deflate). The default
value is `6`. This only works when the output image is `png`.

## Default image <Parameter text="&default="/>

If there is a problem loading an image, then an error is shown. However, there might be a need where
instead of giving a broken image to the user, you want a default image to be delivered.

More info: [Issue #37 - Return default image if the image's URL not found](https://github.com/weserv/images/issues/37).

The URL must not include a `default` querystring (if it does, it will be ignored).

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=example.org/noimage.jpg&default=ssl:images.weserv.nl%2F%3Furl%3Dimages.weserv.nl/lichtenstein.jpg%26w%3D300">
```
</code-block>

<code-block title="Markdown">
```md
![Default image](https://images.weserv.nl/?url=example.org/noimage.jpg&default=ssl:images.weserv.nl%2F%3Furl%3Dimages.weserv.nl/lichtenstein.jpg%26w%3D300)
```
</code-block>
</code-group>

[![Default image](/static/lichtenstein.jpg?w=300)](/?url=example.org/noimage.jpg&default=ssl:images.weserv.nl%2F%3Furl%3Dimages.weserv.nl/lichtenstein.jpg%26w%3D300)

## Filename <Parameter text="&filename="/>

To specify the filename returned in the `Content-Disposition` header. The filename must only contain
alphanumeric characters.

More info: [Issue #122 - Specify filename](https://github.com/weserv/images/issues/122).

## Interlace / progressive <Parameter text="&il" vertical="middle"/>

Adds interlacing to GIF and PNG. JPEGs become progressive.

More info: [Issue #50 - Add parameter to use progressive JPEGs](https://github.com/weserv/images/issues/50).

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&il">
```
</code-block>

<code-block title="Markdown">
```md
![Interlace / progressive](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&il)
```
</code-block>
</code-group>

[![Interlace / progressive](/static/lichtenstein.jpg?w=300&il)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&il)

## Number of pages <Parameter text="&n="/><Badge text="New!" type="warn" vertical="middle"/>

To select the number of pages to render. The default value is `1`. Set to `-1` to mean "until the end of
the document".

::: tip
`-1` will be useful if you need to resize an animated WebP or GIF image.
:::

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1">
```
</code-block>

<code-block title="Markdown">
```md
![Number of pages](https://images.weserv.nl/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1)
```
</code-block>
</code-group>

[![Number of pages](/static/banana.webp?h=300&output=gif&n=-1)](/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1)

## Output <Parameter text="&output=" vertical="middle"/>

Encodes the image to a specific format. Accepts `jpg`, `png`, `gif`, `tiff`, `webp` or `json`. If none is
given, it will honor the origin image format.

More info: [Issue #62 - Format conversion](https://github.com/weserv/images/issues/62).

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&output=webp">
```
</code-block>

<code-block title="Markdown">
```md
![Output](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&output=webp)
```
</code-block>
</code-group>

[![Output](/static/lichtenstein.jpg?w=300&output=webp)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&output=webp)

## Page <Parameter text="&page="/>

To load a given page (for an PDF, TIFF and multi-size ICO file). The value is numbered from zero. For a
multi-resolution image, you can use `-1` to get the largest page and `-2` to get the smallest page.

## Quality <Parameter text="&q=" vertical="middle"/>

Defines the quality of the image. Use values between `0` and `100`. Defaults to `85`. This only works
when the output image is `jpg`, `tiff` or `webp`.

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&q=20">
```
</code-block>

<code-block title="Markdown">
```md
![Quality](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&q=20)
```
</code-block>
</code-group>

[![Quality](/static/lichtenstein.jpg?w=300&q=20)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&q=20)
