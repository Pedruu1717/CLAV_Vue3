<template>
    <v-data-table      
      :headers="headers"
      :items-length="totalItems"
      :items="items_list"
      :loading="loading"
      :search="search"
      item-value="id"      
    >
    </v-data-table>
</template>
  
  
<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { host } from '@/config/global';
import { useAppStore } from '@/store/app';

const props = defineProps(["tipo"])
const store = useAppStore()

var items_list = ref([])
var headers = ref([])
var search = ''
var loading = true
var totalItems = 0

async function fetchItems() {
  try {
    loading = true;
    await fetch(host + "/" + props.tipo, {
      method: "GET", headers: { "Authorization": "token " + store.token }
    })
    .then(response => response.json())
    .then(data => {
      items_list.value = data;
      loading = false;
      totalItems = items_list.length;
      let keys = Object.keys(items_list.value[0])
      keys.forEach(k => headers.value.push({title: k, key: k}))
    })
    
  } catch(error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchItems()
})
</script>

<style scoped>

</style>
  