import * as algorithm from '../src/algorithm';

describe('algorithm', () => {
  describe('algorithm.palindrome', () => {
    test('algorithm.palindrome("The quick dog") should return false', () => {
      expect(algorithm.palindrome('The quick dog')).toBeFalsy();
    });

    test('algorithm.palindrome("e ye") should return true', () => {
      expect(algorithm.palindrome('e ye')).toBeTruthy();
    });
  });

  test('algorithm.reverseString("e ye") should return true', () => {
    expect(algorithm.reverseString('123')).toBe('321');
  });

  test('algorithm.factorialize(5) should return true', () => {
    expect(algorithm.factorialize(5)).toBe(120);
  });

  test('algorithm.findLongestWord("The quick brown fox jumped over the lazy dog") should return 6', () => {
    expect(algorithm.findLongestWord('The quick brown fox jumped over the lazy dog')).toBe(6);
  });

  test('algorithm.findLongestWord("The quick brown") should return "The Quick Brown"', () => {
    expect(algorithm.titleCase('The quick brown')).toBe('The Quick Brown');
  });

  describe('algorithm.largestOfFour', () => {
    test('largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])  应该返回一个数组 ', () => {
      expect(
        algorithm.largestOfFour([
          [4, 5, 1, 3],
          [13, 27, 18, 26],
          [32, 35, 37, 39],
          [1000, 1001, 857, 1],
        ]),
      ).toBeInstanceOf(Array);
    });

    test('largestOfFour([[13,27,18,26],[4,5,1,3],[32,35,37,39],[1000,1001,857,1]]) 应该返回 [27,5,39,1001]', () => {
      expect(
        algorithm.largestOfFour([
          [13, 27, 18, 26],
          [4, 5, 1, 3],
          [32, 35, 37, 39],
          [1000, 1001, 857, 1],
        ]),
      ).toEqual([27, 5, 39, 1001]);
    });
  });

  describe('algorithm.truncate', () => {
    test('truncate("A-tisket a-tasket A green and yellow basket", 11)', () => {
      expect(algorithm.truncate('A-tisket a-tasket A green and yellow basket', 11)).toBe('A-tisket...');
    });

    test('truncate("Peter Piper picked a peck of pickled peppers", 14)', () => {
      expect(algorithm.truncate('Peter Piper picked a peck of pickled peppers', 14)).toBe('Peter Piper...');
    });

    test('truncate("A-", 1)', () => {
      expect(algorithm.truncate('A-', 1)).toBe('A...');
    });

    test('truncate("Absolutely Longer", 2)', () => {
      expect(algorithm.truncate('Absolutely Longer', 2)).toBe('Ab...');
    });

    test('truncate("Longer", 6)', () => {
      expect(algorithm.truncate('Longer', 6)).toBe('Longer');
    });
  });

  describe('algorithm.repeatString', () => {
    test('repeatString("A-tisket a-tasket A green and yellow basket", 11)', () => {
      expect(algorithm.repeatString('*', 3)).toBe('***');
    });

    test('repeatString("Absolutely Longer", 2)', () => {
      expect(algorithm.repeatString('1', 0)).toBe('');
    });
  });

  describe('algorithm.chunk', () => {
    test('chunk(["a", "b", "c", "d"], 2)', () => {
      expect(algorithm.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
        ['a', 'b'],
        ['c', 'd'],
      ]);
    });

    test('chunk(["a", "b", "c", "d", "e"], 2)', () => {
      expect(algorithm.chunk(['a', 'b', 'c', 'd', 'e'], 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
    });
  });

  describe('algorithm.rot13', () => {
    test('rot13("SERR PBQR PNZC") 应该返回 "FREE CODE CAMP"', () => {
      expect(algorithm.rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
    });

    test('rot13("SERR CVMMN!") 应该返回 "FREE CODE CAMP"', () => {
      expect(algorithm.rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
    });
  });

  describe('algorithm.factorialize2', () => {
    test('factorialize2("5") 应该返回 "125"', () => {
      expect(algorithm.factorialize2(5)).toBe(120);
    });
  });

  describe('algorithm.shuffle', () => {
    test('shuffle(50, [0, 10]) 应该返回 长度10的数组', () => {
      expect(algorithm.shuffle(50, [0, 9])).toHaveLength(10);
    });

    test('shuffle(50, [5, 20]) 应该返回 长度15的数组', () => {
      expect(algorithm.shuffle(50, [5, 19])).toHaveLength(15);
    });
  });
});
