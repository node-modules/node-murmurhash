/*!
 * node-murmurhash - test/benchmark.js
 *
 * Copyright(c) fengmk2 <fengmk2@gmail.com> (http://fengmk2.com)
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var Benchmark = require('benchmark');
var benchmarks = require('beautify-benchmark');
var murmurhash = require('../');

var ascii = new Buffer('haha, this is a key');
var utf8 = new Buffer([
  0, 4, 111, 108, 95, 99, 51, 95, 117, 95, 105, 112, 95, -27, -116, -105, -26,
  -98, -127, -25, -69, -110, -25, -122, -108, -24, -98, -115, -28, -72, -109,
  -27, -115, -106, -27, -70, -105, 95, 112
]);

console.log('murmurhash should be 3389647783: ', murmurhash(ascii));
console.log('murmurhash utf8 should be 3300337389: ', murmurhash(utf8));
console.log('murmurhash with custom key should be: 4040304760', murmurhash(utf8, 12333));
console.log("murmurhash('hello 中国') should be 1248731102: %s", murmurhash(new Buffer('hello 中国')));

var suite = new Benchmark.Suite();

suite
.add('murmurhash(ascii)', function () {
  murmurhash(ascii);
})
.add('murmurhash(utf8)', function () {
  murmurhash(utf8);
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
