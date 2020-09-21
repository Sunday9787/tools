const plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push('@babel/plugin-external-helpers', '@babel/plugin-transform-runtime')
}

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
  plugins,
  // plugins: ['@babel/plugin-external-helpers', '@babel/plugin-transform-runtime'],
  exclude: 'node_modules/**'
};
