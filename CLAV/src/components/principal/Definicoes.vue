<template>
  <v-navigation-drawer app :value="drawer" width="320px" clipped right>
    <v-list dense rounded>
      <!--<v-list-item-group color="primary">-->
        <v-list-item @click="router.push('/users/pedidos')">
          <!--<v-list-item-content class="font-weight-medium white--text">-->
            {{ store.state.name }}
            <!--</v-list-item-content>-->
          <!--<v-list-item-icon>-->
            <v-icon color="secondary">account_circle</v-icon>
          <!--</v-list-item-icon>-->
        </v-list-item>

        <v-list-item @click="vuetify.theme.dark = !vuetify.theme.dark">
          <!--<v-list-item-content>-->
            <p class="font-weight-medium white--text">Tema</p>
          <!--</v-list-item-content>-->
          <v-icon v-if="vuetify.theme.dark" size="32" class="white--text"
            >lightbulb</v-icon
          >
          <v-icon v-else size="28" class="white--text">lightbulb_outline</v-icon>
        </v-list-item>

        <v-list-item @click="router.push('/users/alteracaoPassword')">
          <!--<v-list-item-content>-->
            <p class="font-weight-medium" id="alterarPasswordText">Alterar Password</p>
          <!--</v-list-item-content>-->
          <unicon
            name="alterar-password-icon"
            width="22"
            height="22"
            viewBox="0 0 20.71 20.404"
            fill="#ffd54f"
          />
        </v-list-item>
        <v-list-item @click="logoutUtilizador">
          <!--<v-list-item-content>-->
            <p class="font-weight-medium" id="terminarSessaoText">Terminar sessão</p>
          <!--</v-list-item-content>-->
          <unicon
            name="terminar-sessao-icon"
            width="22"
            height="22"
            viewBox="0 0 20.71 23.481"
            fill="#ef5350"
          />
        </v-list-item>
      <!--</v-list-item-group>-->
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import store from '@/store'
import { defineProps } from 'vue'

const props = defineProps(["level", "drawer"])
 
function logoutUtilizador() {
  //socket.disconnect();
  router.push("/users/logout");
}

</script>

<style scoped>
#drawer-title {
  font-size: 1.07rem !important;
}
.theme--light.v-navigation-drawer {
  background: linear-gradient(to bottom, #19237e 0%, #0056b6 100%);
  border-radius: 0 0 0 20px;
}
theme--dark.v-footer,
.theme--dark.v-sheet,
.theme--dark.v-card {
  background-color: transparent !important;
}
.v-toolbar {
  box-shadow: none !important;
}
#alterarPasswordText {
  color: #ffd54f !important;
}
#terminarSessaoText {
  color: #ef5350 !important;
}
</style>
