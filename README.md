# Vuetify Decorators

Typescript decorators for vuetify, easily add confirms, toasts and loaders

## License

MIT License

## Install

```bash
npm i -S vuetify-decorators
```

## Setup

```
import Vue from 'vue'
import VuetifyDecorators from 'vuetify-decorators'
export default function () {
  Vue.use(VuetifyDecorators, {
    /* Global options */
  })
}

```

Global options consist of key: options where key is the name of the decorator for example:

```
{
    VDConfirm: { /* Confirm options */ },
    VDSnackbar: { /* Snackbar options */ }
    VDLoader: { /* ,Loader options */ }
}
```

## Usage

### @VDConfirm(options: VDConfirmOptions = {})
Display a https://vuetifyjs.com/en/components/dialogs/ before a method is executed

```
@VDConfirm()
myMethod () {
    console.log('Method executed')
}
```

#### Options
```
{
  title?: String,
  message?: String,
  okLabel?: String,
  cancelLabel?: String,
  dialogOptions?: any,
  okButtonOptions?: any,
  cancelButtonOptions?: any
}
```
Where dialogOptions can be an object containing any of vuetify's dialog options: https://vuetifyjs.com/en/components/dialogs/
And okButtonOptions and cancelButtonOptions can be an object containing any of vuetify's button options: https://vuetifyjs.com/en/components/buttons/

### @VDSnackbar(options: VDSnackbarOptions = {})
Display a https://vuetifyjs.com/en/components/snackbars/ after a method is executed

```
@VDSnackbar({ text: 'This is a snackbar' })
myMethod () {
    console.log('Method executed')
}
```

#### Options
```
{
  text?: string
  showCloseButton?: boolean
  closeLabel?: string
  snackbarOptions?: any
  closeButtonOptions?: any
}
```
Where snackbarOptions can be an object containing any of vuetify's dialog options: https://vuetifyjs.com/en/components/snackbars/
And closeButtonOptions can be an object containing any of vuetify's button options: https://vuetifyjs.com/en/components/buttons/

### @VDLoader(options: VDLoaderOptions = {})
Display a https://vuetifyjs.com/en/components/progress-circular/ in a https://vuetifyjs.com/en/components/overlays/ before a method is executed and remove it after

```
@VDLoader()
async myMethod () {
    console.log('Method start')
    await this.sleep(5000)
    console.log('Method end')
}
```

#### Options
```
{
  overlayOptions?: any
  progressOptions?: any
}
```
Where overlayOptions can be an object containing any of vuetify's dialog options: https://vuetifyjs.com/en/components/overlays/
And progressOptions can be an object containing any of vuetify's button options: https://vuetifyjs.com/en/components/progress-circular/

## Combine decorators
Decorators can be combined for example:

```
@VDConfirm()
@VDLoader()
@VDSnackbar({ text: 'This is a snackbar' })
async myMethod () {
    console.log('Method start')
    await this.sleep(5000)
    console.log('Method end')
}
```

If this method is called it first ask for a confirmation then displays a loader and when finished displays a snackbar
