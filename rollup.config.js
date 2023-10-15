import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const cjsOpts = {
  transformMixedEsModules: true,
  preserveModules: true
}

const resOpts = { browser: false }

export default {
  input: 'index.js',
  output: {
    dir: 'cjs_build',
    format: 'cjs',
    entryFileNames: '[name].js'
  },
  plugins: [
    commonjs(cjsOpts),
    resolve(resOpts)
  ]
}
