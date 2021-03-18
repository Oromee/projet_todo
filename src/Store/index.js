import Vue from 'vue'
import Vuex from 'vuex'
import account from "./modules/accountStore";
import todo from "./modules/todoStore";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        account,
        todo
    }
})