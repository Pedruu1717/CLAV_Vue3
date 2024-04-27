<template>
    <v-card flat class="pa-3 conteudo">
        <v-row class="titulo" align="center" justify="center">
            <v-col cols="12" md="3" align="center"> <Voltar /> </v-col>
            <v-col cols="12" md="5" align="center">
            <p class="clav-content-title-1 ">Consultar Tabelas de Seleção</p>
            </v-col>
            <v-col cols="12" md="4" align="center">
            </v-col>
        </v-row>        
        <v-expansion-panels>
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
   margin-bottom: 10px;
 }
 
 .conteudo {
   margin-top: -30px;
 }
</style>
 