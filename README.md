# srcset-generator

![npm](https://img.shields.io/npm/v/srcset-generator?color=limegreen)
![Travis Build](https://img.shields.io/travis/redhair/srcset-generator)
![Dependencies](https://img.shields.io/david/redhair/srcset-generator)
![Codecov](https://img.shields.io/codecov/c/github/redhair/srcset-generator)
![MIT License](https://img.shields.io/github/license/redhair/srcset-generator)

> Zero dependency srcset generator.

## Install

```bash
npm i srcset-generator
```

## Usage

```js
import generateImageSizes from 'srcset-generator';

const { thumb, sm, md, lg, xl } = generateImageSizes(file);
```

## Examples

[ES6](https://codesandbox.io/s/srcset-generator-h25p9)

## TODO

- Quality setting
- Output style (dataURI, file, canvas, img, blob)
- Add Live example (codesandbox)
- Add browser installation
- Add ES5 example
