/* eslint-disable @typescript-eslint/no-var-requires */
import * as tools from '../src';
import assert from 'assert';
// import test from 'ava';

describe('tools.js', () => {
  describe('tools.transformUpperCase', () => {
    it('tools.transformUpperCase should return 零壹贰叁', () => {
      assert.strictEqual(tools.transformUpperCase('0123'), '零壹贰叁');
    });
  });

  describe('tools.encrypIP', () => {
    it('tools.encrypIP should return 123.***.***.1', () => {
      assert.strictEqual(tools.encrypIP('123.456.789.1'), '123.***.***.2');
    });
  });
});
