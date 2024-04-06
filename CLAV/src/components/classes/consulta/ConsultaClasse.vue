<template>
    <v-card flat class="pa-3">
      <v-row>
        <!-- MENU LATERAL -->
        <v-col cols="12" order="2" sm="3" order-sm="0" md="3" lg="3">
          <ClassesArvore :classeId="props.idc" />
        </v-col>
        <v-col cols="12" sm="9" md="9" lg="9">          
          <v-row>           
              <Voltar class="voltar" />            
              <p class="clav-content-title-2 pa-5">
                {{ classe.codigo }}: {{ classe.titulo }}
              </p>           
          </v-row>

          <!-- DESCENDÊNCIA e Informação da classe -->
          <Loading v-if="!classeLoaded" :message="'classe'" />
          <v-card v-else flat class="info-content conteudo-classe">
            <div v-if="classe.filhos.length > 0" class="d-inline-flex">
              <v-card class="text-center text-blue-darken-4 clav-info-label" width="150" height="25" >Descendência</v-card>
              <v-card style="margin-left: 20px;" color="#f3f7fc" width="1000">
                <div style="margin: 20px;" v-for="(filho, index) in classe.filhos" :key="index">
                  <v-row style="margin-bottom: 10px;">
                    <a :href="'/classes/consultar/c' + filho.codigo">
                      <span class="text-blue">{{ filho.codigo }}</span>
                    </a>
                    <span>&nbsp- {{ filho.titulo }}</span>
                  </v-row>
                </div>
              </v-card>
            </div>
            <v-expansion-panels>
              <v-expansion-panel class="expandend-content">
                <v-expansion-panel-title color="#1A237E" class="separador"><v-icon style="margin-right: 10px;" icon="mdi-clipboard-text"/>Descritivo da Classe</v-expansion-panel-title>
                <v-expansion-panel-text>              
                    <div v-if="classe.status.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Estado</v-card>
                      <v-card :class="(classe.status=='Ativa' ? 'text-green' : 'text-red')" style="margin-left: 20px; margin-top: 10px;" width="935"><div style="margin: 20px;">{{ classe.status }}</div></v-card>
                    </div>
                    <div v-if="classe.descricao.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Descrição</v-card> 
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935"><div style="margin: 20px;">{{ classe.descricao }}</div></v-card>
                    </div>                  
                    <div v-if="classe.notasAp.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Notas de Aplicação</v-card>
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935">
                        <ul v-for="item in classe.notasAp">
                          <li style="margin: 20px;">{{ item.nota }}</li>
                        </ul>              
                      </v-card>
                    </div>
                    <div v-if="classe.exemplosNotasAp.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="50">Exemplo de Notas de Aplicação</v-card>
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935">
                        <ul v-for="item in classe.exemplosNotasAp">
                          <li style="margin: 20px;">{{ item.exemplo }}</li>
                        </ul>              
                      </v-card>
                    </div>
                    <div v-if="classe.notasEx.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Notas de Exclusão</v-card> 
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935">
                        <ul v-for="item in classe.notasEx" v-html="analisaRefs(item.nota)" style="margin: 20px;"></ul>
                      </v-card>
                    </div>
                    <div v-if="classe.termosInd.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Termos de Índice</v-card>
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935">
                        <ul v-for="item in classe.termosInd">
                          <li style="margin: 20px;">{{ item.termo }}</li>
                        </ul>              
                      </v-card>
                    </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel v-if="classe.tipoProc.length > 0" class="expandend-content">
                <v-expansion-panel-title color="#1A237E" class="separador"><v-icon style="margin-right: 10px;" icon="mdi-folder-text-outline"/>Contexto de Avaliação</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div v-if="classe.tipoProc.length > 0" class="d-inline-flex">
                    <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Tipo de Processo</v-card> 
                    <v-card style="margin-left: 20px; margin-top: 10px;" width="935"><div style="margin: 20px;">{{ classe.tipoProc }}</div></v-card>
                  </div>
                  <div v-if="classe.procTrans.length > 0" class="d-inline-flex">
                    <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="50">Processo Transversal</v-card> 
                    <v-card style="margin-left: 20px; margin-top: 10px;" width="935"><div style="margin: 20px;">{{ classe.procTrans }}</div></v-card>
                  </div>
                  <div v-if="classe.donos.length > 0" class="d-inline-flex">
                    <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Donos do processo</v-card>
                    <v-card style="margin-left: 20px; margin-top: 10px;" width="935">
                      <ul v-for="item in classe.donos">
                        <li style="margin: 20px;"><a :href="`${getOriginURL() + '/entidades/' + item.idDono}`">{{ item.sigla}}: {{ item.designacao }}</a></li>
                      </ul>              
                    </v-card>
                  </div>
                  <div v-if="classe.participantes.length > 0" class="d-inline-flex" style="margin-top: 20px;">       
                    <Participantes :entidades="classe.participantes" />
                  </div>
                  <div v-if="classe.processosRelacionados.length > 0" class="d-inline-flex" style="margin-top: 20px;">
                    <ProcessosRelacionados :processos="classe.processosRelacionados" />
                  </div>  
                  <div v-if="classe.legislacao.length > 0" class="d-inline-flex" style="margin-top: 20px;">
                    <Legislacao :legs="classe.legislacao" />
                  </div>  
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel v-if="classe.pca.valores.length > 0 || classe.df.valor.length > 0" class="expandend-content">
                <v-expansion-panel-title color="#1A237E" class="separador"><v-icon style="margin-right: 10px;" icon="mdi-message-processing-outline"/>Decisões de Avaliação</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div v-if="Object.keys(classe.pca).length > 0">
                    <span class="clav-content-title-2" style="margin: 30%;">Prazo de Conservação Administrativa</span>
                    <div v-if="classe.pca.valores.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Prazo</v-card> 
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935"><div style="margin: 20px;">{{ classe.pca.valores }}</div></v-card>
                    </div>
                    <div v-if="classe.pca.formaContagem.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="50">Forma de Contagem</v-card> 
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935"><div style="margin: 20px;">{{ classe.pca.formaContagem }}</div></v-card>
                    </div>
                    <div v-if="classe.pca.justificacao.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Justificação</v-card>
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935">
                        <ul v-for="item in classe.pca.justificacao">
                          <li style="margin: 20px;">Tipo: {{ item.tipoId }} | {{ item.conteudo }}</li>
                        </ul>              
                      </v-card>
                    </div>
                  </div>
                  <br>
                  <div v-if="Object.keys(classe.df).length > 0">
                    <span class="clav-content-title-2"  style="margin: 40%;">Destino final</span>
                    <div v-if="classe.df.valor.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Destino final</v-card> 
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935"><div style="margin: 20px;">{{ classe.df.valor }}</div></v-card>
                    </div>
                    <div v-if="classe.df.justificacao.length > 0" class="d-inline-flex">
                      <v-card style="margin-top: 20px;" class="text-center text-blue-darken-4 clav-info-label" width="150" height="25">Justificação</v-card>
                      <v-card style="margin-left: 20px; margin-top: 10px;" width="935">
                        <ul v-for="item in classe.df.justificacao">
                          <li style="margin: 20px;">Tipo: {{ item.tipoId }} | {{ item.conteudo }}
                            <div v-if="item.processos.length > 0">
                              <ul v-for="proc in item.processos">
                                <li style="margin: 20px;">{{ proc.procId }}</li>
                              </ul>
                            </div>
                          </li>
                        </ul>              
                      </v-card>
                    </div>
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
import ClassesArvore from "@/components/classes/ClassesArvore.vue";
import Voltar from "@/components/generic/Voltar.vue";
import Loading from "@/components/generic/Loading.vue";
import Participantes from "@/components/classes/consulta/Participantes.vue";
import ProcessosRelacionados from "@/components/classes/consulta/ProcessosRelacionados.vue";
import Legislacao from "@/components/classes/consulta/Legislacao.vue";
import { defineProps } from 'vue'
import { useAppStore } from "@/store/app"
import { host } from "@/config/global"

