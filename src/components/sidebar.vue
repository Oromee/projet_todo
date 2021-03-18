<template>
  <div id="sidebar">
    <h1>Liste des Todos</h1>
    <ul>
      <li v-for="(list,index) in $store.state.lists" :key="index">
        <button type="button" class="btn-dark" v-on:click="$store.commit('afficheListeID', index)">{{ list.id }} - {{ list.titre }}</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" v-on:click="$store.commit('supprimerList', index)">X</button>
        {{$store.state.lists[index].todos.length}}
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


import {mapState} from "vuex";

export default {
  computed:{
    ...mapState({
      newL : 'nList'
    })
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