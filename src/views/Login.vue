<template>
  <div id="login">
    <h1 id="titreConnexion">Connexion </h1>
    <div id="formulaireConnexion">
    <label for="usrN" class="titreformulaire">Nom d'utilisateur</label>&nbsp;
    <input type="text" id="usrN" v-model="tUsr" v-on:change="tUsr.set()"><br><br>
    <label for="usrP" class="titreformulaire">Mot de passe</label>&nbsp;
    <input type="password" id="usrP" v-model="tPsw" v-on:change="tPsw.set()"><br><br>
    <button id="buttonValidationConnexion" class="btn btn-success" v-on:click="connectUsr">Connexion</button>
    </div>
    <div id="inscrittoi">
    <span id="textinscrittoi"> Pas encore de compte ? </span> <router-link to="/Register" class="btn btn-success">S'inscrire</router-link>
    </div>
  </div>
</template>

<script>

import {mapMutations} from "vuex";

export default {
  methods:{
    ...mapMutations('account', ['connectUsr'])
  },
  computed:{
    tUsr : {
      get(){
        return this.$store.state["account/usr"]
      },
      set(value){
        this.$store.commit("account/checkUsr", value)
      }
    },

    tPsw : {
      get(){
        return this.$store.state["account/psw"]
      },
      set(value){
        this.$store.commit("account/checkPsw", value)
      }
    }
  }
}
</script>

<style scoped>
  #titreConnexion{
    text-align:center;
    color:teal;
  }

  #formulaireConnexion {
    width:17%;
    margin-left:auto;
    margin-right:auto;
  }

  #listeadmin {
    width:9%;
    margin-left:auto;
    margin-right:auto;
  }

  .titreformulaire {
    text-align:center;
    display:block;
  }

  #usrN {
  width:100%;
  }

  #usrP {
  width:100%;
  }

  #buttonValidationConnexion {
    width: 7em;
    margin-left: 33%;
    margin-right: 33%
  }

  #inscrittoi {
    padding-top:2em;
    padding-bottom: 2em;
    width: 18%;
    margin-left:auto;
    margin-right:auto;
  }

  #textinscrittoi {
      padding-right: 7%;
  }

</style>
