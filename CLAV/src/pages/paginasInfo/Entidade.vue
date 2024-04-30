<template>
    <v-card flat class="pa-3">
      <p class="clav-content-title-1">Entidades</p>
      <p class="clav-content-text px-8 py-2">
        Catálogo de entidades públicas que intervêm nos processos de negócio (classes de 3º
        nível da Lista Consolidada). Podem integrar uma ou mais tipologias de entidades.
      </p>
      <p class="clav-content-text px-8 py-2">
        Para aceder ao catálogo de entidades, selecione a opção <b>CONSULTAR</b>.
      </p>
      <p class="clav-content-text px-8 py-2">
        Para criar novas entidades, selecione a opção
        <b>CRIAR. Deve estar registado na CLAV para aceder a esta funcionalidade.</b>
      </p>
      <p class="clav-content-text px-8 py-2">
        Para alterar entidades, selecione a opção
        <b>ALTERAR. Deve estar registado na CLAV para aceder a esta funcionalidade.</b>
      </p>
      <v-container fluid style="text-align: center">
        <v-row justify="center" align="center">
          <v-col cols="12" md="4">
            <v-btn
              @click="router.push('/entidades/consultar')"
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
  