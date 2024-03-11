// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMDE1MTkyMCwiZXhwIjoxNzEwMTgwNzIwfQ.wRMRe1ib6fSVrjT4asrorOAJAWuanWmaB1vUZReEA1-e0oKn2GtAF3k8kY12c_xgSJhgVgi34OW7-sw4MVlm9zmHvKXNlXl9HUdgUIieJ_V9HwIQlftFzAguRD35um8tyu0Xvstk5J29uGkeEog2AY9kQTNpFyguzFNCLgqUIhpmyterDDV4Sr8UQYdcZ85n6KJN13EaKTxub_jK_nYtppgP2kkaNynr_zRPCGZL2YeIKjQN98otXWONzRr33bI2ij0iQdJgDzz2-8_zugm8fRjqnRAdCmHeYYGD4b1G0Wq1pKLlSZsMvYsAVIonPA3He2e2tL3Y2N3mAnNc5Tr_xA",
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
