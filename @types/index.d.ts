import { Dictionary } from './common';
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
/**
 * 判断字符串是不是由数字组成
 * @param str
 */
export declare function isNumberString(str: string): boolean;
/**
 * 最多两位小数点金钱
 * @param str
 */
export declare function isMoney(str: string): boolean;
/**
 * 汉字转Unicode编码
 *
 * @export
 * @param {string} str
 * @returns
 */
export declare function toUnicode(str: string): string;
/**
 * 绝对路径转相对路径
 *
 * @export
 * @param {string} path
 */
export declare function pathToRelative(path: string): string;
/**
 * 检测用户名
 * 匹配规则：只能是中文，英文，数字，下划线，4-16个字符；
 *
 * @export
 * @param {string} name
 */
export declare function isSecurityName(name: string): boolean;
/**
 * 检测身份证号码
 * 匹配规则：身份证号码有15位或者18位，其中最后一位可能是X，其他全是数字
 *
 * @export
 * @param {string} id
 */
export declare function isIdNumber(id: string): boolean;
/**
 * 获取文件后缀
 *
 * @export
 * @param {string} file
 * @returns
 */
export declare function fileExt(file: string): string | null;
