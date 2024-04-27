// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxNDI0NzkxNSwiZXhwIjoxNzE0Mjc2NzE1fQ.buBTYqr4dUzCJHWd6QMpcY4S4gwcbW9soSNPRBY2qBTfD_pTqnS2jBRKLt-7PSlY1aksWwXHRO62F6LpLQ8xRasoURokcfEsu8qMHXjrFuzMF1T5ZDw3Vo4UHkCwHqoo2SAb3lK0IWKkP9SnoNgmFX4mafKgj90mEIG738FtoReq-daSy5zqeQt5EUzLyu_iz1vXr97b1YsvVWLV9DSJHhSoQZH81r47P5Gxk6M1h0P-NEHgq0h8z-KFcXaNscrbj-tochmxcpmQx7_mFoKcKgmH12XSgw1kJlbGUIFU7XFENnpprrAy-gvp6s5_fgZVLSPwdGDAc1LAXBASNvAV9A",
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
