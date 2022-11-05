# Adjustment

Perform operations similar to those in image-editing applications.

## Background <QueryString field="bg" />

Sets the background color of the image. Supports a variety of color
formats. In addition to the 140 color names supported by all modern browsers (listed [here](supported-colors.md)),
it also accepts hexadecimal RGB and RBG alpha formats.

**Valid hexadecimal formats:**
- 3 digit RGB: `CCC`
- 4 digit ARGB (alpha): `5CCC`
- 6 digit RGB: `CCCCCC`
- 8 digit ARGB (alpha): `55CCCCCC`

More info: [Issue #81 - Background setting](https://github.com/weserv/images/issues/81).

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=400&bg=black">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Background](https://wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=400&bg=black)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/transparency_demo.png&w=400&bg=black" target="_blank">
  <img :src="$withBase('/static/transparency_demo.png?w=400&bg=black')" alt="Background">
</a>

## Blur <QueryString field="blur" />

Adds a blur effect to the image. When used without a value (`&blur`), performs a fast, mild blur of the
output image. When a value is provided, performs a slower, more accurate Gaussian blur.

Use values between `0.3` and `1000`, representing the sigma of the Gaussian mask, where `sigma = 1 +
radius / 2`.

More info: [Issue #69 - Allow blur transformation (with radius parameter)](https://github.com/weserv/images/issues/69).

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&blur=5">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Blur](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&blur=5)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&blur=5" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&blur=5')" alt="Blur">
</a>

## Contrast <QueryString field="con" />

Adjusts the image contrast. Use values between `-100` and `+100`, where `0` represents no change.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&con=25">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Contrast](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&con=25)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&con=25" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&con=25')" alt="Contrast">
</a>

## Filter <QueryString field="filt" />

Applies a filter effect to the image. Accepts `greyscale`, `sepia`, `duotone` or `negate`.

::: tip
You can use `&start` and `&stop` to define the duotone colors. By default, it will use
<code>&start=<span style="background:#C83658;color:white;">C83658</span></code> and
<code>&stop=<span style="background:#D8E74F;color:black;">D8E74F</span></code>.
:::

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/zebra.jpg&w=300&h=300&fit=cover&a=focal&fpx=0.6&filt=duotone">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Filter](https://wsrv.nl/?url=wsrv.nl/zebra.jpg&w=300&h=300&fit=cover&a=focal&fpx=0.6&filt=duotone)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/zebra.jpg&w=300&h=300&fit=cover&a=focal&fpx=0.6&filt=duotone" target="_blank">
  <img :src="$withBase('/static/zebra.jpg?w=300&h=300&fit=cover&a=focal&fpx=0.6&filt=duotone')" alt="Filter">
</a>

## Gamma <QueryString field="gam" />

Adjusts the image gamma. Use values between `1.0` and `3.0`. The default value is `2.2`, a suitable
approximation for sRGB images.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&gam=3">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Gamma](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&gam=3)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&gam=3" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&gam=3')" alt="Gamma">
</a>

## Modulate <QueryString field="mod" />

Transforms the image using brightness, saturation and hue rotation. Use `&mod=[brightness multiplier],
[saturation multiplier],[hue degrees]` to define the below adjustments at once.

### Brightness <QueryString field="mod" />

Adjusts the brightness of the image. A multiplier greater than 1 will increase brightness, while a
multiplier less than 1 will decrease the brightness.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&mod=2">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Brightness](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&mod=2)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&mod=2" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&mod=2')" alt="Brightness">
</a>

### Saturation <QueryString field="sat" />

Adjusts the saturation of the image. A multiplier greater than 1 will increase saturation, while a multiplier
less than 1 will decrease the saturation.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&sat=0.5">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Saturation](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&sat=0.5)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&sat=0.5" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&sat=0.5')" alt="Saturation">
</a>

### Hue rotation <QueryString field="hue" />

Applies a hue rotation to the image. A positive hue rotation increases the hue value, while a negative
rotation decreases the hue value.

Values are given in degrees, there is no minimum or maximum value; `&hue=N` evaluates to `N` modulo
360.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&hue=90">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Hue rotation](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&hue=90)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&hue=90" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&hue=90')" alt="Hue rotation">
</a>

## Sharpen <QueryString field="sharp" />

Sharpen the image. Performs an accurate sharpen of the L channel in the LAB color space. Use in combination with
`&sharpf=` and `&sharpj=` to control the level of sharpening in "flat" and "jagged" areas.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&sharp=3">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Sharpen](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&sharp=3)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&sharp=3" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&sharp=3')" alt="Sharpen">
</a>

## Tint <QueryString field="tint" />

Tint the image using the provided chroma while preserving the image luminance. See [here](adjustment.md#background)
for the supported color formats.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&tint=red">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Tint](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&tint=red)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&tint=red" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&tint=red')" alt="Tint">
</a>
