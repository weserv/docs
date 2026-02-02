---
aside: false
---

# Quick reference

| Name                    | GET        | Description                                                            |                               |
| ----------------------- | ---------- |------------------------------------------------------------------------| ----------------------------: |
| Width                   | `w`        | Set the width of the image, in pixels or as a percentage.              |                 [info][width] |
| Height                  | `h`        | Set the height of the image, in pixels or as a percentage.             |                [info][height] |
| Device pixel ratio      | `dpr`      | Set the output density of the image.                                   |                   [info][dpr] |
| Fit                     | `fit`      | Set how the image is fitted to its target dimensions.                  |                   [info][fit] |
| Contain background      | `cbg`      | Set the background color when using `&fit=contain`.                    |            [info][contain-bg] |
| Without enlargement     | `we`       | Do not enlarge the image.                                              |   [info][without-enlargement] |
| Alignment position      | `a`        | Set how the image is aligned.                                          |    [info][alignment-position] |
| Rectangle crop          | `crop`     | Crop the image to specific dimensions.                                 |        [info][rectangle-crop] |
| Pre-resize crop         | `precrop`  | A pre-resize crop behaviour.                                           |        [info][rectangle-crop] |
| Trim                    | `trim`     | Trim pixels from all edges.                                            |                  [info][trim] |
| Trim background         | `tbg`      | Set the background color for trimming similar values.                  |               [info][trim-bg] |
| Masking                 | `mask`     | Set the mask type from a predefined list.                              |                  [info][mask] |
| Mask trim               | `mtrim`    | Remove the remaining whitespace from the mask.                         |             [info][mask-trim] |
| Mask background         | `mbg`      | Set the background color of the mask.                                  |               [info][mask-bg] |
| Flip                    | `flip`     | Mirror the image vertically (up-down) about the x-axis.                |                  [info][flip] |
| Flop                    | `flop`     | Mirror the image horizontally (left-right) about the y-axis.           |                  [info][flop] |
| Rotation                | `ro`       | Rotate the image.                                                      |              [info][rotation] |
| Rotation background     | `rbg`      | Set the background color when rotating by arbitrary angles.            |           [info][rotation-bg] |
| Background              | `bg`       | Set the background color of the image.                                 |            [info][background] |
| Blur                    | `blur`     | Blur the image.                                                        |                  [info][blur] |
| Contrast                | `con`      | Adjust the image contrast.                                             |              [info][contrast] |
| Filter                  | `filt`     | Apply a filter effect to the image.                                    |                [info][filter] |
| Gamma                   | `gam`      | Apply a gamma correction.                                              |                 [info][gamma] |
| Modulate                | `mod`      | Transform the image using brightness, saturation and hue rotation.     |              [info][modulate] |
| Saturation              | `sat`      | Adjust the saturation of the image.                                    |            [info][saturation] |
| Hue rotation            | `hue`      | Apply a hue rotation to the image.                                     |          [info][hue-rotation] |
| Sharpen                 | `sharp`    | Sharpen the image.                                                     |               [info][sharpen] |
| Tint                    | `tint`     | Tint the image.                                                        |                  [info][tint] |
| Adaptive filter         | `af`       | A filter algorithm that can be applied before compression.             |       [info][adaptive-filter] |
| Base64 (data URL)       | `encoding` | Encode the image to be used directly in the `src=` of the `<img>`-tag. |                [info][base64] |
| Cache-Control           | `maxage`   | Specify how long the browser should cache the image.                   |         [info][cache-control] |
| Compression level       | `l`        | The zlib compression level.                                            |     [info][compression-level] |
| Lossless compression    | `ll`       | Enable lossless compression for the output image.                      |  [info][lossless-compression] |
| Default image           | `default`  | Redirect to a default image when an image fails to load.               |               [info][default] |
| Filename                | `filename` | Specify the filename in the `Content-Disposition` header               |              [info][filename] |
| Interlace / progressive | `il`       | Add interlacing to GIF and PNG. JPEG's become progressive.             | [info][interlace-progressive] |
| Number of pages         | `n`        | Select the number of pages to render.                                  |               [info][n-pages] |
| Output                  | `output`   | Encode the image to a specific format.                                 |                [info][output] |
| Page                    | `page`     | Load a specific page.                                                  |                  [info][page] |
| Quality                 | `q`        | Set the quality of the image.                                          |               [info][quality] |

[width]: size.md#width
[height]: size.md#height
[dpr]: size.md#device-pixel-ratio
[fit]: fit.md
[contain-bg]: fit.md#contain
[without-enlargement]: fit.md#without-enlargement
[alignment-position]: crop.md#alignment-position
[rectangle-crop]: crop.md#rectangle-crop
[trim]: crop.md#trim
[trim-bg]: crop.md#trim
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
[lossless-compression]: format.md#lossless-compression
[default]: format.md#default-image
[filename]: format.md#filename
[interlace-progressive]: format.md#interlace-progressive
[n-pages]: format.md#number-of-pages
[output]: format.md#output
[page]: format.md#page
[quality]: format.md#quality
