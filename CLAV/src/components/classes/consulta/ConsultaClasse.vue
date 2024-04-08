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
          <Loading v-if="!classeLoaded" :message="'classe'" />          
          <!-- DESCENDÊNCIA -->
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
              <!-- DESCRITIVO DA CLASSE -->
              <v-expansion-panel class="expandend-content">
                <v-expansion-panel-title color="#1A237E" class="separador"><v-icon style="margin-right: 10px;" icon="mdi-clipboard-text"/>Descritivo da Classe</v-expansion-panel-title>
                <v-expansion-panel-text>              
                    <div v-if="classe.status.length > 0" class="d-inline-flex">                     
                      <Campo nome="Estado" infoHeader="Estado" color="neutralpurple">
                        <template v-slot:conteudo>                      
                          <div v-if="classe.status == 'A'" style="color: #46c354 !important;">
                            Ativa
                          </div>
                          <div
                            v-else-if="classe.status == 'H'"
                            style="color: #dfb83a !important;"
                          >
                            Em revisão...
                          </div>
                          <div v-else style="color: #f44336 !important;">
                            Inativa
                          </div>
                        </template>  
                      </Campo>                     
                    </div>
                    <div v-if="classe.descricao.length > 0" class="d-inline-flex">                      
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
                    </div>
                    <div v-if="classe.notasAp.length > 0" class="d-inline-flex">
                      <Campo                        
                        nome="Notas de Aplicação"
                        infoHeader="Notas de Aplicação"
                        :infoBody="myhelp.Classe.Campos.NotasAp"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>
                          <ul v-for="item in classe.notasAp">
                            <li style="margin-left: 20px;">{{ item.nota }}</li>
                          </ul>              
                        </template>
                      </Campo>
                    </div>
                    <div v-if="classe.exemplosNotasAp.length > 0" class="d-inline-flex">
                      <Campo                        
                        nome="Exemplos de Notas de Aplicação"
                        infoHeader="Exemplos de Notas de Aplicação"
                        :infoBody="myhelp.Classe.Campos.ExemplosNotasAp"
                        color="neutralpurple"
                        >
                        <template v-slot:conteudo>
                              <ul v-for="item in classe.exemplosNotasAp">
                                <li style="margin-left: 20px;">{{ item.exemplo }}</li>
                              </ul>              
                        </template>
                      </Campo>
                    </div>
                    <div v-if="classe.notasEx.length > 0" class="d-inline-flex">
                      <Campo                        
                        nome="Notas de Exclusão"
                        infoHeader="Notas de Exclusão"
                        :infoBody="myhelp.Classe.Campos.NotasEx"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>
                              <ul v-for="item in classe.notasEx" v-html="analisaRefs(item.nota)" style="margin: 20px;"></ul>
                        </template>
                      </Campo>
                    </div>
                    <div v-if="classe.termosInd.length > 0" class="d-inline-flex">
                      <Campo                        
                        nome="Termos de Índice"
                        infoHeader="Termos de Índice"
                        :infoBody="myhelp.Classe.Campos.TermosIndice"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>
                          <ul v-for="item in classe.termosInd">
                            <li style="margin: 20px;">{{ item.termo }}</li>
                          </ul>
                        </template>
                      </Campo>
                    </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <!-- CONTEXTO DE AVALIAÇÃO -->
              <v-expansion-panel v-if="classe.tipoProc.length > 0" class="expandend-content">
                <v-expansion-panel-title color="#1A237E" class="separador"><v-icon style="margin-right: 10px;" icon="mdi-folder-text-outline"/>Contexto de Avaliação</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div v-if="classe.tipoProc.length > 0" class="d-inline-flex">
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
                  </div>
                  <div v-if="classe.procTrans.length > 0" class="d-inline-flex">
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
                  </div>
                  <div v-if="classe.donos.length > 0" class="d-inline-flex">
                    <Campo                      
                      nome="Donos do processo"
                      infoHeader="Donos do processo"
                      :infoBody="myhelp.Classe.Campos.Donos"
                      color="neutralpurple"
                    >
                      <template v-slot:conteudo>
                        <ul v-for="item in classe.donos">
                          <li style="margin: 20px;"><a :href="`${getOriginURL() + '/entidades/' + item.idDono}`">{{ item.sigla}}: {{ item.designacao }}</a></li>
                        </ul>              
                      </template>
                    </Campo>
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
              <!-- DECISÕES DE AVALIAÇÃO -->
              <v-expansion-panel v-if="classe.pca.valores.length > 0 || classe.df.valor.length > 0" class="expandend-content">
                <v-expansion-panel-title color="#1A237E" class="separador"><v-icon style="margin-right: 10px;" icon="mdi-message-processing-outline"/>Decisões de Avaliação</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div v-if="Object.keys(classe.pca).length > 0">
                    <span class="clav-content-title-2" style="margin: 30%;">Prazo de Conservação Administrativa</span>
                    <div v-if="classe.pca.valores.length > 0" class="d-inline-flex">
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
                    </div>                    
                    <div v-if="classe.pca.notas != ''" class="d-inline-flex">
                      <!-- NOTAS -->
                      <Campo                        
                        nome="Notas"
                        infoHeader="Notas ao PCA"
                        :infoBody="myhelp.Classe.Campos.Notas"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>
                          {{ classe.pca.notas }}
                        </template>
                      </Campo>
                    </div>
                    <div v-if="classe.pca.formaContagem" class="d-inline-flex">
                      <!-- FORMA DE CONTAGEM -->
                      <Campo                        
                        nome="Forma de Contagem"
                        infoHeader="Forma de Contagem"
                        :infoBody="myhelp.Classe.Campos.FormaContagem"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>
                          {{ classe.pca.formaContagem }}
                        </template>
                      </Campo>
                    </div>
                    <div v-if="classe.pca.subFormaContagem" class="d-inline-flex">
                      <!-- SUBFORMA DE CONTAGEM -->
                      <Campo                        
                        nome="Subforma de Contagem"
                        infoHeader="Subforma de Contagem"
                        :infoBody="myhelp.Classe.Campos.SubformaContagem"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>
                          {{ classe.pca.subFormaContagem }}
                        </template>
                      </Campo>
                    </div>
                    <div v-if="classe.pca.justificacao" class="d-inline-flex">
                      <!-- JUSTIFICAÇÂO -->
                      <Campo                        
                        nome="Justificação"
                        infoHeader="Justificação"
                        :infoBody="myhelp.Classe.Campos.JustificacaoPCA"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>                        
                          <div v-for="c in classe.pca.justificacao" :key="c.tipoId" style="margin: 20px;">
                            <!-- Critério Gestionário ...............................-->
                            <v-row v-if="c.tipoId == 'CriterioJustificacaoGestionario'">
                              <v-col cols="3" class="pt-0">
                                <div class="sub-info-label">Critério Gestionário</div>
                              </v-col>
                              <v-col cols="9" class="pt-0">
                                <div>
                                  {{
                                    /* texto normalizado:
                                      mylabels.textoCriterioJustificacaoGestionario
                                      texto proveniente da FRD: */
                                    c.conteudo
                                  }}
                                </div>
                              </v-col>
                            </v-row>

                            <!-- Critério Utilidade Administrativa .................-->
                            <v-row v-if="c.tipoId == 'CriterioJustificacaoUtilidadeAdministrativa'">
                              <v-col cols="3" class="pt-0">
                                <div class="sub-info-label">
                                  Critério de Utilidade Administrativa
                                </div>
                              </v-col>
                              <v-col cols="9" class="pt-0">
                                <div>
                                  {{ c.conteudo }}
                                  <br />
                                  <br />
                                  <ul>
                                    <li v-for="p in c.processos" :key="p.procId">
                                      <a :href="'/classes/consultar/' + p.procId">
                                        {{ p.procId.split("c")[1] }} -
                                        {{ p.nome }}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </v-col>
                            </v-row>

                            <!-- Critério Legal ...................................-->
                            <v-row v-if="c.tipoId == 'CriterioJustificacaoLegal'">
                              <v-col cols="3" class="pt-0">
                                <div class="sub-info-label">Critério Legal</div>
                              </v-col>
                              <v-col cols="9" class="pt-0">
                                <div>
                                  {{ c.conteudo }}
                                  <br />
                                  <br />
                                  <ul>
                                    <li v-for="l in c.legislacao" :key="l.legId">
                                      <a :href="'/legislacao/' + l.legId">
                                        {{ l.tipo }} {{ l.numero }}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </v-col>
                            </v-row>
                          </div>                    
                        </template>
                      </Campo>
                    </div>
                  </div>
                  <br>
                  <!-- DESTINO FINAL ................................................... -->
                  <div v-if="Object.keys(classe.df).length > 0">
                    <span class="clav-content-title-2"  style="margin: 40%;">Destino final</span>
                    <div v-if="classe.df.valor.length > 0" class="d-inline-flex">
                      <!-- VALOR -->
                      <Campo
                        nome="Destino final"
                        infoHeader="Destino final"
                        :infoBody="myhelp.Classe.Campos.DF"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>
                              <div style="margin: 20px;">
                                <span v-if="classe.df.valor == 'E'">Eliminação</span>
                                <span v-else-if="classe.df.valor == 'C'"> Conservação </span>
                                <span v-else-if="classe.df.valor == 'CP'">
                                  Conservação Parcial
                                </span>
                                <span v-else-if="classe.df.nota != ''">Não Especificado</span>
                              </div>                        
                        </template>
                      </Campo>
                    </div>
                    <div v-if="classe.df.nota" class="d-inline-flex">
                      <!-- NOTA ao DF -->
                      <Campo                  
                        nome="Nota"
                        infoHeader="Nota ao DF"
                        :infoBody="myhelp.Classe.Campos.NotasDF"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>
                          {{ classe.df.nota }}
                        </template>
                      </Campo>
                    </div>
                    <div v-if="classe.df.justificacao" class="d-inline-flex">
                      <!-- JUSTIFICAÇÂO -->
                      <Campo
                        nome="Justificação"
                        infoHeader="Justificação do DF"
                        :infoBody="myhelp.Classe.Campos.JustificacaoDF"
                        color="neutralpurple"
                      >
                        <template v-slot:conteudo>
                          <div v-for="c in classe.df.justificacao" :key="c.tipoId" style="margin: 20px;">
                            <!-- Critério Legal ...................................-->
                            <v-row v-if="c.tipoId == 'CriterioJustificacaoLegal'">
                              <v-col cols="3" class="pt-0">
                                <div class="sub-info-label">Critério Legal</div>
                              </v-col>
                              <v-col cols="9" class="pt-0">
                                <div>
                                  {{ c.conteudo }}
                                  <br />
                                  <br />
                                  <ul>
                                    <li v-for="l in c.legislacao" :key="l.legId">
                                      <a :href="'/legislacao/' + l.legId">
                                        {{ l.tipo }} {{ l.numero }}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </v-col>
                            </v-row>

                            <!-- Critério de Densidade Informacional ..............-->
                            <v-row v-if="c.tipoId == 'CriterioJustificacaoDensidadeInfo'">
                              <v-col cols="3" class="pt-0">
                                <div class="sub-info-label">
                                  Critério de Densidade Informacional
                                </div>
                              </v-col>
                              <v-col cols="9" class="pt-0">
                                <div>
                                  {{
                                    /* texto normalizado:
                                      mylabels.textoCriterioDensidadeInfo
                                      texto proveniente da FRD: */
                                    c.conteudo
                                  }}
                                  <br />
                                  <br />
                                  <ul>
                                    <li v-for="p in c.processos" :key="p.procId">
                                      <a :href="'/classes/consultar/' + p.procId">
                                        {{ p.procId.split("c")[1] }} -
                                        {{ p.nome }}
                                      </a>
                                    </li>
                                  </ul>
                              </div>
                            </v-col>
                          </v-row>

                          <!-- Critério de Complementaridade Informacional ..............-->
                          <v-row
                            v-if="c.tipoId == 'CriterioJustificacaoComplementaridadeInfo'"
                          >
                            <v-col cols="3" class="pt-0">
                              <div class="sub-info-label">
                                Critério de Complementaridade Informacional
                              </div>
                            </v-col>
                            <v-col cols="9" class="pt-0">
                              <div>
                                {{
                                  /* texto normalizado:
                                    mylabels.textoCriterioComplementaridade
                                    texto proveniente da FRD: */
                                  c.conteudo
                                }}
                                <br />
                                <br />
                                <ul>
                                  <li v-for="p in c.processos" :key="p.procId">
                                    <a :href="'/classes/consultar/' + p.procId">
                                      {{ p.procId.split("c")[1] }} -
                                      {{ p.nome }}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </v-col>
                          </v-row>
                          </div>
                        </template>
                      </Campo>                      
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
import Campo from "@/components/generic/CampoCLAV.vue";
import Voltar from "@/components/generic/Voltar.vue";
import Loading from "@/components/generic/Loading.vue";
import Participantes from "@/components/classes/consulta/Participantes.vue";
import ProcessosRelacionados from "@/components/classes/consulta/ProcessosRelacionados.vue";
import Legislacao from "@/components/classes/consulta/Legislacao.vue";
import { defineProps } from 'vue'
import { useAppStore } from "@/store/app"
import { host } from "@/config/global"
import help from "@/config/help"

