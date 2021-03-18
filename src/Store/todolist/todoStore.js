import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        restante: 10,
        nTask: '',
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
    },

    getters: {
        getAllTodos: state => {
            return state.todos
        }
    },

    mutations:{
        completeTask(state, index){
            if(state.todos[index].completed){
                state.todos[index].completed=false
            }
            else{
                state.todos[index].completed=true
            }
        },

        supprimerTask(state, index){
            state.todos = state.todos.slice(0, index).concat(state.todos.slice(index+1))
        },

        addTask(state){
            state.todos.push({id: state.todos.length, titre: state.nTask, completed: false})
        },

        /*filterTask(state, filtre){
            if(filtre === 'all'){
                console.log(filtre)
                return state.todos
            }
            if(filtre === 'comp'){
                console.log(filtre)
                state.todos = state.todos.filter(function (todo){
                    return todo.completed == true
                });
            }
            if(filtre === 'nComp'){
                console.log(filtre)
                state.todos = state.todos.filter(function (todo){
                    return todo.completed == false
                });
            }
        },*/
    },

    actions:{},
})

