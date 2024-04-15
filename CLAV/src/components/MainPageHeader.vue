<template>
  <!--Iniciar sessão-->
  <v-btn class="btn-iniciar-sessao text-white" rounded="xl" color="green-accent-4" prepend-icon="mdi-key-variant" :text="'INICIAR SESSÃO'"></v-btn>
  <!--Navbar para sm/md/lg/xl screens-->
  <v-tool-bar
    app
    clipped-right
    class="white--text clav-linear-background hidden-xs-only"
  >
    <!--Logotipo CLAV-->
    <v-tooltip bottom color="info">
      <template v-slot:activator="{ on }">
        <v-img
          v-on:click="on"
          :aspect-ratio="1.7778"
          :src="'https://qldclav.dglab.gov.pt/img/logo.41995cc8.svg'"
          @click="go('/')"
          style="cursor: pointer; left: 1%;"
          max-width="160px"
          contain
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </template>
      <span>Voltar à página inicial</span>
    </v-tooltip>      
    
    <!--Botões toolbar CLAV-->
    <v-tabs show-arrows fixed-tabs>
      <v-tab>
      <router-link :to="{name: 'home'}">
        <v-btn :class="(tabAtiva=='CLAV' ? 'text-blue-darken-4' : 'text-white')" flat @click="toggle('CLAV')" :color="(tabAtiva=='CLAV' ? 'white' : 'transparent')" prepend-icon="mdi-home-outline">CLAV</v-btn>
      </router-link>
      </v-tab>      
      <v-tab><v-btn :class="(tabAtiva=='Registo na CLAV' ? 'text-blue-darken-4' : 'text-white')" flat @click="toggle('Registo na CLAV')" :color="(tabAtiva=='Registo na CLAV' ? 'white' : 'transparent')" prepend-icon="mdi-account-plus-outline">Registo na CLAV</v-btn></v-tab>
      <v-menu>
        <template v-slot:activator="{ props: menu }">           
        <v-tab>
          <v-btn :class="(tabAtiva=='Operações' ? 'text-blue-darken-4' : 'text-white')" flat @click="toggle('Operações')" :color="(tabAtiva=='Operações' ? 'white' : 'transparent')" v-bind="menu" prepend-icon="mdi-cog-outline">Operações</v-btn>
        </v-tab>     
        </template>
        <v-card>           
          <v-list class="list">
              <v-list-item>
                <router-link :to="{name: 'lcInfo'}" >
                  <v-btn flat @click="" color="white">Lista Consolidada</v-btn>
                  <router-link :to="{name: 'classes'}" >
                    <v-icon icon="mdi-magnify"/>
                  </router-link>
                </router-link>
              </v-list-item>
              <v-list-item>
                <router-link :to="{name: 'tsInfo'}" >
                  <v-btn flat @click="" color="white">Tabelas de Seleção</v-btn>
                  <router-link :to="{name: 'ts'}" >
                    <v-icon icon="mdi-magnify"/>
                  </router-link>
                </router-link>
              </v-list-item>               
              <v-list-item>
                <router-link :to="{name: 'entInfo'}">
                  <v-btn flat @click="" color="white">Entidades</v-btn>
                  <router-link :to="{name: 'entidades'}" >
                    <v-icon icon="mdi-magnify"/>
                  </router-link>
                </router-link>
              </v-list-item>              
              <v-list-item>
                <router-link :to="{name: 'tipEntInfo'}">
                  <v-btn flat @click="" color="white">Tipologias de Entidades</v-btn>
                  <router-link :to="{name: 'tipologias'}" >
                    <v-icon icon="mdi-magnify"/>
                  </router-link>
                </router-link>
              </v-list-item>
              <v-list-item>
                <router-link :to="{name: 'legInfo'}">
                  <v-btn flat @click="" color="white">Legislação</v-btn>
                  <router-link :to="{name: 'legislacao'}" >
                    <v-icon icon="mdi-magnify"/>
                  </router-link>
                </router-link>
              </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-tab><v-btn :class="(tabAtiva=='Estatística' ? 'text-blue-darken-4' : 'text-white')" flat @click="toggle('Estatística')" :color="(tabAtiva=='Estatística' ? 'white' : 'transparent')" prepend-icon="mdi-chart-line">Estatística</v-btn></v-tab>
      <v-tab><v-btn :class="(tabAtiva=='Documentação' ? 'text-blue-darken-4' : 'text-white')" flat @click="toggle('Documentação')" :color="(tabAtiva=='Documentação' ? 'white' : 'transparent')" prepend-icon="mdi-file-document-outline">Documentação</v-btn></v-tab>
      <v-tab><v-btn :class="(tabAtiva=='Gestão da Plataforma' ? 'text-blue-darken-4' : 'text-white')" flat @click="toggle('Gestão da Plataforma')" :color="(tabAtiva=='Gestão da Plataforma' ? 'white' : 'transparent')" prepend-icon="mdi-tune-variant">Gestão da Plataforma</v-btn></v-tab>
    </v-tabs>
  </v-tool-bar>
</template>

<script setup>
import { ref } from "vue";
import router from '@/router'

var tabAtiva = ref("CLAV")

watch(tabAtiva, (newValue) => {
  tabAtiva.value = newValue;
})

function toggle(btn) {
  tabAtiva.value = btn   
}

function go(url, param) {
  if (url.startsWith("http")) {
    window.location.href = url;
  } else {
    router.push(url);
  }
}
</script>

<style scoped>
.btn-iniciar-sessao {
  position: absolute; 
  right: 1%; 
  margin-top: 30px;
}

.v-tab {
  text-transform: none !important;
  font-weight: bold !important;
  color: #f3f7fc !important;
  fill: #f3f7fc !important;
  min-width: 250px !important;
}

.theme--dark.v-footer,
.theme--dark.v-sheet,
.theme--dark.v-card {
  color: #e5e5e5 !important;
}

.v-menu__content {
  text-align: center;
  background-color: #09337f !important;
  max-width: 180px !important;
}

.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.v-list-item__title {
  font-size: 0.85rem !important;
  font-weight: 500;
}

.v-application .primary--text {
  color: #3899b7 !important;
  fill: #3899b7 !important;
}
</style>
