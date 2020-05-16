module.exports = {
  plugins: {
    vue: true,
    typescript2: {
      tsconfig: 'src/tsconfig.json'
    }
  },
  globals: {
    vue: 'Vue'
  },
  external: ['vue'],
  output: {
    extractCSS: false
  },
  bundleNodeModules: true
}
