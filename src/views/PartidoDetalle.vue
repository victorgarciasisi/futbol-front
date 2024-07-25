<template>
  <div>
    <h1>Detalles del Partido</h1>
    <div v-if="isLoading">
      <p>Cargando...</p>
    </div>
    <div v-else-if="error">
      <p>Error cargando datos: {{ error }}</p>
    </div>
    <div v-else>
      <h2>{{ partido.resultado }}</h2>
      <p>Jornada: {{ partido.jornada }}</p>
      <p>Fecha: {{ partido.fecha }}</p>
      <h3>Detalles del Partido</h3>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Demarcación</th>
            <th>Partido</th>
            <th>Titular</th>
            <th>Suplente</th>
            <th>Minutos</th>
            <th>Roja</th>
            <th>Amarilla</th>
            <th>Gol</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jugador in partidoFicha" :key="jugador.idjugador">
            <td><router-link :to="{ name: 'JugadorFicha', params: { id: jugador.idjugador }}">{{ jugador.apodo }}</router-link></td>
            <td>{{ jugador.demarcacion }}</td>
            <td>{{ jugador.partido }}</td>
            <td>{{ jugador.titular }}</td>
            <td>{{ jugador.suplente }}</td>
            <td>{{ jugador.minutos }}</td>
            <td>{{ jugador.roja }}</td>
            <td>{{ jugador.amarilla }}</td>
            <td>{{ jugador.gol }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PartidoDetalle',
  data() {
    return {
      partido: null,
      partidoFicha: [],
      isLoading: true,
      error: null
    };
  },
  created() {
    const idPartido = this.$route.params.idPartido;
    axios.get(`/partidos/${idPartido}`)
      .then(response => {
        this.partido = response.data.partido;
        this.partidoFicha = response.data.partidoFicha;
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Hubo un error!', error);
        this.error = error.message;
        this.isLoading = false;
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
</style>
