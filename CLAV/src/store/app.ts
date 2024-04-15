// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMzIwMDYwNCwiZXhwIjoxNzEzMjI5NDA0fQ.rH9tx7Ui-476DMF7PGw0Cot-hqZ-FSDuA2TTJHWMpwOPFDyEYlWSwj7LzPhz8y4MBJbipCiX624r5TDc9LmK_HWxiuEo4pSupkQf3TnD6HunMjQaFYXUWSvLGdtZNfFWnf3bH-r7-yd6stlvnZJJowsHolDPPSKJ9c-hwo5B8o-KON85hC_7KZgNidpHdBDZENv_240PSBsDesjbfxjTPQ6DYt8Qhaab4B2Jvdz8T7iLADhLw90vQX-xRLAspR1vpZgzoGuwQ4bZbLy_WLv0OPQ4l5TQPpzfJkd2JAXgzVXrSV1lbvnu1xPZYiMM3GVnS4W0CyGSeMaW-mf2nANDFg",
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
