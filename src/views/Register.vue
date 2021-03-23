<template>
  <div id="reg">
    <h1 id="titreLogin">Inscription</h1>
    <div id="formulaireInscription">
    <label for="usrN" class="titreformulaire">Nom d'utilisateur</label>&nbsp;
    <input type="text" id="usrN" v-model="tUsr" v-on:change="tUsr.set()"><br><br>
    <label for="usrN" class="titreformulaire">Adresse Mail</label>&nbsp;
    <input type="text" id="usrM" v-model="tMail" v-on:change="tMail.set()"><br><br>
    <label for="usrP" class="titreformulaire">Mot de passe</label>&nbsp;
    <input type="password" id="usrP" v-model="tPsw" v-on:change="tPsw.set()"><br><br>
    <label for="usrP2" class="titreformulaire">Confirmer votre mot de passe</label>&nbsp;
    <input type="password" id="usrP2" v-model="tcPsw" v-on:change="tcPsw.set()"><br><br>
    <button id="buttonValidationInscription" class="btn btn-success" v-on:click="addUser">S'inscrire</button><br><br><br><br>
    </div>

    <div></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
name: "Register",
  methods:{
  ...mapMutations('account', ['addUser'])
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
    },
    tcPsw : {
      get(){
        return this.$store.state["account/cpsw"]
      },
      set(value){
        this.$store.commit("account/checkCPsw", value)
      }
    },
    tMail : {
      get(){
        return this.$store.state["account/nMail"]
      },
      set(value){
        this.$store.commit("account/checkMail", value)
      }
    },
  }
}
</script>

<style scoped>
  #reg{
    text-align: center;
  }

  #titreLogin{
    color:teal;
  }

  #formulaireInscription{
    width:17%;
    margin-left:auto;
    margin-right:auto;
  }

  .titreformulaire {
    text-align:center;
    display:block;
  }

  #buttonValidationInscription {
    width: 7em;
    margin-left: 33%;
    margin-right: 33%
  }

  #usrN {
  width:100%;
  }

  #usrP {
  width:100%;
  }
  #usrP2 {
  width:100%;
  }

</style>
