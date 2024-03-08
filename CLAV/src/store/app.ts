// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcwOTkwMzgzNiwiZXhwIjoxNzA5OTMyNjM2fQ.VfNxbNmXpOtJZiM1knl82fyHq159gwF7pALJhmBzXyl70M5nm3pWwdZq0UGG1V7a_TasoQ8GLzon3jVKqWB7qofXj43WVwIDeDrHPfC2Mvof8a5SnlbJDQ2ngP54KW3eJemupbGd2bx3eUZwhZbfwwHvVtq7zoR2rjn3ybWfZTgllkLcH-GlmYQIyMAzFaAexX1zUkyFiSzgsVBO_kL3MWRtsy3k5WxOiou7s4sqaWvEc0vP7sIND7VvZx8bXOvLRWxdKnMqdPYTcUgSpzgr5rPtWtbjgFJQKNn-djko9K7alwHaKm6erekprM_X6gTVt2I8bDi9dAkVsJNFUa-1PQ",
      clavToken: "",
      entidade: "ent_A3ES",
    }
  },
  persist: true, // Pinia persisted state plugin
  actions: {
    guardaTokenCLAV() {
      this.clavToken = "";
    },
    guardaTokenUtilizador() {
      this.token = "";
    },
    guardaNomeUtilizador() {
      this.name = "";
    },
    guardaEntidade() {
      this.entidade = "";
    }
  },
  /*getters: {
    token: state => state.token
  }*/
})
