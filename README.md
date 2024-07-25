# Futbol-front

## Requirements

This app only work with the API: https://github.com/victorgarciasisi/futbol-back

## How to use

### Step 1: Config de url api:

File: src/main.js
```
axios.defaults.baseURL = 'http://localhost/futbol-back/public/api';
```

### Step 2: Compiles and minifies for production
```
npm run build
```

### Step 3: Deploy app

Upload /public folder in a web server (nginx, apache, etc)


## Aditional info

### Software used

- node 20.15.1
- npm 10.7.0
- vue 3.4.31

### Instalation project

npm install axios
npm install vue-router@next
npm install bootstrap

### Config router

File: src/router/index.js

### Create views

Files:
 - src/views/EntrenadoresPage.vue
 - src/views/EntrenadorFicha.vue
 - src/views/JugadoresPage.vue
 - src/views/JugadorFicha.vue
 - src/views/JugadorPartidosTemporada.vue';
 - src/views/PartidoDetalle.vue'; 
 - src/views/PartidosFicha.vue'; 
 - src/views/PartidosPage.vue
 - src/views/TemporadaDetalle.vue
 - src/views/TemporadasPage.vue
 - src/views/HomePage.vue



### Config app index

File: 
 - src/App.vue
 
### Config url api and import libs

File: src/main.js
```
axios.defaults.baseURL = 'http://localhost/futbol-back/public/api';
```

### Start app dev mode
```
npm run serve
```


## Readme vue app

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
