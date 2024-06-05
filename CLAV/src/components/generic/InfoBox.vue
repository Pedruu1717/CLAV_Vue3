<template> 
  <v-icon icon="mdi-information-outline" size="xs" @click="dialog = true" :color="props.helpColor ? props.helpColor : 'info'" style="margin-top: 5px; margin-left: 2px;" />  
  <v-dialog v-model="dialog" :width="widthDialog">
    <v-card :color="colorDialog">
      <v-card-title>
        <span class="title font-weight-light">{{ props.header }}</span>
      </v-card-title>

      <v-card-text>
        <div v-if="props.text" v-html="props.text" />
        <div v-else>Esta informação ainda não foi adicionada.</div>
      </v-card-text>

      <v-divider></v-divider>

      <template v-slot:actions>
        <v-btn
          class="ms-auto text-red"
          text="Fechar"
          @click="dialog = false"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(["text", "header", "helpColor", "dialogColor", "helpWidth"])
 
var dialog = ref(false)
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
