<template>
  <v-row style="margin: 10px;">
    <v-col cols="12" sm="4" md="3">
      <v-card :color=color width="235">
        <v-row class="pa-0 ma-0" justify="center">
          <span class="clav-info-label">{{ nome }}</span>
          <InfoBox :header="infoHeader" :text="infoBody" />
        </v-row>
      </v-card>
      <slot name="lateral"></slot>
    </v-col>
    <v-col cols="12" sm="8" md="9">
      <v-card color="secondary" width="900">
        <div style="margin: 10px;">
          <slot name="conteudo"></slot>
      </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import InfoBox from "@/components/generic/InfoBox.vue";
import { defineProps } from 'vue'

const props = defineProps(["color", "nome", "infoHeader", "infoBody"])
</script>

<style scoped>
</style>
