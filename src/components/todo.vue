<template>
  <div id="todo">
    <ul>
      <li v-for="(todo, index) in todos" :key="todo">
        {{ index }} - {{ todo.titre }}
        <input type="checkbox" v-on:change="completedTask(index)">
        <br>
        <button type="button" v-on:click="supprimerTask(index)">Supprimer</button>
      </li>
    </ul>
    <button type="button" v-on:click="ajoutTache(document.getElementById(nouvelleTask))">Ajouter un tache</button>
    <div id="nouvelleTask">
      <label for="nTask">Nouvelle tâche : </label>&nbsp;
      <input type="text" name="nTask" v-model="nTask"><br>
      <button type="button">Confirmer</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      todos:[
        {
          titre: 'tache 1',
          completed: false
        },
        {
          titre: 'tache 2',
          completed: false
        },
        {
          titre: 'tache 3',
          completed: false
        },
        {
          titre: 'tache 4',
          completed: false
        },
        {
          titre: 'tache 5',
          completed: false
        },
        {
          titre: 'tache 6',
          completed: false
        }
      ],
      nTask:'',
      filter: 'all'

    }
  },

  methods:{
    completedTask(index){
      if(this.todos[index].completed===true){
        this.todos[index].completed=false
      }
      else{
        this.todos[index].completed=true
      }
    },
    supprimerTask(index){
      //this.todos = this.todos.slice(0, index) + this.todos.slice(index+1)
      console.log(this.todos.slice(0, index))
      console.log(this.todos.slice(index+1))
    },
    ajoutTache(divhidden){
      this.getElementById(divhidden).style.visibility ='visible';
    }
  },
  name:"todo"
}


</script>

<style scoped>
  h1 {
    color:lightgray;
  }

  #nouvelleTask{
    visibility: visible;
  }
</style>
