<template>
  <div>
    <v-text-field
      v-model="search"
      label="Procurar / filtrar"
      prepend-inner-icon="mdi-magnify"
      hide-details
      single-line
      color="blue"
      class="font-weight-medium"
    ></v-text-field>
    <v-data-table
      v-model:sort-by="sortBy"
      :headers="cabecalhos"
      :items-length="totalItems"
      :items="items_list"
      :loading="loading"
      :search="search"
      item-value="id"
    >
      <template v-slot:no-data>
        <v-alert
          :value="true"
          color="error"
          icon="warning"
          class="font-weight-medium my-3"
          id="alerta-erro"
          >Não foram encontrados resultados para "{{ search }}".</v-alert
        >
      </template>

      <template v-slot:[`item.entidades`]="{ item }">
        <span v-for="(ent, index) in item.entidades" :key="index">
          <a :href="'/entidades/' + ent">{{ ent }}</a>
          {{ item.entidades.length > 1 ? " " : "" }}
        </span>
      </template>
    </v-data-table>
  </div>
</template>
  
  
<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { host } from '@/config/global';
import { useAppStore } from '@/store/app';
import CONSTS from "@/utils/consts";

const props = defineProps(["tipo", "lista", "entidades"])
const store = useAppStore()

var items_list = ref([])
var search = ref('')
var loading = true
var totalItems = 0
var cabecalhos = ref([])
var level = 0  // teste. é preciso ir buscar o nivel ao utilizador logado
var sortBy = ref([{key: '', order: ''}])

async function fetchItems() {
  try {
    loading = true;
    await fetch(host + "/" + props.tipo, {
      method: "GET", headers: { "Authorization": "token " + store.token }
    })
    .then(response => response.json())
    .then(data => {
      items_list.value = data;
      if (props.tipo == "legislacao") {
        let legislacoes = data;
        let legislacao;
        let entidades;
        for (let i = 0; i < legislacoes.length; i++) {          
          legislacao = items_list.value[i]
          if (legislacao.entidades.length > 0) {
            entidades = legislacao.entidades;
            for (let e = 0; e < entidades.length; e++) {
              /* Passar cada entidade de {"id": "ent_DGLAB", "sigla": "DGLAB"} para "DGLAB", por exemplo. */          
              items_list.value[i].entidades[e] = items_list.value[i].entidades[e].sigla;
            };  
          }
          else if (legislacao.entidades1.length > 0) {
            entidades = legislacao.entidades1;
            for (let e = 0; e < entidades.length; e++) {
              /* Passar cada entidade de {"id": "ent_DGLAB", "sigla": "DGLAB"} para "DGLAB", por exemplo. */          
              items_list.value[i].entidades1[e] = items_list.value[i].entidades1[e].sigla;
            };  
          }
          else continue;           
        };     
      }

      else if (props.tipo == "pgd" || props.tipo == "pgd/lc" || props.tipo == "tabelasSelecao") {        
        let tabelaSel;
        let entidades;
        let entidade;
        /* Remover itens não ativos. */
        items_list.value = items_list.value.filter((t) => { return t.estado == "Ativo" });
        let tabelasSelecao = items_list.value;
        for (let i = 0; i < tabelasSelecao.length; i++) {          
          tabelaSel =  tabelasSelecao[i];
          entidades = tabelaSel.entidades;          
          for (let e = 0; e < entidades.length; e++) {
            entidade = entidades[e];
            /* Passar cada link de uma entidade para a sigla dessa entidade. */
            if (entidade.includes("#ent_")) items_list.value[i].entidades[e] = entidade.split("#ent_")[1];
            else if (entidade.includes("#tip_")) items_list.value[i].entidades[e] = entidade.split("#tip_")[1];         
          }          
        }
      }

      totalItems = items_list.length;
    })
        
  } catch(error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchItems()
  switch (props.tipo) {
    case "entidades":
      cabecalhos.value = [
        {title: "Sigla", key: "id"},
        {title: "Designação", key: "designacao"},
        {title: "Estado", key: "estado"},
        {title: "Internacional", key: "internacional"},
      ]
      break

    case "tipologias":
      cabecalhos.value = [
        {title: "Sigla", key: "id"},
        {title: "Designação", key: "designacao"},
      ]
      break

    case "legislacao":
      cabecalhos.value = [
        {title: "Data do diploma", key: "data"},
        {title: "Tipo", key: "tipo"},
        {title: "Entidade(s)", key: "entidades"},
        {title: "Número", key: "numero"},
        {title: "Sumário", key: "sumario"},
        {title: "Estado", key: "estado"},
      ]
      break

    case "tabelasSelecao":
      cabecalhos.value = [
          {title: "Data", key: "data"},
          {title: "Tipo", key: "tipo"},
          {title: "Número", key: "numero"},
          {title: "Entidade(s)", key: "entidades"},
          {title: "Sumário", key: "sumario"},
          {title: "Estado", key: "estado"},
          {title: "Acesso", key: "acesso"},
      ]
      sortBy.value[0].key = 'data'
      sortBy.value[0].order = 'desc'
      break

    case "pgd/lc":
      cabecalhos.value = [
          {title: "Data", key: "data"},
          {title: "Tipo", key: "tipo"},
          {title: "Número", key: "numero"},
          {title: "Entidade(s)", key: "entidades"},
          {title: "Sumário", key: "sumario"},
          {title: "Estado", key: "estado"},
          {title: "Acesso", key: "acesso"},
      ]
      sortBy.value[0].key = 'data'
      sortBy.value[0].order = 'desc'      
      break
    
    case "pgd":
      cabecalhos.value = [
          {title: "Data", key: "data"},
          {title: "Tipo", key: "tipo"},
          {title: "Número", key: "numero"},
          {title: "Entidade(s)", key: "entidades"},
          {title: "Sumário", key: "sumario"},
          {title: "Estado", key: "estado"},
          {title: "Acesso", key: "acesso"},
      ]
      sortBy.value[0].key = 'data'
      sortBy.value[0].order = 'desc'
      break
    
    default:
      console.log('Tipo de listagem inválido.');
  }

  // Tem direito a operações quando tem nivel igual ou acima ao definido.
  if (level >= CONSTS.NIVEL_MINIMO_ALTERAR) { 
    cabecalhos.value.push({title: "Operações", key: "operacoes"})
  }
  loading = false;
})

</script>

<style scoped>

</style>
  