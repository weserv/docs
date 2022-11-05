# Mask

Controls the visible and non-visible area of the image.

## Mask type <QueryString field="mask" />

Sets the mask type from a predefined list of shapes.

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

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Mask type](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&h=300&fit=cover&mask=circle')" alt="Mask type">
</a>

## Mask trim <QueryString field="mtrim" bool="true" />

Removes the remaining whitespace from the mask.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Mask trim](https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim" target="_blank">
  <img :src="$withBase('/static/lichtenstein.jpg?w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim')" alt="Mask trim">
</a>

## Mask background <QueryString field="mbg" />

Sets the background color of the mask. See [here](adjustment.md#background) for the supported color formats.

<CodeGroup>
<CodeGroupItem title="HTML" active>
```html
<img src="//wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red">
```
</CodeGroupItem>

<CodeGroupItem title="Markdown">
```md
![Mask background](https://wsrv.nl/?url=wsrv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red)
```
</CodeGroupItem>
</CodeGroup>

<a href="/?url=wsrv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red" target="_blank">
  <img :src="$withBase('/static/transparency_demo.png?w=400&bg=black&mask=heart&mbg=red')" alt="Mask background">
</a>
