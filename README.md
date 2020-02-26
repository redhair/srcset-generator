# srcset-generator

![npm](https://img.shields.io/npm/v/srcset-generator?color=limegreen)
![Travis Build](https://img.shields.io/travis/redhair/srcset-generator)
![Dependencies](https://img.shields.io/david/redhair/srcset-generator)
![Codecov](https://img.shields.io/codecov/c/github/redhair/srcset-generator)
![MIT License](https://img.shields.io/github/license/redhair/srcset-generator)

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
- Add Live example (codesandbox)
