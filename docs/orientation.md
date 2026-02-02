# Orientation

Change the orientation of your image, by either flipping along its axes or rotating around the center.

## Flip <Badge type="info" text="&flip" />

Mirror the image vertically (up-down) about the x-axis.
This always occurs after rotation, if any.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&flip">
```

```md [Markdown]
![Flip](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&flip)
```

:::

[![Flip](/static/lichtenstein.jpg?h=300&flip)](/?url=wsrv.nl/lichtenstein.jpg&h=300&flip){target="_blank"}

## Flop <Badge type="info" text="&flop" />

Mirror the image horizontally (left-right) about the y-axis.
This always occurs after rotation, if any.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&flop">
```

```md [Markdown]
![Flop](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&flop)
```

:::

[![Flop](/static/lichtenstein.jpg?h=300&flop)](/?url=wsrv.nl/lichtenstein.jpg&h=300&flop){target="_blank"}

## Rotation <Badge type="info" text="&ro=" />

Rotate the image.

The provided angle is converted to a valid positive degree rotation. For example, `-450` will produce a 
270 degree rotation. When rotating by an angle other than a multiple of 90, the background color can be
provided with the `&rbg=` parameter. See [here](adjustment.md#background) for the supported color formats.

Images are always auto-oriented based on the EXIF `Orientation` tag.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&ro=45&rbg=red">
```

```md [Markdown]
![Rotation](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&ro=45&rbg=red)
```

:::

[![Rotation](/static/lichtenstein.jpg?h=300&ro=45&rbg=red)](/?url=wsrv.nl/lichtenstein.jpg&h=300&ro=45&rbg=red){target="_blank"}
