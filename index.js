'use strict';

var lastValue, isDev = false;

function verify() {
    var value = process.env.NODE_ENV || '';
    if (value !== lastValue) {
        isDev = value.toLowerCase().indexOf('dev') !== -1;
        lastValue = value;
    }
    return isDev;
}

Object.defineProperty(module.exports, 'isDev', {
    get: verify
});
