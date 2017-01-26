'use strict';

var Benchmark = require('benchmark');
var benchmarks = require('beautify-benchmark');
var murmurhash = require('../');

var asciiBuffer = new Buffer('haha, this is key');
var utf8Buffer = new Buffer('快使用双节棍，嘿嘿嘿嘿。');
var asciiString = 'haha, this is key';
var utf8String = '快使用双节棍，嘿嘿嘿嘿。';

console.log('murmurhash should be 335538535: %s', murmurhash(asciiBuffer));
console.log('murmurhash utf8 should be 705333708: %s', murmurhash(utf8Buffer));
console.log('murmurhash with custom key should be 2639541842: %s', murmurhash(utf8Buffer, 12333));
console.log("murmurhash('hello 中国') should be 1248731102: %s", murmurhash('hello 中国'));

var suite = new Benchmark.Suite();

suite
.add("murmurhash(new Buffer('haha, this is key'))", function () {
  murmurhash(asciiBuffer);
})
.add("murmurhash(new Buffer('快使用双节棍，嘿嘿嘿嘿。'))", function () {
  murmurhash(utf8Buffer);
})
.add("murmurhash('haha, this is key')", function () {
  murmurhash(asciiString);
})
.add("murmurhash('快使用双节棍，嘿嘿嘿嘿。')", function () {
  murmurhash(utf8String);
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
