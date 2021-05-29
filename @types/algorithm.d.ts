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
 * 差集
 *
 * @export
 * @template T
 * @param {...T[][]} arr
 * @returns
 */
export declare function intersect<T extends string | number>(...arr: T[][]): T[];
/**
 * 并集
 *
 * @export
 * @template T
 * @param {...T[][]} arr
 * @returns
 */
export declare function union<T extends string | number>(...arr: T[][]): T[];
/**
 * @param {number} x
 */
export declare function fib(x: number): Generator<number, void, unknown>;
export declare function countNumber(num: number): number;
/**
 * 洗牌
 * @param size
 * @param domain
 */
export declare function shuffle(size: number, domain: [number, number]): number[];
declare class Node {
    key: number;
    left: Node | null;
    right: Node | null;
    constructor(key: number);
}
export declare class BinaryTree {
    root: null | Node;
    insert(key: number): void;
    private insertNode;
    private inOrderTraverseNode;
    inOrderTraverse(callback: Function): void;
    private preOrderTraverseNode;
    preOrderTraverse(callback: Function): void;
    private searchNode;
    search(key: number, callback: Function): void;
    private minNode;
    minOrder(): Node;
    private maxNode;
    maxOrder(): Node;
    private findMinNode;
    removeNode(key: number, node: Node | null): Node | null;
    /**
     * 翻转二叉树
     * @private
     * @param node
     */
    private reverseNode;
    reverse(): void;
    remove(key: number): void;
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
export declare function twoSum(nums: number[], target: number): number[] | undefined;
/**
 * 去重
 *
 * @export
 * @template T
 * @param {T[]} arr
 * @returns
 */
export declare function unique<T>(arr: T[]): T[];
export declare function unique2<T extends number>(arr: T[]): T[];
/**
 * 利用 filter indexOf
 * indexOf 返回第一次找到的元素下标，如果下标跟返回的下标不一致说明重复
 * @export
 * @template T
 * @param {T[]} arr
 * @returns
 */
export declare function unique3<T extends number>(arr: T[]): T[];
/**
 * Hex Color
 * @description 随机生成 hex 颜色
 */
export declare function randomColor(): string;
/**
 * 插入排序
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export declare function insertSort(arr: number[]): number[];
/**
 * @description 每一趟比较时,依次取出数组中的某个数和后面的数比较
 * 如果该数大于 后面的数 就交换
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export declare function bubbleSort(arr: number[]): number[];
/**
 * 选择排序
 * @description 思路
 * 找到最小值
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export declare function selectSort(arr: number[]): number[];
/**
 * 选择排序
 * @description 首先从原始数组中找到最小的元素，并把该元素放在数组的最前面，
 * 然后再从剩下的元素中寻找最小的元素，放在之前最小元素的后面，知道排序完毕。
 *
 * @export
 * @param {number[]} arr
 * @returns
 */
export declare function selectSort2(arr: number[]): number[];
export {};
