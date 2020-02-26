# image-sizer

![npm](https://img.shields.io/npm/v/srcset-generator?color=blue)
![Travis Build](https://img.shields.io/travis/redhair/srcset-generator)
![Dependencies](https://img.shields.io/david/redhair/srcset-generator)
![Codecov](https://img.shields.io/codecov/c/github/redhair/srcset-generator)
![MIT License](https://img.shields.io/github/license/redhair/srcset-generator)
![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)

> Zero dependency srcset generator.

## Install

```bash
npm install srcset-generator
```

## API

```js
import generateImageSizes from 'srcset-generator';

const { thumb, sm, md, lg, xl } = generateImageSizes(file);
```

## TODO

- Quality setting
- Output style (dataURI, file, canvas, img, blob)
