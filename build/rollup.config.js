import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify-es';
import { DEFAULT_EXTENSIONS } from '@babel/core';
/**
 *
 * @param {string} dir
 * @returns {string}
 */
const resolve = dir => path.resolve(__dirname, '..', dir);

/**
 *
 * @param {string} fileName
 * @returns {string}
 */
const fileName = fileName => (process.env.NODE_ENV === 'production' ? `${fileName}.min.js` : `${fileName}.js`);

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: resolve('src/index.ts'),
  cache: true,
  output: [
    {
      file: resolve(fileName('dist/index.esm')),
      format: 'es',
      name: 'tools',
      sourcemap: true,
    },
    {
      file: resolve(fileName('dist/index.umd')),
      format: 'umd',
      name: 'tools',
      sourcemap: true,
    },
    {
      file: resolve(fileName('dist/index.amd')),
      format: 'amd',
      name: 'tools',
      sourcemap: true,
    },
    {
      file: resolve(fileName('dist/index.iife')),
      format: 'iife',
      name: 'tools',
      sourcemap: true,
    },
    {
      file: resolve(fileName('dist/index.cjs')),
      format: 'cjs',
      name: 'tools',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: resolve('tsconfig.json', '.'),
      useTsconfigDeclarationDir: true,
    }),
    babel({
      runtimeHelpers: true,
      exclude: resolve('node_modules/**'),
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
    }),
    process.env.NODE_ENV === 'production' && uglify(),
  ],
};

export default config;
