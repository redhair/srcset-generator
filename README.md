# image-sizer

![Version](https://img.shields.io/github/package-json/v/redhair/image-sizer)
![Travis Build](https://img.shields.io/travis/redhair/image-sizer)
![Dependencies](https://img.shields.io/david/redhair/image-sizer)
![MIT License](https://img.shields.io/github/license/redhair/image-sizer)
![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)

> Zero dependency image size generator.

## Install

```bash
npm install image-sizer
```

## API

```js
import { generateImageSizes } from 'image-sizer';

/**
 * Takes the source image and generates
 * different sized images based on a pixel
 * limit. In this case if the input image
 * was 1920x1080, the "large" image would be
 * 1000x562, the "mid" image would be 500x281.
 * The "thumb" image would be 100x56.
 *
 * The aspect ratio is always maintained and
 * the first value (height or width) to hit
 * the specified limit will stop the process.
 * */

const { thumb, md, lg } = generateImageSizes({
  source: file, //File Object
  sizes: {
    thumb: 100,
    md: 500,
    lg: 1000
  }
});
```
