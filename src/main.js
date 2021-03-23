import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store  from './Store'
import router from './router/index.js'

Vue.config.productionTip = false


new Vue({
  el:'#app',
  store,
  router,
  created() {
    store.state.todo.currentTodo = store.state.todo.lists[0].todos
  },
  render: h => h(App)

}).$mount('#app')
