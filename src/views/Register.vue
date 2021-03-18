<template>
  <div id="reg">
    <h1>Inscription</h1>
    <label for="usrN">Username :</label>&nbsp;
    <input type="text" id="usrN"><br><br>
    <label for="usrP">Password :</label>&nbsp;
    <input type="text" id="usrP"><br><br>
    <label for="usrP2">Confirm Password  :</label>&nbsp;
    <input type="text" id="usrP2"><br><br>
    <button>S'inscrire</button><br><br><br><br>
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
</style>