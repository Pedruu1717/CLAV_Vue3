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
      <v-data-table :headers="headers" :items="legs" hide-default-footer>
        <template v-slot:item="props">
          <tr>
            <td>{{ props.item.tipo }}</td>
            <td>
              <a :href="'/legislacao/' + props.item.idLeg"> {{ props.item.numero }}</a>
            </td>
            <td>{{ props.item.sumario }}</td>
          </tr>
        </template>
      </v-data-table>
    </template>
  </Campo>
  <div v-else>
    <v-data-table :headers="headers" :items="legs" hide-default-footer>
      <template v-slot:item="props">
        <tr>
          <td>{{ props.item.tipo }}</td>
          <td>
            <a :href="'/legislacao/' + props.item.idLeg"> {{ props.item.numero }}</a>
          </td>
          <td>{{ props.item.sumario }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Campo from "@/components/generic/CampoCLAV.vue";
const help = require("@/config/help").help;

export default {
  props: ["legs", "valida"],
  components: { Campo },

  data: function () {
    return {
      headers: [
        {
          text: "Tipo",
          align: "left",
          value: "tipo",
          class: ["body-2", "font-weight-bold"],
        },
        {
          text: "Número",
          value: "numero",
          class: ["body-2", "font-weight-bold"],
        },
        {
          text: "Sumário",
          value: "sumario",
          class: ["body-2", "font-weight-bold"],
        },
      ],
      myhelp: help,
    };
  },

  methods: {
    go: function (idClasse) {
      this.$router.push("/entidades/" + idClasse);
      this.$router.go();
    },
  },
};
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
