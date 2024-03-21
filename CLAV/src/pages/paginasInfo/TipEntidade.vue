<template>
    <v-card flat class="pa-3">
      <p class="clav-content-title-1">Tipologias de Entidade</p>
      <p class="clav-content-text px-8 py-2">
        Catálogo de tipologias de entidade, ou seja, agrupamentos de entidades,que intervêm
        nosprocessos de negócio (classes de 3º nível da Lista Consolidada). Podem integrar
        uma ou mais tipologias de entidades.
      </p>
      <p class="clav-content-text px-8 py-2">
        Para aceder ao catálogo de tipologias de entidades, selecione a opção
        <b>CONSULTAR</b>.
      </p>
      <p class="clav-content-text px-8 py-2">
        Para adicionar tipologias de entidades, selecione a opção
        <b>ADICIONAR. Deve estar registado na CLAV para aceder a esta funcionalidade.</b>
      </p>
      <p class="clav-content-text px-8 py-2">
        Para editar tipologias de entidades, selecione a opção
        <b>EDITAR. Deve estar registado na CLAV para aceder a esta funcionalidade.</b>
      </p>
      
        <v-row justify="center" align="center">
          <v-col cols="12" md="4" justify="center" align="center">
            <v-btn
              @click="router.push('/tipologias/consultar')"
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
          <!--<v-col
            v-if="
              [1, 3, 3.5, 4, 5, 6, 7].includes(this.$userLevel()) &&
              this.$store.state.token != '' &&
              this.$store.state.name != ''
            "
            cols="12"
            md="4"
            justify="center" align="center"
          >
            <v-btn
              @click="$router.push('/tipologias/criar')"
              rounded
              class="white--text clav-linear-background"
              :class="{
                'px-8': $vuetify.breakpoint.lgAndUp,
                'px-2': $vuetify.breakpoint.mdAndDown,
              }"
            >
              <unicon
                name="criar-icon"
                width="20"
                height="20"
                viewBox="0 0 20.71 20.721"
                fill="#ffffff"
              />
              <p class="ml-2">Criar</p>
            </v-btn>
          </v-col>
          <v-col
            v-if="
              [4, 5, 6, 7].includes(this.$userLevel()) &&
              this.$store.state.token != '' &&
              this.$store.state.name != ''
            "
            cols="12"
            md="4"
            justify="center" align="center"
          >
            <v-btn
              @click="tipologiasDialog = true"
              rounded
              class="text-white clav-linear-background"
              :class="{
                'px-8': display.lgAndUp,
                'px-2': display.mdAndDown
              }"
            >             
              <span class="ml-2 btn-text"><v-icon icon="mdi-magnify btn-icon"/>Consultar</span>
            </v-btn>
          </v-col>-->
        </v-row>
      
     <!--<CaixaDeDialogo
        :ativo="tipologiasDialog"
        :items="tipologias.tipologias"
        tipo="Tipologia"
        @fechar="tipologiasDialog = !tipologiasDialog"
      />-->
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
  