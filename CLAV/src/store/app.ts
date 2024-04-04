// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMjIzOTA1MywiZXhwIjoxNzEyMjY3ODUzfQ.pCLxOkoDPHK9M5xRAy6nyQ_CYtYG2iAynDPQUxnhX7QG_xTXF59a8mE0tdVAyiq9WmytT1IBvhn2BdFerI6wUifiW5Nu0VuJX4-t1jeyEdu3WFQRT7iyL-TBsCiBsDGvDl4eJpltjbFAkytnRR87wecB5Pj-D8FQXGwwgoazM5mwoZLE25UE1bwVYuUouZh_p39XGE2d7bg6kwhyaxpDcPnQzsmelNWEtWPpR5SI_Ye7NuD5vVnV2m14oN5ucdosrS16AgWXo4e_AAkY-bB_e3eSXPcLdASSBNHzeB-Bnj0Ui5qAQCcrhAPuJ_J1LCphjpZw7LvNGp_Rll9OBHgseg",
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
