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
    <Suspense><ClassesArvoreLateral /></Suspense>
  </v-card>
</template>

<script setup>
//import Loading from "@/components/generic/Loading";
import { host } from "@/config/global"
//import router from '@/router'
import { defineProps, ref } from 'vue'
import { useAppStore } from "@/store/app"
import Voltar from "@/components/generic/Voltar";
import ClassesArvoreLateral from "@/components/classes/ClassesArvoreLateral.vue";

const store = useAppStore()
const props= defineProps(["savedSearch"])

var advancedSearch = false
var regraCampo = [(v) => !!v || "Campo a pesquisar é obrigatório."]
var regraValor = [(v) => !!v || "Valor a pesquisar é obrigatório."]
var regraV = [(v) => !!v || "Obrigatório. Escolha um valor."]
var conetor = "E"
var opLogicas = ["E", "OU"]
var camposUsados = [
  {
    campo: null,
    subcampo: null,
    valor: "",
    not: false,
  },
]

var camposPesquisa = [
  {
    text: "Código",
    value: {
      nome: "id",
      mask: "###.##.###.##",
      enum: [],
    },
  },
  {
    text: "Título",
    value: {
      nome: "titulo",
      enum: [],
    },
  },
  {
    text: "Estado",
    value: {
      nome: "status",
      enum: [],
    },
  },
  {
    text: "Descrição",
    value: {
      nome: "descricao",
      enum: [],
    },
  },
  {
    text: "Tipo de processo",
    value: {
      nome: "tp",
      enum: [],
    },
  },
  {
    text: "Processo Transversal",
    value: {
      nome: "pt",
      enum: [],
    },
  },
  {
    text: "Notas de Aplicação",
    value: {
      nome: "na",
      enum: [],
    },
  },
  {
    text: "Exemplos de Notas de Aplicação",
    value: {
      nome: "exemploNa",
      enum: [],
    },
  },
  {
    text: "Notas de Exclusão",
    value: {
      nome: "ne",
      enum: [],
    },
  },
  {
    text: "Termos de Índice",
    value: {
      nome: "ti",
      enum: [],
    },
  },
  {
    text: "PCA",
    value: {
      nome: "pca",
      enum: [],
    },
  },
  {
    text: "Forma de contagem do PCA",
    value: {
      nome: "fc_pca",
      enum: [],
    },
  },
  {
    text: "Subforma de contagem do PCA",
    value: {
      nome: "sfc_pca",
      enum: [],
    },
  },
  {
    text: "Justificação do PCA",
    value: {
      nome: "crit_pca",
      enum: [],
    },
  },
  {
    text: "DF",
    value: {
      nome: "df",
      enum: [
        {
          text: "Conservação",
          value: "C",
        },
        {
          text: "Conservação Parcial",
          value: "CP",
        },
        {
          text: "Eliminação",
          value: "E",
        },
        {
          text: "Não Especificado",
          value: "NE",
        },
      ],
    },
  },
  {
    text: "Justificação do DF",
    value: {
      nome: "crit_df",
      enum: [],
    },
  },
  {
    text: "Entidade",
    value: {
      nome: "entidade",
      label: "Entidade a pesquisar",
      enum: [
        {
          text: "Dona",
          value: "donos",
        },
        {
          text: "Participante",
          value: "participantes",
        },
      ],
    },
  },
  {
    text: "Tipologia",
    value: {
      nome: "tipologia",
      label: "Tipologia a pesquisar",
      enum: [
        {
          text: "Dona",
          value: "donos",
        },
        {
          text: "Participante",
          value: "participantes",
        },
      ],
    },
  },
  {
    text: "Tipo de participação",
    value: {
      nome: "tipo_participacao",
      enum: [],
    },
  },
]

/*var classesTree = ref([])
var classesOriginal = ref([])
var entidades = ref([])
var tipologias = ref([])
var classesCarregadas = false
var search = null
var selected = ref([])
var selectedParents = ref([])
var notValues = [
  {
    text: "é",
    value: false,
  },
  {
    text: "não é",
    value: true,
  },
]

var myClasses = ref([])

try {
  fetch(host + "/classes?info=pesquisa", {method: "GET", headers:{"Authorization": "token " + store.token}})
  .then(response => response.json())
  .then(data => myClasses.value = data)
} catch (e) {
  console.log(e);
}*/
</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>
