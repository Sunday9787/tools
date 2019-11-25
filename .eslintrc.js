/**
 * @type {import('eslint').CLIEngine.Options}
 */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    /**
     * 关闭 函数必须要声明返回类型
     */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /**
     * 关闭 要求使用一致的 return 语句
     * @see https://cloud.tencent.com/developer/section/1135600
     */
    'consistent-return': 'off',
    /**
     * @see https://cloud.tencent.com/developer/section/1135748
     */
    'no-restricted-syntax': 'off',
    'max-len': ["error", { "code": 120 }],
    /**
     * @see https://cloud.tencent.com/developer/section/1135604
     */
    'default-case': 'off',
    /**
     * @see https://cloud.tencent.com/developer/section/1135777
     */
    'no-unused-expressions': ['error', { "allowShortCircuit": true, "allowTernary": true }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
