import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import toDoStore from './Store/todolist/todoStore.js'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  toDoStore,
  render: h => h(App),
}).$mount('#app')
