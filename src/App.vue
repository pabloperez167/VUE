<!--<template>
  <div>
    <h1>Consumir API con Vue</h1>
    <api-component></api-component>
  </div>
</template>-->

<script>
import ApiComponent from './ApiComponent.vue';

export default {
  components: {
    ApiComponent, 
  },
};
</script>

<template>
      <div class="stars"></div>
      <div class="ship"><img src="src/assets/nave2.png" alt="Nave espacial" /></div> 
        <div class="container">
          <h1 style="color: gold;">Star Wars API </h1>
          <ApiComponent style="margin-left: 2%;"></ApiComponent>
        </div>
        
</template>


<style>

.api-container {
  margin-top: 20px;
  position: relative; /* Agrega esta línea para que el contenido sea posicionado de forma relativa */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Estilos originales */

.container {
  position: relative; /* Agrega esta línea para que el contenido sea posicionado de forma relativa */
  width: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Estilos para el fondo de estrellas */

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 370vh;
  z-index: 0; /* Cambia el valor a 0 para que el fondo de estrellas esté detrás del contenido */
  pointer-events: none;
  background: url('C:\Users\pplim\OneDrive\Escritorio\ApiRest_Laravel\vue-project\src\assets\space.jpg');
  animation: starsAnimation 100s linear infinite;
}

@keyframes starsAnimation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}

@keyframes shipAnimation {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(110vw); /* La nave estará completamente fuera de la pantalla a la derecha */
  }
}


.ship {
  position: absolute;
  top: -100px;
  transform: translateY(-50%);
  animation-name: shipAnimation;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}


</style>






