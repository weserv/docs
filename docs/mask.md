# Mask

Control the visible and non-visible area of the image.

## Mask type <Badge type="info" text="&mask=" />

Set the mask type from a predefined list of shapes.

More info: [Issue #49 - Add circle effect to photos](https://github.com/weserv/images/issues/49).

**Valid shapes:**

- `circle`
- `ellipse`
- `triangle`
- `triangle-180`: Triangle tilted upside down
- `pentagon`
- `pentagon-180`: Pentagon tilted upside down
- `hexagon`
- `square`: Square tilted 45 degrees
- `star`: 5-point star
- `heart`

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle">
```

```md [Markdown]
![Mask type](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle)
```

:::

[![Mask type](/static/lichtenstein.jpg?w=300&h=300&fit=cover&mask=circle)](/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle){target="_blank"}

## Mask trim <Badge type="info" text="&mtrim" />

Remove the remaining whitespace from the mask.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim">
```

```md [Markdown]
![Mask trim](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim)
```

:::

[![Mask trim](/static/lichtenstein.jpg?w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim)](/?url=wsrv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim){target="_blank"}

## Mask background <Badge type="info" text="&mbg=" />

Set the background color of the mask. See [here](adjustment.md#background) for the supported color formats.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red">
```

```md [Markdown]
![Mask background](https://wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red)
```

:::

[![Mask background](/static/transparency_demo.png?w=400&bg=black&mask=heart&mbg=red)](/?url=wsrv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red){target="_blank"}
