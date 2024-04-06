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
      <v-data-table :headers="headers" :items="myProcRel" hide-default-footer>
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
      </v-data-table>
    </template>
  </Campo>
  <div v-else>
    <v-data-table :headers="headers" :items="myProcRel" hide-default-footer>
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
    </v-data-table>
  </div>
</template>

<script>
import Campo from "@/components/generic/CampoCLAV.vue";
const help = require("@/config/help").help;

export default {
  props: ["processos", "valida"],
  components: { Campo },

  data: function () {
    return {
      headers: [
        {
          text: "Relação",
          align: "left",
          sortable: false,
          value: "label",
          class: ["body-2", "font-weight-bold"],
        },
        {
          text: "Processos",
          value: "processos",
          class: ["body-2", "font-weight-bold"],
        },
      ],
      relPorTipo: {
        eAntecessorDe: [],
        eComplementarDe: [],
        eCruzadoCom: [],
        eSinteseDe: [],
        eSintetizadoPor: [],
        eSucessorDe: [],
        eSuplementoDe: [],
        eSuplementoPara: [],
      },
      labels: {
        eAntecessorDe: "É Antecessor de",
        eComplementarDe: "É Complementar de",
        eCruzadoCom: "É Cruzado com",
        eSinteseDe: "É Síntese de",
        eSintetizadoPor: "É Sintetizado por",
        eSucessorDe: "É Sucessor de",
        eSuplementoDe: "É Suplemento de",
        eSuplementoPara: "É Suplemento para",
      },
      myProcRel: [],
      myhelp: help,
    };
  },

  methods: {
    go: function (id) {
      this.$router.push("/classes/consultar/c" + id);
      this.$router.go();
    },
  },

  mounted: function () {
    var tipo;
    for (var i = 0; i < this.processos.length; i++) {
      tipo = this.processos[i].idRel;
      this.relPorTipo[tipo].push(this.processos[i]);
    }
    for (var j = 0; j < Object.keys(this.relPorTipo).length; j++) {
      tipo = Object.keys(this.relPorTipo)[j];
      if (this.relPorTipo[tipo].length > 0) {
        this.myProcRel.push({
          label: this.labels[tipo],
          processos: this.relPorTipo[tipo],
        });
      }
    }
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
