# Crop

Control how the image is aligned.

## Alignment position <Badge type="info" text="&a=" />

How the image should be aligned when `&fit=cover` or `&fit=contain` is set. The [`&w=`](size.md#width) and [`&h=`](size.md#height)
parameters should also be specified.

### Position-based

Control the starting location of the crop. When `&fit=contain` is set, it determines how the image is positioned inside its box.

**Valid positions:**

- `center`: default
- `top`
- `right`
- `bottom`
- `left`
- `top-left`
- `bottom-left`
- `bottom-right`
- `top-right`

For more information, please see the suggestion on our GitHub issue tracker: [Issue #24 - Aligning](https://github.com/weserv/images/issues/24).

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=top">
```

```md [Markdown]
![Alignment position](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=top)
```

:::

[![Alignment position](/static/lichtenstein.jpg?w=300&h=300&fit=cover&a=top)](/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=top){target="_blank"}

### Focal point <Badge type="info" text="&a=focal" />

You can be more specific about the alignment using a focal point. This can be set using a horizontal
(`&fpx=`) and vertical (`&fpy=`) offset decimal value (a float between `0.0` and `1.0`, inclusive). The
default value is `0.5`, or the center of the image.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=focal&fpy=0.45">
```

```md [Markdown]
![Focal point](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=focal&fpy=0.45)
```

:::

[![Focal point](/static/lichtenstein.jpg?w=300&h=300&fit=cover&a=focal&fpy=0.45)](/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=focal&fpy=0.45){target="_blank"}

### Smart crop <Badge type="info" text="&a=[entropy,attention]" />

A strategy-based approach to crop the image by removing boring parts. This only works
with `&fit=cover`.

More info: [Issue #90 - Add support for smart crop](https://github.com/weserv/images/issues/90).

**Valid strategies:**

- `entropy`: focus on the region with the highest [Shannon entropy](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29).
- `attention`: focus on the region with the highest luminance frequency, color saturation and
  presence of skin tones.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/puppy.jpg&w=300&h=300&fit=cover&a=attention">
```

```md [Markdown]
![Smart crop](https://wsrv.nl/?url=wsrv.nl/puppy.jpg&w=300&h=300&fit=cover&a=attention)
```

:::

[![Smart crop](/static/puppy.jpg?w=300&h=300&fit=cover&a=attention)](/?url=wsrv.nl/puppy.jpg&w=300&h=300&fit=cover&a=attention){target="_blank"}

## Rectangle crop <Badge type="info" text="&c[x,y,w,h]=" />

Extract/crop a region of the image after any other resize operations.

Use percentage values (denoted by a value ending with `%`) to crop a relative portion of the image.

::: tip
You can use `&precrop`, for a pre-resize crop behavior.
See [issue #176](https://github.com/weserv/images/issues/176) for more information.
:::

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&cx=680&cy=500&cw=300&ch=300">
```

```md [Markdown]
![Rectangle crop](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&cx=680&cy=500&cw=300&ch=300)
```

:::

[![Rectangle crop](/static/lichtenstein.jpg?cx=680&cy=500&cw=300&ch=300)](/?url=wsrv.nl/lichtenstein.jpg&cx=680&cy=500&cw=300&ch=300){target="_blank"}

## Trim <Badge type="info" text="&trim=" />

Trim pixels from all edges that contain values similar to a background color. By default, the background color
is taken from the top-left pixel, but you can override this with the `&tbg=` parameter. A tolerance level from
`1` to `254` controls how similar a color must be to the background before it is trimmed. You also can specify
just `&trim`, which defaults to a tolerance level of `10`.

More info: [Issue #39 - able to remove black/white whitespace](https://github.com/weserv/images/issues/39).

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=300&trim=10">
```

```md [Markdown]
![Trim](https://wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=300&trim=10)
```

:::

[![Trim](/static/transparency_demo.png?w=300&trim=10)](/?url=wsrv.nl/transparency_demo.png&w=300&trim=10){target="_blank"}
