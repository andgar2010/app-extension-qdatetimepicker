import 'quasar-app-extension-qdatetimepicker/component/datetime-picker.styl'
import QDatetimePicker from 'quasar-app-extension-qdatetimepicker/component/QDatetimePicker'

export default async ({ Vue }) => {
  Vue.component('q-datetime-picker', QDatetimePicker)
}