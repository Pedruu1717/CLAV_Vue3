<template>
  <v-card flat class="pa-3">
    <div>
    <p class="clav-content-title-1">Autenticação</p>
    <p class="clav-content-text px-8 py-2">
      De modo a aceder à plataforma CLAV, por favor escolha um dos seguintes métodos de autenticação:
    </p>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" justify="center" align="center">
        <v-btn
          @click="router.push('/users/login')"
          rounded
          class="text-white clav-linear-background"
          :class="{
            'px-8': display.lgAndUp,
            'px-2': display.mdAndDown
          }"
          >
          <span class="ml-2 btn-text"><v-icon icon="mdi-at btn-icon"/> Email Pessoal Institucional</span>
        </v-btn>
      </v-col>
    </v-row>
  </div>
  </v-card>
</template>

<script setup>
import router from '@/router'
import { useDisplay } from 'vuetify'

const display  = useDisplay();
</script>

<style scoped>
</style>
