<template>
  <div id="sidebar">
    <h1>Liste des Todos</h1>
    <ul>
      <li v-for="(list,index) in lists" :key="index">
        <button type="button" class="btn-dark" v-on:click="this.afficheListID(index)">{{ index }} - {{ list.titre }} - {{ list.id}}</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button">X</button>
      </li>
    </ul>

    <div id="nouvelleList">
      <label for="nList">Nouvelle Liste : </label>&nbsp;&nbsp;
      <input type="text" id="nList" v-model="$store.state.nList">&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" v-on:click="$store.commit('addList')"> + </button> <br> <br>

    </div>
  </div>
</template>

<script>


import {mapState, mapGetters, mapMutations} from "vuex";

export default {
  methods:{
    ...mapMutations('todo', {
      afficheListID: 'afficheListeID'
    }),
  },

  computed:{
    ...mapState('todo', {
      newL : 'nList'
    }),
    ...mapGetters('todo', {
      lists : 'getLists'
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