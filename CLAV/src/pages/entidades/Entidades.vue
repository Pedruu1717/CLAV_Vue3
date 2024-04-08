<template>
    <Voltar />
    <v-card style="margin-top: 10px;">            
        <p class="clav-content-title-1 titulo">Entidades</p>
        <Listagem style="margin-top: 50px;" :tipo="'entidades'"/>
    </v-card>
</template>
  
  
<script setup>
import Listagem from '@/components/generic/Listagem'
import Voltar from '@/components/generic/Voltar.vue'

</script>

<style scoped>
.titulo {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
}
</style>
