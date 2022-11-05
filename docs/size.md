# Size

Controls how the image needs to be resized. You can use both `&w=` and `&h=` parameters or only one
of them: the other dimension is automatically updated.

## Width <QueryString field="w" />

Sets the width of the image, in pixels.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Width](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300')" alt="Width">
</a>

## Height <QueryString field="h" />

Sets the height of the image, in pixels.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Height](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&h=300" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?h=300')" alt="Height">
</a>

## Device pixel ratio <QueryString field="dpr" />

The device pixel ratio is used to easily convert between CSS pixels and device pixels. This makes it
possible to display images at the correct pixel density on a variety of devices such as Apple devices with
Retina Displays and Android devices. You must specify either a width, a height, or both for this parameter
to work. Use values between `1` and `8`.

More info: [Issue #115 - DPI support](https://github.com/weserv/images/issues/115).

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=144&dpr=2">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Device pixel ratio](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=144&dpr=2)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&h=144&dpr=2" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?h=144&dpr=2')" alt="Device pixel ratio">
</a>
