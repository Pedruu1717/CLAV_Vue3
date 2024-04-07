<template>
  <!-- PROCESSOS RELACIONADOS -->
  <Campo
    v-if="!valida"
    nome="Processos Relacionados"
    infoHeader="Processos Relacionados"
    :infoBody="myhelp.Classe.Campos.ProcessosRelacionados"
    color="neutralpurple"
  >
    <template v-slot:conteudo>
      <v-data-table :headers="headers" :items="myProcRel">
        <template v-slot:item="props">
          <tr>
            <td style="color: #1a237e">{{ props.item.label }}</td>
            <td>
              <ul>
                <li v-for="p in props.item.processos" :key="p.label">
                  <a :href="'/classes/consultar/c' + p.codigo">{{ p.codigo }}</a>
                  - {{ p.titulo }}
                </li>
              </ul>
            </td>
          </tr>
        </template>
        <template #bottom v-if="!showFooter"></template>
      </v-data-table>
    </template>
  </Campo>
  <div v-else>
    <v-data-table :headers="headers" :items="myProcRel">
      <template v-slot:item="props">
        <tr>
          <td style="color: #1a237e">{{ props.item.label }}</td>
          <td>
            <ul>
              <li v-for="p in props.item.processos" :key="p.label">
                <a :href="'/classes/consultar/c' + p.codigo">{{ p.codigo }}</a>
                - {{ p.titulo }}
              </li>
            </ul>
          </td>
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
const props = defineProps(["processos", "valida"])

var headers = ref([
  {
    title: "Relação",
    key: "relacao",
    sortable: false,
  },
  {
    title: "Processos",
    key: "processos",
  },
])

var relPorTipo = ref({
  eAntecessorDe: [],
  eComplementarDe: [],
  eCruzadoCom: [],
  eSinteseDe: [],
  eSintetizadoPor: [],
  eSucessorDe: [],
  eSuplementoDe: [],
  eSuplementoPara: [],
})

var labels = ref({
  eAntecessorDe: "É Antecessor de",
  eComplementarDe: "É Complementar de",
  eCruzadoCom: "É Cruzado com",
  eSinteseDe: "É Síntese de",
  eSintetizadoPor: "É Sintetizado por",
  eSucessorDe: "É Sucessor de",
  eSuplementoDe: "É Suplemento de",
  eSuplementoPara: "É Suplemento para",
})

var myProcRel = ref([])
var myhelp = help

onMounted(() => {
    var tipo;
    for (var i = 0; i < props.processos.length; i++) {
      tipo = props.processos[i].idRel;
      relPorTipo.value[tipo].push(props.processos[i]);
    }
    for (var j = 0; j < Object.keys(relPorTipo.value).length; j++) {
      tipo = Object.keys(relPorTipo.value)[j];
      if (relPorTipo.value[tipo].length > 0) {
        myProcRel.value.push({
          label: labels.value[tipo],
          processos: relPorTipo.value[tipo],
        });
      }
    }
})


</script>

<style>
a:link {
  color: #1a237e;
  background-color: transparent;
}

a:hover {
  color: white;
  background-color: #1a237e;
}
</style>
