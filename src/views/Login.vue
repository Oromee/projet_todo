<template>
  <div id="login">
    <h1 id="titreConnexion">Connexion </h1>
    <div id="formulaireConnexion">
    <label for="usrN" class="titreformulaire">Nom d'utilisateur</label>&nbsp;
    <input type="text" id="usrN" ><br><br>
    <label for="usrP" class="titreformulaire">Mot de passe</label>&nbsp;
    <input type="password" id="usrP"><br><br>
    <button id="buttonValidationConnexion" class="btn btn-success">Connexion</button>
    </div>
    <div id="inscrittoi">
    <span id="textinscrittoi"> Pas encore de compte ? </span> <router-link to="/Register" class="btn btn-success">S'inscrire</router-link>
    </div>

<<<<<<< HEAD
    Pas encore de compte ? <router-link to="/Register" class="btn btn-success">S'inscrire</router-link><br><br><br><br>
=======
    <div id="listeadmin">
    <ul >
      <li v-for="(usr,index) in usrs" :key="index">
        {{ usr.id }} {{ usr.username }}
      </li>
    </ul>
    </div>
>>>>>>> 4c80424ffe6692d07becdc01ec8b2d91cbc45bb4
  </div>
</template>

<script>

export default {

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
