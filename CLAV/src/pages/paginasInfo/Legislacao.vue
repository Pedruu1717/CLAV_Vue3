<template>
    <v-card flat class="pa-3">
      <p class="clav-content-title-1">Legislação</p>
      <p class="clav-content-text px-8 py-2">
        Catálogo de legislação que regula os processos de negócio (classes de 3º nível da
        Lista Consolidada) e enquadra os respetivos prazos de conservação administrativa
        (PCA) e destino final (DF). Do catálogo constam ainda as fontes de legitimação, isto
        é, a portaria ou despacho que integra as tabelas de seleção, onde estão
        estabelecidas as decisões de avaliação que fundamentam a ação de eliminação.
      </p>
      <p class="clav-content-text px-8 py-2">
        Para aceder à legislação, selecione a opção <b>CONSULTAR</b>.
      </p>
      <p class="clav-content-text px-8 py-2">
        Para adicionar legislação, selecione a opção
        <b>ADICIONAR. Deve estar registado na CLAV para aceder a esta funcionalidade.</b>
      </p>
      <p class="clav-content-text px-8 py-2">
        Para editar legislação, selecione a opção
        <b>EDITAR. Deve estar registado na CLAV para aceder a esta funcionalidade.</b>
      </p>
      <v-container fluid style="text-align: center">
        <v-row justify="center" align="center">
          <v-col cols="12" md="4">
            <v-btn
              @click="router.push('/legislacao/consultar')"
              rounded
              class="text-white clav-linear-background"
              :class="{
                'px-8': display.lgAndUp,
                'px-2': display.mdAndDown
              }"
            >              
            <span class="ml-2 btn-text"><v-icon icon="mdi-magnify btn-icon"/>Consultar</span>
            </v-btn>
          </v-col>
         
        </v-row>
      </v-container>
 
    </v-card>
</template>
  
<script setup>
import router from '@/router'
import { useDisplay } from 'vuetify'

const display  = useDisplay();
</script>
  
<style scoped>
.info-card {
    background: linear-gradient(to right, #19237e 0%, #0056b6 100%);
    text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.22) !important;
}

.info-content {
    padding: 8px;
    background-color: #f1f6f8 !important;
    color: #606060;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.22) !important;
    border-radius: 10px;
}

.btn-text {
    padding-right: 10px;
    padding-left: 5px;
}

.btn-icon {
    margin-right: 5px;
}
</style>
  