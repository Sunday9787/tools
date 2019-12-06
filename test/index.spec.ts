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

  describe('tools.isNumberString', () => {
    test('tools.isNumberString should return true', () => {
      expect(tools.isNumberString('01234')).toBeTruthy();
    });

    test('tools.isNumberString(" 01234") should return false', () => {
      expect(tools.isNumberString(' 01234')).toBeFalsy();
    });

    test('tools.isNumberString("01234") should return false', () => {
      expect(tools.isNumberString('01234 ')).toBeFalsy();
    });

    test('tools.isNumberString("012 34") should return false', () => {
      expect(tools.isNumberString('012 34')).toBeFalsy();
    });
  });

  describe('tools.isMoney', () => {
    test('tools.isMoney("1234.11") should return true', () => {
      expect(tools.isMoney('1234.11')).toBeTruthy();
    });

    test('tools.isMoney(" 01234") should return false', () => {
      expect(tools.isMoney('01234.1')).toBeFalsy();
    });

    test('tools.isNumberString("1234.000") should return false', () => {
      expect(tools.isMoney('1234.000')).toBeFalsy();
    });

    test('tools.isMoney("0.11") should return true', () => {
      expect(tools.isMoney('0.11')).toBeTruthy();
    });
  });

  describe('tools.toUnicode', () => {
    test('tools.toUnicode("我") should return "\\u6211"', () => {
      expect(tools.toUnicode('我')).toBe('\\u6211');
    });
  });

  describe('tools.pathToRelative', () => {
    test('tools.pathToRelative("http://172.16.28.162/images/a.jpg") should return "./images/a.jpg"', () => {
      expect(tools.pathToRelative('http://172.16.28.162/images/a.jpg')).toBe('./images/a.jpg');
    });

    test('tools.pathToRelative("https://www.w3school.com.cn/jsref/index.asp") should return "./images/a.jpg"', () => {
      expect(tools.pathToRelative('https://www.w3school.com.cn/jsref/index.asp')).toBe('./jsref/index.asp');
    });
  });

  describe('tools.isSecurityName', () => {
    test('tools.isSecurityName("http://1") should return false', () => {
      expect(tools.isSecurityName('http://1')).toBeFalsy();
    });

    test('tools.isSecurityName("index.asp") should return "false"', () => {
      expect(tools.isSecurityName('index.asp')).toBeFalsy();
    });

    test('tools.isSecurityName("Edward_我的789798") should return "true"', () => {
      expect(tools.isSecurityName('Edward_我的789798')).toBeTruthy();
    });
  });

  describe('tools.isIdNumber', () => {
    test('tools.isIdNumber("411527199605300414") should return true', () => {
      expect(tools.isIdNumber('411527199605300414')).toBeTruthy();
    });

    test('tools.isIdNumber("41152719960530041x") should return true', () => {
      expect(tools.isIdNumber('41152719960530041x')).toBeTruthy();
    });

    test('tools.isIdNumber("411527199605300") should return true', () => {
      expect(tools.isIdNumber('411527199605300')).toBeTruthy();
    });
  });
});
