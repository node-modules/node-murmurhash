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

## Node versions

- ~~node 0.11.12: use `node-murmurhash@0.0.x`~~
- node 0.10.x | 0.11.x: use `node-murmurhash@>=1.1.0`
- node >= 0.12.0: use `node-murmurhash@>=1.1.0`
- iojs >= 1.0.0: use `node-murmurhash@>=1.1.0`

### Windows

Only support **x86**

## Usage

```js
var murmurhash = require('node-murmurhash');

murmurhash('hello 中国', 97); // 1248731102
```

## Benchmark

@see [benchmark.md](benchmark.md)

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

[MIT](LICENSE.txt)
