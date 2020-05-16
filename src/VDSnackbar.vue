<template>
  <v-snackbar :value="true" v-bind="snackbarOptions">
    {{ text }}
    <v-btn
      v-if="showCloseButton"
      v-bind="closeButtonOptions"
      @click="$emit('close')"
    >
      {{ closeLabel }}
    </v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: false,
        default: ''
      },
      showCloseButton: {
        type: Boolean,
        required: false,
        default: true
      },
      closeLabel: {
        type: String,
        required: false,
        default: 'Close'
      },
      snackbarOptions: {
        type: Object,
        required: false,
        default () {
          return {
            timeout: 2000
          }
        }
      },
      closeButtonOptions: {
        type: Object,
        required: false,
        default () {
          return {
            text: true
          }
        }
      }
    },

    data() {
      return {
        timeout: null
      }
    },

    mounted() {
      if (this.snackbarOptions.timeout) {
        this.timeout = setTimeout(() => {
          this.$emit('close')
        }, this.snackbarOptions.timeout)
      }
    },

    beforeDestroy() {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.$el.parentElement.removeChild(this.$el)
    }
  }
</script>
