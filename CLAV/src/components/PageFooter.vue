<template>
  <v-footer dark padless>
    <v-card flat style="width: 100%">
      <v-card-title id="footer-bar" class="hidden-sm-and-down px-2 py-2">
      <div class="display-flex">
        <p class="big-footer-letters">DGLAB - </p>
        <p class="regular-footer-letters pl-2">Direção Geral do Livro, dos Arquivos e das Bibliotecas</p>
        <v-spacer></v-spacer>
        <p class="body-2">Versão: {{ interfaceVersion }}</p>
        <v-spacer></v-spacer>
        <p v-if="ontoReady" class="body-2">Ontologia: {{ ontologia }}</p>
        <v-spacer></v-spacer>
        <v-icon class="icon" icon="mdi-email-outline"></v-icon>
        <p  class="icon-text">Contacte-nos</p>
        <v-spacer></v-spacer>
        <v-icon class="icon" icon="mdi-account-group-outline"></v-icon>
        <p class="icon-text">Equipa técnica</p>
        <v-spacer></v-spacer>
        <v-img id="footer-image" class="my-2" aspect-ratio="4.8600" :src="'https://qldclav.dglab.gov.pt/img/feder.52060cff.png'"></v-img>
      </div>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script setup>
import { interfaceVersion, host } from "@/config/global"
import { ref } from 'vue'
import { useAppStore } from "@/store/app"

const store = useAppStore()

var ontoReady = false
var ontologia = ref("")

try {
  fetch(host + "/ontologia/data", {method: "GET", headers:{"Authorization": "token " + store.token}})
  .then(response => response.json())
  .then(data => ontologia.value = data)
  ontoReady= true;
} catch (error) {
    console.log(error);
}
</script>

<style scoped>

.display-flex {
  display: flex
}

.icon {
  margin-right: 5px;
  color: white;
}

.v-btn:hover:before {
  opacity: 0;
}

.v-card__title {
  line-height: 0.5rem !important;
}

.v-application .body-2 {
  line-height: 0.5rem !important;
}

#footer-bar {
  background: linear-gradient(to right, #19237e 0%, #0056b6 100%);
  font-size: 1em;
}

.big-footer-letters {
  display: inline;
  font-weight: bold;
  font-size: 1.2em !important;
}

.regular-footer-letters {
  display: inline;
  font-weight: 300;
  vertical-align: text-bottom;
}

.v-btn {
  text-transform: none !important;
}

.v-application p {
  margin-bottom: 0 !important;
  color: #e5e5e5 !important;
}

.icon-text {
  margin-left: 0.625em;
  display: inline;
}

#contact-button {
  outline: none !important;
  text-decoration: none;
}

#footer-image {
  min-width: 90px;
  max-width: 120px;
}

</style>
