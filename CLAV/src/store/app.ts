// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "",
      token: "",
      clavToken: "",
      entidade: "",
    }
  },
  persist: true, // Pinia persisted state plugin
  actions: {
    guardaTokenCLAV(clavToken: string) {
      this.clavToken = clavToken;
    },
    guardaTokenUtilizador(token: string) {
      this.token = token;
    },
    guardaNomeUtilizador(name: string) {
      this.name = name;
    },
    guardaEntidade(entidade: string) {
      this.entidade = entidade;
    }
  },
  /*getters: {
    token: state => state.token
  }*/
})
