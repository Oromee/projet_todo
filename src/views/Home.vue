<template>
  <div id="home">
    <div class="container">
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
import Sidebar from "@/components/sidebar";
import todo from "@/components/todo";

export default {
name: "Home",

components: {
  Sidebar,
  todo,
},
}

</script>

<style scoped>
#home {
  background-color: azure;
}
</style>