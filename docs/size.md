# Size

Controls how the image needs to be resized. You can use both `&w=` and `&h=` parameters or only one
of them: the other dimension is automatically updated.

## Width <Badge type="info" text="&w=" />

Sets the width of the image, in pixels.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300">
```

```md [Markdown]
![Width](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300)
```

:::

[![Width](/static/lichtenstein.jpg?w=300)](/?url=wsrv.nl/lichtenstein.jpg&w=300){target="_blank"}

## Height <Badge type="info" text="&h=" />

Sets the height of the image, in pixels.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300">
```

```md [Markdown]
![Height](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300)
```

:::

[![Height](/static/lichtenstein.jpg?h=300)](/?url=wsrv.nl/lichtenstein.jpg&h=300){target="_blank"}

## Device pixel ratio <Badge type="info" text="&dpr=" />

The device pixel ratio is used to easily convert between CSS pixels and device pixels. This makes it
possible to display images at the correct pixel density on a variety of devices such as Apple devices with
Retina Displays and Android devices. You must specify either a width, a height, or both for this parameter
to work. Use values between `1` and `8`.

More info: [Issue #115 - DPI support](https://github.com/weserv/images/issues/115).

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=144&dpr=2">
```

```md [Markdown]
![Device pixel ratio](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=144&dpr=2)
```

:::

[![Device pixel ratio](/static/lichtenstein.jpg?h=144&dpr=2)](/?url=wsrv.nl/lichtenstein.jpg&h=144&dpr=2){target="_blank"}
