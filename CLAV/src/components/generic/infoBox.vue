<template>
  <v-dialog v-model="dialog" :width="widthDialog">
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" small :color="props.helpColor ? props.helpColor : 'info'">
        info_outline
      </v-icon>
    </template>

    <v-card :color="colorDialog">
      <v-card-title>
        <span class="title font-weight-light">{{ props.header }}</span>
      </v-card-title>

      <v-card-text>
        <div v-if="props.text" v-html="props.text" />
        <div v-else>Esta informação ainda não foi adicionada.</div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-4" props.text @click="dialog = false">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(["text", "header", "helpColor", "dialogColor", "helpWidth"])
 
var dialog = false
var colorHelp = ""
var colorDialog = ""
var widthDialog = ""

if (!props.helpColor) {
  colorHelp = "#78909C";
} else colorHelp = props.helpColor;

if (!props.dialogColor) {
  colorDialog = "#ECEFF1";
} else colorDialog = props.dialogColor;

if (!props.helpWidth) {
  widthDialog = "500";
} else widthDialog = props.helpWidth;

</script>
