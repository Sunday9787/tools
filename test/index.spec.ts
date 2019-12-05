import * as tools from '../src';

describe('tools.js', () => {
  describe('tools.transformUpperCase', () => {
    it('tools.transformUpperCase should return 零壹贰叁', () => {
      expect(tools.transformUpperCase('0123')).toBe('零壹贰叁');
    });
  });

  describe('tools.encrypIP', () => {
    it('tools.encrypIP should return 123.***.***.1', () => {
      expect(tools.encrypIP('123.456.789.1')).toBe('123.***.***.1');
    });
  });

  describe('tools.encrypPhone', () => {
    it('tools.encrypPhone should return 176****1696', () => {
      expect(tools.encrypPhone('17688911696')).toBe('176****1696');
    });
  });

  describe('tools.sort', () => {
    it('tools.sort should 文字排序', () => {
      expect(
        tools.sort(
          [
            { age: 20, name: 'Bdward' },
            { age: 21, name: 'aine' },
          ],
          'name',
          'asc',
        ),
      ).toEqual([
        { age: 21, name: 'aine' },
        { age: 20, name: 'Bdward' },
      ]);
    });

    it('tools.sort should 正序', () => {
      expect(
        tools.sort(
          [
            { age: 20, name: 'Bdward' },
            { age: 21, name: 'aine' },
          ],
          'age',
          'asc',
        ),
      ).toEqual([
        { age: 20, name: 'Bdward' },
        { age: 21, name: 'aine' },
      ]);
    });

    it('tools.sort should 正序', () => {
      expect(
        tools.sort(
          [
            { age: 20, name: 'Bdward' },
            { age: 21, name: 'aine' },
          ],
          'age',
        ),
      ).toEqual([
        { age: 20, name: 'Bdward' },
        { age: 21, name: 'aine' },
      ]);
    });

    it('tools.sort should 倒序', () => {
      expect(
        tools.sort(
          [
            { age: 21, name: 'aine' },
            { age: 20, name: 'Bdward' },
          ],
          'age',
          'desc',
        ),
      ).toEqual([
        { age: 21, name: 'aine' },
        { age: 20, name: 'Bdward' },
      ]);
    });
  });
});
