/*!
 * node-murmurhash - test/benchmark.js
 *
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var Benchmark = require('benchmark');
var benchmarks = require('beautify-benchmark');
var murmurhash = require('../');

var MURMURHASH_M = 0x5bd1e995;

function murmurhash2js(key, seed) {
  if (typeof seed !== 'number') {
    seed = 97;
  }
  var l = key.length;
  var h = seed ^ l;
  var i = 0;
  var k = null;

  while (l >= 4) {
    k = ((key[i] & 0xff)) |
      ((key[++i] & 0xff) << 8) |
      ((key[++i] & 0xff) << 16) |
      ((key[++i] & 0xff) << 24);

    k = (((k & 0xffff) * MURMURHASH_M) + ((((k >>> 16) * MURMURHASH_M) & 0xffff) << 16));
    k ^= k >>> 24;
    k = (((k & 0xffff) * MURMURHASH_M) + ((((k >>> 16) * MURMURHASH_M) & 0xffff) << 16));

    h = (((h & 0xffff) * MURMURHASH_M) + ((((h >>> 16) * MURMURHASH_M) & 0xffff) << 16)) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (key[i + 2] & 0xff) << 16;
    case 2:
      h ^= (key[i + 1] & 0xff) << 8;
    case 1:
      h ^= (key[i] & 0xff);
      h = (((h & 0xffff) * MURMURHASH_M) + ((((h >>> 16) * MURMURHASH_M) & 0xffff) << 16));
  }

  h ^= h >>> 13;
  h = (((h & 0xffff) * MURMURHASH_M) + ((((h >>> 16) * MURMURHASH_M) & 0xffff) << 16));
  h ^= h >>> 15;

  return h >>> 0;
}

var ascii = new Buffer('haha, this is a key');
var utf8 = new Buffer([
  0, 4, 111, 108, 95, 99, 51, 95, 117, 95, 105, 112, 95, -27, -116, -105, -26,
  -98, -127, -25, -69, -110, -25, -122, -108, -24, -98, -115, -28, -72, -109,
  -27, -115, -106, -27, -70, -105, 95, 112
]);

console.log('murmurhash2js', murmurhash2js(ascii));
console.log('murmurhash', murmurhash(ascii));

console.log('murmurhash2js', murmurhash2js(utf8));
console.log('murmurhash', murmurhash(utf8));

var suite = new Benchmark.Suite();

suite
.add('murmurhash(ascii)', function () {
  murmurhash(ascii);
})
.add('murmurhash2js(ascii)', function () {
  murmurhash2js(ascii);
})
.add('murmurhash(utf8)', function () {
  murmurhash(utf8);
})
.add('murmurhash2js(utf8)', function () {
  murmurhash2js(utf8);
})

.on('cycle', function(event) {
  benchmarks.add(event.target);
})
.on('start', function(event) {
  console.log('\n  node version: %s, date: %s\n  Starting...', process.version, Date());
})
.on('complete', function done() {
  benchmarks.log();
})
.run({ 'async': false });
