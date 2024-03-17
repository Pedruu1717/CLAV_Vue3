<template>
   <v-card flat class="pa-3">
      <v-row align="center" justify="center">
        <v-col cols="12" md="3" align="center"> <Voltar /> </v-col>
        <v-col cols="12" md="5" align="center">
          <p class="clav-content-title-1">Consultar Lista Consolidada</p>
        </v-col>
        <v-col cols="12" md="4" align="center">
        </v-col>
      </v-row>
    <Suspense><ClassesArvore /></Suspense>
  </v-card>
</template>

<script setup>
import Voltar from "@/components/generic/Voltar";
import ClassesArvore from "@/components/classes/ClassesArvore.vue";
</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>
