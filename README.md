node-murmurhash
=======

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/node-murmurhash.svg?style=flat-square
[npm-url]: https://npmjs.org/package/node-murmurhash
[travis-image]: https://img.shields.io/travis/node-modules/node-murmurhash.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/node-murmurhash
[codecov-image]: https://codecov.io/github/node-modules/node-murmurhash/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/node-modules/node-murmurhash?branch=master
[david-image]: https://img.shields.io/david/node-modules/node-murmurhash.svg?style=flat-square
[david-url]: https://david-dm.org/node-modules/node-murmurhash
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

```
node version: v4.2.1, date: Tue Dec 01 2015 14:06:01 GMT+0800 (CST)

Starting...
4 tests completed.

murmurhash(new Buffer('haha, this is key')) x 18,416,878 ops/sec ±0.70% (96 runs sampled)
murmurhash(new Buffer('快使用双节棍，嘿嘿嘿嘿。'))      x 12,709,085 ops/sec ±0.80% (93 runs sampled)
murmurhash('haha, this is key')             x    804,541 ops/sec ±24.21% (90 runs sampled)
murmurhash('快使用双节棍，嘿嘿嘿嘿。')                  x    797,345 ops/sec ±0.93% (92 runs sampled)
```

see also: [benchmark.js](test/benchmark.js)


## License

[MIT](LICENSE.txt)
