<template>
  <div>
    <!--Navbar para sm/md/lg/xl screens-->
    <v-app-bar
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
            style="cursor: pointer"
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

      <v-spacer></v-spacer>

      <!--Botões toolbar CLAV-->
      <!--Iniciar sessão-->
      <v-btn rounded="xl" color="teal-accent-4" prepend-icon="mdi-key-variant">INICIAR SESSÃO</v-btn>

      <template v-slot:extension>
        <v-tabs show-arrows fixed-tabs>
          <v-tab>
          <!--<router-link :to="{name: 'Home'}">-->
            <v-btn @click="toggle('CLAV')" :color="(tabAtiva=='CLAV' ? 'light-blue-darken-4': 'white')" prepend-icon="mdi-home-outline">CLAV</v-btn>
          <!--</router-link>-->
          </v-tab>
          
          <v-tab><v-btn @click="toggle('Registo na CLAV')" :color="(tabAtiva=='Registo na CLAV' ? 'light-blue-darken-4': 'white')" prepend-icon="mdi-account-plus-outline">Registo na CLAV</v-btn></v-tab>
        
          <v-menu>
            <template v-slot:activator="{ props: menu }">           
            <v-tab>
              <v-btn
              @click="toggle('Operações')"
              :color="(tabAtiva=='Operações' ? 'light-blue-darken-4': 'white')"
              v-bind="menu"
              prepend-icon="mdi-wrench"
              >Operações</v-btn>
            </v-tab>     
            </template>
            <v-card color="blue">           
              <v-list class="list">
                  <v-list-item>
                    <!--<router-link :to="{name: 'Classes'}" >-->
                      <v-btn @click="" color="white">Classes</v-btn>         
                    <!--</router-link>-->
                  </v-list-item>             
                  <v-list-item>
                    <!--<router-link :to="{name: 'Entidades'}">-->
                      <v-btn @click="" color="white">Entidades</v-btn>
                    <!--</router-link>-->
                  </v-list-item>
                  <v-list-item>
                    <!--<router-link :to="{name: 'Legislações'}">-->
                      <v-btn @click="" color="white">Legislações</v-btn>
                    <!--</router-link>-->
                  </v-list-item>
                  <v-list-item>
                    <!--<router-link :to="{name: 'Tipologias'}">-->
                      <v-btn @click="" color="white">Tipologias</v-btn>
                    <!--</router-link>-->  
                  </v-list-item>
              </v-list>
            </v-card>
          </v-menu>

          <v-tab><v-btn @click="toggle('Estatística')" :color="(tabAtiva=='Estatística' ? 'light-blue-darken-4': 'white')" prepend-icon="mdi-chart-line">Estatística</v-btn></v-tab>
          <v-tab><v-btn @click="toggle('Documentação')" :color="(tabAtiva=='Documentação' ? 'light-blue-darken-4': 'white')" prepend-icon="mdi-file-document-outline">Documentação</v-btn></v-tab>
          <v-tab><v-btn @click="toggle('Gestão da Plataforma')" :color="(tabAtiva=='Gestão da Plataforma' ? 'light-blue-darken-4': 'white')" prepend-icon="mdi-tune-variant">Gestão da Plataforma</v-btn></v-tab>
        </v-tabs>
      </template>
      
    </v-app-bar>  
  </div>
</template>

<script setup>
import CaixaDeDialogo from "@/components/generic/CaixaDeDialogo.vue";
import { computed, ref, watch } from "vue";
import { useRoute } from 'vue-router'
import vuetify  from '@/plugins/vuetify'
import router from '@/router'
import { useAppStore } from '@/store/app'
//import userLevel from "@/plugins/userLevel";
import { useDisplay } from 'vuetify'
//import { verifyTokenUser } from '@/plugins/verifyToken'

const store = useAppStore()

const props = defineProps(["n"])

const display = ref(useDisplay()) // 'display' substitui 'vuetify.breakpoint' em Vue 3
const route = useRoute()
const token = ref(store.token);

