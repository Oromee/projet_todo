<template>
  <div id="home">
    <div v-if="isConnected==true" class="container">
      <div class="row">
        <div class="col-sm-4">
          <sidebar></sidebar><br>
        </div>
        <div class="col-sm-8">
          <todo></todo>
        </div>
      </div>
    </div>
    <div v-if="isConnected==false" class="container">
      <h1>Pour profiter de l'application, connectez vous !</h1>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar";
import todo from "@/components/todo";
import {mapGetters} from "vuex";

export default {
name: "Home",

components: {
  Sidebar,
  todo,
},

  computed:{
    ...mapGetters('account', {
      isConnected : 'getConnected',
    }),
  },
}

</script>

<style scoped>
#home {
 padding-top:1%;
}
</style>
