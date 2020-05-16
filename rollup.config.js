import VuePlugin from 'rollup-plugin-vue'

export default {
    input: 'lib/vuetify-decorators.js',
    output: {
        file: 'lib/vuetify-decorators.umd.js',
        format: 'umd',
        name: 'VuetifyDecorators',
        globals: {
            vue: 'Vue',
        },
        exports: 'named',
    },
    external: ['vue'],
  plugins: [
    VuePlugin()
  ],
}
