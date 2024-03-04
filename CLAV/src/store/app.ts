// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcwOTU0Mzc3NywiZXhwIjoxNzA5NTcyNTc3fQ.DOt41SIVmqs26kn42iX8fbZTsSX2kO7HGYxZmt3qZ7msuFqKnYQxZkO3xwXrSyIx0UgVzXEMCaJKr5s7som75lby_bJ8sxoNwDO0xLCd7wBDACG8jUq5a0eNEjO6NuYdPwa7SCtjYu4oKGoYYFrPCDHIHF8oVowsPff8DtN8AK__rBUApBJV3_uUnVSmhpf76G0i_mYra2MCM6E049gPw75iGKK7AO8uKVOZ1Zu3L-vRwQxGT1F66wqDumoh86sm0q0pfaUl-fHOZlLXpjw2HTjqpcyqF50nmq84Kaf2Bn0dSH3-88BjxxsQCwqgb0kNSYGGrX9A1EY7VRdLnVshlA",
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
