# Adjustment

Perform operations similar to those in image-editing applications.

## Background <Parameter text="&bg="/>

Sets the background color of the image. Supports a variety of color
formats. In addition to the 140 color names supported by all modern browsers (listed [here](supported-colors.md)),
it also accepts hexadecimal RGB and RBG alpha formats.

**Valid hexadecimal formats:**
- 3 digit RGB: `CCC`
- 4 digit ARGB (alpha): `5CCC`
- 6 digit RGB: `CCCCCC`
- 8 digit ARGB (alpha): `55CCCCCC`

More info: [Issue #81 - Background setting](https://github.com/weserv/images/issues/81).

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/transparency_demo.png&w=400&bg=black">
```
[![Background](/static/transparency_demo.png?w=400&bg=black)](/?url=images.weserv.nl/transparency_demo.png&w=400&bg=black)

## Blur <Parameter text="&blur="/>

Adds a blur effect to the image. Use values between `0` and `100`.

More info: [Issue #69 - Allow blur transformation (with radius parameter)](https://github.com/weserv/images/issues/69).

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&blur=5">
```
[![Blur](/static/lichtenstein.jpg?w=300&blur=5)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&blur=5)

## Contrast <Parameter text="&con="/>

Adjusts the image contrast. Use values between `-100` and `+100`, where `0` represents no change.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&con=25">
```
[![Contrast](/static/lichtenstein.jpg?w=300&con=25)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&con=25)

## Filter <Parameter text="&filt="/>

Applies a filter effect to the image. Accepts `greyscale`, `sepia`, `duotone` or `negate`.

::: tip
You can use `&start` and `&stop` to define the duotone colors. By default, it will use
<code>&start=<span style="background:#C83658;color:white;">C83658</span></code> and
<code>&stop=<span style="background:#D8E74F;color:black;">D8E74F</span></code>.
:::

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/zebra.jpg&w=300&h=300&fit=cover&a=focal-82-0&filt=duotone">
```
[![Filter](/static/zebra.jpg?w=300&h=300&fit=cover&a=focal-82-0&filt=duotone)](/?url=images.weserv.nl/zebra.jpg&w=300&h=300&fit=cover&a=focal-82-0&filt=duotone)

## Gamma <Parameter text="&gam="/>

Adjusts the image gamma. Use values between `1` and `3`. The default value is `2.2`, a suitable
approximation for sRGB images.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&gam=3">
```
[![Gamma](/static/lichtenstein.jpg?w=300&gam=3)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&gam=3)

## Modulate <Parameter text="&mod="/><Badge text="New!" type="warn" vertical="middle"/>

Transforms the image using brightness, saturation and hue rotation. Use `&mod=[brightness multiplier],
[saturation multiplier],[hue degrees]` to define the below adjustments at once.

### Brightness <Parameter text="&mod="/>

Adjusts the brightness of the image. A multiplier greater than 1 will increase brightness, while a
multiplier less than 1 will decrease the brightness.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&mod=2">
```
[![Brightness](/static/lichtenstein.jpg?w=300&mod=2)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&mod=2)

### Saturation <Parameter text="&sat="/>

Adjusts the saturation of the image. A multiplier greater than 1 will increase saturation, while a multiplier
less than 1 will decrease the saturation.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&sat=0.5">
```
[![Saturation](/static/lichtenstein.jpg?w=300&sat=0.5)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&sat=0.5)

### Hue rotation <Parameter text="&hue="/>

Applies a hue rotation to the image. A positive hue rotation increases the hue value, while a negative
rotation decreases the hue value.

Values are given in degrees, there is no minimum or maximum value; `&hue=N` evaluates to `N` modulo
360.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&hue=90">
```
[![Hue rotation](/static/lichtenstein.jpg?w=300&hue=90)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&hue=90)

## Sharpen <Parameter text="&sharp="/>

Sharpen the image. Performs an accurate sharpen of the L channel in the LAB color space. Use in combination with
`&sharpf=` and `&sharpj=` to control the level of sharpening in "flat" and "jagged" areas.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&sharp=3">
```
[![Sharpen](/static/lichtenstein.jpg?w=300&sharp=3)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&sharp=3)

## Tint <Parameter text="&tint="/><Badge text="New!" type="warn" vertical="middle"/>

Tint the image using the provided chroma while preserving the image luminance. See [here](adjustment.md#background)
for the supported color formats.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&tint=red">
```
[![Tint](/static/lichtenstein.jpg?w=300&tint=red)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&tint=red)
