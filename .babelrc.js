/**
 * babel 配置
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-external-helpers', '@babel/plugin-transform-runtime'],
  exclude: 'node_modules/**'
};
