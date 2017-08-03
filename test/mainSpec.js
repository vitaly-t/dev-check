'use strict';

var env = require('../');

describe('negative', function () {
    it('the default', function () {
        process.env.NODE_ENV = undefined;
        expect(env.isDev).toBe(false);
    });
    it('empty string', function () {
        process.env.NODE_ENV = '';
        expect(env.isDev).toBe(false);
    });
    it('random string', function () {
        process.env.NODE_ENV = 'de v';
        expect(env.isDev).toBe(false);
    });
});

describe('positive', function () {
    it('standard case', function () {
        process.env.NODE_ENV = 'development';
        expect(env.isDev).toBe(true);
    });
    it('case sensitivity', function () {
        process.env.NODE_ENV = 'deV';
        expect(env.isDev).toBe(true);
        expect(env.isDev).toBe(true); // for the repeated coverage path
    });
});
