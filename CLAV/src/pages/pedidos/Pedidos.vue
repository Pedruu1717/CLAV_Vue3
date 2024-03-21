<template>
  <p>ola</p>
  <!-- <GestaoPedidos @pedidoSelected="consultaPedido($event)" /> pedro -->
</template>

<script setup>
//import GestaoPedidos from "@/components/pedidos/GestaoPedidos.vue"; // @ is an alias to /src
import router from '@/router'



function consultaPedido(item) {
  switch (item.objeto.tipo) {
    case "Classe":
      router.push("/classes/showPedido/" + item.codigo);
      break;
    default:
      router.push("/pedidos/" + item.codigo);
  }
}

</script>