var hover = ref(false)
var hoveropt = ref(false)
var activeItem = ref(-1)
var snackbar = ref(false)
var dialog = ref(false)
var color = ref("")
var timeout = ref(4000)
var text = ref("")
var counter = ref(10)
var level = ref(0)
var tabAtiva = ref("CLAV")
var docs = ref(null)

// para os dialogs
var alternar = ref(false)
var tipo = ref(null)

const navbar = ref([
  {
    titulo: "CLAV",
    icon: {
      nome: "home-icon",
      viewbox: "0 0 25.71 25.81",
    },
    level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
    url: "/",
  },
  {
    titulo: "Registo na CLAV",
    icon: {
      nome: "registo-icon",
      viewbox: "0 0 25.71 25.809",
    },
    level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
    url: "/registo",
  },
  {
    titulo: "Operações",
    icon: {
      nome: "operacoes-icon",
      viewbox: "0 0 25.71 26.68",
    },
    level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
    menu: [
      {
        opcao: "Lista Consolidada",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/lcInfo",
        acoes: [
          {
            url: "/classes/consultar",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "consultar-icon",
          },
          {
            url: "/classes/criar",
            level: [1, 3, 3.5, 4, 5, 6, 7],
            icon: "criar-icon",
          },
          {
            url: "/classes/editar",
            level: [4, 5, 6, 7],
            icon: "alterar-icon",
          },
        ],
      },
      {
        opcao: "Tabelas de Seleção",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/tsInfo",
        acoes: [
          {
            url: "/ts/consultar",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "consultar-icon",
          },
          {
            url: "/ts/criar",
            level: [1, 3, 3.5, 4, 5, 6, 7],
            icon: "criar-icon",
          },
          {
            url: "/ts/importar/csv",
            level: [4, 5, 6, 7],
            icon: "importar-icon",
          },
        ],
      },
      {
        opcao: "Relatórios de Avaliação de Documentação Acumulada",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/radaInfo",
        acoes: [
          {
            url: "/rada/consultar",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "consultar-icon",
          },
          {
            url: "/rada/criar",
            level: [4, 5, 6, 7],
            icon: "criar-icon",
          },
        ],
      },
      {
        opcao: "Autos de Eliminação",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/autosEliminacaoInfo",
        acoes: [
          {
            url: "/autosEliminacao/consultar",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "consultar-icon",
          },
          {
            url: "/autosEliminacao/criar",
            level: [1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "criar-icon",
          },
          {
            url: "/autosEliminacao/importar",
            level: [1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "importar-icon",
          },
          {
            url: "/autosEliminacao/importarCSV",
            level: [1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "importar2-icon",
          }
        ],
      },
      {
        opcao: "Planos de preservação digital",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/planosDePreservacaoDigital",
        acoes: [
          {
            url: "/ppd/lista",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "consultar-icon",
          },
          {
            url: "/ppd/criar",
            level: [1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "criar-icon",
          },
          {
            level: [1, 2, 3, 3.5, 4, 5, 6, 7],
            url: "/ppd/importar",
            icon: "importar-icon",
          },
        ],
      },
      {
        opcao: "Entidades",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/entidades",
        acoes: [
          {
            url: "/entidades/consultar",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "consultar-icon",
          },
          {
            url: "/entidades/criar",
            level: [1, 3, 3.5, 4, 5, 6, 7],
            icon: "criar-icon",
          },
          {
            url: "/entidades/alterar",
            level: [1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "alterar-icon",
          },
        ],
      },
      {
        opcao: "Tipologias de Entidades",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/tipologias",
        acoes: [
          {
            url: "/tipologias/consultar",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "consultar-icon",
          },
          {
            url: "/tipologias/criar",
            level: [1, 3, 3.5, 4, 5, 6, 7],
            icon: "criar-icon",
          },
          {
            url: "/tipologias/alterar",
            level: [1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "alterar-icon",
          },
        ],
      },
      {
        opcao: "Legislação",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/legislacao",
        acoes: [
          {
            url: "/legislacao/consultar",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "consultar-icon",
          },
          {
            url: "/legislacao/criar",
            level: [1, 3, 3.5, 4, 5, 6, 7],
            icon: "criar-icon",
          },
          {
            url: "/legislacao/alterar",
            level: [1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "alterar-icon",
          },
        ],
      },
      {
        opcao: "Termos de Índice",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/termosIndiceInfo",
        acoes: [
          {
            url: "/termosIndice",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "consultar-icon",
          },
        ],
      },
      {
        opcao: "Exportação de dados",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/exportar",
      },
    ],
  },
  {
    titulo: "Gestão de Pedidos",
    icon: {
      nome: "pedido-novo-icon",
      viewbox: "0 0 20.83 20.831",
    },
    level: [1, 3, 3.5, 4, 5, 6, 7],
    url: "/pedidos",
  },
  {
    titulo: "Estatística",
    icon: {
      nome: "estatisticas-icon",
      viewbox: "0 0 20.71 20.75",
    },
    level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
    menu: [
      {
        opcao: "Métricas Gerais",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/gestao/gerais",
      },
      {
        opcao: "Métricas de API",
        level: [3, 3.5, 4, 5, 6, 7],
        url: "/gestao/metrica",
      },
      {
        opcao: "Métricas de Classes",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/gestao/classes",
      },
      {
        opcao: "Tabela de Indicadores",
        level: [3, 3.5, 4, 5, 6, 7],
        url: "/gestao/tabela",
      },
    ],
  },
  {
    titulo: "Documentação",
    icon: {
      nome: "documentacao-icon",
      viewbox: "0 0 25.71 29.383",
    },
    level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
    menu: [
      {
        opcao: "Documentação Técnica de Apoio",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/docsporclasse",
      },
      {
        opcao: "Adicionar Documentação",
        level: [4, 5, 6, 7],
        url: "/documentacaoApoioInfo",
      },
    ],
  },
  {
    titulo: "Gestão da Plataforma",
    icon: {
      nome: "gestao-icon",
      viewbox: "0 0 20.83 20.831",
    },
    menu: [
      {
        opcao: "Utilizadores",
        level: [5, 6, 7],
        url: "/usersInfo",
      },
      {
        opcao: "Utilizadores com chaves API",
        level: [7],
        url: "/gestao/api/listagem",
      },
      {
        opcao: "Perfis de utilizadores",
        level: [1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/permissoesAcesso",
      },
      {
        opcao: "Vocabulários Controlados",
        level: [1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/vocabularios",
      },
      {
        opcao: "Invariantes",
        level: [6, 7],
        url: "/invariantes",
      },
      {
        opcao: "Administração",
        level: [7],
        url: "/gestaoInfo",
      },
      {
        opcao: "Importação/Exportação de Dados",
        level: [4, 5, 6, 7],
        url: "/importExportInfo",
      },
      {
        opcao: "API de dados",
        level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
        url: "/docs",
        acoes: [
          {
            url: "http://clav.di.uminho.pt/v2/docs/",
            level: [0, 1, 2, 3, 3.5, 4, 5, 6, 7],
            icon: "api-icon",
          },
        ],
      },
    ],
  },
])

const tabsAcessiveis = computed(() => {
  store.token;
  return filtraTabs(navbar);  
})

//apenas atualiza o nível quando o valor do token muda
watch(token, async(newToken, oldToken) => {
  //level.value = userLevel();
})

watch(tabAtiva, (newValue) => {
  tabAtiva.value = newValue;
})
 
function toggle(btn) {
  tabAtiva.value = btn   
}

function openDialog(action) {
  if (action.url.includes("tipologias")) tipo.value = "Tipologia";
  else if (action.url.includes("entidades")) tipo.value = "Entidade";
  else tipo.value = "Legislação";
  alternar.value = true;
}

function go(url, param) {
  if (url.startsWith("http")) {
    window.location.href = url;
  } else {
    router.push(url);
  }
}

function filtraTabs(navbar) {
  var filtered = [];
  for (var i = 0; i < navbar.length; i++) {
    var levelsSet = new Set();

    if (navbar[i].menu) {
      navbar[i].menu.forEach((m) => m.level.forEach((l) => levelsSet.add(l)));
    } else {
      navbar[i].level.forEach((l) => levelsSet.add(l));
    }

    var levels = Array.from(levelsSet);
    if (
      levels.includes(level.value) &&
      navbar[i].menu &&
      ((level.value > 0 &&
        store.token != "" &&
        store.name != "") ||
        level.value === 0)
    ) {
      var menu = navbar[i].menu.filter((o) => o.level.includes(level.value));
      menu = JSON.parse(JSON.stringify(menu));
      for (var j = 0; j < menu.length; j++)
        if (navbar[i].menu[j].acoes)
          menu[j].acoes = menu[j].acoes.filter((o) => o.level.includes(level.value));
      filtered.push({
        titulo: navbar[i].titulo,
        icon: navbar[i].icon,
        url: navbar[i].url ? navbar[i].url : undefined,
        menu: menu,
      });
    } else if (
      levels.includes(level.value) &&
      !navbar[i].menu &&
      ((level.value > 0 &&
        store.token != "" &&
        store.name != "") ||
        level.value === 0)
    ) {
      filtered.push({
        titulo: navbar[i].titulo,
        icon: navbar[i].icon,
        level: navbar[i].level,
        url: navbar[i].url,
      });
    }
  }
  return filtered;
}

</script>

<style scoped lang="scss">
@import "@/assets/scss/global";

.v-tab {
  text-transform: none !important;
  font-weight: bold !important;
  color: var(--v-secondary-base) !important;
  fill: var(--v-secondary-base) !important;
  min-width: 250px !important;
}

.active {
  color: #0057b7 !important;
  background-color: #f3f7fc !important;
  border-radius: 10px 10px 0px 0px;
  fill: #0057b7 !important;
}
/*Web css*/
#authenticate-button,
#authenticate-button-mobile {
  box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.4),
    0 2px 4px -1px rgba(255, 255, 255, 0.36);
  background-color: var(--v-success-base) !important;
  text-decoration: none;
}

/* Mobile CSS */
#mobile-toolbar {
  height: 60px !important;
}

#tab-bar {
  margin-top: 15px;
  background: rgba(0, 0, 0, 0.1);
}

.button-pad {
  padding: 0px 20px;
}

.title-letters-lg {
  font-size: 2.4rem;
}

.title-letters-md {
  font-size: 1.8rem;
}

.subtitle-letter-md {
  padding-left: 6px;
  font-size: 1rem;
  vertical-align: text-bottom;
}

.subtitle-letter-lg {
  padding-left: 12px;
  vertical-align: text-bottom;
}

.toolbar-title-sm {
  padding-top: 8px !important;
  line-height: 1 !important;
}

.subtitle-letter-sm {
  vertical-align: unset !important;
}

#authenticate-button-mobile {
  height: 29px !important;
}

#authenticate-button:before,
#authenticate-button-mobile:before {
  background-color: #46c354 !important;
}

#user-button::before {
  background-color: transparent !important;
}

#user-button {
  outline: none !important;
  padding: 0 4px !important;
}

#authenticate-button:hover,
#authenticate-button-mobile:hover {
  background-color: rgb(70, 195, 84, 0.8) !important;
}

#authenticate-button:hover:before,
#authenticate-button-mobile:hover:before {
  color: green;
}

#authenticate-icon {
  vertical-align: bottom;
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

.mobile-menu-link {
  margin-left: 20px;
  margin-top: 10px;
}

.v-application .primary--text {
  color: #3899b7 !important;
  fill: #3899b7 !important;
}

/*CSS Ações rápidas*/
.acoes {
  min-width: 150px !important; /*Para os 4 itens na opção de "Autos de Eliminição" ficarem na mesma linha*/
  position: absolute;
  left: 50%;
  bottom: -30%;
}

.acao {
  display: inline-block;
  position: relative;
  left: -50%;
}

.opcoes-enter-active {
  transition: all 0.3s ease;
}
.opcoes-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.opcoes-enter,
.opcoes-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
