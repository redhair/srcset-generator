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
import getSrcset from 'srcset-generator';

const srcset = getSrcset(file);
```

## Examples

[React](https://codesandbox.io/s/srcset-generator-h25p9)

## API

### getSrcset(source, [options])

#### source

Type: `File`

The source file to generate from.

#### options

Type: `Object`

##### sizes

Type: `Object`<br>
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

##### quality

Type: `Number`<br>
Default: `100`

##### output

Type `string`<br>
Default: `canvas`
Options:

- `canvas`
- `uri`
- `file`
- `img`
- `blob`

## TODO

- Quality option
- Add more live examples
- Add browser installation (umd script tag)
- Add VanillaJS example
