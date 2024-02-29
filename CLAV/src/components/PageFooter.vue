<template>
  <v-footer dark padless>
    <v-card flat style="width: 100%">
      <v-card-title id="footer-bar" class="hidden-sm-and-down px-2 py-2">
        <p class="big-footer-letters">DGLAB -</p>
        <p class="regular-footer-letters pl-2">
          Direção Geral do Livro, dos Arquivos e das Bibliotecas
        </p>
        <v-spacer></v-spacer>
        <p class="body-2">Versão: {{ interfaceVersion }}</p>

        <v-spacer></v-spacer>

        <p v-if="ontoReady" class="body-2">Ontologia: {{ ontologia.value }}</p>

        <v-spacer></v-spacer>
        <v-btn text rounded href="mailto:clav@dglab.gov.pt" id="contact-button">
          <unicon
            name="contacto-icon"
            width="24"
            height="24"
            viewBox="0 0 25.71 19.282"
            fill="#e5e5e5"
          />
          <p class="icon-text">Contacte-nos</p>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text rounded @click="router.push('/colaboracoes')" id="contact-button">
          <unicon
            name="equipa-icon"
            width="24"
            height="24"
            viewBox="0 0 20.71 20.73"
            fill="#e5e5e5"
          />

          <p class="icon-text">Equipa técnica</p>
        </v-btn>

        <v-spacer></v-spacer>
        <v-img
          id="footer-image"
          class="my-2"
          :src="'./../assets/feder.png'"
          aspect-ratio="4.8600"
        />
      </v-card-title>
      <!--Mobile Footer-->
      <v-card-title id="footer-bar" class="hidden-md-and-up px-4 py-3">
        <p class="big-footer-letters mt-3">DGLAB-</p>
        <p class="regular-footer-letters mt-3">
          Direção Geral do Livro, dos Arquivos e das Bibliotecas
        </p>
        <v-spacer></v-spacer>
        <p class="body-2 mt-3">Versão: {{}}</p>

        <v-spacer></v-spacer>

        <p v-if="ontoReady" class="body-2 mt-3">Ontologia: {{ ontologia.value }}</p>

        <v-spacer></v-spacer>
        <v-btn
          text
          rounded
          href="mailto:clav@dglab.gov.pt"
          id="contact-button"
          class="mt-3 pa-0"
        >
          <unicon
            name="contacto-icon"
            width="24"
            height="24"
            viewBox="0 0 25.71 19.282"
            fill="#e5e5e5"
          />
          <p class="icon-text">Contacte-nos</p>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          text
          rounded
          @click="router.push('/colaboracoesInfo')"
          id="contact-button"
          class="mt-3 pa-0"
        >
          <unicon
            name="equipa-icon"
            width="24"
            height="24"
            viewBox="0 0 20.71 20.73"
            fill="#e5e5e5"
          />
          <p class="icon-text">Equipa técnica</p>
        </v-btn>
        <v-spacer></v-spacer>
        <v-img
          id="footer-image"
          class="mt-3"
          :src="'./../assets/feder.png'"
          aspect-ratio="4.8600"
        />
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script setup>
import { interfaceVersion, host } from "@/config/global"
//const interfaceVersion = require("@/config/global").interfaceVersion;
import { mdiAccountGroupOutline } from "@mdi/js"
import router from '@/router'
//import request from '@/plugins/request'
import { ref } from 'vue'
import { useAppStore } from "@/store/app"

const store = useAppStore()

const ontoReady = ref(false)
const ontologia = ref("")
//const interfaceVersion = ref(_interfaceVersion)

//created: async function () {
try {
  fetch(host + "/ontologia/data", {method: "GET", headers:{"Authorization": "token " + store.token}})
  .then(response => ontologia.value = response.data)
  ontoReady.valueOf = true;
  //let response = await request("get", "/ontologia/data");
  //ontologia.value = response.data; 
} catch (error) {
    console.log(error);
}
//}

</script>

<style scoped>
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
