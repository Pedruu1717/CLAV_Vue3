<template>
  <v-col style="text-align:center;">
    <p>A carregar {{message}}...</p>
    <v-progress-circular indeterminate size="100" width="10" color="indigo accent-4" />
  </v-col>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(["message"]);
</script>