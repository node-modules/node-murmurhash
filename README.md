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

### 1.0.0

```bash
$ node test/benchmark.js

murmurhash2js 3389647783
murmurhash 3389647783
murmurhash2js 3864203294
murmurhash 3300337389

  node version: v0.11.14, date: Thu Sep 25 2014 09:38:23 GMT+0800 (CST)
  Starting...
  4 tests completed.

  murmurhash(ascii)    x 9,042,734 ops/sec ±1.69% (92 runs sampled)
  murmurhash2js(ascii) x 8,044,771 ops/sec ±1.21% (93 runs sampled)
  murmurhash(utf8)     x 8,212,544 ops/sec ±1.15% (100 runs sampled)
  murmurhash2js(utf8)  x 4,489,553 ops/sec ±1.12% (96 runs sampled)
```

### 0.0.4

```bash
$ node test/benchmark.js
3389647783
3389647783
3864203294
3300337389
murmurhash(ascii)      x 3,528,969 ops/sec ±4.52% (85 runs sampled)
murmurhash2js(ascii)   x 4,386,007 ops/sec ±2.50% (93 runs sampled)
murmurhash(utf8)       x 3,631,370 ops/sec ±3.10% (94 runs sampled)
murmurhash2js(utf8)    x 2,514,194 ops/sec ±1.43% (94 runs sampled)
```

## Totoro Cross platform test

```bash
$ totoro --runner test/murmurhash.test.js \
	-b 'linux/node/0.11,linux/node/0.10,windowsXP/node/0.11,windows7/node/0.11,windowsXP/node/0.10,windows7/node/0.10'
info tgz.js:42 | tgz /Users/mk2/git/node-murmurhash/ by req: /test/murmurhash.test.js?__totoro_root_tgz=true
info index.js:162 | proxyRes, path: /test/murmurhash.test.js?__totoro_root_tgz=true, status: 200, body size: 78760
info index.js:124 | Labor < linux/node/0.11 > finished order.
info index.js:124 | Labor < linux/node/0.10 > finished order.
info index.js:124 | Labor < windowsXP/node/0.10 > finished order.
info index.js:124 | Labor < windowsXP/node/0.11 > finished order.
info index.js:124 | Labor < windows7/node/0.10 > finished order.
info index.js:124 | Labor < windows7/node/0.11 > finished order.

  node 0.10 / linux 2.6
  Passed all of 2 tests in 623ms
    > [runner] ip: 10.232.19.167, driver version: 0.1.10, node version: v0.10.29

  node 0.11 / linux 2.6
  Passed all of 2 tests in 892ms
    > [runner] ip: 10.125.6.246, driver version: 0.1.10, node version: v0.11.12

  node 0.10 / windows7 7
  Passed all of 2 tests in 1172ms
    > [runner] ip: 10.15.52.89, driver version: 0.1.10, node version: v0.10.29

  node 0.11 / windows7 7
  Passed all of 2 tests in 1344ms
    > [runner] ip: 10.15.52.89, driver version: 0.1.10, node version: v0.11.12

  node 0.10 / windowsXP XP
  Passed all of 2 tests in 2485ms
    > [runner] ip: 10.15.52.88, driver version: 0.1.10, node version: v0.10.29

  node 0.11 / windowsXP XP
  Passed all of 2 tests in 2718ms
    > [runner] ip: 10.15.52.88, driver version: 0.1.10, node version: v0.11.12

===============================
  Passed on all of 6 browsers
===============================
```

## License

(The MIT License)

Copyright (c) 2013 - 2014 fengmk2 &lt;fengmk2@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
