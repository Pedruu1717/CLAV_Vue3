<template>
  <v-app v-if="!authenticated">
    <!-- Header -->
    <MainPageHeader
      :n="notificacoes.value ? notificacoes.value.length : 0"
      @drawerDefinicoes="drawerDefinicoes"
    />

    <!-- Main content -->
    <v-main>
      <v-row justify="center" class="my-5">
        <v-col cols="12" sm="12" md="11">
          <router-view />
        </v-col>
      </v-row>
    </v-main>

    <!-- Footer -->
    <PageFooter />

    <!-- Utils -->
    <v-snackbar v-model="snackbar" :color="color" :top="true" :timeout="4000">
      {{ text.value }}
      <v-btn text @click="fecharSnackbar">Fechar</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script setup>
//import Pedidos from "@/pages/pedidos/Pedidos.vue"
//import CriaClasse from "@/components/classes/criacao/CriaClasse.vue"
import PageFooter from "@/components/PageFooter.vue"; 
import MainPageHeader from "@/components/MainPageHeader.vue"; 
//import Definicoes from "@/components/principal/Definicoes.vue";
//import Notificacoes from "@/components/principal/Notificacoes.vue";
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import { host } from '@/config/global'

const store = useAppStore()
const lhost = host;
const route = useRoute()
const router = useRouter()

var drawD = false
var snackbar = false
var authenticated = false
var notificacoes = []
var color = ""
var text = ref("")
var classeOps = ["Listar", "Consultar", "Inserir", "Alterar", "Desativar"]
var entidadeOps = ["Listar", "Consultar", "Inserir", "Alterar", "Desativar"]
var tipologiaOps = ["Listar", "Consultar", "Inserir", "Alterar", "Desativar"]
var legislacaoOps = ["Listar", "Consultar", "Inserir", "Alterar", "Desativar"]
var level = 7

function fecharSnackbar() {
  snackbar = false;
}

function sizeUpdate(size) {
  size = size;
}

function drawerDefinicoes() {
  //drawN = false;
  drawD = !drawD;
}

/*watch(route, async(from, to) => {
  //verifica se o utilizador está autenticado
  if (store.token != "") {
    var user = verifyTokenUser();
    level = user.level;
  }

  authenticated = false;
  //verifica se o utilizador tem de estar autenticado para aceder à rota
  if (to.matched.some((record) => !record.meta.levels.includes(0))) {
    if (store.token != "" && level > 0) {
      //se está autenticado, verifica se tem permissões suficientes para a ceder a página
      if (to.matched.some((record) => record.meta.levels.includes(level))) {
        authenticated = true;
      } else {
        text = "Não tem permissões para aceder a esta página!";
        color = "error";
        snackbar = true;
        router.push("/");
      }
    } else {
      text =
        "Não tem permissões para aceder a esta página! Por favor faça login.";
        color = "error";
      snackbar = true;
      router.push("/users/autenticacao");
    }
  } else {
    authenticated = true;
  }

  if (route.query.erro) {
    //msg de erro
    text = route.query.erro;
    color = "error";
    snackbar = true;
    router.push(route.path);
  } else if (route.query.sucesso) {
    //msg de sucesso
    text = route.query.sucesso;
    color = "success";
    snackbar = true;
    router.push(route.path);
  }
})*/

</script>

<style>
/* TODO /* TODO /* TODO /* TODO
/* TODO Para remover depois de remover todas as utilizações */

.v-text-field--filled > .v-input__control > .v-input__slot {
  background: none !important;
}
.v-input--selection-controls {
  margin-top: 0 !important;
  padding-top: 0 !important;
}
.v-input--switch--inset .v-input--switch__track,
.v-input--switch--inset .v-input--selection-controls__input {
  margin: auto !important;
}
.v-input input,
.v-input textarea,
.v-select .v-select__selection--comma {
  color: #000000 !important;
  font-weight: bold !important;
  text-shadow: 0px 1px 2px var(--v-textshadow-base) !important;
}
.v-input--is-disabled input,
.v-input--is-disabled textarea {
  color: var(--v-textshadow-base) !important;
}
</style>
