<template>
  <v-card flat class="pa-3">
    <Info />
    <Suspense><Noticias class="mt-10" :level="level" /></Suspense>
  </v-card>
</template>

<script setup>
/* eslint-disable */
import Noticias from "@/components/principal/Noticias.vue";
import Info from "@/components/principal/Info.vue";
import { ref } from 'vue';

const level = ref(7); // teste. deve ir buscar o nivel do utilizador
</script>

<style>
</style>
