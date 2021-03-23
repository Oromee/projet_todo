import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
        restante: 0,
        nTask: '',
        currentTodo: [],
        nList: '',
        token: '',
        lists: [
            {
                "id": 0,
                "titre" : 'list 1',
                "todos" : [
                    {
                        "id": 0,
                        "titre" : 'tache 1',
                        "completed": false,
                    },
                    {
                        "id": 1,
                        "titre" : 'tache 2',
                        "completed": false,
                    }
                ]
            },
            {
                "id": 1,
                "titre": 'list 2',
                "todos": [
                    {
                        "id": 0,
                        "titre": 'tache 1',
                        "completed": false,
                    },
                    {
                        "id": 1,
                        "titre": 'tache 2',
                        "completed": false,
                    },
                    {
                        "id": 3,
                        "titre": 'tache 3',
                        "completed": false,
                    },
                ],
            }
        ]
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
        state.nList = newL
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}








