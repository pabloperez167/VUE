<!--Con este código, al ejecutar tu aplicación Vue y hacer clic en el botón "Cargar datos",
     se realizará la solicitud a tu API y los datos obtenidos se mostrarán en forma de lista en la interfaz de usuario.-->

     <!--si item.piloto tiene un valor distinto de null (es decir, un piloto válido), 
        el color del texto será blanco ('white'), de lo contrario, si item.piloto es null, el color del texto será naranja ('orange').-->
        <template>
          <div>
            <button @click="fetchData">Cargar datos</button>
            <ul>
              <li v-for="item in items" :key="item.id">
                {{ item.name }} - <span :style="{ color: item.piloto ? 'green' : 'orange' }">
                  {{ item.piloto || 'null' }}</span>
                <div>
                  <select  v-model="selectedPilot">
                    <option v-for="pilot in pilots" :key="pilot.id" :value="pilot.id">{{ pilot.name }}</option>
                  </select>
                  <button @click="addPilot(item.id, selectedPilot)">Agregar Piloto</button>
                  <button @click="deletePiloto(item.id)">Eliminar Piloto</button>
                </div>
              </li>
            </ul>
          </div>
        </template>
        

<style>
.delete-button{
  float: right;
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
      pilots: [],
      selectedPilot: "",
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
      this.fetchPilots();
    },
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
    addPilot(starshipId, pilotId) {
      fetch(`http://127.0.0.1:8000/api/addPilot/${starshipId}/${pilotId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message); // Mensaje de respuesta del servidor
    // Aquí puedes actualizar la lista de naves espaciales o realizar otras acciones necesarias
  })
  .catch(error => {
    console.error('Error al agregar el piloto:', error);
  });
    },

    deletePiloto(starshipId) {
      fetch(`http://127.0.0.1:8000/api/deletePilot/${starshipId}`, {
        method: 'PUT'
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          // Actualizar la lista de items después de eliminar el piloto
          this.fetchData();
        })
        .catch(error => {
          console.error('Error al eliminar el piloto:', error);
        });
    },
  },
};

/*export default {
  
  data() {
    return {
      items: [],
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

    fetchPilot() {
      fetch('http://127.0.0.1:8000/api/pilots')
        .then(response => response.json())

        .then(data => {
          this.pilots = data;
        })

        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });

    },

    computed: {
    filteredPilots() {
      return this.pilots.filter(item => item.id);
    },
  },

    deletePiloto(starshipId) {
      fetch(`http://127.0.0.1:8000/api/deletePilot/${starshipId}`, {
        method: 'PUT'
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          // Actualizar la lista de items después de eliminar el piloto
          this.fetchData();
        })
        .catch(error => {
          console.error('Error al eliminar el piloto:', error);
        });
    },

    addPilot(starshipId, pilotId) {
  fetch(`http://127.0.0.1:8000/api/addPilot/${starshipId}/${pilotId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message); // Mensaje de respuesta del servidor
    // Aquí puedes actualizar la lista de naves espaciales o realizar otras acciones necesarias
  })
  .catch(error => {
    console.error('Error al agregar el piloto:', error);
  });
},



  },*/

</script>

  
  