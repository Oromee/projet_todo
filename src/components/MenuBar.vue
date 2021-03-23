<template> <!--Code de la bar de menu trouver sur Bootstrap-->
  <!--Cette page contient le code du menu Application / Connexion / Inscription -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="barMenu">
      <router-link to="/Home" class="btn btn-success">Application des Todo-Liste</router-link>&nbsp;
      <router-link to="/Login" class="btn btn-success">Connexion</router-link>
      <router-link to="/Register" class="btn btn-success">Inscription</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MenuBar"
}
</script>

<style scoped>
  #barMenu{
  border: black 2px;
  border-style: solid;
  margin-bottom: 1%;
  border-radius: 7px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1em;
  }

  #barMenu a {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  }
</style>
