<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Fútbol App</a>
      <!-- RESPONSIVE DONT WORK
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
       -->
      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/temporadas">Temporadas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/entrenadores">Entrenadores</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jugadores">Jugadores</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/partidos">Partidos</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>


<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

.navbar {
  margin-bottom: 20px;
}

.table {
  margin-bottom: 20px;
}

.table th,
.table td {
  vertical-align: middle;
  text-align: center;
}

.table img {
  max-width: 50px;
  height: auto;
  border-radius: 50%;
}

h1, h2, h3 {
  color: #343a40;
}

.container {
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.table-responsive {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .navbar-brand {
    font-size: 1.2rem;
  }
}
</style>