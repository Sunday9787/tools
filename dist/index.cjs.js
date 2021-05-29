'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 翻转字符串
 *
 * @export
 * @param {string} str
 * @returns
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}
/**
 * 阶乘
 *
 * @export
 * @param {number} num
 * @returns
 * @example factorialize(5) === 120
 */

function factorialize(num) {
  let i = 1;
  const arr = [];

  while (i <= num) {
    arr.push(i);
    i++;
  }

  return arr.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  }, 1);
}
function factorialize2(num) {
  return function fn(val, count) {
    if (count >= num) return val;
    return fn(count * val, count + 1);
  }(num, 1);
}
/**
 * 判断是不是回文字符串
 *
 * @export
 * @param {string} str
 * @returns
 * @example palindrome("racecar") === true
 */

function palindrome(str) {
  const result = str.replace(/[\s\,\.]+/g, '').toLowerCase();
  return result === result.split('').reverse().join('');
}
/**
 * 找出最长的字符串的长度
 *
 * @export
 * @param {string} str
 * @returns
 */

function findLongestWord(str) {
  return str.split(/\s/).sort((a, b) => b.length - a.length)[0].length;
}
/**
 * 首字母大写
 *
 * @export
 * @param {string} str
 * @returns
 */

function titleCase(str) {
  return str.split(/\s/).map(it => it.replace(/([a-z])([a-z]*)/i, (m, a, b) => a.toUpperCase() + b.toLowerCase())).join(' ');
}
/**
 * 寻找数组中的最大值
 *
 * @export
 * @param {number[][]} arr
 * @returns
 */

