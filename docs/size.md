# Size

Controls how the image needs to be resized. You can use both `&w=` and `&h=` parameters or only one
of them: the other dimension is automatically updated.

## Width <Parameter text="&w="/>

Sets the width of the image, in pixels.

```html
<img src="//images.weserv.nl/?url=ory.weserv.nl/lichtenstein.jpg&w=300">
```
![Width](/?url=ory.weserv.nl/lichtenstein.jpg&w=300)

## Height <Parameter text="&h="/>

Sets the height of the image, in pixels.

```html
<img src="//images.weserv.nl/?url=ory.weserv.nl/lichtenstein.jpg&h=300">
```
![Height](/?url=ory.weserv.nl/lichtenstein.jpg&h=300)

## Device pixel ratio <Parameter text="&dpr="/>

The device pixel ratio is used to easily convert between CSS pixels and device pixels. This makes it
possible to display images at the correct pixel density on a variety of devices such as Apple devices with
Retina Displays and Android devices. You must specify either a width, a height, or both for this parameter
to work. Use values between `1` and `8`.

More info: [Issue #115 - DPI support](https://github.com/weserv/images/issues/115).

```html
<img src="//images.weserv.nl/?url=ory.weserv.nl/lichtenstein.jpg&h=144&dpr=2">
```
![Device pixel ratio](/?url=ory.weserv.nl/lichtenstein.jpg&h=144&dpr=2)
