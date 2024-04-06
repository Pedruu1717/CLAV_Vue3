// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMjQwNzcwNywiZXhwIjoxNzEyNDM2NTA3fQ.lyQ8EUkLczpgwmK-H9Cv_M_-nGIGeS_5A2381Rj1BNBDma523ymV1kBjceFdOTdaLIiaHoPI2IxHxine9WPMQqVZIOx9e9-lNIji75gvbnPL6E0t1qD9UkJnz9fbqqb0GeJ9CnM0eadCTVuET_0fraiGd7CmCPL6iwgNuoh-8se5P7WPuY21gXGd2iEeN3ETUBliMQW-YrpR4LnfsXZsbx6dJEqcO9yG7J5ZQmRxJWGJJB6Be9Ux0ZUEraDPpXKVDVRpRjTvrgI3yqlsMLGjMArGM8gP6ElXeUtk3pGe6Pn1zdlyDTF68ojYRzPr5LFHpWet8NS4D3Qv9H89l0SvdQ",
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
