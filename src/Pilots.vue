<template>
    <div>
    <h2 style="color: gold;">Listado de Pilotos</h2>
    <button class="btn btn-primary" @click="fetchPilots">Cargar Pilotos</button>
    <ul>
      <li style="color: aqua;" v-for="pilot in pilots" :key="pilot.id">
        {{ pilot.name }}
      </li>
    </ul>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pilots: [], // Aquí almacenaremos los pilotos de la base de datos
      };
    },
    methods: {
        fetchPilots() {
      fetch('http://127.0.0.1:8000/api/pilots')
        .then(response => response.json())

        .then(data => {
          this.pilots = data;
        })

        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });

    },

    }
   
  };
  </script>
  
  <style scoped>
  h2 {
    color: blue;
  }
  </style>
  