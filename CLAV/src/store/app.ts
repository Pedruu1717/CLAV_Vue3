// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMDc1MzQ4MiwiZXhwIjoxNzEwNzgyMjgyfQ.x_jhX6cUi8rC3X4ak1IVlr6wqnB-bSvBBHpCbmHC0tAbkGr1SJSsrQC6szhFxuVQYI4Ql0Lqot5zN1yr71xLe7MyOseDTYX5WzTJ94VV6D7XcinqQZJo_iGs6vQj9lZFQ06iu3xfmQFOlezxcxvrmRFvJfeF-OZkbyWF0cS-eTmClFxGvCqkcKHLR9B59Jb8O3jQmdEN6nUtr6Breiam40puO1Ut2YdQDX8cG6cusIkB4saGgkNfhJU2z7geEWGvMDRUGHG2s6uSoV-xMM605oojmgv247hWQc-381lbzx3Xce_r4OfhDwz6qqttTMrgiTVwg9evJceau_dH1qkN-w",
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
