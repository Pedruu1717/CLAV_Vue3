<template>
    <v-card flat class="pa-3">
      <v-row align="center" justify="center">
        <v-col cols="12" md="3" align="center"> <!--<Voltar />--> </v-col>
        <v-col cols="12" md="5" align="center">
          <p class="clav-content-title-1">Consultar Lista Consolidada</p>
        </v-col>
        <v-col cols="12" md="4" align="center">
          <!--<v-btn
            @click="advancedSearch = !advancedSearch"
            rounded
            class="white--text clav-linear-background"
          >
            
            <v-switch
              v-model="advancedSearch"
              color="green lighten-2"
              disabled
              hide-details
              style="opacity: 1 !important"
            ></v-switch>
            <unicon
              name="zoom-icon"
              width="20"
              height="20"
              viewBox="0 0 20.71 20.697"
              fill="#ffffff"
            />
            <p class="ml-2">Pesquisa Avançada</p>
          </v-btn>-->
        </v-col>
      </v-row>
    </v-card>
</template>

<script setup>
import Loading from "@/components/generic/Loading";
import { host } from "@/config/global"
import router from '@/router'
import { defineProps, ref } from 'vue'
import { useAppStore } from "@/store/app"
//import Voltar from "@/components/generic/Voltar";

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

var classesTree = ref([])
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
  console.log(myClasses) // teste
} catch (e) {
  console.log(e);
}

//classesTree = await preparaTree(myClasses.data);
//classesOriginal = classesTree;

