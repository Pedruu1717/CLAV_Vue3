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
import { ref } from 'vue'

const level = ref(7)
</script>

<style lang="scss">
@import "@/assets/scss/global";
</style>
