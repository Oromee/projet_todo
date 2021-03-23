<template>
  <div id="todo">
    <h1>Tâches à réaliser</h1>
    <b>filtre</b> :
    <button type="button" v-on:click="$store.commit('filterTask', 'all')">Tous</button>&nbsp;&nbsp;
    <button type="button" v-on:click="$store.commit('filterTask','comp')">Completés</button>&nbsp;&nbsp;
    <button type="button" v-on:click="$store.commit('filterTask','nComp')">Non Complétés</button><br><br>
    Nombre de tâches restantes : {{ rest }}

    <ul>
      <li v-for="(todo,index) in currentT" :key="index">
        {{ todo.titre }} {{ todo.completed }}
        <input type="checkbox" id="fTask" v-on:change="completeTask(index)">
        <label for="fTask">Fini ? </label>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-danger"
                v-on:click="supprimerTask(index)">X
        </button>
        <br><br>
      </li>
    </ul>

    <div id="nouvelleTask">
      <label for="nTask">Nouvelle tâche : </label>&nbsp;
      <input type="text" id="nTask" v-model="nT" v-on:change="nT.set()">&nbsp;&nbsp;
      <button type="button" class="btn btn-success" v-on:click="addTask">+</button>
      <br><br>
    </div>

  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed:{
    nT : {
      get(){
        return this.$store.state["todo/nTask"]
      },
      set(value){
        this.$store.commit('todo/setNTask', value)
      },
    },
    ...mapState('todo', {
      rest: 'restante',
    }),
    ...mapGetters('todo', {
      currentT: 'getCurrentTodo',
    }),
  },
  methods:{
    ...mapMutations('todo', ['completeTask', "addTask", "supprimerTask"]),
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
