<template>
  <v-card id="treeview-card">
    <v-text-field
      v-model="search"
      label="Pesquisar por código, título, notas de aplicação, exemplos de notas de aplicação ou termos de índice..."
      prepend-inner-icon="mdi-magnify"
      hide-details
      single-line
      color="blue"
      class="font-weight-medium"
    ></v-text-field>
      <v-card-text>
        <div v-if="classesCarregadas">
          <treeview :config="config" :nodes="nodes" />          
        </div>
      </v-card-text>
    </v-card>
</template>
  
<script setup>
import { defineProps, onMounted } from 'vue'
import { host } from '@/config/global'
import { useAppStore } from '@/store/app';
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";

const props = defineProps(["classeId"])
const store = useAppStore()

var config = ref({})
var nodes = ref({})
var raizes = []

var search = ref('')
var classesTree = []
var classesCarregadas = false
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
  classesTree = classesTree.filter(({ id }, index) => !ids.includes(id, index + 1))

  for (let i = 0; i < classesTree.length; i++) {
    let classe = classesTree[i]
    // Adicionar nó raíz.
    raizes.push(classe.id)
    // Adicionar filhos.
    addTreeviewChildren(classe)    
  }

  config.value = { 
    roots: raizes,
    openedIcon: {
      type: "shape",
      stroke: "grey",
      strokeWidth: 3,
      viewBox: "0 0 24 24",
      draw: "M 0 0 L 12 12 M 24 0 L 12 12",
    },
    closedIcon: {
      type: "shape",
      stroke: "grey",
      strokeWidth: 3,
      viewBox: "0 0 24 24",
      draw: "M 2 0 L 22 12 M 2 22 L 22 12",
    },    
  }
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
      nodes.value[children.id] = {text: formatarLabel(children.name + ' - ' + children.titulo), state: {opened: false}}
    }
  }

  let treeview_classe = {}
  treeview_classe.text = formatarLabel(classe.name + ' - ' + classe.titulo)
  treeview_classe.children = treeview_children
  treeview_classe.state = {opened: false}
  nodes.value[classe.id] = treeview_classe

  // Repetir a função para cada nó filho.
  if (classe.children.length > 0) {
    classe.children.forEach((c) => addTreeviewChildren(c))
  }
}

function formatarLabel(titulo) {
  if (window.location.pathname == "/classes/consultar") titulo.toUpperCase();
  else titulo = titulo.split("-")[0];
  
  return titulo;
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

function formatTreeviewNodes() {
  let treeview_nodes = Array.from(document.getElementsByClassName("input-wrapper"))
  treeview_nodes.forEach((node) => {
    let classeId = node.innerText.split("-")[0];
    node.innerHTML = `<a href=${"/classes/consultar/c" + classeId}>` + node.innerHTML + "</a>";
  })
  let nodes_text = Array.from(document.getElementsByClassName("node-text"))
  nodes_text.forEach((node) => node.classList.add("text-blue", "treeview-font"))
}

function openParentNode() {
  Object.entries(nodes.value).forEach(([key, value]) => {
    let keyLength = key.length
    if (key == props.classeId && keyLength > 3) {
      let parentClasseId
      let grandparentClasseId
      let grandgrandparentClasseId
      switch (keyLength) {
        case 6: // classe nivel 2
          parentClasseId = key.split('.')[0]
          nodes.value[parentClasseId].state.opened = true
          break
        case 10: // classe nivel 3          
          parentClasseId = key.split('.')[0] + '.' + key.split('.')[1]
          grandparentClasseId = key.split('.')[0]
          nodes.value[grandparentClasseId].state.opened = true
          nodes.value[parentClasseId].state.opened = true
          break
        case 13: // classe nivel 4
          parentClasseId = key.split('.')[0] + '.' + key.split('.')[1] + '.' + key.split('.')[2]
          grandparentClasseId = key.split('.')[0] + '.' + key.split('.')[1]
          grandgrandparentClasseId = key.split('.')[0]
          nodes.value[grandgrandparentClasseId].state.opened = true
          nodes.value[grandparentClasseId].state.opened = true
          nodes.value[parentClasseId].state.opened = true
          break
      }      
    }
  })
}

onMounted(() => {
  formatTreeviewNodes()
  openParentNode()
});

watch(nodes, (newValue, oldValue) => {
  Object.entries(newValue).forEach(([key, value]) => {
    if (value.state.opened == true) {
      formatTreeviewNodes()
    }
  })
}, {deep: true});
</script>
  
<style lang="scss">
.treeview-font {
  font-family: "Roboto Flex", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "wdth" 100,
    "GRAD" 0,
    "XOPQ" 96,
    "XTRA" 468,
    "YOPQ" 79,
    "YTAS" 750,
    "YTDE" -203,
    "YTFI" 738,
    "YTLC" 514,
    "YTUC" 712;
  font-size: medium;
}

#treeview-card {
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  background-color: #f4f5f7;
}
</style>
