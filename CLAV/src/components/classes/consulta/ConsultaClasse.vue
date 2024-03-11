<template>
    <v-card flat class="pa-3">
      <v-row>
        <v-col cols="12" sm="9" md="9" lg="9">
          <!-- HEADER -->
          <v-row align="center">
            <v-col cols="12" md="3" align="center">
              
            </v-col>
            <v-col cols="12" md="9">
              <p class="clav-content-title-2 pa-5">
                {{ classe.codigo }}: {{ classe.titulo }}
              </p>
            </v-col>
          </v-row>
  
          <!-- DESCENDÊNCIA -->
          <Loading v-if="!classeLoaded" :message="'classe'" />
          <v-card v-else flat>
            <!--<ClassesFilho :subclasses="classe.filhos" v-if="classe.filhos.length > 0" />-->
  
            <v-expansion-panels flat>
              <!-- DESCRITIVO DA CLASSE -->
              <PainelCLAV
                titulo="Descritivo da Classe"
                infoHeader="Descritivo da Classe"
                :infoBody="myhelp.Classe.BlocoDescritivo"
              >
                <!--<template v-slot:icon>
                  <unicon
                    name="descricao-icon"
                    width="22"
                    height="22"
                    viewBox="0 0 20.71 23.668"
                    fill="#ffffff"
                  />
                </template> -->
  
                <template v-slot:conteudo>
                  <Campo nome="Estado" infoHeader="Estado" color="neutralpurple">
                    <template v-slot:conteudo>
                      <div v-if="classe.status == 'A'" style="color: #46c354 !important">
                        Ativa
                      </div>
                      <div
                        v-else-if="classe.status == 'H'"
                        style="color: #dfb83a !important"
                      >
                        Em revisão...
                      </div>
                      <div v-else style="color: #f44336 !important">Inativa</div>
                    </template>
                  </Campo>
  
                  <Campo
                    nome="Descrição"
                    infoHeader="Descrição"
                    :infoBody="myhelp.Classe.Campos.Descricao"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      {{ classe.descricao }}
                    </template>
                  </Campo>
  
                  <Campo
                    v-if="(classe.notasAp != [])"
                    nome="Notas de Aplicação"
                    infoHeader="Notas de Aplicação"
                    :infoBody="myhelp.Classe.Campos.NotasAp"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      <ul>
                        <li v-for="n in classe.notasAp" :key="n.idNota">
                          {{ n.nota }}
                        </li>
                      </ul>
                    </template>
                  </Campo>
  
                  <Campo
                    v-if="(classe.exemplosNotasAp != [])"
                    nome="Exemplos de Notas de Aplicação"
                    infoHeader="Exemplos de Notas de Aplicação"
                    :infoBody="myhelp.Classe.Campos.ExemplosNotasAp"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      <ul>
                        <li v-for="n in classe.exemplosNotasAp" :key="n.idNota">
                          {{ n.exemplo }}
                        </li>
                      </ul>
                    </template>
                  </Campo>
  
                  <Campo
                    v-if="(classe.notasEx != [])"
                    nome="Notas de Exclusão"
                    infoHeader="Notas de Exclusão"
                    :infoBody="myhelp.Classe.Campos.NotasEx"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      <ul>
                        <li
                          v-for="n in classe.notasEx"
                          :key="n.idNota"
                          v-html="analisaRefs(n.nota)"
                        />
                      </ul>
                    </template>
                  </Campo>
  
                  <Campo
                    v-if="(classe.termosInd != [])"
                    nome="Termos de Índice"
                    infoHeader="Termos de Índice"
                    :infoBody="myhelp.Classe.Campos.TermosIndice"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      <ul>
                        <li v-for="t in classe.termosInd" :key="t.idTI">{{ t.termo }}</li>
                      </ul>
                    </template>
                  </Campo>
                </template>
              </PainelCLAV>
  
              <PainelCLAV
                v-if="classe.nivel == 3"
                titulo="Contexto de Avaliação"
                infoHeader="Contexto de Avaliação"
                :infoBody="myhelp.Classe.BlocoContexto"
              >
                <!--<template v-slot:icon>
                  <unicon
                    name="folder-icon"
                    width="22"
                    height="22"
                    viewBox="0 0 20.71 23.668"
                    fill="#ffffff"
                  />
                </template>-->
                <template v-slot:conteudo>
                  <!-- TIPO DE PROCESSO -->
                  <Campo
                    nome="Tipo de Processo"
                    infoHeader="Tipo de Processo"
                    :infoBody="myhelp.Classe.Campos.TipoProcesso"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      {{ classe.tipoProc }}
                    </template>
                  </Campo>
  
                  <!-- TRANSVERSALIDADE -->
                  <Campo
                    nome="Processo Transversal"
                    infoHeader="Processo Transversal"
                    :infoBody="myhelp.Classe.Campos.ProcessoTransversal"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      {{ classe.procTrans == "S" ? "Sim" : "Não" }}
                    </template>
                  </Campo>
  
                  <Campo
                    v-if="classe.donos.length > 0"
                    nome="Donos do processo"
                    infoHeader="Donos do processo"
                    :infoBody="myhelp.Classe.Campos.Donos"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      <ul>
                        <li v-for="p in classe.donos" :key="p.idDono">
                          <a v-if="p.idTipo == 'Entidade'" :href="'/entidades/' + p.idDono">
                            {{ p.sigla }}:
                            {{ p.designacao }}
                            ({{ p.tipo.split("#")[1] }})
                          </a>
                          <a v-else :href="'/tipologias/' + p.idDono">
                            {{ p.sigla }}:
                            {{ p.designacao }}
                            ({{ p.tipo.split("#")[1] }})
                          </a>
                        </li>
                      </ul>
                    </template>
                  </Campo>
  
                  <!-- <Campo
                    nome="Participantes no processo"
                    infoHeader="Participantes no processo"
                    :infoBody="myhelp.Classe.Campos.Participantes"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      <v-data-table
                        :headers="headersParticipantes"
                        :items="myParticipantes"
                        hide-default-footer
                      >
                        <template v-slot:item="props">
                          <tr>
                            <td>{{ props.item.label }}</td>
                            <td>
                              <ul>
                                <li v-for="p in props.item.participantes" :key="p.label">
                                  <a
                                    v-if="p.idTipo == 'Entidade'"
                                    :href="'/entidades/' + p.idParticipante"
                                  >
                                    {{ p.sigla }}
                                    ({{ p.idTipo }}) - {{ p.designacao }}
                                  </a>
                                  <a v-else :href="'/tipologias/' + p.idParticipante">
                                    {{ p.sigla }}
                                    ({{ p.idTipo }}) - {{ p.designacao }}
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </template>
                      </v-data-table>
                    </template>
                  </Campo> -->
  
                
  
                  
                </template>
              </PainelCLAV>
  
              <!-- CONTEXTO DA CLASSE -->
              <PainelCLAV
                v-if="(classe.nivel == 3 && classe.filhos.length == 0) || classe.nivel == 4"
                titulo="Decisões de Avaliação"
                infoHeader="Decisões de Avaliação"
                :infoBody="myhelp.Classe.BlocoContexto"
              >
                <!--<template v-slot:icon>
                  <unicon
                    name="decisao-icon"
                    width="22"
                    height="22"
                    viewBox="0 0 20.71 23.668"
                    fill="#ffffff"
                  />
                </template>-->
                <template v-slot:conteudo>
                  <v-row justify="center">
                    <span class="clav-content-title-2">
                      Prazo de Conservação Administrativa
                    </span>
                  </v-row>
  
                  <!-- PRAZO -->
                  <Campo
                    nome="Prazo"
                    infoHeader="Prazo"
                    :infoBody="myhelp.Classe.Campos.Prazo"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      <div v-if="classe.pca.valores > 1">
                        {{ classe.pca.valores + " anos" }}
                      </div>
                      <div v-else-if="classe.pca.valores == 1">
                        {{ classe.pca.valores + " ano" }}
                      </div>
                      <div v-else-if="classe.pca.notas != ''">Não especificado</div>
                    </template>
                  </Campo>
  
                  <!-- NOTAS -->
                  <Campo
                    v-if="classe.pca.notas != ''"
                    nome="Notas"
                    infoHeader="Notas ao PCA"
                    :infoBody="myhelp.Classe.Campos.Notas"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      {{ classe.pca.notas }}
                    </template>
                  </Campo>
  
                  <!-- FORMA DE CONTAGEM -->
                  <Campo
                    v-if="classe.pca.formaContagem"
                    nome="Forma de Contagem"
                    infoHeader="Forma de Contagem"
                    :infoBody="myhelp.Classe.Campos.FormaContagem"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      {{ classe.pca.formaContagem }}
                    </template>
                  </Campo>
  
                  <!-- SUBFORMA DE CONTAGEM -->
                  <Campo
                    v-if="classe.pca.subFormaContagem"
                    nome="Subforma de Contagem"
                    infoHeader="Subforma de Contagem"
                    :infoBody="myhelp.Classe.Campos.SubformaContagem"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      {{ classe.pca.subFormaContagem }}
                    </template>
                  </Campo>
  
                 
  
                  <!-- DESTINO FINAL ................................................... -->
                  <v-row justify="center">
                    <span class="clav-content-title-2 mt-5">Destino final</span>
                  </v-row>
                  <!-- VALOR -->
                  <Campo
                    nome="Destino final"
                    infoHeader="Destino final"
                    :infoBody="myhelp.Classe.Campos.DF"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      <div>
                        <span v-if="classe.df.valor == 'E'">Eliminação</span>
                        <span v-else-if="classe.df.valor == 'C'"> Conservação </span>
                        <span v-else-if="classe.df.valor == 'CP'">
                          Conservação Parcial
                        </span>
                        <span v-else-if="classe.df.nota != ''">Não Especificado</span>
                      </div>
                    </template>
                  </Campo>
  
                  <!-- NOTA ao DF -->
                  <Campo
                    v-if="classe.df.nota"
                    nome="Nota"
                    infoHeader="Nota ao DF"
                    :infoBody="myhelp.Classe.Campos.NotasDF"
                    color="neutralpurple"
                  >
                    <template v-slot:conteudo>
                      {{ classe.df.nota }}
                    </template>
                  </Campo>
  
                 
                </template>
              </PainelCLAV>
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
import { defineProps } from 'vue'
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
  fetch(host + "/classes/c" + props.idc, {method: "GET", headers:{"Authorization": "token " + store.token}})
  .then(response => response.json())
  .then(data => classe.value = data)
  classeLoaded = true;
} catch (e) {
  console.log(e)
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
