<template>
  <v-dialog :v-model="ativo">
    <v-card dark class="info-card">
      <v-card-title>Selecione a {{ tipo }} a alterar</v-card-title>
      <div class="info-content">
        <v-tooltip top color="info" open-delay="500">
          <template v-slot:activator="{ on }">
            <v-autocomplete
              v-model="dadosEditar"
              :items="items"
              :label="tipo"
              light
              clearable
              v-on="on"
            />
          </template>
          <span v-if="dadosEditar">{{ dadosEditar }}</span>
          <span v-else>Selecionar {{ tipo }}</span>
        </v-tooltip>
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="success darken-1"
          rounded
          dark
          elevation="0"
          class="px-4"
          @click="editar(tipo)"
        >
          Alterar
        </v-btn>
        <v-btn
          color="error darken-4"
          rounded
          dark
          elevation="0"
          class="px-4"
          @click="
            dadosEditar = null;
            fechar();
          "
          >Fechar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { host } from "@/config/global"
import { useAppStore } from "@/store/app"
//import request from '@/plugins/request'

const store = useAppStore()
const router = useRouter()

const props = defineProps(["ativo", "tipo"])
const dadosEditar = ref(null)
const ativar = ref(false)
const items = ref([])
const ready = ref(false)
const legislacao = ref({
  legislacao: [],
  legislacaoItems: [],
})

function editar(caso) {
  switch (caso) {
    case "Tipologia":
      router.push(`/tipologias/editar/tip_${dadosEditar.value.split(" ")[0]}`);
      break;
    case "Entidade":
      router.push(`/entidades/editar/ent_${dadosEditar.value.split(" ")[0]}`);
      break;
    case "Legislação":
      let leg = null;
      leg = legislacao.value.legislacao.find(
        (legislacao) => legislacao.numero === dadosEditar.value.split(" ")[0]
      );
      router.push(`/legislacao/editar/${leg.id}`);
      break;
    default:
      break;
  }
  fechar();
}

// para os dialogs
function preparaEntidades(dados) {
  let dadosTratados = dados.filter((dado) => dado.estado === "Ativa");
  dadosTratados = dadosTratados.map((dado) => `${dado.sigla} - ${dado.designacao}`);
  items.value = dadosTratados;
  ready.value.valueOf = true;
}

function preparaTipEntidades(dados) {
  let dadosTratados = dados.filter((dado) => dado.estado === "Ativa");
  dadosTratados = dadosTratados.map((dado) => `${dado.sigla} - ${dado.designacao}`);
  items.value = dadosTratados;
  ready.value.valueOf = true;
}

function preparaLegislacoes(legislacoes) {
  legislacao.value.legislacao = JSON.parse(JSON.stringify(legislacoes));
  let dadosTratados = legislacoes.filter((leg) => leg.estado === "Ativo");

  dadosTratados = dadosTratados.map(
    (legislacao) =>
      `${legislacao.numero} - ${legislacao.sumario} - ${legislacao.tipo}`
  );

  legislacao.value.legislacaoItems = dadosTratados;
  items.value = dadosTratados;
  ready.value.valueOf = true;
}

function fechar() {
  $emit("fechar");
}

//created: async function () {
switch (tipo) {
    case "Tipologia":
      fetch(host + "/tipologias", {method: "GET", headers:{"Authorization": "token " + store.token}})
      .then(response => preparaTipEntidades(response.data))
      //let responseTipologias = request("get", "/tipologias");
     // preparaTipEntidades(responseTipologias.data);
      break;
    case "Entidade":
      fetch(host + "/entidades?processos=sem", {method: "GET", headers:{"Authorization": "token " + store.token}})
      .then(response => preparaEntidades(response.data))
      //let responseEntidades = request("get", "/entidades?processos=sem");
      //preparaEntidades(responseEntidades.data);
      break;
    case "Legislação":
      fetch(host + "/legislacao", {method: "GET", headers:{"Authorization": "token " + store.token}})
      .then(response => preparaLegislacoes(response.data))
      //let responseLegislacoes = request("get", "/legislacao");
      //preparaLegislacoes(responseLegislacoes.data);
      break;
    default:
      break;
}
//}
</script>

<style scoped>
.info-card {
  background: linear-gradient(to right, #19237e 0%, #0056b6 100%);
  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.22) !important;
}

.info-content {
  padding: 8px;
  margin: 15px;
  background-color: #f1f6f8 !important;
  color: #606060;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.22) !important;
  border-radius: 10px;
}
</style>
