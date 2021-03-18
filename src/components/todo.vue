<template>
  <div id="todo">
    <h1>TODO LISTE</h1>
    <b>filtre</b> :
    <button type="button" v-on:click="$store.commit('filterTask', 'all')">Tous</button>&nbsp;&nbsp;
    <button type="button" v-on:click="$store.commit('filterTask','comp')">Completés</button>&nbsp;&nbsp;
    <button type="button" v-on:click="$store.commit('filterTask','nComp')">Non Complétés</button><br><br>
    Nombre de tâches restantes : {{ rest }}

    <ul>
      <li v-for="(todo,index) in $store.getters.getAllTodos" :key="index">
        {{ todo.id }} - {{ todo.titre }} - {{ todo.completed }}
        <input type="checkbox" id="fTask" v-on:change="$store.commit('completeTask', index)">
        <label for="fTask"> Fini ? </label>
        <button type="button" class="btn btn-danger" v-on:click="$store.commit('supprimerTask', index)">X</button>
        <br><br>
      </li>
    </ul>

    <div id="nouvelleTask">
      <label for="nTask">Nouvelle tâche : </label>&nbsp;
      <input type="text" id="nTask" v-model="newT">&nbsp;&nbsp;
      <button type="button" class="btn btn-success" v-on:click="$store.commit('addTask')">+</button>
      <br> <br>
      ntask : {{ newT }}
    </div>

  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {

  computed:{
    ...mapState({
      rest: 'restante',
      newT: 'nTask'
    }),
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