const store = useAppStore()
const props = defineProps(['idc'])
const codeFormats = {
      2: /[0-9]{3}\.[0-9]{2}(?!\.)/,
      3: /[0-9]{3}\.[0-9]{2}\.[0-9]{3}(?!\.)/,
    }

var classe = ref({})
var classeLoaded = false
const headersPartProc = [{title: "Tipo de intervenção", key: "Tipo de intervenção"}, {title: "Participantes", key: "Participantes"}]
var participantesProc = ref([])
var totalPartProc = 0
var loadingPartProc = true
var itemsPerPagePartProc = 10

try {
  await fetch(host + "/classes/c" + props.idc, { method: "GET", headers: { "Authorization": "token " + store.token } })
  .then(response => response.json())
  .then(data => classe.value = data);
  classeLoaded = true;
  if (classe.value.status == "A") classe.value.status = "Ativa";
  else classe.value.status = "Inativa";

} catch (e) {
  console.log(e);
}

function getOriginURL() {
  return window.location.origin
}

function analisaRefs(nota) {
  var notaHtml = nota.replace(
    this.codeFormats[3],
    '<a href="/classes/consultar/c$&">$&</a>'
  );
  notaHtml = notaHtml.replace(
    this.codeFormats[2],
    '<a href="/classes/consultar/c$&">$&</a>'
  );
  return notaHtml;
}

</script>

<style lang="scss">
.conteudo-classe {
  margin-top: 20px;
}

.voltar {
  margin-left: 30px;
  margin-top: 20px;
  margin-right: 30px;
}

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
