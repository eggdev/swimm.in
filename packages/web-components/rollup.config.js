const commonjs = require('@rollup/plugin-commonjs');
const {babel} = require('@rollup/plugin-babel');

const pkg = require('./package.json');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      rootMode: 'upward',
    }),
    commonjs(),
  ],
};
