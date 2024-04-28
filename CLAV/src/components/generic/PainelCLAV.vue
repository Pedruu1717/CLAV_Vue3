<template>
  <v-expansion-panel>
    <v-expansion-panel-title color="#1A237E" class="separador"><v-icon style="margin-left: 50px;" :icon=icon />{{ titulo }}<InfoBox :header="infoHeader" :text="infoBody" /></v-expansion-panel-title>
    <v-expansion-panel-text>
      <slot name="conteudo"></slot>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
import { defineProps } from 'vue'
import InfoBox from "@/components/generic/InfoBox.vue";

const props = defineProps(["titulo", "icon", "infoHeader", "infoBody"])
</script>

<style scoped>
.separador {
  display: grid;
  grid-template-columns: 0.17fr 1fr 0.3fr 0.3fr;
  grid-template-rows: 1fr;
  grid-template-areas: "icon titulo . btns";
  color: white;
  align-items: center;
  padding: 5px;
  font-weight: 400;
  min-height: 50px;
  background: linear-gradient(to right, #19237e 0%, #0056b6 100%) !important;
  font-size: 14pt;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
}
</style>
