import { createRouter, createWebHistory } from 'vue-router';
import TemporadasPage from '../views/TemporadasPage.vue';
import EntrenadoresPage from '../views/EntrenadoresPage.vue';
import JugadoresPage from '../views/JugadoresPage.vue';
import PartidosPage from '../views/PartidosPage.vue';
import TemporadaDetalle from '../views/TemporadaDetalle.vue';
import JugadorFicha from '../views/JugadorFicha.vue';
import EntrenadorFicha from '../views/EntrenadorFicha.vue';
import PartidosFicha from '../views/PartidosFicha.vue';
import PartidoDetalle from '../views/PartidoDetalle.vue'; 
import JugadorPartidosTemporada from '../views/JugadorPartidosTemporada.vue'; 
import HomePage from '../views/HomePage.vue';


const routes = [
  { path: '/temporadas', name: 'Temporadas', component: TemporadasPage },
  { path: '/entrenadores', name: 'Entrenadores', component: EntrenadoresPage },
  { path: '/jugadores', name: 'Jugadores', component: JugadoresPage },
  { path: '/partidos', name: 'Partidos', component: PartidosPage },
  { path: '/temporadas/:id', name: 'TemporadaDetalle', component: TemporadaDetalle },
  { path: '/jugadores/:id', name: 'JugadorFicha', component: JugadorFicha },
  { path: '/entrenadores/:id', name: 'EntrenadorFicha', component: EntrenadorFicha },
  { path: '/partidos/temporada/:idTemporada', name: 'PartidosFicha', component: PartidosFicha },
  { path: '/partidos/:idPartido', name: 'PartidoDetalle', component: PartidoDetalle },
  { path: '/jugadores/:idJugador/temporadas/:idTemporada', name: 'JugadorPartidosTemporada', component: JugadorPartidosTemporada },
  { path: '/', name: 'HomePage', component: HomePage }
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
