// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcwOTIyMDc2OSwiZXhwIjoxNzA5MjQ5NTY5fQ.gB9I2ayClejK0Ns96zoyuYynRtyZPUCJoaeka1rmPWXyIeyPoHpPDLyq8nkLyIuJRo4AQEU-QHDD-ky31j3aYi4EJ2Y74ZSgK-YxCeZq_V_k2ModN8EsOV6zugcx6BSNNyenmfvvDRAoL5NCXhL8Vwk3TH_B-rM3tZfo4rtWjkba1S51McZhdLe1Gtoh7Pn4dKQZmDoLnLODFmO1Zedbb2HW0vE10Aeps9ZOUNN8Dpc4TjTpXTyR8J3kHW0S1REPgEOWAqhEFanugC7ZHix22zcPSjVCCdDyFYGfTJUQo81lCNNfeOoYfPv9OsTl3-FPrbhxQ1XBXX0_NSAMDtP6Ig",
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
