<template>
  <v-dialog
    :value="true"
    persistent
    v-bind="dialogOptions"
    @keydown.enter="$emit('accept', true)"
    @keydown.esc="$emit('accept', false)"
  >
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>

      <v-card-text v-if="message">
        {{ message }}
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn
          text
          v-bind="okButtonOptions"
          @click="$emit('accept', true)"
        >
          {{ okLabel }}
        </v-btn>

        <v-btn
          text
          v-bind="cancelButtonOptions"
          @click="$emit('accept', false)"
        >
          {{ cancelLabel }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: false,
        default: 'Are you sure?'
      },
      message: {
        type: String,
        required: false,
        default: undefined
      },
      okLabel: {
        type: String,
        required: false,
        default: 'Ok'
      },
      cancelLabel: {
        type: String,
        required: false,
        default: 'Cancel'
      },
      dialogOptions: {
        type: Object,
        required: false,
        default () {
          return {
            maxWidth: '300'
          }
        }
      },
      okButtonOptions: {
        type: Object,
        required: false,
        default () {
          return {
            color: 'green darken-1'
          }
        }
      },
      cancelButtonOptions: {
        type: Object,
        required: false,
        default () {
          return {}
        }
      }
    },

    beforeDestroy() {
      this.$el.parentElement.removeChild(this.$el)
    }
  }
</script>
