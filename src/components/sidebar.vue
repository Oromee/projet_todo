<template>
  <div id="sidebar">
    <h1>Liste des Todos</h1>
    <ul>
      <li v-for="(list,index) in lists" :key="index">
        <button type="button" class="btn-dark">{{ list.titre }}</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" v-on:click="supprimerList(index)">X</button>
      </li>
    </ul>

    <div id="nouvelleList">
      <label for="nList">Nouvelle Liste : </label>&nbsp;&nbsp;
      <input type="text" id="nList" v-model="nList">&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" v-on:click="addList"> + </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists: [
      ],
      nList: ''
    }
  },

  methods:{
    supprimerList(index){
      this.lists = this.lists.slice(0, index).concat(this.lists.slice(index+1))
    },
    addList(){
      this.lists.push({id: this.lists.length, titre: this.nList, completed: false})
      this.nList ='';
    },
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