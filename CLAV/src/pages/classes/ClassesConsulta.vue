<template>
    <ConsultaClasse :idc="route.params.idClasse" />
</template>
  
<script setup>
import ConsultaClasse from "@/components/classes/consulta/ConsultaClasse.vue"; // @ is an alias to /src
import { useRoute } from "vue-router"

const route = useRoute()

</script>
  