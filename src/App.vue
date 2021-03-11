<template>
  <div class="app">
    <todo></todo>
  </div>
</template>

<script>
import todo from './components/todo.vue'


export default {
  data(){
    return{
      lol: "exemple"
    }
  },

  name: 'App',
  components: {
    todo
  },

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
