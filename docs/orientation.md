# Orientation

Change the orientation of your image, by either flipping along its axes or rotating around the center.

## Flip <QueryString field="flip" bool="true" />

Flip the image about the vertical Y axis. This always occurs after rotation, if any.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&flip">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Flip](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&flip)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&h=300&flip" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?h=300&flip')" alt="Flip">
</a>

## Flop <QueryString field="flop" bool="true" />

Flop the image about the horizontal X axis. This always occurs after rotation, if any.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&flop">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Flop](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&flop)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&h=300&flop" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?h=300&flop')" alt="Flop">
</a>

## Rotation <QueryString field="ro" />

Rotates the image by either an explicit angle or auto-orient based on the EXIF `Orientation` tag.

If an angle is specified, it is converted to a valid positive degree rotation. For example, `-450` will
produce a `270` degree rotation. When rotating by an angle other than a multiple of 90, the background
color can be provided with the `&rbg=` parameter. See [here](adjustment.md#background) for the supported color formats.

If no angle is provided, it is determined from the EXIF data.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&ro=45&rbg=red">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Rotation](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&h=300&ro=45&rbg=red)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&h=300&ro=45&rbg=red" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?h=300&ro=45&rbg=red')" alt="Rotation">
</a>
