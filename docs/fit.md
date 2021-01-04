# Fit

Controls how the image is fitted to its target dimensions. Below are a couple of examples. Some of these
values are based on the [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property.

## Inside <Parameter text="&fit=inside"/>

Default. Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions
are less than or equal to both those specified.

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=inside">
```
</code-block>

<code-block title="Markdown">
```md
![Inside](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=inside)
```
</code-block>
</code-group>

[![Inside](/static/lichtenstein.jpg?w=300&h=300&fit=inside)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=inside)

## Outside <Parameter text="&fit=outside"/><Badge text="New!" type="warn" vertical="middle"/>

Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are
greater than or equal to both those specified.

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=outside">
```
</code-block>

<code-block title="Markdown">
```md
![Outside](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=outside)
```
</code-block>
</code-group>

[![Outside](/static/lichtenstein.jpg?w=300&h=300&fit=outside)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=outside)

## Cover <Parameter text="&fit=cover"/>

Crop the image to cover both provided dimensions.

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover">
```
</code-block>

<code-block title="Markdown">
```md
![Cover](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover)
```
</code-block>
</code-group>

[![Cover](/static/lichtenstein.jpg?w=300&h=300&fit=cover)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover)

## Fill <Parameter text="&fit=fill"/>

Ignore the aspect ratio of the input and stretch to both provided dimensions.

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=fill">
```
</code-block>

<code-block title="Markdown">
```md
![Fill](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=fill)
```
</code-block>
</code-group>

[![Fill](/static/lichtenstein.jpg?w=300&h=300&fit=fill)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=fill)

## Contain <Parameter text="&fit=contain"/>

Embed within both provided dimensions. The remaining space can be filled with a background color by
using `&cbg=`. See [here](adjustment.md#background) for the supported color formats.

More info: [Issue #80 - letterbox images that need to fit](https://github.com/weserv/images/issues/80).

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=contain&cbg=black">
```
</code-block>

<code-block title="Markdown">
```md
![Contain](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=contain&cbg=black)
```
</code-block>
</code-group>

[![Contain](/static/lichtenstein.jpg?w=300&h=300&fit=contain&cbg=black)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=contain&cbg=black)

## Without enlargement <Parameter text="&we"/>

Do not enlarge if the width or height are already less than the specified dimensions.

<code-group>
<code-block title="HTML" active>
```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=inside&we">
```
</code-block>

<code-block title="Markdown">
```md
![Without enlargement](https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=inside&we)
```
</code-block>
</code-group>
