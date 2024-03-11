<template>
    <v-card flat class="pa-3">
      <v-row>
        <v-col cols="12" sm="9" md="9" lg="9">
          <!-- HEADER -->
          <v-row>
            <v-col cols="12" md="9">
              <p class="clav-content-title-2 pa-5">
                {{ classe.codigo }}: {{ classe.titulo }}
              </p>
            </v-col>
          </v-row>
  
          <!-- DESCENDÊNCIA e Informação da classe -->
          <Loading v-if="!classeLoaded" :message="'classe'" />
          <v-card v-else flat>
            <div v-if="classe.filhos.length > 0" class="d-inline-flex">
              <v-card color="#f3f7fc" width="150" height="25" class="card">Descendência</v-card>
              <v-card color="#f3f7fc" width="1000">
                <div v-for="(filho, index) in classe.filhos" :key="index">
                  <v-row>{{ filho.codigo }} - {{ filho.titulo }}</v-row>
                </div>
              </v-card>
            </div>
            <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title color="#1A237E">Descritivo da Classe</v-expansion-panel-title>
              <v-expansion-panel-text>              
                  <div v-if="classe.status.length > 0" class="d-inline-flex">
                    <v-card color="#f3f7fc" width="150" height="25" class="card">Estado</v-card>
                    <v-card color="#f3f7fc" width="1000">{{ classe.status }}</v-card>
                  </div>
                  <v-spacer></v-spacer>
                  <div v-if="classe.descricao.length > 0" class="d-inline-flex">
                    <v-card color="#f3f7fc" width="150" height="25" class="card">Descrição</v-card> 
                    <v-card color="#f3f7fc" width="1000">{{ classe.descricao }}</v-card>
                  </div>
                  <v-spacer></v-spacer>
                  <div v-if="classe.notasEx.length > 0" class="d-inline-flex">
                    <v-card color="#f3f7fc" width="150" height="25" class="card">Notas de Exclusão</v-card> 
                    <v-card color="#f3f7fc" width="1000">
                    <ul v-for="item in classe.notasEx">
                      <li>{{ item.nota }}</li>
                    </ul>
                    </v-card>
                  </div>
                  <v-spacer></v-spacer>
                  <div v-if="classe.notasAp.length > 0" class="d-inline-flex">
                    <v-card color="#f3f7fc" width="150" height="25" class="card">Notas de Aplicação</v-card>
                    <v-card color="#f3f7fc" width="1000">
                      <ul v-for="item in classe.notasAp">
                        <li>{{ item.nota }}</li>
                      </ul>              
                    </v-card>
                  </div>               
              </v-expansion-panel-text>
            </v-expansion-panel>
            </v-expansion-panels> 
          </v-card>
        </v-col>
      </v-row>
    </v-card>
</template>
  
<script setup>
//import ClassesFilho from "@/components/classes/consulta/ClassesFilho.vue";
//import Participantes from "@/components/classes/consulta/Participantes.vue";
//import ProcessosRelacionados from "@/components/classes/consulta/ProcessosRelacionados.vue";
//import Legislacao from "@/components/classes/consulta/Legislacao.vue";
//import ClassesArvoreLateral from "@/components/classes/ClassesArvoreLateral.vue";
//import Voltar from "@/components/generic/Voltar.vue";
import Loading from "@/components/generic/Loading.vue";
import PainelCLAV from "@/components/generic/PainelCLAV"
import Campo from "@/components/generic/CampoCLAV"
import { defineProps, onMounted } from 'vue'
import myhelp from "@/config/help"
import { criterios as mylabels } from "@/config/labels"
import { useAppStore } from "@/store/app"
import router from "@/router"
import { host } from "@/config/global"

const store = useAppStore()
const props = defineProps(['idc'])

var classe = ref({})
var classeLoaded = false
var codeFormats = {
  2: /[0-9]{3}\.[0-9]{2}(?!\.)/,
  3: /[0-9]{3}\.[0-9]{2}\.[0-9]{3}(?!\.)/,
}

var filhosHeaders = [
  {
    text: "Código",
    align: "left",
    sortable: false,
    value: "codigo",
  },
  {
    text: "Título",
    value: "titulo",
  },
]
  
function go(idClasse) {
  router.push("/classes/consultar/c" + idClasse);
}

function analisaRefs(nota) {
  var notaHtml = nota.replace(
    codeFormats[3],
    '<a href="/classes/consultar/c$&">$&</a>'
  );
  notaHtml = notaHtml.replace(
    codeFormats[2],
    '<a href="/classes/consultar/c$&">$&</a>'
  );
  return notaHtml;
}

try {
  await fetch(host + "/classes/c" + props.idc, { method: "GET", headers: { "Authorization": "token " + store.token } })
  .then(response => response.json())
  .then(data => classe.value = data);
  classeLoaded = true;
} catch (e) {
  console.log(e);
}
</script>

<style scoped>
.info-label {
  color: var(--v-primary-base) !important;
  padding: 8px;
  width: 100%;
  background-color: #dee2f8;
  font-weight: bold;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12) !important;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.22) !important;
  border-radius: 6px;
  text-align: center;
}

.sub-info-label {
  color: #1976d2;
  font-weight: bold;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.22) !important;
}

.info-content {
  padding: 5px;
  width: 100%;
  background-color: #f1f6f8 !important;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.22) !important;
  border-radius: 10px;
}

#expanded-content {
  margin-right: 12px !important;
  margin-left: 17px !important;
  margin-top: -1.1rem;
  border: 1px solid #dee2f8;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.12);
}
</style>
