<template>
  <div id="todo">
    <h1>TODO LISTE</h1>
    <b>filtre</b> :
    <button type="button" v-on:click="filterTask('all')">Tous</button>&nbsp;&nbsp;
    <button type="button" v-on:click="filterTask('comp')">Completés</button>&nbsp;&nbsp;
    <button type="button" v-on:click="filterTask('nComp')">Non Complétés</button><br><br>
    <!--Nombre de tâches restantes : {{ restante }}-->

    <ul>
      <li v-for="(todo,index) in todos" :key="todo.id">
        {{ todo.titre }} -
        <input type="checkbox" id="fTask" v-on:change="completedTask(index)">
        <label for="fTask"> Fini ? </label>
        <button type="button" class="btn btn-danger" v-on:click="supprimerTask(index)">X</button>
        <br><br>
      </li>
    </ul>

    <div id="nouvelleTask">
      <label for="nTask">Nouvelle tâche : </label>&nbsp;
      <input type="text" id="nTask" v-model="nTask">&nbsp;&nbsp;
      <button type="button" class="btn btn-success" v-on:click="addTask">+</button>
      <br> <br>
    </div>

  </div>
</template>


<script>
import todoStore from "@/Store/todolist/todoStore";

export default {
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

  computed: {
    todos: todoStore.getters.getAllTodos()
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
