<template>
  <div id="todo">
    <h1>TODO LISTE</h1>
    <b>filtre</b> :
    <button type="button" v-on:click="$store.commit('filterTask', 'all')">Tous</button>&nbsp;&nbsp;
    <button type="button" v-on:click="$store.commit('filterTask','comp')">Completés</button>&nbsp;&nbsp;
    <button type="button" v-on:click="$store.commit('filterTask','nComp')">Non Complétés</button><br><br>
    Nombre de tâches restantes : {{ rest }}

    <ul>
      <li v-for="(todo,index) in this.state.currentT" :key="index">
        {{ todo.titre }} {{ todo.completed }}
        <input type="checkbox" id="fTask" v-on:change="$store.commit('completeTask', index)">
        <label for="fTask">Fini ? </label>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-danger"
                v-on:click="$store.commit('supprimerTask', index, $store.getters.getListID[1])">X
        </button>
        <br><br>
      </li>
    </ul>

    <div id="nouvelleTask">
      <label for="nTask">Nouvelle tâche : </label>&nbsp;
      <input type="text" id="nTask" v-model="$store.state.nTask">&nbsp;&nbsp;
      <button type="button" class="btn btn-success" v-on:click="$store.commit('addTask')">+</button>
      <br><br>
    </div>

  </div>
</template>


<script>
import { mapState } from 'vuex'
import todoStore from "@/Store/modules/todoStore";

export default {

  computed:{
    ...mapState({
      currentT: this.state.currentT
    }),
  },
  methods:{
    afficheListeID(state, id) {
      this.$store.dispatch(todoStore, id)
    }
  },

  name:"todo"
}


</script>

<style scoped>
  h1 {
    color:lightgray;
  }

  #todo{
    border: black;
    border-style: solid;
  }
</style>
