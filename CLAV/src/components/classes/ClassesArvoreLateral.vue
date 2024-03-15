<template>
    <v-card id="treeview-card">
      <v-tooltip text="Filtrar por código, título, notas aplic., exemplos de notas ou termos de índice">
        <template v-slot:activator="{ props }">
          <v-text-field v-bind="props" label="Filtrar por código, título, notas aplic., exemplos de notas ou termos de índice"></v-text-field>
        </template>
      </v-tooltip>    
      <v-card-text id="treeview-content">
        <div v-if="classesCarregadas">
          <treeview
            :config="config" :nodes="nodes"
          >
          </treeview>
        </div>
      </v-card-text>
    </v-card>
</template>
  
<script setup>
import { defineProps } from 'vue'
import { host } from '@/config/global'
import { useAppStore } from '@/store/app';
import router from '@/router'
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";


var config = ref({})
var nodes = ref({})
var raizes = []

const props = defineProps(["classeId"])
const store = useAppStore()
 
var classesTree = []
var classesCarregadas = false
var search = null
var selectedParents = []

var levelIds = props.classeId.split(".")
var iteracoes = levelIds.length
for (let i = 0; i < iteracoes; i++) {
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
  // Remover classes repetidas
  const ids = classesTree.map(({ id }) => id);
  const classesTreeFiltered = classesTree.filter(({ id }, index) => !ids.includes(id, index + 1))

  for (let i = 0; i < classesTreeFiltered.length; i++) {
    let classe = classesTreeFiltered[i]
    // Adicionar nó raíz.
    raizes.push(classe.id)
    // Adicionar filhos.
    addTreeviewChildren(classe)    
  }

  config.value = { roots: raizes }
  classesCarregadas = true;
} catch (e) {
  console.log(e);
}

function addTreeviewChildren(classe) {
  let treeview_children = []
  if (classe.children.length > 0) {
    for (let i = 0; i < classe.children.length; i++) {
      let children = classe.children[i]
      treeview_children.push(children.id)
      nodes.value[children.id] = {text: children.name + ' - ' + children.titulo}
    }
  }

  let treeview_classe = {}
  treeview_classe.text = classe.name + ' - ' + classe.titulo
  treeview_classe.children = treeview_children
  nodes.value[classe.id] = treeview_classe

  // Repetir a função para cada nó filho.
  if (classe.children.length > 0) {
    classe.children.forEach((c) => addTreeviewChildren(c))
  }
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
// Treeview
#treeview-content {
  color: rgb(42, 107, 235) !important;
}

#treeview-card {
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  background-color: #f4f5f7;
}
.centered-input >>> input {
  text-align: center;
}
</style>
  