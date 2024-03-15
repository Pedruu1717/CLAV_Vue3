// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMDUyOTY1MywiZXhwIjoxNzEwNTU4NDUzfQ.SCl125kr-BivBtRRAQ21ZvTIGZ_8CQ-JqIZg3Sn0nF5_m6T9lik0PQViuI9Qi9WhWG20wBpwkj17TuI8jg4oKgTaXy0eIekNM7axFaVn2hEZ01i_Le9sAzGTrTTlAAz_CxN4o4avZtwouwfFPFy9O5o75WwWlioZUindP8jf_5F0RnL8-LLZ7CVzWXduytHPJ_EK62DJF2QNxYE-l2eWsseAfOeoMjPzDDaRTEeNxWt1N2kAil4C74nBJ8jw91z8L16aFU3V-WpXYCnwVw9Kd4C_H3AyOHy4iyp7i6o30mmnQglNBpA9xkunXl5zDMNEo0ulx6iiaL-2HD0wZFx7WA",
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
