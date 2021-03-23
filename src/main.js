import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store  from './Store'
import router from './router/index.js'
import axios from "axios";

Vue.config.productionTip = false


new Vue({
  el:'#app',
  store,
  router,
  axios,
  created() {
    axios({
      url: 'http://138.68.74.39/api/todolists',
      auth:{
        username: 'admin',
        password: 'admin'
      }
    }).then(function (response){
      console.log(response)
    }),
    store.state.todo.currentTodo = store.state.todo.lists[0].todos
  },
  render: h => h(App)

}).$mount('#app')
