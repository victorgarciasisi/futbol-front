<template>
  <div>
    <h1>Entrenadores</h1>
    <table v-if="entrenadores.length">
      <thead>
        <tr>
          <th></th>
          <th>Apodo</th>
          <th>Nombre</th>
          <th>Partidos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entrenador in entrenadores" :key="entrenador.idjugador">
          <td><img :src="entrenador.foto" style="width: 50px; height: auto;"></td>
          <td><router-link :to="{ name: 'EntrenadorFicha', params: { id: entrenador.idjugador }}">{{ entrenador.apodo }}</router-link></td>
          <td>{{ entrenador.nombre }}</td>
          <td>{{ entrenador.partido }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      No hay datos disponibles.
    </div>
    <div v-if="error">
      <p>Error cargando datos: {{ error }}</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'EntrenadoresPage',
  data() {
    return {
      entrenadores: [],
      error: null
    };
  },
  created() {
    axios.get('/entrenadores') // Ruta relativa
      .then(response => {
        this.entrenadores = response.data;
      })
      .catch(error => {
        console.error('There was an error!', error);
        this.error = error.message;
      });
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

img {
  display: block;
  margin: auto;
}
</style>