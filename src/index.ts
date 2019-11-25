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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sort<T extends Dictionary<any>, K extends keyof T>(arry: T[], key: K, order: 'desc' | 'asc' = 'asc') {
  function compare(property: K) {
    return function(firstEl: T, secondEl: T) {
      const value1 = firstEl[property];
      const value2 = secondEl[property];
      if (order === 'asc') {
        return value1 - value2;
      }
      return value2 - value1;
    };
  }
  return arry.sort(compare(key));
}
