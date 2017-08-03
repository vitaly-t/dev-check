dev-check
=========

Reliable, flexible and fast `DEV` environment verification.

[![Build Status](https://travis-ci.org/vitaly-t/dev-check.svg?branch=master)](https://travis-ci.org/vitaly-t/dev-check)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/dev-check/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/dev-check?branch=master)

## Features

The library checks for the `DEV` environment by verifying the current value of `process.env.NODE_ENV`.
And if there is an occurrence of `DEV` (case-insensitive) in the value, it is recognized as development.

For example, any of the following values are recognized as development:

* `development`
* `my-dev`
* `This is DEV`
* `DeV-123` 

## Installing

```
$ npm install dev-check
```

## Usage

#### dynamic usage

```js
var env = require('dev-check');

if(env.isDev) {
    // this is a DEV environment
}
```

Note that when accessing property `isDev`, the environment is checked dynamically.

#### static usage

```js
var isDev = require('dev-check').isDev; // reading environment only once

if(isDev) {
    // this is a DEV environment
}
```

## License

Copyright © 2017 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.
