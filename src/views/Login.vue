<template>
  <div id="login">
    <h1>Connexion : </h1>
    <label for="usrN">Username :</label>&nbsp;
    <input type="text" id="usrN"><br><br>
    <label for="usrP">MDP :</label>&nbsp;
    <input type="text" id="usrP"><br><br>
    <button>Connexion</button><br><br><br><br>

    Pas encore de compte ? <router-link to="/Register" class="btn btn-success">S'inscrire</router-link><br><br><br><br>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  #login{
    text-align: center;
  }
</style>