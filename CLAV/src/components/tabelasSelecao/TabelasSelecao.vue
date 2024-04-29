<template>
    <v-card flat class="pa-3 conteudo" style="margin-top: 10px;">
        <v-row align="center" justify="center">
            <v-col cols="12" md="3" align="center"> <Voltar /> </v-col>
            <v-col cols="12" md="5" align="center">
            <p class="clav-content-title-1 titulo">Consultar Tabelas de Seleção</p>
            </v-col>
            <v-col cols="12" md="4" align="center">
            </v-col>
        </v-row>        
        <v-row style="margin-top: 70px;">
            <v-col cols="12" md="3" align="center"></v-col>
            <v-col cols="12" md="3" align="center"> <v-btn @click="expandAll" width=200 rounded class="text-white px-2 clav-linear-background" prepend-icon="mdi-arrow-expand" :text="'EXPANDIR TUDO'" /> </v-col>
            <v-col cols="12" md="3" align="center"> <v-btn @click="closeAll" width=200 rounded class="text-white px-2 clav-linear-background" prepend-icon="mdi-arrow-collapse" :text="'FECHAR TUDO'" /> </v-col>
        </v-row>        
        <v-expansion-panels style="margin-top: 50px;" v-model="tabsSel">
            <!-- Tabelas de Seleção inseridas na Clav -->  
            <PainelCLAV
                titulo="Tabelas de Seleção inseridas na Clav"
                icon="mdi-notebook"
                infoHeader="Tabelas de Seleção criadas na Clav"
                :infoBody="myhelp.TS.Consulta.TS_LC"                
                >
                
                <template v-slot:conteudo>
                    <Listagem
                    :lista="fontesTS"
                    tipo="tabelasSelecao"
                    :entidades="entidades"
                    />
                </template>
            </PainelCLAV>

            <!-- Tabelas de Seleção (derivadas da LC) inseridas em portaria de gestão de documentos -->
            <PainelCLAV
                titulo="Tabelas de Seleção (derivadas da LC) inseridas em portaria de gestão de documentos"
                icon="mdi-notebook"
                infoHeader="Tabelas de Seleção (derivadas da LC) inseridas em portaria de gestão de documentos"
                :infoBody="myhelp.TS.Consulta.PGD_LC"                
                >
                
                <template v-slot:conteudo>
                    <Listagem
                    :lista="fontesTS"
                    tipo="pgd/lc"
                    :entidades="entidades"
                    />
                </template>
            </PainelCLAV>

            <!-- Tabelas de Seleção (NÃO derivadas da LC) inseridas em portaria de gestão de documentos -->
            <PainelCLAV
                titulo="Tabelas de Seleção (não derivadas da LC) inseridas em portaria de gestão de documentos"
                icon="mdi-notebook"
                infoHeader="Tabelas de Seleção (não derivadas da LC) inseridas em portaria de gestão de documentos"
                :infoBody="myhelp.TS.Consulta.PGD"                
                >
                
                <template v-slot:conteudo>
                    <Listagem
                    :lista="fontesTS"
                    tipo="pgd"
                    :entidades="entidades"
                    />
                </template>
            </PainelCLAV>
        </v-expansion-panels>        
    </v-card>
</template>
 
<script setup>
import Listagem from "../generic/Listagem.vue";
import Voltar from "@/components/generic/Voltar";
import PainelCLAV from "@/components/generic/PainelCLAV";
import help from "@/config/help"

var fontesTS = ref([])
var entidades = ref([])
// Array para poder expandir/fechar todos os panels
var tabsSel = ref([])
var tabsSelItems = ref(3)
var myhelp = help

// Abrir todos os v-expansion-panel
function expandAll() {
    tabsSel.value = [...Array(tabsSelItems.value).keys()].map((k, i) => i);
}

// Fechar todos os v-expansion-panel
function closeAll() {
    tabsSel.value = [];
}

</script>

<style scoped>
.separador {
  color: white;
  padding: 5px;
  margin: 5px;
  font-weight: 400;
  width: 100%;
  min-height: 50px;
  background: linear-gradient(to right, #19237e 0%, #0056b6 100%) !important;
  font-size: 14pt;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
}
#expanded-content {
  margin-right: 12px !important;
  margin-left: 17px !important;
  margin-top: -1.1rem;
  border: 1px solid #dee2f8;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.12);
}

.titulo {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
}
 
 .conteudo {
   margin-top: -30px;
 }
</style>
 