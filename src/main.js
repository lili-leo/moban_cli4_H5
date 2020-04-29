import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
// import *as api from './request/api.js'
// import axios from 'axios'
// Vue.prototype.$ajax = axios

// import api from './api' // 导入api接口
// Vue.prototype.$api = api; // 将api挂载到vue的原型上
// Vue.prototype.$baseUrl = process.env.baseUrl   //获取base的原型
// require('./mock/mock.js')

// import moment from 'moment'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from '@/element-ui/lib/locale/lang/en'

// Vue.use(ElementUI)

// import Vuex from 'vuex'
// Vue.use(Vuex)
// Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss')
//   { moment(dataStr).format(pattern) })

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })

// router.beforeEach((to, from, next) => {
//   console.log(222)
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     console.log(111)
//       if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//           next();
//       }
//       else {
//           next({
//               path: '/login',
//               query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//           })
//       }
//   }
//   else {
//       next();
//   }
// })