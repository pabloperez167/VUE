

<script>
import ApiComponent from './ApiComponent.vue';
import Pilots from './Pilots.vue';
import Naves from './naves.vue';

export default {
  components: {
    ApiComponent,
    Pilots,
    Naves
  },
};
</script>

<template>
  <div>
    <div class="stars"></div>
    <div class="ship"><img src="src/assets/nave2.png" alt="Nave espacial" /></div>
    <div class="container">
      <h1 style="color: gold;">Star Wars api </h1>
      <ApiComponent style="margin-left: 2%; margin-top: 2%;"></ApiComponent>
    </div>
    <div class="containerPilotos">
      <Pilots></Pilots>
    </div>
    <div class="containerPilotos">
      <Naves></Naves>
    </div>
  </div>
</template>



<style>
.container {
  position: relative;
  /* Agrega esta línea para que el contenido sea posicionado de forma relativa */
  width: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
    transform: translateY(110vw);
    /* La nave estará completamente fuera de la pantalla a la derecha */
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

.containerPilotos{
  position: relative;
  /* Agrega esta línea para que el contenido sea posicionado de forma relativa */
  width: 167%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 100px;

}
</style>






