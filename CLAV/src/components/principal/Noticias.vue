<template>
  <Loading v-if="!noticiasReady" :message="'notícias'" />
  <div v-else class="mx-7">
    <span class="separador">
        <v-icon icon="mdi-newspaper"></v-icon>        
        <p class="big-footer-letters">Notícias</p>
        <v-spacer></v-spacer>
        <v-btn class="btns" rounded="xl">VER TODAS</v-btn>
    </span>
    <div class="homepage-carousel">
      <v-carousel  
      @mouseover.native="hover = false"
      @mouseleave.native="hover = true"
      :cycle="hover"
      progress
      progress-color="secondary"
      height="300"
      hide-delimiter-background
      show-arrows-on-hover>
        <v-carousel-item v-for="(n, index) in noticias" :key="index">
          <v-sheet class="conteudo clav-info-content" height="100%" tile>
            <span class="titulopainel">{{ n.titulo }}</span>
            <data class="data">{{ n.data }}</data>
            <div class="info">
              <p>{{ n.desc }}"</p>
              <v-btn
                class="btns"
                fab
                dark
                color="primary"
                style="position: sticky; left: 100%; bottom: 3%"
                @click="$router.push('/noticias/' + n._id)"
              >
              <v-icon> mdi-plus </v-icon>
              </v-btn>
            </div>       
          </v-sheet>        
        </v-carousel-item>  
      </v-carousel>
    </div>
  </div>
</template>

<script setup>
//import { marked } from "marked";
import Loading from "@/components/generic/Loading.vue";
import router from '@/router'
import { computed, defineProps, ref } from 'vue'
import { host } from "@/config/global"
import { useAppStore } from "@/store/app"
//import request from '@/plugins/request'

const store = useAppStore()

const props = defineProps(["level"])

var hover = true
var noticias = ref([])
var noticiasReady = false
var publicPath = ref(process.env.BASE_URL)
var operacoes = ref([
  {
    label: "Ver Todas",
    url: "/noticias",
    level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
  },
  {
    label: "Adicionar",
    url: "/noticias/criar",
    level: [3.5, 4, 5, 6, 7],
  },
])

function go(url) {
    if (url.startsWith("http")) {
      window.location.href = url;
    } else {
      router.push(url);
    }
}
function filtraOps(operacoes) {
  var filtered = [];
  for (var i = 0; i < operacoes.length; i++) {
    var levelsSet = new Set();
    operacoes[i].level.forEach((l) => levelsSet.add(l));
    var levels = Array.from(levelsSet);
    if (levels.includes(this.level)) {
      filtered.push({
        label: operacoes[i].label,
        url: operacoes[i].url,
        level: operacoes[i].level,
      });
    }
  }
  return filtered;
}

const fops = computed(() => {
  return filtraOps(operacoes);
})


try {
  fetch(host + "/noticias?recentes=sim", {method: "GET", headers:{"Authorization": "token " + store.token}})
  .then(response => response.json())
  .then(data => noticias.value = data)
  noticiasReady = true;
} catch (e) {
  console.log(e);
}

</script>

<style scoped>
.separador {
  display: grid;
  grid-template-columns: 0.05fr 0.15fr 0.5fr 0.3fr;
  grid-template-rows: 1fr;
  grid-template-areas: "icon titulo . btns";
  color: white;
  align-items: center;
  padding: 5px;
  font-weight: 400;
  min-height: 50px;
  background: linear-gradient(to right, #19237e 0%, #0056b6 100%) !important;
  font-size: 14pt;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
}
.icon {
  grid-area: icon;
  color: white;
}
.titulo {
  grid-area: titulo;
}

.btns {
  grid-area: btns;
  justify-self: right;
}
.panelbtn {
  color: rgb(18, 18, 172);
  margin: 0px 5px;
}

.conteudo {
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  grid-template-rows: 0.05fr 0.95fr;
  grid-template-areas:
    "titulopainel data"
    "info info";
}

.titulopainel {
  color: black;
  grid-area: titulopainel;
  padding: 1%;
  align-self: center;
  justify-self: left;
  font-weight: bold;
}
.data {
  align-self: center;
  justify-self: right;
  color: black;
  grid-area: data;
}
.info {
  border-top: 1px solid black !important;
  padding: 0% 5%;
  background-color: white !important;
  color: black;
  overflow: auto;
  grid-area: info;
}
</style>
