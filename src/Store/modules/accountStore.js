import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    users:[
        {
            id: 0,
            mail: 'admin@gmail.com',
            username: 'admin',
            password: 'admin',
        },
    ],
})


export default {
    state


}
