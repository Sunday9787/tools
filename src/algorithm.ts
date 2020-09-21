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

export function countNumber(num: number): number {
  if (num < 10) return num;
  const value = String(num);
  const result = Array.prototype.reduce.call(
    value,
    (previousValue, currentValue) => {
      return Number(previousValue) + Number(currentValue);
    },
    0,
  ) as number;

  if (result < 10 && num < 10) return num;
  return countNumber(result);
}

/**
 * 洗牌
 * @param size 长度
 * @param domain 区间范围
 */
export function shuffle(size: number, domain: [number, number]) {
  const [min, max] = domain;

  return Array(size * 2)
    .fill(0)
    .map((_, i) => i)
    .sort(() => (Math.random() > 0.5 ? -1 : 1))
    .filter(v => v <= max && v >= min)
    .slice(0, size);
}

/**
 * 两数之和
 *
 * 利用堆 存储 已经遍历过的下标和值
 * 下标做 key 值 value  nums = {0: xxx};
 * 循环一次
 * 从 nums 获取 当前下标的值  curNum = nums[0]
 * target - curNum 得到 key
 * 如果 curNum[key] 不为 undefined 即 得到 另外一个 数
 *
 * @export
 * @param {number[]} nums
 * @param {number} target
 * @returns
 */
export function twoSum(nums: number[], target: number) {
  const prevNums: Record<string, number> = {}; // 存放出现过的数字，和对应的索引
  for (let i = 0; i < nums.length; i++) {
    // 遍历每一项
    const curNum = nums[i]; // 当前项
    const targetNum = target - curNum; // 希望从过去的数字中找到的呼应项
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中找targetNum的索引
    if (targetNumIndex !== undefined) {
      return [targetNumIndex, i]; // 直接返回targetNumIndex和当前的i
    }
    // 如果找不到，说明之前没出现过targetNum
    prevNums[curNum] = i; // 往prevNums存当前curNum和对应的i
  }
}

/**
 * 去重
 *
 * @export
 * @template T
 * @param {T[]} arr
 * @returns
 */
export function unique<T>(arr: T[]) {
  const result: T[] = [];
  arr.forEach(item => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
}

export function unique2<T extends number>(arr: T[]) {
  const length = arr.length;
  const result: T[] = [];

  arr.sort((a, b) => b - a);

  function loop(index: number) {
    if (index >= 0) {
      if (arr[index] !== arr[index - 1]) {
        result.push(arr[index]);
      }

      loop(index - 1);
    }
    return;
  }

  loop(length - 1);
  return result;
}

/**
 * 利用 filter indexOf
 * indexOf 返回第一次找到的元素下标，如果下标跟返回的下标不一致说明重复
 * @export
 * @template T
 * @param {T[]} arr
 * @returns
 */
export function unique3<T extends number>(arr: T[]) {
  console.time('unique3');
  const result: T[] = arr.filter((item, index) => arr.indexOf(item, 0) === index);
  console.timeEnd('unique3');
  return result;
}

/**
 * 插入排序
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export function insertSort(arr: number[]) {
  console.time('insertSort');
  let key;
  for (let j = 1; j < arr.length; j++) {
    let i = j - 1;
    key = arr[j];
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = key;
  }
  console.timeEnd('insertSort');
  return arr;
}

/**
 * @description 每一趟比较时,依次取出数组中的某个数和后面的数比较
 * 如果该数大于 后面的数 就交换
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export function bubbleSort(arr: number[]) {
  console.time('bubbleSort');
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = j + 1; i < arr.length; i++) {
      const right = arr[j];
      const left = arr[i];
      if (right > left) {
        arr[j] = left;
        arr[i] = right;
      }
    }
  }
  console.timeEnd('bubbleSort');
  return arr;
}

/**
 * 选择排序
 * @description 思路
 * 找到最小值
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export function selectSort(arr: number[]) {
  console.time('selectSort');
  const result: number[] = [];
  let i = 0;

  while (i < arr.length) {
    const min = Math.min.apply(null, arr);
    const index = arr.indexOf(min);
    result.push(min);
    arr.splice(index, 1);
    i = 0;
  }
  console.timeEnd('selectSort');
  return result;
}

/**
 * 选择排序
 * @description 首先从原始数组中找到最小的元素，并把该元素放在数组的最前面，
 * 然后再从剩下的元素中寻找最小的元素，放在之前最小元素的后面，知道排序完毕。
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export function selectSort2(arr: number[]) {
  let minIndex = 0,
    temp;
  const length = arr.length;

  console.time('selectSort2');
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  console.timeEnd('selectSort2');
  return arr;
}

/**
 * 寻找最大值 且返回值和index
 *
 * @export
 * @param {number[]} arr
 * @returns {[number, number]}
 */
export function findMax(arr: number[]): [number, number] {
  let max: number = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  return [max, index];
}

/**
 * 拍平数组 不限制深度
 */
export function flat(arr: any[]) {
  const result: any[] = [];

  const queue: any[] = [];

  queue.unshift(arr);

  while (queue.length) {
    const current = queue.shift()!;

    if (current instanceof Array) {
      for (let i = 0; i < current.length; i++) {
        queue.push(current[i]);
      }
    } else {
      result.push(current);
    }
  }

  return result;
}
