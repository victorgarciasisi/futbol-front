<template>
  <div>
    <h1>Partidos</h1>
    <div v-if="isLoading">
      <p>Cargando...</p>
    </div>
    <div v-else-if="error">
      <p>Error cargando datos: {{ error }}</p>
    </div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Jornada</th>
			<th>Fecha</th>
            <th>Resultado</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="partido in partidos" :key="partido.idpartido">
            <td><router-link :to="{ name: 'PartidoDetalle', params: { idPartido: partido.idpartido } }">{{ partido.jornada }}</router-link></td>
            <td><router-link :to="{ name: 'PartidoDetalle', params: { idPartido: partido.idpartido } }">{{ partido.fecha }}</router-link></td>
            <td><router-link :to="{ name: 'PartidoDetalle', params: { idPartido: partido.idpartido } }">{{ partido.resultado }}</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PartidosFicha',
  data() {
    return {
      partidos: [],
      isLoading: true,
      error: null
    };
  },
  created() {
    const idTemporada = this.$route.params.idTemporada;
    axios.get(`/partidos/temporada/${idTemporada}`)
      .then(response => {
        this.partidos = response.data;
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
