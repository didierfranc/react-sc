import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'styled',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
  ],
  dest: './dist/react-sc.min.js',
  globals: {
    react: 'React',
    stylis: 'stylis'
  },
  external: [
    'react'
  ]
};