function largestOfFour(arr) {
  return arr.map(item => Math.max.apply(null, item));
}
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
function confirmEndingRrgExp(str, target) {
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

function repeatString(str, repeat) {
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

function truncate(str, num) {
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

function chunk(arr, size) {
  const result = [[]];
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
function bouncer(arr, ...arg) {
  arr.filter(item => arg.indexOf(item) > -1);
}
/**
 * 位移密码算法
 *
 * @export
 * @param {string} str
 * @returns
 */

function rot13(str) {
  const offset = 13;
  const A = 'A'.charCodeAt(0);
  const Z = 'Z'.charCodeAt(0);
  const strCode = str.split('').map(it => it.charCodeAt(0));
  return strCode.map(code => {
    if (code >= A && code <= Z) {
      return code - offset < A ? String.fromCharCode(Z - (A - (code - offset + 1))) : String.fromCharCode(code - offset);
    }

    return String.fromCharCode(code);
  }).join('');
}
/**
 * 区间求值
 *
 * @export
 * @param {number[]} arr
 * @returns
 */

function sumAll(arr) {
  let min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  const result = [];

  while (min <= max) {
    result.push(min);
    min++;
  }

  return result.reduce((pre, curr) => pre + curr);
}
function diff(arr1, arr2) {
  const result = [];
  arr1.forEach(item => {
    if (arr2.includes(item)) result.push(item);
  });
  return arr1.filter(item => !result.includes(item)).concat(arr2.filter(item => !result.includes(item)));
}
/**
 * 差集
 *
 * @export
 * @template T
 * @param {...T[][]} arr
 * @returns
 */

function intersect(...arr) {
  const result = arr.flat().filter((item, index, _this) => _this.indexOf(item, 0) !== index);
  return result;
}
/**
 * 并集
 *
 * @export
 * @template T
 * @param {...T[][]} arr
 * @returns
 */

function union(...arr) {
  const result = arr.flat().filter((item, index, _this) => _this.indexOf(item, 0) === index);
  return result;
}
/**
 * @param {number} x
 */

function* fib(x) {
  let a = 1;
  let b = 1;
  let n = 0;

  while (n <= x) {
    yield a;
    [a, b] = [b, a + b];
    n++;
  }
}
function countNumber(num) {
  if (num < 10) return num;
  const value = String(num);
  const result = Array.prototype.reduce.call(value, (previousValue, currentValue) => {
    return Number(previousValue) + Number(currentValue);
  }, 0);
  if (result < 10 && num < 10) return num;
  return countNumber(result);
}
/**
 * 洗牌
 * @param size
 * @param domain
 */

function shuffle(size, domain) {
  const [min, max] = domain;
  return Array(size * 2).fill(0).map((_, i) => i).sort(() => Math.random() > 0.5 ? -1 : 1).filter(v => v <= max && v >= min).slice(0, size);
}

class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }

}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const node = new Node(key);

    if (this.root) {
      this.insertNode(this.root, node);
      return;
    }

    this.root = node;
  }

  insertNode(node, newNode) {
    // 节点值 小于 根节点 插入左边  反之 插入右边
    if (newNode.key < node.key) {
      // 插入前 判断当前node 是否为空 是 生成节点 否则 继续 insertNode
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  } // 中序遍历


  inOrderTraverseNode(root, callback) {
    if (root) {
      this.inOrderTraverseNode(root.left, callback);
      callback(root.key);
      this.inOrderTraverseNode(root.right, callback);
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  } // 前序遍历


  preOrderTraverseNode(root, callback) {
    if (root) {
      callback(root.key);
      this.preOrderTraverseNode(root.left, callback);
      this.preOrderTraverseNode(root.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  searchNode(key, node, callback) {
    if (!node) return;

    if (key > node.key) {
      this.searchNode(key, node.right, callback);
    } else if (key < node.key) {
      this.searchNode(key, node.left, callback);
    } else {
      callback(node);
    }
  }

  search(key, callback) {
    this.searchNode(key, this.root, callback);
  }

  minNode(node) {
    while (node && node.left) {
      node = node.left;
    }

    return node;
  }

  minOrder() {
    return this.minNode(this.root);
  }

  maxNode(node) {
    while (node && node.right) {
      node = node.right;
    }

    return node;
  }

  maxOrder() {
    return this.maxNode(this.root);
  }

  findMinNode(node) {
    while (node && node.left) {
      node = node.left;
    }

    return node;
  }

  removeNode(key, node) {
    if (!node) return null;

    if (key > node.key) {
      node.right = this.removeNode(key, node.right);
      return node;
    } else if (key < node.key) {
      node.left = this.removeNode(key, node.left);
      return node;
    } else {
      // 没有子节点 直接返回 null
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      /**
       * 删除的节点 没有 左节点
       * 返回 右节点
       * 没有 右节点
       * 返回 左节点
       */


      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }
      /**
       * 如果 被删除的节点 拥有 左右 子节点
       * 那么 查找 右节点 的最小值 替换到 被删除的节点 key
       * 删除 最小值的节点
       * 返回 node
       */


      const aux = this.findMinNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(aux.key, aux);
      return node;
    }
  }
  /**
   * 翻转二叉树
   * @private
   * @param node
   */


  reverseNode(node) {
    if (!node) return;
    const tempLeft = node.left;
    const tempRight = node.right;
    node.right = tempLeft;
    this.reverseNode(node.right);
    node.left = tempRight;
    this.reverseNode(node.left);
  }

  reverse() {
    this.reverseNode(this.root);
  }

  remove(key) {
    this.removeNode(key, this.root);
  }

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

function twoSum(nums, target) {
  const prevNums = {}; // 存放出现过的数字，和对应的索引

  for (let i = 0; i < nums.length; i++) {
    // 遍历每一项
    const curNum = nums[i]; // 当前项

    const targetNum = target - curNum; // 希望从过去的数字中找到的呼应项

    const targetNumIndex = prevNums[targetNum]; // 在prevNums中找targetNum的索引

    if (targetNumIndex !== undefined) {
      return [targetNumIndex, i]; // 直接返回targetNumIndex和当前的i
    } // 如果找不到，说明之前没出现过targetNum


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

function unique(arr) {
  arr.forEach(item => {
  });
  return arr;
}
function unique2(arr) {
  const length = arr.length;
  const result = [];
  arr.sort((a, b) => a - b);

  function loop(index) {
    if (index > 0) {
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

function unique3(arr) {
  console.time('unique3');
  const result = arr.filter((item, index) => arr.indexOf(item, 0) === index);
  console.timeEnd('unique3');
  return result;
}
/**
 * Hex Color
 * @description 随机生成 hex 颜色
 */

function randomColor() {
  const arrHex = ['0', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd'];
  let strHex = '#',
      index = 0;

  for (let i = 0; i < 6; i++) {
    index = Math.round(Math.random() * 15);
    strHex += arrHex[index];
  }

  return strHex;
}
/**
 * 插入排序
 *
 * @export
 * @param {number[]} arr
 * @returns
 */

function insertSort(arr) {
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

function bubbleSort(arr) {
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

function selectSort(arr) {
  console.time('selectSort');
  const result = [];
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

function selectSort2(arr) {
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

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 数字转换为大写汉字
 */

function transformUpperCase(number) {
  const arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  return number.toString().replace(/\d/g, $m => arr[Number($m)]);
}
/**
 * IP中间四位加 *
 */

function encrypIP(ip) {
  return ip.replace(/^(\d{1,3})(\.\d{1,3}){3}$/, '$1.***.***$2');
}
/**
 * 中国 手机号中间加 *
 */

function encrypPhone(phone) {
  return phone.replace(/^(\d{3})(\d{4}){2}/, '$1****$2');
}
/**
 *
 * 正序排序 根据字段
 * 默认为 asc 正序
 * @export
 * @param {Array<any>} res
 * @param {string} key
 * @param {'desc' | 'asc'} [order='asc']
 * @returns
 */

function sort(arry, key, order = 'asc') {
  function compare(property) {
    return function (firstEl, secondEl) {
      const value1 = firstEl[property];
      const value2 = secondEl[property];

      if (typeof value1 === 'string') {
        return value1.localeCompare(value2);
      }

      if (order === 'asc') {
        return value1 - value2;
      }

      return value2 - value1;
    };
  }

  return arry.sort(compare(key));
}
/**
 * 判断字符串是不是由数字组成
 * @param str
 */

function isNumberString(str) {
  return /^\d+$/.test(str);
}
/**
 * 最多两位小数点金钱
 * @param str
 */

function isMoney(str) {
  return /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(str);
}
/**
 * 汉字转Unicode编码
 *
 * @export
 * @param {string} str
 * @returns
 */

function toUnicode(str) {
  return `\\u${str.charCodeAt(0).toString(16)}`;
}
/**
 * 绝对路径转相对路径
 *
 * @export
 * @param {string} path
 */

function pathToRelative(path) {
  return path.replace(/https?:\/{2}[^\/]+/, '.');
}
/**
 * 检测用户名
 * 匹配规则：只能是中文，英文，数字，下划线，4-16个字符；
 *
 * @export
 * @param {string} name
 */

function isSecurityName(name) {
  return /^[\u4E00-\u9FA5\uf900-\ufa2d\w]{4,16}$/.test(name);
}
/**
 * 检测身份证号码
 * 匹配规则：身份证号码有15位或者18位，其中最后一位可能是X，其他全是数字
 *
 * @export
 * @param {string} id
 */

function isIdNumber(id) {
  return /^\d{14}|\d{17}(\d|[xX])$/.test(id);
}
/**
 * 获取文件后缀
 *
 * @export
 * @param {string} file
 * @returns
 */

function fileExt(file) {
  const ext = file.match(/(\.(?!\d)[a-zA-Z\d]+)$/);
  return ext && ext[0];
}
/**
 * 函数节流
 * 主要作用于 例如 监听鼠标移动 频繁触发的行为，间隔触发执行
 * @template T
 * @template R
 * @param {(this: T, ...args: any[]) => R} fn
 * @param {number} [wait=100]
 * @param {number} [type=1] 1 使用时间戳 2 使用setTimeout倒计时
 * @returns
 */

function throttle(fn, wait = 100, type = 1) {
  let previous = 0;
  let timer = null;
  return function (...args) {
    const context = this;

    if (type === 1) {
      const now = Date.now();

      if (now - previous > wait) {
        fn.apply(context, args);
        previous = now;
      }

      return;
    }

    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      fn.apply(context, args);
      timer = null;
    }, wait);
  };
}
/**
 * 函数防抖
 * 主要作用 防止点击事件，多次触发函数 合并为一个去执行
 * @template T
 * @template R
 * @param {(this: T, ...args: any[]) => R} fn
 * @param {number} [delay=100] 函数间隔执行时间
 * @param {number} [immediate=false] 是否立即执行
 * @returns
 */

function debounce(fn, delay = 100, immediate = false) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) window.clearTimeout(timer);

    if (immediate) {
      const callNow = !timer;
      timer = window.setTimeout(function () {
        timer = null;
      }, delay);
      if (callNow) fn.apply(context, args);
      return;
    }

    timer = window.setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
function _new(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  const instance = constructor.apply(obj, ...args); // 根据规范，返回 null 和 undefined 不处理，依然返回obj

  return typeof instance === 'object' ? instance : obj;
}
function bind(origin, target) {
  return function (...arg) {
    origin.apply(target, arg);
  };
}
/**
 * 深度优先
 * @param node
 */

function deepTraversal(node) {
  console.log(node);

  if (node.childNodes) {
    Array.prototype.forEach.call(node.childNodes, item => {
      deepTraversal(item);
    });
  }
}
/**
 * 广度优先
 *
 * @export
 * @template T
 * @param {T} node
 */

function breadthTraversal(node) {
  const queue = [];
  queue.unshift(node);

  while (queue.length) {
    const childrenItem = queue.pop();
    console.log(childrenItem);
    const childrenList = Array.prototype.slice.call(childrenItem.childNodes, 0);

    for (let i = 0; i < childrenList.length; i++) {
      queue.push(childrenList[i]);
    }
  }
}

exports.BinaryTree = BinaryTree;
exports._new = _new;
exports.bind = bind;
exports.bouncer = bouncer;
exports.breadthTraversal = breadthTraversal;
exports.bubbleSort = bubbleSort;
exports.chunk = chunk;
exports.confirmEnding = confirmEnding;
exports.confirmEndingRrgExp = confirmEndingRrgExp;
exports.countNumber = countNumber;
exports.debounce = debounce;
exports.deepTraversal = deepTraversal;
exports.diff = diff;
exports.encrypIP = encrypIP;
exports.encrypPhone = encrypPhone;
exports.factorialize = factorialize;
exports.factorialize2 = factorialize2;
exports.fib = fib;
exports.fileExt = fileExt;
exports.findLongestWord = findLongestWord;
exports.insertSort = insertSort;
exports.intersect = intersect;
exports.isIdNumber = isIdNumber;
exports.isMoney = isMoney;
exports.isNumberString = isNumberString;
exports.isSecurityName = isSecurityName;
exports.largestOfFour = largestOfFour;
exports.palindrome = palindrome;
exports.pathToRelative = pathToRelative;
exports.randomColor = randomColor;
exports.repeatString = repeatString;
exports.reverseString = reverseString;
exports.rot13 = rot13;
exports.selectSort = selectSort;
exports.selectSort2 = selectSort2;
exports.shuffle = shuffle;
exports.sort = sort;
exports.sumAll = sumAll;
exports.throttle = throttle;
exports.titleCase = titleCase;
exports.toUnicode = toUnicode;
exports.transformUpperCase = transformUpperCase;
exports.truncate = truncate;
exports.twoSum = twoSum;
exports.union = union;
exports.unique = unique;
exports.unique2 = unique2;
exports.unique3 = unique3;
//# sourceMappingURL=index.cjs.js.map
