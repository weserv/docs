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

```html
<img src="//images.weserv.nl/?url=ory.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle">
```
![Mask type](/?url=ory.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&mask=circle)

## Mask trim <Parameter text="&mtrim"/>

Removes the remaining whitespace from the mask.

```html
<img src="//images.weserv.nl/?url=ory.weserv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim">
```
![Mask trim](/?url=ory.weserv.nl/lichtenstein.jpg&w=300&h=900&fit=cover&a=crop-22-0&mask=circle&mtrim)

## Mask background <Parameter text="&mbg="/>

Sets the background color of the mask. See [here](adjustment.md#background) for the supported color formats.

```html
<img src="//images.weserv.nl/?url=ory.weserv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red">
```
![Mask background](/?url=ory.weserv.nl/transparency_demo.png&w=400&bg=black&mask=heart&mbg=red)
