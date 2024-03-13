// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMDMyMzk2NiwiZXhwIjoxNzEwMzUyNzY2fQ.KA6mc7Co6qMKvHy5k_cckKO8X6P9U_yQ_Y0PXA7aV-2kJIkfdHdguZeGcjPTBUoZa1WXeJFMCBOX1JyxKuFrUXtE51U1jz6GhMoCrZ23VRcpIapUzH_T6D0QPCwEOC6_95dt0bW-gQaNBP3Mqw3794BRKhHbbFphBhYFm22aXRSaPN9e7Giftcjk2bmDGGGBM4Sh9jfBMcVXFpS32BIAIIOdNYkbSg3bHc1TvKgBjDZ99_fQrjP5gGNrTcYEExGprn0fox2i0JF5JtnPEBZfrG8qLK_SPP4zeMQdRO93XUREcLxsnMwX8nX6G64vTtPt2Ed-fvpKpNCBaT-VpjLfXQ",
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
