# Fit

Controls how the image is fitted to its target dimensions. Below are a couple of examples. Some of these
values are based on the [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property.

## Inside <QueryString field="fit" value="inside" />

Default. Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions
are less than or equal to both those specified.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Inside](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&h=300&fit=inside')" alt="Inside">
</a>

## Outside <QueryString field="fit" value="outside" />

Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are
greater than or equal to both those specified.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=outside">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Outside](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=outside)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=outside" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&h=300&fit=outside')" alt="Outside">
</a>

## Cover <QueryString field="fit" value="cover" />

Crop the image to cover both provided dimensions.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Cover](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&h=300&fit=cover')" alt="Cover">
</a>

## Fill <QueryString field="fit" value="fill" />

Ignore the aspect ratio of the input and stretch to both provided dimensions.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=fill">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Fill](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=fill)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=fill" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&h=300&fit=fill')" alt="Fill">
</a>

## Contain <QueryString field="fit" value="contain" />

Embed within both provided dimensions. The remaining space can be filled with a background color by
using `&cbg=`. See [here](adjustment.md#background) for the supported color formats.

More info: [Issue #80 - letterbox images that need to fit](https://github.com/weserv/images/issues/80).

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=contain&cbg=black">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Contain](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=contain&cbg=black)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=contain&cbg=black" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&h=300&fit=contain&cbg=black')" alt="Contain">
</a>

## Without enlargement <QueryString field="we" bool="true" />

Do not enlarge if the width or height are already less than the specified dimensions.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside&we">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Without enlargement](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=inside&we)
```
</CodeGroupItem>
</CodeGroup>
