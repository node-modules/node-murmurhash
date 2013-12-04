node-murmurhash
=======

[![Build Status](https://secure.travis-ci.org/fengmk2/node-murmurhash.png)](http://travis-ci.org/fengmk2/node-murmurhash) [![Coverage Status](https://coveralls.io/repos/fengmk2/node-murmurhash/badge.png)](https://coveralls.io/r/fengmk2/node-murmurhash) [![Build Status](https://drone.io/github.com/fengmk2/node-murmurhash/status.png)](https://drone.io/github.com/fengmk2/node-murmurhash/latest)

[![NPM](https://nodei.co/npm/node-murmurhash.png?downloads=true&stars=true)](https://nodei.co/npm/node-murmurhash/)

![logo](https://raw.github.com/fengmk2/node-murmurhash/master/logo.png)

murmurhash V2, support utf8 Buffer.

## Install

```bash
$ npm install node-murmurhash
```

## Usage

```js
var murmurhash = require('node-murmurhash');

murmurhash('hello 中国', 97); // 1248731102
```

## License

(The MIT License)

Copyright (c) 2013 fengmk2 &lt;fengmk2@gmail.com&gt;

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
