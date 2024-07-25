# **Documentación de la Aplicación de Estadísticas de Fútbol**

## **1. Introducción**

Esta aplicación permite a los usuarios visualizar estadísticas relacionadas con equipos de fútbol, incluyendo temporadas, jugadores, partidos y entrenadores. 

Utiliza Vue.js para el front-end, junto con Vue Router para la navegación entre las distintas vistas de la aplicación.

## **2. Estructura del Proyecto**

### **2.1 Estructura de Archivos**

- **src**
  - **assets**: Contiene los recursos estáticos de la aplicación, como imágenes.
  - **components**: Componentes Vue reutilizables.
  - **views**: Vistas de la aplicación.
    - `HomePage.vue`: Página principal que muestra un mensaje introductorio.
	- `TemporadasPage.vue`: Muestra todas los temporadas del equipo.
	- `EntrenadoresPage.vue `: Muestra todos los entrenadores del equipo.
	- `JugadoresPage.vue`: Muestra todos los jugadores del equipo.
    - `PartidosPage.vue`: Muestra todos los partidos del equipo.
    - `TemporadaDetalle.vue`: Muestra detalles de una temporada específica.
	- `EntrenadorFicha.vue`: Muestra la información detallada de un entrenador.  
    - `JugadorFicha.vue`: Muestra la información detallada de un jugador.
	- `JugadorPartidosTemporada.vue`: Muestra estadísticas de un jugador en una temporada específica.
    - `PartidosFicha.vue `: Muestra todos los partidos de una temporada.
    - `PartidoDetalle.vue`: Muestra detalles de un partido específico.
  - **router**
    - `index.js`: Configuración de rutas de la aplicación.
  - **App.vue**: Componente raíz que incluye la estructura de navegación y el `router-view`.
  - **main.js**: Punto de entrada de la aplicación.

## **3. Configuración del Router**

El enrutador (`router/index.js`) define las rutas disponibles en la aplicación y sus componentes asociados.

### **3.1 Configuración de Rutas**

```javascript
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
```

### **3.1 Configuración de API backend**

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


// Config url base api for axios
axios.defaults.baseURL = 'http://localhost/futbol-back/public/api';

createApp(App).use(router).mount('#app');
```

### **4. Estructura de las Vistas**

A continuación se describe la estructura de las vistas principales en la aplicación:

#### **4.1 Vista TemporadasPage**

- **Descripción**: Muestra una lista de todas las temporadas disponibles. Cada entrada de la lista es un enlace a la vista de detalles de la temporada.
- **Enlaces**:
  - Cada temporada en la lista enlaza a una vista de detalles de la temporada, proporcionando información más específica sobre la temporada seleccionada.

#### **4.2 Vista TemporadaDetalle**

- **Descripción**: Proporciona detalles completos sobre una temporada específica, incluyendo estadísticas de jugadores y partidos.
- **Secciones**:
  - **Información General de la Temporada**: Muestra datos generales sobre la temporada, como la división y la posición.
  - **Porteros**: Tabla con estadísticas de los porteros durante la temporada.
  - **Defensores**: Tabla con estadísticas de los defensores durante la temporada.
  - **Centrocampistas**: Tabla con estadísticas de los centrocampistas durante la temporada.
  - **Atacantes**: Tabla con estadísticas de los atacantes durante la temporada.
  - **Entrenador**: Tabla con estadísticas del entrenador durante la temporada.
  - **Partidos**: Tabla con todos los partidos de la temporada. Cada partido es un enlace a los detalles del partido.

#### **4.3 Vista EntrenadoresPage**

- **Descripción**: Muestra una lista de todos los entrenadores disponibles. Cada entrenador tiene un enlace a su vista de detalles.
- **Enlaces**:
  - Cada entrenador en la lista enlaza a una vista de detalles del entrenador, proporcionando información más específica sobre el entrenador seleccionado.

#### **4.4 Vista EntrenadorFicha**

- **Descripción**: Proporciona detalles completos sobre un entrenador específico.
- **Secciones**:
  - **Información del Entrenador**: Muestra datos generales sobre el entrenador, como nombre, apodo, fecha de nacimiento, etc.
  - **Estadísticas por Temporada**: Muestra las estadísticas del entrenador en cada temporada.
  - **Estadísticas por Partido**: Muestra las estadísticas del entrenador en cada partido.

#### **4.5 Vista JugadoresPage**

- **Descripción**: Muestra una lista de todos los jugadores disponibles. Cada jugador tiene un enlace a su vista de detalles.
- **Enlaces**:
  - Cada jugador en la lista enlaza a una vista de detalles del jugador, proporcionando información más específica sobre el jugador seleccionado.

#### **4.6 Vista JugadorFicha**

- **Descripción**: Proporciona detalles completos sobre un jugador específico.
- **Secciones**:
  - **Información del Jugador**: Muestra datos generales sobre el jugador, como nombre, apodo, fecha de nacimiento, etc.
  - **Estadísticas por Temporada**: Muestra las estadísticas del jugador en cada temporada.
  - **Estadísticas por Partido**: Muestra las estadísticas del jugador en cada partido.
 
#### **4.7 Vista JugadorPartidosTemporada**

- **Descripción**: Proporciona detalles completos sobre los partidos de una temporada un jugador específico.
- **Secciones**:
  - **Información del Jugador**: Muestra datos generales sobre el jugador, como nombre, apodo, fecha de nacimiento, etc.
  - **Estadísticas por Partido**: Muestra las estadísticas del jugador en cada partido.

#### **4.8 Vista PartidosPage**

- **Descripción**: Muestra una lista de todos los partidos del equipo por temporadas.
- **Enlaces**:
  - Cada temporada en la lista enlaza a una vista de detalles de los partidos de la temporada, proporcionando información más específica sobre los resultados.

#### **4.9 Vista PartidosFicha**

- **Descripción**: Muestra una lista de todos los partidos de una temporada específica.
- **Enlaces**:
  - Cada partido en la lista enlaza a una vista de detalles del partido, proporcionando información más específica sobre el partido seleccionado.


#### **4.10 Vista PartidoDetalle**

- **Descripción**: Proporciona detalles completos sobre un partido específico.
- **Secciones**:
  - **Información del Partido**: Muestra datos generales sobre el partido, como resultado, jornada, rival, etc.
  - **Estadísticas de los Jugadores**: Muestra estadísticas individuales de los jugadores que participaron en el partido.


### **5. Estilos y Diseño**

Se utilizaron estilos de Bootstrap para darle una apariencia coherente y atractiva a la aplicación. Los estilos se aplican globalmente desde el archivo `app.vue` y se pueden personalizar según las necesidades de tu proyecto.

**Código en `app.vue`:**

```vue
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Fútbol App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/temporadas">Temporadas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/entrenadores">Entrenadores</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jugadores">Jugadores</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/partidos">Partidos</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Estilos globales de la aplicación */
#app {
  font-family: 'Arial', sans-serif;
}

.navbar {
  margin-bottom: 20px;
}

.container {
  padding: 20px;
}

.footer {
  text-align: center;
  margin-top: 20px;
}
</style>
```

