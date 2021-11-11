import Vue from 'vue'
import App from './App.vue'
import './packages/style/index.scss'
import FeiUI from './index.js'

Vue.use(FeiUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
