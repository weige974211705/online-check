import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入删除按钮组件
import DeleteBubble from "./components/DeleteBubble";

// 注册elementUI组件
Vue.use(ElementUI)

// 注册删除按钮组件
Vue.component('DeleteBubble', DeleteBubble)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
