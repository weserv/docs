# Adjustment

Perform operations similar to those in image-editing applications.

## Background <Badge type="info" text="&bg=" />

Sets the background color of the image. Supports a variety of color
formats. In addition to the 140 color names supported by all modern browsers (listed [here](supported-colors.md)),
it also accepts hexadecimal RGB and RBG alpha formats.

**Valid hexadecimal formats:**

- 3 digit RGB: `CCC`
- 4 digit ARGB (alpha): `5CCC`
- 6 digit RGB: `CCCCCC`
- 8 digit ARGB (alpha): `55CCCCCC`

More info: [Issue #81 - Background setting](https://github.com/weserv/images/issues/81).

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=400&bg=black">
```

```md [Markdown]
![Background](https://wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=400&bg=black)
```

:::

[![Background](/static/transparency_demo.png?w=400&bg=black)](/?url=wsrv.nl/transparency_demo.png&w=400&bg=black){target="_blank"}

## Blur <Badge type="info" text="&blur=" />

Adds a blur effect to the image. When used without a value (`&blur`), performs a fast, mild blur of the
output image. When a value is provided, performs a slower, more accurate Gaussian blur.

Use values between `0.3` and `1000`, representing the sigma of the Gaussian mask, where `sigma = 1 + radius / 2`.

More info: [Issue #69 - Allow blur transformation (with radius parameter)](https://github.com/weserv/images/issues/69).

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&blur=5">
```

```md [Markdown]
![Blur](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&blur=5)
```

:::

[![Blur](/static/lichtenstein.jpg?w=300&blur=5)](/?url=wsrv.nl/lichtenstein.jpg&w=300&blur=5){target="_blank"}

## Contrast <Badge type="info" text="&con=" />

Adjusts the image contrast. Use values between `-100` and `+100`, where `0` represents no change.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&con=25">
```

```md [Markdown]
![Contrast](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&con=25)
```

:::

[![Contrast](/static/lichtenstein.jpg?w=300&con=25)](/?url=wsrv.nl/lichtenstein.jpg&w=300&con=25){target="_blank"}

## Filter <Badge type="info" text="&filt=" />

Applies a filter effect to the image. Accepts `greyscale`, `sepia`, `duotone` or `negate`.

::: tip
You can use `&start` and `&stop` to define the duotone colors. By default, it will use
<code>&start=<span style="background:#C83658;color:white;">C83658</span></code> and
<code>&stop=<span style="background:#D8E74F;color:black;">D8E74F</span></code>.
:::

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/zebra.jpg&w=300&h=300&fit=cover&a=focal&fpx=0.6&filt=duotone">
```

```md [Markdown]
![Filter](https://wsrv.nl/?url=wsrv.nl/zebra.jpg&w=300&h=300&fit=cover&a=focal&fpx=0.6&filt=duotone)
```

:::

[![Filter](/static/zebra.jpg?w=300&h=300&fit=cover&a=focal&fpx=0.6&filt=duotone)](/?url=wsrv.nl/zebra.jpg&w=300&h=300&fit=cover&a=focal&fpx=0.6&filt=duotone){target="_blank"}

## Gamma <Badge type="info" text="&gam=" />

Adjusts the image gamma. Use values between `1.0` and `3.0`. The default value is `2.2`, a suitable
approximation for sRGB images.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&gam=3">
```

```md [Markdown]
![Gamma](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&gam=3)
```

:::

[![Gamma](/static/lichtenstein.jpg?w=300&gam=3)](/?url=wsrv.nl/lichtenstein.jpg&w=300&gam=3){target="_blank"}

## Modulate <Badge type="info" text="&mod=" />

Transforms the image using brightness, saturation and hue rotation.
Use `&mod=[brightness multiplier],[saturation multiplier],[hue degrees]` to define the below adjustments at once.

### Brightness <Badge type="info" text="&mod=" />

Adjusts the brightness of the image. A multiplier greater than 1 will increase brightness, while a
multiplier less than 1 will decrease the brightness.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&mod=2">
```

```md [Markdown]
![Brightness](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&mod=2)
```

:::

[![Brightness](/static/lichtenstein.jpg?w=300&mod=2)](/?url=wsrv.nl/lichtenstein.jpg&w=300&mod=2){target="_blank"}

### Saturation <Badge type="info" text="&sat=" />

Adjusts the saturation of the image. A multiplier greater than 1 will increase saturation, while a multiplier
less than 1 will decrease the saturation.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&sat=0.5">
```

```md [Markdown]
![Saturation](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&sat=0.5)
```

:::

[![Saturation](/static/lichtenstein.jpg?w=300&sat=0.5)](/?url=wsrv.nl/lichtenstein.jpg&w=300&sat=0.5){target="_blank"}

### Hue rotation <Badge type="info" text="&hue=" />

Applies a hue rotation to the image. A positive hue rotation increases the hue value, while a negative
rotation decreases the hue value.

Values are given in degrees, there is no minimum or maximum value; `&hue=N` evaluates to `N` modulo 360.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&hue=90">
```

```md [Markdown]
![Hue rotation](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&hue=90)
```

:::

[![Hue rotation](/static/lichtenstein.jpg?w=300&hue=90)](/?url=wsrv.nl/lichtenstein.jpg&w=300&hue=90){target="_blank"}

## Sharpen <Badge type="info" text="&sharp=" />

Sharpen the image. Performs an accurate sharpen of the L channel in the LAB color space. Use in combination with
`&sharpf=` and `&sharpj=` to control the level of sharpening in "flat" and "jagged" areas.

Use values between `0.000001` and `10`, representing the sigma of the Gaussian mask,
where `sigma = 1 + radius / 2`. When used without parameters, performs a fast, mild
sharpen of the output image.

The level of sharpening to apply to "flat" (`&sharpf=`) and "jagged" (`&sharpj=`) areas needs
to be given in the range of `0` and `1000000`.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&sharp=3">
```

```md [Markdown]
![Sharpen](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&sharp=3)
```

:::

[![Sharpen](/static/lichtenstein.jpg?w=300&sharp=3)](/?url=wsrv.nl/lichtenstein.jpg&w=300&sharp=3){target="_blank"}

## Tint <Badge type="info" text="&tint=" />

Tint the image using the provided chroma while preserving the image luminance. See [here](adjustment.md#background)
for the supported color formats.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&tint=red">
```

```md [Markdown]
![Tint](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&tint=red)
```

:::

[![Tint](/static/lichtenstein.jpg?w=300&tint=red)](/?url=wsrv.nl/lichtenstein.jpg&w=300&tint=red){target="_blank"}
