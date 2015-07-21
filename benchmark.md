# Benchmark Report

version | murmurhash(utf8) | murmurhash(ascii) | language
---     | ---              | ---               | ---
2.0.0   | 4,565,477        | 7,800,580         | js
1.0.1   | 6,978,981        | 8,238,934         | c++
1.0.0   | 8,212,544        | 9,042,734         | c++
0.0.4   | 3,631,370        | 3,528,969         | c++

## History

### 2.0.0

pure js impl

```bash
$ node test/benchmark.js

murmurhash2js 3389647783
murmurhash 3389647783
murmurhash2js 4040304760
murmurhash 4040304760
murmurhash2js utf8 3300337389
murmurhash utf8 3300337389
murmurhash('hello 中国'): 1248731102
murmurhash2js('hello 中国'): 1248731102

node version: v1.7.1, date: Mon Apr 20 2015 17:44:59 GMT+0800 (CST)
Starting...
4 tests completed.

murmurhash(ascii)    x 8,677,245 ops/sec ±0.94% (98 runs sampled)
murmurhash2js(ascii) x 7,800,580 ops/sec ±3.29% (89 runs sampled)
murmurhash(utf8)     x 7,154,121 ops/sec ±2.38% (90 runs sampled)
murmurhash2js(utf8)  x 4,565,477 ops/sec ±1.24% (90 runs sampled)
```

### 1.0.1

```bash
$ node test/benchmark.js

murmurhash2js 3389647783
murmurhash 3389647783
murmurhash2js 3864203294
murmurhash 3300337389

node version: v0.11.14, date: Tue Jan 13 2015 15:46:52 GMT+0800 (CST)
Starting...
4 tests completed.

murmurhash(ascii)    x 8,238,934 ops/sec ±1.45% (92 runs sampled)
murmurhash2js(ascii) x 6,629,692 ops/sec ±6.85% (82 runs sampled)
murmurhash(utf8)     x 6,978,981 ops/sec ±4.00% (86 runs sampled)
murmurhash2js(utf8)  x 3,519,306 ops/sec ±10.93% (76 runs sampled)
```

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
