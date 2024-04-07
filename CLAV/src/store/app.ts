// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMjUxMDk4NSwiZXhwIjoxNzEyNTM5Nzg1fQ.oiGs_bRRhptlKpC1XNvKVnGmT86kdmt1cbqc-fwunk_WRCIZaXyPKJoNiNiZyofVXcjL_Q_6B6PyMQ63rYJcrV03ZLf-5MHlLoCmD3vA0fM90Xtn59Q47oRMtj3R8MnFuC4tBZTHPcuaL_VucKOpESYspfazs7HhschOKRMSIBNG8zvaHFNcWp7pRC3kgt74WNcMH1-5sz_I50Pg8TzzIqVN6_g8fwYxt_WCZv0tGvOJg1kqL5yfRZRwxSSFEAqenvvRuxQzMyo5jA4h4lRxIcllQQ6gg_dWDIWPjEPYx1RaG3AMwca6ZMW-3_bb7wPn0b5qHoxjlfsaBCtIl_e0wA",
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
