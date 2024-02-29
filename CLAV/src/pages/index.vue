<template>
  <v-card flat class="pa-3">
    <Info />
    <Noticias class="mt-10" :level="level" />
  </v-card>
</template>

<script setup>
/* eslint-disable */
import Noticias from "@/components/principal/Noticias.vue";
import Info from "@/components/principal/Info.vue";
//import userLevel from "@/plugins/userLevel";
import { onMounted, ref } from 'vue'

const panelHeaderColor = ref("indigo darken-4")
const level = ref(0)
const entidade = ref("Nome da Entidade")
  
onMounted (async () => {
  //level.value = userLevel();
})
</script>
