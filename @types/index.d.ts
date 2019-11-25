import { Dictionary } from './@types/common';
/**
 * 数字转换为大写汉字
 */
export declare function transformUpperCase(number: string | number): string;
/**
 * IP中间四位加 *
 */
export declare function encrypIP(ip: string): string;
/**
 * 中国 手机号中间加 *
 */
export declare function encrypPhone(phone: string): string;
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
export declare function sort<T extends Dictionary<any>, K extends keyof T>(arry: T[], key: K, order?: 'desc' | 'asc'): T[];
