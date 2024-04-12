// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMjkxODg3NSwiZXhwIjoxNzEyOTQ3Njc1fQ.cxNzEdJtxoycj8t1aZr8lefjt2TpRuodisCHAMfzGXT1D68IGC3yeeBQQ_cz2OCjZUqDdJUDXlPxTqq-lgmpMe8iUAZmab2lIAVjBcCRLtesaV6oRE5RuZQ2X4Qzpt4NDRdFd9JXSKJ-kdjw2-Lgr8RCH5TLxe5fSUa__D-3LfQM3lrnJmvO9Nuw0MhFXMWRzkdxDbVPRaCigQ4i8Phn3AZO3xTFKwlEDwqRXE7-Jwh3kmjH9jKwK650Kux1ZQJMaSzAsXKFpuXidWMzDgG6piW61m1IPHMPc85L267hbE3a2m-X_ySP1GW9snIqeER6oGDdKkiuuZ91Wc6MXBvKig",
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
