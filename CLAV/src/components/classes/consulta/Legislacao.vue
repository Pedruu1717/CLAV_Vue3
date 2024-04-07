<template>
  <!-- LEGISLAÇÂO -->
  <Campo
    v-if="!valida"
    nome="Legislação"
    infoHeader="Legislação"
    :infoBody="myhelp.Classe.Campos.Legislacao"
    color="neutralpurple"
  >
    <template v-slot:conteudo>
      <v-data-table :headers="headers" :items="legs">
        <template v-slot:item="props">
          <tr>
            <td>{{ props.item.tipo }}</td>
            <td>
              <a :href="'/legislacao/' + props.item.idLeg"> {{ props.item.numero }}</a>
            </td>
            <td>{{ props.item.sumario }}</td>
          </tr>
        </template>
        <template #bottom v-if="!showFooter"></template>
      </v-data-table>
    </template>
  </Campo>
  <div v-else>
    <v-data-table :headers="headers" :items="legs">
      <template v-slot:item="props">
        <tr>
          <td>{{ props.item.tipo }}</td>
          <td>
            <a :href="'/legislacao/' + props.item.idLeg"> {{ props.item.numero }}</a>
          </td>
          <td>{{ props.item.sumario }}</td>
        </tr>
      </template>
      <template #bottom v-if="!showFooter"></template>
    </v-data-table>
  </div>
</template>

<script setup>
import Campo from "@/components/generic/CampoCLAV.vue"
import help from "@/config/help"
import { defineProps } from 'vue'

var showFooter = ref(false)

const props = defineProps(["legs", "valida"])

var headers = ref([
  {
    title: "Tipo",
    key: "tipo",
  },
  {
    title: "Número",
    key: "numero",
  },
  {
    title: "Sumário",
    key: "sumario",
    
  },
])

var myhelp = help

</script>
