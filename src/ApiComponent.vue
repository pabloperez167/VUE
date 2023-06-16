
<!--Con este código, al ejecutar tu aplicación Vue y hacer clic en el botón "Cargar datos",
     se realizará la solicitud a tu API y los datos obtenidos se mostrarán en forma de lista en la interfaz de usuario.-->
      
        <template>
          <div>
            <button class="btn btn-primary" @click="fetchData">Cargar datos</button>
            <ul class="listado">
              <li class='seccion' v-for="item in items" :key="item.id">
              {{ item.name }} - <span :style="{ color: 'green' }">
              {{ item.pilotos }}</span> - Coste: {{ item.coste != 0 ? convertToBase15(item.coste) : 0 }}
                <div>
                  <button class="btn btn-secondary" @click="addPilot(item.id, selectedPilot)">Agregar Piloto</button>
                  <button class="btn btn-danger" @click="deletePiloto(item.id, selectedPilot)">Eliminar Piloto</button>                  
                </div>
                <select v-model="selectedPilot">
                    <option v-for="pilot in pilots" :key="pilot.id" :value="pilot.id">{{ pilot.name }}</option>
                </select>
                <div class="pilotos">
                  <img v-for="pilot in item.pilotos" :key="pilot.id" :src="'data:image/jpeg;base64,' + pilot.foto" alt="Foto del piloto" />
                </div>
              </li>
            </ul>
          </div>
        </template> 
  

  <!--Cuando la respuesta de la API se recibe correctamente, se llama al método json() en el objeto response 
    para obtener los datos en formato JSON. Luego, los datos obtenidos se asignan a la propiedad items del componente Vue, 
    lo que actualiza la lista en la plantilla y muestra los datos en la interfaz de usuario.-->
<script>
import '@/assets/estilos.css';
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
    method: 'PUT',
  })
  
  .then(response => response.json())
  .then(data => {
    console.log(data.message); // Mensaje de respuesta del servidor
     // Actualiza la pagina con el piloto agregado
     this.fetchData();
     
  })
  .catch(error => {
    console.error('Error al agregar el piloto:', error);
  });
    },


    deletePiloto(starshipId, pilotId) {
      fetch(`http://127.0.0.1:8000/api/deletePilot/${starshipId}/${pilotId}`, {
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

    //la función convertToBase15 toma el precio de la nave como entrada
    // y realiza la conversión a base 15 utilizando un bucle while. Luego la llamamos en la parte de arriba con el item.coste

    convertToBase15(price) {
  const symbols = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ß', 'Þ', '¢', 'μ', '¶'
  ];

  let base15 = '';

  while (price > 0) {
    const remainder = price % 15;
    base15 = symbols[remainder] + base15;
    price = Math.floor(price / 15);
  }

  return base15;
  }
  },

};

</script>

<style>
.listado{
  margin-top: 5%;
}

.seccion{
  margin-top: 5%;
  color: gold;
}


</style>