import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue'
import App from './App.vue'

// Importa la fuente de Star Wars Font
import StarWarsFont from './assets/soloist/soloist.ttf';

// Crea un estilo dinámico para cargar la fuente
const starWarsFontStyle = document.createElement('style');
starWarsFontStyle.innerHTML = `
  @font-face {
    font-family: 'Star Wars Font';
    src: url('${StarWarsFont}') format('truetype');
  }
`;

// Agrega el estilo de la fuente al elemento <head> del documento
document.head.appendChild(starWarsFontStyle);



createApp(App).mount('#app')
