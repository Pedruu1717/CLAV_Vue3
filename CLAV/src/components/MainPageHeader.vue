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
            :src="'@/assets/logo.svg'"
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
      <v-btn
        v-if="!store.name"
        to="/users/autenticacao"
        rounded
        color="#399D44"
        class="green--text text--darken-3 mt-1"
        :class="{ 
          'px-12': display.lgAndUp,
          'px-8': display.mdAndDown,
        }" 
        id="authenticate-button"
      >
        <unicon
          name="login-icon"
          width="21"
          height="21"
          viewBox="0 0 20.711 20.862"
          fill="#ffffff"
        />
        <p class="d-inline ml-3 white--text">Iniciar Sessão</p>
      </v-btn>

      <!--Notificações-->
      <v-btn
        v-if="store.name"
        @click="router.push('/users/painel')"
        icon
        color="primary"
      >
        <v-badge v-if="n > 0" color="error" overlap>
          <unicon
            name="perfil-icon"
            width="24"
            height="24"
            viewBox="0 0 20.71 23.677"
            fill="#e5e5e5"
          />
          <template v-slot:badge>
            {{ n }}
          </template>
        </v-badge>
        <unicon
          v-else
          name="perfil-icon"
          width="24"
          height="24"
          viewBox="0 0 20.71 23.677"
          fill="#e5e5e5"
        />
      </v-btn>

      <!--Definições-->
      <v-btn
        class="white--text"
        v-if="store.name"
        @click="drawerDefinicoes"
        text
      >
        <p class="mr-2">{{ store.name }}</p>
        <unicon
          name="arrow-down-icon"
          width="13"
          height="13"
          viewBox="0 0 37.262 20.71"
          fill="#e5e5e5"
        />
      </v-btn>

      <!--Extensão para as tabs-->
      <template v-slot:extension>
        <v-tabs
          grow
          dark
          show-arrows
          color="secondary"
          slider-color="secondary"
          :icons-and-text="display.mdAndDown"
        >
          <v-container class="pa-0" v-for="tab in tabsAcessiveis" :key="tab.titulo">
            <!--Tab sem menus-->
            <v-tab
              v-if="!tab.menu"
              :class="{ active: tab.titulo == tabAtiva.value }"
              class="fill-height"
              @click="go(tab.url)"
            >
              <p class="hidden-lg-and-up">{{ tab.titulo }}</p>
              <unicon
                v-if="tab.icon"
                :name="tab.icon.nome"
                width="22"
                height="22"
                :viewBox="tab.icon.viewbox"
              />
              <p class="ml-3 hidden-md-and-down">{{ tab.titulo }}</p>
            </v-tab>
            <v-menu else offset-y open-on-hover max-height="75%" z-index="99999">
              <!--Tabs com menus -->
              <template v-slot:activator="{ on }">
                <v-tab
                  v-on:click="on"
                  :class="{ active: tab.titulo == tabAtiva.value }"
                  @click="tab.url ? go(tab.url) : true"
                  class="fill-height"
                >
                  <p class="hidden-lg-and-up">{{ tab.titulo }}</p>
                  <unicon
                    v-if="tab.icon"
                    :name="tab.icon.nome"
                    width="22"
                    height="22"
                    :viewBox="tab.icon.viewbox"
                  />
                  <p class="ml-3 hidden-md-and-down">{{ tab.titulo }}</p>
                </v-tab>
              </template>
              <!--Lista de opções dos menus-->
              <v-list color="neutralblue">
                <v-list-item
                  class="mb-3 pa-2 mx-2"
                  v-for="(menuLink, i) in tab.menu"
                  :key="menuLink.opcao"
                  @mouseleave="hoveropt.value ? (hover.valueOf = true) : (hover.valueOf = false)"
                  @mouseover="
                    hover.valueOf = true;
                    activeItem.value = i;
                  "
                >
                  <!--Opção-->
                  <v-row @click="go(menuLink.url)" justify="center" class="white--text">
                    {{ menuLink.opcao }}
                  </v-row>
                  <!--Subopções-->
                  <transition name="opcoes">
                    <div v-if="hover.value && i === activeItem.value && menuLink.acoes" class="acoes">
                      <div
                        v-for="action in menuLink.acoes"
                        :key="action.name"
                        class="acao"
                      >
                        <!--Utiliza caixa de dialogo para alterar legislação/tipologia/entidade-->
                        <v-btn
                          v-if="action.url.includes('alterar')"
                          @click.prevent="openDialog(action)"
                          icon
                          class="white--text"
                          color="neutralblue"
                          @mouseover="hoveropt.valueOf = true"
                          @mouseleave="hoveropt.valueOf = false"
                        >
                          <unicon
                            :name="action.icon"
                            width="22"
                            height="22"
                            viewBox="0 0 20.71 20.697"
                            fill="#ffffff"
                          />
                        </v-btn>
                        <!--Subopção-->
                        <v-btn
                          v-else
                          @click.prevent="go(action.url)"
                          icon
                          class="white--text"
                          color="neutralblue"
                          @mouseover="hoveropt.valueOf = true"
                          @mouseleave="hoveropt.valueOf = false"
                        >
                          <unicon
                            :name="action.icon"
                            width="22"
                            height="22"
                            viewBox="0 0 20.71 20.697"
                            fill="#ffffff"
                          />
                        </v-btn>
                      </div>
                    </div>
                  </transition>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-container>
        </v-tabs>
      </template>

      <!--Caixa de dialogo para importar legislação/tipologia/entidade-->
      <CaixaDeDialogo
        v-if="alternar"
        :ativo="alternar"
        :tipo="tipo"
        @fechar="alternar = !alternar"
      />
    </v-app-bar>

    <!--Navbar para xs (mobile) screens-->
    <v-app-bar
      flat
      id="mobile-toolbar"
      class="clav-linear-background hidden-sm-and-up toolbar white--text"
    >
      <v-toolbar-title @click="goRoute('/')">
        <p class="title-letters-md font-weight-bold d-inline">CLAV -</p>
        <p
          class="subtitle-letter-md font-weight-light d-inline text-wrap"
          v-if="store.name == ''"
        >
          Classificação e Avaliação da Informação Pública
        </p>
        <p
          class="subtitle-letter-md font-weight-light d-inline text-wrap"
          v-if="store.name != ''"
        >
          {{ store.entidade.split("_")[1] }}
        </p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="store.name != ''"
        @click="drawerNotificacoes"
        icon
        color="blue"
      >
        <v-badge color="red" :content="n" overlap>
          <unicon
            name="perfil-icon"
            width="24"
            height="24"
            viewBox="0 0 20.71 23.677"
            fill="#e5e5e5"
          />
        </v-badge>
      </v-btn>
      <v-btn
        v-if="store.name != ''"
        @click="drawerDefinicoes"
        text
        dark
        rounded
        class="mr-8"
        id="user-button"
      >
        <p class="text-wrap">{{ store.name }}</p>
        <unicon
          name="arrow-down-icon"
          width="15"
          height="15"
          viewBox="0 0 37.262 20.71"
          fill="#e5e5e5"
        />
      </v-btn>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="fade-transition">
        <template v-slot:activator="{ on }">
          <v-btn v-on:click="on" icon dark>
            <unicon
              name="menu-icon"
              width="24"
              height="24"
              viewBox="0 0 20.71 17.258"
              fill="#ffffff"
            />
          </v-btn>
        </template>
        <v-card class="toolbar">
          <v-app-bar flat class="clav-linear-background white--text">
            <v-toolbar-title v-if="store.name == ''" @click="goRoute('/')">
              <p class="title-letters-md font-weight-bold d-inline">CLAV</p>
            </v-toolbar-title>
            <v-toolbar-title
              v-if="store.name != ''"
              @click="goRoute('/')"
              style="cursor: pointer"
            >
              <p class="title-letters-md font-weight-bold d-inline">CLAV -</p>
              <p class="subtitle-letter-md font-weight-light d-inline text-wrap">
                {{ store.entidade.split("_")[1] }}
              </p>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              to="/users/autenticacao"
              @click="dialog.valueOf = false"
              v-if="store.name === ''"
              rounded
              color="#399D44"
              class="blue--text text--darken-3 px-3 mr-3"
              id="authenticate-button-mobile"
            >
              <unicon
                name="login-icon"
                width="20"
                height="20"
                viewBox="0 0 20.711 20.862"
                fill="#ffffff"
              />
              <p class="d-inline ml-3 white--text">Iniciar Sessão</p>
            </v-btn>
            <v-btn icon dark @click="dialog.valueOf = false">
              <v-icon color="error">close</v-icon>
            </v-btn>
          </v-app-bar>
          <v-list rounded two-line>
            <v-container class="pa-0" v-for="tab in tabsAcessiveis" :key="tab.titulo">
              <v-list-item
                v-if="!tab.menu"
                @click="
                  go(tab.url);
                  dialog.valueOf = false;
                "
              >
                <v-list-item-title class="px-2 font-weight-bold">
                  <unicon
                    v-if="tab.icon"
                    :name="tab.icon.nome"
                    width="24"
                    height="24"
                    :viewBox="tab.icon.viewbox"
                    fill="black"
                  />
                  <p class="ml-2 d-inline mobile-menu-link">{{ tab.titulo }}</p>
                </v-list-item-title>
              </v-list-item>

              <v-list-group v-if="tab.menu">
                <template v-slot:activator>
                  <v-list-item-title class="px-2 font-weight-bold">
                    <unicon
                      v-if="tab.icon"
                      :name="tab.icon.nome"
                      width="24"
                      height="24"
                      :viewBox="tab.icon.viewbox"
                    />
                    <p class="ml-2 d-inline mobile-menu-link">{{ tab.titulo }}</p>
                  </v-list-item-title>
                </template>
                <v-list-item @update:selected="selected" v-for="menuLink in tab.menu" :key="menuLink.opcao">
                 <!-- <v-list-item-content> -->
                    <v-list-item-title class="text-wrap">
                      <v-row align="center">
                        <v-col
                          cols="8"
                          @click="
                            go(menuLink.url);
                            dialog.valueOf = false;
                          "
                        >
                          {{ menuLink.opcao }}</v-col
                        >
                        <!--Subopções-->
                        <v-col
                          cols="1"
                          v-for="action in menuLink.acoes"
                          :key="action.name"
                        >
                          <!--Utiliza caixa de dialogo para alterar legislação/tipologia/entidade-->
                          <v-btn
                            v-if="action.url.includes('alterar')"
                            @click.prevent="
                              openDialog(action);
                              dialog.valueOf = false;
                            "
                            icon
                          >
                            <unicon
                              :name="action.icon"
                              width="22"
                              height="22"
                              viewBox="0 0 20.71 20.697"
                              fill="#000000"
                            />
                          </v-btn>
                          <!--Subopção-->
                          <v-btn
                            v-else
                            @click.prevent="
                              go(action.url);
                              dialog.valueOf = false;
                            "
                            icon
                          >
                            <unicon
                              :name="action.icon"
                              width="22"
                              height="22"
                              viewBox="0 0 20.71 20.697"
                              fill="#000000"
                            />
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-list-item-title>
                  <!--</v-list-item-content>-->
                </v-list-item>
              </v-list-group>
            </v-container>
          </v-list>
        </v-card>
      </v-dialog>
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

const hover = ref(false)
const hoveropt = ref(false)
const activeItem = ref(-1)
const snackbar = ref(false)
const dialog = ref(false)
const color = ref("")
const timeout = ref(4000)
const text = ref("")
const counter = ref(10)
const level = ref(0)
const tabAtiva = ref("CLAV")
const docs = ref(null)

// para os dialogs
const alternar = ref(false)
const tipo = ref(null)

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
 
// watch('store.name', (newValue) => {
//  navbar.value[0].titulo = newValue ? store.value.state.entidade.split('_')[1] : 'CLAV';
// })

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

function drawerNotificacoes() {
  $emit("drawerNotificacoes");
}

function drawerDefinicoes() {
  $emit("drawerDefinicoes");
}

function fecharSnackbar() {
  snackbar.value.valueOf = false;
}

async function testJWT() {
  //var res = verifyTokenUser();
  //alert(JSON.stringify(res));
}

//created: async function () {
  //level.value = userLevel();
  tabAtiva.value = route.meta.tabAtiva;
  vuetify.theme.dark = false; //adicionar variavel para alterar o valor
//}
</script>

<style scoped>
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
