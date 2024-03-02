<template>
  <v-app v-if="!authenticated">
    <!-- Header -->
    <MainPageHeader
      :n="notificacoes.value ? notificacoes.value.length : 0"
      @drawerDefinicoes="drawerDefinicoes"
    />

    <!-- Drawers -->
    <!--<Definicoes v-if="store.token" :drawer="drawD" /> -->

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
/* eslint-disable */
//import Pedidos from "@/pages/pedidos/Pedidos.vue"
//import CriaClasse from "@/components/classes/criacao/CriaClasse.vue"
import PageFooter from "@/components/PageFooter.vue"; // @ is an alias to /src
import MainPageHeader from "@/components/MainPageHeader.vue"; // @ is an alias to /src
//import Definicoes from "@/components/principal/Definicoes.vue";
//import Notificacoes from "@/components/principal/Notificacoes.vue";
// import io from "socket.io-client";
import { bus } from "./main";
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
//import { verifyTokenUser } from '@/plugins/verifyToken'
import { useAppStore } from '@/store/app'
import { host } from '@/config/global'
//const lhost = require("@/config/global").host;

const store = useAppStore()
const lhost = host;
const route = useRoute()
const router = useRouter()

/*watch(route, async(from, to) => {
  //verifica se o utilizador está autenticado
  if (store.token != "") {
    var user = verifyTokenUser();
    level.value = user.level.value;
  }

  authenticated.valueOf = false;
  //verifica se o utilizador tem de estar autenticado para aceder à rota
  if (to.matched.some((record) => !record.meta.levels.includes(0))) {
    if (store.token != "" && level.value > 0) {
      //se está autenticado, verifica se tem permissões suficientes para a ceder a página
      if (to.matched.some((record) => record.meta.levels.includes(level.value))) {
        authenticated.valueOf = true;
      } else {
        text = "Não tem permissões para aceder a esta página!";
        color.value = "error";
        snackbar.valueOf = true;
        router.push("/");
      }
    } else {
      text.value =
        "Não tem permissões para aceder a esta página! Por favor faça login.";
        color.value = "error";
      snackbar.valueOf = true;
      router.push("/users/autenticacao");
    }
  } else {
    authenticated.valueOf = true;
  }

  if (route.query.erro) {
    //msg de erro
    text.value = route.query.erro;
    color.value = "error";
    snackbar.valueOf = true;
    router.push(route.path);
  } else if (route.query.sucesso) {
    //msg de sucesso
    text.value = route.query.sucesso;
    color.value = "success";
    snackbar.valueOf = true;
    router.push(route.path);
  }
})*/

function fecharSnackbar() {
  snackbar.valueOf = false;
}

function sizeUpdate(size) {
  size.value = size;
}

function drawerDefinicoes() {
  //drawN.valueOf = false;
  drawD.valueOf = !(drawD.valueOf);
}

// function drawerNotificacoes() {
//   drawD.valueOf = false;
//   drawN.valueOf = !(drawN.valueOf);
// },
// removerNotificacao(msg) {
//   const index = notificacoes.value.indexOf(msg);
//   if (index > -1) {
//     notificacoes.value.splice(index, 1);
//   }
//   socket.emit("remove", msg);
// },
// consume() {
//   notificacoes.value = [];
//   var email = $verifyTokenUser().email;
//   if (email) {
//     socket = io.connect("http://localhost:7779", {
//       reconnectionAttempts: 1,
//     }); //lhost.replace('/v2', '')
//     socket.emit("email", {
//       email: email,
//     });
//     socket.on($verifyTokenUser().email, (data) => {
//       notificacoes.value.push(JSON.parse(data));
//     });
//   }
// },

const drawD = ref(false)
//const drawN = ref(false)
const snackbar = ref(false)
const authenticated = ref(false)
const notificacoes = ref([])
const color = ref("")
var text = ref("")
const classeOps = ref(["Listar", "Consultar", "Inserir", "Alterar", "Desativar"])
const entidadeOps = ref(["Listar", "Consultar", "Inserir", "Alterar", "Desativar"])
const tipologiaOps = ref(["Listar", "Consultar", "Inserir", "Alterar", "Desativar"])
const legislacaoOps = ref(["Listar", "Consultar", "Inserir", "Alterar", "Desativar"])
const level = ref(7)

// onCreated(() => {
//   if (store.token != "") consume();
//   bus.$on("notificacoes.value", (d) => {
//     consume();
//   });
// })

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
