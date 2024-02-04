//该文件事整个项目的入口文件

//引入Vue
import Vue from 'vue'

//引入App
import App from './App.vue'


//关闭Vue的生产提示
Vue.config.productionTip = false

//创建Vue实例对象
new Vue({
  //
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')

