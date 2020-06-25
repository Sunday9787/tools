/**
 * 翻转字符串
 *
 * @export
 * @param {string} str
 * @returns
 */
export declare function reverseString(str: string): string;
/**
 * 阶乘
 *
 * @export
 * @param {number} num
 * @returns
 * @example factorialize(5) === 120
 */
export declare function factorialize(num: number): number;
export declare function factorialize2(num: number): number;
/**
 * 判断是不是回文字符串
 *
 * @export
 * @param {string} str
 * @returns
 * @example palindrome("racecar") === true
 */
export declare function palindrome(str: string): boolean;
/**
 * 找出最长的字符串的长度
 *
 * @export
 * @param {string} str
 * @returns
 */
export declare function findLongestWord(str: string): number;
/**
 * 首字母大写
 *
 * @export
 * @param {string} str
 * @returns
 */
export declare function titleCase(str: string): string;
/**
 * 寻找数组中的最大值
 *
 * @export
 * @param {number[][]} arr
 * @returns
 */
export declare function largestOfFour(arr: number[][]): number[];
export declare function confirmEnding(str: string, target: string): boolean;
export declare function confirmEndingRrgExp(str: string, target: string): boolean;
/**
 * 重复字符串
 *
 * @export
 * @param {string} str
 * @param {number} repeat
 * @returns
 * @example repeatString("*",3) => "***"
 */
export declare function repeatString(str: string, repeat: number): string;
/**
 * 字符串截取算
 *
 * @export
 * @param {string} str
 * @param {number} num
 * @returns
 */
export declare function truncate(str: string, num: number): string | undefined;
/**
 * 根据 size 分割数组
 *
 * @export
 * @param {any[]} arr
 * @param {number} size
 * @returns
 */
export declare function chunk<T>(arr: T[], size: number): T[][];
export declare function bouncer(arr: number[], ...arg: number[]): void;
/**
 * 位移密码算法
 *
 * @export
 * @param {string} str
 * @returns
 */
export declare function rot13(str: string): string;
/**
 * 区间求值
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export declare function sumAll(arr: number[]): number;
export declare function diff(arr1: number[], arr2: number[]): number[];
/**
 * @param {number} x
 */
export declare function fib(x: number): Generator<number, void, unknown>;
