import VDConfirmComponent from './VDConfirm.vue'
import VDSnackbarComponent from './VDSnackbar.vue'
import VDLoaderComponent from './VDLoader.vue'
import {VueConstructor} from 'vue'

interface VDConfirmOptions {
  title?: String,
  message?: String,
  okLabel?: String,
  cancelLabel?: String,
  dialogOptions?: any,
  okButtonOptions?: any,
  cancelButtonOptions?: any
}

interface VDSnackbarOptions {
  text?: string
  showCloseButton?: boolean
  closeLabel?: string
  snackbarOptions?: any
  closeButtonOptions?: any
}

interface VDLoaderOptions {
  overlayOptions?: any
  progressOptions?: any
}

interface GlobalOptions {
  VDConfirm?: VDConfirmOptions
  VDSnackbar?: VDSnackbarOptions
  VDLoader?: VDLoaderOptions
}

let VueConstructor: VueConstructor
let globalOptions: GlobalOptions

export function VDConfirm(options: VDConfirmOptions = {}) {
  return function (target: any, key: string | symbol, descriptor: any) {
    const original = descriptor.value
    descriptor.value = function (...args: any[]) {
      let component: any = new VueConstructor(VDConfirmComponent)
      Object.assign(component, {
        $vuetify: this.$vuetify,
        ...globalOptions.VDConfirm,
        ...options
      })
      this.$el.appendChild(component.$mount().$el)
      component.$on('accept', (value: boolean) => {
        if (value) {
          original.apply(this, args)
        }
        component.$destroy()
        component = null
      })
      return null
    }
    return descriptor
  }
}

export function VDSnackbar(options: VDSnackbarOptions = {}) {
  return function (target: any, key: string | symbol, descriptor: any) {
    const original = descriptor.value
    descriptor.value = async function (...args: any[]) {
      const result = await original.apply(this, args)
      let component: any = new VueConstructor(VDSnackbarComponent)
      Object.assign(component, {
        $vuetify: this.$vuetify,
        ...globalOptions.VDSnackbar,
        ...options
      })
      this.$el.appendChild(component.$mount().$el)
      component.$on('close', (value: boolean) => {
        component.$destroy()
        component = null
      })
      return result
    }
    return descriptor
  }
}

export function VDLoader(options: VDLoaderOptions = {}) {
  return function (target: Object, key: string | symbol, descriptor: any) {
    const original = descriptor.value
    descriptor.value = async function (...args: any[]) {
      let component: any = new VueConstructor(VDLoaderComponent)
      Object.assign(component, {
        $vuetify: this.$vuetify,
        ...globalOptions.VDLoader,
        ...options
      })
      this.$el.appendChild(component.$mount().$el)
      const result = await original.apply(this, args)
      component.$destroy()
      component = null
      return result
    }
    return descriptor
  }
}

export default function (Vue: VueConstructor, options: GlobalOptions = {}) {
  VueConstructor = Vue
  globalOptions = options
}
