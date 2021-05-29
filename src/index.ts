/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 数字转换为大写汉字
 */
export function transformUpperCase(number: string | number) {
  const arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  return number.toString().replace(/\d/g, $m => arr[Number($m)]);
}

/**
 * IP中间四位加 *
 */
export function encrypIP(ip: string) {
  return ip.replace(/^(\d{1,3})(\.\d{1,3}){3}$/, '$1.***.***$2');
}

/**
 * 中国 手机号中间加 *
 */
export function encrypPhone(phone: string) {
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
export function sort<T extends Record<string, any>, K extends keyof T>(
  arry: T[],
  key: K,
  order: 'desc' | 'asc' = 'asc',
) {
  function compare(property: K) {
    return function(firstEl: T, secondEl: T) {
      const value1: any = firstEl[property];
      const value2: any = secondEl[property];
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
export function isNumberString(str: string) {
  return /^\d+$/.test(str);
}

/**
 * 最多两位小数点金钱
 * @param str
 */
export function isMoney(str: string) {
  return /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(str);
}

/**
 * 汉字转Unicode编码
 *
 * @export
 * @param {string} str
 * @returns
 */
export function toUnicode(str: string) {
  return `\\u${str.charCodeAt(0).toString(16)}`;
}

/**
 * 绝对路径转相对路径
 *
 * @export
 * @param {string} path
 */
export function pathToRelative(path: string) {
  return path.replace(/https?:\/{2}[^\/]+/, '.');
}

/**
 * 检测用户名
 * 匹配规则：只能是中文，英文，数字，下划线，4-16个字符；
 *
 * @export
 * @param {string} name
 */
export function isSecurityName(name: string) {
  return /^[\u4E00-\u9FA5\uf900-\ufa2d\w]{4,16}$/.test(name);
}

/**
 * 检测身份证号码
 * 匹配规则：身份证号码有15位或者18位，其中最后一位可能是X，其他全是数字
 *
 * @export
 * @param {string} id
 */
export function isIdNumber(id: string) {
  return /^\d{14}|\d{17}(\d|[xX])$/.test(id);
}

/**
 * 获取文件后缀
 *
 * @export
 * @param {string} file
 * @returns
 */
export function fileExt(file: string) {
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
export function throttle<T extends object, R = void>(fn: (this: T, ...args: any[]) => R, wait = 100, type: 1 | 2 = 1) {
  let previous = 0;
  let timer: null | number = null;
  return function(this: T, ...args: any[]) {
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
    timer = window.setTimeout(function() {
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
export function debounce<T extends object, R = void>(
  fn: (this: T, ...args: any[]) => R,
  delay = 100,
  immediate = false,
) {
  let timer: number | null = null;
  return function(this: T, ...args: any[]) {
    const context = this;

    if (timer) window.clearTimeout(timer);
    if (immediate) {
      const callNow = !timer;
      timer = window.setTimeout(function() {
        timer = null;
      }, delay);
      if (callNow) fn.apply(context, args);
      return;
    }

    timer = window.setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

export function _new<R, T extends Function>(constructor: T, ...args: any[]): R {
  const obj = Object.create(constructor.prototype);
  const instance = constructor.apply(obj, ...args);

  // 根据规范，返回 null 和 undefined 不处理，依然返回obj
  return typeof instance === 'object' ? instance : obj;
}

export function bind<T extends Function>(origin: T, target: T) {
  return function(...arg: any[]) {
    origin.apply(target, arg);
  };
}

/**
 * Hex Color
 * @description 随机生成 hex 颜色
 */
export function randomColor() {
  const arrHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let strHex = '#',
    index = 0;

  for (let i = 0; i < 6; i++) {
    index = Math.round(Math.random() * 15);
    strHex += arrHex[index];
  }

  return strHex;
}
