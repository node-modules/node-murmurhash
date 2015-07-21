/**!
 * node-modules - lib/murmur.js
 *
 * Copyright(c) node-modules and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 *   zhangzifa <tonyzzf@163.com> (https://github.com/zhangzifa)
 */

'use strict';

/**
 * Module dependencies.
 */

module.exports = murmurhash2js;

var MURMURHASH_M = 0x5bd1e995;

function negative(num) {
  if (num < 127) {
    return num;
  }
  return num | 0xffffff00
}

var imul = (function () {
  if (Math.imul) {
    return Math.imul;
  } else {
    return function (a, b) {
      return ((((a >> 16) * b) & 0xffff) << 16) + ((a & 0xffff) * b)
    }
  }
})()

function murmurhash2js(key, seed) {
  var l = key.length;
  var h = seed ^ l;
  var i = 0;
  var k = 0;

  while (l >= 4) {
    k = (key[i] |
      (key[i + 1] << 8) |
      (key[i + 2] << 16) |
      (key[i + 3] << 24));

    // js 中，Number 能表示的最高精度整数是 (2 ** 53 - 1)，
    // 此处两个 32 位整数相乘时，有可能产生 64 位的结果，导致精度丢失。
    k = imul(k, MURMURHASH_M)

    k ^= k >>> 24;
    k = imul(k, MURMURHASH_M)

    h = imul(h, MURMURHASH_M) ^ k

    l -= 4;
    i += 4;
  }

  switch (l) {
    case 3:
      h ^= negative(key[i + 2]) << 16;
    case 2:
      h ^= negative(key[i + 1]) << 8;
    case 1:
      h ^= negative(key[i]);
      h = imul(h, MURMURHASH_M)
  }

  h ^= h >>> 13;
  h = imul(h, MURMURHASH_M)
  h ^= h >>> 15;

  return h >>> 0;
}
