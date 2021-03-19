import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
        restante: 0,
        nTask: '',
        currentTodo: [],
        lists: [
            {
                id: 0,
                titre : 'list 1',
                todos : [
                    {
                        id: 0,
                        titre : 'tache 1',
                        completed: false,
                    },
                    {
                        id: 1,
                        titre : 'tache 2',
                        completed: false,
                    }
                ]
            },
            {
                id: 1,
                titre : 'list 2',
                todos : [
                    {
                        id: 0,
                        titre : 'tache 1',
                        completed: false,
                    },
                    {
                        id: 1,
                        titre : 'tache 2',
                        completed: false,
                    },
                    {
                        id: 3,
                        titre : 'tache 3',
                        completed: false,
                    }
                ]
            }
        ],
        nList: '',
})

const getters = {
    getCurrentTodo: (state) => {
        return state.currentTodo
    },
    getLists: (state) => {
        return state.lists
    },
}

const mutations = {
    //Pour les todos
    completeTask(state, index) {
        if (state.currentTodo[index].completed) {
            state.currentTodo[index].completed = false
        } else {
            state.currentTodo[index].completed = true
        }
    },

    supprimerTask(state, index) {
        state.currentTodo = state.currentTodo.slice(0, index).concat(state.currentTodo.slice(index + 1))
        state.restante = state.currentTodo.length
    },

    addTask(state) {
        if (state.nTask != '') {
            state.currentTodo.push({id: state.currentTodo.length, titre: state.nTask, completed: false})
            state.restante = state.currentTodo.length
            state.nTask = ''
        } else {
            console.log('Erreur nom vide');
        }
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


    //Pour les listes
    supprimerList(state, index) {
        state.lists = state.lists.slice(0, index).concat(state.lists.slice(index + 1))
    },
    addList(state) {
        if (state.nList != '') {
            state.lists.push({id: state.lists.length, titre: state.nList, todos: []})
            state.nList = '';
        } else {
            console.log('Erreur nom vide');
        }
    },

    afficheListeID(state, id) {
        console.log(state.lists[id].todos)
        //state.currentTodo = state.lists[id].todos
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}








