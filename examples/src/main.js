import Vue from 'vue'
import App from './App'
import VueInputDropdown from '../../dist/vue-input-dropdown.common'

Vue.use(VueInputDropdown)

new Vue({
  el: '#app',
  render: h => h(App)
})
