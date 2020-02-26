# srcset-generator

[![Travis Build](https://img.shields.io/travis/redhair/srcset-generator)](https://travis-ci.org/redhair/srcset-generator)
[![Codecov](https://img.shields.io/codecov/c/github/redhair/srcset-generator)](https://codecov.io/gh/redhair/srcset-generator)
![Dependencies](https://img.shields.io/david/redhair/srcset-generator)

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

## API

### generateImageSizes(source, [options])

#### source

Type: `File`

The source file to generate from.

#### sizes

Type: `Object`
Default:

```js
{
  thumb: 100,
  sm: 400,
  md: 600,
  lg: 1024,
  xl: 1280
}
```

<!--
#### options

Type: `Object`

##### quality

Type: `Number`<br>
Default: `100`

##### output

Type `string`<br>
Default: `canvas` -->

## TODO

- Quality setting
- Output style (dataURI, file, canvas, img, blob)
- Add Live example (codesandbox)
- Add browser installation
- Add ES5 example
