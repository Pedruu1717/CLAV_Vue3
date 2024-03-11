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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
