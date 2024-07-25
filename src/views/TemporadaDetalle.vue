<template>
  <div>
    <h1 v-if="temporada">Detalle de Temporada {{ temporada.idtemporada }}</h1>
    <div v-if="isLoading">
      <p>Cargando...</p>
    </div>
    <div v-else-if="error">
      <p>Error cargando datos: {{ error }}</p>
    </div>
    <div v-else>
      <div v-if="temporada">
        <h2>Información General</h2>
        <p><strong>Temporada:</strong> {{ temporada.temporada }}</p>
        <p><strong>División:</strong> {{ temporada.division }}</p>
        <p><strong>Posición:</strong> {{ temporada.posicion }}</p>

        <h2>Entrenador</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Apodo</th>
              <th>Partidos</th>
              <th>Amarillas</th>
              <th>Rojas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entrenador in entrenador" :key="entrenador.idjugador">
              <td><img :src="`/${entrenador.foto}`" alt="Foto" width="50"></td>
              <td><router-link :to="{ name: 'EntrenadorFicha', params: { id: entrenador.idjugador }}">{{ entrenador.apodo }}</router-link></td>
              <td>{{ entrenador['SUM(partido)'] }}</td>
              <td>{{ entrenador['SUM(amarilla)'] }}</td>
              <td>{{ entrenador['SUM(roja)'] }}</td>
            </tr>
          </tbody>
        </table>

        <h2>Porteros</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Apodo</th>
              <th>Partidos</th>
              <th>Titular</th>
              <th>Suplente</th>
              <th>Minutos</th>
              <th>Goles</th>
              <th>Amarillas</th>
              <th>Rojas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="portero in porteros" :key="portero.idjugador">
              <td><img :src="`/${portero.foto}`" alt="Foto" width="50"></td>
              <td><router-link :to="{ name: 'JugadorFicha', params: { id: portero.idjugador }}">{{ portero.apodo }}</router-link></td>
              <td><router-link :to="{ name: 'JugadorPartidosTemporada', params: { idJugador: portero.idjugador, idTemporada: portero.idtemporada } }">{{ portero['SUM(partido)'] }}</router-link></td>
              <td>{{ portero['SUM(titular)'] }}</td>
              <td>{{ portero['SUM(suplente)'] }}</td>
              <td>{{ portero['SUM(minutos)'] }}</td>
              <td>{{ portero['SUM(gol)'] }}</td>
              <td>{{ portero['SUM(amarilla)'] }}</td>
              <td>{{ portero['SUM(roja)'] }}</td>
            </tr>
          </tbody>
        </table>

        <h2>Defensas</h2>
        <table>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Apodo</th>
              <th>Partidos</th>
              <th>Titular</th>
              <th>Suplente</th>
              <th>Minutos</th>
              <th>Goles</th>
              <th>Amarillas</th>
              <th>Rojas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="defensa in defensas" :key="defensa.idjugador">
              <td><img :src="`/${defensa.foto}`" alt="Foto" width="50"></td>
              <td><router-link :to="{ name: 'JugadorFicha', params: { id: defensa.idjugador }}">{{ defensa.apodo }}</router-link></td>
              <td><router-link :to="{ name: 'JugadorPartidosTemporada', params: { idJugador: defensa.idjugador, idTemporada: defensa.idtemporada } }">{{ defensa['SUM(partido)'] }}</router-link></td>
              <td>{{ defensa['SUM(titular)'] }}</td>
              <td>{{ defensa['SUM(suplente)'] }}</td>
              <td>{{ defensa['SUM(minutos)'] }}</td>
              <td>{{ defensa['SUM(gol)'] }}</td>
              <td>{{ defensa['SUM(amarilla)'] }}</td>
              <td>{{ defensa['SUM(roja)'] }}</td>
            </tr>
          </tbody>
        </table>

        <h2>Centrocampistas</h2>
        <table>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Apodo</th>
              <th>Partidos</th>
              <th>Titular</th>
              <th>Suplente</th>
              <th>Minutos</th>
              <th>Goles</th>
              <th>Amarillas</th>
              <th>Rojas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="centrocampista in centrocampistas" :key="centrocampista.idjugador">
              <td><img :src="`/${centrocampista.foto}`" alt="Foto" width="50"></td>
              <td><router-link :to="{ name: 'JugadorFicha', params: { id: centrocampista.idjugador }}">{{ centrocampista.apodo }}</router-link></td>
              <td><router-link :to="{ name: 'JugadorPartidosTemporada', params: { idJugador: centrocampista.idjugador, idTemporada: centrocampista.idtemporada } }">{{ centrocampista['SUM(partido)'] }}</router-link></td>
              <td>{{ centrocampista['SUM(titular)'] }}</td>
              <td>{{ centrocampista['SUM(suplente)'] }}</td>
              <td>{{ centrocampista['SUM(minutos)'] }}</td>
              <td>{{ centrocampista['SUM(gol)'] }}</td>
              <td>{{ centrocampista['SUM(amarilla)'] }}</td>
              <td>{{ centrocampista['SUM(roja)'] }}</td>
            </tr>
          </tbody>
        </table>

        <h2>Atacantes</h2>
        <table>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Apodo</th>
              <th>Partidos</th>
              <th>Titular</th>
              <th>Suplente</th>
              <th>Minutos</th>
              <th>Goles</th>
              <th>Amarillas</th>
              <th>Rojas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="atacante in atacantes" :key="atacante.idjugador">
              <td><img :src="`/${atacante.foto}`" alt="Foto" width="50"></td>
              <td><router-link :to="{ name: 'JugadorFicha', params: { id: atacante.idjugador }}">{{ atacante.apodo }}</router-link></td>
              <td><router-link :to="{ name: 'JugadorPartidosTemporada', params: { idJugador: atacante.idjugador, idTemporada: atacante.idtemporada } }">{{ atacante['SUM(partido)'] }}</router-link></td>
              <td>{{ atacante['SUM(titular)'] }}</td>
              <td>{{ atacante['SUM(suplente)'] }}</td>
              <td>{{ atacante['SUM(minutos)'] }}</td>
              <td>{{ atacante['SUM(gol)'] }}</td>
              <td>{{ atacante['SUM(amarilla)'] }}</td>
              <td>{{ atacante['SUM(roja)'] }}</td>
            </tr>
          </tbody>
        </table>


      </div>
      <div v-else>
        <p>No se encontraron datos para esta temporada.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TemporadaDetalle',
  data() {
    return {
      temporada: null,
      porteros: [],
      defensas: [],
      centrocampistas: [],
      atacantes: [],
      entrenador: [],
      isLoading: true,
      error: null
    };
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`/temporadas/${id}`)
      .then(response => {
        this.temporada = response.data.temporada;
        this.porteros = response.data.porterosTemporada;
        this.defensas = response.data.defensasTemporada;
        this.centrocampistas = response.data.centrocampistasTemporada;
        this.atacantes = response.data.atacantesTemporada;
        this.entrenador = response.data.entrenadorTemporada;
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