const store = useAppStore()
const props = defineProps(['idc'])
const codeFormats = {
      2: /[0-9]{3}\.[0-9]{2}(?!\.)/,
      3: /[0-9]{3}\.[0-9]{2}\.[0-9]{3}(?!\.)/,
    }

var classe = ref({})
var classeLoaded = false
var myhelp = help

try {
  await fetch(host + "/classes/c" + props.idc, { method: "GET", headers: { "Authorization": "token " + store.token } })
  .then(response => response.json())
  .then(data => classe.value = data);
  classeLoaded = true;

  if (classe.value.df.justificacao) {
    for (let i = 0; i < classe.value.df.justificacao.length; i++) {
      if (classe.value.df.justificacao[i].processos) {
        for (let j = 0; j < classe.value.df.justificacao[i].processos.length; j++) {
          let helpMeta =
            "/classes/" +
            classe.value.df.justificacao[i].processos[j].procId +
            "/meta";

          await fetch(host + helpMeta, { method: "GET", headers: { "Authorization": "token " + store.token } })
          .then(response => response.json())
          .then(data => classe.value.df.justificacao[i].processos[j].nome = data.titulo);
        }
      }
    }
  }

} catch (e) {
  console.log(e);
}

function getOriginURL() {
  return window.location.origin
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
