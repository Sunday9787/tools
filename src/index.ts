/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dictionary } from './@types/common';
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
 * @param {'desc' | 'asc'} [order='desc']
 * @returns
 */
export function sort<T extends Dictionary<any>, K extends keyof T>(arry: T[], key: K, order: 'desc' | 'asc' = 'asc') {
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
