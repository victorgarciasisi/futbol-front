<template>
  <div>
    <h1>Detalles del Jugador para la Temporada</h1>
    <div v-if="isLoading">
      <p>Cargando...</p>
    </div>
    <div v-else-if="error">
      <p>Error cargando datos: {{ error }}</p>
    </div>
    <div v-else>
      <div>
        <img :src="`/${jugadorFicha.foto}`" alt="Foto del jugador">
        <h2>{{ jugadorFicha.apodo }} ({{ jugadorFicha.nombre }})</h2>
        <p>Fecha de Nacimiento: {{ jugadorFicha.fechanacimiento }}</p>
        <p>Demarcación: {{ jugadorFicha.demarcacion }}</p>
        <p>Ciudad: {{ jugadorFicha.ciudad }}</p>
        <p>País: {{ jugadorFicha.pais }}</p>
      </div>
      <h3>Partidos del Jugador</h3>
      <table>
        <thead>
          <tr>
            <th>Temporada</th>
            <th>División</th>
            <th>Jornada</th>
            <th>Resultado</th>
            <th>Partido</th>
            <th>Titular</th>
            <th>Suplente</th>
            <th>Minutos</th>
            <th>Amarilla</th>
            <th>Roja</th>
            <th>Gol</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="partido in jugadorPartidos" :key="partido.idpartido">
            <td><router-link :to="{ name: 'TemporadaDetalle', params: { id: partido.idtemporada }}">{{ partido.temporada }}</router-link></td>
            <td>{{ partido.division }}</td>
            <td><router-link :to="{ name: 'PartidosFicha', params: { idTemporada: partido.idtemporada } }">{{ partido.jornada }}</router-link></td>
            <td><router-link :to="{ name: 'PartidosFicha', params: { idTemporada: partido.idtemporada } }">{{ partido.resultado }}</router-link></td>
            <td>{{ partido.partido }}</td>
            <td>{{ partido.titular }}</td>
            <td>{{ partido.suplente }}</td>
            <td>{{ partido.minutos }}</td>
            <td>{{ partido.amarilla }}</td>
            <td>{{ partido.roja }}</td>
            <td>{{ partido.gol }}</td>
          </tr>
            <tr v-for="suma in jugadorSumaPartidos" :key="suma['sum(partido)']">
			<td>TOTAL</td>
			<td></td>
			<td></td>
			<td></td>
            <td>{{ suma['sum(partido)'] }}</td>
            <td>{{ suma['sum(titular)'] }}</td>
            <td>{{ suma['sum(suplente)'] }}</td>
            <td>{{ suma['sum(minutos)'] }}</td>
            <td>{{ suma['sum(amarilla)'] }}</td>
            <td>{{ suma['sum(roja)'] }}</td>
            <td>{{ suma['sum(gol)'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JugadorPartidosTemporada',
  data() {
    return {
      jugadorFicha: null,
      jugadorPartidos: [],
      jugadorSumaPartidos: [],
      isLoading: true,
      error: null
    };
  },
  created() {
    const idJugador = this.$route.params.idJugador;
    const idTemporada = this.$route.params.idTemporada;
    axios.get(`/jugadores/${idJugador}/temporadas/${idTemporada}`)
      .then(response => {
        this.jugadorFicha = response.data.jugadorFicha;
        this.jugadorPartidos = response.data.jugadorPartidos;
        this.jugadorSumaPartidos = response.data.jugadorSumaPartidos;
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

img {
  max-width: 150px;
  height: auto;
  display: block;
  margin-bottom: 20px;
}
</style>
