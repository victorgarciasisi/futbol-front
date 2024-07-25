<template>
  <div>
    <h1 v-if="jugadorFicha">Ficha del Entrenador {{ jugadorFicha.apodo }}</h1>
    <div v-if="isLoading">
      <p>Cargando...</p>
    </div>
    <div v-else-if="error">
      <p>Error cargando datos: {{ error }}</p>
    </div>
    <div v-else>
      <div v-if="jugadorFicha">
        <h2>Información General</h2>
        <p><strong>Nombre:</strong> {{ jugadorFicha.nombre }}</p>
        <p><strong>Fecha de Nacimiento:</strong> {{ jugadorFicha.fechanacimiento }}</p>
        <p><strong>Demarcación:</strong> {{ jugadorFicha.demarcacion }}</p>
        <p><strong>Ciudad:</strong> {{ jugadorFicha.ciudad }}</p>
        <p><strong>País:</strong> {{ jugadorFicha.pais }}</p>
        <img :src="`/${jugadorFicha.foto}`" alt="Foto del jugador" width="100">

        <h2>Temporadas del Entrenador</h2>
        <table>
          <thead>
            <tr>
              <th>Temporada</th>
              <th>División</th>
              <th>Partidos</th>
              <th>Amarillas</th>
              <th>Rojas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="temporada in jugadorTemporadas" :key="temporada.idtemporada">
              <td><router-link :to="{ name: 'TemporadaDetalle', params: { id: temporada.idtemporada }}">{{ temporada.temporada }}</router-link></td>
              <td>{{ temporada.division }}</td>
              <td>{{ temporada.partidos }}</td>
              <td>{{ temporada['sum(amarilla)'] }}</td>
              <td>{{ temporada['sum(roja)'] }}</td>
            </tr>
            <tr v-for="suma in jugadorSuma" :key="suma['sum(partido)']">
              <td>TOTAL</td>
              <td></td>
              <td>{{ suma['sum(partido)'] }}</td>
 
              <td>{{ suma['sum(amarilla)'] }}</td>
              <td>{{ suma['sum(roja)'] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>No se encontraron datos para este Entrenador.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JugadorFicha',
  data() {
    return {
      jugadorFicha: null,
      jugadorTemporadas: [],
      isLoading: true,
      error: null
    };
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`/jugadores/${id}`)
      .then(response => {
        this.jugadorFicha = response.data.jugadorFicha;
        this.jugadorTemporadas = response.data.jugadorTemporadas;
        this.jugadorSuma = response.data.jugadorSuma;
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
  display: block;
  margin: auto;
}
</style>

