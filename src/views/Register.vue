<template>
  <div id="reg">
    <h1 id="titreLogin">Inscription</h1>
    <div id="formulaireInscription">
    <label for="usrN" class="titreformulaire">Nom d'utilisateur</label>&nbsp;
    <input type="text" id="usrN"><br><br>
    <label for="usrP" class="titreformulaire">Mot de passe</label>&nbsp;
    <input type="password" id="usrP"><br><br>
    <label for="usrP2" class="titreformulaire">Confirmer votre mot de passe</label>&nbsp;
    <input type="password" id="usrP2"><br><br>
    <button id="buttonValidationInscription" class="btn btn-success">S'inscrire</button><br><br><br><br>
    </div>
  </div>
</template>

<script>
export default {
name: "Register"
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
