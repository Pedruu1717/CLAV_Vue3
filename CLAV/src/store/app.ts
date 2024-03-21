// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMTAyMTAwMSwiZXhwIjoxNzExMDQ5ODAxfQ.qWMbtQGWYEQnA4cqoCDF4KXfJoHeoTagurlG7w3jt5SKB2o5X7Z7m46pqSdLlpGz5B8UGN-5N-LCUnqrfRju4gef8c5lsH0CZQtaMu3z6m24VbJ26qGLEPr8PjI5OLrbG88597psov2iAH8kSIOm0-u8aD2rS-YxO8va3wjopgKV8q0gcFWzDjrolWTLfHRNMU2usqX2xqcGgfg73wFeKF-dydhlJE94yYxzM4Lgq5xD7SxPTYWy5B6DfSXADCji4Oh5Nuxr26O4XfKC_y4koF6phigeuEz5bqJ9jels6jm0tUIXh8XYl8DKknzkg2HNzgeqZM91xQk2LWlW2rDKtg",
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
