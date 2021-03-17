<template>
  <div id="todo">
    <h1>TODO LISTE</h1>
    <b>filtre</b> :
    <button type="button" v-on:click="filterTask('all')">Tous</button>&nbsp;&nbsp;
    <button type="button" v-on:click="filterTask('comp')">Completés</button>&nbsp;&nbsp;
    <button type="button" v-on:click="filterTask('nComp')">Non Complétés</button><br><br>
    Nombre de tâches restantes : {{ this.restante }}
    <ul>
      <li v-for="(todo,index) in todos" :key="todo.id">
        {{ todo.titre }} --- {{ todo.completed }}
        <input type="checkbox" id="fTask" v-on:change="completedTask(index)">
        <label for="fTask"> -- Fini ?</label>
        <br>
        <button type="button" v-on:click="supprimerTask(index)">Supprimer</button>
      </li>
    </ul>

    <div id="nouvelleTask">
      <label for="nTask">Nouvelle tâche : </label>&nbsp;
      <input type="text" id="nTask" v-model="nTask">&nbsp;&nbsp;
      <button type="button" v-on:click="addTask">Confirmer</button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      todos:[
        {
          id: 0,
          titre: 'tache 1',
          completed: false
        },
        {
          id: 1,
          titre: 'tache 2',
          completed: false
        },
        {
          id: 2,
          titre: 'tache 3',
          completed: false
        },
        {
          id: 3,
          titre: 'tache 4',
          completed: false
        },
        {
          id: 4,
          titre: 'tache 5',
          completed: false
        },
        {
          id: 5,
          titre: 'tache 6',
          completed: false
        }
      ],
      nTask:'',
      restante: 0
    }
  },

  methods:{
    completedTask(index){
      if(this.todos[index].completed){
        this.todos[index].completed=false
      }
      else{
        this.todos[index].completed=true
      }
    },
    supprimerTask(index){
      this.todos = this.todos.slice(0, index).concat(this.todos.slice(index+1))
    },
    addTask(){
      this.todos.push({id: this.todos.length, titre: this.nTask, completed: false})
      this.nTask ='';
    },

    filterTask(filtre){
      //let tabR = this.todos
      //console.log(tabR)
      if(filtre === 'all'){
        console.log(filtre)
        return this.todos
      }
      if(filtre === 'comp'){
        console.log(filtre)
        this.todos = this.todos.filter(function (todo){
          return todo.completed == true
        });
      }
      if(filtre === 'nComp'){
        console.log(filtre)
        this.todos = this.todos.filter(function (todo){
          return todo.completed == false
        });
      }
    },

    /*setTacheR(){
      for(let todo in this.todos){
        if(todo.completed == false){
          this.restante = this.restante+1
        }
      }
      console.log(this.restante)
    }*/
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
