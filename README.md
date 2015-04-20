node-murmurhash
=======

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/node-murmurhash.svg?style=flat-square
[npm-url]: https://npmjs.org/package/node-murmurhash
[travis-image]: https://img.shields.io/travis/node-modules/node-murmurhash.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/node-murmurhash
[coveralls-image]: https://img.shields.io/coveralls/node-modules/node-murmurhash.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/node-modules/node-murmurhash?branch=master
[gittip-image]: https://img.shields.io/gittip/fengmk2.svg?style=flat-square
[gittip-url]: https://www.gittip.com/fengmk2/
[david-image]: https://img.shields.io/david/node-modules/node-murmurhash.svg?style=flat-square
[david-url]: https://david-dm.org/node-modules/node-murmurhash
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/node-murmurhash.svg?style=flat-square
[download-url]: https://npmjs.org/package/node-murmurhash

murmurhash V2, support utf8 Buffer.

## Install

```bash
$ npm install node-murmurhash --save
```

## Usage

```js
var murmurhash = require('node-murmurhash');

murmurhash('hello 中国', 97); // 1248731102
```

## Benchmark

@see [benchmark.md](benchmark.md)

## License

[MIT](LICENSE.txt)
