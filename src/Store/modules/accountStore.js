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
    usr:'',
    psw:'',
    cpsw:'',
    nMail: '',
    cookieConnected:false
})

const getters = {
    getConnected:(state) => {
        return state.cookieConnected
    }
}

const mutations = {
    checkUsr(state, user){
        console.log(user)
        state.usr = user
    },


    checkPsw(state, psw){
        console.log(psw)
        state.psw = psw
    },

    checkCPsw(state, cpsw){
        console.log(cpsw)
        state.cpsw = cpsw
    },

    checkMail(state, nMail){
        console.log(nMail)
        state.mail = nMail
    },

    connectUsr(state){
        state.users.forEach(user => {
            if(user.password == state.psw && user.username == state.usr){
               state.cookieConnected = true
           }
           else {
               console.log("Identifiants incorrects")
           }
        });
    },


    addUser(state){
        let pswTmp = ''
        if(state.psw == state.cpsw){
            pswTmp = state.psw
            state.users.push({id:state.users.length, username: state.usr, password: pswTmp, mail: state.nMail})
            state.usr = ''
            state.psw = ''
            state.cpsw = ''
            state.nMail = ''

            state.users.forEach(user => console.log(user.username + ' ' + user.password))
        }
        else{
            console.log("Erreur ! Mot de passe différent")
        }

    }

}


export default {
    namespaced : true,
    state,
    getters,
    mutations,
}

