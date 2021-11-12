import Vue from 'vue'
import App from './App.vue'
import './packages/style/index.scss'
import FeiUI from './index.js'
import icon from './assets/JS/font_2933755_jhhzvzawx6i'

icon
Vue.use(FeiUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
