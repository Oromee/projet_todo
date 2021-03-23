<template>
  <div id="sidebar">
    <h1 id="titreListeTodo">Liste des Todos</h1>
    <ul id="listeListeTodo">
      <li v-for="(list,index) in lists" :key="index">
        {{ index }}
        <button type="button" class="btn-dark" v-on:click="afficheListeID(index)"> - {{ list.titre }} - {{ list.id}}</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" v-on:click="supprimerList(index)">X</button>
      </li>
    </ul>

    <div id="nouvelleList">
      <label for="newL">Nouvelle Liste : </label>&nbsp;&nbsp;
      <input type="text" id="newL" v-model="newL">&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" v-on:click="newL.set(newL)"> + </button> <br> <br>
      uyyu {{ newL }}

    </div>
  </div>
</template>

<script>


import {mapState, mapGetters, mapMutations} from "vuex";

export default {
  methods:{
    ...mapMutations('todo', ['afficheListeID', 'addList', "supprimerList"]),
    updateList(e) {
      this.$store.commit('todo/updateNList', e.target.value)
    }
  },

  computed:{
    ...mapState('todo', {
      newL :{
        get(){
          return this.$store.state["todo/nList"].message
        },
        set(value){
          this.$store.commit('updateList', value)
        }
      }
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

  #titreListeTodo {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: teal;
  }

  #listeListeTodo {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  }

  #nouvelleList{
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  }

</style>
