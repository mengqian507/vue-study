// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'

Axios.defaults.baseURL = 'http://www.wwtliu.com'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var Mock = require('mockjs')
var data = Mock.mock({
  'object|2': {
    '310000': '上海市',
    '320000': '江苏省',
    '330000': '浙江省',
    '340000': '安徽省'
  }
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
