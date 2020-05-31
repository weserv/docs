# Quick reference

| Name                    | GET             | Description                                                             |                               |
| ------------------------|-----------------|-------------------------------------------------------------------------|------------------------------:|
| Width                   | `w`             | Sets the width of the image, in pixels.                                 | [info][width]                 |
| Height                  | `h`             | Sets the height of the image, in pixels.                                | [info][height]                |
| Device pixel ratio      | `dpr`           | Sets the output density of the image.                                   | [info][dpr]                   |
| Fit                     | `fit`           | Sets how the image is fitted to its target dimensions.                  | [info][fit]                   |
| Contain background      | `cbg`           | Sets the background color when using `&fit=contain`.                    | [info][contain-bg]            |
| Without enlargement     | `we`            | Do not enlarge the image.                                               | [info][without-enlargement]   |
| Alignment position      | `a`             | Sets how the image is aligned.                                          | [info][alignment-position]    |
| Rectangle crop          | `crop`          | Crops the image to specific dimensions.                                 | [info][rectangle-crop]        |
| Pre-resize crop         | `precrop`       | A pre-resize crop behaviour.                                            | [info][rectangle-crop]        |
| Trim                    | `trim`          | Trim "boring" pixels from all edges.                                    | [info][trim]                  |
| Masking                 | `mask`          | Sets the mask type from a predefined list.                              | [info][mask]                  |
| Mask trim               | `mtrim`         | Removes the remaining whitespace from the mask.                         | [info][mask-trim]             |
| Mask background         | `mbg`           | Sets the background color of the mask.                                  | [info][mask-bg]               |
| Flip                    | `flip`          | Flip the image about the vertical Y axis.                               | [info][flip]                  |
| Flop                    | `flop`          | Flop the image about the horizontal X axis.                             | [info][flop]                  |
| Rotation                | `ro`            | Rotates the image.                                                      | [info][rotation]              |
| Rotation background     | `rbg`           | Sets the background color when rotating by arbitrary angles.            | [info][rotation-bg]           |
| Background              | `bg`            | Sets the background color of the image.                                 | [info][background]            |
| Blur                    | `blur`          | Adds a blur effect to the image.                                        | [info][blur]                  |
| Contrast                | `con`           | Adjusts the image contrast.                                             | [info][contrast]              |
| Filter                  | `filt`          | Applies a filter effect to the image.                                   | [info][filter]                |
| Gamma                   | `gam`           | Adjusts the image gamma.                                                | [info][gamma]                 |
| Modulate                | `mod`           | Transforms the image using brightness, saturation and hue rotation.     | [info][modulate]              |
| Saturation              | `sat`           | Adjusts the saturation of the image.                                    | [info][saturation]            |
| Hue rotation            | `hue`           | Applies a hue rotation to the image.                                    | [info][hue-rotation]          |
| Sharpen                 | `sharp`         | Sharpen the image.                                                      | [info][sharpen]               |
| Tint                    | `tint`          | Tint the image.                                                         | [info][tint]                  |
| Adaptive filter         | `af`            | A filter algorithm that can be applied before compression.              | [info][adaptive-filter]       |
| Base64 (data URL)       | `encoding`      | Encodes the image to be used directly in the `src=` of the `<img>`-tag. | [info][base64]                |
| Cache-Control           | `maxage`        | How long an image should be cached by the browser.                      | [info][cache-control]         |
| Compression level       | `l`             | The zlib compression level.                                             | [info][compression-level]     |
| Default image           | `default`       | Redirects to a default image when there is a problem loading an image.  | [info][default]               |
| Filename                | `filename`      | To specify the filename.                                                | [info][filename]              |
| Interlace / progressive | `il`            | Adds interlacing to GIF and PNG. JPEG's become progressive.             | [info][interlace-progressive] |
| Number of pages         | `n`             | To select the the number of pages to render.                            | [info][n-pages]               |
| Output                  | `output`        | Encodes the image to a specific format.                                 | [info][output]                |
| Page                    | `page`          | To load a given page.                                                   | [info][page]                  |
| Quality                 | `q`             | Defines the quality of the image.                                       | [info][quality]               |

[width]: size.md#width
[height]: size.md#height
[dpr]: size.md#device-pixel-ratio
[fit]: fit.md
[contain-bg]: fit.md#contain
[without-enlargement]: fit.md#without-enlargement
[alignment-position]: crop.md#alignment-position
[rectangle-crop]: crop.md#rectangle-crop
[trim]: crop.md#trim
[mask]: mask.md#mask-type
[mask-trim]: mask.md#mask-trim
[mask-bg]: mask.md#mask-background
[flip]: orientation.md#flip
[flop]: orientation.md#flop
[rotation]: orientation.md#rotation
[rotation-bg]: orientation.md#rotation
[background]: adjustment.md#background
[blur]: adjustment.md#blur
[contrast]: adjustment.md#contrast
[filter]: adjustment.md#filter
[gamma]: adjustment.md#gamma
[modulate]: adjustment.md#modulate
[saturation]: adjustment.md#saturation
[hue-rotation]: adjustment.md#hue-rotation
[sharpen]: adjustment.md#sharpen
[tint]: adjustment.md#tint
[adaptive-filter]: format.md#adaptive-filter
[base64]: format.md#base64-data-url
[cache-control]: format.md#cache-control
[compression-level]: format.md#compression-level
[default]: format.md#default-image
[filename]: format.md#filename
[interlace-progressive]: format.md#interlace-progressive
[n-pages]: format.md#number-of-pages
[output]: format.md#output
[page]: format.md#page
[quality]: format.md#quality
