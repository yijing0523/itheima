import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
// 导入路径
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  // 挂载路由
  router,
  render: h => h(App),
}).$mount('#app')
