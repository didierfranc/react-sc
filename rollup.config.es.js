import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-js-harmony'

export default {
  entry: 'src/index.js',
  format: 'es',
  moduleName: 'styled',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify({}, minify)
  ],
  dest: './dist/react-sc.es.min.js',
  globals: {
    react: 'React',
    stylis: 'stylis'
  },
  external: [
    'react'
  ]
};
