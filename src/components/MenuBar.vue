<template> <!--Code de la bar de menu trouver sur Bootstrap-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="barMenu">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Application des Todo-Liste</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Connexion</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuBar"
}
</script>

<style scoped>
  #barMenu{
    border: black;
    border-style: solid;
  }
</style>