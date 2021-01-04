# Mask

Controls the visible and non-visible area of the image.

## Mask type <Parameter text="&mask="/>

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

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle">
```
</code-block>

<code-block title="Markdown">
```md
![Mask type](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle)
```
</code-block>
</code-group>

[![Mask type](/static/lichtenstein.jpg?w=300&h=300&fit=cover&mask=circle)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle)

## Mask trim <Parameter text="&mtrim"/>

Removes the remaining whitespace from the mask.

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim">
```
</code-block>

<code-block title="Markdown">
```md
![Mask trim](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim)
```
</code-block>
</code-group>

[![Mask trim](/static/lichtenstein.jpg?w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim)

## Mask background <Parameter text="&mbg="/>

Sets the background color of the mask. See [here](adjustment.md#background) for the supported color formats.

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red">
```
</code-block>

<code-block title="Markdown">
```md
![Mask background](https://images.weserv.nl/?url=images.weserv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red)
```
</code-block>
</code-group>

[![Mask background](/static/transparency_demo.png?w=400&bg=black&mask=heart&mbg=red)](/?url=images.weserv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red)
