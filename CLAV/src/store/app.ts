// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMTgwOTM3NSwiZXhwIjoxNzExODM4MTc1fQ.ebLJorVkiohJZwSu8HFB5RYg2g9IUPcQuI1aR1cG8sxqb9tPHJxhBIgkIlLj8SRl8yQPdXq0sej9Ewkew8nUsYgqfV40HZt-Mnao0W9jX7jTX6zUn2hIWOQAaFFh80Ri2pwus8NxxEu12qZ9SG3C-7AW8xLiVImHSvzsghGDsbgzlqWfCL8SDuYLiUNpoM3uSR2qM--754BaR9jrBxvaZExAiGD_NMKXWqeTevIQMwaZxldaKctquABEAlnXSLzLvtkYNT_qdEFLnjitRKNE1PsOEJBQ-OZHrqLsPpfj2DAuSvH4xIDb1i06SNbm8WJHt3ocf6uoN_WlgIWegz_VcQ",
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
