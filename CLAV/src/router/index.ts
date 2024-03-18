/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
//import { setupLayouts } from 'virtual:generated-layouts'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/index.vue"),
    meta: {levels: [0,1,2,3,4,5,6,7], tabAtiva: "CLAV", ent: true}
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
  {
    path: "/entidades/consultar",
    name: "entidades",
    component: () => import("@/pages/entidades/Entidades.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7] }
  },
  {
    path: "/tipologias/consultar",
    name: "tipologias",
    component: () => import("@/pages/tipologias/Tipologias.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7] }
  },
  {
    path: "/legislacao/consultar",
    name: "legislacao",
    component: () => import("@/pages/legislacao/Legislacao.vue"),
    meta: { levels: [0, 1, 2, 3, 3.5, 4, 5, 6, 7] }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
