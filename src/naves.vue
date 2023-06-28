<template>
    <div>
    <h2 style="color: gold;">Listado de Naves</h2>
    <button class="btn btn-primary" @click="fetchData">Cargar Naves</button>
    <ul>
      <li style="color: aqua;" v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [], // Aquí almacenaremos los pilotos de la base de datos
      };
    },
    methods: {
        fetchData() {
      fetch('http://127.0.0.1:8000/api/starship')
        .then(response => response.json())

        .then(data => {
          this.items = data;
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