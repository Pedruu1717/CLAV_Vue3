/**
 * router/index.ts
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/index.vue"),
    meta: {levels: [0,1,2,3,4,5,6,7], tabAtiva: "CLAV", ent: true}
  },
  // Routes das classes
  {
    path: "/lcInfo",
    name: "lcInfo",
    component: () => import("@/pages/paginasInfo/ListaConsl.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7], tabAtiva: "Operações" }
  },
  {
    path: "/classes/consultar",
    name: "classes",
    props: true,
    component: () => import("@/pages/classes/Classes.vue"),
    meta: {levels: [0,1,2,3,4,5,6,7], tabAtiva: "Operações", ent: true}
  },
  {
    path: "/classes/consultar/c:idClasse",
    name: "consultaClasse",
    props: true,
    component: () => import("@/pages/classes/ClassesConsulta.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7], tabAtiva: "Operações" }
  },
  // Routes das entidades
  {
    path: "/entidades",
    name: "entInfo",
    component: () => import("@/pages/paginasInfo/Entidade.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7], tabAtiva: "Operações" }
  },
  {
    path: "/entidades/consultar",
    name: "entidades",
    component: () => import("@/pages/entidades/Entidades.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7] }
  },
  // Routes da legislação
  {
    path: "/legislacao",
    name: "legInfo",
    component: () => import("@/pages/paginasInfo/Legislacao.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7], tabAtiva: "Operações" }
  },
  {
    path: "/legislacao/consultar",
    name: "legislacao",
    component: () => import("@/pages/legislacao/Legislacao.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7] }
  },
  // Routes das tipologias
  {
    path: "/tipologias",
    name: "tipEntInfo",
    component: () => import("@/pages/paginasInfo/TipEntidade.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7], tabAtiva: "Operações" }
  },
  {
    path: "/tipologias/consultar",
    name: "tipologias",
    component: () => import("@/pages/tipologias/Tipologias.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7] }
  },
  // Routes das tabelas de seleção
  {
    path: "/tsInfo",
    name: "tsInfo",
    component: () => import("@/pages/paginasInfo/TabelaSelecao.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7], tabAtiva: "Operações" }
  },
  {
    path: "/ts/consultar",
    name: "ts",
    component: () => import("@/pages/tabSel/TabSel.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7] }
  },
  // Routes da gestão de utilizadores
  {
    path: "/users/autenticacao",
    name: "autenticacao",
    component: () => import("@/pages/users/Autenticacao.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7] }
  },
  {
    path: "/users/login",
    name: "login",
    component: () => import("@/pages/users/Login.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7] }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