/*if (savedSearch) {
  camposUsados = savedSearch.camposUsados;
  classesTree.value = savedSearch.classesTree;
  camposPesquisa = savedSearch.camposPesquisa;
  selected.value = savedSearch.selected;
  selectedParents.value = savedSearch.selectedParents;
  conetor = savedSearch.conetor;
  opLogicas = savedSearch.opLogicas;
} else {
  await loadStatus();
  await loadTipoProc();
  await loadProcTrans();
  await loadPCAFormasContagem();
  await loadPCASubFormasContagem();
  await loadCriterios();
  await loadTiposParticipacoes();
}

var entidades = await fetch("GET", "/entidades");
entidades = entidades.data.map((e) => {
  return {
    text: e.designacao,
    value: e.id,
  };
});

var tipologias = await fetch("GET", "/tipologias");
tipologias = tipologias.data.map((e) => {
  return {
    text: e.designacao,
    value: e.id,
  };
});
classesCarregadas = true;


//Necessário para o caso especial de pesquisar com o campo Entidade
function cleanNome() {
  for (var i = 0; i < camposPesquisa.length; i++) {
    if (camposPesquisa[i].text == "Entidade") {
      camposPesquisa[i].value.nome = "";
    }
  }
}

async function load(voc, transF, campo) {
  var response = await fetch("get", "/vocabularios/" + voc);
  var list = response.data.map(transF);

  if (list.length > 0 && typeof list[0] === "object") {
    list = list.sort((a, b) => a.text.localeCompare(b.text));
  } else {
    list = list.sort();
  }

  var found = false;
  for (var i = 0; i < camposPesquisa.length && !found; i++) {
    if (camposPesquisa[i].text == campo) {
      camposPesquisa[i].value.enum = list;
      found = true;
    }
  }
}

async function loadStatus() {
  var transF = (item) => {
    return {
      text: item.termo,
      value: item.idtermo.split("#vc_status_")[1],
    };
  };

  await load("vc_status", transF, "Estado");
}

async function loadTipoProc() {
  var transF = (item) => {
    return {
      text: item.termo,
      value: item.termo.toLowerCase(),
    };
  };

  await load("vc_processoTipo", transF, "Tipo de processo");
}

async function loadProcTrans() {
  var transF = (item) => {
    return {
      text: item.termo,
      value: item.termo.charAt(0).toLowerCase(),
    };
  };

  await load("vc_processoTransversalidade", transF, "Processo Transversal");
}

async function loadPCAFormasContagem() {
  var transF = (item) => {
    return {
      text: item.termo,
      value: item.termo.toLowerCase(),
    };
  };

  await load("vc_pcaFormaContagem", transF, "Forma de contagem do PCA");
}

async function loadPCASubFormasContagem() {
  var transF = (item) => {
    return {
      text: item.desc,
      value: item.desc.toLowerCase(),
    };
  };

  await load("vc_pcaSubformaContagem", transF, "Subforma de contagem do PCA");
}

async function loadCriterios() {
  var transF = (item) => {
    return {
      text: item.termo,
      value:
        "CriterioJustificacao" +
        item.termo
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace("informacional", "Info")
          .replace(" ", ""),
    };
  };

  await load("vc_pcaCriterios", transF, "Justificação do PCA");
  await load("vc_dfCriterios", transF, "Justificação do DF");
}

async function loadTiposParticipacoes() {
  var transF = (item) => {
    let name = item.idtermo.split("#vc_processoParticipante_")[1];
    return {
      text: name.charAt(0).toUpperCase() + name.slice(1),
      value: name,
    };
  };

  await load("vc_processoTipoParticipacao", transF, "Tipo de participação");
}

function addActive(code) {
  if (!selected.includes(code)) {
    selected.push(code);
  }
}

function buscarpais(code) {
  let levelIds = code.split(".");
  let iter = levelIds.length;

  for (let i = 0; i < iter; i++) {
    levelIds.splice(levelIds.length - 1, 1);
    let levelId = levelIds.join(".");

    if (!selectedParents.includes(levelId)) {
      selectedParents.push(levelId);
    }
  }
} 

function getTitulo(id) {
  var codigos = id.split(".");
  var nivel = codigos.length;
  var found;
  var classes = classesTree;

  for (var i = 0; i < nivel; i++) {
    found = null;
    for (var j = 0; j < classes.length && !found; j++) {
      if (classes[j].id == codigos.slice(0, i + 1).join(".")) {
        if (i == nivel - 1) {
          found = classes[j].name.split(" - ")[1];
        } else {
          classes = classes[j].children;
          found = "";
        }
      }
    }
  }

  return found;
}

function preparaTree(lclasses) {
  var myTree = [];
  for (var i = 0; i < lclasses.length; i++) {
    myTree.push({
      id: lclasses[i].id,
      name: lclasses[i].nome,
      titulo: lclasses[i].titulo.toLowerCase(),
      status: lclasses[i].status.toLowerCase(),
      descricao: lclasses[i].descricao.toLowerCase(),
      tp: lclasses[i].tp.toLowerCase(),
      pt: lclasses[i].pt.toLowerCase(),
      na: lclasses[i].na.toLowerCase(),
      exemploNa: lclasses[i].exemploNa.toLowerCase(),
      ne: lclasses[i].ne.toLowerCase(),
      ti: lclasses[i].ti.toLowerCase(),
      pca: lclasses[i].pca.toLowerCase(),
      fc_pca: lclasses[i].fc_pca.toLowerCase(),
      sfc_pca: lclasses[i].sfc_pca.toLowerCase(),
      crit_pca: lclasses[i].crit_pca.map((j) => j.toLowerCase()),
      df: lclasses[i].df.toLowerCase(),
      crit_df: lclasses[i].crit_df.map((j) => j.toLowerCase()),
      donos: lclasses[i].donos.map((d) => d.toLowerCase()),
      participantes: lclasses[i].participantes.map((p) => p.toLowerCase()),
      tipo_participacao: lclasses[i].tipo_participacao.map((p) => p.toLowerCase()),
      children: preparaTree(lclasses[i].filhos),
    });
  }
  return myTree;
}

function goToClasse(id) {
  var ss = undefined;

  if (selected.length > 0) {
    ss = {
      camposUsados: camposUsados,
      classesTree: classesTree,
      selected: selected,
      selectedParents: selectedParents,
      camposPesquisa: camposPesquisa,
      conetor: conetor,
      opLogicas: opLogicas,
    };
  }

  router.push({
    name: "consultaClasse",
    params: {
      idClasse: "c" + id,
      savedSearch: ss,
    },
  });
}

function get(name) {
  return name;
}  
*/

/*watch(search) {
  if (search == "" || search == null) {
    selected = [];
    selectedParents = [];
    classesTree = classesOriginal;
  }
}*/

</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>
