<template>
  <div>
    <h1>Jugadores</h1>
    <table v-if="jugadores.length">
      <thead>
        <tr>
          <th></th>
          <th>Apodo</th>
          <th>Nombre</th>
          <th>Demarcación</th>
          <th>Partidos</th>
          <th>Titular</th>
          <th>Suplente</th>
          <th>Minutos</th>
          <th>Gol</th>
          <th>Amarilla</th>
          <th>Roja</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="jugador in jugadores" :key="jugador.idjugador">
          <td><img :src="jugador.foto" style="width: 50px; height: auto;"></td>
          <td><router-link :to="{ name: 'JugadorFicha', params: { id: jugador.idjugador }}">{{ jugador.apodo }}</router-link></td>
          <td>{{ jugador.nombre }}</td>
          <td>{{ jugador.demarcacion }}</td>
          <td>{{ jugador['SUM(partido)'] }}</td>
          <td>{{ jugador['SUM(titular)'] }}</td>
          <td>{{ jugador['SUM(suplente)'] }}</td>
          <td>{{ jugador['SUM(minutos)'] }}</td>
          <td>{{ jugador['SUM(gol)'] }}</td>
          <td>{{ jugador['SUM(amarilla)'] }}</td>
          <td>{{ jugador['SUM(roja)'] }}</td>
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
  name: 'JugadoresPage',
  data() {
    return {
      jugadores: [],
      error: null
    };
  },
  created() {
    axios.get('/jugadores') // Ruta relativa
      .then(response => {
        this.jugadores = response.data;
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