<template>
  <v-overlay :value="true" v-bind="overlayOptions">
    <v-progress-circular
      indeterminate
      v-bind="progressOptions"
    />
  </v-overlay>
</template>

<script>
  export default {
    props: {
      overlayOptions: {
        type: Object,
        required: false,
        default () {
          return {
            'z-index': '15'
          }
        }
      },
      progressOptions: {
        type: Object,
        required: false,
        default () {
          return {
            color: 'white'
          }
        }
      }
    },

    beforeDestroy() {
      this.$el.parentElement.removeChild(this.$el)
    }
  }
</script>
