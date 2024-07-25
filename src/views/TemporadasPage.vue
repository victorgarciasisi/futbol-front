<template>
  <div>
    <h1>Temporadas</h1>
    <table v-if="temporadas.length">
      <thead>
        <tr>
          <th>Temporada</th>
          <th>División</th>
          <th>Posición</th>
        </tr>
      </thead>
<tbody>
        <tr v-for="temporada in temporadas" :key="temporada.idtemporada">
          <td>
            <router-link :to="{ name: 'TemporadaDetalle', params: { id: temporada.idtemporada }}">
              {{ temporada.temporada }}
            </router-link>
          </td>
          <td>{{ temporada.division }}</td>
          <td>{{ temporada.posicion }}</td>
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
  name: 'TemporadasPage',
  data() {
    return {
      temporadas: [],
      error: null
    };
  },
  created() {
    axios.get('/temporadas') // Ruta relativa
      .then(response => {
        this.temporadas = response.data;
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
