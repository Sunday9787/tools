/**
 * 翻转字符串
 *
 * @export
 * @param {string} str
 * @returns
 */
export function reverseString(str: string) {
  return str
    .split('')
    .reverse()
    .join('');
}

/**
 * 阶乘
 *
 * @export
 * @param {number} num
 * @returns
 * @example factorialize(5) === 120
 */
export function factorialize(num: number) {
  let i = 1;
  const arr: number[] = [];
  while (i <= num) {
    arr.push(i);
    i++;
  }

  return arr.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  }, 1);
}

export function factorialize2(num: number) {
  return (function fn(val, count): number {
    if (count >= num) return val;
    return fn(count * val, count + 1);
  })(num, 1);
}

/**
 * 判断是不是回文字符串
 *
 * @export
 * @param {string} str
 * @returns
 * @example palindrome("racecar") === true
 */
export function palindrome(str: string) {
  const result = str.replace(/[\s\,\.]+/g, '').toLowerCase();
  return (
    result ===
    result
      .split('')
      .reverse()
      .join('')
  );
}

/**
 * 找出最长的字符串的长度
 *
 * @export
 * @param {string} str
 * @returns
 */
export function findLongestWord(str: string) {
  return str.split(/\s/).sort((a, b) => b.length - a.length)[0].length;
}

/**
 * 首字母大写
 *
 * @export
 * @param {string} str
 * @returns
 */
export function titleCase(str: string) {
  return str
    .split(/\s/)
    .map(it => it.replace(/([a-z])([a-z]*)/i, (m, a, b) => a.toUpperCase() + b.toLowerCase()))
    .join(' ');
}

/**
 * 寻找数组中的最大值
 *
 * @export
 * @param {number[][]} arr
 * @returns
 */
export function largestOfFour(arr: number[][]) {
  return arr.map(item => Math.max.apply(null, item));
}

export function confirmEnding(str: string, target: string) {
  return str.slice(-target.length) === target;
}

export function confirmEndingRrgExp(str: string, target: string) {
  const reg = new RegExp(target + '$');
  return reg.test(str);
}

/**
 * 重复字符串
 *
 * @export
 * @param {string} str
 * @param {number} repeat
 * @returns
 * @example repeatString("*",3) => "***"
 */
export function repeatString(str: string, repeat: number) {
  return new Array(Math.max(0, repeat)).fill(str).join('');
}

/**
 * 字符串截取算
 *
 * @export
 * @param {string} str
 * @param {number} num
 * @returns
 */
export function truncate(str: string, num: number) {
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3).concat('...');
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num).concat('...');
  } else if (str.length <= num) {
    return str;
  }
}

/**
 * 根据 size 分割数组
 *
 * @export
 * @param {any[]} arr
 * @param {number} size
 * @returns
 */
export function chunk<T>(arr: T[], size: number) {
  const result: T[][] = [[]];
  arr.forEach((item, i) => {
    if ((i + 1) % size === 0) {
      result[result.length - 1].push(item);
      if (i !== arr.length - 1) result.push([]);
    } else {
      result[result.length - 1].push(item);
    }
  });
  return result;
}

export function bouncer(arr: number[], ...arg: number[]) {
  arr.filter(item => arg.indexOf(item) > -1);
}

/**
 * 位移密码算法
 *
 * @export
 * @param {string} str
 * @returns
 */
export function rot13(str: string) {
  const offset = 13;
  const A = 'A'.charCodeAt(0);
  const Z = 'Z'.charCodeAt(0);
  const strCode: number[] = str.split('').map(it => it.charCodeAt(0));
  return strCode
    .map(code => {
      if (code >= A && code <= Z) {
        return code - offset < A
          ? String.fromCharCode(Z - (A - (code - offset + 1)))
          : String.fromCharCode(code - offset);
      }
      return String.fromCharCode(code);
    })
    .join('');
}

/**
 * 区间求值
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export function sumAll(arr: number[]) {
  let min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  const result: number[] = [];
  while (min <= max) {
    result.push(min);
    min++;
  }
  return result.reduce((pre, curr) => pre + curr);
}

export function diff(arr1: number[], arr2: number[]) {
  const result: number[] = [];
  arr1.forEach(item => {
    if (arr2.includes(item)) result.push(item);
  });
  return arr1.filter(item => !result.includes(item)).concat(arr2.filter(item => !result.includes(item)));
}

/**
 * @param {number} x
 */
export function* fib(x: number) {
  let a = 1;
  let b = 1;
  let n = 0;
  while (n <= x) {
    yield a;
    [a, b] = [b, a + b];
    n++;
  }
}
