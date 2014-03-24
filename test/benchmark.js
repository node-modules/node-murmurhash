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
// var UINT32 = require('cuint').UINT32;
var murmurhash = require('../');

var MURMURHASH_M = 0x5bd1e995;
//
// function murmur(key, seed) {
//   if (typeof seed !== 'number') {
//     seed = 97;
//   }
//   var len = key.length;
//   var h = UINT32(seed ^ len);
//   var index = 0;
//
//   while (len >= 4) {
//     // var k = (key[index] & 0xff)
//     //   | ((key[index + 1] << 8) & 0xff00)
//     //   | ((key[index + 2] << 16) & 0xff0000)
//     //   | (key[index + 3] << 24);
//     var k = UINT32(key[index]).or(
//       UINT32(key[index + 1]).shiftLeft(8)
//     ).or(
//       UINT32(key[index + 2]).shiftLeft(16)
//     ).or(
//       UINT32(key[index + 3]).shiftLeft(24)
//     );
//
//     // k *= MURMURHASH_M;
//     k.multiply(MURMURHASH_M);
//     // k ^= (k >>> 24);
//     k.xor(k.clone().shiftRight(24));
//     // k *= MURMURHASH_M;
//     k.multiply(MURMURHASH_M);
//     // h *= MURMURHASH_M;
//     h.multiply(MURMURHASH_M);
//     // h ^= k;
//     h.xor(k);
//     index += 4;
//     len -= 4;
//   }
//
//   switch (len) {
//     case 3:
//       // h ^= (key[index + 2] << 16);
//       h.xor(UINT32(key[index + 2]).shiftLeft(16));
//       break;
//     case 2:
//       // h ^= (key[index + 1] << 8);
//       h.xor(UINT32(key[index + 1]).shiftLeft(8));
//       break;
//     case 1:
//       // h ^= key[index];
//       h.xor(UINT32(key[index]));
//       // h *= MURMURHASH_M;
//       h.multiply(MURMURHASH_M);
//       break;
//   }
//
//   // h ^= (h >>> 13);
//   h.xor(h.clone().shiftRight(13));
//   // h *= MURMURHASH_M;
//   h.multiply(MURMURHASH_M);
//   // h ^= (h >>> 15);
//   h.xor(h.clone().shiftRight(15));
//   return h.toNumber()>>>0;
// }

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
};

var ascii = new Buffer('haha, this is a key');
// var ascii = new Buffer('a');
var utf8 = new Buffer([
  0, 4, 111, 108, 95, 99, 51, 95, 117, 95, 105, 112, 95, -27, -116, -105, -26,
  -98, -127, -25, -69, -110, -25, -122, -108, -24, -98, -115, -28, -72, -109,
  -27, -115, -106, -27, -70, -105, 95, 112
]);

console.log('murmurhash2js', murmurhash2js(ascii));
// console.log('murmur', murmur(ascii));
console.log('murmurhash', murmurhash(ascii));

console.log('murmurhash2js', murmurhash2js(utf8));
// console.log('murmur', murmur(utf8));
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

// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();
