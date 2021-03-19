<template>
  <div id="app">
    <menu-bar></menu-bar>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar";


export default {
  name: 'App',

  components: {
    MenuBar,
  },

}

</script>

<style>
  #app {
    background-color: azure;
  }
</style>
