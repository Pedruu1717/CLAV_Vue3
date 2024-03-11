<template>
    <v-card id="treeview-card">
      <v-tooltip top color="info" open-delay="500">
        <template v-slot:activator="{ on }">
          <v-text-field
            class="centered-input mx-4"
            v-model="search"
            v-on="on"
            label="Filtrar por código, título, notas aplic., exemplos de notas ou termos de índice"
            text
            hide-details
            single-line
            clearable
            color="blue darken-3"
          ></v-text-field>
        </template>
        <span
          >Filtrar por código, título, notas de aplicação, exemplos de notas de
          aplicação ou termos de índice...</span
        >
      </v-tooltip>
      <v-card-text>
        <div v-if="classesCarregadas">
          <v-treeview
            rounded
            dense
            hoverable
            activatable
            :active="[props.classeId]"
            :open="selectedParents"
            :items="classesTree"
            item-key="id"
            :search="search"
            :filter="filter"
          >
            <template v-slot:label="{ item }">
              <v-tooltip bottom color="info" open-delay="500">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" rounded text color="blue" @click="go(item.id)">
                    {{ item.name }}
                  </v-btn>
                </template>
                <span>{{ item.name }} - {{ formatarLabel(item.titulo) }} </span>
              </v-tooltip>
              <br />
            </template>
          </v-treeview>
        </div>
      </v-card-text>
    </v-card>
</template>
  
<script setup>
import { defineProps } from 'vue'
import { host } from '@/config/global'
import { useAppStore } from '@/store/app';
import router from '@/router'

const props = defineProps(["classeId"])
const store = useAppStore()
 
var classesTree = []
var classesCarregadas = false
var search = null
var selectedParents = []

var levelIds = props.classeId.split(".")
var iteracoes = levelIds.length
for (var i = 0; i < iteracoes; i++) {
    levelIds.splice(levelIds.length - 1, 1);
    selectedParents.push(levelIds.join("."));
}

var myClasses = []
var myIndice = null
try {
  await fetch(host + "/classes", { method: "GET", headers: { "Authorization": "token " + store.token } })
  .then(response => response.json())
  .then(data => myClasses = data);

  await fetch(host + "/indicePesquisa", { method: "GET", headers: { "Authorization": "token " + store.token } })
  .then(response => response.json())
  .then(data => myIndice = data);
  
  classesTree = await preparaTree(myClasses, myIndice);
  console.log(classesTree)
  classesCarregadas = true;
} catch (e) {
    console.log(e);
}

function go(idClasse) {
  router.push("/classes/consultar/c" + idClasse);
  router.go();
}

function formatarLabel(titulo) {
  return titulo.toUpperCase();
}

async function preparaTree(lclasses, linfo) {
  try {
    var myTree = [];
    for (var i = 0; i < lclasses.length; i++) {
      var infoIndex = linfo.findIndex(c => c.codigo == lclasses[i].codigo);
      myTree.push({
        id: lclasses[i].codigo,
        name: lclasses[i].codigo,
        titulo: linfo[infoIndex].titulo.toLowerCase(),
        notas: linfo[infoIndex].notas.join(" ").toLowerCase(),
        exemplos: linfo[infoIndex].exemplos.join(" ").toLowerCase(),
        tis: linfo[infoIndex].tis.join(" ").toLowerCase(),
        children: await preparaTree(lclasses[i].filhos, linfo)
      });
    }
    return myTree;
  } catch (e) {
    console.log(e)
    return [];
  }
}

const filter = computed(() => {
  return (item, queryText, itemText) => {
    const codigo = item.id;
    const titulo = item.titulo;
    const notas = item.notas;
    const exemplos = item.exemplos;
    const tis = item.tis;
    const searchText = queryText.toLowerCase();

    return (
      codigo.indexOf(searchText) > -1 ||
      titulo.indexOf(searchText) > -1 ||
      notas.indexOf(searchText) > -1 ||
      exemplos.indexOf(searchText) > -1 ||
      tis.indexOf(searchText) > -1
    );
  };
})
</script>
  
<style lang="scss">
#treeview-card {
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  background-color: #f4f5f7;
}
.centered-input >>> input {
  text-align: center;
}
</style>
  