// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxNDM5Mjk0NCwiZXhwIjoxNzE0NDIxNzQ0fQ.G7W7TGyYxfLDMRvWXYGt3rg49WkFw5bYXvm2Agw_bpWqVSddn_NAmTguEcdUgzNJftgvHYgTfhMi1V_e1bH3Khp1AO1uoh5c9wElN34ox6_RMsdxzxAXZZgguZ50LOY98LZVyay1IYjmCwg6iG7Lrv7324UDrn3UsEOnjNvCusohvHtswCTj5Fa6-HFoosir-brFvZD2ZrWXnsMERwBdTwQSW06zE5NZVyXKvLwY4qvKBZWHIBw-24V9oV4oDYL5iu0eZmf0X7nWrRJcprupCt61xXRDDESOisvF8juxtibbI4gLsVxoofuEtjyHnL4Bi5aQ1waum5lzX76HKXaprg",
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
