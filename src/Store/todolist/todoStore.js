import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const toDoStore = new Vuex.Store({
    state:{
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
    },

    getters: {
        getAllTodos: state => {
            return state.todos
        }
    },

    actions:{},
})

export default {
    toDoStore
}