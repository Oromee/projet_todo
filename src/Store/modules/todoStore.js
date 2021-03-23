import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
        restante: 0,
        nTask: '',
        currentTodo: [],
        lists: [],
        nList: 'zefz',
})

const getters = {
    getCurrentTodo: (state) => {
        return state.currentTodo
    },
    getLists: (state) => {
        return state.lists
    },
    nList:(state) => {
        return state.nList
    }
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

    setNTask(state, nT){
      state.nTask = nT
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
        state.currentTodo = state.lists[id].todos
    },

    setNList(state, newL) {
        console.log(newL)
        state.nList = newL
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}








