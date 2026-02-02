# Fit

Control how the image is fitted to its target dimensions. Below are a couple of examples. Some of these
values are based on the [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property.

<Image
  alt="Examples of various values for the fit property when resizing"
  :image="{ light: '/api-resize-fit.svg', dark: '/api-resize-fit-dark.svg' }"
/>

## Inside <Badge type="info" text="&fit=inside" />

Default. Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions
are less than or equal to both those specified.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside">
```

```md [Markdown]
![Inside](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside)
```

:::

[![Inside](/static/lichtenstein.jpg?w=300&h=300&fit=inside)](/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside){target="_blank"}

## Outside <Badge type="info" text="&fit=outside" />

Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are
greater than or equal to both those specified.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=outside">
```

```md [Markdown]
![Outside](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=outside)
```

:::

[![Outside](/static/lichtenstein.jpg?w=300&h=300&fit=outside)](/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=outside){target="_blank"}

## Cover <Badge type="info" text="&fit=cover" />

Preserving aspect ratio, resize the image to cover both provided dimensions by cropping/clipping to fit.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover">
```

```md [Markdown]
![Cover](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover)
```

:::

[![Cover](/static/lichtenstein.jpg?w=300&h=300&fit=cover)](/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover){target="_blank"}

## Fill <Badge type="info" text="&fit=fill" />

Ignore the aspect ratio of the input and stretch to both provided dimensions.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=fill">
```

```md [Markdown]
![Fill](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=fill)
```

:::

[![Fill](/static/lichtenstein.jpg?w=300&h=300&fit=fill)](/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=fill){target="_blank"}

## Contain <Badge type="info" text="&fit=contain" />

Preserving aspect ratio, contain within both provided dimensions using “letterboxing” where necessary.
The remaining space can be filled with a background color by using `&cbg=`. See [here](adjustment.md#background) for the
supported color formats.

More info: [Issue #80 - letterbox images that need to fit](https://github.com/weserv/images/issues/80).

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=contain&cbg=black">
```

```md [Markdown]
![Contain](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=contain&cbg=black)
```

:::

[![Contain](/static/lichtenstein.jpg?w=300&h=300&fit=contain&cbg=black)](/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=contain&cbg=black){target="_blank"}

## Without enlargement <Badge type="info" text="&we" />

Do not enlarge if the width or height are already less than the specified dimensions.

::: code-group

```html [HTML]
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside&we">
```

```md [Markdown]
![Without enlargement](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside&we)
```

:::
