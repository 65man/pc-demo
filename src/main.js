// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/index.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.use(VeeValidate)
Validator.locale === 'en' ? 'zh_CN' : 'en'
Validator.localize(Validator.locale, {
  messages: zh_CN.messages,
  attributes: {
    userName: '用户名必须有@',
    userPwd: '密码最少6位'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
