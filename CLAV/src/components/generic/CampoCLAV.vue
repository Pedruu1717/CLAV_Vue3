<template>
  <v-row>
    <v-col cols="12" sm="4" md="3">
      <v-card class="pa-4 mb-2" :color="color">
        <v-row class="pa-0 ma-0" justify="center">
          <span class="clav-info-label">{{ nome }}</span>
          <InfoBox :header="infoHeader" :text="infoBody" />
        </v-row>
      </v-card>
      <slot name="lateral"></slot>
    </v-col>
    <v-col cols="12" sm="8" md="9">
      <v-card color="secondary" class="pa-4">
        <slot name="conteudo"></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import InfoBox from "@/components/generic/infoBox.vue";
import { defineProps } from 'vue'

const props = defineProps(["color", "nome", "infoHeader", "infoBody"])
</script>

<style>
</style>
