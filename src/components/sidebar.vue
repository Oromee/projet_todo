<template>
  <div id="sidebar">
    <h1>Liste des Todos</h1>
    <ul>
      <li v-for="(list,index) in lists" :key="index">
        {{ index }}
        <button type="button" class="btn-dark" v-on:click="afficheListeID(index)"> - {{ list.titre }} - {{ list.id}}</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" v-on:click="supprimerList(index)">X</button>
      </li>
    </ul>

    <div id="nouvelleList">
      <label for="newL">Nouvelle Liste : </label>&nbsp;&nbsp;
      <input type="text" id="newL" v-model="nL" v-on:change="nL.set()">&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" v-on:click="addList"> + </button> <br> <br>
    </div>
  </div>
</template>

<script>


import { mapGetters, mapMutations } from "vuex";

export default {
  methods:{
    ...mapMutations('todo', ['afficheListeID', 'addList', "supprimerList"]),
  },

  computed:{
    nL : {
      get(){
        return this.$store.state["todo/nList"]
      },
      set(value){
        this.$store.commit('todo/setNList', value)
      }
    },
    ...mapGetters('todo', {
      lists : 'getLists',
    }),
  },


  name: "sidebar.vue"
}
</script>

<style scoped>
  #sidebar{
    border: black;
    border-style: solid;
  }

</style>