import * as tools from '../src';
import assert from 'assert';

describe('tools.js', () => {
  describe('tools.transformUpperCase', () => {
    it('tools.transformUpperCase should return 零壹贰叁', () => {
      assert.strictEqual(tools.transformUpperCase('0123'), '零壹贰叁');
    });
  });

  describe('tools.encrypIP', () => {
    it('tools.encrypIP should return 123.***.***.1', () => {
      assert.strictEqual(tools.encrypIP('123.456.789.1'), '123.***.***.1');
    });
  });

  describe('tools.encrypPhone', () => {
    it('tools.encrypPhone should return 176****1696', () => {
      assert.strictEqual(tools.encrypPhone('17688911696'), '176****1696');
    });
  });

  describe('tools.sort', () => {
    it('tools.sort should 文字排序', () => {
      assert.deepStrictEqual(
        tools.sort(
          [
            { age: 20, name: 'Bdward' },
            { age: 21, name: 'aine' },
          ],
          'name',
          'asc',
        ),
        [
          { age: 21, name: 'aine' },
          { age: 20, name: 'Bdward' },
        ],
      );
    });

    it('tools.sort should 正序', () => {
      assert.deepStrictEqual(
        tools.sort(
          [
            { age: 20, name: 'Bdward' },
            { age: 21, name: 'aine' },
          ],
          'age',
          'asc',
        ),
        [
          { age: 20, name: 'Bdward' },
          { age: 21, name: 'aine' },
        ],
      );
    });

    it('tools.sort should 倒序', () => {
      assert.deepStrictEqual(
        tools.sort(
          [
            { age: 21, name: 'aine' },
            { age: 20, name: 'Bdward' },
          ],
          'age',
          'desc',
        ),
        [
          { age: 21, name: 'aine' },
          { age: 20, name: 'Bdward' },
        ],
      );
    });
  });
});
