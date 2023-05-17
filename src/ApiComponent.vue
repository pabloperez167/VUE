<!--Con este código, al ejecutar tu aplicación Vue y hacer clic en el botón "Cargar datos",
     se realizará la solicitud a tu API y los datos obtenidos se mostrarán en forma de lista en la interfaz de usuario.-->

     <!--si item.piloto tiene un valor distinto de null (es decir, un piloto válido), 
        el color del texto será blanco ('white'), de lo contrario, si item.piloto es null, el color del texto será naranja ('orange').-->
<template>
    <div>
      <button @click="fetchData">Cargar datos</button>
      <ul>
        <li v-for="item in items" :key="item.id">
             {{ item.name }} - <span :style="{ color: item.piloto ? 'white' : 'orange' }">
            {{ item.piloto || 'null' }}</span>
            <button class="delete-button" @click="deletePiloto(item)">Eliminar Piloto</button>
        </li>   
      </ul>
    </div>
  </template>

<style>
.delete-button {
  float: right
}
</style>
  

  <!--Cuando la respuesta de la API se recibe correctamente, se llama al método json() en el objeto response 
    para obtener los datos en formato JSON. Luego, los datos obtenidos se asignan a la propiedad items del componente Vue, 
    lo que actualiza la lista en la plantilla y muestra los datos en la interfaz de usuario.-->
  <script>
  export default {
    data() {
      return {
        items: [],
      };
    },
    methods: {
      fetchData() {
        fetch('http://127.0.0.1:8000/api/Starship')
          .then(response => response.json())
          
          .then(data => {
            this.items = data;
          })
      
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
          
      },
      deletePiloto(item) {
      // Realizar la lógica para eliminar el piloto
      // Por ejemplo, puedes realizar una solicitud a la API para eliminar el piloto

      // Una vez eliminado el piloto, actualiza la lista de items
      this.items = this.items.filter(i => i.id !== item.id);
    },
    },
  };
  </script>

  
  