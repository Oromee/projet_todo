<template>
  <div id="app">
    <div class="container">
      <MenuBar></MenuBar><br>
      <div class="row">
        <div class="col-sm-4">
          <sidebar></sidebar><br>
        </div>
        <div class="col-sm-8">
          <todo></todo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import todo from './components/todo.vue'
import Sidebar from './components/sidebar.vue'
import MenuBar from "./components/MenuBar";


export default {
  name: 'App',

  components: {
    MenuBar,
    Sidebar,
    todo,
  },

}

</script>

<style>
  #app {
    background-color: azure;
  }
</style>
