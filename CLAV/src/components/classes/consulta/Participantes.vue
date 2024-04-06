<template>
  <!-- PARTICIPANTES NO PROCESSO -->
  <Campo
    v-if="!valida"
    nome="Participantes no processo"
    infoHeader="Participantes no processo"
    :infoBody="myhelp.Classe.Campos.Participantes"
    color="neutralpurple"
  >
    <template v-slot:conteudo>
      <v-data-table :headers="headers" :items="myParticipantes">
        <template v-slot:item="props">
          <tr>
            <td>{{ props.item.label }}</td>
            <td>
              <ul>
                <li v-for="p in props.item.participantes" :key="p.label">
                  <a
                    v-if="p.idTipo == 'Entidade'"
                    :href="'/entidades/' + p.idParticipante"
                  >
                    {{ p.sigla }}
                    ({{ p.idTipo }}) - {{ p.designacao }}
                  </a>
                  <a v-else :href="'/tipologias/' + p.idParticipante">
                    {{ p.sigla }}
                    ({{ p.idTipo }}) - {{ p.designacao }}
                  </a>
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
    <v-data-table :headers="headers" :items="myParticipantes">
      <template v-slot:item="props">
        <tr>
          <td style="color: #1a237e">{{ props.item.label }}</td>
          <td>
            <ul>
              <li v-for="p in props.item.participantes" :key="p.label">
                <a v-if="p.idTipo == 'Entidade'" :href="'/entidades/' + p.idParticipante">
                  {{ p.sigla }}
                  ({{ p.idTipo }}) - {{ p.designacao }}
                </a>
                <a v-else :href="'/tipologias/' + p.idParticipante">
                  {{ p.sigla }}
                  ({{ p.idTipo }}) - {{ p.designacao }}
                </a>
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
import Campo from "@/components/generic/CampoCLAV"
import router from "@/router"
import help from "@/config/help"

const props = defineProps(["entidades", "valida"])
var showFooter = ref(false)

var headers = ref([
  {
    title: "Tipo de Intervenção",
    key: "Tipo de Intervenção",
    sortable: false,
  },
  {
    title: "Participantes",
    key: "Participantes",
    sortable: true,
  },
])

var participPorTipo = ref({
  Apreciador: [],
  Assessor: [],
  Comunicador: [],
  Decisor: [],
  Executor: [],
  Iniciador: [],
})

var myParticipantes = ref([])
var myhelp = help

function go(idClasse) {
  router.push("/entidades/" + idClasse);
  router.go();
}

function normaliza(tipo) {
  var res = "";
  switch (tipo) {
    case "Assessor":
      res = "Assessorar";
      break;
    case "Apreciador":
      res = "Apreciar";
      break;
    case "Comunicador":
      res = "Comunicar";
      break;
    case "Decisor":
      res = "Decidir";
      break;
    case "Executor":
      res = "Executar";
      break;
    case "Iniciador":
      res = "Iniciar";
      break;
    default:
      res = "Desconhecido";
  }
  return res;
}

onMounted(() => {
  var tipo;
  for (var i = 0; i < props.entidades.length; i++) {
    tipo = props.entidades[i].participLabel;
    participPorTipo.value[tipo].push(props.entidades[i]);
  }
  for (var j = 0; j < Object.keys(participPorTipo.value).length; j++) {
    tipo = Object.keys(participPorTipo.value)[j];
    if (participPorTipo.value[tipo].length > 0) {
      myParticipantes.value.push({
        label: normaliza(tipo),
        participantes: participPorTipo.value[tipo],
      });
    }
  }
})

</script>
