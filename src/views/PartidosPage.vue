<template>
  <div>
    <h1>Partidos</h1>
    
    <!-- Mostrar la tabla de partidos -->
    <h2>Detalle de Partidos</h2>
    <table v-if="partidos.length">
      <thead>
        <tr>
          <th>Temporada</th>
          <th>Partidos</th>
          <th>Ganados</th>
          <th>Empatados</th>
          <th>Perdidos</th>
          <th>Goles a Favor</th>
          <th>Goles en Contra</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="partido in partidos" :key="partido.idtemporada">
          <td><router-link :to="{ name: 'PartidosFicha', params: { idTemporada: partido.idtemporada } }">{{ partido.temporada }}</router-link></td>
          <td><router-link :to="{ name: 'PartidosFicha', params: { idTemporada: partido.idtemporada } }">{{ partido['count(jornada)'] }}</router-link></td>
          <td>{{ partido['sum(ganado)'] }}</td>
          <td>{{ partido['sum(empatado)'] }}</td>
          <td>{{ partido['sum(perdido)'] }}</td>
          <td>{{ partido['sum(golesfavor)'] }}</td>
          <td>{{ partido['sum(golescontra)'] }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      No hay datos disponibles.
    </div>

    <!-- Mostrar el resumen de partidos -->
    <h2>Resumen de Partidos</h2>
    <table v-if="sumapPartidos.length">
      <thead>
        <tr>
          <th></th>
          <th>Partidos</th>
          <th>Ganados</th>
          <th>Empatados</th>
          <th>Perdidos</th>
          <th>Goles a Favor</th>
          <th>Goles en Contra</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="resumen in sumapPartidos" :key="resumen.idtemporada">
          <td>TOTAL</td>
          <td>{{ resumen['count(jornada)'] }}</td>
          <td>{{ resumen['sum(ganado)'] }}</td>
          <td>{{ resumen['sum(empatado)'] }}</td>
          <td>{{ resumen['sum(perdido)'] }}</td>
          <td>{{ resumen['sum(golesfavor)'] }}</td>
          <td>{{ resumen['sum(golescontra)'] }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      No hay datos de resumen disponibles.
    </div>

    <div v-if="error">
      <p>Error cargando datos: {{ error }}</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'PartidosPage',
  data() {
    return {
      partidos: [],
      sumapPartidos: [],
      error: null
    };
  },
  created() {
    axios.get('/partidos')
      .then(response => {
        // Asignar datos de partidos
        this.partidos = response.data.partidos;

        // Asignar datos de resumen de partidos
        this.sumapPartidos = response.data.sumapPartidos;
      })
      .catch(error => {
        console.error('Hubo un error!', error);
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